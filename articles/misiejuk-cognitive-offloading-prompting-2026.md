---
title: "Cognitive Offloading in Student–AI Collaboration: A Longitudinal Analysis of Prompting Strategies"
created: "2026-08-09T20:37:26-04:00"
updated: "2026-08-22T01:30:41-04:00"
type: article
tags: [cognitive-offloading, ai-literacy, higher-ed, student-experience, learning-analytics, generative-ai, llm]
research_method: [interviews, learning analytics]
audience: [learners]
level: [higher ed]

sources: ['raw/papers/10.1016_j.chbr.2026.101130.md']
confidence: high
---

> **Synthesis:** Misiejuk, López-Pernas, Kaliisa, and Saqr (2026) analyze 281 prompts from 122 student submissions across four assignments to examine how [[prompt-engineering|prompting]] strategies reveal cognitive offloading in student–AI collaboration. Using qualitatively coded prompts and Co-Occurrence Network Analysis (CNA), they found that high-quality submissions demonstrated cohesive prompting patterns integrating contextual details, instructions, and polite language — leading to fewer disagreements and more effective task guidance — while low-quality submissions were characterized by disagreement and direct instructions with limited contextualization. Notably, across both groups a convergence toward low-effort, direct instruction emerged, suggesting AI "leveled" achievement by encouraging cognitive laziness and reducing the incentive for deeper cognitive [[student-engagement|engagement]].

## Key Findings

- **281 prompts from 122 submissions** were analyzed across four assignments in a course where students used LLMs to generate social network datasets.
- **High-quality submissions** showed cohesive prompting with strong *context–instruction–output-specification–polite-language* connections (e.g., context–instruction 0.25, output specification–instruction 0.28), with students providing domain knowledge and contextual details rather than delegating interpretation to the [[llm]] — resulting in fewer disagreements.
- **Low-quality submissions** were characterized by *disagreement–instruction* and *disagreement–output-specification* patterns with limited contextualization, indicating students issued orders and reacted negatively when AI didn't deliver, without contributing their own knowledge.
- **Cognitive offloading was asymmetric:** reactive codes (disagreement, agreement) reflect higher offloading — the student reacts to AI output rather than directing the interaction with their own reasoning.
- **A "leveling" tendency emerged:** across both quality groups, prompting converged toward low-effort, direct instruction over time; high achievers accepted AI output with minimal critical engagement, and low performers' inertia was reinforced. The convenience of AI reduced the incentive for refinement and deeper cognitive effort, effectively lowering the standard of engagement to the cohort's minimal common denominator.
- **Longitudinal divergence:** the similarity between high- and low-quality prompting patterns was high in Assignments 1–3 (Pearson correlations 0.952, 0.935, 0.982) but dropped sharply in Assignment 4 (0.485), as disagreement-dominated patterns became more prominent in low-quality submissions.

## Study Design & Method

This longitudinal study analyzed student–AI interactions in a semester-long [[network-analysis|social network analysis]] course at a Finnish university. Students used LLMs to generate their own network datasets meeting specified criteria across four assignments. A total of 281 prompts from 122 submissions were qualitatively coded into six binary categories: *Instruction*, *Context*, *Output specification*, *Disagreement*, *Agreement*, and *Polite language*. **Co-Occurrence Network Analysis (CNA)** was applied to map how prompt-code combinations clustered within and across submissions, with separate networks for high- and low-quality submissions, subtraction networks to quantify differentiating connections, and centrality analysis (in-strength, diffusion). Longitudinal networks tracked patterns across the four assignments, with Pearson/Spearman correlations quantifying convergence or divergence between the quality groups over time.

## Implications for AI in Education

The study contributes to understanding [[cognitive-offloading]] as observable patterns in student prompting, not just a theoretical concern. It shows high-quality AI use integrates active cognitive engagement (contextual prompting, specifying expectations) rather than avoiding AI, connecting to [[genai-performance-vs-learning|distinguishing performance gains from learning]] and the finding that *how* students use AI matters more than *whether* they use it. The "leveling" tendency and cognitive-laziness finding support [[cognitive-offloading|Over-Reliance]] [[research-methods-aied|research]] and Cognitive Load Theory: excessive offloading risks diminishing the germane cognitive load needed for transferable mental models. The contextual-prompting finding supports [[scaffolding]] approaches that teach students to prompt with context, and the longitudinal dimension shows prompting strategies evolve with practice, informing [[ai-literacy]] [[curriculum-design|curriculum design]] and [[learning-analytics]] approaches for monitoring student–AI collaboration.

## Limitations

The study is context-specific (a social network analysis course, LLM-based dataset generation), and the prompting patterns may not generalize to other task types or disciplines. The "leveling" tendency could reflect the specific task design (minimal-effort tasks with plausible instant outputs) rather than a general characteristic of LLM-assisted work, as the authors acknowledge. The sample is 281 prompts from 122 submissions at a single university. Prompt quality was inferred from output quality, and the relationship between prompting behavior and [[learning-gains|learning outcomes]] is not directly causally tested.

## Connected Concepts

- [[cognitive-offloading]]
- [[prompt-engineering]]
- [[ai-literacy]]
- [[student-experience]]
- [[higher-ed]]
- [[scaffolding]]
- [[learning-analytics]]
- [[self-regulated-learning]]
- [[network-analysis]]

## Connected Articles

- [[genai-performance-vs-learning]] — Distinguishing Performance Gains From Learning
- [[genai-can-harm-teaching-rct-2026]] — GenAI Tools: Improving Teaching Quality?
- [[instructional-guidance-genai-learning]] — Instructional Guidance and GenAI Learning
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work
- [[genai-meta-analysis-programming-learning]] — Meta-Analysis of GenAI in Programming

## Citation

Misiejuk, K., López-Pernas, S., Kaliisa, R., & Saqr, M. (2026). [*Cognitive offloading in student–AI collaboration: A longitudinal analysis of prompting strategies*](https://doi.org/10.1016/j.chbr.2026.101130). *Computers in Human Behavior Reports*, 22, 101130.
