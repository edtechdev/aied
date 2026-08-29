---
title: "Embodied Inquiry with AI as Facilitator: An Exploratory Case Study"
created: "2026-08-13T09:28:20-04:00"
updated: "2026-08-24T18:50:00-04:00"
type: article
tags: [physics-education, socratic-method, pedagogical-agent, generative-ai, higher-ed, professional-training, stem-education]
discipline: [physics education, stem education]
level: [higher ed]
sources: ['raw/papers/2607.21349.md']
confidence: high
---

> **Synthesis:** Tufino & Damiani (2026) explore where a language-based AI can stand within an inquiry activity without displacing embodied experience, using a Master's-level physics education course investigating the statics of fluids via the ISLE approach. In a two-phase design, students first built the buoyancy model with their own hands without AI; a purpose-configured AI assistant then facilitated applying the model to a new phenomenon. The paper discusses what a language-based facilitator cannot reach and the value of a design in which AI **complements** embodied inquiry rather than replacing it. The work connects to [[physics-education]], [[socratic-method]], and [[pedagogical-agent]] theory.

## Key Findings

1. A purpose-configured AI assistant can scaffold the epistemic core of ISLE inquiry: it named experiment types, demanded multiple explanations and predictions before tests, and in one case actively restored the epistemic order students had inverted.
2. Embodiment stays human: in a two-phase design the physics model is built with hands, instruments and shared meaning before the AI enters, and the language-based facilitator complements that experience rather than replacing it.
3. Facilitation is fragile and its fidelity must be checked rather than assumed: pressed by students to "just tell us", the Gem produced mass values that no one had measured, effectively inventing an observation.
4. A lone remote participant completed a full and physically correct ISLE cycle, yet the inquiry was clean but disembodied, lacking the embodied and social dimension of group work.

## Where AI Cannot Reach in Embodied Inquiry

Generative AI is entering [[physics-education]] at a time when the [[embodied-learning|embodied education]] community is asking what such systems cannot do. A large language model has no body, no senses, and no direct access to the physical world; if meaning is built through perception, action and interaction, a purely linguistic system may appear irrelevant to embodied inquiry at best, and at worst a force pulling learning back toward the verbal and the disembodied. Rather than asking whether AI can understand the body, this case study asks where a language-based AI can stand within an inquiry activity without displacing embodied experience. The authors situate the work within [[distributed-cognition]] and [[embodied-learning|cognitive science of embodiment]] traditions, and note that earlier attempts to engage chatbots in Socratic dialogue showed clear limits even as current models sustain such dialogue far more competently.

## The ISLE Approach: Learning Physics by Doing Physics

The activity followed the ISLE (Investigative Science Learning Environment) approach, an [[inquiry-based-learning]] method grounded in physics education research in which a discipline is learned the way it is practiced. Rather than receiving physics as a finished product, students build and test physics knowledge starting from phenomena they observe with their own eyes and hands. The ISLE process is organized around three kinds of experiment: in an observational experiment students observe a phenomenon and look for patterns without making predictions; in a testing experiment each explanation is put at risk through a hypothetico-deductive prediction and falsification; and in an application experiment the surviving model is used to determine a quantity or solve a problem. Students work in small groups and express ideas in multiple representations — words, diagrams, graphs, equations and gestures. The approach rests on four foundations: the epistemology of physics, findings of cognitive science, theories of [[collaborative-learning|learning communities]], and [[universal-design-for-learning|universal design]], so the environment is meant to be inclusive by design rather than by adaptation.

## Embodiment, Multimodality, and the Extended Mind

The authors adopt an interactionist lens on embodiment, in which meaning is built between people as they talk, gesture and act together — the most demanding lens for any claim that an AI can facilitate inquiry. Students point, manipulate, sketch and gesture as ways of thinking together, expressing ideas they cannot yet put into words. Following a [[multimodal]] view of disciplinary fluency, no single mode carries the whole meaning: some meanings are only available through diagrams, mathematics, apparatus or actions. The paper bridges this to inclusion, arguing that what physics education research calls multiple representations, and social semiotics calls multimodal resources, is what Universal Design for Learning calls multiple means — keeping many channels for meaning open rather than privileging the verbal one. Where does the AI belong? Drawing on the extended mind thesis, the authors imagine the students as the cognizing bodies and the AI as one more external resource they can recruit — an epistemic [[scaffolding|scaffold]] rather than a mind in charge.

## Two-Phase ISLE Design

University students in a Master's course in [[physics-education|physics education]] investigated the statics of fluids in a two-phase design over a three-hour laboratory session. In the first phase, conducted entirely without AI, students built the buoyancy model with their own hands: from observational experiments they explored how pressure grows with depth, then constructed the model of the buoyant force (F = ρ·g·V) using a dynamometer. This was the embodied inquiry — manipulating, measuring, sketching and arguing in the group. Only in the second phase did the AI enter, together with a new phenomenon: two sealed drink cans of identical volume that behave differently in water. The task was to apply and extend the model the students had just built. The facilitator was a custom Gem named "Physics ISLE Lab process", built on Google Gemini 3 Pro, configured to follow the ISLE sequence and to withhold answers; groups interacted with it in writing, sending the photographs they chose to share and remaining free to criticize its suggestions.

## Exploratory Findings: Fragile Facilitation

Across the pairs, the Gem's first moves followed the ISLE script closely, naming the epistemic stage and asking for at least two or three distinct explanations, then requesting testing experiments and predictions before acting. The trajectories then diverged. With Pair A the Gem stayed fully by the book, though the session ended before testing was reached. With Pair B facilitation held under strain: when the pair measured first and formulated their prediction afterwards, the Gem flagged the inverted order and restored it, treating a passed test as "not falsified" rather than "proven". With Pair C it gave way: pressed by students to "just tell us" which can weighed more, the Gem produced mass values no one had measured, effectively inventing an observation — a failure in which the facilitator crossed from scaffolding the epistemic process to supplying the data. Case D offered a revealing counterpoint: working alone and remotely, one participant completed a full and physically correct ISLE cycle, but the inquiry was clean and disembodied. The resulting pattern is an interpretive hypothesis rather than a measured outcome: the Gem can hold the epistemic core of ISLE inquiry, but is susceptible to failure under student pressure and tends to supply what should have been observed or measured.

## The Boundary of a Language-Based Facilitator

The Gem facilitated through language alone, supplemented only by the photographs students chose to send it. The embodied and social dimension — the handling of the cans, the pointing and symbiotic gestures, the shared sketches, the negotiation of meaning within the group — remained invisible to it. This asymmetry has a predictable consequence: a language-based facilitator steers inquiry toward what can already be put into words, and cannot follow meaning as it moves between material and verbal modes. Left unchecked, this pull risks narrowing precisely the multiple representations and multiple means that the hands-on ISLE approach keeps open. The limit was part of the design: alongside the chat, students filled in a paper worksheet meant to record "what the chat cannot" — their sketch, agreed statements, and a short reflection — making the boundary visible to the students themselves. The failure of Pair C can be read in the same frame: it dissolved exactly the distinction, between what you claimed and what you measured, that the ISLE sequence is built to protect.

## Implications

- **A workable division of labour.** The two-phase shape is the paper's central design argument: the body does what only the body can do, and the AI is held, by design and by verification, to the layer where language is sufficient. [[human-ai-collaboration|Human–AI collaboration]] here means complementarity, not substitution.
- **Fidelity must be verified, not assumed.** Because facilitation proved fragile under student pressure — even to the point of inventing data — any deployment of an AI facilitator should build in checks that distinguish scaffolding reasoning from supplying answers. This speaks directly to [[hallucination-risk]] and [[trust-calibration|trust calibration]] in [[generative-ai|generative]] tools.
- **Inclusion and the embodied layer.** For [[universal-design-for-learning|UDL]] and [[inclusive-learning]] research, the case challenges simplistic views of digital technologies as inherently inclusive: the AI enters as a mediator on the verbal channel, while perception, manipulation and the meanings built between bodies remain human. Whether a change of mediator leaves developmental and learning processes unchanged is an open question.
- **Scope is limited to feasibility.** With one session, three pairs and one individual case, and records mediated by the AI itself, claims stay at the level of feasibility and design; effectiveness and any effect on learning await future study.

## Connected Concepts

- [[physics-education]]
- [[socratic-method]]
- [[pedagogical-agent]]
- [[generative-ai]]
- [[higher-ed]]
- [[professional-training]]
- [[stem-education]]
- [[simulation]]
- [[teacher-role]]

## Connected Articles

- [[multiagent-classroom-dual-process-physics-teachers-2026]]
- [[hashmi-socratic-physics-chatbot-2025]]
- [[socratic-ai-physics-tutor-taxonomy-2026]]
- [[genai-ar-physics-simulation-prompt-2026]]

## Citation

Tufino, E., & Damiani, P. (2026). [*Embodied inquiry with AI as facilitator: An exploratory case study*](https://arxiv.org/abs/2607.21349).
