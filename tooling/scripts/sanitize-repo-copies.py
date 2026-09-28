#!/usr/bin/env python3
"""Sanitise skill and doc copies that are about to be written INTO the repository.

The repository ships to other people, so its copies must not name a person or carry an absolute
local path. The installed copies on this machine may legitimately contain both, which is why the
installed -> repo direction of sync-skills.py has repeatedly imported them.

Usage:
    python3 tooling/scripts/sanitize-repo-copies.py --check          # report only, exit 1 on findings
    python3 tooling/scripts/sanitize-repo-copies.py --write          # rewrite the offending files
    python3 tooling/scripts/sanitize-repo-copies.py --write <paths>  # restrict to given paths

Run it after any sync that writes into skills/, tooling/ or AGENTS.md, and before committing.
"""
import argparse
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parents[2]

# Scanned areas: everything that ships as documentation or tooling.
SCAN_DIRS = ('skills', 'tooling')
SCAN_FILES = ('AGENTS.md', 'README.md', 'config.yaml', 'site.config.json')

# Files that legitimately carry the maintainer's name: the site attribution is read from
# site.config.json and appears in the footer, the EPUB byline and the PDF notice page.
ALLOWED = {'site.config.json'}

# Composed from fragments so this file does not itself contain the personal information it looks
# for. The rule stops at the home path and the person's name; the public GitHub handle that serves
# the site is intentional and is not treated as personal information.
_LOCAL = 'dou' + 'g'
_GIVEN = 'Dou' + 'g'
_SURNAME = 'Hol' + 'ton'

REPLACEMENTS = [
    # absolute paths -> generic references, longest first so no partial path survives
    (r'/home/' + _LOCAL + r'/wiki', '<repo-root>'),
    (r'/home/' + _LOCAL + r'/\.hermes/skills/cache/documents/?', "the agent's document cache"),
    (r'/home/' + _LOCAL + r'/\.hermes/skills', '<skills-dir>'),
    (r'/home/' + _LOCAL + r'/\.hermes', '<agent-home>'),
    (r'/home/' + _LOCAL, '<local-path>'),
]

# A name is only a violation when it is the maintainer's, in prose or in a command.
NAME_PATTERNS = [
    (r'\b' + _GIVEN + ' ' + _SURNAME + r'\b', 'the maintainer'),
    (r'\b' + _GIVEN + r"'s\b", "the maintainer's"),
    # the bare first name: a name split across a line break defeats the contiguous rule, and so
    # does a casual reference. Word boundaries keep a longer name such as Douglas intact.
    (r'\b' + _GIVEN + r'\b', 'the maintainer'),
]


def targets(paths=None):
    if paths:
        for p in paths:
            yield pathlib.Path(p)
        return
    for d in SCAN_DIRS:
        base = ROOT / d
        if base.is_dir():
            for p in sorted(base.rglob('*')):
                if p.is_file() and p.suffix in {'.md', '.py', '.sh', '.yaml', '.yml', '.json', '.astro', '.ts'}:
                    yield p
    for f in SCAN_FILES:
        p = ROOT / f
        if p.is_file():
            yield p


def scan(text):
    hits = []
    for pat, _ in REPLACEMENTS + NAME_PATTERNS:
        for m in re.finditer(pat, text):
            hits.append(m.group(0))
    return hits


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--check', action='store_true', help='report only (default)')
    ap.add_argument('--write', action='store_true', help='rewrite offending files')
    ap.add_argument('paths', nargs='*')
    args = ap.parse_args()

    findings = 0
    for p in targets(args.paths or None):
        if p.name in ALLOWED:
            continue
        try:
            text = p.read_text(encoding='utf-8')
        except (UnicodeDecodeError, OSError):
            continue
        hits = scan(text)
        if not hits:
            continue
        findings += len(hits)
        rel = p.relative_to(ROOT) if str(p).startswith(str(ROOT)) else p
        print(f'{rel}: {len(hits)} finding(s) -> {sorted(set(hits))}')
        if args.write:
            new = text
            for pat, rep in REPLACEMENTS + NAME_PATTERNS:
                new = re.sub(pat, rep, new)
            if new != text:
                p.write_text(new, encoding='utf-8')
                print(f'   rewritten')

    if findings:
        verb = 'rewritten' if args.write else 'found'
        print(f'\n{findings} finding(s) {verb} across the shipped copies.')
        print('The repository ships to other people: it must not name a person or carry a local path.')
        return 1
    print('OK - no personal paths or names in the shipped copies.')
    return 0


if __name__ == '__main__':
    sys.exit(main())