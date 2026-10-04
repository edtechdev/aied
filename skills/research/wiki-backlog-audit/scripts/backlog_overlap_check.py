#!/usr/bin/env python3
"""Reconcile AIED-BACKLOG.md against content/en/articles/.

Parses the backlog's sections, indexes every article page (DOI from the whole
page -- the citation block is where the DOI lives -- plus frontmatter title and
source_url), then matches each backlog entry by normalized DOI, exact
source_url, and title similarity. Prints per-entry hits and parsed-vs-stated
counts so the backlog's own header can be corrected.

Sections are classified before parsing:
  PENDING  -- articles not yet ingested; a match here means the entry is stale
              and should be deleted (or marked INGESTED)
  PRESENT  -- pages already on-site whose source text is truncated or missing;
              a match here is EXPECTED and means the entry still needs a PDF,
              not an ingest

Usage:
    python3 backlog_overlap_check.py [--wiki <path>] [--json]

    --wiki defaults to the repository containing this script.

Exit status is 0 whether or not duplicates are found; read the report.
"""
import argparse
import difflib
import json
import re
import sys
from pathlib import Path

DOI_RE = re.compile(r"10\.\d{4,9}/[^\s\"')>,\]]+")
LINK_RE = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")
BULLET_RE = re.compile(r"^(?:[-*]|\d+\.)\s+(?P<body>.+?)\s*$")  # top-level only: nested
# sub-bullets (indented URLs, "no source URL recorded") are continuations, not entries
INGESTED_RE = re.compile(r"\*\*INGESTED[^*]*\*\*|—\s*\*\*INGESTED", re.I)

# Sections listing articles that are NOT yet ingested.
PENDING = [
    "OpenAlex harvest",
    "Computers and Education: Artificial Intelligence",
    "Computers and Education Open",
    "British Journal of Educational Technology",
    "International Journal of Educational Technology",
    "Journal of Instructional Design and Technology",
    "Intersection: A Journal",
]
# Sections listing pages that ARE on-site (so a match is expected, not stale).
PRESENT = [
    "Ingested pages whose source text is truncated",
    "Pages awaiting a full text",
    "Checked — no further text available",
    "Screened in by the sweep",
]


def norm_doi(doi):
    return doi.rstrip(".").rstrip(")").lower()


def similarity(a, b):
    return difflib.SequenceMatcher(None, a.lower(), b.lower()).ratio()


def index_articles(root):
    """Index content/en/articles/: DOIs (whole page), title, source_url."""
    index = []
    for path in sorted((root / "content" / "en" / "articles").glob("*.md")):
        text = path.read_text(encoding="utf-8", errors="replace")
        dois = {norm_doi(d) for d in DOI_RE.findall(text)}
        title = ""
        m = re.search(r'^title:\s*"?(.+?)"?\s*$', text, re.M)
        if m:
            title = m.group(1).strip().strip('"')
        urls = set(re.findall(r"^source_url:\s*(\S+)\s*$", text, re.M))
        body = text.split("---", 2)[-1]
        index.append(
            {
                "slug": path.stem,
                "path": str(path.relative_to(root)),
                "dois": dois,
                "title": title,
                "urls": urls,
                "body_chars": len(body),
            }
        )
    return index


def parse_backlog(path):
    """Return (entries, stated_counts) -- entries carry their section class.

    Heading levels matter: `##` starts a section and sets its class, while a
    `###` subsection INHERITS the class of the `##` above it. Clearing the class
    on a `###` heading silently drops every entry under it.
    """
    lines = path.read_text(encoding="utf-8").splitlines()
    entries, stated, section, kind = [], {}, None, None

    def classify(heading):
        if any(k in heading for k in PENDING):
            return "pending"
        if any(k in heading for k in PRESENT):
            return "present"
        return None

    for lineno, line in enumerate(lines, 1):
        if line.startswith("#"):
            hashes = len(line) - len(line.lstrip("#"))
            heading = line.lstrip("#").strip()
            if hashes <= 2:
                section, kind = heading, classify(heading)
            else:
                section = heading  # subsection: inherit kind
            continue
        if kind is None:
            continue
        m = BULLET_RE.match(line)
        if not m:
            continue
        body = m.group("body")
        # A URL-only sub-bullet is the URL of the entry above it, not an entry.
        if re.fullmatch(r"(https?://\S+|10\.\d{4,9}/\S+)", body.strip()) and entries:
            if not entries[-1]["url"]:
                entries[-1]["url"] = body.strip().rstrip(".,")
            continue
        # A bullet often carries its URL on the following indented line; keep the
        # label from the bullet itself and only pull the URL up.
        extra_url = ""
        if not LINK_RE.search(body) and not re.search(r"https?://|10\.\d{4,9}/", body):
            j = lineno  # lines list is 0-indexed: lineno == index of next line
            while j < len(lines) and lines[j].strip() and not BULLET_RE.match(lines[j]) \
                    and not lines[j].startswith("#"):
                nxt = lines[j].strip()
                if re.search(r"https?://|10\.\d{4,9}/", nxt):
                    extra_url = nxt
                    break
                j += 1
        lm = LINK_RE.search(body)
        if lm:
            label, url = lm.group(1).strip(), lm.group(2).strip()
        else:
            label = body
            um = re.search(r"(https?://\S+|10\.\d{4,9}/\S+)", body)
            url = um.group(1).rstrip(".,") if um else ""
        if not url and extra_url:
            um = re.search(r"(https?://\S+|10\.\d{4,9}/\S+)", extra_url)
            url = um.group(1).rstrip(".,") if um else ""
        # drop a trailing em-dash pagination tail so the title stays readable
        label = re.split(r"\s+—\s+`", label)[0]
        slug = re.search(r"`([a-z0-9][a-z0-9\-_.]{6,})`", body)
        bm = re.search(r"\((not attempted|html_failed|too_short|retrieval failed|"
                       r"no OpenAlex match[^)]*|supplied[^)]*)\)", body)
        entries.append(
            {
                "line": lineno,
                "section": section,
                "kind": kind,
                "title": re.sub(r"[*`]", "", label).strip(),
                "url": url,
                "slug_hint": slug.group(1) if slug else "",
                "state": bm.group(1) if bm else "",
                "marked_ingested": bool(INGESTED_RE.search(body)),
            }
        )
    return entries, stated


def main():
    ap = argparse.ArgumentParser()
    # Default to the repository this script lives in, so the shipped copy carries no
    # absolute path belonging to any one machine. The installed copy sits outside the
    # wiki repo, so walk up looking for the backlog rather than counting parents, and
    # fall back to the working directory. Pass --wiki to point somewhere else.
    root = None
    for parent in [Path(__file__).resolve().parent, *Path(__file__).resolve().parents]:
        if (parent / "AIED-BACKLOG.md").exists():
            root = parent
            break
    ap.add_argument("--wiki", default=str(root or Path.cwd()))
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    root = Path(args.wiki)
    backlog = root / "AIED-BACKLOG.md"
    if not backlog.exists():
        print(f"no backlog at {backlog}", file=sys.stderr)
        return 2

    articles = index_articles(root)
    doi_index = {}
    url_index = {}
    slug_index = {}
    for a in articles:
        slug_index[a["slug"]] = a
        for d in a["dois"]:
            doi_index.setdefault(d, []).append(a)
        for u in a["urls"]:
            url_index.setdefault(u.rstrip("/").lower(), []).append(a)

    entries, _ = parse_backlog(backlog)
    report = {"pending": [], "present": []}
    for e in entries:
        hit = None
        how = ""
        # The backticked slug, when present, is the most direct evidence: entries
        # in the "awaiting a full text" sections name the existing page outright.
        if e["slug_hint"] and e["slug_hint"] in slug_index:
            hit, how = slug_index[e["slug_hint"]], "slug"
        dois = [norm_doi(d) for d in DOI_RE.findall(e["url"])]
        for d in ([] if hit else dois):
            if d in doi_index:
                hit, how = doi_index[d][0], "doi"
                break
        if not hit:
            u = e["url"].rstrip("/").lower()
            if u and u in url_index:
                hit, how = url_index[u][0], "source_url"
        if not hit and e["title"]:
            best, score = None, 0.0
            for a in articles:
                if not a["title"]:
                    continue
                s = similarity(e["title"], a["title"])
                if s > score:
                    best, score = a, s
            if best and score >= 0.75:
                hit, how = best, f"title:{score:.2f}"
        if hit:
            report["pending" if e["kind"] == "pending" else "present"].append(
                {"entry": e, "hit": hit, "how": how}
            )

    if args.json:
        print(json.dumps({"articles": len(articles), "report": report}, indent=2))
        return 0

    print(f"indexed {len(articles)} article page(s) from {root/'content/en/articles'}")
    n_pending = sum(1 for e in entries if e["kind"] == "pending")
    n_present = sum(1 for e in entries if e["kind"] == "present")
    print(f"backlog entries parsed: {n_pending} pending-section, {n_present} present-section\n")

    print("=== PENDING sections: matches mean a STALE entry ===")
    matched = report["pending"]
    if not matched:
        print("  no pending-section entry matches an existing page")
    for r in matched:
        e = r["entry"]
        print(f"  line {e['line']}: ALREADY ON SITE as `{r['hit']['slug']}` ({r['how']})")
        print(f"    {e['title'][:100]}")
    marked_but_unmatched = [
        e for e in entries if e["kind"] == "pending" and e["marked_ingested"] and not any(
            r["entry"] is e for r in matched
        )
    ]
    for e in marked_but_unmatched:
        print(f"  line {e['line']}: marked INGESTED but NO matching page -- verify")
        print(f"    {e['title'][:100]}")

    print("\n=== PENDING entries still outstanding (need ingestion) ===")
    outstanding = [
        e for e in entries
        if e["kind"] == "pending"
        and not e["marked_ingested"]
        and not any(r["entry"] is e for r in matched)
    ]
    for e in outstanding:
        print(f"  line {e['line']:>3} [{e['state'] or 'no marker':<14}] {e['title'][:88]}")
        if e["url"]:
            print(f"       {e['url']}")
    print(f"  -> {len(outstanding)} outstanding")

    print("\n=== PRESENT sections: matches are EXPECTED (page needs a PDF, not an ingest) ===")
    print(f"  {len(report['present'])} of {n_present} entries resolve to an on-site page")
    unmatched_present = [
        e for e in entries
        if e["kind"] == "present" and not any(r["entry"] is e for r in report["present"])
    ]
    for e in unmatched_present[:40]:
        print(f"  line {e['line']}: no page found -- {e['title'][:80]}")
    if len(unmatched_present) > 40:
        print(f"  ... and {len(unmatched_present)-40} more")
    return 0


if __name__ == "__main__":
    sys.exit(main())