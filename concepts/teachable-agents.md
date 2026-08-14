---
title: Teachable Agents
created: 2026-08-14
updated: 2026-08-14
type: concept
tags: [teachable-agents, learning-by-teaching, generative-ai, llm, agent-design, active-learning, scaffolding]
confidence: high
---

> **Teachable agents** — software systems that a learner teaches as part of learning, operationalizing the [[learning-by-teaching|protégé effect]]. Traditional teachable agents were rule-based or retrieval-based (e.g., Betty's Brain); the AI era has shifted to **conversational, LLM-based teachable agents** that engage learners in natural-language dialogue, and whose novice-like fallibility must be deliberately engineered.

## From Rule-Based to Conversational

Classic teachable agents let students teach a system to reinforce their own learning, but were limited to constrained command-response interfaces. Large language models (LLMs) create new opportunities: they can flexibly adopt roles via prompting — including the role of a "tutee" that asks questions or makes mistakes — and engage in open-ended dialogue. This enables learning-by-teaching in less-structured domains (e.g., writing, vocabulary) than previously possible.

## The Fallibility Problem

A central tension is that LLMs are trained to produce fluent, expert-level responses by default — the opposite of the fallible novice a teachable-agent paradigm needs. Making an LLM a good tutee requires **engineering fallibility**:

- [[prompting-teachability-novice-personas-lbt-2026|Constraint-based prompting]] — direct commands forcing error production ("answer incorrectly," "get 2–3 wrong") elicit novice behavior far more reliably than persona-, misconception-, or uncertainty-based prompts.
- [[socrates-students-instructors-llms-lbt-2025|Engineered knowledge gaps]] — problems the LLM cannot solve without knowledge only the student possesses, making teaching a necessity.

## Evidence from the Wiki

- **[[chatgpt-teachable-agent-programming-lbt-2024|ChatGPT as a teachable agent]]** in programming improved knowledge gains, programming ability, and self-regulated learning — though always-correct output limited error-correction practice.
- **[[explique-teachable-agent-algorithms-546-students-2026|Explique at scale]]** deployed the Algorithm Apprentice agent to 546 students over an 11-week semester; explanation-oriented dialogue predicted fewer incorrect submissions, while external-content reuse predicted more.
- **[[teaching-ai-vocabulary-lbt-llms-2026|Vocabulary teaching]]** used LLMs as a student to generate dynamic questions, improving retention at 3 and 7 days.
- **[[simulating-students-java-programming-errors-llms|Simulating student errors]]** with LLMs supports authoring teachable-agent behaviors.

## Design Implications

1. **Engineer fallibility** — a teachable agent that is too competent removes the error-correction and gap-filling practice that drives learning.
2. **Support natural dialogue** — conversational agents enable learning-by-teaching in open-ended domains.
3. **Reward explanation, discourage content-dumping** — learning is predicted by elaboration and reasoning, not reuse of external content.

## Connected Concepts

- [[learning-by-teaching]]
- [[generative-ai]]
- [[active-learning]]
- [[scaffolding]]
- [[desirable-difficulties]]
- [[pedagogical-agent]]

## Connected Articles

- [[chatgpt-teachable-agent-programming-lbt-2024]] — ChatGPT as a teachable agent in programming
- [[explique-teachable-agent-algorithms-546-students-2026]] — Explique: teachable agent for 546 students
- [[prompting-teachability-novice-personas-lbt-2026]] — Designing novice personas for teachability
- [[socrates-students-instructors-llms-lbt-2025]] — Students as instructors of LLMs
- [[teaching-ai-vocabulary-lbt-llms-2026]] — Vocabulary learning by teaching AI
- [[simulating-students-java-programming-errors-llms]] — Simulating student errors with LLMs
