---
title: Simulating Students' Java Programming Errors with Large Language Models
created: "2026-06-15T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [llm, stem-education, student-experience, intelligent-tutoring, learning-analytics, efficacy-study]
sources: ['raw/papers/2606.14113.md']
confidence: high
---

This paper investigates whether [[llm|large language models]] can serve as scalable proxies for students by simulating realistic logical errors in code submissions. Using the CodeWorkout dataset of 74,000+ unique student Java submissions across 37 problems, the authors evaluate five LLMs under three prompting strategies: Input-Output (IO), Chain-of-Thought (CoT), and iterative Self-Refine.

- **Diversity vs. Alignment trade-off**: LLMs generate diverse error patterns, but alignment with authentic student errors varies significantly by model. Claude Sonnet 4 achieves the most balanced performance across both dimensions.
- **Functional indistinguishability**: A blinded expert annotation study (N=401) found that synthetic errors are functionally indistinguishable from authentic student errors.
- **Task difficulty effects**: Higher-struggling-level problems elicit more diverse but less student-like errors — LLMs struggle more to simulate realistic mistakes on harder tasks.
- **Practical implications**: Synthetic errors could be integrated into [[intelligent-tutoring|intelligent tutoring systems]], teachable agents, and large-scale [[learning-analytics|learning analytics]] pipelines without waiting for authentic classroom data accumulation.

## Methodology

The study used the CodeWorkout dataset with 74,000+ unique student Java submissions. Five LLMs were tested under three prompting strategies. Performance was assessed on two dimensions: diversity (range of distinct error patterns) and alignment (correspondence with authentic student mistakes). A blinded expert annotation study with 401 samples confirmed the indistinguishability of synthetic and authentic errors.

## Related Work

This work extends research on [[llm-student-simulation-misconception-faithfulness|LLM-based student simulation]] and [[llm-student-misconception-identification|student misconception identification]]. It connects to [[programming-its|programming intelligent tutoring systems]] and [[student-modeling|student modeling]] by offering a scalable method for generating training and evaluation data. The findings also inform [[ai-generated-traces-novice-programmers|AI-generated traces from novice programmers]] and research on [[code-review-genai-cs1|code review with generative AI in CS1]].

## Connected Concepts
- [[cs-education]]
- [[programming-education]]
- [[simulating-students]]

- [[learning-by-teaching]]
- [[llm]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[student-modeling]]
## Connected Articles

- [[llm-student-simulation-misconception-faithfulness]]
- [[llm-student-misconception-identification]]
- [[programming-its]]
- [[ai-generated-traces-novice-programmers]]
- [[code-review-genai-cs1]]
## Citation

Keramati, A., Cao, J., Mohammadi, I., Warschauer, M., & Shi, Y. (2026). [Simulating Students' Java Programming Errors with Large Language Models](https://arxiv.org/abs/2606.14113). arXiv:2606.14113.
