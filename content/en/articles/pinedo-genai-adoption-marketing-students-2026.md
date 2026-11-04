---
title: "Adoption of generative artificial intelligence by university marketing students"
created: "2026-11-04T15:25:17-05:00"
updated: "2026-11-04T16:51:25-05:00"
type: article
sources: ['raw/papers/pinedo-genai-adoption-marketing-students-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
discipline: [business education]
level: [higher ed, undergraduate]
audience: [researchers, instructors, administrators]
technology: [generative-ai, technology-acceptance-model]
pedagogy: [motivation]
assessment: [self-report-measures]
methods: [quantitative-research]
ethics: [global-south]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A cross-sectional [[quantitative-research|survey]] of 310 marketing students at two private Latin American universities tested a [[technology-acceptance-model|UTAUT2]] model of [[generative-ai|GenAI]] adoption with PLS-SEM. Habit was the strongest predictor of both behavioral intention (β = 0.426) and self-reported use (β = 0.412), while performance expectancy, effort expectancy and social influence were statistically indistinguishable from zero. The authors read that pattern as evidence that GenAI has passed the novelty stage and settled into routine academic practice.

## Key Findings

1. The sample was 310 marketing students at two private universities, 201 in Peru and 109 in Costa Rica, recruited by non-probability purposive sampling in the first academic semester of 2026; 62% were female and mean age was 23 years (SD = 7).
2. The instrument was a structured questionnaire adapted from five prior instruments — Mistry et al. (2025), Tang et al. (2025), Cabero-Almenara et al. (2025), Grassini et al. (2024) and Ren et al. (2026) — administered online through Google Forms between March and June 2026 on a five-point Likert scale.
3. It began with 57 items and ended with 53: four indicators (EE4, EE5, FC3, SI7) were dropped for loading below 0.708, leaving retained loadings from 0.715 to 0.938, Cronbach's alpha from 0.864 to 0.946, composite reliability from 0.901 to 0.956 and AVE from 0.566 to 0.789.
4. The model explained a large share of both endogenous constructs: *R*² = 0.665 (adjusted 0.659) for behavioral intention and *R*² = 0.707 (adjusted 0.705) for use, with Q²_predict values from 0.373 to 0.601 and PLS-SEM prediction errors below the linear-model benchmark in most indicators.
5. Habit drove behavioral intention at β = 0.426 (*t* = 5.522, *p* < 0.001) and use at β = 0.412 (*t* = 5.920, *p* < 0.001). Hedonic motivation reached β = 0.196 (*p* = 0.008), price value β = 0.187 (*p* = 0.009), facilitating conditions on use β = 0.219 (*p* < 0.001), and intention on use β = 0.324 (*p* < 0.001).
6. The three classic acceptance paths failed: performance expectancy β = 0.037 (*p* = 0.610), effort expectancy β = 0.054 (*p* = 0.277) and social influence β = 0.048 (*p* = 0.338), so hypotheses H1–H3 were rejected.
7. Effect sizes told the same story. Habit was moderate on both outcomes (f² = 0.254 on intention, f² = 0.250 on use), intention and facilitating conditions were small (f² = 0.125 and 0.096), and performance expectancy, social influence and effort expectancy were effectively nil (f² = 0.001, 0.003 and 0.005).
8. Only four of eighteen moderation hypotheses held: age on the hedonic-motivation path (β = 0.131, *p* = 0.023) and on the habit path (β = −0.130, *p* = 0.006), gender on the hedonic-motivation path (β = 0.299, *p* = 0.012), and university on the intention-to-use path (β = −0.238, *p* = 0.011).
9. ChatGPT was the most frequently named tool, followed by Gemini and Copilot, with Perplexity, Canva, Claude and DeepSeek mentioned at lower frequency in the open-ended responses.

## What the design can and cannot establish

The outcome variable matters more than the headline. "Use" here (UI) is a self-reported level of GenAI use in academic activities, collected at one sitting alongside the predictors. Nothing in the study observes actual behavior, logs sessions, or follows students over time. The paper is therefore a model of *stated* adoption and *stated* use, and the authors' own limitation section concedes the point about self-report and social desirability.

The design is a cross-sectional explanatory survey analyzed with partial least squares structural equation modeling in SmartPLS 4.1.1.8, using 5,000 bootstrap subsamples and the two-stage measurement-then-structure sequence. PLS-SEM estimates path coefficients under a causal diagram; it does not identify causal effects from cross-sectional data. A path from habit to use that fits well is consistent with habit causing use, with use causing habit, and with both being reflections of the same underlying routine.

Sampling compounds the issue. Non-probability purposive sampling of marketing students at two private universities cannot support a population claim about Latin American [[higher-ed|higher education]], let alone about students elsewhere. The authors are careful to describe the context as underrepresented rather than to generalize, and the restriction is honest. It still bounds what a reader can take away: this is a well-measured description of one configured population.

## Habit, and the risk of measuring use twice

The finding that habit dominates is the paper's contribution and also its softest point. Habit is defined in Table 1 as "the extent to which students use GenAI tools automatically and frequently", and use is defined as "level of use of GenAI tools in academic activities". Those definitions sit close together, and the items follow them. A construct built from frequency and automaticity predicting a construct built from frequency is not a tautology, but it is close enough that the β = 0.412 path should be read as partial overlap rather than pure explanation.

The [[educational-measurement|discriminant-validity]] table carries the warning. The heterotrait-monotrait ratio for habit against use is 0.824 and for intention against use 0.829, both just under the 0.85 threshold the authors adopt. Performance expectancy against hedonic motivation is 0.825. These pass, but they pass narrowly, and the two pairs that matter most to the argument — habit with use, and intention with use — are the two closest to failing. A stricter threshold of 0.80 would have forced a different model.

That does not void the result. The habit path survives at a moderate effect size while the performance-expectancy path sits at f² = 0.001, and that contrast is too large to be an artifact of shared item wording. The defensible reading is narrower than the abstract's: among students who already use these tools often, the frequency of that use is a better predictor of continued use than any belief about usefulness. Whether habit *causes* adoption, or is simply the trace of adoption that already happened, is not something this design can separate.

## Why the null acceptance paths may be a maturity signal

The three rejected hypotheses are the most interesting departure from the literature the paper cites. Grassini et al. (2024) found performance expectancy to be the strongest predictor of ChatGPT intention among European students; Acikgul and Sad (2026) found performance expectancy, hedonic motivation and habit all significant among 280 Turkish educators. Here performance expectancy is flat.

The authors' explanation is plausible and worth taking seriously: when a tool is already embedded in daily coursework, beliefs about how useful or easy it is stop discriminating between users, because almost everyone holds them. Variance restriction of that kind produces exactly this pattern — high means, low spread, near-zero slopes. It is also the pattern that a sample of marketing students, a group with unusually high exposure, would generate first. The study cannot demonstrate the mechanism, since it reports no spread statistics for the expectancy items.

The moderation results add a caution about the "university" moderator. The two institutions are in different countries, so the significant university effect on the intention-to-use path (β = −0.238) confounds institution with national context, curriculum, language of instruction and platform access. Calling it institutional context, as the discussion does, is one interpretation among several.

## What this means for practice

- **Instructors.** Do not build a case for GenAI on demonstrated usefulness. In this sample, usefulness beliefs did not predict intention. Build on routine instead: scheduled, repeated, low-stakes use inside existing assignments creates the habit that the model finds predictive, and hedonic motivation suggests the experience should be engaging rather than merely efficient.
- **Program designers.** Treat [[ai-literacy|AI literacy]] as a separate objective from adoption. Students in this sample had already adopted; what they lacked, on the authors' account, was critical validation of outputs, awareness of limits, and [[motivation|deliberate]] rather than automatic use. A [[curriculum-design|curriculum]] that only teaches tool operation addresses a problem these students no longer have.
- **Administrators.** Facilitating conditions had a real, if small, effect on use (β = 0.219, f² = 0.096), and price value a small effect on intention (β = 0.187). Access, licensing and technical support remain levers, but they are second-order compared with whether use has become normal in the program's daily work.
- **Researchers.** Report the discriminant-validity ratios for intention and use when both are in the model, and consider whether self-reported frequency can carry the weight a habit construct places on it. The [[technology-acceptance-model|adoption-model]] literature needs measures of use that are not themselves self-reported habit.

## Limitations

- Two private universities in two countries, marketing students only, recruited by non-probability purposive sampling; no claim about Latin American or global [[higher-ed|higher education]] follows from it.
- Cross-sectional and single-occasion, so the direction of every path is assumed by the model rather than established, including the central habit-to-use relationship.
- All constructs are [[self-report-measures|self-reported]] at the same sitting; no marker variable, Harman test or other common-method check is reported.
- Habit and use are conceptually and empirically close (HTMT = 0.824), and intention and use are closer still (0.829); both pairs pass the 0.85 threshold only narrowly.
- The "university" moderator is perfectly confounded with country, and the sample size of 310 across 18 moderation tests leaves the four significant moderators vulnerable to chance.
- No [[learning-gains|learning outcome]], grade or performance measure was collected, so the study says nothing about whether GenAI use helps students learn [[business-education|marketing]].

## Citation

Pinedo, L., Chang-Tam, R., Vidaurrazaga-Sferrazza, S., Garcia-Huamantumba, E., Zevallos-Cordova, P., & Jaque-Reategui, S. (2026). [Adoption of generative artificial intelligence by university marketing students](https://doi.org/10.3389/feduc.2026.1892057). *Frontiers in Education, 11*, 1892057.
