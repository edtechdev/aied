---
title: "The Impact of Generative Artificial Intelligence on Learning Outcomes in Higher Education: A Meta-Analysis"
created: "2026-09-25T20:37:50-04:00"
updated: "2026-09-25T21:52:24-04:00"
type: article
published: "2026"
foundations: [ai-education, critical-thinking]
pedagogy: [problem-solving, student-engagement]
technology: [generative-ai]
methods: [meta-analysis-systematic-review]
ethics: [equity-in-ai-education]
research_method: [literature review]
level: [higher ed, undergraduate]
audience: [instructors, researchers, policymakers]
page_kind: [synthesis]
sources: ['raw/papers/jing-genai-learning-outcomes-higher-ed-meta-analysis-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** This [[meta-analysis-systematic-review|meta-analysis]] pools 35 experimental and quasi-experimental studies published between 2022 and 2024 to estimate how [[generative-ai]] affects undergraduates' learning outcomes across three dimensions: academic performance, professional skills and emotional attitude. Across 175 effect sizes the pooled effect was g=0.53 (95% CI [0.48, 0.64]), largest for professional skills (g=0.72), then academic performance (g=0.46) and emotional attitude (g=0.44). Effects were not uniform: intervention duration moderated all three dimensions, while GenAI interaction method and teaching model moderated academic performance and emotional attitude but not professional skills. Discipline type and learning method were not significant moderators. The very large estimates from short interventions and small subgroups are treated as descriptive rather than generalizable, and the authors caution against reading GenAI as a uniform boost across teaching contexts. They also report that possible publication bias, funnel-plot asymmetry and small-study effects should be considered when interpreting the academic performance and professional skills findings.

## Key Findings

- GenAI had a moderate-to-large positive effect on undergraduates' learning outcomes overall: g=0.53 (95% CI [0.48, 0.64]) across 175 effect sizes from 35 experimental and quasi-experimental studies.
- Professional skills gained most (k=45, g=0.72, 95% CI [0.52, 0.93]), ahead of academic performance (k=81, g=0.46, 95% CI [0.32, 0.61]) and emotional attitude (k=49, g=0.44, 95% CI [0.22, 0.67]).
- Intervention duration significantly moderated all three dimensions: academic performance fell from g=5.07 at 0 to 4 weeks to g=0.01 beyond 12 weeks (Q=35.19, p<0.001).
- Teaching model moderated academic performance (Q=14.63, p=0.001): flipped classrooms produced g=1.96 from 7 effect sizes, traditional classrooms g=0.46 and self-directed learning g=0.26.
- Discipline type and learning method did not significantly moderate any dimension, and fail-safe N values of 3767, 3096 and 2657 suggest the pooled findings are unlikely to be overturned by unpublished null results.

## How the evidence base was assembled

The search covered Web of Science Core Collection, EBSCO (ERIC) and Scopus for English-language, peer-reviewed studies published between January 2022 and 30 November 2024. It returned 1656 records; after screening and applying the inclusion criteria, 35 studies remained. Rather than the usual cognitive and non-cognitive split, the authors coded three outcome dimensions for [[higher-ed|higher education]] students: academic performance, professional skills ([[problem-solving]], [[critical-thinking|critical thinking]], design and programming) and emotional attitude. Heterogeneity was high (I2 = 96.67%, 84.15% and 93.62% for the three dimensions), so a random-effects model was used with Hedges' g as the effect size. All included studies were quantitative empirical work with pre- and post-tests or with experimental and control groups, and each provided complete data for effect size calculation.

## What GenAI improves, and by how much

The pooled estimates describe a positive but uneven picture. Academic performance was close to a moderate effect (g=0.46, 95% CI [0.32, 0.61]), professional skills was moderate to large (g=0.72, 95% CI [0.52, 0.93]) and emotional attitude was close to moderate (g=0.44, 95% CI [0.22, 0.67]). The authors read the ranking as evidence that GenAI supports knowledge application and skill practice more strongly than knowledge internalization, and they estimate that an average student receiving a GenAI intervention would outperform roughly 69% of students in a non-GenAI comparison group. Leave-one-out sensitivity analysis kept the estimates stable across all three dimensions.

## Context decides how large the effect is

Moderation analysis showed that context, not the tool alone, decides the size of the effect. Intervention duration moderated all three dimensions: academic performance fell from g=5.07 at 0 to 4 weeks to g=0.64 at 4 to 12 weeks and g=0.01 beyond 12 weeks (Q=35.19, p<0.001); emotional attitude peaked at g=2.05 at 4 to 12 weeks and fell to g=0.18 beyond 12 weeks (Q=25.85, p<0.001). Teaching model moderated academic performance (Q=14.63, p=0.001), where flipped classrooms reached g=1.96 against g=0.46 for traditional classrooms and g=0.26 for [[self-directed-learning]], and it moderated emotional attitude (Q=10.55, p=0.005), where traditional classrooms led at g=0.77 and self-directed learning trended negative (g=−0.20, p=0.453). For professional skills only duration mattered, suggesting that timing and pacing outweigh the choice of teaching model.

## What this means for practice

- Match the tool to the objective: for professional skills, prioritize simulation practice, project tasks and instant feedback; for academic knowledge, use GenAI for [[personalized-learning|personalized tutoring]], concept explanation and resource integration.
- Plan the timeline deliberately: benefits clustered in interventions of up to 12 weeks, while estimates beyond 12 weeks were g=0.01 for academic performance and g=0.18 for emotional attitude.
- Keep teacher guidance and peer interaction in the design: self-directed GenAI use without them produced the weakest academic gain (g=0.26) and a negative emotional attitude estimate (g=−0.20).
- Treat teacher AI instructional competency and ethical governance (privacy, [[academic-integrity|academic integrity]], equitable access) as the policy priority rather than tool procurement alone.

## Limitations

- Publication bias diagnostics were mixed: Egger's tests were significant for academic performance (5.42, 95% CI [3.29, 7.55]) and professional skills (6.70, 95% CI [3.00, 10.41]), so funnel-plot asymmetry or small-study effects cannot be ruled out.
- Outcome measures come from the original studies and are mostly short-term standardized tests, which may miss deeper competencies such as innovative thinking and lifelong learning, and the 2022 to 2024 window captures only early-stage GenAI use.
- Risks that the effect sizes do not capture, including over-reliance, weakened [[critical-thinking|critical thinking]], hallucinations, data privacy and inequitable access to high-cost tools, fall outside the pooled estimates.

## Connected Concepts

- [[generative-ai]]
- [[meta-analysis-systematic-review]]
- [[problem-solving]]
- [[critical-thinking]]
- [[self-directed-learning]]
- [[equity-in-ai-education]]
## Connected Articles

- [[ai-education-effects-second-order-meta-analysis-2026]] — a second-order meta-analysis pooling earlier AI-in-education meta-analyses, which supplies the wider reference range for the effect sizes reported here.
- [[zhao-genai-higher-order-thinking-meta-2026]] — a meta-analysis of GenAI's effects on higher-order thinking, complementing this page's professional skills dimension.
- [[genai-educational-outcomes-meta-analysis]] — a comprehensive GenAI outcomes meta-analysis comparing traditional and AI-driven approaches, useful for checking whether these pooled estimates agree.
- [[flipped-learning-genai-design-education-2026]] — a course-level study of flipped learning with GenAI, the classroom design that produced this meta-analysis's strongest academic performance estimate.

## Citation

Jing, Yuhui; Wang, JunYi; Wang, PeiJun; Xu, Jun. (2026). *[The Impact of Generative Artificial Intelligence on Learning Outcomes in Higher Education: A Meta-Analysis](https://doi.org/10.1002/jcal.70329)*. Journal of Computer Assisted Learning, 42, e70329. https://doi.org/10.1002/jcal.70329