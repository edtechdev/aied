---
title: Cognitive Agent Compilation for Explicit Problem Solver Modeling
created: "2026-05-11T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [intelligent-tutoring, llm, adaptive-learning, personalized-learning, pedagogical-llm-training, rag, problem-solving]
audience: [software developers]
research_method: [system development]
sources: ['raw/papers/2605.07040.md']
confidence: medium
---

## Core Idea

**Cognitive Agent Compilation (CAC)** is a framework that uses a strong teacher LLM to compile problem-solving knowledge into an explicit, inspectable target agent. Unlike end-to-end LLM tutoring approaches, CAC separates the agent into three components:

1. **Knowledge representation** — explicit, structured representation of domain knowledge (skills, misconceptions, strategies)
2. **Problem-solving policy** — how the agent applies knowledge to solve problems
3. **Verification and update rules** — mechanisms for checking correctness and updating the knowledge state

The goal is **bounded-knowledge AI** for education: agents that know what they know, can explain their reasoning in terms of explicit skills, and can be inspected and edited by educators.

## Motivation

LLMs are widely used for tutoring, feedback generation, and content creation, but their broad pretraining makes them hard to constrain. Key problems:

- **Inability to "not know"**: LLMs struggle to simulate a state of not knowing, making them poor proxies for student learners. Evidence suggests Chain-of-Thought and reasoning models operate fundamentally differently from human cognition.
- **Expert blind spot**: Even human experts struggle to teach effectively without pedagogical training. LLMs, having absorbed vast unconstrained information, face an amplified version of this problem.
- **Inspectability gap**: Educators need to know what a system assumes the learner knows; learners benefit when the system can justify actions in terms of explicit skills, misconceptions, and strategies. Opaque LLMs can't provide this.

## Architecture

CAC draws inspiration from **cognitive architectures** (ACT-R, SOAR) and compiles LLM knowledge into explicit, inspectable agents. The three separable components enable:

- **Inspectability**: Educators can examine the knowledge representation and problem-solving policy directly
- **Editability**: Knowledge states can be corrected or refined without retraining
- **Bounded reasoning**: The agent operates within explicit knowledge boundaries rather than leveraging unbounded pretraining

A proof of concept was implemented using **Small Language Models (SLMs)**, surfacing key design trade-offs between explicit control and scalable generalization.

## Connection to Existing Work

CAC connects to several threads in AI education research:

- **[[huang-interpretable-knowledge-tracing-2026]]**: CAC makes knowledge tracing explicit and inspectable, complementing interpretable approaches like IRT-based knowledge tracing
- **[[neural-symbolic-knowledge-tracing]]**: Shares the goal of combining explicit (symbolic) knowledge representation with neural approaches for interpretable learner modeling
- **[[agentic-workflows-education]]**: CAC is a specific agentic architecture for education, separated into knowledge, policy, and verification components
- **[[adaptive-learning]]**: CAC enables adaptive behavior grounded in explicit, editable learner models
- **[[llm-student-modeling-memory]]**: CAC addresses the learner modeling challenge from the knowledge representation angle, complementing memory-based approaches
- **[[pedagogical-llm-training]]**: CAC offers an alternative to training pipelines — compile rather than train for pedagogical alignment
- **[[personalized-learning]]**: Explicit learner models in CAC enable personalization that is inspectable and editable by educators
- **[[prober-ai-inquiry-writing]]**: Both approach bounded-knowledge tutoring from different angles — CAC via compilation, Prober via inverted questioning

## Open Questions

- **Scalability vs. control trade-off**: The proof of concept surfaces tension between explicit, editable representations and the scalability of end-to-end LLM approaches
- **Compilation fidelity**: How faithfully can a teacher LLM compile its knowledge into a bounded agent?
- **Domain breadth**: The initial implementation is domain-specific — can CAC generalize across subjects?
- **Bounded rationality in practice**: Does bounded-knowledge AI actually improve educational outcomes compared to unbounded LLM tutors?

## Connected Concepts

- [[adaptive-learning]]
- [[agentic-ai]]
- [[knowledge-tracing]]
- [[llm]]
- [[pedagogical-llm-training]]
- [[personalized-learning]]
- [[student-modeling]]

## Connected Articles

- [[huang-interpretable-knowledge-tracing-2026]]
- [[neural-symbolic-knowledge-tracing]]
- [[agentic-workflows-education]]
- [[llm-student-modeling-memory]]
- [[prober-ai-inquiry-writing]]
## Citation

Moon, H., Rosé, C., & Stamper, J. (2026). [Cognitive Agent Compilation for Explicit Problem Solver Modeling](https://arxiv.org/abs/2605.07040). Accepted to AIED 2026 Blue Sky.
