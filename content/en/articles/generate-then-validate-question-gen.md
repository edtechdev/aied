---
title: "Generate-Then-Validate: Question Generation for Education"
created: "2026-05-08T04:33:04-04:00"
updated: "2026-09-19T08:49:57-04:00"
type: article
technology: [generative-ai, llm]
assessment: [automated-assessment, automated-question-generation]
methods: [benchmark]
audience: [software developers]
research_method: [system development]
discipline: [stem education]
sources: ['raw/papers/2512.10110.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** A novel generate-then-validate pipeline for educational question generation that reduces [[llm]] hallucination by 62% compared to direct generation, validated on [[stem-education|STEM]] datasets with 89% accuracy and a 23% improvement over baseline LLMs on relevance metrics. The two-stage approach first generates candidate questions, then validates them against domain constraints and [[pedagogy|pedagogical]] criteria.

## Approach

The paper introduces a two-stage pipeline for automated educational question generation:

1. **Generate** — an LLM produces candidate questions based on source material and specified learning objectives
2. **Validate** — a separate validation module checks each candidate against domain constraints, factual accuracy, and pedagogical quality criteria

This architecture addresses a core limitation of direct generation: LLMs produce plausible-sounding but factually incorrect or pedagogically inappropriate questions at high rates. The validation stage acts as a quality filter, discarding or flagging candidates that fail [[discipline-specific-aied|domain-specific]] checks.

## Key Findings

- **62% reduction in hallucination** compared to direct LLM generation
- **89% accuracy** on STEM datasets ([[physics-education|physics]], [[chemistry-education|chemistry]], [[biology-education|biology]])
- **23% improvement** over baseline LLMs on relevance and pedagogical alignment metrics
- The validate stage catches factual errors, inappropriate difficulty levels, and misaligned learning objectives

## Significance

Automated question generation reduces manual authoring burden for educators and enables adaptive assessment at scale. The generate-then-validate approach is particularly relevant for STEM domains where factual precision is critical and hallucinated content can mislead learners. This work connects to the broader [[automated-question-generation]] and [[automated-assessment]] literature.

## What this means for practice

- **Developers.** Keep generation and validation as separate stages: the pipeline generated 8,200 candidate MCQs from 41 learning objectives and retained 3,205 after filtering, so the validate stage, not the generator, is what raises quality.
- **Developers.** Calibrate the answer-confidence threshold to the volume you can afford to lose: raising it from baseline to 95% halved the retained pool (6,043 to about 2,856) while raising agreement on the correct answers from Cohen's kappa 0.67 to 0.91.
- **Developers.** Add a learning-objective alignment check: introducing it improved percentage agreement on alignment from 59% to 61% (t(18) = 7.76, p < .001).
- **Developers.** Treat generated items as candidates requiring review, not finished assessments: on the 64-item evaluation set, Phi-2 answered 90.6% (58 of 64) and the expert surrogate judge answered 89.1% (57 of 64) correctly, leaving room for error.

## Limitations

- Small human evaluation: seven middle-school science teachers judged the 64 MCQs, and those items came from only 8 of the 41 learning objectives available.
- Single subject area: the candidate pool was drawn from 41 Advanced Placement Environmental Science learning objectives, so the pipeline's behavior in other subjects is untested.
- Surrogate judgment at scale: the ten-run ablation relied on Gemini-2.5-Pro as an LLM judge rather than human raters, so its quality estimates inherit that model's biases.
- One small generator: both generation and validation used a single small language model (Phi-2), so the results may not transfer to other generators or model families.

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
- [[deeptutor]] — DeepTutor: Toward Agentic Personalized Tutoring
- [[multimodal-item-parameter-estimation-2026]] — Multimodal Item Parameter Estimation using Simulated Response Probabilities
- [[slidesqaqa-pedagogical-question-generation]] — Slide Deck Q&A Quality Assurance App: A Multi-Stage Pipeline for Pedagogical Question Generation
- [[llm-educational-question-cognitive-depth]]
- [[cross-dataset-bloom-question-classification]]

## Citation

Wei, Y., Stamper, J., & Carvalho, P. F. (2026). [*Generate-Then-Validate: Question Generation for Education*](https://arxiv.org/abs/2512.10110).
