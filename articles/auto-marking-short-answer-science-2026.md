---
title: "Auto-marking short answer questions in science: The foundational years of transformer-based models from BERT to GPT-4"
created: "2026-09-03T12:00:00-04:00"
updated: "2026-09-03T12:00:00-04:00"
type: article
tags: [automated-assessment, automated-essay-scoring, educational-nlp, llm, science-education, assessment, formative-assessment]
sources: ['raw/papers/auto-marking-short-answer-science-2026.md']
confidence: high
---

> **Auto-marking short answer questions in science: The foundational years of transformer-based models from BERT to GPT-4** — Morley, Walland, and Vidal Rodeiro scoping-review the transformer-based [[automated-assessment|auto-marking]] of short-answer [[science-education|science]] questions during the foundational period 2017–early 2024, coding 21 articles under PRISMA-ScR guidelines. BERT models (and variants) dominated, peaking in 2021 before GPT-based approaches arrived, while models augmented with domain-specific data such as textbooks and [[feedback|marking rubrics]] consistently outperformed those without. The review surfaces enduring threats to reliability, explainability, and [[bias-mitigation|fairness]] and argues auto-markers should support rather than replace [[teacher-role|human examiners]].

## Key Findings

- **Model landscape and temporal shift.** BERT (base and variants such as RoBERTa, DistilBERT, SciBERT) was the most common [[educational-nlp|transformer]] approach, used in 20 of 21 studies and peaking in 2021; GPT models (GPT-1/2, GPT-3.5, GPT-4) appeared from roughly 2022, adopted via [[prompt-engineering]] rather than fine-tuning, reflecting a field-wide move from fine-tuning smaller models toward prompting larger [[llm|LLMs]].
- **Datasets and performance.** The SciEntsBank corpus dominated (2-way, 3-way, and 5-way items with unseen-answers/questions/domains tests), alongside ASAP SAS, Beetle, BEAR, TIMMS and others — all US-collected. BERT models generally outperformed earlier auto-markers on SciEntsBank, though no study yet benchmarked GPT models there; one direct comparison found GPT-3.5 outperformed BERT base across items.
- **Domain data and data augmentation help.** Models incorporating additional domain knowledge — textbooks, [[feedback|marking rubrics]], science journals, further pre-training, or meta-learning — consistently outperformed models without it; GPT-generated synthetic data also improved fine-tuned BERT performance, while rubric-aware and chain-of-thought prompting lifted GPT accuracy.
- **Reliability and validity concerns.** Auto-markers can learn "spurious correlations" with surface features (punctuation, grammar, wording) rather than [[assessment-validity|construct]]-relevant scientific understanding, and small input changes can produce large output differences, threatening [[educational-measurement|reliability and construct validity]].
- **Explainability and bias gaps.** Few models could justify marks in human-comprehensible terms, GPT "rationale" generation and chain-of-thought prompting only partially address this, and [[bias-mitigation|bias]] across demographic and linguistic groups was rarely examined — undermining [[trust]] and raising [[ethics|ethical]] stakes, especially in [[summative-assessment|high-stakes]] settings.
- **Recommendations for the field.** The authors call for more diverse and shared datasets, comprehensive evaluation frameworks (reliability, validity, fairness, explainability, robustness, practical utility), transparent and [[human-ai-collaboration|hybrid human-machine]] scoring models, rigorous bias analyses, and movement beyond simple classification toward multi-mark-point and partial-credit scenarios.

## Connected Concepts

- [[automated-assessment]]
- [[automated-essay-scoring]]
- [[educational-nlp]]
- [[llm]]
- [[science-education]]
- [[formative-assessment]]
- [[meta-analysis-systematic-review]]

## Connected Articles

- [[automated-formative-assessments-a-level-sciences]]
- [[gpt-human-rater-essay-assessment-2026]]
- [[aiawe-automated-writing-evaluation]]
- [[llm-formative-feedback-systematic-review-2026]]
- [[ground-truth-reliability-aied]]

## Citation

Morley, F., Walland, E., & Vidal Rodeiro, C. (2026). [Auto-marking short answer questions in science: The foundational years of transformer-based models from BERT to GPT-4](https://doi.org/10.1016/j.ijaied.2026.100005). *International Journal of Artificial Intelligence in Education*, 36, Article 100005.
