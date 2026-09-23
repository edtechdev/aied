---
title: Reinforcement Learning Measurement Model
created: "2026-05-12T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
technology: [knowledge-tracing, learning-analytics, llm]
assessment: [assessment]
research_method: [theoretical analysis]
sources: ['raw/papers/2605.09305.md']
confidence: medium
audience: [researchers, assessment professionals]
methods: [benchmark]
---

> **Synthesis:** Interactive assessments generate sequential process data that conventional item response models (IRT) cannot adequately handle. This paper proposes a **[[reinforcement-learning|reinforcement learning]] measurement model** that links action choices to state-action values, extending beyond existing MDP-based measurement approaches.
> The model addresses the gap between traditional static assessment models and the dynamic, interactive nature of modern computer-based assessments. It builds on prior work (LaMar, 2018) but improves reliability of estimates for interactive assessments where students' action sequences carry diagnostic information.
## Connections to AIED

This work directly extends [[huang-interpretable-knowledge-tracing-2026]] by replacing static IRT with a dynamic RL-based approach. It connects to [[assessment]] by providing a new framework for scoring interactive assessments that capture student [[problem-solving]] processes rather than just final answers.

The approach also relates to [[knowledge-tracing]] and [[learning-analytics]] as it extracts diagnostic signals from interaction data that go beyond traditional performance metrics. As a psychometric advance, it supports [[psychometrically-aware-ai]] design in which interaction traces are modeled as state-action trajectories rather than collapsed into single scores.

## What this means for practice

- **Researchers.** Before scaling an interactive assessment, check whether the tabular MDP measurement model is still estimable: on the four peg-solitaire boards the RLMM cut RMSE in recovering log β by roughly one-third on the smallest board and more than two-thirds on the diamond board, with speedups from 2.1× to 19.1× as board complexity grew.
- **Researchers.** Use the step-level influence diagnostics to locate the decision points that carry the most information about a person, then treat those steps as the ones worth instrumenting or scaffolding; on the Big-L board, the lowest-β participants showed substantially larger influence values at steps 3-8.
- **Assessment professionals.** Keep β as a measurement parameter rather than a prediction score. The RLMM keeps a value-based choice-consistency interpretation through a Boltzmann choice rule and a soft Bellman-consistency penalty, so scores from [[item-response-theory|IRT]] and MDP-based systems can be compared on a shared, interpretable scale.
- **Assessment professionals.** Expect [[psychometrically-aware-ai|psychometrically aware]] assessment design to require explicit modeling decisions in open-ended environments: the analyst must define states, actions, and rewards, and those choices are less transparent than in a constrained puzzle task.
- **Designers.** Log sparse, well-chosen decision steps rather than every click if you plan to fit this model — the empirical pipeline retained 8,474 transitions from 106,315 raw ones by filtering out flat or incidental behavior.

## Limitations

- The simulation evidence comes from only four peg-solitaire boards with J = 200 simulated students each, all inherited from the design of LaMar (2018), so it tests the model on one task family.
- The empirical AQUALAB study cannot provide ground-truth parameter recovery; it supports the model only through positive associations between β̂ and cumulative reward, completion, and efficiency.
- The model uses a single positive ability parameter, which cannot capture multidimensional differences such as strategy selection, task persistence, or exploration patterns.
- The empirical sample is episode-level (1,133 episodes reduced from 106,315 raw transitions) because some users appear in multiple gameplay sessions and the logs do not support clean aggregation of all behavior into one trajectory.

## Connected Concepts

- [[assessment]]
- [[educational-measurement]]
- [[reinforcement-learning]]
- [[item-response-theory]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[learning-analytics]]
- [[psychometrically-aware-ai]]
- [[ai-ed-evaluation]]
## Connected Articles

- [[huang-interpretable-knowledge-tracing-2026]]
- [[llm-psychometric-calibration-cdp]]
## Citation

Xu, W., & Ji, F. (2026). [Reinforcement learning measurement model](https://arxiv.org/abs/2605.09305).
