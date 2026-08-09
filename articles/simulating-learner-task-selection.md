---
title: Simulating Learners' Task-Selection Strategies and System Constraints in Mastery Learning
created: 2026-05-22
updated: 2026-05-22
type: article
tags: [intelligent-tutoring, mastery-learning, adaptive-learning, engagement-metrics, simulation, k-12, student-experience]
sources: ["raw/papers/2605.21613.md"]
confidence: high
---

# Simulating Learners' Task-Selection Strategies and System Constraints in Mastery Learning

**Haley Noh, Aarna Chowdhary, Jeroen Ooge, Vincent Aleven, Conrad Borchers (2026)** — Carnegie Mellon University. EDM 2026 (short paper).

## Summary

Intelligent Tutoring Systems often grant learners shared control over skill and problem selection. We propose a simulation-based framework to examine how learner task-selection strategies and system constraints shape mastery learning efficiency.

## Key Findings

This paper introduces a simulation-based framework for evaluating how learner task-selection strategies interact with mastery learning algorithms in Intelligent Tutoring Systems. Using interaction data from 261 students across two mathematical domains (equation solving and graph interpretation), the authors simulate strategies including Weakness Targeting and Interleaving, measuring overpractice as an efficiency metric. Risk-averse strategies produced substantially higher overpractice, especially for complex multi-step problems. Critically, targeted system constraints significantly reduced inefficiencies for maladaptive strategies while minimally affecting already efficient strategies. This provides a low-cost methodology for pre-testing algorithmic constraints before classroom deployment. The findings extend [[engagement-forecasting-its]] by exploring the behavioral mechanisms behind engagement patterns, and complement [[adaptive-learning-systems]] research by quantifying how learner autonomy interacts with system optimization. The simulation methodology aligns with [[neural-symbolic-knowledge-tracing]] approaches that model learner behavior patterns, while the focus on mastery learning efficiency connects to [[genai-tutor-engagement-patterns]] research on how different student behaviors shape tutoring outcomes. The finding that constraints can correct maladaptive behaviors without penalizing efficient learners has implications for [[llm-student-modeling-memory]] architectures that could incorporate task-selection preferences into student models.

## Related Pages
- [[engagement-forecasting-its]] — Extends engagement research by modeling the behavioral mechanisms of task-selection strategies
- [[adaptive-learning-systems]] — Quantifies how learner autonomy interacts with mastery learning algorithm optimization
- [[neural-symbolic-knowledge-tracing]] — Simulation of learner behavior patterns complements symbolic knowledge tracing approaches
- [[genai-tutor-engagement-patterns]] — Different task-selection strategies produce distinct engagement outcomes in tutoring systems
- [[llm-student-modeling-memory]] — Task-selection preferences could inform student models for adaptive system design

## Citation

Haley Noh, Aarna Chowdhary, Jeroen Ooge, Vincent Aleven, Conrad Borchers (2026). [Simulating Learners' Task-Selection Strategies and System Constraints in Mastery Learning](https://arxiv.org/abs/2605.21613). arXiv:2605.21613. EDM 2026 (short paper).
