---
title: "When AI makes learning feel effortless: how processing fluency shapes students’ metacognitive judgments"
created: "2026-11-19T09:30:00-05:00"
updated: "2026-11-19T09:30:00-05:00"
type: article
pedagogy: [metacognition, self-regulated-learning, retrieval-spacing-interleaving]
technology: [generative-ai]
foundations: [cognitive-offloading]
sources: ['raw/papers/zhang-processing-fluency-genai-metacognitive-judgments-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.2003031"
source_depth: full text
confidence: medium
evidence_context: educational
level: [higher ed]
audience: [instructors, researchers]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-19"
    agent: hermes-agent
---

> **Synthesis:** Zhang (2026) asks whether the ease of GenAI-assisted study is a trustworthy signal that learning happened, and answers with three experiments on 264, 360 and 386 university students in the United Kingdom. AI assistance raised [[metacognition|processing fluency]] and judgments of learning (JOLs) without a detectable gain in independent test performance, and a scripted manipulation placed the effect in explanation fluency rather than in AI as such: high-fluency explanations produced JOLs of 70.79% and overestimation of 10.95 points, while low-fluency AI behaved like conventional text. Across studies, fluency tracked confidence far more closely than knowledge — r = 0.474 against r = 0.087 in Study 1 — the signature of a cue that is salient without being diagnostic. A three-minute unaided retrieval attempt before the judgment weakened the fluency–JOL relationship and reduced positive calibration bias in both fluency conditions, which makes the paper's recommendation a [[retrieval-spacing-interleaving|retrieval]] argument rather than an argument against [[generative-ai|generative AI]]. Its limits are equally clear: scripted responses, immediate tests, and no evidence that the recalibration persisted.

## Key Findings

- **Fluent AI explanations raised confidence without raising scores.** High-fluency AI produced JOLs of 70.79% against 61.00% for conventional text, while test performance stayed at 59.83% versus 58.00%.
- **Processing fluency tracked confidence, not knowledge.** In Study 1 fluency correlated r = 0.474 with JOL but only r = 0.087 with objective test performance, which was nonsignificant.
- **AI assistance lifted fluency and JOLs together.** Study 1 found fluency of 4.42 versus 4.02 and predictions of 67.66% versus 62.02% for AI-assisted over conventional study, with no significant performance difference.
- **Only the fluent version was miscalibrated.** Overestimation reached 10.95 points under high-fluency AI, against 3.00 points for conventional text and 1.76 points for low-fluency AI.
- **A three-minute AI-off retrieval attempt collapsed the fluency effect.** The fluency–JOL slope fell from 9.13 to 1.65, and JOLs dropped approximately 10.5 points under high fluency versus 2.9 under low.
- **Retrieval cut overestimation without lifting test scores.** Calibration bias fell to 3.05 and 1.97 points after retrieval in the high and low-fluency conditions, with no significant change in performance.

## How the three experiments were built

All three studies ran at a [[higher-ed|university]] in the United Kingdom with undergraduates of moderately high GenAI familiarity, and all used between-subjects random assignment. Study 1 (N = 264) compared studying the same 900–1,100-word interdisciplinary material through a simulated GenAI interface — fixed options for a simpler explanation, an example, a summary or a causal clarification — with conventional text. Study 2 (N = 360) split the AI conditions into high and low-fluency versions of identical content, and a pretest of 72 students confirmed the versions differed in fluency (4.95 versus 4.20) but not in information sufficiency, coverage, accuracy or relevance. Study 3 (N = 386) crossed fluency with a three-minute no-AI retrieval attempt. Fluency was the five-item semantic differential scale, JOL a single 0–100% prediction, and performance a 10-item test — four retention items and six [[transfer-of-learning|transfer]] items — taken without AI or notes. Calibration was simply JOL minus performance.

## Fluency, not AI, moved the judgments

The decisive contrast sits inside the AI conditions. High-fluency AI produced a JOL of 70.79% against 62.26% for low-fluency AI and 61.00% for conventional text, while performance stayed flat at 59.83%, 60.50% and 58.00% — an F of 0.44 and an effect size of 0.002. Directional overestimation followed the same line: 10.95 points under high fluency, against 3.00 for conventional text and 1.76 for low fluency, and the low-fluency condition was statistically indistinguishable from conventional text on both outcomes. Absolute calibration error, by contrast, did not differ significantly (p = 0.387), so fluency pushed judgments upward rather than making them better calibrated in either direction. Study 1's correlations say the same thing in another form: fluency tracked JOL at r = 0.474 and performance at r = 0.087. Zhang reads this through cue-utilization theory, and separates it from [[cognitive-offloading|cognitive offloading]], since offloading can occur without any immediate performance loss.

## What a three-minute retrieval attempt changed

Study 3 gave half of each fluency condition three minutes to explain the core concept in their own words and answer two free-recall questions, with the interface closed, no external information and no feedback; the control group spent the same time on an unrelated task. Without retrieval the fluency gap was wide, with JOLs of 72.53 against 63.86. After retrieval it vanished — 62.02 against 60.94 — and the continuous moderation told the same story, the fluency–JOL slope falling from 9.13 to 1.65. Retrieval lowered JOLs by approximately 10.5 points under high fluency and approximately 2.9 under low. It also reduced overall positive calibration bias, and bias fell in both fluency conditions; the fluency × retrieval interaction on bias was not significant, so the paper claims an overall retrieval benefit rather than a stronger one after fluent AI. Better retrieval scores went with higher JOLs (r = 0.516) and better test performance (r = 0.443).

## What this means for practice

- **Instructors.** Put an AI-off retrieval moment between reading a fluent explanation and any estimate of mastery: ask students to reconstruct the mechanism or solve a transfer item from memory first, then let them judge themselves.
- **Instructors.** Treat smooth completion with AI as evidence about the support, not about the learner, and say so out loud so students do not read ease as mastery.
- **Learning designers.** Stop tuning explanations purely for readability; shorter sentences, tighter segmentation and explicit causal links are exactly the features that inflated JOLs here, so keep some organizational work with the learner.
- **Researchers.** Test whether recalibration survives a delay, and whether it changes what students choose to restudy rather than only what they predict.

## Limitations

- Every AI response was scripted in advance through a simulated interface, so adaptive dialogue, prompt refinement and response variation in live GenAI use went untested.
- All participants were undergraduates at one United Kingdom university studying unfamiliar interdisciplinary material; expertise and [[prior-knowledge|prior knowledge]] were not varied, and Study 1 was 58.3% women.
- Judgments and tests were both immediate, with no delayed post-test, so the persistence of fluency-induced overestimation is unknown.
- Fluency was measured immediately before every JOL, which may itself have made ease more salient when judgments were formed.
- The fluency manipulation bundled sentence length, segmentation, information density and explicitness of causal structure, and the conventional-text baseline was not matched on presentation; individual features cannot be isolated.

## Citation

Zhang, J. (2026). [*When AI makes learning feel effortless: how processing fluency shapes students’ metacognitive judgments*](https://doi.org/10.3389/fpsyg.2026.2003031). Frontiers in Psychology, 17, 2003031.
