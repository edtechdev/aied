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

The house-style gate is scoped by file rather than by page slug: a British spelling in
AGENTS.md or README.md is the same defect as one in an article, and scoping it to page
slugs alone would let those through. tooling/ and skills/ are deliberately outside the
scoped pass, because several files there document this rule and their examples would be
reported as defects; the explicit --include-docs pass is what covers them.

A full-site run is a deliberate act (the user rule is explicit opt-in), because the
inline-link gate walks the whole corpus and dominates the wall time.

Exit code is non-zero if any gate fails, so it can wire straight into CI or a
pre-commit hook. A green `npm run build` is NOT a substitute for these checks.
"""
import os
import re
import shlex
import subprocess
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from wiki_config import load_config, path  # noqa: E402

# Gates that can be narrowed to a page set, and how. Keyed by the script name in
# the gate command so a reworded command does not silently lose its scoping.
#   'slugs'   -> pass the changed slugs as arguments (script takes slugs)
#   'paths'   -> pass the changed files as arguments (script takes slugs OR paths);
#                used by the house-style check, which must also see a changed note
#   'changed' -> pass --changed (script works out the touched pages itself)
SCOPABLE = {
    'inline_link_scan.py': 'slugs',
    'check_list_formatting.py': 'slugs',
    'audit-article-sections.py': 'changed',
    'check-ai-disclosure.py': 'changed',
    'verify-number-grounding.py': 'changed',
    'check-us-english.py': 'paths',
    'check-resource-wiring.py': 'slugs',
    'check-concept-screen.py': 'changed',
    'check-concept-integration.py': 'changed',
}

# Registry- and corpus-level gates: they validate a fixed artifact (the concept
# registry, exported artifacts, every page's frontmatter) rather than the pages you
# edited, so there is nothing to narrow them to.
GLOBAL = (
    'check_concepts.py', 'validate-facets.py', 'gen-concept-artifacts.py',
    'check-slugs.py', 'check-frontmatter-dates.py',
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


def changed_paths(wiki):
    """Repo-relative markdown files created or edited since HEAD, pages and notes.

    The house-style gate is the one gate whose subject is prose anywhere, so it is
    scoped by file rather than by page slug: a British spelling introduced in
    AGENTS.md, a reference doc or a skill file is the same defect as one in an
    article. Pages are covered too, so nothing is checked twice or left out.
    """
    cmds = [
        ['git', 'diff', '--name-only', 'HEAD'],
        ['git', 'ls-files', '--others', '--exclude-standard'],
    ]
    paths = set()
    for cmd in cmds:
        out = subprocess.run(cmd, cwd=wiki, capture_output=True, text=True).stdout
        paths.update(p for p in out.splitlines() if p.strip())
    # Mirror the checker's own scope exactly: the default-locale page collections, plus
    # the note files it scans with --include-docs. AIED-BACKLOG.md is deliberately
    # outside both, because it reproduces published titles verbatim and a British
    # spelling in a paper's title is correct, not a defect.
    page_dirs = ('content/en/articles/', 'content/en/concepts/', 'content/en/faqs/')
    # AGENTS.md and README.md are the notes the checker already scans by default. The rest
    # of tooling/ and skills/ stay out of the scoped pass on purpose: several of those files
    # document this very rule (the sweep brief lists "gray not grey; modeled not modelled",
    # the article-quality skill discusses respelling and names British slugs), so scanning
    # them reports the rule's own examples as defects. Reading that output is a human
    # judgement, which is what the explicit --include-docs pass is for.
    note_files = ('AGENTS.md', 'README.md')
    keep = []
    for p in sorted(paths):
        if not p.endswith('.md'):
            continue
        if p.startswith('content/') and not p.startswith('content/en/'):
            continue  # translated prose is not English; its own workflow checks it
        if not os.path.exists(os.path.join(wiki, p)):
            continue  # deleted in this change set: nothing left to scan
        if p.startswith(page_dirs) or p in note_files:
            keep.append(p)
    return keep


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
    paths = changed_paths(wiki) if changed_mode else []
    skipped, skipped_nopage = [], []
    if changed_mode:
        if not slugs and not paths:
            print("Nothing changed versus HEAD — no page-scoped gate has anything to check.")
            print("(Use a bare run for the full-site pass.)")
            return 0
        if slugs:
            print(f"Changed page(s) vs HEAD: {len(slugs)}")
            for s in slugs:
                print(f"  - {s}")
        else:
            # Only notes or scripts changed (a reference doc, a README, a gate script):
            # the page-scoped gates have nothing to check, but the house-style gate does.
            print("No changed page slugs vs HEAD — only notes or scripts.")

    skipped_nopage = []
    failures = []
    ran = 0
    for i, gate in enumerate(gates, 1):
        if only and i != only:
            continue
        kind = scope_of(gate)
        if changed_mode and kind is None:
            skipped.append((i, gate))
            continue
        if changed_mode and kind in ('slugs', 'changed') and not slugs:
            # never run a page-scoped gate with an empty page set: the inline-link and
            # list-formatting commands strip their own --all, so an empty argument list
            # would silently turn them into a full-corpus scan, which is the cost this
            # mode exists to avoid.
            skipped_nopage.append((i, gate))
            continue
        cmd = gate
        if changed_mode and kind == 'changed':
            cmd = gate if '--changed' in gate else f"{gate} --changed"
        elif changed_mode and kind == 'slugs':
            # the configured command carries `--all`; drop it, or the script scans
            # the whole corpus and ignores the slugs we just computed
            cmd = re.sub(r'\s+--all\b', '', gate) + ' ' + ' '.join(slugs)
        elif changed_mode and kind == 'paths':
            if not paths:
                skipped.append((i, gate))
                continue
            cmd = re.sub(r'\s+--all\b', '', gate) + ' ' + ' '.join(shlex.quote(x) for x in paths)
        ran += 1
        print(f"\n=== gate {i}/{len(gates)}: {cmd}")
        result = subprocess.run(cmd, shell=True, cwd=wiki)
        if result.returncode != 0:
            failures.append((i, gate, result.returncode))
    print()
    if skipped_nopage:
        print(f"Not run ({len(skipped_nopage)} page-scoped gate(s); no page changed, and running "
              f"them with an empty page set would scan the whole corpus):")
        for i, gate in skipped_nopage:
            print(f"  gate {i}: {gate}")
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