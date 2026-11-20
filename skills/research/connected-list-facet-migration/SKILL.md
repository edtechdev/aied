---
name: connected-list-facet-migration
description: Use when editing connected Concepts/Articles lists.
metadata:
  <AGENT_KEY>:
    tags: [wiki, astro, migration, gates, connected-lists]
---

# Connected Concepts/Articles are frontmatter facets, not body sections

Since the 2026-11-19 migration (`da9a36a91`), the closing Connected Concepts / Connected
Articles lists live in frontmatter facets `connected_concepts` / `connected_articles`
(slug arrays) on concepts, articles, FAQs and resources, in every locale. They render via
`ConnectedList` from each target's own localized title — like connected FAQs/resources/
podcasts/videos. **The em-dash gloss prose is gone; do not re-add body lists or glosses.**

## When to Use
- Adding/removing a connected concept or article on any page: edit the facet array, not the body.
- A gate or exporter seems to miss connected Concepts/Articles: it must read the facet.
- Running a large mechanical refactor that touches many pages.

## How it is wired
- `src/content.config.ts`: `connected_concepts`/`connected_articles` accepted on all 5 collections
  (string arrays, no existence refine — missing targets skip at render).
- `TranslatedPage.astro` + `src/pages/{concepts,articles,faqs,resources}/[slug].astro`: render the
  facet lists with headings from `src/i18n/sectionHeadings.ts` (`CONNECTED_HEADINGS`), add TOC
  entries; article JSON-LD reads the facet.
- `tooling/build-epub.py`: renders facets with localized headings; concepts anchor to chapters,
  articles link out to the live site (articles are not EPUB chapters).
- Parity + concept-integration gates read the facets. `generate-llms-files.py`,
  `check-translated-headings.py`, `check-concept-screen.py`, `check-resource-wiring.py` auto-adapt.

## Refactor-aware gate scoping (do not remove)
`tooling/scripts/connected_migration.py` detects pages whose ONLY change vs HEAD is this
migration (narrative byte-identical once connected sections/facets are normalized). The
changed-page gates (parity, concept-screen/prose/first-mentions, summary-plain-language,
self-reference) skip those pages. Rationale: a structural refactor that preserves narrative
cannot introduce the prose/parity defects those gates check, so it must not be blocked by
pre-existing backlog in untouched content. The test is conservative — any real narrative or
frontmatter edit disqualifies a page. If you add a new changed-page gate, wire the same filter.

## Pitfalls
- Resources used an INLINE comma-separated wikilink list for Connected Concepts, not bullets;
  any extractor must pull every `[[target]]` in the section, not just `- [[…]]` lines.
- Extraction must apply the ENGLISH-canonical slug list to every locale twin so facets stay
  byte-identical (parity compares them).
- `astro build` gets SIGTERM (exit 143) when run as a terminal BACKGROUND process; run it in the
  FOREGROUND with `NODE_OPTIONS=--max-old-space-size=6144` (fits the 600s cap, ~8 min). Default
  heap OOMs `astro check`.
- `build-epub.py` needs `pikepdf`, present in `<PYTHON>` but NOT AI agent venv python
  (which also lacks pip). Run offline builds with `<PYTHON> tooling/build-epub.py --locale <code>`.
- Pre-existing locale drift (e.g. cognitive-surrender numbered list, learning-design missing
  `repertoire`) is backlog for the normal locale-refresh passes, not the migration's responsibility.
