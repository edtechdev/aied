---
title: "Taklif.AI: LLM-Powered Platform for Interest-Based Personalized College Assignments"
created: 2026-05-15
updated: 2026-05-15
type: article
tags: [higher-ed, generative-ai, llm, personalized-learning, edtech-platform, culturally-relevant-pedagogy, automated-question-generation, ai-tutoring]
sources: ['raw/papers/2605.05842.md']
confidence: medium
---

> Taklif.AI: LLM-Powered Platform for Interest-Based Personalized College Assignments **Kurdya et al. (2026)** — Multiple institutions. arXiv cs.AI.

Taklif.AI: LLM-Powered Platform for Interest-Based Personalized College Assignments

## Summary

Taklif.AI addresses the challenge of creating engaging, [[personalized-learning]] assignments that accommodate students' diverse interests and cognitive abilities. Unlike existing platforms that personalize based on academic performance metrics alone, Taklif.AI incorporates students' **extracurricular interests and cultural contexts** into assignment generation — an approach aligned with [[culturally-relevant-pedagogy]] principles.

**System architecture highlights:**
- Primary LLM: **Llama 3.3 70B** via LiteLLM for multi-provider load balancing
- Prompt orchestration: **LangChain** with structured prompt engineering pipeline
- Quality control: Input and output **guardrails** to ensure assignment quality
- Infrastructure: **AWS serverless** with Next.js frontend

**User testing results (n=68):**
- 65 students and 3 educators participated
- **84%** rated the personalization feature as beneficial
- Strong user acceptance overall

The platform represents a shift from **one-size-fits-all** assignments toward interest-driven engagement, potentially reducing [[academic-integrity]] concerns like plagiarism. However, the paper acknowledges the need for **rigorous empirical evaluation of learning outcomes** beyond user acceptance — echoing the [[genai-performance-vs-learning]] distinction between engagement gains and actual learning improvements.

This work connects to the broader [[automated-question-generation]] literature and the [[edtech-platform]] ecosystem. The use of open-weight models (Llama 3.3 70B) aligns with the trend toward institution-controlled AI deployment seen in [[lata-ferpa-compliant-local-llm-autograder]] and [[moodle-ai-tutoring-deep-learning]].

## Connected Concepts

- [[automated-question-generation]]
- [[culturally-relevant-pedagogy]]
- [[personalized-learning]]

## Connected Articles

- [[genai-performance-vs-learning]] — Distinguishing performance gains from learning when using generative AI
- [[lata-ferpa-compliant-local-llm-autograder]] — LaTA: A Drop-in, FERPA-Compliant Local-LLM Autograder for Upper-Division STEM Coursework
- [[moodle-ai-tutoring-deep-learning]] — From Surface Learning to Deep Understanding: A Grounded AI Tutoring System for Moodle
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adult-learning-design]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis
- [[ai-assisted-writing-research-teams]] — Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams

## Citation

Kurdya, Z., Zuqlam, M., Amassi, S., Telbany, S., & Saad, M. (2026). [Taklif.AI: LLM-powered platform for interest-based personalized college assignments](https://arxiv.org/abs/2605.05842). arXiv:2605.05842.
