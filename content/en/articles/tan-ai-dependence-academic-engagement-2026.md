---
title: "AI dependence and academic engagement among Chinese university students: a three-wave longitudinal conditional process study of self-efficacy and physical activity"
created: "2026-11-18T09:40:00-05:00"
updated: "2026-11-18T09:40:00-05:00"
type: article
pedagogy: [self-efficacy, student-engagement]
technology: [generative-ai]
methods: [longitudinal-research]
foundations: [cognitive-offloading]
sources: ['raw/papers/tan-ai-dependence-academic-engagement-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1870626"
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [longitudinal study, survey]
level: [higher ed]
audience: [instructors, researchers]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-18"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Tan, Liu, Ma, Zhou and Zang (2026) tracked 1,068 Chinese university students across three [[self-report-measures|questionnaire]] waves — baseline, week 4 and week 8 — to test whether [[cognitive-offloading|psychological dependence]] on [[generative-ai|generative AI]] predicts later [[student-engagement|academic engagement]] through [[self-efficacy|self-efficacy for learning and performance]]. Higher baseline AI dependence was associated with lower self-efficacy four weeks later (β = −0.137), and higher week-4 self-efficacy with higher engagement at week 8 (β = 0.114), after adjusting for baseline self-efficacy, baseline engagement and AI-use frequency and duration. The standardized indirect association was small (about −0.016) and the design cannot rule out reciprocal effects, so the authors frame the finding as a short-term temporally ordered association rather than a causal mechanism. Physical activity moderated the first stage only weakly: the dependence–self-efficacy slope was −0.210 at low activity and −0.063 at high activity, an interaction that added ΔR² = 0.005.

## Key Findings

- **Dependence, not use frequency, carried the association.** With AI-use frequency and duration controlled, dependence still predicted later self-efficacy, so exposure and reliance behave as different constructs.
- **The first-stage path was negative and small.** Baseline AI dependence predicted week-4 self-efficacy, and a latent autoregressive model reproduced the same path with a confidence interval clear of zero.
- **Self-efficacy predicted later engagement.** Week-4 self-efficacy predicted week-8 engagement after baseline engagement was controlled, and the mediated association was modest.
- **A direct association remained.** Beyond the mediated path, baseline AI dependence still predicted lower engagement at week 8, which the authors read as a short-term association rather than a mechanism.
- **Physical activity was a modest boundary condition.** The interaction was significant but explained little variance, and the conditional indirect effect at high activity included zero.
- **The sample was experienced with generative AI.** Nearly all participants had used it in the past month and over two in five used it once or twice a week, so this is not a study of novice exposure.

## How the study was built

The design uses an integrated I-PACE and social cognitive frame: I-PACE treats repeated reliance on AI feedback as a reliance process that can be reinforced by short-term relief, and social cognitive theory supplies self-efficacy as the mechanism that links perceived capability to persistent engagement. Dependence was measured at baseline only with the five-item Dependence on Artificial Intelligence scale, self-efficacy at T1 and T2 with the Motivated Strategies for Learning Questionnaire, engagement at T1 and T3 with the nine-item Utrecht Work Engagement Scale–Student Version, and physical activity at T1 with the PARS-3.

Analysis used PROCESS Models 4 and 7, then two robustness checks: inverse-probability-of-completion weighting to address attrition, and a latent-variable autoregressive structural equation model. Both reproduced the core pathway, and longitudinal measurement invariance held approximately for self-efficacy and engagement. The three-factor confirmatory model fit the time-separated indicators better than one- or two-factor alternatives (CFA χ²/df = 4.12, CFI = 0.953, RMSEA = 0.054), which supports keeping dependence, efficacy and engagement empirically distinct.

## What the moderation does and does not show

The physical-activity finding is easy to over-read. The interaction was statistically significant and the pattern is monotonic: at one standard deviation below the mean the dependence–efficacy slope was −0.210, at the mean −0.137, and at one standard deviation above −0.063. But the increment in explained variance was 0.005, and the conditional indirect effect at high activity still had a confidence interval touching zero ([−0.017, 0.001]). The authors accordingly describe activity as a boundary condition that weakens the association rather than a treatment that removes it, and they note that PARS-3 is a self-reported rating that does not distinguish activity type.

The practical reading is the one their discussion offers: [[higher-ed|universities]] need not discourage AI use, but [[learning-design|course design]] can protect the mastery experiences that [[self-efficacy|efficacy beliefs]] are built from, by requiring students to explain AI-assisted output, document how the tool was used, complete parts of a task unaided, or revise AI suggestions through their own reasoning.

## What this means for practice

- **Instructors.** Build at least one unaided segment into AI-supported assignments; the mechanism the data implicate is loss of independent mastery experience, and that is what the unaided segment restores.
- **Instructors.** Ask for explanations of AI-assisted work rather than only the product, so the reasoning the student retains becomes visible to them and to you.
- **Curriculum designers.** Treat dependence as a design signal, not a student deficit: a course that makes AI confirmation necessary at every step is also producing the pattern measured here.
- **Administrators.** Do not present physical activity as an AI-dependence intervention on this evidence; the moderation is too small to carry that message.

## Limitations

- **Observational and self-reported.** Temporal ordering plus baseline adjustment does not establish causality, and all focal constructs came from questionnaires.
- **Dependence measured once.** AI dependence was assessed only at T1, so a fully reciprocal cross-lagged model could not be estimated and reverse pathways remain open.
- **Substantial attrition.** Of 1,762 eligible baseline respondents, 694 (39.4%) did not enter the complete-case analysis, and a small age association with retention remained.
- **Short follow-up.** Three waves over eight weeks capture short-term change, not longer developmental processes or persistence.
- **New instrument.** The five-item dependence scale is relatively new and was adapted to a Chinese learning context; convergent and criterion validity are not yet established.
- **Regional sample.** Participants came from universities in two cities in central China and one in the Northeast, limiting generalizability.

## Citation

Tan, Y., Liu, S., Ma, W., Zhou, D., & Zang, L. (2026). [*AI dependence and academic engagement among Chinese university students: a three-wave longitudinal conditional process study of self-efficacy and physical activity*](https://doi.org/10.3389/fpsyg.2026.1870626). Frontiers in Psychology, 17, 1870626.
