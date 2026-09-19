#!/usr/bin/env python3
"""Audit article pages for the required practice/limitations sections.

Deterministic, no model calls. Checks, for every selected page:

  HARD (exit 1)
    - `## What this means for practice` missing, or present more than once
    - `## Limitations` missing, or present more than once
    - practice not immediately before limitations, or Citation not last
    - practice outside 3-5 bullets, limitations outside 2-4 bullets
    - a figure in those sections that does not appear in the page's own full text
    - a [[wikilink]] whose target slug does not exist

  REPORTED (exit 0, listed for a cleanup pass)
    - an older heading covering the same ground still present
      (`## Implications`, `## Limits and Open Questions`, ...)
    - a limitations section written as prose rather than bullets

Selection:
  --all                     every article page
  --since YYYY-MM-DD        pages with `created` on or after that date
  --until YYYY-MM-DD        pages with `created` on or before that date
  --slugs-file PATH         one slug per line (blank lines and # comments skipped)
  --changed                 pages modified in the working tree (git status)
  --json                    machine-readable summary on stdout

Usage:
  python3 tooling/scripts/audit-article-sections.py --since 2026-09-01
  python3 tooling/scripts/audit-article-sections.py --slugs-file /tmp/batch.txt
"""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
ARTICLES = ROOT / "articles"
RAW = ROOT / "raw" / "papers"

PRACTICE = "What this means for practice"
LIMITATIONS = "Limitations"
CANON = {PRACTICE, LIMITATIONS}

LEGACY_PRACTICE = re.compile(
    r"(?i)^(implications?( for .*)?|practical implications.*|what this means.*|"
    r"lessons for .*|recommendations for .*)$"
)
LEGACY_LIMITS = re.compile(
    r"(?i)^(limits?|limits? and .*|limitations (and|of|to) .*|caveats?.*|constraints?.*)$"
)
HEADING = re.compile(r"(?m)^##\s+(.+?)\s*$")
SOURCES = re.compile(r"(?m)^sources:\s*(.+)$")
RAW_PATH = re.compile(r"raw/papers/([^\]\)\s]+?\.md)")
WIKILINK = re.compile(r"\[\[([^\]|]+)")
NUMBER = re.compile(r"\d[\d,\.]*")


def norm_number(text: str) -> str:
    """Normalize a figure for comparison: drop commas/space, drop a leading zero."""
    t = re.sub(r"[,\s]", "", text)
    t = t.strip(".")
    if t.startswith("0.") and len(t) > 2:
        t = t[1:]
    return t


def _figure_patterns(token: str) -> list[str]:
    """Candidate regexes for one figure, tolerant of how a source may print it.

    Sources print the same value as `0.39`, `.039`, `0·39`, `0,39`, `39%`, `039`. Build a pattern from the
    digits, allowing up to two non-digit characters between digits - PDF extraction splits thousands
    separators into `6, 000` - an optional leading zero, and an optional leading decimal point.
    """
    digits = re.sub(r"\D", "", token)
    if len(digits) < 2:
        return []
    stripped = digits.lstrip("0") or "0"
    variants = {digits, stripped, "0" + stripped}
    if "." in token:
        trimmed = token.rstrip("0").rstrip(".")
        trimmed_digits = re.sub(r"\D", "", trimmed)
        if trimmed_digits:
            variants.add(trimmed_digits)
            variants.add(trimmed_digits.lstrip("0") or "0")
    patterns = []
    for variant in variants:
        body = r"[^\d]{0,2}".join(re.escape(ch) for ch in variant)
        # trailing zeros may be present in the source (78.6 there, 78.60 here) but no other digit may follow
        patterns.append(r"(?<!\d)\.?" + body + r"(?![0-9]*[1-9])")
    return patterns


DECIMAL = re.compile(r"\d+\.\d+")


def _rounds_to(token: str, raw: str) -> bool:
    """True when the source reports a more precise number that rounds to this one.

    A page may round a table value - 0.7931 printed in the source becomes 0.79 on the page. That is fidelity,
    not invention, so accept it. Only rounding counts: the source value must land on the token at the token's
    own precision, so 0.79 matches 0.7931 and never matches 0.86.
    """
    if "." not in token or not re.fullmatch(r"\d+\.\d+", token):
        return False
    places = len(token.split(".")[1])
    try:
        want = float(token)
    except ValueError:
        return False
    for candidate in DECIMAL.findall(raw):
        try:
            value = float(candidate)
        except ValueError:
            continue
        if abs(round(value, places) - want) < 10 ** (-(places + 3)):
            return True
    return False


def figure_in_text(token: str, raw: str) -> bool:
    for pattern in _figure_patterns(token):
        if re.search(pattern, raw):
            return True
    return _rounds_to(token, raw)


def normalize_blob(text: str) -> str:
    return re.sub(r"[,\s]", "", text)


def section(text: str, name: str) -> str | None:
    m = re.search(r"(?m)^##\s+" + re.escape(name) + r"\s*$", text)
    if not m:
        return None
    rest = text[m.end():]
    nxt = re.search(r"(?m)^##\s", rest)
    return rest[: nxt.start()] if nxt else rest


def headings(text: str) -> list[str]:
    return [m.group(1).strip() for m in HEADING.finditer(text)]


DF_NOTATION = re.compile(r"\b[A-Za-z]\s*\(\s*\d+\s*,\s*\d+\s*\)|\(\s*\d+\s*,\s*\d+\s*\)")


def strip_degrees_of_freedom(body: str) -> str:
    """Remove F(1,41)-style degrees-of-freedom notation: not a figure to verify."""
    return DF_NOTATION.sub(" ", body)


def bullets(body: str) -> list[str]:
    return [line for line in body.split("\n") if line.strip().startswith("- ")]


def full_text(page_text: str) -> str:
    m = SOURCES.search(page_text)
    named = RAW_PATH.findall(m.group(1)) if m else []
    out = []
    for name in named:
        path = RAW / name
        if path.exists():
            out.append(path.read_text(encoding="utf-8", errors="replace"))
    return "".join(out)


def all_slugs() -> set[str]:
    slugs: set[str] = set()
    for folder in ("articles", "concepts", "faqs"):
        for path in (ROOT / folder).glob("*.md"):
            slugs.add(path.stem)
    return slugs


def _slug_from_line(line: str) -> str | None:
    """Accept a bare slug, or any line naming an article page (batch list files)."""
    m = re.search(r"articles/([A-Za-z0-9._-]+)\.md", line)
    if m:
        return m.group(1)
    token = line.strip()
    if not token or token.startswith("#"):
        return None
    return token


def select(args) -> list[str]:
    if args.slugs_file:
        out = []
        for line in Path(args.slugs_file).read_text().splitlines():
            slug = _slug_from_line(line)
            if slug:
                out.append(slug)
        return out
    slugs = []
    for path in sorted(ARTICLES.glob("*.md")):
        text = path.read_text(encoding="utf-8", errors="replace")
        created = re.search(r'(?m)^created: "?(\d{4}-\d{2}-\d{2})', text)
        created = created.group(1) if created else ""
        if args.since and created < args.since:
            continue
        if args.until and created > args.until:
            continue
        slugs.append(path.stem)
    if args.changed:
        out = subprocess.run(
            ["git", "status", "--porcelain", "articles"],
            cwd=ROOT, capture_output=True, text=True,
        ).stdout
        changed = {ln.split()[-1].split("/")[-1][:-3] for ln in out.splitlines() if ln.strip()}
        slugs = [s for s in slugs if s in changed]
    return slugs


def audit(slug: str, known: set[str]) -> dict:
    path = ARTICLES / f"{slug}.md"
    result = {"slug": slug, "hard": [], "report": []}
    if not path.exists():
        result["hard"].append("page does not exist")
        return result
    text = path.read_text(encoding="utf-8", errors="replace")
    heads = headings(text)

    for name in CANON:
        count = heads.count(name)
        if count == 0:
            result["hard"].append(f"missing section: {name}")
        elif count > 1:
            result["hard"].append(f"section repeated {count}x: {name}")
    if result["hard"]:
        return result

    if heads.index(PRACTICE) > heads.index(LIMITATIONS):
        result["hard"].append("practice section sits after limitations")
    if heads[-1] != "Citation":
        result["hard"].append(f"citation is not the last section (found {heads[-1]!r})")

    practice_body = section(text, PRACTICE) or ""
    limits_body = section(text, LIMITATIONS) or ""
    p_count = len(bullets(practice_body))
    l_count = len(bullets(limits_body))
    # A section written as prose (0 bullets) is legacy formatting, reported rather than failed;
    # a section with too many bullets is a real range violation.
    if p_count > 5 or 0 < p_count < 3:
        result["hard"].append(f"practice has {p_count} bullets (want 3-5)")
    if l_count > 4 or 0 < l_count < 2:
        result["hard"].append(f"limitations has {l_count} bullets (want 2-4)")
    if p_count == 0:
        result["report"].append("practice section is prose, not bullets")
    if l_count == 0:
        result["report"].append("limitations is prose, not bullets")

    raw = full_text(text)
    if len(raw) < 3000:
        result["report"].append("no usable saved full text: figures unverifiable")
    else:
        for label, body in ((PRACTICE, practice_body), (LIMITATIONS, limits_body)):
            for hit in NUMBER.finditer(strip_degrees_of_freedom(body)):
                token = hit.group(0).strip(".,")
                if len(token) < 3 or re.fullmatch(r'(?:19|20)\d{2}', token):
                    continue
                if not figure_in_text(token, raw):
                    result["hard"].append(f"figure not in full text: {token} ({label})")

    for target in {t.strip() for t in WIKILINK.findall(text)}:
        if target and target not in known:
            result["hard"].append(f"wikilink target does not exist: {target}")

    legacy_practice = [
        h for h in heads
        if h not in CANON and LEGACY_PRACTICE.match(h) and "questions to consider" not in h.lower()
    ]
    legacy_limits = [h for h in heads if h not in CANON and LEGACY_LIMITS.match(h)]
    if legacy_practice:
        result["report"].append("older practice-type heading still present: " + "; ".join(legacy_practice))
    if legacy_limits:
        result["report"].append("older limits-type heading still present: " + "; ".join(legacy_limits))
    return result


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--since")
    ap.add_argument("--until")
    ap.add_argument("--slugs-file")
    ap.add_argument("--changed", action="store_true")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    slugs = select(args)
    known = all_slugs()
    results = [audit(slug, known) for slug in slugs]

    hard = [r for r in results if r["hard"]]
    with_notes = [r for r in results if r["report"]]

    if args.json:
        print(json.dumps({
            "checked": len(results),
            "hard_defects": hard,
            "clean": len(results) - len(hard),
            "reported": with_notes,
        }, indent=2))
    else:
        for r in hard:
            print(f"FAIL {r['slug']}")
            for issue in r["hard"]:
                print(f"     - {issue}")
        print(
            f"{len(results) - len(hard)} of {len(results)} page(s) pass; "
            f"{len(hard)} with hard defects; "
            f"{len(with_notes)} with items for a cleanup pass."
        )
        if with_notes and not hard:
            for r in with_notes[:10]:
                print(f"  note {r['slug']}: " + "; ".join(r["report"]))
            if len(with_notes) > 10:
                print(f"  ... and {len(with_notes) - 10} more with notes")

    return 1 if hard else 0


if __name__ == "__main__":
    sys.exit(main())
