---
title: "Fast and Forgettable: A Controlled Study of Novices’ Performance, Learning, Workload, and Emotion in AI-Assisted and Human Pair Programming Paradigms"
created: "2026-11-11T07:39:58-05:00"
updated: "2026-11-14T10:00:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Pairing with GitHub Copilot made novice programmers faster and lighter-loaded in the moment, but a week later they had learned less than peers who paired with a person. Twenty-two students each solved HumanEval tasks once with a human partner and once with Copilot, then again alone a week later. The AI advantage in session performance vanished from absolute retest scores, and the drop from session one was much larger after AI. The human partner also produced more positive, more arousing engagement. A fast, low-effort partner can replace the thinking that makes practice stick; [[collaborative-learning|pair programming]] with a person remains the stronger learning arrangement.

## Key Findings

1. **Copilot finished far more of the task.** Teams working with Copilot scored substantially higher than human pairs in the timed session, completing more of the task or the same tasks with time to spare.
2. **Students did not take the credit.** Their grades for their own contribution did not rise with the AI-assisted performance, and if anything moved slightly the other way.
3. **The advantage was gone a week later.** Tested alone on the same problems, students who had learned with AI scored no better in absolute terms than they had after working with a person.
4. **The drop was larger after AI.** Measured against their own first-session performance, students fell much further on tasks first solved with Copilot, a large within-person decline.
5. **The dip was clearest among stronger teammates.** Among students who had been the stronger member of their human pair, retest performance after AI trials was lower; weaker teammates showed a larger but noisier drop.
6. **Workload fell, and that was the warning sign.** Mental demand, time pressure and effort all dropped sharply with Copilot, while frustration stayed low in both conditions. Less effort did not mean more learning.
7. **The human partner felt better.** Valence and arousal were both higher after working with a person than with Copilot, so the condition with the weaker performance was the one students found more engaging.

## What the study did

Twenty-two students at a selective research university in the eastern United States completed the study, drawn from roughly 900 engineering and data science students and roughly 800 undergraduates in CS2 and CS3 sections. Of 62 prospective participants, 25 reached screening, two were ruled out as sub-novice, one dropped out, and 22 finished. They were mostly male (16 of 22) and had [[self-efficacy|self-efficacy]] scores consistent with students at the end of an introductory course (mean 5.6).

The design was within-subjects with two sessions. In session one each participant completed one 20-minute trial paired with another participant and one 20-minute trial alone with GitHub Copilot, in a counterbalanced order drawn from the eight design permutations, using two pools of four HumanEval tasks. Session two, about one week later, repeated both pools alone with no partner of either kind. Copilot ran as an editor extension on GPT-4.1, and participants had already attended a one-hour Copilot workshop and passed a screening.

Performance was scored out of 100 as 20 points per task plus 5 points per task scaled by the percentage of time remaining, so completing more tasks always beat completing fewer quickly. Participants were told a secret weighting would combine session-one productivity with session-two retention and that only the top 15% would earn a \$10 bonus; neither was true, and all received the bonus. Emotion was [[self-report-measures|self-reported]] on seven-point valence and arousal scales three times in session one, workload through four NASA-TLX subscales, and inference used regression with correction for multiple comparisons within each research question.

## Why speed did not become learning

The session-one gap was large. Copilot teams scored 14.09 points higher out of 100, which the authors translate into an additional seven-tenths of a task or the same tasks finished with more than half the time limit to spare. That is a real productivity gain.

The learning result runs the other way. Absolute retest performance after learning with AI was 4.79 points lower than after learning with a person, a difference too imprecise to call. The within-person change is the sharper comparison: students dropped 18.88 points from session one to retest on the AI trials, a decline that was significant before correction and just short of it after. It concentrates among the students who had been the stronger member of their human pair, whose retest scores after AI were 3.40 points lower, a difference at the edge of the corrected threshold. The weaker partners showed a bigger mean drop but with far more spread, so the study cannot say much about them.

Workload moved the way the productivity result would predict, and that is the point. Mental demand fell 23.41 points, temporal demand 29.09 and effort 22.95, all substantial, while frustration — low in both conditions — barely moved at 3.64. Emotion separates the conditions further: valence was 1.18 points higher with a human partner and arousal 2.09 points higher, on seven-point scales, so the arrangement that demanded more thinking also felt more positive and more activating — consistent with [[motivation|motivation]] that comes from a social partner rather than a fast answer, and with the kind of [[student-engagement|engagement]] that low workload does not capture.

The authors frame this through control-value theory and cognitive load theory. Copilot raised the value of the outcome while lowering the programmer's control over it: it was the stronger partner, it answered confidently, and it left little for the student to contribute. The human pair had no such asymmetry: leadership was negotiable and shifting, and shared goals could be assumed. The authors argue that this friction, including open disagreement that has to be resolved, is an adaptive property of human pairing that AI does not currently reproduce, and it is what the AI condition removed.

The transcripts support the reading. One participant described working with Copilot as copying the PDF into the chat and not thinking about the task at all; another called Copilot training wheels that removed the need to think, while the human partner forced the pair to work out a solution; a third said the AI teammate limited their ability to think. Time is the competing explanation, and the authors address it directly. Copilot finished with time to spare, which in a fixed 20-minute window became passive study time; human pairs sometimes ran to the limit and had no time to consolidate. Whether students would use extra time productively outside a lab is untested, and the paper says so.

## What this means for practice

- **Instructors:** keep human pair programming in the [[learning-design|course design]]. It produced lower performance and higher workload here, but also more positive, more aroused engagement and a retention trend that favored it.
- **Instructors:** treat fast completion as a signal to check understanding, not as evidence of it. The AI advantage was large in the session and had disappeared from absolute retest scores a week later.
- **Designers:** build friction into AI assistance for learning tasks — require an explanation of the plan before code exists, or a prediction of what the AI will produce. The condition with the best retention required students to reason aloud to a partner.
- **Administrators:** do not use time-on-task or workload as proxies for learning. The lowest mental demand, time pressure and effort in the study sat in the condition with the weaker retention result.
- **Researchers:** measure retention on tasks students have not already solved. The retest here repeated the same four problems, which makes it a test of reproduction rather than [[transfer-of-learning|transfer]].

## Limitations

The sample is 22 students, 11 pairs, at one selective university, recruited by convenience and paired by schedule rather than by any instructional pairing strategy; the authors acknowledge that inference with few clusters is difficult and that Type II errors remain possible. The two central learning comparisons sit just above the corrected significance threshold, and the absolute retest difference is not significant at all. The retest repeated the same HumanEval tasks after about a week, so it measures reproduction, not transfer to new problems, and Copilot was known to solve every task in a single shot, which limits how far the result extends to messier work. Participants had a fixed 20 minutes, which the authors expect would differ in naturalistic settings, and the [[qualitative-research|qualitative]] quotes were chosen by one author with no formal coding.

## Citation

Gardella, N., Prather, J., Leinonen, J., Denny, P., Pettit, R., & Riggs, S. L. (2026). [*Fast and Forgettable: A Controlled Study of Novices’ Performance, Learning, Workload, and Emotion in AI-Assisted and Human Pair Programming Paradigms*](https://arxiv.org/abs/2604.18538). arXiv:2604.18538 [cs.HC]. Preprint.
