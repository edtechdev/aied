---
title: Human-LLM Collaborative Inductive Coding for Conceptualizing K-12 Educator AI Use
created: "2026-08-03T04:33:04-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
foundations: [human-ai-collaboration, teacher-role]
technology: [generative-ai, llm]
stakeholders: [teacher-ai-competency]
audience: [instructors]
level: [k 12]
page_kind: [evaluation]
sources: ['raw/papers/2607.28889.md']
confidence: high
methods: [ai-ed-evaluation, qualitative-research, research-methods-aied]
---

> **Synthesis:** A multi-phase human-[[llm|LLM]] collaborative pipeline adapted open, axial, and selective coding to build a hierarchical codebook from 45,000 messages exchanged between [[k-12|K-12 educators]] and a [[generative-ai|generative AI]] platform — an instance of LLMs as analytic assistants at a scale manual coding cannot match.

LLMs generated candidate labels and structured annotations at scale across three phases, while human [[research-methods-aied|researchers]] retained conceptual authority over category definitions, merging decisions, and interpretive frameworks — a [[human-in-the-loop-ai|human-in-the-loop]] division of labor.

The resulting 72-item codebook was validated through systematic human coding of an independent 2,560-message sample, with reliability established via set-valued agreement measures; human coders extended the instrument with five codes the LLM-assisted phases had not surfaced.

The article provides a procedural account (what LLMs can do, in which phases, under what safeguards) directly relevant to [[ai-ed-evaluation|AIED research methodology]] and to conceptualizing [[teacher-ai-competency|how educators actually use]] generative AI platforms.

## What this means for practice

- **Instructors.** Treat the LLM as a labeling instrument rather than an interpretive agent: let it propose candidate labels and structured annotations, but keep category definitions and merging decisions under human consensus.
- **Instructors.** Read raw data alongside model outputs at every phase and memo when proposals are misleading, generic, or skewed toward surface features, so the sites of potential model bias stay inspectable.
- **Researchers.** Run the human validation phase as constitutive, not as a check appended to an LLM method: coding an independent 2,560-message sample supplied reliability evidence no model consistency can give and surfaced five codes the LLM-assisted phases missed.
- **Researchers.** Report intercoder agreement at every level of the hierarchy with set-valued measures such as Jaccard similarity, since a single chance-corrected coefficient at the finest granularity treats partial convergence as full disagreement.

## Limitations

- All data come from one AI platform, and the codebook's domains reflect the professional activity that platform supports; teams studying other populations should expect the structure to transfer more readily than the items.
- The pipeline used specific commercial models available during the study period, so the particular candidate labels are not reproducible in the strict sense — only the prompts, procedures, and human decision points are.
- Human coder agreement, while adequate for multi-label coding at this codebook size, leaves room for improvement, which is why the calibration protocol is part of the method.
- The study observes educator requests and platform responses, not classroom implementation: it characterizes what educators sought from the AI rather than what they subsequently did with it.

## Connected Concepts

- [[formative-assessment]]
- [[teacher-ai-competency]]
- [[bias-mitigation]]
- [[k-12]]
- [[ai-education]]
- [[human-in-the-loop-ai]]
- [[automated-essay-scoring]]
- [[educational-nlp]]
- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[generative-ai]]
- [[llm]]

## Connected Articles

- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not Ground Truth
- [[connected-ai-lesson-planning-vietnam]] — ConnectED: A Curriculum-Aligned AI System for Vietnamese Instructional Lesson Planning and Student Learning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[llm-cognitive-diagnosis-handwritten-math]] — Benchmarking Large Language Models for Diagnosing Students' Cognitive Skills from Handwritten Math Work
- [[chat-debugging-human-ai-collaboration-circuits]] — Chat Debugging: An Exploratory Study of Human-AI Collaboration to Debug Analog Circuits
- [[post-covid-ict-career-aspirations]] — Learning after COVID-19 and the ICT career aspirations: Are students entering the AI era with weaker skills?

## Citation

Liu, A., Sun, M., Esbenshade, L., Xiao, M., Tian, V., Zhang, Z., & He, K. (2026). [Human-LLM collaborative inductive coding for conceptualizing K-12 educator AI use](https://arxiv.org/abs/2607.28889).
