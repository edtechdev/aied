---
title: "Slide Deck Q&A Quality Assurance App: A Multi-Stage Pipeline for Pedagogical Question Generation"
created: "2026-05-27T07:38:00-04:00"
updated: "2026-09-20T08:15:54-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring, llm, multimodal, prompt-engineering]
assessment: [formative-assessment]
research_method: [system development]
audience: [learners, instructors, software developers]
level: [higher ed]
confidence: high
sources: ['raw/papers/slidesqaqa-pedagogical-question-generation.md']
---

> **Synthesis:** SlidesQAQA is a Flask-based system that extracts text and rendered images from PDF lecture slides and processes them through a four-stage [[llm]] pipeline: **window planning** (segment extraction), **deck synthesis** (cross-slide reasoning), **slide annotation** (per-slide question generation), and **reconciliation** (deck-level revision to reduce redundancy and improve coverage). The key innovation is joint reasoning about slide modality and [[pedagogy|pedagogical]] role, with a bounded question budget that forces prioritization of important content.
## How It Works

Unlike earlier [[automated-question-generation]] systems that generate questions slide-by-slide in isolation, SlidesQAQA reasons across the entire presentation. This enables **deck-level scaffolding** — questions build on each other across the slide sequence, matching the intended instructional flow. The reconciliation stage filters non-instructional slides and revises draft annotations to eliminate redundancy, producing structured JSON output with deck-level goals, section structure, slide summaries, question sets, and evaluation scores.

## Comparison to Related Systems

This approach contrasts with [[generate-then-validate-question-gen]] frameworks by front-loading pedagogical reasoning rather than post-hoc validation. Where [[ai-generated-slides-student-perception]] [[research-methods-aied|research]] has shown that AI-generated slide content can be perceived as lower quality, SlidesQAQA focuses on question quality rather than slide generation itself. It also differs from [[aissa-slides-analysis]] systems that analyze slides for [[accessibility]] rather than pedagogical question extraction.

## Pedagogical Design

The bounded question budget per slide forces the system to make pedagogical decisions about what content merits a question — an implicit form of [[scaffolding]] that prioritizes key concepts. Initial experiments on two technical lecture decks demonstrated successful filtering of non-instructional slides and generation of pedagogically coherent questions for visually complex content. This has implications for [[formative-assessment]] automation at scale.

## What this means for practice

- **Instructors.** Run an existing deck through the pipeline before rebuilding your question bank: the system zero-budgeted administrative and transition slides in the "Self-Attention and Transformers" deck, so non-instructional slides are filtered rather than quizzed.
- **Instructors.** Review the generated items against your own learning goals before deploying them — the three metrics (Coverage, Fidelity, Scaffolding) are scored on a 1-5 scale by the pipeline itself, and scaffolding scores ranged from 3 to 5 rather than uniformly high.
- **Software developers.** Build deck-level reasoning into question generation rather than generating slide by slide: the reconciliation stage is what reduces redundancy and balances coverage across the presentation.
- **Instructors.** Keep the multimodal path — text plus rendered images — for mechanism-heavy slides, since the system grounded questions on visual evidence such as "horizontal arrows pointing left and right between the boxes" that text-only pipelines miss.
- **Learners.** Expect generated questions to work best as foundational comprehension checks on complex material; the evaluated items functioned as prerequisites that progress logically through a deck rather than as exam-level assessment.

## Limitations

- The evaluation rests on only two technical lecture decks — "Self-Attention and Transformers" and "Neural Constituency Parsing" — drawn from NLP and deep learning courses, so generalization to other disciplines is untested.
- Coverage, Fidelity, and Scaffolding were scored automatically by the system on a 1-5 scale from its own pipeline logs; the authors name comparison against human-authored question sets as future work, meaning no human rating or benchmark currently validates the scores.
- The pipeline relies on a specific proprietary LLM (Gemini), which the authors flag as a reproducibility and long-term stability risk if the underlying API model is updated or deprecated.
- The multi-pass architecture incurs substantial LLM inference latency and API costs when processing large decks.

## Connected Concepts

- [[llm]]
- [[automated-question-generation]]
- [[scaffolding]]
- [[formative-assessment]]
- [[multimodal]]
- [[higher-ed]]
- [[educational-nlp]]
- [[generative-ai]]
## Connected Articles

- [[generate-then-validate-question-gen]]
- [[ai-generated-slides-student-perception]]
- [[aissa-slides-analysis]]
## Citation

Salsman, J. (2026). [*Slide Deck Q&A Quality Assurance App: A Multi-Stage Pipeline for Pedagogical Question Generation*](https://arxiv.org/abs/2605.26428).
