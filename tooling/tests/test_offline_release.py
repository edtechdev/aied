import hashlib
import json
import sys
import tempfile
import unittest
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(REPO / 'tooling' / 'scripts'))
import offline_release  # noqa: E402


def site():
    return {
        'repoUrl': 'https://github.com/edtechdev/aied',
        'offlineBaseUrl': 'https://github.com/edtechdev/aied/releases/download/offline-latest',
        'offlineReleaseTag': 'offline-latest',
        'i18n': {
            'defaultLocale': 'en',
            'locales': [
                {'code': 'en'}, {'code': 'es'}, {'code': 'fr'},
            ],
        },
    }


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def entry(filename: str, body: bytes = b'x'):
    locale, fmt = offline_release.parse_filename(filename, site())
    return {
        'locale': locale,
        'format': fmt,
        'filename': filename,
        'bytes': len(body),
        'sha256': digest(body),
        'source_commit': None,
        'built_at': None,
        'published_at': None,
        'verified_at': None,
        'asset_id': None,
        'build_id': None,
        'imported_from_commit': None,
        'provenance': 'test',
    }


class FilenameTests(unittest.TestCase):
    def test_default_and_locale_names(self):
        self.assertEqual(offline_release.parse_filename('aied.pdf', site()), ('en', 'pdf'))
        self.assertEqual(offline_release.parse_filename('aied.es.epub', site()), ('es', 'epub'))
        self.assertEqual(offline_release.parse_filename('llms.txt', site()), ('en', 'llms'))
        self.assertEqual(offline_release.parse_filename('llms.es-concepts.txt', site()), ('es', 'llmsConcepts'))
        self.assertEqual(offline_release.parse_filename('llms-full.txt', site()), ('en', 'llmsFull'))

    def test_rejects_unknown_or_unsafe_names(self):
        for name in ['aied-kdp.epub', 'aied.en.pdf', 'llms.de.txt', '../aied.pdf', 'cover.png']:
            with self.assertRaises(offline_release.CatalogError):
                offline_release.parse_filename(name, site())

    def test_url_construction(self):
        self.assertEqual(
            offline_release.asset_url(site(), 'aied.es.pdf'),
            'https://github.com/edtechdev/aied/releases/download/offline-latest/aied.es.pdf',
        )


class CatalogTests(unittest.TestCase):
    def test_valid_catalog_manifest(self):
        catalog = {
            'schema_version': 1,
            'managed_release_tag': 'offline-latest',
            'catalog_verified_at': None,
            'editions': [entry('aied.pdf', b'pdf'), entry('llms.es.txt', b'text')],
        }
        offline_release.validate_catalog(catalog, site())
        manifest = offline_release.manifest_from_catalog(catalog, site())
        self.assertEqual(manifest['en']['pdf']['bytes'], 3)
        self.assertEqual(manifest['es']['llms']['url'], 'https://github.com/edtechdev/aied/releases/download/offline-latest/llms.es.txt')

    def test_duplicate_and_mismatched_entries_fail(self):
        first = entry('aied.pdf', b'pdf')
        duplicate = dict(first)
        bad = dict(entry('aied.es.epub', b'epub'), format='pdf')
        for editions in ([first, duplicate], [bad]):
            catalog = {
                'schema_version': 1,
                'managed_release_tag': 'offline-latest',
                'catalog_verified_at': None,
                'editions': editions,
            }
            with self.assertRaises(offline_release.CatalogError):
                offline_release.validate_catalog(catalog, site())

    def test_bad_hash_and_zero_size_fail(self):
        bad_hash = dict(entry('aied.pdf', b'pdf'), sha256='0' * 63)
        zero = dict(entry('aied.pdf', b'pdf'), bytes=0)
        for candidate in (bad_hash, zero):
            catalog = {
                'schema_version': 1,
                'managed_release_tag': 'offline-latest',
                'catalog_verified_at': None,
                'editions': [candidate],
            }
            with self.assertRaises(offline_release.CatalogError):
                offline_release.validate_catalog(catalog, site())

    def test_inventory_parses_public_files(self):
        with tempfile.TemporaryDirectory() as td:
            public = Path(td)
            (public / 'aied.pdf').write_bytes(b'pdf')
            (public / 'llms.es.txt').write_bytes(b'text')
            (public / 'epub-cover.png').write_bytes(b'cover')
            catalog = offline_release.inventory_public(public, site(), 'abcdef0')
            names = [e['filename'] for e in catalog['editions']]
            self.assertEqual(names, ['aied.pdf', 'llms.es.txt'])
            self.assertTrue(all(e['imported_from_commit'] == 'abcdef0' for e in catalog['editions']))

    def test_write_catalog_atomic_shape(self):
        with tempfile.TemporaryDirectory() as td:
            target = Path(td) / 'editions.json'
            catalog = {
                'schema_version': 1,
                'managed_release_tag': 'offline-latest',
                'catalog_verified_at': None,
                'editions': [entry('aied.pdf', b'pdf')],
            }
            offline_release.write_catalog(catalog, target)
            self.assertEqual(json.loads(target.read_text())['editions'][0]['filename'], 'aied.pdf')


if __name__ == '__main__':
    unittest.main()


class PublisherTests(unittest.TestCase):
    def setUp(self):
        import importlib.util
        spec = importlib.util.spec_from_file_location(
            'publish_offline_editions',
            REPO / 'tooling' / 'scripts' / 'publish-offline-editions.py',
        )
        self.mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(self.mod)

    def test_selection_and_local_hash(self):
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            (root / 'aied.pdf').write_bytes(b'pdf')
            item = entry('aied.pdf', b'pdf')
            catalog = {'editions': [item]}
            self.assertEqual(self.mod.selected_entries(catalog, {'en'}, {'pdf'}), [item])
            self.assertEqual(self.mod.validate_local(item, root), root / 'aied.pdf')

    def test_local_hash_mismatch_and_traversal_rejected(self):
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            (root / 'aied.pdf').write_bytes(b'not the catalog bytes')
            item = entry('aied.pdf', b'pdf')
            with self.assertRaises(offline_release.CatalogError):
                self.mod.validate_local(item, root)
            with self.assertRaises(offline_release.CatalogError):
                self.mod.validate_local(dict(item, filename='../aied.pdf'), root)

    def test_refresh_metadata_accepts_rebuilt_asset(self):
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            (root / 'aied.pdf').write_bytes(b'new bytes')
            item = entry('aied.pdf', b'old bytes')
            path = self.mod.validate_local(item, root, refresh_metadata=True)
            self.assertEqual(path, root / 'aied.pdf')
            self.assertEqual(item['bytes'], len(b'new bytes'))
            self.assertEqual(item['sha256'], offline_release.sha256_file(path))
