---
title: "PromptDecipher: Supporting AI Tutor Authoring Through Editable Simulated Interactions"
created: 2026-05-19
updated: 2026-05-19
type: article
tags: [intelligent-tutoring, llm, teacher-role, faculty-development, edtech-platform, ai-literacy, agentic-workflows]
sources: ['raw/papers/2605.16605.md']
confidence: high
---

> **Koyama, M., Xiao, R., & Stamper, J. (2026)** — Carnegie Mellon University. arXiv preprint.
## Key Finding
Teachers virtually never test AI tutoring bots before student deployment; PromptDecipher enforces QA as a first-class activity by letting teachers edit bot responses directly.

## Synthesis
PromptDecipher addresses a critical gap in AI tutor deployment: teacher quality assurance. A formative study revealed that educators authoring AI tutoring chatbots virtually never systematically test them before student deployment — a finding with serious implications for [[ai-tutor-safety-harms]] and educational quality. The system shifts the authoring paradigm from abstract prompt writing to direct correction-based interaction: teachers edit undesirable bot responses in a live chat preview, and an automated pipeline analyzes the correction, proposes a system prompt rewrite, and validates across test scenarios. This bridges the [[teacher-role]] gap between classroom practitioner and AI system designer — a tension also explored in [[ai-tpack-teacher-multi-agent-workflow]], which found that effective AI integration requires systems thinking beyond simple tool use. PromptDecipher's QA enforcement resonates with the [[agentic-workflows-education]] paradigm of using AI to scaffold human roles. By embedding testing into the authoring workflow, the system also mitigates the kind of diagnostic failures identified in [[llm-tutoring-feedback-diagnosis-gap]], where LLMs struggle precisely where feedback matters most.

## Connected Concepts

- [[teacher-role]]

## Connected Articles

- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[ai-tpack-teacher-multi-agent-workflow]] — Modeling AI-TPACK in Practice: Insights from Teachers' Multi-Agent Workflow Design
- [[ai-tutor-safety-harms]] — AI Tutor Safety and Pedagogical Harms
- [[concept-catalyst-engineering-scaffolds]] — Creating Learning Scaffolds for Engineering Design Using Concept Catalyst
- [[llm-tutoring-feedback-diagnosis-gap]] — Confirming Correct, Missing the Rest: LLM Tutoring Agents Struggle Where Feedback Matters Most
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-adult-learning-design]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-writing-research-teams]] — Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming

## Citation

J, A.K.M.X.R.S. (2026). [*PromptDecipher: Supporting AI Tutor Authoring Through Editable Simulated Interactions*](https://arxiv.org/abs/2605.16605). practice, however, teachers rarely fulfill these roles
