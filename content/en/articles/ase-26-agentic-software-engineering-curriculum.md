---
title: "ASE-26: A Curriculum for Agentic Software Engineering as a Discipline"
created: "2026-06-02T04:33:04-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
foundations: [agentic-ai, ai-literacy, curriculum-design]
pedagogy: [metacognition, scaffolding]
technology: [ai-technologies, prompt-engineering]
audience: [instructors, learners]
research_method: [theoretical analysis, policy analysis]
level: [higher ed]
sources: ['raw/papers/2606.01152.md']
confidence: high
discipline: [cs education, engineering education]
---

> **Synthesis:** Gorsky (2026) formalizes **Agentic Software Engineering (ASE)** as a distinct discipline and proposes a 21-module undergraduate curriculum centered on the **co-evolution of intent and build** — the evolutionary spiral in which a developer frames intent, the agent builds, and the developer judges and revises. Anchored in labor-market evidence (Anthropic classifies 79% of Claude Code interactions as automation; AI exposure covers ~75% of Computer Programmer tasks; employment for 22–25-year-olds in exposed occupations fell 13%), the curriculum teaches the practitioner discipline the industry lacks — framing, specification, context engineering, verification, multi-agent orchestration, and auditability — rather than any specific tool. It frames [[ai-literacy]] for software professionals as the ability to **manage agents, not merely prompt them**, and is designed to outlast today's model capabilities.

## Key Findings

- The paper documents that professional software work increasingly consists of directing [[agentic-ai|agents]] rather than writing code: Anthropic's Economic Index classifies 79% of Claude Code interactions as automation, Handa and colleagues find AI exposure for Computer Programmer tasks at approximately 75% of the role's distinct activities, and Brynjolfsson and colleagues report a 13% relative decline in employment for workers aged 22 to 25 in occupations most exposed to AI.
- The academic literature on [[agentic-ai|agentic software engineering]] converges on the finding that the missing capability is not better models but structured practitioner discipline.
- ASE-26 is a comprehensive undergraduate curriculum for agentic software engineering as a discipline, deposited as a citable reference on Zenodo under CC BY-ND 4.0.
- Its central conceptual contribution is the **evolutionary spiral** as the operational form of the co-evolution of intent and build — the iterative cycle in which a developer frames intent, the agent builds, and the developer judges and revises.
- The curriculum sets out [[pedagogy|pedagogical]] commitments for grading work co-produced with an agent and is designed to outlast the specific capabilities of today's models, [[teacher-role|teaching]] skills such as auditability, context engineering, verification, [[agentic-ai|multi-agent workflows]], and AgentOps.
- A motivating vignette captures the shift: a developer writes a paragraph, the agent asks clarifying questions and produces six hundred lines of code with tests, a commit message, and a draft pull request — roughly eleven minutes, where the same task took two hours three years ago.

## Why a Discipline, and Why Now

The curriculum opens by insisting that agentic software engineering is a *discipline*, not a tool skill: a discipline has principles, named artifacts, recognized failure modes, and standards a practitioner can be held to, and it carries from one product to the next because it teaches the structure of a relationship rather than the operation of any particular instrument. A casual prompter and a trained agentic software engineer can sit at the same screen, use the same model, and point at the same product yet produce different things — and the difference is what the curriculum calls the discipline. The academic literature converges on the same diagnosis: Hassan and colleagues frame the move from SE 2.0 (AI-augmented development) to SE 3.0 (agentic software engineering) as demanding a reimagining of the foundational pillars of SE; Otoum and Elkhalili's 2026 [[meta-analysis-systematic-review|systematic review]] reports skills gaps as one of the four leading barriers to industrial adoption; and Dong and colleagues find the missing layer is human-centered collaboration patterns rather than improved tools.

## Curriculum Design

The twenty-one-module structure organizes the discipline for teaching, building from the discipline's framing to the practitioner skills the industry currently lacks, across four parts plus a closing module. Part 1 (The discipline, Modules 1–5) situates ASE historically and builds mental models of how agents work — the context window as the agent's whole world, tools as its action space, and a failure-mode taxonomy — while introducing the auditability principle and the ADE (Agentic Development Environment) typology. Part 2 (The environment, Modules 6–9) develops problem framing as a discipline of its own, drawing on Polya, Schön, and Brooks. Part 3 (The engineering, Modules 10–18) covers specification, context engineering, safety and recovery with Git as the safety layer, verification before trust, multi-agent decomposition and orchestration, code review against the MRP standard, and security/[[governance]] including [[guardrails|prompt injection]]. Part 4 (The market, Modules 19–20) analyzes the restructuring developer role and changed startup economics, using the "human sandwich" pattern (humans frame at the start, judge at the end, while the agent types in between). Module 21 teaches the practitioner to distinguish durable principles (co-evolution, intent discipline, verification before trust, human accountability, the audit trail) from contingent capabilities (current ADE features, cost structures, context-window sizes), making the curriculum future-proof.

Because grading work co-produced with an agent raises novel questions about authorship and assessment, the curriculum includes explicit pedagogical commitments: it **grades the discipline rather than the artifact**, requiring an auditable trail (chat transcript, commit history, context files, verification records) and a declared delegation note. Continuous coursework comprises 50% of the grade, a multi-turn semester project 40%, and a closing meta-reflection artifact 10%. Model capabilities change rapidly, so the discipline is framed around durable skills — framing tasks, judging outputs, verifying results, and managing the evolution of intent — rather than around any particular tool.

## What this means for practice

- **Instructors.** Grade the discipline rather than the artifact: require an auditable trail (chat transcript, commit history, context files, verification records) plus a declared delegation note, and weight assessment so process dominates — 50% continuous coursework, 40% multi-turn semester project, 10% closing meta-reflection.
- **Instructors.** Teach [[ai-literacy]] in software courses as the ability to manage [[agentic-ai|agents]] rather than to prompt them, naming framing, specification, context engineering, verification, multi-agent orchestration, and auditability as assessable skills so students do not acquire them informally.
- **Faculty developers.** Build the program around the 21-module structure across the discipline, the environment, the engineering, and the market, which lets a curriculum target [[metacognition|judgment]] and durable principles instead of today's tool features.
- **Administrators.** Justify the investment with the labor-market evidence the paper assembles — Anthropic's classification of 79% of Claude Code interactions as automation, AI exposure covering approximately 75% of Computer Programmer tasks, and a 13% relative employment decline for workers aged 22 to 25 in exposed occupations — and commit to revising the curriculum as capabilities shift.
- **Instructors.** Close the course with the durable-versus-contingent inventory so graduates can maintain their own model of a moving field, distinguishing co-evolution, intent discipline, verification before trust, human accountability, and the audit trail from contingent ADE features, cost structures, and context-window sizes.

## Limitations

- ASE-26 is a curriculum proposal, not an implementation study: the paper reports no cohort taught with the 21 modules and no enrollment, completion, or learning-outcome data to test its sequencing or assessment claims.
- Its labor-market urgency rests on secondary evidence — Anthropic's Economic Index (79% of Claude Code interactions classified as automation), Handa and colleagues' approximately 75% AI exposure for Computer Programmer tasks, and Brynjolfsson and colleagues' 13% relative employment decline for workers aged 22 to 25 — rather than on data the author collected.
- The core construct, the evolutionary spiral, is a conceptual synthesis of Boehm's spiral model, the co-evolution of problem and solution spaces (Maher; Dorst; Cross), and Brooks's contracting-point refinement; the paper states that its full development is deferred to a subsequent pre-print, so it remains empirically unvalidated.
- The work is a single-author pre-print deposited on Zenodo under CC BY-ND 4.0, so the module structure, the grading policy, and the assessment weightings (50% coursework, 40% project, 10% meta-reflection) have not been reviewed against outcomes in any program.

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
