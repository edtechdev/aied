---
title: "Habit over intention: Generative-AI use and the displacement of human help-seeking in Philippine engineering education"
created: "2026-11-19T09:52:00-05:00"
updated: "2026-11-19T09:52:00-05:00"
type: article
evidence_context: educational
source_url: "https://doi.org/10.1016/j.caeai.2026.100696"
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-19"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [academic-integrity, cognitive-offloading]
pedagogy: [help-seeking, self-efficacy]
technology: [generative-ai, technology-acceptance-model]
ethics: [ethics]
audience: [instructors, administrators, researchers]
research_method: [survey, structural equation modeling]
discipline: [engineering education]
level: [higher ed]
sources: ['raw/papers/habit-over-intention-genai-help-seeking-engineering-2026.md']
confidence: medium
page_kind: [synthesis]
---

> **Synthesis:** Pao, Domingo and Bernardo (2026) surveyed 392 engineering students and educators in the Philippines and found that **habit, not intention, is what predicts whether people stop asking other people for help once [[generative-ai|generative AI]] is available**. Half of GenAI users said they ask a person for help less often, and fewer than one in six named a human as the first resource they turn to when stuck. [[academic-integrity|Academic integrity]] concern was the only construct that reduced that displacement, which makes integrity framing — not tool prohibition — the plausible lever for keeping [[cognitive-offloading|interactional learning]] in the curriculum.

## Key Findings

- **Habit, not intention, governs whether people stop asking other people for help.** Intention predicted using the tool; the path from intention to displacement was statistically indistinguishable from zero.
- **Intention and habit point at different behaviours.** Intention was the stronger predictor of how much the tool was used, habit the stronger predictor of whether it replaced a person.
- **Half of GenAI users report asking people for help less often**, and only 15.8% name a human as their first resource when stuck, against 30.4% who name a tool.
- **Academic integrity concern was the only construct that reduced displacement**, and the only negative determinant of adoption intention.
- **Students and educators differ in level but not in structure**: students report more habit and more displacement, educators more integrity concern.

## What the study did

The authors surveyed engineering students and faculty at Philippine higher-education institutions between 20 July and 5 August 2026, using purposive sampling with a snowball component. The screening cascade ran from 423 raw responses to 392 analyzed cases: 409 eligible, 400 after duplicate response vectors were removed, 392 after careless or speeding cases were dropped. Of those 392, 284 (72.4%) were students and 108 (27.6%) were educators; 190 came from public or state universities, 187 from private universities, and 15 from other institution types.

The displacement model was estimated on the 347 GenAI users among them (258 students, 89 educators). Analysis used partial least squares structural equation modeling with 10,000 bootstrap subsamples, and the authors extended UTAUT2 with four education-specific constructs: academic integrity concern, AI trust, personal innovativeness, and learning self-efficacy. They supplemented it with exploratory necessary condition analysis, measurement invariance testing, ordered logit and probit robustness checks, and out-of-sample prediction tests.

The outcome measure is a **single retrospective five-category self-report** of whether someone now asks a person for help more or less often than before adopting GenAI. The authors are explicit that this cannot distinguish substitution from a genuinely reduced need for help, or from a change in the availability of people to ask.

## Habit predicts displacement; intention does not

The [[cognitive-offloading|displacement]] construct was the best-explained thing in the model, with R² = 0.727. Habit dominated it:

- **Habit → displacement**: β = 0.711, t = 24.30, f² = 1.456 — the largest effect in the study, more than four times Cohen's benchmark for a large effect.
- **Behavioral intention → displacement**: β = 0.039, t = 1.12, not significant. Equivalence testing put the 90% interval at [−0.020, +0.098], so the path is negligible-to-small rather than strictly null.

The authors ran four pre-specified bootstrapped contrasts within each resample rather than inferring differences from separate significance verdicts. Those contrasts are the sharpest result in the paper:

- Intention predicts displacement at 0.04 but predicts *use* at 0.32 (Δβ = −0.28, 95% CI [−0.41, −0.15]).
- Habit predicts displacement at 0.71 but predicts *use volume* at 0.25 (Δβ = +0.46, 95% CI [+0.34, +0.58]).
- Habit exceeds intention on displacement by Δβ = +0.67, 95% CI [+0.56, +0.78].
- 94.4% of habit's total association with displacement (0.753) is direct rather than mediated.

The ordered-logit robustness check reproduces the pattern with the outcome kept in its five categories: habit b = 2.847 (OR = 17.23), academic integrity concern b = −1.357 (OR = 0.26), use behavior b = 0.537 (OR = 1.71), and intention b = 0.147 (p = 0.261). Predicted probability of answering "much less" is 0.441 at one SD above the habit mean and 0.003 at one SD below it.

A necessary condition analysis adds a threshold reading: no respondent reached the upper 40% of the displacement range without at least 25.5% of the habit range (CE-FDH effect size d = 0.149, p < .001). The authors caution that a five-category outcome makes the threshold approximate.

## What adoption looks like, and what integrity concern does

Behavioral intention had its own drivers, and they are not the ones a productivity narrative would predict. R² for intention was 0.451, with performance expectancy (β = 0.308), academic integrity concern (β = −0.179) and habit (β = 0.160) carrying it. Effort expectancy (0.039), social influence (0.074), price value (0.059), learning self-efficacy (0.026) and personal innovativeness (0.057) were all non-significant.

**Academic integrity concern is the only construct that pushed against displacement** (β = −0.329, t = −10.08, 95% CI [−0.395, −0.267]), and the contrast between its effect on intention and on displacement (Δβ = −0.15, p = 0.002) shows it does different work in each place. The construct is defined as perceived risk that GenAI use compromises honest learning, contravenes institutional rules, or induces harmful over-reliance — in other words, it is a *custodial* framing, not a productivity one.

The descriptive items are blunt. 49.6% of GenAI users reported asking a person for help less often since adopting the tools — 56.2% of students, 30.3% of educators. Asked what they consult first when stuck, 30.4% named a generative-AI tool, 23.2% textbooks or notes, 15.8% a human, 13.3% web search, 10.7% working it out alone, and 6.6% video tutorials. These describe the achieved purposive sample, not population prevalence.

Role differentiated the *levels* of habit, integrity concern and displacement — students reported more displacement (p < .001) and higher habit (p = .008), educators reported higher integrity concern (p < .001), and intention did not differ (p = .89) — but **no structural path difference survived correction for multiple comparisons**. The student-versus-educator difference on the intention path was p = .007 raw and q = .092 after Benjamini–Hochberg.

## What this means for practice

- **Instructors.** Build asking a person into the coursework. Required peer review, oral defense, studio critique and supervised laboratory help make consultation with a human a checkpoint rather than an optional extra.
- **Instructors.** Require verification, and teach it early: a module on prompt construction, systematic checking against authoritative sources, and the characteristic failure modes of numerical and symbolic output.
- **Program leaders.** Prefer disclosure-based governance to blanket prohibition. Publish discipline-specific statements of permitted and prohibited use, require AI-use declarations with submitted work, and state when consultation with a person is part of the task.
- **Faculty developers.** Frame development around educators' custodial responsibility — integrity concern was the construct that most reduced displacement among the educators in this sample.
- **Researchers and administrators.** Monitor routines, not attitudes. Frequency, automaticity and the share of stuck moments resolved with a tool say more about displacement than any intention survey.

## Limitations

- **Cross-sectional**, with habit and displacement measured in the same instrument at the same sitting. Temporal precedence is not established, and reverse pathways and common causes cannot be ruled out — the paper's causal language is strictly model-implied.
- **Single-item retrospective outcome.** Displacement is one five-category self-report item: no internal consistency, excluded from HTMT by convention, no common recall period or baseline consultation frequency, and no way to separate substitution from reduced need.
- **Purposive, snowball sampling** with no accessible national sampling frame. Percentages describe an achieved sample that is 72.4% students and 45.4% from the National Capital Region, and displacement results are conditional on being a GenAI user.
- **Underpowered educator subsample** (n = 89 with displacement data): the multi-group comparison detects only standardized path differences of roughly 0.30 or larger, so non-significant group differences are not evidence of equivalence.
- **Clustering ignored.** Respondents were nested within institutions but analyzed as independent — institution identifiers were not retained — so the reported intervals understate uncertainty, and institutional GenAI policy was never measured.

## Citation

Pao, J., Domingo, M. J., & Bernardo, E. (2026). [Habit over intention: Generative-AI use and the displacement of human help-seeking in Philippine engineering education](https://doi.org/10.1016/j.caeai.2026.100696). *Computers and Education: Artificial Intelligence*, 100696.
