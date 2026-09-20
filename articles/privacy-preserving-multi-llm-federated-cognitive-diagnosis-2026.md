---
title: "Privacy-Preserving Heterogeneous Multi-LLM Federated Inference for Cognitive Diagnosis"
created: "2026-09-04T09:05:00-04:00"
updated: "2026-09-19T07:22:56-04:00"
type: article
technology: [adaptive-learning, cognitive-diagnosis, generative-ai, llm]
methods: [benchmark]
ethics: [privacy, trust-calibration]
sources: ['raw/papers/2609.02947.md']
confidence: high
research_method: [system development]
audience: [researchers, learning analytics designers]
page_kind: [framework]
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

## What this means for practice

- **Learning analytics designers.** Aggregate at the prediction level rather than centralizing response records: the framework keeps student data local and shares only model predictions to LLaMA-3.3-70B, GPT-4o-mini, and Claude-3-Haiku.
- **Learning analytics designers.** Price the privacy budget before ruling it out as impractical: ε = 2.0 local differential privacy cost roughly 0.40% MAE on ASSIST09 while the improvements stayed statistically significant (p < 0.001, Cohen's d = 0.85).
- **Researchers.** Keep residual-based correction when federating heterogeneous LLMs — ablations show aggregation is the primary performance driver and residual correction is essential, with gains varying by domain (14.21% on ASSIST09, 7.39% on GSM8K, 14.40% on UCI).
- **Administrators.** Recognize what local differential privacy does not cover: it shields published diagnostic vectors from re-identification, but not provider logging of submitted queries, so end-to-end privacy requires locally hosted open-source models and prompt data minimization.

## Limitations

- The privacy guarantee rests on an honest-but-curious assumption: local differential privacy protects published diagnostic outputs from the aggregator and downstream observers, but does not prevent commercial API providers from logging submitted queries.
- All three federation members are commercial foundation models accessed through APIs, so the system inherits provider behavior — the authors note model updates may shift performance and that residual correction may require periodic recalibration.
- Evaluation is limited to three structured educational benchmarks (ASSIST09's top four concepts, GSM8K's five extracted concepts, and UCI's 649 students), and the authors state that extending the framework to open-ended assessment tasks may require adapted prompt engineering.
- The benchmark knowledge states are heuristically derived rather than expert-annotated — proportions of correct answers per Q-matrix concept for ASSIST09, keyword-extracted success rates for GSM8K with GPT-4o-mini generating the concept tags, and normalized attribute groupings for UCI.

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
