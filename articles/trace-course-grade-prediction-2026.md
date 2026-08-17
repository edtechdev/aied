---
title: Jointly Predicting Courses and Grades Using a Transformer-Based Model (TRACE)
created: 2026-08-14T09:17:22-04:00
updated: 2026-08-14
type: article
tags: [learning-analytics, student-modeling, predictive-modeling, knowledge-tracing, higher-ed, personalized-learning, educational-measurement, ai-ed-evaluation, data-driven]
sources: ['raw/papers/2608.13409.md']
confidence: high
---

> **Synthesis:** Savala (2026) introduces TRACE (Transformer for Academic Course-grade Estimation), a model that jointly predicts both the set of courses a student will take and the grades they will receive in an upcoming semester. By encoding courses on a per-semester basis to capture course-concurrency effects and using a novel loss combining course-set and grade prediction, the model reduces mean absolute error by nearly 50% versus a grades-only architecture on ten years of institutional data. It also outperforms LSTM-sequential and graph-neural-network baselines while remaining interpretable and adaptable to new institutions. The work advances [[learning-analytics]] and [[student-modeling]] by treating academic history as concurrently structured rather than a simple sequence.

## Concurrency in Academic Modeling

Existing predictive models in learning analytics treat student academic history as a simple sequence, overlooking the concurrent nature of courses taken within a semester — a simplification that hurts predictions for students with heavy or challenging course loads. TRACE addresses this by encoding courses per-semester and jointly predicting course selection and grades, capturing the interrelations between what students choose to take and how they perform.

## Joint Prediction as an Inductive Bias

A novel loss function combines course-set prediction with grade prediction. The paper shows that predicting courses taken, in addition to the grades in them, yields significant improvements in prediction quality. The transformer architecture generalizes better than LSTM-based sequential models and graph-neural-network approaches, and naturally incorporates student attribute data.

## Interpretability and Transfer

TRACE offers interpretable models that adapt to new institutions via retraining and recalibration, strengthening the link between [[knowledge-tracing]], [[personalized-learning]], and institution-level [[ai-ed-evaluation]]. It demonstrates the value of modern neural architectures for institution-facing decision support in [[higher-ed]].

## Connected Concepts

- [[learning-analytics]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[higher-ed]]
- [[personalized-learning]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]

## Connected Articles

- [[at-risk-students-ml-prediction]]
- [[cold-start-knowledge-tracing-safeinsights]]
- [[huang-interpretable-knowledge-tracing-2026]]
- [[stanbkt-bayesian-knowledge-tracing]]
- [[mbp-kt-meta-behavioral-knowledge-tracing]]
- [[learning-behavior-background-advantage-ai-ed]]

## Citation

Savala, P. (2026). [*Jointly predicting courses and grades using a transformer-based model*](https://arxiv.org/abs/2608.13409). arXiv:2608.13409.
