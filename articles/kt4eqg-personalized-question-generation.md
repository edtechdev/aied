---
title: "KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing"
created: "2026-05-28T04:33:04-04:00"
updated: "2026-09-19T08:49:57-04:00"
type: article
technology: [adaptive-learning, generative-ai, intelligent-tutoring, learning-analytics, llm, personalized-learning]
assessment: [automated-assessment, automated-question-generation]
methods: [benchmark]
research_method: [system development]
level: [higher ed]
sources: ['raw/papers/2605.23933.md']
confidence: medium
audience: [instructional designers]
---

> **Synthesis:** **KT4EQG: Personalized Exercise Question Generation via [[knowledge-tracing|Knowledge Tracing]]** bridges two key AI-in-education paradigms: [[personalized-learning]] through question generation and [[learning-analytics]] through knowledge tracing. Rather than generating generic practice questions, KT4EQG uses a Knowledge Tracing model to first identify the knowledge concept that would maximize a student's potential improvement in overall mastery, then trains an [[llm]]-based generator to produce a question faithfully grounded in that concept. This two-stage architecture — KT for concept selection, LLM for faithful question generation — outperforms less personalized baselines on XES3G5M and MOOCRadar datasets. The approach represents a significant advance in [[adaptive-learning]] system design, connecting to [[huang-interpretable-knowledge-tracing-2026]] [[research-methods-aied|research]] on modeling student knowledge states and [[automated-question-generation]] work on producing high-quality educational content. Unlike earlier systems such as [[slidesqaqa-pedagogical-question-generation]] that generate questions from static content, KT4EQG personalizes based on dynamic student models, aligning with [[intelligent-tutoring]] goals of providing the right question at the right time for each learner.

## What this means for practice
- **Instructors.** Choose the next practice concept from a knowledge-tracing model's mastery estimates rather than from a fixed topic sequence, so each student works on the concept with the largest expected gain.
- **Designers.** Split concept selection from question writing and train the generator with an explicit alignment reward, because without it generated questions collapse onto similar content — the strongest baseline put 35.3% of verified questions on one concept against 5.2% for KT4EQG.
- **Designers.** Screen every generated item for answerability before it reaches a student; this study used a separate language model to judge whether a question admits a well-defined solution.
- **Researchers.** Evaluate generated practice questions by downstream exam-score gain and verified concept alignment, not by surface text-similarity metrics alone.

## Limitations
- Effectiveness was measured entirely in simulation: after each generated question the knowledge-tracing model updated the student's state assuming successful practice, so the reported exam-score gains are model-generated rather than observed learning by real students.
- The evaluation covers three of the largest knowledge modules in XES3G5M with 300 students per module, and MOOCRadar supplies only concepts, so its hierarchical tree was LLM-constructed rather than expert-annotated.
- Question answerability was judged by Qwen-3-4B, an automated judge, with no human rating of item quality in the main results.
- The generated items are elementary mathematics written for a third-grade audience, so the demonstrated gains may not transfer to the higher-education settings an adaptive platform would use them in.

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

- [[huang-interpretable-knowledge-tracing-2026]]
- [[slidesqaqa-pedagogical-question-generation]]
## Citation

Xinyi Gao, Qiucheng Wu, Lu Ding, Q. Vera Liao, Kaizhi Qian, Ying Xu, Shiyu Chang, Yang Zhang (2026). [KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing](https://arxiv.org/abs/2605.23933). arXiv preprint.
