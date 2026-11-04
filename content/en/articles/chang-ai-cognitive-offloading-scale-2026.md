---
title: "Development and Validation of the AI Cognitive Offloading Scale for Chinese College Students"
created: "2026-11-04T15:00:00-05:00"
updated: "2026-11-04T15:00:00-05:00"
type: article
sources: ['raw/papers/chang-ai-cognitive-offloading-scale-2026.md']
confidence: high
source_depth: full text
page_kind: [evaluation]
research_method: [instrument development]
discipline: [learning sciences]
level: [higher ed, undergraduate]
audience: [researchers, instructors, educational technology developers]
technology: [generative-ai]
assessment: [educational-measurement, assessment-validity]
pedagogy: [metacognition, self-regulated-learning]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
---

> **Synthesis:** The AI Cognitive Offloading Scale (AI-COS) turns [[cognitive-offloading|cognitive offloading]] into a 20-item [[self-report-measures|self-report]] instrument for Chinese [[higher-ed|undergraduates]], organized by the cognitive function students hand to [[generative-ai|generative AI]] rather than by how often they use it. Two independent samples — 665 for exploration, 1,123 for confirmation — support a second-order model in which memory, assistive and thinking offloading are distinguishable functions of one general tendency, with CFI = 0.951, RMSEA = 0.047 and α = 0.944. The contribution is an operationalization, not a new theory: the three dimensions sit alongside existing demand-level and agency-based measures, and the paper states plainly that strict discriminant validity among them was never tested.

## Key Findings

1. The item pool began at 26 items, generated from literature review, theoretical analysis and review by five experts, and ended at 20. Three items (W16, W23, W25) were dropped for loadings below the 0.40 retention threshold and three (W8, W9, W10) for semantic redundancy.
2. The final scale allocates 5 items to memory offloading (Items 1–5), 10 to assistive offloading (Items 6–15) and 5 to thinking offloading (Items 16–20), each rated on a 5-point Likert scale.
3. Study 1 (N = 665; 312 male, 353 female; 11 incomplete responses excluded) produced KMO = 0.965 and a significant Bartlett test, χ²(325) = 8904.89, *p* < 0.001. Principal axis factoring with direct oblimin rotation retained three factors explaining 54.68% of cumulative variance, with loadings from 0.447 to 0.750.
4. Study 2 (N = 1,123; 58 incomplete responses excluded) compared three models. The second-order model fitted best — CFI = 0.951, TLI = 0.944, RMSEA = 0.047, SRMR = 0.036 — against CFI = 0.886, TLI = 0.873, RMSEA = 0.071, SRMR = 0.051 for the one-factor model and CFI = 0.940, TLI = 0.932, RMSEA = 0.052, SRMR = 0.158 for the first-order three-factor model.
5. The three dimensions loaded on the higher-order construct at 0.868 (memory), 0.964 (assistive) and 0.866 (thinking), all *p* < 0.001. Composite reliability was 0.840, 0.906 and 0.869, and average variance extracted was 0.501, 0.507 and 0.570.
6. Total-scale reliability was α = 0.944, split-half = 0.932 and test-retest = 0.937 over a one-month interval (n = 99). Subscale alphas ranged from 0.834 to 0.912, split-half coefficients from 0.845 to 0.910 and retest coefficients from 0.833 to 0.899.
7. Criterion correlations ran in the expected directions. Total scores correlated 0.619 with AI dependence and −0.234 with metacognitive monitoring, with subscale values of 0.489, 0.593 and 0.567 and −0.245, −0.211 and −0.180 (all *p* < 0.001).
8. Need for cognition separated the dimensions. The total score correlated −0.076 (*p* = 0.011) and assistive offloading −0.121 (*p* < 0.001), while memory (−0.046, *p* = 0.120) and thinking (0.006, *p* = 0.841) were not significantly related.
9. Full scalar invariance across gender held. Configural fit was CFI = 0.940, TLI = 0.932, RMSEA = 0.063, SRMR = 0.040; metric constraints moved CFI by 0.001 and RMSEA by −0.008, and scalar constraints moved CFI by −0.001 and RMSEA by 0.005.

## Where the instrument sits among existing offloading measures

The paper's framing is unusually careful about precedence. Its introduction names two prior operationalizations — the AIBCO Scale of Jiang and Chen (2026), which splits offloading by cognitive-demand level into lower-order and higher-order forms, and Zhu et al. (2026), which splits it by whether students delegate core thinking or keep it as a scaffold — and declines to claim priority. The AI-COS instead classifies by the function delegated: storing and retrieving information, executing and organizing academic tasks, and judging or deciding.

That choice has a practical payoff. A demand-level measure can tell you a student offloaded an *analyze* task; a function-based measure can tell you whether the AI did the analyzing or merely formatted the output. The assistive dimension is where this bites. It holds 10 of the 20 items and carries the highest second-order loading (0.964), so it is both the broadest domain and the one least sharply separated from the general tendency. Its items run from "let AI analyze complex logic for me" to "moderate reliance on AI is an inevitable trend" — analytical delegation and evaluative belief in the same subscale. A researcher treating assistive offloading as a clean behavioral measure should read Table 3 first.

## What the factor structure does and does not establish

The model comparison is the strongest part of the [[educational-measurement|psychometrics]], and also the part with an unremarked wrinkle. The second-order model wins on every index, which justifies reporting a total score while keeping dimension scores interpretable. But the first-order three-factor model's SRMR of 0.158 is worse than the one-factor model's 0.051, a pattern the paper does not discuss and one that makes the fit hierarchy less tidy than the summary implies. The second-order specification earns its place on theory as much as on fit.

Two conventional validity steps are missing, and the authors say so rather than papering over them. No item-level or scale-level content validity index was computed during expert review, so [[assessment-validity|content validity]] rests on five reviewers' judgments plus the factor solution. No heterotrait-monotrait ratio and no latent-factor correlation matrix were reported, so the three dimensions' statistical distinctness is asserted from AVE values and the higher-order structure, not demonstrated against a discriminant-validity criterion. The conclusion states directly that "strict statistical discriminant validity among the three highly related dimensions should be examined further."

The reliability coefficients are high enough to invite a second look rather than a doubt. An alpha of 0.944 across 20 items, with a first factor absorbing 44.394% of variance, is what a strong general factor looks like; that is consistent with the second-order model and also means the total score is mostly measuring one thing. The dimension scores are where the differentiated information lives.

## What the criterion correlations say about the three functions

The pattern is more interesting than "offloading is bad." All three dimensions tracked AI dependence positively and metacognitive monitoring negatively, with assistive offloading the strongest on dependence (0.593) and memory offloading the strongest on monitoring (−0.245). Effect sizes are modest for monitoring — between −0.180 and −0.245 — so the [[metacognition|metacognitive]] story is a consistent signal, not a strong one.

Need for cognition is the discriminating variable, and the null results carry the argument. Students who enjoy effortful thinking reported less assistive offloading but not less memory or thinking offloading. The authors read this as evidence that willingness to invest cognitive effort attaches to particular functions rather than to offloading in general, which is exactly the claim a function-based instrument needs to support. They also refuse the causal reading: the design cannot say whether low need for cognition produces delegation or delegation erodes tolerance for difficulty.

What the instrument adds to the [[cognitive-offloading]] literature, then, is measurability. Prior work in this knowledge base establishes that offloading can be compensatory or substitutive and that its meaning depends on regulation; the AI-COS supplies a scored way to ask *which* function a student has delegated, at a level of specificity that a usage-frequency or technology-acceptance survey cannot reach.

## What this means for practice

- **Researchers.** Treat the AI-COS as one lens, not the lens. If you need to compare function-level, demand-level and agency-based accounts in the same study, administer the AI-COS alongside the AIBCO or a dependent/autonomous measure, and report latent-factor correlations and HTMT that this validation did not.
- **Researchers.** Use the total score for a general tendency and the three subscale scores when the question is about a specific function. Reporting only the total discards the differentiated pattern with need for cognition, which is the scale's most distinctive empirical result.
- **Instructors.** The three dimensions imply three different conversations. Memory offloading is largely a study-strategy question; assistive offloading is a task-design question about how much of an assignment AI may execute; thinking offloading is where [[agency|intellectual agency]] is most directly at stake.
- **Instructional designers.** Write assignment guidance that names the function, not the tool. "You may use AI to organise your sources but not to generate your argument" is a rule the scale's structure can actually evaluate.
- **Institutions.** Survey results from this instrument are descriptive of self-reported tendency among Chinese undergraduates and should not be used for individual diagnosis, placement or misconduct findings; the paper makes no such claim and the validation would not support one.

## Limitations

- **Population.** Both samples were convenience samples of undergraduates at several Chinese universities, recruited through student and class groups. Graduate students, other national systems, vocational and part-time students, and students outside China were not validated, so cross-context use requires its own invariance testing.
- **Design.** Both studies are cross-sectional. The factor structure cannot show that students move from memory to assistive to thinking offloading, and the criterion correlations cannot establish whether offloading changes monitoring, dependence or need for cognition, or the reverse.
- **Self-report only.** Every item asks students what they do or believe. No learning logs, task performance, or behavioral trace data were collected, so the scale measures reported delegation rather than observed delegation, and shares the general gap between what students say about AI use and what they do.
- **Discriminant validity.** With no HTMT and no latent-factor correlations reported, the three dimensions are empirically differentiated by AVE and second-order loadings alone. They correlate strongly enough that a stricter test could compress them.
- **Content validity.** No CVI was computed, and item generation used literature, theory and expert review without interviews or focus groups, so the item pool reflects researchers' and experts' framing of offloading rather than students' own descriptions of it.
- **Construct drift.** Several items index attitudes toward reliance ("an inevitable trend", "a smart strategy") rather than behavior, and the item set is tied to the generative AI tools and study norms of 2025–2026. Model capability and campus norms changing would date specific items.

## Citation

Chang, H. (2026). [Development and validation of the AI cognitive offloading scale for Chinese college students](https://doi.org/10.3389/fpsyg.2026.1884676). *Frontiers in Psychology, 17*, 1884676.
