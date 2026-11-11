---
title: "Reliability of Claude Code as an Agentic AI Grading System for Handwritten University Exams"
created: "2026-11-11T09:12:03-05:00"
updated: "2026-11-11T09:14:54-05:00"
type: article
evidence_context: educational
published: 2026-11-09
page_kind: [evaluation]
research_method: [design and evaluation study]
discipline: [cs education]
level: [higher ed, undergraduate]
audience: [instructors, assessment designers, assessment professionals]
sources: ['raw/papers/alghamdi-claude-code-agentic-grading-2026.md']
source_url: "https://arxiv.org/abs/2611.13217"
source_depth: full text
confidence: high
assessment: [automated-assessment, assessment-validity, feedback, evaluative-judgment]
technology: [llm]
foundations: [agentic-ai]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Can an agentic coding tool grade a stack of scanned handwritten exams as reliably as the instructor who set them? AlGhamdi gave 60 consenting students' 20-mark mid-term papers from a Saudi computer graphics course to Claude Code — an agentic deployment of Claude Opus 4.6 with three rubric files for the marking scheme, the grading rules and the output format — and compared its marks with his own. Agreement on totals was r = 0.97 with a mean absolute error of 0.85 marks, a mean AI-positive bias of 0.68 marks, and test-retest ICC = 0.96 across two sessions a week apart. The [[automated-assessment|reliability profile]] is more interesting than the headline: weighted kappa ran from 0.98 on multiple choice to 0.65 on evaluative items, and hand-drawn diagram questions reached only 55% exact agreement. The author's conclusion is that [[agentic-ai|agentic]] grading is ready to assist on objective and short-form items under review, but not to replace [[evaluative-judgment|instructor judgment]] at boundaries or on drawings.

## Key Findings

1. **Total-score agreement was strong.** Pearson r = 0.97 (95% CI [0.94, 0.99]), Spearman 0.95, mean absolute error 0.85 marks out of 20, on an agreement sample of 20 papers.
2. **The AI marked slightly higher, consistently.** Mean bias was 0.68 marks in the AI's favor (t(19) = −4.18, p < 0.001), with 95% limits of agreement from −2.01 to +0.66 marks.
3. **It graded itself the same way twice.** Across two independent sessions a week apart, test-retest ICC was 0.96 — consistency measured on a separate 15-paper sample.
4. **Agreement fell as questions got less discrete.** Weighted kappa was 0.98 for multiple choice, 0.74 for drawing, 0.73 for written short answer, 0.67 for analysis and 0.65 for evaluation items.
5. **Drawing items were the outlier on exact agreement.** Only 11 of 20 drawing ratings matched exactly (55%), against 99 of 100 for multiple choice, and the drawing ICC confidence interval was wide.
6. **Feedback content held up better than scores.** Coding separated diagnostic from confirmation feedback: 92.8% of feedback on lost-mark items was diagnostic and 97.8% on full-credit items was confirmation.
7. **Three failure modes recurred.** Keyword matching without conceptual depth, selection-state ambiguity when a student's correction of a multiple-choice answer was misread, and attention drift across regions of a hand-drawn diagram.

## How the study was run

Sixty students consented from one course, CPIT285, at King Abdulaziz University; the papers were scanned and graded in a single agentic session, with the model working from three rubric files rather than a per-item prompt. Analyses used disjoint samples so that agreement and consistency would not be conflated: every third paper by alphabetical order for the 20-paper agreement, question-type and feedback samples, and 15 papers for the two-session consistency check.

Statistics were chosen to answer four separate questions — Pearson correlation and Bland-Altman limits of agreement for totals, quadratic weighted Cohen's kappa per question type, ICC for test-retest, and a four-category coding scheme for feedback. The author reports the design plainly as a within-rater benchmark: he is the course's sole subject-matter expert, so the comparison is agreement with a domain expert, not inter-rater reliability among humans.

Fourteen grade adjustments were made during reconciliation — seven AI grades overridden as incorrect, six human grades revised after re-examination, one human grade retained despite AI disagreement — and the results are reported post-reconciliation, which the paper states rather than hides.

## What the profile means for deployment

The question-type gradient is the actionable part. On multiple choice the tool is effectively exact; on written short answers and analyses it reaches substantial agreement (0.67 to 0.73) with per-question error well under a mark; on evaluation items it drops to 0.65, where a single grade band can move a student's total meaningfully. The author's reading is that reliability on objective items is not evidence of reliability on the items that carry the reasoning.

The companion study of student perspectives ([[student-perspectives-ai-writing-grading-2026|AlGhamdi, 2026]]) found that students separated the usefulness of AI [[feedback]] from its authority to decide a grade. Together the two papers point at the same deployment shape: machine scoring as a reviewed first pass, with instructor judgment reserved for exactly the item types where agreement was weakest.

## What this means for practice

- **Instructors:** Use AI grading first on multiple choice and short-answer items, and keep the reasoning-heavy items. Agreement fell from 0.98 to 0.65 across that span in this exam.
- **Instructors:** Review the boundary cases rather than every paper. The mean bias of 0.68 marks is small on a 20-mark paper, but the 95% limits of agreement span nearly three marks, which is where grade boundaries move.
- **Assessment designers:** Do not assume hand-drawn work is gradeable from a scan. Diagram items had the lowest exact agreement (55%) and the widest consistency interval, and the paper names region-of-attention drift as the cause.
- **Administrators:** Keep an instructor sign-off in the workflow. This design had AI grades reviewed before entering the record; the reliability evidence supports assistance, and the author explicitly does not claim it supports unsupervised deployment.

## Limitations

- The agreement sample was 20 papers and the consistency sample 15, so the drawing-item interval is wide ([0.01, 0.80]) and subgroup analyses are coarse.
- Human grading was performed by the author alone, so the statistics are within-rater benchmark agreement, not inter-rater reliability against a human consensus.
- The feedback accuracy coding was also done by one coder, with no second-coder kappa reported.
- The reported statistics are post-reconciliation values after fourteen grade adjustments, not the raw output of either grader.
- One model configuration (Claude Opus 4.6 at the xhigh effort level, three rubric files) in one course at one institution; other configurations would produce a different profile.
- Reliability is not [[assessment-validity|validity]]: the design does not test whether the graded construct is the intended one, or how AI grading affects students downstream.

## Citation

AlGhamdi, R. (2026). [*Reliability of Claude Code as an Agentic AI Grading System for Handwritten University Exams*](https://arxiv.org/abs/2611.13217). arXiv:2611.13217 [cs.CY]. https://doi.org/10.48550/arXiv.2611.13217.
