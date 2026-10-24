#!/usr/bin/env python3
"""Fail when a concept page's narrative changed but its `updated` stamp did not.

The site's right sidebar ("Recently Updated Concepts") and the RSS feeds sort by the
`updated` field, so a weave that leaves that field alone is invisible: the page gained a
finding and the site still says nothing has changed since the last time someone touched
it. The rule is to bump `updated` to the current timestamp on any significant body edit.

Scope: only the narrative above the first "## Connected ..." heading counts. A change
confined to frontmatter or to the Connected Articles/Concepts lists is a wiring change,
not a rewrite, and does not require a bump.

Usage:
    python3 tooling/scripts/check-concept-updated-bump.py            # all concept pages
    python3 tooling/scripts/check-concept-updated-bump.py --changed  # only pages vs HEAD
    python3 tooling/scripts/check-concept-updated-bump.py <slug> [...]
"""
from __future__ import annotations

import os
import re
import subprocess
import sys

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CONCEPTS = os.path.join(WIKI, 'content', 'en', 'concepts')

UPDATED = re.compile(r"^updated:\s*['\"]?([^'\"\n]+)['\"]?\s*$", re.M)
CONNECTED = re.compile(r'^##\s+Connected\s+(Concepts|Articles)\s*$', re.M)


def narrative(text: str) -> str:
    """Body above the first Connected section, with the frontmatter stripped."""
    if text.startswith('---'):
        parts = text.split('\n---', 1)
        if len(parts) == 2:
            text = parts[1]
    m = CONNECTED.search(text)
    return (text[:m.start()] if m else text).strip()


def stamp(text: str) -> str | None:
    m = UPDATED.search(text)
    return m.group(1).strip() if m else None


BASE = 'HEAD'


def head_version(rel: str) -> str | None:
    """The file as committed at BASE, or None when it is new or untracked."""
    try:
        out = subprocess.run(['git', 'show', f'{BASE}:{rel}'], cwd=WIKI,
                             capture_output=True, text=True, check=True)
        return out.stdout
    except subprocess.CalledProcessError:
        return None


def changed_concepts() -> list[str]:
    out = subprocess.run(['git', 'diff', '--name-only', BASE, '--', 'content/en/concepts'],
                         cwd=WIKI, capture_output=True, text=True, check=True)
    names = [n.strip() for n in out.stdout.splitlines() if n.strip().endswith('.md')]
    return [os.path.basename(n)[:-3] for n in names]


def main(argv: list[str]) -> int:
    global BASE
    args = argv[1:]
    if '--base' in args:
        BASE = args[args.index('--base') + 1]
        i = args.index('--base')
        args = args[:i] + args[i + 2:]
    if '--changed' in args:
        slugs = changed_concepts()
    elif args and not args[0].startswith('-'):
        slugs = [a[:-3] if a.endswith('.md') else a for a in args]
    else:
        slugs = sorted(f[:-3] for f in os.listdir(CONCEPTS) if f.endswith('.md'))

    problems, checked = [], 0
    for slug in slugs:
        path = os.path.join(CONCEPTS, f'{slug}.md')
        if not os.path.exists(path):
            continue
        with open(path, encoding='utf-8') as fh:
            current = fh.read()
        previous = head_version(f'content/en/concepts/{slug}.md')
        if previous is None:
            continue  # a new page carries no prior stamp to compare
        if narrative(previous) == narrative(current):
            continue  # frontmatter-only or Connected-list-only change
        checked += 1
        if stamp(previous) == stamp(current):
            problems.append(
                f'{slug}: narrative changed but `updated` still reads {stamp(current)!r}'
            )

    if problems:
        print(f'FAIL - {len(problems)} concept page(s) edited without bumping `updated`:')
        for p in problems:
            print(f'  - {p}')
        print()
        print('Bump `updated` to the current full timestamp, e.g. '
              '"2026-10-24T06:58:12-04:00", so the right sidebar and the feeds show it.')
        return 1

    if checked == 0:
        print('OK - no concept narrative changed against HEAD, nothing to stamp.')
    else:
        print(f'OK - {checked} concept page(s) changed their narrative and all bumped `updated`.')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
