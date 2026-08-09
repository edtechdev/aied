---
title: 'LLM-Generated Feedback in Introductory Programming: A Classroom Study'
created: 2026-06-09
updated: 2026-06-09
type: article
tags: [llm, formative-assessment, feedback-loop, stem-education, higher-ed, automated-grading]
sources: [raw/papers/2606.08807.md]
confidence: high
---
# LLM-Generated Feedback in Introductory Programming: A Classroom Study

**Heickal & Lan (2026)** — University of Massachusetts Amherst.

Presents a **large-scale classroom study** (N=215 students, 6,693 submissions across 17 labs) deploying AI-generated feedback through a randomized protocol in an introductory Python programming course. Students received one of three conditions: natural language hints, AI-generated failing test cases, or no AI feedback (control). The resulting dataset, **ProgFeed**, captures fine-grained temporal learning trajectories.

**Key findings:** Natural language feedback is significantly associated with higher completion rates and faster convergence to correct solutions. Test case feedback shows heterogeneous effects that depend critically on feedback validity. The form of [[ai-feedback-quality|AI-generated feedback]] matters — evaluating feedback quality, not just its presence, is essential for understanding pedagogical impact.

This study provides one of the largest empirical validations of LLM-based [[feedback-loop|automated feedback]] in authentic programming classrooms, with direct implications for [[automated-grading|automated grading systems]] and [[formative-assessment|formative assessment]] design in [[stem-education|CS education]].

## Related Pages
- [[ai-feedback-quality]] — Framework for evaluating quality dimensions of AI-generated feedback
- [[formative-assessment]] — Formative assessment and feedback in AI-supported learning
- [[feedback-loop]] — Feedback loop design in educational AI systems
- [[automated-grading]] — Automated grading and assessment technologies
- [[stem-education]] — STEM education with AI support
- [[ai-generated-traces-novice-programmers]] — AI-generated traces and novice programmer studies
- [[eduguard-safe-rag-llm-tutor]] — A RAG programming tutor evaluated on CS50-style forum queries and a classroom pilot.
- [[llm-programming-support-governance-cs-education]] — Exploring the Design Space of LLM-Based Programming Support 
- [[code-gen]]

## Citation

Heickal, H., & Lan, A. (2026). A Classroom Study of LLM-Generated Feedback Intervention in Introductory Programming. [arXiv:2606.08807](https://arxiv.org/abs/2606.08807). Accepted at IRAISE 2026.
