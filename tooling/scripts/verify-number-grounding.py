#!/usr/bin/env python3
"""Check that numeric claims in wiki article pages appear in their raw sources.

Usage:
    python3 tooling/scripts/verify-number-grounding.py <slug> [<slug> ...]
    python3 tooling/scripts/verify-number-grounding.py --all
    python3 tooling/scripts/verify-number-grounding.py --changed   # article pages in the working tree

For each article, every numeric token in the narrative body (everything between
the frontmatter and the `## Citation` section) is tested against the article's
`sources:` file under raw/papers/. Numbers that cannot be located are printed
for manual review.

What this catches: invented or mis-transcribed statistics. A real case: an
article asserted "78% domain accuracy vs 12% for the base model" while neither
number appeared anywhere in the paper.

Caveats: PDF and HTML text extraction causes false positives — leading-dot
p-values (`.001`), digits broken across lines, table columns split onto separate
lines, enumeration digits, and values duplicated by an HTML-to-text conversion
(an arXiv HTML raw prints `0.6950.695`, which defeats a strict word boundary). A
miss means "investigate", not "fabrication": grep the raw file for the value
before changing anything, and requalify the page only when the source really does
not carry the number.

A numeral is also accepted when the source spells it out: `33` passes when the
raw reads "Thirty-three articles were reviewed in full text" (hyphenated, spaced
and `hundred and` variants all count).

Identifiers are not checked at all: wikilink and link targets, arXiv ids and DOIs
are stripped before tokenizing, so a slug like `stanford-evidence-base-ai-k12-2026`
no longer reports a "12" that was never a claim.

Exit code is 1 when any article has ungrounded numbers, 0 otherwise.
"""
import glob
import os
import re
import subprocess
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


ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen']
TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']


def spell(n):
    """English words for a whole number, as papers print it (hyphenated)."""
    n = int(n)
    if n < 0 or n > 999999:
        return None
    if n < 20:
        return ONES[n]
    if n < 100:
        t, o = divmod(n, 10)
        return TENS[t] + ('' if not o else '-' + ONES[o])
    if n < 1000:
        h, r = divmod(n, 100)
        return ONES[h] + ' hundred' + ('' if not r else ' ' + (spell(r) or ''))
    th, r = divmod(n, 1000)
    return (spell(th) or '') + ' thousand' + ('' if not r else ' ' + (spell(r) or ''))


def spelled_forms(value):
    """Spelled-out variants of a numeral: hyphenated, spaced, and with 'and'."""
    if '.' in value or not value.isdigit():
        return []
    words = spell(int(value))
    if not words:
        return []
    forms = {words, words.replace('-', ' '), words.replace(' ', '-')}
    for sep in (' hundred ', ' thousand '):
        if sep in words:
            forms.add(words.replace(sep, sep + 'and '))
    return forms


def strip_identifiers(text):
    """Remove things that look numeric but are identifiers, not claims.

    Wikilink targets, bare wikilinks and markdown link URLs are slugs and URLs:
    `[[stanford-evidence-base-ai-k12-2026]]` carries a "12" that is part of a slug,
    not a statistic. arXiv ids and DOIs are identifiers too. Both classes were
    producing review noise on pages that were otherwise fully grounded.
    """
    text = re.sub(r'\[\[[^\]]*\]\]', ' ', text)
    text = re.sub(r'\]\([^)]*\)', ' ', text)
    text = re.sub(r'\[\d+(?:\s*,\s*\d+)*\]', ' ', text)   # citation markers: [7,15], [12]
    text = re.sub(r'\b[KG][-–]?12\b', ' ', text)            # the K-12 term, not the number 12
    text = re.sub(r'arXiv[:\s]*\d{4}\.\d{4,5}', ' ', text, flags=re.I)
    text = re.sub(r'\b10\.\d{4,}/[^\s)\]"\']*', ' ', text)
    return text


def ungrounded(slug):
    raw, article = load(slug)
    if raw is None or article is None:
        return None
    raw_n = normalize(raw)
    raw_l = raw_n.lower()
    squeezed = re.sub(r'\s+', '', raw_n)
    body = re.sub(r'^---\n.*?\n---', '', article.split('## Citation')[0], flags=re.S)
    # the Connected lists reproduce other pages' titles and slugs: they are an index,
    # not a claim about this paper, so their digits are not checked here
    body = re.sub(r'(?ms)^## Connected (?:Concepts|Articles|FAQs).*$', '', body)
    body = strip_identifiers(body)
    misses = []
    for value, number in numeric_tokens(body).items():
        if value in YEARS:
            continue
        if abs(number) < 1 and not value.startswith('0'):
            continue
        if re.search(r'(?<![\d.])' + re.escape(value) + r'(?![\d])', raw_n):
            continue
        if re.search(r'(?<![\d.])\.' + re.escape(value) + r'(?![\d])', raw_n):
            continue   # leading-dot form, e.g. the body prints "001" where the source writes ".001"
        if re.search(r'(?<![\d.])(?:0)?\.' + re.escape(value) + r'(?!\d)', raw_n):
            continue   # the page drops the leading zero (".054", ".944") that the source prints as "0.054"
        if value.startswith('0.') and re.search(r'(?<![\d.])\.' + re.escape(value[2:]) + r'(?!\d)', raw_n):
            continue   # the reverse: the page prints "0.054" where the source prints ".054"
        if len(value) >= 4 and value in squeezed:   # survives PDF line-wrap artefacts
            continue
        if any(form in raw_l for form in spelled_forms(value)):
            continue   # the source spells the number out, e.g. "Thirty-three articles"
        misses.append(value)
    return misses


def changed_slugs():
    """Article slugs touched in the working tree, so the check can gate one commit."""
    out = subprocess.run(['git', '-C', WIKI, 'status', '--porcelain', '--', 'articles'],
                         capture_output=True, text=True).stdout
    slugs = set()
    for line in out.splitlines():
        path = line[3:].strip().split(' -> ')[-1]
        if path.startswith('articles/') and path.endswith('.md'):
            slugs.add(os.path.basename(path)[:-3])
    return sorted(slugs)


def main(argv):
    if argv and argv[0] == '--changed':
        slugs = changed_slugs()
        if not slugs:
            print('No article pages changed in the working tree; nothing to ground.')
            return 0
    elif not argv or argv[0] == '--all':
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
