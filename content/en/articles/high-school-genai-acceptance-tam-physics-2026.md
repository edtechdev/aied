---
title: "Modeling high school students' acceptance of GenAI for physics learning via an extended technology acceptance model: Disciplinary beliefs as a distal antecedent"
created: "2026-10-23T08:02:36-04:00"
updated: "2026-10-23T08:02:36-04:00"
type: article
sources: ['raw/papers/10.1103_62m6-lkh7.md']
confidence: medium
research_method: [survey, structural equation modeling]
methods: [quantitative-research]
discipline: [physics education]
level: [secondary, k 12]
audience: [instructors, researchers]
technology: [generative-ai, technology-acceptance-model]
pedagogy: [motivation, self-efficacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-23"
    agent: hermes-agent
---

> **Synthesis:** Xue, Xu, Qi, and Lu (2026) asked why Grade 10 students in a Chinese public high school accept or reject [[generative-ai|GenAI]] for [[physics-education|physics]], and answered with a 340-student structural equation model that bolts expectancy-value theory onto the [[technology-acceptance-model|technology acceptance model]]. The TAM core replicates cleanly — perceived ease of use, perceived usefulness and attitude between them explain 58% of the variance in intention to use DeepSeek — but the paper's contribution is what happens when subject-specific motivational beliefs are added as [[motivation|distal antecedents]] of the technology perceptions rather than as further predictors of intention. Utility value predicts perceived usefulness at β = 0.43; [[self-efficacy|expectancy for success]] predicts perceived ease of use at β = 0.39; perceived cost pushes both ease of use (β = −0.16) and attitude (β = −0.27) down. Nested comparisons put a number on the extension: adding the three task values raises the explained variance in perceived usefulness from 0.475 to 0.626, and the core TAM paths attenuate — ease of use to usefulness from 0.656 to 0.524 — while staying significant, which the authors read as a redistribution of explanatory weight rather than a replacement of TAM.

## Key Findings
1. **Subject-specific beliefs predict the technology perceptions, not just the intention.** Expectancy for success in physics predicts perceived ease of use (β = 0.39, p < 0.001), utility value predicts perceived usefulness (β = 0.43, p < 0.001), and intrinsic value predicts attitude (β = 0.20, p = 0.004).
2. **The task-value extension carries the most incremental explanatory power.** Adding intrinsic, attainment and utility value raises R² for perceived usefulness from 0.475 to 0.626 (ΔR² = +0.151) and for attitude from 0.575 to 0.644.
3. **Cost works through the technology perceptions, not around them.** Perceived cost lowers perceived ease of use (β = −0.16, p = 0.008) and attitude (β = −0.27, p < 0.001), but its direct path to behavioral intention is null (β = 0.02, p = 0.760).
4. **None of the five beliefs reaches intention directly.** Every belief-to-intention path is null (β from 0.02 to 0.13), while the same beliefs reach ease of use, usefulness and attitude — they shape the TAM chain rather than bypassing it.
5. **The core TAM paths attenuate but survive the extension.** Ease of use to usefulness falls from 0.656 in the pure-TAM model to 0.524 in the full model, and usefulness to attitude from 0.458 to 0.283, with all core paths remaining significant.
6. **Intention alone hides two different uses.** In a follow-up cohort of 68 students, the same stated intention covered learning-oriented, shortcut-oriented and mixed use, and students who used DeepSeek as a shortcut explained it through low confidence and topic difficulty rather than disinterest.

## The model that was tested

The design is a nine-construct SEM estimated in [[quantitative-research|lavaan]] with maximum likelihood: four TAM constructs (perceived usefulness, perceived ease of use, attitude, behavioral intention) and five expectancy-value constructs (expectancy for success, intrinsic value, attainment value, utility value, perceived cost). Sixteen hypotheses were specified before estimation, with four nested models compared afterwards — pure TAM, then expectancy, then the three task values, then cost.

The sample is 340 valid questionnaires from 351 distributed (a 96.9% effective response rate) among Grade 10 students at one public, nonelite, nonspecialized high school in Hangzhou, drawn as eight of the sixteen [[k-12|Grade 10]] classes because their physics teacher had integrated DeepSeek into at least one instructional unit. The instrument is anchored on DeepSeek throughout rather than on "generative AI" as a category — the authors' argument being that students should evaluate a tool they have actually used — translated into Chinese and back-translated using Brislin's protocol. Reliabilities run from 0.77 to 0.83 across the nine scales.

Fit is acceptable rather than excellent, and the authors report it that way: χ²(534) = 854.36, χ²/df = 1.60, CFI = 0.934, TLI = 0.927, RMSEA = 0.042, SRMR = 0.049, GFI = 0.862. The CFI and TLI clear 0.90 but fall short of 0.95, which is worth holding onto when reading the path estimates as precise.

## What the incremental analysis adds

The methodological move worth borrowing is the nested comparison. Because the four models add predictor sets rather than being strictly statistically nested, the authors compare fit and R² descriptively and run no χ² difference tests — a limitation they state rather than paper over. The result is the paper's most transferable claim: the largest gain comes from the task values, and it lands on perceived usefulness (ΔR² = +0.151) rather than on intention, so the beliefs reshape how students read the tool instead of determining whether they say they will use it.

The attenuation analysis is the same argument in another form. As disciplinary beliefs enter, ease of use to usefulness drops from 0.656 to 0.524 and usefulness to attitude from 0.458 to 0.283, and because every core path stays significant, the authors read the shift as weight moving from technology-level to discipline-level beliefs. That reading assumes the beliefs are causally upstream, which a cross-sectional model cannot establish — the authors concede the reverse story, that capable students simply feel less need for a tool, is untested.

The supplementary work addresses a measurement problem the survey cannot: a single intention score cannot distinguish a student using DeepSeek to understand physics from one using it to skip the physics. In a follow-up cohort of 68 students — plus eight semistructured and six cognitive interviews — the shortcut users described low confidence and hard topics rather than disinterest in physics, which reframes at least some apparent misuse as a self-efficacy problem.

## What this means for practice

- **Instructors.** Do not read a low uptake of a GenAI tool as technophobia. In this model, whether a student finds the tool useful depends on whether they see physics as useful to them, so a class that values the subject for its own sake and a class that sees it as a gatekeeper will read the same tool differently — the [[discipline-specific-aied|discipline-specific]] framing the authors argue for.
- **Researchers.** Borrow the two-stage structure — subject-specific beliefs as antecedents of perceived usefulness and ease of use, then the TAM chain to intention — rather than adding motivational variables alongside the TAM predictors, where they mostly wash out.
- **Instructors.** Watch the students who report low confidence: they are the ones most likely to convert the tool into a shortcut, and they are also the ones who will report the same intention to use it as everyone else.

## Limitations

- One public, nonelite, nonspecialized high school in Hangzhou, eight of sixteen Grade 10 classes, and the authors state the findings are most relevant to similar nonselective public schools.
- Cross-sectional [[self-report-measures|self-report]] at a single time point: the causal order between disciplinary beliefs and technology perceptions is assumed, and the reverse explanation — capable students needing less assistance — cannot be excluded.
- The nested comparison is descriptive rather than a formal test: the four models are nested in predictor sets rather than statistically, so no χ² difference tests were run and the ΔR² values should not be read as significance tests.
- The follow-up evidence is modest and purposive — n = 68 for the survey and eight interviews — and because the main survey was anonymous, individual SEM scores could not be linked to follow-up responses.
- Everything is anchored on DeepSeek and on physics, so the estimates transfer to neither another tool nor another subject without replication; measures are self-report throughout, with no behavioral log of actual use.

## Citation

Xue, J., W. Xu, Y. Qi, and D. Lu (2026). [*Modeling high school students' acceptance of GenAI for physics learning via an extended technology acceptance model: Disciplinary beliefs as a distal antecedent*](https://doi.org/10.1103/62m6-lkh7). Physical Review Physics Education Research 22, 020148.
