---
title: "Making Reasoning Visible: Configuration-Aware Diagnostic Modeling for Adaptive Scaffolding in Structured Reasoning Tasks"
created: "2026-10-27T09:38:00-04:00"
updated: "2026-10-27T09:38:00-04:00"
type: article
authors: ["Geoffre, T.", "Yuan, Z.", "Geoffre, T."]
published: "2026"
venue: "arXiv"
source_url: https://arxiv.org/abs/2610.35609
sources: ['raw/papers/configuration-aware-diagnostic-adaptive-scaffolding-2026.md']
confidence: high
contributors: [editor]
source_depth: full text
verified: [citation, numbers, links]
page_kind: [framework]
research_method: [secondary analysis]
discipline: [language learning]
level: [primary education]
audience: [instructors, educational technology developers, researchers, instructional designers]
pedagogy: [scaffolding, problem-solving, game-based-learning]
technology: [cognitive-diagnosis, adaptive-learning, learning-analytics]
methods: [quantitative-research]
foundations: [human-ai-collaboration]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-27"
    agent: hermes-agent
---

> **Synthesis:** [[intelligent-tutoring|Tutoring systems]] usually see a right or wrong answer, not the reasoning that produced it. This study reconstructs that reasoning from the action sequences of a grammar game, computing five interpretable strategy dimensions from 36,234 interactions by 234 primary-school students across 42 morphosyntactic exercises, then estimates how much coordination each task demands and sorts [[learners]] into four reasoning states. Two findings carry the argument: strategy use is state-dominant rather than trait-like (mean intraclass correlation 0.14), and students rarely leave an unproductive state unaided, with 74.6% of high-coordination-demand failures followed by another failure. An early-warning model built on those strategy signals predicts the next successful validation with AUC 0.826, rising to 0.902 when sequential context is added, which the authors offer as the basis for [[scaffolding]] that responds to how a student is thinking rather than whether they were right.

## Key Findings

- **Static learner profiles are the wrong unit.** Strategy scores vary mainly by context, not by student, with a mean intraclass correlation of 0.14 across the 234 learners, so a stable trait estimate discards most of the signal a tutor needs.
- **Unproductive states are sticky.** In the state-transition graph, 74.6% of High-Demand Failure cases loop back into another failure without intervention, and Low-Demand Failure self-loops 62.3% of the time.
- **Strategy configuration predicts the next outcome.** A strategy-only model reaches AUC 0.826 while deliberately excluding current error counts, and adding sequential context raises it to 0.902 (Δ = +0.076).
- **Strategies interact, not just add.** Chain-Aware paired with Randomness is strongly antagonistic (β = −1.475), while Chain-Aware paired with Strategic Commitment is synergistic (β = +1.363); nine pairwise interactions survive Bonferroni correction.
- **Adaptive transitions do happen.** 45.9% of transitions are adaptive, and the Fragile Success state flows toward Sound Reasoning 52.4% of the time, so the state model is not a story of uniform failure.
- **The pipeline is cheap enough for live use.** Scoring runs in under 12 ms per validation on classroom hardware, and calibration in the 0.3–0.7 probability band is close to the diagonal, the band where scaffold triggers operate.

## Diagnosis beyond right and wrong

The framework's premise is that [[cognitive-diagnosis]] should model the process, not the product. Knowledge-component models ask which rule a learner has mastered; this one asks what strategy configuration they are running while they apply it. Five dimensions are computed from the action log: Chain-Aware (systematic progression through a chain), Randomness (undirected exploration), Strategic Commitment (sustained hypothesis pursuit), Error-Focus (systematic error correction) and Verb-First (attention to one cue class before another). Together with a task-structure estimate of coordination demand, they generate an interpretable profile per validation rather than a latent vector.

That choice is what makes the model auditable. Because the features are named behaviors an educator could recognize, the evidence for a scaffold trigger can be shown to a [[teacher-role|teacher]], and the ablation results confirm the features are not redundant with prior success history. The paper also reports calibration honestly, noting higher variance at the extremes because data are sparse there, which is the sort of statement a deployment decision needs.

## Strategy state, not student type

The strongest result is about stability, and it cuts against a common [[personalized-learning]] assumption. If reasoning strategies were traits, a tutor could profile a student once and adapt permanently. At an ICC of 0.14, nearly all variance sits within students across contexts, so adaptation has to be real-time and task-aware. The consequence is architectural: the diagnostic layer must run on every validation and feed short-horizon predictions, because yesterday's profile predicts today's behavior weakly.

Persistence then becomes the actionable target. A learner stuck in High-Demand Failure at 74.6% does not need a different profile, they need the loop broken, and the state-transition evidence points to the moments where that is most tractable: a Fragile Success that is heading toward Sound Reasoning is a state to reinforce, while a Low-Demand Failure loop is a state to interrupt with a concrete cue.

## What the interactions say about task design

The configurational effects make a design claim as well as a diagnostic one. Chain-Aware paired with Randomness (β = −1.475) says that undirected exploration actively erodes systematic completion, so a game that rewards guessing early can undercut the strategy it is trying to teach; Chain-Aware with Strategic Commitment (β = +1.363) says sustained pursuit amplifies systematic progression, which is what a well-sequenced exercise should afford. Because coordination demand is estimated from task structure, the same framework can be used to flag exercises whose demand profile predicts failure for a class before students attempt them, which is a [[curriculum-design]] use rather than a tutoring one.

## What this means for practice

- **Trigger support on reasoning state, not on a score.** Use signals like repeated undirected exploration or abandoned hypothesis chains to fire a hint, and leave learners in stable productive states alone.
- **Interrupt the failure loop early.** Because 74.6% of high-demand failures repeat without intervention, treat the first high-demand failure as the trigger point rather than waiting for a second or third.
- **Do not build permanent learner profiles from strategy data.** With an ICC of 0.14, a static label misrepresents the student within a few tasks; recompute rather than store.
- **For developers, keep the diagnostic features interpretable.** Five named dimensions with transparent estimation gave near-baseline calibration, and they let a teacher see why the system intervened.
- **For instructional designers, inspect exercises for coordination demand.** A task that requires several cues to be combined can be identified before delivery and sequenced behind simpler ones.

## Limitations

- The evidence comes from a single grammar game used freely in 11 classes across 8 schools in French-speaking Switzerland with students aged 8–11, so transfer to other domains, ages and structured-reasoning tasks is untested.
- Data cover one year (April 2025–March 2026) of an interactive game, and the morphosyntactic task is unusually well structured, which the authors note as the condition under which the approach should work.
- The state categorizations and strategy dimensions are constructs derived from action logs, not validated against think-aloud or interview evidence of what students were actually reasoning.
- Effects are predictive, not causal: the paper models which validations succeed, but does not report a trial showing that triggering scaffolds at these thresholds improves learning.
- Calibration degrades at the probability extremes because those bins are sparse.

## Citation

Geoffre, T., Yuan, Z., & Geoffre, T. (2026). [*Making Reasoning Visible: Configuration-Aware Diagnostic Modeling for Adaptive Scaffolding in Structured Reasoning Tasks*](https://arxiv.org/abs/2610.35609). arXiv:2610.35609.
