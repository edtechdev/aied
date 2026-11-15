---
name: corpus-taxonomy-refinement
description: "Use when a corpus taxonomy needs new values or splits."
version: 1.0.0
author: hermes-agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [wiki, taxonomy, metadata, concept-pages, facets]
    related_skills: [wiki-page-kind-curation, wiki-concept-page-design, wiki-taxonomy-reorganization]
---

# Refining a corpus taxonomy

Use when a closed metadata vocabulary needs a new value, when an umbrella concept page must split into
narrower pages (education levels, subject areas, learner types), or when metadata values need to point
at concept pages. The work is mechanical in the registry and editorial in the pages; do the registry
first so the vocabulary is valid before any page is written.

## 1. Decide the terms by the evidence, not by local habit

Title a page with the term the literature and the international standard use (ISCED for education
levels), and keep regional synonyms as aliases so local readers still land on it. For education: use
**primary education** and **secondary education** as titles, with elementary school, high school,
middle school and junior high as aliases. A US-only title splits an international corpus badly.

Ask before splitting on a number alone. The test is coherence: does the band support claims that
would be false or useless at the parent level? A band with 66 studies of early literacy, adaptive
tutoring nulls and children's trust in chatbots justifies a page; a band with 30 heterogeneous studies
that only vary by sample does not. Do not invent a threshold, and do not defend one you invented once
the evidence contradicts it.

## 2. Registry first, pages second

1. Add each new concept to `concepts.registry.yaml` under `concepts:` (title + aliases) and to the
   right group under `sections:`.
2. **Aliases are global.** Check for collisions before adding any: run `python3
   tooling/scripts/check_concepts.py` — it reports "alias 'x' claimed by both 'a' and 'b'". Move the
   alias off the umbrella rather than duplicating it. Before moving, grep for existing `[[alias]]`
   links; if any exist they retarget, which is usually what you want — say so in the commit.
3. Regenerate the derived views; never hand-edit them:
   `python3 tooling/scripts/gen-concept-artifacts.py` writes `src/data/conceptIndex.ts`,
   `conceptAliases.ts`, `facetVocab.ts`, `metadataLinks.ts` and `tooling/concept-index.md`. Re-run and
   confirm every file reports ok.

## 3. Metadata value to page mapping

`level` values are linked to concept pages only by an exact slug match, so `secondary` and `middle
school` stay plain text unless the generator knows them. Map them in the generator, not in the
checked-in output: add a `LEVEL_VALUE_SLUGS` dict in `gen-concept-artifacts.py` and branch on it before
the `LINK_EXACT_ONLY` skip. Two values may map to one page (middle school and secondary both to
Secondary Education) when the page deliberately covers both.

## 4. Write the pages, in parallel, with a brief file

Four band pages from 60-200 articles each is a fan-out job, not a serial one. Write a brief file
containing: the path to a per-band evidence JSON (`slug`, `title`, `syn`), the frontmatter template,
the section order, the voice rules, the sibling slugs to cross-link, and the exact validation
commands. Dispatch one subagent per page with the brief path and the output path. See
`references/band-page-brief.md` for the brief that worked.

Then validate what children get wrong: facet *placement* (a child put `formative-assessment` under
`pedagogy` instead of `assessment`), registry alias duplicates, and links to sibling pages that were
still being written. Run `validate-facets.py` and `check_concepts.py` before believing a child's "all
checks green".

## 5. Delineate the umbrellas

Every new sub-page needs prose, not just a Connected Concepts bullet, in each page it subdivides:

- the parent page gains a short section naming each child page and what it adds beyond the parent;
- the meta page (the field's top umbrella) announces the split in one sentence;
- the level-comparison page lists every band page with its scope;
- each child links back to its siblings and to the parent.

## 6. Tag the backlog only where the prose says so

Pages carrying the umbrella value but no band are the backlog. Tag by explicit phrases in the page's
own body, require at least two mentions of a band before adding it, and leave the rest unbanded. Report
the untouched count; an honest "299 pages name no band" is better than 299 inferred tags.

## 7. Gate before commit

Run `validate-facets.py`, `check_concepts.py`, `check-concept-prose.py`, the list-formatting check,
`check-us-english.py`, `check-concept-first-mentions.py`, then the build. Touched *articles* also run
number grounding, which surfaces pre-existing defects: revert the tag on those pages, commit the rest,
and name the blocked slugs with their failing figures.

## Pitfalls

- **Do not hand-edit generated files.** `metadataLinks.ts`, `conceptIndex.ts`, `facetVocab.ts` and
  `concept-index.md` are output; a hand edit disappears on the next regeneration.
- **A new page needs its sibling links written last.** Children drafting in parallel cannot see each
  other's files; verify the cross-links after all of them land.
- **Renaming a slug is a separate, expensive operation** (translations, redirects, ~120 files).
  Retitling and rescoping a page keeps its slug; prefer that when only the scope changed.
- **The old page's aliases must move with the scope.** A page rescoped to early childhood must drop
  elementary/primary aliases, or the new primary page inherits a competitor.

## References

- `references/band-page-brief.md` — the subagent brief for drafting parallel band pages.
- `references/level-value-mapping.md` — how the generator links metadata values to concept pages.
