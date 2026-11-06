#!/usr/bin/env python3
"""Stage, verify, and promote offline exports on the managed GitHub Release.

Safe default: `--dry-run` is the default; nothing is sent to GitHub and no local
file is changed. `--publish` is the explicit mutation mode and requires a
scoped `gh` authentication. The publisher is intentionally single-writer: run a
queued update only after the previous one has finished.

The publisher never uses `gh release upload --clobber` for a live asset. It
uploads a uniquely named staging asset, verifies its bytes and SHA-256, renames
the old canonical asset to a run-scoped backup, then renames the staged asset to
the canonical name. The backup is kept for recovery and never wildcard-deleted.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import shutil
import subprocess
import sys
import tempfile
import time
import urllib.request
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(REPO / 'tooling' / 'scripts'))
import offline_release  # noqa: E402


def run_gh(args, *, check=True, binary=False):
    cmd = ['gh', *args]
    result = subprocess.run(cmd, capture_output=True, text=not binary)
    if check and result.returncode != 0:
        detail = result.stderr if isinstance(result.stderr, str) else result.stderr.decode('utf-8', 'replace')
        raise RuntimeError(f'gh command failed ({result.returncode}): {" ".join(cmd)}\n{detail.strip()}')
    return result


def gh_json(args):
    result = run_gh(args)
    return json.loads(result.stdout or '{}')


def release(repo, tag):
    try:
        return gh_json(['api', f'repos/{repo}/releases/tags/{tag}'])
    except RuntimeError as exc:
        detail = str(exc)
        if 'HTTP 404' not in detail and 'Not Found' not in detail:
            raise
    # A draft release is not returned by the by-tag endpoint; list releases and
    # match the tag so staging can resume safely after a partial run.
    releases = gh_json(['api', f'repos/{repo}/releases?per_page=100'])
    for item in releases if isinstance(releases, list) else []:
        if item.get('tag_name') == tag:
            return item
    return None


def assets(repo, tag):
    data = release(repo, tag)
    if not data:
        return []
    # The release object can truncate its assets array; list the release asset
    # endpoint explicitly and paginate so staging and backup IDs remain visible
    # after a run has added dozens of files.
    out = []
    page = 1
    while True:
        batch = gh_json(['api',
                         f'repos/{repo}/releases/{data["id"]}/assets?per_page=100&page={page}'])
        if not batch:
            break
        out.extend(batch)
        if len(batch) < 100:
            break
        page += 1
    return out


def asset_id(repo, tag, name):
    for item in assets(repo, tag):
        if item.get('name') == name:
            return int(item['id'])
    return None


def asset_name(repo, tag, asset_id):
    for item in assets(repo, tag):
        if int(item.get('id', -1)) == int(asset_id):
            return item.get('name')
    raise RuntimeError(f'asset {asset_id} is not visible on {repo} tag {tag}')


def rename_asset(repo, asset_id, name):
    return gh_json(['api', '-X', 'PATCH', f'repos/{repo}/releases/assets/{asset_id}',
                    '-f', f'name={name}'])


def delete_asset(repo, asset_id):
    run_gh(['api', '-X', 'DELETE', f'repos/{repo}/releases/assets/{asset_id}'])


def upload_staged(repo, tag, source: Path, staging_name: str):
    with tempfile.TemporaryDirectory() as td:
        staged = Path(td) / staging_name
        shutil.copyfile(source, staged)
        run_gh(['release', 'upload', tag, str(staged), '--repo', repo])
    new_id = asset_id(repo, tag, staging_name)
    if new_id is None:
        raise RuntimeError(f'staged asset not visible after upload: {staging_name}')
    return new_id


def verify_asset(repo, tag, asset_id, expected_sha, expected_bytes):
    name = asset_name(repo, tag, asset_id)
    with tempfile.TemporaryDirectory() as td:
        run_gh(['release', 'download', tag, '--repo', repo,
                '--pattern', name, '--dir', td])
        path = Path(td) / name
        if not path.is_file():
            raise RuntimeError(f'downloaded asset not found: {name}')
        data = path.read_bytes()
    if len(data) != expected_bytes:
        raise RuntimeError(f'asset {asset_id} ({name}): bytes {len(data)} != {expected_bytes}')
    if hashlib.sha256(data).hexdigest() != expected_sha:
        raise RuntimeError(f'asset {asset_id} ({name}): sha256 mismatch')
    return data


def verify_public(url, expected_sha, expected_bytes):
    request = urllib.request.Request(url, headers={'User-Agent': 'aied-offline-publisher/1'})
    with urllib.request.urlopen(request, timeout=90) as response:
        data = response.read()
    if len(data) != expected_bytes:
        raise RuntimeError(f'{url}: bytes {len(data)} != {expected_bytes}')
    if hashlib.sha256(data).hexdigest() != expected_sha:
        raise RuntimeError(f'{url}: sha256 mismatch')
    return data


def selected_entries(catalog, locales, formats):
    entries = catalog['editions']
    if locales:
        entries = [e for e in entries if e['locale'] in locales]
    if formats:
        entries = [e for e in entries if e['format'] in formats]
    if not entries:
        raise offline_release.CatalogError('selection is empty')
    return entries


def validate_local(entry, assets_dir: Path):
    path = (assets_dir / entry['filename']).resolve()
    if assets_dir.resolve() not in path.parents:
        raise offline_release.CatalogError(f'asset escapes assets-dir: {entry["filename"]}')
    if not path.is_file() or path.is_symlink():
        raise offline_release.CatalogError(f'missing regular asset: {path}')
    size = path.stat().st_size
    if size != int(entry['bytes']):
        raise offline_release.CatalogError(
            f'{path}: bytes {size} != catalog {entry["bytes"]}')
    digest = offline_release.sha256_file(path)
    if digest != entry['sha256']:
        raise offline_release.CatalogError(f'{path}: sha256 does not match catalog')
    return path


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--metadata', type=Path, default=offline_release.DEFAULT_METADATA)
    parser.add_argument('--assets-dir', type=Path, default=REPO / 'public')
    parser.add_argument('--repo', default='edtechdev/aied')
    parser.add_argument('--tag', default=offline_release.MANAGED_TAG)
    parser.add_argument('--locales', default='',
                        help='comma-separated locale codes (default: all catalog entries)')
    parser.add_argument('--formats', default='',
                        help='comma-separated formats (default: all)')
    parser.add_argument('--publish', action='store_true',
                        help='perform the release mutation; without this it is a dry run')
    parser.add_argument('--dry-run', action='store_true',
                        help='explicitly select the safe no-mutation mode (the default)')
    parser.add_argument('--title', default='Latest offline editions')
    parser.add_argument('--journal', type=Path,
                        default=REPO / '.artifacts' / 'offline' / 'publish-journal.json')
    args = parser.parse_args()

    site = offline_release.load_site()
    catalog = offline_release.load_catalog(args.metadata, site)
    if args.repo not in offline_release.ALLOWED_REPOS:
        raise SystemExit(f'repository is not allowlisted: {args.repo}')
    if args.tag != site.get('offlineReleaseTag') or args.tag != catalog['managed_release_tag']:
        raise SystemExit('tag does not match site.config.json and the catalog')

    locales = {x.strip() for x in args.locales.split(',') if x.strip()}
    formats = {x.strip() for x in args.formats.split(',') if x.strip()}
    entries = selected_entries(catalog, locales, formats)
    for entry in entries:
        path = validate_local(entry, args.assets_dir.resolve())
        print(f'checked {entry["filename"]} ({path.stat().st_size} bytes, {entry["sha256"][:12]}...)')

    if not args.publish:
        print(f'DRY RUN - {len(entries)} asset(s) ready for {args.repo} tag {args.tag}')
        print('No release, asset, catalog, or tracked file was changed.')
        return 0

    run_id = time.strftime('%Y%m%dT%H%M%SZ', time.gmtime()) + f'-{os.getpid()}'
    journal = {
        'run_id': run_id,
        'repo': args.repo,
        'tag': args.tag,
        'started_at': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()),
        'steps': [],
        'assets': {},
        'status': 'running',
    }

    def record(step, **data):
        journal['steps'].append({'at': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()),
                                 'step': step, **data})

    def save_journal():
        args.journal.parent.mkdir(parents=True, exist_ok=True)
        args.journal.write_text(json.dumps(journal, indent=2) + '\n', encoding='utf-8')

    try:
        current = release(args.repo, args.tag)
        if current is not None and current.get('immutable'):
            raise RuntimeError('managed release is immutable; stop rather than weakening protection')
        if current is None:
            notes = args.journal.parent / f'release-notes-{run_id}.md'
            notes.parent.mkdir(parents=True, exist_ok=True)
            notes.write_text(
                f'# {args.title}\n\n'
                'Stable offline exports for the AI in Education knowledge base.\n'
                'Assets are updated independently of the automatically generated source ZIP/TAR links.\n',
                encoding='utf-8',
            )
            run_gh(['release', 'create', args.tag, '--repo', args.repo, '--draft',
                    '--title', args.title, '--notes-file', str(notes)])
            record('created_draft_release')
            current = release(args.repo, args.tag)
            if current is None:
                raise RuntimeError('draft release was not visible after creation')

        for entry in entries:
            filename = entry['filename']
            source = validate_local(entry, args.assets_dir.resolve())
            old_id = asset_id(args.repo, args.tag, filename)
            staging_name = f'{filename}.staging-{run_id}'
            staged_id = upload_staged(args.repo, args.tag, source, staging_name)
            verify_asset(args.repo, args.tag, staged_id, entry['sha256'], int(entry['bytes']))
            record('staged', filename=filename, asset_id=staged_id, staging_name=staging_name)
            backup_id = None
            if old_id is not None:
                backup_name = f'{filename}.backup-{run_id}'
                rename_asset(args.repo, old_id, backup_name)
                backup_id = old_id
                record('backed_up', filename=filename, backup_id=backup_id, backup_name=backup_name)
            try:
                rename_asset(args.repo, staged_id, filename)
                verify_asset(args.repo, args.tag, staged_id, entry['sha256'], int(entry['bytes']))
            except Exception:
                if backup_id is not None:
                    try:
                        rename_asset(args.repo, backup_id, filename)
                    except Exception as restore_exc:  # pragma: no cover - live recovery
                        record('restore_failed', filename=filename, error=str(restore_exc))
                raise
            entry['asset_id'] = staged_id
            entry['build_id'] = run_id
            entry['published_at'] = time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())
            entry['verified_at'] = entry['published_at']
            journal['assets'][filename] = {
                'asset_id': staged_id,
                'backup_asset_id': backup_id,
                'sha256': entry['sha256'],
                'bytes': entry['bytes'],
            }
            record('promoted', filename=filename, asset_id=staged_id)

        catalog['catalog_verified_at'] = time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())
        catalog_tmp = args.journal.parent / 'offline-editions.json'
        catalog_tmp.parent.mkdir(parents=True, exist_ok=True)
        catalog_tmp.write_text(json.dumps(catalog, indent=2, ensure_ascii=False) + '\n',
                               encoding='utf-8')
        old_catalog_id = asset_id(args.repo, args.tag, 'offline-editions.json')
        staged_catalog = upload_staged(args.repo, args.tag, catalog_tmp,
                                       f'offline-editions.json.staging-{run_id}')
        verify_asset(args.repo, args.tag, staged_catalog,
                     offline_release.sha256_file(catalog_tmp), catalog_tmp.stat().st_size)
        if old_catalog_id is not None:
            rename_asset(args.repo, old_catalog_id, f'offline-editions.json.backup-{run_id}')
        rename_asset(args.repo, staged_catalog, 'offline-editions.json')
        record('catalog_promoted', asset_id=staged_catalog)

        # A draft release is the staging container. Publish only after every
        # selected asset and the catalog have verified.
        run_gh(['release', 'edit', args.tag, '--repo', args.repo, '--draft=false'])
        record('release_published')

        for entry in entries:
            verify_public(offline_release.asset_url(site, entry['filename']),
                          entry['sha256'], int(entry['bytes']))
            record('public_verified', filename=entry['filename'])

        offline_release.write_catalog(catalog, args.metadata)
        subprocess.run(
            [sys.executable, str(REPO / 'tooling' / 'scripts' / 'gen-offline-manifest.py')],
            check=True, cwd=REPO,
        )
        journal['status'] = 'success'
        save_journal()
        print(f'published and verified {len(entries)} asset(s) on {args.repo} tag {args.tag}')
        print(f'journal: {args.journal}')
        return 0
    except Exception as exc:
        journal['status'] = 'failed'
        journal['error'] = str(exc)
        save_journal()
        print(f'FAIL - {exc}', file=sys.stderr)
        print(f'journal: {args.journal}', file=sys.stderr)
        return 1


if __name__ == '__main__':
    sys.exit(main())
