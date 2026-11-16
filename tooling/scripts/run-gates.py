#!/usr/bin/env python3
"""Run the HARD GATE checks declared in wiki.config.yaml (build.gates).

One command answers "did I break the wiki?" without an agent having to remember
three script paths:

    python3 tooling/scripts/run-gates.py --changed  # pages scoped, corpus gates still full
    python3 tooling/scripts/run-gates.py            # every blocking gate (full-site)
    python3 tooling/scripts/run-gates.py --links    # add the advisory inline-link report
    python3 tooling/scripts/run-gates.py --cold     # ignore the result cache
    python3 tooling/scripts/run-gates.py --list     # show the gates and their scope
    python3 tooling/scripts/run-gates.py --only 1   # run just gate 1 (1-based)

Three tiers, because the cost is not spread evenly. Measured on the current corpus,
29 of the 30 gates take 138 s together while `inline_link_scan.py . --all` takes
26 minutes and cannot fail: it prints link suggestions for a human to curate. That
scan is ADVISORY. It is skipped unless `--links` is passed, and it never decides the
exit code.

`--changed` scopes the page gates to the pages touched since HEAD but still runs the
corpus-level gates in full. Those cost about 30 s and validate every page's
frontmatter, the concept registry and the exported artifacts. Skipping them made a
scoped green say nothing about a new page's facets, which is the defect class they
exist to catch. They cannot be narrowed further: their subject is the corpus, not
the diff.

Successful results are cached in `.astro/gates-cache.json`, keyed by a fingerprint of
every gate input (content, tooling, skills, src, public artifacts, config, interpreter
and the command itself). A repeat run over an unchanged tree costs seconds; `--cold`
forces the full work. The cache never records a failure.

The house-style gate is scoped by file rather than by page slug: a British spelling in
AGENTS.md or README.md is the same defect as one in an article, and scoping it to page
slugs alone would let those through. tooling/ and skills/ are deliberately outside the
scoped pass, because several files there document this rule and their examples would be
reported as defects; the explicit --include-docs pass is what covers them.

Exit code is non-zero if any blocking gate fails, so it can wire straight into CI or a
pre-commit hook. A green `npm run build` is NOT a substitute for these checks.
"""
import hashlib
import json
import os
import re
import shlex
import subprocess
import sys
import time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from wiki_config import load_config, path  # noqa: E402

# Gates that can be narrowed to a page set, and how. Keyed by the script name in
# the gate command so a reworded command does not silently lose its scoping.
#   'slugs'   -> pass the changed slugs as arguments (script takes slugs)
#   'paths'   -> pass the changed files as arguments (script takes slugs OR paths);
#                used by the house-style check, which must also see a changed note
#   'changed' -> pass --changed (script works out the touched pages itself)
#   'translated' -> translated files touched vs HEAD; pass --changed to a gate that compares
#                each one with its English source. Kept separate from 'changed' because
#                changed_slugs() reports English pages only, so a wave of new locale files
#                would otherwise find an empty page set and the gate would silently not run.
SCOPABLE = {
    'check_list_formatting.py': 'slugs',
    'audit-article-sections.py': 'changed',
    'check-citation-attribution.py': 'changed',
    'check-ai-disclosure.py': 'changed',
    'check-evidence-context.py': 'changed',
    'check-concept-first-mentions.py': 'changed',
    'check-self-reference.py': 'changed',
    'check-created-dates.py': 'changed',
    'verify-number-grounding.py': 'changed',
    'check-us-english.py': 'paths',
    'check-resource-wiring.py': 'slugs',
    'check-concept-screen.py': 'changed',
    'check-concept-integration.py': 'changed',
    'check-concept-prose.py': 'changed',
    'check-concept-updated-bump.py': 'changed',
    # Only used when --links is passed: the scan is advisory, but when it does run on
    # a diff it should still see only the touched pages.
    'inline_link_scan.py': 'slugs',
    'check-translation-parity.py': 'translated',
}

# Corpus-level gates: their subject is every page or a fixed artifact, so there is
# nothing to narrow them to. They always run, in both modes.
GLOBAL = (
    'check_concepts.py', 'validate-facets.py', 'gen-concept-artifacts.py',
    'check-slugs.py', 'check-frontmatter-dates.py',
    # Re-derives src/data/offlineArtifacts.ts from public/ and compares: the site
    # prints those sizes to readers, so a manifest left stale after an artifact
    # rebuild states the wrong size on the page.
    'check-offline-manifest.py',
)

# Gates that report for a human and cannot fail. They are outside the blocking pass:
# the inline-link scan is 26 of the suite's 28 minutes and always exits 0, so a green
# "all gates passed" says nothing about it either way.
ADVISORY = ('inline_link_scan.py',)

CACHE_RELPATH = os.path.join('.astro', 'gates-cache.json')
FINGERPRINT_DIRS = ('content', 'tooling', 'skills', 'src')
FINGERPRINT_FILES = ('wiki.config.yaml', 'package.json', 'AGENTS.md')


def _diff_paths(wiki):
    """Paths in the working tree that differ from HEAD, plus untracked files.

    CI uses the same definition: the workflow resets HEAD to the base commit before
    running the suite, so a pushed commit looks like an uncommitted change set and
    every checker's own `git diff HEAD` sees it. A plain checkout would show no diff
    and each diff-scoped gate would report "no pages in scope" while passing.
    """
    res = subprocess.run(['git', 'diff', '--name-only', 'HEAD'], cwd=wiki,
                         capture_output=True, text=True)
    if res.returncode != 0:
        # A bad HEAD must not degrade into an empty change set: that would report
        # every gate green while checking nothing.
        print(f"FATAL: git diff HEAD failed: {res.stderr.strip()}", file=sys.stderr)
        raise SystemExit(2)
    paths = {p for p in res.stdout.splitlines() if p.strip()}
    untracked = subprocess.run(['git', 'ls-files', '--others', '--exclude-standard'],
                               cwd=wiki, capture_output=True, text=True)
    paths.update(p for p in untracked.stdout.splitlines() if p.strip())
    return paths


def changed_slugs(wiki):
    """Page slugs created, edited or deleted in the working tree since HEAD."""
    paths = _diff_paths(wiki)
    slugs = set()
    for p in paths:
        parts = p.replace('\\', '/').split('/')
        if p.endswith('.md') and len(parts) >= 2 and parts[0] == 'content':
            # content/<locale>/<section>/<slug>.md -> only the English pages drive
            # the English gates; a translated page is checked by its own workflow.
            if parts[1] == 'en':
                slugs.add(os.path.basename(p)[:-3])
    return sorted(slugs)


def changed_translated(wiki):
    """Translated page files created, edited or deleted in the change set.

    Returns (locale, section, slug) triples for every content/<locale>/<section>/<slug>.md
    with a locale other than English. changed_slugs() deliberately reports English pages
    only, so without this a translation wave reports 'nothing changed' to the gate runner
    and every gate is skipped while the wave looks verified.
    """
    paths = _diff_paths(wiki)
    found = set()
    for p in paths:
        parts = p.replace('\\', '/').split('/')
        if len(parts) == 4 and p.endswith('.md') and parts[0] == 'content' and parts[1] != 'en':
            found.add((parts[1], parts[2], parts[3][:-3]))
    return sorted(found)


def changed_paths(wiki):
    """Repo-relative markdown files created or edited in the change set.

    The house-style gate is the one gate whose subject is prose anywhere, so it is
    scoped by file rather than by page slug: a British spelling introduced in
    AGENTS.md, a reference doc or a skill file is the same defect as one in an
    article. Pages are covered too, so nothing is checked twice or left out.
    """
    paths = _diff_paths(wiki)
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


def is_advisory(gate):
    return any(script in gate for script in ADVISORY)


def _hash_file(p):
    h = hashlib.sha256()
    with open(p, 'rb') as fh:
        for chunk in iter(lambda: fh.read(1 << 20), b''):
            h.update(chunk)
    return h


def inputs_fingerprint(wiki):
    """sha256 over every file a gate can read.

    Content is hashed, not stat-ed: a checkout or rebase can change mtimes without
    changing bytes, and a gate skipped on a false match is worse than a slow gate.
    public/ holds large binaries the gates only read for name and size, so those are
    identified by size and mtime instead of hashed.
    """
    h = hashlib.sha256()
    h.update(f'py{sys.version_info.major}.{sys.version_info.minor}'.encode())
    for d in FINGERPRINT_DIRS:
        base = os.path.join(wiki, d)
        if not os.path.isdir(base):
            continue
        for root, dirs, files in os.walk(base):
            dirs[:] = sorted(x for x in dirs if x not in ('__pycache__', '.git', 'node_modules'))
            for name in sorted(files):
                p = os.path.join(root, name)
                h.update(os.path.relpath(p, wiki).encode())
                try:
                    h.update(_hash_file(p).digest())
                except OSError:
                    h.update(b'<unreadable>')
    base = os.path.join(wiki, 'public')
    if os.path.isdir(base):
        for root, dirs, files in os.walk(base):
            dirs[:] = sorted(dirs)
            for name in sorted(files):
                p = os.path.join(root, name)
                st = os.stat(p)
                h.update(f'{os.path.relpath(p, wiki)}:{st.st_size}:{st.st_mtime_ns}'.encode())
    for name in FINGERPRINT_FILES:
        p = os.path.join(wiki, name)
        if os.path.exists(p):
            h.update(name.encode())
            h.update(_hash_file(p).digest())
    return h.hexdigest()


def load_cache(wiki):
    try:
        with open(os.path.join(wiki, CACHE_RELPATH)) as fh:
            data = json.load(fh)
        return data if isinstance(data, dict) else {}
    except (OSError, ValueError):
        return {}


def save_cache(wiki, cache):
    p = os.path.join(wiki, CACHE_RELPATH)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    tmp = p + '.tmp'
    with open(tmp, 'w') as fh:
        json.dump(cache, fh, indent=1, sort_keys=True)
    os.replace(tmp, p)


def main():
    # Keep our own progress lines in order relative to gate output when stdout is a
    # pipe (CI logs): child processes write unbuffered, so a buffered header would
    # appear after the gates it introduces.
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(line_buffering=True)  # type: ignore[attr-defined]
    cfg = load_config()
    gates = cfg.get('build', {}).get('gates') or []
    argv = sys.argv[1:]
    if '--list' in argv or not gates:
        for i, g in enumerate(gates, 1):
            if is_advisory(g):
                kind = 'advisory'
            else:
                kind = scope_of(g) or 'corpus'
            print(f"{i}. {g}   [{kind}]")
        return 0
    wiki = path(cfg, 'root')
    only = int(argv[argv.index('--only') + 1]) if '--only' in argv else None
    changed_mode = '--changed' in argv
    run_links = '--links' in argv
    cold = '--cold' in argv or '--no-cache' in argv

    slugs = changed_slugs(wiki) if changed_mode else []
    paths = changed_paths(wiki) if changed_mode else []
    translated = changed_translated(wiki) if changed_mode else []
    scope_label = "versus HEAD"
    if changed_mode:
        if not slugs and not paths and not translated:
            print(f"Nothing changed {scope_label} — the page gates have nothing to check; "
                  "running the corpus gates only.")
        if slugs:
            print(f"Changed page(s) {scope_label}: {len(slugs)}")
            for s in slugs:
                print(f"  - {s}")
        if not slugs:
            print(f"No changed English page slugs {scope_label}.")
        if translated:
            locales = sorted({t[0] for t in translated})
            print(f"Changed translated page(s) {scope_label}: {len(translated)} "
                  f"across {len(locales)} locale(s): {', '.join(locales)}")

    fingerprint = inputs_fingerprint(wiki)
    cache = {} if cold else load_cache(wiki)
    skipped_nopage = []
    skipped_advisory = []
    failures = []
    ran = 0
    cached = 0
    for i, gate in enumerate(gates, 1):
        if only and i != only:
            continue
        if is_advisory(gate) and not run_links:
            skipped_advisory.append((i, gate))
            continue
        kind = scope_of(gate)
        cmd = gate
        if changed_mode and kind == 'translated':
            if not translated:
                skipped_nopage.append((i, gate))
                continue
            cmd = gate if '--changed' in gate else f"{gate} --changed"
        elif changed_mode and kind == 'changed':
            if not slugs:
                # never run a page-scoped gate with an empty page set: several of these
                # commands fall back to the whole corpus when handed no pages, which is
                # the cost this mode exists to avoid.
                skipped_nopage.append((i, gate))
                continue
            cmd = gate if '--changed' in gate else f"{gate} --changed"
        elif changed_mode and kind == 'slugs':
            if not slugs:
                skipped_nopage.append((i, gate))
                continue
            # the configured command carries `--all`; drop it, or the script scans
            # the whole corpus and ignores the slugs we just computed
            cmd = re.sub(r'\s+--all\b', '', gate) + ' ' + ' '.join(slugs)
        elif changed_mode and kind == 'paths':
            if not paths:
                skipped_nopage.append((i, gate))
                continue
            cmd = re.sub(r'\s+--all\b', '', gate) + ' ' + ' '.join(shlex.quote(x) for x in paths)

        fp = hashlib.sha256(f'{fingerprint}\x00{cmd}'.encode()).hexdigest()
        entry = cache.get(cmd)
        if entry and entry.get('fp') == fp:
            print(f"\n=== gate {i}/{len(gates)} (cached: inputs unchanged since "
                  f"{entry.get('at', '?')}): {cmd}")
            cached += 1
            continue

        ran += 1
        print(f"\n=== gate {i}/{len(gates)}: {cmd}")
        result = subprocess.run(cmd, shell=True, cwd=wiki)
        if result.returncode != 0:
            failures.append((i, gate, result.returncode))
            cache.pop(cmd, None)
        else:
            cache[cmd] = {'fp': fp, 'at': time.strftime('%Y-%m-%dT%H:%M:%S')}
    if not cold:
        save_cache(wiki, cache)
    print()
    if skipped_advisory:
        print(f"Not run ({len(skipped_advisory)} advisory gate(s); they report for a human "
              f"and cannot fail):")
        for i, gate in skipped_advisory:
            print(f"  gate {i}: {gate}")
        print("  Pass --links to run them.")
        print()
    if skipped_nopage:
        print(f"Not run ({len(skipped_nopage)} page-scoped gate(s); no page of that kind "
              f"changed, and running them with an empty page set would scan the whole "
              f"corpus):")
        for i, gate in skipped_nopage:
            print(f"  gate {i}: {gate}")
        print()
    if failures:
        for i, gate, code in failures:
            print(f"FAIL (exit {code})  gate {i}: {gate}")
        return 1
    tally = f"{ran} gate(s) passed"
    if cached:
        tally += f", {cached} cached"
    print(f"OK — all {tally}.")
    return 0


if __name__ == '__main__':
    sys.exit(main())
