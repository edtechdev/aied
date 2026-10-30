#!/usr/bin/env python3
"""Verify a locale's string modules against their English siblings.

Checks per module (ui + each pages/<kind>):
  1. key set and order identical to the English sibling
  2. per-value token sets preserved: {placeholders}, HTML tags, href URLs
  3. counts values still byte-identical to English (a seeded-but-untranslated
     module shows up here)
Run: python3 tooling/scripts/check-locale-modules.py ru

Values are collected with a small scanner rather than a regex over the whole
file, because the modules hold four shapes a one-line regex misses or mangles:
single-quoted values, double-quoted values (fr, el, es), backtick template
literals (the home page prose and the copyable prompt), and bare strings inside
arrays (`howSteps`, `techItems`, the `groups` list). A regex that only saw
single-quoted values reported a whole double-quoted module as "missing every
key", and skipped every template literal in silence.

Escaped attribute quotes are unescaped before the token comparison: a module
that writes `href=\"/aied/faq/\"` inside a single-quoted or backticked value
renders exactly `href="/aied/faq/"`, so comparing raw source text reported a
missing href that the reader never sees.
"""
import os
import re
import sys

# Repo root derived from this script's location (tooling/scripts/ -> repo root),
# so the checker runs from any checkout with no absolute path in it.
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PLACEHOLDER = re.compile(r'\{[a-zA-Z_][a-zA-Z0-9_]*\}')
TAG = re.compile(r'</?([a-zA-Z][a-zA-Z0-9]*)')
HREF = re.compile(r'href="([^"]*)"')
KEY_BEFORE = re.compile(r'([A-Za-z_][A-Za-z0-9_]*)\s*:\s*$')
QUOTES = '\'"`'


def _skip_comment(text, i):
    """Index just past the comment starting at i, or i when there is none."""
    if text.startswith('//', i):
        j = text.find('\n', i)
        return len(text) if j < 0 else j + 1
    if text.startswith('/*', i):
        j = text.find('*/', i + 2)
        return len(text) if j < 0 else j + 2
    return i


def _read_string(text, i):
    """Read the string literal opening at i. Returns (raw body, index after it)."""
    quote = text[i]
    i += 1
    start = i
    while i < len(text):
        ch = text[i]
        if ch == '\\':
            i += 2
            continue
        if ch == quote:
            return text[start:i], i + 1
        i += 1
    return text[start:], len(text)


def _unescape(value):
    return value.replace('\\"', '"').replace("\\'", "'").replace('\\`', '`')


def values(text):
    """Every string literal in document order, as (key-or-None, value).

    A key is the identifier immediately before `:` when a string follows it, so
    object properties carry their name; bare array elements and quoted map keys
    carry None, and are still compared positionally.
    """
    out = []
    i, n = 0, len(text)
    while i < n:
        ch = text[i]
        if ch == '/' and i + 1 < n and text[i + 1] in '/*':
            i = _skip_comment(text, i)
            continue
        if ch in QUOTES:
            body, j = _read_string(text, i)
            # A module specifier (`import ... from './ui.en'`) is not a value.
            if re.search(r'\b(?:from|import|require)\s*\(?\s*$', text[max(0, i - 24):i]):
                i = j
                continue
            # A quoted map key (`'student-modeling': 'Modeling'`) is a key, not a value.
            km = re.match(r'\s*:\s*', text[j:])
            if km is not None and j + km.end() < n and text[j + km.end()] in QUOTES:
                val, k = _read_string(text, j + km.end())
                out.append((body, _unescape(val)))
                i = k
            else:
                out.append((None, _unescape(body)))
                i = j
            continue
        if ch.isalpha() or ch == '_':
            word = re.match(r'[A-Za-z_][A-Za-z0-9_]*', text[i:])
            if word is None:
                i += 1
                continue
            j = i + word.end()
            m = re.match(r'\s*:\s*', text[j:])
            if m is not None and j + m.end() < n and text[j + m.end()] in QUOTES:
                val, k = _read_string(text, j + m.end())
                out.append((word.group(0), _unescape(val)))
                i = k
                continue
            i = j
            continue
        i += 1
    return out


def key_order(pairs):
    return [k for k, _ in pairs if k is not None]


def tokens(value):
    return (
        sorted(PLACEHOLDER.findall(value)),
        sorted(TAG.findall(value)),
        sorted(HREF.findall(value)),
    )


# Optional localized maps (currently the FAQ index section headings and blurbs). They are
# translatable copy, but English does not carry them: the English headings live in
# src/data/faqIndex.ts, so faq.en.ts has no map and a locale that supplies one has more
# values than English. Counting them here failed every locale that translated them, so the
# maps are removed before the required-copy comparison and their keys are checked instead
# against the registry that defines them.
OPTIONAL_MAPS = ('sectionHeadings', 'sectionBlurbs')


def strip_optional_maps(text):
    """Source text with the optional maps removed, braces matched through strings."""
    for name in OPTIONAL_MAPS:
        while True:
            m = re.search(rf'\b{name}\s*:\s*\{{', text)
            if m is None:
                break
            depth, i = 0, m.end() - 1
            while i < len(text):
                ch = text[i]
                if ch in QUOTES:
                    _, i = _read_string(text, i)
                    continue
                if ch == '{':
                    depth += 1
                elif ch == '}':
                    depth -= 1
                    if depth == 0:
                        i += 1
                        break
                i += 1
            # Swallow the trailing comma so the surrounding object stays balanced.
            while i < len(text) and text[i] in ' \t,':
                i += 1
                if text[i - 1] == ',':
                    break
            text = text[:m.start()] + text[i:]
    return text


def map_keys(text, name):
    """Keys supplied by one optional map, or None when the module omits it."""
    m = re.search(rf'\b{name}\s*:\s*\{{', text)
    if m is None:
        return None
    depth, i, start = 0, m.end() - 1, m.end()
    while i < len(text):
        ch = text[i]
        if ch in QUOTES:
            _, i = _read_string(text, i)
            continue
        if ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                return [k for k, _v in values(text[start:i]) if k]
        i += 1
    return []


def faq_index_headings():
    """The English section headings from src/data/faqIndex.ts, the registry for these maps."""
    path = f'{ROOT}/src/data/faqIndex.ts'
    if not os.path.exists(path):
        return None
    return re.findall(r"^\s*heading: '([^']+)',",
                      open(path, encoding='utf-8').read(), re.M)


def main():
    locale = sys.argv[1] if len(sys.argv) > 1 else 'ru'
    only = sys.argv[2:] if len(sys.argv) > 2 else None
    pairs = [(f'{ROOT}/src/i18n/ui.en.ts', f'{ROOT}/src/i18n/ui.{locale}.ts')]
    for kind in ('home', 'ai', 'search', 'resources', 'journal', 'faq', 'concepts', 'news', 'notFound'):
        pairs.append((f'{ROOT}/src/i18n/pages/{kind}.en.ts', f'{ROOT}/src/i18n/pages/{kind}.{locale}.ts'))
    if only:
        pairs = [p for p in pairs if os.path.basename(p[0]).split('.')[0] in only]
    problems = 0
    for en_path, loc_path in pairs:
        # A page kind with no module in this locale renders the English copy behind a
        # translation notice, which is a state to report rather than a crash.
        if not os.path.exists(loc_path):
            problems += 1
            print(f'MISSING {loc_path}: no module, the page renders the English copy')
            continue
        en = open(en_path, encoding='utf-8').read()
        loc = open(loc_path, encoding='utf-8').read()

        # Optional maps are translated copy that English itself keeps in a registry, so they
        # are outside the required-copy comparison. Their keys are verified against that
        # registry below instead: a locale that drops one heading would silently fall back to
        # English for that section, which no count would reveal.
        if os.path.basename(loc_path).startswith('faq.'):
            registered = faq_index_headings()
            heads, blurbs = map_keys(loc, 'sectionHeadings'), map_keys(loc, 'sectionBlurbs')
            if (heads is None) != (blurbs is None):
                problems += 1
                print(f'FAIL {loc_path}: supplies one optional map but not the other')
            if registered:
                for name, keys in (('sectionHeadings', heads), ('sectionBlurbs', blurbs)):
                    if keys is None:
                        continue
                    missing = [h for h in registered if h not in keys]
                    extra = [k for k in keys if k not in registered]
                    if missing or extra:
                        problems += 1
                        print(f'FAIL {loc_path}: {name} keys drift from faqIndex.ts '
                              f'(missing: {missing[:3]}, unknown: {extra[:3]})')
        en, loc = strip_optional_maps(en), strip_optional_maps(loc)
        en_vals, loc_vals = values(en), values(loc)
        if len(en_vals) != len(loc_vals):
            problems += 1
            print(f'FAIL {loc_path}: {len(loc_vals)} values against English {len(en_vals)}')
            continue
        if key_order(en_vals) != key_order(loc_vals):
            missing = [k for k in key_order(en_vals) if k not in key_order(loc_vals)]
            extra = [k for k in key_order(loc_vals) if k not in key_order(en_vals)]
            problems += 1
            print(f'FAIL {loc_path}: key set/order differs (missing: {missing[:5]}, extra: {extra[:5]})')
            continue
        same = 0
        for idx, ((ek, ev), (lk, lv)) in enumerate(zip(en_vals, loc_vals)):
            label = ek if ek else f'value #{idx}'
            if ek != lk:
                problems += 1
                print(f'FAIL {loc_path}: {label} sits at a different position than English')
                continue
            if tokens(ev) != tokens(lv):
                problems += 1
                et, lt = tokens(ev), tokens(lv)
                detail = []
                if et[0] != lt[0]:
                    detail.append(f'placeholders en={et[0]} loc={lt[0]}')
                if et[1] != lt[1]:
                    detail.append(f'tags en={et[1]} loc={lt[1]}')
                if et[2] != lt[2]:
                    detail.append(f'hrefs en={et[2]} loc={lt[2]}')
                print(f'FAIL {loc_path}: {label} tokens differ\n  ' + '\n  '.join(detail))
            if ev == lv:
                same += 1
        print(f'{"OK  " if same < len(en_vals) else "WARN"} {loc_path}: {same}/{len(en_vals)} values still identical to English')
    if problems:
        print(f'FAIL — {problems} problem(s)')
        sys.exit(1)
    print('OK — all modules match their English siblings on keys, order and tokens')


if __name__ == '__main__':
    main()
