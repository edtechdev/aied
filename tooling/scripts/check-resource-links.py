#!/usr/bin/env python3
"""Check that every resource page's `url` and `source_code` still resolves.

Resource pages point out of the knowledge base, at sites nobody here controls, so
they rot in a way articles never do: a project moves, a domain lapses, a demo is
retired. Each resource carries `last_verified`, the date a person last confirmed
the link; this script is what makes that date honest.

Usage:
    python3 tooling/scripts/check-resource-links.py            # report only
    python3 tooling/scripts/check-resource-links.py --update   # also bump
                                                              # last_verified when
                                                              # the link answered

Behaviour notes:
  * Network-bound, so it is NOT part of run-gates.py (a gate must be able to run
    offline in CI). Run it by hand or from a cron job.
  * A 403 or 405 still means the host is alive and serving that path under some
    other method, so it counts as reachable but is reported as "blocked" so nobody
    mistakes it for a content problem.
  * Redirects are followed; the final URL is printed only when it differs from the
    stored one, which is the signal that a page advertises an outdated address.

Exit code is 0 when every link is reachable, 1 when any is dead, so a cron run can
tell the difference without parsing output.
"""

import datetime as dt
import os
import re
import sys
import urllib.error
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import content_paths

RESOURCES = str(content_paths.collection('resources'))
TIMEOUT = 20
UA = 'Mozilla/5.0 (compatible; aied-resource-link-check/1.0)'


def frontmatter(path):
    text = open(path, encoding='utf-8').read()
    m = re.match(r'---\n(.*?)\n---\n', text, re.S)
    return m.group(1) if m else ''


def field(fm, name):
    m = re.search(rf'^{name}:\s*(.+)$', fm, re.M)
    return m.group(1).strip().strip('"\'') if m else None


def check(url):
    req = urllib.request.Request(url, headers={'User-Agent': UA}, method='GET')
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
            return resp.status, resp.geturl(), None
    except urllib.error.HTTPError as e:
        if e.code in (403, 405, 406, 429):
            return e.code, url, 'blocked (host alive, refuses automated checks)'
        return e.code, url, 'dead'
    except Exception as e:  # DNS failure, timeout, TLS problem, connection refused
        return 0, url, f'unreachable ({type(e).__name__})'


def main():
    update = '--update' in sys.argv
    if not os.path.isdir(RESOURCES):
        print(f'no {content_paths.rel(RESOURCES)} directory')
        return 0
    today = dt.date.today().isoformat()
    dead, blocked, stale = [], [], []
    for name in sorted(os.listdir(RESOURCES)):
        if not name.endswith('.md'):
            continue
        path = os.path.join(RESOURCES, name)
        fm = frontmatter(path)
        for key in ('url', 'source_code'):
            link = field(fm, key)
            if not link or not link.startswith('http'):
                continue
            status, final, note = check(link)
            label = f'{name[:-3]} ({key})'
            if note and note.startswith('dead'):
                dead.append(f'{label} -> HTTP {status} {link}')
            elif note:
                blocked.append(f'{label} -> HTTP {status} {link} [{note}]' )
            else:
                if final.rstrip('/') != link.rstrip('/'):
                    stale.append(f'{label} -> redirects to {final}')
                if update:
                    text = open(path, encoding='utf-8').read()
                    text = re.sub(r"^last_verified:.*$", f'last_verified: "{today}"',
                                  text, count=1, flags=re.M)
                    open(path, 'w', encoding='utf-8').write(text)
    for group, header in ((dead, 'DEAD'), (blocked, 'BLOCKED'), (stale, 'REDIRECTED')):
        if group:
            print(f'{header} ({len(group)}):')
            for line in group:
                print('  ' + line)
    if not (dead or blocked or stale):
        print(f'OK - every resource link answered ({len(os.listdir(RESOURCES))} pages checked)')
    if update and not dead:
        print(f'last_verified set to {today}')
    return 1 if dead else 0


if __name__ == '__main__':
    sys.exit(main())
