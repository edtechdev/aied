---
title: "REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models for Trustworthy Open-Ended Grading"
created: 2026-05-28
updated: 2026-05-28
type: concept
tags: [automated-grading, llm, formative-assessment, higher-ed, scaffolding, efficacy-study]
sources: [raw/papers/2605.27402.md]
confidence: medium
---

# REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models for Trustworthy Open-Ended Grading

**Zhao et al. (2026)** — Arizona State University. *arXiv preprint*.

**REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models** advances the [[automated-grading]] frontier by solving a fundamental trust problem: even accurate AI graders are unusable if educators cannot verify their reasoning. Standard [[llm]]-based graders operate as black boxes, while earlier Concept Bottleneck Models (CBMs) offer interpretability but fail at modeling rubric dimensions, ordinal score semantics, and noisy human annotations. REC-CBM introduces three innovations: (1) a rubric-aware concept encoder that learns concept-specific representations aligned with actual grading rubrics, (2) an ordinal pairwise calibration objective that preserves score ordering (e.g., 'poor' < 'fair' < 'good'), and (3) a latent error-correction module that denoises concept predictions while maintaining full interpretability. Experiments demonstrate consistent improvements in both grading accuracy and concept-level reasoning faithfulness over baselines. This work directly addresses [[assessment-validity]] concerns raised in [[genai-assessment-governance]] and complements [[automatic-short-answer-grading]] by adding the interpretability dimension. The rubric-aware design aligns with [[formative-assessment]] needs and [[scaffolding]] principles, and the error-correction approach resonates with work on [[ground-truth-reliability-aied]].

## Related Pages
- [[automated-grading]] — AI systems for scoring student work
- [[intelligent-tutoring]] — AI tutoring systems and architectures
- [[ai-literacy]] — Frameworks for understanding and using AI
- [[formative-assessment]] — Assessment for learning and feedback
- [[llm]] — Large language models in education
- [[generative-ai]] — Generative AI applications and implications
- [[higher-ed]] — AI in higher education contexts
- [[modular-educational-llm-agency]] — Modular agent architecture for responsible LLM-based learning assistance

## Citation

Chengshuai Zhao, Fan Zhang, Kumar Satvik Chaudhary, Yiwen Li, Lo Pang-Yun Ting, Ying-Chih Chen, Huan Liu (2026). [REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models for Trustworthy Open-Ended Grading](https://arxiv.org/abs/2605.27402). arXiv:2605.27402. arXiv preprint.
