---
title: Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
created: "2026-08-06T04:33:04-04:00"
updated: "2026-09-19T07:42:07-04:00"
type: article
foundations: [agentic-ai, critical-thinking, design-thinking, human-ai-collaboration]
pedagogy: [collaborative-learning, scaffolding, student-ai-interaction]
research_method: [experiment]
level: [higher ed]
sources: ['raw/papers/2608.04166.md']
confidence: high
discipline: [design education]
audience: [instructors, designers]
---
> **Synthesis:** Han & Martelaro (2026) build an **antagonistic** [[agentic-ai|AI design agent]] that enacts *constructive conflict* — drawing on adversarial design theory and agonistic pluralism to actively surface [[stakeholders|stakeholder]] pushback rather than agree and expand the design space. In a between-subjects experiment with **45 novice interaction design students** across three conditions (Self Reflection, Stepwise Guidance, Interactive [[student-engagement|Engagement]]), the agent-interactive condition produced significantly more design revisions, broader consideration of conflicting stakeholder perspectives, and higher-quality final proposals than the unsupported baseline — turning reconsideration from awareness into concrete action.

## Core Finding

Instead of designing AI agents to agree and expand, this study built an **antagonistic** design agent that enacts *constructive conflict* — actively surfacing stakeholder pushback to prompt designers to reconsider their own proposals. In a between-subjects experiment with **45 novice interaction design students** redesigning a local civic reporting website, the agent-interactive condition produced **significantly more design revisions and edits, broader consideration of conflicting stakeholder perspectives, and higher-quality final proposals** than an unsupported baseline. Notably, it moved students from *awareness* of stakeholder tension to *action*: participants in the unsupported "Self Reflection" group **never revised or deleted any ideas at all**, while those engaging the agent revised roughly 3.6× more ideas. The paper positions conflict not as friction to be removed but as a navigable space, framing well-steered antagonism as an "adversarial partner" for [[human-ai-collaboration]].

## Key Findings

- **Three conditions, shared framework.** Participants were assigned to (1) **Self Reflection** (unsupported review), (2) **Stepwise Guidance** (written prompts walking designers through a constructive-conflict framework), and (3) **Interactive Engagement** (an AI agent enacting the same framework interactively, synthesizing stakeholder pushback). The last two share the underlying framework, isolating the contribution of *agent enactment* from the conceptual content itself.
- **Agent enactment produced more revision than guidance alone.** Both the Stepwise and Interactive groups reported significantly higher self-reconsideration and made more improvements than Self Reflection. But the Interactive Engagement group uniquely supported both **revisions and enhancements** (e.g., 3.6× more edits than baseline; revisions significant only for the agent condition), whereas Stepwise Guidance primarily produced enhancements. The antagonistic agent introduced more conflictual perspectives and generated/discarded more ideas.
- **Self Reflection is marked by design fixation.** Participants who reviewed their own work without structure never revised or deleted any ideas — even though deletion was explicitly allowed. Prior [[research-methods-aied|research]] on design fixation and psychological ownership explains this: self-generated ideas are hard to move away from. The agent countered this by making the *stakeholder costs* of keeping an idea visible.
- **The agent functioned as an interactive checklist for stakeholder concerns.** It surfaced topics ([[accessibility]], [[privacy]], reluctance toward automation, alternative reporting channels) that the other groups did not reach on their own — a wider range than any single human designer could enumerate, helping novices realize tensions from stakeholders they had not considered.
- **[[desirable-difficulties|Productive friction]], not just frustration.** Participants rated the agent's pushback as contributing to the design (M=5.33) and raised points they "would not have thought of independently." Even so, reactions were mixed — one participant felt discouraged ("they criticize me in every aspect I think of") — and the synthetic pushback lacked the *emotional* weight of real antagonists.
- **Self-perception gap.** Agent and guidance participants rated their own designs no higher (sometimes lower) on serving diverse users, yet actually considered a broader set of stakeholders — being prompted to consider diverse users made them aware the range was wider and harder to address than assumed.
- **A subtractive, not just expansive, role.** The agent sharpened existing ideas more than it expanded the idea space. In civic design, a better design often comes from recognizing how one feature privileges some stakeholders while creating problems for others — so the agent's value lay in helping designers recognize what to *revise and constrain*, not just add.

## Design implications for constructive-conflict agents

The authors draw a clear design agenda for adversarial agents in [[ai-education|education]] and [[design-thinking|design]]. First, agents should treat disagreement **not as a one-shot critique but as a navigable space** — leaving room for designers to reframe the problem itself, not just answer comment-by-comment. Second, pushback should be **steerable and interactive** (designers could accept or revise in response), which appears to support confidence in working with stakeholder conflict. Third, synthetic opposition must **not be presented as a substitute for engaging real publics** — the agent surfaces *questions* designers should be aware of, but the authors caution against treating simulated perspectives as lived stakeholder input. Future agents could connect synthetic points to real-world evidence and help designers cluster critiques into broader tensions rather than reacting to each as a to-do item.

## What this means for practice

- **Instructors.** Replace agreeable AI brainstorming partners with a deliberately antagonistic reviewer for novice design work: in this study the unsupported self-review group never revised or deleted an idea at all, while the agent condition made roughly 3.6× more edits.
- **Instructors.** Aim the pushback at stakeholder costs — [[accessibility]], [[privacy]], resistance to automation, alternative reporting channels — so students see why an idea must be constrained or dropped, not only what else they could add.
- **Instructors.** Require students to verify every agent-raised concern against real evidence or real stakeholders; participants rated the pushback as contributing to their design (M = 5.33) but one felt discouraged ("they criticize me in every aspect I think of"), and the synthetic perspectives carry none of the weight of lived experience.
- **Designers.** Make conflict steerable rather than terminal: let designers accept, revise, or discard each point so disagreement reads as a navigable space instead of a verdict, and give them room to reframe the problem rather than answer comment-by-comment.
- **Designers.** Design for subtractive outcomes as well as expansive ones — the agent's chief value here was helping novices recognize what to revise, constrain, or discard, which is the harder move in [[critical-thinking]] and argumentation tasks.

## Limitations

- The between-subjects experiment involved only 45 design students (mean age 25.08, about 4 years of design/HCI study) in a single approximately 90-minute online session, redesigning one local civic reporting website; the authors therefore treat the point estimates as exploratory and likely somewhat inflated relative to true population effects.
- The prototype tested only one adversarial tone and prompt style, so the study cannot say how more combative or more supportive forms of antagonism would change engagement.
- All 45 design proposals were coded by the first author alone, and the agent misread relationships between ideas it could not see as connected (e.g., P19 had two linked ideas treated as separate features).
- The design captured a single interaction per participant, so it cannot show how designers' responses to adversarial agents evolve with repeated exposure.

## Connected Concepts

- [[agentic-ai]]
- [[scaffolding]]
- [[student-experience]]
- [[design-thinking]]
- [[socratic-method]]
- [[creativity]]
- [[human-ai-collaboration]]
- [[critical-thinking]]
- [[feedback]]
- [[student-engagement]]
- [[generative-ai]]
- [[llm]]

## Connected Articles

- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[learnmate2-llm-adaptive-learning]] — LearnMate^2: Design and Evaluation of an LLM-powered Personalized and Adaptive Support System for Online Learning
- [[knowloop-confusion-to-consolidation-2026]] — From Confusion to Consolidation: A Staged Conversational Workflow for Post-Lecture Review
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[chatgpt-critical-creative-thinking-review]] — ChatGPT Critical and Creative Thinking: Systematic Review

## Citation

Han, H. Z., & Martelaro, N. (2026). *[Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers](https://arxiv.org/abs/2608.04166)*. Human-Agent Interaction (HAI) 2026.
