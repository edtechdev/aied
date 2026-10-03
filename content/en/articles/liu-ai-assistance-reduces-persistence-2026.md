---
title: "AI Assistance Reduces Persistence and Hurts Independent Performance"
created: "2026-10-03T12:10:37-04:00"
updated: "2026-10-03T12:10:37-04:00"
type: article
sources: ['raw/papers/2604.04721.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [math education, english education]
level: [adult learning]
audience: [instructors, researchers, learners]
pedagogy: [motivation, metacognition, productive-failure, problem-solving]
technology: [generative-ai, llm, conversational-ai]
assessment: [learning-gains]
methods: [rct, quantitative-research]
ethics: [ai-misuse-learning-harm]
foundations: [cognitive-offloading, cognitive-surrender, human-ai-collaboration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-03"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A tutor who scaffolds a learner's effort and one who simply supplies answers look identical while the answer is being supplied; they diverge only after it is removed. Liu and colleagues test that divergence directly in three randomized experiments with 1,222 online participants, giving one group a GPT-5 sidebar that already knows each problem's solution, then withdrawing it without warning. AI assistance raised performance during the assisted phase, but once it was gone the assisted group solved fewer problems and skipped more of them than controls — the signature of reduced persistence rather than of lost skill alone. The authors argue the mechanism is a shift in expectations and a lost [[metacognition|calibration]] that unaided work used to supply.

## Key Findings

1. Across three randomized experiments with 1,222 US-based Prolific participants, AI assistance improved performance while available but left participants solving significantly less well once the assistant was removed without warning — effects that appeared after roughly ten minutes of interaction.
2. In the fraction-arithmetic experiment, the AI group solved 0.57 of unassisted test problems against 0.73 for controls (t(305) = −3.64, P < 0.001, Cohen's d = −0.42), while skipping 0.20 of them against 0.11 (t(305) = 2.16, P = 0.031, d = 0.25).
3. The pattern replicated in a second fraction experiment designed to remove a skill confound and to give controls a sidebar holding pretest solutions: the AI group solved 0.71 against 0.77 (t(583) = −2.33, P = 0.020, d = −0.19).
4. It replicated again in a reading-comprehension task, where the AI group solved 0.76 of unassisted problems against 0.89 (t(166) = −2.72, P = 0.007, d = −0.42) and skipped 0.08 against 0.01 (t(166) = 2.69, P = 0.008).
5. Skipping is the paper's persistence measure rather than a skill measure: participants were told payment did not depend on correctness and that wrong answers carried no penalty, and a correct solution was displayed after any mistake, so declining to attempt a problem reads as a deliberate decision not to engage.
6. The authors propose two mechanisms: repeated instant answers reset the reference point for how long work should take, making unaided effort feel disproportionately costly in a self-reinforcing loop, and removing [[productive-failure|productive struggle]] denies people the evidence about their own capability that sustains [[motivation|persistence]].
7. They caution that if brief exposure produces measurable erosion, cumulative effects of routine use over months or years may be larger and harder to reverse — an argument they frame as a [[educational-policy-ai|policy]] concern rather than a measured long-term result.

## Three experiments, one design

All three studies share the structure that makes the finding interpretable. Participants first work through a learning phase with an AI sidebar, then the assistant is withdrawn without warning and they attempt three further problems that are identical across conditions. Everyone is told that payment does not depend on how many problems they solve correctly and that there is no penalty for wrong answers.

That design choice matters for reading the results. Because skipping was costless and explicitly permitted — a "skip" button sat beside the answer field — choosing to skip expresses a decision not to engage rather than a strategy to protect a score. [[cognitive-offloading|Offloading]] during the assisted phase is therefore measured against a persistence baseline rather than against a grade.

The AI itself was deliberately powerful: a GPT-5 assistant pre-prompted with each problem and its solution, so a participant typing "answer?" received the solution immediately. The authors chose this to model the short-sighted collaborator they describe — one that never says no and answers instantly — rather than a scaffolded tutor.

## What happened when the AI was removed

In every experiment the assisted group performed better while the assistant was present and worse once it left. In the first fraction study the solve-rate gap on the unassisted test was 0.42 standard deviations; in the reading-comprehension study it was the same size, with the skip-rate gap mirroring it.

The second fraction experiment is the more careful test. There, exclusions used pretest rather than in-experiment performance, addressing a confound in the first study whereby an AI-assisted participant who lacked basic fraction skills could still have submitted correct answers; controls also received a sidebar showing pretest solutions, so the interface did not change shape when the AI vanished. The effect shrank to d = −0.19 but held. Attrition was near-identical between conditions (11.7 percent assisted, 12.9 percent control).

The authors read the reading-comprehension replication as the important one. Fraction arithmetic is easy to dismiss as delegable to a calculator; comprehension of a passage is closer to the reasoning that [[critical-thinking|critical thinking]] rests on, and there the assisted group skipped eight times as often as controls.

## Two mechanisms, and why they compound

The paper's explanation has two parts. The first is a reference-point shift: when tasks are routinely completed in seconds, unaided work starts to feel disproportionately effortful, a process the authors liken to hedonic adaptation. They stress that this loop is self-reinforcing — each act of offloading moves the reference point, raises the subjective cost of working unaided, and makes the next offloading decision easier.

The second is metacognitive. If people never work through difficulty, they lose the evidence base for judging what they can do, which the authors connect to the [[metacognition|calibration]] literature: persistence depends on reasonably accurate self-knowledge, and AI removes the ordeal that produces it. Together the mechanisms predict effects beyond persistence, which the authors flag as a direction for longitudinal work rather than something these experiments demonstrate.

They also situate the result against prior evidence that was largely correlational or small-sampled, and note it aligns with findings that AI raises homework scores while lowering exam performance, with the losses concentrated among students who outsource their work.

## What this means for practice

- **Instructors.** Do not assume that better performance during AI-assisted work predicts better performance after it. In all three experiments the assisted group looked stronger while the tool was present; the difference only appeared when it was withdrawn, so build an unaided checkpoint into any task where AI is allowed.
- **Instructors.** Watch for disengagement rather than wrong answers. The measure that moved most reliably was skipping, and because skipping was explicitly costless it signals motivation rather than ability — worth responding to as a design problem before treating it as a knowledge gap.
- **Instructional designers.** Keep some difficulty unscaffolded. The paper's own recommendation is to prioritize [[scaffolding]] long-term competence alongside immediate task completion, which means designing moments where students work things out without an assistant in reach.
- **Institutions.** Treat the accumulation argument as a monitoring case, not a proven one. The experiments show short-term erosion after brief exposure; the claim that routine use compounds over years is the authors' inference, and evaluating it needs longitudinal evidence they say does not yet exist.

## Limitations

- Participants were US-based Prolific workers completing paid, roughly 13- to 15-minute online tasks, not students in a course. The tasks captured discrete [[problem-solving|problem solving]] under time pressure, so the results speak to brief, decontextualized problem solving rather than to classroom learning over a term.
- The AI condition used a GPT-5 assistant pre-prompted with each problem and its solution, which is a deliberately maximal version of "AI gives the answer." Results may differ with a scaffolded tutor, and other work has found scaffolded conditions mitigate the effect.
- Follow-up was immediate, within a single sitting, so the study measures persistence right after removal rather than retention over days or weeks, and the compounding-across-months argument is an inference rather than a finding.
- Persistence is operationalized as clicking skip. That conflates deliberate disengagement with other reasons a participant might decline to answer, though the authors designed the instructions and incentives to narrow that reading.

## Citation

Liu, G., Christian, B., Dumbalska, T., Bakker, M. A., & Dubey, R. (2026). [AI Assistance Reduces Persistence and Hurts Independent Performance](https://arxiv.org/abs/2604.04721). *COLM 2026*. arXiv:2604.04721.
