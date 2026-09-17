#!/usr/bin/env python3
"""Audit the structured metadata fields against the closed vocabularies.

The allowed values live in exactly one place, src/content.config.ts, and the Astro build
already rejects a page whose value is outside the list. This script is the pre-flight check:
it reports the same violations without a full build, plus the coverage report that tells you
which pages are missing a field they should probably have.

Usage:
    python3 tooling/scripts/audit-metadata.py            # report coverage + violations
    python3 tooling/scripts/audit-metadata.py --strict   # exit 1 if any violation is found
    python3 tooling/scripts/audit-metadata.py --missing research_method
                                                        # list pages missing one field

Fields whose absence is legitimate are reported as coverage only, never as errors: a study with
no disciplinary home should omit `discipline`, and an opinion piece may have no `level`.
"""
from __future__ import annotations

import argparse
import glob
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CONFIG = os.path.join(ROOT, 'src', 'content.config.ts')
SCHEMA_MD = os.path.join(ROOT, 'tooling', 'SCHEMA.md')
BEGIN_MARKER = '<!-- BEGIN GENERATED VOCABULARIES (source: src/content.config.ts) -->'
END_MARKER = '<!-- END GENERATED VOCABULARIES -->'
COLLECTIONS = ('articles', 'concepts', 'faqs')
FIELDS = ('research_method', 'discipline', 'audience', 'level', 'page_kind')
# Facet fields: their allowed values are the concept slugs of one registry
# section, so they are read from the generated src/data/facetVocab.ts rather
# than from content.config.ts (which builds them with facetList(...)).
FACET_VOCAB_TS = os.path.join(ROOT, 'src', 'data', 'facetVocab.ts')
# Fields that a page in that collection is expected to carry unless it genuinely does not apply.
EXPECTED = {
    'articles': ('research_method', 'audience', 'level'),
    'concepts': (),
    'faqs': (),
}


def load_facet_vocabularies() -> tuple[dict[str, list[str]], tuple[str, ...]]:
    src = open(FACET_VOCAB_TS, encoding='utf-8').read()
    vocab = {}
    body = src.split('export const FACET_VOCAB = {', 1)[1].split('} as const;', 1)[0]
    for m in re.finditer(r'^\s{2}(\w+): \[(.*?)\n  \],', body, re.S | re.M):
        vocab[m.group(1)] = re.findall(r"'([^']+)'", m.group(2))
    order = tuple(re.findall(r"field: '(\w+)'", src)) or tuple(vocab)
    return vocab, order


def load_vocabularies() -> dict[str, list[str]]:
    src = open(CONFIG, encoding='utf-8').read()
    vocab = {}
    for field in FIELDS:
        m = re.search(rf'{field}: enumList\((.*?)\n    \),', src, re.S)
        if not m:
            sys.exit(f'could not find the {field} vocabulary in {CONFIG}')
        vocab[field] = re.findall(r"'([^']+)'", m.group(1))
    facet_vocab, facet_order = load_facet_vocabularies()
    globals()['FIELDS'] = FIELDS + facet_order
    vocab.update(facet_vocab)
    return vocab


def frontmatter(path: str) -> str:
    text = open(path, encoding='utf-8').read()
    parts = text.split('---', 2)
    return parts[1] if len(parts) > 2 else ''


def parse_values(fm: str, field: str) -> list[str] | None:
    m = re.search(rf'^{field}:\s*(.*)$', fm, re.M)
    if not m:
        return None
    raw = m.group(1).strip()
    return [v.strip().strip('"\'') for v in raw.strip('[]').split(',') if v.strip()]


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--strict', action='store_true', help='exit 1 on any vocabulary violation')
    ap.add_argument('--missing', metavar='FIELD', help='list pages missing a field')
    ap.add_argument('--check-docs', action='store_true',
                    help='fail if tooling/SCHEMA.md enumerates different values than the schema')
    ap.add_argument('--write-docs', action='store_true',
                    help='regenerate the vocabulary block in tooling/SCHEMA.md from the schema')
    args = ap.parse_args()

    vocab = load_vocabularies()

    if args.write_docs or args.check_docs:
        schema_doc = os.path.join(ROOT, 'tooling', 'SCHEMA.md')
        text = open(schema_doc, encoding='utf-8').read()
        block = '\n'.join(f'{f}: ' + ' | '.join(vocab[f]) for f in FIELDS)
        new = (text[:text.index(BEGIN_MARKER) + len(BEGIN_MARKER)]
               + f'\n```\n{block}\n```\n'
               + text[text.index(END_MARKER):])
        if args.write_docs:
            if new != text:
                open(schema_doc, 'w', encoding='utf-8').write(new)
                print('SCHEMA.md vocabulary block regenerated from', os.path.relpath(CONFIG, ROOT))
            else:
                print('SCHEMA.md vocabulary block already matches the schema')
        else:
            documented = re.search(re.escape(BEGIN_MARKER) + r'(.*?)' + re.escape(END_MARKER),
                                   text, re.S)
            found = {}
            if documented:
                for f in FIELDS:
                    m = re.search(rf'^{f}: (.*)$', documented.group(1), re.M)
                    found[f] = [v.strip() for v in m.group(1).split('|')] if m else []
            diffs = [f for f in FIELDS if found.get(f) != vocab[f]]
            if diffs:
                print('SCHEMA.md disagrees with the schema for: ' + ', '.join(diffs))
                for f in diffs:
                    only_doc = [v for v in found.get(f, []) if v not in vocab[f]]
                    only_schema = [v for v in vocab[f] if v not in found.get(f, [])]
                    if only_doc:
                        print(f'  {f}: in SCHEMA.md only -> {only_doc}')
                    if only_schema:
                        print(f'  {f}: in schema only    -> {only_schema}')
                print('  run --write-docs to regenerate')
                return 1
            print('SCHEMA.md vocabularies match the schema')
        return 0
    violations: list[tuple[str, str, str]] = []
    coverage = {c: {f: 0 for f in FIELDS} for c in COLLECTIONS}
    totals = {c: 0 for c in COLLECTIONS}
    missing: list[str] = []

    for coll in COLLECTIONS:
        for path in sorted(glob.glob(os.path.join(ROOT, coll, '*.md'))):
            totals[coll] += 1
            fm = frontmatter(path)
            slug = f'{coll}/{os.path.basename(path)[:-3]}'
            for field, allowed in vocab.items():
                values = parse_values(fm, field)
                if values is None or not values:
                    if args.missing == field:
                        missing.append(slug)
                    continue
                coverage[coll][field] += 1
                for v in values:
                    if v not in allowed:
                        violations.append((slug, field, v))

    print('Vocabulary source:', os.path.relpath(CONFIG, ROOT))
    for field, allowed in vocab.items():
        print(f'  {field}: {len(allowed)} allowed values')

    print('\nCoverage (pages carrying the field):')
    for coll in COLLECTIONS:
        n = totals[coll] or 1
        parts = [f'{f} {coverage[coll][f]}/{totals[coll]} ({100 * coverage[coll][f] // n}%)'
                 for f in FIELDS if coverage[coll][f]]
        print(f'  {coll:9s} {totals[coll]:4d} pages: ' + ', '.join(parts or ['no structured fields']))

    if args.missing:
        # for articles, distinguish "should have" from "legitimately absent"
        print(f'\nPages without {args.missing}: {len(missing)}')
        expected = EXPECTED.get(args.missing.split('/')[0], ())
        for slug in missing:
            coll = slug.split('/')[0]
            flag = '  <- expected for this collection' if args.missing in EXPECTED.get(coll, ()) else ''
            print(f'  {slug}{flag}')
        if not missing and not expected:
            pass

    print(f'\nVocabulary violations: {len(violations)}')
    for slug, field, value in violations[:50]:
        print(f'  {slug}: {field} = "{value}" is not in the allowed list')

    if args.strict and violations:
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
