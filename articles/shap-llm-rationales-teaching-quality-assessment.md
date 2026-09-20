---
title: "From Scoring to Explanations: Evaluating SHAP and LLM Rationales for Rubric-based Teaching Quality Assessment"
created: "2026-08-21T08:00:00-04:00"
updated: "2026-09-19T09:24:40-04:00"
type: article
foundations: [teacher-role]
technology: [educational-nlp, learning-analytics, llm]
assessment: [automated-assessment, feedback]
audience: [instructors]
page_kind: [evaluation]
confidence: high
sources: [raw/papers/2606.05180.md]
methods: [ai-ed-evaluation, benchmark]
---

> **Synthesis:** **For rubric-based scoring of classroom transcripts, model-agnostic SHAP attributions are more faithful and transferable than LLM-generated rationales.** This paper proposes a general framework for sentence-level interpretability of rubric-based scoring, combining Shapley-value attributions with [[llm|LLM]]-generated rationales, and instantiates it on the Quality of Feedback (QoF) dimension of the CLASS framework using the NCTE corpus (~6k annotated transcript segments). Across models, fine-tuned pretrained language models (PLMs) outperform prompted LLMs in prediction accuracy but exhibit label compression toward mid-scale scores. Deletion-based faithfulness tests show SHAP identifies sentences that reliably drive predictions — producing larger, more coherent prediction shifts than LLM rationales — and SHAP attributions transfer robustly across architectures, whereas LLM rationales exert limited and inconsistent influence. The work offers a principled basis for evaluating both scoring models and their explanations in high-stakes educational settings and other rubric-based language assessment.

## Key Findings

- **Explainability matters for high-stakes rubric scoring.** Opaque scores are insufficient where teachers must understand, [[trust]], and contest automated judgments — a requirement now reflected in frameworks like the EU AI Act.
- **PLMs beat LLMs on scoring accuracy but compress toward mid-scale.** Fine-tuned transformer-based models (BERT, ALBERT, RoBERTa, DeBERTa variants) outperform prompted instruction-tuned LLMs on QoF prediction (e.g., lower MAE/MSE), but their scores concentrate in the 3–5 mid-range rather than using the full 1–7 scale.
- **SHAP is more faithful than LLM rationales.** Under deletion-based tests (progressively removing the top-10 sentences each method ranks as most influential), SHAP-selected sentences produce larger and more coherent prediction shifts than LLM-generated rationales — meaning SHAP better identifies the text the model actually relies on.
- **SHAP explanations transfer across architectures; LLM rationales do not.** Cross-model analysis (removing sentences ranked by one model family and re-scoring with the other) shows SHAP attributions generalize robustly, while LLM rationales exert limited, inconsistent influence on other models.
- **A reusable framework for evaluating explanations.** The combination of model-agnostic attribution, deletion-based faithfulness testing, and cross-model robustness offers a principled way to judge whether any scoring model's explanations are trustworthy.

## What this means for practice

- **Instructors.** Prefer principled attribution over LLM free-text rationales when a score must be justified: for high-stakes [[automated-assessment|automated assessment]], SHAP-style attribution identifies which sentences drive a score more faithfully than an LLM's self-explanation, which can be persuasive yet unfaithful to the underlying computation.
- **Instructors.** Validate any explanation method before trusting it by removing its top-ranked sentences and measuring how the predicted score changes, then checking whether the explanations hold up across model families.
- **Instructors.** Pair transparent scoring with human interpretability — surface the specific dialogue sentences behind a quality rating so the shift "from what (the score) to why (the reasoning)" produces actionable [[feedback]] and builds [[trust]].

## Limitations

- The label distribution is highly skewed: only 19% of labels fall outside the 3–5 range across 6k transcript segments, which the authors link to the label compression they observe in fine-tuned PLMs and to weaker performance at the extremes of the scale.
- The study covers a single CLASS dimension, Quality of Feedback; it remains unclear how well the findings generalize to less discourse-driven dimensions such as Productivity within the Classroom Management domain.
- The analysis is text-only, ignoring the prosody, timing, and visual interactional signals that CLASS scoring relies on in practice.
- Each transcript segment was annotated by a single expert, so inter-rater reliability could not be assessed and annotation noise or subjective bias remains possible.

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
