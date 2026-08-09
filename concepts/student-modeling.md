---
title: Student Modeling
created: 2026-08-09
updated: 2026-08-09
type: concept
tags: [student-modeling, knowledge-tracing, adaptive-learning, personalized-learning, learning-analytics, intelligent-tutoring]
confidence: high
---

> **Student modeling** — the broad practice of representing learner characteristics including knowledge, skills, affective states, engagement, and preferences in computational form. Student modeling is the foundation upon which adaptive and personalized AI in education systems are built.

Student modeling is the umbrella term encompassing all ways of representing learners in AI systems. Where [[knowledge-tracing]] specifically tracks cognitive knowledge over time, student modeling includes affective modeling, engagement tracking, learning style inference, and preference learning. A complete student model answers: *who is this learner, what do they know, how do they feel, and what do they need next?*

### Dimensions of student modeling

- **Cognitive modeling:** [[knowledge-tracing]] and [[cognitive-diagnosis]] systems track what students know and their skill mastery
- **Affective modeling:** [[affective-computing]] and [[affective-tutoring]] detect and respond to student emotions and motivation
- **Behavioral modeling:** [[learning-analytics]] systems infer engagement patterns from clickstream and interaction data
- **Proficiency modeling:** [[personalized-learning]] and [[adaptive-learning]] platforms use student models to sequence content

### LLM-era student modeling

Recent advances use [[llm|LLMs]] for richer student modeling. The [[xie-hillm-cd-2026|HiLLM-CD framework]] represents students as proficiency trees, while [[multimodal-knowledge-graph-educational-reasoning|multimodal approaches]] construct evidence-grounded knowledge representations from diverse data sources. LLMs enable automated model construction from educational text, reducing reliance on expert annotation.

### Connections to other concepts

Student modeling feeds into [[intelligent-tutoring]] (for problem selection), [[personalized-learning]] (for content sequencing), and [[learning-analytics]] (for dashboards and interventions). It connects fundamentally to [[knowledge-tracing]] for cognitive tracking and to [[adaptive-learning]] for system adaptation.

## Connected Concepts

- [[knowledge-tracing]]
- [[adaptive-learning]]
- [[ai-education]]
- [[generative-ai]]
- [[personalized-learning]]
- [[llm]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[cognitive-diagnosis]]
- [[affective-computing]]
- [[formative-assessment]]
- [[student-experience]]

## Connected Articles

- [[xie-hillm-cd-2026]] — HiLLM-CD: Hierarchical Cognitive Diagnosis
- [[multimodal-knowledge-graph-educational-reasoning]] — Multimodal KG for Educational Reasoning
- [[educlaw-bench-pedagogical-llm-agents-2026]] — EduClaw-Bench: Pedagogical LLM Agent Benchmark
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable Knowledge Tracing
- [[knowledge-gap-detection-ai-tas]] — Knowledge Gap Detection with AI TAs
- [[correct-answer-trap-misconceptions]] — Correct Answer Trap and Misconceptions
- [[llm-item-difficulty-prediction]] — LLM Item Difficulty Prediction