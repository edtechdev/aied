---
title: Who Am I? History-Aware Profiles for Student Simulation in Tutoring Dialogues
created: 2026-05-29
updated: 2026-05-29
type: article
tags: [intelligent-tutoring, llm, student-experience, learning-analytics, personalized-learning, reinforcement-learning, ai-literacy, rag]
sources: ['raw/papers/2605.30051.md']
confidence: high
---

> **Zhangqi Duan et al. (2026)** — arXiv preprint.
A key part of developing large language model (LLM)-powered, automated tutoring tools is student simulation, i.e., using LLMs to role-play as students, which can facilitate tutor model evaluation and training. Existing work mostly focuses on within-dialogue simulation, which lacks context on student knowledge and behavior, partly due to not grounding in past student question-answering or dialogue interactions. In this work, we introduce the task of history-conditioned student simulation, where the goal is to accurately predict student dialogue turns by leveraging information in the student's learning history. We propose a two-component framework in which a profile generator summarizes a student's history and a simulator predicts student turns conditioned on the resulting profile. We train both components with reinforcement learning (RL), yielding profiles optimized for faithful student simulation.


- **Beyond within-dialogue simulation:** Duan et al. introduce history-conditioned student simulation, a task where LLM-based student simulators are grounded in past question-answering and dialogue interactions. This moves beyond prior work that simulated students only within a single dialogue context.
- **Two-component RL framework:** A profile generator summarizes a student's learning history into a compact profile, and a simulator predicts student dialogue turns conditioned on that profile. Both components are jointly trained via [[reinforcement-learning]] (if that page exists) to optimize for faithful simulation.
- **Real-world math tutoring dataset:** The paper collects and evaluates on the first-of-its-kind dataset of real student dialogues and question responses from a math learning platform, grounding the work in authentic [[student-experience]] data rather than synthetic proxies.
- **Significant implications for tutor evaluation:** History-aware student simulation enables more realistic evaluation of [[intelligent-tutoring]] systems, allowing developers to test tutor responses against diverse student profiles without requiring live students. This connects to [[kt4eqg-personalized-question-generation]] which also leverages student modeling for personalized learning.
- **RL-optimized profiles** ensure that the compressed student representation captures information most relevant to dialogue prediction, rather than using generic summary metrics. This approach could generalize to other [[learning-analytics]] tasks where student state compression is needed.

## Connected Concepts

- [[ai-literacy]]
- [[learning-analytics]]
- [[reinforcement-learning]]
- [[student-experience]]

## Connected Articles

- [[kt4eqg-personalized-question-generation]] — KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-adult-learning-design]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[ai-coaching-rl-skill-development]] — AI Coaching for Accelerating Human Skill Development with Reinforcement Learning

## Citation

Zhangqi Duan, Shuyan Huang, Alexander Scarlatos, Jaewook Lee, Simon Woodhead, & Andrew Lan (2026). [Who Am I? History-Aware Profiles for Student Simulation in Tutoring Dialogues](https://arxiv.org/abs/2605.30051). arXiv:2605.30051. arXiv preprint.
