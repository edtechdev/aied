---
name: concept-page-splitting
description: "Use when splitting a concept page or re-routing its labels."
category: research
---

# Splitting a concept page, and re-routing a label

The execution half. `concept-page-split-audit` decides whether a page has outgrown itself and
`wiki-concept-page-closeout` carries the general new-page checklist; this is the order that lands a split
without leaving two pages carrying the same studies, and the smaller operation of moving a facet label off
the wrong page.

## Before you cut

- **Aliases live in `concepts.registry.yaml`, never in `src/data/conceptAliases.ts`.** The `.ts` files under
  `src/data/` are generated; editing one is overwritten by the next `gen-concept-artifacts.py` run. A label
  reaches a page only through the registry's `aliases:` list for that concept.
- Confirm the cluster and the sibling boundary with `scripts/concept_coverage_audit.py` (word count, Connected
  Articles, tagged articles, articles per 1,000 words, and pair overlap). Re-run it after the split and report
  the new numbers.

## Procedure

1. **Move the alias on both sides.** Delete the label from the host page's `aliases:` entry and add it to the
   new page's; add the new concept block under `concepts:` and its slug to the right group under `sections:`.
   Then `python3 tooling/scripts/gen-concept-artifacts.py` and `... --check`, and `check_concepts.py`.
2. **Write the new page from the host's own argument.** The host already contains the material; a split that
   rewrites it from scratch loses the citations that made the host credible. Keep the article links, the
   figures and the section claims, and add the framing the container could not give them.
3. **Shrink the host to a sentence plus the wikilink**, and give any strand whose claim is not the moved
   cluster's its own heading. A performance-technology study inside a music section stays with the host when
   the new page is about music pedagogy.
4. **Remove the moved articles from the host's `## Connected Articles` in the same edit.**
   `check-concept-integration.py` requires every listed slug to be linked in that page's narrative, so prose
   that leaves without its list entry fails as a bare listing, and a list entry that stays fails as a claim
   the page no longer makes.
5. **Retarget inbound links whose display text names the moved discipline** (`[[host|music education]]` →
   `[[new|music education]]`), and leave links whose display text is the host's own subject alone. Then add
   one inline reciprocal link on the two or three connected concept pages where the new page's construct is
   named — an existing sentence, not a `See also` line.
6. **Repair the screen record for every retargeted article.** Editing an article reopens its candidate set and
   the new slug is now a candidate: add it to that entry's `integrated:` list and append its
   `<slug>: was missing ...` clause to the existing `reason`. Never write a second entry for the same article.
7. **Gate, build, inspect the route.** The full suite, not only `--changed`: a new concept changes registry,
   artifacts and facet vocabulary. Confirm the new `/concepts/<slug>/` renders, appears in the concept index,
   and that the host page no longer names the moved studies.

## Re-routing a label without creating a page

When a facet label lands on the wrong page — a discipline reaching a People-section page while the topic page
sits at zero tagged articles — the fix is an alias move, not a new page:

1. Delete the label (and its variants) from the wrong concept's `aliases:` and add them to the right one's.
2. Regenerate artifacts and run `check_concepts.py`; duplicate aliases across two concepts are what the
generator refuses.
3. Expect no visible change on the article pages: the metadata table links a facet only when the phrase is in
   the generated discipline map, so the routing fix shows up in search, facets and the concept page's
   reach, not in the article's chip. Do not "verify" it by grepping one article for a new href.

## Pitfalls

- **Relocated prose is judged as new prose.** `check-concept-prose.py --changed` has no memory of the host
  page, so a 300-word block and a 60-word sentence that passed there fail the 150- and 55-word caps on the new
  page. Split the sentences; never shorten away figures to reach the cap.
- **A split can raise the sibling overlap share.** Lifting four articles out of a fourteen-article page leaves
  the same five shared with the neighbouring page, so the shared *percentage* climbs even though the absolute
  duplication fell. Report both numbers and name the boundary decision that would settle it.
- **The host's question list and synthesis date to the old scope.** A question prompt about the moved section,
  or a synthesis that enumerates the moved disciplines, has to change in the same edit or the page reads as
  two topics arguing with each other.
- **Do not leave the moved alias on the host "just in case".** One alias on two concepts means the label
  reaches whichever page the generator wrote last, and the split silently fails for the facet that started it.
- **A new concept page is a new translation obligation.** The host's twins go stale in every locale that
  carries it, and the new page has no twins at all; report both so the locale refresh is queued deliberately.

## Relationship to other skills

- `concept-page-split-audit` — the four numbers and the split-or-enrich decision.
- `wiki-concept-page-closeout` — the general new-page checklist (shape, provenance, screen, build).
- `wiki-gate-suite-triage` — the gate failures that follow, including relocated prose.
- `wiki-taxonomy-reorganization` — moving the page between sidebar sections afterwards.
