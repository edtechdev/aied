---
title: Item Response Theory
created: 2026-07-28
updated: 2026-08-15
type: concept
tags: [educational-measurement, assessment-validity, knowledge-tracing, student-modeling, psychometrically-aware-ai]
confidence: medium
---

> **Item response theory (IRT)** — a family of psychometric models that estimate latent ability from item responses by modeling the relationship between a learner's ability and the probability of answering each item correctly. IRT models item difficulty and discrimination, enabling measurement precision and adaptive testing. In the AI era, IRT meets LLMs in [[llm-item-difficulty-prediction]] and [[llm-psychometric-calibration-cdp]]: AI predicts and calibrates item difficulty, potentially improving measurement precision and feeding [[adaptive-learning]].

IRT treats ability (θ) and item parameters (difficulty, discrimination, sometimes guessing) as jointly estimated from response patterns, rather than treating a raw score as the measure. This makes it possible to compare learners on a common scale, to select items adaptively, and to estimate precision per person rather than globally.

### How IRT appears in the research

- **AI-predicted difficulty:** [[llm-item-difficulty-prediction|LLM item-difficulty prediction]] uses language models to estimate item difficulty, which must be validated against empirically fitted IRT parameters.
- **Psychometric calibration:** [[llm-psychometric-calibration-cdp|LLM psychometric calibration]] aligns model-based assessment with IRT-based measurement so that AI-generated responses preserve measurement properties.
- **Knowledge tracing and student modeling:** IRT is closely related to [[knowledge-tracing]] and [[student-modeling]] — models that track learner knowledge over time — sharing the goal of estimating unobservable learner states from observable responses.

### Connections

IRT is a foundation of [[educational-measurement]] and [[assessment-validity]], underpins [[adaptive-learning]] (adaptive item selection) and [[student-modeling]], and connects to [[psychometrically-aware-ai]] (AI assessment aligned with measurement theory) and [[knowledge-tracing]]. It features in [[llm-difficulty-calibration-programming-exams-2026|LLM difficulty calibration]] for programming assessment.

## Connected Concepts

- [[educational-measurement]]
- [[assessment-validity]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[psychometrically-aware-ai]]
- [[adaptive-learning]]
- [[confidence-aware-ai-assessment]]
- [[ai-tutoring]]

## Connected Articles

- [[llm-item-difficulty-prediction]] — LLM prediction of item difficulty
- [[llm-psychometric-calibration-cdp]] — Aligning LLM assessment with psychometric calibration
- [[llm-difficulty-calibration-programming-exams-2026]] — LLM difficulty calibration in programming exams
- [[multimodal-item-parameter-estimation-2026]] — Multimodal item-parameter estimation
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable knowledge tracing
