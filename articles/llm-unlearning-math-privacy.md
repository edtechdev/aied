---
title: "Balancing AI responsibility with privacy, safety, and utility: Unlearning in large language models for mathematics education"
created: 2026-06-03
updated: 2026-08-07
type: article
tags: [llm, privacy, k-12, pedagogical-safety, intelligent-tutoring]
sources: ['raw/papers/caeai-llm-unlearning-math.md']
confidence: medium
---

> **Synthesis:** Balancing AI responsibility with privacy, safety, and utility: Unlearning in large language models for mathematics education

## Key Findings

- The study applies **gradient-based LLM unlearning** to **three different models** pre-trained on approximately **3 million data points** from an Algebra I online discussion forum between students and professional tutors.
- **PII and harmful content were detected on the training data** and targeted for unlearning in **two different orders** (PII-first and harmful-content-first), producing two unlearned variants per base model.
- After unlearning, the **rates of PII-containing output and harmfulness substantially decreased** compared to the pre-trained models.
- **Utility was maintained** on both **single-label and multi-label downstream math classification tasks**, showing that unlearning did not destroy the models' math-task competence.
- The findings demonstrate a practical path to making LLM-based math tutors **more responsible and privacy-preserving** while retaining strong performance on math-related tasks.

## Study Design & Method

Online mathematics learning platforms increasingly adopt LLMs for scalable, on-demand support, but pre-trained models may **reproduce private information from training data or generate harmful language**. The study first detects PII and harmful content on the ~3M-point Algebra I tutoring corpus, applies gradient-based unlearning in two orders, and then compares the generated outputs of the unlearned models with those of the pre-trained model in terms of **PII-containing output rate and harmful rate**. Finally, the unlearned models are evaluated on two math classification tasks to confirm that utility survives.

## Implications for AI in Education

For responsible deployment in educational settings, the work shows that **post-hoc unlearning is a viable complement to data curation**: models already trained on sensitive or unsafe classroom data can be steered toward safer behavior without retraining from scratch. The trade-off between safety and utility is managed rather than eliminated — privacy and harmfulness drop substantially while math-task performance is maintained. This supports [[pedagogical-safety]] and [[privacy]]-conscious design of LLM-based tutors in [[k-12]] mathematics contexts, where student data are especially sensitive.

## Connected Concepts

## Connected Articles


## Citation

Li, C., Gülfidan, G., & Zhang-Kopf, Y. (2026). [*Balancing AI responsibility with privacy, safety, and utility: Unlearning in large language models for mathematics education*](https://doi.org/10.1016/j.caeai.2026.100642).
