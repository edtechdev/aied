#!/usr/bin/env python3
"""Check that numeric claims in wiki article pages appear in their raw sources.

Usage:
    python3 tooling/scripts/verify-number-grounding.py <slug> [<slug> ...]
    python3 tooling/scripts/verify-number-grounding.py --all

For each article, every numeric token in the narrative body (everything between
the frontmatter and the `## Citation` section) is tested against the article's
`sources:` file under raw/papers/. Numbers that cannot be located are printed
for manual review.

What this catches: invented or mis-transcribed statistics. A real case: an
article asserted "78% domain accuracy vs 12% for the base model" while neither
number appeared anywhere in the paper.

Caveats: PDF text extraction causes false positives — leading-dot p-values
(`.001`), digits broken across lines, table columns split onto separate lines,
and enumeration digits. A miss means "investigate", not "fabrication": grep the
raw file for the value before changing anything.

Exit code is 1 when any article has ungrounded numbers, 0 otherwise.
"""
import glob
import os
import re
import sys

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
YEARS = {str(y) for y in range(1990, 2031)}


def load(slug):
    path = os.path.join(WIKI, 'articles', slug + '.md')
    if not os.path.exists(path):
        return None, None
    text = open(path, encoding='utf-8').read()
    fm = re.match(r'^---\n(.*?)\n---', text, re.S)
    if not fm:
        return None, text
    m = re.search(r'([\w\-./]+\.md)', fm.group(1))
    if not m:
        return None, text
    raw_path = os.path.join(WIKI, 'raw', 'papers', os.path.basename(m.group(1)))
    if not os.path.exists(raw_path):
        return None, text
    return open(raw_path, encoding='utf-8', errors='ignore').read(), text


def normalize(text):
    return (text.replace(',', '').replace('\u2013', '-').replace('\u2212', '-')
                .replace('%', '').replace('$', ''))


def numeric_tokens(text):
    tokens = {}
    for m in re.finditer(r'\$?\d[\d,]*(?:\.\d+)?\s?%?', text):
        value = m.group(0).replace(',', '').replace('%', '').replace('$', '').strip()
        try:
            tokens[value] = float(value)
        except ValueError:
            continue
    return tokens


def ungrounded(slug):
    raw, article = load(slug)
    if raw is None or article is None:
        return None
    raw_n = normalize(raw)
    squeezed = re.sub(r'\s+', '', raw_n)
    body = re.sub(r'^---\n.*?\n---', '', article.split('## Citation')[0], flags=re.S)
    misses = []
    for value, number in numeric_tokens(body).items():
        if value in YEARS:
            continue
        if abs(number) < 1 and not value.startswith('0'):
            continue
        if re.search(r'(?<![\d.])' + re.escape(value) + r'(?![\d])', raw_n):
            continue
        if re.search(r'(?<![\d.])\.' + re.escape(value) + r'(?![\d])', raw_n):
            continue   # leading-dot form, e.g. "p < .001" written as "001" in the body
        if len(value) >= 4 and value in squeezed:   # survives PDF line-wrap artefacts
            continue
        misses.append(value)
    return misses


def main(argv):
    if not argv or argv[0] == '--all':
        slugs = sorted(os.path.basename(p)[:-3] for p in glob.glob(os.path.join(WIKI, 'articles', '*.md')))
    else:
        slugs = argv
    bad = 0
    for slug in slugs:
        misses = ungrounded(slug)
        if misses is None:
            print(f'{slug}: [no raw source found - cannot verify]')
            continue
        if misses:
            bad += 1
            print(f'{slug}: {len(misses)} numeric claim(s) not found in the raw source -> {misses}')
    print(f'\nChecked {len(slugs)} article(s); {bad} with numbers to review.')
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
