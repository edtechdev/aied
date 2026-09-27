#!/usr/bin/env python3
"""Fail if a source PDF lives anywhere but the canonical store (paths.pdf_sources).

The store is a HARD RULE (AGENTS.md, "Source preservation"): when a source PDF
arrives, it is copied to `pdf-sources/<slug>.pdf` BEFORE its text is extracted,
and it is never deleted afterwards. The chat document cache rotates, so a PDF
that exists only there, or only in a scratch folder inside the repo, is
unrecoverable within days.

The rule was written down and still got broken: an earlier session created a
second store (`raw/pdfs/`, 13 PDFs + 13 `.txt` sidecars) alongside the real one,
which is how a source ends up invisible to a later session that looks in the
canonical folder and finds nothing. A rule in prose does not survive that, so
this gate checks the filesystem instead.

Scans the repository for PDF sources outside the canonical store:

  * any `*.pdf` under the repo root (excluding the canonical store, `.git`,
    `node_modules`, `dist`, `.astro` and the offline-artifact folders)
  * any `.pdf.txt` sidecar, which is the other half of the same mistake
  * any OTHER folder at the repo root, or directly under `raw/`, whose name
    looks like a PDF store (`pdfs`, `pdf`, `pdf_sources`, `pdf-sources-*`,
    `sources`), even if it currently holds nothing

Usage:
    python3 tooling/scripts/check-pdf-store.py            # exit 1 on strays
    python3 tooling/scripts/check-pdf-store.py --list      # always exit 0
    python3 tooling/scripts/check-pdf-store.py --quiet     # summary only

The fix is always the same: copy the file into the canonical store (never delete
the original until the copy is verified), then remove the stray folder.
"""
import fnmatch
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from wiki_config import load_config, path  # noqa: E402

# Directories that never hold a source we must preserve. `dist` holds the built
# site (and any PDF someone downloads by hand); the offline book folders are
# build artefacts, not sources.
SKIP_DIRS = {'.git', 'node_modules', 'dist', '.astro', '.cache', 'public'}
# Folder names that mean "someone tried to start a second store".
STORE_LOOKALIKES = ('pdfs', 'pdf', 'pdf_sources', 'pdf-sources', 'sources')


def stray_files(root, canonical):
    """PDFs and PDF-text sidecars that sit outside the canonical store."""
    hits = []
    for base, dirs, files in os.walk(root):
        rel = os.path.relpath(base, root)
        parts = [] if rel == '.' else rel.split(os.sep)
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        # never descend into the canonical store, or into another locale's copy
        if os.path.abspath(base).startswith(os.path.abspath(canonical)):
            dirs[:] = []
            continue
        for f in files:
            if fnmatch.fnmatch(f, '*.pdf') or fnmatch.fnmatch(f, '*.pdf.txt'):
                hits.append(os.path.join(rel, f) if rel != '.' else f)
    return sorted(hits)


def lookalike_dirs(root):
    """Folders that look like a second store, whether or not they hold anything."""
    found = []
    candidates = [root] + [
        os.path.join(root, d) for d in ('raw', 'docs', 'content', 'sources')
        if os.path.isdir(os.path.join(root, d))
    ]
    for c in candidates:
        for d in sorted(os.listdir(c)) if os.path.isdir(c) else []:
            p = os.path.join(c, d)
            if not os.path.isdir(p):
                continue
            name = d.lower()
            if name in STORE_LOOKALIKES or name.startswith('pdf-sources-'):
                n = sum(len(fs) for _, _, fs in os.walk(p))
                found.append((os.path.relpath(p, root), n))
    return sorted(found)


def main():
    argv = sys.argv[1:]
    quiet = '--quiet' in argv
    listing = '--list' in argv
    cfg = load_config()
    root = path(cfg, 'root')
    canonical = os.path.join(root, path(cfg, 'pdf_sources'))
    canonical_count = len([f for f in os.listdir(canonical)
                           if f.lower().endswith('.pdf')]) if os.path.isdir(canonical) else 0

    if not quiet:
        print(f"Canonical source store: {os.path.relpath(canonical, root)}/ "
              f"({canonical_count} PDF(s))")

    strays = stray_files(root, canonical)
    looks = [x for x in lookalike_dirs(root)
             if os.path.relpath(os.path.join(root, x[0]), root) !=
             os.path.relpath(canonical, root)]

    if not strays and not looks:
        print("OK: every source PDF in this repository is in the canonical store.")
        return 0

    if strays:
        print(f"\nFAIL: {len(strays)} source file(s) outside "
              f"{os.path.relpath(canonical, root)}/:")
        for s in strays:
            print(f"  - {s}")
    if looks:
        print(f"\nFAIL: {len(looks)} folder(s) that look like a second PDF store:")
        for d, n in looks:
            print(f"  - {d}/  ({n} file(s))")
    print(f"\nFix: copy each file into {os.path.relpath(canonical, root)}/ (verify the copy, "
          f"then delete the original), and remove the stray folder. One store only — "
          f"AGENTS.md, \"Source preservation\".")
    return 0 if listing else 1


if __name__ == '__main__':
    sys.exit(main())