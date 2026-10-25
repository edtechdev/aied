#!/usr/bin/env python3
"""Check the AI-use / provenance fields on content pages. HARD gate.

The fields this checks are declared in src/content.config.ts and explained in
AI-USE.md. They are not rendered by the site; they travel with the markdown so the
repository, the offline editions and any harvested copy carry the disclosure.

What is checked
  HARD (exit 1)
    - a page created on or after RECORD_START (the date the per-page fields
      were introduced) has no
      `ai_assist` record and no `contributors` entry
    - a `contributors`/`reviewed_by` id is not a human in site.config.json
    - an `ai_assist` model is neither 'unknown' nor listed in the disclosure
      (add new models to site.config.json rather than typing them into pages)
    - an `ai_assist` model was superseded by a later registered id on a date
      already covered by the page's own date (site.config.json `supersedes`),
      which is how a truncated alias survives a model-version switch
    - an `ai_assist` date precedes the registry's `since` for that model
    - the model this harness is configured to use is not registered at all, so
      every new page would be attributed to an older, still-listed id
    - an `ai_assist` role is outside the fixed set, or an entry has no model
    - a `source_depth` or `verified` value is outside the fixed set

  REPORTED (exit 0)
    - coverage: how many pages carry a record, and how many assert a human review
    - registry freshness: which model the harness resolves to, and whether it is
      registered (skipped when no harness config is readable, as in CI)

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

# The date the per-page fields (ai_assist, reviewed_by) were introduced. Pages created
# on or after it must carry a record; older pages are covered by the corpus-level model
# history in AI-USE.md instead, since their text predates the field.
RECORD_START = '2026-09-22'

import yaml

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import content_paths

COLLECTIONS = ('articles', 'concepts', 'faqs', 'resources')
# Translated content lives in locale folders mirroring the content root; a
# translated page carries its own ai_assist record (role 'translation').
# Every locale that can hold translated content pages (site.config.json i18n.locales
# minus the default locale). Keep in step with src/content.config.ts LOCALE_CONTENT_DIRS.
LOCALE_DIRS = tuple(content_paths.TRANSLATED)
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


def _moment(value: str) -> tuple[_dt.datetime | None, bool]:
    """Parse an ISO date or datetime, reporting whether a time of day was present."""
    text = (value or '').strip()
    if not text:
        return None, False
    try:
        if len(text) > 10 and ('T' in text or ' ' in text):
            return _dt.datetime.fromisoformat(text.replace('Z', '+00:00')), True
        return _dt.datetime.combine(_dt.date.fromisoformat(text[:10]), _dt.time()), False
    except ValueError:
        return None, False


def _same_frame(a: _dt.datetime, b: _dt.datetime) -> tuple[_dt.datetime, _dt.datetime]:
    """Line up two moments for comparison when only one carries a UTC offset.

    A registry `since` may carry an offset while a date-only page field does not, and
    Python refuses to order aware against naive datetimes. Dropping the offset keeps the
    wall-clock as written, which is what both records mean on this machine.
    """
    if (a.tzinfo is None) != (b.tzinfo is None):
        return (a.replace(tzinfo=None), b.replace(tzinfo=None))
    return a, b


def _covered_by_successor(day: str, since: str) -> bool:
    """Whether an entry dated `day` cannot still be attributed to a superseded model.

    Registry dates are usually dates alone, so a same-day entry is ambiguous and is
    left alone; when the registry records the switch time, the comparison is exact.
    """
    when, _ = _moment(day)
    start, has_time = _moment(since)
    if when is None or start is None:
        return False
    when, start = _same_frame(when, start)
    return when >= start if has_time else when > start


def _precedes_first_use(day: str, first_use: str) -> bool:
    when, _ = _moment(day)
    start, _ = _moment(first_use)
    if not (when and start):
        return False
    when, start = _same_frame(when, start)
    return when < start


def _attribution_moment(entry_date: str, created: str) -> str:
    """The most precise date we have for when the attributed work was done.

    `ai_assist.date` is a date, and `created` is a timestamp, so on the same day the
    timestamp decides whether a mid-day model switch applies. A later entry date means
    the work was redone, and that date is the one that counts.
    """
    entry = (entry_date or '').strip()
    made = (created or '').strip()
    entry_moment, entry_has_time = _moment(entry)
    made_moment, made_has_time = _moment(made)
    if entry_has_time or not made_moment:
        return entry or made
    if not entry_moment:
        return made
    if made_has_time and made_moment.date() == entry_moment.date():
        return made
    return entry


def harness_model(config_path: str) -> tuple[str, str]:
    """The model this harness is configured to use, and where that was read from.

    A model switch that lands in the harness config but not in site.config.json is
    the failure this guard exists for: the registry keeps the old id listed, so
    nothing rejects it, and new pages get attributed to the previous model. The env
    vars are checked first because that is what tooling/ai-commit.sh and a delegating
    parent set; the YAML default is the fallback.
    """
    for env in ('AI_MODEL', 'HERMES_MODEL'):
        value = os.environ.get(env, '').strip()
        if value:
            return value, f'${env}'
    path = os.path.expanduser(config_path or '')
    if not path or not os.path.exists(path):
        return '', ''
    try:
        with open(path, encoding='utf-8') as fh:
            data = yaml.safe_load(fh) or {}
    except (yaml.YAMLError, OSError):
        return '', ''
    model = data.get('model')
    if isinstance(model, str):
        return model.strip(), os.path.basename(path)
    if isinstance(model, dict):
        return str(model.get('default') or '').strip(), os.path.basename(path)
    return '', ''


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--changed', action='store_true',
                    help='check only pages modified in the working tree')
    ap.add_argument('--harness-config', default='~/.hermes/config.yaml',
                    help='harness config to read the in-use model id from '
                         '(default: %(default)s; skipped when unreadable)')
    args = ap.parse_args()

    with open(os.path.join(WIKI, 'site.config.json'), encoding='utf-8') as fh:
        cfg = json.load(fh)
    ai = cfg.get('aiDisclosure', {})
    started = RECORD_START
    known_models = {m['id'] for m in ai.get('models', []) if m.get('id')}
    # Two facts the registry has to carry for an attribution to be checkable: when a
    # model came into use, and which older id (if any) it replaced. Without them a
    # page can name a model that was already retired and nothing notices.
    model_since: dict[str, str] = {}
    superseded: dict[str, tuple[str, str]] = {}
    for entry in ai.get('models', []):
        mid = str(entry.get('id') or '')
        # Keep any time-of-day: a model switch can happen mid-day, and truncating to
        # the date would silently make same-day attributions unjudgeable.
        since = str(entry.get('since') or '').strip()
        if mid and since:
            model_since[mid] = since
            over = str(entry.get('supersedes') or '')
            if over:
                superseded[over] = (mid, since)
    humans = {c['id'] for c in cfg.get('contributors', []) if c.get('kind') == 'human'}
    non_human = {c['id'] for c in cfg.get('contributors', []) if c.get('kind') != 'human'}

    only_changed = changed_paths() if args.changed else None
    pages = []
    for locale, name in ([(content_paths.DEFAULT_DIR, c) for c in COLLECTIONS]
                         + [(l, c) for l in LOCALE_DIRS for c in COLLECTIONS]):
        pages += sorted((content_paths.CONTENT / locale / name).glob('*.md'))

    errors: list[str] = []
    required = recorded = reviewed = 0

    for path in pages:
        # changed_paths() returns strings; pages are Path objects, so comparing
        # them directly never matched and --changed silently inspected 0 pages.
        if only_changed is not None and str(path) not in only_changed:
            continue
        meta = frontmatter(path)
        rel = os.path.relpath(path, WIKI)
        # Keep the timestamp: on the day of a model switch the time of day decides
        # which model was actually serving, so the date alone cannot judge it.
        created_raw = str(meta.get('created') or '').strip()
        created = created_raw[:10]

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
            # Fall back to the page's own date: an entry without a date still makes a
            # claim about which model was in use on the day the page was written.
            day = _attribution_moment(str(entry.get('date') or ''), created_raw)
            if model in superseded:
                new_id, since = superseded[model]
                if _covered_by_successor(day, since):
                    errors.append(
                        f'{rel}: ai_assist model {model!r} was superseded by {new_id!r} at '
                        f'{since} and this entry is dated {day}; name {new_id!r} instead '
                        f'(or drop "supersedes" from the registry if the older id still runs)')
            first_use = model_since.get(model)
            if _precedes_first_use(day, first_use or ''):
                errors.append(
                    f'{rel}: ai_assist model {model!r} is dated {day}, before site.config.json '
                    f'records its first use ({first_use}); correct the date or the registry `since`')
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
                              f' (per-page records begin {started})')
            if not contribs:
                errors.append(f'{rel}: created {created} but names no contributors')
        if assists:
            recorded += 1
        if reviewer_ids:
            reviewed += 1

    model_now, source = harness_model(args.harness_config)
    if not model_now:
        print('Registry freshness: not checked (no harness model resolvable).')
    elif model_now in known_models:
        print(f'Registry freshness: harness model {model_now!r} ({source}) is registered.')
    else:
        errors.append(
            f'harness model {model_now!r} (from {source}) is not in site.config.json '
            f'aiDisclosure.models, so new pages would be attributed to a still-listed '
            f'older id. Register it first: {{"id": "{model_now}", "since": "<YYYY-MM-DD>", '
            f'"note": "...", "supersedes": "<id it replaces>"}}')

    print(f'AI-use disclosure: {recorded} page(s) carry an ai_assist record; '
          f'{reviewed} assert a human review; {required} page(s) were created on or '
          f'after {started} and are required to carry both.')
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
