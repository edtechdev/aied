#!/usr/bin/env python3
"""Refresh a frozen branch-preview snapshot and prove what it now serves.

A preview served from a copied snapshot only shows what was copied into it, so a
build that lands after the last copy is invisible to whoever is reviewing the link.
This runs the whole sequence in one step and verifies the result over HTTP:

    python3 tooling/scripts/refresh-snapshot-preview.py --snapshot ~/preview \\
        --port 4322 --base /aied [--no-build] [--paths / /es/ /ar/]

It builds the site (unless --no-build), copies dist/ into <snapshot>/<base>/, then
fetches a sample of routes from the running server and reports the HTTP status and
the page's own <html lang> — so "the preview is up to date" is a measured claim, not
an assumption.
"""

import argparse
import os
import re
import shutil
import subprocess
import sys
import urllib.error
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--snapshot', required=True, help='directory served by the static server')
    ap.add_argument('--base', default='/aied', help='base path the build is mounted under')
    ap.add_argument('--port', type=int, default=4322)
    ap.add_argument('--host', default='127.0.0.1')
    ap.add_argument('--paths', nargs='*', default=['/', '/es/', '/de/', '/ar/', '/he/'])
    ap.add_argument('--no-build', action='store_true')
    args = ap.parse_args()

    snapshot = os.path.expanduser(args.snapshot)
    target = os.path.join(snapshot, args.base.strip('/'))
    if not os.path.isdir(snapshot):
        sys.exit(f'snapshot directory does not exist: {snapshot}')

    if not args.no_build:
        print('building…')
        result = subprocess.run(['npm', 'run', 'build'], cwd=ROOT)
        if result.returncode != 0:
            sys.exit('build failed; snapshot left as it was')
    if not os.path.isdir(os.path.join(ROOT, 'dist')):
        sys.exit('no dist/ to copy — build first or drop --no-build')

    subprocess.run(['rsync', '-a', '--delete', os.path.join(ROOT, 'dist') + '/', target + '/'], check=True)
    print(f'copied dist/ -> {target}')

    lang = re.compile(r'<html lang="([^"]+)"')
    failed = 0
    for path in args.paths:
        url = f'http://{args.host}:{args.port}/{args.base.strip("/")}{path}'
        try:
            with urllib.request.urlopen(url, timeout=15) as resp:
                body = resp.read().decode('utf-8', 'replace')
                m = lang.search(body)
                print(f'  {resp.status}  {url}  lang={m.group(1) if m else "?"}')
        except urllib.error.HTTPError as exc:
            failed += 1
            print(f'  {exc.code}  {url}')
        except Exception as exc:  # server not running, wrong port
            failed += 1
            print(f'  ----  {url}  ({exc})')
    if failed:
        sys.exit(f'{failed} of {len(args.paths)} routes did not answer — is the server running on {args.port}?')
    print('snapshot refreshed and answering')


if __name__ == '__main__':
    main()