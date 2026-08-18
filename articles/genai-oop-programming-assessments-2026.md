---
title: "Revisiting the Performance of Generative AI on Introductory Object-Oriented Programming Assessments"
created: "2026-08-18T09:20:00-04:00"
updated: "2026-08-18T09:20:00-04:00"
type: article
tags: [cs-education, programming-education, generative-ai, automated-assessment, higher-ed, academic-integrity, llm, computing-education]
sources: ['raw/papers/genai-oop-programming-assessments-2026.md']
confidence: high
---

> **Synthesis:** Lepp and Kaimre (2026) evaluate five widely used GenAI systems — ChatGPT-5.2, DeepSeek-V3, Gemini 2.5 Flash, Claude Sonnet 4.5, and M365 Copilot — against authentic [[cs-education|object-oriented programming]] tests and exams from an introductory university Java course, scoring them with the same rubric applied to students and comparing against historical cohort results and the prior year. All systems except Copilot outscored the average student cohort and often earned full marks on longer programming tasks, yet they still produced occasional non-compiling code and struggled with advanced OOP concepts — interfaces, abstract classes, and certain inheritance tasks — as well as graphics-based questions requiring image interpretation. Compared with the prior year the systems improved across most assessments while repeating several recurring error patterns. The findings offer an updated, dated benchmark of contemporary GenAI capabilities that can inform [[assessment]] design and the responsible integration of AI into [[cs-education]].

## Context: GenAI and introductory programming assessment

As [[generative-ai]] systems have rapidly improved at generating and explaining source code, a key open question for [[cs-education]] is how they perform on *authentic* assessments — the tests and exams instructors actually use — rather than simplified coding benchmarks. Earlier work found that early models (ChatGPT-3.5/4) could pass data-structures and introductory OOP courses but with uneven results, often below or near class averages and with persistent difficulty on [[cs-education|object-oriented]] concepts like interfaces. This study updates that picture for the 2026 generation of models using the same course and grading criteria across two consecutive years.

## Design and method

The study used programming tests (T1, T2) and a final examination from an introductory object-oriented programming course at the University of Tartu. The five GenAI systems were chosen based on a week-10 student survey (87.8% of respondents had used AI assistants in the course at least once). Generated solutions were assessed with the same grading criteria applied to students and compared with historical student results and the prior year's AI performance. Recurring errors were analyzed to identify systematic limitations.

## Key findings

- **Above-average overall performance:** All evaluated systems except M365 Copilot scored higher than the historical student cohort average on the programming tests (e.g., test 1 average ~14.61 points vs. student 13.76; test 2 ~14.87 vs. 13.39). The final exam showed all AI assistants performing nearly flawlessly on objects-and-classes items.
- **Full marks on longer tasks:** Systems frequently obtained full marks on longer programming tasks, and ChatGPT and DeepSeek showed the strongest and most consistent performance.
- **Persistent conceptual gaps:** Models still struggled with interfaces, abstract classes, and certain inheritance-related tasks — repeatedly, e.g., "the abstract class must implement the interface methods," "subclass cannot widen superclass method access," and marking methods `public` instead of `private`.
- **Non-compiling code:** Systems occasionally produced code that did not compile (e.g., `a=a` causing non-compilation; confusion with list indexes).
- **Multimodal weakness:** Performance was limited on graphics-related questions involving image interpretation — a domain where the 2026 models still underperform.
- **Year-over-year improvement with recurring errors:** Compared with the prior year, systems improved across most assessments but repeated several error patterns (e.g., ChatGPT again marking methods `public` instead of `private`).

## Implications for assessment and teaching

The results support the view that contemporary GenAI can outperform the average student on authentic introductory programming assessments, making exam-based evaluation of students' individual coding ability unreliable unless assessments are redesigned. For [[automated-assessment]], the recurring conceptual errors (interfaces, abstract classes, inheritance) suggest that AI-generated solutions still require human review for advanced [[computational-thinking|OOP concepts]]. Instructors designing [[authentic-assessment|authentic]] programming assessments may need to weight tasks where models demonstrably fail — interfaces, abstract classes, multimodal image-based questions — to preserve [[assessment-validity]] and limit [[cognitive-offloading|over-reliance]] on AI. The findings also speak to [[academic-integrity]]: with models reliably exceeding the average student, detecting or deterring AI use becomes less defensible than redesigning what counts as evidence of learning.

## Connected Concepts
- [[cs-education]]
- [[cs-education]]
- [[generative-ai]]
- [[automated-assessment]]
- [[higher-ed]]
- [[academic-integrity]]
- [[assessment-validity]]
- [[authentic-assessment]]
- [[computational-thinking]]
- [[cognitive-offloading]]

## Connected Articles
- [[jost-llm-programming-education-learning-outcomes]] — LLM impact on programming education learning outcomes (Jošt et al. 2024)
- [[code-review-genai-cs1]] — Combating Harms of Generative AI in CS1 with Code Review Interviews
- [[llm-automated-grading-programming-comparison-2026]] — Systematic comparison of LLMs for automated grading of programming
- [[llm-difficulty-calibration-programming-exams-2026]] — From evaluated models to evaluation aids
- [[genai-performance-vs-learning]] — GenAI performance vs. learning
- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the quality of AI-generated exams
- [[learner-ai-interaction-patterns-oop]] — Patterns of learner-AI interaction and academic performance
- [[critical-engagement-code-completion]] — Critical engagement with code completion

## Citation
Lepp, M., & Kaimre, J. (2026). [*Revisiting the Performance of Generative Artificial Intelligence on Introductory Object-Oriented Programming Assessments: Insights from 2026*](https://arxiv.org/abs/2608.16318). arXiv:2608.16318 [cs.SE].
