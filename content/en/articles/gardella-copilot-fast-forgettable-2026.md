---
title: "Fast and Forgettable: A Controlled Study of Novices’ Performance, Learning, Workload, and Emotion in AI-Assisted and Human Pair Programming Paradigms"
created: "2026-11-11T11:30:00-05:00"
updated: "2026-11-11T11:30:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors]
sources: ['raw/papers/gardella-copilot-fast-forgettable-2026.md']
source_url: "https://arxiv.org/abs/2604.18538"
source_depth: full text
confidence: high
foundations: [cognitive-offloading]
pedagogy: [collaborative-learning, desirable-difficulties]
technology: [generative-ai]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Gardella et al. (2026) put 22 novice and intermediate programmers through two 20-minute HumanEval trials in a first session, once paired with a human partner and once alone with GitHub Copilot, then retested them alone on the same tasks about a week later. Copilot produced a large performance advantage, 14.09 points out of 100 (p<.001, g=.99), and cut mental demand, temporal demand, and effort. The advantage did not carry: absolute retest scores were statistically indistinguishable, the drop from session one was 18.88 points larger after learning with AI (p=.015), and the human partner produced significantly more positive and more arousing emotion. The authors argue that [[collaborative-learning|pair programming]] remains a stronger learning arrangement than an AI partner, and that low workload is not evidence of learning.

## Key Findings

1. **Copilot finished the task faster.** Team performance was 14.09 points higher out of 100 with Copilot (95% CI 6.46 to 22.89, p<.001, g=.99), worth an additional seven-tenths of a task or the same tasks completed with more than half the time limit to spare.
2. **Participants did not take the credit.** Self-grades for their own contribution moved slightly the other way, by −0.23 grade points (95% CI −0.80 to 0.34, p=.435, g=−0.13), so the performance gain was not mirrored in perceived performance.
3. **The retest gap was not significant in absolute terms.** Absolute retest performance after learning with AI was 4.79 points lower (95% CI −16.86 to 7.46, p=.397, adjusted p=.529, g=−0.27). The within-person change was larger: −18.88 points (95% CI −32.87 to −5.01, p=.015, adjusted p=.054, g=−1.13), a large effect that falls just short of the corrected threshold.
4. **The dip concentrated among stronger teammates.** For the 11 participants who were the stronger member of their human pair, retest performance after AI trials was 3.40 points lower (95% CI −6.88 to −0.40, p=.027, adjusted p=.054, g=−0.28), or between 30 seconds and 7 minutes of the 20-minute retest. The 11 weaker teammates showed a larger mean difference, −6.18 points, but with much wider spread and no significance (p=.606, g=−0.20).
5. **Workload fell on three of four dimensions.** Mental demand fell 23.41 points, temporal demand 29.09, and effort 22.95, all at adjusted p<.01 with effect sizes of −1.22, −1.21, and −1.28. Frustration, low in both conditions, fell only 3.64 points (p=.470, g=−0.24).
6. **The human partner felt better.** Emotional valence rose 1.18 points more with a human than with Copilot (95% CI −1.84 to −0.52 for the AI contrast, adjusted p=.002, g=−1.61) and arousal 2.09 points more (95% CI −3.37 to −0.83, adjusted p=.004, g=−1.74), on seven-point scales. The confidence intervals suggest a change of sign, not merely a smaller gain.

## What the study did

Twenty-two students at a selective research university in the eastern United States completed the study, drawn from roughly 900 engineering and data science students and roughly 800 undergraduates in CS2 and CS3 sections. Of 62 prospective participants, 25 reached screening, two were ruled out as sub-novice, one dropped out, and 22 finished. They were mostly male (16 of 22) and had [[self-efficacy|self-efficacy]] scores consistent with students at the end of an introductory course (mean 5.6, s=0.8).

The design was within-subjects with two sessions. In session one each participant completed one 20-minute trial paired with another participant and one 20-minute trial alone with GitHub Copilot, in a counterbalanced order drawn from the eight design permutations, using two pools of four HumanEval tasks. Session two, about one week later (mean and median 1.0 week, range 0.8 to 1.29), repeated both pools alone with no partner of either kind. Copilot ran as an editor extension on GPT-4.1, and participants had already attended a one-hour Copilot workshop and passed a screening.

Performance was scored out of 100 as 20 points per task plus 5 points per task scaled by the percentage of time remaining, so completing more tasks always beat completing fewer quickly. Participants were told a secret weighting would combine session-one productivity with session-two retention and that only the top 15% would earn a $10 bonus; neither was true, and all received the bonus. Emotion was self-reported on seven-point valence and arousal scales three times in session one, workload through four NASA-TLX subscales, and inference used OLS regression with wild cluster bootstrapping and Benjamini-Hochberg correction within each research question.

## Why speed did not become learning

The authors frame the result through control-value theory and cognitive load theory. Copilot raised the value of the outcome while lowering the programmer's control over it: it was the stronger partner, it answered confidently, and it left little for the student to contribute. The human pair had no such asymmetry: leadership was negotiable and shifting, and shared goals could be assumed. The authors argue that this friction, including open disagreement that has to be resolved, is an adaptive property of human pairing that AI does not currently reproduce, and it is what the AI condition removed.

The transcripts support the reading. One participant described working with Copilot as copying the PDF into the chat and not thinking about the task at all; another called Copilot training wheels that removed the need to think, while the human partner forced the pair to work out a solution; a third said the AI teammate limited their ability to think. Workload data point the same way: mental demand, temporal demand, and effort all fell sharply, and only frustration stayed flat, which the authors interpret as evidence that the human condition was more effortful rather than more unpleasant. Emotion separates the two: the human condition was both more positive and more arousing, consistent with [[motivation|motivation]] that comes from a social partner rather than from a fast answer, and with the kind of [[student-engagement|engagement]] that low workload does not capture.

Time is the competing explanation, and the authors address it directly. Copilot finished the tasks with time to spare, which in a fixed 20-minute window became passive study time; human pairs sometimes ran to the limit and had no time to consolidate. Whether students would use extra time productively outside a lab is untested, and the paper says so.

## What this means for practice

- **Instructors:** keep human pair programming in the course design. It produced lower performance and higher workload in this study, but also more positive, more aroused engagement and a retention trend that favored it.
- **Instructors:** treat fast completion as a signal to check understanding, not as evidence of it. The AI advantage was 14.09 points in session one and had disappeared from absolute retest scores a week later.
- **Designers:** build friction into AI assistance for learning tasks. The condition that produced the best retention required students to explain their reasoning to a partner before code existed.
- **Administrators:** do not use time-on-task or workload as proxies for learning. The lowest mental demand, temporal demand, and effort in the study sat in the condition with the weaker retention trend.
- **Researchers:** measure retention on tasks students have not already solved. The retest here repeated the same four problems, which makes it a test of reproduction rather than [[transfer-of-learning|transfer]].

## Limitations

The sample is 22 students, 11 pairs, at one selective university, recruited by convenience and paired by schedule rather than by any instructional pairing strategy; the authors acknowledge that inference with multi-way clustering and few clusters is difficult and that Type II errors remain possible. Two central learning comparisons sit at adjusted p=.054, and the absolute retest difference is not significant at all. The retest repeated the same HumanEval tasks after about a week, so it measures reproduction, not transfer to new problems, and Copilot was known to solve every task in a single shot, which limits how far the result extends to messier work. Participants had a fixed 20 minutes, which the authors expect would differ in naturalistic settings, and the qualitative quotes were chosen by one author with no formal coding.

## Citation

Gardella, N., Prather, J., Leinonen, J., Denny, P., Pettit, R., & Riggs, S. L. (2026). [*Fast and Forgettable: A Controlled Study of Novices’ Performance, Learning, Workload, and Emotion in AI-Assisted and Human Pair Programming Paradigms*](https://arxiv.org/abs/2604.18538). arXiv:2604.18538 [cs.HC]. Preprint.
