---
name: wiki-gloss-translation-buckets
description: "Use when translating wiki gloss buckets in a locale."
category: research
version: 1.0.0
author: hermes-agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [i18n, translation, gloss, parity, wiki]
    related_skills: [locale-parity-audit, wiki-link-display-text, scripted-file-editing]
---

# Translating gloss-translation buckets

## When to Use

A parent dispatches a JSON bucket of `{page, entries:[{slug, gloss}]}` leftover-English
glosses to translate in an existing locale's concept pages (`content/<loc>/concepts/<slug>.md`).
Glosses are the descriptive labels after the em dash in `- [[slug]] — gloss` connected-list lines.

## Procedure

1. **Audit before editing.** Script: for each entry, regex `^(- \[\[slug(\|[^\]]*)?\]\] — )(.*)$`
   and require exactly one line whose gloss equals the bucket text byte-for-byte. Report any
   zero/multi-match entries instead of guessing. Same slug can appear on several pages with
   different glosses — key everything by (page, slug).
2. **Mine the corpus for terminology first.** Grep the target page's own prose for the constructs
   in the glosses (e.g. productive failure/struggle, scaffolding, literacy terms, trial/RCT wording,
   SD→DP, clusters). The page's own renderings win over generic dictionary choices. Then grep the
   whole locale for the same article slugs: **if a twin page already translated the identical
   English gloss, reuse that translation verbatim** — cross-page consistency is the point.
3. **Names stay, descriptions go.** Keep product/system/pipeline names the locale prose already
   keeps in Latin (e.g. CoLearn, CODE-GEN, Generate-Then-Validate, Presumed Effective, Socrates
   went Nuclear), author-year parentheticals byte-identical, acronyms (TPACK, SAMR, PISA, GCSE,
   GRE, K-12, L2, MCQs if the page uses them). Translate title-like glosses otherwise. Figures keep
   their values; locale decimal comma is fine (18.2% → 18,2%, 0.37 SD → 0,37 DP).
4. **Apply with line-level invariants, never fuzzy replace.** Script per page: match the exact
   `prefix + English gloss` line, replace only the gloss part, then assert: line count unchanged,
   every non-target line byte-identical, every target line keeps its exact prefix. Dry-run first,
   then `--apply`. This makes frontmatter/stamp damage structurally impossible.
5. **Verify three ways.** (a) Baseline parity BEFORE editing and after:
   `python3 tooling/scripts/check-translation-parity.py --page <slug> --locales <loc>` must stay
   `0 failing, 0 warning(s)` — glosses are not gated, so any change means you broke structure.
   (b) Independent on-disk re-read: no bucket English gloss remains after any `]] — `, and each
   new gloss appears exactly once on its slug's line. (c) Spot-read a few connected sections.

## Pitfalls

- Glosses also hide in `## Conceitos conectados` (concept-name glosses), not just article lists —
  match by slug+gloss, not by section.
- Concept-name glosses should match the target concept page's locale title or the page prose's
  display label (they can differ; prefer the hosting page's own usage).
- Do not restamp `updated`/`source_updated`, do not run git/npm/astro, do not touch other pages.
- Bucket gloss text can differ subtly from the page (trailing spaces, casing) — exact-match audit
  catches it; never "repair" the source line to make it match.
