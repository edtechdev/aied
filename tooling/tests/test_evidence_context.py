from __future__ import annotations

import importlib.util
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "tooling" / "scripts"))

SCRIPT = ROOT / "tooling" / "scripts" / "check-evidence-context.py"
spec = importlib.util.spec_from_file_location("check_evidence_context", SCRIPT)
assert spec and spec.loader
check_evidence_context = importlib.util.module_from_spec(spec)
sys.modules[spec.name] = check_evidence_context
spec.loader.exec_module(check_evidence_context)


class EvidenceContextGateTests(unittest.TestCase):
    def test_new_article_without_context_fails(self):
        errors, status = check_evidence_context.article_errors(
            {"created": "2026-11-08T09:00:00-05:00"},
            "content/en/articles/new.md",
            "2026-11-08",
        )
        self.assertEqual(status, "required")
        self.assertEqual(len(errors), 1)
        self.assertIn("no evidence_context", errors[0])

    def test_new_article_with_each_valid_context_passes(self):
        for value in ("educational", "non_educational", "mixed"):
            with self.subTest(value=value):
                errors, status = check_evidence_context.article_errors(
                    {"created": "2026-11-08", "evidence_context": value},
                    "content/en/articles/new.md",
                    "2026-11-08",
                )
                self.assertEqual(errors, [])
                self.assertEqual(status, "required")

    def test_legacy_article_without_context_is_unclassified_not_educational(self):
        errors, status = check_evidence_context.article_errors(
            {"created": "2026-11-07T23:59:59-05:00"},
            "content/en/articles/legacy.md",
            "2026-11-08",
        )
        self.assertEqual(errors, [])
        self.assertEqual(status, "legacy")

    def test_unknown_value_fails_even_on_a_legacy_page(self):
        errors, _ = check_evidence_context.article_errors(
            {"created": "2026-01-01", "evidence_context": "classroom"},
            "content/en/articles/legacy.md",
            "2026-11-08",
        )
        self.assertEqual(len(errors), 1)
        self.assertIn("not one of", errors[0])


if __name__ == "__main__":
    unittest.main()
