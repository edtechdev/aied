---
title: "Catching The Correct Answer Trap: Characterising AI Tutor Blind Spots When Analysing Student Reasoning"
created: 2026-05-28
updated: 2026-05-28
type: article
tags: [intelligent-tutoring, automated-grading, formative-assessment, llm, scaffolding, generative-ai, higher-ed, ai-literacy]
sources: ['raw/papers/2605.23925.md']
confidence: high
---

> **Imran et al. (2026)** — University College London / Eedi. *AIED 2026*.
**Catching the Correct Answer Trap** — accepted at AIED 2026 — exposes a critical blind spot in [[intelligent-tutoring]] systems: they systematically fail to detect misconceptions when students arrive at correct answers through flawed reasoning. Using real student data from the Eedi mathematics platform, the authors characterize the 'Correct Answer Trap' (CAT), showing that 71% of failures concentrate in just two question types where erroneous reasoning accidentally produces the correct numerical answer. Even a frontier [[llm]] achieves only 84% detection accuracy while generating roughly 4 false alarms per genuine detection — making standalone automated screening impractical. This finding has profound implications for [[automated-grading]] and [[formative-assessment]] systems: high overall accuracy metrics can mask catastrophic failures in reasoning assessment. The work connects to [[llm-student-misconception-identification]] research on the gap between answer checking and reasoning evaluation, and to [[codify-socratic-programming-tutor]] findings that even Socratic AI tutors can miss deep misconceptions. The paper reinforces calls for [[human-in-the-loop]] approaches in [[intelligent-tutoring]] and suggests that [[scaffolding]] designs should explicitly account for reasoning assessment, not just answer verification. The concentration of failures in predictable question types also suggests targeted improvements are possible.

## Connected Concepts

- [[ai-literacy]]
- [[automated-grading]]
- [[formative-assessment]]
- [[generative-ai]]
- [[higher-ed]]
- [[llm]]
- [[scaffolding]]

## Connected Articles

- [[codify-socratic-programming-tutor]] — Codify: An Intelligent Socratic Tutoring System for Programming Education
- [[llm-student-misconception-identification]] — What Don't You Understand? Using Large Language Models to Identify and Characterize Student Misconceptions About Chal...
- [[modular-educational-llm-agency]] — Modularizing Educational LLM-Agency for Fostering Responsible Learning Assistance
- [[rethinking-scaffolding-llm-tutors]] — Rethinking Scaffolding in LLM Tutors: The Interactional Mismatch Between Benchmarks and Real-World Deployments
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice

## Citation

Moiz Imran, Sahan Bulathwela (2026). [Catching The Correct Answer Trap: Characterising AI Tutor Blind Spots When Analysing Student Reasoning](https://arxiv.org/abs/2605.23925). arXiv:2605.23925. AIED 2026.
