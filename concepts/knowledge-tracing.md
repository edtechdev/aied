---
title: Knowledge Tracing
created: "2026-06-23T10:44:35-04:00"
updated: "2026-08-27T04:58:28.248706-04:00"
type: concept
tags: [knowledge-tracing, learning-analytics, intelligent-tutoring, adaptive-learning, student-modeling, personalized-learning, student-experience, llm]
audience: [student experience]
confidence: medium
---

> **Knowledge tracing** — modeling what learners know over time by tracking their performance on exercises and predicting future mastery. It is the wiki's richest modeling thread, spanning Bayesian, deep learning, and [[llm|LLM-enhanced]] approaches to tracking student knowledge as it evolves.

Knowledge tracing transforms raw exercise responses into estimates of what a student has mastered and what they still need to learn. Unlike simple correctness tracking, knowledge tracing models the temporal dynamics of learning — when knowledge is gained, when it decays, and how concepts relate to each other.

### Approaches represented in the wiki

- **Bayesian approaches:** [[stanbkt-bayesian-knowledge-tracing]] standardizes BKT implementations, while [[mbp-kt-meta-behavioral-knowledge-tracing]] incorporates meta-behavioral signals
- **Neural and hybrid models:** [[neural-symbolic-knowledge-tracing]] combines symbolic reasoning with neural networks; [[explainable-probabilistic-kt]] advances interpretable probabilistic models
- **Hypergraph memory networks:** [[thymen-temporal-hypergraph-knowledge-tracing-2026|THyMeN]] augments memory-based tracing (DKVMN) with temporal hypergraph reasoning, modeling dynamic higher-order interactions among concepts that co-occur within multi-skill questions
- **Dialogue-based KT:** [[huang-interpretable-knowledge-tracing-2026]] adapts knowledge tracing for conversational tutoring
- **LLM-enhanced:** [[xie-hillm-cd-2026|HiLLM-CD]] uses LLMs for automated concept tree construction and hierarchical proficiency inference

### Relationship to other concepts

Knowledge tracing is closely related to [[student-modeling]] — while knowledge tracing specifically models cognitive knowledge over time, student modeling is the broader practice of representing all aspects of a learner (affective state, engagement, preferences). Knowledge tracing feeds into [[adaptive-learning]] and [[personalized-learning]] systems that need to know what to teach next, and into [[intelligent-tutoring]] platforms that use mastery estimates to select appropriate problems. It connects to [[learning-analytics]] for dashboard and intervention design, and to [[cognitive-diagnosis]] for fine-grained skill assessment. Knowledge-tracing constructs also inform [[simulating-students|simulated students]] — a simulated learner's cognitive state is often formalized with the same mastery/decay dynamics that knowledge tracing models, so simulation is a way to *generate* the knowledge states that tracing methods normally *infer* from real response data.

## Connected Concepts

- [[student-modeling]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[formative-assessment]]
- [[ai-education]]
- [[ai-ed-evaluation]]
- [[multimodal]]
- [[teacher-role]]
- [[cognitive-offloading]]
- [[llm]]
- [[simulating-students]]
## Connected Articles
- [[multimodal-item-parameter-estimation-2026]]

- [[educlaw-bench-pedagogical-llm-agents-2026]]
- [[huang-interpretable-knowledge-tracing-2026]]
- [[thymen-temporal-hypergraph-knowledge-tracing-2026]]
- [[learning-engagement-assistant-lea]]
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[multimodal-knowledge-graph-educational-reasoning]]
- [[pattern-kc-programming-recommendation]]
- [[proprl-prerequisite-relation-learning]]
- [[reinforcement-learning-measurement-model-assessment]]
- [[skill-acquisition-without-temporal-info]]
- [[xie-hillm-cd-2026]]
- [[zerkouk-comprehensive-review-its-2025]]- [[trace-course-grade-prediction-2026]]
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)

- [[cogevolution-student-cognitive-evolution-agent-2026]] — CogEvolution: generative agent simulating students' cognitive evolution
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive ICAP scaffolding in an ITS (BKT vs DRL)
