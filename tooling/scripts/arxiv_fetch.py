#!/usr/bin/env python3
"""Rate-limited arXiv client.

Every arXiv request made by this repository, an agent, or a scheduled job must go
through this module. arXiv's Terms of Use for its APIs (legacy API, OAI-PMH, RSS)
limits ALL machines under your control, taken as a whole, to:

    no more than one request every three seconds, and requests limited to a
    single connection at a time
    -- https://info.arxiv.org/help/api/tou.html

"Our machines as a whole" is the part that is easy to violate by accident: five
category queries in a loop, a retry storm, or two subagents each fetching their
own arXiv page all break it while looking innocent in isolation. So the pacing
and the single-connection rule are enforced HERE, at one choke point, with an
exclusive cross-process lock rather than per-caller conventions:

  * the lock is held for the whole request (not just the sleep), so two
    concurrent callers -- separate processes, separate agents -- cannot have
    two requests in flight at once;
  * the gap is measured from the END of the previous request, so the spacing is
    at least MIN_INTERVAL even when a request itself takes seconds;
  * retries wait at least MIN_INTERVAL and go through the same pacing path, so a
    failure cannot turn into a burst.

Prefer the endpoints arXiv blesses for the job:
  * bulk / catch-up metadata  -> OAI-PMH (``--oai``), the documented preferred
    way to bulk-download or keep up to date (https://info.arxiv.org/help/bulk_data.html)
  * new articles in a category -> RSS (``--rss``)
  * a targeted query           -> the legacy API (``--query``), host export.arxiv.org
Use export.arxiv.org (not the main site, which is for interactive readers) and do
not fetch full texts or PDFs from here: link back to the abstract page instead.

Usage
-----
  python3 tooling/scripts/arxiv_fetch.py --query "cat:cs.CY AND ti:education" --max 20
  python3 tooling/scripts/arxiv_fetch.py --rss cs.CY --rss cs.HC
  python3 tooling/scripts/arxiv_fetch.py --oai cs.CY --days 3
  python3 tooling/scripts/arxiv_fetch.py --selftest-rate     # prove the pacing

All modes print JSON lines on stdout (newest first where the source is dated).
"""

from __future__ import annotations

import argparse
import fcntl
import json
import os
import pathlib
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

# arXiv asks for no more than one request every three seconds. Do not lower this
# and do not add a second code path that reaches arXiv without it.
MIN_INTERVAL = 3.0
MAX_ATTEMPTS = 5
TIMEOUT = 45

# A descriptive User-Agent that names the project, as arXiv's robots guidance asks.
# Keep it free of personal contact details: this file is tracked, and the project
# is identified by its name and its published site, not by an individual.
USER_AGENT = "AIEdKnowledgeBase/1.0 (academic AI-in-education knowledge base)"

API_HOST = "https://export.arxiv.org/api/query"
RSS_HOST = "https://rss.arxiv.org/rss/{category}"
OAI_HOST = "https://export.arxiv.org/oai2"

# Pacing state. Repo-local and gitignored so a clone stays independent, but shared
# by every process in that clone -- which is the scope arXiv's limit applies to.
STATE_DIR = pathlib.Path(
    os.environ.get("AIED_ARXIV_STATE", pathlib.Path(__file__).resolve().parents[2] / ".arxiv-rate")
)
LOCK_PATH = STATE_DIR / "arxiv.lock"
STAMP_PATH = STATE_DIR / "last-request"

ATOM_NS = {
    "atom": "http://www.w3.org/2005/Atom",
    "arxiv": "http://arxiv.org/schemas/atom",
    "opensearch": "http://a9.com/-/spec/opensearch/1.1/",
    "dc": "http://purl.org/dc/elements/1.1/",
    "oai": "http://www.openarchives.org/OAI/2.0/",
}


class _Pacer:
    """Hold an exclusive lock across one arXiv request, spaced from the last one."""

    def __init__(self, interval: float = MIN_INTERVAL):
        self.interval = interval
        self.waited = 0.0
        STATE_DIR.mkdir(parents=True, exist_ok=True)
        self._fh = None

    def __enter__(self):
        self._fh = open(LOCK_PATH, "a+")
        fcntl.flock(self._fh.fileno(), fcntl.LOCK_EX)  # single connection at a time
        try:
            last = float(STAMP_PATH.read_text().strip())
        except (OSError, ValueError):
            last = 0.0
        wait = self.interval - (time.time() - last)
        self.waited = max(0.0, wait)
        if wait > 0:
            time.sleep(wait)
        return self

    def __exit__(self, *exc):
        try:
            STAMP_PATH.write_text(f"{time.time():.3f}\n")
        except OSError:
            pass
        fcntl.flock(self._fh.fileno(), fcntl.LOCK_UN)
        self._fh.close()
        self._fh = None
        return False


def _get(url: str) -> str:
    """One paced, retried GET. Every network call in this file goes through here."""
    last_error: Exception | None = None
    for attempt in range(MAX_ATTEMPTS):
        with _Pacer():
            try:
                req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
                with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
                    return resp.read().decode("utf-8", "replace")
            except urllib.error.HTTPError as e:
                last_error = e
                # 429/503 are arXiv telling us to slow down, not to retry harder.
                if e.code in (429, 500, 502, 503, 504) and attempt < MAX_ATTEMPTS - 1:
                    continue
                raise
            except (urllib.error.URLError, TimeoutError, OSError) as e:
                last_error = e
                if attempt < MAX_ATTEMPTS - 1:
                    continue
                raise
        # Unreachable: the pacing is inside the loop body above.
    raise RuntimeError(f"arXiv request failed after {MAX_ATTEMPTS} attempts: {last_error}")


# --------------------------------------------------------------------------- API


def query(search_query: str, max_results: int = 20, sort_by: str = "submittedDate",
          sort_order: str = "descending") -> list[dict]:
    """Query the legacy API. One request -- callers must not loop this themselves
    without accepting the pacing cost; a multi-category scan pays 3s per category."""
    params = urllib.parse.urlencode({
        "search_query": search_query,
        "sortBy": sort_by,
        "sortOrder": sort_order,
        "max_results": max_results,
    })
    return parse_atom(_get(f"{API_HOST}?{params}"))


def parse_atom(xml_text: str) -> list[dict]:
    out = []
    root = ET.fromstring(xml_text)
    for e in root.findall("atom:entry", ATOM_NS):
        id_el = e.find("atom:id", ATOM_NS)
        title_el = e.find("atom:title", ATOM_NS)
        if id_el is None or title_el is None:
            continue
        raw_id = id_el.text or ""
        aid = raw_id.split("/abs/")[-1]
        base = re.sub(r"v\d+$", "", aid)
        published = (e.findtext("atom:published", default="", namespaces=ATOM_NS) or "")[:10]
        updated = (e.findtext("atom:updated", default="", namespaces=ATOM_NS) or "")[:10]
        authors = [a.findtext("atom:name", default="", namespaces=ATOM_NS)
                   for a in e.findall("atom:author", ATOM_NS)]
        out.append({
            "arxiv_id": base,
            "version": aid if aid != base else "",
            "title": " ".join((title_el.text or "").split()),
            "authors": [a for a in authors if a],
            "published": published,
            "updated": updated,
            "abstract": " ".join((e.findtext("atom:summary", default="", namespaces=ATOM_NS) or "").split()),
            "categories": [c.get("term") for c in e.findall("atom:category", ATOM_NS)],
            "abs_url": f"https://arxiv.org/abs/{base}",
            "source": "arxiv_api",
        })
    return out


# --------------------------------------------------------------------------- RSS


def rss(category: str) -> list[dict]:
    """New announcements in one category (arXiv's RSS feed, an API under the ToU)."""
    xml_text = _get(RSS_HOST.format(category=category))
    out = []
    try:
        root = ET.fromstring(xml_text)
    except ET.ParseError:
        return out
    for item in root.iter("item"):
        link = (item.findtext("link") or "").strip()
        title = " ".join((item.findtext("title") or "").split())
        aid = ""
        m = re.search(r"/abs/([^/?]+)", link)
        if m:
            aid = re.sub(r"v\d+$", "", m.group(1))
        out.append({
            "arxiv_id": aid,
            "title": title,
            "authors": [c.text for c in item.findall("dc:creator", ATOM_NS) if c.text],
            "published": (item.findtext("pubDate") or "").strip(),
            "abstract": " ".join((item.findtext("description") or "").split()),
            "categories": [category],
            "abs_url": link or (f"https://arxiv.org/abs/{aid}" if aid else ""),
            "source": f"arxiv_rss:{category}",
        })
    return out


# --------------------------------------------------------------------------- OAI


def oai(category: str, days: int = 3, max_records: int = 200) -> list[dict]:
    """Catch-up metadata harvest for one category, the way arXiv prefers it.

    ListRecords with a metadataPrefix and a datestamp window, following the
    resumptionToken until done or max_records is reached. Every page costs one
    paced request, so a long window is slow BY DESIGN.
    """
    since = time.strftime("%Y-%m-%d", time.gmtime(time.time() - days * 86400))
    url = (f"{OAI_HOST}?verb=ListRecords&metadataPrefix=arXiv&set={category}&"
           f"from={since}")
    out: list[dict] = []
    token = None
    while True:
        xml_text = _get(url if token is None else f"{OAI_HOST}?verb=ListRecords&resumptionToken={urllib.parse.quote(token)}")
        try:
            root = ET.fromstring(xml_text)
        except ET.ParseError:
            break
        for rec in root.iter("{http://www.openarchives.org/OAI/2.0/}record"):
            meta = rec.find(".//{http://arxiv.org/OAI/arXiv/}arXiv")
            if meta is None:
                continue
            aid = (meta.findtext("{http://arxiv.org/OAI/arXiv/}id") or "").strip()
            base_id = re.sub(r"v\d+$", "", aid)
            out.append({
                "arxiv_id": base_id,
                "title": " ".join((meta.findtext("{http://arxiv.org/OAI/arXiv/}title") or "").split()),
                "authors": [],  # OAI ships structured author blocks; the API/RSS give names plainly
                "published": (meta.findtext("{http://arxiv.org/OAI/arXiv/}created") or "").strip(),
                "abstract": " ".join((meta.findtext(".//{http://arxiv.org/OAI/arXiv/}abstract") or "").split()),
                "categories": [(c.text or "").strip() for c in meta.findall("{http://arxiv.org/OAI/arXiv/}categories")],
                "abs_url": f"https://arxiv.org/abs/{base_id}",
                "source": f"arxiv_oai:{category}",
            })
            if len(out) >= max_records:
                return out
        token_el = root.find(".//{http://www.openarchives.org/OAI/2.0/}resumptionToken")
        token = (token_el.text or "").strip() if token_el is not None else ""
        if not token:
            break
    return out


# --------------------------------------------------------------------------- self-test


def reserve(hold_seconds: float = 0.0) -> float:
    """Claim the single arXiv request window for a caller that is NOT using this
    module's transport.

    Some callers reach arXiv without going through ``_get`` (the browser tool, a
    shell ``curl``, an ingest script). They must still obey the same limit, so
    they call this first and hold the window for as long as their request lasts:

        python3 tooling/scripts/arxiv_fetch.py --reserve --hold 10

    which sleeps until the shared window is free, then holds the exclusive lock
    for ``hold_seconds`` so no other process or agent can have a request in
    flight at the same time. Exiting is the release. Returns the seconds waited.
    """
    with _Pacer() as p:
        if hold_seconds > 0:
            time.sleep(hold_seconds)
        return p.waited


def selftest_rate(n: int = 3) -> int:
    """Prove the pacing by making n real requests and printing the observed gaps.

    Exits non-zero if any gap is under MIN_INTERVAL, so this can be a gate rather
    than a claim: the ToU limit is the kind of thing that silently regresses.
    """
    gaps, starts = [], []
    for i in range(n):
        t0 = time.time()
        try:
            query("cat:cs.CY AND ti:education", max_results=1)
        except Exception as e:  # network trouble should not read as a pacing failure
            print(json.dumps({"error": str(e), "request": i + 1}))
            return 2
        starts.append(t0)
        if i:
            gaps.append(t0 - starts[i - 1])
    ok = all(g >= MIN_INTERVAL - 0.05 for g in gaps)
    print(json.dumps({"requests": n, "gaps_seconds": [round(g, 3) for g in gaps],
                      "min_interval": MIN_INTERVAL, "paced_correctly": ok}))
    return 0 if ok else 1


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description="Rate-limited arXiv client (one request per 3s).")
    ap.add_argument("--query", help="legacy API search_query, e.g. 'cat:cs.CY AND ti:education'")
    ap.add_argument("--max", type=int, default=20, help="max_results for --query")
    ap.add_argument("--rss", action="append", default=[], help="category for the RSS feed (repeatable)")
    ap.add_argument("--oai", action="append", default=[], help="category for an OAI-PMH harvest (repeatable)")
    ap.add_argument("--days", type=int, default=3, help="window for --oai, in days")
    ap.add_argument("--selftest-rate", action="store_true", help="make 3 paced requests and report the gaps")
    ap.add_argument("--reserve", action="store_true",
                    help="claim the arXiv request window for a non-urllib transport (browser, curl, script)")
    ap.add_argument("--hold", type=float, default=0.0,
                    help="with --reserve: hold the window this many seconds, i.e. your request's duration")
    args = ap.parse_args(argv)

    if args.reserve:
        # Print the moment we hold the window: callers (and tests) read this line
        # to prove the spacing, so the timestamp has to be the CLAIM, not startup.
        waited = reserve(args.hold)
        print(json.dumps({"reserved": True, "claimed_at": round(time.time(), 3),
                          "waited_seconds": round(waited, 3), "held_seconds": args.hold,
                          "min_interval": MIN_INTERVAL}))
        return 0

    if args.selftest_rate:
        return selftest_rate()

    wrote = False
    if args.query:
        for r in query(args.query, args.max):
            print(json.dumps(r, ensure_ascii=False)); wrote = True
    for cat in args.rss:
        for r in rss(cat):
            print(json.dumps(r, ensure_ascii=False)); wrote = True
    for cat in args.oai:
        for r in oai(cat, args.days):
            print(json.dumps(r, ensure_ascii=False)); wrote = True
    if not wrote:
        ap.print_help()
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main())