---
title: Explaining Too Much? Understanding How Large Language Model Reasoning Traces Influence Performance and Metacognition
created: 2026-05-26
updated: 2026-05-26
type: article
tags: [llm, metacognition, student-experience, efficacy-study, over-reliance, self-regulated-learning, scaffolding]
sources: ['raw/papers/2605.25856.md']
confidence: high
---

> **Fernandes, Buschek, Tankelevitch, Kosch & Welsch (2026)** — University of Bayreuth, Microsoft Research.

# LLM Reasoning Traces & Metacognition

**Fernandes, Buschek, Tankelevitch, Kosch & Welsch (2026)** — University of Bayreuth, Microsoft Research.

This preregistered between-subjects study (N=559) provides the first rigorous evidence that [[llm]] reasoning traces — increasingly common in AI interfaces — do not improve performance and can actively impair it. More critically, they create a dangerous [[metacognition|metacognitive]] blind spot: participants substantially overestimate their performance regardless of trace format.

## Key Findings
- **Summary traces** preserved task performance at the no-trace baseline while elevating trust and hedonic appeal — changing how users *feel* without helping them perform.
- **Full traces** from a verbose open-weight model actually *impaired* performance relative to answer-only baselines.
- **No trace format** supported calibrated self-evaluation — metacognitive overestimation was universal.
- **Hedonic appeal**, not trust, carried the indirect path to overestimation, consistent with a processing-fluency account: the pleasant experience of reading traces inflates confidence without improving understanding.

## Connection to AIED
These findings have profound implications for [[intelligent-tutoring]] and [[ai-peer-feedback-systems|AI feedback systems]]. If students feel more confident after seeing AI reasoning but don't actually learn better, then simply exposing AI reasoning in educational interfaces may create an [[over-reliance]] trap. The paper's recommendation — that calibration should be scaffolded by interactions that elicit users' own reasoning first — directly aligns with [[self-regulated-learning]] principles and [[cognitive-offloading-speedup-illusion|cognitive offloading research]] showing that AI use can reduce active engagement.

## Contrast with Assessment Governance
While [[genai-assessment-governance|GenAI assessment governance]] focuses on *when* to allow AI in evaluation, this paper addresses *how* AI explanations affect learning — suggesting that even well-designed AI transparency features can backfire without metacognitive scaffolding.

## Connected Concepts

- [[llm]]
- [[metacognition]]
- [[self-regulated-learning]]

## Connected Articles

- [[ai-peer-feedback-systems]] — AI Peer Feedback Systems
- [[cognitive-offloading-speedup-illusion]] — Cognitive offloading and the speedup illusion in human-AI interaction
- [[genai-assessment-governance]] — Generative AI as a Design Variable: An Evidence-Centered Framework for Principled Governance in STEM Assessment
- [[llm-fallacy-misattribution]] — The LLM Fallacy and Misattribution of Competence
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[ai-coaching-rl-skill-development]] — AI Coaching for Accelerating Human Skill Development with Reinforcement Learning

## Citation

Fernandes, D., Buschek, D., Tankelevitch, L., Kosch, T., & Welsch, R. (2026). [Explaining too much? Understanding how large language model reasoning traces influence performance and metacognition](https://arxiv.org/abs/2605.25856). arXiv:2605.25856. cs.HC.
