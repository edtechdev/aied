---
title: "Challenges in using online assessments to measure student understanding in the era of generative AI"
created: "2026-11-21T02:31:00-05:00"
updated: "2026-11-21T03:15:06-05:00"
type: article
published: "2026"
discipline: [physics education]
foundations: [misconceptions]
pedagogy: [online-teaching-and-learning]
technology: [generative-ai, llm]
assessment: [assessment, assessment-validity, learning-gains]
methods: [quantitative-research, research-methods-aied]
research_method: [secondary analysis, longitudinal study]
audience: [researchers, instructors, instructional designers, learning analytics designers]
level: [higher ed]
page_kind: [evaluation]
sources: ['raw/papers/smith-online-pretests-generative-ai-physics-2026.md']
confidence: high
evidence_context: educational
source_depth: full text
source_url: "https://doi.org/10.1103/xrw4-t58t"
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-21"
    agent: hermes-agent
connected_concepts: [assessment, assessment-validity, learning-gains, physics-education, higher-ed, online-teaching-and-learning]
connected_articles: []
---

> **Synthesis:** Smith, Heron and Shaffer report a naturalistic warning from the [[physics-education|University of Washington's Physics Education Group]]. For two decades their online pretests had been stable enough to serve as baseline measurements of student understanding; beginning around autumn 2024 the group saw systematic shifts consistent with students answering effort-graded pretests through [[generative-ai|generative AI]] tools. Across 39 pretest questions in two algebra-based physics courses, correct responses rose by as much as 36%, with an average change of about 15% — and on two questions where ChatGPT 4.0 gave wrong answers, correct responses fell. Two-proportion z-tests, mixed-effects logistic regression and Welch's t tests on explanation length all point the same way, and a question whose pretest score jumped to 74% produced 72% on a later proctored midterm after instruction. The authors' practical conclusion is blunt: pretests used for research or curriculum evaluation should be administered on paper in person, because an online, unproctored pretest can no longer be read as a measure of [[prior-knowledge|prior knowledge]].

## Key Findings

- **A stable instrument stopped being stable.** UW pretests had been administered online since 2000 and, in the calculus-based sequence, since 2016, with results consistent across quarters and [[teacher-role|instructors]]. Around autumn 2024 the pattern broke: correct responses on the scaling pretest moved from a historical 20–40% to 56% in winter 2024 and 74% in autumn 2024.
- **Gains reached 36%, and most were statistically reliable.** Applying two-proportion z-tests with a Bonferroni-corrected threshold, 18 of 20 mechanics questions and all 19 electricity-and-magnetism questions changed significantly; 14 of 20 and 17 of 19 showed medium or large effect sizes by Cohen's h. Excluding the two declining questions, the average change was 12% in mechanics and 18% in E&M.
- **A mixed-effects model agrees.** Logistic regression with a random intercept by quarter found 14 of 20 mechanics questions and 19 of 20 E&M questions reliably different between pre- and post-AI cohorts — a more conservative result than the z-test, but the same direction.
- **The declines track AI error patterns.** On two conservation-of-energy questions where ChatGPT 4.0 produced incorrect answers, student correct rates *decreased*; the authors read this as students adopting the tool's errors.
- **Explanation length shifted, but only for correct answers.** Welch's t tests found significant length changes on 3 of 11 mechanics questions and 3 of 10 E&M questions where the answer was correct, averaging 35 characters, and none where the answer was incorrect. Length alone cannot identify AI use, but the asymmetry is consistent with it.
- **The effect survives instruction.** A scaling question that reached 74% on the autumn 2024 pretest was repeated on a spring 2025 midterm after the tutorial and lectures, where 72% answered correctly — pretest performance had come to rival post-test performance.

## The setting and the signal

The Physics Education Group at UW has used pretests since the early 1990s alongside its *Tutorials in Introductory Physics*. Pretests are low-stakes: students receive credit for effort, not correctness, and they are usually given after lecture on a topic but before the corresponding tutorial. The study examines 39 questions from the algebra-based mechanics (Phys 114) and electricity-and-magnetism (Phys 115) courses, using quarters from autumn 2022 onward — the period after the group returned to in-class instruction. Each quarter contributed between 210 and 571 students per section, averaging about 330. The authors use autumn 2024 as the dividing line between "pre-AI" and "post-AI" quarters, a choice they describe as an interpretation of the data rather than a confirmed causal claim, noting that early ChatGPT versions performed poorly on [[assessment|physics assessments]] and that capability and adoption both rose through 2023 and 2024.

## What changed, and how confidently

The authors pair a pooled two-proportion z-test with a mixed-effects logistic regression that carries a random intercept by quarter, because quarter-to-quarter fluctuation was visible in the raw data and a pooled test ignores it. Both methods agree that performance changed; the regression is more conservative, with six mechanics questions whose confidence intervals include an odds ratio of one. Effect sizes, not just significance, are the point: a 15% average shift on an instrument whose whole purpose is to detect the effect of instruction is large enough to masquerade as a curriculum improvement. The authors also asked ChatGPT 4.0 to answer many of the pretest questions. It answered most correctly, but its failures were informative: on the two questions it got wrong, student performance declined, and the share of students offering Newton's third law as an explanation for a related question rose from 8% to 18%.

## Why this is a validity problem, not a cheating story

The authors are careful about what the data can show. Students were told the pretests were effort-graded, so there was no incentive to cheat; the changes are consistent with ordinary tool use rather than misconduct. Nor do explanation lengths settle the question — the authors explicitly note that length alone cannot distinguish AI-generated from student-generated text. The concern is inferential: a pretest exists to establish a baseline against which an intervention is judged, and if the baseline is inflated by tool use, a later written post-test can show an apparent gain that never occurred, or hide a real one. The group's own anecdote illustrates the enforcement problem: a graduate student administering a paper pretest with a ban on internet-connected devices still observed a student photographing the assessment with a phone and uploading it to an AI application.

## What this means for practice

- **Match administration to purpose.** If a pretest or inventory is used for research baselines or curriculum evaluation, administer it in person on paper with appropriate proctoring; if it is used purely to prime students for a tutorial or prompt [[reflection|self-reflection]], online administration remains defensible.
- **Do not treat gains as instruction.** A 15% shift between online pre- and post-tests should not be read as a meaningful instructional effect without checking whether the pretest was taken unproctored.
- **Instructors.** Treat unproctored online pretests as engagement instruments, not measurements. Their value lies in the thinking they provoke, not in the accuracy of the data they return.
- **Expect the pattern to worsen.** The authors note that AI capability and student adoption both increased over the study period, and that questions the tools initially answered incorrectly later became correct — so the instrument will keep drifting.
- **Do not rely on instructions alone.** Telling students not to use AI on a low-stakes online assessment is unlikely to work, and browser-based proctoring is disproportionate and circumventable with a second device.

## Limitations

- The pre-AI/post-AI labels reflect the authors' interpretation of performance data, not a manipulated condition; no random assignment or confirmed tool use was involved.
- The study covers two algebra-based courses at one institution, and the questions analyzed are those that had been administered unchanged over an extended period.
- The analysis of explanations is limited to character length; a full [[qualitative-research|qualitative]] analysis of student reasoning was out of scope, so the length asymmetry is corroborating rather than conclusive.
- AI capability moved during the study: ChatGPT-5 was released in August 2025, and some questions the tools initially answered incorrectly became correct, so the direction of individual items is unstable.
- The supporting data are not publicly available because they contain sensitive personal information.

## Citation

Smith, D. P., Heron, P. R. L., & Shaffer, P. S. (2026). [Challenges in using online assessments to measure student understanding in the era of generative AI](https://doi.org/10.1103/xrw4-t58t). *Physical Review Physics Education Research, 22*(2), 020161.
