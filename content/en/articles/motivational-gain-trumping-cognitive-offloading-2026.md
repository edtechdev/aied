---
title: "Motivational gain trumps cognitive offloading: a MASEM study on the net positive effect of AI use on critical thinking"
created: "2026-11-19T10:10:00-05:00"
updated: "2026-11-19T10:10:00-05:00"
type: article
evidence_context: educational
source_url: "https://doi.org/10.1186/s40561-026-00477-7"
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-19"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [cognitive-offloading, critical-thinking]
pedagogy: [motivation, self-determination-theory]
technology: [generative-ai]
methods: [meta-analysis-systematic-review]
audience: [researchers, instructors]
research_method: [secondary analysis]
level: [higher ed]
sources: ['raw/papers/motivational-gain-trumping-cognitive-offloading-2026.md']
confidence: medium
page_kind: [synthesis]
---

> **Synthesis:** Pooling 31 studies of 16,357 learners, Wang, Guo and Gong (2026) found that AI use helps [[critical-thinking|critical thinking]] and harms it at the same time, through two mechanisms of roughly equal strength: students who use AI to avoid thinking lose ground, while students whose [[motivation|motivation]] to learn rises gain it. The two effects nearly cancel, so a study that measures only the final outcome finds nothing — which is exactly what their synthesis found. Whether AI use helps therefore depends on what the course does about dependence and motivation, not on the tool.

## Key Findings

- **AI use cuts both ways.** The same practice that lifts critical thinking when it lifts motivation depresses it when it becomes a substitute for thinking.
- **The two effects cancel.** Across the pooled studies the net association between AI use and critical thinking was close to zero, so an evaluation that measures outcomes alone will report "no effect" and miss both mechanisms.
- **Dependence is the harm.** Using AI to skip the thinking is what pulls critical thinking down, which makes tasks that withhold finished answers the lever.
- **Motivation is the benefit.** Where AI use raised students' motivation to learn, critical thinking improved — the benefit is something the course produces, not something the tool supplies.
- **This is correlational evidence.** Most pooled studies were cross-sectional and the model fit the data poorly, so these are associations to design against, not causal estimates.

## What the study did

The authors ran a PRISMA-guided systematic search for empirical studies of AI use and critical thinking published 2023–2025, retaining 31 studies from 15 countries and regions, with individual samples ranging from 30 to 3,843 (average 528) and mostly college and university students. They then estimated a parallel dual-mediator model by two-stage MASEM: random-effects meta-analysis of the correlation matrix, then weighted least squares estimation of the structural model, with subgroup analysis and meta-regression for moderators.

Two mediators were specified from theory: **AI dependence**, drawing on [[cognitive-offloading|cognitive offloading]] theory and the skill-decay hypothesis, and **learning motivation**, drawing on [[self-determination-theory|self-determination theory]]. Social cognitive theory provides the overarching frame of triadic reciprocal causation.

The first-order correlations are the empirical anchor, and they are all moderate:

- AI use ↔ critical thinking: r = 0.156, 95% CI [−0.040, 0.353], p = 0.120 — **not significant**, with I² > 0.95.
- AI use ↔ AI dependence: r = 0.478, 95% CI [0.342, 0.614], p < 0.001.
- AI dependence ↔ critical thinking: r = −0.365, 95% CI [−0.477, −0.254], p < 0.001.
- AI use ↔ learning motivation: r = 0.477, 95% CI [0.383, 0.571], p < 0.001.
- Learning motivation ↔ critical thinking: r = 0.519, 95% CI [0.424, 0.613], p < 0.001 — the strongest and most stable pair in the matrix.
- AI dependence ↔ learning motivation: r = −0.108, 95% CI [−0.431, 0.215], p = 0.512 — essentially unrelated, which is what licenses treating them as parallel rather than coupled mechanisms.

## Two pathways that cancel

Inside the model the picture changes, because both mediators are in play at once:

- **Inhibition path** (AI use → dependence → critical thinking): β = −0.212, 95% CI [−0.225, −0.199], p < 0.001.
- **Promotion path** (AI use → motivation → critical thinking): β = +0.217, 95% CI [0.204, 0.230], p < 0.001.
- **Total indirect effect**: β = 0.004, 95% CI [−0.014, 0.023], p = 0.645.
- **Direct effect and total effect**: β = 0.149, 95% CI [0.127, 0.172], p < 0.001 — identical because the indirect effect is ~0.
- **Variance explained in critical thinking**: R² = 0.400.

The authors are careful about what this means. The dependence and motivation pathways are not two models competing to explain the data; they are two mechanisms operating simultaneously, and the aggregate hides both. A study that measured only dependence would find harm; a study that measured only motivation would find benefit; a study that measured neither finds nothing significant, which is exactly what the zero-order correlation shows.

The fit statistics deserve the prominence the authors give them: χ² = 340.35, df = 2 (χ²/df = 170.17), CFI = 0.96, TLI = 0.87, RMSEA = 0.15, SRMR = 0.07. They attribute the poor approximate fit to the aggregated N = 16,357 and between-study heterogeneity, and explicitly caution against calling it satisfactory.

## Moderators: who the effect holds for

- **Gender composition** moderated the AI use–critical thinking link (slope = 0.026, p < 0.001, explaining roughly 47.97% of heterogeneity, against a Bonferroni threshold of 0.008). Because the regressor is the study-level percentage of women, the authors state plainly that individual-level gender interpretation would be an ecological fallacy.
- **Sample type** moderated the motivation–critical thinking link: r = 0.52 among college students versus 0.27 in other groups (p < 0.001).
- **The dependence–critical thinking link did not differ by group** (r = −0.31 college versus −0.44 others, p = 0.185) — the inhibition pathway appears to operate regardless of who is using the tool.

## What this means for practice

- **Instructors.** Withhold end-to-end answers. Embedded Socratic questioning — "what are the conflicting views here?", "how would you verify this inference?" — keeps the analytical frame with the student instead of handing it to the tool.
- **Instructors.** Make a metacognitive checkpoint non-skippable before the next step: name the claim in the output that most needs fact-checking, or the weakest link in the argument.
- **Assessment designers.** Grade the process alongside the product. A portfolio of initial conceptions, AI interaction logs, critical commentary on the output and final revisions, scored on argument rigour and critical integration, gives the motivation pathway something to act on.
- **Curriculum designers.** Teach evaluation, not familiarity — model limits and [[ethics|ethics]], fallacy identification, source tracing, cross-validation across tools, and where AI brainstorming stops and human judgment starts.
- **Program leaders.** Negotiate usage norms by activity rather than by course, permitting AI as a collaborative partner in open project work while restricting it in drills aimed at specific reasoning skills.

## Limitations

- **Causal inference is constrained.** The primary studies were predominantly cross-sectional, so path coefficients and mediation effects are associations with model-implied directions, and the relationships may reverse — lower critical thinking could drive higher AI reliance just as easily as the other way round.
- **Measurement heterogeneity, especially for AI dependence.** Scales varied in dimensions and items, the construct lacks a standardized cross-culturally validated instrument, and unmeasured heterogeneity follows directly.
- **Moderators were limited to what primary studies reported**: tool type (conversational agent versus intelligent tutoring system), depth and duration of use, and the extent of teaching scaffolds were not fully examined.
- **Narrow outcome space** — creativity, collaborative problem-solving and digital citizenship literacy were not modeled, and no physiological or design-based evidence was integrated.
- **Publication-bias diagnostics had limited power** (10–19 studies per analysis), and the model's approximate fit was poor (RMSEA = 0.15), so the coefficients should be read as a description of a literature, not an estimate of a mechanism.

## Citation

Wang, W., Guo, B., & Gong, M. (2026). [Motivational gain trumps cognitive offloading: a MASEM study on the net positive effect of AI use on critical thinking](https://doi.org/10.1186/s40561-026-00477-7). *Smart Learning Environments*.
