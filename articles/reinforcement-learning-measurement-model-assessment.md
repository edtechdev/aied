---
title: Reinforcement Learning Measurement Model
created: 2026-05-12
updated: 2026-05-12
type: article
tags: [assessment, learning-analytics, knowledge-tracing, benchmark, llm]
sources: ['raw/papers/2605.09305.md']
confidence: medium
---

> **Wenqian Xu, Feng Ji (2026)** — RL-based measurement model for interactive assessments.

# Reinforcement Learning Measurement Model for Interactive Assessment

## Key Findings

Interactive assessments generate sequential process data that conventional item response models (IRT) cannot adequately handle. This paper proposes a **reinforcement learning measurement model** that links action choices to state-action values, extending beyond existing MDP-based measurement approaches.^[raw/papers/2605.09305.md]

The model addresses the gap between traditional static assessment models and the dynamic, interactive nature of modern computer-based assessments. It builds on prior work (LaMar, 2018) but improves reliability of estimates for interactive assessments where students' action sequences carry diagnostic information.^[raw/papers/2605.09305.md]

## Connections to AIED

This work directly extends [[knowledge-tracing-irt]] by replacing static IRT with a dynamic RL-based approach. It connects to [[assessment]] by providing a new framework for scoring interactive assessments that capture student problem-solving processes rather than just final answers.^[raw/papers/2605.09305.md]

The approach also relates to [[knowledge-tracing]] and [[learning-analytics]] as it extracts diagnostic signals from interaction data that go beyond traditional performance metrics.

## Connected Concepts

- [[knowledge-tracing]]
- [[learning-analytics]]

- [[llm]]
## Connected Articles

- [[knowledge-tracing-irt]] — Interpretable Knowledge Tracing via IRT
- [[representation-robustness-llm-math-problem-solving]] — Representation Robustness under Executable Reasoning Constraints in Large Language Models for Mathematical Problem So...
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems
- [[ai-engineering-education-balancing-act]] — Using AI in engineering education: a balancing act, driven by clear purpose
- [[ai-generated-traces-novice-programmers]] — AI-Generated Traces for Novice Programmers: Learning Effects and Learner Differences in a Multi-Institutional Study
- [[ai-in-the-wild-college]] — AI in the Wild: A Large Scale Analysis of Authentic Interactions of College Students with Generative AI
- [[ai-interlocutor-l2-spoken-dialogue]] — What Changes When the Interlocutor Is an AI? Interactional Fluency and Linguistic Uptake in L2 Spoken Dialogue
- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base
- [[ai-learning-assistants-higher-ed-large-scale]] — Using AI-based Learning Assistants in Higher Education: A Large-Scale Descriptive Analysis

## Citation

Xu, W., & Ji, F. (2026). [Reinforcement learning measurement model](https://arxiv.org/abs/2605.09305). arXiv:2605.09305.
