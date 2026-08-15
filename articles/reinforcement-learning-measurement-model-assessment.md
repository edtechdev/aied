---
title: Reinforcement Learning Measurement Model
created: 2026-05-12
updated: 2026-08-15
type: article
tags: [assessment, learning-analytics, knowledge-tracing, benchmark, llm]
sources: ['raw/papers/2605.09305.md']
confidence: medium
---

# Reinforcement Learning Measurement Model for Interactive Assessment

## Key Findings

Interactive assessments generate sequential process data that conventional item response models (IRT) cannot adequately handle. This paper proposes a **reinforcement learning measurement model** that links action choices to state-action values, extending beyond existing MDP-based measurement approaches.

The model addresses the gap between traditional static assessment models and the dynamic, interactive nature of modern computer-based assessments. It builds on prior work (LaMar, 2018) but improves reliability of estimates for interactive assessments where students' action sequences carry diagnostic information.

## Connections to AIED

This work directly extends [[knowledge-tracing-irt]] by replacing static IRT with a dynamic RL-based approach. It connects to [[assessment]] by providing a new framework for scoring interactive assessments that capture student problem-solving processes rather than just final answers.

The approach also relates to [[knowledge-tracing]] and [[learning-analytics]] as it extracts diagnostic signals from interaction data that go beyond traditional performance metrics. As a psychometric advance, it supports [[psychometrically-aware-ai]] design in which interaction traces are modeled as state-action trajectories rather than collapsed into single scores.

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

- [[knowledge-tracing-irt]]
- [[llm-psychometric-calibration-cdp]]
## Citation

Xu, W., & Ji, F. (2026). [Reinforcement learning measurement model](https://arxiv.org/abs/2605.09305). arXiv:2605.09305.
