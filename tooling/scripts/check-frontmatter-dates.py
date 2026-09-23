#!/usr/bin/env python3
"""Guard the frontmatter date fields against silent YAML auto-typing.

Why this exists
---------------
An unquoted ISO timestamp is not a string to YAML, it is a date:

    created: 2026-08-12T21:20:35-04:00     -> datetime(2026, 8, 12, 21, 20, 35)

The content schema accepts both types and normalises dates through
`toISOString()`, which shifts an Eastern-evening timestamp to the next calendar
day in UTC. The date part of these fields drives sorting (sidebar, RSS) and
calendar grouping (journal), so a stripped quote silently moves a page to the
wrong day. That is exactly what a vault editor (Obsidian and similar) does to a
frontmatter block it rewrites: it re-serialises the YAML and drops the quotes.

The convention is therefore: every date field is a QUOTED string, and
`created`/`updated`/`source_updated` carry a full timestamp with an offset.

    created: "2026-08-12T21:20:35-04:00"   1  good
    created: 2026-08-12T21:20:35-04:00     2  defect: unquoted, YAML date
    created: "2026-08-12"                  3  defect: no time, same-day ties
    created: 2026-08-12                    4  defect: both of the above

`published` is the exception: it records the source's own precision and may be
'YYYY-MM-DD', 'YYYY-MM' or 'YYYY' - but still quoted, so it stays a string.

Usage
-----
    python3 tooling/scripts/check-frontmatter-dates.py            # every page
    python3 tooling/scripts/check-frontmatter-dates.py --quiet    # counts only

Exit code is non-zero when any page has an unquoted or malformed date field.
"""
import argparse
import datetime
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from content_paths import CONTENT, rel  # noqa: E402

try:
    import yaml
except ImportError:  # pragma: no cover
    print('check-frontmatter-dates.py: pyyaml is required (pip install pyyaml)')
    sys.exit(2)

# Timestamps that must carry both a time and a UTC offset.
FULL_TIMESTAMP_FIELDS = {'created', 'updated', 'source_updated'}
FULL_RE = re.compile(r'^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$')
# Fields free to carry only the precision their source offers, still quoted.
PARTIAL_FIELDS = {'published', 'date'}
PARTIAL_RE = re.compile(r'^\d{4}(?:-\d{2}(?:-\d{2})?)?$')


def frontmatter(text):
    """Return (frontmatter text, body) or (None, text) when there is none."""
    if not text.startswith('---'):
        return None, text
    end = text.find('\n---', 3)
    if end < 0:
        return None, text
    return text[3:end], text[end + 4:]


def line_of(fm_text, field):
    for i, line in enumerate(fm_text.splitlines(), start=2):
        if re.match(rf'^\s*{re.escape(field)}\s*:', line):
            return i, line.strip()
    return None, ''


def scan(path):
    """Return a list of defect strings for one page."""
    text = path.read_text(encoding='utf-8')
    fm_text, _ = frontmatter(text)
    if fm_text is None:
        return []
    try:
        data = yaml.safe_load(fm_text)
    except yaml.YAMLError as exc:
        return [f'{rel(path)}: frontmatter is not valid YAML ({str(exc).splitlines()[0]})']
    if not isinstance(data, dict):
        return []

    defects = []
    for field, value in data.items():
        items = value if isinstance(value, list) else [value]
        for item in items:
            if isinstance(item, dict):
                # ai_assist: a list of mappings whose `date` is a plain string day.
                if 'date' in item:
                    d = item['date']
                    if not (isinstance(d, str) and PARTIAL_RE.match(d)):
                        line, raw = line_of(fm_text, 'date')
                        defects.append(
                            f'{rel(path)}:{line}: ai_assist date must be a quoted YYYY-MM-DD string '
                            f'(found {d!r}) - write date: "{d}"'
                        )
                continue
            # A YAML timestamp carries a time, so the schema normalises it through
            # toISOString() and the calendar day can move. A day-only YAML date
            # (e.g. a bare `published: 2025-11-04`) cannot shift and is allowed.
            # created/updated must be full timestamps, so a day-only YAML date there is a
            # defect too; elsewhere a day-only date cannot shift and is left alone.
            if isinstance(item, datetime.datetime) or (
                isinstance(item, datetime.date) and field in FULL_TIMESTAMP_FIELDS
            ):
                line, raw = line_of(fm_text, field)
                defects.append(
                    f'{rel(path)}:{line}: {field} is an unquoted YAML timestamp ({raw or field}) - '
                    f'quoting it keeps it a string; unquoted values are normalised to UTC and can '
                    f'shift the calendar day'
                )

    # String values still have to be well formed.
    for field in sorted(FULL_TIMESTAMP_FIELDS | PARTIAL_FIELDS):
        value = data.get(field)
        if not isinstance(value, str):
            continue
        ok = FULL_RE.match(value) if field in FULL_TIMESTAMP_FIELDS else PARTIAL_RE.match(value)
        if not ok:
            line, raw = line_of(fm_text, field)
            want = ('a full timestamp with a UTC offset, e.g. "2026-08-12T21:20:35-04:00"'
                    if field in FULL_TIMESTAMP_FIELDS else "a quoted 'YYYY-MM-DD', 'YYYY-MM' or 'YYYY'")
            defects.append(f'{rel(path)}:{line}: {field} must be {want} (found {value!r})')
    return defects


def main():
    ap = argparse.ArgumentParser(description='Guard frontmatter date fields against YAML auto-typing.')
    ap.add_argument('--quiet', action='store_true', help='counts only, no per-page lines')
    args = ap.parse_args()

    pages = sorted(CONTENT.rglob('*.md'))
    all_defects = []
    for path in pages:
        all_defects.extend(scan(path))

    if all_defects and not args.quiet:
        for d in all_defects:
            print(f'  {d}')
    print(f'Scanned {len(pages)} page(s). Defects: {len(all_defects)}')
    return 1 if all_defects else 0


if __name__ == '__main__':
    sys.exit(main())