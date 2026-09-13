#!/usr/bin/env python3
"""Keep the live preview in step with the content that a scan just ingested.

Why this exists: the preview is usually `astro dev`, a long-running process that
started before the ingestion happened. Its content cache (`.astro/data-store.json`)
is only re-synced when *it* notices a change, so pages written by a scheduled job
can 404 on the preview for hours even though the repo and `dist/` are correct.
This script detects that and restarts the server.

Settings come from wiki.config.yaml `preview:` (overridable per machine in the
gitignored wiki.config.local.yaml), so no host, port or path is hardcoded here.

Usage:
    python3 tooling/scripts/refresh-preview.py --check     # status only, no changes
    python3 tooling/scripts/refresh-preview.py             # restart only if stale
    python3 tooling/scripts/refresh-preview.py --force     # restart regardless
    python3 tooling/scripts/refresh-preview.py --dry-run

Exit codes: 0 = preview is fresh (or was refreshed), 1 = could not refresh.
"""
import os
import re
import shutil
import subprocess
import sys
import time
import urllib.error
import urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from wiki_config import get, load_config, path  # noqa: E402

CONTENT_GLOBS = ('articles', 'concepts', 'faqs')


def newest_content_mtime(cfg):
    """Newest mtime among the content that a scan would touch."""
    stamps = []
    for key in CONTENT_GLOBS:
        d = path(cfg, key)
        if not os.path.isdir(d):
            continue
        for name in os.listdir(d):
            if name.endswith('.md'):
                stamps.append(os.path.getmtime(os.path.join(d, name)))
    for extra in ('index.md', 'journal.md'):
        f = os.path.join(path(cfg, 'root'), extra)
        if os.path.exists(f):
            stamps.append(os.path.getmtime(f))
    return max(stamps) if stamps else 0.0


def cache_mtime(cfg):
    """When the running server last synced content: the content cache, or dist/."""
    root = path(cfg, 'root')
    mode = get(cfg, 'preview.mode', 'dev')
    candidate = (os.path.join(root, '.astro', 'data-store.json') if mode == 'dev'
                 else os.path.join(root, 'dist'))
    if not os.path.exists(candidate):
        return 0.0
    if os.path.isfile(candidate):
        return os.path.getmtime(candidate)
    newest = 0.0
    for base, _dirs, files in os.walk(candidate):
        for f in files:
            try:
                newest = max(newest, os.path.getmtime(os.path.join(base, f)))
            except OSError:
                pass
    return newest


def listener(port):
    """(pid, cmdline) of the process listening on port, or (None, '')."""
    try:
        out = subprocess.run(['ss', '-ltnp'], capture_output=True, text=True,
                             timeout=15).stdout
    except (OSError, subprocess.SubprocessError):
        return None, ''
    for line in out.splitlines():
        if f':{port} ' not in line and not re.search(rf':{port}\s', line):
            continue
        m = re.search(r'pid=(\d+)', line)
        if not m:
            continue
        pid = int(m.group(1))
        try:
            cmd = open(f'/proc/{pid}/cmdline', 'rb').read().replace(b'\0', b' ').decode()
        except OSError:
            cmd = ''
        return pid, cmd.strip()
    return None, ''


def server_command(cfg):
    """The command that starts the preview, built from config."""
    mode = get(cfg, 'preview.mode', 'dev')
    host = get(cfg, 'preview.host', '127.0.0.1')
    port = get(cfg, 'preview.port', 4321)
    sub = 'preview' if mode == 'preview' else 'dev'
    return [shutil.which('node') or 'node',
            os.path.join('node_modules', '.bin', 'astro'), sub,
            '--host', str(host), '--port', str(port)]


def is_our_server(cmd):
    return 'astro' in cmd and ('dev' in cmd or 'preview' in cmd)


def reachable(cfg, timeout=4):
    host = get(cfg, 'preview.host', '127.0.0.1')
    port = get(cfg, 'preview.port', 4321)
    base = (get(cfg, 'preview.base_path') or '').rstrip('/')
    url = f"http://{host}:{port}{base}/"
    try:
        with urllib.request.urlopen(url, timeout=timeout) as resp:
            return resp.status, url
    except urllib.error.HTTPError as exc:
        return exc.code, url
    except Exception:
        return 0, url


def main():
    argv = sys.argv[1:]
    check = '--check' in argv
    force = '--force' in argv
    dry = '--dry-run' in argv
    # --quiet: stay silent while the preview is fresh, so this can be scheduled as
    # a watchdog without pinging anyone. A restart, a refusal or a failure still
    # speaks (refusals/failures go to stderr and exit non-zero).
    quiet = '--quiet' in argv

    def say(*parts):
        if not quiet:
            print(*parts)

    cfg = load_config()
    root = path(cfg, 'root')
    port = get(cfg, 'preview.port', 4321)
    mode = get(cfg, 'preview.mode', 'dev')

    content = newest_content_mtime(cfg)
    cache = cache_mtime(cfg)
    stale = content > cache + 1
    pid, cmd = listener(port)
    status, url = reachable(cfg) if pid else (0, f"http://{get(cfg, 'preview.host')}:{port}/")

    fmt = lambda t: time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(t)) if t else 'n/a'
    say(f"preview   {url}  (mode={mode})")
    say(f"server    pid={pid or 'none'}  {' '.join(cmd.split()[:6]) or 'not listening'}")
    if pid:
        say(f"http      {status}")
    say(f"content   newest {fmt(content)}")
    say(f"synced    {fmt(cache)}   ({'content cache' if mode == 'dev' else 'dist'})")
    say(f"verdict   {'STALE - the preview does not have the newest content' if stale else 'fresh'}")

    if check:
        return 1 if (stale and pid) else 0
    if pid and not is_our_server(cmd):
        sys.exit(f"REFUSING to touch pid {pid} on port {port}: not an astro dev/preview "
                 f"process ({cmd[:80]!r})")

    if not stale and not force:
        say("no restart needed.")
        return 0

    log = str(get(cfg, 'preview.log') or os.path.join('/tmp', 'wiki-preview.log'))
    wait = int(get(cfg, 'preview.wait_seconds') or 45)
    say(f"{'[dry-run] ' if dry else ''}restarting: {pid or 'nothing to stop'}")
    if dry:
        return 0

    if pid:
        os.kill(pid, 15)
        for _ in range(20):
            if not listener(port)[0]:
                break
            time.sleep(0.5)
        else:
            sys.exit(f"pid {pid} did not stop; leaving the preview alone")
    launch = server_command(cfg)
    with open(log, 'a') as fh:
        fh.write(f"\n--- restart {time.strftime('%Y-%m-%d %H:%M:%S')} ---\n")
        subprocess.Popen(launch, cwd=root, stdout=fh, stderr=subprocess.STDOUT,
                         start_new_session=True)
    say(f"started: {' '.join(launch)}   (log: {log})")
    deadline = time.time() + wait
    while time.time() < deadline:
        time.sleep(2)
        status, url = reachable(cfg)
        if status == 200:
            say(f"OK - {url} answers 200 after {int(wait - (deadline - time.time()))}s")
            return 0
    sys.exit(f"preview did not answer 200 within {wait}s - check {log}")


if __name__ == '__main__':
    main()
