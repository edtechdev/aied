---
title: "Not All Students Engage Alike: Multi-Institution Patterns in GenAI Tutor Use"
created: 2026-05-11
updated: 2026-05-22
type: article
tags: [generative-ai, intelligent-tutoring, student-experience, engagement-metrics, higher-ed, learning-analytics, rag, llm]
sources: ['raw/papers/2602.00447.md']
confidence: high
---

> **Authors:** Youjie Chen, Xixi Shi, Xinyu Liu, Shuaiguo Wang, Tracy Xiao Liu, Dragan Gašević **Year:** 2026 **Venue:** arXiv (cs.CY)
> Large-scale analysis (N=11,406 students, 200 classes, 10 institutions) of GenAI tutor engagement identifies four session-level engagement types — Deep, Shallow, Routine-Learning, and Exam-Driven — with 10.4% of sessions being shallow copy-paste use and deeper engagement more common at selective institutions.

## Summary

Large-scale analysis (N=11,406, 200 classes, 10 institutions) of GenAI tutor engagement. Four engagement types; 10.4% shallow with copy-paste. Students at selective institutions more likely to engage deeply.

This study analyzes de-identified interaction logs from a commercial LMS with an integrated GenAI Tutor used across ten post-secondary institutions during the Spring 2025 semester. Among 11,406 students, 6,932 (60.8%) engaged with the tutor at least once, generating a median of 5 conversation sessions per user across 113,255 segmented conversation sessions. Using clustering on behavioral, cognitive, and temporal session features, the authors identified four engagement types, then used process mining at the student level to examine how learners transitioned between them over time.

## Key Contributions

- A **two-stage learning-analytics pipeline** that identifies conversation-session-level engagement types via clustering and aggregates them into student-level engagement patterns via process mining (First-Order Markov Model), applicable to other human-AI interaction data.
- **Four session-level engagement types** — Deep, Shallow, Routine-Learning, and Exam-Driven — grounded in behavioral, cognitive, and temporal features of student-GenAI conversations.
- Evidence on **contextual variation** across institution selectivity and course discipline, reflecting equity concerns about GenAI use in educational settings.
- Insights intended to inform learning-analytics interventions and institutional guidance for supporting student learning with GenAI Tutors in more effective and equitable ways.

## The Four Engagement Types

- **Deep Engagement (14.0% of sessions)**: multiple conversation turns, longer durations, more words, and a high prevalence of understanding-oriented queries; distributed relatively evenly across the semester.
- **Shallow Engagement (10.4%)**: few turns, short durations, few words, with copy-pasting behaviors and direct answer-seeking requests prevalent; somewhat more likely to occur during class.
- **Routine-Learning Engagement (44.5%)**: concentrated in daytime and the first half of the semester alongside coursework; few turns but reasonable word counts, with more understanding-oriented questions and fewer direct answer requests.
- **Exam-Driven Engagement (31.2%)**: concentrated in the final weeks as exams approached; few, short turns with the least copy-pasting, suggesting fewer needs for formalistic homework-style answers.

## Contextual Variation & Implications

Context mattered. At highly selective universities, the proportion of deep engagement (19.36% vs. 12.42%) and routine-learning engagement (58.88% vs. 40.41%) was significantly higher, while exam-driven engagement was lower (10.65% vs. 36.98%). STEM courses showed significantly more shallow (15.41% vs. 8.56%) and routine-learning engagement and less exam-driven engagement than non-STEM courses, while STEM students were overall less likely to adopt the tutor (51% vs. 71% adoption). Adoption and usage intensity were not significantly associated with institutional selectivity. For [[learning-analytics]] and [[equity-in-ai-education]] in [[higher-ed]], the takeaway is that "engagement" is not a single behavior: interventions and regulations should target specific patterns — such as shallow, copy-paste-heavy use — rather than treating all GenAI Tutor use alike, especially since students who engaged shallowly were more likely to remain in that mode over time, pointing to a risk group for [[over-reliance]] without deep processing.

## Connected Concepts

- [[higher-ed]]
- [[affective-computing]]
- [[socratic-method]]
- [[affective-tutoring]]
- [[administrator]]
- [[teacher-ai-competency]]
- [[socratic-method]]
- [[help-seeking]]

## Connected Articles

- [[students-llm-usage-critical-thinking]] — Characterizing Students' LLM Usage Behaviors and Their Association with Learning in Critical Thinking Tasks
- [[persistent-ai-agents-academic-research]] — Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study
- [[misiejuk-cognitive-offloading-prompting-2026]] — Cognitive Offloading in Student–AI Collaboration: A Longitudinal Analysis of Prompting Strategies
- [[knowledge-gap-detection-ai-tas]] — Detecting Knowledge Gaps from Conversational AI Interactions Using Curriculum Prerequisite Graphs
- [[edumirror-educational-social-dynamics]] — EduMirror: Modeling Educational Social Dynamics with Value-driven Multi-agent Simulation
- [[lets-chat-chatbot-outreach-2026]] — Let''s Chat: Leveraging Chatbot Outreach for Improved Course Performance

## Citation

Youjie Chen et al. (2026). [Not All Students Engage Alike: Multi-Institution Patterns in GenAI Tutor Use](https://arxiv.org/abs/2602.00447). arXiv:2602.00447. cs.CY.
