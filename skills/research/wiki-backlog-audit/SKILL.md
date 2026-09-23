---
name: wiki-backlog-audit
description: "Audit backlog entries already ingested as wiki pages."
category: research
---

# Wiki Backlog Audit

Use when the maintainer asks whether pending work in the ingestion backlog (`AIED-BACKLOG.md`) is
real: "some of these are already on the site", "check what's actually missing", "what's left?". Owns
reconciling the backlog file against `content/en/articles/` and keeping the file's own counts honest.
Full-text recovery for entries that *are* genuinely missing lives in `wiki-source-acquisition`.

## Why the file drifts

An article ingested later gets a **new slug and a cleaned title** (shorter, no parenthetical,
publisher marketing title dropped), so the original backlog line stops matching anything and never
gets deleted. The file then claims weeks of pending work that already shipped. Header and prose
counts drift the same way. Audit programmatically — never eyeball a corpus of 1,100+ filenames.

## Procedure

1. **Parse only the section that means "not ingested"** — the new-articles list. The truncated-source
   section and the "no further text available" section list pages that are on-site *by design*;
   excluding them is part of the answer, so state that explicitly in the report.
2. **Index every `content/en/articles/*.md`**: harvest DOIs with `10\.\d{4,9}/[^\s"')]+` from the **whole page**,
   not just frontmatter — the bottom-of-page citation block is where the DOI usually lives — plus the
   frontmatter `title` and `source_url`.
3. **Match in order**: normalized DOI (lowercase, strip a trailing `.`), exact `source_url`, then
   title similarity ≥ 0.75 with `difflib.SequenceMatcher`. Ingested titles are rewritten, so
   exact-title matching misses real duplicates; a DOI-less backlog entry is findable only this way.
4. **Never accept a word-overlap hit as a duplicate.** Generic academic vocabulary (education,
   generative, students, teachers) makes most of the corpus a candidate for any title. A multi-word
   overlap is a hint to inspect, not evidence; DOI and source URL are authoritative.
5. **Check the file against itself.** The same paper can appear in both the new-articles list and the
   truncated-PDF list. Remove whichever entry misrepresents the state and leave the paper in the
   section matching its real gap: a raw body at ~50,000 chars is cap-truncated, so it belongs in the
   truncated list even when the page itself is well developed.
6. **Confirm a hit is a real page**: the file exists in `content/en/articles/` with a real body, and its
   `raw/papers/` source is present at the expected size. `raw/` is gitignored but exists locally —
   check the filesystem, not git.
7. **Recompute counts from the lists and fix the header numbers.** Stated totals drift independently
   of the entries (a section announces "62 pages" while holding 54). Count with a regex over the
   file; never trust prose totals.
8. **Verify after editing**: re-run the overlap check and require zero hits, assert the number of
   removed lines equals the number of duplicates found, then commit locally with a neutral message.

`dist/` is a stale build: absence there proves nothing and presence there does not prove a page is
live. `content/en/articles/*.md` is the source of truth; use `dist/` only as a weak second signal.

## Report shape

List each removal as **slug + DOI + title**, grouped by journal section, then say what the section
holds now. Distinguish "regex/grep confirms absent" (a real gap) from "nothing found because the
search was weak". Mention unrequested fixes made along the way (count corrections, dedupe) so the
user can push back.

**Never push** — commit locally only; pushing needs explicit per-occurrence approval.

## Support files

- `scripts/backlog_overlap_check.py` — parses the backlog, indexes `content/en/articles/`, prints per-entry
  hits plus parsed-vs-stated counts. Run it before and after editing the file.
