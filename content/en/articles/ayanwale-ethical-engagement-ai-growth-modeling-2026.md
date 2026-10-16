---
title: "Cohort-level growth modeling of ethical engagement with artificial intelligence in education"
created: "2026-10-16T07:00:00-04:00"
updated: "2026-10-16T07:00:00-04:00"
type: article
sources: ['raw/papers/ayanwale-ethical-engagement-ai-growth-modeling-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [longitudinal study, structural equation modeling]
level: [higher ed, undergraduate]
audience: [instructors, administrators, researchers]
pedagogy: [project-based-learning]
technology: [generative-ai]
assessment: [self-report-measures]
foundations: [academic-integrity, ai-literacy, theories-and-frameworks]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-16"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Ayanwale and colleagues tracked [[ethics]] of AI use across three annual waves in 350 undergraduate [[cs-education|computer science]] students at two public universities in southeastern Nigeria. Using latent growth curve modeling on a rotating-cohort panel, they found substantial cohort-level increases in AI Ethics Awareness (AEAw), [[ai-literacy|Responsible AI Use]] (RAIU), and AI-Driven Reflection on Decision-Making (AIRD) — but almost no coordination among those three trajectories. Initial awareness barely predicted later growth, and the constructs were close to uncorrelated at every wave. The study reads as evidence that ethical knowledge, [[critical-thinking|critical reflection]], and self-perceived responsible practice develop asynchronously rather than as a single march from knowing to doing, and it situates that development in socio-technical conditions — assessment rules, [[governance|institutional policy]], and peer norms — rather than in individual disposition alone.

## Key Findings

1. Across 350 undergraduate computer science students at two Nigerian public universities, cohort means rose on all three constructs over three annual waves: RAIU from M = 3.16 (SD = 0.46) to M = 3.97 (SD = 0.54), AEAw from M = 2.99 (SD = 0.53) to M = 3.75 (SD = 0.59), and AIRD from M = 2.89 (SD = 0.51) to M = 3.60 (SD = 0.61).
2. Univariate latent growth models confirmed positive linear change for each construct — annual slopes of 0.403 (SE = 0.013) for RAIU, 0.383 (SE = 0.014) for AEAw, and 0.353 (SE = 0.014) for AIRD, all p < 0.001 — with two-year standardized changes of d_av = 1.60, 1.37, and 1.26 respectively.
3. Cross-construct correlations were close to zero at every wave (RAIU–AEAw r = 0.002 at Year 1), while within-construct stabilities were moderate to strong: RAIU r = 0.52 to 0.62, AEAw r = 0.56 to 0.67, and AIRD r = 0.60 to 0.67.
4. The measurement structure held across waves: the CFA fit was χ2/df = 1.82, CFI = 0.961, TLI = 0.953, RMSEA = 0.048, and SRMR = 0.041, and full scalar invariance was supported (ΔCFI = 0.004; ΔRMSEA = 0.002).
5. Hypotheses linking initial awareness to later growth were not supported: initial AEAw correlated r = −0.118 with the RAIU slope and r = −0.117 with the AIRD slope, and the RAIU and AIRD slopes correlated r = −0.152 — all small and in the opposite direction to the prediction.
6. The multivariate model fitted the data well (χ2(21) = 12.54, p = 0.924, RMSEA = 0.020, SRMR = 0.017) but the growth factors remained weakly associated: RAIU growth with AEAw growth r = −0.208, with AIRD growth r = −0.152, and AEAw growth with AIRD growth r = 0.145.
7. No compensatory-growth pattern emerged. Cross-construct intercept–slope links ranged from −0.173 to −0.023, and the largest within-construct intercept–slope correlation was AIRD's r = 0.288.

## Substantial average growth, little coordination

The paper's central contribution is the gap it opens between average change and co-change. Successive cohort compositions reported steadily higher awareness, reflection, and self-perceived responsibility, yet the latent growth factors describing those changes were only weakly — and often negatively — related. A population can show large mean gains on several constructs while those gains stay largely independent, and that is what the multivariate model indicates here. Initial AEAw did not predict later growth in RAIU or AIRD (H2a–H2b), the two slope factors were not positively coupled (H2c), and the cross-construct intercept–slope relations were too small and too inconsistent to support a general compensatory process (H3c). The authors are careful about what this buys them: the design is observational, so the increases cannot be attributed to AI exposure, [[project-based-learning|project-based]] instruction, or academic progression as separate causes. They read the pattern as overlapping influences — growing familiarity with AI, shifting institutional expectations, wider public debate, and participant replacement — rather than a single mechanism.

## Awareness, reflection, and reported practice are distinct

The three constructs were designed to be separable, and the data kept them that way: discriminant validity held under the Fornell–Larcker criterion at all three waves, and cross-construct correlations stayed near zero even as each construct was internally stable over time. AIRD showed the strongest temporal continuity, which the authors suggest makes reflective engagement the most stable dimension in this cohort. The distinction matters most for RAIU, which measures self-perceived responsible practice — verification, [[privacy|data protection]], disclosure of [[generative-ai|automated assistance]], authorship responsibility — not observed conduct. The paper treats the RAIU rise as growing ethical [[self-assessment|self-appraisal]], explicitly flagging social desirability, self-enhancement, and shifting interpretations of "responsible use" as live alternatives to genuine behavioral change. That caution is not decoration: it is the difference between claiming students became more ethical and claiming they came to describe themselves that way.

## A rotating cohort rather than a fixed panel

The design is a three-wave panel at 12-month intervals, but attrition from graduation, transfers, and leave was met by demographic matching — replacement participants drawn from the same programs on gender, age category, academic level, and specialisation. The cohort's [[writing-education|composition]] stayed stable (male students roughly 60% at each wave; academic levels split about evenly). Consequently the growth parameters describe aggregate differences across successive cohort compositions, not uninterrupted within-person development, and the authors do not let the conventional LGCM reading stand in for individual trajectories. This is the boundary that governs every claim in the paper: the findings say successive cohorts reported higher AEAw, RAIU, and AIRD, not that every student improved. Reliability also strengthened over time — Cronbach's alpha for RAIU rose from 0.71 in Year 1 to 0.84 in Year 3 — a pattern the authors interpret as stable measurement performance rather than an effect of AI exposure.

## Transformative Learning Theory as a heuristic lens

Transformative [[learning-theories|Learning Theory]] supplies the interpretive frame, not the tested model. The theory proposes that critical reflection on assumptions can reshape perspectives and action, and the observed growth in awareness and reflection is compatible with that proposition — but the weak alignment among the trajectories does not support a deterministic sequence running from awareness through reflection to responsible practice. The authors therefore keep the theory as a heuristic: it explains why critical awareness and reflection might contribute to responsible action without guaranteeing it. The socio-technical reading runs alongside it. Students may understand ethical principles yet stay unsure how to apply them when acceptable assistance, disclosure requirements, and responsibility for generated content are insufficiently specified, and they may evaluate AI outputs critically while still adopting expedient practices rewarded by prevailing assessment conditions.

## What this means for practice

- **Instructors.** Embed ethical decision-making across the programming [[curriculum-design|curriculum]] rather than confining it to a stand-alone course, and build tasks that require students to disclose AI assistance, verify generated content, identify bias and privacy risks, and justify their reliance on automated recommendations.
- **Assessment designers.** Use shared rubrics that score transparency, fairness, [[human-in-the-loop-ai|human judgment]], verification, privacy, and accountability, and treat verified artifacts and disclosures as evidence alongside what students say about themselves.
- **Administrators and policymakers.** Publish assessment-specific expectations for permitted assistance, disclosure, attribution, verification, authorship, and accountability, distinguishing formative from [[summative-assessment|summative]] AI use and requiring each assessment brief to state what is allowed, restricted, or prohibited. The paper recommends cross-functional governance involving students, lecturers, [[librarians]], IT staff, disability services, data protection, quality assurance, and integrity committees.
- **Curriculum designers.** Do not assume that students with lower initial awareness will catch up faster; the data show no compensatory pattern, so instruction should respond to demonstrated needs rather than to an assumed convergence.
- **Faculty developers.** Pair introductory worked cases and structured reflection with advanced tasks addressing locally relevant problems — language representation, surveillance, data ownership, infrastructure inequality, and dependence on externally developed platforms — so that ethical reasoning reaches the contexts the cohort actually inhabits.

## Limitations

- The rotating-cohort design preserves sample size and demographic comparability but not participant continuity, so the growth parameters cannot fully separate within-person change from replacement, maturation, or period effects.
- All three principal constructs were measured by [[self-report-measures|self-report]]; despite anonymous administration and independent data collection, common-method variance, social desirability, and self-enhancement remain possible, and RAIU indexes perceived rather than verified responsibility.
- The observational design establishes no causal effect of AI exposure, instructional practices, or [[educational-policy-ai|institutional policy]] on the observed changes; no standardized ethics intervention was implemented.
- The context is two public universities in southeastern Nigeria, so generalizability is conceptual rather than statistical, and the magnitude of growth may not transfer across disciplines, institutions, or countries.
- Contextual interviews were not transcribed, systematically coded, or formally analyzed, and were not treated as an explanatory [[qualitative-research|qualitative]] strand.
- Attrition and replacement were managed by matching rather than by participant linkage or missing-data estimation, which the authors identify as a direction for fixed-panel replication.

## Citation

Ayanwale, M. A., Omeh, C. B., Mnguni, L. E., & Oyeniran, F. (2026). [Cohort-level growth modeling of ethical engagement with artificial intelligence in education](https://doi.org/10.1007/s44163-026-02298-6). *Discover Artificial Intelligence, 6*, 1439.
