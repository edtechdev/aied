---
name: content-repo-duplicate-merge
description: "Merge two pages for one source; redirects and gates."
category: research
---

# Merging duplicate pages in a content repo

Use when two article pages cover the same source and must become one. This is the consolidation
layer: inbound links are REPOINTED to the survivor, never stripped. `wiki-consolidate-duplicate-pages`
carries the older merge procedure; follow it, but apply the corrections below, which post-date that
copy: the redirect is a 200 meta-refresh (not a 404), artifact regeneration is not part of a merge,
and the survivor's own gate record now needs editing.

## Decide first

1. **Match on identifiers, not topic.** Same DOI, same `source_url`, same `sources:` file, or an
exact title match. A shared author set and a shared topic are not a duplicate: a conceptual essay
and an empirical trial from one lab are two works. When you ingest a distinct paper into a crowded
area, say so in the report — "different paper: DOI X vs existing DOI Y" — or the maintainer will
read the pair as duplicate ingestion.
2. **Survivor = real title, richer body, most inbound links, and the page that can carry the better
citation.** If one page cites the published venue and the other the preprint, keep the published
citation — after confirming the venue exists (proceedings page or DOI resolves). Never preserve a
venue neither the PDF nor the landing page states.
3. **Compare the two `sources:` extractions, not just the two pages.** The survivor's raw is often
the short abstract-only copy while the deleted page points at the complete full text. Switch the
survivor's `sources:` to the complete file before merging numbers, then re-run the grounding gate
(it reads that file).

## Merge

- Fold what the loser has and the survivor lacks: selection details, sample-flow numbers, effect
  sizes, venue, extra audience/facet values, useful `— descriptors`.
- Merge facets rather than keeping the survivor's narrower set (`personalized-learning`,
  `learning-analytics`, `learning-gains`, an `instructors` audience are typical losers' extras).
- Bump `updated` with a fresh quoted full timestamp and the real UTC offset.
- Delete the duplicate, replace its slug with the survivor's in every locale and collection, then
  dedupe any list line that now appears twice and remove any self-link the repoint created on the
  survivor.
- Add the redirect: `'<retired>': '<survivor>'` in `src/data/articleRedirects.ts`.

## Verify

- No dangling references outside `log.md`; no duplicate `- [[survivor]]` lines; no self-links.
- 0 broken wikilinks across touched pages; link/numeral multisets not decreased against `HEAD:`.
- **The survivor's concept-screen record is now a live gate input.** The merge edits an existing
  article, so `check-concept-screen.py --changed` demands a decision record. A bare
  `- article: <slug>` item fails as "no integration and no reason" plus "N concept candidate(s) with
  no recorded decision". Write `integrated: []` with a `reason:` and list every facet/inline-link
  candidate under `no_change`; if you do integrate, the reason needs the literal `was missing`
  within its paragraph, and a dismissed `discipline:`/`level:` page needs `('keyword' N)`.
- `verify-number-grounding.py --changed` prints `[no raw source found - cannot verify]` for the
deleted slug. That is benign and exits 0; do not resurrect a page to silence it.
- A repo-wide gate may already be red for defects the merge did not cause (unescaped `$` in old
  translations is the common one). Fix the small pre-existing blockers in the same commit and say
  they were pre-existing; do not report a failed suite as the merge's result.

## Ship

Gate suite green → site build → commit (mention the consolidation) → push → CI green → verify live:
the retired URL returns **200** with `<meta http-equiv="refresh" content="0;url=/aied/articles/<survivor>/">`,
and the survivor returns 200. GitHub Pages has no 301, so expecting a 404 from the retired slug is wrong.
Do **not** regenerate llms/EPUB/PDF: those are release-backed deliverables rebuilt only on explicit request.

## Pitfalls

- Self-links and duplicated list lines appear only after the repoint — rescan the survivor afterwards.
- A raw file shared by both pages is the survivor's source; never delete it during cleanup.
- The merge can make translated twins stale; report that as queued work rather than silently leaving it.
