---
title: "RACES: reward-aligned consistent essay scoring with large language models"
created: "2026-08-23T14:00:00-04:00"
updated: "2026-08-23T14:00:00-04:00"
type: article
tags: [automated-essay-scoring, automated-assessment, assessment, llm, generative-ai, human-in-the-loop-ai, assessment-validity]
research_method: [system development, benchmark]
category: [assessment]
sources: ['raw/papers/zhang-races-consistent-essay-scoring-llms-2026.md']
confidence: high
---

> **Synthesis:** Zhang and colleagues propose RACES (Reward-Aligned Consistent Essay Scoring), a unified framework for automated essay scoring (AES) that integrates LoRA-based parameter-efficient fine-tuning, reward modeling, and proximal [[educational-policy-ai|policy]] optimization (PPO) [[reinforcement-learning|reinforcement learning]]. The framework establishes an offline inference–[[feedback]]–optimization pipeline, optimizing toward proxy preference signals simulated via LLM-generated feedback while constraining policy drift through KL regularization. On the ASAP 2.0 dataset, RACES improved Quadratic Weighted Kappa (QWK) and auxiliary SimCSE metrics compared with evaluated pretrained and fine-tuned configurations, converging rapidly with limited training iterations. The framework is explicitly positioned as an auxiliary scoring tool for consistent preliminary scoring rather than a replacement for human raters.

## Core Finding

Reward-guided optimization with consistency regularization can improve both scoring alignment and output stability in LLM-based automated essay scoring, achieving competitive human-model agreement (QWK up to 82.7%) on ASAP 2.0 with limited training iterations — but the alignment is proxy-based (derived from LLM-generated feedback rather than directly from human raters) and the framework is designed for human-supervised, auxiliary use rather than autonomous deployment.

## From Feature Engineering to Reward-Aligned LLMs

AES has evolved from handcrafted feature-engineering systems (E-rater, BETSY) through deep neural models (LSTM, CNN, BERT) to LLM-based approaches. While LLMs offer deep semantic understanding and natural-language explanatory feedback, they still struggle with alignment to human scoring standards and output consistency, and [[prompt-engineering]] methods are sensitive to template design while supervised fine-tuning (SFT) relies on static annotated data. RACES addresses this by replacing one-shot SFT with an iterative inference–feedback–optimization procedure guided by a reward model.

## Framework Architecture

RACES combines LoRA-based parameter-efficient fine-tuning, reward modeling, and PPO with a KL-based consistency regularization mechanism. In the offline training pipeline, the policy model's outputs are evaluated by a reward model and optimized through reinforcement learning, with harder negative samples (near-miss scores, model-generated incorrect predictions, plausible but inconsistent feedback) used to train finer-grained preference distinctions. KL regularization constrains policy drift, supporting smooth and stable output distributions and a transition from static fitting to reward-guided iterative optimization.

## Results and Validation

On the ASAP 2.0 [[benchmark]] (≈24,000 argumentative essays, 1–6 scale), all four policy–reward configurations achieved competitive QWK scores (up to 82.7%), with LLaMA2-7B slightly outperforming Qwen2.5-Instruct-7B and stronger reward models (Mistral-7B over GPT2-XL) yielding better results. Reward models converged rapidly (around 50 training steps), and auxiliary SimCSE semantic similarity reached 81.3% (LLaMA2-7B) and 79.3% (Qwen2.5-Instruct-7B) after PPO. The authors caution that results lack confidence intervals and significance testing, that feedback signals are synthetic proxy rather than authentic human feedback, and that direct consistency tests (repeated scoring, paraphrase and prompt-perturbation robustness, subgroup-level stability) and broader matched comparisons remain for future work.

## Relevance to the wiki

This paper extends the wiki's coverage of [[automated-essay-scoring]] and [[automated-assessment]] by showing how reward modeling and reinforcement learning can push LLM-based scoring toward both accuracy and consistency, addressing the [[assessment-validity]] concern of aligning machine scores with human standards. Its explicit framing as a [[human-in-the-loop-ai|human-supervised]] auxiliary tool that flags borderline essays for review reinforces the wiki's emphasis on keeping humans accountable in [[assessment]]. The proxy-based feedback caveat connects to the wiki's interest in [[ai-feedback-quality]] and the integrity of AI-mediated evaluation.

## Connected Concepts

- [[automated-essay-scoring]]
- [[automated-assessment]]
- [[assessment]]
- [[llm]]
- [[generative-ai]]
- [[human-in-the-loop-ai]]
- [[assessment-validity]]
- [[feedback]]

## Connected Articles

- [[llms-do-not-grade-essays-like-humans-2026]]
- [[ai-assisted-instructor-supervised-grading-feedback]]
- [[ai-generated-feedback-higher-ed]]

## Citation

Zhang, Z., Ding, Z., Liu, M., & Sang, H. (2026). [*RACES: reward-aligned consistent essay scoring with large language models*](https://doi.org/10.1186/s41239-026-00607-8). *International Journal of Educational Technology in Higher Education*.
