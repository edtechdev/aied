#!/usr/bin/env python3
"""Fetch recent PsyArXiv preprints tagged *Educational Psychology*.

PsyArXiv has no public RSS feed, and the OSF REST API cannot combine its
`filter[subjects]` with any other filter (every combination returns 0 results),
so neither path can express "newest PsyArXiv preprints in Educational
Psychology". The OSF discover page solves this with the SHARE/Trove search
service, which this script uses the same way:

    https://share.osf.io/trove/index-card-search
      ?cardSearchFilter[publisher][]=https://osf.io/preprints/psyarxiv
      &cardSearchFilter[subject][any-of]=https://api.osf.io/v2/subjects/<subject-id>
      &cardSearchFilter[resourceType]=Preprint
      &cardSearchFilter[accessService]=https://osf.io/
      &cardSearchText[*,creator.name,isContainedBy.creator.name]=
      &sort=-dateCreated            # only sort Trove accepts here
      &page[size]=50

Output: one JSON object per line (newest first), same shape as
fetch-rss-feeds.py, so the scan prompt can treat it as another source.

Usage:
    python3 tooling/scripts/fetch-psyarxiv-edpsych.py               # last 3 days
    python3 tooling/scripts/fetch-psyarxiv-edpsych.py --days 7
    python3 tooling/scripts/fetch-psyarxiv-edpsych.py --days 0      # no date window (newest N)
    python3 tooling/scripts/fetch-psyarxiv-edpsych.py --limit 10 --pretty
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import time
from datetime import date, datetime, timedelta
from urllib.parse import urlencode
from urllib.request import urlopen, Request
from urllib.error import HTTPError, URLError

HERE = os.path.dirname(os.path.abspath(__file__))
WIKI = os.path.dirname(os.path.dirname(HERE))
CONFIG = os.path.join(WIKI, 'wiki.config.yaml')

TROVE_URL = 'https://share.osf.io/trove/index-card-search'

# Embedded fallback so the script still runs when copied on its own.
EMBEDDED_SOURCE = {
    'name': 'PsyArXiv (Educational Psychology)',
    'provider': 'https://osf.io/preprints/psyarxiv',
    'provider_name': 'PsyArXiv',
    'subject_ids': ['https://api.osf.io/v2/subjects/584240d954be81056ceca992'],
    'subject_name': 'Educational Psychology',
    'access_service': 'https://osf.io/',
    'max_results': 60,
    'max_age_days': 3,
}


def load_source():
    """The PsyArXiv educational-psychology source block from wiki.config.yaml."""
    if not os.path.exists(CONFIG):
        print(f'# note: {CONFIG} not found - using the embedded source', file=sys.stderr)
        return EMBEDDED_SOURCE
    try:
        import yaml
    except ImportError:
        print('# note: PyYAML missing - using the embedded source', file=sys.stderr)
        return EMBEDDED_SOURCE
    with open(CONFIG, encoding='utf-8') as fh:
        cfg = yaml.safe_load(fh) or {}
    for src in (cfg.get('scan') or {}).get('sources') or []:
        if src.get('type') == 'trove_search':
            merged = dict(EMBEDDED_SOURCE)
            merged.update({k: v for k, v in src.items() if v is not None})
            return merged
    print('# note: no trove_search source in wiki.config.yaml - using the embedded source',
          file=sys.stderr)
    return EMBEDDED_SOURCE


def build_url(src, page_size=50, cursor=None):
    params = [
        ('cardSearchFilter[publisher][]', src['provider']),
        ('cardSearchFilter[resourceType]', 'Preprint'),
        ('cardSearchFilter[accessService]', src['access_service']),
        ('cardSearchText[*,creator.name,isContainedBy.creator.name]', ''),
        ('sort', '-dateCreated'),
        ('page[size]', str(page_size)),
    ]
    if cursor:
        params.append(('page[cursor]', cursor))
    for subject in src['subject_ids']:
        params.append(('cardSearchFilter[subject][any-of]', subject))
    return TROVE_URL + '?' + urlencode(params)


def fetch(url, retries=3, delay=2):
    last = None
    for attempt in range(retries):
        try:
            req = Request(url, headers={'Accept': 'application/json',
                                        'User-Agent': 'research-wiki/1.0 (psyarxiv scan)'})
            with urlopen(req, timeout=60) as resp:
                return json.loads(resp.read().decode('utf-8'))
        except (HTTPError, URLError, TimeoutError, json.JSONDecodeError) as exc:
            last = exc
            if attempt + 1 < retries:
                time.sleep(delay * (2 ** attempt))
    raise RuntimeError(f'Trove request failed after {retries} attempts: {last}')


def val(card, key):
    """First @value of a JSON-LD card field ('' when absent)."""
    items = card.get(key) or []
    for item in items:
        if isinstance(item, dict) and '@value' in item:
            return str(item['@value'])
    return ''


def authors(card):
    out = []
    for person in card.get('creator') or []:
        family = val({'x': person.get('foaf:familyName')}, 'x') if person.get('foaf:familyName') else ''
        given = val({'x': person.get('foaf:givenName')}, 'x') if person.get('foaf:givenName') else ''
        name = ' '.join(p for p in (given, family) if p).strip() or val(person, 'name').strip()
        if name:
            out.append(name)
    return out


def to_record(card, src):
    url = card.get('@id', '')
    return {
        'source': 'psyarxiv-edpsych',
        'provider': src.get('provider_name', 'PsyArXiv'),
        'subject': src.get('subject_name', 'Educational Psychology'),
        'title': val(card, 'title'),
        'url': url,
        'doi': None,                      # PsyArXiv mints DOIs later; never invent one
        'osf_id': url.rstrip('/').split('/')[-1] if url else '',
        'date_created': val(card, 'dateCreated'),
        'date_submitted': val(card, 'dateSubmitted'),
        'date_published': val(card, 'datePublished'),
        'authors': authors(card),
        'abstract': val(card, 'description'),
        'keywords': [k['@value'] for k in card.get('keyword') or [] if '@value' in k],
        'license': val(card, 'rights'),
    }


def norm_title(title):
    return ''.join(ch for ch in title.lower() if ch.isalnum())


def primary_file_url(osf_id):
    """Resolve the download URL of a preprint's primary file via the OSF API."""
    api = f'https://api.osf.io/v2/preprints/{osf_id}/files/osfstorage/'
    payload = fetch(api)
    files = [f for f in payload.get('data') or []
             if (f.get('attributes') or {}).get('kind') == 'file']
    if not files:
        raise RuntimeError(f'no files found for preprint {osf_id}')
    files.sort(key=lambda f: f['attributes'].get('size') or 0, reverse=True)
    return files[0]['links']['download'], files[0]['attributes'].get('name', '')


def download_pdf(osf_id, out_path):
    url, name = primary_file_url(osf_id)
    req = Request(url, headers={'User-Agent': 'research-wiki/1.0 (psyarxiv scan)'})
    with urlopen(req, timeout=180) as resp, open(out_path, 'wb') as fh:
        fh.write(resp.read())
    return out_path, name


def download_text(osf_id, out_path):
    """Download a preprint's PDF and convert it to text (pdftotext -layout)."""
    import subprocess
    import tempfile
    with tempfile.TemporaryDirectory() as tmp:
        pdf = os.path.join(tmp, f'{osf_id}.pdf')
        _, name = download_pdf(osf_id, pdf)
        subprocess.run(['pdftotext', '-layout', pdf, out_path], check=True)
    text = open(out_path, encoding='utf-8', errors='replace').read()
    return out_path, name, len(text)


def collect(src, days, limit):
    cutoff = (date.today() - timedelta(days=days)) if days else None
    records, seen = [], set()
    cursor, pages = None, 0
    while len(records) < limit and pages < 8:
        payload = fetch(build_url(src, cursor=cursor))
        cards = payload.get('data') or []
        if not cards:
            break
        pages += 1
        stop = False
        for card in cards:
            created = val(card, 'dateCreated')
            if cutoff and created:
                try:
                    if datetime.strptime(created, '%Y-%m-%d').date() < cutoff:
                        stop = True
                        break
                except ValueError:
                    pass
            key = norm_title(val(card, 'title'))
            if key in seen:
                continue
            seen.add(key)
            records.append(to_record(card, src))
            if len(records) >= limit:
                break
        if stop:
            break
        nxt = ((payload.get('links') or {}).get('next') or [{}])
        cursor = None
        if isinstance(nxt, dict):
            from urllib.parse import urlparse, parse_qs
            qs = parse_qs(urlparse(nxt.get('href', '')).query)
            cursor = (qs.get('page[cursor]') or [None])[0]
        if not cursor:
            break
    return records[:limit]


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--days', type=int, default=None, help='only preprints created in the last N days (0 = no window)')
    ap.add_argument('--limit', type=int, default=None, help='max records to emit')
    ap.add_argument('--pretty', action='store_true', help='pretty-print each record')
    ap.add_argument('--download', metavar='OSF_ID',
                    help='download the preprint with this OSF id (e.g. dwp4t) instead of listing')
    ap.add_argument('--text', metavar='OSF_ID',
                    help='download the preprint PDF and convert it to text (pdftotext -layout)')
    ap.add_argument('--out', help='output path for --download / --text')
    args = ap.parse_args()

    if args.download or args.text:
        osf_id = (args.download or args.text).strip()
        default = f'/tmp/{osf_id}.pdf' if args.download else f'/tmp/{osf_id}.txt'
        out = args.out or default
        try:
            if args.download:
                path, name = download_pdf(osf_id, out)
                print(f'{path}\t{name}\t{os.path.getsize(path)} bytes')
            else:
                path, name, chars = download_text(osf_id, out)
                print(f'{path}\t{name}\t{chars} chars')
        except Exception as exc:  # noqa: BLE001 - report and exit non-zero
            print(f'# ERROR: {exc}', file=sys.stderr)
            return 2
        return 0

    src = load_source()
    days = src.get('max_age_days', 3) if args.days is None else args.days
    limit = args.limit or int(src.get('max_results', 60))

    try:
        records = collect(src, days, limit)
    except RuntimeError as exc:
        print(f'# ERROR: {exc}', file=sys.stderr)
        return 2

    print(f'# PsyArXiv / Educational Psychology: {len(records)} preprint(s)'
          + (f' from the last {days} day(s)' if days else ''), file=sys.stderr)
    for rec in records:
        print(json.dumps(rec, indent=2 if args.pretty else None, ensure_ascii=False))
    return 0


if __name__ == '__main__':
    sys.exit(main())
