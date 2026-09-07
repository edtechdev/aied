---
title: "VARIA: Benchmarking Frontier LLMs on Construct-Equivalent Assessment Variant Generation"
created: "2026-09-07T09:09:07-04:00"
updated: "2026-09-07T09:09:07-04:00"
type: article
tags: [assessment-validity, automated-assessment, generative-ai, llm, academic-integrity, authentic-assessment]
sources: ['raw/papers/varia-construct-equivalent-assessment-variant-generation-2026.md']
confidence: high
---

> **Synthesis:** AI-Integrated Authentic Assessment (AIAA) frameworks propose to replace surveillance-based [[academic-integrity|proctoring]] with per-student task variation — each examinee gets a unique-but-equivalent performance task — but this "no-surveillance" integrity guarantee depends on an unverified capability: that [[llm|LLMs]] can generate variants that are simultaneously surface-distinct, [[assessment-validity|construct-equivalent]], rubric-applicable, and difficulty-matched. This paper introduces **VARIA**, a [[benchmark]] that operationalizes this presumption as four measurable properties of a generated variant set. A pilot of 600 variants across 60 condition cells found frontier models cluster tightly on a composite integrity score (joint 𝒥 = 0.81–0.88) while non-frontier references collapse to 0.50–0.55 — a large capability-tier gap — with [[prompt-engineering|prompting strategy]] selecting an operating point on the diversity-equivalence-readability surface rather than a uniformly best protocol.

## The variation-at-scale presumption

A growing literature on [[authentic-assessment|authentic assessment]] argues that rather than policing the examination room, assessments should be redesigned so copying is structurally useless: each examinee receives an instance of a single competency blueprint, instantiated with different surface details (domain, scenario, jargon, register), so no two students can productively share answers. The AIAA framework delegates generation of these variants to LLMs. But the framework's integrity claim is conditional on a capability that had never been directly benchmarked: whether LLMs can generate variants that are surface-distinct *and* construct-equivalent, rubric-applicable, and difficulty-matched. If they cannot, "variation-at-scale" is a fig leaf and the no-surveillance guarantee collapses.

VARIA closes this gap by formalizing the hypothesis as a four-property capability claim and measuring it directly:

- **P1 — Surface diversity** sufficient to deter copying (pairwise TF-IDF cosine and n-gram overlap).
- **P2 — Construct equivalence** on the underlying competency (LLM-judge score).
- **P3 — Rubric applicability** across surface variation (deferred to a pre-registered follow-up).
- **P4 — Difficulty parity** across surface features (readability dispersion).

## Benchmark design and findings

VARIA instantiates three competency-based blueprints from applied AI and data analytics (an audit-style performance task, a data-pipeline [[bias-mitigation|bias]] investigation, and a [[stakeholders|stakeholder]]-communication task) — chosen because they require open-response performance rather than closed-form answers, stressing the rubric-applicability constraint that template-based [[automated-question-generation|item generation]] evades. It evaluates three frontier model families (Claude Opus 4.7, GPT-5.5, Gemini 3.1 Pro) across four prompting strategies (zero-shot, few-shot with anchor examples, structured chain-of-thought, dimension-preserving constrained generation), plus two non-frontier references (Llama 3.2 3B Instruct, GPT-2 small) and two ablations.

Key results from the pilot (600 variants, 60 condition cells):

- **Capability-tier separation:** frontier strategies cluster tightly (joint 𝒥 = 0.81–0.88 on strategy means; individual cells 0.70–0.90), while both non-frontier references collapse below 𝒥 = 0.55 — a twenty-five-to-thirty-one-point gap establishing the benchmark's discrimination. Llama 3.2 3B Instruct follows instructions but produces near-duplicate variants (cosine ~0.51 vs. ~0.05–0.10 for frontier); GPT-2 small achieves near-zero construct equivalence.
- **Prompting strategy selects an operating point:** structured chain-of-thought and zero-shot maximize construct equivalence (0.96–0.97) with tight readability dispersion; dimension-preserving constrained generation and few-shot anchoring maximize surface diversity (cosine ≈ 0.05) at the cost of readability dispersion. No single strategy dominates all four dimensions simultaneously — a diversity-equivalence trade-off the authors chart as a Pareto frontier.
- **Measurement caveats:** the LLM judge uses a single coarse set-level score, so equivalence differences among the strongest frontier strategies are near the instrument's resolution limit; rubric stability (P3) and behavioral copy-resistance remain for the pre-registered follow-up.

## Implications for AIAA and assessment

The authors release VARIA and recommend a generation protocol keyed to the deploying institution's threat profile. Two substantive conclusions follow: **variation-at-scale cannot be solved by prompting alone** if the diversity threshold is set aggressively — readability and construct-equivalence floors will eventually be breached together — and a deploying institution should **validate its specific model-prompt pair** rather than relying on strategy-level rankings, given the real model-by-prompt interaction at the cell level. The benchmark reframes the [[ai-detection|detection-vs-redesign]] debate: the no-surveillance promise of [[authentic-assessment|per-student task variation]] now has an empirical, falsifiable check, and the strongest frontier generators currently satisfy the integrity criteria at the margin rather than with wide headroom.

## Connected Concepts
- [[assessment-validity]]
- [[automated-assessment]]
- [[academic-integrity]]
- [[authentic-assessment]]
- [[generative-ai]]
- [[llm]]
- [[equity-in-ai-education]]

## Connected Articles
- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the quality of AI-generated exams: a large-scale field study
- [[roe-assessment-twins-2026]] — Assessment twins for strengthening assessment validity in the age of GenAI
- [[biology-grade-vulnerability-genai-2026]] — Vulnerability of biology course grades to AI-mediated dishonesty
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond Detection: Authentic Assessment in an AI-Mediated World
- [[bozkurt-ghost-students-agentic-ai-2026]] — Ghost students and the agentic-AI verification gap
- [[ai-agents-complete-lms-assessment-validity-2026]] — AI agents completing LMS tasks; human-production assumption & agentic validity
- [[ai-assessment-scale-reform]] — The AI Assessment Scale and Assessment Reform

## Citation
Lee, E. (2026). [VARIA: Benchmarking Frontier LLMs on Construct-Equivalent Assessment Variant Generation](https://doi.org/10.35542/osf.io/u6xef_v2). EdArXiv preprint.
