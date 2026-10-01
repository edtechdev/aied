---
title: "Argus: Academic Integrity in the Era of Generative AI"
created: "2026-10-01T09:07:36-04:00"
updated: "2026-10-01T09:07:36-04:00"
type: article
sources: ['raw/papers/argus-academic-integrity-genai-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [system development, longitudinal study, secondary analysis]
discipline: [cs education]
level: [higher ed, undergraduate]
audience: [instructors, administrators, researchers]
foundations: [academic-integrity, reducing-ai-misuse]
technology: [llm, generative-ai, learning-analytics]
assessment: [ai-detection, assessment, learning-gains]
methods: [quantitative-research]
institutions: [educational-policy-ai, governance]
ethics: [ai-misuse-learning-harm, ai-use-disclosure]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Racovan, Rawat, May, and Turkstra (2026) present Argus, a [[learning-analytics]] system that flags patterns consistent with [[llm|LLM]]-assisted code development in an [[higher-ed|undergraduate]] [[cs-education|C programming course]] at Purdue University. Argus combines behavioral signals — commit span and burst detection from automatically retained Git history — with stylistic indicators such as untaught language features and irregular comments, aggregating them into a weighted H-score. Across six Spring offerings of the same large-enrollment CS2 course, H-scores were near-zero in the pre-LLM era and rose sharply as [[generative-ai|coding assistants]] spread, with 45.7% of Spring 2026 students flagged after manual review. Flagged students scored substantially lower on in-person, proctored exams, and the gap widened with the number of flagged assignments. The authors frame Argus as a triage tool for [[academic-integrity]] work, not an autonomous judge: every flag undergoes [[human-in-the-loop-ai|human review]], and detection accuracy matters less than whether that review stays feasible at scale.

## Key Findings

1. **A hybrid signal design.** Argus scores each commit with weighted static indicators — untaught C features, unnecessary dynamic allocation, irregular comments — plus behavioral span and burst detection from retained Git history.
2. **Calibrated against a pre-LLM baseline.** Mean H-scores were near-zero in Spring 2020 (1.1) and Spring 2022 (0.5) and reached 11.9 in Spring 2026, with a maximum of 81.
3. **Roughly 45% flagged in 2026.** Of 584 students who completed the first midterm, 267 (45.7%) were flagged after manual review, tracking the semester's sharply elevated H-scores.
4. **A negative correlation with proctored exams.** The H-score–exam correlation fell from weakly positive in Spring 2020 to r = −0.537 in Spring 2026, strongest on Midterm 1 (−0.518) and Midterm 2 (−0.522).
5. **More flags, worse outcomes.** Students with one flagged assignment averaged 69.4% across exams, near the 73.5% non-flagged mean; those with eight or more averaged 54.4%.
6. **Human review is mandatory.** All flagged cases undergo manual review before any integrity action; in Spring 2026 staff spent a median of about 1.5 minutes per student, and four top-ranked cases lacked evidence to escalate.

## What Argus measures

Argus exploits an unusual data source. Assignments run on a university-managed server, and invoking `make` both compiles the student's code against a hidden test suite and commits it to a per-student Git remote, so intermediate commits survive without any student action. From that history the tool derives two behavioral signals: span compares elapsed time between a student's earliest commit and final submission against a per-assignment threshold, and burst detection flags commits introducing at least 30 new lines at 15 or more lines per minute, consistent with pasting externally generated code. Static indicators then target C idioms that serve no purpose in an assignment: advanced library functions introduced before they are taught, unneeded dynamic memory allocation, and comments mentioning model names. Each indicator is weighted by its class prevalence, so an idiom used routinely in an assignment automatically loses diagnostic weight.

## Six years of changing behavior

The longitudinal design is what makes the result legible. Argus was run over anonymized data from six Spring offerings taught by the same instructor with similar syllabi, producing 3,893 student-semester pairs and 42,695 homework submissions. In 2020 and 2022 the score distributions clustered near zero, which the authors read as evidence of a low false-positive rate on human-written, pre-LLM work. Scores edged upward in 2023 and 2024 as general-purpose models reached the public, then jumped in 2025 (mean 4.2) and 2026 (mean 11.9). Because the shift appears across the distribution rather than in a few outliers, the authors argue it reflects a broad change in student behavior, not a handful of extreme cases. That same trend makes [[ai-detection]] here a moving target: a threshold calibrated in one offering will not transfer to the next.

## Flagged use and proctored exam performance

The [[pedagogy|pedagogical]] claim rests on an independent baseline. Each semester the course administers three closed-note, written, in-person [[assessment|exams]] on which external assistance is prohibited, so exam performance is treated as an independent measure of [[learning-gains]]. The [[quantitative-research|H-score–exam correlation]] moves from weakly positive in 2020 to strongly negative by 2026, and the band analysis declines monotonically: students averaging H-scores of 0–4 scored 73.6%, falling to 42.5% above a score of 50. In Spring 2026, flagged students averaged 61.9% against 73.5% for non-flagged peers, a gap largest on Midterm 2. MOSS, run in parallel, found only 2–3 suspicious student-to-student cases per assignment, which the authors attribute to LLM-generated submissions sharing no surface resemblance. The widening gap is, for the authors, the [[ai-misuse-learning-harm|learning harm]] the course exists to prevent.

## Policy, due process, and the review bottleneck

The authors argue the question for CS2 courses is no longer whether students will use capable assistants but how [[educational-policy-ai|course design and policy]] should respond. Existing [[governance|institutional rules]] draw a line at unauthorized assistance, yet the paper notes a difference between using a model to debug a single function and generating an entire submission — a distinction common policies may not capture. On the detection side, the authors reject autonomous judgment as the goal. A high H-score is never treated as evidence of misconduct; benign behaviors such as prior programming experience or drafting in an external editor can inflate it, so staff read each finding against the full working history. The appropriate standard, they argue, is whether a system makes human review fast and structured enough to be [[reducing-ai-misuse|feasible]], especially where [[ai-use-disclosure|expectations about permitted use]] are still evolving.

## What this means for practice

- **Instructors.** Treat a high detection score as a prompt to look, never a verdict: read every flag against the full working history, because prior experience and external-editor drafting produce the same signals as misuse.
- **Administrators.** Budget for the review process, not just the detector. Argus's value came from making human review feasible at scale, and the paper is blunt that acting on an automated score alone is too serious to accept.
- **Instructors.** Assume capable assistants are present rather than trying to prohibit them, and redesign assessment around that assumption; the 45.7% flag rate and widening exam gap suggest policy cannot rest on hoped-for abstention.
- **Researchers.** Use the pre-LLM baseline as a validation anchor: near-zero scores in 2020 and 2022 show the heuristic can stay quiet on human work.

## Limitations

- The study is a single large-enrollment CS2 course at Purdue, taught by the same instructor across six Spring offerings, so indicator weights and thresholds are calibrated to one course's conventions and may not transfer elsewhere.
- The H-score is the sole proxy for LLM-assisted development: the paper has no ground truth on which submissions were actually LLM-assisted.
- Historical semesters were scored by Argus but not manually reviewed, so the correlation analysis rests on automated scores rather than reviewed determinations.

## Citation

Racovan, D., Rawat, A., May, C. K., & Turkstra, J. A. (2026). [*Argus: Academic Integrity in the Era of Generative AI*](https://arxiv.org/abs/2609.36073). arXiv preprint.