---
name: wiki-batch-concept-integration
description: 'Use when a source batch may produce a new wiki concept page.'
category: research
---

# Batch ingestion that produces a concept page

Use when several sources are ingested together and the cluster may justify a new concept page, or when a concept page is created after article prose already exists. This is the cross-file half of the work: the article writers and the concept-page writer can each succeed while the facets, first mentions, screen record, and reciprocal links still fail.

## Procedure

1. **Ingest and archive every source before judging the cluster.** Write the article pages first, with raw text under `raw/papers/`. Do not create the concept page from a reading list or a single new paper.
2. **Count the pedagogical sense separately from the research-method sense.** A term such as `case study` is overwhelmingly a qualitative design; the teaching evidence is in `case-based learning`, `case method`, and `contrasting cases`. Read hits in context and report tiered counts rather than one inflated keyword total.
3. **Decide create vs enrich against the existing concept map.** If existing pages already cover slices, create only a cross-cutting page that explicitly distinguishes the neighboring pedagogy and says what it does not cover. Register it and generate the derived views before editing articles.
4. **Delegated article writers get one article file each.** The parent owns `raw/papers/`, `pdf-sources/`, `concept-screen.yaml`, the registry, facets on existing pages, and reciprocal links. Tell children not to edit those shared files. A child cannot know a concept page will exist later and may attach the idea to an adjacent slug because the correct target is absent; case-based learning linked to problem-based learning is the worked failure.
5. **After the page exists, update the Tier-1 articles.** Add the new slug to the correct typed facet field and replace the first mention with a piped wikilink in the synthesis or opening body. A page that names the concept without linking it fails `check-concept-first-mentions.py` even when its facet metadata is valid.
6. **Screen every batch article against the new page in one parent pass.** Add one entry per article to `concept-screen.yaml`, with the new concept in `integrated` where its findings appear in the page narrative. The reason must contain `<slug> ("<term>" N): was missing <gap>` for every integration; a `no_change` for a declared discipline or level needs a page-specific grep count. The screen file is gitignored but the gate reads it.
7. **Weave the concept into its umbrellas and reciprocal concepts.** Put the link in a natural sentence, not an appended `See also` line. A bare entry in `## Connected Articles` without a narrative mention is a defect under `check-concept-integration.py`.
8. **Run the scoped gates, then the registry checks they skip.** Finish with `run-gates.py --changed`, `check_concepts.py`, `gen-concept-artifacts.py --check`, `validate-facets.py`, `check-concept-first-mentions.py --changed`, and `astro check`. Build the real routes and check `/concepts/<slug>/` and `/articles/<slug>/`, not the `/pages/` redirect stubs.

## Schema pitfalls

- `methods:` takes a concept slug such as `qualitative-research`; the design term belongs in `research_method:` such as `theoretical analysis`.
- `confidence:` is `low`, `medium`, or `high`. `moderate` fails `validate-facets.py` even though it reads naturally.
- Article pages over 1,750 words cannot absorb a reciprocal link by appending a sentence. Replace an existing noun with the wikilink instead.

## Relationship to existing skills

- `wiki-concept-page-design` decides whether the page should exist and how to scope it.
- `wiki-concept-narrative` carries the significance test and weave-length rules.
- `paper-batch-ingestion` carries source classification, archiving, and evidence rules.
- This skill covers the cross-file integration that spans all three.
