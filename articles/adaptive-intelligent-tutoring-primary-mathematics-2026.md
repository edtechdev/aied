---
title: "Effectiveness of adaptive versus non-adaptive intelligent tutoring systems in early primary mathematics"
created: "2026-09-20T09:23:31-04:00"
updated: "2026-09-20T09:23:31-04:00"
type: article
pedagogy: [mastery-learning, motivation, prior-knowledge, self-regulated-learning]
technology: [adaptive-learning, intelligent-tutoring, knowledge-tracing, student-modeling]
assessment: [formative-assessment, learning-gains]
ethics: [differential-effects-across-learner-groups]
research_method: [experiment, randomized controlled trial]
level: [k 12, elementary]
discipline: [math education]
audience: [instructors, researchers]
confidence: high
sources: ['raw/papers/adaptive-intelligent-tutoring-primary-mathematics-2026.md']
---

> **Synthesis:** This field experiment isolates one adaptive mechanism, dynamic task difficulty, by comparing two versions of the same second-grade mathematics tutor. Both were built by the research team on the CTAT+TutorShop platform and were identical in content, interface, feedback, and spoken hints; they differed only in whether task selection followed a [[knowledge-tracing|Bayesian Knowledge Tracing]] mastery estimate. N = 132 second-grade students (mean age 7.66 years) were randomly assigned to the adaptive (n = 65) or non-adaptive (n = 67) version, practiced for 30 min, and completed paper-based pre- and posttests. Against the hypothesis, condition had no significant effect on posttest performance, F(1, 124) = 0.32, p = .574, and no effect on mental effort, subjective difficulty, or enjoyment. Exploratory analyses showed that non-adaptive students reached higher average mastery probabilities (M = 0.67 vs. M = 0.58, p = .006) and that conscientiousness moderated perceptions but not achievement.

## Key Findings

1. **Isolated difficulty adaptation gave no learning advantage.** With prior knowledge controlled, condition had no significant effect on posttest scores (F(1, 124) = 0.32, p = .574, η²p = .00).
2. **Subjective experience was unchanged.** Mental effort (p = .938), subjective difficulty (p = .210), and enjoyment (p = .525) showed no condition effects.
3. **Non-adaptive students progressed further.** Log data showed higher mastery probabilities in the non-adaptive condition (M = 0.67 vs. M = 0.58; F(1, 128) = 7.85, p = .006).
4. **Prior knowledge dominated posttest performance.** Prior knowledge predicted posttest scores (F(1, 124) = 206.99, p < .001, η²p = .63), and the condition × prior knowledge interaction was not significant (p = .802).
5. **Conscientiousness moderated perceptions only.** Condition effects on subjective difficulty (F(1, 115) = 4.39, p = .038) and enjoyment (F(1, 114) = 5.63, p = .019) appeared for conscientiousness, not achievement.
6. **Progression, not adaptivity, tracked performance.** Adding mastery probability as a covariate yielded a condition effect (F(1, 122) = 5.42, p = .022, d = 0.46) the authors treat as non-causal.

## What was compared, and how

Both groups used the same tutor, developed by the research team on the CTAT+TutorShop platform, with identical tasks, correctness feedback, and graduated spoken hints across 13 arithmetic skills ordered by complexity. Only task selection differed: a [[knowledge-tracing|Bayesian Knowledge Tracing]] model with default parameters (P(known) = .25, P(learn) = .20, P(guess) = .20, P(slip) = .10) drove a "Sequential Mastery Learning – Easier First" algorithm presenting only unmastered skills, while the non-adaptive version followed a fixed, textbook-like order. N = 132 second-grade students (mean age 7.66 years) from 11 Swiss classes were randomly assigned and practiced for 30 min; posttest means were 10.30 (SD = 3.86) adaptive versus 9.98 (SD = 3.99) non-adaptive on a 0–15 scale.

## Why isolated difficulty adaptation may not have helped

Three explanations deserve separating. The first is developmental: younger students possess limited [[self-regulated-learning|self-regulation]] and metacognitive monitoring, while adaptive systems presuppose that learners can engage with feedback, regulate effort, and stay focused. The second is the comparison itself: contrasting the adaptive tutor with a structurally equivalent non-adaptive one isolates difficulty adaptation but narrows the expected effect, since the added value of adaptivity shrinks against an equivalent digital environment. The third is exposure: 30 min may be too brief for a learner model to converge. The authors do not conclude that adaptivity is useless; they argue that lowering task complexity is the wrong lever for young learners and that adjusting instructional support instead — more [[scaffolding]], guidance, or hints — is more promising.

## Progression, measurement, and what the trial cannot show

Two exploratory analyses complicate the null result. Mastery-gated progression kept adaptive students on unsolved skills while the fixed sequence let everyone move on; adding mastery probability as a covariate produced a condition effect on posttest scores (F(1, 122) = 5.42, p = .022, d = 0.46). A five-profile latent profile analysis — Disengaged, Motivated Low-, Balanced, Overstraining, and Confident High-Performers — predicted posttest differences (η²p = .27) but found no condition × profile interaction (ps ≥ .198). [[learning-gains|Learning gains]] were measured as posttest performance on a parallel arithmetic test, not as [[transfer-of-learning|transfer]], and no delayed posttest was administered.

## What this means for practice

- **Instructors.** A difficulty-adaptive tutor is not automatically better than a fixed sequence: posttest means were 10.30 (SD = 3.86) versus 9.98 (SD = 3.99), with no condition effect (p = .574).
- **Instructional designers.** Choose progression logic deliberately: mastery gating held adaptive students at unsolved skills (M = 0.58), while non-adaptive students advanced further (M = 0.67).
- **Designers.** For young learners, adapt the level of support rather than task difficulty: the authors recommend more [[scaffolding]], guidance, or hints when students struggle.
- **Researchers.** Do not read a condition effect from an intervention-derived covariate as causal; the d = 0.46 ANCOVA result is a signal about progression only.

## Limitations

- The intervention lasted only 30 min; the authors state that the short duration and the field-based design may have constrained observable effects, and no delayed posttest was run.
- The non-adaptive comparison was equivalent in interface, content, and feedback, which isolates difficulty adaptation but likely narrows the expected effect size.
- No data-collection year or preregistration identifier is reported, and the tutor is rule-based (CTAT+TutorShop, default BKT parameters), so the null result may not extend to LLM tutors.

## Connected Concepts

- [[adaptive-learning]]
- [[differential-effects-across-learner-groups]]
- [[formative-assessment]]
- [[intelligent-tutoring]]
- [[learning-gains]]
- [[mastery-learning]]
- [[prior-knowledge]]
- [[self-regulated-learning]]

## Connected Articles

- [[making-ai-tutoring-productive-mastery-math-2026]] — Making AI Tutoring Productive: Evidence from a Mastery-Based Math Practice Experiment
- [[graph-its-adaptive-algorithms-2026]] — Intelligent tutoring in dynamic domains: a graph-based system for comparative analysis of adaptive algorithms
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI Tutoring is Not a Monolith: What We Actually Know
- [[ai-tutoring-quality-k12-methodologies-2026]] — Methodologies for Improving the Quality of AI Tutoring in K-12 Education
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive Scaffolding for Cognitive Engagement in an Intelligent Tutoring System

## Citation

Sibley, L., Berner, T., & Schmalfeldt, T. (2026). [*Effectiveness of adaptive versus non-adaptive intelligent tutoring systems in early primary mathematics*](https://doi.org/10.1016/j.caeo.2026.100420). *Computers and Education Open*, 11, 100420.
