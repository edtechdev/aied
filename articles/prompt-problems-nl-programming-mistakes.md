---
title: Understanding Student Perceptions, Mistakes, and Debugging Approaches when Solving Natural Language Programming Tasks
created: "2026-07-07T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring, llm, prompt-engineering]
methods: [qualitative-research]
research_method: [interviews]
discipline: [cs education]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/2607.05034.md']
confidence: high
---

> **Synthesis:** Learning to communicate with code-generating AI is an emerging skill for novice programmers. 'Prompt Problems' — having students solve computational tasks by writing natural-language prompts for code-generating models — is a recent [[pedagogy|pedagogical]] approach, yet little was known about the specific prompt-level mistakes novices make, the computational details they fail to communicate, and how they recover when generated code is wrong. Padurean et al. (2026) studied attempts by more than 900 students to solve dialogue-based Prompt Problems in a CS1 course, analyzing the [[misconceptions]] and repair strategies that surface when learners must specify intent in English rather than code. The study extends the [[prompt-based-programming-lesson]] lineage and the broader [[reshaping-cs-education-genai]] movement, situating prompt-writing as a core [[ai-literacy]] competency within [[cs-education]]. It also connects to [[programming-its]] (where natural-language specification has long been a goal) and highlights the need for [[scaffolding]] that helps novices articulate computational detail. Findings on [[student-experience]] and recovery behavior inform [[higher-ed]] [[learning-design|course design]] as [[llm]] pair-programming becomes routine.

## What this means for practice

- **Instructors.** Teach constraint specification as a syllabus item, not an incidental skill: 675 students in the first batch and 821 in the second generated at least one initially incorrect prompt that required clarification.
- **Instructors.** Teach a repair vocabulary for wrong generated code — reframe the task, clarify a constraint, update a signature, add an edge case — so students do not respond to failure by simply re-asking the same prompt.
- **Instructors.** Build in reflection on the debugging process, since perceived difficulty and frustration tracked the model's difficulty in interpreting intent rather than the task itself.
- **Researchers.** Analyze iterative prompt refinement against students' self-reported strategies; the study stopped short of linking the two, which is the open question for advanced courses where test cases are not provided.
- **Administrators.** Fund [[scaffolding]] around [[prompt-engineering|prompt construction]] for CS1 at scale: with more than 900 students attempting these tasks, prompt-level mistakes are the common case, not the exception.

## Limitations

- The study is confined to an introductory C programming course and its relatively simple problems, so findings may not generalize to other languages or to realistic, advanced programming scenarios.
- Student demographic data could not be collected under the terms of the ethics approval, so whether the approach is equitable across student populations remains untested.
- Cognitive load was not measured, leaving the alignment with cognitive load theory theoretical rather than empirical.
- The analysis describes prompt mistakes and reported debugging strategies without an in-depth study of how students iteratively refine prompts or whether that refinement improves outcomes.

## Connected Concepts

- [[ai-literacy]]
- [[cs-education]]
- [[scaffolding]]
- [[student-experience]]
- [[higher-ed]]
- [[llm]]
- [[generative-ai]]
- [[prompt-engineering]]
- [[misconceptions]]
## Connected Articles

- [[prompt-based-programming-lesson]]
- [[reshaping-cs-education-genai]]
- [[programming-its]]
- [[voice-text-prompt-problems-computing-education]] — Text vs voice modality on Prompt Problems
## Citation

Victor-Alexandru Padurean, Kaitlin Riegel, Gweneth Barbre, Musa Blake, Paul Denny, Adish Singla (2026). [Understanding Student Perceptions, Mistakes, and Debugging Approaches when Solving Natural Language Programming Tasks](https://arxiv.org/abs/2607.05034). [cs.CY].
