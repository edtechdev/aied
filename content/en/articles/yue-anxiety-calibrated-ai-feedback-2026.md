---
title: "Anxiety-calibrated generative-AI feedback for second language writing: the Cognition–Affect Dual-Adaptation model"
created: "2026-11-27T07:43:00-05:00"
updated: "2026-11-27T07:43:00-05:00"
type: article
published: "2026-11-25"
sources: ['raw/papers/yue-anxiety-calibrated-ai-feedback-2026.md']
confidence: low
evidence_context: educational
page_kind: [framework]
research_method: [theoretical analysis]
discipline: []
level: []
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation]
---

> **Synthesis:** Yue and colleagues (2026) propose the Cognition–Affect Dual-Adaptation (CADA) model for generative-AI feedback on second language writing. Its defining move is to hold the cognitive channel fixed while adapting the affective channel to the learner's current anxiety tier: error identification, explanation, and revision suggestions remain identical for everyone, while praise framing, mitigation intensity, and strength-first sequencing change across T1, T2, and T3. Tier membership is re-probed weekly and can migrate downward as anxiety falls or upward as it rises. Six propositions link calibration to anxiety, self-efficacy, chained mediation, compensatory benefit for highly anxious learners, feedback uptake, and self-correcting tier migration. The authors draw on control–value theory, social cognitive theory, broaden-and-build theory, and feedback-literacy research, and they specify falsifiers and a research agenda for each claim. This Hypothesis and Theory article reports no new empirical data: it offers a testable architecture rather than a sample, instrument, or observed effect, and all predicted directions remain untested.

## Key Findings
1. **Uniform delivery is the problem.** A single affective register cannot soften feedback for an anxious learner and stay efficiently direct for a confident one, even when the informational content is identical.
2. **Content and register are separated.** Every learner receives the complete diagnosis in the same round; only how it is worded and ordered varies, so differences cannot be attributed to information quantity or timing.
3. **Three tiers map measured anxiety to tone.** T1 uses direct, unhedged criticism, T2 adds praise before and after hedged corrections, and T3 leads with strengths and frames revision as small achievable steps.
4. **Tiering follows the learner over time.** State anxiety is probed at baseline and re-probed weekly, and a tier change requires two consecutive probes on the same side of a boundary.
5. **The model makes six falsifiable claims.** Propositions P1–P6 cover anxiety reduction, self-efficacy gains, chained mediation, compensatory moderation, uptake with partial mediation, and self-correcting downward migration.
6. **Calibration should fade, not persist.** If anxiety declines, register support recedes and feedback converges on the direct register; a persistent T3 plateau while P1 holds would count against P6.
7. **Deployment carries non-negotiable safeguards.** Probe data must not be used for grading, learners can inspect their tier and opt out, and a teacher can review or override any automated message.

## The proposal in concrete terms

CADA models repeated writing–feedback cycles. Its treatment contrast is calibrated feedback versus uniform feedback in the deployed tool's default register. Three design principles define it: cognitive constancy, affective calibration, and dynamic re-tiering. Issue scope belongs to the cognitive channel and is held constant, so every learner receives the complete diagnosis in every round even though focused and comprehensive feedback may differ in their cognitive effects. Implementation is deliberately prompt-level: a diagnostic analysis is generated once under a fixed prompt and then rendered in three registers.

An illustrative essay has four problems — article errors, a weak topic sentence in the second paragraph, informal register, and inconsistent verb tense. At T1 all four are listed directly in a neutral-professional tone. At T2 the message opens with accurate recognition of a strength, presents the same four problems with hedged formulations, and closes with encouragement tied to progress. At T3 it leads with two specific strengths, fully mitigates the same four problems, and frames each fix as quick and within reach. The diagnosis does not change across tiers. Calibration is applied as constraints in the prompt, with no retraining and no affect recognition from learner text; teachers and researchers can inspect every parameter.

The loop consists of five stages: diagnose the draft, assess anxiety state and uptake history, calibrate T1/T2/T3 register targets, render praise and mitigation onto the fixed diagnosis, and observe uptake and affect before updating the tier. State anxiety is measured with a short six-item form re-anchored to the present writing task. Tier boundaries start as cohort tertiles and are a target of validation rather than fixed constants of the theory. A support floor prevents abrupt withdrawal, and learners who react badly to praise can be reassigned to a more direct register.

## What would count as evidence

Each proposition pairs a predicted direction with an illustrative falsification test. For P1 and P2, support requires d ≥ 0.30 and falsification is set at d < 0.20 with the confidence interval excluding 0.30. P3 predicts a chained path from self-efficacy to threat appraisal to performance, with support defined as a standardized indirect effect ≥0.05 and falsification below 0.01 with the interval excluding 0.05. P4 predicts a baseline-anxiety interaction: support is ΔR2 ≥ 0.02 with benefit ≥ d 0.30 at high anxiety, and ΔR2 ≤ 0.005 would falsify it. P5 requires uptake d ≥ 0.30 with an indirect effect ≥0.05 and a residual direct effect, because full mediation would make the affective pathway irrelevant.

A Phase 0 comes before causal tests. Expert raters and learners must confirm that tier-rendered messages differ in perceived threat and supportiveness but are equal in information completeness and diagnostic accuracy within a preregistered equivalence margin. Message length, readability, linguistic complexity, and a brief post-exposure mental-effort rating are also treated as equivalence outcomes; a rendering that exceeds any band is revised. Classification validation is reported separately from manipulation validation, and learners near a boundary are re-examined with a second probe.

Later phases are designed to be cumulative. Phase 1 uses randomized single-cycle experiments against uniform feedback; Phase 2 uses multiwave longitudinal designs to estimate P3 and P5 with proper temporal ordering and to include the reverse appraisal-to-efficacy path; Phase 3 adds think-aloud protocols, stimulated recall, and culture as a core moderator. As an illustration of power planning, detecting the P4 interaction at ΔR2 = 0.02 with 80% power requires on the order of 400 learners. Novelty, demand characteristics, praise inflation, self-directed praise, message length, and ceiling effects are named as rival explanations that convincing tests must rule out.

## What this means for practice
- **Instructors.** Keep the correction set intact and change only its framing, so an anxious learner is never given a watered-down diagnosis.
- **Instructors.** Tie praise to accurate, specific recognition of actual performance rather than generic encouragement that could read as condescension.
- **Researchers.** Validate the register manipulation and the tier classification separately before testing any causal claim about calibration.
- **Researchers.** Code uptake from revision behavior rather than acceptance clicks, and keep uptake distinct from learning gains.
- **Institutions.** Govern probe data explicitly: consent, minimization, transparent tier logic, a teacher override, and a learner opt-out precede deployment.

## Limitations
- The article reports no new empirical data; its six propositions, predicted directions, and equivalence bounds are untested.
- Three tiers simplify a continuous construct, and the weekly probe schedule trades respondent burden against tracking resolution.
- The ordering claimed in P3, with self-efficacy before anxiety within an episode, is theoretically motivated but contestable; reciprocal dynamics over longer horizons are plausible.
- The upper bound on mitigation, beyond which the corrective signal is lost, is unspecified pending empirical dose-finding.
- Separating trait, state, and episode-level anxiety raises the measurement burden, and measurement invariance must be established before comparing groups.
- The model inherits the volatility of its technology substrate and is stated at the level of feedback functions rather than particular systems.

## Citation
Yue J, Sima Y, Li X and Zhang L (2026) Anxiety-calibrated generative-AI feedback for second language writing: the Cognition–Affect Dual-Adaptation model. Front. Psychol. 17:2001499. doi: 10.3389/fpsyg.2026.2001499
