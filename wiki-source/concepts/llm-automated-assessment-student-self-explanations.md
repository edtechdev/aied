---
title: "Exploring the Effectiveness of Using LLMs for Automated Assessment of Student Self Explanations in Programming Education"
created: 2026-05-23
updated: 2026-05-23
type: concept
tags: [llm, automated-grading, feedback-loop, stem-education, higher-ed, scaffolding]
sources: [raw/papers/2605.21614.md]
confidence: medium
---

# Exploring the Effectiveness of Using LLMs for Automated Assessment of Student Self Explanations in Programming Education

**Lekshmi-Narayanan, Hassany & Brusilovsky (2026)** — University of Pittsburgh. arXiv preprint (cs.HC, cs.LG).

📄 [Full text (arXiv)](https://arxiv.org/abs/2605.21614)

## Summary

This paper presents a rigorous empirical comparison between [[llm|LLM]]-based and semantic similarity methods for [[automated-grading|automated assessment]] of student self-explanations in programming education. The task is framed as binary classification — determining whether a student's explanation of a worked-example step is correct or incorrect.

Worked examples — step-by-step problem solutions — are a well-established [[scaffolding]] technique, and their effectiveness increases when students are prompted to self-explain each step. However, manually assessing these [[self-regulated-learning|self-explanations]] doesn't scale. The prevailing approach has been to compare student responses to reference explanations using semantic similarity metrics, but recent advances in large language models raise the question of whether LLM-based scoring now outperforms these traditional methods.

The authors address a critical gap: high-quality, domain-specific datasets with balanced class distributions for automated scoring tasks. Their contribution is both methodological (a rigorous comparison framework) and empirical (which approach works better, and under what conditions).

## Key Contributions

- **Binary classification framing**: Self-explanations scored as correct or incorrect, a practical framing for real-world deployment in [[intelligent-tutoring|intelligent tutoring systems]]
- **Dataset contribution**: Domain-specific labeled data for programming self-explanations with balanced classes
- **Method comparison**: LLM-based scoring versus semantic similarity methods, with systematic evaluation
- **Practical implications**: Guidance for building [[feedback-loop|automated feedback]] systems in [[programming-its|programming education]]

## Connection to Wiki

This work extends the [[automated-grading]] landscape by addressing a specific gap: assessment of open-ended self-explanations rather than final answers or code submissions. It complements research on [[automatic-short-answer-grading]] and [[structured-llm-feedback-programming]] by focusing on the formative, metacognitive dimension of student learning rather than summative evaluation.

## Related Pages

- [[automated-grading]] — General landscape of AI-driven grading systems
- [[automatic-short-answer-grading]] — LLM-based short answer scoring
- [[programming-its]] — Intelligent tutoring systems for programming
- [[scaffolding]] — Instructional scaffolding techniques including worked examples
- [[metacognition]] — Self-explanation as a metacognitive strategy
- [[self-regulated-learning]] — The role of self-explanation in SRL
- [[feedback-loop]] — Automated feedback systems in education
- [[aiawe-automated-writing-evaluation]] — Complementary LLM assessment approach using LoRA-adapted models

## Citation

**APA:** Lekshmi-Narayanan, A.-B., Hassany, M., & Brusilovsky, P. (2026). *Exploring the Effectiveness of Using LLMs for Automated Assessment of Student Self Explanations in Programming Education*. arXiv:2605.21614.
