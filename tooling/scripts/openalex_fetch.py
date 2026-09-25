#!/usr/bin/env python3
"""OpenAlex client for this knowledge base.

OpenAlex indexes works across publishers and repositories, which makes it the
discovery source for open-access articles that never appear on a preprint server.
Every OpenAlex request made by this repository, an agent, or a scheduled job should
go through this module so that key handling, output shape and retry behaviour are
defined once.

API key (optional, recommended)
-------------------------------
OpenAlex works with no key at all. A free key raises the daily budget roughly
tenfold and makes requests count against your own account rather than the shared
anonymous pool, so heavy scanning is polite rather than antisocial. Get one at
https://openalex.org/settings/api (free account; Settings -> API key).

This module resolves the key in this order, so a fork can choose whatever suits it:

  1. $OPENALEX_API_KEY                       -- an environment variable
  2. $OPENALEX_API_KEY_FILE                  -- a path to a file containing the key
  3. ~/.hermes/openalex.key                  -- this machine's convention
  4. <repository>/.openalex.key              -- a file in the clone (gitignored)

If none is found it runs keyless and says so on stderr. The key is never printed,
never written to output, and never placed in a URL: it travels in an Authorization
header only. Keep it out of the repository -- see .gitignore.

The polite pool
---------------
OpenAlex asks clients to identify themselves. Set a contact address with
$OPENALEX_MAILTO or --mailto and it is sent in the User-Agent; without one the
request carries only the generic client name. Do not invent an address for someone
else's account: either send your own or none.

A record whose publication_date is in the future is a preprint with a projected
date and no available text, so --search excludes those by default; pass
--include-future to see them anyway.

Usage
-----
  python3 tooling/scripts/openalex_fetch.py --selftest
  python3 tooling/scripts/openalex_fetch.py --search "artificial intelligence education" \
      --oa-only --since 2026-06-01 --max 20
  python3 tooling/scripts/openalex_fetch.py --doi 10.1007/s11858-026-01827-y
  python3 tooling/scripts/openalex_fetch.py --title "Generative AI in mathematics education" --max 5

All modes print JSON lines on stdout, one work per line, newest first where the
source is dated.
"""

from __future__ import annotations

import argparse
import difflib
import json
import os
import pathlib
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

API = "https://api.openalex.org"
SELECT = ",".join([
    "id", "doi", "title", "display_name", "publication_date", "publication_year",
    "type", "cited_by_count", "open_access", "best_oa_location", "primary_location",
    "locations", "authorships", "biblio", "language", "abstract_inverted_index",
])

# OpenAlex allows far more than this; the pacing exists because a scheduled scan
# should not look like a load test, and because it makes 429 handling rare.
DEFAULT_SLEEP = 0.2
MAX_RETRIES = 4


def resolve_key() -> tuple[str, str]:
    """Return (key, source). Source is a human-readable label, never the key."""
    env = (os.environ.get("OPENALEX_API_KEY") or "").strip()
    if env:
        return env, "$OPENALEX_API_KEY"
    path = (os.environ.get("OPENALEX_API_KEY_FILE") or "").strip()
    candidates = []
    if path:
        candidates.append(pathlib.Path(path).expanduser())
    candidates.append(pathlib.Path.home() / ".hermes" / "openalex.key")
    candidates.append(pathlib.Path(__file__).resolve().parents[2] / ".openalex.key")
    for c in candidates:
        try:
            if c.is_file():
                v = c.read_text().strip()
                if v:
                    return v, str(c)
        except OSError:
            continue
    return "", ""


def resolve_mailto(cli: str | None) -> str:
    return (cli or os.environ.get("OPENALEX_MAILTO") or "").strip()


def build_request(url: str, key: str, mailto: str) -> urllib.request.Request:
    ua = "aied-knowledge-base/1.0 (OpenAlex client; +https://github.com/edtechdev/aied)"
    if mailto:
        ua += f" mailto:{mailto}"
    headers = {"User-Agent": ua, "Accept": "application/json"}
    if key:
        headers["Authorization"] = f"Bearer {key}"   # never the URL: URLs get logged
    return urllib.request.Request(url, headers=headers)


def fetch_json(url: str, key: str, mailto: str, *, quiet: bool = False):
    """GET with retry/backoff. Returns (payload, response_headers)."""
    last = None
    for attempt in range(MAX_RETRIES):
        try:
            req = build_request(url, key, mailto)
            with urllib.request.urlopen(req, timeout=45) as resp:
                return json.load(resp), dict(resp.headers)
        except urllib.error.HTTPError as e:
            last = e
            if e.code in (429, 500, 502, 503, 504) and attempt < MAX_RETRIES - 1:
                time.sleep(1.5 * (attempt + 1))
                continue
            body = ""
            try:
                body = e.read().decode("utf-8", "replace")[:200]
            except Exception:
                pass
            raise SystemExit(f"OpenAlex HTTP {e.code}: {body}")
        except urllib.error.URLError as e:
            last = e
            if attempt < MAX_RETRIES - 1:
                time.sleep(1.5 * (attempt + 1))
                continue
            raise SystemExit(f"OpenAlex unreachable: {e}")
    raise SystemExit(f"OpenAlex failed: {last}")


def arxiv_id_of(work: dict) -> str | None:
    """An arXiv id anywhere in the work's locations, if present."""
    import re
    for loc in work.get("locations") or []:
        for field in ("landing_page_url", "pdf_url"):
            u = loc.get(field) or ""
            m = re.search(r"arxiv\.org/(?:abs|pdf)/([0-9]{4}\.[0-9]{4,5})", u)
            if m:
                return m.group(1)
    return None


def best_pdf(work: dict) -> str | None:
    best = work.get("best_oa_location") or {}
    if best.get("pdf_url"):
        return best["pdf_url"]
    for loc in work.get("locations") or []:
        if loc.get("pdf_url"):
            return loc["pdf_url"]
    return None


def abstract_of(work: dict, limit: int = 900) -> str | None:
    """Rebuild the abstract from OpenAlex's inverted index, truncated for triage."""
    inv = work.get("abstract_inverted_index")
    if not inv:
        return None
    positions: list[tuple[int, str]] = []
    for word, idxs in inv.items():
        for i in idxs:
            positions.append((i, word))
    if not positions:
        return None
    positions.sort()
    text = " ".join(w for _, w in positions)
    return text[:limit] + ("..." if len(text) > limit else "")


def shape(work: dict) -> dict:
    """One work as a flat record: the fields this pipeline actually uses."""
    authors = [
        (a.get("author") or {}).get("display_name")
        for a in (work.get("authorships") or [])[:8]
    ]
    authors = [a for a in authors if a]
    src = ((work.get("primary_location") or {}).get("source") or {})
    oa = work.get("open_access") or {}
    doi = (work.get("doi") or "").replace("https://doi.org/", "") or None
    return {
        "openalex_id": (work.get("id") or "").replace("https://openalex.org/", "") or None,
        "doi": doi,
        "title": work.get("title") or work.get("display_name"),
        "authors": authors,
        "author_count": len(work.get("authorships") or []),
        "published": work.get("publication_date"),
        "year": work.get("publication_year"),
        "type": work.get("type"),
        "venue": src.get("display_name"),
        "is_oa": bool(oa.get("is_oa")),
        "oa_status": oa.get("oa_status"),
        "pdf_url": best_pdf(work),
        "landing_page_url": ((work.get("best_oa_location") or {}).get("landing_page_url")
                             or (work.get("primary_location") or {}).get("landing_page_url")),
        "arxiv_id": arxiv_id_of(work),
        "cited_by_count": work.get("cited_by_count"),
        "abstract": abstract_of(work),
        # Deduplicate on DOI when there is one, else on the OpenAlex id: the
        # knowledge base dedupes by identifier, never by title.
        "dedupe_key": doi or (work.get("id") or "").replace("https://openalex.org/", ""),
    }


def emit(records: list[dict]) -> int:
    for r in records:
        print(json.dumps(r, ensure_ascii=False))
    return 0


def cmd_search(a, key, mailto) -> int:
    filters = []
    if a.oa_only:
        filters.append("is_oa:true")
    if a.since:
        filters.append(f"from_publication_date:{a.since}")
    if a.until:
        filters.append(f"to_publication_date:{a.until}")
    if a.type:
        filters.append(f"type:{a.type}")
    if not a.include_future and not a.until:
        filters.append(f"to_publication_date:{time.strftime('%Y-%m-%d')}")
    if a.edu_only:
        filters.append("primary_topic.subfield.id:subfields/3304")
    if a.filter:
        filters.append(a.filter)
    # relevance_score:desc is only valid alongside a search query; fall back to a
    # date sort rather than letting the API 400.
    sort = a.sort
    if sort.startswith("relevance_score") and not a.search:
        sort = "publication_date:desc"
    params = {
        "per-page": str(min(a.max, 100)),
        "select": SELECT,
        "sort": sort,
    }
    if a.search:
        params["search"] = a.search
    if filters:
        params["filter"] = ",".join(filters)
    if mailto:
        params["mailto"] = mailto
    url = f"{API}/works?" + urllib.parse.urlencode(params)
    data, _ = fetch_json(url, key, mailto)
    out = [shape(w) for w in data.get("results", [])]
    print(json.dumps({"query": a.search, "sort": sort, "total_matching": data["meta"]["count"],
                      "returned": len(out)}, ensure_ascii=False), file=sys.stderr)
    if a.with_pdf_only:
        out = [r for r in out if r["pdf_url"]]
    return emit(out)


def cmd_doi(a, key, mailto) -> int:
    doi = a.doi.strip().replace("https://doi.org/", "")
    url = f"{API}/works/doi:{urllib.parse.quote(doi)}?select={SELECT}"
    if mailto:
        url += f"&mailto={urllib.parse.quote(mailto)}"
    try:
        data, _ = fetch_json(url, key, mailto)
    except SystemExit as e:
        print(json.dumps({"doi": doi, "found": False, "error": str(e)}, ensure_ascii=False))
        return 0
    return emit([shape(data)])


def cmd_title(a, key, mailto) -> int:
    """Candidates for a title, with a similarity score. Accept nothing below ~0.85."""
    params = {"search": a.title, "per-page": str(max(1, min(a.max, 25))), "select": SELECT}
    if a.oa_only:
        params["filter"] = "is_oa:true"
    if mailto:
        params["mailto"] = mailto
    url = f"{API}/works?" + urllib.parse.urlencode(params)
    data, _ = fetch_json(url, key, mailto)
    want = a.title.lower().strip()
    out = []
    for w in data.get("results", []):
        rec = shape(w)
        rec["title_similarity"] = round(difflib.SequenceMatcher(
            None, want, (rec["title"] or "").lower().strip()).ratio(), 3)
        out.append(rec)
    out.sort(key=lambda r: -r["title_similarity"])
    return emit(out)


def cmd_selftest(a, key, mailto) -> int:
    """Prove key resolution and one live request, without revealing the key."""
    if key:
        print(f"key: found ({len(key)} chars) via {a._key_source}", file=sys.stderr)
    else:
        print("key: none found -- running keyless (shared budget). "
              "Set OPENALEX_API_KEY or ~/.hermes/openalex.key to use your own.",
              file=sys.stderr)
    print(f"mailto: {mailto or '(unset; add one with --mailto or $OPENALEX_MAILTO)'}",
          file=sys.stderr)
    t0 = time.time()
    data, hdrs = fetch_json(f"{API}/works?filter=is_oa:true&per-page=1&select=id,title",
                            key, mailto)
    dt = time.time() - t0
    print(json.dumps({
        "ok": True,
        "key_mode": "keyed" if key else "keyless",
        "key_source": a._key_source or None,
        "seconds": round(dt, 2),
        "total_works_matching_sample_filter": data["meta"]["count"],
        "budget_headers": {k: v for k, v in hdrs.items()
                           if k.lower().startswith("x-ratelimit")},
    }, ensure_ascii=False))
    return 0


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description="OpenAlex client (see module docstring for key handling)")
    ap.add_argument("--search", help="free-text search across works")
    ap.add_argument("--doi", help="look up one work by DOI")
    ap.add_argument("--title", help="find candidate works for a title, scored by similarity")
    ap.add_argument("--max", type=int, default=20, help="max results (1-100, default 20)")
    ap.add_argument("--since", help="from_publication_date, YYYY-MM-DD")
    ap.add_argument("--until", help="to_publication_date, YYYY-MM-DD")
    ap.add_argument("--type", help="work type, e.g. article or preprint")
    ap.add_argument("--filter", help="raw extra filter, e.g. 'language:en'")
    ap.add_argument("--oa-only", action="store_true", help="open access only")
    ap.add_argument("--include-future", action="store_true",
                    help="keep works whose publication_date is in the future (default: excluded; "
                         "OpenAlex carries preprints with projected dates that have no text yet)")
    ap.add_argument("--with-pdf-only", action="store_true",
                    help="drop results that expose no PDF URL")
    ap.add_argument("--sort", default="relevance_score:desc",
                    help="sort key. Default relevance_score:desc, which requires a --search; "
                         "a date sort combined with free text returns whatever newest work matched "
                         "any single term, so relevance is the right default for discovery")
    ap.add_argument("--edu-only", action="store_true",
                    help="restrict to the Education subfield (OpenAlex subfields/3304)")
    ap.add_argument("--mailto", help="contact address for the polite pool")
    ap.add_argument("--selftest", action="store_true", help="verify key resolution + one request")
    a = ap.parse_args(argv)

    key, src = resolve_key()
    mailto = resolve_mailto(a.mailto)
    a._key_source = src

    if a.selftest:
        return cmd_selftest(a, key, mailto)
    if a.doi:
        return cmd_doi(a, key, mailto)
    if a.title:
        return cmd_title(a, key, mailto)
    if a.search:
        return cmd_search(a, key, mailto)
    # Filter-only browsing (no free-text query) is a legitimate mode -- "what is
    # new in open-access education this week" needs no search terms at all.
    if any([a.edu_only, a.filter, a.since, a.until, a.type, a.oa_only]):
        return cmd_search(a, key, mailto)
    ap.error("choose one of --search, --doi, --title or --selftest")


if __name__ == "__main__":
    sys.exit(main())