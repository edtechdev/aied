---
title: "Confident but absent: AI use, self-efficacy for independent learning, and student absenteeism in higher education"
created: "2026-10-05T10:22:00-04:00"
updated: "2026-10-05T10:22:00-04:00"
type: article
sources: ['raw/papers/confident-but-absent-ai-use-absenteeism-2026.md']
confidence: medium
page_kind: [synthesis]
research_method: [survey, structural equation modeling]
audience: [researchers, instructors, administrators]
pedagogy: [self-efficacy, self-regulated-learning, social-norms-ai-use, student-engagement]
technology: [generative-ai]
assessment: [self-report-measures]
methods: [quantitative-research]
foundations: [theories-and-frameworks]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-05"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A cross-sectional survey of 291 Portuguese university students, analyzed with partial least squares structural equation modeling (PLS-SEM), asks whether general AI use travels with students' sense of [[self-efficacy|self-efficacy for independent learning]] and with their absence from in-person classes. Drawing on digital displacement theory alongside locus of control and self-efficacy theory, the model explains 38.7% of the variance in absenteeism and 34.4% in self-efficacy. General AI use was positively associated with both — self-efficacy (β = 0.266) and absenteeism (β = 0.148) — which is the paper's "confident but absent" pattern. The association with absenteeism is small (f² = 0.029) and secondary to [[social-norms-ai-use|peer influence]] (β = 0.510) and time management (β = −0.163). Self-efficacy itself did not predict absenteeism (β = −0.068, p = 0.276). The design is a single-country, self-report, cross-sectional survey, so it supports association claims only: the paper is explicit that it cannot show AI caused either confidence or absenteeism, and it did not measure whether AI was used as a complement to or a substitute for in-person learning.

## Key Findings

1. General AI use was positively associated with self-efficacy for independent learning (H4a: β = 0.266, p = 0.000, f² = 0.106) and, separately, with absenteeism (H4b: β = 0.148, p = 0.001, f² = 0.029). The authors call the absenteeism association modest and secondary.
2. Internal locus of control was the strongest correlate of self-efficacy (H1: β = 0.382, p = 0.000, f² = 0.210).
3. [[social-norms-ai-use|Peer influence]] was the strongest correlate of absenteeism (H2b: β = 0.510, p = 0.000, f² = 0.326 — a medium effect) and also predicted self-efficacy (H2a: β = 0.145, p = 0.012, f² = 0.021).
4. Time management lowered absenteeism (H3c: β = −0.163, p = 0.001) and raised self-efficacy (H3b: β = 0.219, p = 0.000).
5. The hypothesized moderator ran the other way: time management weakened, rather than strengthened, the locus-of-control–self-efficacy link (H3a: β = −0.159, p = 0.001), so H3a was not supported.
6. Self-efficacy for independent learning did not predict absenteeism (H5: β = −0.068, p = 0.276, f² = 0.005). Seven of the nine hypotheses were supported.
7. The model explained 38.7% of the variance in absenteeism and 34.4% in self-efficacy; predictive relevance was positive for both (Q²predict = 0.371 for absenteeism and 0.297 for self-efficacy).
8. In multigroup analysis by gender, only one path difference reached the conventional 5% level: the AI-use–self-efficacy link was stronger among males (Δβ = −0.289, p = 0.013; female β = 0.159, male β = 0.449). The authors label all gender findings exploratory.

## How the study was built

Data came from an online questionnaire fielded between January 20 and February 25, 2025, distributed by snowball sampling; 291 valid responses were analyzed. The sample was 170 female (58%) and 121 male (42%) students, 221 of them aged 18-24. All items used a seven-point scale from 1 (totally disagree) to 7 (totally agree). Self-efficacy for independent learning was modeled as a second-order formative construct built from four first-order dimensions — mastery experience, vicarious experience, verbal persuasion, and emotional state — using a disjoint two-stage approach. Analysis used SmartPLS 4, with bootstrapping over 5000 subsamples.

Two measurement choices shape how the results should be read. The AI-use construct captured general reliance on AI tools such as ChatGPT and adaptive learning platforms, not distinct forms of use; and internal locus of control was measured with only two items, a deliberately narrow internal-control orientation rather than the full multidimensional locus-of-control construct.

## What the "confident but absent" pattern does and does not show

The AI-use construct is unidimensional and mixes support-oriented items with one more substitution-oriented item ("AI tools provide me all the information I need," which loaded at 0.759 against 0.931 and 0.953 for the other two). Because of that, the authors state plainly that the results are not direct evidence that AI functions as either a complement to or a substitute for in-person learning. The paper's own explanation of a mechanism — perceived substitutability, perceived value of attending, and affective engagement — was not measured in this design and is offered as an interpretive avenue for future research.

The paper is equally explicit about direction. Because the data are cross-sectional and self-reported, it cannot establish whether AI use increases absenteeism or whether students who are already disengaged rely more on AI; both are described as plausible. The association may also be confounded by unmeasured factors the authors name: illness, commuting difficulties, employment obligations, access to lecture recordings, course engagement, and perceived instructional quality.

## Gender comparisons are exploratory

The multigroup analysis used the MICOM procedure and established only partial measurement invariance, which permits comparing path coefficients but not construct means and variances. At a 10% threshold four relationships differed by gender, but only the AI-use–self-efficacy path reached the 5% level (Δβ = −0.289, p = 0.013; a permutation test gave p = 0.026). The remaining differences — including internal locus of control, peer influence, and time management — are described as preliminary patterns rather than confirmed subgroup effects.

## What this means for practice

- **Treat AI use as tied to attendance as well as to confidence.** The same construct was positively associated with both self-efficacy and absenteeism, so a strategy that only asks whether AI improves students' confidence misses the attendance side of the pattern.
- **Work peer norms.** Peer influence was the strongest correlate of absenteeism (β = 0.510, f² = 0.326), far ahead of AI use (f² = 0.029), which points to the social side of class attendance rather than the technological side.
- **Support time management, not just motivation.** Time management was associated with both lower absenteeism and higher self-efficacy, and the unexpected negative interaction (H3a) suggests structured routines may compensate for dispositional control rather than simply reinforce it.
- **Do not read confidence as attendance.** Self-efficacy did not predict absenteeism, so building independent-learning confidence is not a route to better attendance in this model.
- **Hold the claims at the level of association.** The paper cannot say AI caused either outcome, and it cannot separate complementary from substitutive AI use.

## Limitations

- The data are cross-sectional and self-reported, so no causal or directional claim holds; the authors note the association could run either way and call for longitudinal or time-lagged designs and objective attendance or usage records.
- The sample is 291 university students in Portugal only, so differences in digital infrastructure, academic culture, and institutional policy limit generalization to other contexts.
- Internal locus of control was measured with two items, a narrow internal-control orientation that does not capture the full multidimensional locus-of-control construct.
- The AI-use construct measures general perceived reliance and mixes one substitution-oriented item with two support-oriented items, so the study cannot distinguish complementary from substitutive AI use.
- The gender multigroup analysis rests on partial, not full, measurement invariance and modest subgroups; only one path reached the 5% threshold and the rest are exploratory.
- The paper states that the cognitive and affective mechanisms it discusses — perceived substitutability, perceived value of attending, and affective engagement — were not measured and are advanced only as avenues for future research.

## Citation

Franco, J., Naranjo-Zolotov, M., & Oliveira, T. (2026). [Confident but absent: AI use, self-efficacy for independent learning, and student absenteeism in higher education](https://doi.org/10.1016/j.jjimei.2026.100449). *International Journal of Information Management Data Insights, 6*, 100449.