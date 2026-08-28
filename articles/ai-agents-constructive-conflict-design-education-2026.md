---
title: Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
created: "2026-08-06T04:33:04-04:00"
updated: "2026-08-21T20:31:10-04:00"
type: article
tags: [agentic-ai, design-thinking, higher-ed, scaffolding, student-ai-interaction, collaborative-learning, human-ai-collaboration, critical-thinking]
sources: ['raw/papers/2608.04166.md']
confidence: high
---

# Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers

## Core Finding

Instead of designing AI agents to agree and expand, this study built an **antagonistic** design agent that enacts *constructive conflict* — actively surfacing stakeholder pushback to prompt designers to reconsider their own proposals. In a between-subjects experiment with **45 novice interaction design students** redesigning a local civic reporting website, the agent-interactive condition produced **significantly more design revisions and edits, broader consideration of conflicting stakeholder perspectives, and higher-quality final proposals** than an unsupported baseline. Notably, it moved students from *awareness* of stakeholder tension to *action*: participants in the unsupported "Self Reflection" group **never revised or deleted any ideas at all**, while those engaging the agent revised roughly 3.6× more ideas. The paper positions conflict not as friction to be removed but as a navigable space, framing well-steered antagonism as an "adversarial partner" for [[human-ai-collaboration]].

## Key Findings

- **Three conditions, shared framework.** Participants were assigned to (1) **Self Reflection** (unsupported review), (2) **Stepwise Guidance** (written prompts walking designers through a constructive-conflict framework), and (3) **Interactive Engagement** (an AI agent enacting the same framework interactively, synthesizing stakeholder pushback). The last two share the underlying framework, isolating the contribution of *agent enactment* from the conceptual content itself.
- **Agent enactment produced more revision than guidance alone.** Both the Stepwise and Interactive groups reported significantly higher self-reconsideration and made more improvements than Self Reflection. But the Interactive Engagement group uniquely supported both **revisions and enhancements** (e.g., 3.6× more edits than baseline; revisions significant only for the agent condition), whereas Stepwise Guidance primarily produced enhancements. The antagonistic agent introduced more conflictual perspectives and generated/discarded more ideas.
- **Self Reflection is marked by design fixation.** Participants who reviewed their own work without structure never revised or deleted any ideas — even though deletion was explicitly allowed. Prior research on design fixation and psychological ownership explains this: self-generated ideas are hard to move away from. The agent countered this by making the *stakeholder costs* of keeping an idea visible.
- **The agent functioned as an interactive checklist for stakeholder concerns.** It surfaced topics (accessibility, privacy, reluctance toward automation, alternative reporting channels) that the other groups did not reach on their own — a wider range than any single human designer could enumerate, helping novices realize tensions from stakeholders they had not considered.
- **[[desirable-difficulties|Productive friction]], not just frustration.** Participants rated the agent's pushback as contributing to the design (M=5.33) and raised points they "would not have thought of independently." Even so, reactions were mixed — one participant felt discouraged ("they criticize me in every aspect I think of") — and the synthetic pushback lacked the *emotional* weight of real antagonists.
- **Self-perception gap.** Agent and guidance participants rated their own designs no higher (sometimes lower) on serving diverse users, yet actually considered a broader set of stakeholders — being prompted to consider diverse users made them aware the range was wider and harder to address than assumed.
- **A subtractive, not just expansive, role.** The agent sharpened existing ideas more than it expanded the idea space. In civic design, a better design often comes from recognizing how one feature privileges some stakeholders while creating problems for others — so the agent's value lay in helping designers recognize what to *revise and constrain*, not just add.

## Design implications for constructive-conflict agents

The authors draw a clear design agenda for adversarial agents in education and design. First, agents should treat disagreement **not as a one-shot critique but as a navigable space** — leaving room for designers to reframe the problem itself, not just answer comment-by-comment. Second, pushback should be **steerable and interactive** (designers could accept or revise in response), which appears to support confidence in working with stakeholder conflict. Third, synthetic opposition must **not be presented as a substitute for engaging real publics** — the agent surfaces *questions* designers should be aware of, but the authors caution against treating simulated perspectives as lived stakeholder input. Future agents could connect synthetic points to real-world evidence and help designers cluster critiques into broader tensions rather than reacting to each as a to-do item.

## Practical Implications

- **Use disagreement deliberately in AI tutors and agents.** Well-steered antagonism can reduce premature agreement and promote genuine reconsideration — relevant beyond design, to [[critical-thinking]] and [[socratic-method]]-style learning where surfacing counter-evidence and stakeholder tensions helps students revise their reasoning.
- **Design AI to help learners revise and constrain, not just expand.** Many [[generative-ai]] tools emphasize generating alternatives; this study shows an agent that enacts constructive conflict can be more valuable for *subtractive* work — recognizing what to revise or drop — which matters in assessment, argumentation, and design tasks.
- **Anticipate the emotional cost of conflict.** Productive friction is not uniformly pleasant; some learners may feel discouraged. Pair adversarial agents with interaction scaffolds that let students accept, revise, or discard pushback, and calibrate tone to the learner's [[student-experience|experience]] and confidence.
- **Do not substitute synthetic critique for human/stakeholder input.** In educational contexts, agent-generated counter-perspectives should surface questions for learners to verify against real evidence or human feedback — never be treated as ground truth.
- **For novice learners, scaffold the move from awareness to action.** The finding that unsupported novices never revised their ideas highlights the need for external prompts (human or agentic) that make the *costs* of keeping an idea visible and turn reconsideration into concrete edits.

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
