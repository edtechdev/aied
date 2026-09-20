---
title: "Fostering machine learning literacy in senior primary education: Evaluating a structured pedagogical course design"
created: "2026-06-03T04:33:04-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
foundations: [ai-literacy, computational-thinking, learning-design]
technology: [machine-learning]
audience: [instructors, learners]
research_method: [mixed methods, design and evaluation study]
level: [k 12]
sources: ['raw/papers/caeai-ml-literacy-primary.md']
confidence: medium
discipline: [cs education]
---

> **Synthesis:** Fostering machine learning literacy in senior primary education: Evaluating a structured [[pedagogy|pedagogical]] course design

## Key Findings

- The authors designed and evaluated a **six-to-eight-hour machine learning course** for **752 senior primary students** (average age 11.36) across **seven Hong Kong primary schools**, targeting conceptual ML understanding rather than tool usage.
- **Pre- and post-test results showed significant improvement in ML understanding**: the concept-test mean rose 65% (4.57 → 7.53) and the median doubled (4.00 → 8.00), with a **Wilcoxon signed-rank effect size of r = 0.55** (Z = −14.206, p < .001) across 679 matched pairs (pre M = 4.57, SD = 1.88; post M = 7.48, SD = 3.26).
- Students came to comprehend **supervised learning and [[reinforcement-learning|reinforcement learning]]**, including algorithms such as **k-nearest neighbors (KNN)** and **artificial neural networks (ANN)**, through **training robots in competitive circuit tasks** and **real-time algorithm [[visualization]]**. Item-level effect sizes ranged from 0.24 to 0.48, with the largest gains on items about ML paradigms, the ML workflow, and ANN structure (correctness rising from below 30% to nearly 60%); the hardest item — selecting optimal ML approaches for novel problems under resource trade-offs — reached only 36% correctness.
- Thematic analysis of student interviews — 15 semi-structured focus groups with 47 randomly selected students across all seven schools — revealed that the structured pedagogical approach, blending **guided worksheets, hands-on activities, and iterative refinement** of data processing, parameter adjustment, and [[pedagogical-llm-training|model training]] within the robots' software, enhanced both conceptual learning and [[student-engagement|engagement]]; "Development of Conceptual Understanding" was the most prevalent theme (31.38% of all coded segments).
- Surprisingly, students developed **initial reflections on distinguishing between AI and human learning**, an early [[metacognition|metacognitive]] outcome of the course.

## Study Design & Method

The course design responds to a gap in K-12 AI literacy education, which the authors argue emphasizes tool usage over fundamental concepts even though AI literacy requires understanding how and why AI works. The structured approach combines guided worksheets with hands-on robot interaction, letting students experience the ML pipeline directly: they adjust data processing, tune parameters, and iteratively train models within the robots' software. The [[mixed-methods-research|mixed-methods]] evaluation paired a pre/post concept test administered to the full cohort (Npre = 696; Npost = 727; 679 matched pairs analyzed with the non-parametric Wilcoxon signed-rank test) with 15 semi-structured focus group interviews (three to five students each, conducted via Zoom for about 30 minutes, with a course-content recap to mitigate recall bias) analyzed thematically using a codebook approach. There was no significant gender difference in initial knowledge (p = .270), with only a non-significant post-test trend (p = .051).

## What this means for practice

- **Instructors.** Allocate curriculum time to a short, structured ML unit: a six-to-eight-hour robotics-based course produced significant gains in ML understanding across 679 matched pairs (concept-test mean 4.57 → 7.53, Wilcoxon r = 0.55, p < .001).
- Pair hands-on training tasks with structured [[scaffolding]] instead of teaching concepts through screen-based tools alone, and use [[visualization|real-time algorithm visualization]] so the unit serves [[computational-thinking]] and [[ai-literacy]] goals rather than tool familiarity.
- Spend the hours on cross-concept work, since item-level effect sizes ran from 0.24 to 0.48 with the largest gains on ML paradigms, the ML workflow, and ANN structure (correctness rising from below 30% to nearly 60%).
- Target the hardest objective explicitly — selecting optimal ML approaches for novel problems under resource trade-offs reached only 36% correctness — and extend toward an eight-to-10-h intervention when the goal is deeper differentiation of methods.
- **Learners.** Iterate across the whole pipeline yourselves, adjusting data processing, tuning parameters, and retraining within the robots' software: "Development of Conceptual Understanding" was the most prevalent theme at 31.38% of coded segments, and the iterative trials also prompted early reflections on distinguishing AI from human learning.

## Limitations

- The one-group pre-/post-test design lacks a control group, so external factors cannot be entirely ruled out.
- Identical test items were used for both assessments, which may have introduced testing effects that inflated post-test scores.
- Instructional duration varied from six to eight hours across the seven schools, creating an inconsistent intervention "dose" that may have affected the depth of conceptual development.
- Engagement evidence rests on retrospective focus group interviews (15 groups, 47 randomly selected students) rather than real-time behavioral data.

## Connected Concepts

- [[ai-literacy]]
- [[computational-thinking]]
- [[learning-design]]
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
