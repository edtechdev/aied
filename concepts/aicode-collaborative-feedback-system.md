---
title: "AICoFe: Implementation and Deployment of an AI-Based Collaborative Feedback System for Higher Education"
created: 2026-05-14
updated: 2026-05-14
type: concept
tags: [automated-grading, feedback-loop, higher-ed, llm, learning-analytics]
sources: [raw/papers/2605.04740.md]
confidence: medium
---

# AICoFe: AI-Based Collaborative Feedback System for Higher Education

**Alvaro Becerra, Alejandra Palma, Ruth Cobos (2026)** — LASI Spain 2026.

📄 [Full text (arXiv)](https://arxiv.org/abs/2605.04740)

## System Architecture

AICoFe orchestrates a multi-LLM pipeline using GPT-4.1-mini, Gemini 2.5 Flash, and Llama 3.1 to synthesize quantitative rubric data and qualitative observations into actionable feedback for higher education students. The key innovation is a **teacher-in-the-loop mediation workflow**: educators use specialized Learning Analytics dashboards to curate and refine AI-generated feedback drafts before delivery.

## Technical Design

- **Multi-LLM orchestration**: Three different models contribute complementary perspectives
- **Hybrid storage**: SQL for traceability and structured metadata + MongoDB for semi-structured feedback versions
- **Learning Analytics dashboards**: Dedicated educator interfaces for feedback curation

## Connection to Broader AIED

AICoFe extends prior work on [[ai-peer-feedback-systems]] from experimental prototypes to a deployed system with educator mediation. The multi-LLM approach addresses single-model bias concerns in [[automated-grading]]. It sits at the intersection of [[feedback-loop]] design and [[learning-analytics]] — keeping educators as active curators through [[human-in-the-loop-ai]] principles.

## Related Pages
- [[ai-peer-feedback-systems]] — Predecessor systems and conceptual foundations
- [[feedback-loop]] — Closing the feedback quality-consistency gap
- [[learning-analytics]] — Educator dashboards and oversight
- [[higher-ed]] — University deployment context
- [[automated-grading]] — Multi-LLM approach to quality assessment
- [[human-in-the-loop-ai]] — Teacher-in-the-loop mediation paradigm

## Citation

Becerra, A., Palma, A., & Cobos, R. (2026). *AICoFe: Implementation and deployment of an AI-based collaborative feedback system for higher education*. Proceedings of the Learning Analytics Summer Institute Spain 2026 (LASI Spain 2026). arXiv:2605.04740.
