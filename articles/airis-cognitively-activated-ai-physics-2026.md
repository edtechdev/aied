---
title: "It's Not the Tool, It's the Task: A Framework for Cognitively Activated AI Augmentation in Physics Instruction"
created: "2026-08-17T09:55:00-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
foundations: [human-ai-collaboration, learning-design]
pedagogy: [metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai]
research_method: [theoretical analysis]
discipline: [physics education]
sources: ['raw/papers/2601.13812.md']
confidence: high
audience: [instructors, instructional designers, curriculum designers]
level: [higher ed]
---

> **Synthesis:** Kuhn, Küchemann, Rakestraw, and Vogt (2026) argue that the central challenge of AI in [[physics-education|physics education]] is not cheating or tool selection but [[learning-design|instructional design]]. Responding to Kortemeyer's "boiling frog problem" — the risk that incremental accommodations to AI quietly erode students' [[student-engagement|engagement]] in epistemic practice — they propose **AIRIS** (Activate–Inquire–Reflect with Intelligent Support), a three-phase framework that structures student work before, during, and after AI use. Grounded in [[self-regulated-learning]], [[cognitive-offloading|Cognitive Load]] Theory, multiple external representations, and [[human-ai-collaboration|hybrid intelligence]], AIRIS keeps prediction, interpretation, and evaluation as non-delegable human tasks while allowing procedural computation to be delegated to AI. The authors illustrate the framework with a smartphone-acceleration elevator investigation and call for "withdrawal condition" experiments to test whether AIRIS-structured learning survives the removal of AI support.

## The boiling frog problem

The paper opens with the observation that multiple [[generative-ai|generative AI]] foundation models now solve introductory physics problems at expert level (e.g., near-perfect scores on physics finals and representation-translation tests). Because individual accommodations — allowing AI-generated plots here, AI-assisted explanations there — each seem reasonable in isolation, educational systems may adapt so incrementally that the foundational goal of learning physics is quietly abandoned. Kortemeyer calls this the "boiling frog problem": the danger is not incorrect results but the erosion of students' engagement in the epistemic practices that define scientific reasoning. The authors' answer operates at the level of classroom design rather than system-level policy.

## Learning physics as epistemic practice

Physics learning involves constructing models, coordinating representations, evaluating assumptions, and reflecting on uncertainty. The framework draws on four [[research-methods-aied|research]] traditions:

- **[[self-regulated-learning]] (SRL):** when AI silently performs key cognitive steps, the [[regulation|regulatory]] processes of planning, monitoring, and reflecting may be bypassed rather than supported.
- **Cognitive Load Theory (CTML):** reducing extraneous load supports learning, but eliminating germane cognitive effort undermines understanding.
- **Multiple external representations:** conceptual understanding emerges from coordinating representations (graphs, equations, verbal descriptions), not just translating between them.
- **[[human-ai-collaboration|Hybrid intelligence]]:** productive human–AI collaboration requires explicit role differentiation, with epistemic responsibility remaining human rather than delegated to the machine.

A central design principle: procedural execution (running an integration, generating a standard plot) may legitimately be delegated to AI, but predicting what a result should look like, evaluating whether AI output is physically meaningful, and diagnosing discrepancies remain irreducibly human epistemic tasks.

## The AIRIS framework

**AIRIS** = **Activate – Inquire – Reflect, with Intelligent Support.** It structures student activity in three phases around AI use:

1. **Activate (before AI): epistemic grounding.** Students predict outcomes, sketch expected relationships, identify variables, and estimate magnitudes — building a mental model and a reference point against which AI output will later be judged.
2. **Inquire (during AI): guided delegation.** Computational and representational tasks are delegated to AI, but students compare AI output against their own predictions, annotate discrepancies, and question assumptions (fitting ranges, smoothing choices). AI is an epistemic partner, not an answer generator.
3. **Reflect (after AI): epistemic responsibility.** Students explain the physical meaning of results, check consistency across representations, diagnose uncertainty and errors, and write a reflection making explicit what the AI contributed versus what they contributed.

The teacher's role shifts to that of designer and guardian of the task structure: selecting tasks that require genuine [[prior-knowledge]] activation, monitoring whether students critically compare AI output, and orchestrating reflection. AIRIS adapts existing inquiry cycles (5E, Predict–Observe–Explain) for AI, adding the Inquire phase's AI partnership and a Reflect phase that makes the human–AI division of cognitive work explicit.

## Classroom example: elevator ride in the Shard

The framework is illustrated with an introductory kinematics investigation: students analyze real acceleration data from a smartphone recorded during an elevator ride. Phase 1 has them sketch expected a-t, v-t, and s-t diagrams and reason about the relationships between representations; Phase 2 delegates [[visualization]] and numerical integration to AI while they estimate speeds by hand and compare; Phase 3 has them interpret slopes, check cross-representation consistency, identify sensor-offset/noise/drift limitations, and submit a written reflection on what the AI contributed. The authors note the same structure applies to any measurement-based phenomenon (bouncing ball, rolling cylinder, pendulum).

## Ethics by design

AIRIS is presented as a classroom-level response to the boiling frog problem: it prevents the hollowing-out of epistemic engagement by making prediction, evaluation, and reflection non-delegable components of every task. The authors connect this to the German [[ethics]] Council's warning against AI use that degrades learner competencies, and to evidence of "[[metacognition|metacognitive]] laziness" and uncritical acceptance of AI output. They stress that AIRIS is a design proposal, not yet an empirically validated intervention, and identify the decisive open question as the **withdrawal condition**: whether students who complete AIRIS-structured tasks retain the capacity to generate, evaluate, and coordinate representations when AI support is removed — a question that requires comparing AI-supported versus AI-withdrawn performance at scale.

## What this means for practice

- **Instructors.** Open every AI-supported investigation with prediction: have students sketch expected a-t, v-t, and s-t diagrams, identify variables, and estimate magnitudes before any tool is opened, so they hold a reference point against which AI output can be judged.
- **Instructors.** Delegate only procedural work during the AI phase — numerical integration, generating a standard plot — and require students to compare the output against their own predictions, annotate discrepancies, and interrogate choices such as fitting ranges or smoothing.
- **Instructors.** Close the task with an explicit accounting: a written reflection on what the AI contributed and what remained the student's, cross-representation consistency checks, and diagnosis of sensor offset, noise, and drift.
- **Designers.** Treat prediction, interpretation, and evaluation as non-delegable in the task structure, and adapt existing inquiry cycles (5E, Predict–Observe–Explain) rather than replacing them — AIRIS is an extension of those formats, not a new pedagogy.
- **Administrators.** Fund the teacher capability the framework assumes: selecting tasks that require genuine [[prior-knowledge]] activation, monitoring whether students critically compare AI output, and designing tasks that resist AI completion. The authors note current teacher preparation programs have not systematically addressed these competencies.

## Limitations

- AIRIS is presented by its authors as a design proposal grounded in learning-science principles, not an empirically validated intervention; the decisive test — whether students still generate, evaluate, and coordinate representations once AI support is withdrawn — has not been run.
- The framework is illustrated with a single kinematics investigation using smartphone acceleration data from an elevator ride. The authors assert the same structure applies to a bouncing ball, rolling cylinder, and pendulum without testing any of those cases.
- The motivating evidence comes from other work rather than this paper: foundation models solving introductory physics at expert level, documented metacognitive laziness, and the German [[ethics]] Council's warning about competence loss are cited as context, not measured here.
- Teacher capacity is an assumption rather than a result — the framework depends on teachers who can anticipate plausible AI errors and design AI-resistant tasks, and the paper states that preparation programs have not yet systematically built those skills.

## Connected Concepts

- [[physics-education]]
- [[learning-design]]
- [[generative-ai]]
- [[human-ai-collaboration]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[scaffolding]]
- [[ai-education]]
- [[higher-ed]]

## Connected Articles

- [[halani-designing-for-reach-2026]] — Designing for Reach: Seven Levers and the Student Alone with AI
- [[ai-generated-smartphone-circular-motion-lab-2026]] — AI-Generated Smartphone Physics Lab
- [[probing-ai-generated-physics-solutions-2026]] — Probing AI-Generated Physics Solutions
- [[benzion-ai-physics-simulations-virtual-lab]] — AI for Rapid Physics Simulations
- [[genai-ar-physics-simulation-prompt-2026]] — GenAI AR Physics Simulations
- [[hashmi-socratic-physics-chatbot-2025]] — Socratic Physics Chatbot
- [[physics-chatbot-epistemological-beliefs-2026]] — Chatbot Preferences in AI-Mediated Physics Learning
- [[genai-can-harm-teaching-rct-2026]] — Generative AI Can Harm Teaching
- [[ai-partner-science-epistemic-vigilance]] — AI as a Partner in Science Learning: Epistemic Vigilance
- [[from-answer-generators-to-reasoning-facilitators-ai-tutors]] — From Answer Generators to Reasoning Facilitators

## Citation

Kuhn, J., Küchemann, S., Rakestraw, D. J., & Vogt, P. (2026). [*It's Not the Tool, It's the Task: A Framework for Cognitively Activated AI Augmentation in Physics Instruction*](https://doi.org/10.48550/arXiv.2601.13812). [physics.ed-ph].
