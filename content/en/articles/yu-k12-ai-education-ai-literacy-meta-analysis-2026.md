---
title: "The Effects of K-12 Artificial Intelligence Education in Enhancing AI Literacy: A Meta-Analysis"
created: "2026-09-25T21:10:33-04:00"
updated: "2026-09-25T21:52:24-04:00"
type: article
published: "2026"
foundations: [ai-education, ai-literacy, interpreting-and-applying-aied-research, limitations-in-aied-research]
assessment: [learning-gains]
methods: [meta-analysis-systematic-review, quantitative-research]
research_method: [literature review]
discipline: [stem education, cs education]
level: [k 12, primary education, middle school, secondary]
audience: [researchers, instructors, curriculum designers, policymakers]
page_kind: [synthesis]
sources: ['raw/papers/yu-k12-ai-education-ai-literacy-meta-analysis-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** Yu, Kim, Chang, and Huang meta-analyze 16 empirical studies that taught artificial intelligence itself, rather than using AI to support instruction, to K-12 learners. Searching 8 databases from January 2014 to March 2024 and extending the search by snowballing through October 2025, they identified 57 effect sizes covering 3,837 students in studies published between 2021 and 2025. The pooled effect of AI education classes on [[ai-literacy]] was Hedge's g=0.892 (95% CI: [0.548, 1.236], p<0.001), a large effect by Cohen's criteria, and all 57 individual effect sizes were positive, ranging from 0.16 to 4.93. Heterogeneity was substantial (I2=94.68%), yet moderators by publication source, publication year, and school level showed no significant differences, and trim-and-fill adjustment left the effect positive and significant (g=0.952). The authors read the consistency as support for teaching AI concepts to younger learners, and the unexplained variability as evidence that the field has not agreed on how to measure AI literacy.

## Key Findings

- Across 16 studies and 57 effect sizes covering 3,837 K-12 students, AI education classes raised AI literacy with a pooled Hedge's g=0.892 (95% CI: [0.548, 1.236]), a large effect.
- All 57 extracted effect sizes pointed in a positive direction, ranging from 0.16 to 4.93, so the overall result does not rest on a subset of null findings.
- Heterogeneity was substantial (I2=94.68%; Q(56)=752.67, p<0.001), so most observed variance reflected true differences among studies rather than sampling error.
- Publication characteristics explained little: journal articles showed β=0.8047 (p=0.0008), other publication types did not differ significantly, and year was unrelated to effect size (b=-0.0381, p=0.840).
- Robustness held: the pooled effect and standard error stayed at 0.892 and 0.160 across assumed pre-post correlations from 0 to 1, and trim-and-fill gave g=0.952 (95% CI: [0.809, 1.096]).
- AI knowledge was the most common outcome (10 of 16 articles, 62.5%), while AI career interest appeared in 3 articles (18.8%), showing how differently the construct was operationalized.

## How the synthesis was assembled

The study draws a deliberate line between [[ai-education|AI education]], which teaches AI concepts, principles, ethics, and development so that learners build AI literacy, and AI in education (AIED), which uses AI tools such as automated grading or [[feedback|personalized feedback]] to support teaching. Most prior [[meta-analysis-systematic-review|meta-analyses]] synthesized AIED outcomes such as achievement and engagement, leaving evidence on teaching AI itself thin. The authors kept only pre-post or experimental quantitative studies with K-12 samples, published in English, and reporting a concept similar to AI literacy, including [[computational-thinking]], AI ethics, [[self-efficacy]], and career interest. Two of the 16 studies used between-subject designs and the rest pre-post designs, so all standardized mean differences were converted to Hedge's g, and a robust variance estimation model handled dependence among multiple outcomes from the same study. The set comprised 8 journal articles, 2 dissertations, 5 conference proceedings, and 1 book chapter, pooled in R with a random-effects model.

## A large and consistently positive effect

The pooled estimate of g=0.892, an average [[learning-gains|learning gain]] across 57 outcomes, is the paper's headline claim, and it held under several checks. Varying the assumed correlation between pre- and post-test scores from 0 to 1 left the pooled effect at 0.892 with a standard error of 0.160. Publication-bias screening was mixed: the funnel plot looked mostly symmetrical, but Egger's test indicated significant asymmetry (z=5.49, p<0.001), with a limit estimate whose 95% CI of [-0.061, 0.506] included zero. The authors attribute that to a few outlying effect sizes rather than systematic bias, and trim-and-fill supported them, returning an adjusted effect of g=0.952 (SE=0.073, 95% CI: [0.809, 1.096]). Substantial heterogeneity remained (I2=94.68%; Q(56)=752.67, p<0.001), so the summary describes a distribution of positive findings rather than one uniform intervention.

## Moderators and the measurement problem

Three moderator analyses came back null, and the authors treat that nullity as informative. Publication source did not differentiate studies, publication year showed no trend (b=-0.0381, p=0.840), and school level produced no significant contrast (difference -0.1748, p=0.5071). They caution that small subgroups limit statistical power. Their preferred explanation for the remaining heterogeneity is measurement: the 16 studies operationalized AI literacy as everything from AI knowledge and ethics to attitudes, [[motivation]], [[self-efficacy]], and career interest, mixing cognitive and affective outcomes. They connect this to [[educational-measurement]]: the field lacks consensus on AI literacy's core dimensions and validated instruments, and short-term classes rarely capture gradual shifts in attitudes. This unresolved construct openness is both why so many studies qualified and why their results resist comparison, a recurring [[limitations-in-aied-research|limitation in AIED research]].

## What this means for practice

- K-12 AI education can be justified empirically: the pooled large effect held across school levels, publication types, and years, giving [[educational-policy-ai|policymakers]] a defensible rationale for curriculum integration.
- Design AI education around explicit AI literacy goals rather than tool practice, since the synthesized interventions taught concepts, principles, ethics, and applications.
- Pair rollout with [[teacher-ai-competency|professional development]] for pre- and in-service teachers, which the authors name as a precondition for implementation.
- Read single-study effect sizes cautiously, because the range from 0.16 to 4.93 partly tracks differences in what each study called AI literacy.

## Limitations

- Only 16 studies were included, fewer than traditional meta-analysis requires; the authors note this reduced the statistical power of the moderator analyses.
- Heterogeneity was very high (I2=94.68%) and was not explained by the moderators tested, so the pooled effect may vary by intervention design, context, and measurement.
- Cognitive and affective outcomes were combined under a broad definition of AI literacy, pooling measures with different properties into one estimate.
- Two studies reported no participant breakdown by school level, and detailed grade levels were not analyzed.

## Connected Concepts

- [[ai-literacy]]
- [[ai-education]]
- [[meta-analysis-systematic-review]]
- [[learning-gains]]
- [[educational-measurement]]
- [[limitations-in-aied-research]]
## Connected Articles

- [[liu-ai-literacy-interventions-meta-analysis-2026]] — a parallel meta-analysis of AI literacy interventions that also tests moderators and reports similarly large effects.
- [[ai-literacy-instrument-development-systematic-review-2026]] — documents the measurement fragmentation and psychometric gaps that this review names as the source of its heterogeneity.
- [[caruana-pre-university-ai-education-slr-2026]] — a systematic review of pre-university AI education covering the same curricular landscape at the level of trends and pedagogical challenges.
- [[stanford-evidence-base-ai-k12-2026]] — a broader K-12 AI evidence review that situates this effect estimate within the wider body of school-level AI research.

## Citation

Yu, Wonjin; Kim, Nari; Chang, Ammi; Huang, Wanju. (2026). *[The Effects of K-12 Artificial Intelligence Education in Enhancing AI Literacy: A Meta-Analysis](https://doi.org/10.1002/jcal.70308)*. Journal of Computer Assisted Learning, 42, e70308. https://doi.org/10.1002/jcal.70308