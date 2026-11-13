---
name: wiki-concept-map-curation
description: "Decide whether a construct needs its own concept page."
category: research
---

# Concept-map curation: does this construct need a page?

Use when the user asks "is there sufficient cause for a concept page about X?", "is Y sufficient, or do we need Z?", or when a batch of sources has landed and the cluster may justify a new page. This skill answers that question with corpus evidence and settles the precedent rules. Execution of an approved page (registry, artefacts, weaves, screens, gates) belongs to `wiki-concept-page-closeout`; the upstream prose significance test belongs to `wiki-concept-narrative`.

## Procedure

1. **Count the term family, not one phrase.** Build a case-insensitive regex of the synonyms and the related constructs (`executive function|executive control|inhibitory control|cognitive control|working memory`) and scan `content/en/articles/*.md`. Report how many articles have any hit and how many have three or more; a single phrase undercounts, a keyword total overstates.
2. **Separate the subject from the passing mention.** Name the studies that are *about* the construct — typically two to five, identifiable from title and abstract — and say how many merely use the vocabulary. The dedicated studies are the page's evidence base; the rest are reach.
3. **Test lens versus subject on every page that mentions the term.** Grep the headings and the term across `content/en/concepts/*.md`, then read them. A page that uses the construct inside one section of a broader topic (developmental psychology treating executive function as the mechanism of age-related change) gives it a lens, not a home. A construct held only by lenses across several pages is an orphan.
4. **State the distinguishing claim.** Name the argument the new page can make that adjacent pages cannot. Executive function earned its page on capacity versus regulation (metacognition) and compensation versus development (scaffolding); a construct with no such claim is a restatement and should be enrichment instead.
5. **Answer with the counts and the risk.** Say plainly when volume is thinner than the precedent ("two dedicated studies against that page's thirty-plus framing articles"), scope the page modestly, and say which existing page hands over its section and keeps a pointer.
6. **Check the page exists before citing it as precedent.** List `content/en/concepts/` and read the hub's section. Never assert a construct was "deliberately folded into the hub": a live standalone page (design-based research at ~1,730 words, longitudinal research) is the counter-example, and the user will correct the claim.

## Hub plus deep-dive is the house pattern

A methodology or construct with its own article cluster gets a standalone page, and the hub keeps a short section that summarises and links out. The research-methods hub carries pointers to `design-based-research` and `longitudinal-research` rather than absorbing them; `developmental-psychology` points at deeper pages instead of restating them. Apply the same pattern when a page hands over a section: the hub section shrinks to a sentence plus the wikilink, and the new page carries the argument.

## Pitfalls

- **Do not create a page from one new paper plus a reading list.** The page anchors a cluster; if the cluster is two studies, say so and write a short page, not a long one padded with adjacent theory.
- **A registered facet slug is a screen candidate.** Creating the page makes its slug a valid facet value, so every batch article that now names it needs a `concept-screen.yaml` decision — and the gate reads the `no_change` list, not the reason prose.
- **Do not confuse a level page with a construct page.** `early-childhood-elementary-ai-education`, `special-education` and `higher-ed` are settings; a construct that recurs inside them is not thereby housed.
- **A thin construct page still needs the full shape** — synthesis blockquote, Questions to Consider, Introduction, themed sections, Connected Concepts and Articles, plus provenance (`contributors`, `ai_assist`) when new. Brevity is in the argument, not the skeleton.

## Relationship to other skills

- `wiki-concept-page-design` holds the create-versus-enrich heuristics and the naming-collision rules.
- `wiki-concept-page-closeout` executes an approved page: registry, generated artefacts, reciprocal links, disclosure fields.
- `wiki-batch-concept-integration` covers the cross-file work when a batch produces a page.
- `wiki-gate-suite-triage` covers the gates that fail afterwards.
