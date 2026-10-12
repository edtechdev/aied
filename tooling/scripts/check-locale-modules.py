#!/usr/bin/env python3
"""Verify a locale's string modules against their English siblings.

Checks per module (ui + each pages/<kind>):
  1. key set and order identical to the English sibling
  2. per-value token sets preserved: {placeholders}, HTML tags, href URLs
  3. counts values still byte-identical to English (a seeded-but-untranslated
     module shows up here)
Run: python3 tooling/scripts/check-locale-modules.py ru
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


def values(text):
    """All `key: 'value'` string literals, in document order.

    Single-quoted values only: a template literal (backticks) spans lines and
    its prose (e.g. `Example: "..."` inside a prompt block) would otherwise be
    mistaken for a key.
    """
    return re.findall(r"([a-zA-Z_][a-zA-Z0-9_]*):\s*'((?:[^'\\]|\\.)*)'", text)


def key_order(text):
    return [k for k, _ in values(text)]


def tokens(value):
    return (
        sorted(PLACEHOLDER.findall(value)),
        sorted(TAG.findall(value)),
        sorted(HREF.findall(value)),
    )


def main():
    locale = sys.argv[1] if len(sys.argv) > 1 else 'ru'
    pairs = [(f'{ROOT}/src/i18n/ui.en.ts', f'{ROOT}/src/i18n/ui.{locale}.ts')]
    for kind in ('home', 'ai', 'search', 'resources', 'journal', 'faq', 'notFound'):
        pairs.append((f'{ROOT}/src/i18n/pages/{kind}.en.ts', f'{ROOT}/src/i18n/pages/{kind}.{locale}.ts'))
    problems = 0
    for en_path, loc_path in pairs:
        en = open(en_path, encoding='utf-8').read()
        loc = open(loc_path, encoding='utf-8').read()
        en_vals, loc_vals = values(en), values(loc)
        # key order: only the const block counts, but the interface repeats the
        # same keys in the same order, so comparing the full list is fine.
        if key_order(en) != key_order(loc):
            missing = [k for k in key_order(en) if k not in key_order(loc)]
            extra = [k for k in key_order(loc) if k not in key_order(en)]
            problems += 1
            print(f'FAIL {loc_path}: key set/order differs (missing: {missing[:5]}, extra: {extra[:5]})')
            continue
        same = 0
        for (ek, ev), (lk, lv) in zip(en_vals, loc_vals):
            if ek != lk:
                continue
            ev_raw, lv_raw = ev.strip('\'"'), lv.strip('\'"')
            if tokens(ev_raw) != tokens(lv_raw):
                problems += 1
                print(f'FAIL {loc_path}: {ek} tokens differ\n  en:  {tokens(ev_raw)}\n  loc: {tokens(lv_raw)}')
            if ev == lv:
                same += 1
        print(f'{"OK  " if same < len(en_vals) else "WARN"} {loc_path}: {same}/{len(en_vals)} values still identical to English')
    if problems:
        print(f'FAIL — {problems} problem(s)')
        sys.exit(1)
    print('OK — all modules match their English siblings on keys, order and tokens')


if __name__ == '__main__':
    main()
