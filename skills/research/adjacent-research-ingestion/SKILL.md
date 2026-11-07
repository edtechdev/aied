---
name: adjacent-research-ingestion
description: "Use when ingesting AI research outside education."
category: research
version: 1.0.0
author: AI agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [wiki, ingestion, adjacent-research, evidence-context, editorial-policy]
    related_skills: [paper-batch-ingestion, concept-weave-screening, wiki-article-page-skeleton]
---

# Ingesting adjacent AI research

Use when a paper is about AI, learning, or human behavior but was not conducted in an educational setting, and the question is whether it belongs in an education knowledge base. The repo policy is `<WIKI>/docs/adjacent-research.md`; this skill is the execution path.

## First rule: do not equate topic overlap with relevance

An adjacent study earns a public surface only when it bears on a concrete education decision. A study is not in scope because it is about AI, because its authors mention education, or because a popular summary says it could matter. It is in scope when the mechanism, population, task, or technical result connects to a teaching, assessment, tool-design, or policy decision.

## Classify before drafting

Record a disposition before starting an article page:

- **Tier 1: article plus selective weave.** Credible, important, distinctive finding; defensible educational mechanism; enough full text to summarize accurately. Use the ordinary article collection. Screen concepts and FAQs; change only pages whose claims move.
- **Tier 2: citation only.** Reliable and relevant, but corroborates or modestly qualifies an existing explanation. Add a direct citation to the original publication in the concept prose and, where present, the concept's Citation section. Do not invent an internal article slug.
- **Tier 3: backlog or exclude.** Weak, speculative, duplicative, unverified, or tenuously educational. Record the reason and a reconsideration trigger; do not publish.

Tier 1 requires all four answers: what connects the mechanism to education, how reliable the study is, what new evidence it adds, and what decision or research question could change. If one cannot be answered, downgrade the tier.

## Evidence boundary

Keep three things separate in every public summary:

1. What the paper actually measured: setting, population or model, task, comparison, measures, results.
2. What may follow for education: the mechanism or application, explicitly marked as an inference when it was not measured in an educational setting.
3. What is still untested: the educational outcomes, populations, or settings the source never studied, plus alternative explanations.

A rigorous laboratory or workplace study is not evidence of a classroom learning effect. Write "may", "could", or "warrants testing" for unverified transfers; do not weaken the source's actual finding.

## Tier 1 article shape

Keep the canonical article skeleton: Synthesis, Key Findings, three or four body sections, What this means for practice, Limitations, Citation last. Within that structure:

- State the original setting, sample, design, and results.
- Put the education bridge in prose, not only in a practice bullet. Name the decision, design, or research question.
- State what the study does not establish and what validation would be needed.
- Add practical guidance by role only where the source supports a distinct implication.
- Set `evidence_context: non_educational` or `mixed` in frontmatter. A study that actually measured education uses `educational`. Absence on a legacy page means unclassified, never educational.

The article template renders a reader-facing note automatically from `evidence_context`; do not add a manual warning banner.

## Do not create one page per cited study

A cross-disciplinary review or source map is a discovery aid, not a mandate to ingest every citation. Store the full text and a private source card, then publish only the Tier 1 summary or bridge review that earns a page. For many studies in one theme, one theme-level synthesis is usually better than a stack of thin article pages. Do not create a parallel content collection or duplicate article routes.

## Tier 2 citation route

Concept prose may cite an external DOI, publisher, or arXiv link directly. Preserve author, year, title, and a resolvable identifier; qualify the educational transfer in the same or next sentence. Never create a fake `[[article-slug]]` for a source without a page, and do not make a FAQ the only home for the evidence.

## Verification

Run the repo gates and tests that enforce the metadata and article shape:

```bash
python3 tooling/scripts/check-evidence-context.py
python3 tooling/scripts/check-concept-screen.py --changed
python3 tooling/scripts/audit-article-sections.py --changed
python3 tooling/scripts/verify-number-grounding.py --changed
python3 tooling/scripts/run-gates.py --changed
npm run test:evidence
npm run test:build
```

A full site build is long. Let it finish or verify the completed log, then check `dist/<section>/<slug>/index.html` and the live route; a timed-out wrapper is not evidence that the render failed. Confirm that a `non_educational` page renders the note and that an unclassified legacy page does not.

## Pitfalls

- **Editing an existing article reopens its screen.** `check-concept-screen.py --changed` re-evaluates the whole candidate set. A concept already in the page can surface as undecided because the old record omitted it. Add it to `integrated:` with the existing narrative evidence; do not write a duplicate paragraph.
- **Do not use `confidence` as a proxy for transfer strength.** A high-confidence summary of a rigorous non-educational study can still have a speculative education bridge. Record the context separately.
- **Do not publish an AI-generated literature summary as a source.** Verify the underlying paper, version, correction or expression of concern, and exact setting before writing. A contested study stays in the backlog until the record is resolved.
- **Do not omit the field on a new article.** The gate requires it from the configured date; adding a field to a legacy page is allowed but must not be inferred for the whole corpus.
- **Do not add the field to a concept, FAQ, or resource.** It is article-only and the gate rejects leaks; Zod would otherwise strip it silently.
