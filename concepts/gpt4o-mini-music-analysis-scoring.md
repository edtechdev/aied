---
title: "Comparative Validation of GPT-4o-mini and Teacher Mean Scores for Automated Scoring of Music Analysis Responses: Single-Pass Deployment, Repeatability, and Strategy-Specific Bias"
created: 2026-08-04
updated: 2026-08-04
type: concept
tags: [automated-grading, llm, assessment-validity, higher-ed, ai-ed-evaluation]
sources: [raw/papers/2608.01783.md]
confidence: high
---

> **GPT-4o-mini can produce stable rubric-based scores for open-ended music analysis responses, with few-shot chain-of-thought prompting agreeing most strongly with teacher means while RAG systematically over-scores and self-consistency trades individual-level agreement for repeatability.**

# Comparative Validation of GPT-4o-mini and Teacher Mean Scores for Automated Scoring of Music Analysis Responses: Single-Pass Deployment, Repeatability, and Strategy-Specific Bias

**Baicheng Lin, Lingxi Jin, Kyung-Seok Min** — arXiv (cs.HC / cs.SD) preprint, 2026 (Sejong University, Ewha Womans University).

## Synthesis

300 university-level music analysis responses scored by teachers on four dimensions (Harmony, Form, Reasoning, Terminology) benchmarked against three GPT-4o-mini prompting strategies.

Fs+CoT (few-shot + chain-of-thought) showed the strongest agreement with teacher mean scores in both single-pass and median-aggregated conditions.

RAG showed systematic over-scoring; SC (self-consistency over 5 generations) was highly repeatable but weaker at individual-level agreement.

Dimension-level analysis: Terminology showed weaker agreement than Reasoning, indicating strategy-specific and dimension-specific scoring profiles.

Operational use requires strategy-specific calibration, dimension-level validation, and continued human oversight.

## Related Pages

- [[automated-grading]] — automated assessment of student work
- [[assessment-validity]] — validity of AI-based assessment
- [[ai-scoring-language-bias-physics]] — adjacent evidence on AI scoring bias in physics explanations
- [[ai-feedback-quality]] — quality of AI-generated feedback and scoring
- [[ai-assessment-human-tutors]] — AI assessment compared with human judgment
- [[higher-ed]] — higher education assessment contexts

## Citation

Baicheng Lin, Lingxi Jin, Kyung-Seok Min (2026). [Comparative Validation of GPT-4o-mini and Teacher Mean Scores for Automated Scoring of Music Analysis Responses: Single-Pass Deployment, Repeatability, and Strategy-Specific Bias](https://arxiv.org/abs/2608.01783). arXiv:2608.01783. arXiv (cs.HC / cs.SD) preprint.
