# Structure audits, article deletion, and prose sweeps in the wiki corpus

Depth for the three corpus-wide edits that recur on `<WIKI>`: checking that concept pages
have the canonical shape, deleting an article that should not be there, and sweeping a spelling or
style rule across prose. Each has a dedicated skill (`concept-page-structure-normalization`,
`wiki-article-deletion`, `wiki-editorial-conventions`); this file carries the parts that cost time
when they are missing.

## Concept-page shape

Canonical order: frontmatter → synthesis blockquote → `## Questions to Consider` → `## Introduction`
→ thematic `##` sections → `## Implications for Practice` (optional) → `## Where the evidence is
thin` (optional) → `## Common Misconceptions` → `## Citation` (rare) → `## Connected Resources` →
`## Connected Concepts` → `## Connected Articles`.

- **Whitelist the tail in the census.** A page whose misconceptions section is followed only by
  `Citation` / `Connected Resources` / `Connected Concepts` / `Connected Articles` is correct. A
  census that treats any heading after misconceptions as a defect reports a handful of false
  positives per 250 pages and buries the real ones.
- **A page written from scratch skips the opening pair.** Every concept page drafted inside a session
  arrives with an argument and no on-ramp: no Questions, no Introduction, first thematic heading at
  the top. The build, the prose gates and the link gates all pass. Only the corpus census catches it,
  so run each new concept page through the census before closing it.
- **Prove a reorder was a reorder.** Compare non-empty, non-heading lines against the previous
  revision as multisets. Joining blocks that a heading used to separate drops exactly one blank line;
  that is not prose loss and is not worth a rebuild to chase.
- **Renaming a heading changes its anchor.** Grep `content/` and `src/` for the old `#fragment`
  before renaming a singleton heading. If nothing points at it the rename is safe; if something does,
  fix the pointer in the same pass.
- **Rename toward the corpus form, not toward symmetry.** `Implications for Practice` is the common
  name; convert singletons like `Putting X into Practice` or `Implementation Guidance by Role` when
  you are already moving the section. Never invent a practice section on a page that has none.

## Deleting an article

Three reference kinds, and the third is the one a slug grep misses:

1. Connected-list lines (`- [[slug]] — descriptor`).
2. Narrative weaves (`[[slug|Author]] supplies the baseline ...`), which need the sentence rephrased
   or removed so the paragraph still argues something.
3. **Questions to Consider bullets and figure sentences** that quote the study's number without
   linking it. After the slug sweep, grep the page for the study's headline figures (a percentage, a
   sample size) — that is how leftover claims survive into `dist`.

- **Rewrite the frame the paragraph provided.** A deleted study often set up a section's shape ("the
  evidence has a clear before-and-after axis"). Fix the section's lead sentence so the surviving
  studies still divide along a line, rather than leaving a gap where an argument used to be.
- **Replace a question, do not just delete it.** Questions are the reader's on-ramp and the corpus
  keeps five or six per page; write one the surviving studies support.
- **Too old is a distinct reason.** No redirect (the finding is what aged), same cleanup as a
  withdrawal, plus a `log.md` entry naming the reason. Say in the report that the committed EPUB/PDF
  still carry the page and offer the rebuild.
- **Stop at the commit.** Pushing needs authorization per change (`repo-push-authorization`); any
  deletion procedure that ends in `push` is superseded by that rule.

## Spelling and style sweeps

- **Fix the dictionary, not the instances.** The US-English gate (`check-us-english.py`) carries the
  word map; a form it does not know survives every sweep. Add the missing pair (`counselling` →
  `counseling`) to the map in the same pass, or the next ingest reintroduces it.
- **Never respell a wikilink target.** A naive `text.replace('counselling', 'counseling')` also
  rewrites `[[rudolph-llm-simulated-counselling-clients-2026]]` and silently breaks the link. Protect
  `[[target|display]]` spans, and re-run the link gate afterwards.
- **Case matters.** A lowercase sweep leaves `Counselling` at the start of a sentence and in headings.
- **Quote the source's own precision.** A figure the source gives as `0.0833` should not be rounded to
  `8.3%` if the grounding gate has to match it; write the share as the source states it.
