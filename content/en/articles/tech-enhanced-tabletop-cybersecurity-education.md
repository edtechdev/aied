---
title: "Technology-Enhanced Tabletop Exercises for Cybersecurity Education: Lessons Learned"
created: "2026-07-31T04:33:04-04:00"
updated: "2026-09-20T03:43:02-04:00"
type: article
pedagogy: [active-learning, professional-training]
research_method: [system development, case study]
discipline: [stem education]
level: [higher ed]
sources: ['raw/papers/2607.28179.md']
confidence: high
audience: [instructors, curriculum designers]
page_kind: [evaluation]
technology: [edtech-platform]
---

> **Synthesis:** Innovative practice paper examining the integration of technology-enhanced tabletop exercises into cybersecurity curricula. Addresses the gap between professional TTX practice and university adoption, presenting lessons learned from implementation in computing education contexts.

## Key Findings

- A web application (IXP) was designed to automate exercise delivery and enable data-driven evaluation of tabletop exercises (TTXs).
- Unlike traditional pen-and-paper TTXs, IXP automatically delivers scenario updates, facilitates team discussions, and collects interaction data for [[automated-assessment|automated assessment]].
- The approach enhances realism, reduces instructor workload, and offers actionable insights into student learning behaviors.
- Automated data collection enabled analysis of team performance, communication patterns, and decision-making processes across 25 TTXs delivered from October 2024 to March 2026.
- Post-exercise feedback from trainees and instructor observations indicate improved [[student-engagement|student engagement]] and collaboration, and faster feedback compared with traditional [[teacher-role|teaching]] methods.

## Study Design & Method

A cybersecurity tabletop exercise is a conversation between participants responsible for fulfilling a variety of roles during a cybersecurity incident. The paper describes the design, delivery, and evaluation of 25 TTXs using the IXP platform from October 2024 to March 2026. The exercise lifecycle — planning, development, delivery, and post-exercise reflection — structures the lessons learned, which include recommendations for realistic, well-thought-out scenarios and for instructor support during the exercise. Although the recommendations are grounded in cybersecurity, the authors argue they are not [[discipline-specific-aied|domain-specific]] and can be used for digital TTXs in other areas.

## What this means for practice

- **Instructors.** Instrument the exercise before the first run so milestone timing, team decisions, scoring, and communication are captured as a byproduct of delivery rather than reconstructed afterward.
- **Instructors.** Protect a structured debrief as a required phase: trainees in these exercises consistently wanted more debrief time than the schedule allowed, and the authors warn that the collected data goes unused without a facilitator who surfaces disagreement.
- **Designers.** Start from realistic, well-thought-out scenarios and plan for instructor support during delivery — the two lessons the authors single out as decisive across the exercise lifecycle.
- **Designers.** Accept the automation trade-off: on-demand exercises scale to hundreds of participants only if every evaluated element can be scored automatically, which pushes scenarios toward multiple-choice questionnaires and away from open-ended artifacts.
- **Instructors.** Reuse the platform and existing trainee accounts across successive exercises so team performance can be compared between runs instead of rebuilding materials each term.

## Limitations

- The evidence is 25 exercises with 743 participants delivered on the authors' own IXP platform, so platform effects cannot be separated from instructional design.
- The study is a system development and case study paper: feedback came from post-exercise questionnaires and instructor observations, with no comparison against paper-based tabletop exercises and no measured learning outcome.
- The courses span many local contexts, including one course run over two years, a summer school, and a remote two-country exercise, so the 24 lessons learned are practitioner experience rather than a controlled comparison.
- The digital format changes the comparison standard, since trainees judge a digital exercise against polished applications rather than against other tabletop exercises.
## Connected Concepts

- [[cs-education]]
- [[active-learning]]
- [[higher-ed]]
- [[learning-analytics]]
- [[professional-training]]
- [[curriculum-design]]
- [[experiential-learning]]
- [[simulation]]

## Connected Articles

- [[multi-site-vr-immersive-learning]] — Design and Implementation of a Real-time Multi-site Immersive Learning System Using Photon Fusion
- [[forap-pjbl-computing-education]] — Adoption-Ready Project-Based Learning for Computing Education: The FORAP Framework and a Multi-Scale Project Portfolio
- [[visual-query-tracer-declarative-logic-learning]] — Evaluating a Visual Query Tracer and Builder for Learning Declarative Logic Programming
- [[q-learning-lab-rl-teaching]] — Q-Learning Lab: Teaching Reinforcement Learning Through Learner-Generated Trace Analysis
- [[llm-design-problems-hot-pjbl]] — LLM-Generated Design Problems for Assessing Higher-Order Thinking in Project-Based Learning
- [[vibe-coding-programming-process-visualizer]] — From Idea to Classroom in Days: Using "Vibe Coding" to Create a Programming Process Visualizer from IDE Activity Logs

## Citation

Jan Vykopal, Pavel Čeleda, Martin Horák, Valdemar Švábenský (2026). [Technology-Enhanced Tabletop Exercises for Cybersecurity Education: Lessons Learned](https://arxiv.org/abs/2607.28179).
