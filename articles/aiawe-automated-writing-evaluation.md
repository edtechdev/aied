---
title: "AiAWE: An Open-Source LLM Automated Writing Evaluation System Using LoRA-Adapted Instruction-Tuned Models"
created: 2026-06-12
updated: 2026-06-12
type: article
tags: [generative-ai, llm, automated-grading, writing-education, open-source, automated-assessment]
sources: ['raw/papers/2606.12801.md']
confidence: high
---

> **Gayed (2026)** — Waseda University.
Gayed presents **AiAWE**, an open-source [[automated-grading|automated writing evaluation]] (AWE) system that scores argumentative essays using a LoRA-adapted instruction-tuned [[llm|large language model]] (Gemma-3-27B-it). Using a proprietary ETS dataset of 480 TOEFL Independent Writing essays (120 training, 360 evaluation), the system achieves:

- **RMSE:** 0.474
- **Quadratic Weighted Kappa (QWK):** 0.828
- **Agreement within ±0.5 of human score:** 90.56%

These results outperform both LLaMA-3.3-70B and the fine-tuned GPT-3.5 baseline from prior work on the same dataset, demonstrating that [[generative-ai|open-weight LLMs can match or exceed proprietary fine-tuning]] for rubric-aligned scoring.

Three broader findings emerge: (1) model scale is not a reliable predictor of downstream performance under LoRA adaptation; (2) identical LoRA hyperparameters produce qualitatively different adaptation behaviors across architectures; and (3) the system runs on a [[edtech-platform|consumer-grade server]], making it accessible for institutional deployment. The work contributes to debates about [[short-answer-scoring-quality-degradation|automated assessment quality]] and the feasibility of [[open-source]] AI tools in [[writing-education]].

## Connected Concepts

- [[automated-grading]]
- [[generative-ai]]
- [[llm]]
- [[open-source]]
- [[writing-education]]

- [[automated-assessment]]
## Connected Articles

- [[llm-automated-assessment-student-self-explanations]] — Exploring the Effectiveness of Using LLMs for Automated Assessment of Student Self Explanations in Programming Education
- [[short-answer-scoring-quality-degradation]] — Quality-Conditioned Agreement in Automated Short Answer Scoring: Mid-Range Degradation and the Impact of Task-Specifi...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
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
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems
- [[ai-engineering-education-balancing-act]] — Using AI in engineering education: a balancing act, driven by clear purpose
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions

## Citation

Gayed, J. M. (2026). [AiAWE: An Open-Source LLM Automated Writing Evaluation System Using LoRA-Adapted Instruction-Tuned Models](https://arxiv.org/abs/2606.12801). arXiv:2606.12801.
