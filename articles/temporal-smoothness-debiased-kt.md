---
title: Temporal Smoothness Doubly Robust Learning for Debiased Knowledge Tracing
created: 2026-05-13
updated: 2026-05-13
type: article
tags: [knowledge-tracing, learning-analytics, personalized-learning, intelligent-tutoring, student-experience]
sources: ['raw/papers/2605.05958.md']
confidence: medium
---

## Key Findings

- Knowledge tracing (KT) systems suffer from selection bias because exercise recommendations are non-random, so training on observed logs with standard empirical risk produces biased mastery estimates.
- The proposed Temporal Smoothness Doubly Robust (TSDR) framework combines a propensity model with an error imputation model, jointly optimizing the KT predictor and the imputation model.
- A temporal smoothness regularizer reduces variance while preserving the unbiasedness guarantees of the doubly robust estimator.
- The doubly robust property ensures the estimator remains unbiased if *either* the propensity model or the imputation model is correct.
- By debiasing mastery estimates, the framework prevents adaptive recommendations from compounding errors in downstream recommendation loops.

## Analysis

This paper addresses a critical but under-examined issue in KT systems: **selection bias** from non-random exercise recommendations. Prior KT methods train on observed logs using standard empirical risk, producing biased mastery estimates that compound errors in downstream recommendation loops. The proposed **Temporal Smoothness Doubly Robust (TSDR)** framework combines a propensity model with an error imputation model, regularized for temporal smoothness. The smoothness prior encodes the intuition that a student's mastery changes gradually over time, so sharp fluctuations in predicted mastery are more likely to reflect noise than genuine learning events.

The doubly robust property ensures the estimator remains unbiased if *either* the propensity or imputation model is correct. This connects to [[personalized-learning]] by ensuring adaptive recommendations are not systematically biased toward high-engagement students, and it extends [[knowledge-tracing]] methodology with a principled treatment of the missing-data structure inherent in learner interaction logs.

## Implications for AI in Education

Selection bias is not a niche concern: any adaptive system that recommends exercises based on what it believes a student knows creates a feedback loop in which the data collected is shaped by the model's own prior estimates. TSDR's combination of propensity weighting, error imputation, and temporal smoothness offers a template for building debiased [[student-modeling]] pipelines that remain stable as they are iteratively retrained on fresh interaction data. For researchers and practitioners working on adaptive learning systems, the framework underscores the importance of modeling the data-generating process — who gets which exercise and why — rather than treating observed logs as a random sample. The work also relates to [[bias-mitigation]] more broadly: fairness and accuracy concerns in educational AI are often traceable to selection mechanisms that systematically over- or under-represent particular learners.

## Connected Concepts

- [[personalized-learning]]
## Connected Articles

- [[explainable-probabilistic-kt]] — Explainable Knowledge Tracing via Probabilistic Embeddings and Pattern-based Reasoning
- [[skill-acquisition-without-temporal-info]] — Estimating Learners' Skill Acquisition Without Temporal Information
- [[knowledge-gap-detection-ai-tas]] — Detecting Knowledge Gaps from Conversational AI Interactions Using Curriculum Prerequisite Graphs
- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM-Enhanced Hierarchical Cognitive Diagnosis
- [[student-math-competence-clustering]] — Archetypes or ability? Clustering for modelling student mathematical competence
- [[pattern-kc-programming-recommendation]] — Automated Recommendation of Programming Learning Content Using Pattern-based Knowledge Components

## Citation

Zhan et al. (2026). [Temporal Smoothness Doubly Robust Learning for Debiased Knowledge Tracing](https://arxiv.org/abs/2605.05958). arXiv:2605.05958. arXiv preprint.
