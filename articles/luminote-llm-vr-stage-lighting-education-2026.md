---
title: "LumiNote: LLM-Assisted Multimodal Instruction for VR Stage Lighting Education"
type: article
foundations: [learning-design, teacher-role]
pedagogy: [experiential-learning, professional-training]
technology: [generative-ai, human-in-the-loop-ai, llm, multimodal, virtual-and-augmented-reality]
created: "2026-09-16T09:40:00-04:00"
updated: "2026-09-19T07:04:04-04:00"
sources: ['raw/papers/luminote-llm-vr-stage-lighting-education-2026.md']
confidence: high
research_method: [system development, user study]
discipline: [humanities education]
level: [higher ed]
audience: [instructors, instructional designers, learners]
---

> **Synthesis:** Stage lighting instruction must hold four layers together — aesthetic intent, fixture operations, visible effects, learner-facing explanations — yet existing [[virtual-and-augmented-reality|VR]] systems simulate hardware without supporting that teaching work. LumiNote turns spoken [[pedagogy|pedagogical]] intent into reviewable [[llm]]-generated spatial annotations, executable demonstrations, and jargon explanations. Across 55 prompts and 531 actions, assistance was strongest for expressive, under-specified goals (visual effects: 212 of 245 applied) and weakest for fixture-specific requests, where 26 of 28 rejections traced to misread directional references like "left light." Instructors used suggestions as a [[human-in-the-loop-ai|controllable refinement process]], reprompting rather than hand-fixing and shifting effort from [[simulation|manual setup]] to expression while keeping [[teacher-role|authority]]. The caution: cues best externalizing expert reasoning were not those novices found easiest to follow.

## Key Findings

1. **Assistance paid off at the intent-to-operation gap.** Visual effects were the largest prompt category (27 of 55, 49.1%) and most adopted (212 of 245, 86.5%); composition strategies reached 77.5%, while fixture/configuration was lowest (38 of 66, 57.6%).
2. **Directional requests exposed grounding failures.** Of 28 rejected fixture/configuration actions, 26 involved directional-reference interpretation — the wrong fixture chosen for "left light".
3. **Suggestions served as controllable refinement.** Of 147 rejected or modified suggestions with recorded follow-up, 127 (86.4%) triggered a new prompt, 19 (12.9%) no action, 1 (0.7%) direct adjustment.
4. **Effort shifted toward expression, not away from decisions.** NASA-TLX fell 3.50 to 2.22, session duration 19 min 34 s to 12 min 33 s, and SUS rose 65.83 to 79.17.
5. **Expert-facing and learner-facing representations diverged.** Instructors rated demonstrations and arrows highest (both 6.0 of 7), console tags and the avatar 5.0; students ranked the laser pointer highest (M = 5.50), then tagging (M = 5.33).
6. **Presence and articulation rose, not immediate performance.** With-LLM presence was higher (M = 5.72 vs 4.93; p = .025), yet SUS, NASA-TLX, self-ratings, completion time, and expert scores did not differ.

## The Instructional Problem: Bridging Intent, Operation, and Representation

Technical theater arts fuse artistic expression with complex operations, demanding instruction that combines explanation with demonstration. Instructors move among aesthetic intent, fixture decisions, visible effects, and explanations, and inside [[virtual-and-augmented-reality|VR]] they face "instructional friction" coordinating all three. Design tools and [[simulation]] relieve scarce venues but serve design, not instructional work linking operations to spatial behavior; immersive systems cover structured practice and authored tutorials, leaving spontaneous live teaching unsupported — a problem of [[learning-design|instructional design]], not hardware fidelity.

## Design Requirements from a Formative Study with Four Experts

Interviews with four experts — two stage lighting instructors (5 and 3.5 years) and two theater arts professors (15 and 7) — were coded to a Cohen's Kappa of 0.8927. Participants noted that 2D previsualization tools cannot reproduce the spatial scale and [[embodied-learning|embodied]] viewpoint a real venue demands; realism alone is insufficient, since replicating only physical scenarios lets complexity outweigh immersion. VR must therefore make invisible relationships visible, accelerate demonstrations, and support feedback hard to deliver physically: DR1, situated spatial annotation; DR2, on-demand demonstrations; DR3, linguistic support for jargon.

## LumiNote: From Spoken Intent to Reviewable Scene Actions

LumiNote runs inside a 1:1 digital twin of a theater hall with a functional lighting grid, built in Unity (6000.0.23f1) on Meta Quest 3 using Whisper for speech-to-text and GPT-4o for intent interpretation. The instructor taps "Record," speaks a teaching instruction, and the system returns suggested actions, each reviewable before it applies. Aid comes in three families: spatial geometry (beam vectors tracing a spotlight's path), contextual tagging (world-position tags such as "Upstage" plus jumping-star highlights), and actionable demos (dimmer, RGB, beam angle, targeting). Applied adjustments add console tags to the matching controls, linking effect to input, while a jargon pipeline defines terms such as "hue". This is [[multimodal]] interaction literally, and it acts as [[scaffolding]]; students see only validated output.

## Constrained Grounding as the Safety Mechanism

Rather than letting the model drive the theater, LumiNote bounds what can be changed, what can be referenced, and how changes are represented. A serialization module snapshots fixture states, transforms, and beams, and an iterative laser anchor resolves deictic references by having the user point. The prompt combines scene context, static metadata, and few-shot examples paired with a predefined action schema, covering fixture/configuration, spatial behavior, visual effects, and [[writing-education|composition]] strategies without [[pedagogical-llm-training|model training]]. Ambiguity is handled at the schema: "make the performer stand out with warmer light" becomes SET_COLOR(Light_27,[255,140,0]). The constraints do not guarantee technical or pedagogical appropriateness; they bound the proposal space, which validation filters before [[human-in-the-loop-ai]] review — [[guardrails]], not intelligence, since the point is inspectability, not [[agency|autonomy]].

## Exploratory Study: Three Instructors, Twenty-Four Learners

Three instructors (2M, 1F) taught the same four beginner topics first without LLM support, then with full LumiNote after a 15–20 minute onboarding; the manual session deliberately comes first, a fixed order the authors acknowledge as a limitation. In Phase 2, 24 students (10M, 14F), aged 18–31 (M = 22.62, SD = 4.15), were randomly assigned to a No LLM or With LLM recording. Instructor evidence came mainly from interviews and observed behavior, so interaction-log measures indicate whether a suggestion entered the flow, not model accuracy — a [[research-methods-aied|methodological]] caution for other [[llm]]-in-classroom studies.

## Where Assistance Helped Most — and Where Grounding Broke Down

All three instructors reported speed gains for presenting an intended effect, and T2 valued LumiNote for effects that were "not very explicit and more feeling-based." Generative value lies at an intent-to-operation gap — experts know what to communicate but have not articulated every action needed — so assistance matters most when intent is expressive and under-specified, while precision requests demand reference disambiguation, spatial anchoring, and parameter confirmation.

## Controllable Refinement, Not Autonomous Instruction

Generated suggestions were not treated as finished plans. T3 insisted the lesson follow a planned flow with an overall goal divided into subgoals, skipping outputs that missed the intended meaning or reprompting for a closer configuration; reprompting, not hand-fixing, was the dominant corrective move. All three wanted templates or preset lighting combinations tied to concepts — structured, modular input rather than open conversation, consistent with work on [[prompt-engineering]] and [[teacher-role|teacher control]] over AI generation. Use split by experience, with T1 (one year) triggering far more generated actions than T2 and T3.

## The Representation-Alignment Gap Between Experts and Novices

The sharpest finding is a mismatch between expert-facing and learner-facing representations. Instructors described directional arrows as externalizing relationships such as light direction; students instead ranked the green laser pointer highest, along with console tagging ("what to do exactly"). Novices needed representations answering where to look, what changed, and which operation produced the change — attention guidance and operation linkage, not expert spatial reasoning. The authors position the LLM as a mediation layer that preserves the instructor's concept, note that study must show whether richer representations affect retention or [[transfer-of-learning]], and distil four transfer conditions for expert-in-the-loop grounding, illustrated by a [[chemistry-education|chemistry]] titration example.

## What this means for practice

- **Instructors.** Anchor spatial references by pointing rather than naming: 26 of the 28 rejected fixture/configuration actions traced to misreads like "left light".
- **Instructors.** Aim assistance at expressive, under-specified goals and expect to reprompt rather than hand-fix — visual effects reached 86.5% adoption against 57.6% for fixture/configuration.
- **Designers.** Build learner-facing representations around attention guidance and operation linkage: instructors rated arrows and demonstrations 6.0 of 7, while students ranked the laser pointer highest (M = 5.50).
- **Designers.** Constrain generation and require approval: bound what can be changed, referenced and represented, and keep apply, reject and refine in the instructor's hands.

## Limitations

- The evaluation rests on 3 instructors and 24 students, with n = 3 measures summarized descriptively.
- The instructor phase ran in a fixed No LLM-then-With LLM order, so descriptive falls in workload, duration and SUS may reflect practice or order effects.
- The learner phase used one instructor's recordings and bundled several demonstrations into a single With LLM condition, so it cannot isolate the LLM.
- Adoption counts across the 531 prompt–action pairs indicate whether a suggestion entered the flow, not model accuracy.

## Connected Concepts

- [[virtual-and-augmented-reality]] — the instructor-facing immersive teaching environment
- [[multimodal]] — fused voice, pointing, and scene-state input
- [[human-in-the-loop-ai]] — generated actions remain proposals subject to expert approval
- [[generative-ai]] — operational realization of under-specified instructional intent
- [[llm]] — intent interpretation, action schema mapping, and jargon explanation
- [[human-ai-collaboration]] — iterative prompt-refine interaction with a co-participant
- [[learning-design|instructional design]] — design requirements derived from instructor workflows
- [[teacher-role]] — instructor authority over what enters the lesson
- [[intelligent-tutoring]] — LLM assistance embedded in live pedagogical delivery
- [[simulation]] — the digital twin of a theater hall and its lighting grid
- [[visualization]] — spatial arrows, tagging, and beam vectors as instructional representations
- [[experiential-learning]] — hands-on lighting practice in a risk-free venue
- [[embodied-learning]] — spatial scale, viewpoint, and physical pointing in the venue
- [[situated-learning]] — explanation anchored in the current scene state
- [[scaffolding]] — jargon explanations and demonstrations that hold instructional flow
- [[arts-design-and-media-education]]
## Connected Articles

- [[genai-xr-architectural-design-education-2026]] — Generative AI and Extended Reality in Collaborative Architectural Design Education: An Exploratory Studio Study
- [[multi-site-vr-immersive-learning]] — Design and Implementation of a Real-time Multi-site Immersive Learning System Using Photon Fusion
- [[genai-architectural-design-studios]] — Development and applications of Generative AI in architectural design studios
- [[ai-ive-pbl-vocational-design-creativity-2026]] — Cultivating Design Creativity of Vocational Students: A Model of Project-Based Learning in AI-Enabled Immersive Virtual Environments
- [[teacher-control-ai-generation-math-visuals]] — When Should Teachers Control AI Generation for Mathematics Visuals?
- [[genai-ar-physics-simulation-prompt-2026]] — From Prompt to Embodied Simulation: Using Generative AI to Create AR Physics Learning Tools
- [[mllm-scientific-visualization-literacy]] — Benchmarking Multimodal Large Language Models for Scientific Visualization Literacy
- [[syal-multimodal-dialogue-stem-2026]] — Multimodal AI Tutoring in STEM
- [[code-anchor-multi-view-visualization]] — Code as Anchor, Memory and Metaphor as Support: Learner Experiences with Multi-View Visualizations

## Citation

Liang, D., Li, C. Y., Wei, Z., Xu, X., Xia, M., Qu, H., & Tong, W. (2026). [*LumiNote: LLM-Assisted Multimodal Instruction for VR Stage Lighting Education*](https://arxiv.org/abs/2609.17335). arXiv preprint.
