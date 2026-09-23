---
title: "Contaminated Collaboration: Measuring Gender Bias Transfer in LLM-Assisted Student Writing"
created: "2026-06-17T04:33:04-04:00"
updated: "2026-09-16T15:52:49-04:00"
type: article
technology: [generative-ai, llm]
ethics: [bias-mitigation]
research_method: [experiment]
discipline: [writing education]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/2606.15914.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** - In a controlled study with **N = 123 participants**, students wrote career plan essays for paired biographical profiles differing only in gender under three conditions: **no AI assistance, neutral [[llm]] assistance, or gender-biased LLM assistance**.
> - Students in the biased condition produced essays with a **significantly larger agentic gap and more gender-stereotypic occupation suggestions** than those in the control and neutral conditions.
> - Bias transfer was **asymmetric**: agency was suppressed in female-target essays while male-target writing remained largely unaffected.
> - A verification study of **N = 1,600 LLM-generated essays** (two-way ANOVA, R² = .399) confirmed that a gender-biased prompt induces gender-differentiated language while a neutral prompt does not, with significant main effects of biography gender, prompt condition, and their interaction.
> - The authors frame the findings as evidence of **bias propagation in AI-assisted writing**, calling for fairness-aware design in educational AI tools.

## Key Findings


## Study Design & Method

The [[research-methods-aied|researchers]] first verified that a gender-biased prompt induces gender-differentiated language in LLM-generated essays while a neutral prompt does not, using a corpus of 1,600 generated essays analyzed with a two-way ANOVA. They then recruited 123 participants in a controlled environment to write career plan essays for paired biographical profiles differing only in gender, under three assistance conditions. Outcomes included an agentic gap measure (the difference in agency expressed in female- versus male-target essays) and the gender stereotypicality of occupation suggestions. Normality was confirmed across all gender × condition cells (Shapiro-Wilk, all p > .05), supporting parametric tests.

## What this means for practice

- **Instructors.** Audit the prompt, not only the model. In this study the fairness of AI-assisted [[writing-education]] depended on the prompt students were given: the biased assistant produced an agency gap of Δ = +0.242 (d = 1.510, p < .001) against Δ = +0.032 for the neutral assistant, and that framing carried into text the students wrote themselves. With student adoption of AI writing tools rising from 66% to 92% between 2024 and 2025, prompt configuration is the lever a course can actually govern, so treat it as a fairness decision rather than a default.
- **Instructors.** Treat perceived influence as a poor proxy for actual influence. Biased-condition participants reported lower perceived influence on their career recommendations (Q2: 3.50 ± 1.33 vs. 3.71 ± 1.23) while producing the largest agency gap, so debrief on undetected transfer rather than asking whether the tool felt influential.
- **Instructors.** Target the female side of the gap when reviewing assignments and tooling. Female-target agency fell from 0.591 with the neutral assistant to 0.288 with the biased one, a 51% relative reduction, while male agency held steady — a correction aimed only at male over-representation would leave this effect intact.
- **Learners.** Check your own draft for gendered attributions before submitting. Students with the biased assistant were nearly four times more likely to suggest a gender-congruent occupation than those with the neutral assistant, and the shift affected how the subject was described, not just which job was named.
- **Instructors.** Fold the values an AI tool transmits into [[academic-integrity]] and assessment policy rather than treating it as a separate ethics question. The neutral condition produced the lowest stereotype congruence rate of all three groups, below even the no-AI control, so whether an assistant amplifies or attenuates baseline stereotyping is a configuration choice, not a given.

## Limitations

- The participant sample was gender-skewed — 89 male (72.4%) and 34 female (27.6%) of N = 123 — which prevented the authors from analyzing whether participant gender moderates bias transfer.
- All 123 participants came from a single English-medium university course, with 40–42 participants per condition each writing one career-plan essay in a controlled lab session that blocked access to external AI tools.
- Stereotype labels rest on U.S. Bureau of Labor Statistics occupational gender distributions rather than local labor-market data, because the study's country of deployment offers no publicly accessible detailed occupational gender data.
- The analysis covered one open-source model (llama-3.3-70b-instruct); proprietary models such as GPT-4 and Claude were unavailable on the authors' resources, so the boundary conditions of the transfer effect across model families remain unknown.

## Connected Concepts

- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[prompt-engineering]]
- [[automated-essay-scoring]]
- [[ai-detection]]
- [[teacher-ai-competency]]
- [[writing-education]]
- [[academic-integrity]]

## Connected Articles

- [[genai-minoritized-knowledges-disability]] — Generative AI and the marginalization of minoritized knowledges in higher education: the case of disability
- [[humanlike-ai-collaborative-writing]] — It Felt a Bit Eerie": Exploring Humanlike Interactions During Collaborative Writing with an Artificial Agent
- [[repeated-ai-writing-feedback-semester]] — Student Evaluation of Repeated AI Feedback Across a Semester of Writing
- [[paternalistic-filter-llm-history-education]] — The Paternalistic Filter: Epistemic Injustice and Differential Refusal in LLM-Mediated History Education for Marginalized Romanian Students
- [[genai-reliance-types-scale]] — Measuring How Students Rely on Generative AI in Academic Writing: Development and Multi-Source Validation of the Generative AI Reliance Types Scale (GenAI-RTS)
- [[llm-reliance-types-undergrad]] — Four Types of LLM Reliance and Their Predictors Among Undergraduate Writers: A Mixed-Methods Study at a Minority-Serving R1 University

## Citation

Ariyan Hossain, Kazi Kamruzzaman Rabbi, Farig Sadeque, S M Taiabul Haque (2026). [Contaminated Collaboration: Measuring Gender Bias Transfer in LLM-Assisted Student Writing](https://arxiv.org/abs/2606.15914). arXiv cs.CL.
