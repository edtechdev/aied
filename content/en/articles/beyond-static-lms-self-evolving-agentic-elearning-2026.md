---
title: "Beyond the Static LMS: A Conceptual Framework for Self-Evolving Agentic E-Learning Systems"
created: "2026-09-24T03:02:00-04:00"
updated: "2026-09-24T03:02:00-04:00"
type: article
sources: ['raw/papers/beyond-static-lms-self-evolving-agentic-elearning-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
foundations: [agentic-ai, human-ai-collaboration, learning-design, theories-and-frameworks, teacher-role, ai-literacy]
pedagogy: [self-regulated-learning, scaffolding, metacognition, student-engagement]
technology: [adaptive-learning, personalized-learning, intelligent-tutoring, pedagogical-agent, student-modeling, learning-analytics, knowledge-graph, generative-ai, human-in-the-loop-ai]
ethics: [guardrails, explainable-ai, equity-in-ai-education, accessibility, inclusive-learning, privacy, bias-mitigation]
research_method: [theoretical analysis]
discipline: [learning sciences]
audience: [researchers, instructors, administrators, educational technology developers]
level: [higher ed]
page_kind: [framework]
---

> **Synthesis:** This conceptual paper argues that the defining limit of the learning management system is not its feature list but the design-time logic that fixes its capability repertoire, so that even open source platforms and adaptive engines change only when developers, administrators or teachers act. The author proposes the Self-Evolving Agentic Learning System (SEALS), an institutionally governed system that senses learning conditions, reasons over pedagogical goals and constraints, composes or develops capabilities, evaluates their consequences and selectively retains, modifies or retires adaptations. Its architecture combines six interacting planes, four nested evolution loops, a stable core with an adaptive periphery, a bounded capability-evolution lifecycle, an autonomy ladder running from static delivery to co-evolving systems, and seven propositions for future empirical work. Its leading construct is capability personalization: an environment may change what it is able to do for a learner, not only the content it delivers, while [[guardrails|bounded organicity]] keeps that evolution evidence-bearing, reversible and answerable to people.

## Key Findings

- **Staticity is architectural, not a product flaw.** Platforms fix their functions at design time, so open source licensing and large plugin catalogues do not by themselves let a system recognize an unanticipated learner need and respond.
- **Adaptive systems stay inside a fixed capability envelope.** They vary content, sequence and presentation within a predefined set of pedagogical actions, but they do not invent a new learning tool, collaboration pattern or interface.
- **SEALS makes the repertoire itself adaptable.** The framework defines a system that senses conditions, reasons over pedagogical goals, composes or develops capabilities, evaluates outcomes and retains, modifies or retires adaptations.
- **A stable core supports an adaptive periphery.** Enrollment, records, assessment rules, privacy controls and accessibility baselines stay fixed while interfaces, scaffolds and low-risk tools vary under contracts set by that core.
- **Autonomy and self-extension are bounded by evidence.** The autonomy ladder runs from configurable environments to bounded self-extension and co-evolution; capabilities are composed before generated, verified, released in stages and retired.

## Why static platforms cannot adapt

The paper distinguishes configurability from adaptability. A configurable platform exposes settings that a person sets before use; an adaptive platform senses change and alters its behavior at runtime within human-defined bounds. Open source widens who may modify the code, yet a new function can still take months of development and release before any learner meets it, and plugin catalogues still require someone to anticipate the gap. Adaptive platforms vary pathways and feedback from learner data, but their designers still decide which variables can be sensed and which pedagogical actions exist. The paper calls the step beyond that boundary capability personalization: the environment's repertoire of functions becomes the object of [[personalized-learning|personalization]], not only the content delivered through a fixed repertoire.

## The SEALS architecture

SEALS is organized into six interacting planes rather than layers, because they exchange information laterally: learner experience and agency, agentic orchestration, learner and knowledge memory, capability composition and development, evidence and evaluation, and governance, reliability and infrastructure. Agents may propose and execute adaptations, but they do not set their own goals, grant permissions or certify their own safety; those rights sit with governance mechanisms and authorized people. Evolution runs through four nested loops: interaction over seconds to minutes, learning over hours to days, course design over weeks, and platform evolution over months and cohorts, so local signals do not automatically become permanent changes. A capability graph of versioned, contracted objects lets orchestration agents reason about what may be safely combined.

## Bounded evolution, governance and evaluation

Capability evolution follows a controlled lifecycle: observe need from behavioral, performance and expressed evidence; interpret it as a pedagogical hypothesis rather than a learner label; compose trusted components before generating anything new; verify against functional, security, accessibility, epistemic, pedagogical and fairness tests; release in stages with rollback available; then evaluate and retire. Generated code is an untrusted proposal confined to a sandbox. Governance classifies adaptations by consequence and reversibility, and grants learners practical rights to inspect, correct and contest inferences that shape their experience. The paper warns about [[learning-analytics|proxy optimization]]: time on task and completion are easy to measure, while transfer and intellectual independence are not, so local adaptations can drift from curriculum aims. Equity and [[accessibility]] are framed as design constraints rather than final checks.

## What this means for practice

- **Instrument and modularize before automating.** Reliable data contracts, APIs, component registries and accessibility standards are prerequisites for credible capability evolution.
- **Compose before you generate.** Reusing trusted versioned components is faster and easier to reverse than producing new code, which stays sandboxed until it passes assurance.
- **Protect a stable core and keep humans on high-consequence calls.** Identity, records, assessment rules and privacy controls should not change silently, and grading or progression stays under [[human-in-the-loop-ai|human control]].
- **Budget for forgetting.** Retirement, rollback and a ledger that preserves negative results are design features, since systems otherwise accumulate complexity.

## Limitations

- **Conceptual framework, no empirical evaluation.** The paper reports no experiment, dataset, participants or measured outcomes, and the framework has not been validated through a full implementation.
- **It synthesizes literatures of different maturity.** Findings from intelligent tutoring and adaptive learning do not automatically transfer to language-model agents, and software-agent benchmarks say little about durable learning.
- **The architecture may overestimate current integration.** Reliable learner modeling, agent orchestration, capability contracts, automated assurance and causal evaluation are each difficult today, and their interaction may create unanticipated failure modes.

## Connected Concepts

- [[agentic-ai]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[self-regulated-learning]]
- [[learning-design]]
- [[intelligent-tutoring]]
- [[human-ai-collaboration]]
- [[guardrails]]
- [[explainable-ai]]
- [[accessibility]]

## Connected Articles

- [[multi-agent-instructional-design]] : Enabling Multi-Agent Systems as Learning Designers: Applying Learning Sciences to AI Instructional Design
- [[agentic-workflows-education]] : Evolution of AI in Education: Agentic Workflows
- [[beyond-agent-label-agentic-ai-governance-2026]] : Beyond the Agent Label: Evidence Maturity, Human Monitoring, and Governance of Agentic AI in Higher Education

## Citation

[*Beyond the Static LMS: A Conceptual Framework for Self-Evolving Agentic E-Learning Systems*](https://osf.io/preprints/edarxiv/27upe_v1/). John Cheung. EdArXiv preprint, submitted August 21, 2026. DOI 10.35542/osf.io/27upe_v1