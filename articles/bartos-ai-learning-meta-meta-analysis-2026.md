---
title: "Effect of Artificial Intelligence on Learning: A Meta-Meta-Analysis"
created: "2026-09-05T12:00:00-04:00"
updated: "2026-09-05T12:00:00-04:00"
type: article
tags: [generative-ai, llm, research-methods-aied, meta-analysis-systematic-review, limitations-in-aied-research, ai-ed-evaluation, learning-gains, critical-thinking]
sources: ['raw/papers/bartos-ai-learning-meta-meta-analysis-2026.md']
confidence: high
---

> **Effect of Artificial Intelligence on Learning: A Meta-Meta-Analysis** — A study-level meta-meta-analysis by Bartoš, Bujak, Martinková, and Wagenmakers (2026) that re-analyzes 1,840 effect sizes from 67 published [[meta-analysis-systematic-review|meta-analyses]] of AI/[[llm]] effects on learning. Using publication-bias-adjusted robust Bayesian model-averaging, they find strong evidence of severe [[limitations-in-aied-research|publication bias]] and extreme between-study heterogeneity, and estimate the bias-adjusted average effect at roughly one-third the magnitude reported in the literature (SMD = 0.196), with prediction intervals spanning large negative to large positive effects. They conclude that broad claims of generalized [[learning-gains|learning gains]] from AI/LLMs are premature and the evidence is insufficient to support policy or practice recommendations.

## Key Findings

- **Severe publication bias and extreme heterogeneity.** Across 1,840 effect sizes from 67 meta-analyses, funnel plots show a strong right skew (all Egger tests *p* < .0001), indicating suppression of null/negative results, combined with extreme between-study heterogeneity (τ = 0.869).
- **Bias-adjusted effects are ~one-third of reported estimates.** Publication-bias-adjusted model-averaged effect was SMD = 0.196 [0.000, 0.323], versus the median unadjusted pooled effect of SMD = 0.67 that dominates the published literature. Published meta-analyses substantially overestimate the average effect.
- **Wide prediction interval spanning harm to benefit.** The true effect for a *new* study is predicted to fall between −1.521 and +1.908 standard deviations — spanning extreme negative to extreme positive outcomes. An effect that small and that variable cannot justify confident deployment decisions.
- **No moderators yield consistent benefits.** Subgroup analyses by outcome type (academic achievement, cognition, language, emotion, motivation), educational field/level, and AI role (tutor, partner, tool) failed to substantially reduce heterogeneity or identify subgroups with reliable gains.
- **No difference pre- vs. post-ChatGPT.** There was no substantial difference between studies published before vs. after January 2023, undercutting claims that modern [[generative-ai|LLM]] tools specifically produce gains.
- **Heterogeneity means new studies add almost no information.** An additional infinite-size study would add fewer than three observations' worth of effective sample size given the existing heterogeneity — so accumulating more studies of the current type will barely move estimates. The authors recommend high-quality, large-scale pre-registered studies and registered replication reports analyzed separately.
- **Direct implications for meta-[[research-methods-aied|research]] quality.** Reporting quality was poor enough that effect sizes could not be recovered from 7 of the meta-analyses. The results also align with re-analyses (Bardach et al.; Bartoš et al. 2025) showing that prominent positive meta-analyses like Wang & Fan (2025) — since retracted — had effects that disappear entirely under publication-bias adjustment.
- **Caveat on scope.** The estimates capture only short-term, direct effects on traditional learning measures; AI may also reshape education indirectly ([[metacognition]], instruction, feedback, assessment) in ways these metrics miss — so null/heterogeneous average effects may partly reflect measurement misalignment rather than zero educational value.

## Connected Concepts

- [[generative-ai]]
- [[llm]]
- [[research-methods-aied]]
- [[meta-analysis-systematic-review]]
- [[limitations-in-aied-research]]
- [[ai-ed-evaluation]]
- [[learning-gains]]
- [[critical-thinking]]

## Connected Articles

- [[genai-educational-outcomes-meta-analysis]] — A large meta-analysis of generative AI's effect on educational outcomes (Dong 2026)
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT in Education: An Effect in Search of a Cause
- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: forensic audit of 14 AIED meta-analyses
- [[generative-ai-guardrails-harm-learning]] — Generative AI without guardrails can harm learning (PNAS 2025 RCT)
- [[liu-ai-literacy-interventions-meta-analysis-2026]] — Meta-analysis of AI literacy intervention effects
- [[ai-literacy-assessment-misalignment]] — Self-reported vs. performance-based AI literacy

## Citation

Bartoš, F., Bujak, O. Z., Martinková, P., & Wagenmakers, E.-J. (2026). [Effect of Artificial Intelligence on Learning: A Meta-Meta-Analysis](https://doi.org/10.31234/osf.io/h529e). *PsyArXiv Preprints*.
