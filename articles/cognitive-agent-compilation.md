---
title: Cognitive Agent Compilation for Explicit Problem Solver Modeling
created: 2026-05-11
updated: 2026-05-11
type: article
tags: [intelligent-tutoring, llm, adaptive-learning, personalized-learning, pedagogical-llm-training, adaptive-learning-systems, rag, ai-tutoring]
sources: ['raw/papers/2605.07040.md']
confidence: medium
---

> **Moon, Rosé & Stamper (2026)** — CMU. Accepted to AIED 2026 Blue Sky track.
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

- **[[knowledge-tracing-irt]]**: CAC makes knowledge tracing explicit and inspectable, complementing interpretable approaches like IRT-based knowledge tracing
- **[[neural-symbolic-knowledge-tracing]]**: Shares the goal of combining explicit (symbolic) knowledge representation with neural approaches for interpretable learner modeling
- **[[agentic-workflows-education]]**: CAC is a specific agentic architecture for education, separated into knowledge, policy, and verification components
- **[[adaptive-learning-systems]]**: CAC enables adaptive behavior grounded in explicit, editable learner models
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

- [[adaptive-learning-systems]]
- [[pedagogical-llm-training]]
- [[personalized-learning]]

## Connected Articles

- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[ai-learning-companions-framework]] — Building AI Companions that Prioritise Learning over Performance
- [[collaborative-ai-tutoring]] — Collaborative AI Tutoring
- [[knowledge-tracing-irt]] — Interpretable Knowledge Tracing via IRT
- [[llm-student-modeling-memory]] — LLM Student Modeling and Long-Term Memory Architecture
- [[multi-agent-instructional-design]] — Multi-Agent Systems for Instructional Design
- [[neural-symbolic-knowledge-tracing]] — Neural-Symbolic Knowledge Tracing
- [[pedagogical-safety-rl]] — Pedagogical Safety in Educational Reinforcement Learning
- [[prober-ai-inquiry-writing]] — Prober.ai: Gated Inquiry-Based Feedback via LLM-Constrained Personas for Argumentative Writing
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adult-learning-design]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...

## Citation

Moon, H., Rosé, C., & Stamper, J. (2026). [Cognitive Agent Compilation for Explicit Problem Solver Modeling](https://arxiv.org/abs/2605.07040). arXiv:2605.07040. Accepted to AIED 2026 Blue Sky.
