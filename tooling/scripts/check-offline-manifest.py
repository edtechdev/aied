#!/usr/bin/env python3
"""Fail when src/data/offlineArtifacts.ts disagrees with the files in public/.

The manifest is a generated view of what exists on disk: one entry per artifact per
locale, holding the URL a reader follows and the file's real size. The site reads the
size from it to tell a reader how big a download is, so a stale manifest is not a
cosmetic problem - it prints a wrong number on the page.

It went stale once for days after the editions were rebuilt: 31 of 65 entries carried
the previous build's sizes, and nothing failed, because a generated file that is
committed has no defender unless a gate re-derives it. This is that gate.

The check re-runs the generator into a temporary file and compares, rather than
re-implementing its rules. Two implementations would drift apart exactly the way the
manifest drifted from the artifacts.

Usage: python3 tooling/scripts/check-offline-manifest.py
Exit 0 when the manifest matches, 1 when it does not.
"""
import json
import pathlib
import re
import subprocess
import sys
import tempfile

REPO = pathlib.Path(__file__).resolve().parents[2]
MANIFEST = REPO / 'src' / 'data' / 'offlineArtifacts.ts'
GENERATOR = REPO / 'tooling' / 'scripts' / 'gen-offline-manifest.py'


def load(path):
    """The manifest object from a generated file, parsed out of its TypeScript."""
    text = pathlib.Path(path).read_text(encoding='utf-8')
    m = re.search(
        r'export const offlineArtifacts:[^=]*=\s*(\{.*?\n\});\s*\n\nexport const defaultLocale',
        text,
        re.S,
    )
    if not m:
        return None
    return json.loads(m.group(1))


def describe(a, b):
    """Per-entry differences between the committed and the freshly generated map."""
    out = []
    for code in sorted(set(a) | set(b)):
        ea, eb = a.get(code, {}), b.get(code, {})
        for kind in sorted(set(ea) | set(eb)):
            va, vb = ea.get(kind), eb.get(kind)
            if va == vb:
                continue
            if va is None:
                out.append(f'  {code}/{kind}: missing from the manifest (file exists, {vb["bytes"]} bytes)')
            elif vb is None:
                out.append(f'  {code}/{kind}: in the manifest but no such file in public/')
            else:
                bits = []
                if va.get('bytes') != vb.get('bytes'):
                    bits.append(f'size {va.get("bytes")} -> {vb.get("bytes")}')
                if va.get('url') != vb.get('url'):
                    bits.append(f'url {va.get("url")} -> {vb.get("url")}')
                out.append(f'  {code}/{kind}: ' + ', '.join(bits))
    return out


def main():
    committed = load(MANIFEST)
    if committed is None:
        print('FAIL - could not parse offlineArtifacts from ' + str(MANIFEST.relative_to(REPO)))
        print('       the generated shape changed; update this gate to match')
        return 1

    with tempfile.TemporaryDirectory() as td:
        tmp = pathlib.Path(td) / 'offlineArtifacts.ts'
        r = subprocess.run(
            [sys.executable, str(GENERATOR), str(tmp)],
            capture_output=True, text=True, cwd=REPO,
        )
        if r.returncode != 0:
            print('FAIL - the manifest generator itself failed')
            print((r.stderr or r.stdout).strip()[:800])
            return 1
        fresh = load(tmp)

    if fresh is None:
        print('FAIL - could not parse the freshly generated manifest')
        return 1

    if committed == fresh:
        n = sum(len(v) for v in committed.values())
        print(f'OK - offline artifact manifest matches public/ ({n} entries across {len(committed)} locales)')
        return 0

    diffs = describe(committed, fresh)
    print(f'FAIL - {len(diffs)} offline artifact entries are stale or wrong')
    for line in diffs[:40]:
        print(line)
    if len(diffs) > 40:
        print(f'  ... and {len(diffs) - 40} more')
    print()
    print('Fix: python3 tooling/scripts/gen-offline-manifest.py')
    print('The site prints these sizes to readers, so a stale entry is a wrong claim on the page.')
    return 1


if __name__ == '__main__':
    sys.exit(main())
