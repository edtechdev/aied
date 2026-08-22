---
title: Item Response Theory
created: "2026-07-28T10:44:35-04:00"
updated: "2026-08-18T09:30:00-04:00"
type: concept
tags: [educational-measurement, assessment-validity, knowledge-tracing, student-modeling, psychometrically-aware-ai]
confidence: medium
---

> **Item response theory (IRT)** — a family of psychometric models that estimate latent ability from item responses by modeling the relationship between a learner's ability and the probability of answering each item correctly. IRT models item difficulty and discrimination, enabling measurement precision and adaptive testing. In the AI era, IRT meets [[llm|LLMs]] in [[llm-item-difficulty-prediction]] and [[llm-psychometric-calibration-cdp]]: AI predicts and calibrates item difficulty, potentially improving measurement precision and feeding [[adaptive-learning]].

IRT treats ability (θ) and item parameters (difficulty, discrimination, sometimes guessing) as jointly estimated from response patterns, rather than treating a raw score as the measure. This makes it possible to compare learners on a common scale, to select items adaptively, and to estimate precision per person rather than globally.

### How IRT appears in the research

- **AI-predicted difficulty:** [[llm-item-difficulty-prediction|LLM item-difficulty prediction]] uses language models to estimate item difficulty, which must be validated against empirically fitted IRT parameters.
- **Psychometric calibration:** [[llm-psychometric-calibration-cdp|LLM psychometric calibration]] aligns model-based assessment with IRT-based measurement so that AI-generated responses preserve measurement properties.
- **Knowledge tracing and student modeling:** IRT is closely related to [[knowledge-tracing]] and [[student-modeling]] — models that track learner knowledge over time — sharing the goal of estimating unobservable learner states from observable responses.
- **Bayesian hierarchical field validation:** [[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]] uses a Bayesian hierarchical 2PL IRT model (with pre-test anchor items to place 1,686 students on a common θ scale) to show that AI-generated questions match expert-written standardized-exam items in difficulty and discrimination — a large-scale demonstration of IRT as the validation backbone for [[automated-question-generation]].

### Connections

IRT is a foundation of [[educational-measurement]] and [[assessment-validity]], underpins [[adaptive-learning]] (adaptive item selection) and [[student-modeling]], and connects to [[psychometrically-aware-ai]] (AI assessment aligned with measurement theory) and [[knowledge-tracing]]. It features in [[llm-difficulty-calibration-programming-exams-2026|LLM difficulty calibration]] for programming assessment.

## Connected Concepts

- [[educational-measurement]]
- [[assessment-validity]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[psychometrically-aware-ai]]
- [[adaptive-learning]]
- [[automated-assessment]]
- [[intelligent-tutoring]]

## Connected Articles
- [[assessment-latent-structure-human-llm-2026]] — Do assessment instruments measure the same thing for humans and LLMs? (Strugatski et al. 2026)
- [[assessing-quality-ai-generated-exams-field-2025]] — Large-scale IRT field validation of AI-generated exams
- [[jin-glat-genai-literacy-assessment]] — GLAT uses IRT/2PL validation (Jin et al. 2025)

- [[llm-item-difficulty-prediction]] — LLM prediction of item difficulty
- [[llm-psychometric-calibration-cdp]] — Aligning LLM assessment with psychometric calibration
- [[llm-difficulty-calibration-programming-exams-2026]] — LLM difficulty calibration in programming exams
- [[multimodal-item-parameter-estimation-2026]] — Multimodal item-parameter estimation
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable knowledge tracing

- [[zhang-ct-ai-training-test-2026]] — Computational Thinking in AI Training Test (CTAT)
