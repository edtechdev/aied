---
title: Modularizing Educational LLM-Agency for Fostering Responsible Learning Assistance
created: 2026-05-29
updated: 2026-05-29
type: article
tags: [llm, intelligent-tutoring, scaffolding, teacher-role, over-reliance, learning-analytics, student-experience, ai-literacy]
sources: ['raw/papers/2605.30187.md']
confidence: high
---

> **Julius Gabelmann et al. (2026)** — AISoLA 2025 (Track: Responsible and Trusted AI).
The widespread adoption of AI chatbots in education will drastically change learning, making responsible deployment a critical concern. While large language models (LLMs) might have access to sources discussing insights from educational sciences, they are not particularly inclined to adhere to pedagogical concepts, risking negative effects on the learning process, such as a loss of transfer capabilities, critical thinking, or creativity. In this paper, we introduce an agentic AI chatbot architecture assisting students with exercise solving, specifically designed to contribute to more responsible AI use in education. We base our conceptual development on the identification of several desiderata for responsible LLM-based educational systems, argue for the structural shortcomings inherent in monolithic, out-of-the-box solutions, and instead suggest modularizing the agentic architecture.


- **Modular over monolithic:** Gabelmann et al. argue that monolithic, out-of-the-box LLM solutions structurally impede responsible deployment in education because LLMs lack inherent pedagogical discipline. They propose modularizing the agentic architecture into stage-specific components for exercise solving, each capable of incorporating targeted pedagogical advice.
- **Pedagogical desiderata:** The paper derives formal requirements (desiderata) for responsible LLM-based educational systems, arguing that systems must be controllable, transparent, and overseeable. This directly addresses [[over-reliance]] risks identified in studies showing that brief AI assistance impairs independent performance.
- **Stage-specific scaffolding:** The modular architecture decomposes exercise-solving assistance into distinct stages — each module can enforce [[scaffolding]] strategies appropriate to that stage, preventing the [[correct-answer-trap-ai-tutor]] where LLM tutors fail to detect misconceptions when students arrive at correct answers via flawed reasoning.
- **Accepted at AISoLA 2025** under the Responsible and Trusted AI track, positioning this work at the intersection of formal methods for AI safety and [[intelligent-tutoring]] system design. The modular approach resonates with calls for [[agentic-literacy-debt]] frameworks that ensure agent deployments are accompanied by appropriate governance.
- **Teacher-in-the-loop design:** The architecture preserves a [[teacher-role]] by making the system's pedagogical decisions observable and auditable, rather than black-box. This connects to work on [[rubric-aware-grading-rec-cbm]] which similarly emphasizes interpretability in educational AI.

## Connected Concepts

- [[ai-literacy]]
- [[learning-analytics]]
- [[scaffolding]]
- [[student-experience]]
- [[teacher-role]]

## Connected Articles

- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[correct-answer-trap-ai-tutor]] — Catching The Correct Answer Trap: Characterising AI Tutor Blind Spots When Analysing Student Reasoning
- [[rubric-aware-grading-rec-cbm]] — REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models for Trustworthy Open-Ended Grading
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming

## Citation

Julius Gabelmann, Felix Jahn, Kevin Baum, Sophie van Rossum, Emely Wuenscher, Timo P. Gros, & Verena Wolf (2026). [Modularizing Educational LLM-Agency for Fostering Responsible Learning Assistance](https://arxiv.org/abs/2605.30187). arXiv:2605.30187. AISoLA 2025 (Track: Responsible and Trusted AI).
