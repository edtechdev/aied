#!/usr/bin/env python3
"""Check that a newly ingested article was integrated into concept pages, not
merely listed on them.

The ingestion rule is that an article may be added to a concept page's
`## Connected Articles` list ONLY when its findings were also woven into that
page's narrative body (see the research-wiki skill: "Concept -> article links
should be added ONLY when the article makes a significant contribution"). In
practice the listing is mechanical and the narrative work is not, so a batch can
look finished while every concept page carries a bare link and no prose. This
script makes that state visible.

For each article slug given (or every article changed vs HEAD with --changed) it:
  1. collects the concept slugs the article declares in its facet metadata
     (foundations / pedagogy / technology / assessment / methods / institutions /
     ethics) plus every concept it links inline in its own body;
  2. looks each one up in content/en/concepts/ and classifies the connection:
       integrated   - the concept's NARRATIVE body links back to the article
       listed only  - the article is in the concept's Connected Articles list
                      but nowhere in the narrative  (DEFECT: the append-only
                      pattern the maintainer flags)
       absent       - neither (note only: the significance test may legitimately
                      have said "no contribution", which is a valid outcome)
  3. prints a per-article report.

Exit status 1 when any "listed only" connection exists, else 0.

Usage:
    python3 tooling/scripts/check-concept-integration.py <article-slug> [...]
    python3 tooling/scripts/check-concept-integration.py --changed
"""
from __future__ import annotations

import os
import re
import subprocess
import sys

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ARTICLES = os.path.join(WIKI, 'content', 'en', 'articles')
CONCEPTS = os.path.join(WIKI, 'content', 'en', 'concepts')

FACET_FIELDS = (
    'foundations', 'pedagogy', 'technology', 'assessment',
    'methods', 'institutions', 'ethics',
)
WIKILINK = re.compile(r'\[\[([^\]|]+)(?:\|[^\]]*)?\]\]')
CONNECTED_HEADING = re.compile(r'^##\s+Connected\s+(Concepts|Articles)\s*$', re.M)


def read(path: str) -> str:
    with open(path, encoding='utf-8') as fh:
        return fh.read()


def split_frontmatter(text: str) -> tuple[str, str]:
    """(frontmatter, body) for a page whose frontmatter opens the file."""
    if text.startswith('---'):
        parts = text.split('\n---', 1)
        if len(parts) == 2:
            return parts[0][3:], parts[1].lstrip('\n')
    return '', text


def facet_slugs(fm: str) -> set[str]:
    """Concept slugs declared in the article's facet metadata."""
    found: set[str] = set()
    for field in FACET_FIELDS:
        m = re.search(r'^' + field + r':\s*\[(.*?)\]\s*$', fm, re.M)
        if m:
            found.update(s.strip() for s in m.group(1).split(',') if s.strip())
    return found


def inline_slugs(body: str) -> set[str]:
    return {t.strip().replace('.md', '') for t in WIKILINK.findall(body)}


def narrative_and_list(concept_text: str) -> tuple[str, str]:
    """(narrative, connected-list text) of a concept page body."""
    _, body = split_frontmatter(concept_text)
    m = CONNECTED_HEADING.search(body)
    if not m:
        return body, ''
    return body[:m.start()], body[m.start():]


def changed_article_slugs() -> list[str]:
    """Article slugs touched vs HEAD, including newly added files."""
    out = subprocess.run(
        ['git', 'diff', '--name-only', '--cached', 'HEAD', '--', 'content/en/articles'],
        cwd=WIKI, capture_output=True, text=True).stdout
    out += subprocess.run(
        ['git', 'diff', '--name-only', 'HEAD', '--', 'content/en/articles'],
        cwd=WIKI, capture_output=True, text=True).stdout
    slugs = [os.path.basename(p)[:-3] for p in out.split() if p.endswith('.md')]
    return sorted(set(slugs))


def main(argv: list[str]) -> int:
    if not argv:
        print(__doc__.strip())
        return 2
    slugs = changed_article_slugs() if argv == ['--changed'] else argv
    if not slugs:
        print('No changed article pages to check.')
        return 0

    defects = 0
    missing = 0
    for slug in slugs:
        path = os.path.join(ARTICLES, slug + '.md')
        if not os.path.exists(path):
            print(f'{slug}: no such article page')
            missing += 1
            continue
        text = read(path)
        fm, body = split_frontmatter(text)
        candidates = sorted(facet_slugs(fm) | inline_slugs(body))
        integrated, listed_only, absent = [], [], []
        for concept in candidates:
            cpath = os.path.join(CONCEPTS, concept + '.md')
            if not os.path.exists(cpath):
                continue
            narrative, connected = narrative_and_list(read(cpath))
            in_narrative = bool(re.search(r'\[\[' + re.escape(slug) + r'(\||\]\])', narrative))
            in_list = bool(re.search(r'\[\[' + re.escape(slug) + r'(\||\]\])', connected))
            if in_narrative:
                integrated.append(concept)
            elif in_list:
                listed_only.append(concept)
            else:
                absent.append(concept)

        print(f'{slug}: {len(integrated)} integrated, '
              f'{len(listed_only)} listed only, {len(absent)} untouched '
              f'(of {len(candidates)} concept candidates)')
        if integrated:
            print('  integrated (narrative): ' + ', '.join(integrated))
        if listed_only:
            defects += len(listed_only)
            print('  DEFECT - listed in Connected Articles with no narrative integration: '
                  + ', '.join(listed_only))
        if absent:
            print('  note - no connection (significance test said no contribution, or the '
                  'pair was missed): ' + ', '.join(absent))

    print()
    if missing:
        print(f'note - {missing} slug(s) have no article page (deleted or renamed); '
              'these are not bare-list defects.')
    if defects:
        print(f'FAIL - {defects} concept page(s) carry the article as a bare list entry. '
              'Either weave the finding into that page\'s narrative or drop the entry.')
        return 1
    print('OK - every concept page carrying a new article also weaves it into the narrative.')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))