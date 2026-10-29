#!/usr/bin/env python3
"""Check that a page's translations still mirror the English page they claim to translate.

Usage:
    python3 tooling/scripts/check-translation-parity.py --page open-education
    python3 tooling/scripts/check-translation-parity.py --page open-education --locales es ja
    python3 tooling/scripts/check-translation-parity.py --changed     # twins touched vs HEAD
    python3 tooling/scripts/check-translation-parity.py --all --limit 40
    python3 tooling/scripts/check-translation-parity.py --all --strict

Why this exists. A translated page can pass every structural gate and still be wrong: a child
model that runs out of context pastes a section from a neighbouring page, which keeps every
heading and every link, so heading counts and link checks both pass. Two probes catch it. The
wikilink TARGET multiset must equal English exactly (catches a target altered in one locale out
of fifteen), and the paragraph count of every H2 section must equal English (catches pasted or
merged content). Neither is covered by check-translated-headings.py, which only compares the
connected heading text, or by check-translation-staleness.py, which only compares timestamps.

Scope. --changed is the default mode of use from run-gates.py and looks only at translated files
touched in the working tree, so a wave of new locale files is checked without auditing 3,000
pages. --all is an explicit diagnostic: the corpus carries pre-existing drift (English labels left
in connected lists, link multiset drift on older pages) and a full run reports it rather than
claiming the corpus is clean.

Exit code is 1 when any compared page fails.
"""
import argparse
import pathlib
import re
import subprocess
import sys
from collections import Counter

ROOT = pathlib.Path(__file__).resolve().parents[2]
CONTENT = ROOT / 'content'
COLLECTIONS = ('articles', 'concepts', 'faqs', 'resources', 'pages')

# Frontmatter that must match English byte for byte: these are machine identifiers, not prose.
FACET_KEYS = ('type', 'technology', 'pedagogy', 'foundations', 'institutions', 'ethics',
              'assessment', 'audience', 'discipline', 'level', 'methods', 'confidence',
              'resource_type', 'access', 'connected_resources', 'connected_faqs')
REQUIRED = ('title', 'type', 'translation_of', 'source_updated', 'translation_note', 'ai_assist')
# Bidi control marks break link rendering and the corpus forbids them.
BIDI = ('\u200e', '\u200f', '\u202a', '\u202b', '\u202c', '\u202d', '\u202e', '\u2066',
        '\u2067', '\u2068', '\u2069')
CJK = {'zh', 'ja', 'ko'}


def read(path):
    return path.read_text(encoding='utf-8')


def split_frontmatter(text):
    m = re.match(r'^---\n(.*?)\n---\n(.*)$', text, re.S)
    return (m.group(1), m.group(2)) if m else (None, None)


def frontmatter_value(fm, key):
    m = re.search(rf'^{key}:[ \t]*(.*)$', fm, re.M)
    return m.group(1).strip() if m else None


def link_targets(text):
    """Wikilink targets in document order, ignoring the display text after the pipe."""
    return [m.group(1).strip() for m in re.finditer(r'\[\[([^\]|\n]+)', text)]


def h2_sections(body):
    """Body split on H2 headings; a section's text excludes its own heading line."""
    blocks = [b for b in re.split(r'\n(?=## )', body) if b.startswith('## ')]
    return [b.split('\n', 1)[1] if '\n' in b else '' for b in blocks]


def paragraph_counts(body):
    return [len([p for p in s.split('\n\n') if p.strip()]) for s in h2_sections(body)]


def connected_shape(body):
    """(bare entries in the second-to-last H2, [(target, has em dash)] in the last H2)."""
    sections = h2_sections(body)
    if len(sections) < 2:
        return None
    # A translated connected list may carry a translated label after a pipe; both forms count.
    concepts = len(re.findall(r'^- \[\[[^\]|\n]+(?:\|[^\]\n]+)?\]\][ \t]*$',
                              sections[-2], re.M))
    articles = [(m.group(1), 8212 in [ord(c) for c in m.group(2)])
                for m in re.finditer(r'^- \[\[([^\]|\n]+)\]\](.*)$', sections[-1], re.M)]
    return concepts, articles


def changed_translated(max_twins=400):
    """Translated files created or edited since HEAD, as (locale, collection, slug)."""
    paths = set()
    for cmd in (['git', 'diff', '--name-only', 'HEAD'],
                ['git', 'ls-files', '--others', '--exclude-standard']):
        out = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True).stdout
        paths.update(p for p in out.splitlines() if p.strip())
    found = []
    for p in sorted(paths):
        parts = p.replace('\\', '/').split('/')
        if len(parts) == 4 and parts[0] == 'content' and parts[1] != 'en' \
                and parts[2] in COLLECTIONS and parts[3].endswith('.md'):
            found.append((parts[1], parts[2], parts[3][:-3]))
    return found[:max_twins]


def english_page(collection, slug):
    p = CONTENT / 'en' / collection / f'{slug}.md'
    return p if p.exists() else None


def check_pair(en_path, loc, collection, slug):
    """Compare one translated page with its English source. Returns (errors, warnings)."""
    errors, warnings = [], []
    path = CONTENT / loc / collection / f'{slug}.md'
    label = f'{loc}/{collection}/{slug}'
    text = read(path)
    en_text = read(en_path)
    fm, body = split_frontmatter(text)
    en_fm, en_body = split_frontmatter(en_text)
    if fm is None or en_fm is None or body is None or en_body is None:
        return [f'{label}: frontmatter block missing'], warnings

    for key in REQUIRED:
        if frontmatter_value(fm, key) is None:
            errors.append(f'{label}: frontmatter missing {key}')
    if frontmatter_value(fm, 'reviewed_by') is not None:
        errors.append(f'{label}: carries reviewed_by, an English-page stamp no native reader made')

    want = f'{collection}/{slug}'
    got = frontmatter_value(fm, 'translation_of') or ''
    if got.strip('"\'') != want:
        errors.append(f'{label}: translation_of is {got!r}, expected {want!r}')
    if not re.search(r'role:[ \t]*translation', fm):
        errors.append(f'{label}: ai_assist has no role: translation entry')

    for key in FACET_KEYS:
        e, g = frontmatter_value(en_fm, key), frontmatter_value(fm, key)
        if e is not None and g is not None and e != g:
            errors.append(f'{label}: facet {key} differs from English ({g!r} vs {e!r})')

    first = next((line for line in body.split('\n') if line.strip()), '')
    if not (first.startswith('*') and first.rstrip().endswith('*')):
        errors.append(f'{label}: first body line is not the italic machine-translation notice')
    elif frontmatter_value(fm, 'translation_note'):
        note = frontmatter_value(fm, 'translation_note').strip('"\'')
        if note and note not in first:
            warnings.append(f'{label}: notice line does not match translation_note verbatim')

    for mark in BIDI:
        if mark in text:
            errors.append(f'{label}: carries bidi control mark U+{ord(mark):04X}')
            break

    en_h2 = len(re.findall(r'^## ', en_body, re.M))
    en_h3 = len(re.findall(r'^### ', en_body, re.M))
    got_h2 = len(re.findall(r'^## ', body, re.M))
    got_h3 = len(re.findall(r'^### ', body, re.M))
    if (got_h2, got_h3) != (en_h2, en_h3):
        errors.append(f'{label}: {got_h2} H2 and {got_h3} H3, English has {en_h2} and {en_h3}')

    en_targets = Counter(link_targets(en_body))
    got_targets = Counter(link_targets(body))
    if got_targets != en_targets:
        missing = dict(en_targets - got_targets)
        extra = dict(got_targets - en_targets)
        errors.append(f'{label}: wikilink target multiset differs; missing={missing} extra={extra}')

    en_paras, got_paras = paragraph_counts(en_body), paragraph_counts(body)
    if got_paras != en_paras:
        errors.append(f'{label}: paragraphs per section {got_paras}, English {en_paras}')

    en_shape, got_shape = connected_shape(en_body), connected_shape(body)
    if en_shape and got_shape:
        if got_shape[0] != en_shape[0]:
            errors.append(f'{label}: Connected Concepts has {got_shape[0]} bare entries, '
                          f'English has {en_shape[0]}')
        if len(got_shape[1]) != len(en_shape[1]):
            errors.append(f'{label}: Connected Articles has {len(got_shape[1])} entries, '
                          f'English has {len(en_shape[1])}')
        broken = [t for t, dashed in got_shape[1] if not dashed]
        if broken:
            errors.append(f'{label}: Connected Articles entry lacks an em dash separator: '
                          f'{broken[0]}')

    en_words, got_words = len(en_body.split()), len(body.split())
    if en_words and loc not in CJK:
        ratio = got_words / en_words
        if not 0.55 <= ratio <= 1.60:
            warnings.append(f'{label}: {got_words} words against English {en_words} '
                            f'(ratio {ratio:.2f})')
    return errors, warnings


def resolve(args):
    """Build the list of (locale, collection, slug) pairs to compare."""
    if args.all:
        pairs = []
        for loc_dir in sorted(CONTENT.iterdir()):
            if not loc_dir.is_dir() or loc_dir.name == 'en':
                continue
            for collection in COLLECTIONS:
                coll = loc_dir / collection
                if not coll.is_dir():
                    continue
                for page in sorted(coll.glob('*.md')):
                    pairs.append((loc_dir.name, collection, page.stem))
        return pairs
    if args.changed:
        return changed_translated()
    if args.page:
        found = [(c, p.stem) for c in COLLECTIONS for p in [CONTENT / 'en' / c / f'{args.page}.md']
                 if p.exists()]
        if not found:
            print(f'No English page named {args.page!r} in {", ".join(COLLECTIONS)}.')
            sys.exit(2)
        collection, slug = found[0]
        locs = args.locales or [d.name for d in sorted(CONTENT.iterdir())
                               if d.is_dir() and d.name != 'en'
                               and (d / collection / f'{slug}.md').exists()]
        return [(loc, collection, slug) for loc in locs]
    return []


def main():
    ap = argparse.ArgumentParser(description=(__doc__ or '').splitlines()[0])
    ap.add_argument('--page', help='English slug to check against every locale twin')
    ap.add_argument('--locales', nargs='+', help='restrict to these locale codes')
    ap.add_argument('--changed', action='store_true', help='check translated files touched vs HEAD')
    ap.add_argument('--all', action='store_true', help='check every translated page (diagnostic)')
    ap.add_argument('--strict', action='store_true', help='treat warnings as failures')
    ap.add_argument('--limit', type=int, default=25, help='max failing pages to print')
    args = ap.parse_args()

    pairs = resolve(args)
    if not pairs:
        print('Nothing to compare: no translated page matched the requested scope.')
        return 0

    compared, failures, warns = 0, [], []
    for loc, collection, slug in pairs:
        if args.locales and loc not in args.locales:
            continue
        en_path = english_page(collection, slug)
        path = CONTENT / loc / collection / f'{slug}.md'
        if en_path is None or not path.exists():
            continue
        compared += 1
        try:
            errs, ws = check_pair(en_path, loc, collection, slug)
        except Exception as exc:                      # a malformed file must not abort the sweep
            errs, ws = [f'{loc}/{collection}/{slug}: unreadable ({exc.__class__.__name__}: {exc})'], []
        if errs:
            failures.append((f'{loc}/{collection}/{slug}', errs))
        warns.extend(ws)

    for name, errs in failures[:args.limit]:
        print(f'FAIL {name}')
        for e in errs:
            print(f'       {e}')
    if len(failures) > args.limit:
        print(f'  ... and {len(failures) - args.limit} more failing page(s)')
    if warns:
        for w in warns[:10]:
            print(f'WARN {w}')
        if len(warns) > 10:
            print(f'  ... and {len(warns) - 10} more warning(s)')

    print(f'\nCompared {compared} translated page(s); {len(failures)} failing, {len(warns)} warning(s).')
    if failures or (args.strict and warns):
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
