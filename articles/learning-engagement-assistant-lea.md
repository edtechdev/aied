---
title: "Learning Engagement Assistant (LEA): Cross-Course Scalability and Classroom Evaluation of an Agentic AI Tutoring System"
created: "2026-07-16T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [llm, generative-ai, intelligent-tutoring, higher-ed, stem-education, formative-assessment, benchmark, knowledge-tracing, personalized-learning, rag]
sources: ['raw/papers/2607.13370.md']
confidence: high
---

LEA (Learning Engagement Assistant) is an **agentic AI tutoring system** that couples course-specific retrieval-augmented generation (RAG) with structured [[knowledge-tracing]] / Knowledge Component (KC) models across integrated Chat, Tutor, and Quiz modes. This paper reports the first real-student classroom deployment of LEA (n = 8, STEM course CMP511) and the first empirical test of its cross-course scalability, extending a prior simulation-only validation that used synthetic learner agents.

The study exposes a key gap between simulated evaluation and [[student-experience|real classroom deployment]]: synthetic learners predicted engagement patterns that diverged from observed behaviour, arguing that simulation alone cannot anticipate all aspects of live use. A RAGAS-based scalability evaluation across 660 questions found Answer Relevancy (0.88-0.94) and Context Precision (0.88-0.90) stable across courses, while Faithfulness declined with curriculum distance from LEA's original course (0.69 to 0.50) — a preliminary signal that downstream components, not the orchestration layer, constrain course-agnostic tutoring.

The work sits within the broader literature on [[intelligent-tutoring]] and [[agentic-workflows-education]], with implications for [[higher-ed]] and [[stem-education]] deployment, and connects to debates on [[formative-assessment]] quality and the limits of automated [[feedback|Feedback Loop]] in [[personalized-learning]].

## Connected Concepts

- [[knowledge-tracing]]
- [[student-experience]]
- [[intelligent-tutoring]]
- [[higher-ed]]
- [[stem-education]]
- [[formative-assessment]]
- [[feedback]]
- [[personalized-learning]]
- [[rag]]
- [[agentic-ai]]
- [[generative-ai]]
- [[llm]]
## Connected Articles

- [[agentic-workflows-education]]
## Citation

Teri Rumble, Javad Zarrin, P. George Lovell, Ruth Falconer (2026). [Learning Engagement Assistant (LEA): Cross-Course Scalability and Classroom Evaluation of an Agentic AI Tutoring System](https://arxiv.org/abs/2607.13370).
