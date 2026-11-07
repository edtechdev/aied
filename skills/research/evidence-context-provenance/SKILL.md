---
name: evidence-context-provenance
description: "Use when adding evidence-context provenance to pages."
category: research
version: 1.0.0
author: AI agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [wiki, provenance, evidence-context, adjacent-research, schema]
    related_skills: [adjacent-research-ingestion, paper-batch-ingestion, wiki-article-page-skeleton]
---

# Evidence-context provenance

Use when a knowledge base must distinguish evidence collected in the target setting from evidence borrowed from another setting, or when an existing article needs a reader-facing provenance note. The policy is in `docs/adjacent-research.md`; this skill is the implementation and retrofit path.

## The contract

`evidence_context` is an **article-only, optional** field with exactly three values:

- `educational`: the study directly investigates the target population, setting, or outcomes.
- `non_educational`: the original evidence comes from another setting; applications to the target setting are inferred.
- `mixed`: the paper actually includes both kinds of investigation.

Absence on a legacy page means **not yet classified**, never `educational`. Keep it separate from `confidence` (how well the claim is supported) and from `discipline` or `level` (what the page is about).

## Implementation

1. Add the field only to the article schema, as an optional enum; do not put it in shared metadata used by concepts, FAQs, or resources.
2. Add a pure helper that maps the value to a reader-facing note. `educational` and absent return no note; `non_educational` and `mixed` return different text.
3. Render the note above the article body, outside the page's manual warning styles. Do not add a second warning banner or a title prefix.
4. Add an editorial gate that requires the field for articles created on or after the configured date, rejects unknown values, and rejects the field on non-article collections. Read the date from pipeline config rather than hardcoding a migration date.
5. Add tests for all three values, absent/legacy, and an unknown value. A full build is the schema compatibility test; also confirm a legacy article renders no note.

## Retrofit an existing non-educational article

1. Set `evidence_context: non_educational` or `mixed`, bump `updated`, and append an `ai_assist` revision entry inside the list, newest last.
2. If the page lacks `## Key Findings`, add the canonical section. A legacy findings heading is not a substitute, and the normal section audit does not catch its absence.
3. Make the education bridge explicit in a body section that states the mechanism and what remains untested. Count it among the 3-4 body sections; do not add a fifth heading or a second Limitations section.
4. Re-run the concept screen with the slug. Editing the article reopens the full candidate set; a concept already in the prose can surface as undecided. Add it to `integrated:` with the existing narrative evidence rather than writing a duplicate paragraph.
5. Stage the article before `--changed` gates. Some scoped checks do not see an untracked page and report that no article changed.

## Verification

```bash
python3 tooling/scripts/check-evidence-context.py
python3 tooling/scripts/check-concept-screen.py <slug>
python3 tooling/scripts/audit-article-sections.py --slugs-file <slug-file>
python3 tooling/scripts/verify-number-grounding.py <slug>
python3 tooling/scripts/run-gates.py --changed
npm run test:evidence
npm run test:build
```

After the build, confirm the note in the rendered page and confirm an unclassified legacy page has none:

```bash
grep -o 'Research conducted outside educational settings[^<]*' dist/articles/<slug>/index.html
curl -s -o /dev/null -w '%{http_code}\n' http://127.0.0.1:4321/aied/articles/<slug>/
```

## Pitfalls

- **Never infer a classification from silence.** A legacy page without the field is unclassified; do not display an "educational" label or backfill thousands of pages without a demonstrated need.
- **Never add the field to concepts, FAQs, or resources.** Zod strips unknown keys silently, so the page would look classified while the field is discarded; the gate must reject the leak.
- **Do not use `confidence` as a proxy for transfer strength.** A rigorous non-educational study can still have a speculative application.
- **Do not draft from an abstract.** If full text cannot be downloaded, send the maintainer the canonical DOI or arXiv link and stop.
- **Editing an existing article can expose an old screen gap.** Repair the record from the page's existing narrative; do not add a duplicate paragraph just to satisfy the gate.
