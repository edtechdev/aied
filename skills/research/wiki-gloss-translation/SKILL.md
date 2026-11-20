---
name: wiki-gloss-translation
description: "Use when translating English glosses on locale wiki pages."
version: 1.0.0
author: hermes-agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [i18n, wiki, gloss, translation, parity]
    related_skills: [content-page-locale-refresh, scripted-file-editing, wiki-editorial-conventions]
---

# Translating connected-list glosses on locale concept pages

## When to Use

- A bucket/brief assigns leftover English glosses on existing locale concept pages (e.g. pt gloss buckets).
- Not this skill: whole-page staleness refresh (content-page-locale-refresh) or UI string modules (copy-module-translation-refresh).

Glosses are the text after the em dash in `- [[slug]] — gloss` / `- [[slug|display]] — gloss`
lines. The leftover-English detector flags a gloss when it is BYTE-IDENTICAL to the English
page's gloss for the same slug — so verification is "no listed gloss still equals its EN twin",
not "no English word appears".

## Conventions (confirmed against de/ko twins)

- Translate the gloss even when it looks like a paper title; keep the `[[slug]]` target, any
  `|display`, the `—`, the leading `- `, author-year parentheticals (including internal
  "and"/"&"/"et al."), and product/system names byte-identical.
- Field acronyms stay in Latin when the twins keep them: SDT, SEL, NLP, SDG 4, AES, TPACK,
  ICAP, EAIL, ACB. Do not swap in locale expansions the page prose happens to use elsewhere.
- Statistical units and policy acronyms follow the PAGE's established prose terminology
  (pt intelligent-tutoring uses DP, PEI, "aprendizes de inglês" where EN has SD, IEP, EL);
  decimal commas and pt thousands dots (29.064) are fine.
- Product-name-ONLY glosses (e.g. `— REMind`): de keeps them bare, ko adds a translated
  descriptor. To satisfy "translate every entry" against the byte-identity detector, use the
  ko pattern: keep the name, add a concise descriptor grounded in the page's own prose
  (`REMind: dramatização mediada por robô para prevenção do bullying`). Flag this choice in
  the report.
- Reuse existing sibling glosses verbatim when the same article is already translated on
  another page of the same locale (e.g. the AIvaluate gloss).

## Safe edit procedure

1. Read the bucket JSON and every target page; run the parity gate per page BEFORE editing
   to establish the 0 failing / 0 warning baseline.
2. Build a page→slug→new-gloss map; assert it covers the bucket exactly (count included).
3. Script: match `^(- \[\[slug(?:\|[^\]]*)?\]\] — )(.*)$`, require EXACTLY ONE line whose
   gloss equals the bucket's old gloss; replace only the gloss; atomic write (tmp +
   os.replace); then re-read from disk and verify per item.
4. Structural guards: same line count; diff index set == targeted index set; every changed
   line keeps its prefix byte-identical; every non-targeted line (frontmatter, stamps,
   prose) unchanged.
5. Verify: parity gate per page still 0/0, plus an independent re-parse comparing each pt
   gloss to its EN twin (none byte-identical) and to the intended translation.

## Pitfalls

- "Old gloss gone" checks must use LINE EQUALITY, not substring containment: when the new
  gloss extends the old one (product name + `: descriptor`), the old line is a substring of
  the new line and a substring assert false-fails AFTER the write already landed.
- A batch script that raises mid-loop leaves earlier pages applied (scripted-file-editing
  Pitfall 0). Make the script re-entrant: entries already carrying the new gloss are
  verified, not re-matched against the old gloss, so a re-run finishes the remaining pages.
- Do not restamp `updated`/`source_updated`; the parent handles stamps. No git/npm/astro.
