---
title: "Contaminated Collaboration: Measuring Gender Bias Transfer in LLM-Assisted Student Writing"
created: 2026-06-17
updated: 2026-06-17
type: article
tags: [llm, generative-ai, bias-mitigation, writing-education, higher-ed, student-experience]
sources: ['raw/papers/2606.15914.md']
confidence: high
---

> **Ariyan Hossain, Kazi Kamruzzaman Rabbi, Farig Sadeque, S M Taiabul Haque** (2026). arXiv cs.CL

## Key Findings

- In a controlled study with **N = 123 participants**, students wrote career plan essays for paired biographical profiles differing only in gender under three conditions: **no AI assistance, neutral LLM assistance, or gender-biased LLM assistance**.
- Students in the biased condition produced essays with a **significantly larger agentic gap and more gender-stereotypic occupation suggestions** than those in the control and neutral conditions.
- Bias transfer was **asymmetric**: agency was suppressed in female-target essays while male-target writing remained largely unaffected.
- A verification study of **N = 1,600 LLM-generated essays** (two-way ANOVA, R² = .399) confirmed that a gender-biased prompt induces gender-differentiated language while a neutral prompt does not, with significant main effects of biography gender, prompt condition, and their interaction.
- The authors frame the findings as evidence of **bias propagation in AI-assisted writing**, calling for fairness-aware design in educational AI tools.

## Study Design & Method

The researchers first verified that a gender-biased prompt induces gender-differentiated language in LLM-generated essays while a neutral prompt does not, using a corpus of 1,600 generated essays analyzed with a two-way ANOVA. They then recruited 123 participants in a controlled environment to write career plan essays for paired biographical profiles differing only in gender, under three assistance conditions. Outcomes included an agentic gap measure (the difference in agency expressed in female- versus male-target essays) and the gender stereotypicality of occupation suggestions. Normality was confirmed across all gender × condition cells (Shapiro-Wilk, all p > .05), supporting parametric tests.

## Relevance to AI in Education

This paper contributes directly to understanding how AI systems interact with learners in authentic educational settings. It provides causal evidence that gender-biased LLM prompts transfer bias into student writing, with asymmetric effects suppressing female agency — and it notes that student adoption of AI writing tools has accelerated sharply, rising from 66% to 92% between 2024 and 2025 in cited survey data. The results highlight the risk of bias propagation in AI-assisted writing, calling for fairness-aware design in educational AI tools.

## Implications for AI in Education

For [[writing-education]] and [[bias-mitigation]] efforts, the study implies that the fairness of AI-assisted writing depends not only on model outputs but on the **prompts and scaffolding** students are given: if a biased system or prompt shapes how students describe themselves and their plans, the effects can carry into human-authored text. This has consequences for [[equity]] in assessment and for [[academic-integrity]] discussions, where the focus is often on detecting AI use rather than on auditing the values the AI transmits.

## Connected Concepts

## Connected Articles


## Citation

Ariyan Hossain, Kazi Kamruzzaman Rabbi, Farig Sadeque, S M Taiabul Haque (2026). [Contaminated Collaboration: Measuring Gender Bias Transfer in LLM-Assisted Student Writing](https://arxiv.org/abs/2606.15914). arXiv:2606.15914. arXiv cs.CL.
