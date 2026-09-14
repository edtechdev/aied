---
title: "How Should AI Be Designed Into the Learning Experience?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-09-14T06:15:37-04:00"
weight: 72
tags: [pedagogy, learning-design, active-learning, scaffolding, reducing-ai-misuse]
category: [instructional design]
---

# How Should AI Be Designed Into the Learning Experience?

**Start with the learning goal and the learning process — not the AI feature.** The knowledge base's [[pedagogy|Pedagogies and Teaching Strategies]] concept emphasizes that the same AI can function as a scaffold, [[socratic-method|Socratic]] interlocutor, feedback partner, [[simulation]], or answer generator depending on the instructional design. What matters is whether the configuration preserves the activity that produces the intended learning.

## A strong default pattern

A strong default pattern is: **learner attempts → AI supports → learner evaluates or revises → learner demonstrates understanding.** More concretely:

- Preserve [[productive-failure|productive failure]] where it serves learning.
- Ask for an initial prediction or solution before displaying AI assistance.
- Favor questions, hints, examples, counterarguments, and feedback over immediate completion.
- Require verification of consequential claims.
- Incorporate opportunities for explanation and [[learning-by-teaching|teach-back]].
- Gradually fade support as competence grows.
- Retain some AI-free opportunities for learners to calibrate what they can do independently.

The [[reducing-ai-misuse|Reducing AI Misuse]] synthesis specifically recommends think-first/AI-second/reflect sequences and deliberate evaluation checkpoints.

## Match the AI role to the level of cognitive engagement

[[thermomix-genai-education-analogy-2026|Rummel, Nachtigall and Panadero's kitchen-machine analogy]] reframes the design question from *whether* learners use [[generative-ai|generative AI]] to *how* that use shapes what they become. Mapping four uses of a smart kitchen appliance onto learning cases via the [[icap-framework|ICAP]] and [[samr-model|SAMR]] frameworks gives a design ladder: fully outsourcing an assignment, without revision or [[critical-thinking|critical engagement]], is Passive substitution and risks [[cognitive-offloading|skill loss and over-reliance]]; [[prompt-engineering|refining prompts]] and cross-verifying outputs requires [[prior-knowledge|prior knowledge]] and [[self-regulated-learning|self-regulation]] (Active/Augmentation); using AI to brainstorm, outline and evaluate original work is Constructive/Modification; and AI as a genuine dialogue partner for co-construction and adaptive [[feedback]] is Interactive/Redefinition. The design implication is direct: the same tool is a bypass at one rung and a scaffold at the next, so specify the intended mode rather than granting blanket access.

## Sequence the design, don't just permit the tool

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec and Horvat]] analysed the planned sequence of 29,064 teaching and learning activities across 554 courses and found a visible design grammar: Acquisition-type activities are the most common entry point and the largest single type (above 20%), learning type tracks the intended Bloom level (Acquisition falling from ~50% at level 1 to ~20% at level 6, Production rising above 20% at levels 5–6), and the strongest transition is Assessment → Discussion (0.332). Two lessons for AI design: AI belongs where the sequence intends a specific activity type rather than bolted on at the end, and because feedback clustered with [[collaborative-learning|collaboration]], [[group-work|group work]] and [[teacher-role|teacher]] presence, peer and synchronous structures create the [[feedback]] moments AI support should plug into rather than replace.

[[refrain-amplify-genai-curriculum-2026|Torres-Sahli and colleagues' "refrain, then amplify" framework]] pushes this to programme level: withhold a generative tool while a capacity is forming, then restore it once the student can direct it, judge what it returns, and answer for it, with a hard-to-fake checkpoint at each hinge. Devices are governed by a forming-versus-[[cognitive-offloading|offloading]] criterion — allowed where they support engaged work, excluded where they drain attention. This turns offloading decisions into a [[curriculum-design|curriculum]] and [[governance]] question that precedes, rather than follows, course-level design.

## Constructive alignment comes first

[[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes and colleagues' discourse analysis]] of 14 pieces of higher-education guidance warns that efficiency-framed advice — using generative AI to draft outcomes, rubrics and course outlines — produces alignment that *looks* aligned while neglecting the "constructive" half: outcomes, activities and [[assessment]] generated as discrete items rather than interdependent ones. Their remedy is re-sequencing, not prohibition: educators should understand constructive alignment well enough to direct, interrogate and reject AI output before delegating any part of it, because a surface-acceptance habit based on plausibility is the same evaluative failure instructors warn students against. Where AI is used, they argue for institutionally bounded, [[rag|retrieval-augmented]] systems configured around local policy and quality standards rather than generic internet-trained defaults.

## The broader principle

The broader principle in [[finkelstein-principled-ai-education-2025|the Principled AI Education Framework]] is that technology should augment rather than displace human capabilities that education intends to develop. See also [[learning-design|Instructional Design]], [[active-learning|Active Learning]] and [[scaffolding|Scaffolding]].

For the pedagogical defaults that determine whether a designed interaction preserves learning, see [[reduce-ai-cheating]] and [[redesign-assessment-ai-era]]; for how the same principles constrain the software itself, see [[designing-educational-ai-software]], and for their translation into a tutor's architecture, see [[developing-ai-tutor]].
