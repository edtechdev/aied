---
title: "Tracing GenAI Literacy: Student-AI Interaction Patterns in Academic Writing"
created: "2026-06-02T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [agentic-ai, ai-literacy, curriculum-design]
pedagogy: [metacognition, scaffolding]
technology: [learning-analytics, prompt-engineering]
audience: [learners, instructors]
research_method: [learning analytics, survey]
discipline: [writing education]
level: [higher ed]
sources: ['raw/papers/2606.00040.md']
confidence: high
---

> **Synthesis:** Identifies interaction signatures of [[llm]] literacy using [[network-analysis|Epistemic Network Analysis]] (ENA) on logs from 162 students. High-literacy students exhibit iterative, strategic refinement and dense cognitive networking, while low-literacy students rely on direct, linear commands. This work emphasizes that [[ai-literacy]] is a developmental capacity requiring structured [[scaffolding]] and [[prompt-engineering]] discipline. It connects to the need for [[curriculum-design]] that targets [[metacognition]] and [[agentic-ai]] rather than just syntax mastery.

## Key Findings

- Interaction logs from 162 university students engaged in a [[generative-ai|GenAI]]-assisted abstract writing task were analyzed using Epistemic Network Analysis (ENA).
- High-literacy students exhibit iterative refinement and strategic questioning, producing distinct interaction signatures in the process data.
- Low-literacy students rely on direct generation commands, characterized by transactional, generation-oriented dependence on the tool.
- GenAI literacy is not just a static score but a dynamic behavioral capability that shapes the [[human-ai-collaboration|human-AI collaboration]] process.
- The work paves the way for data-driven literacy assessment and real-time interventions based on observed interaction behavior rather than self-report.

## Study Design & Method

A total of 162 university students (M_age = 20.1) participated in a GenAI-assisted abstract writing task. Prior to the task, students completed a validated GenAI Literacy Test assessing technical understanding, interaction skills, and related constructs. Using Epistemic Network Analysis, the [[research-methods-aied|researchers]] modeled and compared the questioning strategies of students with varying GenAI literacy levels, examining how literacy manifests in the structure of actual human-AI collaboration. The study was presented at the First International Workshop on Advancing AI Literacy with Learning Analytics (AI-LIT) at LAK26.

## What this means for practice

- **Instructors.** Assess [[ai-literacy]] from interaction process, not a single questionnaire score: logs from 162 students, split at the median of a validated GenAI Literacy Test into a high group (n = 89) and a low group (n = 73), produced structurally distinct questioning networks under Epistemic Network Analysis.
- **Instructors.** Ask students to draft their own summary first and request critique of it, then to refine iteratively: high-literacy networks linked AI Improvement Commands with Clarification Questions and Meta-Commands, an iterative sense-making-then-refinement cycle, whereas low-literacy students paired broad generation commands with basic fact retrieval.
- **Designers.** Use interaction constraints that force synthesis rather than adoption: the study's custom platform imposed a 30-word limit per prompt and disabled copy-pasting, a directly reproducible lever for other tools.
- **Instructors.** Treat low-literacy challenge questions as a teaching opening: the challenging-question link appeared in the low-literacy network mainly as a reaction to confusion or [[hallucination-risk|hallucinations]] rather than strategic critique, so make explicit how to question a model's logic.
- **Designers.** Build [[learning-analytics]] dashboards around the observed behavioral markers — the shift from direct generation commands toward iterative refinement — to trigger real-time support instead of end-of-course [[self-report-measures|self-report]].

## Limitations

- Literacy grouping came from a median split on students' self-reported GenAI Literacy Test results rather than from an externally validated performance measure, yielding a high group (n = 89) and a low group (n = 73) within a single cohort.
- Participants were 162 university students (M_age = 20.1) from one institution working on one academic abstract-writing task in one custom platform built on DeepSeek, so the interaction signatures may not transfer to other tasks, disciplines, or tools.
- The paper reports preliminary findings presented at the AI-LIT workshop at LAK26, and its coding framework was adapted from prior work; human coding of a subset reached substantial but not perfect agreement (Cohen's κ = 0.75).
- Because the analysis infers intent from behavioral codes alone, a challenge question logged as confusion-driven criticism and one logged as strategic critique are not distinguishable in the logs.

## Connected Concepts

- [[ai-literacy]]
- [[scaffolding]]
- [[prompt-engineering]]
- [[curriculum-design]]
- [[metacognition]]
- [[agentic-ai]]
- [[learning-analytics]]
- [[writing-education]]- [[network-analysis]]
- [[self-report-measures]]

## Connected Articles

- [[liu-ai-literacy-interventions-meta-analysis-2026]] — meta-analysis of AI literacy intervention effectiveness
- [[ase-26-agentic-software-engineering-curriculum]] — ASE-26: A Curriculum for Agentic Software Engineering as a Discipline
- [[guided-llm-scaffolding-independent-learning]] — Beyond Access: Guided LLM Scaffolding for Independent Learning in Undergraduate Statistics
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[finkelstein-principled-ai-education-2025]] — Principled AI Education Framework
- [[prober-ai-inquiry-writing]] — Prober.ai: Gated Inquiry-Based Feedback via LLM-Constrained Personas for Argumentative Writing

## Citation

Angxuan Chen & Jiyou Jia (2026). [Tracing GenAI Literacy: Student-AI Interaction Patterns in Academic Writing](https://arxiv.org/abs/2606.00040).
