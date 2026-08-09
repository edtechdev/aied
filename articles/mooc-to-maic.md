---
title: "From MOOC to MAIC: Reshaping Online Teaching and Learning through LLM-driven Agents"
created: 2026-08-04
updated: 2026-08-04
type: article
tags: [llm, agentic-ai, multi-agent, mooc, online-education, personalized-learning, intelligent-tutoring, course-design, rag, generative-ai]
sources: ['raw/papers/2409.03512.md']
confidence: high
---

> **A new paradigm for online education replacing MOOCs with LLM-driven multi-agent AI classrooms**, piloted at Tsinghua University with 100K+ learning records from 500+ students. MAIC uses specialized agents (Teacher, Assistant, Classmate, Analyzer) to deliver personalized, adaptive learning at scale.

**Authors:** Jifan Yu, Zheyuan Zhang, Daniel Zhang-li, et al. (33 authors, Tsinghua University)
**ArXiv:** 2409.03512
**Submitted:** September 2024

### Overview

MAIC (Massive AI-empowered Course) proposes a new form of online education that addresses the fundamental tension between **scalability** (MOOC's strength) and **adaptivity** (MOOC's weakness). Traditional MOOCs serve thousands of learners through one pre-recorded video, struggling to personalize instruction. MAIC replaces this with an LLM-driven [[agentic-ai|multi-agent]] system that constructs an AI-augmented classroom, shifting from "one video for N students" to "N agents for 1 student".

### Architecture

MAIC deploys a suite of specialized AI agents:

- **Teacher Agent:** Delivers lectures and core instruction
- **Assistant Agent:** Provides personalized offline mentoring and exercises
- **Classmate Agents:** Engage in peer-like dialogue to stimulate discussion and questions
- **Analyzer Agent:** Diagnoses student performance from quiz results and recommends prerequisite learning paths

### Key Innovations

1. **Unified LLM Foundation:** Unlike prior systems that used separate models for recommendation, dialogue, and assessment, MAIC builds all agents on a shared LLM foundation, enabling deeper integration across teaching and learning tasks.

2. **Course Creation at Scale:** The system can generate full course materials (slides, textbooks, exercises, videos) from instructor-provided course descriptions. Traditional MOOC production costs ~25K USD and 60 hours per course; MAIC reduces this to under 2 USD and 30 minutes.

3. **Personalization Loop:** Students receive adaptive quizzes, personalized feedback, and dynamically recommended learning paths based on their performance patterns.

### Pilot at Tsinghua University

- **100,000+ learning records** from over **500 students**
- Initial observations suggesting improved engagement compared to traditional MOOC formats

### Significance

MAIC represents a convergence point for [[generative-ai]], [[rag]], and [[agentic-ai]] in education. It demonstrates how LLM-driven multi-agent systems can transform the MOOC paradigm from one-size-fits-all broadcasting to truly adaptive, personalized [[intelligent-tutoring]] at scale. The platform vision extends toward an open collaborative hub for AI-driven education research.

## Connected Concepts

- [[agentic-ai]]
- [[automated-question-generation]]
- [[generative-ai]]
- [[llm]]
- [[personalized-learning]]
- [[rag]]

## Connected Articles

- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adult-learning-design]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis
- [[ai-assisted-writing-research-teams]] — Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention

## Citation

Teaching, F.M.T.M.R.O., Agents, A.L.T.L., Sun2∗, M.L.J.L.Z.L.H.L.M., Tsinghua, D.O.C.S.A.T., Inc, M., Course), I.I.T.C.W.P.M.A., & Tsinghua, P.E.A. (2026). [*From MOOC to MAIC: Reshaping Online Teaching and Learning through LLM-driven Agents*](https://arxiv.org/abs/2409.03512)
