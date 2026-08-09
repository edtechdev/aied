---
title: "KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing"
created: 2026-05-28
updated: 2026-05-28
type: article
tags: [adaptive-learning, automated-grading, intelligent-tutoring, learning-analytics, llm, personalized-learning, generative-ai, higher-ed, automated-question-generation, slidesqaqa-pedagogical-question-generation]
sources: ['raw/papers/2605.23933.md']
confidence: medium
---

> **Gao et al. (2026)** — Microsoft Research / MIT / UC Santa Barbara. *arXiv preprint*.

**Gao et al. (2026)** — Microsoft Research / MIT / UC Santa Barbara. *arXiv preprint*.

**KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing** bridges two key AI-in-education paradigms: [[personalized-learning]] through question generation and [[learning-analytics]] through knowledge tracing. Rather than generating generic practice questions, KT4EQG uses a Knowledge Tracing model to first identify the knowledge concept that would maximize a student's potential improvement in overall mastery, then trains an [[llm]]-based generator to produce a question faithfully grounded in that concept. This two-stage architecture — KT for concept selection, LLM for faithful question generation — outperforms less personalized baselines on XES3G5M and MOOCRadar datasets. The approach represents a significant advance in [[adaptive-learning]] system design, connecting to [[knowledge-tracing-irt]] research on modeling student knowledge states and [[automated-question-generation]] work on producing high-quality educational content. Unlike earlier systems such as [[slidesqaqa-pedagogical-question-generation]] that generate questions from static content, KT4EQG personalizes based on dynamic student models, aligning with [[intelligent-tutoring]] goals of providing the right question at the right time for each learner.

## Connected Concepts

- [[adaptive-learning]]
- [[ai-literacy]]
- [[automated-grading]]
- [[automated-question-generation]]
- [[formative-assessment]]
- [[generative-ai]]
- [[higher-ed]]
- [[learning-analytics]]
- [[llm]]
- [[personalized-learning]]
- [[slidesqaqa-pedagogical-question-generation]]

## Connected Articles

- [[history-aware-student-simulation]] — Who Am I? History-Aware Profiles for Student Simulation in Tutoring Dialogues
- [[knowledge-tracing-irt]] — Interpretable Knowledge Tracing via IRT
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
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adult-learning-design]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...

## Citation

Xinyi Gao, Qiucheng Wu, Lu Ding, Q. Vera Liao, Kaizhi Qian, Ying Xu, Shiyu Chang, Yang Zhang (2026). [KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing](https://arxiv.org/abs/2605.23933). arXiv:2605.23933. arXiv preprint.
