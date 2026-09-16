#!/usr/bin/env python3
"""Check that every article body opens with a synthesis blockquote.

The wiki's article shape is `> **Synthesis:** ...` as the first body element,
followed by Key Findings, Connected lists and the Citation. Older pages
(pre-2026-08) sometimes open with a bare prose paragraph, an unlabelled
blockquote, a standalone author/venue line, or a single-paragraph heading, which
renders as a page with no summary at the top.

Read-only: this script never edits a page. It reports the pages that need a
human normalisation, so a bulk pass can be reviewed before it runs.

Usage:
    python3 tooling/scripts/check-article-intros.py              # all articles
    python3 tooling/scripts/check-article-intros.py --since 2026-07
    python3 tooling/scripts/check-article-intros.py --json
    python3 tooling/scripts/check-article-intros.py --quiet       # summary only

Exit status: 0 clean, 1 findings.
"""
import argparse
import glob
import json
import os
import re
import sys

FM = re.compile(r'^---\n(.*?)\n---\n', re.DOTALL)
MIN_WORDS = 25
VENUE_NOISE = re.compile(
    r'doi:|CC BY|Taylor & Francis|Springer|Elsevier|Wiley|SAGE|'
    r'^\s*>?\s*\*\*(?:Authors?|Year|Venue|Conference|Journal|DOI)\b|'
    r'^\s*>?\s*\*{0,2}[A-Z][^|]{0,80}\*{0,2}\s*[—–-]\s*\*?(?:arXiv|cs\.|Proceedings)',
    re.IGNORECASE)
LISTY = re.compile(r'^\s*(?:[-*+]|\d+\.)\s')


def body_of(raw):
    m = FM.match(raw)
    return (raw[m.end():] if m else raw).lstrip('\n')


def created_of(raw):
    m = FM.match(raw)
    if not m:
        return ''
    c = re.search(r'^created:\s*"?(.*?)"?\s*$', m.group(1), re.M)
    return c.group(1) if c else ''


def first_block(lines):
    """Return (kind, text_lines, start_index) of the first body element."""
    i = 0
    while i < len(lines) and not lines[i].strip():
        i += 1
    if i >= len(lines):
        return 'empty', [], i
    if lines[i].lstrip().startswith('>'):
        j = i
        while j < len(lines) and lines[j].lstrip().startswith('>'):
            j += 1
        return 'blockquote', lines[i:j], i
    if lines[i].lstrip().startswith('#'):
        return 'heading', [lines[i]], i
    if LISTY.match(lines[i]):
        return 'list', [lines[i]], i
    j = i
    while j < len(lines) and lines[j].strip() and not lines[j].lstrip().startswith('#'):
        j += 1
    return 'prose', lines[i:j], i


def clean(block):
    txt = ' '.join(l.lstrip('>').strip() for l in block)
    return re.sub(r'\s+', ' ', txt).strip()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--since', help='only pages created on/after this prefix, e.g. 2026-07')
    ap.add_argument('--json', action='store_true')
    ap.add_argument('--quiet', action='store_true')
    ap.add_argument('paths', nargs='*', default=['articles/*.md'])
    a = ap.parse_args()

    files = []
    for pat in a.paths:
        files.extend(sorted(glob.glob(pat)))
    findings = []
    checked = 0
    for f in files:
        raw = open(f, encoding='utf-8').read()
        if a.since and created_of(raw) < a.since:
            continue
        checked += 1
        lines = body_of(raw).split('\n')
        kind, block, start = first_block(lines)
        text = clean(block)
        after = ' '.join(lines[start + len(block):])
        issues = []
        if kind != 'blockquote':
            issues.append(f'no-synthesis ({kind} leads)')
        elif 'synthesis' not in text.lower():
            if VENUE_NOISE.search(text):
                issues.append('venue-or-author line labelled as synthesis')
            else:
                issues.append('blockquote is not labelled as synthesis')
        elif len(text.split()) < MIN_WORDS:
            issues.append(f'synthesis under {MIN_WORDS} words ({len(text.split())})')
        if text and len(text.split()) > MIN_WORDS and text in after:
            issues.append('synthesis text repeated later in the body')
        if issues:
            findings.append({'page': f, 'issues': issues, 'lead': text[:110]})

    if a.json:
        print(json.dumps({'checked': checked, 'findings': findings}, indent=2))
    else:
        if not a.quiet:
            for x in findings:
                print(f'{x["page"]}: {"; ".join(x["issues"])}')
                print(f'    {x["lead"]}')
        print(f'\nChecked {checked} page(s); {len(findings)} with a problem lead.')
    return 1 if findings else 0


if __name__ == '__main__':
    sys.exit(main())
