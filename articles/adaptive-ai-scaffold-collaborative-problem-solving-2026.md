---
title: "Towards an adaptive AI scaffold for developing student collaborative problem solving"
created: "2026-08-24T21:30:00-04:00"
updated: "2026-09-19T07:42:07-04:00"
type: article
pedagogy: [collaborative-learning, problem-solving, scaffolding]
technology: [adaptive-learning, learning-analytics]
level: [k 12]
sources: ['raw/papers/adaptive-ai-scaffold-collaborative-problem-solving-2026.md']
confidence: high
discipline: [math education]
audience: [instructional designers, learning analytics designers]
---

> **Synthesis:** Wong, Bulathwela, and Cukurova study how to design an adaptive AI scaffold for developing students' [[collaborative-learning|collaborative problem solving]] (CPS) that responds to the *dynamic* nature of individual students' processes. Unlike most adaptive-scaffolding designs — which are informed by student choice or rely on aggregated behavioral/performance indicators — they derive scaffold strategies from **sequential patterning mining** of individual students' process sequences. Using speech and task logs from 78 students (aged 14–15) working in triads on a [[math-education|mathematics]] CPS task via online video conferencing, they found that while students with a **maximal scaffold** achieved greater performance improvements and were significantly more on-task than those with a **minimal scaffold**, they also engaged in more **scripting behaviors**. The derived adaptive scaffold design informs conceptual strategies for the 'problem identification' and 'ideation, planning and decision making' phases of CPS.

## Key Findings

- **Adaptive scaffolding is needed but rarely process-dynamic.** Most adaptive-scaffold designs are informed by student choice or aggregated behavioral/performance measures, rather than the dynamic, individual-level process sequences of students during CPS.
- **Sample & task.** 78 students aged 14–15 from a public school worked in triads on a mathematics collaborative [[problem-solving]] task through online video conferencing.
- **Method: sequential patterning mining.** The adaptive scaffold design was derived using sequential patterning mining with independent-effects logistic regression to identify sequence-based patterns associated with students' performance improvements on a mathematics problem similar to the CPS task.
- **Maximal vs minimal scaffold.** Students with the maximal scaffold had greater performance improvements and were significantly more on-task than those with the minimal scaffold — but they also engaged in more scripting behaviors.
- **Phase-specific strategies.** The derived design informs conceptual strategies such as [[prompt-engineering|prompting]] students who are capable of answering questions to *ask* questions in the 'problem identification' phase.
- **Key CPS phases.** The design highlights specific strategies for the 'problem identification' and 'ideation, planning and decision making' phases.

## What this means for practice

- **Designers.** Replace static or aggregate adaptation rules with individual sequence-based ones: this study derived its scaffold from sequential patterning mining of 78 students' own dialogue and task logs, moving [[adaptive-learning|adaptive learning]] from aggregate behavioral/performance measures toward individualized, process-grounded intervention.
- **Designers.** Trigger support on the order of interactions, not their frequency. Paraphrasing followed by proposing ideas and then questioning predicted improvement (positive coefficient = 0.521), whereas paraphrasing followed by questioning and then proposing did not (negative coefficient = −0.624); and two rounds of clarifying questions to build shared understanding averaged a negative coefficient of −0.702, while one round followed by identifying relevant information from the task context before questioning produced only productive sequences. It is also worth prompting capable students to ask questions at the start of the problem-identification phase, where asking to clarify understanding remains an important starting indicator.
- **Designers.** Once students enter ideation, keep them there before prompting critical questioning: questioning that occurred after two rounds of idea proposals had almost three times the likelihood of accompanying improvement (coefficient = 1.090, odds ratio = 2.963) compared with questioning wedged between two proposals (odds ratio = 1.076).
- **Designers.** Treat collapsed sense-making as a warning state. Sequences that began with talking about the task in general terms and moved straight into proposing solutions (negative coefficients of −0.088 and −0.290) or into clarifying questions (−0.616 and −0.626) were non-productive, so deliver in-depth, contextualized guidance on the problem itself when they appear.
- **Designers.** Plan for the on-task versus scripting trade-off: maximal scaffolding produced significantly fewer off-task indicators (t(4876.5) = −2.40, p = .016) but also significantly more scripting and fewer problem-solving indicators, so design scaffolds that fade back toward the problem-solving behaviors that actually tracked with improvement.

## Limitations

- Of 78 students recruited from a single mathematics class in one public school (aged 14–15), 4 control and 9 treatment students were excluded for incomplete post-tests, leaving an analysis sample of 65 (35 control, 30 treatment).
- Only 14 of 65 students (21.5%) showed any post-test improvement, and when the minimal scaffold was used as the baseline a mixed model found no statistically significant maximal-scaffold effect (p = 0.322) — the authors read this as the Mann–Whitney U test (U = 626.0, p = .0327, r = 0.192) having overestimated the effect.
- The pre-test used to assign students to triads had a Cronbach's alpha of 0.443, and 18.9% of the variance in performance improvement was attributable to triad membership (ICC = 0.189), which the authors cite alongside the small sample as a constraint on the significance tests.
- The adaptive scaffold is a conceptual design, not a tested intervention: the authors state that real-time automatic classification of utterances and a design-based research evaluation of learning gains remain future work, and they note that sequential pattern mining does not specify the time interval between indicators in a sequence.

## Connected Concepts

- [[collaborative-learning]] — the CPS context under study
- [[scaffolding]] — the adaptive scaffold being designed
- [[adaptive-learning]] — the personalization approach
- [[learning-analytics]] — process-mining methodology on speech/task logs
- [[student-modeling]] — individual-level process modeling
- [[k-12]] — the secondary-school sample
- [[student-engagement]] — on-task vs scripting behaviors
- [[metacognition]] — the phases (problem identification, ideation/planning) scaffolded
- [[self-regulated-learning]] — individual regulation within collaborative work

## Citation

Wong, K., Bulathwela, S., & Cukurova, M. (2026). [*Towards an adaptive AI scaffold for developing student collaborative problem solving*](https://doi.org/10.1016/j.learninstruc.2026.102418). *Learning and Instruction*, 105, 102418.
