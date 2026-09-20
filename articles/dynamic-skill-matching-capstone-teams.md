---
title: Improving Capstone Team Outcomes through Dynamic Skill Matching and Preference Alignment
created: "2026-06-16T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
technology: [intelligent-tutoring, learning-analytics, llm, personalized-learning, rag, edtech-platform]
stakeholders: [student-experience]
research_method: [system development]
discipline: [stem education]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/2606.15572.md']
confidence: medium
---

> **Synthesis:** Pardi et al. (2026) introduce a three-stage methodology for dynamic student team formation that integrates student preferences with project skill requirements. Students complete a survey, an [[llm|LLM]] analyzes project descriptions to extract skills, and a dynamic assignment algorithm matches students to projects. Preliminary evaluations show higher skill coverage and preference satisfaction than random or manual assignment, overcoming limitations of CATME Team-Maker — addressing a core problem in [[collaborative-learning|team-based]] [[stem-education|engineering and computing]] education.

Team-based projects are a cornerstone of engineering and computing courses, but unstructured team formation often leads to poor project outcomes due to misaligned student interests and inadequate skill coverage. This paper introduces a novel, three-stage methodology for creating effective student teams by integrating student preferences with project skill requirements. Students complete a survey, an [[llm|LLM]] analyzes project descriptions to extract skills, and a dynamic assignment algorithm matches students to projects. Preliminary evaluations show higher [[student-experience|skill coverage and preference satisfaction]] compared to random or manual assignment, overcoming limitations of CATME Team-Maker.

- LLM-driven team formation outperforms CATME Team-Maker for skill coverage and preference alignment in capstone courses.

## What this means for practice

- **Instructors.** Run the three-stage pipeline (survey, LLM skill extraction, dynamic assignment) instead of forming [[collaborative-learning|capstone teams]] by hand: it fulfilled 98.4% (Fall 2023) and 91.9% (Spring 2024) of project skills against 90.4% and 89.6% for manual assignment, which took over 20 hours of instructor effort.
- **Instructors.** Accept the small preference trade-off that automation brings, and say so to students: average preference toward the assigned project was 87.2 and 86.3 with the algorithm versus 88.7 and 87.6 for manual assignment, while random assignment managed only 58.2 and 64.0.
- **Instructors.** Collect skill self-ratings and ranked project preferences as first-class inputs, then set expectations about project scope early: students who prioritized an "interesting topic" sometimes reported lower satisfaction when reality did not match.
- **Designers.** Review the LLM-extracted project skills before assignment runs: the authors note that LLM-generated project skills still require manual verification.

## Limitations

- Evaluation covers two semesters of one program — the UC Merced computer science capstone — with Fall 2023 at 16 projects and 68 students and Spring 2024 at 22 unique projects, some of them shared by two teams.
- The satisfaction evidence is a brief survey of only 22 previous capstone students, self-reported on seven Likert and multi-select items.
- The algorithm depends on self-reported skills and preferences, leaving it vulnerable to misrepresentation, and the preference weight α requires manual tuning.
- All skills are treated equally, with fulfillment resting on a single student's intermediate-level rating, so projects with many required skills can be favored over those with rare but critical skills.

## Connected Concepts

- [[collaborative-learning]]
- [[edtech-platform]]
- [[personalized-learning]]
- [[llm]]

## Connected Articles

- [[genai-tutor-engagement-patterns]] — Not All Students Engage Alike: Multi-Institution Patterns in GenAI Tutor Use
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple Domains
- [[ai-lms-middle-school-longitudinal]] — AI-Integrated Learning Management System for Middle School: A Longitudinal Study of Learning Outcomes
- [[learning-engagement-assistant-lea]] — Learning Engagement Assistant (LEA): Cross-Course Scalability and Classroom Evaluation of an Agentic AI Tutoring System
- [[edumirror-educational-social-dynamics]] — EduMirror: Modeling Educational Social Dynamics with Value-driven Multi-agent Simulation
- [[history-aware-student-simulation]] — Who Am I? History-Aware Profiles for Student Simulation in Tutoring Dialogues

## Citation

Brandon Pardi, Garret Castro, Michael Pisman, Avash Adhikari, Santosh Chandrasekhar (2026). [Improving Capstone Team Outcomes through Dynamic Skill Matching and Preference Alignment](https://arxiv.org/abs/2606.15572). CSCI 2025 (12th International Conference on Computational Science and Computational Intelligence).
