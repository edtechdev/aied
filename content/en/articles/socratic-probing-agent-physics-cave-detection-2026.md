---
title: "Designing an AI Agent That Does Not Tutor: Design Rules for Socratic Probing in Introductory Physics"
created: "2026-10-19T09:20:00-04:00"
updated: "2026-10-19T09:20:00-04:00"
type: article
sources: ['raw/papers/socratic-probing-agent-physics-cave-detection-2026.md']
confidence: high
page_kind: [framework]
research_method: [system development]
level: [undergraduate, higher ed]
audience: [instructors, faculty developers, assessment designers, researchers]
discipline: [physics education]
pedagogy: [socratic-method, misconceptions, productive-failure, scaffolding, metacognition]
technology: [pedagogical-agent, conversational-ai, llm, prompt-engineering, simulating-students, intelligent-tutoring]
assessment: [formative-assessment, assessment-validity, oral-assessment, educational-measurement]
methods: [design-based-research]
foundations: [limitations-in-aied-research, human-ai-collaboration]
ethics: [guardrails, trust-calibration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-19"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Cho (2026) reports the design of a [[conversational-ai|conversational agent]] for introductory mechanics that is built to measure understanding rather than to teach. The agent asks a student to commit to a prediction about an everyday scene, explain it without physics vocabulary, and then defend it against a single changed case constructed from the student's own words. Its core measure is cave detection: a correct first idea abandoned when one variable changes. Every committed answer draws exactly one probe, and the probe after a correct answer has the same form as the probe after a wrong one, so being questioned reveals nothing about correctness. Eight versions and more than 40 scripted simulation runs produced a set of design rules, most of them responses to failures that were invisible in the prompt and obvious in a transcript. The paper is candid that its evidence is circular: no real students have used the agent, the author wrote both the personas and the scoring rules, and the same model family sat on both sides of the exchange. It offers a [[socratic-method|Socratic]] design framework and a [[formative-assessment|formative]] measurement scheme, not evidence about learning.

## Key Findings

1. Cave detection needs a probe, not a quiz. A single right-or-wrong item scores a student who holds a correct idea and one who abandons it identically, because both gave the same first answer.
2. Every committed answer draws exactly one probe, and the Hold probe after a correct answer has the same form as the conflict probe after a wrong one, so being probed carries no information about correctness.
3. The agent scores each of Newton's three laws 0, 1, or 2 for a maximum of 6, with up to 3 bonus points, and reports four outcomes: held, caved, self-corrected, and misconception survived.
4. The ranking inverts a conventional quiz. A wrong-first self-corrector and a right-first caver both score 3/6, but the self-corrector earns the full bonus and the caver earns none.
5. Suppressing praise by listing forbidden phrases increased praise; replacing the list with one positive principle produced 0 of 16 replies containing praise across 8 bait sessions.
6. A single worked example about two buses in outer space appeared to cause repeated drift toward deep-space scenarios in unrelated conversations, because the model treats examples as instructions.
7. In the first full round on version 8, routing was correct in 5 of 5 runs and summary lines matched the conversation in 5 of 5 — checks on internal consistency, not performance claims.

## A probe a correct answer cannot pass

The problem the agent addresses is narrower and harder than cheating. A student can paste a physics question into a general-purpose chatbot and submit a fluent, correct answer without understanding it, and the paper notes that such tools have narrowly passed an introductory [[physics-education|physics]] course. But the author's target is not authenticity. It is whether the idea behind a correct answer survives contact with a case it was not built for. A right-or-wrong record cannot ask that question, because a robust correct answer and one about to collapse look identical at the moment of answering. The agent therefore does one thing: it asks a student to commit to a prediction, explain it in everyday words, and then defend that explanation against a changed case. It does not teach, hint, confirm, praise, or correct during the conversation, and it reports nothing until the end. A conversation takes about six minutes and covers Newton's three laws, with a class number selecting one of three settings and one of three question options.

## Four outcomes a right-or-wrong item erases

The scoring scheme is the paper's main conceptual contribution. Each law scores 2, 1, or 0, for a maximum of 6, with up to 3 bonus points. A 2 requires a correct idea in the student's own words, with no standing misconception, kept under the Hold probe. A 1 covers a correct answer reached only after a probe, a vague or formula-only explanation, or a cave. A 0 means a misconception was still standing at the end, though a cave scores 1 even when the student switched to a misconception, because the first answer was correct and in the student's own words. The four outcomes — held, caved, self-corrected, misconception survived — are recorded per law, so an instructor learns not only that understanding is fragile but which law to revisit with which student. The scheme deliberately ranks [[productive-failure|productive struggle]] above fragile correctness: in the simulation table, the wrong-first self-corrector and the right-first caver both score 3/6, but the self-corrector earns the full bonus and the caver none. The formula-only persona, which would score well on most written instruments, scores 3/6 with no bonus.

## Design rules learned from failure

Most of the rules exist because a scripted persona exposed something that reading the prompt had not. The most counterintuitive concerns [[prompt-engineering|prompt design]]. The first attempt to suppress praise was a list of phrases the agent must never use, and praise increased; naming the phrases appears to have shown the model the register it was told to avoid. The fix was a single principle — the message after a correct answer must be indistinguishable from the message after a wrong one — plus a small set of permitted openers, after which 0 of 16 replies across 8 bait sessions contained praise. A second rule treats every illustrative example as an instruction, after one worked example involving two buses in outer space produced drift toward deep-space scenarios in unrelated conversations. A third, "one concept, one change," began as a matter of style and turned out to be a measurement requirement: a probe that changes two variables cannot say which one caused the result, and a cave is interpretable only if the changed case adds no new physics. Probes quote the student's exact words rather than paraphrasing, because cleaning up a phrase repairs the imprecision that is the diagnostic signal.

## What the simulations can and cannot show

The development ran from September 27 to October 4, 2026, through eight versions and more than 40 scripted runs, each asking how the agent could most cheaply be made to fail. The resulting score profiles separate personas in ways the author reads as evidence of internal consistency. A strong student answering in their own words reaches 6/6 plus 3; an anxious self-corrector 4–5/6 plus 3; a student who holds [[misconceptions]] and attempts prompt injection 0/6. Conflict probes cut the answer-paster from 4/6 + 1 at version 3 to 0–1/6 + 0 in four of six later runs, with two version 7 runs at 3/6 + 0, through an own-words request followed by a probe rather than through any accusation or detection. Structural reliability was checked in 5 of 5 runs for routing, summary-line agreement, and asking the own-example question, and the agent refused all three prompt-injection attempts made across the version history. The author is explicit that this is evidence about the agent, not about students, and that a platform integrity feature rated every simulated cheater as honest.

## What this means for practice

- **Instructors.** Treat a correct answer as a hypothesis, not a result: ask one student to restate the idea in plain words and then apply it to a single changed case, and watch whether the idea or the wording is doing the work.
- **Assessment designers.** Do not grade on this instrument yet. The scores are formative by design, the four-outcome scheme is unvalidated against any concept inventory, and prompt rules alone have a reliability ceiling the author describes as near.
- **Faculty developers.** Adopt the leakage test before adopting the agent: compare the reply after a correct answer with the reply after a wrong one, and if a student could tell them apart, the measurement is already broken.
- **Course teams.** If you build a probing agent, budget for adversarial simulation with deliberately badly behaved personas; the failures that mattered were invisible in the prompt and obvious only in transcripts.

## Limitations

- No real students have used the agent, and no student has used it in a course; the planned pre/post pilot has not been run.
- The evidence is circular: the author wrote the personas and the scoring rules, and the same model family generated both the persona responses and the agent's replies.
- The four-outcome scheme is proposed, not validated; whether its scores track a validated concept inventory is untested, as is agreement with instructor scoring of transcripts.
- Some failures persisted through version 8, including improvised probes that leave the setting or lean toward the answer, occasional cap violations, unprompted empathy, and generous scoring of tentative answers.
- The agent does not authenticate, so a student with another person supplying responses in real time can score well; proctoring and transcript review are needed where identity matters.
- The full system prompt and question bank are not released with the paper, so the design rules cannot be reproduced directly from the text.

## Citation

Cho, B. (2026). [*Designing an AI Agent That Does Not Tutor: Design Rules for Socratic Probing in Introductory Physics*](https://arxiv.org/abs/2610.22949). arXiv:2610.22949.
