---
title: "Codify: An Intelligent Socratic Tutoring System for Programming Education"
created: 2026-05-17
updated: 2026-05-17
type: article
tags: [generative-ai, higher-ed, intelligent-tutoring, llm, programming-its, scaffolding, socratic-method, pedagogical-llm-training, automated-grading, agentic-ai-ecosystems-higher-education]
sources: ['raw/papers/codify-socratic-tutoring-programming.md']
confidence: medium
---

> **Allan Ilyasov, Giulio Bardelli, Sebastian Torres, Fazel Keshtkar (2026)** — St. John's University. *The International FLAIRS Conference Proceedings*, 39(1). DOI: 10.32473/flairs.39.1.141554.
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

Initial deployment in programming courses showed promising results for student engagement and perceived learning support. Students particularly valued the 24/7 availability and conversational style as a supplement to traditional instruction. However, the paper reports preliminary observations rather than a controlled efficacy-study, and the evidence base remains early-stage.

## Connected Concepts

- [[agentic-ai]]
- [[automated-grading]]
- [[llm]]
- [[pedagogical-llm-training]]
- [[scaffolding]]
- [[socratic-ai-dialogue]]

- [[generative-ai]]
- [[higher-ed]]
## Connected Articles

- [[conversational-ai-tutors-framework]] — The Path to Conversational AI Tutors: Integrating Tutoring Best Practices and Targeted Technologies to Produce Scalab...
- [[eduagentbench-agent-teaching-benchmark]] — Are Agents Ready to Teach? A Multi-Stage Benchmark for Real-World Teaching Workflows
- [[learnmate2-llm-adaptive-learning]] — LearnMate^2: Design and Evaluation of an LLM-powered Personalized and Adaptive Support System for Online Learning
- [[moodle-ai-tutoring-deep-learning]] — From Surface Learning to Deep Understanding: A Grounded AI Tutoring System for Moodle
- [[oecd-digital-education-outlook-2026]] — OECD Digital Education Outlook 2026
- [[programming-its]] — Programming Intelligent Tutoring Systems
- [[retrieval-augmented-tutoring-algorithm-kite]] — Retrieval-Augmented Tutoring for Algorithm Tracing and Problem-Solving in AI Education
- [[socraticode-k12-programming-tutor]] — Towards SocratiCode: Designing a Generative AI-Based Programming Tutor for K-12 Students through a 4-Week Participato...
- [[structured-llm-feedback-programming]] — The Effects of Structured LLM-Generated Feedback on Programming Assignment Performance
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...

## Citation

Ilyasov, A., Bardelli, G., Torres, S., & Keshtkar, F. (2026). Codify: An intelligent Socratic tutoring system for programming education. [The International FLAIRS Conference Proceedings](https://doi.org/10.32473/flairs.39.1.141554), *39*(1). https://doi.org/10.32473/flairs.39.1.141554
