---
title: "AICoFe: Implementation and Deployment of an AI-Based Collaborative Feedback System for Higher Education"
created: 2026-05-14
updated: 2026-05-14
type: article
tags: [automated-grading, feedback-loop, higher-ed, llm, learning-analytics, human-in-the-loop-ai, rag]
sources: ['raw/papers/2605.04740.md']
confidence: medium
---

> **Alvaro Becerra, Alejandra Palma, Ruth Cobos (2026)** — LASI Spain 2026.

# AICoFe: AI-Based Collaborative Feedback System for Higher Education

**Alvaro Becerra, Alejandra Palma, Ruth Cobos (2026)** — LASI Spain 2026.

## System Architecture

AICoFe orchestrates a multi-LLM pipeline using GPT-4.1-mini, Gemini 2.5 Flash, and Llama 3.1 to synthesize quantitative rubric data and qualitative observations into actionable feedback for higher education students. The key innovation is a **teacher-in-the-loop mediation workflow**: educators use specialized Learning Analytics dashboards to curate and refine AI-generated feedback drafts before delivery.

## Technical Design

- **Multi-LLM orchestration**: Three different models contribute complementary perspectives
- **Hybrid storage**: SQL for traceability and structured metadata + MongoDB for semi-structured feedback versions
- **Learning Analytics dashboards**: Dedicated educator interfaces for feedback curation

## Connection to Broader AIED

AICoFe extends prior work on [[ai-peer-feedback-systems]] from experimental prototypes to a deployed system with educator mediation. The multi-LLM approach addresses single-model bias concerns in [[automated-grading]]. It sits at the intersection of [[feedback-loop]] design and [[learning-analytics]] — keeping educators as active curators through [[human-in-the-loop-ai]] principles.

## Connected Concepts

- [[automated-grading]]
- [[higher-ed]]
- [[human-in-the-loop-ai]]
- [[learning-analytics]]

## Connected Articles

- [[ai-peer-feedback-systems]] — AI Peer Feedback Systems
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis
- [[ai-assisted-writing-research-teams]] — Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows

## Citation

Becerra, A., Palma, A., & Cobos, R. (2026). [AICoFe: Implementation and deployment of an AI-based collaborative feedback system for higher education](https://arxiv.org/abs/2605.04740). Proceedings of the Learning Analytics Summer Institute Spain 2026 (LASI Spain 2026). arXiv:2605.04740.
