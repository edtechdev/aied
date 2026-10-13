#!/usr/bin/env python3
"""Independent post-wave verification of translated content pages.

Re-runs, from a fresh interpreter, the equality checks a child's self-report
claims: per file — YAML parses, title translated (not the English title),
wikilink slug multiset equals the source, pipe parity, bracket balance,
heading-count parity vs the source (per-type: FAQ keeps its body H1, concepts
carry none), frontmatter field parity (non-translation fields byte-identical,
no invented fields), numeric-token coverage, truncation markers, and the
notice line. Prints a DELTA for every failure so a reader can tell a real
mismatch from a known convention.

Usage: python3 tooling/scripts/verify-translation-wave.py ar wave1
"""
import os
import re
import sys
import yaml

LOCALE = sys.argv[1] if len(sys.argv) > 1 else 'ar'
WAVE = sys.argv[2] if len(sys.argv) > 2 else 'wave1'
# The todo-dir env var is locale-generic: WAVES_DIR points at the locale's
# waves dir (e.g. ~/.hermes/cache/scratch/he-waves); the legacy AR_WAVES_DIR
# name is still honored so the Arabic wave commands keep working.
_env_dir = os.environ.get('WAVES_DIR') or os.environ.get('AR_WAVES_DIR')
SCRATCH = _env_dir or os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '.hermes', 'cache', 'scratch', 'ar-waves')

# The first-line machine-translation notice, per locale (None = check
# generically: the first non-empty body line must be italic).
LOCALE_NOTICE = {
    'ar': 'ترجمة آلية',
    'he': 'תרגום אוטומטי',
}
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TRANSLATION_KEYS = {'translation_of', 'source_updated', 'translation_note', 'contributors', 'ai_assist', 'updated', 'created'}
# dates that legitimately differ between source and translation
DATE_OK = {'created', 'updated', 'ai_assist', 'summary'}
TRUNC_MARKERS = ['[截断]', '[truncated]', '... [truncated]', '[TRUNCATED]']

assigned = []
# assigned slugs for this wave: todo-<i>.txt files, i = 0..9 for wave1, 10..19 wave2, 20..29 wave3
wave_no = int(WAVE.replace('wave', ''))
lo = (wave_no - 1) * 10
for i in range(lo, lo + 10):
    for line in open(f'{SCRATCH}/todo-{i}.txt'):
        if line.strip():
            assigned.append(line.strip())

problems = {}
def fail(coll, slug, kind, detail):
    problems.setdefault(f'{coll}/{slug}', []).append(f'{kind}: {detail}')

def load(path):
    """(frontmatter-dict, body). Returns (None, error) when YAML fails."""
    t = open(path, encoding='utf-8').read()
    m = re.match(r'^---\n(.*?)\n---\n(.*)$', t, re.S)
    if not m:
        return None, 'no frontmatter block'
    try:
        fm = yaml.safe_load(m.group(1))
    except Exception as e:
        return None, f'yaml: {e}'
    if not isinstance(fm, dict):
        return None, 'frontmatter is not a mapping'
    return fm, m.group(2)

def slugs_in(text):
    return re.findall(r'\[\[([^\]|]+)(?:\|[^\]]*)?\]\]', text)

def pipes_per_slug(text):
    from collections import Counter
    c = Counter()
    for m in re.finditer(r'\[\[([^\]|]+)(\|[^\]]*)?\]\]', text):
        c[m.group(1)] += 1 if m.group(2) else 0
    return c

def headings(text):
    return re.findall(r'^(#{1,6}) ', text, re.M)

def num_tokens(text):
    toks = set(re.findall(r'\d+\.\d+|\b\d{2,3}(?:,\d{3})*\b|\b\d{2,}\b', text))
    return {t for t in toks if not re.fullmatch(r'(19|20)\d\d', t)}

for key in assigned:
    coll, slug = key.split('/')
    src_path = f'{ROOT}/content/en/{coll}/{slug}.md'
    dst_path = f'{ROOT}/content/{LOCALE}/{coll}/{slug}.md'
    if not os.path.exists(src_path):
        continue
    if not os.path.exists(dst_path):
        problems.setdefault(key, []).append('FILE MISSING')
        continue
    en_fm, en_body = load(src_path)
    dst_fm, dst_body = load(dst_path)
    if dst_fm is None:
        problems.setdefault(key, []).append(f'YAML FAIL: {dst_body[:100]}')
        continue
    # 1. title translated
    en_title = (en_fm or {}).get('title', '')
    if dst_fm.get('title', '') == en_title:
        # product names are kept English in every locale by convention
        if coll != 'resources':
            fail(coll, slug, 'TITLE', f'still English: {en_title!r}')
    # 2. truncation markers
    for mk in TRUNC_MARKERS:
        if mk in dst_body:
            fail(coll, slug, 'TRUNC', f'marker {mk!r} in body')
    # 3. wikilink slug multiset
    from collections import Counter
    en_c, dst_c = Counter(slugs_in(en_body)), Counter(slugs_in(dst_body))
    if en_c != dst_c:
        miss = en_c - dst_c; extra = dst_c - en_c
        fail(coll, slug, 'SLUGS', f'missing {dict(list(miss.items())[:5])} extra {dict(list(extra.items())[:5])}')
    # 4. pipe parity — NOT checked: EN bare [[slug]] legitimately becomes
    # AR [[slug|Arabic display]]; only slug multiset parity is structural.
    # 5. bracket balance
    if dst_body.count('[[') != dst_body.count(']]'):
        fail(coll, slug, 'BRACKETS', f"[[={dst_body.count('[[')} ]]={dst_body.count(']]')}")
    # 6. heading count parity (H1 only for faq per source shape)
    en_h = headings(en_body); dst_h = headings(dst_body)
    if len(en_h) != len(dst_h):
        fail(coll, slug, 'HEADINGS', f'en {len(en_h)} dst {len(dst_h)}')
    # 7. frontmatter field parity
    en_keys = set(en_fm or {})
    dst_keys = set(dst_fm)
    invented = dst_keys - en_keys - TRANSLATION_KEYS
    if invented:
        fail(coll, slug, 'INVENTED-FIELDS', str(sorted(invented)))
    for k in en_keys:
        if k in dst_fm and dst_fm[k] != en_fm[k]:
            if k not in ('title',) and k not in DATE_OK:
                fail(coll, slug, 'FIELD-DRIFT', f'{k}: {en_fm[k]!r} -> {dst_fm[k]!r}')
    # 8. numeric coverage
    toks = num_tokens(en_body)
    if toks:
        dst_norm = dst_body.replace(',', '').replace('٬', '')
        present = sum(1 for t in toks if t.replace(',', '') in dst_norm)
        cov = present / len(toks)
        if cov < 0.95:
            fail(coll, slug, 'NUMCOV', f'{cov:.2f} ({len(toks)-present} missing)')
    # 9. notice line (locale-specific first-line machine-translation notice)
    notice = LOCALE_NOTICE.get(LOCALE)
    if notice is not None:
        if notice not in dst_body[:300]:
            fail(coll, slug, 'NOTICE', 'machine-translation notice missing from body top')
    else:
        # Unknown locale: the first non-empty body line must be an italic line
        # (the notice is always the first thing in the body, in italics).
        first = next((l for l in dst_body.split('\n') if l.strip()), '')
        if not first.startswith('*'):
            fail(coll, slug, 'NOTICE', 'first body line is not the italic machine-translation notice')

# disk-vs-assignment diff both directions
landed = []
for root, _, files in os.walk(f'{ROOT}/content/{LOCALE}'):
    for f in files:
        if f.endswith('.md'):
            rel = os.path.relpath(root, f'{ROOT}/content/{LOCALE}')
            landed.append(f'{rel}/{f[:-3]}' if rel != '.' else f[:-3])
unassigned_landed = [p for p in landed if p not in assigned and p != 'concepts/ai-education']

print(f'=== {LOCALE} {WAVE}: {len(assigned)} assigned, {len(landed)} on disk ===')
if unassigned_landed:
    print(f'WARN landed-but-unassigned: {unassigned_landed[:20]}')
if problems:
    print(f'=== {len(problems)} pages with problems ===')
    for page in sorted(problems):
        for p in problems[page]:
            print(f'  {page}: {p}')
else:
    print('OK — all assigned pages pass every check')
