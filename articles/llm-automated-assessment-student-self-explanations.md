---
title: Exploring the Effectiveness of Using LLMs for Automated Assessment of Student Self Explanations in Programming Education
created: "2026-05-23T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [llm, automated-grading, feedback-loop, stem-education, higher-ed, scaffolding, self-regulated-learning, metacognition]
sources: ['raw/papers/2605.21614.md']
confidence: medium
---

This paper presents a rigorous empirical comparison between [[llm|LLM]]-based and semantic similarity methods for [[automated-grading|automated assessment]] of student self-explanations in programming education. The task is framed as binary classification — determining whether a student's explanation of a worked-example step is correct or incorrect.

Worked examples — step-by-step problem solutions — are a well-established [[scaffolding]] technique, and their effectiveness increases when students are prompted to self-explain each step. However, manually assessing these [[self-regulated-learning|self-explanations]] doesn't scale. The prevailing approach has been to compare student responses to reference explanations using semantic similarity metrics, but recent advances in large language models raise the question of whether LLM-based scoring now outperforms these traditional methods.

The authors address a critical gap: high-quality, domain-specific datasets with balanced class distributions for automated scoring tasks. Their contribution is both methodological (a rigorous comparison framework) and empirical (which approach works better, and under what conditions).

- **Binary classification framing**: Self-explanations scored as correct or incorrect, a practical framing for real-world deployment in [[intelligent-tutoring|intelligent tutoring systems]]
- **Dataset contribution**: Domain-specific labeled data for programming self-explanations with balanced classes
- **Method comparison**: LLM-based scoring versus semantic similarity methods, with systematic evaluation
- **Practical implications**: Guidance for building [[feedback-loop|automated feedback]] systems in [[programming-its|programming education]]

## Connection to Wiki

This work extends the [[automated-grading]] landscape by addressing a specific gap: assessment of open-ended self-explanations rather than final answers or code submissions. It complements research on [[automatic-short-answer-grading]] and [[structured-llm-feedback-programming]] by focusing on the formative, metacognitive dimension of student learning rather than summative evaluation.

## Connected Concepts

- [[llm]]
- [[automated-grading]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[intelligent-tutoring]]
- [[feedback-loop]]
- [[formative-assessment]]
- [[metacognition]]
- [[automatic-short-answer-grading]]

## Connected Articles

- [[programming-its]]
- [[automatic-short-answer-grading]]
- [[structured-llm-feedback-programming]]
## Citation

Lekshmi-Narayanan, A.-B., Hassany, M., & Brusilovsky, P. (2026). [Exploring the Effectiveness of Using LLMs for Automated Assessment of Student Self Explanations in Programming Education](https://arxiv.org/abs/2605.21614). arXiv:2605.21614.
