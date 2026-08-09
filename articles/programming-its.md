---
title: Programming Intelligent Tutoring Systems
created: 2026-05-08
updated: 2026-05-22
type: article
tags: [intelligent-tutoring, stem-education, higher-ed, adaptive-learning, formative-assessment, student-misconceptions-conditionals-loops-taxonomy, adaptive-learning-systems, rag, llm]
sources: ['raw/papers/2604.16117.md']
confidence: medium
---

> **SCRIPT** (Deriyeva, Dannath, Paassen, 2026) implements an intelligent tutoring system for **Python programming** in a German university context, filling a gap in prior ITS which rarely supported Python.

> ITS for programming education with individualized hints, addressing the scarcity of human tutors for practice-intensive coding courses.

## SCRIPT: Python Programming Tutor

**SCRIPT** (Deriyeva, Dannath, Paassen, 2026) implements an intelligent tutoring system for **Python programming** in a German university context, filling a gap in prior ITS which rarely supported Python.

### System Design
- **Context:** Large undergraduate programming courses where individual tutor feedback doesn't scale
- **Language:** Python (vs. prior ITS focused on Java, C++)
- **Pedagogy:** Individualized hints and advice during coding exercises
- **Deployment:** Real classroom integration (not just lab prototype)

### Key Features
| Feature | Description |
|---------|-------------|
| **Hint generation** | Context-aware hints based on code state and error type |
| **Exercise adaptation** | Difficulty adjustment based on learner performance |
| **Scaffolding** | Graduated support (from syntax to algorithm design) |

## Connection to Broader Programming Education

SCRIPT addresses a core challenge: **practice and extensive exercises are essential in programming education**, but human tutors cannot scale to large cohorts.

This connects to:
- **[[collaborative-ai-tutoring]]** — ProPACT for pair programming (collaborative variant)
- **[[formative-assessment]]** — AI-generated coding exercises with human-in-the-loop validation
- **[[agentic-workflows-education]]** — Agentic approaches to coding education (e.g., Claude Code tutor)

## Research Gap Addressed

Prior ITS for programming focused on:
- Java (most common in early CS education research)
- C/C++ (systems programming contexts)
- Block-based languages (K-12)

SCRIPT's contribution: **Python-specific** tutoring with German-language context (university-level). Python's dynamic typing and REPL-based workflow require different hint strategies than statically-typed languages.

## Implications

- **Language-specific scaffolding:** ITS must adapt to language idioms (Pythonic vs. Java-esque solutions)
- **Classroom integration:** Real deployment reveals usability barriers invisible in lab prototypes
- **Scalability:** ITS enables personalized feedback without proportional instructor hiring

## Connected Concepts

- [[adaptive-learning]]
- [[formative-assessment]]
- [[student-misconceptions-conditionals-loops-taxonomy]]

- [[adaptive-learning]]
- [[higher-ed]]
- [[llm]]
- [[rag]]
## Connected Articles

- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems
- [[chat-debugging-llm-hardware-education-2026]] — WIP: Chat-Debugging: Large Language Model as a Hardware Debugging Assistant
- [[code-gen]] — CODE-GEN: A Human-in-the-Loop RAG-Based Agentic AI System for Multiple-Choice Question Generation
- [[codify-socratic-tutoring-programming]] — Codify: An Intelligent Socratic Tutoring System for Programming Education
- [[collaborative-ai-tutoring]] — Collaborative AI Tutoring
- [[commenting-copilot-student-code-specs]] — Commenting with Copilot: A Taxonomy and Multi-Year Analysis of Student Code-Generation Specifications
- [[deeptutor]] — DeepTutor: Towards Agentic Personalized Tutoring
- [[eduguard-safe-rag-llm-tutor]] — EduGuard: A Safe RAG-Based LLM Tutor for Programming Education
- [[flowcode-ai-creative-coding]] — Flowcode: An AI-Powered Programming Environment for Scaffolding Iteration in Creative Computing Education
- [[genai-meta-analysis-programming-learning]] — A meta-analysis of the effect of generative AI on productivity and learning in programming
- [[llm-automated-assessment-student-self-explanations]] — Exploring the Effectiveness of Using LLMs for Automated Assessment of Student Self Explanations in Programming Education
- [[pattern-kc-programming-recommendation]] — Automated Recommendation of Programming Learning Content Using Pattern-based Knowledge Components
- [[prompt-problems-nl-programming-mistakes]] — Understanding Student Perceptions, Mistakes, and Debugging Approaches when Solving Natural Language Programming Tasks
- [[reliable-programming-kt]] — Ensuring Reliability in Programming Knowledge Tracing: A Re-evaluation of Attention-augmented Models and Experimental...
- [[retrieval-augmented-tutoring-algorithm-kite]] — Retrieval-Augmented Tutoring for Algorithm Tracing and Problem-Solving in AI Education
- [[simulating-students-java-programming-errors-llms]] — Simulating Students' Java Programming Errors with Large Language Models
- [[visual-query-tracer-declarative-logic-learning]] — Evaluating a Visual Query Tracer and Builder for Learning Declarative Logic Programming
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study

## Citation

Paassen, A.A.D.J.D.B. (2026). [*Programming Intelligent Tutoring Systems*](https://arxiv.org/abs/2604.16117)
