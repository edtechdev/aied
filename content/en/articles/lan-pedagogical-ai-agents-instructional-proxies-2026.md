---
title: "Pedagogical AI Agents as Teacher-Authored Instructional Proxies: Conceptualization and Illustrative Design"
created: "2026-11-14T05:49:00-05:00"
updated: "2026-11-14T05:49:00-05:00"
type: article
sources: ['raw/papers/lan-pedagogical-ai-agents-instructional-proxies-2026.md']
source_url: "https://doi.org/10.1016/j.caeai.2026.100692"
source_depth: full text
confidence: high
evidence_context: educational
research_method: [position paper]
page_kind: [framework]
foundations: [agency, teacher-role, human-ai-collaboration]
pedagogy: [scaffolding, student-ai-interaction]
technology: [pedagogical-agent, generative-ai, educational-robotics, ai-avatars-and-synthetic-instructors]
assessment: [formative-assessment, evaluative-judgment]
ethics: [pedagogical-safety, privacy]
audience: [instructors, instructional designers, administrators, researchers]
level: [k 12, higher ed, adult learning]
discipline: [language learning, learning sciences]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-14"
    agent: hermes-agent
---

> **Synthesis:** Lan and Chen argue that AI agents are entering classrooms faster than frameworks that keep teachers in charge of the pedagogy those agents enact. Their answer is the teacher-authored instructional proxy: an agent whose objectives, sequence, feedback, and assessment criteria a teacher specifies rather than a model default. Three principles carry it: a five-layer architecture separating teacher decisions from [[generative-ai|generative AI]] execution, a single-learning-objective rule, and a teacher-digital-twin relation that survives a change of embodiment, all held by a fidelity model of tolerances, review, and override. Xiaokaibi, a photo-sharing agent for older adults, shows the principles applied and one configuration rejected.

*Conceptual paper: the authors propose a design framework illustrated with one worked case. No data were collected or analyzed, the Xiaokaibi activity was a community-service program rather than a study, and no learning or usability outcomes are reported. It is offered for validation, not as a tested intervention.*

## Key Findings

1. **Teachers should author the instructional logic, not consume AI output.** Generating plans makes a teacher an editor of products; authoring an agent means specifying the reasoning that governs an interaction.
2. **A five-layer architecture separates teacher decisions from generative AI execution.** Four operational layers sit under a governance envelope, each pairing a decision with a mechanism that runs it.
3. **One agent should carry one learning objective.** Widening the remit multiplies conditions to anticipate and lets one function's logic contradict another.
4. **A teacher digital twin is a relation, not a device.** Authority must be traceable to, constituted by, and bounded by one teacher's design: provenance, responsibility, constitution, function.
5. **One design crosses embodiments only if an invariant kernel survives.** Objective, phases, branches, criteria, persona, tone prohibitions, and variables stay attributable to the same teacher.
6. **Fidelity is bounded and teacher-set.** Five dimensions carry tolerances, and detection is separated from interpretation so ambiguous cases reach a human.
7. **The worked case licenses rejection as well as adaptation.** Three Xiaokaibi configurations are accepted; the tangible-object version is refused for lack of a meaningful object mapping.

## Two design problems

The paper is a model-type conceptual design in Jaakkola's sense. Sources were chosen purposively from teacher-agency work, instructional design, and human-centered AI, and three cases illustrate: a training program where teachers mistook authoring for programming, a robot-based kindergarten activity, and Xiaokaibi.

Two challenges organize the argument. Articulation: expertise includes tacit judgments about when to prompt, explain, model, withhold help, or assess, and authoring requires decomposing them into observable rules. Scope is its second facet: teachers who grow comfortable with specification enlarge one agent until its purposes conflict. Adaptation is the second challenge: many settings cannot supply a robot for every learner.

## What the five layers assign to whom

The pedagogical design layer holds objectives, activity order, assessment criteria, and excluded purposes. The interaction layer holds branching rules, persona, tone, and repetition limits. The capability layer decides which approved knowledge the agent may draw on, such as retrieval over teacher-supplied materials. The orchestration layer governs tool permissions, state variables, and the deployment adapter. The governance envelope applies quality, safety, privacy, and educational criteria across the whole cycle.

Technical and pedagogical autonomy stay distinct: the first is infrastructure's discretion in executing a configured task, the second is what is taught, how, and when. Teachers configure rather than build, test against scripted and off-task inputs, and release only after approval. Revision returns to the affected layer; the runtime cannot authorize its own correction.

## When an agent counts as a teacher's twin

The instructional proxy is the broad category: an agent performing a bounded teaching service a teacher cannot provide at scale. The twin is narrower. Provenance requires an inspectable trail to a specific teacher; responsibility keeps professional accountability there; constitution requires judgment translated into specifications others can inspect, test, and revise; function requires extending capacity for individualized support without relocating authorship to the model.

This is not the engineering sense in ISO 23247, where a representation tracks a physical counterpart continuously. No sensor stream runs from teacher to agent; the connection is derivation and delegation. Content provenance is not required for every utterance: a model may generate wording under a teacher-authored pathway, criteria, branches, and feedback policy. An agent built from platform defaults could be a proxy, but not a twin.

## Fidelity, escalation, and the right to reject

Fidelity means conduct stays within teacher-set tolerances on objective and sequence adherence, persona and tone, evaluative consistency, and content boundaries. It is not binary: safeguarding rules and prohibitions on demeaning language warrant near-zero tolerance, while wording may vary if objective, sequence, evaluative rule, and feedback policy hold. Automated checks surface off-topic turns, phase-order violations, or prohibited content, but cannot judge whether feedback was appropriate, so ambiguous cases go to a human. Review happens at design time, pre-deployment, in session, and after. Override is graded: the agent re-prompts only where authorized in advance, otherwise it defers to a facilitator who may take over or pause. Only the teacher can accept a deviation or approve a revision.

Xiaokaibi's kernel is an oral-narration objective, four phases, on-topic branches, a child persona, tone prohibitions, and a variable schema. Robot plus tablet, virtual robot, and character-free screen preserve it and are accepted; the tangible-object version is not, because instrumented objects add motor and attentional demands without advancing the link between photograph and story. [[educational-robotics|Robot embodiment]] is a delivery choice, not the twin's identity.

## What this means for practice

- **Instructors:** Write the specification as teaching decisions, not prompts: one objective, the phase order, branch conditions, what counts as on-topic, and what the agent must never do. Test with ordinary, ambiguous, and off-task inputs before learners meet it.
- **Instructional designers:** Keep one function per agent and add a coordinating agent rather than widening scope. Record which elements are the invariant kernel and which are surface adaptation, so a device change cannot quietly become a pedagogy change.
- **Administrators:** Treat device availability as a design constraint, not a procurement detail. Fund the review time that fidelity requires, and let teachers suspend an agent whose behavior leaves its approved bounds.

## Limitations

- The framework is proposed, not tested: no new empirical work is reported, and claims about agency, fidelity, and learning outcomes remain open.
- The cases come from one cultural setting and one authoring platform, so architectural features may partly reflect platform affordances.
- Continuity across embodiments is argued conceptually and shown for one agent; whether a twin survives adaptation awaits comparative study.
- The framework presumes design capacity many teachers lack; its equity argument covers hardware but not connectivity, cost, accessibility, language, or data governance, and binding an agent to a prior design constrains learner agency.

## Connected Concepts

- [[pedagogical-agent]]: the design object, an agent whose instructional logic a teacher specifies
- [[agency]]: authorship versus supervision when generative systems execute pedagogy
- [[teacher-role]]: from producing materials to specifying the reasoning that governs interaction
- [[human-ai-collaboration]]: separating teacher decisions from automated execution at each layer
- [[educational-robotics]]: physical embodiment as one delivery configuration among several
- [[ai-avatars-and-synthetic-instructors]]: virtual and animated embodiments of the same teacher design

## Connected Articles

- [[activity-theory-teacher-pd-ai-agent-design-2026]]: how teacher professional development handles the same authoring problem
- [[ai-tpack-teacher-multi-agent-workflow]]: teachers designing multi-agent workflows in practice
- [[caee-digital-twins-stem-education-systematic-review-2026]]: the engineering sense of digital twins that this framework departs from

## Citation

Lan, Y.-J., & Chen, N.-S. (2026). [*Pedagogical AI Agents as Teacher-Authored Instructional Proxies: Conceptualization and Illustrative Design*](https://doi.org/10.1016/j.caeai.2026.100692). *Computers and Education: Artificial Intelligence*, 100692.
