---
title: "Teacher-Authored Prompts for Configuring Student-AI Dialogue: K-12 Classroom Implementation"
created: "2026-06-04T04:33:04-04:00"
updated: "2026-08-24T09:00:00-04:00"
type: article
tags: [k-12, student-ai-interaction, teacher-role, scaffolding, generative-ai, llm, formative-assessment, automated-assessment, higher-ed]
research_method: [system development]
audience: [teacher role]
level: [k 12, higher ed]

sources: ['raw/papers/2604.16738.md']
confidence: high
---

> Teacher-authored prompt layers function as orchestration levers that translate pedagogical intent into structured [[student-ai-interaction]] at classroom scale. In a Spring 2025 multi-subject pilot across 39 classrooms, teachers predominantly authored highly specific tasks targeting higher-order thinking (92% at [[critical-thinking|Depth of Knowledge]] 2–3), and deployed student-AI conversations were largely aligned with instructional intent — 71% fully on-track and fewer than 1% substantially off-track. Yet a persistent design-enactment gap emerged for cognitive demand: 38% of conversations under-reached the teacher-targeted DOK level, approaching 50% when targeting DOK 3. Prompt features measurably narrowed this gap — explicit finish lines reduced the DOK gap by 0.22 levels (p < .001), and "no direct answers" [[governance|guardrails]] cut AI final-answer rates by 8.5 percentage points. The findings position teacher-authored configuration as a promising but incomplete bridge between [[generative-ai]] capabilities and [[k-12]] classroom constraints.

## Key Findings

1. Teachers used authoring control to build structured, higher-order tasks: 80.9% of the 94 authored prompts were highly specific, and 92% targeted DOK levels 2–3 rather than basic recall.
2. Enactment stayed largely aligned with intent: 71% of the 1,479 student-AI conversations were fully on-track and fewer than 1% substantially off-track.
3. Cognitive demand persistently under-reached intent: 38% of conversations fell below the teacher-targeted DOK level, approaching 50% for DOK 3 targets.
4. Explicit finish lines in prompts reduced the DOK gap by 0.22 levels (p < .001).
5. "No direct answers" [[governance|guardrails]] reduced AI final-answer rates by 8.5 percentage points.
6. Teachers under-used scaffolds and epistemic framing: 41.5% of prompts included no [[scaffolding]] instruction, 57.4% none for epistemic framing, and only 29.8% included guardrails.

## Background and Motivation

Large language models have made conversational support broadly accessible in education, but relatively little is known about how pedagogical intent connects to the learning generated within these systems — especially when student-facing AI dialogue is configured by teachers in live classrooms. The study distinguishes three common AI configurations: a backstage teacher assistant for planning, a teaching assistant surfaced through dashboards, and a direct-to-student learning platform with limited teacher control. It argues that teachers, who hold the professional expertise and contextual knowledge, should determine whether and how AI contributes to instructionally meaningful learning.

The paper draws on [[teacher-role|classroom orchestration]] scholarship — the real-time coordination of students, tools, and instructional decisions under practical constraints — and on research showing that technologies succeed when they are legible, bounded, and supervisable. The authors position the teacher-authored prompt as an interaction-design artifact: it specifies not only what students should work on, but also the AI's stance, the expected epistemic work (justify, cite evidence, revise), and the completion criteria that turn open-ended chat into a bounded instructional routine. This framing connects [[prompt-engineering]] to [[instructional-design]] and [[teacher-role]] scholarship.

## The TASD System and Teacher Authoring

The implemented system, the Classroom Teaching Aide (TASD), uses a three-layer architecture: a foundational [[llm]] at the base, a system-level prompt authored by educational researchers that conditions the AI as a tutor emphasizing guidance over direct answers, and a top layer of teacher-authored prompts encoding local pedagogical goals, task structures, and classroom settings. A shared student-facing opening instruction launches each activity. Three design goals orient the system: preserve teacher intent, support [[learning-analytics|classroom orchestration]] through monitoring and intervention, and scaffold responsible use through developmentally appropriate constraints.

The study identifies a recurring authoring schema that teachers express across dimensions: AI role and stance, discourse moves, constraints on pacing and load, evidence and rigor expectations, and a clear finish line defining completion criteria. This schema functions as a pre-specification that makes progress legible and intervention points predictable, reducing the real-time burden of supervising many concurrent dialogues. The system also supports a live workflow of launch and framing, active monitoring through a teacher-facing dashboard with lightweight triage signals, one-click conversation summarization for "teacher join" moments, and a closure route back into peer or whole-class discussion.

## Study Design and Methods

The pilot ran during Spring 2025 (April 2–June 10) in Washington state across four public school districts and one independent school. Of 21 recruited in-service teachers, 16 implemented TASD across 39 classrooms and 77 activities, generating 1,479 student-AI conversations involving 878 unique students. Teachers spanned mathematics, science, ELA, social studies, world languages, and CTE, serving middle and high school students in classes of 15–33.

Analysis drew on four data sources: classroom metadata, discussion metadata (including the hidden teacher-authored prompting layer and student-facing starter), full conversation transcripts (36,162 messages), and semi-structured teacher interviews (N = 10). Because of the scale, the researchers used [[llm|LLM]]-based coding with human validation: teacher prompts were coded with GPT-5.2 (100% human-validated) across task specificity, target DOK, finish-line presence, scaffolding strategies, epistemic framing, constraints, guardrails, and AI role; conversations were coded with GPT-4.1-mini, with a stratified subset reaching 87% human-LLM agreement on high-stakes codes. An OLS model with robust standard errors clustered by discussion predicted the DOK gap.

## Findings: What Teachers Built

When given control to author student-AI dialogue, teachers gravitated toward structured, well-defined activities rather than open-ended exploration. 80.9% of prompts provided detailed, concrete task descriptions. Nearly half (48.9%) targeted DOK 3 (strategic thinking), 42.6% DOK 2 (skills and concepts), and only 5.3% DOK 1, indicating teachers leveraged AI dialogue for cognitively demanding work rather than drill-and-practice. Explicit finish lines appeared in 64.1% of prompts, signaling teachers recognized the importance of defining what "done" looks like.

Scaffolding and epistemic framing were used more sparingly. 58.5% of prompts included at least one explicit scaffolding instruction, with stepwise guidance (47.8%) and [[socratic-method|Socratic questioning]] (37.0%) most common, yet 41.5% provided no scaffolding guidance to the AI and restrictive "attempt-first" scaffolds were rare (5.4%). Only 42.6% of prompts explicitly asked the AI to elicit reasoning practices such as comparing alternatives, using evidence, or justifying claims. Guardrails appeared in just 29.8% of prompts, most commonly "no direct answers" (19.6%). One-third of prompts left the AI role unspecified; among specified roles, [[pedagogical-agent|tutor]] (21.3%) and coach (19.1%) dominated, with peer roles notable at 10.6%.

## Findings: Classroom Orchestration Outcomes

Deployment showed high alignment with instructional intent: 71% of conversations were fully on-track and fewer than 1% substantially off-track, with classroom-level participation averaging 85.0%. However, a persistent design-enactment gap emerged for cognitive demand — 38% of conversations under-reached the teacher-targeted DOK level, approaching 50% when targeting DOK 3, mirroring the well-documented "decline" problem in which rigor weakens during enactment despite high initial task design.

Prompt features measurably influenced outcomes. Explicit finish lines reduced the DOK gap by 0.22 levels (p < .001), and "no direct answers" guardrails reduced AI final-answer rates by 8.5 percentage points. The study links teacher-authored configuration to [[self-regulated-learning]], [[feedback]], and [[formative-assessment]] design principles, showing that prompt-level choices encode an epistemic stance that can either support or undermine productive [[student-engagement|participation]].

## Discussion

The findings position teacher-authored prompts as critical orchestration levers that scale teacher-designed dialogue structures while preserving instructional intent and oversight. The near-absence of DOK 4 targets likely reflects teacher-perceived constraints of single-session conversations, as extended thinking requires sustained engagement across multiple sessions. Teachers also demonstrated pragmatic judgment: higher-demand (DOK 3) prompts were proportionally more likely to be implemented, and unused prompts skewed toward DOK 2. The under-use of scaffolds, epistemic framing, and guardrails suggests unfamiliarity with AI tools may lead to under-utilization of available mechanisms — a gap the study connects to [[teacher-ai-competency]] and the need for professional development.

The work extends [[human-ai-collaboration]] and [[human-in-the-loop-ai]] scholarship by grounding human-AI complementarity in empirical classroom conditions, reinforcing transparency and [[agency|teacher agency]] by making AI behavior controllable and interpretable to teachers. It also carries implications for [[multilingual-learning|multilingual learners]] and [[personalized-learning|personalized learning at scale]], and for [[equity-in-ai-education|equitable access]] to cognitively demanding AI-mediated discussion.

## Implications

- **Prompt features are actionable levers.** Teachers can reliably shift cognitive outcomes by adding explicit finish lines and "no direct answers" guardrails, connecting prompt engineering to [[formative-assessment]] and [[feedback]] design principles rather than treating AI as an autonomous tutor.
- **Design-enactment gap needs support.** The persistent 38% under-reach in cognitive demand — approaching 50% at DOK 3 — underscores that high-quality prompt design does not guarantee enacted rigor, aligning with known gaps between intended and enacted [[scaffolding]].
- **Teacher professional development should target authoring.** Because teachers under-used scaffolds, epistemic framing, and guardrails, [[teacher-education]] and [[teacher-ai-competency]] programs should train teachers as prompt architects who can surface the right levers without deep technical expertise.
- **Monitoring affordances sustain orchestration.** Lightweight teacher-facing signals and one-click summarization kept concurrent conversations tractable, supporting [[teacher-role|orchestration]] without excessive overhead.
- **Responsible-use design can be instantiated in prompts.** Constraints that discourage copying and answer-seeking while preserving student agency offer a concrete path for [[academic-integrity]] and [[governance|responsible AI]] in [[k-12]] settings.

## Connected Concepts

- [[scaffolding]]
- [[student-experience]]
- [[formative-assessment]]
- [[teacher-role]]
- [[generative-ai]]
- [[k-12]]
- [[prompt-engineering]]
- [[intelligent-tutoring]]
## Connected Articles

- [[mind-the-trust-gap-teacher-student-views-control-agency-k12-classroom-ai]] — Mind the Trust Gap: Identifying (Mis)alignments in Teacher-Student Views Toward Control and Agency in K-12 Classroom AI
- [[from-answer-generators-to-reasoning-facilitators-ai-tutors]] — From Answer Generators to Reasoning Facilitators: Designing AI Tutors for Mathematical Reasoning in High-Stakes Environments
- [[cross-dataset-bloom-question-classification]] — Cross-Dataset Bloom Question Classification: Supervised Models and Prompted LLMs
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[bloom-aligned-educational-control-llms]] — From Execution to Education: A Bloom-Aligned Framework for Measuring Educational Control in LLMs
- [[rubric-aware-grading-rec-cbm]] — REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models for Trustworthy Open-Ended Grading

## Citation

Alex Liu, Min Sun, Lief Esbenshade, Victor Tian, Zachary Zhang, Kevin He (2026). [Teacher-Authored Prompts for Configuring Student-AI Dialogue: K-12 Classroom Implementation](https://arxiv.org/abs/2604.16738). arXiv.
