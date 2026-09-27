---
title: "WrAFT: a Modularized Automated Writing Evaluation System for Argumentative Essays"
created: "2026-09-27T07:21:54-04:00"
updated: "2026-09-27T07:21:54-04:00"
type: article
sources: ['raw/papers/wraft-automated-writing-evaluation-argumentative-2026.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [design and evaluation study]
discipline: [writing education]
level: [higher ed, adult learning]
audience: [instructors, researchers, instructional designers]
foundations: [human-ai-collaboration, teacher-role, limitations-in-aied-research]
pedagogy: [self-regulated-learning]
technology: [generative-ai, llm, educational-nlp]
assessment: [automated-assessment, automated-essay-scoring, ai-feedback-quality, feedback]
methods: [benchmark, quantitative-research]
ethics: [privacy, hallucination-risk]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-27"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Labib and colleagues present WrAFT (Writing Assessment and Feedback Tool), a modular [[automated-assessment|automated writing evaluation]] system for argumentative essays. WrAFT separates the work into three modules: [[automated-essay-scoring|scoring]], surface-level feedback on grammar and mechanics, and deep-level feedback on organization, coherence, and argumentation. Built on a proprietary ETS dataset of 480 TOEFL Independent Writing essays with official benchmark scores (120 essays for scoring fine-tuning, 360 for testing), the fine-tuned GPT-4o module reached a [[benchmark|quadratic weighted kappa]] (QWK) of 0.84 and an RMSE of 0.44 on the 0-5 scale, ahead of the Wang and Gayed (2024) baseline (QWK 0.78, RMSE 0.57). Teachers approved 96.14% of surface-level edits, 93.03% of macro comments, and 94.69% of micro comments. The sharpest lesson runs against intuition: supervised fine-tuning failed at feedback generation, producing truncated or unparseable output, while directly [[prompt-engineering|prompting]] Claude 3.7 produced the feedback teachers rated best. It ships as a free interactive web application.

## Key Findings

1. **Modular, not monolithic.** WrAFT assigns scoring, surface-level feedback, and deep-level feedback to separate modules, and often separate models, rather than one model doing all three.
2. **Both scored above the official bar.** Fine-tuned GPT-4o and LLaMA-3.3-70B both scored QWK above 0.8, past the QWK of 0.7 ETS treats as sufficient for TOEFL Independent Writing scoring by e-rater.
3. **Teachers, not metrics, validated the feedback.** Raters judged 187 of 201 macro comments effective (93.03%) and 596 of 600 necessary micro comments effective (94.69%), with Gwet's AC1 agreement of 0.89 and 1.00.
4. **Fine-tuning failed on open-ended feedback.** The fine-tuned GPT-4o produced so many comments that every inference exceeded the 8,000-token context window, and fine-tuned LLaMA-3.3-70B emitted JSON that would not parse.
5. **Prompted Claude 3.7 produced what teachers preferred.** Across 40 essays it generated 630 micro comments against 368 for GPT-4o and 336 for LLaMA-3.3-70B, and reviewers confirmed the extra comments were necessary, not verbose.

## How the study was designed

The system was built on a proprietary ETS dataset of 480 TOEFL Independent Writing essays, scored by two raters on the original 0-5 scale. Essays scored 0 were excluded, so the dataset ranges from 1-5 with 0.5 increments, and the two scores were averaged where their discrepancy was no more than 1. For scoring, 120 essays were selected by score-based equal sampling for fine-tuning and the remaining 360 formed the test subset. With no feedback in the dataset, deep-level training data was curated from scratch: 90 essays were annotated by eight experienced university teachers in MS Word, after training on the rubrics and nine benchmark essays. Surface-level [[educational-nlp|grammatical error correction]] needed no annotation, since directly prompting LLMs already works there.

## What the scoring numbers show

Fine-tuned GPT-4o performed best: RMSE 0.44 and QWK 0.84. Fine-tuned LLaMA-3.3-70B reached RMSE 0.53 and QWK 0.81, while the Wang and Gayed (2024) baseline scored RMSE 0.57 and QWK 0.78. The RMSE values look reasonable against the human ceiling: ETS permits up to a one-point difference between two raters, so a final averaged score can deviate by 0.5 from each individual score. Agreement with an averaged human score is not the same as [[assessment-validity|validity]], though: stress-tests showed scoring engines could be deliberately gamed, and critics argued they rewarded surface features, especially essay length, over substance.

## Why prompting beat fine-tuning for feedback

For surface-level feedback the authors used direct prompting, instructing GPT-4o not to add stylistic or word-choice corrections. ERRANT tagged 2049 edit operations across the 40 test essays; teachers deemed 1985 necessary (96.88%), of which 1970 were both necessary and effective (96.14%). The rejected edits were systematic: GPT-4o preferred British usage over American (N =7) and added Oxford commas raters did not consider errors (N =10). For deep-level feedback, fine-tuning failed outright. The fine-tuned GPT-4o produced so many comments that it exceeded an 8,000-token context window on every inference, and the fine-tuned LLaMA model emitted JSON that could not be parsed. The authors switched to [[prompt-engineering|prompting]] Claude 3.7 on traits derived from a thematic analysis of the teacher comments. Raters found 27 macro comments ineffective (6.97%), often where essays broke task conventions: a title read as a first paragraph, sentences formatted as separate paragraphs (N =8), or responses cut short by the time limit (N =2).

## What this means for practice

- **Instructors.** Use the tool for the work that eats time, not the work that needs judgment. Teachers approved 96.14% of surface-level edits, so mechanics can be delegated, while 6.97% of macro comments were rejected and deserve a spot-check.
- **Instructors.** Remove feedback the system could not have known was irrelevant: Claude 3.7 advised adding research citations to a test-taker with no access to external resources, and gave conclusion help on an unfinished, timed-out response.
- **Instructors.** Expect rougher treatment of unconventional submissions: the misread title and the repeated comments that a paragraph was too short both came from essays that departed from the expected format.
- **Administrators and developers.** Treat the score as a consistency reference rather than a grade, which helps where instructors in a large coordinated course apply idiosyncratic criteria. Start from direct prompting before assuming fine-tuning is needed.

## Limitations

- Human evaluation measured precision only. Whether the system caught every error, and every text element that deserved a comment, was never tested; building a gold standard was beyond the study's capacity.
- The system was developed on one proprietary dataset of argumentative essays written to prompts, was not tested on source-based writing, and returns feedback in English only.
- No learning-outcome data is reported: the study establishes score agreement and feedback approval, not whether students' writing improved.
- Reliance on commercial APIs brings cost, rate limit, sustainability and [[privacy|data privacy]] concerns, and model updates can change performance.

## Citation

Labib, A., Huang, Y., Wu, J., Gayed, J. M., Yuan, Z., & Wang, Q. (2026). [WrAFT: a Modularized Automated Writing Evaluation System for Argumentative Essays](https://arxiv.org/abs/2607.14524).