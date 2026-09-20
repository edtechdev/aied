---
title: "AI in the Wild: A Large Scale Analysis of Authentic Interactions of College Students with Generative AI"
created: "2026-06-30T04:33:04-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
foundations: [ai-literacy]
technology: [generative-ai, learning-analytics, llm]
stakeholders: [student-experience]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/2606.29442.md']
confidence: high
---

> **Synthesis:** Karidi, Amir & Roll (2026) present one of the largest empirical analyses to date of authentic (rather than lab-based) interactions between college students and generative AI tools. By analyzing interaction logs at scale, they identify distinct patterns: some students use AI as a [[llm]]-powered [[pedagogical-agent|learning companion]] for explanation and exploration, while others offload cognitive work entirely — copying outputs without comprehension. The work provides much-needed ecological validity to a literature that has largely relied on survey self-reports and controlled experiments. These findings connect directly to [[student-experience]] [[research-methods-aied|research]], showing that the gap between AI 'use' and AI 'learning' is wide and context-dependent. The study offers actionable design implications: platforms should [[scaffolding|scaffold]] [[metacognition|metacognitive]] [[student-engagement|engagement]] with AI outputs rather than optimizing for answer correctness alone. The paper also contributes to [[generative-ai]] literacy frameworks by mapping what competencies students actually display in uncontrolled settings, informing [[ai-literacy]] [[curriculum-design|curriculum design]].

## What this means for practice

- **Instructors.** Read your course's AI interaction profile as a design signal: across 15,887 turns from 821 students in six courses, use concentrated in a small set of recurring patterns, with mathematically oriented courses dominated by task-focused requests at the understand and apply levels and writing-heavy courses showing more references to students' own work and more evaluate and create activity.
- **Instructors.** Build assignments that require students to bring their own draft, data, or solution into the AI conversation rather than only asking about the task — references to students' own work were the interaction context most often paired with higher-level cognitive intent.
- **Instructors.** Teach explicit strategies for interrogating AI output: about 30% of turns were directed at prior AI output, and only a small share of all turns reached the analyze level.
- **Designers.** Instrument authentic, voluntary use in coursework (this study collected chat logs students submitted for minor course credit against an alternative assignment) instead of relying on surveys and lab tasks, so profiles reflect real task demands.
- **Researchers.** Link interaction profiles to learning outcomes before treating them as evidence of [[cognitive-offloading|cognitive offloading]]; the authors present the interpretation as grounded in observed distributions and explicitly leave outcome linkage to future work.

## Limitations

- **Selection effects from voluntary participation:** the 821 students self-selected by submitting chat logs in exchange for up to 2% course credit, so submitters may differ from non-submitters.
- **Annotation was automated without human agreement checks:** every turn was labeled by gpt-5-mini under a prompt-based procedure, and the authors did not evaluate agreement between LLM-based and human annotations.
- **Six courses at one institution:** the 2,078 logs and 15,887 turns all come from the Technion, and the authors note that extending the study would allow assessing generality.

## Connected Concepts

- [[llm]]
- [[student-experience]]
- [[generative-ai]]
- [[ai-literacy]]
- [[learning-analytics]]
- [[higher-ed]]
- [[cognitive-offloading]]

## Connected Articles

## Citation

Taelin Karidi, Ofra Amir, Ido Roll (2026). [AI in the Wild: A Large Scale Analysis of Authentic Interactions of College Students with Generative AI](https://arxiv.org/abs/2606.29442). cs.CY (AIED 2026).
