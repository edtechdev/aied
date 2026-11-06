from __future__ import annotations

import argparse
import importlib.util
import json
import os
import stat
import sys
import tempfile
import unittest
from pathlib import Path
from unittest import mock

ROOT = Path(__file__).resolve().parents[2]
SCRIPT = ROOT / "tooling" / "scripts" / "report-build-size.py"
spec = importlib.util.spec_from_file_location("report_build_size", SCRIPT)
assert spec and spec.loader
report_build_size = importlib.util.module_from_spec(spec)
sys.modules[spec.name] = report_build_size
spec.loader.exec_module(report_build_size)


def write_file(path: Path, data: bytes) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(data)


def make_site(root: Path, extra: dict[str, bytes] | None = None) -> Path:
    dist = root / "dist"
    base = {
        "index.html": b"<html><body><p>home</p></body></html>",
        "pagefind/pagefind-entry.json": b"{}",
        "manifest.webmanifest": b"{}",
        "sw.js": b"// sw",
    }
    if extra:
        base.update(extra)
    for rel, data in base.items():
        write_file(dist / rel, data)
    return dist


def make_config(root: Path, warning: int = 600_000_000, blocking: int = 750_000_000) -> Path:
    path = root / "budget.json"
    path.write_text(
        json.dumps(
            {
                "schema_version": 1,
                "published": {
                    "warning_bytes": warning,
                    "blocking_bytes": blocking,
                    "allow_editions": [],
                },
                "diagnostics": {},
                "enforcement": {"active": False, "reason": "test"},
            }
        ),
        encoding="utf-8",
    )
    return path


def make_site_config(root: Path) -> Path:
    path = root / "site.config.json"
    path.write_text(
        json.dumps(
            {
                "i18n": {
                    "defaultLocale": "en",
                    "locales": [{"code": "en"}, {"code": "es"}, {"code": "sw"}],
                }
            }
        ),
        encoding="utf-8",
    )
    return path


def make_args(root: Path, dist: Path, config: Path, site_config: Path, mode: str = "report") -> argparse.Namespace:
    return argparse.Namespace(
        dist=str(dist),
        config=str(config),
        site_config=str(site_config),
        out=str(root / "reports"),
        baseline=str(root / "baseline.json"),
        mode=mode,
        commit="test-commit",
        run_id=None,
        write_baseline=None,
    )


class ReportBuildSizeTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        self.config = make_config(self.root)
        self.site_config = make_site_config(self.root)

    def tearDown(self) -> None:
        self.temp.cleanup()

    def test_locale_and_category_reconcile(self) -> None:
        dist = make_site(
            self.root,
            {
                "es/articles/post/index.html": b"<html><body>es</body></html>",
                "sw.js": b"// shared sw",
                "_astro/app.css": b"body{}",
                "titles/es.json": b"{}",
                "llms.es-concepts.txt": b"es export",
                "unknown/file.bin": b"unknown",
            },
        )
        result, records, code = report_build_size.build_report(
            make_args(self.root, dist, self.config, self.site_config)
        )
        self.assertEqual(code, 0)
        self.assertEqual(result["published_bytes"], sum(r.bytes for r in records))
        self.assertEqual(
            sum(row["bytes"] for row in result["locales"].values()),
            result["published_bytes"],
        )
        self.assertEqual(
            sum(row["bytes"] for row in result["categories"].values()),
            result["published_bytes"],
        )
        self.assertEqual(result["locales"]["es"]["bytes"], len(b"<html><body>es</body></html>") + len(b"{}") + len(b"es export"))
        self.assertEqual(result["locales"]["shared"]["bytes"], len(b"// shared sw") + len(b"body{}") + len(b"{}") + len(b"{}"))
        self.assertEqual(result["locales"]["unattributed"]["bytes"], len(b"unknown"))
        self.assertEqual(result["categories"]["CSS"]["bytes"], len(b"body{}"))

    def test_hidden_files_are_excluded_not_published(self) -> None:
        dist = make_site(self.root, {".well-known/security.txt": b"contact"})
        result, _, _ = report_build_size.build_report(
            make_args(self.root, dist, self.config, self.site_config)
        )
        self.assertEqual(result["excluded"]["count"], 1)
        published, _, _, _ = report_build_size.walk_dist(
            dist, {"en", "es", "sw"}, "en", set()
        )
        self.assertEqual(result["published_bytes"], sum(r.bytes for r in published))

    def test_required_output_missing_fails(self) -> None:
        dist = make_site(self.root, {"sw.js": b""})
        (dist / "sw.js").unlink()
        result, _, code = report_build_size.build_report(
            make_args(self.root, dist, self.config, self.site_config)
        )
        self.assertEqual(code, 2)
        self.assertTrue(any("sw.js" in failure for failure in result["failures"]))

    def test_symlink_fails(self) -> None:
        dist = make_site(self.root)
        os.symlink(dist / "index.html", dist / "linked.html")
        result, _, code = report_build_size.build_report(
            make_args(self.root, dist, self.config, self.site_config)
        )
        self.assertEqual(code, 2)
        self.assertTrue(any("symbolic link" in failure for failure in result["failures"]))

    def test_hardlink_fails(self) -> None:
        dist = make_site(self.root)
        os.link(dist / "index.html", dist / "hard.html")
        result, _, code = report_build_size.build_report(
            make_args(self.root, dist, self.config, self.site_config)
        )
        self.assertEqual(code, 2)
        self.assertTrue(any("hard-linked" in failure for failure in result["failures"]))

    def test_special_file_fails(self) -> None:
        dist = make_site(self.root)
        os.mkfifo(dist / "pipe")
        result, _, code = report_build_size.build_report(
            make_args(self.root, dist, self.config, self.site_config)
        )
        self.assertEqual(code, 2)
        self.assertTrue(any("special file" in failure for failure in result["failures"]))

    def test_unreadable_file_fails_or_skips_as_root(self) -> None:
        dist = make_site(self.root, {"private.txt": b"secret"})
        path = dist / "private.txt"
        path.chmod(0)
        try:
            if os.access(path, os.R_OK):
                self.skipTest("running as a user that can read mode-000 files")
            result, _, code = report_build_size.build_report(
                make_args(self.root, dist, self.config, self.site_config)
            )
            self.assertEqual(code, 2)
            self.assertTrue(any("not readable" in failure for failure in result["failures"]))
        finally:
            path.chmod(stat.S_IRUSR | stat.S_IWUSR)

    def test_forbidden_pdf_and_epub_fail(self) -> None:
        dist = make_site(self.root, {"aied.pdf": b"%PDF", "es/aied.epub": b"epub"})
        result, _, code = report_build_size.build_report(
            make_args(self.root, dist, self.config, self.site_config)
        )
        self.assertEqual(code, 2)
        self.assertTrue(any("aied.pdf" in failure for failure in result["failures"]))
        self.assertTrue(any("aied.epub" in failure for failure in result["failures"]))

    def test_empty_output_fails(self) -> None:
        dist = self.root / "empty-dist"
        dist.mkdir()
        result, _, code = report_build_size.build_report(
            make_args(self.root, dist, self.config, self.site_config)
        )
        self.assertEqual(code, 2)
        self.assertTrue(any("no published" in failure or "required output" in failure for failure in result["failures"]))

    def test_budget_warning_and_boundaries(self) -> None:
        dist = make_site(self.root, {"extra.bin": b"1234567890"})
        warning_config = make_config(self.root, warning=50, blocking=100)
        result, _, code = report_build_size.build_report(
            make_args(self.root, dist, warning_config, self.site_config)
        )
        self.assertEqual(code, 0)
        self.assertEqual(result["budget"]["size_status"], "warn")
        self.assertEqual(result["gate_result"], "warn")
        blocking_config = make_config(self.root, warning=1, blocking=2)
        result, _, code = report_build_size.build_report(
            make_args(self.root, dist, blocking_config, self.site_config, mode="enforce")
        )
        self.assertEqual(code, 1)
        self.assertEqual(result["gate_result"], "blocked")

    def test_baseline_delta_and_incompatible_baseline(self) -> None:
        dist = make_site(self.root)
        result, _, _ = report_build_size.build_report(
            make_args(self.root, dist, self.config, self.site_config)
        )
        baseline = {
            "schema_version": 1,
            "source_commit": "old",
            "published_bytes": result["published_bytes"] - 10,
            "locales": {},
            "categories": {},
            "top_files": {},
        }
        (self.root / "baseline.json").write_text(json.dumps(baseline), encoding="utf-8")
        result, _, _ = report_build_size.build_report(
            make_args(self.root, dist, self.config, self.site_config)
        )
        self.assertTrue(result["baseline"]["available"])
        self.assertEqual(result["baseline"]["delta_bytes"], 10)
        baseline["schema_version"] = 99
        (self.root / "baseline.json").write_text(json.dumps(baseline), encoding="utf-8")
        result, _, _ = report_build_size.build_report(
            make_args(self.root, dist, self.config, self.site_config)
        )
        self.assertFalse(result["baseline"]["available"])

    def test_html_regions_are_exact_and_nested_footer_is_not_double_counted(self) -> None:
        html = (
            '<html><body><header data-build-region="header"><h1>é</h1></header>'
            "<main>body</main>"
            '<footer data-build-region="footer"><footer>nested</footer></footer>'
            "</body></html>"
        ).encode("utf-8")
        regions = report_build_size.find_regions(html, "index.html")
        top = [region for region in regions if not region.nested]
        self.assertEqual({region.name for region in top}, {"header", "footer"})
        header_bytes = len('<header data-build-region="header"><h1>é</h1></header>'.encode("utf-8"))
        footer_bytes = len('<footer data-build-region="footer"><footer>nested</footer></footer>'.encode("utf-8"))
        self.assertEqual(sum(region.bytes for region in top), header_bytes + footer_bytes)
        self.assertEqual(len([region for region in regions if region.name == "footer"]), 1)

    def test_repeated_regions_are_grouped(self) -> None:
        header = b'<header data-build-region="header"><h1>same</h1></header>'
        dist = make_site(
            self.root,
            {
                "articles/a/index.html": b"<html><body>" + header + b"<main>a</main></body></html>",
                "articles/b/index.html": b"<html><body>" + header + b"<main>b</main></body></html>",
            },
        )
        result, _, _ = report_build_size.build_report(
            make_args(self.root, dist, self.config, self.site_config)
        )
        groups = [g for g in result["html"]["regions"] if g["region"] == "header"]
        self.assertEqual(len(groups), 1)
        self.assertEqual(groups[0]["occurrences"], 2)
        self.assertEqual(groups[0]["repeated_bytes"], len(header))

    def test_malformed_region_is_a_warning_not_a_crash(self) -> None:
        dist = make_site(
            self.root,
            {"articles/a/index.html": b'<html><body><header data-build-region="header">bad</body></html>'},
        )
        result, _, code = report_build_size.build_report(
            make_args(self.root, dist, self.config, self.site_config)
        )
        self.assertEqual(code, 0)
        self.assertTrue(any("no closing" in warning for warning in result["warnings"]))

    def test_summary_and_manifest_written_before_failing_gate(self) -> None:
        dist = make_site(self.root, {"big.bin": b"x" * 100})
        config = make_config(self.root, warning=1, blocking=2)
        args = make_args(self.root, dist, config, self.site_config, mode="enforce")
        with mock.patch("sys.stderr"):
            code = report_build_size.main(
                [
                    "--dist",
                    args.dist,
                    "--config",
                    args.config,
                    "--site-config",
                    args.site_config,
                    "--out",
                    args.out,
                    "--baseline",
                    args.baseline,
                    "--mode",
                    "enforce",
                    "--commit",
                    "test-commit",
                ]
            )
        self.assertEqual(code, 1)
        self.assertTrue((Path(args.out) / "report.json").is_file())
        self.assertTrue((Path(args.out) / "summary.md").is_file())
        self.assertTrue((Path(args.out) / "files.json").is_file())
        self.assertIn("Build size report", (Path(args.out) / "summary.md").read_text(encoding="utf-8"))

    def test_report_output_inside_dist_is_rejected(self) -> None:
        dist = make_site(self.root)
        args = make_args(self.root, dist, self.config, self.site_config)
        args.out = str(dist / "reports")
        with self.assertRaises(report_build_size.ReportError):
            report_build_size.build_report(args)


if __name__ == "__main__":
    unittest.main()
