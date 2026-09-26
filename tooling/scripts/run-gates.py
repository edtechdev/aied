#!/usr/bin/env python3
"""Run the HARD GATE checks declared in wiki.config.yaml (build.gates).

One command answers "did I break the wiki?" without an agent having to remember
three script paths:

    python3 tooling/scripts/run-gates.py --changed  # ONLY pages touched vs HEAD (default for local work)
    python3 tooling/scripts/run-gates.py            # run every gate (full-site; explicit opt-in only)
    python3 tooling/scripts/run-gates.py --list      # show them
    python3 tooling/scripts/run-gates.py --only 1    # run just gate 1 (1-based)

`--changed` exists because re-auditing unchanged pages is wasted work: the result
for a file that has not changed is the same as the last time the gate ran. It
scopes every gate that can be scoped to the pages touched since HEAD and names the
gates it had to skip, instead of silently scanning all ~1,800 pages.

A full-site run is a deliberate act (the user rule is explicit opt-in), because the
inline-link gate walks the whole corpus and dominates the wall time.

Exit code is non-zero if any gate fails, so it can wire straight into CI or a
pre-commit hook. A green `npm run build` is NOT a substitute for these checks.
"""
import os
import re
import subprocess
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from wiki_config import load_config, path  # noqa: E402

# Gates that can be narrowed to a page set, and how. Keyed by the script name in
# the gate command so a reworded command does not silently lose its scoping.
#   'slugs'   -> pass the changed slugs as arguments (script takes slugs)
#   'changed' -> pass --changed (script works out the touched pages itself)
SCOPABLE = {
    'inline_link_scan.py': 'slugs',
    'check_list_formatting.py': 'slugs',
    'audit-article-sections.py': 'changed',
    'check-ai-disclosure.py': 'changed',
    'verify-number-grounding.py': 'changed',
}

# Registry- and corpus-level gates: they validate a fixed artifact (the concept
# registry, exported artifacts, every page's frontmatter) rather than the pages you
# edited, so there is nothing to narrow them to.
GLOBAL = (
    'check_concepts.py', 'validate-facets.py', 'gen-concept-artifacts.py',
    'check-us-english.py', 'check-frontmatter-dates.py',
)


def changed_slugs(wiki):
    """Page slugs created, edited or deleted in the working tree since HEAD."""
    cmds = [
        ['git', 'diff', '--name-only', 'HEAD'],
        ['git', 'ls-files', '--others', '--exclude-standard'],
    ]
    paths = set()
    for cmd in cmds:
        out = subprocess.run(cmd, cwd=wiki, capture_output=True, text=True).stdout
        paths.update(p for p in out.splitlines() if p.strip())
    slugs = set()
    for p in paths:
        parts = p.replace('\\', '/').split('/')
        if p.endswith('.md') and len(parts) >= 2 and parts[0] == 'content':
            # content/<locale>/<section>/<slug>.md -> only the English pages drive
            # the English gates; a translated page is checked by its own workflow.
            if parts[1] == 'en':
                slugs.add(os.path.basename(p)[:-3])
    return sorted(slugs)


def scope_of(gate):
    for script, kind in SCOPABLE.items():
        if script in gate:
            return kind
    return None


def main():
    cfg = load_config()
    gates = cfg.get('build', {}).get('gates') or []
    argv = sys.argv[1:]
    if '--list' in argv or not gates:
        for i, g in enumerate(gates, 1):
            kind = scope_of(g) or 'global'
            print(f"{i}. {g}   [{kind}]")
        return 0
    wiki = path(cfg, 'root')
    only = int(argv[argv.index('--only') + 1]) if '--only' in argv else None
    changed_mode = '--changed' in argv

    slugs = changed_slugs(wiki) if changed_mode else []
    skipped = []
    if changed_mode:
        if not slugs:
            print("Nothing changed versus HEAD — no page-scoped gate has anything to check.")
            print("(Use a bare run for the full-site pass.)")
            return 0
        print(f"Changed page(s) vs HEAD: {len(slugs)}")
        for s in slugs:
            print(f"  - {s}")

    failures = []
    ran = 0
    for i, gate in enumerate(gates, 1):
        if only and i != only:
            continue
        kind = scope_of(gate)
        if changed_mode and kind is None:
            skipped.append((i, gate))
            continue
        cmd = gate
        if changed_mode and kind == 'changed':
            cmd = gate if '--changed' in gate else f"{gate} --changed"
        elif changed_mode and kind == 'slugs':
            # the configured command carries `--all`; drop it, or the script scans
            # the whole corpus and ignores the slugs we just computed
            cmd = re.sub(r'\s+--all\b', '', gate) + ' ' + ' '.join(slugs)
        ran += 1
        print(f"\n=== gate {i}/{len(gates)}: {cmd}")
        result = subprocess.run(cmd, shell=True, cwd=wiki)
        if result.returncode != 0:
            failures.append((i, gate, result.returncode))
    print()
    if skipped:
        print(f"Not run ({len(skipped)} registry/corpus gate(s); they validate fixed artifacts, "
              f"not the pages you edited):")
        for i, gate in skipped:
            print(f"  gate {i}: {gate}")
        print("  Run a bare `python3 tooling/scripts/run-gates.py` for the full-site pass.")
        print()
    if failures:
        for i, gate, code in failures:
            print(f"FAIL (exit {code})  gate {i}: {gate}")
        return 1
    print(f"OK — all {ran} scoped gate(s) passed.")
    return 0


if __name__ == '__main__':
    sys.exit(main())