---
title: "Comparative Validation of GPT-4o-mini and Teacher Mean Scores for Automated Scoring of Music Analysis Responses: Single-Pass Deployment, Repeatability, and Strategy-Specific Bias"
created: 2026-08-04T04:33:04-04:00
updated: 2026-08-15
type: article
tags: [automated-grading, llm, assessment-validity, higher-ed, ai-ed-evaluation, rag]
sources: ['raw/papers/2608.01783.md']
confidence: high
---

> **GPT-4o-mini can produce stable rubric-based scores for open-ended music analysis responses, with few-shot chain-of-thought prompting agreeing most strongly with teacher means while RAG systematically over-scores and self-consistency trades individual-level agreement for repeatability.**

**Baicheng Lin, Lingxi Jin, Kyung-Seok Min** — arXiv (cs.HC / cs.SD) preprint, 2026 (Sejong University, Ewha Womans University).

## Synthesis

300 university-level music analysis responses scored by teachers on four dimensions (Harmony, Form, Reasoning, Terminology) benchmarked against three GPT-4o-mini prompting strategies.

Fs+CoT (few-shot + chain-of-thought) showed the strongest agreement with teacher mean scores in both single-pass and median-aggregated conditions.

RAG showed systematic over-scoring; SC (self-consistency over 5 generations) was highly repeatable but weaker at individual-level agreement.

Dimension-level analysis: Terminology showed weaker agreement than Reasoning, indicating strategy-specific and dimension-specific scoring profiles.

Operational use requires strategy-specific calibration, dimension-level validation, and continued human oversight.

## Connected Concepts

- [[formative-assessment]]
- [[automated-essay-scoring]]
- [[ai-ed-evaluation]]
- [[automated-assessment]]
- [[prompt-engineering]]
- [[assessment-validity]]
- [[automated-grading]]
- [[higher-ed]]
- [[educational-measurement]]

## Connected Articles

- [[credential-cognitive-stewardship-ai-assessment]] — What Does the Credential Still Certify? Cognitive Stewardship for AI-Mediated Education
- [[rubric-aware-grading-rec-cbm]] — REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models for Trustworthy Open-Ended Grading
- [[llm-feedback-programming-classroom]] — LLM-Generated Feedback in Introductory Programming: A Classroom Study
- [[aicode-collaborative-feedback-system]] — AICoFe: Implementation and Deployment of an AI-Based Collaborative Feedback System for Higher Education
- [[lata-ferpa-compliant-local-llm-autograder]] — LaTA: A Drop-in, FERPA-Compliant Local-LLM Autograder for Upper-Division STEM Coursework
- [[authentic-products-authenticated-processes-2026]] — From authentic products to authenticated processes: authentic assessment in AI-rich higher education

## Citation

Baicheng Lin, Lingxi Jin, Kyung-Seok Min (2026). [Comparative Validation of GPT-4o-mini and Teacher Mean Scores for Automated Scoring of Music Analysis Responses: Single-Pass Deployment, Repeatability, and Strategy-Specific Bias](https://arxiv.org/abs/2608.01783). arXiv:2608.01783. arXiv (cs.HC / cs.SD) preprint.
