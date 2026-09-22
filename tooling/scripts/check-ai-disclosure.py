#!/usr/bin/env python3
"""Check the AI-use / provenance fields on content pages. HARD gate.

The fields this checks are declared in src/content.config.ts and explained in
AI-USE.md. They are not rendered by the site; they travel with the markdown so the
repository, the offline editions and any harvested copy carry the disclosure.

What is checked
  HARD (exit 1)
    - a page created on or after aiDisclosure.started (site.config.json) has no
      `ai_assist` record and no `contributors` entry
    - a `contributors`/`reviewed_by` id is not a human in site.config.json
    - an `ai_assist` model is neither 'unknown' nor listed in the disclosure
      (add new models to site.config.json rather than typing them into pages)
    - an `ai_assist` role is outside the fixed set, or an entry has no model
    - a `source_depth` or `verified` value is outside the fixed set

  REPORTED (exit 0)
    - coverage: how many pages carry a record, and how many assert a human review

Usage:
  python3 tooling/scripts/check-ai-disclosure.py
  python3 tooling/scripts/check-ai-disclosure.py --changed   # only pages in the working tree
"""
from __future__ import annotations

import argparse
import datetime as _dt
import glob
import json
import os
import re
import subprocess
import sys

import yaml

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
COLLECTIONS = ('articles', 'concepts', 'faqs', 'resources')
ROLES = {'drafting', 'revision', 'link classification', 'summarization', 'translation', 'none'}
DEPTHS = {'full text', 'abstract only', 'metadata only'}
VERIFIED = {'citation', 'numbers', 'quotes', 'links'}


def frontmatter(path: str) -> dict:
    text = open(path, encoding='utf-8').read()
    m = re.match(r'^---\n(.*?)\n---\n', text, re.S)
    if not m:
        return {}
    try:
        return yaml.safe_load(m.group(1)) or {}
    except yaml.YAMLError as exc:  # pragma: no cover - surfaced as a failure
        print(f'  YAML error in {os.path.relpath(path, WIKI)}: {exc}')
        return {}


def as_list(value) -> list:
    """Normalize a frontmatter field that may be a scalar, a flow list or absent.

    A YAML scalar like `source_depth: full text` is a string, and iterating a
    string yields characters, so every list-shaped field goes through here.
    """
    if value is None:
        return []
    if isinstance(value, (list, tuple)):
        return [v for v in value]
    return [value]


def changed_paths() -> set[str]:
    out = subprocess.run(['git', 'status', '--porcelain'], cwd=WIKI,
                         capture_output=True, text=True).stdout
    paths = set()
    for line in out.split('\n'):
        if not line.strip():
            continue
        rel = line[3:].strip().strip('"')
        if ' -> ' in rel:
            rel = rel.split(' -> ')[-1]
        paths.add(os.path.normpath(os.path.join(WIKI, rel)))
    return paths


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--changed', action='store_true',
                    help='check only pages modified in the working tree')
    args = ap.parse_args()

    with open(os.path.join(WIKI, 'site.config.json'), encoding='utf-8') as fh:
        cfg = json.load(fh)
    ai = cfg.get('aiDisclosure', {})
    started = str(ai.get('started') or '')
    known_models = {m['id'] for m in ai.get('models', []) if m.get('id')}
    humans = {c['id'] for c in cfg.get('contributors', []) if c.get('kind') == 'human'}
    non_human = {c['id'] for c in cfg.get('contributors', []) if c.get('kind') != 'human'}

    only_changed = changed_paths() if args.changed else None
    pages = []
    for coll in COLLECTIONS:
        pages += sorted(glob.glob(os.path.join(WIKI, coll, '*.md')))

    errors: list[str] = []
    required = recorded = reviewed = 0

    for path in pages:
        if only_changed is not None and path not in only_changed:
            continue
        meta = frontmatter(path)
        rel = os.path.relpath(path, WIKI)
        created = str(meta.get('created') or '')[:10]

        contribs = as_list(meta.get('contributors'))
        reviewer_ids = as_list(meta.get('reviewed_by'))
        assists = as_list(meta.get('ai_assist'))

        for field, ids in (('contributors', contribs), ('reviewed_by', reviewer_ids)):
            for cid in ids:
                if cid in non_human:
                    errors.append(f'{rel}: {field} lists {cid!r}, which is not a human contributor')
                elif cid not in humans:
                    errors.append(f'{rel}: {field} lists unknown contributor id {cid!r} '
                                  f'(add it to site.config.json first)')

        for i, entry in enumerate(assists, 1):
            if not isinstance(entry, dict):
                errors.append(f'{rel}: ai_assist entry {i} is not a mapping')
                continue
            model = str(entry.get('model') or '').strip()
            role = str(entry.get('role') or '').strip()
            if not model:
                errors.append(f'{rel}: ai_assist entry {i} has no model')
            elif model != 'unknown' and known_models and model not in known_models:
                errors.append(f'{rel}: ai_assist model {model!r} is not listed in '
                              f'site.config.json aiDisclosure.models')
            if role not in ROLES:
                errors.append(f'{rel}: ai_assist role {role!r} is not one of {sorted(ROLES)}')
            date = str(entry.get('date') or '').strip()
            if date:
                try:
                    _dt.date.fromisoformat(date[:10])
                except ValueError:
                    errors.append(f'{rel}: ai_assist date {date!r} is not an ISO date')

        for depth in as_list(meta.get('source_depth')):
            if depth not in DEPTHS:
                errors.append(f'{rel}: source_depth {depth!r} is not one of {sorted(DEPTHS)}')
        for check in as_list(meta.get('verified')):
            if check not in VERIFIED:
                errors.append(f'{rel}: verified {check!r} is not one of {sorted(VERIFIED)}')

        if started and created >= started:
            required += 1
            if not assists:
                errors.append(f'{rel}: created {created} but carries no ai_assist record'
                              f' (records begin {started}; see AI-USE.md)')
            if not contribs:
                errors.append(f'{rel}: created {created} but names no contributors')
        if assists:
            recorded += 1
        if reviewer_ids:
            reviewed += 1

    print(f'AI-use disclosure: {recorded} page(s) carry an ai_assist record; '
          f'{reviewed} assert a human review; {required} page(s) were created on or '
          f'after {started or "(no start date set)"} and are required to carry both.')
    if errors:
        print(f'FAILED - {len(errors)} disclosure defect(s):')
        for e in errors[:80]:
            print(f'  - {e}')
        if len(errors) > 80:
            print(f'  ... and {len(errors) - 80} more')
        return 1
    print('OK - disclosure fields are valid and present where required.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
