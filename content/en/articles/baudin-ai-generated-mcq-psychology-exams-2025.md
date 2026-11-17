---
title: "Assessing the psychometric properties of AI-generated multiple-choice exams in a psychology subject"
created: "2026-11-17T05:50:00-05:00"
updated: "2026-11-17T05:50:00-05:00"
type: article
authors: ["Baudin, J. S. P."]
published: "2025"
venue: "Journal of Pedagogical Sociology and Psychology 7(3)"
source_url: https://doi.org/10.33902/jpsp.202536891
assessment: [assessment-validity, automated-assessment]
technology: [generative-ai]
methods: [mixed-methods-research, quantitative-research]
research_method: [instrument development]
level: [higher ed]
audience: [instructors, assessment designers]
page_kind: [evaluation]
evidence_context: educational
confidence: high
sources: ['raw/papers/baudin-ai-generated-mcq-psychology-exams-2025.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** Baudin (2025) had ChatGPT-4 write 80 multiple-choice questions for an undergraduate Experimental Psychology course, then put them through the full apparatus a human-written item bank would face: expert content review, administration to 120 psychology students, and item analysis. The items held up better than the skeptical case predicts — acceptable internal consistency, moderate test-retest reliability, and good discrimination on all but 11.25% of items. What they did not do is assess the course's harder half: 73.75% of the questions targeted remembering and understanding, and only 8.75% reached analysis or evaluation.

## Key Findings

- **Reliability is acceptable but not strong.** The 80-item set showed acceptable internal consistency and moderate test-retest reliability; the paper reports the comparison with prior AI-generated item sets rather than a single headline coefficient as the finding.
- **Difficulty skews slightly easy, without collapsing.** 58.75% of items fell in the medium difficulty band on the observed administration, with the remainder split toward easier items.
- **Discrimination is good for most items.** 11.25% of items — nine of the 80 — discriminated poorly between high and low scorers, which is the figure an instructor would use to decide what to discard.
- **Bloom's distribution is the real defect.** 73.75% of items tested remembering and understanding, against 8.75% for analyzing and evaluating. That is a coverage failure, not a psychometric one, and it means the bank measures recall of experimental psychology rather than experimental reasoning.
- **Content validity was strongest on clarity and weakest on distractors.** Expert reviewers rated the wording of stems highly and the quality of the wrong answers lowest, which is the known weak point of generated item banks.

## What was done

The study used a mixed-methods design in three passes. Expert content validation scored each item for clarity, accuracy, alignment and distractor plausibility. The set was then administered to 120 undergraduates enrolled in Experimental Psychology. Psychometric analysis covered internal consistency, test-retest reliability, item difficulty, discrimination indices and Bloom's level, the last by classifying each stem against the taxonomy.

One item was dropped as ambiguously worded before analysis, which is itself a finding about generated items: the failure mode is not a wrong answer key but a stem that admits two readings.

## Why the Bloom's result matters more than the reliability result

AI-generated item banks are usually defended or attacked on reliability, and this study says the defense mostly holds. The attack that survives is about what the items can measure. Experimental psychology's learning objectives are about designing a study, recognizing a confound, choosing a statistic; an item bank that is 74% recall is reliable evidence that a student can name things, and silent about whether they can do the discipline.

The author's recommendation follows from that distribution rather than from the reliability numbers: generate at the recall level, then have a human rewrite the higher-order items, because the model produces the lower tiers cheaply and the upper tiers rarely.

## What this means for practice

- **Instructors:** screen generated items for discrimination before reuse. Nine in 80 failed, which is a rate worth checking rather than assuming.
- **Assessment designers:** audit the Bloom's distribution of any generated bank before it enters a course. The reliability statistics will look fine while the coverage is wrong.
- **Instructors:** expect distractor quality to be the weakest link, and budget human editing time there rather than on stems.
- **Curriculum designers:** if higher-order assessment is the goal, treat generation as a first draft for recall items only, and write the analysis and evaluation items yourself.

## Limitations

One course, one model version (ChatGPT-4), 80 items and 120 students at a single Philippine institution. Test-retest was moderate, which constrains claims about stability across administrations. Bloom's classification was done by the research team without reported inter-rater reliability, so the 73.75% / 8.75% split carries coder judgment. The paper's comparison base is other AI-generated item studies rather than a matched human-written bank in the same course.

## Citation

Baudin, J. S. P. (2025). [*Assessing the psychometric properties of AI-generated multiple-choice exams in a psychology subject*](https://doi.org/10.33902/jpsp.202536891). Journal of Pedagogical Sociology and Psychology, 7(3).
