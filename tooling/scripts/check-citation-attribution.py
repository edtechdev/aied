#!/usr/bin/env python3
"""Gate: every article page's Citation must attribute its authors.

A citation that begins with the year or with the title link, or that carries no year at
all, cannot be checked against the source and cannot be cited by a concept page: a weave
that wants to name the study has nothing to name. 37 article pages had accumulated this
way (title-first citations, usually because the author line was not in the extracted text
when the page was written), so the shape is checked here rather than trusted.

House style: `Authors (Year). [*Title*](url). Venue, volume, pages.`

  FAIL  no Citation section
  FAIL  no (YYYY) in the citation
  FAIL  the text before the year is empty, or starts with a title/bracket/digit
  WARN  the author part carries no `Surname, I.` pattern (institutional author, or a
        hand-written name list in full-name style)

Usage:
    python3 tooling/scripts/check-citation-attribution.py            # whole corpus
    python3 tooling/scripts/check-citation-attribution.py <slug> ...  # just these
"""
from __future__ import annotations

import glob
import os
import re
import subprocess
import sys

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ARTICLES = os.path.join(WIKI, 'content', 'en', 'articles')

YEAR = re.compile(r'\((19|20)\d{2}[a-z]?\)')
# Unicode-aware: `À-ÿ` covers Latin-1 but NOT ı (U+0131), so a Turkish name like
# "Akçapınar, G." fell through the old ASCII/Latin-1 class and raised a false warning.
_UPPER = r'[^\W\d_a-z]'        # a Unicode letter that is not a lowercase ASCII letter
_LETTER = r'[^\W\d_]'          # any Unicode letter
AUTHOR_PATTERN = re.compile(
    _UPPER + r"[^\W\d_'\-]*,\s*(?:" + _UPPER + r"\.|" + _UPPER + _LETTER + r"+)")


def changed_slugs() -> list[str]:
    out = subprocess.run(['git', 'diff', '--name-only', 'HEAD', '--', 'content/en/articles'],
                         cwd=WIKI, capture_output=True, text=True).stdout
    out += subprocess.run(['git', 'ls-files', '--others', '--exclude-standard',
                           '--', 'content/en/articles'],
                          cwd=WIKI, capture_output=True, text=True).stdout
    return sorted({os.path.basename(p)[:-3] for p in out.split() if p.endswith('.md')})


def citation_of(text: str) -> str | None:
    m = re.search(r'^##\s+Citation\s*\n+(.*)$', text, re.M)
    return m.group(1).strip() if m else None


def main(argv: list[str]) -> int:
    # argv is sys.argv, so argv[0] is the script name.
    args = argv[1:]
    slugs = args if args else [os.path.basename(p)[:-3]
                               for p in sorted(glob.glob(os.path.join(ARTICLES, '*.md')))]
    if '--changed' in args:
        slugs = changed_slugs()
    if not slugs:
        print('OK - no article pages to check.')
        return 0

    failures = 0
    warnings = 0
    for slug in slugs:
        path = os.path.join(ARTICLES, slug + '.md')
        if not os.path.exists(path):
            print(f'{slug}: no such article page')
            failures += 1
            continue
        text = open(path, encoding='utf-8').read()
        cite = citation_of(text)
        if cite is None:
            print(f'{slug}: FAIL no ## Citation section')
            failures += 1
            continue
        if not cite:
            print(f'{slug}: FAIL Citation section is empty')
            failures += 1
            continue
        year = YEAR.search(cite)
        if not year:
            print(f'{slug}: FAIL no (YYYY) in the citation: {cite[:110]}')
            failures += 1
            continue
        author_part = cite[:year.start()].strip()
        plain = re.sub(r'[*_`]', '', author_part).strip()
        if not plain or re.match(r'^[\[\(\d]', plain) or plain.endswith('—'):
            print(f'{slug}: FAIL citation does not name its authors before the year: '
                  f'{cite[:110]}')
            failures += 1
            continue
        if not AUTHOR_PATTERN.search(author_part):
            print(f'{slug}: WARNING author part has no "Surname, I." pattern '
                  f'(check it names a person or an institution): {plain[:80]}')
            warnings += 1

    print()
    if failures:
        print(f'FAIL - {failures} article citation(s) with no author attribution. '
              'Put the author list in front of the year; take the names from the raw '
              'source in `sources:` and never invent one.')
        return 1
    print(f'OK - {len(slugs)} article citation(s) attribute their authors'
          + (f' ({warnings} warning(s))' if warnings else '') + '.')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))