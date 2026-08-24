---
title: "Codify: An Intelligent Socratic Tutoring System for Programming Education"
created: "2026-05-17T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [generative-ai, higher-ed, intelligent-tutoring, llm, programming-its, scaffolding, socratic-method, pedagogical-llm-training, automated-assessment, agentic-ai-ecosystems-higher-education]

sources: ['raw/papers/codify-socratic-tutoring-programming.md']
confidence: medium
---

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

Codify represents a modern instantiation of the [[conversational-ai-tutors-framework]] paradigm, combining LLM-powered dialogue with structured competency tracking — bridging the gap between open-ended chatbot tutoring and traditional [[automated-assessment|Automated Grading]] systems. Unlike purely conversational approaches (e.g., [[learnmate2-llm-adaptive-learning]]), Codify integrates formal assessment, gamification, and adaptive difficulty scaling into a single platform.

The RAG architecture aligns with [[retrieval-augmented-tutoring-algorithm-kite|KITE]], which also uses RAG for algorithmic tutoring, though Codify adopts a much broader scope covering all programming education domains. The Socratic methodology directly connects to the [[socratic-method]] approach and the [[pedagogical-llm-training]] literature on training LLMs for guided inquiry rather than answer provision.

## Preliminary Evidence

Initial deployment in programming courses showed promising results for student engagement and perceived learning support. Students particularly valued the 24/7 availability and conversational style as a supplement to traditional instruction. However, the paper reports preliminary observations rather than a controlled efficacy-study, and the evidence base remains early-stage.

## Connected Concepts

- [[adaptive-learning]]
- [[agentic-ai]]
- [[automated-assessment]]
- [[game-based-learning]]
- [[generative-ai]]
- [[higher-ed]]
- [[intelligent-tutoring]]
- [[llm]]
- [[pedagogical-llm-training]]
- [[scaffolding]]
- [[socratic-method]]
- [[student-engagement]]

## Connected Articles

- [[conversational-ai-tutors-framework]] — The path to conversational AI tutors
- [[eduagentbench-agent-teaching-benchmark]] — Are agents ready to teach?
- [[moodle-ai-tutoring-deep-learning]] — A grounded AI tutoring system for Moodle
- [[programming-its]] — Programming intelligent tutoring systems
- [[socraticode-k12-programming-tutor]] — Towards SocratiCode: a GenAI programming tutor for K-12
- [[structured-llm-feedback-programming]] — Effects of structured LLM feedback on programming performance
- [[retrieval-augmented-tutoring-algorithm-kite]] — Retrieval-augmented tutoring for algorithm tracing
- [[oecd-digital-education-outlook-2026]] — OECD Digital Education Outlook 2026

## Citation

Ilyasov, A., Bardelli, G., Torres, S., & Keshtkar, F. (2026). Codify: An intelligent Socratic tutoring system for programming education. [The International FLAIRS Conference Proceedings](https://doi.org/10.32473/flairs.39.1.141554), *39*(1). https://doi.org/10.32473/flairs.39.1.141554
