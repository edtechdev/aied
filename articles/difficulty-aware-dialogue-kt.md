---
title: Interpretable Difficulty-Aware Knowledge Tracing in Tutor-Student Dialogues
created: 2026-05-13
updated: 2026-05-13
type: article
tags: [knowledge-tracing, intelligent-tutoring, llm, personalized-learning, feedback-loop]
sources: ['raw/papers/2605.01097.md']
confidence: medium
---

> **Huang, S., Scarlatos, A., Lee, J., Lan, A. (2026)** — arXiv preprint.
## Analysis

This paper bridges LLM-based dialogue tutoring and interpretable student modeling. By mapping opaque LLM representations to **Item Response Theory** parameters — student ability (θ) and question difficulty (b) — the framework makes turn-by-turn predictions both accurate and cognitively meaningful. This connects directly to [[knowledge-tracing-irt]] by extending IRT beyond static assessment into live dialogue.

The framework was validated across two tutor-student dialogue datasets and outperformed existing KT baselines. The approach also operationalizes [[intelligent-tutoring]] by enabling tutors to calibrate scaffolds based on explicit difficulty-aware readiness estimates, and supports [[llm-student-modeling-memory]] by providing a principled way to convert LLM outputs into structured student state representations.

## Connected Articles

- [[knowledge-tracing-irt]]
- [[llm-student-modeling-memory]]
- [[ai-tutor-behavioral-evaluation]]
- [[tutoring-specific-vs-general-ai]]
- [[a4l-analytics-pipeline]]
- [[aaai2026-prompting-literacy-k12]]
- [[academiclaw-student-agent-benchmark]]
- [[access-not-enough-ai-tutoring-2026]]
- [[adapt-adaptive-lesson-plan-transformer]]
- [[agent-voice-accents-k12-group-learning]]
## Citation

Huang et al. (2026). [Interpretable Difficulty-Aware Knowledge Tracing in Tutor-Student Dialogues](https://arxiv.org/abs/2605.01097). arXiv:2605.01097. arXiv preprint.
