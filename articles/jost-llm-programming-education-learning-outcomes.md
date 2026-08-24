---
title: "The Impact of Large Language Models on Programming Education and Student Learning Outcomes"
created: "2026-08-15T16:09:27-04:00"
updated: "2026-08-24T16:30:00-04:00"
type: article
tags: [llm, programming-education, cs-education, over-reliance, generative-ai, empirical-study]
sources: ['raw/papers/jost-llm-programming-education-learning-outcomes.md']
confidence: high
---

## Summary

Jošt, Taneski, and Karakatič (2024) conducted a ten-week experiment with 32 second-year undergraduate students learning React to examine how informal (unrestricted but not explicitly encouraged) use of [[llm|large language models (LLMs)]] such as ChatGPT and Copilot relates to learning outcomes in [[cs-education|programming education]]. Students used LLMs freely across four assignments over nine weeks, then completed a controlled-phase assignment in week ten in which LLM use was prohibited (Google and official React documentation were allowed). Reported LLM use was captured via a post-grade questionnaire on a five-point Likert scale, and performance was measured by final assignment grade. Using one-sided non-parametric Spearman's correlation tests with bootstrap confidence intervals, the authors found a significant negative correlation between overall average LLM use and final grades (rho = −0.347, p = 0.026). Breaking usage down by task, reliance on LLMs for code generation (rho = −0.305, p = 0.045) and for debugging (rho = −0.360, p = 0.021) were both significantly negatively associated with grades, whereas use for seeking additional explanations was not significantly correlated (rho = −0.201, p = 0.135). The authors conclude that LLMs serve best as supplementary learning aids and that their use for [[critical-thinking]]-intensive tasks can undermine the independent problem-solving skills central to programming education.

## Key Findings

- Significant negative correlation between average LLM use and final grades (Spearman's rho = −0.347, p = 0.026; bootstrap CI [−0.626, −0.044], excluding zero), supporting H1.
- Significant negative correlation between LLM use for **code generation** and final grades (rho = −0.305, p = 0.045), supporting H2a.
- Significant negative correlation between LLM use for **debugging** and final grades (rho = −0.360, p = 0.021; strongest effect), supporting H2c.
- Non-significant correlation between LLM use for **additional explanations** and final grades (rho = −0.201, p = 0.135; CI crosses zero), meaning H2b was not supported; this use appears to act as a supplementary aid rather than a hindrance.
- Reliance on LLMs for critical-thinking-intensive tasks (code generation, debugging) appears to impede the development of independent problem-solving and troubleshooting skills.
- Authors recommend introducing LLM tools at later stages of programming education, after students have acquired foundational coding principles, to balance productivity gains against skill development.
- Study is limited by its small sample (n = 32) and ten-week duration, restricting generalizability.

## Implications

The study provides empirical evidence that how LLMs are used—not merely whether they are used—matters for [[learning-gains|learning outcomes]] in programming education. When students lean on LLMs to generate code or to debug for them, their independent problem-solving ability appears to suffer, as reflected in lower final grades even on an LLM-free, controlled assignment. In contrast, using LLMs to obtain explanations appears comparatively benign and potentially supportive. This suggests educators should not treat LLMs as uniformly beneficial or harmful, but should design instruction that constrains reliance on LLMs for tasks where the learning objective is the skill itself, while permitting their use for supplementary explanation and understanding. The finding that "the tool can do the task" does not mean the learner acquires the skill resonates with concerns about over-reliance and [[cognitive-offloading|cognitive offloading]] in AI-mediated learning. A balanced integration—delaying LLM exposure until foundational principles are mastered and pairing AI assistance with human guidance—emerges as a practical [[pedagogy|pedagogical]] strategy. The modest sample also underscores the need for larger, longer-term replication before strong policy conclusions are drawn.

## Connected Concepts

- [[llm]]
- [[cs-education]]
- [[cognitive-offloading]]
- [[generative-ai]]
- [[critical-thinking]]
- [[self-regulated-learning]]
- [[human-ai-collaboration]]

## Connected Articles

- [[reshaping-cs-education-genai]]
- [[chatgpt-programming-education-text-mining]]
- [[genai-meta-analysis-programming-learning]]
- [[llm-programming-support-governance-cs-education]]
- [[genai-over-reliance-learning-2026]]
- [[genai-performance-vs-learning]]
- [[llm-reliance-types-undergrad]]
- [[trio-ethnography-llm-programming-education]]

## Citation

Jošt, G., Taneski, V., & Karakatič, S. (2024). [*The impact of large language models on programming education and student learning outcomes*](https://doi.org/10.3390/app14104115). *Applied Sciences*, 14(4115).
