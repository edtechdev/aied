---
title: "From MOOC to MAIC: Reshaping Online Teaching and Learning through LLM-driven Agents"
created: 2026-08-04T04:33:04-04:00
updated: 2026-08-15
type: article
tags: [llm, agentic-ai, multi-agent, mooc, online-education, personalized-learning, intelligent-tutoring, course-design, rag, generative-ai]
sources: ['raw/papers/2409.03512.md']
confidence: high
---

> **A new paradigm for online education replacing MOOCs with LLM-driven multi-agent AI classrooms**, piloted at Tsinghua University with 100K+ learning records from 500+ students. MAIC uses specialized agents (Teacher, Assistant, Classmate, Analyzer) to deliver personalized, adaptive learning at scale.
**ArXiv:** 2409.03512
**Submitted:** September 2024
**Source code (OpenMAIC):** https://github.com/THU-MAIC/OpenMAIC

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

MAIC represents a convergence point for [[generative-ai]], [[rag]], and [[agentic-ai]] in education. It demonstrates how LLM-driven multi-agent systems can transform the MOOC paradigm from one-size-fits-all broadcasting to truly adaptive, personalized [[intelligent-tutoring]] at scale. The platform is released as open source under the name **OpenMAIC** ([github.com/THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC)), supporting the vision of an open collaborative hub for AI-driven education research.

## Connected Concepts
- [[llm]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[pedagogical-agent]]

- [[agentic-ai]]
- [[generative-ai]]
- [[rag]]
- [[intelligent-tutoring]]
## Connected Articles

- [[deeptutor]] — DeepTutor: Towards Agentic Personalized Tutoring
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[retrieval-augmented-tutoring-algorithm-kite]] — Retrieval-Augmented Tutoring for Algorithm Tracing and Problem-Solving in AI Education
- [[lecturaagents-multi-agent-teaching]] — LecturaAgents: A Multi-Agent Framework for Adaptive Personalized AI-Assisted Learning and Embodied Teaching
- [[elevate-genai-virtual-tutors]] — ELEVATE: Designing Human-Centered GenAI Virtual Tutors for Scalable and Inclusive Education
- [[learning-engagement-assistant-lea]] — Learning Engagement Assistant (LEA): Cross-Course Scalability and Classroom Evaluation of an Agentic AI Tutoring System

## Citation

Yu, J., Zhang, Z., Zhang-li, D., Tu, S., Hao, Z., Li, R., ... Liu, Z., Liu, H., & Sun, M. (2024). [*From MOOC to MAIC: Reshaping Online Teaching and Learning through LLM-driven Agents*](https://arxiv.org/abs/2409.03512). arXiv:2409.03512. Source code: [OpenMAIC](https://github.com/THU-MAIC/OpenMAIC).
