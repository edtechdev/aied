---
title: "Same Feedback, Different Source: How AI vs. Human Feedback Attribution and Credibility Shape Learner Behavior in Computing Education"
created: "2026-11-11T07:37:06-05:00"
updated: "2026-11-11T08:09:35-05:00"
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
verified: [citation, numbers, links]
---

> **Synthesis:** Morris and Maes (2026) ran a three-condition experiment in which 148 adults completed a self-paced p5.js tutorial and received [[feedback|feedback]] written by the same model, Claude Sonnet 4, but labeled either as AI-generated or as coming from a human teaching assistant. Holding delivery delay constant, participants who believed a human had reviewed their work spent more time on task (948s vs. 741s; d=0.61, p=.013) than those given equivalently timed AI-attributed feedback, while the 60-second delay by itself raised code complexity. In an exploratory split, 46% of the human-attributed group did not believe the label, and those participants produced shorter and less complex programs than participants told plainly that the feedback was AI. The benefit, the authors conclude, depends on [[trust-calibration|whether the attribution is believed]].

## Key Findings

1. **Believed human attribution raised effort, not output quality.** With delivery held at 60 seconds, participants who believed a teaching assistant had reviewed their code spent more time on task (M=948s vs. 741s; d=0.61, p=.013) and more time with the tutorial window in focus (M=850s vs. 662s; d=0.56, p=.023) than those told the same feedback was AI-generated. Both clear the uncorrected α=.05 threshold but not the pre-registered Bonferroni correction of α=.01.
2. **The 60-second delay independently raised code complexity.** AI-Delayed participants produced more complex programs than AI-Instant participants (d=0.55, p=.008, significant at corrected α=.01) and longer code (d=0.43, p=.038, uncorrected only), with no difference in time on task (d=0.18, p=.365), time in focus (d=0.10, p=.610) or code executions (d=0.01, p=.950).
3. **Helpfulness ratings did not move.** Means were 4.09 in AI-Instant, 4.21 in AI-Delayed and 4.44 among TA believers, with the TA vs. AI-Delayed difference at p=.155; the technical-versus-creative rating gap did not differ by source (p=.22).
4. **Nearly half of the human-attributed group did not believe the label.** Of 50 TA participants, 27 (54%) scored 3 or above on the manipulation check and 23 (46%) reported disbelief, with 24 at 4–5, 23 at 1–2 and only 3 at the midpoint. The subgroups did not differ on any pre-study measure, including coding experience (d=-0.03, p=.92), AI tool usage (d=0.25, p=.15) or opinion of AI (d=0.18, p=.60).
5. **Disbelief produced worse outcomes than transparent AI.** Against AI-Delayed, TA non-believers wrote shorter programs (d=0.82, p=.002), produced less complex code (d=0.77, p=.003) and spent less time in focus (d=0.68, p=.009).
6. **The believer-to-non-believer gap was very large:** time on task (d=1.28, p<.001), time in focus (d=1.17, p<.001), code complexity (d=0.96, p=.001), code length (d=0.94, p=.002) and code executions (d=0.67, p=.022).
7. **Social presence was flat while intrinsic motivation tracked belief.** Feeling attended to (F=0.40, p=.75), judged (F=0.56, p=.64) and wanting to show appreciation (F=0.52, p=.67) did not differ, nor did external motivation (F=1.20, p=.31). Intrinsic interest was highest among TA believers (M=4.52) and lowest among non-believers (M=3.83; d=0.80, p=.007), and autonomous effort separated them most sharply (M=4.11 vs. M=3.04; d=1.01, p=.0008).

## What the study did

Morris and Maes recruited 150 adults through Prolific and analyzed 148 after excluding two who submitted no code (50.3% female; mean age 37.3, SD=11.6). Participants completed a self-paced p5.js tutorial with four modules — shapes, colors, interaction and a mini-project — submitting code at each checkpoint and receiving technical and creative feedback. All feedback came from Claude Sonnet 4 under one prompting template that fixed tone, structure and the balance of encouragement and correction, so content varied only because each participant's code varied.

The design was a 3 × 2 mixed factorial: condition between subjects, feedback type within. AI-Instant (n=49) received feedback after 5 seconds labeled AI-generated; AI-Delayed (n=49) received it after 60 seconds with a processing animation, also labeled AI; TA-Delayed (n=50) received it after 60 seconds with a review animation and a human teaching assistant label. Comparing AI-Delayed with TA-Delayed isolates attribution at constant timing; comparing AI-Instant with AI-Delayed isolates timing at constant attribution. The study was pre-registered, as was the pilot that preceded it (N=25), and used an IRB-approved deception disclosed at debriefing. Process measures were logged automatically (time on task, time in focus, code executions); output measures were code length and an experience-adjusted 0–8 complexity score; perception measures were 5-point helpfulness ratings and post-survey items. This is a preprint submitted to IEEE for possible publication.

The confirmatory contrast restricts the TA condition to believers, so it estimates the effect of believed attribution rather than the effect of assignment.

## Two levers that act on different things

Source and delay moved different measures. Believed human attribution increased how long participants worked and how much of that time the tutorial held focus — roughly 28% more time on task — with no reliable change in what they produced. The delay did the reverse: 60 seconds of waiting raised code complexity at the corrected threshold and code length at the uncorrected one, without adding time on task or more test runs. The authors suggest the pause may create an interval for [[metacognition|reflection]], though the design does not record what participants did during it.

Two accounts predicted different things about the human label. Social presence theory says belief in a human reviewer should make learners feel observed, judged and accountable. Self-determination theory locates the value in relatedness, the sense that one's work is seen and valued, and predicts that a disbelieved label should deflate [[motivation|intrinsic motivation]] rather than return behavior to an AI baseline. The survey data sided with the second: social presence items were flat across all four groups and external motivation did not differ, while intrinsic interest and autonomous effort were highest among believers and lowest among non-believers.

## When the human label is not believed

Credibility was the exploratory question and produced the study's most consequential result. Disbelief was not evenly distributed: 24 of the 50 TA participants rated belief at 4 or 5 and 23 at 1 or 2, with three at the midpoint, and the subgroups were indistinguishable on every pre-study measure. Within that randomized condition, non-believers produced shorter and less complex programs than participants told from the start that the feedback was AI-generated, and spent less time in focus. The full believer-to-non-believer gap reached d=1.28 on time on task.

Self-report matched the traces. Non-believers reported skimming feedback at 26% against 7–10% in other groups, reading carefully at 61% against 74–84%, and feeling motivated by the feedback at 22% against 31–52%. Their comments were flat or suspicious — "The feedback was pretty clearly from an AI, so I'm not sure if I was fooled" — while believers wrote things such as "That was fun, I'm going to come back and learn more."

The authors are careful about this. Believability was not manipulated, so the comparison is a pattern inside a randomized design rather than a causal estimate; dispositional skepticism or reactance to perceived deception could produce the same result. The practical implication is narrower: real, verifiable human involvement carries a benefit worth preserving; where it is absent, transparent AI attribution is the lower-risk default. They also name the case that requires no impersonation — instructors using an LLM to draft feedback they deliver under their own name.

## What this means for practice

- **Instructors.** If the feedback is AI-generated, label it as such. Transparent AI produced adequate process and output measures and avoided the withdrawal seen among students who caught a human label that did not hold.
- **Instructors.** Do not treat a 60-second delay as neutral infrastructure. It changed what students produced without changing how long they worked.
- **Designers.** Separate the two levers: timing can be tuned for output quality and attribution for effort, but a human-like wrapper bundles them and hides the credibility risk.
- **Researchers.** Measure believability, not just assignment. Forty-six percent of the human-attributed group disbelieved the label, and averaging over them understates the benefit among believers and the cost among non-believers.
- **Administrators.** Where a course promises human feedback, the promise has to be operationally true: the benefit here attached to believed presence, not to the wording of a label.

## Limitations

Believability was measured, not assigned: the split is post hoc, so the comparison between believers and non-believers is a suggestive pattern inside a randomized design rather than a causal test, and the subgroups are small (n=27 and n=23). Dispositional skepticism or reactance to perceived deception cannot be ruled out. The Prolific sample is likely more AI-literate than a classroom cohort, which may have inflated the disbelief rate, and two screening items about AI attitudes may have primed participants to consider an AI source. Mechanism measures were single survey items rather than validated scales, and the creative coding domain may not transfer to purely technical courses or high-stakes assessment. The attribution effects on process also did not survive the pre-registered Bonferroni correction.

## Citation

Morris, C., & Maes, P. (2026). [*Same Feedback, Different Source: How AI vs. Human Feedback Attribution and Credibility Shape Learner Behavior in Computing Education*](https://arxiv.org/abs/2604.03075). arXiv:2604.03075 [cs.HC]. Preprint, submitted to IEEE for possible publication.
