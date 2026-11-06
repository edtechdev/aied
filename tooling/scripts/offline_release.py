#!/usr/bin/env python3
"""Shared helpers for the tracked offline-edition catalog and release URLs.

The catalog is the single source of truth for the files advertised on the site.
It intentionally contains metadata only: a clean checkout does not need the
EPUB/PDF binaries to generate the Astro manifest. The release publisher verifies
the bytes in `public/` (or an isolated build directory) before it uploads them.
"""
from __future__ import annotations

import hashlib
import json
import os
import re
from pathlib import Path
from typing import Any

REPO = Path(__file__).resolve().parents[2]
DEFAULT_METADATA = REPO / 'tooling' / 'offline-editions.json'
MANAGED_TAG = 'offline-latest'
ALLOWED_REPOS = {'edtechdev/aied'}
FORMAT_ORDER = ('epub', 'pdf', 'llms', 'llmsConcepts', 'llmsFull')
SHA256_RE = re.compile(r'^[0-9a-f]{64}$')
TAG_RE = re.compile(r'^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$')
FILENAME_RE = re.compile(r'^[A-Za-z0-9][A-Za-z0-9._-]{0,199}$')


class CatalogError(ValueError):
    """The tracked catalog or an asset name is invalid."""


def load_site(path: Path | None = None) -> dict[str, Any]:
    with open(path or REPO / 'site.config.json', encoding='utf-8') as fh:
        return json.load(fh)


def default_locale(site: dict[str, Any]) -> str:
    return ((site.get('i18n') or {}).get('defaultLocale')
            or (site.get('content') or {}).get('defaultDir') or 'en')


def configured_locales(site: dict[str, Any]) -> list[str]:
    return [entry['code'] for entry in (site.get('i18n') or {}).get('locales', [])]


def release_base(site: dict[str, Any]) -> str:
    repo = str(site.get('repoUrl') or '').rstrip('/')
    tag = str(site.get('offlineReleaseTag') or '')
    if not repo or not tag:
        raise CatalogError('site.config.json needs repoUrl and offlineReleaseTag')
    return f'{repo}/releases/download/{tag}'


def asset_url(site: dict[str, Any], filename: str) -> str:
    validate_filename(filename)
    return f'{release_base(site)}/{filename}'


def validate_filename(filename: str) -> None:
    if not FILENAME_RE.fullmatch(filename or '') or filename in {'.', '..'}:
        raise CatalogError(f'invalid asset filename: {filename!r}')


def parse_filename(filename: str, site: dict[str, Any]) -> tuple[str, str]:
    """Return (locale, format) for a managed asset name, or raise CatalogError.

    Only explicitly supported patterns are accepted. This is deliberately not a
    generic extension parser: `aied-kdp.epub` and a cover PNG must never enter the
    release catalog by accident.
    """
    default = default_locale(site)
    locales = set(configured_locales(site))
    if filename == 'aied.epub':
        return default, 'epub'
    if filename == 'aied.pdf':
        return default, 'pdf'
    if filename == 'llms.txt':
        return default, 'llms'
    if filename == 'llms-concepts.txt':
        return default, 'llmsConcepts'
    if filename == 'llms-full.txt':
        return default, 'llmsFull'

    patterns = (
        ('epub', re.compile(r'^aied\.([a-z]{2,3})\.epub$')),
        ('pdf', re.compile(r'^aied\.([a-z]{2,3})\.pdf$')),
        ('llms', re.compile(r'^llms\.([a-z]{2,3})\.txt$')),
        ('llmsConcepts', re.compile(r'^llms\.([a-z]{2,3})-concepts\.txt$')),
        ('llmsFull', re.compile(r'^llms\.([a-z]{2,3})-full\.txt$')),
    )
    for fmt, pattern in patterns:
        match = pattern.fullmatch(filename)
        if match:
            locale = match.group(1)
            if locale not in locales:
                raise CatalogError(f'unknown locale {locale!r} in {filename!r}')
            if locale == default:
                raise CatalogError(f'default-locale file must not carry a locale infix: {filename!r}')
            return locale, fmt
    raise CatalogError(f'unrecognized offline asset filename: {filename!r}')


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with open(path, 'rb') as fh:
        for chunk in iter(lambda: fh.read(1024 * 1024), b''):
            digest.update(chunk)
    return digest.hexdigest()


def validate_catalog(catalog: dict[str, Any], site: dict[str, Any]) -> None:
    configured_base = str(site.get('offlineBaseUrl') or '').rstrip('/')
    expected_base = release_base(site)
    if configured_base != expected_base:
        raise CatalogError(
            f'offlineBaseUrl {configured_base!r} != derived release base {expected_base!r}'
        )
    if catalog.get('schema_version') != 1:
        raise CatalogError('offline catalog schema_version must be 1')
    tag = catalog.get('managed_release_tag')
    if tag != site.get('offlineReleaseTag') or tag != MANAGED_TAG:
        raise CatalogError(
            f'managed_release_tag {tag!r} does not match site.config.json/'
            f'{MANAGED_TAG!r}'
        )
    entries = catalog.get('editions')
    if not isinstance(entries, list) or not entries:
        raise CatalogError('offline catalog needs a non-empty editions list')
    seen: set[str] = set()
    pairs: set[tuple[str, str]] = set()
    for index, entry in enumerate(entries):
        if not isinstance(entry, dict):
            raise CatalogError(f'edition {index} is not an object')
        for field in ('locale', 'format', 'filename', 'bytes', 'sha256'):
            if field not in entry:
                raise CatalogError(f'edition {index} is missing {field}')
        filename = str(entry['filename'])
        validate_filename(filename)
        locale, fmt = parse_filename(filename, site)
        if entry['locale'] != locale or entry['format'] != fmt:
            raise CatalogError(
                f'{filename}: catalog says {entry["locale"]}/{entry["format"]}, '
                f'filename resolves to {locale}/{fmt}'
            )
        if filename in seen:
            raise CatalogError(f'duplicate asset filename: {filename}')
        if (locale, fmt) in pairs:
            raise CatalogError(f'duplicate locale/format pair: {locale}/{fmt}')
        seen.add(filename)
        pairs.add((locale, fmt))
        try:
            size = int(entry['bytes'])
        except (TypeError, ValueError):
            raise CatalogError(f'{filename}: bytes must be an integer')
        if size <= 0:
            raise CatalogError(f'{filename}: bytes must be positive')
        if not SHA256_RE.fullmatch(str(entry['sha256'])):
            raise CatalogError(f'{filename}: sha256 must be 64 lowercase hex characters')
        for field in ('source_commit', 'imported_from_commit'):
            value = entry.get(field)
            if value is not None and not re.fullmatch(r'[0-9a-f]{7,40}', str(value)):
                raise CatalogError(f'{filename}: {field} must be a git commit or null')
        for field in ('built_at', 'published_at', 'verified_at'):
            value = entry.get(field)
            if value is not None and not isinstance(value, str):
                raise CatalogError(f'{filename}: {field} must be a string or null')


def load_catalog(path: Path | None = None, site: dict[str, Any] | None = None) -> dict[str, Any]:
    path = path or DEFAULT_METADATA
    with open(path, encoding='utf-8') as fh:
        catalog = json.load(fh)
    validate_catalog(catalog, site or load_site())
    return catalog


def manifest_from_catalog(catalog: dict[str, Any], site: dict[str, Any]) -> dict[str, dict[str, Any]]:
    """The runtime shape consumed by src/data/offlineArtifacts.ts."""
    manifest: dict[str, dict[str, Any]] = {}
    for entry in catalog['editions']:
        locale = entry['locale']
        manifest.setdefault(locale, {})[entry['format']] = {
            'url': asset_url(site, entry['filename']),
            'bytes': int(entry['bytes']),
        }
    return manifest


def inventory_public(public_dir: Path, site: dict[str, Any], source_commit: str) -> dict[str, Any]:
    """Build a catalog from the legacy public/ files without inventing provenance."""
    entries = []
    for path in sorted(public_dir.iterdir()):
        if not path.is_file():
            continue
        try:
            locale, fmt = parse_filename(path.name, site)
        except CatalogError:
            continue
        entries.append({
            'locale': locale,
            'format': fmt,
            'filename': path.name,
            'bytes': path.stat().st_size,
            'sha256': sha256_file(path),
            'source_commit': None,
            'built_at': None,
            'published_at': None,
            'verified_at': None,
            'asset_id': None,
            'build_id': None,
            'imported_from_commit': source_commit,
            'provenance': (
                'Imported from public/ during the release migration; the original '
                'build source commit and build time were not recorded.'
            ),
        })
    if not entries:
        raise CatalogError(f'no managed offline assets found in {public_dir}')
    locales = {code: i for i, code in enumerate(configured_locales(site))}
    entries.sort(key=lambda e: (locales.get(e['locale'], 999), FORMAT_ORDER.index(e['format'])))
    return {
        'schema_version': 1,
        'managed_release_tag': site.get('offlineReleaseTag', MANAGED_TAG),
        'catalog_verified_at': None,
        'editions': entries,
    }


def write_catalog(catalog: dict[str, Any], path: Path | None = None) -> None:
    path = path or DEFAULT_METADATA
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(path.suffix + '.tmp')
    tmp.write_text(json.dumps(catalog, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
    os.replace(tmp, path)
