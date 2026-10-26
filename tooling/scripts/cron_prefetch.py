#!/usr/bin/env python3
"""Fetch every configured scan source in one pass and emit a single candidate list.

Why this exists
---------------
The daily cron job used to spend 25-35 agent turns issuing source queries before it could
write anything. On 2026-10-26 the run exhausted its iteration budget mid-ingest and ended
with no summary at all. Fetching is mechanical: it belongs in a script whose output the
agent receives as context, not in the agent's own turn budget.

This script is registered as the cron job's `script`, so its stdout is injected into the
prompt each tick. It reads the source list from `wiki.config.yaml` -> `scan.sources`, which
stays the single source of truth for queries, categories and the relevance bar.

Design rules
------------
* **Fail soft per source.** One dead feed must not lose the other four. A failed source emits
  a record with `"error"` set and the run continues.
* **arXiv stays serialized and paced.** All arXiv traffic goes through arxiv_fetch.py, which
  enforces one request per 3 seconds across processes. Never parallelise it here.
* **No dedupe against the corpus.** That is the agent's job (check-ingested.py plus a title
  read); this script only removes duplicates *within* its own output.
* **Newest first, windowed.** Records older than the window are dropped so the agent sees a
  candidate list it can act on directly.

Usage
-----
    python3 tooling/scripts/cron_prefetch.py                # last N days, stdout
    python3 tooling/scripts/cron_prefetch.py --days 4
    python3 tooling/scripts/cron_prefetch.py --out /tmp/c.json --pretty
    python3 tooling/scripts/cron_prefetch.py --source edarxiv   # one source, for debugging
"""

from __future__ import annotations

import argparse
import datetime as _dt
import json
import os
import re
import subprocess
import sys

REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SCRIPTS = os.path.join(REPO, "tooling", "scripts")


# --------------------------------------------------------------------------------------
# helpers
# --------------------------------------------------------------------------------------

def _norm_title(t: str) -> str:
    """Collapse a title to a comparison key so cross-source duplicates collapse."""
    return re.sub(r"[^a-z0-9]+", "", (t or "").lower())[:120]


def _run(cmd: list[str], timeout: int = 180) -> tuple[int, str, str]:
    try:
        p = subprocess.run(cmd, capture_output=True, text=True, timeout=timeout, cwd=REPO)
        return p.returncode, p.stdout, p.stderr
    except subprocess.TimeoutExpired:
        return 124, "", f"timeout after {timeout}s"
    except OSError as e:  # missing interpreter/script
        return 127, "", str(e)


def _jsonl(text: str) -> list[dict]:
    out = []
    for line in text.splitlines():
        line = line.strip()
        if not line or not line.startswith("{"):
            continue
        try:
            out.append(json.loads(line))
        except json.JSONDecodeError:
            continue
    return out


_ISO = re.compile(r"(\d{4})-(\d{2})-(\d{2})")
_RFC822 = re.compile(
    r"(?:\w{3},?\s+)?(\d{1,2})\s+(\w{3})\s+(\d{4})")


def _norm_date(published: str) -> str:
    """Return YYYY-MM-DD from an ISO timestamp or an RFC 822 RSS date, else ''.

    arXiv's RSS feed emits RFC 822 ("Mon, 26 Oct 2026 00:00:00 -0400"), which a naive
    [:10] slice turns into "Mon, 26 Oc" - unparseable, and it then sorts ahead of every
    ISO date because it starts with a letter.
    """
    if not published:
        return ""
    s = published.strip()
    m = _ISO.search(s)
    if m:
        return "-".join(m.groups())
    m = _RFC822.search(s)
    if m:
        day, mon, year = m.groups()
        months = {k: i for i, k in enumerate(
            ["jan", "feb", "mar", "apr", "may", "jun",
             "jul", "aug", "sep", "oct", "nov", "dec"], start=1)}
        mi = months.get(mon[:3].lower())
        if mi:
            try:
                return _dt.date(int(year), mi, int(day)).isoformat()
            except ValueError:
                return ""
    return ""


def _within(published: str, cutoff: _dt.date) -> bool:
    """True when the date is on/after cutoff. Unknown/unparseable dates pass."""
    norm = _norm_date(published)
    if not norm:
        return True
    try:
        return _dt.date.fromisoformat(norm) >= cutoff
    except ValueError:
        return True


def _record(source: str, title: str, authors, published: str, url: str,
            doi: str = "", abstract: str = "") -> dict:
    if isinstance(authors, str):
        authors = [a.strip() for a in authors.split(";") if a.strip()]
    return {
        "source": source,
        "title": (title or "").strip(),
        "authors": authors or [],
        "published": _norm_date(published),
        "url": url or "",
        "doi": (doi or "").strip(),
        "abstract": (abstract or "").strip()[:1200],
    }


# --------------------------------------------------------------------------------------
# source fetchers - each returns (records, notes)
# --------------------------------------------------------------------------------------

def fetch_arxiv(src: dict, cutoff: _dt.date, notes: list) -> list[dict]:
    """arXiv API per category. Serialized: arxiv_fetch.py owns the 3s pacing."""
    recs = []
    # Require an education term AND an AI term. An education-only OR chain pulls in
    # off-domain work (parliamentary speeches, alignment policy) that the category
    # alone does not exclude, and every such record costs the agent context.
    edu = " OR ".join(f"all:{k}" for k in src.get("keywords", [])[:6]) or "all:education"
    ai = 'all:"artificial intelligence" OR all:LLM OR all:GenAI OR all:generative OR all:chatbot'
    for cat in src.get("categories", []):
        query = f"cat:{cat} AND ({edu}) AND ({ai})"
        cmd = [sys.executable, os.path.join(SCRIPTS, "arxiv_fetch.py"),
               "--query", query, "--max", str(src.get("max_results", 20))]
        rc, out, err = _run(cmd, timeout=240)
        rows = _jsonl(out)
        if rc != 0 and not rows:
            notes.append(f"{src['name']}/{cat}: rc={rc} {err.strip()[:120]}")
        kept = 0
        for r in rows:
            if not _within(r.get("published", ""), cutoff):
                continue
            recs.append(_record(
                src["name"], r.get("title", ""), r.get("authors", []),
                r.get("published", ""), r.get("abs_url", ""),
                abstract=r.get("abstract", ""),
            ))
            kept += 1
        notes.append(f"{src['name']}/{cat}: {len(rows)} returned, {kept} in window")
    return recs


def fetch_arxiv_rss(src: dict, cutoff: _dt.date, notes: list) -> list[dict]:
    """Fallback when the dated query is empty (weekend / API outage)."""
    recs = []
    for cat in src.get("categories", []):
        cmd = [sys.executable, os.path.join(SCRIPTS, "arxiv_fetch.py"), "--rss", cat]
        rc, out, err = _run(cmd, timeout=240)
        rows = _jsonl(out)
        if rc != 0 and not rows:
            notes.append(f"{src['name']}/rss:{cat}: rc={rc} {err.strip()[:120]}")
            continue
        for r in rows:
            if not _within(r.get("published", ""), cutoff):
                continue
            recs.append(_record(
                src["name"] + " (RSS)", r.get("title", ""), r.get("authors", []),
                r.get("published", ""), r.get("abs_url", ""),
                abstract=r.get("abstract", ""),
            ))
        notes.append(f"{src['name']}/rss:{cat}: {len(rows)} returned")
    return recs


def fetch_edarxiv(src: dict, cutoff: _dt.date, notes: list) -> list[dict]:
    """EdArXiv via the OSF API. `-g` is mandatory: the filter[...] brackets glob-expand."""
    recs = []
    n = src.get("max_results", 20)
    for term in ("artificial+intelligence", "generative+AI"):
        url = ("https://api.osf.io/v2/preprints/"
               f"?filter[provider]=edarxiv&filter[title]={term}"
               f"&sort=-date_modified&page[size]={n}")
        rc, out, err = _run(["curl", "-g", "-sS", "--max-time", "60", url,
                             "-H", "Accept: application/vnd.api+json"], timeout=90)
        if rc != 0:
            notes.append(f"{src['name']}/{term}: rc={rc} {err.strip()[:120]}")
            continue
        try:
            payload = json.loads(out)
        except json.JSONDecodeError:
            notes.append(f"{src['name']}/{term}: non-JSON response")
            continue
        rows = payload.get("data", []) or []
        kept = 0
        for r in rows:
            attrs = r.get("attributes", {}) or {}
            links = r.get("links") or {}
            published = (attrs.get("date_published") or attrs.get("date_created") or "")[:10]
            # links.html is the human preprint page; links.self is an API endpoint and
            # links.preprint_doi carries the DOI. Never hand the agent the API URL.
            page = links.get("html") or ""
            if not page:
                pid = r.get("id") or ""
                page = f"https://osf.io/preprints/edarxiv/{pid}/" if pid else ""
            doi = (links.get("preprint_doi") or "").replace("https://doi.org/", "")
            if not _within(published, cutoff):
                continue
            recs.append(_record(
                src["name"], attrs.get("title", ""), attrs.get("authors", []),
                published, page, doi=doi,
                abstract=(attrs.get("description") or "")[:1200],
            ))
            kept += 1
        notes.append(f"{src['name']}/{term}: {len(rows)} returned, {kept} in window")
    return recs


def fetch_psyarxiv(src: dict, cutoff: _dt.date, days: int, notes: list) -> list[dict]:
    script = os.path.join(REPO, src.get("fetcher_script", ""))
    if not os.path.exists(script):
        notes.append(f"{src['name']}: fetcher script missing")
        return []
    rc, out, err = _run([sys.executable, script, "--days", str(max(days, 1))], timeout=240)
    rows = _jsonl(out)
    if rc != 0 and not rows:
        notes.append(f"{src['name']}: rc={rc} {err.strip()[:120]}")
        return []
    recs = []
    for r in rows:
        published = (r.get("published") or r.get("date") or "")[:10]
        if not _within(published, cutoff):
            continue
        recs.append(_record(
            src["name"], r.get("title", ""), r.get("authors", []),
            published, r.get("url") or r.get("link") or r.get("abs_url") or "",
            doi=r.get("doi", ""), abstract=r.get("abstract", ""),
        ))
    notes.append(f"{src['name']}: {len(rows)} returned, {len(recs)} in window")
    return recs


def fetch_openalex(src: dict, cutoff: _dt.date, notes: list) -> list[dict]:
    """Every configured query shape, with the inclusion bar applied inside the client."""
    recs = []
    base = [sys.executable, os.path.join(SCRIPTS, "openalex_fetch.py")]
    for q in src.get("queries", []):
        cmd = base + ["--search", q, *src.get("args", []),
                      "--since", cutoff.isoformat(), "--max", str(src.get("max_results", 25))]
        rc, out, err = _run(cmd, timeout=240)
        rows = _jsonl(out)
        if rc != 0 and not rows:
            notes.append(f"{src['name']}/'{q[:28]}': rc={rc} {err.strip()[:100]}")
            continue
        for r in rows:
            published = (r.get("publication_date") or r.get("published") or "")[:10]
            if not _within(published, cutoff):
                continue
            recs.append(_record(
                src["name"], r.get("title", ""), r.get("authors", []),
                published, r.get("landing_page_url") or r.get("url") or r.get("doi") or "",
                doi=r.get("doi", ""), abstract=r.get("abstract", ""),
            ))
        notes.append(f"{src['name']}/'{q[:28]}': {len(rows)} returned")
    return recs


# --------------------------------------------------------------------------------------
# main
# --------------------------------------------------------------------------------------

def main() -> int:
    ap = argparse.ArgumentParser(description="Fetch all configured scan sources at once.")
    ap.add_argument("--days", type=int, default=None,
                    help="window in days (default: scan.window.default_days from wiki.config.yaml)")
    ap.add_argument("--source", default=None,
                    help="only this source name (case-insensitive substring)")
    ap.add_argument("--out", default=None, help="write JSON here instead of stdout")
    ap.add_argument("--pretty", action="store_true", help="indent the JSON")
    ap.add_argument("--json", action="store_true",
                    help="emit the full JSON instead of the compact index")
    args = ap.parse_args()

    cfg_path = os.path.join(REPO, "wiki.config.yaml")
    try:
        import yaml
        cfg = yaml.safe_load(open(cfg_path, encoding="utf-8")) or {}
    except Exception as e:  # noqa: BLE001 - config problem must be reported, not raised
        print(json.dumps({"error": f"cannot read {cfg_path}: {e}"}), file=sys.stderr)
        return 1

    scan = cfg.get("scan", {}) or {}
    sources = scan.get("sources", []) or []
    days = args.days if args.days is not None else int(
        (scan.get("window") or {}).get("default_days", 3))
    cutoff = _dt.date.today() - _dt.timedelta(days=days)

    notes: list[str] = []
    records: list[dict] = []
    per_source: dict[str, int] = {}

    wanted = (args.source or "").lower()
    for src in sources:
        name = src.get("name", "?")
        if wanted and wanted not in name.lower():
            continue
        stype = src.get("type", "")
        before = len(records)
        try:
            if stype == "arxiv_api":
                got = fetch_arxiv(src, cutoff, notes)
                # RSS fallback only when the dated query produced nothing at all
                if not got:
                    notes.append(f"{name}: dated query empty, trying RSS fallback")
                    got = fetch_arxiv_rss(src, cutoff, notes)
                records.extend(got)
            elif stype == "trove_search":
                records.extend(fetch_psyarxiv(src, cutoff, days, notes))
            elif stype == "openalex":
                records.extend(fetch_openalex(src, cutoff, notes))
            elif stype == "web_search" and "edarxiv" in name.lower():
                records.extend(fetch_edarxiv(src, cutoff, notes))
            else:
                notes.append(f"{name}: unsupported type {stype!r}, skipped")
        except Exception as e:  # noqa: BLE001 - one bad source must not kill the run
            notes.append(f"{name}: EXCEPTION {type(e).__name__}: {e}")
        per_source[name] = len(records) - before

    # dedupe within this output: same normalized title, or same DOI/arXiv id
    seen_t, seen_id, unique = set(), set(), []
    for r in records:
        tk = _norm_title(r["title"])
        idk = ""
        m = re.search(r"(\d{4}\.\d{4,5})", r["url"] or "") or re.search(r"arxiv\.org/abs/([\w.]+)", r["url"] or "")
        if m:
            idk = m.group(1)
        if not idk and r["doi"]:
            idk = r["doi"].lower()
        if (tk and tk in seen_t) or (idk and idk in seen_id):
            continue
        if tk:
            seen_t.add(tk)
        if idk:
            seen_id.add(idk)
        unique.append(r)

    unique.sort(key=lambda r: (r["published"] or "0000-00-00"), reverse=True)

    payload = {
        "window_days": days,
        "window_start": cutoff.isoformat(),
        "candidate_count": len(unique),
        "per_source": per_source,
        "notes": notes,
        "candidates": unique,
    }

    # The full record set goes to a file the agent can grep; stdout stays compact.
    # Injecting ~85 full abstracts (120KB+) into a prompt crowds out the work itself.
    full_path = args.out or os.path.join(
        REPO, "raw", "prefetch", "candidates.json")
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, "w", encoding="utf-8") as fh:
        fh.write(json.dumps(payload, indent=2, ensure_ascii=False) + "\n")

    if args.json:
        print(json.dumps(payload, indent=2 if args.pretty else None, ensure_ascii=False))
        return 0

    # ---- compact index -------------------------------------------------------------
    print(f"SCAN PREFETCH - window {cutoff.isoformat()} .. today ({days}d), "
          f"{len(unique)} candidate(s)")
    print(f"Full records (abstract, authors, doi): {full_path}")
    print("Read a candidate's abstract with:  "
          f"python3 -c \"import json;d=json.load(open('{full_path}'));"
          "print([c['abstract'] for c in d['candidates'] if c['url']=='URL'][0])\"")
    print()
    print("Per source (candidates in window):")
    for name, n in per_source.items():
        print(f"  {n:3}  {name}")
    if notes:
        print()
        print("Per-query detail:")
        for n in notes:
            print(f"   - {n}")
    print()
    print("Candidates, newest first  [date] source | title | url")
    for r in unique:
        src = r["source"].replace(" (open-access journals and repositories)", "")
        title = r["title"].replace("\n", " ")
        if len(title) > 88:
            title = title[:85] + "..."
        print(f"  [{r['published'] or '?'}] {src} | {title} | {r['url']}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
