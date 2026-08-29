---
title: "Learning by Teaching: Engaging Students as Instructors of Large Language Models in Computer Science Education"
created: "2026-08-14T10:45:34-04:00"
updated: "2026-08-22T19:45:00-04:00"
type: article
tags: [learning-by-teaching, intelligent-tutoring, generative-ai, cs-education, active-learning, cognitive-offloading, llm]
research_method: [quasi-experiment]
discipline: [cs education]

sources: ['raw/papers/raw-yang-socrates-lbt.md']
confidence: high
---

> **Synthesis:** Yang, Pujara, and Li (2025) present a pedagogical paradigm that **inverts the virtual-tutor model**: instead of an [[llm|LLM]] tutoring students, students act as instructors who must teach an LLM to solve problems. They develop strategies for designing questions with engineered knowledge gaps that only a student can bridge, and introduce **Socrates**, a system deploying this method with minimal overhead. Evaluated in an undergraduate course, the approach led to statistically significant improvements in student performance compared to historical cohorts.

## Inverting the Tutor–Student Relationship

[[llm|LLMs]] are often used as virtual tutors in [[cs-education|computer science education]], but this approach can foster passive learning and [[cognitive-offloading|over-reliance]] — the student receives answers rather than constructing them. This work inverts the model: the student teaches the LLM, forcing active construction of explanations and the identification of knowledge gaps.

## The Approach: Engineered Knowledge Gaps

The method relies on **questions with engineered knowledge gaps that only a student can bridge** — problems designed so the LLM cannot solve them without knowledge the student uniquely possesses. The student must explain, teach, and fill the gap, consolidating their own understanding through the act of teaching. The **Socrates** system operationalizes this with minimal overhead for instructors.

## Key Findings

- **Statistically significant improvements.** The [[active-learning]] method led to significant improvements in student performance compared to historical cohorts in an undergraduate course.
- **Practical and cost-effective.** Socrates demonstrates a low-overhead framework for using LLMs to deepen student engagement and mastery.
- **Addresses over-reliance.** By making students the instructors, the paradigm counters the passive learning and [[cognitive-offloading|over-reliance]] associated with LLM-as-tutor use.

## Implications

1. **Design knowledge gaps, not answer-giving.** The key design move is structuring problems so the LLM needs the student — making teaching a necessity rather than an option.
2. **Feasible at low cost.** Minimal-overhead deployment makes the paradigm practical for real courses.

## Connected Concepts

- [[learning-by-teaching]]
- [[generative-ai]]
- [[cs-education]]
- [[active-learning]]
- [[cognitive-offloading]]
- [[desirable-difficulties]]

## Connected Articles

- [[chatgpt-teachable-agent-programming-lbt-2024]] — ChatGPT as a teachable agent in programming
- [[prompting-teachability-novice-personas-lbt-2026]] — Designing novice personas for teachability
- [[explique-teachable-agent-algorithms-546-students-2026]] — Explique: teachable agent at scale

## Citation

Yang, X., Pujara, H., & Li, J. (2025). [*Learning by Teaching: Engaging Students as Instructors of Large Language Models in Computer Science Education*](https://arxiv.org/abs/2508.05979). In *COLM 2025*.
