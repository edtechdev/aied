from __future__ import annotations

import unittest
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[2]
WORKFLOWS = ROOT / ".github" / "workflows"


class BuildWorkflowTests(unittest.TestCase):
    def setUp(self) -> None:
        self.text = (WORKFLOWS / "astro-build.yml").read_text(encoding="utf-8")
        self.workflow = yaml.safe_load(self.text)

    def test_old_workflow_run_deploy_path_is_gone(self) -> None:
        self.assertFalse((WORKFLOWS / "astro-deploy.yml").exists())
        self.assertNotIn("workflow_run", self.text)
        self.assertNotIn("built-site", self.text)

    def test_no_custom_site_archive(self) -> None:
        self.assertNotIn("tar czf", self.text)
        self.assertNotIn("site.tar.gz", self.text)
        self.assertNotIn("tar x", self.text)

    def test_one_pages_packaging_action_on_main(self) -> None:
        self.assertEqual(self.text.count("actions/upload-pages-artifact@"), 1)
        step = next(
            step
            for step in self.workflow["jobs"]["build"]["steps"]
            if step.get("uses", "").startswith("actions/upload-pages-artifact@")
        )
        self.assertIn("github.event_name == 'push'", step["if"])
        self.assertIn("refs/heads/main", step["if"])
        self.assertEqual(step["with"]["path"], "dist")
        self.assertEqual(step["with"]["name"], "github-pages")

    def test_deploy_is_a_second_job_in_the_same_workflow(self) -> None:
        deploy = self.workflow["jobs"]["deploy"]
        self.assertEqual(deploy["needs"], "build")
        self.assertIn("github.event_name == 'push'", deploy["if"])
        self.assertIn("refs/heads/main", deploy["if"])
        self.assertEqual(deploy["environment"]["name"], "github-pages")
        self.assertEqual(deploy["permissions"]["pages"], "write")
        self.assertEqual(deploy["permissions"]["id-token"], "write")
        deploy_step = next(
            step for step in deploy["steps"] if step.get("uses", "").startswith("actions/deploy-pages@")
        )
        self.assertEqual(deploy_step["with"]["artifact_name"], "github-pages")
        self.assertNotIn("download-artifact", self.text)
        self.assertNotIn("checkout", str(deploy["steps"]).lower())

    def test_last_step_reports_build_tooling_tests(self) -> None:
        commands = [step.get("run", "") for step in self.workflow["jobs"]["build"]["steps"]]
        self.assertTrue(any("unittest discover" in command for command in commands))


if __name__ == "__main__":
    unittest.main()
