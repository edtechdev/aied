---
name: concept-page-split-audit
description: "Use when a concept page may need splitting or coverage."
category: research
---

# Splitting an overcrowded concept page, and finding missing ones

The companion to `wiki-concept-map-curation`: that skill decides whether a construct earns a page, this one
decides whether an existing page has outgrown itself and which discipline pages the corpus now justifies. The
usual trigger is a batch landing and the user asking "anything we should split, or any disciplines missing?"

Answer with counts per candidate and one named defect, never with impressions about length.

## Procedure

1. **Pull the registry, not the sidebar.** `concepts.registry.yaml` `sections:` is the machine-readable map;
   `src/data/conceptIndex.ts` is generated from it. Take the candidate set from the section you are auditing
   (for disciplines, the `AI in the disciplines` group) and list what the registry already holds before
   proposing anything.
2. **Compute four numbers per page** — body word count, `- [[...]]` lines under `## Connected Articles`,
   articles whose facet names that page, and the overlap of its Connected Articles with the nearest sibling
   page. `scripts/concept_coverage_audit.py` prints all four.
3. **Normalize facet labels to slugs before matching.** Article frontmatter writes `discipline: [cs education,
   music education]`; registry items are slugs. Compare only after
   `re.sub(r'[^a-z0-9]+', '-', v.strip().lower()).strip('-')`. Skipping this reports every discipline as
   missing a page and buries the real finding.
4. **Resolve the label through `src/data/conceptAliases.ts` before calling a page missing.** The alias map
   decides which page a facet label reaches, and it can send a discipline to a People-section page while the
   obvious topic page sits at zero tagged articles. Reach per alias target is the number that matters; a
   mis-routed label is an alias fix, not a new page.
5. **Apply the split-or-enrich ratio.** Articles per 1,000 words below roughly 15 means the page is underwritten
   — enrich it; splitting produces two thin pages. A page carrying several disciplines is a split candidate
   when one of them already has its own connected cluster (roughly eight or more dedicated studies), and
   especially when a neighbouring page already claims part of the same territory.
6. **Test the neighbour overlap.** Intersect the two Connected Articles sets. A large share in common means one
   page has to give way; name which, and check which page's framing better fits the shared studies (a
   professional-formation page framing architecture as design practice, an arts page framing it as studio
   practice).
7. **Name the aliases that move.** A new page needs the facet label moved off the old page in
   `conceptAliases.ts`, or the new page never receives an article.

## What the answer looks like

- Lead with the single page that is genuinely wrong, with its four numbers and the concrete defect (music
  buried in a container page; a section duplicated with a sibling; a label routed to the wrong page).
- Say which long pages are **not** sprawl and why — when the sub-clusters already live on their own pages
  (feedback, scoring, detection), length is not a split case.
- For missing pages, state the count against precedent: "nine dedicated studies against `legal-education`'s ten
  tagged articles" settles it; "a lot of research" does not.
- When a section moves out, the host page shrinks to a sentence plus the wikilink. A pointer paragraph that
  still argues the case is not a split and leaves the page as long as before.

## Pitfalls

- **Facet labels are not slugs.** See step 3. This is the error that makes an audit useless.
- **Zero tagged articles is a signal, not a gap.** An "orphan" page usually means the label is routed
  elsewhere or never applied. Diagnose before proposing a new page, or you create a page that will also sit at
  zero.
- **Length alone is not sprawl.** Count where the sub-clusters are already housed before recommending a split;
  otherwise the next session splits a page whose constructs are all covered elsewhere.
- **A split needs the alias to move and the host to shrink**, or the corpus ends with two pages carrying the
  same studies and one of them unreachable from the facet.
- **Do not audit against `content/en/concepts/` alone.** Word counts read the English body; the registry decides
  membership, and a page present on disk but absent from the registry fails the concept gate.

## Relationship to other skills

- `wiki-concept-map-curation` — whether a construct earns a page at all.
- `wiki-concept-page-closeout` — executes an approved page: registry, artifacts, reciprocal links.
- `wiki-taxonomy-reorganization` — moving pages between sidebar sections once the split is done.
