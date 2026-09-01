---
title: "Can EdTech Close Learning Gaps? Global Evidence from Digital Interventions"
created: "2026-08-24T11:55:00-04:00"
updated: "2026-08-24T11:55:00-04:00"
type: article
tags: [meta-analysis-systematic-review, rct, learning-gains, intelligent-tutoring, adaptive-learning, generative-ai, k-12, equity-in-ai-education, ai-ed-evaluation]
research_method: [meta-analysis, systematic review, randomized controlled trial, learning analytics]
level: [k 12]
category: [evaluation]
sources: ['raw/papers/burneo-can-edtech-close-learning-gaps-2026.md']
confidence: high
---

> **In brief:** A World Bank [[meta-analysis-systematic-review|systematic review]] and meta-analysis pools 191 effect sizes from 14 randomized trials across ten economies to estimate that adaptive and AI-enabled educational technology raises student learning by an average of **0.125 standard deviations** relative to traditional instruction — above the median effect for education RCTs and within the range Kraft (2020) calls "large" for field experiments. Crucially, the newer generative-AI tools show **no advantage over the adaptive software that preceded them**, and gains are driven less by which technology is used than by whether it is embedded in a sound instructional strategy.

The review brings two "generations" of adaptive educational technology into a common framework under common [[inclusive-learning|inclusion]] criteria and on a common effect-size scale: first-generation tools that select from content authored in advance ([[adaptive-learning|adaptive computer-assisted learning]], [[intelligent-tutoring|intelligent tutoring systems]] such as Mindspark), and second-generation [[generative-ai|generative AI]] tools that generate instructional content at the point of use (Rori in Ghana, GPT-based tutors in Türkiye). Using robust variance estimation (RVE) meta-regression, the authors retain every extracted outcome per study rather than one estimate each — a [[research-methods-aied|methodological]] choice that matters because within-study variation across outcome measures is as wide as variation across studies.

The pooled learning effect of 0.125 sd holds at primary and [[k-12|secondary]] levels, in high- and middle-income countries, across tutoring systems, computer-assisted learning platforms, and teacher-facing tools, and across both technological generations. The estimated differential for generative over first-generation tools is only 0.022 sd (SE 0.075), an interval wide enough to bound rather than resolve the comparison: the experimental record to date shows **no advantage for the newer technology**. Gains on socio-emotional outcomes are positive but roughly a quarter the size (0.029 sd, from only five papers), and the review cannot reject the null for [[pedagogy|teaching practices]] (three studies). Among AI-powered tutoring interventions specifically, the average effect is 0.12 sd — below the 0.288 sd Nickow et al. (2024) report for human tutoring, but at a small fraction of its cost.

Two features of the evidence base sharply limit what these estimates can justify. The sample is narrow: no included study was conducted in a low-income country, researchers were involved in implementing 16 of 19 interventions, and none was implemented by a government alone — so behavior under public delivery at scale is essentially unobserved. And only two or three studies report per-student costs on a comparable basis, so the field's motivating claim that [[personalized-learning|personalization]] can be delivered at a fraction of the cost of human tutoring has almost never been measured alongside the effects it is meant to justify.

## Key Findings

- **Adaptive and AI-enabled EdTech raises learning by ~0.125 sd** on average across 191 effect sizes from 14 RCTs in ten economies — above the median (0.10 sd) for education interventions evaluated by [[rct|randomized trial]], and within the range Kraft (2020) reads as large for broad-achievement field experiments.
- **Generative AI shows no advantage over earlier adaptive software.** The differential for second-generation tools is 0.022 sd (SE 0.075), an interval [−0.15, 0.19] wide enough to bound the comparison rather than resolve it; the experimental record to date shows no advantage for the newer technology.
- **Effects are consistent across education levels and income contexts** — primary (0.137 sd) and secondary (0.135 sd) are nearly identical, and high- vs. middle-income differences are not statistically significant.
- **AI-powered tutoring averages 0.12 sd**, below the 0.288 sd pooled effect for human tutoring (Nickow et al., 2024) but at a small fraction of its cost; the strongest results come from tutoring embedded in a broader instructional strategy with clear objectives, [[curriculum-design|curriculum]] alignment, and safeguards against misuse.
- **Gains do not extend equally to other outcomes:** socio-emotional/behavioral effects are ~0.029 sd (a quarter of the learning effect, five papers), and teaching-practice effects are indistinguishable from zero (three studies).
- **The evidence base is narrow and [[educational-policy-ai|policy]]-relevant gaps remain:** no low-income-country study, researcher-heavy implementation, no government-alone implementation, and cost data in only ~2–3 of 14 studies.
- **Dosage does not order the estimates** — cumulative exposure varies over two orders of magnitude without mapping onto the ranking of effects; within-study measure choice shifts an estimate as much as the study chosen (one ITS's four estimates spanned 0.60 sd).

## Connected Concepts

- [[learning-gains]] — the primary outcome domain and the review's organizing metric
- [[adaptive-learning]] — the shared feature of all included interventions
- [[intelligent-tutoring]] — first-generation adaptive tutors and the AI-tutoring subgroup
- [[generative-ai]] — the second-generation tools whose differential is estimated
- [[rct]] — the inclusion criterion and evidence hierarchy
- [[personalized-learning]] — the personalization promise motivating the literature
- [[cognitive-offloading]] — the "effort substitution" mechanism behind the Türkiye harm finding
- [[reducing-ai-misuse]] — the guardrails that removed the harm without improving scores
- [[equity-in-ai-education]] — the digital-divide and no-low-income-setting limitation
- [[digital-divide]] — infrastructure requirements that bind in the settings with largest deficits
- [[k-12]] — the preK–12 study population
- [[ai-ed-evaluation]] — meta-analytic evaluation of AI education tools
- [[educational-measurement]] — standardized effect-size aggregation and RVE methodology

## Connected Articles

- [[genai-educational-outcomes-meta-analysis]] — a complementary meta-analysis comparing traditional vs. AI-driven approaches
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — an experiment on virtual tutoring with computer-assisted learning
- [[genai-meta-analysis-programming-learning]] — meta-analytic evidence on GenAI in a disciplinary context

## Citation

Burneo, A., Dinarte-Diaz, L., Lopez, C., & Molina, E. (2026). [*Can EdTech close learning gaps? Global evidence from digital interventions*](https://documents.worldbank.org/). World Bank Policy Research Working Paper.
