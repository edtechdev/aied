#!/usr/bin/env python3
"""Ensure the agent's installed skill tree still mirrors this repo.

The wiki ships `skills/research/<name>/` as the authoritative, redacted copy of
the skills the agent runs. The installed tree those mirrors point at can be
emptied by an agent-side curator or hub sync, and the loss is silent: the skill
index still lists the names at session start, `skill_view` then fails because the
file is gone, and nothing in the build notices, because no page depends on a
skill. That happened on 2026-10-31 with 24 of 25 skills.

This script is the guard, and it distinguishes the two kinds of finding on
purpose:

* `MISS` means the repo has content the installed tree does not. That is the
  purge signature, and it is safe to repair automatically: the repo copy is
  authoritative, and restoring only overwrites files that are already absent in
  part.
* `NEW DRIFT` means both sides exist but differ, or the installed tree carries
  content the repo never mirrored. That is an editorial decision, never a
  sync: `sync-skills.py --to-repo/--to-installed` normalizes paths and agent
  names, so writing normalized text back silently rewrites real tool names into
  placeholders. So a drift finding is reported and left alone.
* `NOT MIRRORED` means an installed research skill has no repo counterpart: the
  published toolset is incomplete. Also a decision (publish or not), so it is
  reported, never auto-written.
* `NOT PORTABLE` means a machine-specific value — a home path, an absolute
  interpreter, an email — reached the published mirror. Reported, never rewritten.

Exit codes: 0 = intact, 3 = restored a purge, 1 = drift or a failed restore.
Output is meant to be read by a cron job, so a clean run says one line.
"""
import os
import subprocess
import sys

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SYNC = os.path.join(WIKI, 'tooling', 'scripts', 'sync-skills.py')


def run(*args):
    return subprocess.run([sys.executable, SYNC, *args], cwd=WIKI,
                          capture_output=True, text=True)


def findings(out):
    miss, drift, unmirrored, notportable = [], [], [], []
    for line in out.splitlines():
        s = line.strip()
        if s.startswith('MISS'):
            miss.append(s)
        elif s.startswith('NEW DRIFT'):
            drift.append(s)
        elif s.startswith('NOT MIRRORED'):
            unmirrored.append(s)
        elif s.startswith('NOT PORTABLE'):
            notportable.append(s)
    return miss, drift, unmirrored, notportable


def main():
    if not os.path.isfile(SYNC):
        print(f'FAIL: {SYNC} is missing; cannot check the skills mirror.')
        return 1

    first = run('--check')
    if first.returncode == 0:
        print('OK: the installed skill tree matches the repo mirrors.')
        return 0

    miss, drift, unmirrored, notportable = findings(first.stdout)
    if first.stderr.strip() and not (miss or drift or unmirrored or notportable):
        print('FAIL: the mirror check could not run.')
        print(first.stderr.strip()[:2000])
        return 1

    if unmirrored:
        print(f'{len(unmirrored)} installed skill(s) have no repo counterpart, so this repo '
              f'publishes an incomplete toolset. Publishing is an editorial decision: '
              f'run sync-skills.py --to-repo <name> and review the redaction.')
        for line in unmirrored[:40]:
            print(f'  {line}')

    if notportable:
        print(f'{len(notportable)} machine-specific string(s) reached the published mirror. '
              f'Replace each with a wiki.config.yaml placeholder (<WIKI>, <AGENT>, <PYTHON>, '
              f'<DOCUMENT_CACHE>) or load the value at run time.')
        for line in notportable[:40]:
            print(f'  {line}')

    if drift:
        print(f'The skills mirror has {len(drift)} content difference(s) that a '
              f'sync must not paper over. Nothing was written.')
        for line in drift[:40]:
            print(f'  {line}')
        if len(drift) > 40:
            print(f'  ... {len(drift) - 40} more')

    if not miss:
        return 1 if (drift or unmirrored or notportable) else 0

    print(f'The installed skill tree is missing {len(miss)} mirror(s). Restoring from the repo.')
    for line in miss[:40]:
        print(f'  {line}')
    if len(miss) > 40:
        print(f'  ... {len(miss) - 40} more')

    labels = [ln.split()[1] for ln in miss if len(ln.split()) > 1]
    restore = run('--to-installed', *labels)
    if restore.returncode != 0:
        print('FAIL: the restore did not complete; the skill tree needs a human.')
        print((restore.stderr or restore.stdout or '').strip()[-2000:])
        return 1

    second = run('--check')
    miss2, drift2, unmirrored2, notportable2 = findings(second.stdout)
    if miss2:
        print(f'FAIL: {len(miss2)} mirror(s) still missing after the restore.')
        for line in miss2[:20]:
            print(f'  {line}')
        return 1
    print('RESTORED: mirrors rewritten from the repo; no mirrors are missing now.')
    return 3 if not (drift2 or unmirrored2 or notportable2) else 1


if __name__ == '__main__':
    sys.exit(main())
