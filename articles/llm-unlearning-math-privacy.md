---
title: "Balancing AI responsibility with privacy, safety, and utility: Unlearning in large language models for mathematics education"
created: "2026-06-03T04:33:04-04:00"
updated: "2026-09-16T17:22:20-04:00"
type: article
technology: [intelligent-tutoring, llm]

ethics: [privacy, pedagogical-safety]
audience: [software developers]
research_method: [system development]
level: [k 12]
sources: ['raw/papers/caeai-llm-unlearning-math.md']
confidence: medium
discipline: [math education]
---

> **Synthesis:** Balancing AI responsibility with privacy, safety, and utility: Unlearning in large language models for [[math-education|mathematics]] education

## Key Findings

- The study applies **gradient-based [[llm]] unlearning** to **three models** — Math-GPT-J, Llama-Lora (Llama-1), and Llama-2-QLora (Llama-2), [[open-source]] math-focused LLMs extended from the authors' prior work — pre-trained on approximately **3 million data points** from an Algebra I online discussion forum (Algebra Nation) between students and professional tutors.
- **PII and harmful content were detected on the training data** and targeted for unlearning in **two different orders** (PII-first and harmful-content-first, labeled P→H and H→P), producing two unlearned variants per base model.
- The PII forget dataset was dominated by **person names (93.28%)**, reflecting the forum context; the harmful-content forget set was dominated by **harassment (10,367 messages)**, with toxic content the smallest category (861 messages).
- Before unlearning, PII-containing output rates were substantial (Llama-1: 17.8%; Llama-2: 15.8%; GPT-J: 15.7%; clean-data baselines 13.9%, 11.5%, 16.5%); after the harmful→PII unlearning order, rates fell to **0.1% for all three models**, while the PII→harmful order was somewhat less effective (Llama-1: 1.0%; Llama-2: 1.8%; GPT-J: 0.2%).
- After unlearning, the **rates of PII-containing output and harmfulness substantially decreased** compared to the pre-trained models; on the external RealToxicityPrompts [[benchmark]], harassment, offensive, and toxic output rates fell to **0.0% across all three model families** — interpreted as cross-dataset consistency, since baseline rates on that benchmark were already low.
- **Utility was maintained** on both **single-label and multi-label downstream math classification tasks**: F1 scores for unlearned models remained comparable to pre-trained baselines across training-instance conditions (roughly 0.80–0.84, e.g., Llama-1 pre-trained 0.809 vs. unlearned H→P 0.809 at n = 100).
- Sensitivity analyses showed the PII reductions were robust across learning rates and unlearning sample sizes (20K–150K), though larger forget samples did not produce monotonic improvement — effectiveness was not simply a function of using more unlearning examples.
- The findings demonstrate a practical path to making LLM-based math tutors **more responsible and privacy-preserving** while retaining strong performance on math-related tasks.

## Study Design & Method

Online mathematics learning platforms increasingly adopt LLMs for scalable, on-demand support, but pre-trained models may **reproduce private information from training data or generate harmful language**. The study first detects PII and harmful content on the ~3M-point Algebra I tutoring corpus, applies gradient-based unlearning in two orders (harmful→PII and PII→harmful), and then compares the generated outputs of the unlearned models with those of the pre-trained model in terms of **PII-containing output rate and harmful rate**, including on the external RealToxicityPrompts benchmark for generalization. Finally, the unlearned models are evaluated on two math classification tasks (single-label and multi-label) to confirm that utility survives, alongside learning-rate and unlearning-sample-size sensitivity analyses. The order effect matters theoretically: because the second unlearning stage updates the same parameters again, it can strengthen or partially reverse the first stage's changes, so the optimal sequence may not generalize uniformly across model families.

## What this means for practice

- **Software developers.** Treat post-hoc unlearning as a complement to data curation rather than a substitute for it: models pretrained on data where detected PII had already been removed still generated non-trivial PII-containing responses (clean-data baselines 13.9%, 11.5%, and 16.5%).
- Order the unlearning stages harmful-content-first, then PII, and treat that order as a design decision rather than a detail: the harmful→PII sequence cut PII-containing output to 0.1% across all three models, against 1.0% (Llama-1), 1.8% (Llama-2), and 0.2% (GPT-J) for the PII→harmful order.
- Re-verify downstream utility in your own pipeline before shipping, using the single-label and multi-label [[math-education|math]] classification tasks the study applied: unlearned F1 stayed near 0.80–0.84 (Llama-1 at 0.809 for both pre-trained and unlearned H→P at n = 100).
- Calibrate the forget set instead of maximizing it; sensitivity analyses across 20K to 150K unlearning samples showed the PII reductions were robust but did not improve monotonically with more unlearning examples.
- Guard against the failure mode of naive gradient-based unlearning, especially pure gradient ascent on the forget set, which can trigger catastrophic collapse such as sharp utility degradation and degenerate/gibberish outputs, and pair model-level mitigations with [[pedagogical-safety]] and [[governance]] safeguards for [[k-12]] deployments.

## Limitations

- The context is limited to Algebra I, where unlearning was applied and evaluated, so results and procedures may not transfer directly to other subject areas, grade levels, learning platforms, or deployment contexts.
- The PII-containing output rate captures classifier-detected PII-like spans in generated responses and is not direct evidence of memorized training-data leakage; entities such as names, cities, schools, and institutions may be common, generic, or already present in broader pretraining.
- Only gradient-based unlearning was examined, across three models pretrained on approximately 3 million data points from a single Algebra I online discussion forum, so other unlearning approaches remain unbenchmarked in education.
- Evaluation rested on automated harmfulness classifiers and 50,000 sampled prompts rather than the extraction tests, membership-inference evaluations, and target-specific reproduction analyses the authors call for.

## Connected Concepts

- [[pedagogical-safety]]
- [[privacy]]
- [[k-12]]
- [[human-in-the-loop-ai]]
- [[formative-assessment]]
- [[governance]]
- [[llm]]
- [[math-education]]
- [[intelligent-tutoring]]
- [[open-source]]

## Connected Articles

- [[cstutorbench-slm-tutors]] — CSTutorBench: Benchmarking Small Language Models as Tutors for Block-Based Programming
- [[child-safety-genai]] — Child Safety in Generative AI: An Expert-Guided and Incident-Grounded Evaluation Framework
- [[hazra-safetutors-pedagogical-safety-2026]] — AI Tutor Safety and Pedagogical Harms
- [[hazra-safetutors-pedagogical-safety-2026]] — SafeTutors: Pedagogical Safety in AI Tutoring
- [[vetting-dual-llm-safety-education]] — VETTING: A dual-LLM framework for in-loop safety verification via policy isolation in educational AI
- [[knowledge-distillation-ai-tutor-evaluation]] — Knowledge Distillation for Automated AI Tutor Evaluation

## Citation

Li, C., Gülfidan, G., & Zhang-Kopf, Y. (2026). [*Balancing AI responsibility with privacy, safety, and utility: Unlearning in large language models for mathematics education*](https://doi.org/10.1016/j.caeai.2026.100642).
