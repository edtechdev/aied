---
title: Temporal Smoothness Doubly Robust Learning for Debiased Knowledge Tracing
created: 2026-05-13
updated: 2026-05-13
type: article
tags: [knowledge-tracing, learning-analytics, personalized-learning, intelligent-tutoring, student-experience]
sources: ['raw/papers/2605.05958.md']
confidence: medium
---

> **Zhan, P., Chen, W., Chen, W., Pan, S., Cai, R. (2026)** — arXiv preprint.

**Zhan, P., Chen, W., Chen, W., Pan, S., Cai, R. (2026)** — arXiv preprint.

## Analysis

This paper addresses a critical but under-examined issue in KT systems: **selection bias** from non-random exercise recommendations. Prior KT methods train on observed logs using standard empirical risk, producing biased mastery estimates that compound errors in downstream recommendation loops. The proposed **Temporal Smoothness Doubly Robust (TSDR)** framework combines a propensity model with an error imputation model, regularized for temporal smoothness.^[2605.05958](raw/papers/2605.05958.md)

The doubly robust property ensures the estimator remains unbiased if *either* the propensity or imputation model is correct. This connects to [[personalized-learning]] by ensuring adaptive recommendations are not systematically biased toward high-engagement students.

## Connected Concepts

- [[learning-analytics]]
- [[personalized-learning]]
- [[student-experience]]

## Connected Articles

- [[knowledge-tracing-irt]] — Interpretable Knowledge Tracing via IRT
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[ai-adult-learning-design]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[ai-coaching-rl-skill-development]] — AI Coaching for Accelerating Human Skill Development with Reinforcement Learning
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems
- [[ai-engineering-education-balancing-act]] — Using AI in engineering education: a balancing act, driven by clear purpose
- [[ai-fallibility-warning-help-seeking]] — Warning About AI Fallibility Increases Help-Seeking in an Intelligent Tutoring System
- [[ai-fatigue-academic-contexts]] — Defining AI Fatigue in Academic Contexts: Dimensions, Indicators, and a Stage-Based Model Using Grounded Theory
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[ai-generated-instructional-videos-computing-ed]] — Student Perceptions and Preferences Regarding AI-Generated Instructional Videos in Computing Education

## Citation

Zhan et al. (2026). [Temporal Smoothness Doubly Robust Learning for Debiased Knowledge Tracing](https://arxiv.org/abs/2605.05958). arXiv:2605.05958. arXiv preprint.
