---
title: "How Online Learners Engage in Self-Directed Modeling: A Behavioral Analysis"
created: "2026-09-03T14:02:49-04:00"
updated: "2026-09-19T07:22:56-04:00"
type: article
pedagogy: [self-directed-learning]
technology: [adaptive-learning, learning-analytics, simulation, student-modeling]
methods: [quantitative-research]
sources: ['raw/papers/an-goel-self-directed-modeling-2026.md']
confidence: high
discipline: [science education]
audience: [learning analytics designers, researchers, instructional designers]
page_kind: [evaluation]
---

> **Synthesis:** **How Online Learners Engage in Self-Directed Modeling: A Behavioral Analysis** — An, Hammock & Goel (2025) analyze the clickstreams of 315 self-directed [[online-teaching-and-learning|online learners]] across 822 models built in VERA, an ecological [[simulation|modeling]] tool. Using [[learning-analytics]] techniques — activity sequence analysis, hierarchical clustering, and [[machine-learning|Markov chain]] models — they identify three behavioral patterns: Observation, Construction, and Exploration. Learners tend to progress from construction-focused behavior toward more active, hypothesis-driven Exploration, with Observation consistently present across all learning phases.

## Key Findings

- Three distinct behavioral patterns emerge from 822 activity sequences: **Observation** (N=382; frequent [[simulation]] runs and parameter adjustment with little model construction, short sessions), **Construction** (N=338; hands-on model building with little simulation, shortest sessions), and **Exploration** (N=69; full cycles of model construction, parameterization, and simulation, longest sessions).
- Learners evolve over time from Construction toward more active, full-cycle [[self-directed-learning|self-directed]] Exploration, while Observation behavior persists consistently across all phases of learning — as both an entry point and an ongoing strategy.
- Exploration consistently yields the most complex and diverse models, while Observation is dominated by copied rather than original models (91.3%), suggesting that promoting full-cycle exploratory behavior within modeling environments may improve [[science-education|modeling]] outcomes.
- A fine-grained Markov chain analysis reveals nine transition-based behavioral clusters (e.g., adjusting parameters of existing models, revising models with biodiversity lookups, exploration with fine parameter tuning) mapped onto the three broader patterns, exposing heterogeneous engagement within each type.
- The work demonstrates that [[learning-analytics]] methods — combining sequence analysis with Markov chain modeling — can uncover insights into learner behavior in unstructured, [[self-directed-learning|self-directed]] tasks even in the absence of demographic or contextual data.
- These patterns inform [[adaptive-learning|adaptive and personalized learning]] design: recognizing learner profiles and targeting feedback (e.g., recommending similar models or supporting deeper conceptual understanding) could move learners from surface-level Observation to more integrative modeling.

## What this means for practice

- **Instructional designers.** Treat repeated [[simulation]] runs without model building as a legitimate entry point rather than disengagement, then prompt learners to change one parameter and state a hypothesis — Observation was the most common pattern and persisted across every phase of learning.
- **Learning analytics designers.** Detect copied models at the moment of creation: 91.3% of Observation-pattern models were copies of existing models, so a clone flag plus a "what will you change?" step can move learners toward Construction and Exploration.
- **Instructional designers.** Scaffold at least one full construct–parameterize–simulate cycle into every assignment, because the full-cycle Exploration pattern (N = 69) produced the most complex and diverse models.
- **Researchers.** Reuse the sequence-plus-[[machine-learning|Markov chain]] pipeline to surface transition-level clusters: the nine clusters revealed heterogeneous engagement that the three coarse pattern labels hide.

## Limitations

- Single-platform snapshot: the analysis covers 315 learners and 822 models in VERA as of November 2021, with no demographic or achievement data collected, so behavior patterns cannot be tied to grade level, prior knowledge, or [[learning-gains|learning outcomes]].
- Learners self-selected into an informal platform and are therefore likely motivated; the authors state directly that the log data leave learner context unknown and limit the generalizability of the findings.
- The clickstream contains no time durations, and 33 outlier sequences beyond mean ± 2 SD were removed before segmentation, so session pacing and extreme engagement patterns are invisible in the results.
- The evidence is behavioral only — no surveys or interviews were used to verify that the inferred Observation, Construction, and Exploration labels match what learners intended, which the authors name as the main gap to close.

## Connected Concepts

- [[self-directed-learning]]
- [[learning-analytics]]
- [[simulation]]
- [[student-modeling]]
- [[science-education]]
- [[adaptive-learning]]

## Connected Articles

- [[learner-ai-interaction-patterns-oop]] — Patterns of Learner-AI Interaction and Academic Performance in an Object-Oriented Programming Course
- [[tutortrace-learner-behavioral-states-2026]] — TutorTrace: Classifying Learner Behavioral States in AI-Assisted Programming
- [[benzion-ai-physics-simulations-virtual-lab]] — AI Generation of Physics Simulations: Building Your Own Virtual Lab
- [[learning-behavior-background-advantage-ai-ed]] — Learning Behavior and Background Advantage in AI-Assisted Education

## Citation

An, S., Hammock, J., & Goel, A. (2025). [How Online Learners Engage in Self-Directed Modeling: A Behavioral Analysis](https://doi.org/10.1007/s40593-025-00506-5). *International Journal of Artificial Intelligence in Education*, 35, 3501–3528.
