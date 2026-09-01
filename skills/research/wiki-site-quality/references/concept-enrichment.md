# Concept Page Enrichment (deepen an existing concept)

Repeated request ("Can you enrich the X concept page further"). Unlike ingestion, this
improves an EXISTING page by synthesizing the wiki's own research under new themes.
Pair with `references/concept-merge-workflow.md` for the sibling merge operation.

## Workflow

1. **Inventory the domain.** `grep -rln "tags:.*<concept-slug>" articles | wc -l` tells you
   how much material exists — often 40–60+ articles for a major concept, far more than the
   page currently references. List the slugs.
2. **Read representative articles per theme** (blockquote summary + Key Findings are usually
   enough). Group them into 4–7 themed subsections: applications, curriculum/transformation,
   literacy/agency/risk, equity/access, ethics/workforce, practical guidance, connections.
3. **Rewrite the page** from ~3KB to ~10–12KB. Ground EVERY claim in a wiki article via
   `[[slug|display]]`. Add a "Practical guidance for <educators>" section with article-backed
   bullets — the wiki maintainer values actionable, source-grounded advice.
4. **Expand Connected Concepts and Connected Articles** to reflect the newly covered themes.
   Verify every linked concept slug exists (`[ -f concepts/$c.md ]`).
5. **Verify all article slugs resolve** before committing — extract `[[slug]]` from the body
   and stat each against articles/ + concepts/. Fix any typo'd slug (0 broken links).

## Rules

- Enrichment content must be grounded in the wiki's OWN articles — never invent findings.
  When a synthesized claim is supported by a paper, link it.
- Bump the concept page's `updated` timestamp (full quoted ISO, e.g.
  `"2026-08-18T10:00:00-04:00"`) after the edit.
- Build + deploy verification is identical to the merge workflow's Verify + deploy steps:
  `npm run build` green → commit → push → confirm BOTH GitHub Actions workflows succeed →
  live-check the concepts URL.
- Concept URLs are `/aied/concepts/<slug>/`; `/aied/pages/<slug>/` is only a redirect stub
  to the concept route — verify against the concepts path, not pages.
