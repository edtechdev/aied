---
title: "Learning to Grade Efficiently: A Bandit-Driven Prompt-Selection Framework for Low-Cost LLM Essay Scoring"
created: "2026-08-26T09:00:00-04:00"
updated: "2026-08-26T09:00:00-04:00"
type: article
tags: [automated-assessment, llm, assessment, writing-education, feedback, edtech-platform]
discipline: [writing education]
category: [assessment]
sources: ['raw/papers/bandit-driven-llm-essay-scoring-2026.md']
confidence: high
---

> **Synthesis:** Large language models demonstrate strong capability in automated essay scoring, but contemporary approaches typically employ fixed prompt selection that fails to address operational cost concerns and evolving optimal configurations. Manakina and Bogdanov propose a cost-aware multi-armed bandit controller that treats each prompt type as an arm, enabling adaptive selection of optimal prompting strategies during inference. On IELTS Writing Task 2 essays, the framework achieves comparable scoring accuracy to exhaustive grid search while reducing LLM calls by 78.4%. The multi-step assessment approach with calibration examples achieves the highest accuracy, and the work produces the first cost-reliability learning curves for essay scoring.

## Key Findings

1. A multi-armed bandit controller adaptively selects optimal prompting strategies during inference for [[automated-assessment|essay scoring]].
2. The framework achieves comparable scoring accuracy to exhaustive grid search while reducing LLM calls by 78.4%.
3. Four grading recipes (multi-step vs single-step, with vs without calibration examples) were implemented; the multi-step approach with examples achieves the highest accuracy.
4. Token usage and latency are tracked alongside agreement metrics to produce the first cost-reliability learning curves for essay scoring.
5. The work transforms prompt selection in automated essay scoring from an offline hyperparameter optimization problem into an efficient online learning task.

## Connected Concepts
- [[automated-assessment]]
- [[assessment]]
- [[llm]]
- [[writing-education]]
- [[feedback]]
- [[assessment-validity]]
- [[formative-assessment]]

## Connected Articles
- [[gpt-human-rater-essay-assessment-2026]] — Comparing GPT and human raters in essay assessment
- [[aiawe-automated-writing-evaluation]] — AiAWE: An Open-Source LLM Automated Writing Evaluation System
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond Detection: Redesigning Authentic Assessment
- [[hybrid-e-assessment-semi-automated-grading]] — Hybrid E-Assessment in Higher Education
- [[roe-assessment-twins-2026]] — Assessment Twins: Strengthening Assessment Validity

## Citation

Manakina & Bogdanov (2026). [*Learning to Grade Efficiently: A Bandit-Driven Prompt-Selection Framework for Low-Cost LLM Essay Scoring*](https://arxiv.org/abs/2608.23814).
