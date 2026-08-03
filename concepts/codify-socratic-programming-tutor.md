---
title: 'Codify: An Intelligent Socratic Tutoring System for Programming Education'
created: 2026-05-26
updated: 2026-05-26
type: concept
tags: [intelligent-tutoring, llm, stem-education, higher-ed, adaptive-learning]
sources: [raw/papers/codify-socratic-programming-tutor.md]
confidence: medium
---

# Codify: Socratic Programming Tutor

**Ilyasov, Bardelli, Torres & Keshtkar (2026)** — St. John's University. The International FLAIRS Conference Proceedings, Vol. 39 No. 1 (Poster).

📄 [DOI: 10.32473/flairs.39.1.141554](https://doi.org/10.32473/flairs.39.1.141554)

Codify (also called AI Tutor) is an [[intelligent-tutoring]] system that leverages [[llm|LLMs]], competency tracking, and adaptive assessment to provide Socratic, discovery-based programming education. Rather than giving direct answers, it guides students through dialogue designed to elicit their own reasoning.

## System Architecture
The platform includes:
- **Conversational tutoring** using Socratic methodology
- **Automated practice generation** adapting to student needs
- **Competency modeling** with topic-level mastery tracking
- **Code analysis** for evaluating student submissions
- **Gamified engagement** mechanisms for motivation

Students interact through a chat-based interface, and the system dynamically adjusts question difficulty and [[scaffolding]] based on real-time competency estimates. This approach aligns with research on [[knowledge-tracing-irt|knowledge tracing]] and [[adaptive-learning]], though as a conference poster, empirical evaluation of learning outcomes is preliminary.

## Positioning in the ITS Landscape
Codify represents the trend toward LLM-powered tutoring systems that combine conversational AI with structured pedagogical frameworks. Unlike [[ai-peer-feedback-systems|AI feedback systems]] that provide targeted critique, Codify emphasizes discovery learning — a Socratic approach that connects to questions about [[metacognition]] and [[self-regulated-learning]]. Future work could benefit from incorporating findings from [[llm-reasoning-traces-metacognition|research on reasoning traces and metacognitive calibration]], as the Socratic dialogue format may face similar challenges of inflating student confidence without improving performance.

## Related Pages
- [[correct-answer-trap-ai-tutor]] — 8 of 8 papers in May 28 scan
- [[intelligent-tutoring]] — Intelligent tutoring systems
- [[llm]] — Large language models in education
- [[knowledge-tracing-irt]] — Knowledge tracing and IRT
- [[adaptive-learning]] — Adaptive learning systems
- [[scaffolding]] — Instructional scaffolding
- [[metacognition]] — Metacognition in learning

## Citation
**APA:** Ilyasov, A., Bardelli, G., Torres, S., & Keshtkar, F. (2026). Codify: An intelligent Socratic tutoring system for programming education. *The International FLAIRS Conference Proceedings*, *39*(1). https://doi.org/10.32473/flairs.39.1.141554
