---
title: "AiAWE: An Open-Source LLM Automated Writing Evaluation System Using LoRA-Adapted Instruction-Tuned Models"
created: "2026-06-12T04:33:04-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
technology: [generative-ai, llm, open-source]
assessment: [automated-assessment]
audience: [software developers]
research_method: [system development, benchmark]
discipline: [writing education]

sources: ['raw/papers/2606.12801.md']
confidence: high
level: [adult learning, higher ed]
page_kind: [evaluation]
---

> **Synthesis:** Gayed presents **AiAWE**, an open-source [[automated-assessment|automated writing evaluation]] (AWE) system that scores argumentative essays using a LoRA-adapted instruction-tuned [[llm|large language model]] (Gemma-3-27B-it). Using a proprietary ETS dataset of 480 TOEFL Independent Writing essays (120 training, 360 evaluation), the system achieves:

- **RMSE:** 0.474
- **Quadratic Weighted Kappa (QWK):** 0.828
- **Agreement within ±0.5 of human score:** 90.56%

These results outperform both LLaMA-3.3-70B and the fine-tuned GPT-3.5 baseline from prior work on the same dataset, demonstrating that [[generative-ai|open-weight LLMs can match or exceed proprietary fine-tuning]] for rubric-aligned scoring.

Three broader findings emerge: (1) model scale is not a reliable predictor of downstream performance under LoRA adaptation; (2) identical LoRA hyperparameters produce qualitatively different adaptation behaviors across architectures; and (3) the system runs on a [[edtech-platform|consumer-grade server]], making it accessible for [[governance|institutional]] deployment. The work contributes to debates about [[short-answer-scoring-quality-degradation|automated assessment quality]] and the feasibility of [[open-source]] AI tools in [[writing-education]].

## What this means for practice

- **Designers.** Use a LoRA-adapted open-weight model when scoring has to stay in-house: Gemma-3-27B-it reached RMSE 0.474, QWK 0.828, and 90.56% agreement within ±0.5 of the human score, beating the fine-tuned GPT-3.5 baseline (RMSE 0.573, QWK 0.780, 84.72%) on the same 480-essay ETS dataset.
- **Designers.** Do not default to the larger model. Under identical LoRA settings the 27B Gemma outperformed the 70B LLaMA across every metric (QWK 0.828 vs. 0.777), so model scale is not a reliable predictor of rubric-aligned scoring quality.
- **Designers.** Re-validate the adapter per architecture before reusing shared hyperparameters: raising LoRA rank above 64 stripped LLaMA of its rubric-referenced feedback generation while Gemma stayed intact.
- **Instructors.** Read agreement statistics carefully before quoting them to students or colleagues. The model reproduced an averaged, adjudicated human score exactly in 43.33% of cases, against roughly 60% exact agreement between trained human raters on TOEFL Independent prompts — the two numbers are not comparable quantities.
- **Administrators.** Cost out deployment against the actual footprint: the fine-tuned 27B model serves scoring on a single consumer-grade GPU with 4-bit inference quantization, and training the 120-essay adapter took about two hours.

## Limitations

- Evaluation covers one dataset and one genre — 480 TOEFL Independent Writing essays written to two prompts by adult L2 English learners under test conditions — and its score distribution is thin at the extremes, with only 8 essays below 2.0 and 39 essays at 5.0, where the small bin sizes make the reported RMSE and bias estimates noisy. Narrative, expository, and research writing, K–12 and L1 writers, other languages, and longer compositions are unestablished.
- The model deployed on the live platform was trained on all 480 essays and has no held-out evaluation set, so the authors can report scoring-quality point estimates only for the 120-train/360-test variant.
- Two results rest on partial evidence: the LoRA rank-sensitivity finding comes from pilot observations rather than a systematic rank sweep, and adapters trained at full precision were applied to 4-bit Q4_K_M weights with no comparison across quantization schemes.
- No fairness analysis (L1 group, demographic, or writing style) and no user study: the platform is in classroom use, but no pedagogical impact or formative-feedback efficacy is reported — only scoring accuracy.

## Connected Concepts

- [[automated-assessment]]
- [[llm]]
- [[generative-ai]]
- [[edtech-platform]]
- [[open-source]]
- [[writing-education]]
- [[automated-essay-scoring]]
## Connected Articles

- [[short-answer-scoring-quality-degradation]]
- [[icle-plus-plus-essay-scoring]]
## Citation

Gayed, J. M. (2026). [AiAWE: An Open-Source LLM Automated Writing Evaluation System Using LoRA-Adapted Instruction-Tuned Models](https://arxiv.org/abs/2606.12801).
