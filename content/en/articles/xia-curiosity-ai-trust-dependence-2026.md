---
title: "Longitudinal associations among curiosity, Human–AI trust, and functional dependence in generative AI use"
created: "2026-11-25T09:22:00-05:00"
updated: "2026-11-25T09:22:00-05:00"
published: "2026-11-24"
type: article
authors: ["Peisen Xia", "Senrong Liao", "Geng Li", "Jiang Qiu", "Chengzhen Liu"]
venue: "Frontiers in Psychology, 17"
evidence_context: educational
foundations: [cognitive-offloading]
pedagogy: [student-ai-interaction, motivation]
technology: [generative-ai, llm]
ethics: [trust, trust-calibration]
methods: [longitudinal-research, quantitative-research]
level: [higher ed, undergraduate]
audience: [instructors, researchers]
page_kind: [evaluation]
research_method: [longitudinal study, survey]
sources: ["raw/papers/xia-curiosity-ai-trust-dependence-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Xia and colleagues (2026) follow 952 Chinese [[higher-ed|university]] students across three annual waves to work out which comes first among [[trust|trust in AI]], functional dependence on [[generative-ai]], and [[motivation|curiosity]]. Functional dependence here means relying on the tool for the functions that support study — explanations, drafting, checking — not a clinical measure of addiction. Two reciprocal loops emerged. Trust and dependence predicted each other at each interval, so trust built dependence and dependence built trust. Curiosity and dependence alternated: curiosity predicted later dependence, and dependence in turn predicted later curiosity, with a small but reliable indirect path running between them. The authors read that second loop as cognitive-resource release: offloading routine search work frees capacity for exploration. They also note that the mechanism was inferred from self-report patterns rather than measured, which is the right reading of it.

## Key Findings
- **Trust and functional dependence reinforced each other.** Trust predicted later dependence at both intervals, and dependence predicted later trust at both, in a stable reciprocal pattern.
- **Curiosity and dependence alternated rather than reinforced.** Earlier curiosity predicted later dependence, and that dependence predicted later curiosity, forming a two-step cycle rather than a direct loop.
- **Dependence carried the [[longitudinal-research|longitudinal]] link between trust and curiosity.** The indirect path from trust through dependence to curiosity was small but reliably positive, and so was the reverse path from curiosity through dependence to trust.
- **Only one total effect reached significance.** Trust at the first wave predicted curiosity at the third; the reverse total effect did not.
- **Within-wave associations weakened over time.** Trust and dependence correlated at the first and second waves, but by the third wave none of the residual correlations among the three variables was significant.
- **Demographics were unrelated.** Neither gender nor age was associated with any of the three constructs at any wave, so neither entered the model as a covariate.

## How the model was specified

The three constructs were measured at three waves spaced one year apart, with longitudinal measurement invariance supported at the configural, metric and scalar levels for all three, which is a precondition for comparing latent means across waves. Strict invariance did not hold, with residual variances shifting over time, and the authors report that without treating it as invalidating the scalar result.

The cross-lagged panel model fit well and all autoregressive paths were significant, which is the expected pattern for stable self-report constructs. The cross-lagged estimates are modest: trust predicting dependence at 0.199 and 0.231 across the two intervals, dependence predicting trust at 0.154 and 0.160, curiosity predicting dependence at 0.138, and dependence predicting curiosity at 0.152. The indirect effects, bootstrapped with 5,000 resamples, came out at 0.030 for trust to curiosity and 0.022 for curiosity to trust.

## Why the alternating cycle matters

The interesting structural feature is that curiosity and dependence do not feed each other directly. A curious student becomes more dependent at the next wave, and dependence then predicts more curiosity at the following wave, but curiosity at the first wave does not significantly predict curiosity-driven dependence at the third through a single link, and the direct cross-lagged paths between curiosity and dependence in the reverse direction were not significant.

The authors explain this with an information-gap account and a cognitive-resource account held together: curiosity drives engagement with a tool that can answer questions, and the tool's answers lower the cost of pursuing the next question. That is a plausible reading and an untested one. [[cognitive-offloading|Cognitive offloading]] and resource allocation were not measured directly, so the mechanism is inference from the pattern of self-reports rather than a demonstrated process. A study with usage logs could distinguish a student who offloads search work and thinks about the answer from one who offloads the thinking.

## Trust as a moving target

The reciprocal trust–dependence loop is the more consequential finding for practice, because it describes a path to dependence that does not require the tool to be good. Trust predicts reliance, reliance predicts more trust, and by the third wave the within-wave correlations have gone quiet — consistent with both variables having stabilized into a settled relationship rather than continuing to move together. That is what [[trust-calibration]] is about: a trust level that is settled by familiarity rather than by evidence of accuracy is a poor guide to when to check.

The practical asymmetry is that trust accrues from use, while accuracy does not necessarily accrue with it. A student whose trust was calibrated by the first hundred confident, correct answers will extend the same trust to the hundred-and-first, which is the one that hallucinates. Nothing in this design measures accuracy or checking, so the claim must stay at the level of association, but the loop is the mechanism the calibration literature warns about.

## What this means for practice

- **Instructors.** Set up tasks that keep curiosity ahead of dependence. In this data the curiosity-to-dependence path was as strong as the dependence-to-curiosity one, and only the second is the one that lets a tool do the learning.
- **Researchers.** Measure reliance behaviorally, not only by self-report. The whole mechanism rests on an unmeasured resource-release claim.
- **Educational technology developers.** Design for calibration rather than for trust. A system that reports its own uncertainty gives a student something to be curious about instead of something to depend on.
- **Study-skills advisers.** Talk about when to check, not only about how much to use. Dependence built on trust is the pattern these data describe.

## Limitations

- All three constructs are [[self-report-measures|self-reported]], and functional dependence was measured as reported reliance rather than observed task behavior; cognitive offloading and resource allocation were not measured at all, so the resource-release explanation is theoretical.
- Wave intervals were one year, which cannot capture shorter-term fluctuation in use or trust.
- The study examined GenAI use in general learning contexts rather than specific tasks, so whether the pattern holds for writing, speaking or reading is unknown.
- The cross-lagged panel model estimates prospective associations under assumptions of stationarity and does not establish causal direction.
- The sample is 952 Chinese university students, so cultural and institutional variation in AI trust and use is untested.

## Citation

Xia, P., Liao, S., Li, G., Qiu, J., & Liu, C. (2026). [Longitudinal associations among curiosity, Human–AI trust, and functional dependence in generative AI use](https://doi.org/10.3389/fpsyg.2026.2012567). *Frontiers in Psychology, 17*.
