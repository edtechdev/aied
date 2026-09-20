---
title: "Learning Engagement Assistant (LEA): Cross-Course Scalability and Classroom Evaluation of an Agentic AI Tutoring System"
created: "2026-07-16T04:33:04-04:00"
updated: "2026-09-20T03:45:11-04:00"
type: article
technology: [generative-ai, intelligent-tutoring, knowledge-tracing, llm, personalized-learning, rag]
assessment: [formative-assessment]
audience: [software developers]
discipline: [stem education]
level: [higher ed]
sources: ['raw/papers/2607.13370.md']
confidence: high
page_kind: [evaluation]
methods: [benchmark]
---

> **Synthesis:** LEA (Learning [[student-engagement|Engagement]] Assistant) is an **[[agentic-ai|agentic AI]] tutoring system** that couples course-specific [[rag|retrieval-augmented]] generation (RAG) with structured [[knowledge-tracing]] / Knowledge Component (KC) models across integrated Chat, Tutor, and Quiz modes. This paper reports the first real-student classroom deployment of LEA (n = 8, STEM course CMP511) and the first empirical test of its cross-course scalability, extending a prior [[simulation]]-only validation that used synthetic learner agents.

The study exposes a key gap between simulated evaluation and [[student-experience|real classroom deployment]]: synthetic learners predicted engagement patterns that diverged from observed behavior, arguing that simulation alone cannot anticipate all aspects of live use. A RAGAS-based scalability evaluation across 660 questions found Answer Relevancy (0.88-0.94) and Context Precision (0.88-0.90) stable across courses, while Faithfulness declined with [[curriculum-design|curriculum]] distance from LEA's original course (0.69 to 0.50) — a preliminary signal that downstream components, not the orchestration layer, constrain course-agnostic tutoring.

The work sits within the broader literature on [[intelligent-tutoring]] and [[agentic-workflows-education]], with implications for [[higher-ed]] and [[stem-education]] deployment, and connects to debates on [[formative-assessment]] quality and the limits of automated [[feedback|Feedback Loop]] in [[personalized-learning]].

## What this means for practice

- **Software developers.** Treat simulation-based validation as necessary but insufficient. Synthetic learners matched student experience in Chat mode, were overoptimistic in Tutor mode, and had no mechanism to detect the quiz question-repetition bug that two of eight students described.
- **Software developers.** Keep the orchestration layer course-agnostic and expect to rebuild what sits downstream: onboarding CMP202 and PSY555 required zero code changes to the orchestrator, mastery tracker, and scaffolding logic, but new [[rag]] libraries and Knowledge Component models plus modified course-specific generation logic.
- **Designers.** Read aggregate rubric scores with suspicion. The Adaptive Feedback mean of 0.807 hid a lower Learner State Match for the Novice Variable and Struggling Eager profiles, and only three of eight students agreed that LEA adapted appropriately when they expressed uncertainty.
- **Software developers.** Repurpose the cross-course RAGAS results as a curriculum-coverage audit: Faithfulness fell from 0.69 to 0.50 as curriculum distance grew because questions are generated from the KC model, so a low score localizes learning objectives the uploaded corpus does not cover.
- **Researchers.** Report retrieval metrics per course rather than pooled — Answer Relevancy (0.88-0.94) and Context Precision (0.88-0.90) were stable across courses, but Faithfulness is confounded by corpus coverage.

## Limitations

- The classroom pilot is n = 8 of 41 enrolled students (20% response rate), and five of the eight reported only one or two LEA sessions, so the study yields initial impressions rather than sustained-use evidence and precludes inferential analysis.
- All student evidence is retrospective self-report gathered in a late-term deployment window, with a quiz repetition bug and a network access constraint that may have introduced attrition bias; the authors present it as a first-deployment feasibility assessment, not a controlled evaluation of learning efficacy.
- The cross-course RAGAS evaluation used the system's own generated answers as a stand-in reference for Context Precision and Context Recall absent human-authored ground truth, so those two metrics measure internal retrieval consistency rather than alignment with an independent correctness standard.
- The hypothesized link between CMP202's sentence-bounded chunking and its lower Context Recall was not isolated through controlled ablation, and the three-course deployment, though spanning two disciplines and two academic levels, remains narrow in absolute breadth.

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
