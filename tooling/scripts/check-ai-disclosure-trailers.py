#!/usr/bin/env python3
"""Check AI-use trailers on recent commits. Advisory by default.

Per-change provenance lives in git rather than in page frontmatter, because a
frontmatter field records only the model behind the *current* text. Every commit
made with tooling/ai-commit.sh carries:

    AI-Model: deepseek/deepseek-v4.1-flash
    AI-Role: drafting, revision
    AI-Agent: hermes-agent
    Human-Review: editor            (only when someone reviewed the change)

This script reports commits in a range that lack the trailers, so the record has
no silent gaps. It exits 0 unless --strict is given, because commits made before
the convention existed cannot be retrofitted.

Usage:
  python3 tooling/scripts/check-ai-disclosure-trailers.py                 # last 20 commits
  python3 tooling/scripts/check-ai-disclosure-trailers.py --range origin/main..HEAD
  python3 tooling/scripts/check-ai-disclosure-trailers.py --strict        # fail on gaps
"""
from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys

# The date the trailer convention was introduced. Commits older than this are not
# expected to carry trailers (they predate the convention and cannot be rewritten).
CONVENTION_START = '2026-09-22'

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def git(*args: str) -> str:
    return subprocess.run(['git', *args], cwd=WIKI, capture_output=True, text=True).stdout


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--range', default='', help='git range, e.g. origin/main..HEAD')
    ap.add_argument('--limit', type=int, default=20, help='how many commits when no range is given')
    ap.add_argument('--strict', action='store_true', help='exit 1 when a commit has no trailers')
    args = ap.parse_args()

    with open(os.path.join(WIKI, 'site.config.json'), encoding='utf-8') as fh:
        cfg = json.load(fh)
    started = CONVENTION_START

    rev = args.range or f'-{args.limit}'
    # Records are separated by \x1e and fields by \x1f, because a trailer with more
    # than one value (two models in one commit) puts newlines inside the field.
    raw = git('log', rev, '--format=%H%x1f%ad%x1f%s%x1fM=[%(trailers:key=AI-Model,valueonly)]'
                          '%x1fR=[%(trailers:key=AI-Role,valueonly)]%x1e', '--date=short')
    rows = [row.strip() for row in raw.split('\x1e') if row.strip()]

    checked = ranked = with_model = with_role = 0
    gaps = []
    for line in rows:
        parts = line.split('\x1f')
        if len(parts) < 5:
            continue
        sha, date, subject = parts[0], parts[1], parts[2]
        # Trailer values are wrapped in M=[...] / R=[...] because git drops a trailer
        # field entirely when it is empty, which would shift positional fields. A
        # multi-value trailer arrives as several lines in one field.
        def field(tag: str, text: str = line) -> str:
            m = re.search(rf'{tag}=\[(.*?)\]', text, re.S)
            if not m:
                return ''
            return ', '.join(x.strip() for x in m.group(1).split('\n') if x.strip())

        model, role = field('M'), field('R')
        # Only commits on or after the convention date are expected to comply.
        if started and date < started:
            continue
        checked += 1
        has_model, has_role = bool(model.strip()), bool(role.strip())
        with_model += has_model
        with_role += has_role
        if has_model and has_role:
            ranked += 1
        else:
            gaps.append((sha[:8], date, subject[:64], 'model' if not has_model else '',
                         'role' if not has_role else ''))

    print(f'AI-use trailers: {ranked}/{checked} commit(s) since {started} '
          f'carry both AI-Model and AI-Role ({with_model} with a model, {with_role} with a role).')
    if gaps:
        print('Commits without a complete trailer set (use tooling/ai-commit.sh):')
        for sha, date, subject, miss_model, miss_role in gaps:
            missing = ', '.join(x for x in (miss_model, miss_role) if x)
            print(f'  {sha} {date} {subject} -> missing {missing}')
    if args.strict and gaps:
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
