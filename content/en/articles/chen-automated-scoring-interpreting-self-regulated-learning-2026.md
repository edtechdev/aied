---
title: "Impact of automated scoring on interpreting performance and self-regulated learning: evidence from a pedagogical experiment"
created: "2026-09-23T13:05:00-04:00"
updated: "2026-09-23T13:05:00-04:00"
type: article
foundations: [theories-and-frameworks]
pedagogy: [self-regulated-learning, motivation]
technology: [ai-technologies, speech-and-voice-technologies]
assessment: [automated-assessment, feedback, formative-assessment, assessment-validity]
methods: [mixed-methods-research, quantitative-research]
ethics: [explainable-ai]
research_method: [quasi-experiment, interviews, thematic analysis]
discipline: [language learning]
level: [undergraduate]
audience: [instructors, assessment designers]
page_kind: evaluation
sources: ['raw/papers/chen-automated-scoring-interpreting-self-regulated-learning-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]

---

> **Synthesis:** Chen and Liu (2026) ask what automated scoring does inside a real interpreting classroom. Over 14 weeks, 46 English Translation and Interpreting sophomores either submitted weekly renditions to the Yunyi system, which returned an immediate score, transcript, marked errors, and a reference rendition, or followed the same curriculum with only collective teacher feedback. The automated group improved more overall (d = 1.03), but the gain stayed on the surface of language: [[automated-assessment|linguistic accuracy]] and logical coherence rose, while information fidelity and delivery fluency did not move. [[self-regulated-learning|Self-regulated learning]] was uneven in a matching way, with monitoring during practice correlating with score gains (r = 0.42) while planning and emotional motivation stayed near the scale midpoint. Interviews with seven students show learners comparing scores without analyzing causes, setting goals from the previous score, and meeting low scores with anxiety, avoidance, or deferral. The tool reached the performance phase of the cycle, not the planning that precedes it.

## Key Findings

- **The automated group outperformed the control group at post-test** (M = 85.58 vs 80.84; d = 1.03, 95% CI [0.41, 1.64]), from equivalent baselines (p = 0.735).
- **Gains were confined to two of the four rubric dimensions**: linguistic accuracy rose from 21.04 to 24.25 of 25 and logical coherence from 7.00 to 9.08 of 10, while fidelity and fluency stayed flat.
- **Automated and human ratings agreed unevenly** in a 40-recording pilot: coherence r = 0.79 and accuracy r = 0.63, but information fidelity only r = 0.12.
- **Only execution and monitoring correlated with score gains** (r = 0.42, 95% CI [0.02, 0.70], p = 0.041); planning, reflection, and emotional motivation showed no significant association.
- **High self-reported reflection was not productive reflection**: evaluation and reflection carried the second-highest mean (3.87 of 5) yet a near-zero link to gains (r = 0.10).
- **Students compared scores but rarely analyzed causes**, and their affect split: some felt more exposed by visible submissions, others less pressure, and three deferred engagement after low scores.

## Study Design & Method

Forty-six sophomores majoring in English Translation and Interpreting at a normal university in central China took part in two intact classes assigned by coin flip to an experimental group (n = 24) or a control group (n = 22). Both followed the same 14-week curriculum, instructor, and weekly exercises, alternating Chinese-to-English and English-to-Chinese tasks. The experimental group submitted each assignment to the proprietary Yunyi system, which scored fidelity, fluency, accuracy, and coherence and returned a transcript, annotated errors, and a reference rendition; the control group recorded their work for the instructor. Data came from blind-rated pre- and post-tests, a questionnaire adapted from the Self-Regulation of Learning Self-Report Scale, and [[qualitative-research|interviews]] with seven students.

## Gains Stayed on the Surface of Language

The time by group interaction was significant [F(1, 44) = 18.00, p < 0.001]. Linguistic accuracy and logical coherence produced significant interactions, and the experimental group consumed 81.1% and 69.3% of its headroom on them, while fidelity and fluency moved 0.04 and 0.18 points. Feedback converted into a gain only where the deficit was decomposable, the signal reliable, and the scale sensitive. Accuracy and coherence met all three. Fidelity failed reliability, tracking human ratings at only r = 0.12, and fluency failed sensitivity, given a pre-test SD of 1.85.

## A Cycle Reinforced in the Middle Only

Read through Zimmerman's three-phase model, the cycle was reinforced during and immediately after practice. Execution and monitoring (M = 3.92) and evaluation and reflection (M = 3.87) scored relatively high, while pre-learning planning (M = 3.01) and emotional motivation (M = 3.06) sat near the midpoint. Only execution and monitoring correlated with score gains (r = 0.42, p = 0.041) and was the sole significant predictor in an underpowered regression (B = 2.51, beta = 0.591, p = 0.039). Students checked the overall score first, but causal analysis was rare, several found the scoring opaque, and goals came from the previous score, not the task ahead.

## What this means for practice
- Keep the immediacy and the individual comparison, since that is what automated scoring supplies and whole-class review cannot.
- Then supply what it does not: a human explanation of why an error occurred, delivered while the diagnostics are fresh, so a short individualized comment lands before the next collective review.
- Because learners set goals from the previous score, not the task ahead, add a brief task-analysis exercise before each assignment.
- Do not read a high reflection score as productive reflection, and do not assume a visible score motivates in one direction, since it drove practice for some students and avoidance for others.
- Treat the scores as [[scaffolding|formative scaffolding]], not a measurement instrument.

## Limitations
- Class-level confounds such as peer dynamics cannot be excluded, so the relationships reported are associative rather than causal.
- Immediacy, individualization, and added time on task were bundled into one condition, so the study speaks to the package, not a single feature.
- The scoring system is proprietary with undisclosed formulations, and its agreement with human raters was limited, weakest on the dimension carrying the most weight.
- Because the human rubric mirrored the system's four criteria, the experimental advantage may partly reflect rubric familiarity. With 24 questionnaire respondents and a design able to detect only effects at or above d = 0.85, the findings are preliminary.

## Connected Concepts

- [[self-regulated-learning]] — Zimmerman's three-phase cycle as the study's analytical frame
- [[automated-assessment]]
- [[formative-assessment]]
- [[feedback]]
- [[metacognition]]
- [[assessment-validity]]
- [[explainable-ai]]

## Connected Articles

- [[aigc-affordance-student-self-regulation-2026]] — AIGC affordance and student self-regulation
- [[pecuchova-automated-grading-open-ended-genai-2026]] — Automated grading of open-ended questions with GenAI
- [[aiawe-automated-writing-evaluation]] — AiAWE: open-source LLM automated writing evaluation

## Citation

Chen, C., & Liu, T. (2026). [*Impact of automated scoring on interpreting performance and self-regulated learning: evidence from a pedagogical experiment*](https://doi.org/10.3389/fpsyg.2026.1867463).