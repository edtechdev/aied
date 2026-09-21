---
title: "Structured AI Demonstrations and Student LLM Use in Engineering Mechanics: Study Design and Preliminary Results"
created: "2026-08-03T04:33:04-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
foundations: [teacher-role]
pedagogy: [scaffolding]
technology: [learning-analytics, llm]
research_method: [survey, instrument development]
discipline: [stem education]
audience: [learners, instructors]
level: [higher ed]
sources: ['raw/papers/2607.28710.md']
confidence: high
---

> **Synthesis:** This descriptive study documents student [[llm]] use in an undergraduate engineering mechanics course (Spring 2026), responding to the lack of [[discipline-specific-aied|domain-specific]] empirical evidence for [[pedagogy|pedagogical]] policy in [[engineering-education|engineering education]].

The authors contribute a reproducible survey instrument capturing student AI usage patterns, attitudes, and verification practices, linked to [[learning-gains|academic performance]] metrics — an open [[research-methods-aied|methodological]] framework for other instructors.

A deployable sequence of nine structured, instructor-led AI demonstrations models strategic LLM delegation and evaluation for students, treating AI use as a taught skill rather than an assumed behavior.

Preliminary data show shifting student behaviors and complex relationships between AI reliance and course outcomes, though the primary contribution is the study design itself; results are framed as preliminary.

## What this means for practice

- **Instructors.** Run AI demonstrations inside existing class meetings rather than as extra sessions: the nine demonstrations in this course each took roughly 10-15 minutes at the end of a scheduled lecture and were sequenced from baseline tool literacy through strategic delegation to model evaluation.
- **Instructors.** Tie the demonstrations to graded work. Open-ended student feedback split almost evenly between direct course utility (10) and lacked course utility (11), and the most frequent suggestion was to increase course utility (13) — students who saw no connection to assessment reported the demos as redundant.
- **Instructors.** Model verification rather than describing it. The survey instrument distinguishes independent verification and external cross-referencing from limited or no verification, so students need to see the checking behavior performed on real course problems.
- **Learners.** Treat AI use as a taught skill with a [[prompt-engineering|deliberate strategy]]: the demonstrations were designed to show strategic delegation and evaluation, including when to withhold a task from the model.
- **Researchers.** Reuse the published survey instrument and de-identified response categories when studying local AI use, since it links self-reported usage and verification practices to [[learning-gains|course performance]].

## Limitations

- The design is quasi-experimental and confounded: of 196 enrolled students, 105 consented, assignment to the intervention section came from registration choices, the intervention section was taught by the Principal Investigator, and the intervention applied to a single section (n = 1 at the section level). No covariate for prior academic ability is available under FERPA constraints.
- All behavioral, attitudinal, and usage data are self-reported, and AI use frequency was recorded on a coarse 5-point ordinal scale that cannot distinguish one prolonged, sophisticated session from several brief queries; students' independent access to consumer AI platforms was not tracked.
- At n = 105 the analysis is strictly descriptive, with no significance tests and no causal claims, and the authors treat the between-section grade comparison as uninformative because of unreportable section-level context.
- The qualitative coding used a multi-model LLM pipeline with high inter-model reliability but no human-coded validation sample, so reported frequencies are machine-coded rather than human-verified.

## Connected Concepts

- [[prompt-engineering]]
- [[stem-education]]
- [[higher-ed]]
- [[teacher-role]]
- [[scaffolding]]
- [[ai-literacy]]

## Connected Articles

- [[trio-ethnography-llm-programming-education]] — Beyond Perspectives: A Trio-Ethnography of Interpretation Evolution in LLM-Supported Programming Education
- [[edumirror-educational-social-dynamics]] — EduMirror: Modeling Educational Social Dynamics with Value-driven Multi-agent Simulation
- [[ai-team-teaching-talk-analytics]] — AI-Driven Analytics of Team-Teaching Talk: Acoustic Patterns across Experience, Cohorts and the Learning Design
- [[ai-engineering-education-balancing-act]] — Using AI in engineering education: a balancing act, driven by clear purpose
- [[bridging-instructional-design-framework-math]] — WIP: Bridging the Gap Between Instructional Design and Pedagogical Use: A Framework for Mathematics Educators
- [[llm-misconception-difficulty-easy-trap]] — The Easy Trap: Why LLMs Underestimate Misconception-Driven Difficulty

## Citation

Geng, S., Lallos-Harrell, H., Ashar, J., McKenna, T. J., Dasgupta, A., Farny, C., & Lejeune, E. (2026). [Structured AI demonstrations and student LLM use in engineering mechanics: Study design and preliminary results](https://arxiv.org/abs/2607.28710).
