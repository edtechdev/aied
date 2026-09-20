---
title: "Learning to Grade Efficiently: A Bandit-Driven Prompt-Selection Framework for Low-Cost LLM Essay Scoring"
created: "2026-08-26T09:00:00-04:00"
updated: "2026-09-19T08:33:23-04:00"
type: article
technology: [llm, edtech-platform]
assessment: [assessment, automated-assessment, feedback]
methods: [benchmark]
audience: [software developers]
discipline: [writing education]
sources: ['raw/papers/bandit-driven-llm-essay-scoring-2026.md']
confidence: high
---

> **Synthesis:** Large language models demonstrate strong capability in [[automated-essay-scoring|automated essay scoring]], but contemporary approaches typically employ fixed prompt selection that fails to address operational cost concerns and evolving optimal configurations. Manakina and Bogdanov propose a cost-aware multi-armed bandit controller that treats each prompt type as an arm, enabling adaptive selection of optimal [[prompt-engineering|prompting]] strategies during inference. On IELTS Writing Task 2 essays, the framework achieves comparable scoring accuracy to exhaustive grid search while reducing [[llm]] calls by 78.4%. The multi-step assessment approach with calibration examples achieves the highest accuracy, and the work produces the first cost-reliability learning curves for essay scoring.

## Key Findings

1. A multi-armed bandit controller adaptively selects optimal prompting strategies during inference for [[automated-assessment|essay scoring]].
2. The framework achieves comparable scoring accuracy to exhaustive grid search while reducing LLM calls by 78.4%.
3. Four grading recipes (multi-step vs single-step, with vs without calibration examples) were implemented; the multi-step approach with examples achieves the highest accuracy.
4. Token usage and latency are tracked alongside agreement metrics to produce the first cost-reliability learning curves for essay scoring.
5. The work transforms prompt selection in automated essay scoring from an offline hyperparameter optimization problem into an efficient [[online-teaching-and-learning|online learning]] task.

## What this means for practice

- **Designers.** Put prompt selection under an online controller instead of fixing a template: treat each grading recipe as an arm in a multi-armed bandit and update it on agreement between predicted and examiner scores, which cut [[llm]] calls by 78.4% while holding [[assessment-validity|scoring agreement]].
- **Designers.** Budget tokens and latency as first-class constraints — track token usage, latency, and agreement together, because few-shot prompts with rubrics and rationales can exceed the context window of mid-tier models.
- **Designers.** Do not assume more rubric detail improves scoring: the simplified prompt without detailed rubric explanations matched or beat the rubric-heavy variant (QWK 0.485, MAE 0.965) at fewer tokens.
- **Designers.** Use the multi-step recipe calibrated with annotated high- and low-scoring example essays where accuracy matters most, since it achieved the highest accuracy of the four recipes tested.
- **Researchers.** Extend evaluation beyond a single benchmark and a single model before treating the framework as generalizable to other assessment contexts.

## Limitations

- Evaluation uses one corpus — the Kaggle IELTS Writing Scored Essays Dataset, 787 Academic Task 2 compositions with official band scores of 1–9 — so results may not transfer to ASAP, TOEFL11, or other essay types.
- Only one model, Google Gemini Flash 2.5, was tested; the authors state they plan to extend to GPT-4 and Llama-3 70B to assess generalizability.
- The epsilon-greedy controller held a constant exploration rate (ε = 0.2) throughout, and the authors acknowledge the implementation could be refined with adaptive exploration strategies.
- The authors describe the work as a work-in-progress with preliminary experiments and an arm space of four recipes; the released cost-reliability curves rest on that narrow prompt space rather than a broader or operational deployment.

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
