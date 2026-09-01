---
title: "CourseGraph: Finding overlaps and differences in Computer Science courses across universities"
created: "2026-08-07T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [cs-education, curriculum-design, edtech-platform, student-experience, higher-ed, administrator]
research_method: [system development]
discipline: [cs education]
audience: [learners, administrator]
level: [higher ed]
category: [curriculum design]
sources: ['raw/papers/2608.05910.md']
confidence: medium
---

> **Synthesis:** This paper presents CourseGraph, a methodology for automatically evaluating external course equivalences by modelling course content as structured knowledge graphs. Designed for student mobility programmes like Erasmus+, CourseGraph extracts topics from course descriptions, maps relationships between concepts, and identifies substantive overlap vs. complementarity between courses at different universities. The system mimics the manual workflow of [[curriculum-design|curriculum]] advisors — analysing syllabi, comparing learning objectives, and flagging redundancies — but scales to thousands of course pairs. Evaluation on CS programmes across multiple European universities demonstrates that CourseGraph's overlap judgments align closely with expert advisor decisions while dramatically reducing processing time.

Student mobility programs such as Erasmus+ enable students to take courses at other universities, broadening their academic and cultural horizons. However, this flexibility also leads to a practical challenge: ensuring that students do not take courses elsewhere that substantially overlap with courses in their home curriculum. In this work, we propose CourseGraph, a methodology that automates the evaluation of external courses based on insights obtained from the process followed by curriculum administrators when assessing courses for [[inclusive-learning|inclusion]] in a degree program. Course- Graph extracts information such as course titles, descriptions, and [[learning-gains|learning outcomes]] from the course webpage. Then, this information is represented semantically using a BERT-based language model, after which the pair-wis

presents CourseGraph, a methodology for automatically evaluating external course equivalences by modelling course content as structured knowledge graphs. Designed for student mobility programmes like Erasmus+, CourseGraph extracts topics from course descriptions, maps relationships between concepts, and identifies substantive overlap vs. complementarity between courses at different universities. The system mimics the manual workflow of curriculum advisors — analysing syllabi, comparing learning objectives, and flagging redundancies — but scales to thousands of course pairs. Evaluation on CS programmes across multiple European universities demonstrates that CourseGraph's overlap judgments align closely with expert advisor decisions while dramatically reducing processing time.

## Connected Concepts

- [[administrator]]
- [[cs-education]]
- [[curriculum-design]]
- [[educational-nlp]]
- [[higher-ed]]
- [[knowledge-graph]]

## Connected Articles

- [[wordstream-glass-learning-analytics]] — Through the WordStream Glass: Revisiting Quantitative Encoding for Qualitative Learning Analytics
- [[reshaping-cs-education-genai]] — Reshaping Undergraduate Computer Science Education in the Generative AI Era
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention
- [[universities-ai-era-rethinking]] — The University AI Didn''t Replace: Rethinking Universities in the AI Era
- [[code-review-genai-cs1]] — Combating Harms of Generative AI in CS1 with Code Review Interviews and a Flipped Classroom
- [[cross-cultural-student-perceptions-genai-computing]] — Did Alice Do Wrong? Cross-Cultural Differences in Student Perceptions of Generative AI Use in University Computing Education

## Citation

Nijdam, Arthur, Wagner, Paul Stankovski, & Ramezanian, Sara (2026). [CourseGraph: Finding overlaps and differences in Computer Science courses across universities](https://arxiv.org/abs/2608.05910).
