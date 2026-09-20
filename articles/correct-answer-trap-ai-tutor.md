---
title: "Catching The Correct Answer Trap: Characterising AI Tutor Blind Spots When Analysing Student Reasoning"
created: "2026-05-28T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring, llm]
assessment: [automated-assessment, formative-assessment]
methods: [benchmark]
audience: [researchers, instructors]
level: [higher ed]
sources: ['raw/papers/2605.23925.md']
confidence: high
discipline: [math education]
page_kind: [evaluation]
---

> **Synthesis:** **Catching the Correct Answer Trap** — accepted at [[ai-education|AIED]] 2026 — exposes a critical blind spot in [[intelligent-tutoring]] systems: they systematically fail to detect [[misconceptions]] when students arrive at correct answers through flawed reasoning. Using real student data from the Eedi [[math-education|mathematics]] platform, the authors characterize the 'Correct Answer Trap' (CAT), showing that 71% of failures concentrate in just two question types where erroneous reasoning accidentally produces the correct numerical answer. Even a frontier [[llm]] achieves only 84% detection accuracy while generating roughly 4 false alarms per genuine detection — making standalone automated screening impractical. This finding has profound implications for [[automated-assessment|Automated Grading]] and [[formative-assessment]] systems: high overall accuracy metrics can mask catastrophic failures in reasoning assessment. The work connects to [[llm-student-misconception-identification]] [[research-methods-aied|research]] on the gap between answer checking and reasoning evaluation, and to findings that even [[socratic-method|Socratic]] AI tutors can miss deep misconceptions. The paper reinforces calls for [[human-in-the-loop-ai]] approaches in [[intelligent-tutoring]] and suggests that [[scaffolding]] designs should explicitly account for reasoning assessment, not just answer verification. The concentration of failures in predictable question types also suggests targeted improvements are possible.

## What this means for practice

- **Instructors.** Audit multiple-choice items for the trap pattern before reuse: 71% of the correct-answer-with-flawed-reasoning cases in this math dataset came from just two questions where a common error happens to produce the correct numerical answer, and item authors can anticipate the pattern at design time.
- **Instructors.** Stop treating answer-checking accuracy as evidence of reasoning assessment. Fine-tuned models here reached at least 98% recall on wrong answers while scoring under 58% on correct answers backed by flawed reasoning.
- **Instructors.** Keep a human in the loop on flagged reasoning rather than auto-acting: at the dataset's natural prevalence of 1.6%, even the best model (84% recall on true misconceptions) generates roughly four false alarms per genuine detection.
- **Researchers.** Report per-class recall and balanced accuracy for rare reasoning failures instead of overall accuracy, which stays high while the pedagogically critical cases go undetected.
- **Designers.** Add a reasoning prompt after correct answers — a one-line justification step — so that [[misconceptions]] surface even when the selection is right, and screen computationally cheap local models only where a question is known to be vulnerable.

## Limitations

- Model comparisons rest on only 61 true-misconception test cases; at that size the Wilson 95% confidence intervals span ±12 percentage points, so finer distinctions between models should be read cautiously even though the T5-versus-Gemini gap holds at p < 0.005.
- Question classification (procedural versus conceptual) was performed by one researcher over just 15 unique questions, and the authors state they cannot fully separate item identity from question category at this scale.
- Evaluation is confined to the Eedi [[math-education|mathematics]] dataset; the authors list expansion to other domains and languages as future work, so no cross-subject generalization is demonstrated.
- Run-to-run stability was not tested: all prompted models ran at temperature 0 and no repeated runs across API versions were evaluated.

## Connected Concepts

- [[intelligent-tutoring]]
- [[llm]]
- [[automated-assessment]]
- [[formative-assessment]]
- [[human-in-the-loop-ai]]
- [[scaffolding]]
- [[misconceptions]]
- [[math-education]]
## Connected Articles

- [[llm-student-misconception-identification]]
## Citation

Moiz Imran, Sahan Bulathwela (2026). [Catching The Correct Answer Trap: Characterising AI Tutor Blind Spots When Analysing Student Reasoning](https://arxiv.org/abs/2605.23925). AIED 2026.
