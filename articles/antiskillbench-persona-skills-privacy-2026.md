---
title: "When Agents Learn to Be You: Benchmarking Privacy Leakage, Impersonation Risk, and Defenses in Persona Skills"
created: "2026-08-05T04:33:04-04:00"
updated: "2026-09-19T11:14:39-04:00"
type: article
foundations: [agentic-ai]
pedagogy: [student-ai-interaction]
technology: [personalized-learning, rag]
ethics: [bias-mitigation, privacy]
audience: [software developers]
sources: ['raw/papers/2608.03700.md']
confidence: high
page_kind: [evaluation]
methods: [benchmark]
---

> **Synthesis:** **When Agents Learn to Be You: Benchmarking Privacy Leakage, Impersonation Risk, and Defenses in Persona Skills** — Introduces AntiSkillBench with 7,500 persona-grounded dialogue traces from 50 behaviorally rich profiles. Evaluates skill-level privacy leakage, agent-level attribute disclosure, and behavioral impersonation across three skill-distillation strategies... [[privacy]] [[agentic-ai]] [[student-experience]] [[bias-mitigation]] [[personalized-learning]] [[benchmark]]

Introduces AntiSkillBench with 7,500 persona-grounded dialogue traces from 50 behaviorally rich profiles. Evaluates skill-level privacy leakage, agent-level attribute disclosure, and behavioral impersonation across three skill-distillation strategies. Experiments across three frontier agents show persona-skill risks persist across agent backbones and distillation protocols, extending from explicit attributes to communication styles and personality traits. Existing defenses exhibit limited and distillation-dependent effectiveness, failing to generalize across risk and distillation strategies.

## Abstract

Persona skills distill personal interaction histories into portable and executable artifacts for downstream agents. While enabling flexible personalization, this process concentrates fragmented personal signals, amplifies their impact through reuse, and challenges defenses designed for individual records or retrieval-based memory. To systematically investigate the safety of the persona-skill pipeline, we introduce AntiSkillBench, an end-to-end benchmark for evaluating risks and defenses across the persona-skill pipeline.

## What this means for practice

- **Designers.** Audit a distilled persona skill for retained personal attributes before it ships into an agent, because leakage persisted across all three frontier backbones and all three distillation protocols — the backbone or protocol alone is not a safeguard.
- **Designers.** Distill toward persona-level abstraction of how a user reasons and speaks rather than summarizing raw language cues: Colleague Distill suppressed the injected backdoor (40.0 ASR-S, 0.0 ASR-B) where Direct Distill left it visible (100.0 ASR-S, 46.1 ASR-B).
- **Designers.** Measure communication-style and personality leakage separately from demographic leakage, since the strongest active defense under Direct Distill cut communication VocabGain from 87.3 to 6.5 while personality Skill Coverage stayed at 70.0.
- **Researchers.** Report defense effectiveness per distillation protocol instead of pooling it: the defenses were distillation-dependent and did not generalize across risk types or strategies.

## Limitations

- The 2,500 dialogue traces (7,500 persona-grounded user turns) are LLM-simulated from 50 behaviorally rich profiles rather than real user interaction histories, so the reported leakage and impersonation rates come from a controlled construction.
- Every personal trace is only a three-round user–assistant dialogue, which is short relative to the histories real [[personalized-learning|personalized]] skills are distilled from.
- The defense suite covers four configurations spanning online and post-hoc interventions, so untested defense and distillation combinations may behave differently.

## Connected Concepts
- [[benchmark]]
- [[trust]]
- [[generative-ai]]
- [[privacy]]
- [[agentic-ai]]
- [[student-experience]]
- [[bias-mitigation]]
- [[personalized-learning]]
## Connected Articles

- [[learning-engagement-assistant-lea]] — Learning Engagement Assistant (LEA): Cross-Course Scalability and Classroom Evaluation of an Agentic AI Tutoring System
- [[cstutorbench-slm-tutors]] — CSTutorBench: Benchmarking Small Language Models as Tutors for Block-Based Programming
- [[mooc-to-maic]] — From MOOC to MAIC: Reshaping Online Teaching and Learning through LLM-driven Agents
- [[trust-reliance-ai-education-2026]] — Trust and Reliance on AI in Education: AI Literacy and Need for Cognition as Moderators
- [[deeptutor]] — DeepTutor: Toward Agentic Personalized Tutoring
- [[jeon-isd-agent-bench-2026]] — ISD Agent Benchmark

## Citation

Yongli Xiang, Zhifang Zhang, Bojun Yang, Ziming Hong, Lei Feng, Miao Xu, & Tongliang Liu (2026). [When Agents Learn to Be You: Benchmarking Privacy Leakage, Impersonation Risk, and Defenses in Persona Skills](https://arxiv.org/abs/2608.03700). .
