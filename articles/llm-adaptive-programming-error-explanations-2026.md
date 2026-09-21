---
title: "Beyond the Traceback: Using LLMs for Adaptive Explanations of Programming Errors"
created: "2026-08-24T09:10:00-04:00"
updated: "2026-09-19T08:49:57-04:00"
type: article
pedagogy: [scaffolding, student-ai-interaction]
technology: [llm]
assessment: [feedback, formative-assessment]
research_method: [experiment, survey]
discipline: [cs education]
sources: ['raw/papers/llm-adaptive-programming-error-explanations-2026.md']
confidence: high
audience: [instructors, software developers, instructional designers]
level: [adult learning]
---

> **Synthesis:** This arXiv study (Moraru, Biswas, & Gadiraju, Delft University of Technology) evaluates skill-targeted, LLM-generated rewrites of Python programming error messages through a multi-stage crowdsourced experiment (N = 103). Using a custom debugging-oriented proficiency [[assessment]], participants were categorized into lower and higher assessed proficiency groups and randomly assigned to one of three message styles: standard Python interpreter output, *pragmatic* rewrites (concise, action-oriented guidance), or *contingent* rewrites (more scaffolded explanations of the likely cause and reasoning path). The core finding is a **human-AI complementarity gap**: LLM-rewritten messages — especially pragmatic ones — were rated significantly more readable, clearer, and less cognitively demanding, yet these perceived gains did not translate into statistically significant improvements in objective debugging outcomes such as [[feedback|fix rate]], [[student-ai-interaction|attempt counts]], or time-to-fix. The authors argue that [[scaffolding|static skill-targeted rewriting]] is insufficient on its own and that future [[intelligent-tutoring|adaptive AI feedback systems]] should instead adjust explanations dynamically based on a user's real-time repair trajectory, with clear implications for [[cs-education]] and [[llm]]-based [[formative-assessment]].

## Background: error messages as feedback

Programming error messages are among the most frequent forms of feedback programmers receive from software, yet they remain difficult to interpret — especially for novice learners in [[cs-education]] who may lack the conceptual vocabulary to map a diagnostic to an actionable fix. Poorly designed diagnostics can slow progress, raise [[critical-thinking|cognitive load]], and undermine learner confidence. This paper frames compiler and interpreter diagnostics as a **human-AI complementarity** problem: automated systems can produce diagnostic information, but human programmers must still understand, [[trust]], and act on it.

Rather than treating LLM-rewritten explanations as universally beneficial, the authors test whether different explanation styles affect debugging performance and perception differently across skill levels. Two skill-targeted styles are contrasted: **pragmatic** messages, which are concise and task-oriented (naming the error, localizing the cause, offering a short hint toward repair), and **contingent** messages, which provide more scaffolded explanatory support by adding context about likely intent, possible [[misconceptions]], and the reasoning path. This framing draws on work in [[scaffolding]], [[cognitive-offloading|cognitive load]], and the expertise reversal effect — the idea that support helping less experienced learners can become redundant or counterproductive for more experienced ones — and connects to [[feedback]] design in programming-support systems.

## Study design and methods

The authors used a multi-stage crowdsourced design to calibrate both participant skill and task difficulty before the main experiment. First, they built a debugging-oriented Python proficiency assessment: a pool of 56 multiple-choice items spanning code comprehension, error-message interpretation, fault localization, and repair selection, reduced to eight items using item difficulty and point-biserial discrimination in a pilot. Second, a **formative task-selection study** rated candidate buggy snippets and standard messages; four snippets targeting common error families (NameError, TypeError, SyntaxError) were selected for being moderate in difficulty with a single primary fault.

In the main [[student-ai-interaction|Prolific]] experiment, 103 valid participants completed the proficiency assessment, were assigned to lower (38) or higher (65) assessed proficiency using both assessment score and self-reported Python experience, and attempted to repair one buggy snippet in an embedded editor with up to three attempts. They received one of three message styles: standard interpreter output (35 participants), pragmatic LLM rewrite (35), or contingent LLM rewrite (33). All participant-facing rewrites were generated with llama-3.1-8B-Instruct using zero-shot [[prompt-engineering|prompting]] at temperature 0 for consistency. Objective outcomes (addressing RQ1) were fix rate, Fix@k, number of attempts, and time-to-fix; subjective outcomes (addressing RQ2) covered readability, cognitive load, and perceived tone.

## Results: perception diverges from performance

The results reveal a clear divergence between subjective experience and objective debugging performance. LLM-rewritten messages were rated significantly more favorably than standard interpreter messages across several perceptual measures, with **pragmatic messages** receiving the strongest subjective evaluations — participants rated them as clearer, more helpful, and less cognitively demanding. Contingent messages also showed favorable subjective patterns but less consistently than pragmatic ones.

However, these perceived benefits did **not** translate into statistically significant improvements on objective debugging metrics such as fix rate, time-to-fix, or number of attempts. The authors frame this as a **human-AI complementarity gap**: explanations that users experience as clearer and more helpful do not necessarily make them more effective debuggers. This echoes a broader theme in the knowledge base's [[research-methods-aied|research]] on [[feedback]] and [[student-ai-interaction]], where perceived quality of AI-generated support frequently diverges from behavioral effectiveness — and reinforces that [[ai-feedback-quality|AI feedback]] must be judged by its effect on [[situated-learning|situated]] human [[problem-solving|problem solving]], not only its fluency or perceived helpfulness.

## What this means for practice

- **Instructors.** Do not treat clearer diagnostics as a fix: LLM-rewritten messages were rated significantly more readable and less cognitively demanding, but produced no statistically significant improvement in fix rate, time-to-fix, or number of attempts.
- **Instructors.** Keep repair practice central and the standard interpreter message available — pragmatic rewrites drew the strongest subjective ratings yet still produced no reliable objective gain.
- **Edtech designers.** Drive adaptation from interaction signals — repeated failed attempts, time spent before editing, edit location, error recurrence — rather than a one-time [[scaffolding|skill]] classification.
- **Software developers.** Evaluate diagnostic tooling by whether it improves eventual repair, not by clarity or preference ratings.
- **Researchers.** Report perceived and behavioral outcomes together: higher proficiency scores did predict correct fixes (r_pb = 0.368), yet message style did not change repair performance.

## Limitations

- 103 valid participants were recruited through Prolific, and each attempted a single calibrated buggy snippet with up to three attempts, so every result rests on one task per person.
- All participant-facing rewrites came from one model (llama-3.1-8B-Instruct, temperature 0) with fixed prompt templates; model size, decoding settings, and prompt structure were not varied.
- The debugging-oriented proficiency assessment was purpose-built for the study — eight items selected from a pool of 56 — and not validated at large scale, so the lower (38) and higher (65) proficiency groups are task-aligned categories rather than a measure of expertise.
- Snippet difficulty varied substantially and some message-style effects were sensitive to the specific snippet; the study never evaluates a fully dynamic tutor.

## Connected Concepts

- [[cs-education]]
- [[scaffolding]]
- [[llm]]
- [[formative-assessment]]
- [[feedback]]
- [[student-ai-interaction]]
- [[intelligent-tutoring]]
- [[pedagogical-agent]]
- [[critical-thinking]]
- [[metacognition]]

## Connected Articles

- [[learner-ai-interaction-patterns-oop]] — Patterns of Learner-AI Interaction and Academic Performance in an Object-Oriented Programming Course
- [[chatgpt-programming-education-text-mining]] — Pedagogical Promise and Peril of AI: A Text Mining Analysis of ChatGPT Research Discussions in Programming Education
- [[ai-writes-code-student-writes-model-2026]] — The AI Writes the Code, the Student Writes the Model: Theory and Measurement for Learning by Construction with Generative AI
- [[code-to-learn-genai-artifact-construction-2026]] — Code to Learn with Generative AI: A Framework for Artifact Construction in Upper-Secondary Education
- [[becerra-aicofe-feedback-2026]] — AI Peer Feedback Systems

## Citation

Moraru, A.-R., Biswas, S., & Gadiraju, U. (2026). [*Beyond the Traceback: Using LLMs for Adaptive Explanations of Programming Errors*](https://arxiv.org/abs/2608.20896).
