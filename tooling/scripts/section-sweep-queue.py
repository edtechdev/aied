#!/usr/bin/env python3
"""Build the work list for the article-section sweep.

Deterministic, no model calls. Finds every article page that is missing
`## What this means for practice` or `## Limitations`, keeps the ones whose
saved full text is usable, orders them newest-first (the sweep runs backward
through the corpus), and writes batch list files that a worker reads instead of
receiving transcribed slugs.

Each line of a batch file:

    - <wiki>/articles/<slug>.md -> add: practice,limitations   (full text: <wiki>/raw/papers/<file>.md)

Pages with no usable full text are listed separately: sections cannot be written
from evidence for those, and they belong in AIED-BACKLOG.md.

Usage:
  python3 tooling/scripts/section-sweep-queue.py                     # 8 batches of 12
  python3 tooling/scripts/section-sweep-queue.py --batches 3 --per-batch 10
  python3 tooling/scripts/section-sweep-queue.py --outdir /tmp/queue --json
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
ARTICLES = ROOT / "articles"
RAW = ROOT / "raw" / "papers"

PRACTICE = "What this means for practice"
LIMITATIONS = "Limitations"
HEADING = re.compile(r"(?m)^##\s+(.+?)\s*$")
SOURCES = re.compile(r"(?m)^sources:\s*(.+)$")
RAW_PATH = re.compile(r"raw/papers/([^\]\)\s]+?\.md)")
CREATED = re.compile(r'(?m)^created: "?(\d{4}-\d{2}-\d{2})')


def missing_sections(text: str) -> list[str]:
    heads = [m.group(1).strip() for m in HEADING.finditer(text)]
    missing = []
    if PRACTICE not in heads:
        missing.append("practice")
    if LIMITATIONS not in heads:
        missing.append("limitations")
    return missing


def full_text_file(slug: str, text: str) -> str | None:
    m = SOURCES.search(text)
    named = RAW_PATH.findall(m.group(1)) if m else []
    best, size = None, 0
    for name in named + [f"{slug}.md"]:
        path = RAW / name
        if path.exists() and path.stat().st_size > size:
            best, size = name, path.stat().st_size
    return best if size >= 3000 else None


def collect() -> tuple[list[dict], list[dict]]:
    todo, blocked = [], []
    for path in sorted(ARTICLES.glob("*.md")):
        slug = path.stem
        text = path.read_text(encoding="utf-8", errors="replace")
        missing = missing_sections(text)
        if not missing:
            continue
        created = CREATED.search(text)
        row = {
            "slug": slug,
            "created": created.group(1) if created else "",
            "needs": ",".join(missing),
        }
        raw = full_text_file(slug, text)
        if raw:
            row["raw"] = raw
            todo.append(row)
        else:
            row["raw"] = None
            blocked.append(row)
    todo.sort(key=lambda r: r["created"], reverse=True)
    blocked.sort(key=lambda r: r["created"], reverse=True)
    return todo, blocked


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--batches", type=int, default=8, help="how many batch files to write")
    ap.add_argument("--per-batch", type=int, default=12, help="pages per batch file")
    ap.add_argument("--outdir", default=os.path.expanduser("~/.hermes/work/aied-sections"))
    ap.add_argument("--min-date", help="only pages created on or after this date (YYYY-MM-DD)")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    todo, blocked = collect()
    if args.min_date:
        todo = [r for r in todo if r["created"] >= args.min_date]

    outdir = Path(args.outdir)
    outdir.mkdir(parents=True, exist_ok=True)
    for stale in outdir.glob("batch*.txt"):
        stale.unlink()

    take = todo[: args.batches * args.per_batch]
    batches = []
    for index in range(args.batches):
        chunk = take[index * args.per_batch: (index + 1) * args.per_batch]
        if not chunk:
            break
        path = outdir / f"batch{index + 1:03d}.txt"
        path.write_text(
            "".join(
                f"- {ARTICLES}/{r['slug']}.md -> add: {r['needs']}"
                f"   (full text: {RAW}/{r['raw']})\n"
                for r in chunk
            )
        )
        batches.append({"file": str(path), "pages": len(chunk)})

    summary = {
        "remaining_pages": len(todo),
        "remaining_besides_these_batches": max(0, len(todo) - len(take)),
        "batch_count": len(batches),
        "batches": batches,
        "no_full_text": len(blocked),
        "no_full_text_slugs": [r["slug"] for r in blocked][:20],
        "oldest_created_in_queue": todo[-1]["created"] if todo else None,
    }

    if args.json:
        print(json.dumps(summary, indent=2))
    else:
        print(f"pages still needing a section: {summary['remaining_pages']}")
        print(f"oldest page in the queue: {summary['oldest_created_in_queue']}")
        print(f"pages with no usable full text (backlog candidates): {summary['no_full_text']}")
        for batch in batches:
            print(f"  {batch['file']}  ({batch['pages']} pages)")
        if summary["remaining_besides_these_batches"]:
            print(f"not scheduled this run: {summary['remaining_besides_these_batches']} page(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
