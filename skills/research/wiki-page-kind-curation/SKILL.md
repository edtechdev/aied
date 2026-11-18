---
name: wiki-page-kind-curation
description: "Use when labelling or relabelling wiki pages by page_kind."
version: 1.0.0
author: hermes-agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [wiki, taxonomy, page-kind, pagefind, metadata]
    related_skills: [wiki-article-page-skeleton, wiki-batch-ingestion-qa, wiki-editorial-conventions]
---

# Curating `page_kind` across a corpus

Use when adding a value to `page_kind`, when a batch of new pages needs its kind set, or when asked to
find pages filed under the wrong kind. `page_kind` answers what a page IS, and it is both a search
filter and a metadata row, so a wrong value is a retrieval defect, not a style preference.

## The five values and how to choose

- **`design case`** — the paper describes and reflects on the design of an instructional
  intervention: a course, workshop, curriculum, activity sequence or course policy. IJDL articles are
  the archetype. Usually no measured outcome; the reflection is the contribution.
- **`implementation`** — the paper presents a working system, tool or artifact: software, platform,
  simulator, dataset, deployed pipeline. The contribution is the thing built; any study of it is a
  separate claim and does not change the kind.
- **`framework`** — the contribution is a conceptual structure (taxonomy, design rules, model). A
  framework is not an implementation just because a prototype demonstrates it.
- **`evaluation`** — the page's claim is what a study measured about something that already existed.
- **`synthesis`** — the page aggregates other work rather than reporting its own.

Practitioners search for `design case` and `implementation` precisely because those pages give them
something to copy. Filing either as `framework` hides the example behind a word that promises theory.

## Adding a value is a three-file change, then a build

1. `src/content.config.ts` — the `page_kind` `enumList`. `astro check` rejects a frontmatter value
   that is not in it, and the failure appears during the build, not in `validate-facets.py`.
2. `src/i18n/searchLabels.ts` — `PAGE_KIND_VALUE_LABELS`. Without it the search filter shows the raw
   slug (`design case`) instead of `Design case`.
3. `tooling/SCHEMA.md` (the vocab list and the prose that explains the field) and the `page_kind`
   comment in `AGENTS.md`.

Verify on the built page, not in the source: the metadata table renders the title-cased label, and
`grep -o 'page-kind:[^"]*' dist/articles/<slug>/index.html` shows the Pagefind filter value.

## Finding pages that need relabelling

The corpus is large and most pages are correctly labeled; scan for evidence rather than reading
abstracts one by one. Run from the repo root:

- **Self-description.** `grep -rli "design case" content/en/articles/*.md` — a page whose synthesis
  calls the source a design case is one, and the label is usually missing.
- **Title verbs.** Titles beginning `Designing`, `Design and Development`, `Building`, `Prototyping`
  are design cases when the object is a course, workshop, module, policy or activity sequence, and
  implementations when the object is a system or tool.
- **Named systems.** Titles matching `^Name: ...` with `system|platform|tool|simulator|dataset|game`
  and `research_method` including `system development` are implementations unless their own claim is
  what a study measured (leave those as `evaluation`).
- **The unlabeled universe.** Pages with `research_method: [system development]` and no `page_kind`
  at all are the backlog; label the ones whose contribution is unambiguous and report the rest as a
  count rather than guessing.

Label by the paper's contribution, and say in the commit which rule you applied and which pages you
left alone. A sweep that silently relabels a conceptual framework as an implementation costs more
trust than a partial sweep that names its boundary.

## Touching a page surfaces its pre-existing defects

The pre-commit gate suite checks every page you pass to it, so a page with ungrounded numbers or a
missing raw source fails the whole commit for a defect you did not introduce. Do not fix those
numbers from memory and do not weaken the gate: revert the label on that page, commit the rest, and
report the blocked slugs with the failing figures so they can be checked against their PDFs. A
label-only change does not need the concept screen, because no facet changed.

## Pitfalls

- **A batch of new pages is not done until the kind is set.** New articles default to whatever the
  writer typed or to nothing; check `page_kind` on every page of the batch before the commit.
- **`page_kind` is not a topic.** Retired topic values (assessment, policy, design thinking) belong in
  the typed facet fields; the enum is only about the shape of the contribution.
- **Do not infer the kind from `research_method`.** `system development` covers both a course build and
  a deployed tool, and `evaluation` pages routinely build their own instrument.
- **A relabel changes the search index, not the prose.** The build must run before you claim the
  filter works; the HTML meta filter and the metadata row are the two places to check.
