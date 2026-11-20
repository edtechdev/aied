#!/usr/bin/env python3
"""Check that an article page's summary reads as findings, not as a coefficient dump.

Three rules from the practitioner-summary-writing skill, enforced here because no other
gate reads the prose:

  1. The Synthesis blockquote carries no statistical notation. A reader deciding whether
     to open the page gets the finding in words; coefficients live in the body.
  2. Key Findings bullets carry no statistical notation. Each bullet is one sentence
     saying what was found, not a flattened results table.
  3. Every practice bullet opens with an audience label in the house form
     ``- **Instructors.** ...`` (period inside the bold run, no colon).

Usage:
    python3 tooling/scripts/check-summary-plain-language.py --all
    python3 tooling/scripts/check-summary-plain-language.py --changed
    python3 tooling/scripts/check-summary-plain-language.py --page motivational-gain-trumping-cognitive-offloading-2026
    python3 tooling/scripts/check-summary-plain-language.py slug-a slug-b
"""
from __future__ import annotations

import argparse
import os
import re
import subprocess
import sys

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ARTICLES = os.path.join(WIKI, 'content', 'en', 'articles')

# Notation that belongs in the body sections, not in a summary. Deliberately does not
# match bare numbers, percentages or "n = 299": a sample size in the synthesis is
# descriptive, while these are the symbols that turn a summary into a table.
STAT = re.compile(
    r'(?:β|η²|ρ|χ²|R²|RMSEA|CFI|TLI|SRMR)'
    r'|\b(?:d|g)\s*=\s*[−-]?\d'
    r'|\bp\s*[<=>]\s*0?\.\d'
    r'|\br\s*=\s*[−-]?\d'
    r'|\bOR\s*=\s*[\d.]'
    r'|\bCI\s*[\[=]'
    r'|\b(?:M|SD)\s*=\s*[\d.]'
)
LABEL = re.compile(r'^- \*\*[^*]{2,48}\.\*\*\s')
LABEL_COLON = re.compile(r'^- \*\*[^*]{2,48}:\*\*')


def sections(text: str, heading: str) -> str:
    m = re.search(r'(?ms)^## ' + re.escape(heading) + r'\n(.*?)(?=^## |\Z)', text)
    return m.group(1) if m else ''


def check(path: str) -> list[str]:
    slug = os.path.basename(path)[:-3]
    text = open(path, encoding='utf-8').read()
    problems: list[str] = []

    syn = re.search(r'(?m)^> \*\*Synthesis:\*\*(.*)$', text)
    if syn:
        m = STAT.search(syn.group(1))
        if m:
            problems.append(f'{slug}: synthesis blockquote carries statistical notation ({m.group(0)}); '
                            f'state the finding in words')

    for line in sections(text, 'Key Findings').split('\n'):
        if not line.strip().startswith('- '):
            continue
        m = STAT.search(line)
        if m:
            problems.append(f'{slug}: Key Findings bullet carries statistical notation ({m.group(0)}): '
                            f'{line.strip()[:80]}')

    practice = sections(text, 'What this means for practice').split('\n')
    for line in practice:
        s = line.strip()
        if not s.startswith('- '):
            continue
        if LABEL.match(s):
            continue
        if LABEL_COLON.match(s):
            problems.append(f'{slug}: practice bullet uses a colon label; house form is "- **Instructors.** ...": '
                            f'{s[:70]}')
        else:
            problems.append(f'{slug}: practice bullet has no audience label: {s[:70]}')
    return problems


def changed_slugs() -> list[str]:
    res = subprocess.run(['git', 'diff', '--name-only', 'HEAD'], cwd=WIKI, capture_output=True, text=True)
    if res.returncode != 0:
        print(f'FATAL: git diff HEAD failed: {res.stderr.strip()}', file=sys.stderr)
        raise SystemExit(2)
    paths = set(res.stdout.splitlines())
    untracked = subprocess.run(['git', 'ls-files', '--others', '--exclude-standard'],
                               cwd=WIKI, capture_output=True, text=True)
    paths.update(untracked.stdout.splitlines())
    out = []
    for p in paths:
        parts = p.split('/')
        if len(parts) == 4 and parts[0] == 'content' and parts[1] == 'en' and parts[2] == 'articles' \
                and p.endswith('.md'):
            out.append(os.path.basename(p)[:-3])
    # A connected-list-only migration does not touch the summary/practice bullets this gate
    # checks, so don't re-audit pages whose only change is that migration.
    import connected_migration
    skip = connected_migration.migration_only_set([f'content/en/articles/{s}.md' for s in out])
    out = [s for s in out if f'content/en/articles/{s}.md' not in skip]
    return sorted(out)


def main() -> int:
    ap = argparse.ArgumentParser(description='Article summaries must read as findings, not coefficients.')
    ap.add_argument('slugs', nargs='*')
    ap.add_argument('--all', action='store_true')
    ap.add_argument('--changed', action='store_true')
    ap.add_argument('--page', action='append', default=[])
    args = ap.parse_args()

    if args.changed:
        slugs = changed_slugs()
        if not slugs:
            print('Nothing to check: no article page changed since HEAD.')
            return 0
    elif args.all:
        slugs = sorted(f[:-3] for f in os.listdir(ARTICLES) if f.endswith('.md'))
    else:
        slugs = sorted(set(args.slugs) | set(args.page))
        if not slugs:
            ap.error('give slugs, --page SLUG, --changed or --all')

    problems: list[str] = []
    for slug in slugs:
        path = os.path.join(ARTICLES, f'{slug}.md')
        if not os.path.exists(path):
            problems.append(f'{slug}: no such article page')
            continue
        problems.extend(check(path))

    for p in problems:
        print(f'FAIL {p}')
    if problems:
        pages = len({p.split(':')[0] for p in problems})
        print(f'\n{len(problems)} problem(s) on {pages} of {len(slugs)} page(s). '
              f'See the practitioner-summary-writing skill: findings in words, coefficients in the body.')
        return 1
    print(f'OK - {len(slugs)} article page(s): synthesis and Key Findings read as findings; '
          f'practice bullets carry audience labels.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
