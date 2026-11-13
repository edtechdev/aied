---
name: concept-page-structure-normalization
description: "Use when concept sections drift from canonical order."
category: research
version: 1.0.0
---

# Normalizing concept-page structure across a corpus

Concept pages drift in two directions that look different but share a cause: the body is written before the
page knows what shape it should have. Variant A puts the whole argument in `###` subsections under
`## Introduction`, so `## Common Misconceptions` lands third and summarizes a case the reader has not read.
Variant B uses article vocabulary (`What this means for practice`, `Limitations`) because the page was
adapted from an article draft. Neither is visible to the build or to the prose gates.

## Canonical order

frontmatter → synthesis blockquote → `## Questions to Consider` → `## Introduction` → thematic `##` sections →
`## Implications for Practice` → `## Where the evidence is thin` → `## Common Misconceptions` →
`## Connected Concepts` → `## Connected Articles`

`Implications for Practice` and `Where the evidence is thin` are optional; when present they precede
misconceptions, never follow them. The connected lists end every page.

## Procedure

1. **Census before editing.** Enumerate `##` headings per page and rank by where `Common Misconceptions` sits.
   A page whose misconceptions heading is at index 2 has its body hidden in `###`; a page with the practice
   section after misconceptions has the tail in the wrong order. Count both, and count heading-name variants
   (`What this means for practice` vs `Implications for Practice`), so the work is measured rather than guessed.
2. **Move sections before rewriting headings.** Reordering is reversible and reviewable; renaming is an
   editorial decision. Do the order first, run the gates, then rename toward the form most pages already use.
3. **Promote only the headings the page's own structure implies.** The reliable rule is index alignment: read
   the English heading levels as a list and write those levels onto the page's headings in document order.
   Blindly promoting every `###` between Introduction and Misconceptions over-flattens pages where some of
   those subsections are genuine sub-parts of a thematic section, and the parity/heading gates then disagree
   with English on dozens of pages.
4. **Prove the move was a move.** Compare every non-heading line against the previous revision: the sets must
   be identical apart from the timestamp. A reorder that also silently drops prose is the failure mode this
   check exists for.
5. **Bump `updated:` on every touched page**, then run the prose gate (`--changed`), the concept gate, and the
   build. Ordering changes alone do not add prose, so a prose-gate hit means a heading rename swallowed a
   paragraph boundary.

## Pitfalls

- **A heading rename changes anchors.** `## What this means for practice` → `## Implications for Practice`
  changes the section id the renderer and the search index use; do it corpus-wide in one pass rather than
  leaving two names alive, or the same page type renders differently depending on when it was written.
- **Translations mirror the English structure, so a structural sweep makes every translated twin stale.**
  After normalizing English, apply the same transformation to each locale (heading levels by index, practice
  section moved above the local misconceptions heading) and re-stamp `source_updated` only where the prose is
  provably unchanged — check the English page as it stood at the translation's recorded date.
- **The practice/limits pair is where pages differ most.** Do not invent new sections to reach symmetry; if a
  page has no practice section, adding one to match the majority is padding, not normalization.
- **Do not normalize article pages.** Articles keep `What this means for practice`, `Limitations`, seven
  numbered findings and a citation line; normalization must never touch `content/*/articles/`.
