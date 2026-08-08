---
title: "Learning Engagement Assistant (LEA): Cross-Course Scalability and Classroom Evaluation of an Agentic AI Tutoring System"
created: 2026-07-16
updated: 2026-07-16
type: concept
tags: [llm, generative-ai, intelligent-tutoring, higher-ed, stem-education, formative-assessment, benchmark]
sources: [raw/papers/2607.13370.md]
confidence: high
---
# Learning Engagement Assistant (LEA): Cross-Course Scalability and Classroom Evaluation of an Agentic AI Tutoring System

**Teri Rumble, Javad Zarrin, P. George Lovell, Ruth Falconer (2026)** — [arXiv preprint](https://arxiv.org/abs/2607.13370)
LEA (Learning Engagement Assistant) is an **agentic AI tutoring system** that couples course-specific retrieval-augmented generation (RAG) with structured [[knowledge-tracing]] / Knowledge Component (KC) models across integrated Chat, Tutor, and Quiz modes. This paper reports the first real-student classroom deployment of LEA (n = 8, STEM course CMP511) and the first empirical test of its cross-course scalability, extending a prior simulation-only validation that used synthetic learner agents.

The study exposes a key gap between simulated evaluation and [[student-ai-interaction|real classroom deployment]]: synthetic learners predicted engagement patterns that diverged from observed behaviour, arguing that simulation alone cannot anticipate all aspects of live use. A RAGAS-based scalability evaluation across 660 questions found Answer Relevancy (0.88-0.94) and Context Precision (0.88-0.90) stable across courses, while Faithfulness declined with curriculum distance from LEA's original course (0.69 to 0.50) — a preliminary signal that downstream components, not the orchestration layer, constrain course-agnostic tutoring.

The work sits within the broader literature on [[intelligent-tutoring]] and [[agentic-workflows-education]], with implications for [[higher-ed]] and [[stem-education]] deployment, and connects to debates on [[formative-assessment]] quality and the limits of automated [[feedback-loop]] in [[personalized-learning]].

## Related Pages
- [[intelligent-tutoring]] — LEA as an agentic ITS combining RAG with KC models
- [[higher-ed]] — deployed in a university STEM course (CMP511)
- [[stem-education]] — CMP511 is a computing/STEM course
- [[formative-assessment]] — Quiz mode and RAGAS evaluation of answer quality
- [[student-ai-interaction]] — first classroom deployment with real students (n=8)
- [[feedback-loop]] — Chat and Tutor modes provide AI feedback

## Citation

Teri Rumble, Javad Zarrin, P. George Lovell, Ruth Falconer (2026). Learning Engagement Assistant (LEA): Cross-Course Scalability and Classroom Evaluation of an Agentic AI Tutoring System. arXiv:2607.13370.
