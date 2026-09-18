---
title: "DataCanvas-EDU: An Agentic Framework for Instructor-Guided Synthetic Data Generation in Business Analytics Education"
created: "2026-09-18T09:15:00-04:00"
updated: "2026-09-18T09:15:00-04:00"
type: article
technology: [llm, generative-ai]
assessment: [assessment, authentic-assessment]
pedagogy: [problem-based-learning, experiential-learning]
foundations: [agentic-ai, learning-design]
methods: [design-based-research]
research_method: [system development]
discipline: [business education]
audience: [instructors, instructional designers]
level: [higher ed]
sources: ['raw/papers/datacanvas-edu-synthetic-data-business-analytics-2026.md']
confidence: high
---

> **Synthesis:** An, Hamdani & Fox (2026) identify a practical bottleneck in business [[learning-analytics|analytics]] teaching: authentic datasets are hard to obtain, adapt poorly to a given course, and — when they are popular — have already been absorbed into [[llm|LLM]] training data together with their worked solutions. Their response, **DataCanvas-EDU**, is an [[agentic-ai|agentic]] framework in which an instructor states teaching goals in conversation and an AI agent writes generation code, checks the resulting data, and prepares assignments, reference analyses and rubrics across four phases: Plan, Create, Verify/Test Analysis and Evaluate. The paper illustrates the approach with a 15,000-order food-delivery case containing nine deliberately designed patterns, and packages the framework as a reusable agent skill.

## Key Findings

1. **Data contamination is the [[pedagogy|pedagogical]] problem, not just a data problem.** When models have seen a dataset and its published analyses, students receive explanations drawn from existing work instead of practising investigation of unfamiliar data.
2. **Instructor intent is the specification.** Teaching goals and intended patterns are expressed conversationally, and the agent's generation code is derived from them, keeping the [[learning-design|design decision]] with the [[teacher-role|teacher]].
3. **Four phases organize the workflow** — Plan, Create, Verify/Test Analysis, Evaluate — with instructor review and revision built into each rather than appended at the end.
4. **Verification is internal to the pipeline:** the agent checks the generated data against the intended patterns before materials are produced, addressing the failure mode where synthetic data silently lacks the structure a case is meant to teach.
5. **A worked case demonstrates scale and control** — 15,000 orders and nine designed patterns — and the framework ships as a reusable AI Agent Skill for compatible agent environments.

## What the framework changes about case preparation

Preparing a data-analytics case traditionally consumes instructor time on pattern investigation, result verification, and writing both the assignment and its reference solution. Automating generation does not remove the instructor from that loop; it moves their work to specification and review. That division is what makes the approach credible for [[assessment]]: rubrics and reference analyses are produced as first-class artefacts alongside the data, so the case arrives with its own grading apparatus.

## Why synthetic data needs its own validity argument

A generated dataset can look realistic while failing to instantiate the pattern the case teaches, and can drift away from the distributions students will meet in practice. The Verify phase is the authors' answer, and it connects this work to the wider [[assessment-validity]] and [[benchmark]] questions that surround any AI-produced instructional material. It also raises the same [[hallucination-risk|reliability]] concerns that apply to other [[generative-ai|generative]] content pipelines — here, an incorrect generated pattern propagates into both the case and its rubric.

## Connected Concepts

- [[agentic-ai]]
- [[llm]]
- [[generative-ai]]
- [[learning-design]]
- [[assessment]]
- [[authentic-assessment]]
- [[problem-based-learning]]
- [[experiential-learning]]
- [[assessment-validity]]
- [[hallucination-risk]]
- [[educational-technology-developers]]

## Connected Articles

- [[agentschool-multi-agent-simulation-education-2026]] — Multi-agent simulation in education
- [[ai-agents-constructive-conflict-design-education-2026]] — Designing constructive conflict into educational agents
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — AI-assisted curriculum analysis
- [[ai-disruption-engineering-education-chat-2026]] — Disruption of engineering education by chat assistants

## Citation

An, B., Hamdani, M., & Fox, J. (2026). [DataCanvas-EDU: An Agentic Framework for Instructor-Guided Synthetic Data Generation in Business Analytics Education](https://arxiv.org/abs/2609.19617). arXiv:2609.19617.
