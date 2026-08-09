---
title: "Learning Engagement Assistant (LEA): Cross-Course Scalability and Classroom Evaluation of an Agentic AI Tutoring System"
created: 2026-07-16
updated: 2026-07-16
type: article
tags: [llm, generative-ai, intelligent-tutoring, higher-ed, stem-education, formative-assessment, benchmark, knowledge-tracing, personalized-learning, rag]
sources: ['raw/papers/2607.13370.md']
confidence: high
---

> **Teri Rumble, Javad Zarrin, P. George Lovell, Ruth Falconer (2026)** — arXiv preprint (extension of ICAART 2026 conference paper). Venue: arXiv (categories: cs.CY, cs.AI, cs.HC).

**Teri Rumble, Javad Zarrin, P. George Lovell, Ruth Falconer (2026)** — arXiv preprint (extension of ICAART 2026 conference paper). Venue: arXiv (categories: cs.CY, cs.AI, cs.HC).

LEA (Learning Engagement Assistant) is an **agentic AI tutoring system** that couples course-specific retrieval-augmented generation (RAG) with structured [[knowledge-tracing]] / Knowledge Component (KC) models across integrated Chat, Tutor, and Quiz modes. This paper reports the first real-student classroom deployment of LEA (n = 8, STEM course CMP511) and the first empirical test of its cross-course scalability, extending a prior simulation-only validation that used synthetic learner agents.

The study exposes a key gap between simulated evaluation and [[student-ai-interaction|real classroom deployment]]: synthetic learners predicted engagement patterns that diverged from observed behaviour, arguing that simulation alone cannot anticipate all aspects of live use. A RAGAS-based scalability evaluation across 660 questions found Answer Relevancy (0.88-0.94) and Context Precision (0.88-0.90) stable across courses, while Faithfulness declined with curriculum distance from LEA's original course (0.69 to 0.50) — a preliminary signal that downstream components, not the orchestration layer, constrain course-agnostic tutoring.

The work sits within the broader literature on [[intelligent-tutoring]] and [[agentic-workflows-education]], with implications for [[higher-ed]] and [[stem-education]] deployment, and connects to debates on [[formative-assessment]] quality and the limits of automated [[feedback-loop]] in [[personalized-learning]].

## Connected Concepts

- [[formative-assessment]]
- [[higher-ed]]
- [[knowledge-tracing]]
- [[personalized-learning]]

## Connected Articles

- [[agentic-workflows-education]] — Agentic Workflows in Education
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
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adult-learning-design]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis

## Citation

Teri Rumble, Javad Zarrin, P. George Lovell, Ruth Falconer (2026). [Learning Engagement Assistant (LEA): Cross-Course Scalability and Classroom Evaluation of an Agentic AI Tutoring System](https://arxiv.org/abs/2607.13370). arXiv:2607.13370.
