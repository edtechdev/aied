---
title: "An Empirical Study of ChatGPT Use in Engineering Education: Prompting and Performance"
created: "2026-08-24T12:35:00-04:00"
updated: "2026-08-24T14:35:00-04:00"
type: article
tags: [prompt-engineering, higher-ed, engineering-education, generative-ai, student-ai-interaction, learning-analytics]
sources: ['raw/papers/isaza-chatgpt-engineering-prompting-2026.md']
confidence: high
---

> **In brief:** Isaza Dominguez, Robles-Gómez, and Pastor-Vargas study how prompting behaviors influence the academic performance of 128 fourth-year engineering students using ChatGPT across a 16-week semester with rotating task types (case analysis, engineering design, multi-step problem-solving, experimental data analysis). AI Query Efficiency (how effectively students crafted clear, well-structured prompts) and AI-Driven Problem-Solving (how strategically they integrated AI output into their reasoning) were the strongest predictors of academic success — even after accounting for cumulative GPA.

This empirical study connects prompting behavior to learning outcomes in engineering education. Using a Python-based interface connecting students to ChatGPT-4o via the API, the researchers logged all interactions and implemented stratified randomization of AI access across the semester. Ten metrics captured student behaviors — eight focusing on prompting (AI Query Count, Query Depth and Structure, Query Efficiency, Prompt Refinement Depth, Response Utility, Response Complexity, Response Reliance, AI-Driven Problem-Solving) and two assessing [[writing-education|writing quality]] (Structural Complexity Score, Content Richness and Information Density). Written assignments were used for both grading and analyzing AI content integration.

The core finding is that **how** students prompt and integrate AI output matters more than how much they use it. AI Query Efficiency and AI-Driven Problem-Solving were the strongest predictors of academic success, supported by Mann–Whitney U tests comparing AI and non-AI groups, Spearman correlations, Random Forest regressors, partial dependence plots, principal component analysis, and mixed-effects modeling — and remained significant after accounting for cumulative GPA. The results suggest prompting strategy plays a meaningful role in shaping how effectively students use AI in engineering education, linking directly to the [[prompt-engineering|prompt-engineering]] skill.

## Key Findings

- **128 fourth-year engineering students** across four programs, 16-week semester, rotating task types.
- **AI Query Efficiency** (clear, well-structured prompts) and **AI-Driven Problem-Solving** (strategic integration of AI output into reasoning) were the **strongest predictors of academic success**.
- Findings robust across multiple methods (Mann–Whitney U, Spearman, Random Forest, PCA, mixed-effects) and remained significant **after controlling for cumulative GPA**.
- Prompting strategy matters more than raw usage volume in shaping effective AI use.
- Demonstrates the value of teaching [[prompt-engineering]] as a transferable skill in [[engineering-education]] and [[higher-ed]].

## Connected Concepts

- [[prompt-engineering]] — the core skill under study
- [[higher-ed]] — the educational context
- [[engineering-education]] — the discipline
- [[generative-ai]] — the ChatGPT technology
- [[student-ai-interaction]] — the interaction behaviors measured
- [[learning-analytics]] — the logged interaction data

## Connected Articles

- [[learning-to-prompt-adaptive-tutoring]] — learning to prompt in adaptive tutoring
- [[prompt-problems-nl-programming-mistakes]] — prompting problems in programming
- [[voice-text-prompt-problems-computing-education]] — prompt problems in computing education
- [[aaai2026-prompting-literacy-k12]] — prompting literacy in K-12
- [[chatgpt-english-language-learning-malaysia]] — ChatGPT in language learning

## Citation

Isaza Dominguez, L. G., Robles-Gómez, A., & Pastor-Vargas, R. (2026). [*An empirical study of ChatGPT use in engineering education: Prompting and performance*](https://doi.org/10.1016/j.iheduc.2026.101105). The Internet and Higher Education, 71, 101105.
