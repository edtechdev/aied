---
title: "Privacy-Preserving Heterogeneous Multi-LLM Federated Inference for Cognitive Diagnosis"
created: "2026-09-04T09:05:00-04:00"
updated: "2026-09-04T09:05:00-04:00"
type: article
tags: [cognitive-diagnosis, privacy, llm, trust-calibration, generative-ai, adaptive-learning]
sources: ['raw/papers/2609.02947.md']
confidence: high
---

> **Synthesis:** Boyapati et al. (2026) propose a federated inference framework in which several commercial large language models cooperate to perform [[cognitive-diagnosis]] without any model seeing raw student data. The system adds ε-local [[privacy|differential privacy]] noise to each [[llm]]'s prediction before aggregation and uses residual-based aggregation to handle model heterogeneity, operating under an honest-but-curious trust paradigm. The authors report strong [[privacy]] guarantees with minimal accuracy loss across three educational [[benchmark|benchmarks]], arguing the approach is practical and cross-domain generalizable. The paper advances [[privacy]]-preserving, [[trust-calibration|calibrated]] AI-driven [[cognitive-diagnosis]] for real-world [[adaptive-learning]] settings.

## Approach

Traditional [[cognitive-diagnosis]] models centralize sensitive student data on a single server, raising serious [[privacy]] and [[regulation|regulatory]] concerns (GDPR, FERPA). Boyapati et al. invert this by keeping student data local and shipping only model *predictions* to a federation of commercial LLM APIs (LLaMA-3.3-70B, GPT-4o-mini, Claude-3-Haiku). Because no provider receives raw inputs or proprietary internals, the framework sidesteps the leak-and-misuse risks of centralized diagnosis.

## Key Findings

1. The heterogeneous multi-LLM architecture achieves accurate diagnosis by combining predictions from several models with residual-based aggregation that mitigates heterogeneity across models.
2. Adding Laplace noise locally to each entity's prediction output before aggregation yields ε-local differential privacy that shields published diagnostic results from external inference.
3. The approach assumes an honest-but-curious trust paradigm in which API providers do not abuse submitted queries.
4. Rigorous privacy–utility analysis shows strong privacy guarantees with minimal accuracy loss.
5. Evaluations across three educational benchmarks confirm practical [[usability-research|usability]] and cross-domain generalizability.

## Significance for AI in Education

The paper connects the [[cognitive-diagnosis]] [[research-methods-aied|research]] tradition to [[generative-ai|large language model]] infrastructure while foregrounding the [[privacy]] constraints that block real-world deployment. It offers institutions a path to privacy-preserving diagnosis that keeps [[trust-calibration|appropriate trust]] in AI outputs while protecting learners — a dimension under-explored in most CDM work, which assumes centralized access to sensitive student trajectories.

## Connected Concepts
- [[cognitive-diagnosis]]
- [[privacy]]
- [[trust-calibration]]
- [[llm]]
- [[adaptive-learning]]
- [[generative-ai]]
- [[learning-analytics]]

## Connected Articles
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Bayesian Cognitive Diagnosis for Personalized Learning Paths
- [[llm-cognitive-diagnosis-handwritten-math]] — LLM Cognitive Diagnosis of Handwritten Math
- [[calibrating-trustworthiness-llm-education-2026]] — Calibrating Trustworthiness of LLMs in Education
- [[trust-reliance-ai-education-2026]] — Trust and Reliance in AI Education
- [[zhang-ml-student-progress-programming-2026]] — Machine-Learning Student Progress in Programming

## Citation
Boyapati, Y. M., Yu, C., Jiang, T., & Zhan, J. (2026). [*Privacy-Preserving Heterogeneous Multi-LLM Federated Inference for Cognitive Diagnosis*](https://arxiv.org/abs/2609.02947). arXiv:2609.02947.
