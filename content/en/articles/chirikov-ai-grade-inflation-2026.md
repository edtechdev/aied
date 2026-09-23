---
title: "Artificial Intelligence and Grade Inflation"
created: "2026-09-02T04:31:00-04:00"
updated: "2026-09-19T08:33:23-04:00"
type: article
foundations: [academic-integrity]
technology: [generative-ai]
assessment: [assessment, assessment-validity, automated-assessment, educational-measurement, summative-assessment]
methods: [quantitative-research]
research_method: [quasi-experiment]
audience: [instructors, administrators, researchers, policymakers]
level: [higher ed]
sources: ['raw/papers/chirikov-ai-grade-inflation-2026.md']
confidence: high
---

> **Synthesis:** **Artificial intelligence and grade inflation** — a quasi-experimental study by Igor Chirikov (2026) analyzing **500,000+ grades** across a balanced panel of 319 courses (84 departments) at a large research university, 2018–2025. Using a **difference-in-differences** design, it finds that after ChatGPT's release, courses with more AI-exposed tasks (writing, coding) saw the **share of A grades rise by 13 percentage points (~30% relative to baseline)** and GPA by 0.12 points, with grade-distribution compression. A triple-differences analysis shows the effect is concentrated in **homework-heavy courses** — evidence that AI-driven **[[cognitive-offloading|task displacement]]**, not broad [[learning-gains|learning gains]], is the primary mechanism.

## Overview

Grades summarize student performance and signal skill to students, graduate programs, and employers. [[generative-ai|Generative AI]] threatens this certification function by performing graded tasks before instructors observe and assess them. Even with unchanged grading standards, grades can inflate when AI improves submitted work without a corresponding rise in underlying skill. This paper identifies a **novel, technology-driven mechanism of grade inflation** — distinct from the instructor-incentive, signaling, and measurement-error channels documented in prior literature — operating upstream of grading, on the *production* of graded work.

## Method

- **Data:** Over 500,000 student-course enrollments across a balanced panel of 319 courses spanning 84 departments at a large selective research university in Texas, 2018–2025.
- **AI exposure:** Share of writing and coding tasks among all required tasks in each course's Fall 2022 syllabus (published before ChatGPT's release), validated in the companion syllabi paper as predicting AI-policy adoption.
- **Design:** Difference-in-differences comparing grade distributions before/after ChatGPT's release across courses with varying AI exposure; **triple-differences (DDD)** exploiting variation in homework weight (median = 30%) to distinguish task displacement from learning gains or student sorting.
- **Robustness:** Alternative exposure definitions, enrollment thresholds, pre-periods, and a placebo using oral-presentation tasks (where AI capabilities are weaker).

## Key findings

- **Grades rose substantially in AI-exposed courses.** The share of A grades increased by **13 percentage points (~30% relative to the 2022 baseline of 0.44)**; mean GPA rose by 0.12 points; within-course GPA standard deviation fell by 0.09 points (grade-distribution compression). Effects diminish down the distribution (9 pp for A- or better, 5 pp for B+ or better, insignificant below) — AI primarily converts A- and B+ grades into A grades.
- **The mechanism is task displacement, not learning gains or sorting.** The triple-differences estimate shows above-median-homework courses gained an *additional* 16 pp in the share of A grades relative to below-median courses with the same AI exposure. If gains reflected genuine learning or sorting, they would appear regardless of assessment format; their concentration in unsupervised homework is consistent with AI substituting for student effort where instructors cannot observe production.
- **Placebo and robustness confirm specificity.** Oral-presentation task share (weak AI capabilities) shows no effect on grades. Results are robust to exposure definitions, enrollment thresholds (15–40), pre-periods, and clustering.

## What this means for practice

- **Instructors.** Audit which graded tasks AI can complete unaided, and treat measured rises in student performance as a claim about how submitted work was produced rather than evidence of learning: the A-grade share rose 13 percentage points and mean GPA 0.12 points in AI-exposed courses.
- **Instructors.** Redesign assessments so AI use is structurally constrained or purposefully incorporated — process documentation, justification, follow-up interaction — rather than relocating all assessment to supervised in-person settings, which would narrow the capabilities being measured.
- **Administrators.** Read grade distributions by course task profile and homework weight instead of campus-wide GPA: because effects concentrate in unsupervised homework-heavy courses, the distortion sharply reduces transcript comparability across courses for employers and graduate admissions.
- **Researchers.** Measure AI exposure at the task level. Aggregate measures of AI use are unlikely to yield consistent effects, because the outcome depends on whether engagement with AI constitutes [[cognitive-offloading|displacement]] or augmentation.

## Limitations

- The analysis covers a single institution — a balanced panel of 319 courses across 84 departments at one large selective research university in Texas — which the author states limits external generalizability.
- The panel is restricted to courses large enough to appear in public grade distributions, which may underrepresent small seminars and upper-division courses, although varying the enrollment threshold between 15 and 40 students left results unchanged.
- AI exposure is inferred from course task composition in Fall 2022 syllabi; the study does not directly measure student AI use at the course level.
- The design identifies an average effect only: heterogeneity in how individual students engage with AI within a course remains unobserved, so the distribution of displacement versus augmentation across students is not identified.

## Connected Concepts

- [[assessment-validity]]
- [[academic-integrity]]
- [[summative-assessment]]
- [[assessment]]
- [[educational-measurement]]
- [[generative-ai]]
- [[higher-ed]]
- [[cognitive-offloading]]
- [[ai-misuse-learning-harm]]
- [[automated-assessment]]

## Connected Articles

- [[chirikov-regulate-ai-syllabi-2026]] — Companion paper: how instructors regulate AI across 31,000 syllabi (Chirikov 2026)
- [[biology-degree-integrity-genai-cheating-2026]] — Can students cheat their way to a biology degree? A case study of the vulnerability of biology course grades to academic dishonesty in the era of generative AI
- [[genai-availability-grades-satisfaction]] — GenAI availability and grade/satisfaction outcomes
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans
- [[llm-reliance-types-undergrad]] — Types of LLM reliance among undergraduates
- [[ai-vs-human-assessment-efl-tpck-2026]] — AI vs. human assessment in EFL contexts
- [[generative-ai-reduced-study-time-math]] — Proctored retention decline showing AI inflates non-proctored performance

## Citation

Chirikov, I. (2026). [Artificial Intelligence and Grade Inflation](https://escholarship.org/uc/item/80x8d3qd). *CSHE Higher Education Working Paper Series, 26*(3).
