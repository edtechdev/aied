#!/usr/bin/env python3
"""Validate the typed facet fields on every page.

Until 2026-09-17 each page carried a `tags:` list of concept slugs, and the facet
fields (`foundations`, `pedagogy`, `technology`, `assessment`, `stakeholders`,
`ethics`) were derived from it by looking up which section of
`concepts.registry.yaml` each tag belonged to. That derivation was mechanical but
one-directional: the tag list was the authoring surface and the facets a projection
of it.

Tags are gone. The facet fields are now authored directly, which makes this script
the enforcement point rather than a projection:

  1. every value in a facet field must be a concept slug filed under that field's
     registry section - a technology slug in `pedagogy` is an error, and so is a
     slug that does not exist at all;
  2. no page should carry the same concept in two different facet fields;
  3. a page with no facet value and no `discipline`, `level`, `audience`,
     `research_method` or `page_kind` has no typed metadata at all, which is
     reported as a warning (some pages genuinely are cross-cutting).

The vocabularies come from src/data/facetVocab.ts, which is generated from
concepts.registry.yaml, so adding a concept to a section makes it legal here with
no second list to maintain.

Usage:
    python3 tooling/scripts/validate-facets.py          # check (exit 1 on errors)
    python3 tooling/scripts/validate-facets.py --quiet
"""

import os
import re
import sys
import glob

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
FACET_VOCAB_TS = os.path.join(ROOT, 'src', 'data', 'facetVocab.ts')
COLLECTIONS = ('articles', 'concepts', 'faqs', 'resources')
OTHER_FIELDS = ('discipline', 'level', 'audience', 'research_method', 'page_kind')


def load_facet_vocab():
    src = open(FACET_VOCAB_TS, encoding='utf-8').read()
    body = src.split('export const FACET_VOCAB = {', 1)[1].split('} as const;', 1)[0]
    vocab = {}
    for m in re.finditer(r'^\s{2}(\w+): \[(.*?)\n  \],', body, re.S | re.M):
        vocab[m.group(1)] = set(re.findall(r"'([^']+)'", m.group(2)))
    if not vocab:
        sys.exit(f'could not read any facet vocabulary from {FACET_VOCAB_TS}')
    return vocab


def frontmatter(path):
    text = open(path, encoding='utf-8').read()
    if not text.startswith('---'):
        return None
    parts = text.split('---', 2)
    if len(parts) < 3:
        return None
    return parts[1]


def inline_list(fm, field):
    m = re.search(rf'^{field}:\s*\[(.*?)\]\s*$', fm, re.M)
    if not m:
        return None
    return [v.strip() for v in m.group(1).split(',') if v.strip()]


def main():
    quiet = '--quiet' in sys.argv
    vocab = load_facet_vocab()
    errors = []
    warnings = []
    checked = 0
    for collection in COLLECTIONS:
        for path in sorted(glob.glob(os.path.join(ROOT, collection, '*.md'))):
            fm = frontmatter(path)
            if fm is None:
                continue
            checked += 1
            rel = os.path.relpath(path, ROOT)
            seen = {}
            typed = 0
            for field, allowed in vocab.items():
                values = inline_list(fm, field)
                if values is None:
                    continue
                typed += len(values)
                for value in values:
                    if value not in allowed:
                        errors.append(f'{rel}: {field} value {value!r} is not a concept in that registry section')
                    if value in seen:
                        errors.append(f'{rel}: {value!r} appears in both {seen[value]} and {field}')
                    else:
                        seen[value] = field
            for field in OTHER_FIELDS:
                if inline_list(fm, field):
                    typed += 1
            if typed == 0:
                warnings.append(f'{rel}: no typed metadata at all')

    if errors and not quiet:
        for e in errors[:40]:
            print('ERROR', e)
        if len(errors) > 40:
            print(f'... {len(errors) - 40} more')
    if warnings and not quiet:
        print(f'({len(warnings)} page(s) with no typed metadata)')
    if errors:
        print(f'FAILED — {len(errors)} facet error(s) across {checked} page(s)')
        sys.exit(1)
    if not quiet:
        print(f'OK — facet fields valid on {checked} page(s)')
    return 0


if __name__ == '__main__':
    sys.exit(main())
