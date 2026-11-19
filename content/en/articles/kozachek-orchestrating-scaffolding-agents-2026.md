---
title: "Orchestrating Scaffolding AI Agents: Design Principles for Mechanism-Specific Learner Support"
created: "2026-11-19T13:35:00-05:00"
updated: "2026-11-19T13:35:00-05:00"
type: article
evidence_context: educational
source_url: "https://doi.org/10.1007/978-3-032-28313-9_11"
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-19"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [cognitive-offloading]
pedagogy: [scaffolding, metacognition, reflection]
technology: [llm, pedagogical-agent]
methods: [design-based-research, qualitative-research]
audience: [instructors, instructional designers, researchers]
research_method: [design and evaluation study, interviews]
level: [higher ed]
discipline: [business education]
sources: ['raw/papers/kozachek-orchestrating-scaffolding-agents-2026.md']
confidence: medium
page_kind: [design case]
---

> **Synthesis:** Kozachek and Janson (2026) argue that a single general-purpose AI agent cannot scaffold well, because good [[scaffolding|scaffolding]] means giving a different kind of help at each stage — conceptual, procedural, strategic or metacognitive — and one agent answers every request the same way. They built a prototype in which a lead orchestrator hands each round to a specialist sub-agent, keeps a persistent profile of what the learner has demonstrated, and grounds its help in verified course materials. In a concept-mapping task, the order in which the specialists appeared predicted how much learners added to their maps: the metacognitive agent going first produced the most new concepts, and the conceptual agent going last produced almost none. Their point is that sequencing is a design decision, not an implementation detail.

*This is a design case, not an outcome study: the evaluation is formative, with expert and student judgment plus an automated analysis of scaffold delivery. No summative learning outcome was measured.*

## Key Findings

- **One agent cannot scaffold well.** Generic AI agents deliver the same kind of answer to every request, which the authors' interviews found pushes novices toward copy-pasting rather than sustained reasoning.
- **Split the mechanisms, then decide the order.** The prototype assigns one specialist agent to each scaffold type and lets an orchestrator sequence them; when the metacognitive specialist came first and the conceptual one last, learners added far more to their concept maps.
- **Early scaffolding captured attention that later scaffolding did not.** The authors call this a primacy effect and treat it as evidence that delivery position, not just scaffold choice, drives behavior.
- **Memory across sessions is what makes fading possible.** A persistent learner profile lets support decrease as competence grows, which single-session agents cannot do because they forget the previous conversation.
- **Grounding in course materials is a design requirement, not a feature.** Teachers and learners both wanted help tied to what the course actually covers, and educators wanted visibility into when the system fades support.

## What the study built

The setting is the two-semester qualification phase of a management program at a European business school, where students must integrate material across subjects into coherent analyses. The authors began with 32 semi-structured interviews with students who had completed that phase, then mapped what those students asked for onto the four scaffold types the literature distinguishes: conceptual help that clarifies frameworks, procedural help that shows how to navigate tools and resources, strategic help that breaks a task into steps, and metacognitive help that prompts planning and reflection.

Two interview observations set the requirements. Students working with general-purpose agents copied answers without reflecting on their own learning, and they had to re-prompt from scratch every session because nothing carried over. That produced four design requirements (adaptive explanations, task decomposition, curriculum-grounded scaffolds, pattern-based reflection prompts) and three design principles:

- **DP1, orchestrated multi-agent coordination.** A lead orchestrator delegates to specialist sub-agents by scaffold type, so a learner moving from noticing a gap to closing it does not fall out of the system between steps.
- **DP2, adaptive learner profiling.** Persistent profiles track demonstrated understanding and learning patterns across sessions, which is what allows support to fade.
- **DP3, continuous institutional knowledge integration.** A resource connector ties scaffolds to verified course material, and an educator dashboard exposes fade-out timing so a teacher can intervene when the system misreads readiness.

The prototype is a hierarchical multi-agent system built on Python, Streamlit, MongoDB and Cytoscape, with an LLM generating agent responses. The task was a concept-mapping exercise on a fictional market-entry case, chosen so that no online source and no general-purpose agent could supply the answer.

## How it was evaluated

Evaluation ran in four stages, and only the last produced behavioral data. Twenty-two information-systems experts worked through the prototype and flagged more than 20 interface barriers, then rated whether the features operationalized the principles. Six educators blindly classified agent outputs by scaffold type, and only prompts that were classified consistently were kept; they then rewrote the prompt templates to be more contextual. Thirty-four first-semester students took part in a focus group, where the simultaneous novelty of interface, task and agents caused information overload, and expectations carried over from ChatGPT limited how far some engaged with reflective prompts.

The behavioral analysis took 153 agent–learner interactions from the condition in which the metacognitive agent came first. An LLM-based classifier coded each response by scaffold act and mechanism (mean confidence 0.93), and mixed-effects models with random intercepts by session predicted concepts added per round, with bootstrap resampling over 1,000 iterations.

Delivery position was the strongest predictor. The metacognitive agent, delivered first, produced a mean growth of 2.66 concepts per round (SD 3.50, n = 31, 95% CI [1.24, 1.91], the only interval excluding zero). The strategic agent, second, produced 1.40 (SD 2.81, n = 23); the procedural agent, third, 0.84 (SD 2.79, n = 48); and the conceptual agent, last, 0.43 (SD 1.15, n = 51). The difference between the best and worst position was large (Cohen's d = 0.96).

## What this means for practice

- **Instructors.** Decide what kind of help a task needs at each stage before choosing a tool, and put the reflective prompt first: asking learners to notice what they do not yet understand is what made the later explanations land.
- **Instructional designers.** Treat sequencing as part of the design. A system that offers conceptual explanation first and reflection last is not the same intervention as one that reverses them, even with identical content.
- **Learning engineers.** Keep learner state across sessions rather than resetting each conversation; fading support is impossible without a record of what the learner has already demonstrated.
- **Program leaders.** Require that AI help be grounded in approved course material, and give teachers a view of when support is being withdrawn rather than only what students asked.
- **Researchers.** Measure delivery position as a variable. Studies that report a scaffold's average effect without saying when it was delivered cannot separate mechanism from order.

## Limitations

- **The evaluation is formative.** Experts and students judged validity and utility, and an automated classifier checked that scaffolds were delivered as designed; no summative learning outcome was measured, so the design principles rest on a demonstration rather than on evidence that learning improved.
- **One sequence was analysed.** The behavioral data come from the metacognition-first condition, so the primacy effect was observed in a single ordering and needs replication across sequences before it can be treated as a general rule.
- **Novelty confounded the focus group.** Interface, task and agents were all new at once, which the authors report as information overload; the student feedback therefore says more about first contact than about scaffold reception.
- **Single institution, small samples.** The interviews came from one European business school, with 22 experts, 6 educators and 34 students, and institutional integration was demonstrated under controlled rather than production conditions.
- **The classification is model-mediated.** Scaffold mechanisms were identified by an LLM-based judge, so the mechanism labels inherit whatever bias the classifier carries.

## Citation

Kozachek, D., & Janson, A. (2026). [Orchestrating Scaffolding AI Agents: Design Principles for Mechanism-Specific Learner Support](https://doi.org/10.1007/978-3-032-28313-9_11). In *Design Science Research in Information Systems and Technology (DESRIST 2026)* (pp. 191–208). Springer.
