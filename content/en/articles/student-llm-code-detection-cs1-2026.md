---
title: "Correctness, Convergence, and AI-Generated Code Detection: A Longitudinal Study of Student and Large Language Model Code"
created: "2026-10-02T11:30:00-04:00"
updated: "2026-10-02T11:30:00-04:00"
type: article
sources: ['raw/papers/student-llm-code-detection-cs1-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis]
discipline: [cs education]
level: [higher ed]
audience: [instructors, researchers]
pedagogy: [student-ai-interaction]
technology: [generative-ai, llm]
assessment: [ai-detection, assessment-validity, automated-assessment]
methods: [quantitative-research]
ethics: [ai-use-disclosure]
foundations: [academic-integrity]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-02"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This longitudinal study asks what a similarity match between student work and a bank of [[llm]]-generated reference solutions actually establishes in [[cs-education|introductory programming]]. The authors compared 29,970 final submissions from ten Python labs in the 2021, 2023, and 2025 offerings of one CS1 course with 90,000 reference attempts generated retrospectively by GPT-5.5, Gemini 3.1 Pro, and Claude Opus 4.8. The models usually produced correct code — mean hidden-test scores of 98.93% to 99.99% — and converged on similar implementations, especially on tightly specified functions. Student–LLM match incidence rose to 1.76–2.12 times its 2021 level in 2025 and persisted among full-pass submissions, while four constrained functions appeared in fewer exact forms. Most reported overlaps were short (a median of 8–9 lines), so the minimum match length largely determines which files a review workflow retrieves. The authors argue the technique supports population-level monitoring and pre-release [[assessment-validity|assignment review]], not individual [[ai-detection|AI attribution]], which would require process evidence such as prompts, revisions, and [[ai-use-disclosure|disclosures]].

## Key Findings

1. The frontier models usually solved the labs: across LLM–year combinations, mean hidden-test scores ranged from 98.93% to 99.99%, compared with 76.37% (2021), 80.76% (2023), and 88.03% (2025) for student submissions.
2. [[llm|Models]] from different providers converged: 87.79%–88.14% of cross-LLM pairs matched after docstring removal, only 3.40–3.61 percentage points below within-LLM rates, and cross-LLM rates exceeded 95% across Labs 1–9.
3. Student submissions matched the generated reference bank more often over time: incidence was 1.06–1.19 times the 2021 rate in 2023 and 1.76–2.12 times that rate in 2025, persisting among full-pass files.
4. Tightly specified functions collapsed toward few exact abstract-syntax-tree forms: the rarefied LLM pool produced 1–14 expected forms per 1,000 files, and four constrained functions had 18.4%–51.1% fewer distinct student forms by 2025.
5. Open-ended tasks stayed diverse: loopy_madness yielded 846 expected LLM forms per 1,000 files against 929 student forms, and its 3,000 attempts contained 2,288 distinct forms with none shared by all three models.
6. Most matches were short: the median reported overlap spanned 8–9 lines, and 97.0%–99.4% of cross-matches contained fewer than 30 matched lines, so the minimum match length is a consequential choice.
7. Coverage collapsed as the minimum rose: at 30 lines, 2.9%–3.5% of 2021 student files and 10.8%–16.7% of 2025 LLM attempts retained a match; at 50 lines student-file coverage fell near zero.

## Task structure, not authorship, drives convergence

Convergence tracked how much freedom an assignment left, not what generated the code. On my_and, which forbids `==` and permits only `not` and `or`, all three models produced the same exact abstract syntax tree form via De Morgan's law, and the rarefied LLM pool yielded only 1–14 expected forms per 1,000 files on the four constrained functions, versus 151–804 among 2021 student submissions. At the opposite end, loopy_madness interweaves two strings with free choices about indices, direction state, and string construction, and none of its forms was shared by all three models. Lab 10, a compact regular-expression task, showed the mechanism from another angle: cross-LLM match rates fell to 13.18%–22.11% because equivalent regexes use different syntax and leave little shared code for MOSS to match. A match, then, can reflect a canonical solution that an independent student could reasonably write, and the authors urge reading match rates per task rather than as one detection signal.

## What the cohort shift does and does not show

Student code moved toward the models across the observed period, but the timing resists a simple explanation. Match incidence in 2023 sat only slightly above 2021 — 1.06–1.19 times the baseline — even though chat assistants were widely available during that offering, and the 2023 and 2025 syllabi carried materially identical [[academic-integrity|AI-use policies]] along with an institution-hosted [[generative-ai|generative-AI]] tutor on two labs. The large jump came in 2025, when incidence reached 1.76–2.12 times the 2021 rate. Rising [[learning-gains|lab correctness]] also coincided with lower final-exam means (55.3 in 2021, 54.6 in 2023, 49.8 in 2025), though the exams used different questions. The authors [[anxiety-and-stress|stress]] that the design is observational: teaching-team [[writing-education|composition]], permitted support, cohort composition, and shared resources all varied, so the change documents population-level resemblance in [[student-ai-interaction|AI use]] without identifying either a cause or any individual student's tool use.

## Building and validating a reference bank before release

Because generated solutions are cheap, the authors recommend producing them before students see an assignment. An instructor would run many attempts from the exact handout and starter code, grade every output with the instructor's [[automated-assessment|hidden test suite]], and inspect convergence separately for each task. A pilot bank of 100 attempts would cost about US$5 at the study's average batch rate of roughly 5 US cents per attempt — far below the 491.8 million tokens and US$4,284 spent on the full 90,000-attempt run. Where outputs converge on one form, the task may be too constrained; where repeatedly generated failures cluster, the handout may be ambiguous. The profile gives the instructor a chance to revise before release and to decide what additional evidence — staged work, student-written tests, explanations, or oral follow-ups — the assessment should elicit. Lab 10 warns against reading low matching as rich reasoning, since one compact expression can hide many equivalent forms.

## What this means for practice

- **Instructors.** Build a validated reference bank before releasing an assignment: generate solutions from the exact handout and starter code, grade them with the hidden instructor tests, and inspect convergence per task, since a 100-attempt pilot costs roughly US$5.
- **Instructors.** Read matches per task rather than against one threshold: cross-LLM matching exceeded 95% across Labs 1–9 but fell to 13.18%–22.11% on the compact regular-expression Lab 10, so constrained and open tasks carry different baselines.
- **Instructors.** Choose the minimum match length deliberately, because the median overlap was only 8–9 lines and raising the cutoff to 30 or 50 lines drops most student files from the candidate set.
- **Administrators.** Treat matches as a population-level signal, not individual evidence, since the study had no verified source labels and cannot identify which submission used AI or estimate how many students did.
- **Researchers.** Collect prompts, revisions, intermediate code, and [[ai-use-disclosure|AI-use disclosures]] to connect final-code similarity with how work was actually produced and what students learned.

## Limitations

- The design is an observational cohort comparison with no verified submission-level source labels or contemporaneous AI-use disclosures, so it cannot validate individual detection or estimate AI-use prevalence.
- Although the lead instructor, delivery mode, and core materials were stable at the single large research-intensive [[higher-ed|university]], other instructors, most teaching assistants, cohort composition, and some checker or specification details varied, preventing causal attribution; the 2022 and 2024 offerings were excluded as too different.
- The reference bank uses three 2026 frontier models under one fixed protocol, so it measures retrospective resemblance rather than the tools students actually had in 2023 or 2025, and absolute rates may change with future models.
- MOSS reports surface overlap only, the exact-form estimates are limited to five purposively selected functions, and four unreadable files (three from 2023, one from 2025) were dropped from the MOSS analyses.

## Citation

Ye, R., Fan, J., Zavaleta Bernuy, A., Karnalim, O., Denny, P., Leinonen, J., & Liut, M. (2026). [*Correctness, Convergence, and AI-Generated Code Detection: A Longitudinal Study of Student and Large Language Model Code in Introductory Programming*](https://arxiv.org/abs/2610.00863). arXiv:2610.00863.
