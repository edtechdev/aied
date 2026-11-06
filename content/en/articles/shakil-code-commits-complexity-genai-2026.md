---
title: "Code, Commits, and Complexity in the GenAI Era: A Longitudinal Study of Team-Based Capstone Projects"
published: "2026-11-06"
created: "2026-11-06T09:05:00-05:00"
updated: "2026-11-06T09:05:00-05:00"
type: article
sources: ['raw/papers/shakil-code-commits-complexity-genai-2026.md']
source_url: "https://arxiv.org/abs/2611.07297"
confidence: high
page_kind: [evaluation]
research_method: [longitudinal study]
discipline: [cs education]
level: [higher ed]
audience: [instructors, curriculum designers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4-flash-0731
    role: drafting
    date: "2026-11-06"
    agent: hermes-agent
source_depth: full text
pedagogy: [student-engagement]
technology: [generative-ai, llm]
assessment: [assessment-validity]
methods: [quantitative-research]
---

> **Synthesis:** Shakil, Brabrand, and Denny (2026) mine ten semesters of version-control history — N=260 capstone team repositories from 2021 to 2025, spanning pre- and post-AI cohorts — to ask how student code changed once [[generative-ai|GenAI]] tools became widely available. End-of-semester codebases roughly triple, from about 3.4 KLOC in 2021–2023 to about 10 KLOC in 2024–2025, while cyclomatic complexity and error-handling density rise and comment density does not, a decoupling the authors call complexity without commentary. Later cohorts commit far more often and in greater volume, yet individual commit sizes are largely unchanged, a shift in development rhythm rather than edit granularity. Because project courses increasingly treat [[learning-analytics|repository activity]] as evidence of progress and learning, these changes complicate the validity of [[assessment-validity|artifact-based assessment]] in [[higher-ed|higher education]] and urge [[cs-education|computing educators]] to reconsider whether code volume, commit activity, and complexity still measure what they once did in student projects written before these tools.

## Key Findings
1. **Code volume roughly tripled.** Median end-of-semester size rose from 3.4 KLOC in 2021–2023 to 10 KLOC in 2024–2025 (ρ = +0.45, q < 0.001).
2. **Complexity rose without commentary.** Mean cyclomatic complexity climbed from 1.7 to 2.5 (ρ = +0.27, q < 0.001); error-handling density reached about 12–13 per KLOC in 2024–2025.
3. **Comment density stayed flat.** It moved from 9.2% in 2021 to 7.6% in 2023–2024 and 8.4% in 2025 (ρ = −0.04, p = 0.52).
4. **Commit volume more than tripled.** Median commits rose from 63 in 2021 to 265 in 2024 and 300 in 2025 (ρ = +0.38, q < 0.001).
5. **Commit frequency rose.** Commits per active day climbed from 3.3 to 5.4 (ρ = +0.26, q < 0.001); edit size varied little (ρ = +0.09, p = 0.14).
6. **The 2023 cohort was transitional.** Most changes appear from 2024 onward; mid-semester progress showed no trend (ρ = −0.12, p = 0.069).

## Why repository activity matters

Project courses often use version-control data as evidence of progress, collaboration, and learning, and capstone repositories give an authentic view of how students work in teams. In this course, teams of five to six students built software for real external clients over a 13-week period following an agile process using GitHub. The dataset began with 302 repositories and was cleaned to N=260 team repositories (19 in 2021, 65 in 2022, 57 in 2023, 51 in 2024, 68 in 2025). The ten semesters split into a pre-AI period (2021–2022) and a post-AI period (2023–2025), using the public release of ChatGPT in November 2022 as an approximate boundary, since students adopted [[llm|large language models]] at different times. Repository metrics therefore track availability-era change, not observed tool use.

## Larger, more complex, less documented

Code size grew substantially across the study. Median end-of-semester size was 2.3 KLOC in 2021, 3.7 in 2022, and 3.4 in 2023, then rose to 7.7 KLOC in 2024 and 11 KLOC in 2025, while mid-semester code rose from 1.4–1.8 KLOC in 2021–2023 to 2.5 KLOC in 2024 and 4.8 KLOC in 2025. The code-characteristic metrics split: mean cyclomatic complexity increased from 1.7 to 2.5, error-handling density rose to about 12–13 per KLOC in 2024–2025, but comment density showed no trend, moving only between 9.2% in 2021 and 8.4% in 2025, an uneven pattern rather than a steady decline. The authors call this complexity without commentary: post-AI code is larger and more complex, but it is not better documented at all.

## A different rhythm, not bigger edits

Development behavior shifted in frequency rather than granularity. Median commit volume rose from 63 in 2021 and around 100–112 in the 2022–2023 cohorts to 265 in 2024 and 300 in 2025, and median commits per active day climbed from 3.3 in 2021 to 5.4 in 2025. Commit sizes, however, did not change much: the median lines changed per commit after mid-semester showed no clear trend, with cohort medians between 38 and 65 lines, and this result held even when repositories with very little activity were excluded. This challenges the assumption that AI assistance yields fewer, larger "batch" commits. Instead, later cohorts committed more often with similarly sized edits, a signature of [[student-ai-interaction|AI-supported iteration]] reflecting intensified [[student-engagement|development activity]] without a change in edit granularity.

## What repository evidence can and cannot prove

A larger, more complex, more frequently committed codebase is not necessarily evidence of greater learning. Metrics that educators once treated as signs of effort — code volume, commit activity — have increased substantially while comment density has not, reinforcing concerns that programming assessments and [[assessment-validity|artifact-based judgments]] become less reliable under GenAI. Assessment is likely more robust when the final codebase is weighed alongside process evidence and students' ability to justify their work, through viva-style defenses, code walkthroughs, or stronger documentation requirements. [[teacher-role|Educators]] should also treat rising complexity cautiously, since it may reflect the verbose style often associated with GenAI output, changed project templates, or sound engineering rather than deeper understanding. Artifacts alone, however, cannot carry the full weight of assessment.

## What this means for practice

- **Instructors.** Stop equating code volume and commit counts with effort or learning: end-of-semester codebases roughly tripled while comment density did not move.
- **Instructors.** Make documentation and the ability to explain one's own code explicit criteria, through viva-style defenses or code walkthroughs.
- **Curriculum designers.** Weigh final codebases alongside process evidence and students' ability to justify their work.

## Limitations

- The study did not directly observe students' use of GenAI; the pre/post boundary marks availability rather than use, so findings are not causal evidence of AI effects.
- Findings come from a single team-based capstone course at one institution and may not transfer to other assessment structures or populations.
- The 2021 cohort is much smaller (19 repositories), and some 2021–2022 cohorts worked partly remotely under COVID-19 restrictions.
- The code-characteristic metrics are descriptive proxies, measured by different tools (lizard, tokei) with different language coverage.
- Monotonic trend tests miss non-monotonic patterns such as a 2022–2023 low followed by a rise from 2024.

## Citation

Shakil, A., Brabrand, C., & Denny, P. (2026). [*Code, Commits, and Complexity in the GenAI Era: A Longitudinal Study of Team-Based Capstone Projects*](https://arxiv.org/abs/2611.07297). arXiv preprint, arXiv:2611.07297.
