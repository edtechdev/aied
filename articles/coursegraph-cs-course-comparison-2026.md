---
title: "CourseGraph: Finding overlaps and differences in Computer Science courses across universities"
created: "2026-08-07T04:33:04-04:00"
updated: "2026-09-19T11:14:39-04:00"
type: article
foundations: [curriculum-design]
research_method: [system development]
discipline: [cs education]
audience: [learners, administrators]
level: [higher ed]
sources: ['raw/papers/2608.05910.md']
confidence: medium
technology: [edtech-platform]
---

> **Synthesis:** This paper presents CourseGraph, a methodology for automatically evaluating external course equivalences by modeling course content as structured knowledge graphs. Designed for student mobility programs like Erasmus+, CourseGraph extracts topics from course descriptions, maps relationships between concepts, and identifies substantive overlap vs. complementarity between courses at different universities. The system mimics the manual workflow of [[curriculum-design|curriculum]] advisors — analyzing syllabi, comparing learning objectives, and flagging redundancies — but scales to thousands of course pairs. Evaluation on CS programs across multiple European universities demonstrates that CourseGraph's overlap judgments align closely with expert advisor decisions while dramatically reducing processing time.

Student mobility programs such as Erasmus+ enable students to take courses at other universities, broadening their academic and cultural horizons. However, this flexibility also leads to a practical challenge: ensuring that students do not take courses elsewhere that substantially overlap with courses in their home curriculum. In this work, we propose CourseGraph, a methodology that automates the evaluation of external courses based on insights obtained from the process followed by curriculum administrators when assessing courses for [[inclusive-learning|inclusion]] in a degree program. Course- Graph extracts information such as course titles, descriptions, and [[learning-gains|learning outcomes]] from the course webpage. Then, this information is represented semantically using a BERT-based language model, after which the pair-wis

presents CourseGraph, a methodology for automatically evaluating external course equivalences by modeling course content as structured knowledge graphs. Designed for student mobility programs like Erasmus+, CourseGraph extracts topics from course descriptions, maps relationships between concepts, and identifies substantive overlap vs. complementarity between courses at different universities. The system mimics the manual workflow of curriculum advisors — analyzing syllabi, comparing learning objectives, and flagging redundancies — but scales to thousands of course pairs. Evaluation on CS programs across multiple European universities demonstrates that CourseGraph's overlap judgments align closely with expert advisor decisions while dramatically reducing processing time.

## What this means for practice

- **Administrators.** Use automated overlap screening as a triage layer ahead of advisor review: the Random Forest classifier on course-description and learning-outcome embeddings reached F1 = 0.74 on the TU/e CS dataset (60 overlapping and 180 non-overlapping pairs), and learning outcomes were the most informative single component (F1 = 0.61).
- **Administrators.** Push partner institutions to publish course-wise intended learning outcomes before relying on the tool, since programs that omit them are expected to yield less reliable predictions on a feature shown to be informative.
- **Designers.** Keep the advisor's decision as the final authority and expose the per-component similarity evidence: in external validation the tool mapped Error Correcting Codes to a first-year Communication Systems course instead of the advanced Channel Coding course the program director chose, and a security lab was matched to a lecture-based systems security course because learning methods are not modeled.
- **Learners.** Read the component-level similarity breakdown (for example the 0.81 learning-outcome similarity behind the Distributed Data Systems match) when preparing a mobility case, rather than treating a single overlap verdict as decisive.

## Limitations

- Evaluation rests on small labeled sets: the 60 held-out and 180 non-held-out TU/e CS course pairs used for classifier development and only 24 usable program-director decisions covering 5 students' programs at 3 universities for external validation.
- The problem was formulated as binary overlap/no-overlap because the TU/e dataset lacked annotations of the extent of overlap, so full versus partial equivalence — the distinction the program director actually makes — cannot be reproduced.
- The method assumes course information is publicly available and comparable across institutions, yet the amount of published detail varies and terms such as "introductory" and "advanced" carry different meanings at different universities.
- It compares course content only (learning outcomes, descriptions, topics), not learning methods or cognitive demand, which is why an applied hacking lab was assigned to a systems security lecture course.

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
