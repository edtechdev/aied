---
title: "ASE-26: A Curriculum for Agentic Software Engineering as a Discipline"
created: "2026-06-02T04:33:04-04:00"
updated: "2026-08-28T15:00:00-04:00"
type: article
tags: [agentic-ai, ai-literacy, curriculum-design, higher-ed, ai-technologies, prompt-engineering, scaffolding, metacognition]
level: [higher ed]
category: [curriculum design]
sources: ['raw/papers/2606.01152.md']
confidence: high
---

> **Synthesis:** Gorsky (2026) formalizes **Agentic Software Engineering (ASE)** as a distinct discipline and proposes a 21-module undergraduate curriculum centered on the **co-evolution of intent and build** — the evolutionary spiral in which a developer frames intent, the agent builds, and the developer judges and revises. Anchored in labor-market evidence (Anthropic classifies 79% of Claude Code interactions as automation; AI exposure covers ~75% of Computer Programmer tasks; employment for 22–25-year-olds in exposed occupations fell 13%), the curriculum teaches the practitioner discipline the industry lacks — framing, specification, context engineering, verification, multi-agent orchestration, and auditability — rather than any specific tool. It frames [[ai-literacy]] for software professionals as the ability to **manage agents, not merely prompt them**, and is designed to outlast today's model capabilities.

## Key Findings

- The paper documents that professional software work increasingly consists of directing [[agentic-ai|agents]] rather than writing code: Anthropic's Economic Index classifies 79% of Claude Code interactions as automation, Handa and colleagues find AI exposure for Computer Programmer tasks at approximately 75% of the role's distinct activities, and Brynjolfsson and colleagues report a 13% relative decline in employment for workers aged 22 to 25 in occupations most exposed to AI.
- The academic literature on [[agentic-ai|agentic software engineering]] converges on the finding that the missing capability is not better models but structured practitioner discipline.
- ASE-26 is a comprehensive undergraduate curriculum for agentic software engineering as a discipline, deposited as a citable reference on Zenodo under CC BY-ND 4.0.
- Its central conceptual contribution is the **evolutionary spiral** as the operational form of the co-evolution of intent and build — the iterative cycle in which a developer frames intent, the agent builds, and the developer judges and revises.
- The curriculum sets out [[pedagogy|pedagogical]] commitments for grading work co-produced with an agent and is designed to outlast the specific capabilities of today's models, teaching skills such as auditability, context engineering, verification, [[agentic-ai|multi-agent workflows]], and AgentOps.
- A motivating vignette captures the shift: a developer writes a paragraph, the agent asks clarifying questions and produces six hundred lines of code with tests, a commit message, and a draft pull request — roughly eleven minutes, where the same task took two hours three years ago.

## Why a Discipline, and Why Now

The curriculum opens by insisting that agentic software engineering is a *discipline*, not a tool skill: a discipline has principles, named artefacts, recognized failure modes, and standards a practitioner can be held to, and it carries from one product to the next because it teaches the structure of a relationship rather than the operation of any particular instrument. A casual prompter and a trained agentic software engineer can sit at the same screen, use the same model, and point at the same product yet produce different things — and the difference is what the curriculum calls the discipline. The academic literature converges on the same diagnosis: Hassan and colleagues frame the move from SE 2.0 (AI-augmented development) to SE 3.0 (agentic software engineering) as demanding a reimagining of the foundational pillars of SE; Otoum and Elkhalili's 2026 [[meta-analysis-systematic-review|systematic review]] reports skills gaps as one of the four leading barriers to industrial adoption; and Dong and colleagues find the missing layer is human-centred collaboration patterns rather than improved tools.

## Curriculum Design

The twenty-one-module structure organizes the discipline for teaching, building from the discipline's framing to the practitioner skills the industry currently lacks, across four parts plus a closing module. Part 1 (The discipline, Modules 1–5) situates ASE historically and builds mental models of how agents work — the context window as the agent's whole world, tools as its action space, and a failure-mode taxonomy — while introducing the auditability principle and the ADE (Agentic Development Environment) typology. Part 2 (The environment, Modules 6–9) develops problem framing as a discipline of its own, drawing on Polya, Schön, and Brooks. Part 3 (The engineering, Modules 10–18) covers specification, context engineering, safety and recovery with Git as the safety layer, verification before trust, multi-agent decomposition and orchestration, code review against the MRP standard, and security/[[governance]] including [[guardrails|prompt injection]]. Part 4 (The market, Modules 19–20) analyzes the restructuring developer role and changed startup economics, using the "human sandwich" pattern (humans frame at the start, judge at the end, while the agent types in between). Module 21 teaches the practitioner to distinguish durable principles (co-evolution, intent discipline, verification before trust, human accountability, the audit trail) from contingent capabilities (current ADE features, cost structures, context-window sizes), making the curriculum future-proof.

Because grading work co-produced with an agent raises novel questions about authorship and assessment, the curriculum includes explicit pedagogical commitments: it **grades the discipline rather than the artefact**, requiring an auditable trail (chat transcript, commit history, context files, verification records) and a declared delegation note. Continuous coursework comprises 50% of the grade, a multi-turn semester project 40%, and a closing meta-reflection artefact 10%. Model capabilities change rapidly, so the discipline is framed around durable skills — framing tasks, judging outputs, verifying results, and managing the evolution of intent — rather than around any particular tool.

## Implications for AI in Education

ASE-26 reframes [[ai-literacy]] for software professionals as the ability to manage agents, not merely to [[prompt-engineering|prompt]] them, and its emphasis on the co-evolution of intent and build aligns with [[curriculum-design]] that targets [[metacognition]] rather than syntax mastery. For [[higher-ed]], the curriculum is a concrete template for programs that want to teach the discipline of [[agentic-ai]] development — including verification and auditability — rather than leaving students to acquire it informally. The labor-market evidence the paper marshals gives urgency to this curriculum agenda, and its grounding in durable practitioner discipline speaks to the broader question of what should be taught when AI can generate code: the skills that compound (framing, judging, verifying, and maintaining one's own model of a shifting field) rather than the transient syntax of any tool. It also models a rigorous answer to assessment when student work is co-produced with agents — an increasingly pressing question for [[engineering-education]] and [[cs-education]] alike.

## Connected Concepts

- [[ai-literacy]]
- [[scaffolding]]
- [[prompt-engineering]]
- [[curriculum-design]]
- [[metacognition]]
- [[agentic-ai]]
- [[higher-ed]]
- [[cs-education]]
## Connected Articles

- [[tracing-genai-literacy-interaction-patterns]] — Tracing GenAI Literacy: Student-AI Interaction Patterns in Academic Writing
- [[guided-llm-scaffolding-independent-learning]] — Beyond Access: Guided LLM Scaffolding for Independent Learning in Undergraduate Statistics
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[finkelstein-principled-ai-education-2025]] — Principled AI Education Framework
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm

## Citation

Gorsky, M. (2026). [*ASE-26: A Curriculum for Agentic Software Engineering as a Discipline*](https://arxiv.org/abs/2606.01152).
