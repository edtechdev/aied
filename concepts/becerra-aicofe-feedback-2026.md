---
title: 'AICoFE: AI-Powered Feedback System'
created: 2026-07-29
updated: 2026-07-29
type: concept
tags: [ai-ed-evaluation, feedback-loop, student-experience]
sources: [raw/papers/becerra-aicofe-feedback-2026.md]
confidence: medium
---
> **AICoFE** (AI-based Collaborative Feedback) is a multi-LLM feedback generation system for higher education that combines independently fine-tuned language models with **teacher-in-the-loop mediation**, producing diverse feedback perspectives while preserving pedagogical authority through Learning Analytics dashboards.
> **Source:** ['AICoFE: AI-Powered Feedback System'](https://arxiv.org/abs/2605.04740)


**Authors:** Alvaro Becerra, Alejandra Palma, Ruth Cobos (GHIA Group, Universidad Autónoma de Madrid) · arXiv:2605.04740 · Accepted at LASI Spain 2026

## Key Findings

1. **Multi-LLM diversity improves feedback quality.** AICoFE uses three independently fine-tuned LLMs (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) to generate diverse feedback perspectives from the same input data — quantitative rubric scores, validated qualitative observations, rubric level descriptions, and instructional materials. Each model produces independent drafts that the teacher can inspect and curate.

2. **Teacher mediation is central, not an afterthought.** Rather than automating feedback end-to-end, the system positions educators as active curators. The teacher dashboard enables instructors to compose final feedback by **selecting individual sentences or paragraphs** from AI outputs, with a visual legend indicating the proportion of content contributed by each LLM. This preserves pedagogical judgment while reducing feedback workload.

3. **Dual-purpose transparency supports both practice and research.** The system tracks the extent of teacher modification and curation, serving simultaneously as (a) a reflection tool for individual instructors examining their curation patterns, and (b) a dataset for large-scale analysis of the teacher mediation role in AI-assisted feedback.

4. **Role-specific dashboards close the feedback loop.** The student dashboard provides access to video recordings of presentations, self-evaluation rubrics, visual comparisons of self vs. external evaluations, teacher-curated AI feedback, and the ability to rate perceived agreement and usefulness — completing a full assessment-for-learning cycle.

## Implications

AICoFE addresses a critical tension in [[automated-feedback]]: the trade-off between efficiency and pedagogical authority. By adopting a [[human-in-the-loop-ai]] architecture rather than full automation, it demonstrates that AI can accelerate feedback workflows without displacing the teacher's interpretive role. This aligns with emerging best practices in [[ai-feedback-quality]] research, which increasingly emphasizes teacher agency over raw automation.

The multi-LLM pipeline is a practical response to the observation that different models excel at different dimensions of feedback — tone, specificity, actionability. Rather than selecting a single "best" LLM, AICoFE treats model diversity as a feature, surfacing complementary perspectives that the teacher can synthesize. This approach parallels work in [[ai-peer-feedback-systems]] that leverages multiple AI-generated perspectives for richer formative assessment.

The [[learning-analytics-dashboards]] component of AICoFE is notable for its role-specific design: teacher and student dashboards serve fundamentally different functions within the same platform, and the system's transparency features (source attribution, curation tracking) support both reflective practice and [[learning-analytics]] at scale.

For [[higher-ed]] institutions facing growing assessment loads, AICoFE models a path where AI-assisted feedback scales without sacrificing the relational and interpretive dimensions of effective [[formative-assessment]].

## Citation

Summer, V.A.A.L.S.A., |, M.P., |, M.R.L.A.D.F., |, M.H.D.I.M., |, G.M.M.P.F.P.F.S., |, M.V.C.O.S.P., 3.1, M.U.G.G.F.L., & providers, P.A.D.A.B.T.T.C.L. (2026). *AICoFE: AI-Powered Feedback System*

## Related Pages

- [[automated-feedback]] — Broader landscape of AI-generated feedback in education
- [[human-in-the-loop-ai]] — Architectures that keep human judgment central to AI workflows
- [[ai-feedback-quality]] — Research on what makes AI-generated feedback effective
- [[ai-peer-feedback-systems]] — AI systems that augment peer feedback processes
- [[learning-analytics-dashboards]] — Visual interfaces for educational data and feedback
- [[higher-ed]] — Institutional context for large-scale feedback challenges
- [[formative-assessment]] — Assessment paradigms emphasizing learning over grading
- [[ai-generated-feedback-higher-ed]] — AI feedback specifically in university contexts
