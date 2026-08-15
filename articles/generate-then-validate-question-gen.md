---
title: "Generate-Then-Validate: Question Generation for Education"
created: 2026-05-08
updated: 2026-08-15
type: article
tags: [question-generation, llm, automated-assessment, stem-education, hallucination-reduction, automated-question-generation, slidesqaqa-pedagogical-question-generation]
sources: ['raw/papers/2512.10110.md']
confidence: high
---

> **Synthesis:** A novel generate-then-validate pipeline for educational question generation that reduces LLM hallucination by 62% compared to direct generation, validated on STEM datasets with 89% accuracy and a 23% improvement over baseline LLMs on relevance metrics. The two-stage approach first generates candidate questions, then validates them against domain constraints and pedagogical criteria.

## Approach

The paper introduces a two-stage pipeline for automated educational question generation:

1. **Generate** — an LLM produces candidate questions based on source material and specified learning objectives
2. **Validate** — a separate validation module checks each candidate against domain constraints, factual accuracy, and pedagogical quality criteria

This architecture addresses a core limitation of direct generation: LLMs produce plausible-sounding but factually incorrect or pedagogically inappropriate questions at high rates. The validation stage acts as a quality filter, discarding or flagging candidates that fail domain-specific checks.

## Key Findings

- **62% reduction in hallucination** compared to direct LLM generation
- **89% accuracy** on STEM datasets (physics, chemistry, biology)
- **23% improvement** over baseline LLMs on relevance and pedagogical alignment metrics
- The validate stage catches factual errors, inappropriate difficulty levels, and misaligned learning objectives

## Significance

Automated question generation reduces manual authoring burden for educators and enables adaptive assessment at scale. The generate-then-validate approach is particularly relevant for STEM domains where factual precision is critical and hallucinated content can mislead learners. This work connects to the broader [[automated-question-generation]] and [[automated-assessment]] literature.

## Connected Concepts

- [[automated-question-generation]]
- [[automated-assessment]]
- [[llm]]
- [[assessment]]
- [[generative-ai]]
- [[hallucination-risk]]
- [[item-response-theory]]
- [[assessment-validity]]
- [[educational-measurement]]
## Connected Articles

- [[code-gen]] — CODE-GEN: A Human-in-the-Loop RAG-Based Agentic AI System for Multiple-Choice Question Generation
- [[kt4eqg-personalized-question-generation]] — KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing
- [[nsmq-riddles-science-math-benchmark]] — NSMQ Riddles: A Benchmark of Scientific and Mathematical Riddles for Quizzing Large Language Models
- [[deeptutor]] — DeepTutor: Towards Agentic Personalized Tutoring
- [[multimodal-item-parameter-estimation-2026]] — Multimodal Item Parameter Estimation using Simulated Response Probabilities
- [[slidesqaqa-pedagogical-question-generation]] — Slide Deck Q&A Quality Assurance App: A Multi-Stage Pipeline for Pedagogical Question Generation
- [[llm-educational-question-cognitive-depth]]
- [[cross-dataset-bloom-question-classification]]

## Citation

F, A.W.Y.S.J.C.P. (2026). [*Generate-Then-Validate: Question Generation for Education*](https://arxiv.org/abs/2512.10110). (LAK 2026), April 27-May 01 Wei, Y., Stamper, J., et al. (2025). *Generate-Then-Validate: A Novel Question Generation Approach*. arXiv preprint arXiv:2512.10110.
