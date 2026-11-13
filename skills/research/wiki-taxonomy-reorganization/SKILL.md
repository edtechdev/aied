---
name: wiki-taxonomy-reorganization
description: "Use when moving concept pages between sidebar sections."
category: research
---

# Wiki Taxonomy Reorganization

Use when the user asks to move concept pages between sidebar sections ("move SAMR after technology adoption models", "move teacher education to the disciplines", "put misconceptions in Essentials"). This is a taxonomy change with metadata consequences, not a UI edit — treat it as a migration with a verification loop, not a one-line reorder.

## Why it is a migration

- The sidebar is `concepts.registry.yaml` → `sections:` → groups → items, generated into `src/data/conceptIndex.ts` and `tooling/concept-index.md`.
- Each facet vocabulary is derived from one registry section (`FACET_SECTIONS` in `gen-concept-artifacts.py`: foundations, pedagogy, technology, assessment, methods, institutions, ethics). Moving a slug across a section boundary changes which frontmatter field may legally carry it. Moving `misconceptions` out of Learning and instruction invalidates every `pedagogy: [misconceptions]` and demands `foundations: [misconceptions]` instead.
- Sections outside `FACET_SECTIONS` (AI in the disciplines, Levels and contexts) are sidebar-only; moving into or out of them needs no facet migration.

## Procedure

1. **Edit the registry once, carefully.** Remove the slug's `    - <slug>` line from its old group, insert it immediately after the anchor item the user named, and delete the group's `- label:` block if it empties. Order inside a group is curated, not alphabetical — follow the anchor.
2. **Regenerate the derived views:** `python3 tooling/scripts/gen-concept-artifacts.py` (writes by default; `--check` verifies). Never hand-edit `conceptIndex.ts`, `facetVocab.ts`, `conceptAliases.ts` or `concept-index.md`; the next run overwrites them.
3. **Enumerate the damage:** `python3 tooling/scripts/validate-facets.py`. Every error names a page and the field it must change in; expect a few hundred when a well-used concept moves, spread across all locales.
4. **Script the frontmatter migration** over `content/**/*.md`: read the three affected inline lists (`foundations`, `pedagogy`, `technology`), move the slug, dedupe while preserving order, rewrite the line, and append the field line when the target field was absent. Do not hand-edit hundreds of files.
5. **Re-run `validate-facets.py` until clean**, then `gen-concept-artifacts.py --check`.
6. **Run the changed-page gates before the full suite** (`audit-article-sections.py --changed`, `check-concept-first-mentions.py --changed`, `verify-number-grounding.py --changed`, `check-ai-disclosure.py --changed`, same-text pipes, US English). The suite takes ~15–25 minutes; iterating against it is the expensive mistake.
7. Commit, then run the full suite once on the committed tree.

## Fallout to budget for

A migration marks every touched page as changed, so `--changed` gates audit pages last edited months ago and surface **pre-existing** defects that have nothing to do with the move:

- **Unlinked first mentions** — a page declares a concept in frontmatter but never links it at first use. Fix by wrapping the first occurrence inside the `> **Synthesis:**` blockquote with `[[slug|display]]`, preserving the original wording and capitalization. The display phrase is often not the slug (`ai-literacy` for "AI competence", `technology-acceptance-model` for "theory of planned behavior").
- **Over-budget articles** — reported as notes, not hard failures; do not restructure someone's article to satisfy a reorg.
- **Numbers absent from the raw record** — usually a truncated `pdftotext` extract. Re-fetch the open-access full text, append it to `raw/papers/<slug>.md` under a `## Full text (publisher HTML, retrieved <date>)` heading, and re-run grounding. Raw files are gitignored, so this fixes local gates without adding to the commit.

## Pitfalls

- **Do not grep-replace a slug across the registry.** The same slug can appear in a group list, an aliases list, and a redirects map; a blind replace corrupts the concept entry. Match the item line (`    - <slug>`) and edit by position.
- **A removed group must lose its label.** Leaving `- label: Theories and frameworks` with no items renders an empty sidebar heading.
- **Verify the move in the generated output, not the registry.** Grep the group line in `src/data/conceptIndex.ts` — that is what the sidebar reads.
- **Inline lists only.** The migration script parses `field: [a, b]`; the corpus has no block-style facet lists, but check before assuming.
- **Facet errors name the page, not the mapping.** Read `facetVocab.ts` for which section owns the slug rather than guessing from the concept's topic.
