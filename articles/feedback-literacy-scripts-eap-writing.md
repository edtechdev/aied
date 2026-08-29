---
title: "Feedback Literacy Scripts and a Second-Rater Mechanism in GenAI EAP Writing Revision"
created: "2026-08-15T19:02:13-04:00"
updated: "2026-08-21T08:50:57-04:00"
type: article
tags: [feedback, ai-feedback-quality, self-regulated-learning, formative-assessment, writing-education, ai-literacy, language-learning, higher-ed, generative-ai, simulation, scaffolding, metacognition]
discipline: [writing education, language learning]
level: [higher ed]

sources: ['raw/papers/feedback-literacy-scripts-eap-writing.md']
confidence: medium
---

## Core Finding

**In generative-AI-supported EAP writing revision, improvement depends less on the amount of feedback available than on whether learners process it through structured decision-making.** Yao (2026) used a large language model–driven classroom simulation (100 synthetic B2-level writer agents) in a 2 × 2 design to test a feedback literacy script (FRAC) and an AI second-review mechanism. The script produced a clear, robust benefit in the initial revision stage (Task 1 gain of 5.75 points; coefficient 7.09; permutation p = 0.0286), but did not raise feedback uptake — instead it redirected revision toward the **argument level**, which was the dimension positively associated with score gain (r = 0.755, p = 0.0304). The second-review mechanism, by contrast, produced no stable benefit.

## Why This Matters

As generative AI floods EAP classrooms with instant, abundant feedback, the pedagogical question shifts from *obtaining* feedback to *processing* it. The paper argues that feedback becomes valuable only when learners can interpret, prioritize, and enact suggestions — a [[feedback|Feedback Loop]] that is cognitive rather than merely informational. Its central claim is that the value of AI in EAP writing should be framed as support for **organized feedback processing** rather than an expansion of feedback quantity.

## Method

- **Simulation design:** 100 B2-level LLM-based writer agents generated under a unified prompt protocol, retaining limited variation in prior AI experience, risk aversion, metacognitive awareness, and revision style. Because participants were simulated, no ethics approval was required.
- **Treatments:** Feedback literacy script (FRAC: identify comments relevant to task requirements, decide which affect argument/organization/evidence, prioritize changes, explain each choice) versus no script; and AI second-review mechanism versus none. Four groups: G1 control (n=40), G2 script only (n=40), G3 second-review only (n=10), G4 both (n=10).
- **Tasks:** Task 1 (baseline + revision), Task 2 (transfer to a new topic, same genre), delayed Task 3 (retention).
- **Analysis:** Revision-gain, revised-score, and delayed-retention regressions with HC3 robust standard errors; exact permutation tests; leave-one-out sensitivity; inter-rater ICC and inter-coder agreement. Unequal cell sizes (small second-review groups) were handled explicitly.

## Key Results

- **Script effect is stage-specific.** The script's effect was concentrated in Task 1 — the first encounter with AI feedback — and weakened in Task 2 (Script × Task 2 interaction negative, e.g. −8.88 in the pooled gain model). The authors interpret this as a shift from externally guided revision to partially internalized evaluative logic.
- **Script changed revision depth, not uptake.** Effective uptake rates were comparable across groups (~41.7–55.1%). But argument-level revision reached 53.3% of G2's Task 1 revision (vs 61.0% sentence-level in G1) and stayed higher in Task 2 (64.3% vs 49.3% G1, 11.0% G4). Argument-level revision was the correlate of score gain.
- **Second-review mechanism did not help.** Adding a second feedback source produced imprecise, unstable estimates (large standard errors) and no reliable outcome improvement — consistent with the idea that multi-source feedback raises comparison and prioritization load.
- **Delayed retention is only directional.** The scripted group scored higher on Task 3 (76.00 vs 72.67), but the permutation test (p = 0.4000) did not support a stable retention effect.
- **Reliability was high:** ICC(2,1) = 0.9907 for scoring, Cohen's κ = 0.992 for uptake coding, r = 0.8219 for argument-depth coding.

## Implications

For [[writing-education]] and [[language-learning]], the study suggests AI-supported revision should be designed not as a feedback-rich environment but as a process in which learners distinguish higher-order issues from surface-level ones and prioritize revision against task demands. Feedback literacy scripts act as cognitive and procedural scaffolds for revision — a concrete instantiation of [[scaffolding]] and [[self-regulated-learning]]. For research, it argues that final scores alone miss how AI revision works; feedback uptake and [[formative-assessment]]-style revision depth must be examined together. The result is a mechanism-oriented contribution to [[ai-feedback-quality]] and [[ai-literacy]] in [[higher-ed]].

## Methodological Notes

Strengths: a clear mechanism-oriented design, design-based tests (permutation, leave-one-out), and careful handling of small cells. Limitations: the design is **simulation-based** with LLM writer agents rather than real students, the second-review groups were small, and results need validation with human writers and across proficiency levels in authentic EAP classrooms. Confidence is accordingly rated medium. The study explicitly frames its value as clarifying a plausible mechanism under controlled conditions rather than replacing classroom evidence.

## Connected Concepts

- [[feedback]]
- [[ai-feedback-quality]]
- [[self-regulated-learning]]
- [[formative-assessment]]
- [[writing-education]]
- [[ai-literacy]]
- [[language-learning]]
- [[higher-ed]]
- [[generative-ai]]
- [[simulation]]
- [[scaffolding]]
- [[metacognition]]
- [[feedback-literacy]]
- [[english-education]]

## Connected Articles

- [[ai-feedback-enactment-workflow-2026]]
- [[ai-generated-feedback-higher-ed]]
- [[feedback-futures-genai]]
- [[care-full-feedback-genai]]
- [[learner-centered-feedback-ai]]
- [[sequenced-ai-feedback-learning]]
- [[aiawe-automated-writing-evaluation]]
- [[cyberscholar-genai-writing-feedback]]
- [[ai-writing-support-stage-ownership-2026]]
- [[self-referential-l2-writing-llm-assessment]]
- [[valid-student-simulation-llm-2026]]

## Citation

Yao, X.-C. (2026). [Effects of feedback literacy scripts and a second-rater mechanism on EAP writing revision in generative AI-supported contexts](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1835593/full). *Frontiers in Psychology*, 17, 1835593. DOI: 10.3389/fpsyg.2026.1835593. (CC BY)
