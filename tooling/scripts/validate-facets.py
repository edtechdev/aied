#!/usr/bin/env python3
"""Validate the typed facet fields on every page.

Until 2026-09-17 each page carried a `tags:` list of concept slugs, and the facet
fields (`foundations`, `pedagogy`, `technology`, `assessment`, `methods`,
`institutions`, `ethics`) were derived from it by looking up which section of
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

Those five fields are also enumerated, in `src/content.config.ts` rather than in
the concept registry, and until 2026-10-04 this script only counted them. A page
carrying `audience: [teacher educators]` therefore passed here and failed the
build's own schema check instead. They are now validated against the `enumList`
in content.config.ts, so the enum lives in one place and both consumers agree.

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
import content_paths

FACET_VOCAB_TS = os.path.join(ROOT, 'src', 'data', 'facetVocab.ts')
CONTENT_CONFIG_TS = os.path.join(ROOT, 'src', 'content.config.ts')
COLLECTIONS = ('articles', 'concepts', 'faqs', 'resources')
# Translated content lives in locale folders mirroring the content root
# layout). Its facet values are copied from the English page and
# must be valid slugs too, so they are validated here.
# Every locale that can hold translated content pages (site.config.json i18n.locales
# minus the default locale). Keep in step with src/content.config.ts LOCALE_CONTENT_DIRS.
LOCALE_DIRS = tuple(content_paths.TRANSLATED)
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


def load_enum_fields():
    """The five hand-curated fields, read from their enumList in content.config.ts.

    They are enumerated there rather than in the concept registry, so the build
    already rejects a bad value; this keeps the gate from passing a page the
    build will refuse.
    """
    src = open(CONTENT_CONFIG_TS, encoding='utf-8').read()
    enums = {}
    for field in OTHER_FIELDS:
        m = re.search(rf'^\s*{field}: enumList\((.*?)\),\s*$', src, re.S | re.M)
        if m:
            enums[field] = set(re.findall(r"'([^']+)'", m.group(1)))
    missing = [f for f in OTHER_FIELDS if f not in enums]
    if missing:
        sys.exit(f'could not read enumList for {missing} from {CONTENT_CONFIG_TS}')
    return enums


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
    enums = load_enum_fields()
    errors = []
    warnings = []
    checked = 0
    for name, locale in ([(c, content_paths.DEFAULT_DIR) for c in COLLECTIONS]
                         + [(c, l) for l in LOCALE_DIRS for c in COLLECTIONS]):
        for path in sorted(glob.glob(content_paths.glob_md(name, locale))):
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
                values = inline_list(fm, field)
                if not values:
                    continue
                typed += 1
                for value in values:
                    if value not in enums[field]:
                        errors.append(f'{rel}: {field} value {value!r} is not in the '
                                      f'{field} enum in src/content.config.ts')
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
