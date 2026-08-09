---
title: "EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners"
created: 2026-08-05
updated: 2026-08-05
type: article
tags: [intelligent-tutoring, llm, agentic-ai, benchmark, knowledge-tracing, student-modeling, simulation, ai-ed-evaluation, curriculum-design]
sources: ['raw/papers/2608.03206.md']
confidence: high
---

> **EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners** — Introduces a 30-day long-horizon benchmark for pedagogical LLM agents using simulated learners grounded in knowledge tracing. Evaluates 10 agent adapters over three base-model tiers and finds that tutoring quality depends on both the base model and a... [[intelligent-tutoring]] [[llm]] [[agentic-ai]] benchmark [[knowledge-tracing]] [[student-modeling]]

Introduces a 30-day long-horizon benchmark for pedagogical LLM agents using simulated learners grounded in knowledge tracing. Evaluates 10 agent adapters over three base-model tiers and finds that tutoring quality depends on both the base model and agent harness together, and almost no combination sustains good tutoring over the full horizon. Calibration check (ECE=0.049) and live-classroom field study confirm the simulated learner tracks reality. Scored on learning gain, responsiveness, helpfulness, and curriculum-design axes (Gagné and Rosenshine).

## Abstract

Large language models (LLMs) power educational applications from tutoring to essay scoring, but each is a point solution to a single task, and only recently have these point solutions been integrated into agents operating over a learning management system (LMS). Yet tutoring is long-horizon, since a learner improves over days and weeks rather than in a single turn, and no benchmark evaluates an agent tutor across a sustained relationship. We introduce EduClaw-Bench, a benchmark that places an agent tutor in a continuous 30-day relationship with a simulated learner grounded in knowledge tracing (KT), whose knowledge-concept mastery, from a KT model trained on real-student data, drives its answers and is probed for learning gain across 55 scenarios.

## Connected Concepts

- [[agentic-ai]]
- [[ai-ed-evaluation]]
- [[knowledge-tracing]]
- [[llm]]

- [[curriculum-design]]
## Connected Articles

- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention
- [[ai-coaching-rl-skill-development]] — AI Coaching for Accelerating Human Skill Development with Reinforcement Learning
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems
- [[ai-engineering-education-balancing-act]] — Using AI in engineering education: a balancing act, driven by clear purpose
- [[ai-fallibility-warning-help-seeking]] — Warning About AI Fallibility Increases Help-Seeking in an Intelligent Tutoring System
- [[ai-generated-traces-novice-programmers]] — AI-Generated Traces for Novice Programmers: Learning Effects and Learner Differences in a Multi-Institutional Study

## Citation

Unggi Lee, Sookbun Lee, Yeil Jeong, Eunjoo Lee, Minchul Shin, & Hoilym Kwon (2026). [EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners](https://arxiv.org/abs/2608.03206). arXiv:2608.03206. arXiv:2608.03206 [cs.CY].
