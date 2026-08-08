#!/usr/bin/env python3
"""Regenerate journal.md from all concept page frontmatter.

Reads every .md file in concepts/, extracts YAML frontmatter,
groups by created date, sorts newest-first, and writes journal.md.

Handles defensive parsing: missing fields, sources=None,
confidence typos, and non-list tags.
"""
import os
import re
import sys
from datetime import date
from collections import defaultdict

try:
    import yaml
except ImportError:
    import subprocess, sys
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pyyaml", "-q"])
    import yaml

CONCEPTS_DIR = os.path.join(os.path.dirname(__file__), "..", "..", "..", "..", "wiki", "concepts")
JOURNAL_PATH = os.path.join(os.path.dirname(__file__), "..", "..", "..", "..", "wiki", "journal.md")

CONFIDENCE_ICONS = {"high": "●", "medium": "◐", "low": "○"}


def extract_frontmatter(content: str) -> dict:
    """Extract YAML frontmatter from markdown content."""
    match = re.match(r"^---\n(.*?)\n---", content, re.DOTALL)
    if not match:
        return {}
    try:
        return yaml.safe_load(match.group(1)) or {}
    except yaml.YAMLError as e:
        print(f"  WARNING: YAML parse error in frontmatter — entry will be skipped: {e}", file=sys.stderr)
        return {}


def safe_sources(fm: dict) -> list:
    """Normalize sources field to a list of strings."""
    val = fm.get("sources")
    if val is None:
        return []
    if isinstance(val, list):
        return [str(s) for s in val if s is not None]
    return [str(val)]


def safe_tags(fm: dict) -> list:
    """Normalize tags field to a list of strings."""
    val = fm.get("tags")
    if val is None:
        return []
    if isinstance(val, list):
        return [str(t) for t in val if t is not None]
    return [str(val)]


def source_ref(sources: list) -> str:
    """Derive short source reference from first source path."""
    if not sources:
        return "—"
    src = sources[0]
    if src.startswith("raw/papers/"):
        return src.replace("raw/papers/", "").replace(".md", "")
    if src.startswith("raw/articles/"):
        return src.replace("raw/articles/", "").replace(".md", "")
    return src


def collect_entries() -> list[dict]:
    """Walk concepts/ and collect all publishable entries."""
    entries = []
    for fname in sorted(os.listdir(CONCEPTS_DIR)):
        if not fname.endswith(".md"):
            continue
        slug = fname[:-3]
        path = os.path.join(CONCEPTS_DIR, fname)

        with open(path) as f:
            content = f.read()

        fm = extract_frontmatter(content)
        sources = safe_sources(fm)
        confidence = str(fm.get("confidence") or "medium")
        created = str(fm.get("created", ""))

        # Skip low-confidence stubs with no sources
        if confidence == "low" and not sources:
            continue

        if not created or created == "unknown":
            continue

        # Title: frontmatter title or first # heading
        title = fm.get("title", "")
        if not title:
            heading_match = re.search(r"^# (.+)", content, re.MULTILINE)
            if heading_match:
                title = heading_match.group(1)

        entries.append({
            "slug": slug,
            "title": title,
            "created": created,
            "confidence": confidence,
            "tags": safe_tags(fm),
            "source_ref": source_ref(sources),
        })

    entries.sort(key=lambda e: e["created"], reverse=True)
    return entries


def build_journal(entries: list[dict]) -> str:
    """Render journal.md from entry list."""
    today = date.today().isoformat()
    lines = [
        "# Journal",
        "",
        "> Reverse chronological index of all articles and papers ingested into the wiki.",
        "> Browse recent additions by date. ● = high confidence, ◐ = medium, ○ = low.",
        f"> Last updated: {today} | Total entries: {len(entries)}",
        "",
        "---",
        "",
    ]

    by_date = defaultdict(list)
    for e in entries:
        by_date[e["created"]].append(e)

    for d in sorted(by_date.keys(), reverse=True):
        lines.append(f"## {d}")
        lines.append("")
        for e in by_date[d]:
            icon = CONFIDENCE_ICONS.get(e["confidence"], "◐")
            tags_list = e["tags"][:4]
            tags_str = ", ".join(tags_list)
            if len(e["tags"]) > 4:
                tags_str += f" +{len(e['tags']) - 4}"

            lines.append(f"- {icon} [[{e['slug']}]] — `{e['source_ref']}`")
            lines.append(f"  {e['title']}")
            lines.append(f"  _{tags_str}_")
            lines.append("")

    return "\n".join(lines)


def main():
    os.makedirs(os.path.dirname(JOURNAL_PATH), exist_ok=True)
    entries = collect_entries()
    journal = build_journal(entries)
    with open(JOURNAL_PATH, "w") as f:
        f.write(journal)
    print(f"journal.md regenerated: {len(entries)} entries")


if __name__ == "__main__":
    main()
