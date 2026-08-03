---
title: Interpretable Difficulty-Aware Knowledge Tracing in Tutor-Student Dialogues
created: 2026-05-13
updated: 2026-05-13
type: concept
tags: [knowledge-tracing, intelligent-tutoring, llm, personalized-learning, feedback-loop]
sources: [raw/papers/2605.01097.md]
confidence: medium
---

# Interpretable Difficulty-Aware Knowledge Tracing in Tutor-Student Dialogues

**Huang, S., Scarlatos, A., Lee, J., Lan, A. (2026)** — arXiv preprint.

📄 [Full text (arXiv)](https://arxiv.org/abs/2605.01097)

## Analysis

This paper bridges LLM-based dialogue tutoring and interpretable student modeling. By mapping opaque LLM representations to **Item Response Theory** parameters — student ability (θ) and question difficulty (b) — the framework makes turn-by-turn predictions both accurate and cognitively meaningful. This connects directly to [[knowledge-tracing-irt]] by extending IRT beyond static assessment into live dialogue.^[2605.01097](raw/papers/2605.01097.md)

The framework was validated across two tutor-student dialogue datasets and outperformed existing KT baselines. The approach also operationalizes [[intelligent-tutoring]] by enabling tutors to calibrate scaffolds based on explicit difficulty-aware readiness estimates, and supports [[llm-student-modeling-memory]] by providing a principled way to convert LLM outputs into structured student state representations.

## Related Pages

- [[knowledge-tracing-irt]] — Difficulty-aware dialogue KT extends IRT-based tracing to conversational settings
- [[intelligent-tutoring]] — Interpretable ability/difficulty parameters for tutor-student dialogues
- [[llm-student-modeling-memory]] — IRT-mapped LLM outputs for student modeling in dialogues
- [[feedback-loop]] — Turn-level assessment enables immediate feedback calibration
- [[ai-tutor-behavioral-evaluation]] — Turn-by-turn student performance assessment through IRT-based difficulty modeling
- [[tutoring-specific-vs-general-ai]] — General LLMs reframed as psychometric instruments through IRT mapping

## Citation

**APA:** Huang et al. (2026). *Interpretable Difficulty-Aware Knowledge Tracing in Tutor-Student Dialogues*. arXiv:2605.01097. arXiv preprint.
