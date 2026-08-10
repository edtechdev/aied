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

- [[formative-assessment]]
## Connected Articles

- [[collaborative-ai-tutoring]]
- [[agentic-workflows-education]]
## Citation

Paassen, A.A.D.J.D.B. (2026). [*Programming Intelligent Tutoring Systems*](https://arxiv.org/abs/2604.16117)
