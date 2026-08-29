---
title: "Fostering machine learning literacy in senior primary education: Evaluating a structured pedagogical course design"
created: "2026-06-03T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [ai-literacy, k-12, computational-thinking, instructional-design, machine-learning]
audience: [instructors, learners]
research_method: [system development]
level: [k 12]
category: [instructional design]
sources: ['raw/papers/caeai-ml-literacy-primary.md']
confidence: medium
---

> **Synthesis:** Fostering machine learning literacy in senior primary education: Evaluating a structured pedagogical course design

## Key Findings

- The authors designed and evaluated a **six-to-eight-hour machine learning course** for **752 senior primary students** (average age 11.36) across **seven Hong Kong primary schools**, targeting conceptual ML understanding rather than tool usage.
- **Pre- and post-test results showed significant improvement in ML understanding**: the concept-test mean rose 65% (4.57 → 7.53) and the median doubled (4.00 → 8.00), with a **Wilcoxon signed-rank effect size of r = 0.55** (Z = −14.206, p < .001) across 679 matched pairs (pre M = 4.57, SD = 1.88; post M = 7.48, SD = 3.26).
- Students came to comprehend **supervised learning and reinforcement learning**, including algorithms such as **k-nearest neighbours (KNN)** and **artificial neural networks (ANN)**, through **training robots in competitive circuit tasks** and **real-time algorithm visualization**. Item-level effect sizes ranged from 0.24 to 0.48, with the largest gains on items about ML paradigms, the ML workflow, and ANN structure (correctness rising from below 30% to nearly 60%); the hardest item — selecting optimal ML approaches for novel problems under resource trade-offs — reached only 36% correctness.
- Thematic analysis of student interviews — 15 semi-structured focus groups with 47 randomly selected students across all seven schools — revealed that the structured pedagogical approach, blending **guided worksheets, hands-on activities, and iterative refinement** of data processing, parameter adjustment, and model training within the robots' software, enhanced both conceptual learning and engagement; "Development of Conceptual Understanding" was the most prevalent theme (31.38% of all coded segments).
- Surprisingly, students developed **initial reflections on distinguishing between AI and human learning**, an early metacognitive outcome of the course.

## Study Design & Method

The course design responds to a gap in K-12 AI literacy education, which the authors argue emphasizes tool usage over fundamental concepts even though AI literacy requires understanding how and why AI works. The structured approach combines guided worksheets with hands-on robot interaction, letting students experience the ML pipeline directly: they adjust data processing, tune parameters, and iteratively train models within the robots' software. The mixed-methods evaluation paired a pre/post concept test administered to the full cohort (Npre = 696; Npost = 727; 679 matched pairs analyzed with the non-parametric Wilcoxon signed-rank test) with 15 semi-structured focus group interviews (three to five students each, conducted via Zoom for about 30 minutes, with a course-content recap to mitigate recall bias) analyzed thematically using a codebook approach. There was no significant gender difference in initial knowledge (p = .270), with only a non-significant post-test trend (p = .051).

## Implications for AI in Education

The results demonstrate the **feasibility and promise of teaching fundamental ML concepts to senior primary students at scale** through a structured course design. For educators, the study provides actionable guidance on how to allocate time and resources: a relatively short course can produce meaningful conceptual gains when hands-on training tasks are paired with structured scaffolding. The emergence of student reflections on AI-versus-human learning suggests early ML education can seed [[computational-thinking]] and critical dispositions toward AI, supporting [[ai-literacy]] goals in [[k-12]] education. The authors further suggest that an eight-to-ten-hour intervention might be optimal for deeper exploration, and that future iterations should adopt spiral-curriculum designs — combining concepts such as KNN and ANN in cross-concept challenges (e.g., choosing and defending the best algorithm for a new racing track) rather than teaching them as isolated lessons — an [[instructional-design]] refinement grounded in the observed "cognitive boundaries" between discrete knowledge and systematic integration.

## Limitations

The authors identify several design constraints: the one-group pre-/post-test design lacks a control group, so external factors cannot be entirely ruled out; the use of identical test items for both assessments may have introduced testing effects that inflated post-[[learning-gains|test scores]]; variation in instructional duration (six to eight hours across schools) created an inconsistent intervention "dose," potentially affecting the depth of conceptual development; and the reliance on retrospective focus group interviews limits understanding of engagement to student perceptions rather than real-time behavioral data.

## Connected Concepts

- [[ai-literacy]]
- [[computational-thinking]]
- [[instructional-design]]
- [[k-12]]
- [[teacher-role]]
- [[curriculum-design]]
- [[reinforcement-learning]]
- [[educational-robotics]]

## Connected Articles

- [[computational-thinking-ai-agent-creation]] — Computational Thinking Development in AI Agent Creation: A Mixed-Methods Study
- [[ai-literacy-continuum-higher-education]] — Beyond Tool Adoption: A Practical Five-Stage Developmental Continuum for AI Literacy in Higher Education
- [[teacher-education-ai-literacy-sdt-2026]] — Teacher education for artificial intelligence literacy through a self-determination theory perspective
- [[epistemic-proactivity-math]] — From Prompting to Epistemic Proactivity: Temporal Trajectories of Student-AI Interaction in Mathematics Learning
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[oecd-digital-education-outlook-2026]] — OECD Digital Education Outlook 2026

## Citation

Kong, S. C., & Wang, Q. (2026). [*Fostering machine learning literacy in senior primary education: Evaluating a structured pedagogical course design*](https://doi.org/10.1016/j.caeai.2026.100631).
