---
title: "AI Adoption Among Teachers: Insights on Concerns, Support, Confidence, and Attitudes"
created: "2026-05-14T04:33:04-04:00"
updated: "2026-09-12T02:30:00-04:00"
type: article
tags: [teacher-role, educational-development, k-12, ai-literacy, teacher-ai-competency, higher-ed, change-management]
research_method: [survey]
audience: [instructors, faculty development]
level: [k 12, higher ed]
sources: ['raw/papers/2605.00343.md']
confidence: high
---

> **Synthesis:** A survey of 260 teachers in Pampanga, the Philippines, finds that [[governance|institutional]] support predicts both teacher confidence and positive attitudes toward AI adoption, and that confidence *fully mediates* the support–attitude link: support shapes attitudes mainly by building confidence rather than directly. Teacher concerns neither moderated nor directly predicted either outcome.

## Overview

AI tools are entering classrooms, but teachers differ in how ready they are to adopt them. This study examines how institutional support, teacher confidence, concerns and attitudes influence AI adoption in education. Grounded in the Unified Theory of Acceptance and Use of Technology (UTAUT), it treats institutional support as a facilitating condition, confidence as self-efficacy, concerns as inhibitors, and attitudes as behavioural intention.

The problem: many teachers struggle with adoption because of limited training, unreliable access to technology, and concerns about ethics and data privacy, yet few studies examine how support, confidence and concerns interact to shape attitudes toward AI. The paper therefore tests whether teacher concerns weaken or change the effect of institutional support on confidence and attitudes, and whether confidence explains how support produces more positive attitudes. Clarifying these relationships is meant to show where schools should focus to raise [[teacher-ai-competency|teacher readiness]].

## Study Design & Method

- **Design.** Quantitative, cross-sectional survey analysed with moderated multiple regression, followed by a mediation analysis using the Baron and Kenny method and the Sobel test to evaluate the indirect effect. Analysis was conducted in Python and Jupyter Notebook.
- **Sample.** Purposive sampling produced 260 teachers from Pampanga, Philippines: 52 elementary, 161 secondary and 47 college educators, spanning educational levels and teaching disciplines. Over 75% of participants were female and approximately 80% were licensed professional teachers; ages ranged from 22 to 59 years and teaching experience from 1 to 36 years.
- **Instrument.** A 35-item survey measured the four constructs on a five-point Likert scale (1 = strongly disagree to 5 = strongly agree). Two educational technology experts assessed content validity against the theoretical constructs, and reliability analysis confirmed strong internal consistency across all constructs (α > 0.70).
- **Procedure.** Data were collected through pen-and-paper surveys and Google Forms, with permissions secured from school heads and supervisors beforehand.

## Key Findings

- Teachers reported strongly positive attitudes toward AI (mean = 4.92, SD = 0.86), low concern about adoption (mean = 2.14, SD = 0.89) and high confidence in using AI tools (mean = 4.72, SD = 0.89); confidence in handling technical issues was comparatively lower.
- Perceived institutional support was strong (mean = 4.32, SD = 1.08), particularly access to devices, software and ethical guidelines, while support for internet reliability and infrastructure was only moderate.
- **Support drove confidence.** Institutional support had a strong, significant positive effect on confidence (β = 0.537, p < 0.001); the model accounted for 47.6% of the variance in confidence (R² = 0.476) with strong overall fit (F = 87.35, p < 0.001).
- **Concerns did not moderate.** Concerns did not significantly moderate the support–confidence relationship (β = 0.021, p = 0.661) and had no direct effect on confidence (β = −0.104, p = 0.625).
- **Attitudes were driven by confidence, not support.** Confidence had a strong positive effect on attitudes (β = 0.855, p < 0.001); the direct effect of support on attitudes was not significant (β = 0.128, p = 0.106). Concerns neither predicted attitudes (β = 0.220, p = 0.151) nor moderated the support–attitude relationship (β = −0.047, p = 0.173). The model explained 74.2% of the variance in attitudes (R² = 0.742, F = 205.9, p < 0.001).
- **Full mediation.** In the mediation model, support predicted confidence (β = 0.58, p < .001) and confidence predicted attitudes (β = 0.85, p < .001), but with confidence in the model the direct effect of support on attitudes became non-significant (β = 0.03, p = .385). The indirect effect through confidence (a × b = 0.4961) was significant on the Sobel test (z = 12.63, p < .001).

## Implications

For instructors and faculty developers, the practical reading is that support is necessary but not sufficient: it improves attitudes chiefly by raising confidence, so structured professional development, mentoring and technical assistance matter more than tool provision or mandates alone. Because concerns neither moderated nor directly drove the relationships, addressing apprehension head-on may be less productive than building [[self-efficacy]] through hands-on experience — a point of contact with [[educational-development]] and [[ai-literacy]].

For institutions and policy, the authors argue that resistance to AI often reflects systemic support gaps rather than individual reluctance, and recommend embedding AI literacy in [[teacher-education]] programmes. A limitation worth noting for readers is that the findings come from one Philippine province, so generalization to other contexts is a hypothesis rather than a result.

## Connected Concepts

- [[teacher-role]]
- [[educational-development]]
- [[tpack]]
- [[self-efficacy]]
- [[teacher-ai-competency]]
## Connected Articles

- [[ai-pedagogical-orientation]] — Faculty Orientations Shape Adoption of AI in Research and Teaching
- [[ai-tpack-teacher-multi-agent-workflow]] — Modeling AI-TPACK in Practice: Insights from Teachers'' Multi-Agent Workflow Design
- [[teacher-education-ai-literacy-sdt-2026]] — Teacher education for artificial intelligence literacy through a self-determination theory perspective
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[genai-literacy-training-teacher-education-dbr-2026]] — Development and evaluation of artificial intelligence literacy training for teacher education students

## Citation

Sibug, V. B., Cruz, M. A. D., Vital, V. P., Grume, J. C., Gamboa, A. B., Fernando, E. Q., Feliciano, L. D., Salenga, J. L., & Miranda, J. P. P. (2026). [AI adoption among teachers: Insights on concerns, support, confidence, and attitudes](https://arxiv.org/abs/2605.00343). Proceedings of the 9th International Conference on Education and Multimedia Technology (ICEMT 2025), 267-269.
