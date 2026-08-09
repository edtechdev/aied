---
title: 'Codify: An Intelligent Socratic Tutoring System for Programming Education'
created: 2026-05-17
updated: 2026-05-17
type: article
tags: [generative-ai, higher-ed, intelligent-tutoring, llm, programming-its, scaffolding, socratic-method]
sources: [raw/papers/codify-socratic-tutoring-programming.md]
confidence: medium
---

# Codify: An Intelligent Socratic Tutoring System for Programming Education

**Allan Ilyasov, Giulio Bardelli, Sebastian Torres, Fazel Keshtkar (2026)** — St. John's University. *The International FLAIRS Conference Proceedings*, 39(1). DOI: 10.32473/flairs.39.1.141554.

## System Overview

Codify (also referred to as "AI Tutor") is a web-based [[intelligent-tutoring]] platform for programming education that integrates conversational AI, adaptive assessment, and learning analytics. It leverages **LLMs deployed via AWS Bedrock** with a **Socratic teaching methodology** that promotes discovery-based learning over direct answer generation — students are guided through questions and hints rather than given solutions outright.

## Architecture and Components

The system comprises five integrated components:

1. **Conversational AI Tutor**: Built on [[llm]] technology with LangChain and [[retrieval-augmented-tutoring-algorithm-kite|Retrieval-Augmented Generation (RAG)]] for contextual memory and response coherence. Uses Socratic questioning rather than answer provision.

2. **Practice Question Engine**: Automatically generates programming exercises at three difficulty levels (beginner, intermediate, advanced), dynamically tailored to student competency.

3. **Competency Tracking**: Maintains topic-level competency scores (0–100) per student, updated continuously based on interactions, quiz performance, and problem-solving. Incorporates **resistance curves** — mastery becomes progressively harder as proficiency increases.

4. **Code Analysis & Feedback**: Performs syntax validation, logic analysis, style feedback, and debugging assistance. Critically, the system **does not correct code directly** — it provides educational hints that encourage self-discovery, aligning with [[scaffolding]] best practices.

5. **Adaptive Learning & Gamification**: Features XP, daily streaks, competitive leagues (Bronze → Diamond), and multiple leaderboards for engagement.

## Positioning in the ITS Landscape

Codify represents a modern instantiation of the [[conversational-ai-tutors-framework]] paradigm, combining LLM-powered dialogue with structured competency tracking — bridging the gap between open-ended chatbot tutoring and traditional [[automated-grading]] systems. Unlike purely conversational approaches (e.g., [[learnmate2-llm-adaptive-learning]]), Codify integrates formal assessment, gamification, and adaptive difficulty scaling into a single platform.

The RAG architecture aligns with [[retrieval-augmented-tutoring-algorithm-kite|KITE]], which also uses RAG for algorithmic tutoring, though Codify adopts a much broader scope covering all programming education domains. The Socratic methodology directly connects to the [[socratic-ai-dialogue]] approach and the [[pedagogical-llm-training]] literature on training LLMs for guided inquiry rather than answer provision.

## Preliminary Evidence

Initial deployment in programming courses showed promising results for student engagement and perceived learning support. Students particularly valued the 24/7 availability and conversational style as a supplement to traditional instruction. However, the paper reports preliminary observations rather than a controlled [[efficacy-study]], and the evidence base remains early-stage.

## Related Pages
- [[socraticode-k12-programming-tutor]] — Towards SocratiCode: Designing a Generative AI-Based Programming Tutor for K-12 Students through a 4-Week Participatory Design Study
- [[structured-llm-feedback-programming]] — The Effects of Structured LLM-Generated Feedback on Programming Assignment Performance
- [[retrieval-augmented-tutoring-algorithm-kite]] — RAG-based Socratic tutoring for algorithmic reasoning
- [[conversational-ai-tutors-framework]] — Framework for integrating tutoring behaviors into conversational AI
- [[learnmate2-llm-adaptive-learning]] — LLM-powered personalized adaptive learning system
- [[moodle-ai-tutoring-deep-learning]] — Grounded AI tutoring approach within LMS platforms
- [[programming-its]] — Intelligent tutoring systems for programming education
- [[eduagentbench-agent-teaching-benchmark]] — Benchmark for evaluating AI teaching agents
- [[socratic-ai-dialogue]] — Socratic questioning approaches in AI tutoring
- [[pedagogical-llm-training]] — Training LLMs for pedagogical interaction patterns
- [[agentic-ai-ecosystems-higher-education]] — Multi-agent AI frameworks for higher education
- [[oecd-digital-education-outlook-2026]]

## Citation

Ilyasov, A., Bardelli, G., Torres, S., & Keshtkar, F. (2026). Codify: An intelligent Socratic tutoring system for programming education. [The International FLAIRS Conference Proceedings](https://doi.org/10.32473/flairs.39.1.141554), *39*(1). https://doi.org/10.32473/flairs.39.1.141554
