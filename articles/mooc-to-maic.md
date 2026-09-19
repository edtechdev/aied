---
title: "From MOOC to MAIC: Reshaping Online Teaching and Learning through LLM-driven Agents"
created: "2026-08-04T04:33:04-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
foundations: [agentic-ai, curriculum-design]
pedagogy: [online-teaching-and-learning]
technology: [generative-ai, intelligent-tutoring, llm, personalized-learning, rag]
audience: [software developers]
research_method: [system development, case study]
sources: ['raw/papers/2409.03512.md']
confidence: high
level: [higher ed]
connected_faqs: [asynchronous-online-courses-ai]
---

> **Synthesis:** MAIC (Massive AI-empowered Course) proposes a new paradigm for [[online-teaching-and-learning|online education]] that replaces the MOOC's "one video for N students" broadcast with an LLM-driven multi-agent classroom of "N agents for 1 student." By building all agents on a unified [[llm]] foundation, MAIC balances scalability with adaptivity — and collapses course-production cost from roughly **\$25,000 and 60 hours** per MOOC to **under \$2 and 30 minutes**. Piloted at Tsinghua University across two courses with **100,000+ learning records from 500+ students**, it deploys specialized Teacher, Assistant, Classmate, and Analyzer agents and is released [[open-source|open source]] as **OpenMAIC**.

**ArXiv:** 2409.03512
**Submitted:** September 2024
**Source code (OpenMAIC):** https://github.com/THU-MAIC/OpenMAIC

### Overview

MAIC (Massive AI-empowered Course) proposes a new form of online education that addresses the fundamental tension between **scalability** (MOOC's strength) and **adaptivity** (MOOC's weakness). Traditional MOOCs serve thousands of learners through one pre-recorded video, struggling to personalize instruction. MAIC replaces this with an LLM-driven [[agentic-ai|multi-agent]] system that constructs an AI-augmented classroom, shifting from "one video for N students" to "N agents for 1 student".

### Key Findings

1. **"N agents for 1 student."** A suite of specialized LLM-driven agents (Teacher, Assistant, Classmate, Analyzer) constructs an AI-augmented classroom that dynamically adapts [[teacher-role|teaching]] to each student's interactions and inquiries, balancing scalability with adaptivity.
2. **Course creation at scale.** MAIC generates full course materials (slides, textbooks, exercises, videos) from instructor-provided course descriptions — reducing production from ~\$25K USD and 60 hours per course to under \$2 USD and 30 minutes.
3. **Unified LLM foundation.** Unlike prior systems that used separate models for recommendation, dialogue, and assessment, MAIC builds all agents on a shared LLM foundation, enabling deeper integration across teaching and learning tasks.
4. **Standardized course preparation.** A Read + Plan workflow transforms static slide decks into highly structured, [[adaptive-learning|adaptive learning]] resources, using [[multimodal]] LLMs (e.g., GPT-4V) for slide extraction, description generation, and tree-style knowledge taxonomy construction.
5. **Initial pilot evidence.** At Tsinghua, two courses ("Toward Artificial General Intelligence" and "How to Study in the University") generated 100,000+ behavioral records from 500+ students over three months, with initial observations suggesting improved engagement versus traditional MOOC formats.
6. **Integrated learning analytics.** Large-model-powered tools provide quick access to learning data, forecasting of academic outcomes, and automation of interviews and assessments.

### Architecture

MAIC deploys a suite of specialized AI agents:

- **Teacher Agent:** Delivers lectures and core instruction
- **Assistant Agent:** Provides personalized offline mentoring and exercises
- **Classmate Agents:** Engage in peer-like dialogue to stimulate discussion and questions
- **Analyzer Agent:** Diagnoses student performance from quiz results and recommends prerequisite learning paths
- **Manager Agent:** Maintains order and assists, controlling the class

### Key Innovations

1. **Unified LLM Foundation:** Unlike prior systems that used separate models for recommendation, dialogue, and assessment, MAIC builds all agents on a shared LLM foundation, enabling deeper integration across teaching and learning tasks.
2. **Course Creation at Scale:** The system can generate full course materials (slides, textbooks, exercises, videos) from instructor-provided course descriptions. Traditional MOOC production costs ~25K USD and 60 hours per course; MAIC reduces this to under 2 USD and 30 minutes.
3. **[[personalized-learning|Personalization]] Loop:** Students receive adaptive quizzes, personalized feedback, and dynamically recommended learning paths based on their performance patterns — rooted in the "teaching in accordance with individual aptitudes" philosophy.

### Pilot at Tsinghua University

- **100,000+ learning records** from over **500 students**
- Two courses: "Toward Artificial General Intelligence" (TAGI) and "How to Study in the University" (HSU)
- Data drawn from behavioral records, student surveys, and [[qualitative-research|qualitative]] interviews over a three-month pilot
- Initial observations suggesting improved engagement compared to traditional MOOC formats

### Significance

MAIC represents a convergence point for [[generative-ai]], [[rag]], and [[agentic-ai]] in education. It demonstrates how LLM-driven multi-agent systems can transform the MOOC paradigm from one-size-fits-all broadcasting to truly adaptive, personalized [[intelligent-tutoring]] at scale. The platform is released as open source under the name **OpenMAIC** ([github.com/THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC)), supporting the vision of an open collaborative hub for AI-driven education [[research-methods-aied|research]].

## What this means for practice

- **Designers.** Build every classroom agent on one shared [[llm]] foundation rather than a separate model per function, so teaching, assessment, recommendation, and [[learning-analytics|learning analytics]] draw on the same representation of the course.
- **Instructors.** Convert existing slide decks into structured [[adaptive-learning|adaptive learning]] resources with a read-and-plan workflow grounded in a knowledge taxonomy, so generated exercises and explanations stay aligned with the course outline.
- **Administrators.** Weigh course development decisions against the reported production cost: generating full materials (slides, textbook, exercises, video) fell from roughly $25,000 and 60 hours per course to under $2 and 30 minutes.
- **Instructors.** Keep humans over generated content and over the class: the pilot routed AI-produced material through subject-matter experts and teaching assistants and retained instructor intervention, and students reported that AI classmates do not replace the discussion and after-class explanation a human teacher provides.
- **Researchers.** Treat the engagement and thinking gains as preliminary observation and test them against controlled outcome data on completion and [[self-regulated-learning|self-regulated learning]]; the open-source OpenMAIC release is positioned as shared infrastructure for that [[intelligent-tutoring|tutoring]] research.

## Limitations

- The Tsinghua pilot covers two courses and 500+ students over three months with no control group; conclusions about engagement rest on initial observation compared with traditional MOOC formats rather than a controlled comparison.
- Higher-order thinking outcomes were measured only as students' perceived impact on pre- and post-course questionnaires (abstract thinking t = 2.32, p = 0.02; critical thinking t = 2.37, p = 0.02), and the authors state that the abilities themselves were not estimated.
- Cost and speed figures for course production come from the team's own generation pipeline in this deployment, not from independent measurement, and the paper notes that some inaccuracies in automatically generated content are expected at scale.

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

- [[deeptutor]] — DeepTutor: Toward Agentic Personalized Tutoring
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[retrieval-augmented-tutoring-algorithm-kite]] — Retrieval-Augmented Tutoring for Algorithm Tracing and Problem-Solving in AI Education
- [[lecturaagents-multi-agent-teaching]] — LecturaAgents: A Multi-Agent Framework for Adaptive Personalized AI-Assisted Learning and Embodied Teaching
- [[elevate-genai-virtual-tutors]] — ELEVATE: Designing Human-Centered GenAI Virtual Tutors for Scalable and Inclusive Education
- [[learning-engagement-assistant-lea]] — Learning Engagement Assistant (LEA): Cross-Course Scalability and Classroom Evaluation of an Agentic AI Tutoring System

## Citation

Yu, J., Zhang, Z., Zhang-li, D., Tu, S., Hao, Z., Li, R., et al. (2024). [*From MOOC to MAIC: Reshaping Online Teaching and Learning through LLM-driven Agents*](https://arxiv.org/abs/2409.03512).
