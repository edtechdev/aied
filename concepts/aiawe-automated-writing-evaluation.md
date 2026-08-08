---
title: "AiAWE: An Open-Source LLM Automated Writing Evaluation System Using LoRA-Adapted Instruction-Tuned Models"
created: 2026-06-12
updated: 2026-06-12
type: concept
tags: [generative-ai, llm, automated-grading, writing-education, open-source]
sources: [raw/papers/2606.12801.md]
confidence: high
---

# AiAWE: An Open-Source LLM Automated Writing Evaluation System Using LoRA-Adapted Instruction-Tuned Models

**Gayed (2026)** — Waseda University.

Gayed presents **AiAWE**, an open-source [[automated-grading|automated writing evaluation]] (AWE) system that scores argumentative essays using a LoRA-adapted instruction-tuned [[llm|large language model]] (Gemma-3-27B-it). Using a proprietary ETS dataset of 480 TOEFL Independent Writing essays (120 training, 360 evaluation), the system achieves:

- **RMSE:** 0.474
- **Quadratic Weighted Kappa (QWK):** 0.828
- **Agreement within ±0.5 of human score:** 90.56%

These results outperform both LLaMA-3.3-70B and the fine-tuned GPT-3.5 baseline from prior work on the same dataset, demonstrating that [[generative-ai|open-weight LLMs can match or exceed proprietary fine-tuning]] for rubric-aligned scoring.

Three broader findings emerge: (1) model scale is not a reliable predictor of downstream performance under LoRA adaptation; (2) identical LoRA hyperparameters produce qualitatively different adaptation behaviors across architectures; and (3) the system runs on a [[edtech-platform|consumer-grade server]], making it accessible for institutional deployment. The work contributes to debates about [[short-answer-scoring-quality-degradation|automated assessment quality]] and the feasibility of [[open-source]] AI tools in [[writing-education]].

## Related Pages
- [[short-answer-scoring-quality-degradation]] — Quality concerns in automated short-answer scoring
- [[llm-automated-assessment-student-self-explanations]] — LLM assessment of student self-explanations
- [[automated-grading]] — Automated grading systems in education
- [[writing-education]] — AI in writing instruction
- [[llm]] — Large language models in education
- [[open-source]] — Open-source AI tools for education

## Citation

Gayed, J. M. (2026). [AiAWE: An Open-Source LLM Automated Writing Evaluation System Using LoRA-Adapted Instruction-Tuned Models](https://arxiv.org/abs/2606.12801). arXiv:2606.12801.
