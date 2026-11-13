---
title: "Cognitive mechanisms of AI agent behavioral intention among design graduate students: an integrated TAM–TTF perspective"
published: "2026-10-12"
created: "2026-11-04T07:37:59-05:00"
updated: "2026-11-04T09:20:00-05:00"
type: article
sources: ['raw/papers/chu-design-students-ai-agent-tam-ttf-2026.md']
source_url: "https://doi.org/10.1057/s41599-026-09565-y"
confidence: medium
page_kind: [evaluation]
research_method: [survey]
discipline: [design education]
level: [graduate, higher ed]
audience: [learners, instructors, administrators]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
foundations: [agentic-ai]
pedagogy: [self-efficacy, student-ai-interaction]
technology: [technology-acceptance-model]
methods: [quantitative-research]
---

> **Synthesis:** Chu and Liu (2026) surveyed 405 design graduate students at Chinese universities about their intention to keep using [[agentic-ai|AI agents]] and tested an integrated [[technology-acceptance-model|Technology Acceptance Model]]–Task–Technology Fit model three ways at once: [[quantitative-research|PLS-SEM]] for the linear paths, a multilayer-perceptron [[machine-learning|neural network]] for nonlinear predictor importance, and necessary condition analysis for floors. Nine of ten hypotheses survived a Bonferroni-corrected threshold of α = 0.005, with [[self-efficacy]] the strongest upstream belief (β = 0.458 on perceived usefulness) and attitude the immediate antecedent of intention (β = 0.388). The contribution is less the path sizes than the distinction the analysis draws between factors that *raise* intention and factors that are *required* for it: self-efficacy was a necessary condition for perceiving the agents as useful (d = 0.125, p = 0.015) and attitude was necessary for intention (d = 0.132, p < 0.001), while most of the paths with substantial coefficients were not necessary at all.

## Key Findings

1. **Nine of ten paths held after correction.** Attitude → intention β = 0.388 (t = 9.67); self-efficacy → perceived usefulness β = 0.458 (t = 11.969) and → perceived ease of use β = 0.394 (t = 10.135); perceived usefulness → attitude β = 0.376; ease of use → attitude β = 0.185; task characteristics → fit β = 0.322, technology characteristics → fit β = 0.266, fit → attitude β = 0.224 (all p < 0.001).
2. **Enjoyment helped ease of use and did not help usefulness.** Perceived enjoyment → perceived ease of use β = 0.220 (p < 0.001) but → perceived usefulness β = −0.033 (p = 0.483). This was the single rejected hypothesis, and the authors read it as the emotional and instrumental evaluations being separate criteria rather than as enjoyment being harmful.
3. **The fit pathway runs beside the acceptance pathway.** Design tasks' characteristics and the agents' characteristics each fed task–technology fit, and fit then fed attitude independently of usefulness and ease of use — a second route into the attitude that the model makes necessary.
4. **The neural network reproduced the ranking, not just the significance.** Ten-fold cross-validation gave mean RMSE of 0.3265–0.4203 across the four models and both phases, and the normalized importance rankings matched the PLS-SEM rankings in every model: self-efficacy 100% versus enjoyment 20.77% for usefulness; usefulness 100% > fit 56.64% > ease of use 39.89% for attitude; task characteristics 100% > technology characteristics 75.75% for fit.
5. **Only two conditions were necessary.** Self-efficacy for perceived usefulness (d = 0.125, p = 0.015) and attitude for intention (d = 0.132, p < 0.001) cleared both the d ≥ 0.10 and permutation-significance bar. The largest necessity effect in the table, perceived usefulness → attitude at d = 0.250, was *not* significant (p = 0.094), so it is not evidence of a floor.
6. **The bottleneck thresholds are the useful form of that result.** Intention at 80%, 90% and 100% of its scale required attitude at 22.1%, 34.3% and 46.4%; usefulness at 80%, 90% and 100% required self-efficacy at 10.0%, 30.0% and 50.0%.
7. **The model explains little of the outcome it is built to explain.** R² = 0.150 for behavioral intention and Q² = 0.011, against 0.210 for usefulness, 0.208 for ease of use, 0.255 for attitude and 0.165 for fit.

## A well-measured model with a thin outcome

The measurement half of this study is careful. Cronbach's α and composite reliability exceeded 0.80 on all nine constructs, every standardized loading exceeded 0.70, every AVE exceeded 0.50, every HTMT ratio stayed below 0.90, and VIFs ran from 2.107 to 4.496. Harman's single-factor test extracted nine factors explaining 80.910% of the variance with the first component at 19.745%, so common method variance is not a glaring problem.

Then the structural model reports R² = 0.150 for the thing in the title. A path coefficient of 0.388 into an outcome that the model leaves largely unexplained is a real association and a weak explanation, and the paper says so ("weak to moderate explanatory power"). The practical consequence is that the predictor *ranking* is trustworthy within this model while the model's coverage of why design students intend to use AI agents is not: whatever the other four-fifths of that variance is, it is not in the ten hypotheses. The neural network does not fix this, because it fits the same nine constructs.

## What a necessity claim adds to a path model

Standard path modeling ranks contributors by weight. Necessary condition analysis asks a different question — whether high values of the outcome are reachable at all below some level of the antecedent — and its output is a floor rather than a weight. The two agree here only partly, which is the paper's most transferable methodological point: most of the strong paths were not necessary, and the one path with the largest necessity effect size failed significance.

The effect sizes that did pass are modest, 0.125 and 0.132 against a 0.10 convention, and the bottleneck percentages are within-sample ceilings rather than recommendations. Their use is directional: 46.4% of the attitude scale sat below the highest observed intention, so a program that lifts every other belief while leaving attitude cold has a structural problem, not a messaging problem.

## What this means for practice

- **Build confidence before pitching usefulness.** Self-efficacy carried the largest coefficient in the model and was also the necessary condition for perceived usefulness, with usefulness at its top level requiring half of the self-efficacy scale. Workshops, demonstrations and staged exposure are the levers the authors point at.
- **Treat attitude as a gate, not a weight.** Attitude was necessary for intention at every outcome level tested, so the lowest-cost intervention for a program is whatever makes students' overall evaluation favorable, including [[feedback|feedback loops]] that keep the agents' failures visible and recoverable.
- **Do not sell enjoyment as value.** Enjoyment improved ease-of-use judgments and had no effect on usefulness. Affective polish is worth having, but it will not move the instrumental evaluation that design students use to decide the tool is good for their work.
- **Match functions to the discipline's tasks.** Task–technology fit fed attitude independently of the classic constructs, and the design-side functions the authors name — concept generation, visual style recommendation, design iteration support, feedback [[learning-analytics|analytics]] — are what fit looks like in a studio rather than in a lecture course.
- **Read the ranking, not the explained variance.** Use the ordering (self-efficacy > enjoyment; usefulness > fit > ease of use) as the study's finding and the R² of 0.150 as its limit.

## Limitations

- **Purposive, non-probability sampling in one country.** No sampling frame of design graduate students across China existed, so the authors used purposive online and offline recruitment; the sample is 82.7% master's students, and the authors state that strict equivalence with the target population could not be established.
- **Cross-sectional [[self-report-measures|self-report]], intention only.** There is no behavioral outcome, no longitudinal follow-up and no experimental manipulation, so every path is an association measured at one time.
- **Narrow model relative to the outcome.** Nine constructs and ten hypotheses leave R² = 0.150 for intention; enjoyment → attitude, continuance and habit are named as unmodelled.
- **Homogeneous and Chinese-context.** The authors flag cultural and educational differences as a limit on cross-cultural applicability, and the sample is medium- to high-frequency users rather than novices.
- **Pre-copyedit version.** The file is the journal's "Article in Press" PDF, accepted 12 October 2026, so pagination and wording may differ from the version of record.

## Citation

Chu, M., & Liu, M. (2026). [*Cognitive mechanisms of AI agent behavioral intention among design graduate students: an integrated TAM–TTF perspective*](https://doi.org/10.1057/s41599-026-09565-y). Humanities and Social Sciences Communications. Advance online publication.
