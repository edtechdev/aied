---
title: Generative AI Availability, Grades, and Student Satisfaction at a Large University
created: "2026-07-24T04:33:04-04:00"
updated: "2026-09-20T03:45:11-04:00"
type: article
technology: [generative-ai, llm]
assessment: [learning-gains]
stakeholders: [student-experience]
research_method: [secondary analysis, learning analytics]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/2607.21534.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** This large-scale observational study tests the "GenAI substitution hypothesis" — the concern that students offload cognitive effort to [[generative-ai]] and earn inflated grades without learning. Using syllabus and administrative data from a large U.S. university (2015–2025; 156,135 students; 87,936 course offerings), the authors measure each course's GenAI susceptibility with a human-validated [[llm]] pipeline that extracts assessment types from syllabi, then apply a difference-in-differences design comparing outcomes before and after ChatGPT's release while modeling COVID-19 effects as persistent or transient. They find **no significant differential effect** of GenAI availability on grades overall or among previously lower-performing students, and no significant effect on self-reported understanding; effects on subject interest are significant only under a transient-pandemic assumption. The findings temper alarm about grade inflation and satisfaction erosion, complementing [[ai-availability-student-motivation]] and the mixed picture in [[generative-ai-reduced-study-time-math]]. The null result is notable against theoretical worries about [[cognitive-offloading]] and situates [[student-experience]] concerns in [[higher-ed]] on firmer empirical ground.

## What this means for practice

- **Learners.** Treat claims that AI is inflating grades with caution: across 72,730 course offerings and 138,386 students, courses that rely more on [[generative-ai|GenAI]]-susceptible assessments showed no detected change in grades, failure, or withdrawal once COVID-era shifts were modeled separately.
- **Learners.** Do not read susceptibility as a promise of an easier course; the point estimates were small, roughly one percentage point after normalizing the 4.0 scale, and null across all three terciles of prior academic preparation.
- **Learners.** Keep your own evidence of understanding rather than relying on course evaluations, which are self-reported and shift with who chooses to respond; the study found no robust change in reported understanding, interest, or workload.
- **Learners.** If you do lean on AI in take-home work, separate whether a course is convenient from whether you are learning, since a null grade effect shows only that the grade signal has not visibly degraded so far.

## Limitations

- The authors' own pretrend checks undercut a causal reading: formal tests for parallel pretrends fail even after excluding the COVID-affected period, and they state that the strictest interpretation is that the data and setting are not suited to a causal difference-in-differences approach.
- Grades reflect instructor grading adjustments as well as student performance on assessments, so any shift in the grade signal may be absorbed by grading practice rather than by student [[cognitive-offloading]].
- Measurement error: the [[llm]] pipeline reconstructs assessment types and weighting from syllabi and, in the authors' words, does make errors, adding statistical noise that increases the likelihood of null findings, and the data do not include assessment category weightings of the final grade.
- Course evaluations are self-reported with response rates and representativeness that fluctuate across offerings, so the satisfaction results may partly reflect who selected into responding rather than changes in the [[higher-ed]] experience.

## Connected Concepts

## Connected Concepts

- [[generative-ai]]
- [[cognitive-offloading]]
- [[student-experience]]
- [[higher-ed]]
- [[learning-gains]]

## Connected Articles

- [[ai-availability-student-motivation]]
- [[generative-ai-reduced-study-time-math]]
## Citation

Dumlao, Wang, Xie, Hu, Bar, Chaney, Gold & Teplitskiy (2026). [Generative AI Availability, Grades, and Student Satisfaction at a Large University](https://arxiv.org/abs/2607.21534). arXiv preprint (cs.CY).
