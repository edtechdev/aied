---
title: "How AI Impacts Skill Formation"
created: "2026-11-11T15:20:00-05:00"
updated: "2026-11-11T15:20:00-05:00"
type: article
published: "2026"
evidence_context: non_educational
sources: ['raw/papers/shen-ai-skill-formation-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment, user study, thematic analysis]
discipline: [cs education]
audience: [instructors, software developers, researchers]
level: [adult learning]
foundations: [cognitive-offloading, human-ai-collaboration]
pedagogy: [student-ai-interaction, productive-failure, professional-training]
technology: [generative-ai, llm]
methods: [rct, qualitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
---

> **Synthesis:** Shen and Tamkin (2026) randomized 52 professional and freelance developers to learn an unfamiliar asynchronous Python library, Trio, with or without a GPT-4o coding assistant. The AI group scored 17% lower — 4.15 of 27 points — on a quiz covering conceptual understanding, code reading, and debugging (d = 0.738, p = 0.010) and finished no faster (p = 0.391). Screen recordings of every session explain both results: assistance removed the errors that had made the control group reason about the library, while the time it saved went into composing and reading queries. Six recurring [[student-ai-interaction|interaction patterns]] separated sharply, with three that kept the learner cognitively engaged scoring 65–86% and three that handed the work to the model scoring 24–39%.

## Key Findings

1. **AI assistance cut measured skill without speeding the task.** With 26 participants per arm and a 27-point quiz, the treatment group scored 4.15 points lower (17%, two grade points; Cohen's d = 0.738, p = 0.010) while completion time did not differ significantly (p = 0.391).
2. **The deficit appeared at every experience level.** The control group outscored the AI group among participants with 1–3, 4–6, and 7+ years of coding experience, so the task was new to all three bands rather than only to novices.
3. **Debugging lost the most and code reading the least.** An exploratory breakdown by question type found the largest gap on debugging questions and the smallest on code reading, consistent with the control group meeting more errors during the task.
4. **Errors, not minutes, tracked learning.** The median AI participant encountered one error (Q1–Q3: 0.0–3.0) against three for controls (2.0–5.0), and Trio-specific errors such as un-awaited coroutines and coroutine-for-function TypeErrors were much rarer under assistance.
5. **Full delegation bought speed and lost the library.** Participants who only asked the assistant to write code finished fastest at 19.5 minutes but averaged 39% on the quiz, against roughly 22–24 minutes and 65–86% for the three engaged patterns.
6. **Three patterns preserved learning under AI.** Generation-then-comprehension (n = 2, 86%), hybrid code-explanation (n = 3, 68%), and conceptual inquiry (n = 7, 65%) all kept the participant doing cognitive work the model could have done.
7. **Typing the generated code instead of pasting it did not help.** Participants who manually copied AI output scored no better than those who pasted it, which the authors read as evidence that cognitive effort rather than time on task is what mattered.

## The task: one hour with a library nobody had used

The study targets on-the-job learning, the case where a working developer must pick up an unfamiliar tool to finish a task. Trio is a Python library for asynchronous concurrency whose structured-concurrency concepts go beyond Python fluency, and it is less widely used than asyncio by StackOverflow volume. Participants received two tasks with problem descriptions, starter code, and brief explanations of the Trio concepts involved, thirty-five minutes to complete them, and a warm-up task with no asynchronous content to calibrate Python familiarity. The AI condition added a chat assistant built on GPT-4o that could see the participant's current code and could produce complete, correct solutions for both tasks on request; both conditions kept web search and the written instructions.

Fifty-two crowd workers completed the main study, 26 per arm, all with more than a year of Python experience, weekly Python use, prior exposure to AI coding tools, and no prior Trio use. They were paid a flat \$150 and averaged 58.5 minutes across the warm-up, the task, and the quiz. The quiz was taken with no AI access and contained 14 questions worth 27 points across debugging, code reading, and conceptual understanding; code-writing questions were excluded because syntax errors are cheap to fix with a query. The design was preregistered, and four pilots on two platforms changed it materially: 35% then 25% of control participants used AI despite instructions, which is why the final platform required screen recording, and local item dependence in an early quiz led to splitting questions across pages.

## AI assistance lowered quiz scores without speeding the work

The main result is a dissociation. The AI group's mean quiz score was 4.15 points lower, a 17% difference on the 27-point instrument, and the effect survived controlling for warm-up task time (d = 0.725, p = 0.016). Completion time, the productivity measure, showed no significant difference. Four of the 26 control participants did not finish the second task within the limit while every AI participant did, but the average times remained statistically indistinguishable.

The screen recordings account for the missing speedup. Some participants spent up to 11 minutes interacting with the assistant during a task whose median completion time in the AI condition was 19 minutes, and a few spent up to six minutes composing a single query. Participants who asked many questions or asked for explanations alongside generated code paid back the time they saved on typing. The authors argue that this makes a chat interface a conservative test: an [[agentic-ai|agentic]] or autocomplete tool would remove even the query-composition cost, so the knowledge loss would likely be larger, not smaller. [[self-report-measures|Self-report]] points the same way — the control group reported higher learning on a seven-point scale, and the AI group found the task easier while finding the quiz just as hard.

## Six interaction patterns, two learning outcomes

Coding every AI query and annotating the recordings produced six patterns, and the spread between them is larger than the average treatment effect. The low-scoring three shared a transfer of the work itself: AI delegation (n = 4, 19.5 minutes, 39%) asked only for generated code and pasted it; progressive AI reliance (n = 4, 22 minutes, 35%) began with a question or two and then delegated everything, failing to master the second task's concepts; iterative AI debugging (n = 4, 31 minutes, 24%) made five to fifteen queries but used the assistant to solve problems rather than to clarify its own understanding, and was both slower and worse.

The high-scoring three kept something for the learner. Conceptual inquiry (n = 7, 22 minutes, 65%) asked only conceptual questions, met many errors, and resolved them independently. Hybrid code-explanation (n = 3, 24 minutes, 68%) requested code together with an explanation and read the explanation. Generation-then-comprehension (n = 2, 24 minutes, 86%) looked almost identical to delegation from the outside — generate, then paste — but added follow-up questions about the generated code, which is the difference the authors single out. Query counts show where the group leaned: explanations were the most common request (79 queries, asked by 21 of 25 participants), code generation second (51 queries, 16 of 25), and debugging a distant third (9 queries).

## Errors carried the learning

The mechanism the authors propose is error encounter, not time on task. Control participants met more errors, including the Trio-specific failures that force an understanding of coroutines and ``await``; AI participants mostly ran their code successfully on the first attempt. The largest quiz gap fell on debugging questions, the skill that encountering and diagnosing those errors would build, while code reading — which both groups practiced — showed the smallest gap. Manual typing did not substitute for this: participants who retyped generated code spent more time and scored no better than those who pasted it.

For education, the study is a warning about the default use of coding assistants in [[cs-education|programming courses]], not a measurement of one. Its population was working developers learning a library, not students in a course, and the outcome was a quiz rather than a course grade or a later project. What transfers is the mechanism and the contrast it creates: an assistant that supplies working code removes exactly the failures through which a learner would otherwise build a mental model of the library, and the [[productive-failure|productive-failure]] literature predicts that removal costs durable learning while leaving the finished artifact looking better. The six patterns also give [[student-ai-interaction]] a causal outcome variable that most interaction typologies lack, and they suggest that [[professional-training|on-the-job training]] — the setting with the strongest productivity pressure to delegate — is where [[cognitive-offloading|offloading]] is least likely to be noticed and most costly.

## What this means for practice

- **Instructors.** Assess the unaided residue of AI-assisted work. The quiz in this study was taken with no AI access, and that is what exposed the 17% gap that completion time concealed.
- **Instructors.** Let students meet the errors. The control group's advantage tracked the Trio-specific failures it had to diagnose; handing over working code removes the diagnostic work, so keep at least some tasks where the first run fails.
- **Software developers.** When the goal is learning a new library rather than shipping, ask for explanations or conceptual questions and write the code yourself, or generate first and then interrogate the output. Delegation was the fastest pattern and the worst for skill.
- **Researchers.** Test the agentic case the authors flag as untested. A chat assistant that requires composing a query is already a lower bound on offloading; an agent that edits files directly removes the deliberation this study credits with preserving some learning.

## Limitations

- One library, two tasks, and a single hour, so the authors describe the result as a first step rather than a measure of skill formation over months.
- The AI condition used a GPT-4o chat assistant with access to the participant's code, and the authors argue that agentic coding tools would require even less participation; the finding is scoped to that generation of chat assistance.
- Participants were crowd workers paid a flat \$150, not employees who needed the library for their jobs, so the incentive to learn was weaker than in workplace training.
- The outcome was a 14-question quiz; no transfer task, later project, or retention interval was measured.
- The six interaction patterns rest on clusters of two to seven participants, so the ordering is suggestive and the per-pattern scores are not stable estimates.
- The control condition retained web search and written instructions, so the comparison is an AI assistant against conventional resources rather than AI against nothing, and no human-assistance arm was run.

## Citation

Shen, J. H., & Tamkin, A. (2026). [How AI Impacts Skill Formation](https://arxiv.org/abs/2601.20245). arXiv:2601.20245.
