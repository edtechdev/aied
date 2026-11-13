---
name: wiki-editorial-conventions
description: "Use when naming wiki pages or running gates during edits."
category: research
---

# Wiki Editorial Conventions (AIEd corpus)

Standing naming and sequencing rules for the AIEd markdown wiki, learned from user corrections. These complement the deeper `research/wiki-*` skills (concept-page design, taxonomy reorg, ingestion): read those for procedure, read this for the rules the user enforces on the result.

## Name a concept page after the construct, not its setting

- Title a new concept page with the construct itself — `Empathy`, `Feedback`, `Transfer of Learning` — not `Empathy in Education`. Every page in this corpus is already education-scoped, so the qualifier adds nothing and reads like a discipline page (`medical-education`, `business-education`). The user's correction was one line: "Shouldn't the concept page just be called Empathy".
- Slug follows the title (`empathy`), and the setting phrase belongs in `aliases:` (`empathy in education`, `teaching empathy`) so prose links resolve.
- The same test applies to a rename: if the qualifier only restates the corpus, drop it and sweep the slug everywhere (registry key and section item, articles, concept pages, `concept-screen.yaml`), regenerate artifacts with `python3 tooling/scripts/gen-concept-artifacts.py`, then fix same-text pipes `[[x|x]]` the sweep creates.

## A FAQ must own a question the concept pages do not

- Before adding a FAQ, check the existing 40+ FAQs for the same question in different words; the misconceptions FAQ already carries belief-correction, so a new page has to differ in organization or job (e.g. a role-by-role list of practices to stop, as opposed to beliefs to correct).
- Register the page in `src/data/faqIndex.ts` (every FAQ must appear exactly once) and add reciprocal `connected_faqs:` entries on the pages it belongs beside; link the concept pages inside the prose rather than only in frontmatter.
- Role-scoped sections (learners, instructors, faculty developers, software developers, administrators, researchers) beat a flat list when the remedy differs by role.

## Gate hygiene during edits

- `run-gates.py` reads the working tree as it walks. Any edit made while it runs makes its verdict stale and unciteable for the tree you will commit: kill the process (`process_manage kill`), finish the edits, then start one fresh run. It takes 20–25 minutes, so batch edits first.
- Run the `--changed` gates before the full suite; a taxonomy or facet migration marks hundreds of pages changed and surfaces pre-existing defects (unlinked first mentions, over-budget articles, numbers missing from a truncated raw extract) that the full suite would also fail on.
- A number-grounding failure usually means the raw record is truncated, not that the article invented a figure: re-fetch the open-access full text, append it to `raw/papers/<slug>.md` under `## Full text (publisher HTML, retrieved <date>)`, and re-run the gate. Raw files are gitignored.

## Reporting

- State what changed, what was verified (gate names), and what is still running. Do not narrate the procedure.
