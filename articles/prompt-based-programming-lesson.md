---
title: "Teaching Prompt-Based Programming with LLMs: A 45-Minute Lesson with Guided Practice for End-User Programmers"
created: "2026-06-30T04:33:04-04:00"
updated: "2026-09-20T06:30:22-04:00"
type: article
foundations: [ai-literacy, teacher-role]
technology: [generative-ai, llm]
research_method: [experiment, system development]
discipline: [stem education]
audience: [instructors]
level: [higher ed]
sources: ['raw/papers/2606.30547.md']
confidence: high
---

> **Synthesis:** This study by Tran, Marwan & Price (2026) introduces and evaluates a 45-minute structured lesson on prompt-based programming, a new modality enabled by LLMs where users express computational goals through natural language. The lesson design incorporates guided practice principles and targets end-user programmers with limited formal training. Results show significant pre-to-post gains in prompt quality, code correctness, and [[self-efficacy]], supporting the case that [[ai-literacy]] interventions need not be lengthy to be effective. The work connects to broader conversations about how [[llm]] tools change the skills required for programming — shifting emphasis from syntax to [[prompt-engineering|prompt engineering]]. By focusing on end-user programmers rather than CS students, the study expands the scope of [[stem-education]] [[research-methods-aied|research]] to include lifelong and professional learning contexts. It also raises questions about the [[teacher-role]] in an AI-mediated classroom, where instructors must now teach prompt design alongside or instead of traditional coding concepts. Future work could explore how such lessons scale across [[higher-ed]] institutions and whether the gains translate to real-world programming tasks.

## What this means for practice

- **Instructors.** Budget a single class period for prompting rather than a whole unit, and expect modest rather than transformative gains: the experimental group improved +10.8 percentage points on the post-test against +1.1 for the control, an estimated 0.87 additional problems solved out of 8.
- **Instructors.** Teach a structured template that makes students state the input and its type, the output, and the transformation, instead of leaving prompting to trial and error.
- **Instructors.** Practice prompts in the same format students will be assessed in, since part of the experimental advantage may reflect familiarity with the assessment format rather than prompting skill alone.
- **Instructors.** Keep code comprehension and tracing work in the course alongside prompting: the control lesson's explain-in-plain-English exercises may have helped students interpret LLM-generated code and thereby narrowed the gap.
- **Researchers.** Examine the prompts students actually write, not only their scores, because the study did not analyze prompt content and cannot explain which strategies produced the gains.

## Limitations

- The intervention lasts 45 minutes — a single class period — and the comparison is a business-as-usual CS lab activity (code tracing) rather than a no-instruction condition.
- All sessions were led by the first author, who also designed the curriculum, introducing potential experimenter expectancy bias even with structured slides and facilitator notes.
- The performance effect was not statistically significant (B = 0.756, 95% CI [−0.020, 1.533], p = 0.056) and less than one additional problem solved on average, with the model fitted to 106 observations across 53 participants.
- Sessions ran in both in-person and online formats (experimental: 2 in-person, 5 online; control: 2 in-person, 6 online), and only short-term pre-to-post gains were measured, so persistence and transfer of prompting skill remain untested.

## Connected Concepts

- [[ai-literacy]]
- [[llm]]
- [[stem-education]]
- [[teacher-role]]
- [[higher-ed]]
- [[prompt-engineering]]
- [[cs-education]]
- [[self-efficacy]]
- [[professional-training]]
## Connected Articles

- [[bridging-instructional-design-framework-math]]
- [[llm-misconception-difficulty-easy-trap]]
- [[bloom-aligned-educational-control-llms]]
- [[youtube-frames-chatgpt-education]]
- [[anvil-ai-educational-animations]]
- [[prompt-problems-nl-programming-mistakes]]
- [[voice-text-prompt-problems-computing-education]] — Modality choice in prompt construction

## Citation

Keith Tran, Samiha Marwan, Thomas Price (2026). [Teaching Prompt-Based Programming with LLMs: A 45-Minute Lesson with Guided Practice for End-User Programmers](https://arxiv.org/abs/2606.30547).
