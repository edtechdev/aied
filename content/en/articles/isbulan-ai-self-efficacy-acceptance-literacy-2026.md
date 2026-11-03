---
title: "Belief to behavior: how AI self-efficacy shapes AI acceptance through AI literacy"
published: "2026-10-30"
created: "2026-11-03T10:40:00-05:00"
updated: "2026-11-03T10:40:00-05:00"
type: article
sources: ['raw/papers/isbulan-ai-self-efficacy-acceptance-literacy-2026.md']
source_url: "https://doi.org/10.1057/s41599-026-09615-5"
confidence: high
page_kind: [evaluation]
research_method: [survey]
level: [higher ed]
audience: [researchers, instructors, administrators]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-03"
    agent: hermes-agent
source_depth: full text
foundations: [ai-literacy]
pedagogy: [self-efficacy, motivation, anxiety-and-stress]
technology: [technology-acceptance-model]
methods: [quantitative-research]
---

> **Synthesis:** İşbulan, Uysal, Caylan Ergene and Ergene surveyed 622 undergraduates at a public university in Türkiye and tested a sequence in which motivational belief comes first, [[ai-literacy|AI literacy]] carries part of the effect, and [[technology-acceptance-model|AI acceptance]] follows: [[self-efficacy|AI self-efficacy]] predicted acceptance directly (B = 0.43, R² = 0.29) and indirectly through literacy (indirect effect B = 0.15, 95% CI [0.12, 0.19]), and acceptance was in turn negatively associated with [[anxiety-and-stress|AI anxiety]] (B = −0.34, R² = 0.05). The design is cross-sectional and self-report, so the authors read the paths as associations rather than causes — they say the acceptance–anxiety link may run either way. Gender and academic year were not entered as controls, and the sample was 79.6% female and drawn from one institution; the authors name each of these as a limit rather than adjusting for it.

## Key Findings

1. **Self-efficacy is the strongest predictor in the model.** AI self-efficacy predicted AI acceptance with B = 0.43 (SE = 0.02, t = 15.80, 95% CI [0.37, 0.48]), explaining 28.7% of the variance (R² = 0.29, p < 0.01). The authors read confidence with AI as a motivational precondition of adoption rather than a by-product of using it.
2. **AI literacy carries part of that effect, not all of it.** The indirect path through literacy was significant under a bias-corrected bootstrap with 5,000 resamples (B = 0.15, SE = 0.018, 95% CI [0.12, 0.19]), and the direct path stayed significant, so the study describes partial mediation: knowledge explains some of the confidence–acceptance relationship and something else explains the rest.
3. **The correlation pattern is consistent but not redundant.** Self-efficacy correlated r = 0.42 with AI literacy and r = 0.54 with AI acceptance; AI literacy correlated r = 0.59 with acceptance, the strongest bivariate association in the study. Literacy is the closest correlate of acceptance while still being distinguishable from confidence.
4. **Acceptance and anxiety move in opposite directions, weakly.** AI acceptance was negatively associated with AI anxiety (B = −0.34, SE = 0.06, 95% CI [−0.46, −0.22]) but explained only 4.8% of its variance, and the authors warn explicitly against reading the sign as causal because students with lower initial anxiety may simply be more willing to accept AI.
5. **The measures were adapted, validated Turkish scales.** AI Self-Efficacy (21 items, adapted from Wang and Chuang), AI Acceptance (20 items across four factors, built on UTAUT), AI Literacy (12 items across four dimensions, from Wang et al.) and AI Anxiety (21 items) — with in-sample reliability of 0.87, 0.90, 0.77 and 0.92 respectively. Harman's single-factor test accounted for 20.17% of variance, which the authors report against common-method bias.
6. **The sample is larger than the analysis needs.** Of 740 students invited, 669 completed the survey (90.4%); 47 were removed for straight-lining or extreme z-scores beyond ±3.29, leaving 622. A power analysis put the requirement at roughly 485 participants for a small effect (f² = 0.02) at 80% power, so the study reports about 89.3% power for that effect size.

## What this means for practice

The contribution is a *sequence* rather than a single correlation: motivational belief, then knowledge, then acceptance, then affect. That ordering is the part a curriculum can act on, because confidence-building and literacy instruction are separate design choices the model links into one chain.

- **Build confidence with scaffolded practice, not with encouragement alone.** The self-efficacy path is the strongest in the model, and the authors' recommendation is mastery-oriented demonstration and guided practice rather than messaging about AI's value.
- **Treat literacy as the bridge, not the substitute.** Because the mediation is partial, literacy instruction moves acceptance while leaving a direct path that literacy does not explain — a course that only teaches concepts leaves the confidence route untouched, and one that only builds confidence leaves knowledge out.
- **Keep the pressure low on first contact.** The acceptance–anxiety association is weak (R² = 0.05) and non-causal, so it supports gradual, low-stakes entry rather than claims that acceptance training reduces anxiety.
- **Do not present these paths as measured effects of an intervention.** The recommendations are inferences from a cross-sectional survey; nobody in this study received the curriculum the paper recommends.

## Limitations

- **Cross-sectional by design.** The authors state that causal interpretation is not available, and flag the acceptance–anxiety path as plausibly bidirectional.
- **One institution, convenience sampling, skewed gender split.** 79.6% of participants were women, and the sample came from a single public university, so generalization across institutions, disciplines and cultures is limited by the authors' own account.
- **No demographic controls.** Gender and academic year were left out of the mediation model, so the paths are unadjusted for two variables the authors expect to matter.
- **Self-report throughout.** AI literacy in particular is measured by agreement with statements about capability; the authors call for performance-based literacy measures and behavioral indicators of AI use in future work.

## Citation

İşbulan, O., Uysal, M., Caylan Ergene, B., & Ergene, O. (2026). [*Belief to behavior: how AI self-efficacy shapes AI acceptance through AI literacy*](https://doi.org/10.1057/s41599-026-09615-5). Humanities and Social Sciences Communications.
