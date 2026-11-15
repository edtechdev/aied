---
title: "Generative artificial intelligence in secondary education: Applications and effects on students’ innovation skills and digital literacy"
created: "2026-11-15T06:40:00-05:00"
updated: "2026-11-15T06:40:00-05:00"
type: article
sources: ['raw/papers/wu-genai-secondary-innovation-digital-literacy-2026.md']
source_url: "https://doi.org/10.1371/journal.pone.0323349"
published: "2025-05-09"
confidence: medium
evidence_context: educational
audience: [researchers, instructors]
level: [secondary, k 12]
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
foundations: [critical-thinking, information-and-media-literacy]
pedagogy: [creativity, problem-solving]
technology: [generative-ai, technology-acceptance-model]
assessment: [self-report-measures]
methods: [quantitative-research]
ethics: []
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-15"
    agent: Hermes-Agent
---

> **Synthesis:** Wu and Zhang surveyed 500 students in grades 7–12 and fitted a structural equation model in which self-reported [[generative-ai|generative AI]] use predicts two self-reported competencies: innovation capability and digital literacy. The paths are large — β = 0.862 and β = 0.835, both p < .001, with R² = .744 and R² = .697. Read against the paper's correlation table, though, the model is one predictor against two correlated outcomes: the coefficients restate the correlations, so heavier users rate themselves higher, but use may not have produced the gain. The usable finding is narrower than the abstract — depth and breadth of use track the outcomes, frequency does not, and prior AI experience moderated nothing.

## Key Findings

1. **Students who used generative AI more deeply reported stronger innovation capability.** The association is strong and statistically significant, and creative problem-solving is the innovation dimension most closely tied to use.
2. **Digital literacy moved alongside innovation capability rather than behind it.** Information evaluation, content creation, collaboration, and digital ethics all loaded on the same construct.
3. **The two competencies rose together.** The authors read the covariance as reciprocal reinforcement, although a single association cannot show which direction the influence runs.
4. **Frequency of use was not the lever.** Repeated contact without depth did not predict the higher-order innovation processes the study cared about.
5. **Prior AI experience did not moderate the relationship**, contrary to what technology-acceptance accounts would expect.
6. **The instrument measured what it claimed to measure.** Reliability and convergent validity were adequate and the model fit the data.
7. **Reported use was modest while capability ratings ran higher**, a gap the authors interpret as confidence outrunning practice.

## What the study actually did

Despite the causal language of the abstract, this is a cross-sectional [[quantitative-research|survey analysis]]. No intervention was delivered: students reported their AI use and their own competencies at one time point, between March 15, 2024, and May 31, 2024. The authors concede the design limits causal inference in [[secondary-education|secondary school]] settings.

The sample is 500 students in grades 7–12, drawn by multistage stratified random sampling on grade, school type and location: 51.40% female, 60.00% public, 40.00% private, 57.00% urban, and 16.4–16.8% per grade. Prior AI experience skews low: 25.00% none, 41.00% basic, 24.00% intermediate, 10.00% advanced. The instrument passed expert review by six specialists, cognitive interviews with twelve students and a pilot of fifty, retaining items with an I-CVI of at least .83.

## Reading the coefficients

The three path estimates — 0.862, 0.835, 0.791 — are exactly the three off-diagonal values in the paper's discriminant validity table, where they are labeled inter-construct correlations. That is what a model with one exogenous variable and two endogenous variables must produce: with no controls and no mediator, the standardized path is the correlation, and the reported R² values follow from it. The authors list institutional infrastructure, instructor pedagogical knowledge and prior achievement as unmeasured, and concede that the high explained variance points to untested omitted mediators such as [[student-engagement|cognitive engagement]] and [[self-efficacy|technology self-efficacy]].

Fit came from modification rather than design: the initial model passed the χ²/df threshold but not the others (χ²/df = 2.417, RMSEA = 0.089, CFI = 0.932, TLI = 0.918), and a modification index of 87.32 for a pathway between the two outcomes drove the respecification, improving fit at Δχ² = 82.46 with Δdf = 1. A covariance between outcomes explains their shared variance without saying which way influence runs.

What survives is a well-measured description of a correlated cluster: students reporting richer use — more varied applications, deeper engagement, more positive attitudes — also rate their [[creativity|creative]] and problem-solving capacity and their [[information-and-media-literacy|digital literacy]] higher. Which way the influence runs remains untested.

## Depth of use, not frequency

The most usable material sits in the limitations. Modeled separately, AI Use Frequency did not reach significance against higher-order innovation processes, while the five dimensions intercorrelate at r = .76–.85 — redundancy the authors flag as a possible source of inflated coefficients. The outcome depends on what students do with the tool: applying it across tasks, pushing it into difficult work, holding a working attitude toward it.

The null prior-experience interaction points the same way. One in four students had no prior AI experience, yet experience level did not change the relationship, which argues against gating access on a self-assessed skill tier. Gender and grade subgroup differences appeared but did not reach p < .05, so the paper cannot say the pattern differs by age.

## What this means for practice

- **Instructors:** design for depth and variety, not logins. Rotate generative AI across analysis, drafting, critique and revision rather than repeating one familiar workflow.
- **Curriculum designers:** treat innovation capability and digital literacy as one target. The 0.791 association favors tasks that need both a creative solution and an evaluated source.
- **Administrators:** do not tier access by self-reported experience; a quarter had none and experience did not moderate the outcome.
- **Researchers:** do not repeat the single-predictor specification. Add prior achievement and a mediator, and use two waves if bidirectionality is the claim.

## Limitations

- Cross-sectional, single-source [[self-report-measures|self-report]] at one time point; common method variance inflates the very associations reported.
- One predictor per outcome, so the paths are correlations with no control for prior achievement, socioeconomic status or school resources.
- The bidirectional relation is a covariance added at the modification stage, not two estimated opposing paths.
- AI use dimensions correlate at r = .76–.85, so dimension-level conclusions, including the frequency finding, rest on collinear measures.
- Schools are described only as urban, suburban, public or private, with no country named, and the 2024 data predate most current tooling.

## Citation

Wu, D., & Zhang, J. (2025). [Generative artificial intelligence in secondary education: Applications and effects on students’ innovation skills and digital literacy](https://doi.org/10.1371/journal.pone.0323349). *PLoS One*, 20(5), e0323349.
