---
title: "Comparative Validation of GPT-4o-mini and Teacher Mean Scores for Automated Scoring of Music Analysis Responses: Single-Pass Deployment, Repeatability, and Strategy-Specific Bias"
created: "2026-08-04T04:33:04-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
technology: [llm, rag]
assessment: [assessment-validity, automated-assessment]
audience: [software developers]
research_method: [benchmark]
level: [higher ed]
page_kind: [evaluation]
sources: ['raw/papers/2608.01783.md']
confidence: high
methods: [ai-ed-evaluation]
---

> **Synthesis:** **GPT-4o-mini can produce stable rubric-based scores for open-ended music analysis responses, with few-shot chain-of-thought [[prompt-engineering|prompting]] agreeing most strongly with teacher means while [[rag]] systematically over-scores and self-consistency trades individual-level agreement for repeatability.**

**Baicheng Lin, Lingxi Jin, Kyung-Seok Min** — arXiv (cs.HC / cs.SD) preprint, 2026 (Sejong University, Ewha Womans University).

## Synthesis

300 university-level music analysis responses scored by teachers on four dimensions (Harmony, Form, Reasoning, Terminology) benchmarked against three GPT-4o-mini prompting strategies.

Fs+CoT (few-shot + chain-of-thought) showed the strongest agreement with teacher [[learning-gains|mean scores]] in both single-pass and median-aggregated conditions.

RAG showed systematic over-scoring; SC (self-consistency over 5 generations) was highly repeatable but weaker at individual-level agreement.

Dimension-level analysis: Terminology showed weaker agreement than Reasoning, indicating strategy-specific and dimension-specific scoring profiles.

Operational use requires strategy-specific calibration, dimension-level validation, and continued [[human-in-the-loop-ai|human oversight]].

## What this means for practice

- **Designers.** Make few-shot chain-of-thought the default scoring configuration for open-ended music analysis: it showed the strongest agreement with teacher mean scores in both single-pass (ICC(2,1) = 0.657, QWK = 0.656) and median-aggregated conditions.
- **Designers.** Do not let retrieval augmentation set the scoring standard on its own — RAG over-scored systematically (mean bias 1.787 and the largest error, RMSE 2.817) because it credited mention of disciplinary terms without checking accurate application.
- **Instructors.** Use automated scores as preliminary marks or criterion-referenced feedback, and route responses with uncertain terminology, large cross-dimension discrepancies, or unusual score patterns to a teacher for review.
- **Researchers.** Report dimension-level agreement, not only total scores: Terminology showed the lowest agreement for all three strategies, and strong performance on one dimension can numerically mask weakness on another.

## Limitations

- The study examined a single model (GPT-4o-mini), one music-analysis task, and one institutional context, using three runs at a temperature of 0.9; the authors state the findings may not generalize to other models, tasks, sampling settings, institutions, or high-stakes assessment contexts.
- The corpus is 300 responses from a normal university in China, and the reference is the mean of three experienced music theory teachers, so agreement is measured against one small rater panel rather than an established benchmark.
- Even the best strategy agreed only moderately with teacher means (ICC(2,1) = 0.657), and comparison covers just three prompting strategies, leaving the space of [[prompt-engineering|prompting]] designs largely unexplored.

## Connected Concepts

- [[formative-assessment]]
- [[automated-essay-scoring]]
- [[ai-ed-evaluation]]
- [[automated-assessment]]
- [[prompt-engineering]]
- [[assessment-validity]]
- [[higher-ed]]
- [[educational-measurement]]
- [[arts-design-and-media-education]]
## Connected Articles

- [[credential-cognitive-stewardship-ai-assessment]] — What Does the Credential Still Certify? Cognitive Stewardship for AI-Mediated Education
- [[rubric-aware-grading-rec-cbm]] — REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models for Trustworthy Open-Ended Grading
- [[llm-feedback-programming-classroom]] — LLM-Generated Feedback in Introductory Programming: A Classroom Study
- [[becerra-aicofe-feedback-2026]] — AICoFe: Implementation and Deployment of an AI-Based Collaborative Feedback System for Higher Education
- [[lata-ferpa-compliant-local-llm-autograder]] — LaTA: A Drop-in, FERPA-Compliant Local-LLM Autograder for Upper-Division STEM Coursework
- [[authentic-products-authenticated-processes-2026]] — From authentic products to authenticated processes: authentic assessment in AI-rich higher education

## Citation

Baicheng Lin, Lingxi Jin, Kyung-Seok Min (2026). [Comparative Validation of GPT-4o-mini and Teacher Mean Scores for Automated Scoring of Music Analysis Responses: Single-Pass Deployment, Repeatability, and Strategy-Specific Bias](https://arxiv.org/abs/2608.01783). arXiv (cs.HC / cs.SD) preprint.
