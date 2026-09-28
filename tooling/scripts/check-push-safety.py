#!/usr/bin/env python3
"""Pre-push review: personal-information check over exactly the range about to be pushed.

A push only ever follows an explicit request from the maintainer, and this runs first. It inspects
both halves of what a push publishes - the commit messages and the file contents - for personal
information, and for local-only material that must not become public.

Usage:
    python3 tooling/scripts/check-push-safety.py                    # auto: origin/main..HEAD
    python3 tooling/scripts/check-push-safety.py --base <rev>       # explicit base
    python3 tooling/scripts/check-push-safety.py --all-history      # audit everything (slow)
    python3 tooling/scripts/check-push-safety.py --message-file <f> # check a draft message too

Exit 1 on any finding. Run it before `git push`, and read the output rather than the exit code
alone: a legitimate hit (an author genuinely named the maintainer in a citation) has to be judged, not
silently accepted.
"""
import argparse
import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parents[2]

# Personal information: name, username, home path. The patterns are composed from fragments rather
# than written out, so this file does not itself carry the personal information it exists to detect.
# site.config.json is the one allowed carrier of the attribution name, because the footer, EPUB
# byline and PDF notice read it from there.
_LOCAL = 'dou' + 'g'
_GIVEN = 'Dou' + 'g'
_SURNAME = 'Hol' + 'ton'
PII = [
    (r'/home/' + _LOCAL, 'local home path'),
    (r'\b' + _GIVEN + ' ' + _SURNAME + r'\b', 'maintainer name'),
    (r'\b' + _GIVEN + r"'s\b", 'maintainer name'),
    (r'\b' + _SURNAME.lower() + r'\b', 'maintainer name (case-insensitive)'),
]

# Local-only material that must never be public: rejected, backlogged or private records.
LOCAL_ONLY_PATHS = ('AIED-BACKLOG.md', 'resource-candidates.yaml', 'pdf-sources/', 'raw/', 'log.md')

ALLOWED_FILES = ('site.config.json',)


def git(*args, check=False):
    r = subprocess.run(['git', *args], cwd=ROOT, capture_output=True, text=True)
    if check and r.returncode != 0:
        sys.exit(f'git {" ".join(args)} failed: {r.stderr.strip()}')
    return r.stdout


def default_base():
    for cand in ('origin/main', 'origin/master'):
        if git('rev-parse', '--verify', '--quiet', cand).strip():
            return cand
    return None


def check_text(text, where, findings):
    for pat, label in PII:
        for m in re.finditer(pat, text, re.IGNORECASE if 'case-insensitive' in label else 0):
            line = text[:m.start()].count('\n') + 1
            findings.append((where, f'{label}: {m.group(0)!r} (line {line})'))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--base')
    ap.add_argument('--all-history', action='store_true')
    ap.add_argument('--message-file')
    args = ap.parse_args()

    findings = []

    if args.all_history:
        msgs = git('log', '--format=%H%x00%B')
        for chunk in msgs.split('\x00'):
            if '\n' in chunk:
                h, body = chunk.split('\n', 1)
                check_text(body, f'history message {h[:9]}', findings)
        files = git('ls-files').splitlines()
        print(f'scanning {len(files)} tracked files for local-only material...')
        for f in files:
            if any(f.startswith(p) for p in LOCAL_ONLY_PATHS):
                findings.append((f, 'tracked local-only path'))
        base = None
    else:
        base = args.base or default_base()
        if not base:
            sys.exit('no base ref found: pass --base <rev> or use --all-history')
        rng = f'{base}..HEAD'
        n = git('rev-list', '--count', rng).strip()
        print(f'reviewing {n} commit(s) about to be pushed ({rng})')

        for line in git('log', '--format=%h %s', rng).splitlines():
            print(f'  {line}')

        # 1. commit messages
        for h in git('rev-list', rng).splitlines():
            body = git('show', '-s', '--format=%B', h)
            check_text(body, f'message {h[:9]}', findings)
            if not re.search(r'^AI-(Model|Role|Agent):', body, re.M):
                findings.append((f'message {h[:9]}', 'missing AI disclosure trailers'))

        # 2. content: every path that changed in the range
        diff = git('diff', f'{base}..HEAD', '--unified=0')
        fname = None
        for line in diff.splitlines():
            if line.startswith('+++ b/'):
                fname = line[6:]
            elif line.startswith('+') and fname:
                for p in LOCAL_ONLY_PATHS:
                    if fname.startswith(p):
                        findings.append((fname, f'adds local-only material ({p})'))
                        fname = None
                        break
                else:
                    if fname not in ALLOWED_FILES:
                        check_text(line[1:], fname, findings)

        # 3. any local-only path that is tracked at HEAD
        for f in git('ls-files').splitlines():
            if any(f.startswith(p) for p in LOCAL_ONLY_PATHS):
                findings.append((f, 'tracked local-only path'))

    if args.message_file:
        check_text(pathlib.Path(args.message_file).read_text(encoding='utf-8'), 'draft message', findings)

    if findings:
        print(f'\nFAIL - {len(findings)} finding(s):')
        for where, what in findings:
            print(f'  {where}: {what}')
        print('\nResolve these before pushing. A citation naming a genuine author is acceptable -'
              ' say so explicitly rather than letting the check pass silently.')
        return 1

    print('\nOK - no personal information or local-only material in the range about to be pushed.')
    return 0


if __name__ == '__main__':
    sys.exit(main())