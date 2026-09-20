---
title: "SupplyNet: Supporting Visual Exploratory Learning in Supply Chain via Contextual Multi-Agent Simulation"
created: "2026-06-24T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
pedagogy: [active-learning, professional-training]
technology: [generative-ai, intelligent-tutoring, llm, simulation, visualization]
research_method: [system development, user study]
sources: ['raw/papers/2606.24694.md']
confidence: high
discipline: [business education]
audience: [instructional designers, designers]
level: [adult learning]
---

> **Synthesis:** SupplyNet is a [[game-based-learning|gamified]] visual simulation system that uses a contextual graph-based [[llm]] multi-agent framework to model interdependent supply chain dynamics. Designed for [[professional-training]] in supply chain management (SCM), it replaces traditional abstract [[simulation|simulations]] with a manipulable decision space combining an interactive network view, a branching timeline for "what-if" exploration, and a task-oriented analysis console.

## Key Features

**LLM-driven agents** model realistic supplier, manufacturer, distributor, and retailer behaviors, responding adaptively to learner decisions. This moves beyond scripted simulation scenarios to generate emergent, context-sensitive dynamics.

**Visual exploratory learning** is supported through three integrated components: an interactive network view showing real-time system state, a branching timeline enabling counterfactual comparison, and a task-oriented console for structured performance breakdowns. Together these support causal tracing and comparative reasoning.

**User study results** suggest SupplyNet increases [[student-engagement|engagement]] and supports perceived understanding of supply chain dynamics, demonstrating the potential of pairing contextual multi-agent simulation with [[visualization]] for [[active-learning]] in operational domains.

## What this means for practice

- **Designers.** Ship layered support rather than one information density. In the user study, novices relied on immediate visual cues such as color saturation in the Timeline Tree Map, while advanced participants went straight to the Analysis Console and found the visuals secondary, so the same screen cannot serve both groups.
- **Designers.** Make counterfactual history a first-class feature: participants valued revisiting earlier decisions and testing alternatives without irreversible penalty, which is what the branchable Timeline Tree Map provides.
- **Instructors.** Set a task goal that forces causal reasoning. Playing to maximize profit under a think-aloud protocol made the link between decisions and outcomes visible — 13 of 14 participants rated SupplyNet highly on connecting decisions to performance, against 3 for the baseline.
- **Designers.** Budget onboarding time for multi-view systems: participants received a 15-minute interactive tutorial covering the Graph Structure View, Timeline Tree Map, and Analysis Console before a 30-minute task session.
- **Designers.** Treat the framework as transferable only with domain partners. Adapting it to subjects like public health or urban planning requires collaborating with domain instructors to validate the graph schema, transition rules, agent behavior, event design, and assessment metrics.

## Limitations

- The user study recruited 14 participants (4 female, 10 male, aged 21–28) via university platforms, all with foundational supply chain knowledge, so the findings concern perceived usability, engagement, and learning support in a student sample rather than measured learning outcomes.
- Evaluation rests on self-report: a five-point Likert questionnaire and semi-structured interviews after two roughly 90-minute sessions, with no delayed post-test of what participants retained or transferred.
- The comparison covers one domain and a single baseline simulation (the HBS Beer Game), and the authors state cross-subject deployment still needs domain-specific graph schemas, agent heuristics, and performance metrics to be defined with instructors.
- Computational cost scales with the agent count, and the authors note that while simulation cost at the current scale is acceptable, it could become a concern in custom mode as network size grows.

## Connected Concepts

- [[llm]]
- [[professional-training]]
- [[active-learning]]
- [[intelligent-tutoring]]
- [[generative-ai]]
- [[stem-education]]
- [[simulation]]
- [[game-based-learning]]
- [[experiential-learning]]
## Connected Articles

- [[ai-vocational-education-training-review]] — Artificial intelligence in vocational education and training: A systematic review of educational purposes, theoretical conceptualizations, and empirical effectiveness
- [[ai-coaching-rl-skill-development]] — AI Coaching for Accelerating Human Skill Development with Reinforcement Learning
- [[flowcode-ai-creative-coding]] — Flowcode: An AI-Powered Programming Environment for Scaffolding Iteration in Creative Computing Education
- [[adaptive-virtual-patient-psychotherapy-training]] — The Empirically Grounded Adaptive Virtual Patient for Psychotherapy Training
- [[tibetcpr-ai-training-feedback]] — TibetCPR: A Multimodal Tactile Feedback System for CPR Training in High-Altitude Regions
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems

## Citation

Li, Y., Han, K. K., Hu, T., Cao, Y.-F., Qu, H., & Song, S. (2026). [SupplyNet: Supporting Visual Exploratory Learning in Supply Chain via Contextual Multi-Agent Simulation](https://arxiv.org/abs/2606.24694).
