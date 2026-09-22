#!/usr/bin/env python3
"""Fail if a translated page's connected sections drift from the locale's canonical headings.

The renderer marks a list as a "connected" list (list styling, page-kind icon on each
entry) by matching its `##` heading against the English table plus every locale's pair
from `src/i18n/sectionHeadings.ts`. A translator who invents a different heading loses
that styling silently, so this checks the two headings that end a translated page.

Usage: check-translated-headings.py [--quiet]
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
LOCALES = ['es', 'fr', 'zh', 'de', 'ja', 'ko', 'pt', 'ar', 'he']

# Kept in step with src/i18n/sectionHeadings.ts by CONNECTED_HEADINGS below; the script
# parses that module so the two can never disagree.
def canonical() -> dict:
    src = (ROOT / 'src/i18n/sectionHeadings.ts').read_text(encoding='utf-8')
    body = src[src.index('CONNECTED_HEADINGS'):src.index('/** The connected headings')]
    pairs = {}
    for loc, cc, ca in re.findall(r"(\w+): \{ connectedConcepts: '([^']*)', connectedArticles: '([^']*)' \}", body):
        pairs[loc] = (cc, ca)
    return pairs


def main() -> int:
    quiet = '--quiet' in sys.argv
    pairs = canonical()
    missing_locales = [l for l in LOCALES if l not in pairs]
    if missing_locales:
        print(f'FAIL — no canonical headings for: {", ".join(missing_locales)}')
        return 1

    problems = []
    checked = 0
    for loc in LOCALES:
        cc, ca = pairs[loc]
        for path in sorted((ROOT / loc).rglob('*.md')):
            text = path.read_text(encoding='utf-8')
            headings = [h.strip() for h in re.findall(r'(?m)^## (.+)$', text)]
            # A page with connected sections ends with them, in this order. Resource
            # pages carry only the concept list, so compare against what is present.
            present = [h for h in headings if h in (cc, ca)]
            if present:
                checked += 1
                expected = [h for h in (cc, ca) if h in present]
                if present != expected or headings[-len(present):] != present:
                    problems.append(
                        f'{path.relative_to(ROOT)}: connected sections are {present}, expected {expected} '
                        f'as the closing sections (page ends with {headings[-2:]})')

    if problems:
        print(f'FAIL — {len(problems)} translated page(s) with drifted connected headings:')
        for p in problems:
            print(f'  {p}')
        return 1
    print(f'OK — connected headings canonical on {checked} translated page(s)')
    return 0


if __name__ == '__main__':
    sys.exit(main())
