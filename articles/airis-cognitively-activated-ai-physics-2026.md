---
title: "It's Not the Tool, It's the Task: A Framework for Cognitively Activated AI Augmentation in Physics Instruction"
created: "2026-08-17T09:55:00-04:00"
updated: "2026-08-17T09:55:00-04:00"
type: article
tags: [physics-education, generative-ai, self-regulated-learning, learning-design, human-ai-collaboration, metacognition, scaffolding]
research_method: [theoretical analysis]
discipline: [physics education]
category: [instructional design]

sources: ['raw/papers/2601.13812.md']
confidence: high
---

> **Synthesis:** Kuhn, Küchemann, Rakestraw, and Vogt (2026) argue that the central challenge of AI in [[physics-education|physics education]] is not cheating or tool selection but [[learning-design|instructional design]]. Responding to Kortemeyer's "boiling frog problem" — the risk that incremental accommodations to AI quietly erode students' engagement in epistemic practice — they propose **AIRIS** (Activate–Inquire–Reflect with Intelligent Support), a three-phase framework that structures student work before, during, and after AI use. Grounded in [[self-regulated-learning]], Cognitive Load Theory, multiple external representations, and [[human-ai-collaboration|hybrid intelligence]], AIRIS keeps prediction, interpretation, and evaluation as non-delegable human tasks while allowing procedural computation to be delegated to AI. The authors illustrate the framework with a smartphone-acceleration elevator investigation and call for "withdrawal condition" experiments to test whether AIRIS-structured learning survives the removal of AI support.

## The boiling frog problem

The paper opens with the observation that multiple [[generative-ai|generative AI]] foundation models now solve introductory physics problems at expert level (e.g., near-perfect scores on physics finals and representation-translation tests). Because individual accommodations — allowing AI-generated plots here, AI-assisted explanations there — each seem reasonable in isolation, educational systems may adapt so incrementally that the foundational goal of learning physics is quietly abandoned. Kortemeyer calls this the "boiling frog problem": the danger is not incorrect results but the erosion of students' engagement in the epistemic practices that define scientific reasoning. The authors' answer operates at the level of classroom design rather than system-level policy.

## Learning physics as epistemic practice

Physics learning involves constructing models, coordinating representations, evaluating assumptions, and reflecting on uncertainty. The framework draws on four research traditions:

- **[[self-regulated-learning]] (SRL):** when AI silently performs key cognitive steps, the regulatory processes of planning, monitoring, and reflecting may be bypassed rather than supported.
- **Cognitive Load Theory (CTML):** reducing extraneous load supports learning, but eliminating germane cognitive effort undermines understanding.
- **Multiple external representations:** conceptual understanding emerges from coordinating representations (graphs, equations, verbal descriptions), not just translating between them.
- **[[human-ai-collaboration|Hybrid intelligence]]:** productive human–AI collaboration requires explicit role differentiation, with epistemic responsibility remaining human rather than delegated to the machine.

A central design principle: procedural execution (running an integration, generating a standard plot) may legitimately be delegated to AI, but predicting what a result should look like, evaluating whether AI output is physically meaningful, and diagnosing discrepancies remain irreducibly human epistemic tasks.

## The AIRIS framework

**AIRIS** = **Activate – Inquire – Reflect, with Intelligent Support.** It structures student activity in three phases around AI use:

1. **Activate (before AI): epistemic grounding.** Students predict outcomes, sketch expected relationships, identify variables, and estimate magnitudes — building a mental model and a reference point against which AI output will later be judged.
2. **Inquire (during AI): guided delegation.** Computational and representational tasks are delegated to AI, but students compare AI output against their own predictions, annotate discrepancies, and question assumptions (fitting ranges, smoothing choices). AI is an epistemic partner, not an answer generator.
3. **Reflect (after AI): epistemic responsibility.** Students explain the physical meaning of results, check consistency across representations, diagnose uncertainty and errors, and write a reflection making explicit what the AI contributed versus what they contributed.

The teacher's role shifts to that of designer and guardian of the task structure: selecting tasks that require genuine prior-knowledge activation, monitoring whether students critically compare AI output, and orchestrating reflection. AIRIS adapts existing inquiry cycles (5E, Predict–Observe–Explain) for AI, adding the Inquire phase's AI partnership and a Reflect phase that makes the human–AI division of cognitive work explicit.

## Classroom example: elevator ride in the Shard

The framework is illustrated with an introductory kinematics investigation: students analyze real acceleration data from a smartphone recorded during an elevator ride. Phase 1 has them sketch expected a-t, v-t, and s-t diagrams and reason about the relationships between representations; Phase 2 delegates visualization and numerical integration to AI while they estimate speeds by hand and compare; Phase 3 has them interpret slopes, check cross-representation consistency, identify sensor-offset/noise/drift limitations, and submit a written reflection on what the AI contributed. The authors note the same structure applies to any measurement-based phenomenon (bouncing ball, rolling cylinder, pendulum).

## Ethics by design

AIRIS is presented as a classroom-level response to the boiling frog problem: it prevents the hollowing-out of epistemic engagement by making prediction, evaluation, and reflection non-delegable components of every task. The authors connect this to the German Ethics Council's warning against AI use that degrades learner competencies, and to evidence of "[[metacognition|metacognitive]] laziness" and uncritical acceptance of AI output. They stress that AIRIS is a design proposal, not yet an empirically validated intervention, and identify the decisive open question as the **withdrawal condition**: whether students who complete AIRIS-structured tasks retain the capacity to generate, evaluate, and coordinate representations when AI support is removed — a question that requires comparing AI-supported versus AI-withdrawn performance at scale.

## Implications for AI in education

- **Design the task, not just the tool:** whether AI augments or displaces learning depends on how the task structures cognitive work around AI use.
- **Make higher-order operations non-delegable:** prediction, interpretation, and evaluation should remain the student's responsibility, while procedural computation can be delegated.
- **Use inquiry cycles as the container:** AIRIS shows how existing pedagogies can be adapted to AI rather than replaced.
- **Test the withdrawal condition:** durable competence, not scaffolded performance, is the standard for whether AI-augmented designs succeed — the same logic that motivates assessment of unassisted transfer in the [[halani-designing-for-reach-2026|Reach framework]].

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
