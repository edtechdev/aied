---
title: "Who Is Doing the Thinking? Characterising Human Agency in First-Year Students’ AI Interactions"
created: "2026-11-04T12:00:00-05:00"
updated: "2026-11-04T12:00:00-05:00"
type: article
foundations: [agency, ai-literacy, ai-education]
technology: [generative-ai, llm]
pedagogy: [student-ai-interaction]
assessment: [evaluative-judgment]
methods: [qualitative-research]
research_method: [case study]
discipline: [cs education]
level: [higher ed, undergraduate]
audience: [instructors, researchers, assessment designers]
sources: ['raw/papers/shakiba-human-agency-depth-taxonomy-2026.md']
source_url: "https://arxiv.org/abs/2611.04783"
confidence: high
page_kind: [framework]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Shakiba and Chaffey (2026) start from an assessment problem rather than a learning one: once a model produces the artifact, the cognitive label attached to the task says nothing about what the student did. Their Human Agency Depth Taxonomy classifies the engineering contribution visible inside a prompt — across contextual bandwidth, engineering abstraction and ownership of the problem — in six tiers from delegation (T0) to constraint-driven architecture discovery (T5). Applied to 962 prompts from 105 students in a first-year [[cs-education]] course, it finds that 84.2% of [[student-ai-interaction|student-AI interactions]] carried student-authored contribution, and that tier tracked the phase of the software lifecycle rather than the student, with 68% of variance lying within students. The argument matters for [[ai-literacy]]: what separates use from substitution is not whether students reach for [[generative-ai]] or an [[llm]], but what they bring to the prompt. It reframes [[evaluative-judgment]] and [[assessment]] in [[higher-ed]], and shows how [[qualitative-research]] coding of prompt logs can give [[ai-education]] something a course can act on, keeping [[agency]] visible without turning the tier into a score.

## Key Findings
1. **Most prompts were not pure delegation.** Of 962 prompts, 152 (15.8%) were T0, so 84.2% carried student-authored framing or evidence; T1 (241; 25.1%) and T5 (227; 23.6%) were the most frequent tiers.
2. **Constraint specification was rare.** T3, where a student states the constraints an artifact must satisfy, was the least frequent tier in every week (51; 5.3%) despite explicit instruction.
3. **The distribution shifted with the lifecycle.** Tier counts differed across weeks, χ²(45) = 209.8, p < .001, Cramér's V = 0.21, and across phases, χ²(10) = 134.9, p < .001, V = 0.26.
4. **Design exploration gave way to diagnosis.** Against the analysis phase, T5 odds fell to 0.38 in design and prototype and 0.11 in build and verify, while T4 odds rose 2.88 times in build and verify.
5. **Agency varied mostly within students.** In a phase-adjusted random-intercept model, 32% of variance in tier lay between students (ICC = 0.32) and 68% within them; the median student used five of the six tiers.
6. **Deadline delegation did not survive clustering.** T0 was 19.8% of prompts in deadline weeks against 13.3% in other weeks (OR = 1.61), but the clustered estimate was not significant (OR = 1.28, p = .13).

## Why the existing labels failed

The paper opens on an old assessment problem: two identical arithmetic results, one worked by hand and one produced with a calculator, are indistinguishable without the working. A first-year student who asks a model to design the data structure for a rescue coordination app is, under Bloom's taxonomy, performing a Create-level task — whether they specified the entities, constraints and acceptance criteria, or forwarded the brief and let the model decide.

That gap makes [[prompt-engineering]] an awkward proxy for [[ai-literacy]]. An elaborate prompt with few-shot examples and formatting rules can still delegate the underlying problem, while a short prompt carrying the student's own analysis demonstrates substantial prior framing. Bloom's, SOLO and [[icap-framework|ICAP]] describe a task or a response, not the division of labor between a learner and a [[llm]], which is also why the taxonomy records visible delegation rather than the [[cognitive-offloading]] behind it.

## Three dimensions, six tiers

The taxonomy was derived, not borrowed. Coding prompts with Bloom's first, the authors kept hitting cases the labels could not separate, and set the framework aside. Three differences then recurred: how much project-specific context the student supplied, how wide a scope the request addressed, and whether the student or the model defined the problem.

The tiers are ordered by how much engineering reasoning is evident in the student's text before the model answers: T0 delegate, T1 retrieve, T2 generate a named component, T3 generate under the student's own system constraints, T4 diagnose an artifact the student built, T5 explore a design space the student framed. The dimensions are not individually monotonic across tiers, so no single dimension stands in for the tier: a prompt can be highly project-specific and still delegate everything, and a T4 diagnostic turn can concern a single local formula.

## Agency follows the work, not the person

The result here is structural. Design-space exploration accounted for 48.1% of prompts in Week 4, when students were writing requirements, and fell to 9.5% in build and verify, while diagnosis rose to 17.9% once students had systems to diagnose. Two-thirds of the variance in tier sat within students.

This is why the tiers are a profile rather than a ladder: a T4 turn supplying an error and a hypothesis is phase-appropriate agency during verification, just as T5 is during requirements. Their treatment of deadlines is a methodological caution: T0 rose to 19.8% in deadline weeks at the prompt level, but students who submitted more prompts then drove the comparison, and neither the clustered estimate nor the within-student test held.

The T3 result carries the most interpretive weight. Constraints were taught through examples, format specifications and success criteria, and were still specified in 5.3% of prompts; the authors read this as a knowledge bottleneck rather than a failure of instruction.

## What this means for practice

- **Instructors.** Read a tier profile against the phase it came from: 48.1% T5 during requirements and 17.9% T4 during verification is appropriate, while a flat profile is the signal worth investigating.
- **Instructors.** Treat constraint writing as domain knowledge, not prompting technique. Students who cannot say what properties a good artifact has will not produce T3 prompts however well output formats are taught.
- **Assessment designers.** Keep the [[reflection|reflective journal]] unmarked and say so, as this course did. Once tiers carry marks, the record stops describing what students actually do with AI.
- **Curriculum designers.** Place a checkpoint on platform fundamentals where lookup spikes: T1 reached 53.0% of prompts in Week 9 as students moved into an unfamiliar low-code environment.

## Limitations

- Coding is confined to prompt text: attachments were not recorded, other journal fields were not consulted, and context retained from earlier turns earns no credit, so conversation-level agency is under-counted.
- The AI Journal is [[self-report-measures|self-reported]] and unmarked, and delegated interactions are the likeliest to go unrecorded, so 15.8% should not be read as the true prevalence of delegation; submissions fell from 187 prompts in Week 4 to 58-75 per week from Week 8.
- The lifecycle phases are confounded with lecture topics, AI instruction and assessment demands that changed on the same schedule, so phase effects cannot be separated from teaching.
- Evidence comes from one first-year course in one semester at one university, with a 27-student longitudinal subset.

## Citation

Shakiba, A., & Chaffey, T. (2026). [*Who Is Doing the Thinking? Characterising Human Agency in First-Year Students’ AI Interactions*](https://arxiv.org/abs/2611.04783). arXiv preprint.
