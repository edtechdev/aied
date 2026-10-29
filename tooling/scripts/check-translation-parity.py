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

Staleness is the staleness gate's job. Content comparisons (headings, paragraph vector, link
multiset) are ERRORS only when the twin claims to be current, meaning its `source_updated` reaches
the English page's `updated`; on a stale twin they are warnings, because 3,645 installed pages are
stale translations of an older English text and re-flagging them here would leave this gate
permanently red. Structural invariants that must hold at any vintage (facets, translation_of, the
notice line, no reviewed_by, Connected-list separators, bidi marks) are always errors.

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
FACET_KEYS = ('technology', 'pedagogy', 'foundations', 'institutions', 'ethics',
              'assessment', 'audience', 'discipline', 'level', 'methods', 'confidence',
              'resource_type', 'access', 'connected_resources', 'connected_faqs')
# `type` is deliberately absent: it is not a schema field, and 17 English pages lack it too.
REQUIRED = ('title', 'translation_of', 'source_updated', 'translation_note', 'ai_assist')
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


CITATION_HEADING = re.compile(
    r'^\s*(?:citation|cita|zitation|citazione|citacao|citação|цитирование|цитування|ציטוט|引用|인용|'
    r'उद्धरण|الاستشهاد|atıf|atıflar|marejeleo|nukuu|nukta|citace|citiranje|citare|citácia|cytau|тын|nimewo|bron|'
    r'kaynakça)\s*$', re.I)


def drop_citation_sections(text):
    """Remove every Citation section whole, heading and text, before structural comparison.

    English puts Citation last; a translated page has to end with its connected lists, so its
    citation section sits one place earlier and its POSITION cannot be compared.
    """
    parts = re.split(r'\n(?=## )', text)
    keep = [x for x in parts
            if not (x.startswith('## ') and is_citation_heading(x.split('\n', 1)[0][3:]))]
    return '\n'.join(keep)


def is_citation_heading(heading_text):
    """True for a translated Citation section.

    English puts Citation last; a translated page has to end with its connected lists, which the
    heading gate enforces, so the twin carries the same section one place earlier. Its POSITION
    therefore cannot be compared, and it is excluded from the heading count and the shape vectors
    on both sides rather than being reported as a difference in structure.
    """
    return bool(CITATION_HEADING.match(heading_text.strip()))


def section_shape(section):
    """(prose blocks, bullet lines) for one H2 section.

    Counting raw blank-line blocks made the check fragile to typography rather than structure: an
    English page that runs a bullet straight on from the paragraph above holds both in one block,
    while a translation that separates them properly counts two, and the translation was failed for
    being formatted better. So a bullet-only block is folded into the block above it, leaving the
    number of prose-anchored blocks, and bullet lines are counted separately. A dropped paragraph
    still shifts the first number; a dropped bullet still shifts the second.
    """
    prose, bullets = 0, 0
    for block in section.split('\n\n'):
        if not block.strip():
            continue
        lines = [l for l in block.split('\n') if l.strip()]
        is_bullet = lambda l: l.lstrip().startswith(('- ', '* ', '1. ', '+ '))
        bullets += sum(1 for l in lines if is_bullet(l))
        if not all(is_bullet(l) for l in lines):
            prose += 1
        elif prose == 0:
            prose += 1
    return (prose, bullets)


def paragraph_counts(body):
    return [section_shape(s) for s in h2_sections(body)]


def connected_shape(body):
    """(bare entries in the second-to-last H2, [(target, has em dash)] in the last H2)."""
    sections = h2_sections(body)
    if len(sections) < 2:
        return None
    # A translated connected list may carry a translated label after a pipe; both forms count.
    concepts = len(re.findall(r'^- \[\[[^\]|\n]+(?:\|[^\]\n]+)?\]\][ \t]*$',
                              sections[-2], re.M))
    # The documented Connected-list parser accepts an em dash, an en dash or a hyphen before
    # the gloss (^- \[\[slug]](?:[ \t]*[-—–][ \t]*(.+))?$), so a hyphen is not a defect and the
    # check must not call one. A colon, however, is not a separator to it: the gloss renders
    # as part of nothing, which is the case worth failing.
    articles = [(m.group(1), bool(re.match(r'[ \t]*[-\u2013\u2014]', m.group(2))))
                for m in re.finditer(r'^- \[\[([^\]|\n]+)\]\](.*)$', sections[-1], re.M)]
    return concepts, articles


def changed_translated(max_twins=20000):
    """Translated files created or edited since HEAD, as (locale, collection, slug).

    The cap exists only so a runaway caller cannot scan millions of paths; it must stay far
    above any plausible wave, or a sweep of thousands of pages is silently truncated and the
    gate reports a clean run on the pages it did not look at.
    """
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


def body_changed_vs_head(rel_path):
    """True when the page's body differs from HEAD (a new file counts as changed).

    A frontmatter-only edit, such as removing `reviewed_by`, must not indict the body: the
    legacy drift of 400 translated pages is why that distinction matters, and the gate exists
    to catch a bad translation EDIT rather than to re-audit untouched prose.
    """
    cur = (ROOT / rel_path)
    head = subprocess.run(['git', 'show', f'HEAD:{rel_path}'], cwd=ROOT,
                          capture_output=True, text=True)
    if head.returncode != 0:
        return True
    def body(text):
        m = re.match(r'^---\n.*?\n---\n(.*)$', text, re.S)
        b = m.group(1) if m else text
        # Cosmetic-only deltas do not count as a body edit: normalising a Connected-list
        # separator or inserting the italic machine-translation notice changes no prose, so
        # neither may expose a page's older structural drift as if this edit caused it.
        b = re.sub(r'^(- \[\[[^\]|\n]+\]\])[ \t]*[:\u2013\u2014-]', r'\1 —', b, flags=re.M)
        b = re.sub(r'^\s*\*[^*\n]+\*\s*$\n+', '', b.lstrip(), count=1)
        return '\n'.join(line.rstrip() for line in b.strip().split('\n'))
    return body(head.stdout) != body(cur.read_text())


def english_page(collection, slug):
    p = CONTENT / 'en' / collection / f'{slug}.md'
    return p if p.exists() else None


def check_pair(en_path, loc, collection, slug, body_changed=True):
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

    # Content parity is required of a twin that CLAIMS to be current. A twin whose
    # source_updated trails the English page is a stale translation, which
    # check-translation-staleness.py already reports as backlog; re-flagging every stale page
    # here would make the gate permanently red and stop it catching current-page defects.
    en_updated = (frontmatter_value(en_fm, 'updated') or '').strip('"\'')
    twin_source = (frontmatter_value(fm, 'source_updated') or '').strip('"\'')
    current = bool(en_updated and twin_source and twin_source >= en_updated) and body_changed

    for mark in BIDI:
        if mark in text:
            errors.append(f'{label}: carries bidi control mark U+{ord(mark):04X}')
            break

    body_counted = drop_citation_sections(body)
    en_counted = drop_citation_sections(en_body)
    en_h2 = len(re.findall(r'^## ', en_counted, re.M))
    en_h3 = len(re.findall(r'^### ', en_counted, re.M))
    got_h2 = len(re.findall(r'^## ', body_counted, re.M))
    got_h3 = len(re.findall(r'^### ', body_counted, re.M))
    if (got_h2, got_h3) != (en_h2, en_h3):
        msg = f'{label}: {got_h2} H2 and {got_h3} H3, English has {en_h2} and {en_h3}'
        (errors if current else warnings).append(msg)

    en_targets = Counter(link_targets(en_body))
    got_targets = Counter(link_targets(body))
    if got_targets != en_targets:
        missing = dict(en_targets - got_targets)
        extra = dict(got_targets - en_targets)
        msg = f'{label}: wikilink target multiset differs; missing={missing} extra={extra}'
        (errors if current else warnings).append(msg)

    en_paras, got_paras = paragraph_counts(en_counted), paragraph_counts(body_counted)
    if got_paras != en_paras:
        msg = f'{label}: paragraphs per section {got_paras}, English {en_paras}'
        (errors if current else warnings).append(msg)

    en_shape, got_shape = connected_shape(en_body), connected_shape(body)
    if en_shape and got_shape:
        # Entry COUNTS are not compared: a translated Connected list is curated per locale and
        # is allowed to be longer or shorter than English (the Spanish lists were rebuilt
        # independently on purpose). The separator is still required, because the list parser
        # looks for it and an entry without one renders without its gloss.
        if got_shape[0] != en_shape[0]:
            warnings.append(f'{label}: Connected Concepts has {got_shape[0]} entries, '
                            f'English has {en_shape[0]}')
        if len(got_shape[1]) != len(en_shape[1]):
            warnings.append(f'{label}: Connected Articles has {len(got_shape[1])} entries, '
                            f'English has {len(en_shape[1])}')
        # Only enforce the separator where the English page itself uses it: on a resource or
        # FAQ page the last section is a bare Connected Concepts list, and demanding glosses
        # there would be a false positive on every one of them.
        en_dashes = [d for _, d in en_shape[1]]
        if en_dashes and all(en_dashes):
            broken = [t for t, dashed in got_shape[1] if not dashed]
            if broken:
                # An entry with NO gloss (bare [[slug]]) is legal to the parser; only an entry
                # whose gloss is present but unseparated fails to render it correctly.
                msg = (f'{label}: Connected Articles entry lacks an em dash separator: '
                       f'{broken[0]}')
                warnings.append(msg)

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
        rel = f'content/{loc}/{collection}/{slug}.md'
        touched = body_changed_vs_head(rel) if args.changed else True
        try:
            errs, ws = check_pair(en_path, loc, collection, slug, body_changed=touched)
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
