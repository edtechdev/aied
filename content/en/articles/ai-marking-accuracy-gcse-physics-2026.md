---
title: "Comparing the Marking Accuracy of an AI Marking System with Official Examination Board Marks and Experienced Teacher Judgement: A Case Study in GCSE Physics"
created: "2026-09-30T09:08:58-04:00"
updated: "2026-09-30T09:08:58-04:00"
type: article
sources: ['raw/papers/ai-marking-accuracy-gcse-physics-2026.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [case study]
discipline: [physics education]
level: [secondary]
audience: [assessment professionals, researchers]
foundations: [limitations-in-aied-research]
technology: [llm]
assessment: [automated-assessment, assessment-validity, educational-measurement, psychometrically-aware-ai]
methods: [benchmark, quantitative-research, ai-ed-evaluation]
ethics: [trust-calibration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Bozdag and Qiu compare GradeDrive, a commercial [[llm|large language model]] marking system, against two reference standards on 71 previously marked AQA GCSE Physics responses drawn from AQA's own examiner-training material (2019, 2022 and 2023 series). The sample was deliberately curated as edge cases — items on which experienced examiners are known to disagree — so the figures describe [[automated-assessment]] on unusually contentious material rather than routine marking. GradeDrive's agreement with the official AQA mark was strong (quadratic-weighted κ = 0.885, ICC = 0.887, exact agreement 77.5%, r = 0.90), with a small but statistically significant tendency to over-mark, by 0.30 marks on average. A panel of six experienced physics teachers re-marked all 71 items independently. On the 16 items where GradeDrive and AQA disagreed, GradeDrive's marks sat closer to the [[teacher-role|teacher]] consensus than AQA's (MAE 0.69 vs. 0.90 marks), though not significantly (p = 0.39). On the 55 items where the two agreed, all six teachers matched the mark exactly on 50, supporting both the panel as an adjudicator and the edge-case framing.

## Key Findings

1. GradeDrive's marks correlated strongly with the AQA definitive mark (r = 0.90, R² = 0.82), with exact agreement on 77.5% of items and agreement within one mark on 91.5%.
2. Quadratic-weighted κ was 0.885 and ICC(2,1) 0.887, both in the "almost perfect" band of the Landis and Koch scale, with bootstrap intervals inside the substantial or almost perfect range.
3. GradeDrive carried a small but significant positive bias, awarding on average 0.30 marks more than AQA, over-marking on 21.1% of items and under-marking on only 1.4%.
4. Error was concentrated rather than spread evenly: question 1.2 alone, where GradeDrive awarded 6 marks against AQA's 3 on every occurrence, contributed disproportionately to RMSE.
5. On the 16 disputed items, GradeDrive's mean absolute error from the independent six-teacher average was 0.69 marks against AQA's 0.90, with GradeDrive closer on 9 items and AQA on 5.
6. The teacher panel matched the agreed mark exactly on 50 of the 55 non-disputed items (90.9%), with mean inter-teacher SD of 0.05 marks against 0.54 on the disputed items.

## The reference-standard problem

AQA's approved mark is the primary reference standard, but boards themselves report examiner-to-examiner disagreement — exact agreement on extended-response items has been estimated at around one third — so agreement with the board is a proxy for accuracy rather than accuracy itself. Bozdag and Qiu therefore add a second standard: six experienced [[physics-education|physics]] teachers who re-marked every item blind to both marks, under a soft ten-minute-per-item limit approximating realistic speed-marking. Because the panel also re-marked the 55 items on which the two systems already agreed, the study can check that it behaves like a competent marking body on uncontroversial material. That [[assessment-validity|validity check]] largely held: all six teachers matched the agreed mark exactly on 50 of the 55 items, and mean inter-teacher SD was 0.05 marks against 0.54 on the disputed items.

## Agreement with the board

GradeDrive's marks tracked AQA's closely across the full sample: r = 0.90, R² = 0.82. Both weighted kappa values fell in the "almost perfect" band (linear-weighted κ = 0.81; quadratic-weighted κ = 0.885), and ICC(2,1) — the absolute-agreement form appropriate when two specific raters are compared and the size of any systematic offset matters — was 0.887. Mean absolute error was 0.324 marks and RMSE 0.741. The paired t-test on signed differences was significant (t(70) = 3.64, p < 0.001), and the bias was one-directional: over-marking on 21.1% of items against under-marking on 1.4%. The authors place these figures in the [[educational-measurement]] literature, noting that GradeDrive's exact agreement sits at the published [[benchmark]] for short-item examiner agreement.

## Where the disagreement concentrates

Question 1.2, worth 6 marks, showed the largest and most consistent disagreement: GradeDrive awarded full marks where AQA awarded 3 on every occurrence, and because RMSE penalizes large individual errors more heavily than MAE, that one item weighs disproportionately on the headline error figures. Four further labels carried mean absolute errors of 1.00 to 1.50 marks, while the remaining 24 question labels showed perfect or near-perfect agreement. The practical reading is that a few specific mark-scheme interpretations drive most of the disagreement, pointing toward targeted review rather than a general change to the marking model — an illustration of the [[psychometrically-aware-ai]] caution that a single kappa or correlation figure can obscure where an automated marker's errors occur.

## Who is closer to the teachers

On the 16 disputed items the teacher panel's average became the tie-breaker. GradeDrive's mean absolute error from that average was 0.69 marks against AQA's 0.90, its RMSE 0.846 against 1.112, and its correlation 0.868 against AQA's 0.818; GradeDrive was closer on 9 items, AQA on 5, with 2 ties. The signed biases pointed in opposite directions: GradeDrive was marginally generous relative to the teachers (+0.54 marks) while AQA sat consistently below them (−0.77). The direction favors the AI system, but the paired test comparing the two markers' absolute errors did not approach significance (p = 0.39), and the teachers disagreed among themselves on these items (mean inter-teacher SD 0.54 marks), so no single item is resolved by the panel average.

## What this means for practice

- **Instructors.** A system agreeing with the board about as closely as human examiners do can credibly pre-mark short-answer work and speed up [[feedback]], but its average 0.30-mark generosity argues for reviewing marks before they reach students — [[trust-calibration|calibrated trust]] rather than blanket adoption or rejection.
- **Assessment designers.** Treat agreement with the board as a proxy rather than ground truth, and keep an independent teacher panel in the loop when adjudicating disputed items — a practical form of [[human-in-the-loop-ai]].
- **Researchers.** Report the full battery of statistics rather than a single correlation, and report bootstrap intervals so readers can see how much a small sample can move.

## Limitations

- The sample is small — 71 items, 16 disputed — and the paired-error test on that subsample does not reach significance; the authors report three different p-values (0.045, 0.114, 0.39) across successive analyses, a broader [[limitations-in-aied-research]] point about small-sample estimates.
- The material is one board's only (AQA GCSE Physics 8463, 2019–2023), selected for edge cases, so the figures do not generalize to routine marking, other subjects, or other boards.
- The models behind the GradeDrive pipeline are withheld as commercially sensitive, so the pipeline cannot be independently reproduced, and the first author is affiliated with GradeDrive.
- Data-entry errors were corrected after initial analysis: one item's maximum mark changed from 0 to 2, and 22 of 426 teacher marks were corrected.

## Citation

Bozdag, I., & Qiu, M. (2026). [Comparing the Marking Accuracy of an AI Marking System with Official Examination Board Marks and Experienced Teacher Judgement: A Case Study in GCSE Physics](https://osf.io/6cg5h). EdArXiv preprint.