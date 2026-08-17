---
title: "KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing"
created: 2026-05-28T04:33:04-04:00
updated: 2026-08-15
type: article
tags: [adaptive-learning, automated-grading, intelligent-tutoring, learning-analytics, llm, personalized-learning, generative-ai, higher-ed, automated-question-generation, slidesqaqa-pedagogical-question-generation]
sources: ['raw/papers/2605.23933.md']
confidence: medium
---

**KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing** bridges two key AI-in-education paradigms: [[personalized-learning]] through question generation and [[learning-analytics]] through knowledge tracing. Rather than generating generic practice questions, KT4EQG uses a Knowledge Tracing model to first identify the knowledge concept that would maximize a student's potential improvement in overall mastery, then trains an [[llm]]-based generator to produce a question faithfully grounded in that concept. This two-stage architecture — KT for concept selection, LLM for faithful question generation — outperforms less personalized baselines on XES3G5M and MOOCRadar datasets. The approach represents a significant advance in [[adaptive-learning]] system design, connecting to [[knowledge-tracing-irt]] research on modeling student knowledge states and [[automated-question-generation]] work on producing high-quality educational content. Unlike earlier systems such as [[slidesqaqa-pedagogical-question-generation]] that generate questions from static content, KT4EQG personalizes based on dynamic student models, aligning with [[intelligent-tutoring]] goals of providing the right question at the right time for each learner.

## Connected Concepts

- [[personalized-learning]]
- [[learning-analytics]]
- [[llm]]
- [[adaptive-learning]]
- [[automated-question-generation]]
- [[intelligent-tutoring]]
- [[student-modeling]]
- [[formative-assessment]]
## Connected Articles

- [[knowledge-tracing-irt]]
- [[slidesqaqa-pedagogical-question-generation]]
## Citation

Xinyi Gao, Qiucheng Wu, Lu Ding, Q. Vera Liao, Kaizhi Qian, Ying Xu, Shiyu Chang, Yang Zhang (2026). [KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing](https://arxiv.org/abs/2605.23933). arXiv:2605.23933. arXiv preprint.
