---
title: "Effects of feedback literacy scripts and a second-rater mechanism on EAP writing revision in generative AI-supported"
created: "2026-08-15T19:02:13-04:00"
updated: "2026-09-19T10:03:37-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai, simulation]
assessment: [ai-feedback-quality, feedback, formative-assessment]
audience: [learners, instructors]
research_method: [experiment, quantitative]
discipline: [writing education, language learning]
level: [higher ed]

sources: ['raw/papers/feedback-literacy-scripts-eap-writing.md']
confidence: medium
---

> **Synthesis:** **In generative-AI-supported EAP writing revision, improvement depends less on the amount of feedback available than on whether learners process it through structured decision-making.** Yao (2026) used a large language model–driven classroom [[simulation]] (100 synthetic B2-level writer agents) in a 2 × 2 design to test a [[feedback-literacy|feedback literacy]] script (FRAC) and an AI second-review mechanism. The script produced a clear, robust benefit in the initial revision stage (Task 1 gain of 5.75 points; coefficient 7.09; permutation p = 0.0286), but did not raise feedback uptake — instead it redirected revision toward the **argument level**, which was the dimension positively associated with score gain (r = 0.755, p = 0.0304). The second-review mechanism, by contrast, produced no stable benefit.

## Core Finding


## Why This Matters

As [[generative-ai|generative AI]] floods EAP classrooms with instant, abundant feedback, the [[pedagogy|pedagogical]] question shifts from *obtaining* feedback to *processing* it. The paper argues that feedback becomes valuable only when learners can interpret, prioritize, and enact suggestions — a [[feedback|Feedback Loop]] that is cognitive rather than merely informational. Its central claim is that the value of AI in EAP writing should be framed as support for **organized feedback processing** rather than an expansion of feedback quantity.

## Method

- **Simulation design:** 100 B2-level [[llm]]-based writer agents generated under a unified prompt protocol, retaining limited variation in prior AI experience, risk aversion, [[metacognition|metacognitive]] awareness, and revision style. Because participants were simulated, no [[ethics]] approval was required.
- **Treatments:** Feedback literacy script (FRAC: identify comments relevant to task requirements, decide which affect argument/organization/evidence, prioritize changes, explain each choice) versus no script; and AI second-review mechanism versus none. Four groups: G1 control (n=40), G2 script only (n=40), G3 second-review only (n=10), G4 both (n=10).
- **Tasks:** Task 1 (baseline + revision), Task 2 (transfer to a new topic, same genre), delayed Task 3 (retention).
- **Analysis:** Revision-gain, revised-score, and delayed-retention regressions with HC3 robust standard errors; exact permutation tests; leave-one-out sensitivity; inter-rater ICC and inter-coder agreement. Unequal cell sizes (small second-review groups) were handled explicitly.

## Key Results

- **Script effect is stage-specific.** The script's effect was concentrated in Task 1 — the first encounter with AI feedback — and weakened in Task 2 (Script × Task 2 interaction negative, e.g. −8.88 in the pooled gain model). The authors interpret this as a shift from externally guided revision to partially internalized evaluative logic.
- **Script changed revision depth, not uptake.** Effective uptake rates were comparable across groups (~41.7–55.1%). But argument-level revision reached 53.3% of G2's Task 1 revision (vs 61.0% sentence-level in G1) and stayed higher in Task 2 (64.3% vs 49.3% G1, 11.0% G4). Argument-level revision was the correlate of score gain.
- **Second-review mechanism did not help.** Adding a second feedback source produced imprecise, unstable estimates (large standard errors) and no reliable outcome improvement — consistent with the idea that multi-source feedback raises comparison and prioritization load.
- **Delayed retention is only directional.** The scripted group scored higher on Task 3 (76.00 vs 72.67), but the permutation test (p = 0.4000) did not support a stable retention effect.
- **Reliability was high:** ICC(2,1) = 0.9907 for scoring, Cohen's κ = 0.992 for uptake coding, r = 0.8219 for argument-depth coding.

## What this means for practice

- **Instructors.** Teach feedback processing explicitly: a script that has learners identify the comments relevant to the task requirements, decide which bear on argument, organization, or evidence, prioritize the changes, and explain each choice produced a Task 1 gain 5.75 points larger than no script (coefficient 7.09; permutation p = 0.0286).
- **Instructors.** Aim revision at the argument level rather than surface polish — argument-level revision was the dimension associated with score gain (r = 0.755, p = 0.0304) and reached 53.3% of the scripted group's Task 1 revision.
- **Instructors.** Run the script once and expect the advantage to fade: the effect was concentrated in the first encounter with AI feedback (Script × Task 2 interaction −8.88 in the pooled gain model), which the authors read as learners internalizing the evaluative logic.
- **Instructors.** Stop stacking feedback sources and spend the effort on processing instead: adding an AI second-review mechanism produced no reliable improvement and much larger standard errors (e.g. Script × Second reviewer −0.42, SE 13.37).
- **Learners.** Expect the pay-off to come from explaining and prioritizing your own changes rather than from collecting more comments — effective uptake rates were similar across conditions (~41.7–55.1%).

## Limitations

- The study is a simulation: 100 B2-level writer agents generated by an LLM under a unified prompt protocol rather than real students (no ethics approval was required because the participants were simulated), so the authors call for validation with human writers and across proficiency levels in authentic EAP classrooms.
- The second-review conditions are badly underpowered — 10 agents each (G3 n=10, G4 n=10) against 40 in the script and control groups — so the null result for the second-rater mechanism rests on unstable, imprecise estimates rather than a well-powered test.
- Delayed retention is not established: the scripted group scored 76.00 versus 72.67 on Task 3, but the exact permutation test yielded p = 0.4000, and the Task 1 advantage weakened on the Task 2 transfer.
- Measurement quality is high (ICC(2,1) = 0.9907; Cohen's κ = 0.992; argument-depth r = 0.8219) and the Task 1 script effect stayed positive under leave-one-out resampling (4.75–7.00), but the contribution is a mechanism clarified under controlled simulation conditions rather than classroom evidence.

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
