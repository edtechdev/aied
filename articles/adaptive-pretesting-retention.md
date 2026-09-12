---
title: Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
created: "2026-06-23T04:33:04-04:00"
updated: "2026-09-12T02:30:00-04:00"
type: article
tags: [rct, adaptive-learning, formative-assessment, learning-gains, higher-ed, personalized-learning, rag]
research_method: [randomized controlled trial, learning analytics]
level: [higher ed]
sources: ['raw/papers/2606.22328.md']
confidence: medium
---

> **Synthesis:** Akgun and Toker (2026) ask whether the initial boost from GenAI-enabled adaptive pretesting survives to the end of the semester, and answer that it depends almost entirely on how the AI is structured to behave afterwards. In a three-arm randomized study with 89 undergraduates, adaptive spaced retrieval practice produced the highest posttest scores (M = 78.19) and the highest observed practice effort (M = 0.85), both significantly ahead of learner-directed AI study (M = 67.28 and 0.49). The transferable claim is that adaptive pretesting acts as a front-loaded catalyst rather than a stand-alone intervention: it is a [[productive-failure|productive struggle]] setup, and its benefits attenuate when AI access is configured as open-ended help instead of enforced retrieval.

## Overview

Pretesting — prompting learners to attempt answers before formal instruction — has a long evidential base: learners usually perform poorly on those attempts, yet subsequent learning improves, apparently because the attempt activates prior knowledge, exposes knowledge gaps, and sharpens attention to the instruction that follows. The authors note that these benefits occur even when the initial responses are wrong.

The paper argues this matters more, not less, when answers are cheaply available. Ready access to search engines and intelligent systems can reduce effortful reasoning and encourage cognitive outsourcing; the "think-before-search" literature the authors cite shows that generating an answer before consulting an external resource yields better recall than immediate lookup. Generative AI sharpens the design question because it can do something a fixed quiz cannot: probe unclear reasoning, demand elaboration, and withhold progress until a substantive attempt exists.

The gap the study targets is durability. Learning science has long separated short-term performance from long-term retention, and gains measured immediately after instruction may dissipate without continued practice. The authors therefore treat GenAI-enabled adaptive pretesting as a possible front-loaded catalyst and ask two questions: (RQ1) do its learning gains persist over a seven-week retention period under different forms of follow-up practice, and (RQ2) does practice structure affect the quality of learner engagement?

## Study Design & Method

- **Participants.** 89 undergraduates (final analytic sample, after exclusions for incomplete data or noncompliance) enrolled in a large upper-division applied statistics course at a public research university in the United States. The course served Cybersecurity and Security, Risk and Analysis majors, and the target content was multiple linear regression. Participation was part of regular course activities and was approved by the institution's ethics review board.
- **Design.** A between-subjects experiment with three post-baseline conditions, all preceded by a common initial learning phase: an adaptive AI-assisted pretesting session, then identical instruction via standard course resources, then a baseline assessment. Randomization happened only after that shared phase.
- **The adaptive AI agent.** Implemented with a generative large language model configured through a structured system prompt defining its instructional role, response scope, and escalation logic. Response-contingent prompting operated in three modes: a targeted probe when a response revealed a clear misconception, a request for elaboration when a response was superficial or incomplete, and advancement to the next item only when a response showed adequate conceptual engagement. Direct solutions and posttest-relevant answers were explicitly excluded from the agent's allowed outputs.
- **Conditions.** Over seven weeks, all three groups practised in spaced sessions with the same number and timing; only the structure of interaction differed. G1 adaptive spaced retrieval (n = 27) received adaptively generated retrieval prompts with response-contingent feedback, and additionally reviewed prior-session performance signals to raise conceptual depth in weaker areas while maintaining challenge in stronger ones. G2 fixed spaced retrieval (n = 28) received the same fixed question sequence one item at a time, without feedback, adaptation, or response-contingent adjustment. G3 learner-directed AI study (n = 34) interacted freely in spaced sessions with no enforced retrieval, sequencing, or adaptivity.
- **Comparability check.** Analyses of submitted session logs showed that interaction volume, measured as total exchange length per session, did not differ significantly across conditions, supporting the comparability of practice exposure independent of its structure.
- **Instrument.** Baseline and posttest were parallel, counterbalanced forms of a 14-item multiple-choice test developed for the study, scored 0–100. Each item posed a scenario-based cybersecurity problem requiring application of multiple linear regression — predictor selection, multicollinearity detection, model comparison with adjusted R², and interpretation of coefficients — deliberately assessing both retention and near-transfer.
- **Observed practice effort.** Derived from AI-agent conversation logs submitted after each of three scheduled practice sessions. Two raters applied a consensus-developed rubric distinguishing substantive engagement (E) and surface engagement (SE) from compliance-driven submissions (CE) and non-engaged or unusable ones (NE). Each student earned up to three engagement credits, converted to a proportional 0.00–1.00 score (0.00, 0.33, 0.66, 1.00), with qualitative band adjustments (e.g. 0.77, 0.88) where strict proportionality missed the observed pattern.
- **Analysis.** A MANCOVA modelled posttest performance and observed practice effort jointly, with baseline performance as covariate and condition (three levels) as the between-subjects factor, to control familywise Type I error across theoretically related outcomes; significance was evaluated with Wilks' Λ and followed up with univariate ANCOVAs on each outcome's own scale. Box's M was not significant, M = 11.85, F(6, 145,777.16) = 1.91, p = .076, supporting multivariate homogeneity. Levene's tests were satisfied for posttest performance, F(2, 86) = 0.62, p = .539, but violated for observed practice effort, F(2, 86) = 3.58, p = .032, so effort inferences were interpreted with caution.

## Key Findings

- **Condition shaped the combined outcomes.** The MANCOVA showed a significant multivariate effect, Wilks' Λ = .664, F(4, 168) = 9.56, p < .001, partial η² = .185 — about 18.5% of the variance in the combined outcome space attributable to condition after adjusting for baseline. Baseline performance did not significantly predict the combined outcomes, Wilks' Λ = .998, F(2, 84) = 0.09, p = .918.
- **Structured retrieval drove engagement.** Condition significantly affected observed practice effort, F(2, 85) = 13.58, p < .001, partial η² = .242. Adjusted marginal means were G1 = 0.85 (SE = 0.05, 95% CI [0.74, 0.96]), G2 = 0.74 (SE = 0.05, 95% CI [0.64, 0.85]) and G3 = 0.49 (SE = 0.05, 95% CI [0.39, 0.58]). Bonferroni-adjusted contrasts found G1 and G2 not significantly different (p = .493) but both ahead of G3 (G1 vs G3: d = 1.33, p < .001; G2 vs G3: d = 0.83, p = .002).
- **Adaptive retrieval produced the best retention.** Condition also significantly affected posttest performance, F(2, 85) = 6.24, p = .003, partial η² = .128, with adjusted means of G1 = 78.19 (SE = 2.37), G2 = 74.55 (SE = 2.33) and G3 = 67.28 (SE = 2.12). G1 significantly outperformed G3 (d = 0.92, p = .003), while G1 vs G2 (p = .830) and G2 vs G3 (d = 0.57, p = .071) did not reach the adjusted threshold.
- **Ordering was consistent across both outcomes.** Adaptive spaced retrieval ranked first on both retention and effort; fixed spaced retrieval was statistically indistinguishable from it on scores but separated from unguided study only on effort; learner-directed AI study was last on both.
- **Pretesting alone was not enough.** The authors read the pattern as evidence that adaptive pretesting elevates initial understanding but cannot guarantee long-term retention on its own: benefits were best preserved when followed by structured retrieval that kept challenging learners over time, and appeared to attenuate when followed only by open-ended, learner-directed AI interaction.
- **Limits the authors state.** Observed practice effort is a behavioural indicator derived from qualitative analysis of interaction logs, not a measure of internal motivational state; combining it with process data (timing, revision behaviour) or self-report is flagged as future work. The study also ran in a single instructional context, so replication across domains and task types is needed for generalizability.

## Implications

For instructors, the practical message is that adopting an AI pretesting tool is a design decision about the *whole* sequence, not a single session. The three conditions shared an identical adaptive pretesting phase and identical instruction, so the divergence at the end of the semester was produced purely by how the AI behaved during seven weeks of follow-up practice. A deployment in which students chat freely with a model — asking questions and receiving answers — sits closest to the weakest arm here, even though every student in it had already benefited from the strongest pretesting format.

For designers of [[intelligent-tutoring|intelligent tutors]], the study isolates a concrete interaction policy worth copying: response-contingent prompting that withholds direct solutions, requests elaboration after superficial attempts, probes misconceptions, and escalates conceptual depth based on prior performance signals. That is what separated adaptive from fixed retrieval while holding session count, timing, and interaction volume constant.

For researchers, the study is a useful design template in two respects. It treats engagement as an observable trace of AI interaction logs scored against a rubric, rather than self-report, which makes the behavioural claim independently checkable; and it argues that the joint MANCOVA over retention and effort is a safeguard against inflating Type I error across related outcomes, a pattern consistent with the wider [[learning-analytics]] and [[rct]] literature on measuring both what students learned and how they engaged.

## Connected Concepts

- [[rct]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[transfer-of-learning]]
- [[learning-gains]]
- [[formative-assessment]]
- [[higher-ed]]
- [[self-regulated-learning]]
## Connected Articles

## Citation

Mahir Akgun, Sacip Toker (2026). [Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study](https://arxiv.org/abs/2606.22328). 27th International Conference on AI in Education
