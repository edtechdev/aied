---
title: Reinforcement Learning Measurement Model
created: 2026-05-12
updated: 2026-05-12
type: concept
tags: [assessment, learning-analytics, knowledge-tracing, benchmark]
sources: ["raw/papers/2605.09305.md"]
confidence: medium
---
# Reinforcement Learning Measurement Model for Interactive Assessment

**Wenqian Xu, Feng Ji (2026)** — [arXiv preprint](https://arxiv.org/abs/2605.09305)
## Key Findings

Interactive assessments generate sequential process data that conventional item response models (IRT) cannot adequately handle. This paper proposes a **reinforcement learning measurement model** that links action choices to state-action values, extending beyond existing MDP-based measurement approaches.^[raw/papers/2605.09305.md]

The model addresses the gap between traditional static assessment models and the dynamic, interactive nature of modern computer-based assessments. It builds on prior work (LaMar, 2018) but improves reliability of estimates for interactive assessments where students' action sequences carry diagnostic information.^[raw/papers/2605.09305.md]

## Connections to AIED

This work directly extends [[knowledge-tracing-irt]] by replacing static IRT with a dynamic RL-based approach. It connects to [[assessment]] by providing a new framework for scoring interactive assessments that capture student problem-solving processes rather than just final answers.^[raw/papers/2605.09305.md]

The approach also relates to [[knowledge-tracing]] and [[learning-analytics]] as it extracts diagnostic signals from interaction data that go beyond traditional performance metrics.

## Related Pages

- [[knowledge-tracing-irt]] — RL measurement model extends beyond static IRT approaches
- [[assessment]] — New framework for scoring interactive process-based assessments
- [[knowledge-tracing]] — Dynamic tracing of student performance through sequential action data
- [[learning-analytics]] — Extracting diagnostic signals from interactive assessment logs
- [[intelligent-tutoring]] — Interactive assessment models inform tutoring system design
- [[representation-robustness-llm-math-problem-solving]] — Representation Robustness under Executable Reasoning Constra

## Citation

Xu, W., & Ji, F. (2026). Reinforcement learning measurement model. arXiv:2605.09305.
