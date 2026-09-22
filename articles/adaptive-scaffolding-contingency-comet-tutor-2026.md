---
title: "Adaptive Scaffolding Needs Contingency: An AI Tutor That Escalates and Fades on What the Learner Does"
created: "2026-09-22T09:23:08-04:00"
updated: "2026-09-22T09:23:08-04:00"
type: article
published: "2026-09-19"
sources: ['raw/papers/adaptive-scaffolding-contingency-comet-tutor-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [cs education]
level: [adult learning, higher ed]
audience: [instructors, researchers]
foundations: [cognitive-offloading, human-ai-collaboration]
pedagogy: [scaffolding, metacognition, self-regulated-learning, productive-failure]
technology: [intelligent-tutoring, conversational-ai, pedagogical-agent, adaptive-learning, llm]
assessment: [self-report-measures, feedback]
methods: [mixed-methods-research, quantitative-research]
ethics: [guardrails]
connected_faqs: [developing-ai-tutor, reducing-over-reliance]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
---

> **Synthesis:** The usual fix for AI-assisted [[cognitive-offloading]] is to give less away, which conflates two quantities: the cognitive load a system carries and the [[metacognition|metacognitive demand]] a learner faces before help arrives. This paper separates them and builds CoMeT, whose support climbs one rung each time a learner does not use it at a decision point and drops to the lightest rung on take-up. Across three Python tasks, 131 [[adult-learning|adult learners]] met CoMeT, an unrestricted assistant, and a question-only tutor. CoMeT matched the withholding tutor's demand, delivered an artifact twice as often as the answer-on-request tutor, sat between the baselines on frustration, and surrendered the full answer once in sixteen sessions. Fading held when the learner's turn was aimed at the decision under support, whatever its depth — an answer to what a [[scaffolding]] system must read.

## Key Findings
1. **Contingency separated demand from load.** CoMeT placed the withholding tutor's metacognitive demand — effort on approach equivalent within 0.25 scale points (p_TOST = .004) — while perceived task and germane load separated no pair.
2. **Delegation held and delivery rose.** Learners asked CoMeT to build in 50.4% of sessions against 51.1% under the unrestricted tutor (OR = 0.95, p = .82) and 23.7% under the question-only tutor; an artifact reached the workspace in 48.1% of CoMeT sessions against 23.7%.
3. **Frustration sat between the baselines.** CoMeT was 0.42 scale points more frustrating than the answering tutor (p < .001) and 0.29 less frustrating than the withholding tutor (p = .011).
4. **Aim, not depth, warranted fading.** Turns about a different decision were followed by a later concession 65.0% of the time, twice the rate for turns aimed at the decision under support.
5. **Learners often did not answer.** Only 282 of 515 coded fading episodes followed an answer; take-up was 37.0% after the first ask and 21.8% after the third.
6. **The full answer was surrendered least.** CoMeT gave away the whole answer in 6.1% of sessions against 59.5% under the answering tutor and 16.0% under the question-only tutor, with distress detected in 8.4% against 16.0%.
7. **Demand did not cost productivity.** Learners produced 16.8 turns per session with CoMeT versus 14.0 with the question-only tutor (p = .17) and 5.0 with the answering tutor (p < .001), and logged more failing runs (4.06 versus 2.37).

## Two quantities, not one
The design rests on a distinction from cognitive load theory. Intrinsic, extraneous, and germane load describe the working-memory cost of a task, while metacognitive demand describes what the learner must decide, state, or judge before help arrives; the second is not simply what remains when help is withheld. CoMeT holds demand constant and lets the load the system carries vary with demonstrated need — a principle the authors call preserved metacognitive demand. Support is scoped to authored decision points, and the ladder has three rungs: name the decision and point to where its answer lives, repeat the ask narrowed by a specific hint, then reason through a parallel case the learner carries back. Only then does the tutor concede that point and build. The tutors share a pinned model version (Claude Haiku 4.5) and never judge correctness.

## What the three tutors did
Every participant met all three tutors, one per Python task, under a Williams square over six orderings; the analyzed sample is 131 of 162 starters, contributing 393 task sessions. The unrestricted tutor answered on the first ask; the question-only tutor released only through a welfare floor. CoMeT's position was not the midpoint the design vocabulary predicts: it carried more labor than the tutor that never withholds, with an artifact reaching the workspace in 48.1% of its sessions against 23.7% and more lines of code written (25.3 versus 15.4). Learners reported receiving less direct help from CoMeT while attributing the finished solution less to it.

## What a fading system must read
Contingency requires diagnosing the learner's state, and on a text channel the evidence is not a correct answer. CoMeT faded on 551 occasions, 515 of them coded from 100 sessions with substantial inter-coder agreement (92.2% on warrant, Cohen's κ = .74). Depth does not predict whether fading held: after a full demonstration the tutor later conceded 30.3% of what was still open, after a pasted artifact 25.9%, after a bare assertion 20.4%, and after a request to build 33.7%. What separates them is aim. Turns not aimed at the decision under support were followed by concession 40.3% of the time against 28.8% for aimed turns, an 11.5-point difference (95% bootstrap interval [2.1, 22.4]). A learner who fixed the plan without replying was as safe to fade from as one who explained the rule.

## What this means for practice
- **Instructors.** Judge a tutor by when help arrives, not by how much it withholds. Restricting an assistant sets one position for every learner and, here, was the configuration learners delegated to least.
- **[[educational-technology-developers|Educational technology developers]].** Detect aim, not effort: a take-up detector should ask whether the turn addresses the decision under support, because a careful answer about the wrong decision is what a depth measure gets wrong.
- **Instructional designers.** Keep a floor that opens on an explicit statement of giving up rather than on frustration, or the learners who most need the demand route around it.
- **Researchers.** Instrument what reaches the workspace and in what pieces; counting what a tutor is willing to say misses the difference between a whole program delivered at once and the same support delivered one decision at a time.

## Limitations
- Participants met all three tutors in one untimed sitting and the analyzed sample is by construction those who passed every task, so retention is the question this design is least able to answer.
- Load was measured by [[self-report-measures|self-report]] with mostly single items, so intrinsic and extraneous load are not separated and germane load rests on written responses.
- Participants answered a social media call with [[generative-ai|generative AI]] already routine in their coursework (106 of 131 rated their AI use at 4 or 5), and task order was fixed, so position is a covariate rather than identified.

## Connected Concepts
- [[scaffolding]]
- [[metacognition]]
- [[productive-failure]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[help-seeking]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[pedagogical-agent]]
- [[conversational-ai]]
- [[cs-education]]
- [[feedback]]
- [[self-report-measures]]
- [[prior-knowledge]]
- [[guardrails]]

## Connected Articles
- [[wang-safety-gap-productive-struggle-2026]] — The Safety Gap: Restoring Productive Struggle Through Pedagogically Aligned Generative AI
- [[preferred-scaffolding-ai-mathematical-modeling]] — Preferred Scaffolding Does Not Lead to Better Learning Performance
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Towards the Pedagogical Steering of Large Language Models for Tutoring
- [[zohar-bloom-inzlicht-against-frictionless-ai-2026]] — Against frictionless AI
- [[ai-writes-code-student-writes-model-2026]] — The AI Writes the Code, the Student Writes the Model
- [[soft-barriers-copying-ai-programming-2026]] — Do Not Copy/Paste: Soft Barriers for Copying in AI-Assisted Programming
- [[cstutorbench-slm-tutors]] — CSTutorBench: Benchmarking Small Language Models as Tutors for Block-Based Programming
- [[chatgpt-teachable-agent-programming-lbt-2024]] — Learning-by-Teaching with ChatGPT: The Effect of a Teachable ChatGPT Agent on Programming Education
- [[llm-judged-helpfulness-pedagogy-signal]] — Rethinking LLM-Judged Helpfulness as a Pedagogy Signal

## Citation
Hou, X., Weng, Y., Yeh, C. H., Lee, D. L., Zheng, L., Li, F., et al. (2026). [Adaptive Scaffolding Needs Contingency: An AI Tutor That Escalates and Fades on What the Learner Does](https://arxiv.org/abs/2609.22993). arXiv:2609.22993.