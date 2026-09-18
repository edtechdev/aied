---
title: "Psychological Profiles Associated with Trust in Artificial Intelligence Among University Students: A Machine Learning Clustering Approach"
created: "2026-09-16T08:12:19-04:00"
updated: "2026-09-16T08:12:19-04:00"
type: article
pedagogy: [anxiety-and-stress, self-efficacy, well-being]
technology: [learning-analytics, machine-learning, technology-acceptance-model]
assessment: [self-report-measures]
ethics: [equity-in-ai-education, trust, trust-calibration]
sources: ['raw/papers/trust-in-ai-psychological-profiles-ml-2026.md']
confidence: high
research_method: [survey, quantitative, learning analytics]
audience: [researchers, instructors, administrators]
level: [higher ed]
page_kind: [evaluation]
---

> **Synthesis:** Kumar, Anand, Butler & Bista (2026) surveyed 107 students at a public historically Black university ([[higher-ed|HBCU]]) in the Mid-Atlantic United States and applied [[machine-learning|K-means clustering]] to three [[self-report-measures|self-report measures]]: psychological resilience, perceived stress, and [[trust]] in AI. Three profiles emerged: "Moderately Stressed AI-Positive Students," "High-Resilience Low-Stress AI-Adopters," and "Psychologically Resilient AI Skeptics." All three psychological variables differed significantly across the profiles, with stress and AI trust separating them most strongly, while only gender was significantly tied to profile membership. The authors read this as evidence that trust in AI tracks psychological state more than demographic category, so students should be treated as a heterogeneous population rather than a single average, an argument they connect to [[trust-calibration|calibrated reliance]] instead of blanket acceptance.

## Key Findings

1. K-means clustering identified three psychological profiles among the 107 students in the final analytic sample: "Moderately Stressed AI-Positive Students" (n = 39), "High-Resilience Low-Stress AI-Adopters" (n = 47), and "Psychologically Resilient AI Skeptics" (n = 21).
2. Cluster selection was a judgment call rather than a clean statistical winner. Across K = 2 to K = 7 the silhouette coefficient was highest at K = 3 (0.288), but the Calinski–Harabasz index preferred K = 2 (45.43) over K = 3 (43.35); the authors kept three clusters for [[explainable-ai|interpretability]] while calling the separation weak or borderline.
3. The solution was stable. Repeating K-means with 100 different random initializations produced a mean adjusted Rand index of 0.989 (SD = 0.077), indicating highly reproducible cluster assignments.
4. All three clustering variables differed significantly across the profiles: psychological resilience (F = 23.88), AI trust (F = 56.51), and stress (F = 58.28), each p < 0.001.
5. Stress and AI trust showed the largest effects, with partial eta squared of 0.528 and 0.521 respectively against 0.315 for resilience. Emotional strain and attitudes toward AI, not resilience, separated student profiles most sharply.
6. The "High-Resilience Low-Stress AI-Adopters" combined the highest resilience (M = 4.18), lowest stress (M = 1.55), and favorable AI trust (M = 2.96).
7. The "Moderately Stressed AI-Positive Students" reported the highest AI trust of any group (M = 3.21) despite elevated stress (M = 2.29) and only moderate resilience (M = 3.52), suggesting strained students may still see AI as a support or coping tool.
8. The "Psychologically Resilient AI Skeptics" were almost as resilient as the adopters (M = 3.91) but far lower in AI trust (M = 1.97), with moderate stress (M = 2.15). This is the study's central evidence that confidence in one's own ability and confidence in AI are partially independent.
9. Gender was the only demographic variable significantly associated with cluster membership (χ2 = 10.34, p = 0.006); the AI Skeptics cluster was 90.5% female.
10. [[stem-education|STEM]] affiliation, academic level, employment status, and age group were not significantly associated with cluster membership (χ2 = 3.24, p = 0.198; 3.56, p = 0.469; 0.86, p = 0.930; 0.69, p = 0.709).
11. The AI Skeptics also had the highest share of STEM students (85.7%) and upper-level undergraduates (71.4%) among the clusters, so technical familiarity did not imply higher trust in AI.
12. Scale reliabilities were acceptable for an exploratory study: Cronbach's alpha of 0.69 for psychological resilience, 0.69 for AI trust, and 0.81 for perceived stress.
13. The sample was predominantly female (69.2%), STEM-affiliated (73.8%), aged 18–25 (84.1%), and senior-level (54.2%), with mean scores of 3.89 (SD = 0.53) for resilience, 2.86 (SD = 0.63) for AI trust, and 1.94 (SD = 0.48) for stress.
14. The authors interpret low AI trust among otherwise resilient students as potentially calibrated skepticism rather than resistance, framing it through appropriate reliance theory (Lee & See, 2004) and the idea that effective human–[[student-ai-interaction|AI interaction]] requires calibrated reliance instead of unconditional acceptance.

## Study Design & Method

- Cross-sectional [[quantitative-research|survey design]] with an interpretable ML pipeline, run in Python 3.12.
- Online questionnaire distributed through academic networks at one public HBCU; participation voluntary, all responses self-reported. 109 students responded, and case-wise deletion of missing or outlier values reduced the analytic sample to 107.
- Psychological resilience used items informed by the Mental Toughness Questionnaire framework (Dagnall et al., 2019); the appendix lists six five-point items on calm under pressure, perceived control, persistence, growth framing, confidence in success, and social ease.
- AI trust was adapted from prior AI trust and technology acceptance work (Choung et al., 2023) and the [[technology-acceptance-model|technology acceptance model]]; the appendix lists five items on trusting AI decisions, perceived fairness and bias, openness to AI, recommending AI services, and concern about AI-related job displacement (reverse coded).
- Perceived stress adapted the stress dimension of the Depression Anxiety Stress Scale (Parkitny & McAuley, 2010), with six four-point items on strain and agitation during the previous week.
- All features were z-standardized so resilience, AI trust, and stress carried equal weight; K-means partitioned students by Euclidean distance, with K evaluated from 2 to 7 via silhouette and Calinski–Harabasz indices plus stability checks. PCA reduced the feature space to two components for [[visualization]] only, not for clustering.
- Cluster differences were characterized with one-way ANOVA and partial eta squared, and demographics with chi-square. Sparse cells forced minor adjustments: the "prefer not to say" gender category (n = 2) was dropped, age was collapsed to 18–25 versus 26+, and academic level was grouped into lower undergraduate, senior, and graduate. Alpha was 0.05.

## Implications

- Students should not be addressed as a psychologically homogeneous audience for AI rollouts. The three profiles imply different starting points: students who are resilient and receptive, students under strain who may lean on AI for support, and confident students who remain skeptical of [[ai-technologies|AI systems]].
- Lower AI trust should not be read as unreadiness. The skeptics profile was the most resilient and the most STEM-heavy, which the authors treat as consistent with [[critical-thinking|critical evaluation]] rather than resistance to technology.
- Institutions implementing AI-supported learning may need to attend to students' confidence, control, stress, and trust alongside technical access, and the authors argue for explainable, human-centered AI: students low in AI trust may benefit from transparent information about how systems work, their limits, and appropriate contexts for use rather than from persuasion to adopt.
- The findings are framed as especially relevant to Minority Serving Institutions and HBCUs, where AI adoption research remains thin despite national emphasis on expanding AI research capacity, connecting the study to questions of [[equity-in-ai-education|equity in AI education]].

## Limitations

- All measures were self-reported, leaving room for social desirability bias, recall bias, and subjective interpretation of items.
- The sample was modest and drawn from a single public HBCU, and was predominantly female and STEM-enrolled. The authors state the profiles are context-specific and may not represent students at Predominantly White Institutions, other MSIs, or institutions outside the United States.
- Although the solution was stable across random initializations, the weak silhouette coefficient means the clusters should be read as meaningful but partially overlapping psychological profiles rather than fully distinct groups.
- Different internal validation indices favored different solutions (K = 2 versus K = 3), which the authors attribute to the inherent difficulty of identifying subgroup structure in moderate-sized psychological datasets.
- The cross-sectional design prevents causal inference: the study cannot say whether psychological characteristics shape AI trust or whether AI experiences shape psychological functioning.
- The authors call for larger multi-institution datasets, longitudinal designs tracking profiles over time, alternative clustering approaches such as hierarchical clustering or Gaussian mixture models, and tests of whether the profiles relate to outcomes such as [[learning-gains|academic performance]].

## Connected Concepts

- [[trust]] — the outcome construct at the center of the study, measured as confidence in and acceptance of AI systems.
- [[trust-calibration]] — the paper reads resilient students' low AI trust as calibrated skepticism rather than blanket rejection.
- [[anxiety-and-stress]] — perceived stress was one of the two strongest differentiators of the student profiles.
- [[well-being]] — psychological resilience and stress are treated as indicators of students' psychological functioning.
- [[self-efficacy]] — confidence in one's own abilities is the resilience-related theme that coexists with AI skepticism.
- [[machine-learning]] — K-means clustering with internal validation metrics and stability analysis is the analytic core.
- [[technology-acceptance-model]] — the AI trust scale was adapted from AI trust and technology acceptance literature.
- [[higher-ed]] — the study population is university students at a US HBCU.
- [[self-report-measures]] — all constructs came from voluntary Likert-scale questionnaire items.
- [[equity-in-ai-education]] — the institutional framing is HBCU and MSI AI research capacity.
- [[learning-analytics]] — the paper sits in the space of statistical and ML profiling of educational survey data.

## Connected Articles

- [[trust-reliance-ai-education-2026]] — trust and appropriate reliance in AI-assisted problem solving
- [[icet-ml-education-trust-2026]] — machine learning applied to trust in education
- [[human-ai-collaboration-trust-expectations]] — expectation effects on trust in human–AI collaboration
- [[task-context-trust-educational-hri-2026]] — task context and trust in educational human–robot interaction
- [[student-mental-models-genai]] — how learners model generative AI systems
- [[student-dependency-on-ai-literacy-self-efficacy-2026]] — dependence on AI alongside literacy and self-efficacy
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — student personas in higher education generative AI adoption
- [[zhang-ai-anxiety-academic-motivation-emotion-2026]] — AI anxiety, motivation, and emotion in academic settings
- [[student-math-competence-clustering]] — clustering students from survey and competence data
- [[xai-teachers-trust-edtech-recommendations-2026]] — explainability and trust in AI-driven educational recommendations

## Citation

Kumar, V., Anand, A., Butler, R., & Bista, K. (2026). [Psychological Profiles Associated with Trust in Artificial Intelligence Among University Students: A Machine Learning Clustering Approach](https://doi.org/10.3390/aieduc2030031). *AI in Education, 2*(3), 31.
