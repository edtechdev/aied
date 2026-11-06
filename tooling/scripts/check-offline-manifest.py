#!/usr/bin/env python3
"""Fail when src/data/offlineArtifacts.ts disagrees with the release catalog.

The catalog is tracked, so this works in a clean checkout without the EPUB/PDF
binaries. The default mode is deterministic and offline: validate the catalog,
regenerate the TypeScript view into a temporary file, and compare it.

`--remote` is the explicit publication/migration check. It downloads the stable
public release URLs and verifies bytes, SHA-256 and basic file structure. It is
never part of an ordinary site build.

Usage:
  python3 tooling/scripts/check-offline-manifest.py
  python3 tooling/scripts/check-offline-manifest.py --remote [--locale es]
Exit 0 when the catalog and manifest agree (and remote assets verify, if asked).
"""
from __future__ import annotations

import argparse
import hashlib
import json
import pathlib
import re
import subprocess
import sys
import tempfile
import urllib.request
import zipfile

REPO = pathlib.Path(__file__).resolve().parents[2]
sys.path.insert(0, str(REPO / 'tooling' / 'scripts'))
import offline_release  # noqa: E402

MANIFEST = REPO / 'src' / 'data' / 'offlineArtifacts.ts'
GENERATOR = REPO / 'tooling' / 'scripts' / 'gen-offline-manifest.py'


def load(path):
    text = pathlib.Path(path).read_text(encoding='utf-8')
    match = re.search(
        r'export const offlineArtifacts:[^=]*=\s*(\{.*?\n\});\s*\n\nexport const defaultLocale',
        text,
        re.S,
    )
    if not match:
        return None
    return json.loads(match.group(1))


def describe(a, b):
    out = []
    for code in sorted(set(a) | set(b)):
        ea, eb = a.get(code, {}), b.get(code, {})
        for kind in sorted(set(ea) | set(eb)):
            va, vb = ea.get(kind), eb.get(kind)
            if va == vb:
                continue
            if va is None:
                out.append(f'  {code}/{kind}: missing from the manifest (catalog has {vb["bytes"]} bytes)')
            elif vb is None:
                out.append(f'  {code}/{kind}: in the manifest but absent from the catalog')
            else:
                bits = []
                if va.get('bytes') != vb.get('bytes'):
                    bits.append(f'size {va.get("bytes")} -> {vb.get("bytes")}')
                if va.get('url') != vb.get('url'):
                    bits.append(f'url {va.get("url")} -> {vb.get("url")}')
                out.append(f'  {code}/{kind}: ' + ', '.join(bits))
    return out


def verify_remote(catalog, site, locale=None):
    """Download stable public URLs and check exact bytes/hash plus basic format."""
    selected = [e for e in catalog['editions'] if locale is None or e['locale'] == locale]
    if not selected:
        print(f'FAIL - no catalog entries for locale {locale!r}')
        return 1
    failures = []
    for entry in selected:
        url = offline_release.asset_url(site, entry['filename'])
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'aied-offline-verifier/1'})
            with urllib.request.urlopen(req, timeout=60) as response:
                data = response.read()
        except Exception as exc:  # noqa: BLE001 - report the concrete URL failure
            failures.append(f'{entry["filename"]}: {type(exc).__name__}: {exc}')
            continue
        problems = []
        if len(data) != int(entry['bytes']):
            problems.append(f'bytes {len(data)} != {entry["bytes"]}')
        if hashlib.sha256(data).hexdigest() != entry['sha256']:
            problems.append('sha256 mismatch')
        if entry['format'] == 'pdf' and not data.startswith(b'%PDF-'):
            problems.append('not a PDF (%PDF- header missing)')
        if entry['format'] == 'epub':
            try:
                with tempfile.NamedTemporaryFile(suffix='.epub') as tmp:
                    tmp.write(data)
                    tmp.flush()
                    if not zipfile.is_zipfile(tmp.name):
                        problems.append('not an EPUB zip')
            except OSError as exc:
                problems.append(f'EPUB structure check failed: {exc}')
        if entry['format'].startswith('llms'):
            if not data.strip():
                problems.append('empty text export')
            try:
                data.decode('utf-8')
            except UnicodeDecodeError:
                problems.append('not UTF-8 text')
        if problems:
            failures.append(f'{entry["filename"]}: ' + '; '.join(problems))
        else:
            print(f'OK {entry["filename"]} ({len(data)} bytes)')
    if failures:
        print(f'FAIL - {len(failures)} remote asset(s) failed')
        for item in failures:
            print('  ' + item)
        return 1
    print(f'OK - {len(selected)} remote asset(s) verified')
    return 0


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--remote', action='store_true',
                        help='download and verify the stable public release URLs')
    parser.add_argument('--locale', default=None,
                        help='limit --remote to one locale')
    args = parser.parse_args()

    try:
        site = offline_release.load_site()
        catalog = offline_release.load_catalog(site=site)
    except (OSError, ValueError) as exc:
        print(f'FAIL - offline catalog is invalid: {exc}')
        return 1

    committed = load(MANIFEST)
    if committed is None:
        print('FAIL - could not parse offlineArtifacts from ' + str(MANIFEST.relative_to(REPO)))
        print('       the generated shape changed; update this gate to match')
        return 1

    with tempfile.TemporaryDirectory() as td:
        tmp = pathlib.Path(td) / 'offlineArtifacts.ts'
        result = subprocess.run(
            [sys.executable, str(GENERATOR), str(tmp)],
            capture_output=True, text=True, cwd=REPO,
        )
        if result.returncode != 0:
            print('FAIL - the manifest generator itself failed')
            print((result.stderr or result.stdout).strip()[:800])
            return 1
        fresh = load(tmp)

    if fresh is None:
        print('FAIL - could not parse the freshly generated manifest')
        return 1

    if committed != fresh:
        diffs = describe(committed, fresh)
        print(f'FAIL - {len(diffs)} offline artifact entries are stale or wrong')
        for line in diffs[:40]:
            print(line)
        if len(diffs) > 40:
            print(f'  ... and {len(diffs) - 40} more')
        print()
        print('Fix: python3 tooling/scripts/gen-offline-manifest.py')
        return 1

    count = sum(len(v) for v in committed.values())
    print(f'OK - offline artifact manifest matches the catalog ({count} entries across {len(committed)} locales)')
    if args.remote:
        return verify_remote(catalog, site, args.locale)
    return 0


if __name__ == '__main__':
    sys.exit(main())
