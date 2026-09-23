#!/usr/bin/env python3
"""Respell British forms in the body prose of wiki pages, leaving citations alone.

`check-us-english.py` reports British spellings; this script fixes them. It rewrites
only the body prose: frontmatter (which carries the paper's own title) and everything
from `## Citation` onward are left byte-identical, because a citation reproduces the
title as the journal printed it.

Usage:
    python3 tooling/scripts/respell-us-english.py <page.md> [<page.md> ...]
    python3 tooling/scripts/respell-us-english.py --changed      # git-modified pages

A curated pair list is used deliberately. A blanket `-ise` rule is unsafe: plural
`analyses` is correct US English as a noun, so a naive rule rewrites "meta-analyses"
into "meta-analyzes".
"""
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import content_paths

PAIRS = {
    'behavioural': 'behavioral', 'behaviours': 'behaviors', 'behaviour': 'behavior',
    'modelling': 'modeling', 'modelled': 'modeled', 'modeller': 'modeler', 'modellers': 'modelers',
    'artefacts': 'artifacts', 'artefact': 'artifact',
    'skilful': 'skillful', 'organising': 'organizing', 'organised': 'organized',
    'organise': 'organize', 'organisation': 'organization', 'organisations': 'organizations',
    'prioritise': 'prioritize', 'prioritised': 'prioritized', 'prioritising': 'prioritizing',
    'practising': 'practicing', 'practise': 'practice', 'practises': 'practices',
    'favour': 'favor', 'favours': 'favors', 'favoured': 'favored',
    'favouring': 'favoring', 'favourite': 'favorite',
    'analysing': 'analyzing', 'analysed': 'analyzed', 'analyse': 'analyze',
    'penalised': 'penalized', 'penalise': 'penalize', 'penalising': 'penalizing',
    'centre': 'center', 'centres': 'centers', 'centred': 'centered', 'centring': 'centering',
    'enrolment': 'enrollment', 'enrolments': 'enrollments',
    'defence': 'defense', 'labour': 'labor', 'judgement': 'judgment', 'judgements': 'judgments',
    'recognise': 'recognize', 'recognised': 'recognized', 'recognising': 'recognizing',
    'summarise': 'summarize', 'summarised': 'summarized', 'summarising': 'summarizing',
    'synthesise': 'synthesize', 'synthesised': 'synthesized', 'synthesising': 'synthesizing',
    'utilise': 'utilize', 'utilised': 'utilized', 'utilising': 'utilizing',
    'emphasise': 'emphasize', 'emphasised': 'emphasized', 'emphasising': 'emphasizing',
    'criticise': 'criticize', 'criticised': 'criticized', 'standardise': 'standardize',
    'standardised': 'standardized', 'normalise': 'normalize', 'normalised': 'normalized',
    'generalise': 'generalize', 'generalised': 'generalized', 'generalisable': 'generalizable',
    'generalisability': 'generalizability', 'operationalise': 'operationalize',
    'operationalised': 'operationalized', 'conceptualise': 'conceptualize',
    'conceptualised': 'conceptualized', 'categorise': 'categorize', 'categorised': 'categorized',
    'characterise': 'characterize', 'characterised': 'characterized',
    'minimise': 'minimize', 'minimised': 'minimized', 'maximise': 'maximize', 'maximised': 'maximized',
    'optimise': 'optimize', 'optimised': 'optimized', 'customise': 'customize',
    'personalise': 'personalize', 'personalised': 'personalized', 'visualise': 'visualize',
    'visualised': 'visualized', 'realise': 'realize', 'realised': 'realized',
    'hypothesise': 'hypothesize', 'hypothesised': 'hypothesized',
    'catalogue': 'catalog', 'maths': 'math', 'fulfil': 'fulfill',
    'learnt': 'learned', 'whilst': 'while', 'amongst': 'among',
}
PATTERN = re.compile(r'(?i)\b(' + '|'.join(sorted(PAIRS, key=len, reverse=True)) + r')\b')


def match_case(src, dst):
    if src.isupper():
        return dst.upper()
    if src[0].isupper():
        return dst[0].upper() + dst[1:]
    return dst


def fix(path):
    """Respell one page. Returns {word: count} for what changed."""
    with open(path, encoding='utf-8') as fh:
        text = fh.read()
    m = re.match(r'^(---\n.*?\n---\n)', text, re.S)
    head, rest = (m.group(1), text[m.end():]) if m else ('', text)
    cut = rest.find('## Citation')
    body, tail = (rest, '') if cut == -1 else (rest[:cut], rest[cut:])

    changed = {}

    def sub(mo):
        word = mo.group(0)
        changed[word] = changed.get(word, 0) + 1
        return match_case(word, PAIRS[word.lower()])

    fixed = PATTERN.sub(sub, body)
    if fixed != body:
        with open(path, 'w', encoding='utf-8') as fh:
            fh.write(head + fixed + tail)
    return changed


def changed_pages():
    # Resolve the collections through the content root (site.config.json `content`):
    # the old bare 'articles/' paths no longer exist, and git would quietly return
    # nothing, leaving this pass reporting "no pages changed" while pages were dirty.
    paths = [content_paths.rel(content_paths.collection(name)) + '/'
             for name in ('articles', 'concepts', 'faqs')]
    out = subprocess.run(['git', '-C', ROOT, 'status', '--porcelain', '--', *paths],
                         capture_output=True, text=True).stdout
    return [os.path.join(ROOT, line.split()[-1]) for line in out.splitlines() if line.strip().endswith('.md')]


def main(argv):
    if not argv:
        print(__doc__)
        return 2
    paths = changed_pages() if argv[0] == '--changed' else argv
    if not paths:
        print('no pages changed in the working tree')
        return 0
    total = 0
    for path in paths:
        changed = fix(path)
        total += sum(changed.values())
        print(f'{os.path.basename(path)}: ' + (', '.join(f'{k} x{v}' for k, v in changed.items()) if changed else 'clean'))
    print(f'\n{total} British spelling(s) respelled in body prose')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
