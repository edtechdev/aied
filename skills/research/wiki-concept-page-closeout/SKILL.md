---
name: wiki-concept-page-closeout
description: "Use when shipping a new wiki concept page."
category: research
---

# Wiki concept-page closeout

Use after a concept page has been approved, or when an ingest creates one: this is the execution half that gets the page registered, linked, screened, and through the gates. The decision of whether the page should exist, scoping it against an umbrella, and the narrative-weave significance test belong to `wiki-concept-page-design` and `wiki-concept-narrative`.

## Procedure

1. **Confirm the cluster and slugs before writing.** Check every Tier-1 article slug and every concept slug you plan to link against the registry or existing pages. A concept page should anchor a real cluster, not one new paper plus a reading list.
2. **Write the page in the concept shape.** Frontmatter, `> **Synthesis**:`, `## Questions to Consider`, `## Introduction`, themed H2 sections, `## Common Misconceptions` where supported, `## Connected Concepts`, `## Connected Articles`. Concept pages do **not** carry a `## Citation` block; article pages do.
3. **Add provenance to any page created on/after the disclosure cutoff.** `contributors: [editor]` and an `ai_assist` entry with a registered `model`, a permitted `role`, the `date`, and `agent: hermes-agent` are required. Missing either makes `check-ai-disclosure.py` fail even when every content gate is green.
4. **Register once, then generate every derived view.** Add the slug and its `title`/`aliases` under `concepts:` in `concepts.registry.yaml`, and add the slug to the correct group under `sections:`. Run:

   ```bash
   python3 tooling/scripts/gen-concept-artifacts.py
   python3 tooling/scripts/gen-concept-artifacts.py --check
   ```

   Do not hand-edit `src/data/conceptIndex.ts`, `conceptAliases.ts`, `facetVocab.ts`, `conceptRedirects.ts`, `metadataLinks.ts`, or `tooling/concept-index.md`; they are generated from the registry and manual edits are overwritten. `run-gates.py --changed` reports these as "not run", so run `check_concepts.py`, `gen-concept-artifacts.py --check`, `validate-facets.py`, and `check-concept-first-mentions.py --changed` explicitly.
5. **Make reciprocal links inline, not append-only.** Put the new concept link into a natural sentence on each connected concept page and Tier-1 article. On an article page, replace an existing occurrence of the relevant noun with a piped wikilink when possible. Appending a `See also` paragraph adds words and can push a page over the 750-1,750-word audit budget; editing an existing sentence does not. Every article listed in the concept page's `## Connected Articles` must also be linked in that concept page's narrative, or `check-concept-integration.py` flags it as a bare listing.
6. **Record the article screen with the exact reason syntax.** In `concept-screen.yaml`, each integrated slug needs its own clause in the `reason` field: `<slug> ("<grep term>" N): was missing <the gap>`. The gate looks for the slug and the phrase `was missing` within the next 320 characters. A `no_change` for a declared discipline or level page also needs a page-specific grep count next to that slug.
7. **Gate in two passes.** First `python3 tooling/scripts/run-gates.py --changed`; then the registry/corpus checks it skips. Finish with `NODE_OPTIONS=--max-old-space-size=8192 npx astro check` for schema and link-shape errors.
8. **Build and inspect the real routes.** A full build on this corpus can exceed a foreground tool window; run it in the background or with a log, confirm the log ends with the Pagefind/build completion rather than a timeout, then run `node generate-sw.mjs` if the build command did not reach it. Article canonical routes are `/articles/<slug>/`; `/pages/<slug>/` is a redirect. Concept routes are `/concepts/<slug>/`.
9. **Commit locally; do not push without explicit permission.** The standing rule is stricter than the usual wiki workflow: commit the content, generated artifacts, and log, then report the commit and ask.

## Pitfalls

- **`methods:` is a concept-facet field, not the research design.** It takes a concept slug such as `qualitative-research`; the design term goes in `research_method:` such as `theoretical analysis`. A conceptual article usually omits `methods:` entirely. `methods: [theoretical analysis]` fails `validate-facets.py`.
- **A conceptual paper needs the no-data notice.** Put an italic sentence after the synthesis saying the paper presents no data of its own, and describe figures it cites from other studies as attributed claims. Do not let a framework proposal read as an outcome study.
- **A page over budget is not fixed by adding a link.** If an article is already near 1,750 words, appending even a short reciprocal-link line makes the audit report it. Use an inline replacement instead.
- **`run-gates.py --changed` is not the whole gate suite.** It intentionally skips registry and corpus checks; a green scoped pass is not proof that the generated concept index, aliases, or facet vocabulary are current.
- **A build that times out may still have completed most of the site.** Check the log and the actual `dist/articles/...` and `dist/concepts/...` files before rerunning; then run the missing service-worker step separately. Do not report a build as failed solely because the wrapper timed out.

## Relationship to other skills

- `wiki-concept-page-design` decides whether to create and how to scope the page.
- `wiki-concept-narrative` governs the significance screen, weave length, and screen record.
- `paper-batch-ingestion` governs source classification, archiving, and batch weaves.
