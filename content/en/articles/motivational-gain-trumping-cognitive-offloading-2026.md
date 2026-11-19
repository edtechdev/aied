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

> **Synthesis:** Wang, Guo and Gong (2026) pooled 31 studies covering 16,357 learners in a two-stage meta-analytic structural equation model, and found that AI use affects [[critical-thinking|critical thinking]] through **two pathways of nearly equal size that run in opposite directions**. AI dependence reduces critical thinking (U→D→CT β = −0.212) while [[motivation|learning motivation]] raises it (U→LM→CT β = +0.217); the two almost exactly cancel (total indirect β = 0.004, p = 0.645), leaving a small positive direct effect (β = 0.149) as the whole story. The net finding is optimistic but fragile: **the benefit is contingent on motivation, and the harm is contingent on dependence**, and the model's approximate fit was poor (RMSEA = 0.15), so the coefficients describe associations among study-level correlations rather than causal processes.

## Key Findings

- **AI use affects critical thinking through two pathways of nearly equal size running in opposite directions**: dependence lowers it (β = −0.212) and motivation raises it (β = +0.217).
- **The pathways cancel almost exactly**, leaving a total indirect effect of 0.004 and a small positive direct effect of 0.149 as the whole net association.
- **The zero-order correlation is not significant** (r = 0.156), which is what a cancellation looks like when a synthesis measures only the outcome.
- **AI dependence and learning motivation are essentially unrelated** (r = −0.108), which is why the two mechanisms operate in parallel rather than one explaining the other.
- **The inhibition pathway held across sample types** while the motivation pathway was stronger among college students, and the model's approximate fit was poor (RMSEA = 0.15), so the coefficients describe a literature rather than a causal mechanism.

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

- **Choose tools that withhold end-to-end answers.** Embedded Socratic questioning — "what are the conflicting views here?", "how would you verify this inference?" — keeps the analytical frame with the student, which is the pathway that produces the benefit.
- **Make metacognitive checkpoints non-skippable.** Require students to name the claim in the output that most needs fact-checking, or the weakest link in the argument, before they can proceed.
- **Grade the process, not only the product.** A "cognitive process portfolio" of initial conceptions, AI interaction logs, critical commentary on output and final revisions, scored on argument rigour and critical integration, gives the motivation pathway something to act on.
- **Stand up systematic AI literacy** covering model limits and [[ethics|ethics]], methods for evaluating output (fallacy identification, source tracing, cross-validation across tools), and a division of labor between AI brainstorming and human judgment.
- **Negotiate usage norms by activity**, permitting AI as a collaborative partner in open project work while restricting it in drills aimed at specific reasoning skills.

## Limitations

- **Causal inference is constrained.** The primary studies were predominantly cross-sectional, so path coefficients and mediation effects are associations with model-implied directions, and the relationships may reverse — lower critical thinking could drive higher AI reliance just as easily as the other way round.
- **Measurement heterogeneity, especially for AI dependence.** Scales varied in dimensions and items, the construct lacks a standardized cross-culturally validated instrument, and unmeasured heterogeneity follows directly.
- **Moderators were limited to what primary studies reported**: tool type (conversational agent versus intelligent tutoring system), depth and duration of use, and the extent of teaching scaffolds were not fully examined.
- **Narrow outcome space** — creativity, collaborative problem-solving and digital citizenship literacy were not modeled, and no physiological or design-based evidence was integrated.
- **Publication-bias diagnostics had limited power** (10–19 studies per analysis), and the model's approximate fit was poor (RMSEA = 0.15), so the coefficients should be read as a description of a literature, not an estimate of a mechanism.

## Citation

Wang, W., Guo, B., & Gong, M. (2026). [Motivational gain trumps cognitive offloading: a MASEM study on the net positive effect of AI use on critical thinking](https://doi.org/10.1186/s40561-026-00477-7). *Smart Learning Environments*.
