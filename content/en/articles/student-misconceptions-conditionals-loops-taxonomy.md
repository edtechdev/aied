---
title: How Students (Mis)understand Conditionals and Loops -- A Taxonomy
created: "2026-05-27T07:38:00-04:00"
updated: "2026-09-20T06:30:22-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring, llm]
research_method: [thematic analysis]
discipline: [cs education, stem education]
audience: [instructors, learners]
level: [higher ed]
confidence: high
page_kind: [synthesis]
sources: ['raw/papers/2605.26966.md']
methods: [benchmark, mixed-methods-research]
---

Eckert and Kautz (Hamburg University of Technology) present a fine-grained taxonomy of novice programmers' difficulties reading and understanding two control-flow constructs: selection and iteration. It was built through the Extended Taxonomy Design Process (ETDP), which alternates between existing literature and the authors' own data — semi-structured interviews and written tests in introductory programming courses — and aims to give a harmonized framework for classifying student errors and judging whether a discovered error is new or a known facet.

The scope is narrow: reading and understanding code only, and conceptual rather than syntactic or strategic knowledge. Syntactic and lexical errors are excluded as "fundamentally different in nature." The literature and the authors' own research concern imperative languages (C, C++, Python, Java) plus block-based languages like Scratch, and target computing education researchers.

> **Synthesis:** Rather than treating every wrong answer as one undifferentiated error, this paper splits novice difficulties with conditionals and loops by the concept students fail to grasp and by how they fail to grasp it. The hierarchy — 5 error categories for selection and 7 for iteration — gives [[cs-education]] researchers and tool builders a shared vocabulary for [[misconceptions]], and shows how one visible error can mask distinct mental models.

## Key Findings

1. Non-orthogonal: a hierarchy dividing the space of errors into ever finer-grained categories, structured "similar to an evolutionary tree" rather than as independent dimensions.
2. Levels run from control structure, to the aspect students fail to understand, to how they struggle — misconception, fragile knowledge, or described difficulty.
3. 5 top-level selection categories: selective nature of selection statements, boundaries of the statement body, the else-branch, timing of the condition check, and nesting.
4. 7 iteration categories: repeating nature of iteration statements, interaction with code outside the loop, order of execution of loop parts, state, the loop condition, nesting, and break/continue.
5. Categories from prior work carry references; categories without references are new or newly found in the authors' own research.
6. The usage example shows "four seemingly different errors actually consist of three mental models and one combination of two of them": one answer can arise from overlapping misconceptions.
7. Misconceptions are treated as non-binary, challenging the view that they must be stable and systematically repeated — in programming they can be fragile knowledge.

## What the taxonomy covers

An "error" is a concrete incidence of a student reading a program and forming wrong assumptions about its behavior; a "difficulty" is the underlying misunderstanding causing it — errors are "the materialization of difficulties." A "misconception" is a difficulty rooted in a mental model that conflicts with how a construct behaves; students can hold semi-correct or multiple notions at once. A loop, the authors note, has 4 parts — initialization, condition check, body, and update of the control variable — whose order much of the iteration branch concerns.

## How the taxonomy is structured

Because a substantial body of research on student difficulties already existed, the authors chose a conceptual-to-empirical approach. The meta-characteristic is "the computing concepts that students fail to understand correctly." Their own interviews and written tests plus a subset of literature were the starting material — they "do not claim to have incorporated every paper on difficulties about control structures yet." Prior descriptions vary widely in granularity, so building the hierarchy meant deciding which sat higher and which were genuinely distinct.

## An illustration: one loop, three mental models

The discussion works through a single loop-tracing item: students were given a short piece of code and asked to predict its output. Some gave the correct answer ("Birne 10 Birne 6 Birne 2 Apfel"); many others gave "Birne 6 Birne 2 Birne -2 Apfel" or "Birne 10 Birne 6 Birne 2 Birne -2 Apfel". The first wrong answer reflects a belief that the control-variable update happens before the loop body executes; the second adds another misconception, so the answers are overlapping mental models. A third misconception — that the update precedes both the body and the condition check — can yield the correct answer and stay invisible. Hence the authors' claim that the vocabulary helps [[intelligent-tutoring|intelligent tutoring]] and [[automated-assessment|automated assessment]] explain *why* an answer is wrong.

## What this means for practice

- **Instructors.** Diagnose the cause behind a wrong trace: one output can reflect two overlapping misconceptions, or one invisible when the answer is right.
- **Instructors.** Teach loop parts in explicit order — initialization, condition check, body, update — because several iteration errors concern when the update happens.
- **Learners.** The difficulties concern reading and predicting behavior, not syntax, so practice should target mental models of control flow.
- Keep the reference-linked categories as a triage checklist, so a "new" error is checked against known facets first.
- The hierarchy is extendable, so additions such as sequence or subroutines need no rebuild.

## Limitations

- Generated from errors in a subset of the literature plus the authors' own interviews and written tests, and not yet tested on samples outside that generating set — which the authors say is needed to show it is not "overfitted to the sample of errors that we looked at."
- No evaluation yet: the plan is a field test where researchers not involved in the design categorize student answers to exam questions requiring them to read small programs and predict output. No agreement or usability results exist.
- Intelligibility is unverified — inviting researchers and teachers to apply it in their own contexts is future work, so how reliably raters reach the same category is unknown.
- Context is bounded: imperative languages (C, C++, Python, Java), block-based languages like Scratch, and constructs such as break and continue that are not taught in every introductory programming class.

## Connected Concepts

- [[cs-education]]
- [[scaffolding]]
- [[automated-assessment]]
- [[student-experience]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[computational-thinking]]
- [[cognitive-diagnosis]]
## Connected Articles

- [[programming-its]]
- [[llm-student-misconception-identification]]
## Citation

Eckert, D., & Kautz, C. (2026). [*How Students (Mis)understand Conditionals and Loops – A Taxonomy*](https://arxiv.org/abs/2605.26966).
