---
title: "Bridging technology and education: The use of ChatGPT in grading pharmacy student exams"
created: "2026-09-03T15:00:00-04:00"
updated: "2026-09-19T07:22:56-04:00"
type: article
technology: [generative-ai, human-in-the-loop-ai, llm]
assessment: [assessment-validity, automated-assessment, educational-measurement]
methods: [benchmark]
sources: ['raw/papers/falahat-chatgpt-grading-pharmacy-exams-2026.md']
confidence: high
discipline: [medical education]
audience: [assessment professionals, medical educators, instructors]
level: [higher ed]
page_kind: [evaluation]
---

> **Synthesis:** **Bridging technology and education: The use of ChatGPT in grading pharmacy student exams** — This mixed-format study evaluates ChatGPT-5 against human faculty (gold standard) grading of a 21-item pharmacy exam completed by 16 students across multiple-choice, select-all-that-apply, fill-in-the-blank, listing, short-answer, and essay questions, testing two rubric conditions and two submission formats. It finds near-perfect [[automated-assessment]] agreement for objective items but unreliable agreement for subjective open-ended responses, and shows that providing a rubric did not consistently improve [[llm]] grading. The work advances understanding of when generative AI can substitute for human grading in [[higher-ed]] assessment versus where [[human-in-the-loop-ai|human oversight]] remains necessary.

## Key Findings

- ChatGPT-5 achieved substantial to near-perfect concordance with faculty grading for objective item types (multiple-choice, select-all-that-apply, fill-in-the-blank; CCC = 0.935–1.000), regardless of rubric use — though correct answers were provided during grading, which likely contributed to this performance.
- Accuracy and concordance declined markedly for listing (CCC 0.621–0.708), short-answer (CCC ≈ 0 to negative), and essay questions (CCC 0.341–0.854), where [[automated-essay-scoring|subjective partial-credit scoring]] requires contextual interpretation.
- Providing a structured rubric did not consistently improve overall accuracy or agreement in full-exam grading (71.1% without vs 68.2% with a rubric; CCC 0.740 vs 0.710), differing from prior work that found rubrics help [[llm]] short-answer scoring.
- When responses were grouped and graded by question type, rubric use improved listing accuracy and concordance (CCC 0.773 vs 0.652) but not short-answer or essay items, where rubric-free grading often showed higher agreement — suggesting AI grading performance is sensitive to grading context and rubric design.
- The study highlights a methodological distinction between [[automated-assessment|scoring accuracy]] and agreement: moderate percent accuracy frequently coexisted with low [[educational-measurement|concordance correlation coefficients]], limiting AI's reliability as a grading substitute.
- Authors conclude AI is strongest for objective or highly structured items, with [[human-in-the-loop-ai|human review]] remaining important for complex, subjective, or high-stakes assessments, and recommend future hybrid grading approaches.

## What this means for practice

- **Instructors.** Reserve AI grading for objective formats and grade subjective items yourself: ChatGPT-5 reached CCC 0.935–1.000 on multiple-choice, select-all-that-apply, and fill-in-the-blank items, but 0.621–0.708 on listing, near zero on short answer (CCC −0.056 with a rubric), and 0.341–0.854 on essays.
- **Assessment professionals.** Do not assume a rubric will improve AI agreement: providing a rubric lowered full-exam accuracy (68.2% vs 71.1%) and concordance (CCC 0.710 vs 0.740), and helped listing items only when those items were graded as a separate batch (CCC 0.773 vs 0.652).
- **Assessment professionals.** Report a concordance statistic alongside percent accuracy before treating AI scores as interchangeable with faculty scores — moderate accuracy repeatedly coexisted with CCC below the study's 0.90 threshold for moderate agreement.
- **Instructors.** Pilot the model on a past exam before adopting it, testing rubric and no-rubric conditions on each item type, because AI scoring shifted with grading context (full exam vs. grouped by question type) in this 21-item assessment.

## Limitations

- The study rests on one 21-item exam taken by 16 pharmacy students; the authors set no a priori sample size and used the items available, and per-type item counts fell far below the ≥30 paired observations generally needed for stable CCC estimates (listing n = 11, fill-in-the-blank n = 3, multiple choice n = 2, SATA n = 2, essay n = 2, short answer n = 1).
- ChatGPT was given the correct answers during both grading conditions, which the authors say likely contributed to the near-perfect objective-item performance and makes comparison with studies that require models to answer unaided inappropriate.
- Multiple faculty graders scored the exam without adjudicated discrepancy resolution, so some AI–faculty disagreement may reflect differences in human grading stringency rather than AI error.
- The authors note that AI models and their grading behavior change over time, so these accuracy and concordance estimates are tied to the model version tested rather than to AI grading in general.

## Connected Concepts

- [[automated-assessment]]
- [[medical-education]]
- [[llm]]
- [[generative-ai]]
- [[higher-ed]]
- [[automated-essay-scoring]]
- [[assessment-validity]]
- [[human-in-the-loop-ai]]

## Connected Articles

- [[automated-formative-assessments-a-level-sciences]]
- [[ground-truth-reliability-aied]]
- [[llm-formative-feedback-systematic-review-2026]]

## Citation

Falahat, S., Das, J., Bhaumik, D., & Thambi, M. (2026). [Bridging technology and education: The use of ChatGPT in grading pharmacy student exams](https://doi.org/10.1016/j.cptl.2026.102707). *Currents in Pharmacy Teaching and Learning*, 18, 102707.
