---
title: "Beyond the Traceback: Using LLMs for Adaptive Explanations of Programming Errors"
created: "2026-08-24T09:10:00-04:00"
updated: "2026-08-24T09:10:00-04:00"
type: article
tags: [cs-education, scaffolding, llm, formative-assessment, feedback, student-ai-interaction]
sources: ['raw/papers/llm-adaptive-programming-error-explanations-2026.md']
confidence: high
---

> **Synthesis:** This arXiv study (Moraru, Biswas, & Gadiraju, Delft University of Technology) evaluates skill-targeted, LLM-generated rewrites of Python programming error messages through a multi-stage crowdsourced experiment (N = 103). Using a custom debugging-oriented proficiency [[assessment]], participants were categorized into lower and higher assessed proficiency groups and randomly assigned to one of three message styles: standard Python interpreter output, *pragmatic* rewrites (concise, action-oriented guidance), or *contingent* rewrites (more scaffolded explanations of the likely cause and reasoning path). The core finding is a **human-AI complementarity gap**: LLM-rewritten messages — especially pragmatic ones — were rated significantly more readable, clearer, and less cognitively demanding, yet these perceived gains did not translate into statistically significant improvements in objective debugging outcomes such as [[feedback|fix rate]], [[student-ai-interaction|attempt counts]], or time-to-fix. The authors argue that [[scaffolding|static skill-targeted rewriting]] is insufficient on its own and that future [[intelligent-tutoring|adaptive AI feedback systems]] should instead adjust explanations dynamically based on a user's real-time repair trajectory, with clear implications for [[cs-education]] and [[llm]]-based [[formative-assessment]].

## Background: error messages as feedback

Programming error messages are among the most frequent forms of feedback programmers receive from software, yet they remain difficult to interpret — especially for novice learners in [[cs-education]] who may lack the conceptual vocabulary to map a diagnostic to an actionable fix. Poorly designed diagnostics can slow progress, raise [[critical-thinking|cognitive load]], and undermine learner confidence. This paper frames compiler and interpreter diagnostics as a **human-AI complementarity** problem: automated systems can produce diagnostic information, but human programmers must still understand, [[trust]], and act on it.

Rather than treating LLM-rewritten explanations as universally beneficial, the authors test whether different explanation styles affect debugging performance and perception differently across skill levels. Two skill-targeted styles are contrasted: **pragmatic** messages, which are concise and task-oriented (naming the error, localizing the cause, offering a short hint toward repair), and **contingent** messages, which provide more scaffolded explanatory support by adding context about likely intent, possible misconceptions, and the reasoning path. This framing draws on work in [[scaffolding]], [[cognitive-offloading|cognitive load]], and the expertise reversal effect — the idea that support helping less experienced learners can become redundant or counterproductive for more experienced ones — and connects to [[feedback]] design in programming-support systems.

## Study design and methods

The authors used a multi-stage crowdsourced design to calibrate both participant skill and task difficulty before the main experiment. First, they built a debugging-oriented Python proficiency assessment: a pool of 56 multiple-choice items spanning code comprehension, error-message interpretation, fault localization, and repair selection, reduced to eight items using item difficulty and point-biserial discrimination in a pilot. Second, a **formative task-selection study** rated candidate buggy snippets and standard messages; four snippets targeting common error families (NameError, TypeError, SyntaxError) were selected for being moderate in difficulty with a single primary fault.

In the main [[student-ai-interaction|Prolific]] experiment, 103 valid participants completed the proficiency assessment, were assigned to lower (38) or higher (65) assessed proficiency using both assessment score and self-reported Python experience, and attempted to repair one buggy snippet in an embedded editor with up to three attempts. They received one of three message styles: standard interpreter output (35 participants), pragmatic LLM rewrite (35), or contingent LLM rewrite (33). All participant-facing rewrites were generated with llama-3.1-8B-Instruct using zero-shot prompting at temperature 0 for consistency. Objective outcomes (addressing RQ1) were fix rate, Fix@k, number of attempts, and time-to-fix; subjective outcomes (addressing RQ2) covered readability, cognitive load, and perceived tone.

## Results: perception diverges from performance

The results reveal a clear divergence between subjective experience and objective debugging performance. LLM-rewritten messages were rated significantly more favorably than standard interpreter messages across several perceptual measures, with **pragmatic messages** receiving the strongest subjective evaluations — participants rated them as clearer, more helpful, and less cognitively demanding. Contingent messages also showed favorable subjective patterns but less consistently than pragmatic ones.

However, these perceived benefits did **not** translate into statistically significant improvements on objective debugging metrics such as fix rate, time-to-fix, or number of attempts. The authors frame this as a **human-AI complementarity gap**: explanations that users experience as clearer and more helpful do not necessarily make them more effective debuggers. This echoes a broader theme in the wiki's research on [[feedback]] and [[student-ai-interaction]], where perceived quality of AI-generated support frequently diverges from behavioral effectiveness — and reinforces that AI feedback must be judged by its effect on situated human problem solving, not only its fluency or perceived helpfulness.

## Implications for adaptive AI feedback

The authors argue that static skill-targeted rewriting is insufficient on its own. Because perceived gains did not align with objective repair behavior, future systems should pivot toward **dynamic, interaction-aware adaptation** that adjusts explanations based on a user's real-time repair trajectory, specific error context, and evolving interaction state — rather than relying only on prior skill classification. For [[intelligent-tutoring]] and [[pedagogical-agent]] design, this implies that feedback ought to be contingent on ongoing behavior. The work also carries implications for [[formative-assessment]]: LLM-generated diagnostics should be evaluated by whether they improve learners' eventual repair and understanding, not merely by clarity ratings. The authors stop short of evaluating a fully dynamic tutor, positioning their study as an empirical baseline demonstrating that static style differences alone are unlikely to close the gap.

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
- [[ai-peer-feedback-systems]] — AI Peer Feedback Systems

## Citation

Moraru, A.-R., Biswas, S., & Gadiraju, U. (2026). [*Beyond the Traceback: Using LLMs for Adaptive Explanations of Programming Errors*](https://arxiv.org/abs/2608.20896). arXiv:2608.20896.