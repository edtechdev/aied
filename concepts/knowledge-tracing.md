---
title: Knowledge Tracing
created: 2026-06-23
updated: 2026-08-09
type: concept
tags: [knowledge-tracing, learning-analytics, intelligent-tutoring, adaptive-learning, student-modeling, personalized-learning, student-experience, llm]
confidence: medium
---

> **Knowledge tracing** — modeling what learners know over time by tracking their performance on exercises and predicting future mastery. It is the wiki's richest modeling thread, spanning Bayesian, deep learning, and LLM-enhanced approaches to tracking student knowledge as it evolves.

Knowledge tracing transforms raw exercise responses into estimates of what a student has mastered and what they still need to learn. Unlike simple correctness tracking, knowledge tracing models the temporal dynamics of learning — when knowledge is gained, when it decays, and how concepts relate to each other.

### Approaches represented in the wiki

- **Bayesian approaches:** [[stanbkt-bayesian-knowledge-tracing]] standardizes BKT implementations, while [[mbp-kt-meta-behavioral-knowledge-tracing]] incorporates meta-behavioral signals
- **Neural and hybrid models:** [[neural-symbolic-knowledge-tracing]] combines symbolic reasoning with neural networks; [[explainable-probabilistic-kt]] advances interpretable probabilistic models
- **Dialogue-based KT:** [[difficulty-aware-dialogue-kt]] adapts knowledge tracing for conversational tutoring
- **LLM-enhanced:** [[xie-hillm-cd-2026|HiLLM-CD]] uses LLMs for automated concept tree construction and hierarchical proficiency inference
- **Cold-start problem:** [[cold-start-knowledge-tracing-safeinsights]] examines model accuracy when students begin learning new skills

### Relationship to other concepts

Knowledge tracing is closely related to [[student-modeling]] — while knowledge tracing specifically models cognitive knowledge over time, student modeling is the broader practice of representing all aspects of a learner (affective state, engagement, preferences). Knowledge tracing feeds into [[adaptive-learning]] and [[personalized-learning]] systems that need to know what to teach next, and into [[intelligent-tutoring]] platforms that use mastery estimates to select appropriate problems. It connects to [[learning-analytics]] for dashboard and intervention design, and to [[cognitive-diagnosis]] for fine-grained skill assessment.

## Connected Concepts

- [[adaptive-learning]]
- [[learning-analytics]]
- [[llm]]
- [[personalized-learning]]
- [[student-modeling]]
- [[student-experience]]
- [[higher-ed]]
- [[generative-ai]]
- [[formative-assessment]]
- [[intelligent-tutoring]]
- [[cognitive-diagnosis]]
- [[scaffolding]]

## Connected Articles

- [[stanbkt-bayesian-knowledge-tracing]] — Standardized BKT Knowledge Tracing
- [[mbp-kt-meta-behavioral-knowledge-tracing]] — Meta-Behavioral Knowledge Tracing
- [[neural-symbolic-knowledge-tracing]] — Neural-Symbolic Knowledge Tracing
- [[explainable-probabilistic-kt]] — Explainable Probabilistic Knowledge Tracing
- [[difficulty-aware-dialogue-kt]] — Difficulty-Aware Dialogue Knowledge Tracing
- [[xie-hillm-cd-2026]] — HiLLM-CD: Hierarchical Cognitive Diagnosis
- [[cold-start-knowledge-tracing-safeinsights]] — Cold-Start Problem in KT
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable Knowledge Tracing
- [[zerkouk-comprehensive-review-its-2025]] — Comprehensive ITS Review