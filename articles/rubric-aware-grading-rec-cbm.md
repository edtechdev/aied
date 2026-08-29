---
title: "REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models for Trustworthy Open-Ended Grading"
created: "2026-05-28T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [automated-assessment, llm, formative-assessment, higher-ed, scaffolding, generative-ai, ai-literacy, assessment-validity]
audience: [teacher role, research methods aied]
research_method: [efficacy study]
level: [higher ed]

sources: ['raw/papers/2605.27402.md']
confidence: medium
---

**REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models** advances the [[automated-assessment|Automated Grading]] frontier by solving a fundamental trust problem: even accurate AI graders are unusable if educators cannot verify their reasoning. Standard [[llm]]-based graders operate as black boxes, while earlier Concept Bottleneck Models (CBMs) offer interpretability but fail at modeling rubric dimensions, ordinal score semantics, and noisy human annotations. REC-CBM introduces three innovations: (1) a rubric-aware concept encoder that learns concept-specific representations aligned with actual grading rubrics, (2) an ordinal pairwise calibration objective that preserves score ordering (e.g., 'poor' < 'fair' < 'good'), and (3) a latent error-correction module that denoises concept predictions while maintaining full interpretability. Experiments demonstrate consistent improvements in both grading accuracy and concept-level reasoning faithfulness over baselines. This work directly addresses [[assessment-validity]] concerns raised in [[genai-assessment-governance]] and complements [[cong-confidence-asag-2026]] by adding the interpretability dimension. The rubric-aware design aligns with [[formative-assessment]] needs and [[scaffolding]] principles, and the error-correction approach resonates with work on [[ground-truth-reliability-aied]].

## Connected Concepts

- [[automated-assessment]]
- [[llm]]
- [[assessment-validity]]
- [[formative-assessment]]
- [[scaffolding]]
- [[automated-essay-scoring]]
- [[educational-measurement]]
- [[human-in-the-loop-ai]]
## Connected Articles

- [[genai-assessment-governance]]
- [[cong-confidence-asag-2026]]
- [[ground-truth-reliability-aied]]
## Citation

Chengshuai Zhao, Fan Zhang, Kumar Satvik Chaudhary, Yiwen Li, Lo Pang-Yun Ting, Ying-Chih Chen, Huan Liu (2026). [REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models for Trustworthy Open-Ended Grading](https://arxiv.org/abs/2605.27402). arXiv preprint.
