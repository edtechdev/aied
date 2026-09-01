---
title: "Deceptive Overgeneralization: When Adaptive Learning Enables Systematic Misapplication"
created: "2026-08-30T14:00:00-04:00"
updated: "2026-08-30T14:00:00-04:00"
type: article
tags: [intelligent-tutoring, adaptive-learning, knowledge-tracing, mastery-learning, student-modeling, learning-theories, transfer-of-learning, misconceptions, feedback, k-12]
research_method: [experiment, secondary analysis]
discipline: [learning sciences]
level: [higher ed, k 12]
sources: ['raw/papers/10.1002_jcal.70311.md']
confidence: high
---

> **Synthesis:** An, McLaren, and Stamper (2026) introduce and empirically test **deceptive overgeneralization** — a learning phenomenon in which learners acquire a skill with an incomplete subset of its necessary conditions, omitting a critical application constraint, yet still produce correct actions. Because observed correctness looks like mastery, [[adaptive-learning]] systems that infer mastery from correct performance risk prematurely stopping practice before learners encounter cases where the action should be *withheld*, leaving the overgeneralization undetected. Across 11 experiments (N = 192) with Intelligent Tutoring Systems for Riichi Mahjong, learners systematically misapplied learned actions on first "do-not-act" detector items (61.5%–100% across skills and cohorts), far exceeding the error rates predicted by Bayesian Knowledge Tracing. Tailored "do-not-act" practice with feedback that names the missing constraint reduced misapplication to near-floor levels. A secondary analysis of K-12 *Decimal Point* data shows the framework also accounts for whole-number bias, suggesting it generalizes beyond adaptive systems to traditional instruction.

## Key Findings

1. **Correctness can mask incomplete conditional understanding.** Learners can appear competent during practice while having compiled an overgeneralized production rule — performing the expected action but omitting the "when to withhold it" constraint. This "deceptive" pattern inflates learners' perceived competence and misleads any assessment that infers mastery from observed actions.
2. **Deceptive overgeneralization is empirically prevalent.** In 11 experiments using ITSs for composite-condition, single-action skills in Riichi Mahjong (score calculation, Pinfu, Kabe, Riichi judgement), learners misapplied the learned action on the first detector item at rates of 61.5%–100% across skills and cohorts — significantly exceeding both the BKT accurate-mastery baseline (12% expected error) and the new-KC baseline (40%) in nearly all comparisons.
3. **Correctness-based mastery stopping rules can terminate practice too early.** With BKT-based adaptivity (95% mastery threshold), the system stopped assigning practice before learners encountered any "do-not-act" case — so the overgeneralization went undetected in the adaptive round and only surfaced when learners were later given full exposure.
4. **Targeted "do-not-act" remediation is highly effective.** Short sequences of practice where the correct response is to *refrain* from the learned action, paired with feedback naming the missing application constraint, reduced misapplication from 78.6%–100% initially to 0.0%–23.1% post-remediation (Cohen's h 1.696–2.441).
5. **The mechanism generalizes beyond adaptive learning.** A secondary analysis of K-12 *Decimal Point* decimal-learning data (13 datasets, 2015–2025) showed whole-number bias — recast as a deceptive overgeneralization — persists even in an effective learning game, with 84%–88% of decimal-comparison errors consistent with the overgeneralized "longer-is-larger" rule.

## Deceptive overgeneralization as a learning phenomenon

The authors ground the concept in ACT-R production systems and the Knowledge-Learning-Instruction (KLI) framework. A production is an IF(conditions)-THEN(action) pair; [[learning-theories|knowledge compilation]] merges chains of productions into efficient "macro-productions" whose condition sides grow, making it more likely some conditions are overlooked. Deceptive overgeneralization occurs when a learner acquires `IF a subset of required conditions are met THEN perform action` instead of the fully-constrained rule. It is "deceptive" because the learner still takes the correct action — until a scenario violates a missing constraint. The Crossair Flight 498 crash is offered as a domain-agnostic worked example: a commander's compiled attitude-display rule omitted the "Soviet-designed display only" constraint, and over 8,000 hours of experience did not correct it.

This distinguishes deceptive overgeneralization from [[transfer-of-learning|negative transfer]]: while negative transfer typically corrects with experience, deceptive overgeneralization may persist because the overgeneralized rule competes with later knowledge during conflict resolution. It also differs from shallow-feature errors: here, all features the learner uses are part of the correct solution path, making the overgeneralization behaviorally indistinguishable from accurate understanding until a withheld-action context appears.

## Implications for adaptive learning and ITS design

The findings directly challenge the assumption that correctness-based mastery inference is sufficient for [[knowledge-tracing]] and [[mastery-learning]] stopping rules. Because [[student-modeling|learner models]] and [[intelligent-tutoring|intelligent tutoring]] systems infer mastery from observed performance, a learner exhibiting deceptive overgeneralization can appear mastered while holding an incomplete production. The authors propose a four-step detection/remediation procedure: (1) represent skills as production rules; (2) identify composite-condition, single-action rules (most susceptible); (3) prioritize rules where misapplication is especially problematic; and (4) create tailored "do-not-act" detector items — scenarios violating a necessary condition where the correct response is to refrain — paired with [[feedback]] naming the missing constraint. The practical implication for [[adaptive-learning]]: treat streaks of correct actions as insufficient evidence of conditional understanding, include tasks that require *withholding* the learned action, and place them before mastery stopping rules trigger.

## Cross-domain case study: whole-number bias in K-12 decimals

The framework is extended to a traditional, non-adaptive domain. Whole-number bias — students treating the longer decimal as larger because they apply whole-number comparison — is modeled as omitting the application constraint of the "longer-is-larger" production. Because positive whole-number comparisons provide no counterexamples, the rule is strengthened through repeated success; when decimals are introduced, the older overgeneralized production competes with the newer decimal rule during conflict resolution. In *Decimal Point* assessment data, error rates on the "do-not-act" decimal item fell only modestly after the intervention (53.11% → 47.47% delayed), and 84%–88% of errors were whole-number-bias aligned — suggesting simply [[teacher-role|teaching]] the correct procedure may be insufficient; the older, competing production must be explicitly refined. This has implications for [[k-12]] [[math-education|mathematics]] instruction.

## Connected Concepts

- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[knowledge-tracing]]
- [[mastery-learning]]
- [[student-modeling]]
- [[learning-theories]]
- [[transfer-of-learning]]
- [[misconceptions]]
- [[feedback]]
- [[k-12]]

## Connected Articles

- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive ICAP scaffolding in an ITS (BKT vs DRL)
- [[neural-symbolic-knowledge-tracing]] — Injecting mastery/non-mastery rules into deep learning learner modeling
- [[stanbkt-bayesian-knowledge-tracing]] — Standardized Bayesian knowledge tracing
- [[making-ai-tutoring-productive-mastery-math-2026]] — Making AI tutoring productive through mastery-based math practice
- [[genai-performance-vs-learning]] — The performance-vs-learning distinction in generative AI
- [[correct-answer-trap-misconceptions]] — The correct answer trap and misconceptions in ITS

## Citation

An, M., McLaren, B. M., & Stamper, J. (2026). [Deceptive overgeneralization: When adaptive learning enables systematic misapplication](https://doi.org/10.1002/jcal.70311). *Journal of Computer Assisted Learning, 42*, e70311.
