---
title: "EduZone: A Framework for Evaluating LLM Safety for K-12 Students and Teachers"
created: "2026-08-04T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [llm, k-12, pedagogical-safety, benchmark, governance]
research_method: [benchmark]
level: [k 12]
sources: ['raw/papers/2608.02024.md']
confidence: high
---

> **EduZone is an automated evaluation framework that generates contextually grounded adversarial interactions to probe [[llm|LLM]] safety in [[k-12|K-12 education]], revealing that models are more vulnerable to education-specific harms and dynamic multi-turn conversations than existing guardrails address.**

**Junyeong Park, Jieun Han, Haneul Yoo, So-Yeon Ahn, Jinsung Yoon, Alice Oh** — arXiv (cs.CY / cs.AI) preprint, 2026 (KAIST, Google Cloud AI Research, NYU).

## Key Findings

EduZone is an automated evaluation framework that probes LLM safety in K-12 education:

- Combines student- and teacher-facing LLM usage contexts with fine-grained curriculum concepts and 6 risk categories / 28 subcategories spanning conventional and education-specific harms.
- Builds adversarial interactions in three settings: single-turn requests, static multi-turn conversations, and dynamic multi-turn conversations.
- Evaluates ten LLMs across four safety levels: refusal, safe assistance, risky assistance with safety guidance, and fully risky assistance.
- Results show greater vulnerability to education-specific risks and dynamic multi-turn interactions; existing safety guardrails fail to adequately address these risks — a contribution to [[pedagogical-safety|pedagogical safety]], [[governance]], and [[benchmark|evaluation]] of [[llm|LLMs]] in education.

## Connected Concepts

- [[pedagogical-safety]]
- [[pedagogical-llm-training]]
- [[educational-policy-ai]]
- [[ethics]]
- [[benchmark]]
- [[k-12]]
- [[governance]]
## Connected Articles

- [[hazra-safetutors-pedagogical-safety-2026]] — SafeTutors: Pedagogical Safety in AI Tutoring
- [[vocabulary-difficulty-prediction]] — What Makes Words Hard? Sakura at BEA 2026 Shared Task on Vocabulary Difficulty Prediction
- [[cstutorbench-slm-tutors]] — CSTutorBench: Benchmarking Small Language Models as Tutors for Block-Based Programming
- [[llm-student-simulation-misconception-faithfulness]] — Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators
- [[drawedumath-vlm-struggling-students-2026]] — Educational VLM Evaluation
- [[llm-cognitive-diagnosis-handwritten-math]] — Benchmarking Large Language Models for Diagnosing Students' Cognitive Skills from Handwritten Math Work

## Citation

Junyeong Park, Jieun Han, Haneul Yoo, So-Yeon Ahn, Jinsung Yoon, Alice Oh (2026). [EduZone: A Framework for Evaluating LLM Safety for K-12 Students and Teachers](https://arxiv.org/abs/2608.02024). arXiv (cs.CY / cs.AI) preprint.
