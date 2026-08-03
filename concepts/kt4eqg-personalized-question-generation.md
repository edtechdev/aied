---
title: 'KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing'
created: 2026-05-28
updated: 2026-05-28
type: concept
tags: [adaptive-learning, automated-grading, intelligent-tutoring, learning-analytics, llm, personalized-learning]
sources: [raw/papers/2605.23933.md]
confidence: medium
---

# KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing

**Gao et al. (2026)** — Microsoft Research / MIT / UC Santa Barbara. *arXiv preprint*.

📄 [Full text (arXiv)](https://arxiv.org/abs/2605.23933)

**KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing** bridges two key AI-in-education paradigms: [[personalized-learning]] through question generation and [[learning-analytics]] through knowledge tracing. Rather than generating generic practice questions, KT4EQG uses a Knowledge Tracing model to first identify the knowledge concept that would maximize a student's potential improvement in overall mastery, then trains an [[llm]]-based generator to produce a question faithfully grounded in that concept. This two-stage architecture — KT for concept selection, LLM for faithful question generation — outperforms less personalized baselines on XES3G5M and MOOCRadar datasets. The approach represents a significant advance in [[adaptive-learning]] system design, connecting to [[knowledge-tracing-irt]] research on modeling student knowledge states and [[automated-question-generation]] work on producing high-quality educational content. Unlike earlier systems such as [[slidesqaqa-pedagogical-question-generation]] that generate questions from static content, KT4EQG personalizes based on dynamic student models, aligning with [[intelligent-tutoring]] goals of providing the right question at the right time for each learner.

## Related Pages
- [[automated-grading]] — AI systems for scoring student work
- [[intelligent-tutoring]] — AI tutoring systems and architectures
- [[ai-literacy]] — Frameworks for understanding and using AI
- [[formative-assessment]] — Assessment for learning and feedback
- [[llm]] — Large language models in education
- [[generative-ai]] — Generative AI applications and implications
- [[higher-ed]] — AI in higher education contexts
- [[history-aware-student-simulation]] — History-conditioned student simulation with RL-optimized profiles for tutoring

## Citation
**APA:** Xinyi Gao, Qiucheng Wu, Lu Ding, Q. Vera Liao, Kaizhi Qian, Ying Xu, Shiyu Chang, Yang Zhang (2026). *KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing*. arXiv:2605.23933. arXiv preprint.
