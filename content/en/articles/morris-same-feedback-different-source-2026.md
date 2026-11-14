---
title: "Same Feedback, Different Source: How AI vs. Human Feedback Attribution and Credibility Shape Learner Behavior in Computing Education"
created: "2026-11-11T07:37:06-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors]
sources: ['raw/papers/morris-same-feedback-different-source-2026.md']
source_url: "https://arxiv.org/abs/2604.03075"
source_depth: full text
confidence: high
foundations: [ai-literacy]
technology: [generative-ai, llm]
assessment: [feedback, formative-assessment]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Morris and Maes (2026) gave 148 adults the same [[feedback|feedback]] on a coding tutorial, written by one model, and varied only how it was labeled: AI-generated, or a human teaching assistant who had reviewed their work. Learners who believed a person had read their code worked longer and stayed focused longer, but produced no better code. Nearly half of the group told a human had reviewed them did not believe it, and those learners disengaged, doing worse than students told plainly that the feedback was AI. A short processing delay, by contrast, improved the code itself. The lesson for [[trust-calibration|trust calibration]] is that a human label buys effort only while it is credible, and costs more than honesty when it is not.

## Key Findings

1. **Believed human feedback raised effort, not quality.** Students who accepted that a teaching assistant had reviewed their work spent noticeably longer on the task and kept the tutorial in focus longer than students told the same feedback was AI. Their programs were not better. Treat the human label as a motivator, not a quality lever.
2. **A short wait improved the code.** When AI feedback arrived after a pause rather than instantly, students wrote more complex programs, and modestly longer ones, without working longer or running the code more often. A pause appears to invite thinking that an instant reply skips.
3. **Students rated every version about equally helpful.** Helpfulness scores barely moved across conditions, so a satisfaction survey will not tell you whether feedback is doing its job.
4. **Nearly half of the human-labeled group did not believe the label.** Among students told a person had reviewed them, just over half accepted it and just under half did not, and the two groups were indistinguishable before the study — same coding experience, same use of AI tools, same opinion of AI.
5. **Disbelievers did worse than students given [[explainable-ai|transparent AI]].** Learners who caught the false human label wrote shorter, simpler programs and spent less time focused than learners told from the start that the feedback was AI.
6. **The gap between believers and disbelievers was very large.** Believers stayed on task far longer, focused longer and produced more complex, longer code. What separated the two groups was belief, not prior ability.
7. **Social presence did not explain the gap; motivation did.** Students did not report feeling more watched or judged under the human label, but intrinsic interest and self-directed effort were highest among believers and lowest among disbelievers.

## What the study did

Morris and Maes recruited 150 adults through Prolific and analyzed 148 after two submitted no code. Participants worked through a self-paced p5.js tutorial — shapes, colors, interaction and a mini-project — submitting code at each checkpoint and receiving technical and creative feedback on it. All feedback came from Claude Sonnet 4 under a single [[prompt-engineering|prompting]] template that fixed tone, structure and the balance of encouragement and correction, so the content differed only because each person's code differed. The study was pre-registered, as was the pilot that preceded it, and used IRB-approved deception disclosed at debriefing.

The design crossed condition with feedback type. One group received AI-labeled feedback after five seconds; a second received AI-labeled feedback after sixty seconds, with a processing animation; a third received feedback after sixty seconds with a review animation and a human teaching assistant label. Comparing the two delayed groups isolates attribution at constant timing; comparing the two AI groups isolates timing at constant attribution. Time on task, time with the tutorial window in focus and code executions were logged automatically; output was measured as code length and an experience-adjusted complexity score. The confirmatory contrast counts only students in the human-labeled condition who believed the label, so it estimates the effect of believed attribution rather than the effect of assignment.

## Two levers that act on different things

The two manipulations moved different measures, which is the practical point. Believed human attribution raised how long people worked and how much of that time the tutorial held their attention — roughly 28% more time on task — while leaving what they produced unchanged. The delay did the reverse: waiting a minute before feedback produced more complex programs, and longer ones, without adding time on task or more test runs. The authors suggest the pause creates an interval for [[metacognition|reflection]], though nothing in the design records what participants did during it.

Two theories predicted different things about the human label. [[community-of-inquiry|Social presence]] theory says belief in a human reviewer should make learners feel observed, judged and accountable. [[self-determination-theory|Self-determination theory]] locates the value in relatedness — the sense that one's work is seen and valued — and predicts that a disbelieved label should deflate [[motivation|intrinsic motivation]] rather than return behavior to an AI baseline. The survey sided with the second. Items about feeling attended to, judged or wanting to show appreciation were flat across groups, as was external motivation, while intrinsic interest and self-directed effort were highest among believers and lowest among non-believers.

## When the human label is not believed

Credibility was the exploratory question and produced the study's most consequential result. Disbelief was not evenly distributed — 24 of the 50 students in the human-labeled condition rated their belief at 4 or 5, 23 rated it at 1 or 2, and three sat at the midpoint — and the subgroups were indistinguishable on every pre-study measure, including coding experience, AI tool use and opinion of AI. Within that randomized condition, non-believers wrote shorter programs, produced less complex code and spent less time in focus than participants told from the start that the feedback was AI. The full believer-to-non-believer gap was very large, upward of a standard deviation on time on task, with similarly large differences in focus time, code complexity and code length.

[[self-report-measures|Self-report]] matched the traces. Non-believers were far more likely to say they skimmed the feedback and far less likely to say they read it carefully or felt motivated by it. Their comments were flat or suspicious — "The feedback was pretty clearly from an AI, so I'm not sure if I was fooled" — while believers wrote things such as "That was fun, I'm going to come back and learn more."

The authors are careful about this. Believability was not manipulated, so the comparison is a pattern inside a randomized design rather than a causal estimate, and dispositional skepticism or reactance to perceived deception could produce the same result. The practical implication is narrower: real, verifiable human involvement carries a benefit worth preserving; where it is absent, transparent AI attribution is the lower-risk default. They also name the case that requires no impersonation at all — instructors using an [[llm|LLM]] to draft feedback they then deliver under their own name.

## What this means for practice

- **Instructors:** Label AI-written feedback as AI-written. Students who were told the truth worked and produced at a normal level; students who caught a false human label withdrew.
- **Instructors:** Treat the delay before feedback as part of the design. A pause changed what students produced even though nobody was told about it.
- **Designers:** Tune timing for output quality and attribution for effort, and do not bundle them inside a human-like wrapper that hides the credibility risk.
- **Administrators:** Promise human feedback only where a person has really reviewed the work. The benefit attached to believed presence, not to the wording of a label.
- **Researchers:** Measure whether students believe the attribution, not only what they were assigned. Averaging believers with non-believers hides both the benefit and the cost.

## Limitations

Believability was measured, not assigned: the split is post hoc, so the comparison between believers and non-believers is a suggestive pattern inside a randomized design rather than a causal test, and the subgroups are small (27 and 23 students). Dispositional skepticism or reactance to perceived deception cannot be ruled out. The Prolific sample is likely more AI-literate than a classroom cohort, which may have inflated the disbelief rate, and two screening items about AI attitudes may have primed participants to consider an AI source. Mechanism measures were single survey items rather than validated scales, and the creative coding domain may not transfer to purely technical courses or high-stakes assessment. The attribution effects on process also did not survive the pre-registered correction for multiple comparisons.

## Citation

Morris, C., & Maes, P. (2026). [*Same Feedback, Different Source: How AI vs. Human Feedback Attribution and Credibility Shape Learner Behavior in Computing Education*](https://arxiv.org/abs/2604.03075). arXiv:2604.03075 [cs.HC]. Preprint, submitted to IEEE for possible publication.
