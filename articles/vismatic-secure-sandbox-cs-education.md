---
title: "VISMATIC: Secure Containerized Framework for Process-Oriented CS Education Monitoring"
created: 2026-06-09
updated: 2026-06-09
type: article
tags: [edtech-platform, academic-integrity, stem-education, higher-ed, formative-assessment, scaffolding]
sources: ['raw/papers/2606.05929.md']
confidence: high
---

> **Arroyo, López & Torres (2026)** — Universidad de Granada.
Addresses a critical tension in [[stem-education|CS education]]: the widespread adoption of generative AI makes it impossible to distinguish authentic student effort from AI code synthesis by evaluating final submissions alone. The paper presents **VISMATIC**, a rootless containerized framework that pairs robust environment isolation with explicit user-interaction tracking at the API level.

**Key innovation:** VISMATIC captures macro-level behavioral metrics (keystroke patterns, command execution timing, copy-paste behavior) that successfully flag statistical anomalies indicative of automated or off-platform workflows — while preserving student anonymity. Unlike JupyterHub, which exposes the host system to arbitrary shell commands, VISMATIC's rootless containers prevent lateral movement and host compromise.

The framework provides a scalable blueprint for [[academic-integrity|preserving pedagogical integrity]] in the AI era, enabling educators to enforce authentic coding discipline through [[formative-assessment|process-oriented monitoring]] rather than final-output evaluation. Open source on GitHub for institutional adoption.

## Connected Concepts

- [[formative-assessment]]
- [[scaffolding]]

## Connected Articles

- [[ai-generated-traces-novice-programmers]] — AI-Generated Traces for Novice Programmers: Learning Effects and Learner Differences in a Multi-Institutional Study
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[ai-adult-learning-design]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis
- [[ai-assisted-writing-research-teams]] — Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[ai-coaching-rl-skill-development]] — AI Coaching for Accelerating Human Skill Development with Reinforcement Learning
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems
- [[ai-engineering-education-balancing-act]] — Using AI in engineering education: a balancing act, driven by clear purpose
- [[ai-ethics-education-public-discourse]] — A Longitudinal Analysis of Public Discourse on AI Ethics in Education Using Twitter Data

## Citation

Arroyo, G., López, L., & Torres, J. C. (2026). Securing the Sandbox: A Rootless Containerized Framework for Process-Oriented Monitoring in Computer Graphics Education. [arXiv:2606.05929](https://arxiv.org/abs/2606.05929).
