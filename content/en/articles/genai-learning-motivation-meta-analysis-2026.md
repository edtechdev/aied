---
title: "Effects of generative artificial intelligence on students' learning motivation: evidence from a meta-analysis"
created: "2026-09-30T10:34:46-04:00"
updated: "2026-09-30T10:34:46-04:00"
type: article
sources: ['raw/papers/10.3389_fpsyg.2026.1832451.md']
confidence: high
published: "2026"
page_kind: [synthesis]
research_method: [literature review]
discipline: [language learning, math education, science education, information technology]
level: [higher ed, secondary, primary education]
audience: [instructors, faculty developers, researchers]
foundations: [ai-education, limitations-in-aied-research]
pedagogy: [motivation, self-determination-theory]
technology: [generative-ai, llm, personalized-learning, intelligent-tutoring]
assessment: [self-report-measures]
methods: [meta-analysis-systematic-review, quantitative-research]
ethics: [differential-effects-across-learner-groups]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Fang, Li, Xiong and Lu ran a random-effects [[meta-analysis-systematic-review|meta-analysis]] of 56 effect sizes drawn from 42 controlled experimental and quasi-experimental studies involving 6,059 students, all published between 2023 and 2025, to estimate the effect of [[generative-ai]] on students' [[motivation|learning motivation]] and to test whether that effect varied across study contexts. Students who learned with GenAI reported higher motivation on average (Hedges' g = 0.764, 95% CI [0.566, 0.962]), but heterogeneity was very high (I² = 93.7%, Tau² = 0.515), so the authors read the pooled figure as a positive average effect rather than evidence of a stable effect across educational contexts. Exploratory moderator analyses found larger effects for university students than for secondary or primary students, in collectivist than in individualist contexts, in [[language-learning|language learning]] than in other subjects, and when GenAI was used on mobile devices rather than personal computers; gender, publication year, intervention duration, GenAI function and motivation type did not moderate. The single most important qualification is that every significant moderator was a study-level characteristic rather than an experimentally manipulated condition, so the subgroup differences are candidate boundary conditions to be tested, not causal claims.

## Key Findings

- **GenAI-supported learning was associated with higher motivation on average.** Across 56 effect sizes the random-effects estimate was Hedges' g = 0.764, 95% CI [0.566, 0.962], 95% PI [−0.689, 2.217], z = 7.571, p < 0.001, a moderate-to-large average effect in the authors' reading.
- **Heterogeneity was very high.** Q(55) = 866.132, p < 0.001, I² = 93.7%, Tau² = 0.515 (SE = 0.134, Tau = 0.718). The authors conclude that true differences between studies, rather than random error, drive much of the variability in results, and that the pooled effect should not be read as a stable effect across all educational contexts.
- **Education stage moderated the effect** (QBET = 13.536, df = 2, p = 0.001): university g = 0.886, 95% CI [0.637, 1.136] (k = 43), [[k-12|secondary school]] g = 0.360, 95% CI [0.157, 0.563] (k = 9), primary school g = 0.311, 95% CI [0.077, 0.544] (k = 4).
- **Cultural context moderated the effect** (QBET = 7.594, df = 1, p = 0.006): collectivist contexts g = 0.815, 95% CI [0.585, 1.046] (k = 49) against individualist contexts g = 0.367, 95% CI [0.147, 0.587] (k = 7).
- **Device type moderated the effect** (QBET = 11.913, df = 1, p = 0.001): mobile devices g = 0.782, 95% CI [0.545, 1.018] (k = 15) against personal computers g = 0.303, 95% CI [0.169, 0.438] (k = 19).
- **Subject domain moderated the effect** (QBET = 23.785, df = 4, p < 0.05): language g = 0.946, 95% CI [0.630, 1.262] (k = 32), mathematics g = 0.711, 95% CI [0.356, 1.066] (k = 4), [[pedagogy]] g = 0.697, 95% CI [0.261, 1.133] (k = 6), information g = 0.291, 95% CI [0.047, 0.535] (k = 8), science g = 0.109, 95% CI [−0.107, 0.325] (k = 3).
- **Both intrinsic and extrinsic motivation rose, and neither reliably dominated.** Intrinsic motivation g = 0.549, 95% CI [0.412, 0.686] (k = 36) and extrinsic motivation g = 0.382, 95% CI [0.143, 0.621] (k = 8), a between-group difference that was not statistically significant (QBET = 1.415, df = 1, p = 0.234). Hypotheses H-1a and H-1b were supported; H-1c was not.
- **Five candidate moderators did not reach significance.** GenAI function (QBET = 0.011, df = 1, p = 0.916; [[intelligent-tutoring|intelligent tutoring systems]] g = 0.759, 95% CI [0.536, 0.982], k = 30; [[personalized-learning|personalized learning]] support g = 0.782, 95% CI [0.407, 1.157], k = 25), intervention duration (QBET = 1.475, df = 2, p = 0.478; short g = 0.519, medium g = 0.643, long g = 0.456), publication year (QBET = 3.519, df = 2, p = 0.172; 2023 g = 0.644, 2024 g = 0.552, 2025 g = 0.929) and gender (QModel(1, k = 25) = 0.25, p = 0.614; β1 = 0.266, SE = 0.527, 95% CI [−0.768, 1.300]). Hypotheses H-2 and H-3 were not supported.
- **The pooled effect was robust to any single effect size.** Leave-one-out estimates varied between 0.695 and 0.840, all remaining statistically significant (p ≤ 0.001); studentized residuals ranged from −1.3725 to 0.8925, below the outlier threshold of 2.
- **The results provided no clear statistical evidence of publication bias.** The funnel plot showed no substantial asymmetries, and Egger's regression intercept was b = 2.727, t(54) = 1.945, p = 0.057.

## How the synthesis was done

The search covered Web of Science, Scopus, ERIC, EBSCO and ProQuest and returned 2,365 records, with a further 74 identified through citation chasing; after 541 duplicates were removed, 1,898 records were screened, 374 full texts were assessed for eligibility, and 42 studies (56 effect sizes) were included. PICOS criteria required students in formal education from primary school through university, a GenAI-supported learning condition, a non-GenAI comparison group, a quantitatively assessed motivation outcome, and a controlled experimental or quasi-experimental design.

Effects were computed as post-test between-group standardized mean differences (Hedges' g) and aggregated in CMA 3.0; because I² exceeded 50%, a random-effects model was adopted. Inter-coder agreement for study coding was Cohen's κ = 0.91, and for the BQAPS risk-of-bias ratings κ = 0.83; total BQAPS scores ranged from 18 to 23 (M = 20.38), and no study was excluded solely on the basis of its score. A supplementary three-level model attributed 15.70% of the variance to sampling variance at Level 1, 4.35% to within-study variance at Level 2 and 79.95% to between-study variance at Level 3; constraining Level 2 did not worsen fit (LRT = 0.1007, p = 0.751) and constraining Level 3 did not reach significance (LRT = 3.7449, p = 0.053), so the more parsimonious two-level model was retained.

## What this means for practice

- **[[higher-ed|Higher education]] is where the motivation evidence is strongest, and primary school the weakest.** The pooled subgroup estimates run from g = 0.886 at university to g = 0.311 in primary school. The authors suggest younger learners' shorter sustained attention and weaker inhibitory control leave them more susceptible to GenAI's multiple response paths and lengthy output, and advise primary teachers to guard against students becoming absorbed in entertaining interactions at the expense of learning objectives.
- **Language classrooms are the strongest subject-domain signal, science the weakest.** Language studies pooled at g = 0.946 against g = 0.109 in science. The authors tie the language result to comprehensible input, immediate corrective feedback and reduced speaking [[anxiety-and-stress|anxiety]], and note that in science, dialogic support cannot replace authentic experimentation and operational experience.
- **If GenAI is to be used, mobile access appears to carry more motivational benefit than desktop access** (g = 0.782 against g = 0.303). The authors attribute this to portability and on-demand [[help-seeking]], which may support autonomy and lower the perceived cost of using the tool.
- **Do not present the pooled number as a promise to a course team.** I² = 93.7% means the average conceals contexts where the effect is near zero or negative; the 95% prediction interval spans [−0.689, 2.217], so a new setting's true effect is not reliably positive. **Do not build an adoption case on the non-moderators.** Intervention duration, GenAI function, motivation type, publication year and gender did not moderate the effect, so longer programs, a particular GenAI role (tutoring or personalized support), or intrinsic-versus-extrinsic framing are not yet evidence-based levers.
- **Design for the mechanism the authors invoke.** They read the pattern through [[self-determination-theory]]: personalized tutoring, immediate feedback and supportive interaction may support autonomy, competence and relatedness, and GenAI may reduce [[cognitive-offloading|cognitive load]] through [[multimodal]] content. Those are hypotheses about [[learning-design|instructional design]], not features of the tool.

## Limitations

- Heterogeneity across studies was substantial; the pooled effect is an average estimate, and differences in learners, instructional designs, GenAI tools, subject domains, cultural settings and implementation conditions may all contribute to the variability. Effect-size dependence remains possible: some studies contributed more than one effect size, and while the three-level check suggested within-study variance was small, effect sizes from the same study can share participants, measures or intervention features.
- Moderator groups were unevenly distributed, which may reduce statistical power, produce unstable subgroup estimates, and confound moderator findings with country, sample, design or measurement characteristics; the authors call the subgroup results exploratory rather than confirmed. Measurement variation across primary studies may have introduced construct heterogeneity, since instruments and operational definitions of motivation differed and some studies reported general, total or combined scores.
- Only English-language studies were included, and the sample covered primary school through university but excluded [[early-childhood-elementary-ai-education|kindergarten]]-aged [[learners|learners and students]] receiving [[special-education|special education]] services. Moderators were tested independently; interactions among educational stage, subject domain, cultural context, device type and GenAI function were not examined.

## Citation

Fang, L., Li, Z., Xiong, B., & Lu, Z. (2026). [Effects of generative artificial intelligence on students' learning motivation: evidence from a meta-analysis](https://doi.org/10.3389/fpsyg.2026.1832451). *Frontiers in Psychology*, 17, 1832451.