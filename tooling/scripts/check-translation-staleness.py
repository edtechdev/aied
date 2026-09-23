#!/usr/bin/env python3
"""Report which translated pages are out of date with their English source.

Translating a page is expensive, so a translation should only ever be redone when the
English text actually changed. Each translated page records the English page's
`updated` value at translation time in `source_updated`; this script compares the two.

    python3 tooling/scripts/check-translation-staleness.py            # report
    python3 tooling/scripts/check-translation-staleness.py --strict   # exit 1 if stale
    python3 tooling/scripts/check-translation-staleness.py --list     # name every stale page

A page with no `source_updated` cannot be judged and is reported as unrecorded: add the
field the next time that page is translated.
"""

import glob
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import content_paths

COLLECTIONS = ('concepts', 'faqs', 'resources')
LOCALE_DIRS = tuple(content_paths.TRANSLATED)

FRONTMATTER = re.compile(r'^---\n(.*?)\n---\n', re.S)


def frontmatter(path):
    text = open(path, encoding='utf-8').read()
    m = FRONTMATTER.match(text)
    if not m:
        return {}
    fields = {}
    for line in m.group(1).splitlines():
        if line.startswith(' ') or line.startswith('-'):
            continue
        if ':' in line:
            key, _, value = line.partition(':')
            fields[key.strip()] = value.strip().strip('"').strip("'")
    return fields


def main():
    strict = '--strict' in sys.argv
    show_list = '--list' in sys.argv

    # English page -> its last edit
    source = {}
    for collection in COLLECTIONS:
        for path in glob.glob(content_paths.glob_md(collection)):
            slug = f'{collection}/{os.path.basename(path)[:-3]}'
            source[slug] = frontmatter(path).get('updated', '')

    stale, fresh, unrecorded, orphan = [], [], [], []
    for locale in LOCALE_DIRS:
        for collection in COLLECTIONS:
            for path in glob.glob(content_paths.glob_md(collection, locale)):
                fm = frontmatter(path)
                target = fm.get('translation_of', '')
                rel = os.path.relpath(path, ROOT)
                if not target or target not in source:
                    orphan.append(rel)
                    continue
                recorded = fm.get('source_updated', '')
                current = source[target]
                if not recorded:
                    unrecorded.append(rel)
                elif recorded != current:
                    stale.append((rel, recorded, current))
                else:
                    fresh.append(rel)

    print(f'translated pages: {len(stale) + len(fresh) + len(unrecorded) + len(orphan)}')
    print(f'  up to date:      {len(fresh)}')
    print(f'  out of date:     {len(stale)}')
    print(f'  no source_updated recorded: {len(unrecorded)}')
    if orphan:
        print(f'  source page not found:      {len(orphan)} -> {", ".join(orphan[:5])}')
    if show_list or strict:
        for rel, recorded, current in sorted(stale):
            print(f'    {rel}: translated from {recorded}, source is now {current}')
        for rel in sorted(unrecorded):
            print(f'    {rel}: no source_updated')
    if strict and stale:
        sys.exit(1)


if __name__ == '__main__':
    main()
