#!/usr/bin/env python3
"""Check that `src/data/faqIndex.ts` lists every FAQ page exactly once.

The FAQ index (`/aied/faq`) renders its sections from `src/data/faqIndex.ts`, so a
new FAQ that nobody adds to that registry is invisible to every reader who arrives
through the index. Astro reports nothing: the page builds, the FAQ has its own URL,
and the omission shows up only as a question no one can find.

That is the same failure the concepts index avoids by generating its structure from
a registry, and the same one a reader hits when two sections each claim a page and
it appears twice. Both are cheap to detect and expensive to notice by eye.

Usage:
    python3 tooling/scripts/check-faq-index.py            # check, exit 1 on a problem
    python3 tooling/scripts/check-faq-index.py --quiet    # only print on failure

Exit codes: 0 clean, 1 problems found.
"""
from __future__ import annotations

import os
import re
import sys

WIKI = os.environ.get('WIKI_ROOT') or os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
FAQS_DIR = os.path.join(WIKI, 'content', 'en', 'faqs')
INDEX = os.path.join(WIKI, 'src', 'data', 'faqIndex.ts')


def pages() -> set[str]:
    if not os.path.isdir(FAQS_DIR):
        return set()
    return {name[:-3] for name in os.listdir(FAQS_DIR) if name.endswith('.md')}


def registered() -> list[str]:
    """Every slug in the items arrays, in file order, duplicates kept."""
    if not os.path.exists(INDEX):
        return []
    text = open(INDEX, encoding='utf-8').read()
    # Only the items arrays; headings and blurbs are prose and must not be scanned.
    out: list[str] = []
    for block in re.findall(r'items:\s*\[(.*?)\]', text, re.S):
        out.extend(re.findall(r"'([a-z0-9-]+)'", block))
    return out


def main(argv: list[str]) -> int:
    quiet = '--quiet' in argv
    every = pages()
    listed = registered()

    seen: dict[str, int] = {}
    for slug in listed:
        seen[slug] = seen.get(slug, 0) + 1

    missing = sorted(every - set(listed))
    duplicates = sorted(slug for slug, n in seen.items() if n > 1)
    unknown = sorted(set(listed) - every)

    problems = []
    if missing:
        problems.append(('not listed in the FAQ index registry', missing))
    if duplicates:
        problems.append(('listed more than once', duplicates))
    if unknown:
        problems.append(('listed but has no page', unknown))

    if not problems:
        if not quiet:
            print(f'OK — all {len(every)} FAQ page(s) appear exactly once in src/data/faqIndex.ts.')
        return 0

    print(f'FAIL — {len(problems)} problem(s) in src/data/faqIndex.ts:')
    for label, slugs in problems:
        print(f'  {label}:')
        for slug in slugs:
            print(f'    - {slug}')
    return 1


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
