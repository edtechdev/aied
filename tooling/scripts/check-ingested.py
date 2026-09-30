#!/usr/bin/env python3
"""Report whether papers are already ingested, by DOI.

Why this exists
---------------
Before ingesting a batch, each PDF's DOI must be checked against raw/papers/ so a
re-sent paper does not become a second page for the same work. The naive check --
searching the whole raw corpus for the DOI string -- is WRONG in both directions:

  * a paper that CITES another paper's DOI in its reference list makes that DOI look
    ingested when it is not (this wrongly skipped a new paper on 2026-09-30), and
  * raw sources saved by the older pipeline have no YAML frontmatter, so checking
    frontmatter only misses them (only ~300 of 1,600 raw files carry a `doi:` field).

The reliable signal: a paper's OWN DOI appears in the header of its own raw file --
the extracted first page, carrying the publisher's "DOI 10.xxxx/..." line, the
"Citation:" block, or the `source_url`/`doi` frontmatter -- whereas a CITED DOI
appears only deep in the body, inside a reference entry. So the test is positional:
a match within the first HEAD_BYTES of a raw file identifies that file's own paper.

Usage
-----
    check-ingested.py 10.3390/bs16071150 10.3389/fpsyg.2026.1905455
    check-ingested.py --slugs-file dois.txt     # one DOI per line
    check-ingested.py --sources                # summarise what is ingested

Exit status is 0 when every DOI is new, 1 when at least one is already ingested,
so a batch script can stop before writing duplicate pages.
"""
import argparse
import glob
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
RAW = os.path.join(ROOT, 'raw', 'papers')

# A paper's own DOI lives in its header; a cited DOI lives in the body. 6 KB covers
# the extracted first page (title block, abstract start) for both the layout-preserving
# and the markdown-captured raw sources, while the shortest body citation seen in this
# corpus sits at ~36 KB.
HEAD_BYTES = 6000


def raw_files():
    return sorted(glob.glob(os.path.join(RAW, '*.md')))


def find_owner(doi, files=None):
    """Return the raw filename that IS this DOI's paper, or None."""
    pat = re.compile(re.escape(doi) + r'(?![0-9])')
    for path in (files if files is not None else raw_files()):
        with open(path, encoding='utf-8', errors='replace') as fh:
            head = fh.read(HEAD_BYTES)
        if pat.search(head):
            return os.path.basename(path)
    return None


def count_citations(doi, files=None):
    """How many raw files mention this DOI anywhere (i.e. cite it)."""
    n = 0
    for path in (files if files is not None else raw_files()):
        with open(path, encoding='utf-8', errors='replace') as fh:
            if doi in fh.read():
                n += 1
    return n


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('dois', nargs='*', help='DOI(s) to check')
    ap.add_argument('--slugs-file', help='file with one DOI per line')
    ap.add_argument('--sources', action='store_true',
                    help='summarise how many raw sources are on disk')
    args = ap.parse_args(argv)

    files = raw_files()
    if args.sources:
        print(f'{len(files)} raw source(s) under {RAW}')
        if not args.dois and not args.slugs_file:
            return 0

    dois = list(args.dois)
    if args.slugs_file:
        with open(args.slugs_file, encoding='utf-8') as fh:
            dois += [l.strip() for l in fh if l.strip() and not l.startswith('#')]

    if not dois:
        ap.error('give at least one DOI, or --slugs-file, or --sources')

    already = 0
    for doi in dois:
        owner = find_owner(doi, files)
        if owner:
            already += 1
            print(f'{doi:34s} ALREADY INGESTED -> {owner}')
        else:
            cites = count_citations(doi, files)
            note = f' (cited by {cites} raw source(s), not itself ingested)' if cites else ''
            print(f'{doi:34s} NEW{note}')

    print(f'\n{len(dois)} checked: {len(dois) - already} new, {already} already ingested')
    return 1 if already else 0


if __name__ == '__main__':
    sys.exit(main())