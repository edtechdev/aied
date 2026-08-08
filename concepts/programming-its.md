---
title: Programming Intelligent Tutoring Systems
created: 2026-05-08
updated: 2026-05-22
type: concept
tags: [intelligent-tutoring, stem-education, higher-ed, adaptive-learning, formative-assessment]
sources: [raw/papers/2604.16117.md]
confidence: medium
---
# Programming Intelligent Tutoring Systems

> ITS for programming education with individualized hints, addressing the scarcity of human tutors for practice-intensive coding courses.
> **Source:** [Programming Intelligent Tutoring Systems](https://arxiv.org/abs/2604.16117)


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

## Citation

Paassen, A.A.D.J.D.B. (2026). *Programming Intelligent Tutoring Systems*

## Related Pages
  - [[simulating-students-java-programming-errors-llms]] — LLM-generated synthetic errors as training data for programming ITS

- [[student-misconceptions-conditionals-loops-taxonomy]] — fine-grained misconception taxonomy for tutoring feedback
  - [[llm-automated-assessment-student-self-explanations]] — Automated assessment of student self-explanations in programming worked examples (2026)
- [[ai-enabled-serious-games]] — Frames serious games as an ITS application domain with distinct adaptivity requirements
- [[codify-socratic-tutoring-programming]] — Modern Socratic ITS using LLMs, RAG, and gamification for programming education
- [[reliable-programming-kt]] — Reliability considerations for PKT at ITS 2026
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: many tasks involve programming — benchmark provides diagnostic framework for ITS capability requirements
- [[genai-meta-analysis-programming-learning]] — Baseline comparison for traditional vs. AI-augmented coding instruction
- [[collaborative-ai-tutoring]] — Pair programming variant (ProPACT)
- [[formative-assessment]] — Exercise generation and validation
- [[agentic-workflows-education]] — Agentic coding tutors (Claude Code)
- [[adaptive-learning-systems]] — Broader adaptive systems context
- [[stem-education]] — Programming as core STEM skill

- [[agentic-education-coding]] — Agentic coding tutor vs. traditional ITS for programming

- [[retrieval-augmented-tutoring-algorithm-kite]] — KITE: RAG-based ITS for algorithmic reasoning and problem-solving- [[prompt-problems-nl-programming-mistakes]] — Understanding Student Perceptions, Mistakes, and Debugging Approaches when Solving Natural Language Programming Tasks
- [[pattern-kc-programming-recommendation]] — Pattern-based KC programming recommendation
- [[flowcode-ai-creative-coding]] — Flowcode: AI creative-coding environment
- [[commenting-copilot-student-code-specs]] — Programming intelligent tutors (2026-07-14)
- [[eduguard-safe-rag-llm-tutor]] — Extends intelligent tutoring for programming with instructor-approved retrieval and verification.
- [[visual-query-tracer-declarative-logic-learning]] — Evaluating a Visual Query Tracer and Builder for Learning Declarative Logic Programming
- [[code-gen]]
- [[deeptutor]]
- [[chat-debugging-llm-hardware-education-2026]] — related
