---
title: "Agentic AI in Education: State of the Art and Future Directions"
created: "2026-09-04T14:03:07-04:00"
updated: "2026-09-04T14:03:07-04:00"
type: article
tags: [agentic-ai, intelligent-tutoring, generative-ai, llm, human-in-the-loop-ai, ethics, governance, higher-ed]
research_method: [systematic review, position paper]
category: [ai foundations]
sources: ['raw/papers/kostopoulos-agentic-ai-education-2025.md']
confidence: high
---

> **Synthesis:** This [[meta-analysis-systematic-review|narrative synthesis]] (2015–2025) of [[agentic-ai|agentic AI]] in education provides a definitional and conceptual scaffold for a fragmented field. It **operationalizes "agentic"** via a six-criterion checklist (autonomy, reasoning, memory, planning, goal-directed action, learning/adaptation) requiring at least four criteria to qualify — excluding reactive [[conversational-ai|chatbots]] — and organises the space along three axes: **pedagogical role, autonomy level (reactive → adaptive → proactive → collaborative), and embodiment** (text-based, avatar/graphical, embodied/robotic). It reviews benefits ([[personalized-learning|personalization]], [[motivation]], teacher assistance) against challenges ([[cognitive-offloading|over-scaffolding]], opacity, [[bias-mitigation|bias]], equity) and charts future directions toward pedagogically-aware, interoperable, explainable, and ethically governed agents — arguing agentic AI should be a human-AI [[human-ai-collaboration|co-teaching]] partner, not a teacher replacement.

## Core Contribution: An Operational Definition of Agentic AI

A central gap the survey addresses is that "agentic AI" is used loosely. The authors propose a **six-criteria operational checklist** — a system counts as agentic if it meets **at least four**: (1) autonomy (action independent of continuous human intervention), (2) reasoning/planning, (3) memory/context-awareness, (4) goal-directed action toward [[learning-gains|learning outcomes]], (5) adaptability to changing learner context, and (6) dynamic collaboration/initiative. The ≥4 threshold is designed to capture the minimum combination of autonomy, reasoning, memory, and action needed for goal-directed educational behaviour while **excluding reactive chatbots** (e.g., a static FAQ bot without planning or persistence would not qualify). A tutoring system that plans multi-turn lessons, remembers learner progress, triggers prompts autonomously, and gives [[formative-assessment|formative]] feedback would qualify.

## A Taxonomy: Role × Autonomy × Embodiment

The survey classifies agentic [[ai-education|AI in education]] along three axes:

- **Pedagogical role:** tutors (grounded in the [[intelligent-tutoring|ITS]] legacy but adding proactive scaffolding and adaptive strategy transition); learning coaches/mentors that build [[metacognition|metacognitive]] and [[affective-computing|affective]] skills aligned with [[self-regulated-learning|self-regulated]] and socio-emotional learning; companion agents for conversational co-construction; instructors' assistants (grading, summarizing, flagging at-risk students, recommending interventions); and [[curriculum-design|curriculum]] planners/designers that suggest personalized trajectories.
- **Autonomy level:** a spectrum from **reactive** (respond only, no memory — rule-based chatbots) → **adaptive** (learner-model-based short-term [[feedback|feedback loops]]) → **proactive** (goal-directed, set sub-goals, replan, provide cross-interaction continuity → dynamic [[scaffolding]]) → **collaborative** (joint task execution and decision-making with humans or other agents, most common in [[pedagogical-agent|multi-agent]] contexts).
- **Embodiment/interface modality:** **text-based** [[llm]] agents (platform-independent, low barrier, scalable); **avatar/graphical** agents that raise [[community-of-inquiry|social presence]] and emotional involvement; and **embodied** agents (classroom [[educational-robotics|robots]] or AR/VR agents) enabling spatial, gestural, and kinesthetic interaction.

## Benefits and Applications

Agentic systems move from task-specific executors to proactive, context-sensitive collaborators. Documented benefits include deeper personalization over extended interactions, adaptive practice, unburdening instructors of routine work (grading, monitoring, recommending interventions), richer [[multimodal]] interaction, and scalable [[simulation]] for low-risk practice. The survey notes students respond more favourably to socially present agents when their appearance aligns with [[pedagogy|pedagogical]] goals and cultural norms.

## Challenges, Risks, and Mitigations

The survey translates pedagogical risks into concrete mitigations with measurable [[guardrails]]:

- **Pedagogical misalignment and over-scaffolding:** agents giving feedback inconsistent with learning goals, or intervening too frequently, create dependency and reduce [[problem-solving]] and self-[[regulation]]. **Mitigation:** [[scaffolding|fading]] protocols that gradually reduce hints (e.g., target a [[help-seeking]] ratio below 0.3) and regular alignment audits against course objectives.
- **Opacity and low trust:** opaque 'black-box' reasoning undermines learner and teacher confidence and blocks validation. **Mitigation:** explainable feedback ("Why this suggestion?"), timestamped decision-traceability logs for instructional auditing, and confidence indicators.
- **[[bias-mitigation|Bias, fairness, and cultural sensitivity]]:** LLM- and multimodal-based agents can replicate and amplify gender, racial, socioeconomic, linguistic, and cultural bias. The survey emphasizes diverse training data, fairness audits, and cultural grounding.
- **Privacy and [[equity-in-ai-education|equity]]:** autonomous agents raise data-[[governance]] concerns, and uneven access risks widening [[digital-divide|digital divides]].

## Future Directions

The survey charts [[research-methods-aied|research]] and policy directions: (1) **pedagogically-aware agents** grounded in [[learning-theories|learning theory]] ([[constructivist|constructivism]], cognitive load, self-regulated learning) rather than surface conversation fluency, developed via interdisciplinary AI–learning-science collaboration; (2) **interoperable, modular, open platforms** with well-documented APIs and standards, to counter siloed proprietary systems that reinforce inequity; (3) **multimodal and [[embodied-learning|embodied learning]] experiences** (VR/AR, robots, multimodal feedback and assessment); (4) **[[human-ai-collaboration|human-AI co-teaching]] and hybrid classrooms** where agents handle personalized practice and feedback while instructors own classroom dynamics and second-order pedagogical decisions; (5) **evaluation and benchmarking** frameworks that measure pedagogical quality and longitudinal learning gains, not just language performance; and (6) **[[ethics|ethical]] governance and policy frameworks** — transparent data policy, participatory design with students/teachers/parents/administrators, and international cooperation on accountable, auditable deployment. Throughout, the authors argue **people-centred values, ethical stewardship, and [[human-in-the-loop-ai|human-in-the-loop]] safeguards** (instructors monitoring, revising, or overriding agent output) are essential.

## Significance to the Knowledge Base

This survey offers the field a much-needed **definitional and taxonomic anchor** that complements the knowledge base's empirical [[agentic-ai-education-scoping-review|scoping review]]: where Wang et al. map the research landscape and capability levels across 474 studies, Kostopoulos et al. supply the conceptual apparatus (operational checklist + role/autonomy/embodiment taxonomy) for classifying and designing agentic systems, and a systematic statement of the design tensions between automation and learning.

## Connected Concepts

- [[agentic-ai]] — the construct the survey defines, classifies, and reviews
- [[intelligent-tutoring]] — agentic tutors as the ITS legacy extended
- [[human-ai-collaboration]] — collaborative agents and human-AI co-teaching
- [[human-in-the-loop-ai]] — the safeguarding principle for agent autonomy
- [[scaffolding]] — proactive scaffolding and fading protocols
- [[self-regulated-learning]] — coach agents and the metacognitive dimension
- [[cognitive-offloading]] — over-scaffolding and learner dependency risk
- [[metacognition]] — coach/mentor agents building metacognitive skills
- [[conversational-ai]] — reactive chatbots excluded by the agentic criteria
- [[bias-mitigation]] — bias, fairness, and cultural sensitivity
- [[equity-in-ai-education]] — access, digital divide, and participatory design
- [[educational-policy-ai]] — governance and policy frameworks
- [[ai-ed-evaluation]] — pedagogical evaluation and benchmarking
- [[generative-ai]] — the LLM substrate of most agentic systems
- [[pedagogical-agent|multi-agent]] — collaborative and multi-agent environments
- [[trust]] — transparency and explainability build trust
- [[privacy]] — data governance in autonomous systems

## Connected Articles

- [[agentic-ai-education-scoping-review]] — scoping review mapping 474 agentic AI studies (Wang et al. 2026)
- [[agentic-ai-pedagogical-best-practice-2026]] — the automation-versus-learning tension
- [[tool-invariant-framework-agentic-ai]] — teaching and assessing in the agentic age
- [[agentic-literacy-debt]] — the structural AI-literacy gap from autonomous agents
- [[astra-multi-agent-tutoring-benchmark-2026]] — multi-agent tutoring benchmark
- [[jeon-isd-agent-bench-2026]] — benchmarking instructional-design agents
- [[bozkurt-ghost-students-agentic-ai-2026]] — ghost students and the agentic-AI verification gap

## Citation

Kostopoulos, G., Gkamas, V., Rigou, M., & Kotsiantis, S. (2025). [*Agentic AI in education: State of the art and future directions*](https://doi.org/10.1109/ACCESS.2025.3620473). *IEEE Access, 13*, 177467–177491.
