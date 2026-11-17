---
title: "Turning Errors into Successes: Designing LLM Tutoring Around Scaffolded Error Correction"
created: "2026-11-17T09:40:00-05:00"
updated: "2026-11-17T09:40:00-05:00"
type: article
authors: ["Asher, M. W.", "Cao, M.", "Carvalho, P. F."]
published: "2026"
venue: "arXiv preprint 2611.20061"
source_url: https://arxiv.org/abs/2611.20061
evidence_context: educational
confidence: medium
pedagogy: [socratic-method, scaffolding, mastery-learning, productive-failure, motivation]
technology: [llm, conversational-ai, intelligent-tutoring, generative-ai]
assessment: [feedback, learning-gains, evaluative-judgment, self-report-measures]
methods: [quantitative-research]
research_method: [experiment]
discipline: [math education]
level: [adult learning]
audience: [instructors, educational technology developers, researchers]
page_kind: [evaluation]
sources: ['raw/papers/asher-llm-tutoring-scaffolded-error-correction-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
---

> **Synthesis:** [[generative-ai|Generative AI]] [[intelligent-tutoring|tutors]] usually sit beside the problem and wait to be asked, which gives students a way to skip the practice that makes tutoring work. Asher, Cao and Carvalho tested a different placement: after every error, an [[llm|LLM]] tutor stepped in and used [[socratic-method|Socratic questioning]] to walk the learner back to a correct equation. In a preregistered online experiment, 400 adults practiced setting up constraint equations and received one of four responses to each attempt: the correct answer, a generic explanation, a personalized explanation, or Socratic tutoring. The tutor resolved 64% of the errors it saw, and Socratic participants scored 0.24 SD higher on practice-aligned posttest items than the explanation-only conditions, nine percentage points at p = .048, while reporting more interest, less frustration and lower perceived cost despite spending nearly twice as long. Personalized explanations added nothing over generic ones, and neither reliably beat simply showing the correct answer.

## Key Findings

- **Socratic tutoring beat explaining the answer.** On questions aligned with the practiced skill it gained nine percentage points, 0.24 SD, contradicting the preregistered prediction of no benefit.
- **The tutor resolved most of the errors it engaged.** Participants reached a correct equation in 131 of 206 errors (64%), and 89% of the 91 who made an error resolved at least one with help.
- **Personalized explanations added nothing.** Tailoring the explanation to the student's own wrong answer did not improve any of the three performance outcomes over a generic explanation.
- **Explaining did not beat showing the answer.** Plain correct-answer feedback performed about as well as either explanation condition on the practice-aligned items.
- **The gain did not transfer.** The pretest-aligned question rose from 15% to 64% equally in every condition, and no condition effect appeared on the challenge question.
- **Motivation improved despite the time cost.** Socratic tutoring took 13.3 minutes against 6.8 to 7.3 elsewhere, yet cut perceived cost and frustration by about 0.38 SD each.
- **Resolved errors tracked better outcomes.** Inside the Socratic condition, each error coached to a correct answer was associated with 0.41 SD higher practice-aligned performance.

## Four ways to answer a wrong attempt

The experiment ran online through Qualtrics as a between-subjects design with 400 adults recruited on Prolific. Eligibility screening did the work of controlling [[prior-knowledge]]: anyone who could already write the constraint equation for a fence along a river, 470 participants, was paid \$1 and dismissed, so the analyzed sample began at a mean pretest score of 15%. The session moved through a pretest, a baseline questionnaire, three practice problems of increasing complexity (a gate, internal dividers, two materials at different prices), and a five-item posttest. Participants were randomly assigned to correct-answer feedback (n = 101), generic explanatory feedback (n = 100), personalized explanation (n = 100) or Socratic tutoring (n = 99). All four arms were built around a first attempt, which makes this a test of what happens after [[productive-failure]] rather than a test of whether practice works; every condition gained substantially on the pretest-aligned item. That baseline matters because deployed tutors have produced small effects in classrooms: 0.06 to 0.08 SD per year in a two-year [[one-click-away-khanmigo-two-year-school-experiment-2026|Khanmigo trial]].

## The tutor that would not give the answer

The Socratic condition used Gemini 3.5 Flash with default settings, including a "medium" level of thinking. The model received the problem, the correct equation and the same pre-written explanation shown to the other conditions, and was prompted to withhold the answer and use Socratic questioning to guide the learner to a correct answer through a series of scaffolded questions. Participants replied with a revised equation or a question of up to 300 characters. A correct answer, on submission or mid-dialogue, was confirmed and explained; after six tutor replies without success the tutor stated the answer; chats were capped at eight tutor replies or 10,000 characters. No human reviewed or edited a message. Each message averaged roughly 800 input and 900 output tokens, about one cent, or 12 cents per participant in the Socratic arm. That is a [[scaffolding]] loop that ends in a definite answer, not an open [[conversational-ai|conversational assistant]]; the cap keeps a miscalibrated tutor from trapping a learner in an endless question chain.

## A narrow gain, and a motivational one that is not

The performance result is confined to the three questions that were harder versions of the practice problems. On the pretest-aligned item, which tested an objective the session never taught, scores rose from 15% to 64% with no difference between conditions, so the practice-and-feedback structure did the work and the tutor added nothing. On the challenge item, which combined a missing side, two materials and a gate, condition effects were absent. What the Socratic arm did produce, alongside its 0.24 SD gain, was a better experience: 0.38 SD lower perceived cost, 0.39 SD less frustration, 0.38 SD higher situational interest, and 0.52 SD higher judgments of learning, all despite nearly double the time on task. The authors read this as a [[mastery-learning|mastery]] experience: the tutor notices the struggle, steps in, and stays until the error becomes a success, which is also a [[self-efficacy]] argument rather than a feedback-precision argument.

## Why personalization lost

The personalized condition appended a two- to three-sentence account of the participant's specific error on top of the generic explanation rather than replacing it, so the added text may have been redundant or simply more to process. The null is worth taking seriously because the [[feedback]] literature predicts the opposite: elaborated feedback usually beats correct-answer feedback, and here it did not. The authors' explanation is the sample: these were novices who could not solve the pretest, and novices may not be able to map a general explanation onto their own work, so comparing their equation against the correct one may serve them as well. The perception data show the trap plainly. Explanation conditions rated their feedback as more effective than correct-answer feedback did, by 0.45 SD, and gave higher judgments of learning, by 0.33 SD, while learning no more. That is an [[evaluative-judgment]] failure any instructor deploying explanations should expect, and the strongest argument here for testing outcomes rather than asking students whether feedback helped.

## What this means for practice

- **Instructors:** put the tutor after the attempt, not beside the page. A chatbot reachable before a first attempt invites answer-seeking, and the design that worked here returned students to the same problem until they solved it.
- **Educational technology developers:** build retry-until-correct and a reply cap into the loop before investing in personalization. The personalization pass bought no measurable learning in this experiment.
- **Instructors:** expect [[transfer-of-learning|near transfer]] only. The tutor improved the skills it practiced and did nothing for a combined problem that required assembling them.
- **Administrators:** budget for the dialogue, not the message. Twelve cents per learner per session is trivial against a human tutor and material at institutional scale, especially where sessions repeat.

## Limitations

- 400 US adults on Prolific, one session of roughly 20 minutes, one task. There is no classroom, no course grade, and no delayed test, so persistence is unmeasured.
- The Socratic arm bundled four changes at once: a retry after each error, adaptively scaffolded sub-questions, personalized feedback along the way, and an encouraging conversational tone. The design cannot say which produced the gain.
- The comparison is not time-equated. Socratic participants spent 13.3 minutes against 6.8 to 7.3 in the other arms, and no arm was given extra practice to match.
- There is no human tutoring arm, so the 0.24 SD is not a claim about how close an LLM gets to a skilled tutor.
- Perceived cost, frustration, interest and judgments of learning are [[self-report-measures|self-reported]] on Likert scales, not behavioral measures.
- One model version, Gemini 3.5 Flash at default settings, fixes both the behavior and the price; a different model or a no-thinking configuration would change the cost arithmetic.

## Citation

Asher, M. W., Cao, M., & Carvalho, P. F. (2026). [*Turning Errors into Successes: Designing LLM Tutoring Around Scaffolded Error Correction*](https://arxiv.org/abs/2611.20061). arXiv preprint 2611.20061.
