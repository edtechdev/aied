---
title: "Who grades best? Comparing ChatGPT, peer, and instructor evaluations across varying levels of student project quality"
created: "2026-09-01T10:20:00-04:00"
updated: "2026-09-19T08:33:23-04:00"
type: article
technology: [conversational-ai, generative-ai]
assessment: [assessment, automated-assessment]
methods: [mixed-methods-research, quantitative-research, qualitative-research]
stakeholders: [student-experience]
audience: [instructors, learning designers, researchers]
level: [higher ed]
sources: ['raw/papers/usher-faraon-who-grades-best-2026.md']
confidence: high
---

> **Synthesis:** **Who grades best?** A [[mixed-methods-research|mixed-methods]] study by Usher & Faraon (2026) comparing how ChatGPT, peers, and a course instructor grade the **same undergraduate group projects** across **varying levels of project quality**. With 184 students (52 groups), the study found ChatGPT's alignment with instructor grading **improved as project quality increased** — with its largest overestimation (+14 points) for low-quality work — while peer–instructor alignment was **strongest for lower-quality work**. Students' reflections revealed how they interpreted ChatGPT's grading leniency, grade–feedback alignment, algorithmic versus human judgment, and ChatGPT's dialogic interactivity.

## Overview

[[generative-ai|Generative AI]] grading raises practical questions about reliability and alignment with human evaluators, yet few studies have directly compared ChatGPT, peer, and instructor grading of the **same student work within a single course**. This study addresses that gap by comparing three evaluators of student group projects and testing whether agreement varies with project quality.

## Method

- **Design:** Sequential explanatory mixed-methods — [[quantitative-research|quantitative]] grade comparisons first, then thematic analysis of students' written reflections to contextualize the statistics.
- **Sample:** 184 undergraduate students (147 female, 37 male) in a mandatory [[research-methods-aied|research]]-methods course, working in 52 self-organized groups to design an original educational questionnaire.
- **Assessors:** Each project was graded by the course instructor, two anonymous peers (via Moodle), and ChatGPT (with a structured six-criterion prompt), all using the **same standardized rubric** (six criteria, scored 1–100).
- **Quality tiers:** Projects split into low (≤80), medium (81–86), and high (≥87) quality based on the 33rd/67th percentiles of instructor grades.
- **Analysis:** Repeated-measures ANOVA, Pearson correlations, and one-way ANOVA by quality tier; thematic analysis with inter-rater reliability (κ = 0.86–0.90).

## Key findings

- **ChatGPT is the most lenient grader.** On average ChatGPT assigned higher grades (M = 91.46) than peers (85.56) or the instructor (83.13), with a large effect of grading source on scores (partial η² = 0.42). This grade-inflation tendency corroborates prior evidence of GenAI leniency.
- **ChatGPT and peers have essentially no shared grading logic.** The instructor–peer correlation was moderate (r = 0.48) and instructor–ChatGPT modest (r = 0.24), but the ChatGPT–peer correlation was negligible and non-significant (r = 0.05) — the two alternative evaluators operate on fundamentally different criteria.
- **Alignment is quality-dependent.** ChatGPT's alignment with the instructor improved as project quality rose, with its **largest overestimation for low-quality work** (Mdiff = +14.2 points) shrinking to +2.45 points for high-quality projects. Peers showed the opposite gradient: strongest alignment for lower-quality work (r = 0.51 in the low tier) and slight *under*-grading of high-quality work (Mdiff = −2.61).
- **Students perceive ChatGPT as more lenient.** 85% of students described ChatGPT as more generous than peers, mirroring the quantitative pattern and showing critical awareness of GenAI bias rather than blind acceptance.
- **Students see a grade–feedback disconnect in ChatGPT.** 31% of students noted ChatGPT often gave high scores alongside many critical comments — a perceived inconsistency between score and feedback that peers did not show.
- **Two contrasting evaluative logics:** Students distinguished ChatGPT's neutral, rule-based, rubric-driven scoring from peers' holistic, context- and relationship-aware judgment, and valued ChatGPT's **dialogic interactivity** (revising prompts, clarifying intent) against peers' static, anonymous, non-negotiable reviews.

## What this means for practice

- **Instructors.** Do not use ChatGPT as a standalone summative grader: it overestimated low-quality projects by 14.20 points on average, and 85% of students read its grades as more generous than peers' grades.
- **Instructors.** Reserve ChatGPT for formative use where detailed feedback supports iteration, and check for the grade–feedback disconnect that 31% of students reported between high scores and critical comments.
- **Learning designers.** Combine evaluation sources rather than choosing one: peers caught fundamental issues in lower-quality work (r = 0.51 with the instructor in the low tier) while ChatGPT's alignment rose with project quality.
- **Learning designers.** Train students in both peer-assessment technique and [[prompt-engineering|prompt engineering]] so they can use ChatGPT's dialogic interactivity while keeping peers' contextual judgment.
- **Researchers.** Analyze grading agreement within quality tiers, because pooled correlations hide the opposite quality gradients for ChatGPT and peers.

## Limitations

- The study ran in a single mandatory undergraduate research-methods course at one institution (184 students working in 52 self-organized groups), so generalizability across disciplines, institutions, and educational levels is untested.
- Continuous instructor grades were discretized into three quality tiers using the 33rd and 67th percentiles, which reduces granularity and can produce edge effects at the thresholds.
- ChatGPT graded through one fixed configuration — an initial structured prompt plus six criterion-specific prompts matched to a standardized six-criteria rubric — so the findings describe that configuration rather than ChatGPT grading in general.
- The study tracked neither learning outcomes nor effects over time, so whether exposure to multiple evaluation sources improves students' evaluative judgment or their later work remains unknown.

## Connected Concepts

- [[automated-assessment]]
- [[peer-assessment]]
- [[assessment]]
- [[feedback]]
- [[conversational-ai]]
- [[generative-ai]]
- [[academic-integrity]]
- [[assessment-validity]]

## Connected Articles

- [[pairr-ai-peer-review-2025]] — PAIRR: combining peer and AI review in a human-centered process
- [[ai-internal-feedback-evaluative-judgments]] — Unravelling undergraduates' development of evaluative judgments
- [[semantic-variability-llm-conversation-assessment-2026]] — Semantic variability in LLM conversation assessment

## Citation

Usher, M., & Faraon, M. (2026). [Who grades best? Comparing ChatGPT, peer, and instructor evaluations across varying levels of student project quality](https://doi.org/10.1080/02602938.2025.2588682). *Assessment & Evaluation in Higher Education, 51*(6), 1156–1175.
