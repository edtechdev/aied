---
title: "From Scoring to Explanations: SHAP and LLM Rationales for Rubric-based Teaching Quality Assessment"
created: "2026-08-21T08:00:00-04:00"
updated: "2026-08-21T08:50:57-04:00"
type: article
tags: [automated-assessment, educational-nlp, llm, feedback, teacher-role, ai-ed-evaluation, learning-analytics]
research_method: [benchmark]
audience: [teacher role]
category: [ai ed evaluation]
confidence: high
sources: [raw/papers/2606.05180.md]
---

> **For rubric-based scoring of classroom transcripts, model-agnostic SHAP attributions are more faithful and transferable than LLM-generated rationales.** This paper proposes a general framework for sentence-level interpretability of rubric-based scoring, combining Shapley-value attributions with [[llm|LLM]]-generated rationales, and instantiates it on the Quality of Feedback (QoF) dimension of the CLASS framework using the NCTE corpus (~6k annotated transcript segments). Across models, fine-tuned pretrained language models (PLMs) outperform prompted LLMs in prediction accuracy but exhibit label compression toward mid-scale scores. Deletion-based faithfulness tests show SHAP identifies sentences that reliably drive predictions — producing larger, more coherent prediction shifts than LLM rationales — and SHAP attributions transfer robustly across architectures, whereas LLM rationales exert limited and inconsistent influence. The work offers a principled basis for evaluating both scoring models and their explanations in high-stakes educational settings and other rubric-based language assessment.

## Key Findings

- **Explainability matters for high-stakes rubric scoring.** Opaque scores are insufficient where teachers must understand, [[trust]], and contest automated judgments — a requirement now reflected in frameworks like the EU AI Act.
- **PLMs beat LLMs on scoring accuracy but compress toward mid-scale.** Fine-tuned transformer-based models (BERT, ALBERT, RoBERTa, DeBERTa variants) outperform prompted instruction-tuned LLMs on QoF prediction (e.g., lower MAE/MSE), but their scores concentrate in the 3–5 mid-range rather than using the full 1–7 scale.
- **SHAP is more faithful than LLM rationales.** Under deletion-based tests (progressively removing the top-10 sentences each method ranks as most influential), SHAP-selected sentences produce larger and more coherent prediction shifts than LLM-generated rationales — meaning SHAP better identifies the text the model actually relies on.
- **SHAP explanations transfer across architectures; LLM rationales do not.** Cross-model analysis (removing sentences ranked by one model family and re-scoring with the other) shows SHAP attributions generalize robustly, while LLM rationales exert limited, inconsistent influence on other models.
- **A reusable framework for evaluating explanations.** The combination of model-agnostic attribution, deletion-based faithfulness testing, and cross-model robustness offers a principled way to judge whether any scoring model's explanations are trustworthy.

## Practical Implications

- **Prefer principled attribution methods over LLM free-text rationales for accountability.** For high-stakes [[automated-assessment|automated assessment]], SHAP-style attribution identifies which sentences drive a score more faithfully than an LLM's self-explanation, which can be persuasive yet unfaithful to the underlying computation.
- **Use deletion-based faithfulness tests to validate explanations.** Before trusting an explanation method, measure how removing its top-ranked units changes predictions — and check whether explanations generalize across model families.
- **Pair transparent scoring with human interpretability.** Moving "from what (the score) to why (the reasoning)" is essential for generating actionable teacher feedback and building trust; a framework that surfaces the specific dialogue sentences behind a quality rating supports that.

## Connected Concepts

- [[automated-assessment]]
- [[educational-nlp]]
- [[llm]]
- [[feedback]]
- [[teacher-role]]
- [[ai-ed-evaluation]]
- [[learning-analytics]]
- [[assessment]]

## Connected Articles

- [[teaching-feedback-classification-benchmark]] — Teaching feedback classification benchmark
- [[zhao-learnlens-feedback-educators-loop]] — LearnLens: feedback loop for educators
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies: bias in automated writing feedback

## Citation

Bueno, I., Bühler, B., Stark, P., Fütterer, T., Trautwein, U., Demszky, D., Hill, H., & Kasneci, E. (2026). *[From scoring to explanations: Evaluating SHAP and LLM rationales for rubric-based teaching quality assessment](https://arxiv.org/abs/2606.05180)*. Findings of ACL 2026.
