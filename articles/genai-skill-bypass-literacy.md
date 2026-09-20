---
title: "The GenAI Skill Bypass: Mapping Divergent Pathways of University Students and Staff AI Literacy"
created: "2026-07-09T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
foundations: [ai-literacy, cognitive-offloading, educational-development]
technology: [generative-ai, llm, rag]
assessment: [educational-measurement]
research_method: [survey]
audience: [faculty developers]
level: [higher ed]
sources: ['raw/papers/2607.05411.md']
confidence: high
---

> **Synthesis:** Higher education institutions are increasingly expected to ensure that both students and staff develop Generative AI (GenAI) literacies. In response, they are introducing professional development programs and embedding GenAI skills within student curricula. However, current educational frameworks typically assume a linear progression of GenAI literacy, implying that foundational technical understanding must precede creative application. This paper challenges such an assumption through a psychometric analysis of a taxonomy-based self-assessment instrument (n = 158). We applied Rasch [[educational-measurement|measurement theory]] and Guttman ordering to map the latent perceived order of difficulty of GenAI skills across students, academics, and professional staff. Results reveal a fundamental divergence in perceived competence profiles: while academics follow a more traditional linear path, students exhibit an inverted profile, frequently mastering high-level creation tasks before acquiring foundational conceptual understanding. Furthermore, the correlation of skill difficulty between students and academics was weak (r = 0.188). We argue that this skill bypass creates a fragile sense of fluency, where high [[self-efficacy]] in [[prompt-engineering|prompting]] masks low literacy in AI mechanics. These findings challenge the one-size-fits-all curricula and provide the empirical basis for diagnostic-driven, modular interventions that foster genuine human-AI synergy.

Rasch analysis of n=158 GenAI-literacy self-assessments reveals students show an inverted skill profile (mastering creation before conceptual foundations), weak correlation with academics (r=0.188); a skill bypass gives fragile fluency where prompting self-efficacy masks low AI-mechanics literacy, arguing against one-size-fits-all curricula.

This work connects to core knowledge base themes: [[ai-literacy]] [[higher-ed]] [[cognitive-offloading|Over-Reliance]] [[generative-ai]] [[educational-development]]. It highlights how generative-AI tooling is reshaping both what learners do and how educators structure support, reinforcing the need for design that preserves authentic [[student-engagement|engagement]] rather than enabling shallow bypass.

## What this means for practice

- **Faculty developers.** Diagnose skill profiles before assigning modules: the difficulty order of skills correlated only weakly between students and academics (r = 0.188), so one shared induction sequence will misplace one cohort.
- **Faculty developers.** Replace the linear literacy ladder with modular, diagnostic-driven interventions that let learners skip foundations they already hold.
- **Administrators.** Read confident prompting as a warning sign rather than evidence of literacy — the inverted student profile self-reports "Create"-level work before foundational AI mechanics.
- **Faculty developers.** Assess AI mechanics separately from prompt-writing confidence so a fragile sense of fluency becomes visible before learners rely on it.

## Limitations

- The analysis rests on 158 self-assessment responses (98 students, 34 academics, 26 professional staff), and the authors acknowledge the small sample size.
- The instrument measures self-perceived ability, which the authors note does not always equate to performance.
- Because Differential Item Functioning needs larger samples for adequate power, the study used deterministic Guttman ordering instead, reporting uncertainty through 95% confidence intervals on subgroup item-difficulty rank correlations.
- Responses cover a 4-level × 7-item instrument, and the authors report low internal consistency and variance in person-fit across the population.

## Connected Concepts

- [[ai-literacy]]
- [[higher-ed]]
- [[cognitive-offloading]]
- [[generative-ai]]
- [[educational-development]]
- [[self-efficacy]]
- [[educational-measurement]]
- [[curriculum-design]]
## Connected Articles

- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[ai-making-us-stupid]] — Is AI making us stupid?
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[ai-assisted-writing-research-teams]] — Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[bloom-aligned-educational-control-llms]] — From Execution to Education: A Bloom-Aligned Framework for Measuring Educational Control in LLMs

## Citation

Oliveira, English, Ryan, Misiejuk, dal Ponte, Lopez-Pernas & Saqr (2026). [The GenAI Skill Bypass: Mapping Divergent Pathways of University Students and Staff AI Literacy](https://arxiv.org/abs/2607.05411). arXiv preprint.
