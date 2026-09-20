---
title: "The Impact of Large Language Models on Programming Education and Student Learning Outcomes"
created: "2026-08-15T16:09:27-04:00"
updated: "2026-09-19T10:03:37-04:00"
type: article
foundations: [cognitive-offloading]
technology: [generative-ai, llm]
research_method: [experiment]
discipline: [cs education]
sources: ['raw/papers/jost-llm-programming-education-learning-outcomes.md']
confidence: high
audience: [instructors, curriculum designers]
level: [higher ed]
page_kind: [evaluation]
---

> **Synthesis:** Jošt, Taneski, and Karakatič (2024) conducted a ten-week experiment with 32 second-year undergraduate students learning React to examine how informal (unrestricted but not explicitly encouraged) use of [[llm|large language models (LLMs)]] such as ChatGPT and Copilot relates to learning outcomes in [[cs-education|programming education]]. Students used LLMs freely across four assignments over nine weeks, then completed a controlled-phase assignment in week ten in which LLM use was prohibited (Google and official React documentation were allowed). Reported LLM use was captured via a post-grade questionnaire on a five-point Likert scale, and performance was measured by final assignment grade. Using one-sided non-parametric Spearman's correlation tests with bootstrap confidence intervals, the authors found a significant negative correlation between overall average LLM use and final grades (rho = −0.347, p = 0.026). Breaking usage down by task, reliance on LLMs for code generation (rho = −0.305, p = 0.045) and for debugging (rho = −0.360, p = 0.021) were both significantly negatively associated with grades, whereas use for seeking additional explanations was not significantly correlated (rho = −0.201, p = 0.135). The authors conclude that LLMs serve best as supplementary learning aids and that their use for [[critical-thinking]]-intensive tasks can undermine the independent [[problem-solving]] skills central to programming education.

## Key Findings

- Significant negative correlation between average LLM use and final grades (Spearman's rho = −0.347, p = 0.026; bootstrap CI [−0.626, −0.044], excluding zero), supporting H1.
- Significant negative correlation between LLM use for **code generation** and final grades (rho = −0.305, p = 0.045), supporting H2a.
- Significant negative correlation between LLM use for **debugging** and final grades (rho = −0.360, p = 0.021; strongest effect), supporting H2c.
- Non-significant correlation between LLM use for **additional explanations** and final grades (rho = −0.201, p = 0.135; CI crosses zero), meaning H2b was not supported; this use appears to act as a supplementary aid rather than a hindrance.
- Reliance on LLMs for critical-thinking-intensive tasks (code generation, debugging) appears to impede the development of independent problem-solving and troubleshooting skills.
- Authors recommend introducing LLM tools at later stages of programming education, after students have acquired foundational coding principles, to balance productivity gains against skill development.
- Study is limited by its small sample (n = 32) and ten-week duration, restricting generalizability.

## What this means for practice

- **Curriculum designers.** Introduce LLM tools after foundational coding principles are established, not during them: LLM use for code generation (rho = −0.305, p = 0.045) and debugging (rho = −0.360, p = 0.021) was associated with lower final grades.
- **Instructors.** Constrain the use that substitutes for practice while permitting the use that supplements it: seeking additional explanations was not significantly associated with grades (rho = −0.201, p = 0.135), whereas generating code and outsourcing debugging were.
- **Instructors.** Keep at least one LLM-free assessment: the negative association held on the week-ten assignment in which LLM use was prohibited and only Google and official React documentation were allowed.
- **Instructors.** Coach students to attempt debugging before delegating it, since reliance on LLMs for debugging showed the strongest negative association with final grades of any use type measured.
- **Researchers.** Test the reverse direction before drawing policy conclusions: the authors cannot rule out that students who already had lower grades used LLMs more, and the correlation cannot separate that from LLM use depressing performance.

## Limitations

- The sample is 32 second-year undergraduates in a single React course over ten weeks; the authors state this scale cannot represent the spectrum of LLM outcomes across educational settings.
- LLM use is self-reported: it was captured by a post-grade questionnaire on a five-point Likert scale, so both usage and the timing of that report are subject to recall error.
- There is no control group and no baseline ability measure, so the correlational design cannot separate LLM effects from pre-existing differences in student ability.
- Tests were one-sided and non-parametric on a small sample, giving wide bootstrap intervals — the headline correlation's CI spans [−0.626, −0.044] — and the ten-week window cannot speak to long-term learning trajectories.

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
