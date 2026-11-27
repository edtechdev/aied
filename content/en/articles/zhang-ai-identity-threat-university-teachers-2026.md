---
title: "AI Identity Threat and Job Crafting Among University Teachers"
created: "2026-11-27T13:20:00-05:00"
updated: "2026-11-27T13:20:00-05:00"
type: article
published: "2026-11-16"
sources: ['raw/papers/zhang-ai-identity-threat-university-teachers-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [longitudinal study, structural equation modeling]
discipline: []
level: [higher ed]
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Zhang and Cui followed 563 university teachers at two institutions in central China across three waves to ask whether AI-related identity concerns precede changes in work. A random-intercept cross-lagged panel model separated stable differences between teachers from fluctuations within them. Teachers reporting more AI identity threat than usual subsequently sought more supervisor feedback in both intervals. Feedback seeking was associated with later job crafting in the second interval, while the first interval was inconclusive. The three-wave indirect association was positive. The authors caution that the two observation intervals were unequal, academic-calendar effects may contribute, and observational data cannot establish causal mediation. Feedback requests may link identity concerns to later work adjustment, but how feedback was received and used was not measured.

## Key Findings
1. **Threat preceded feedback requests.** Higher-than-usual AI identity threat was associated with more supervisor-directed feedback seeking in both observed intervals.
2. **Feedback preceded crafting in one interval.** Seeking was associated with later individual job crafting in the second interval; evidence in the first was inconclusive.
3. **The three-wave sequence was positive.** The T1 threat – T2 seeking – T3 crafting indirect association was positive and survived the authors' multiplicity checks.
4. **Within-person and between-person results differ.** The lagged paths describe changes within teachers, while positive random-intercept correlations describe stable differences between teachers.
5. **Direct threat-to-crafting paths were null.** Adjacent-wave paths from threat to crafting were not statistically significant, but the authors do not treat this as proof of full mediation.
6. **Measurement held up over time.** Each construct met the study's criteria for strict [[longitudinal-research|longitudinal]] invariance in separate models.

## What the three waves measured

Data were collected in February, April, and July 2026 at two provincially administered comprehensive universities in central China, approximately two and three months apart. The baseline group included 563 teachers; 544 responded at T2 (96.6%) and 526 at T3 (93.4%). At baseline, 68.4% were women, 72.8% held a doctorate, and 75.5% were in the lecturer-or-below category; natural sciences accounted for 40.5%. AI identity threat was measured with 12 adapted items on a seven-point agreement scale (α = 0.955–0.958), supervisor-directed feedback seeking with five items on a seven-point frequency scale (α = 0.923–0.938), and individual job crafting with six items on a seven-point frequency scale (α = 0.940–0.945). The feedback and crafting items were answered in relation to AI use or AI-related changes in academic work.

The [[primary-education|primary]] random-intercept cross-lagged panel model used 69 item indicators with scalar invariance constraints and fit as χ²(2301) = 2896.517, CFI = 0.983, TLI = 0.983, RMSEA = 0.021 (90% CI [0.019, 0.024]), and SRMR = 0.029. Separate measurement models for each construct met strict-invariance criteria; strict-model CFI values were 0.989 for threat, 0.985 for feedback seeking, and 0.981 for crafting. The authors note that high alpha values may reflect scale length and overlapping item content, especially repeated wording about respect and recognition among the threat items.

## What changed within teachers

The standardized lagged path from AI identity threat to feedback seeking was β = 0.428 (SE = 0.090, p < 0.001) from T1 to T2 and β = 0.398 (SE = 0.143, p = 0.005) from T2 to T3. Feedback seeking predicted job crafting in the second interval (β = 0.553, SE = 0.094, p < 0.001), while the first interval was inconclusive (β = 0.194, SE = 0.128, p = 0.130). The unstandardized difference between the two seeking-to-crafting coefficients was 0.446 (SE = 0.168, 95% Wald CI [0.116, 0.775], Wald χ²(1) = 7.007, p = 0.008). The authors warn that lagged coefficients depend on interval length and that teaching, assessment, or appraisal demands may differ across the academic calendar; the difference does not show that the underlying relationship strengthened.

The specific prospective indirect association was positive (b = 0.266, SE = 0.088, p = 0.003; 95% Wald CI [0.093, 0.438]; 95% Monte Carlo CI [0.112, 0.459]). A construct-score specification with different measurement assumptions gave b = 0.150 (95% bias-corrected bootstrap CI [0.035, 0.307]). Holm adjustment across five focal tests retained both threat-to-seeking paths, the second seeking-to-crafting path, and the indirect association; the first seeking-to-crafting path remained inconclusive (adjusted p = 0.143). Between teachers, random-intercept correlations were r = 0.401 for threat and seeking, r = 0.392 for threat and crafting, and r = 0.557 for seeking and crafting.

Adjacent-wave threat-to-crafting paths were not significant (β = −0.116, p = 0.468; β = −0.014, p = 0.892), and exploratory reciprocal paths were also inconclusive. Sensitivity estimates for the indirect association remained positive under strict invariance (b = 0.267), freed residual covariances (b = 0.269), complete cases (b = 0.265), an added longer-lag path (b = 0.224), and demographic covariates (b = 0.243). A post hoc simulation found detection rates of 34.1% and 8.9% for the first seeking-to-crafting path under fitted and reduced-effect scenarios, so its nonsignificance should not be read as evidence that the association is absent. Baseline feedback seeking predicted T3 noncompletion (OR = 1.641 per SD increase, 95% CI [1.122, 2.402], p = 0.011).

## What this means for practice
- **Institutions.** Consider evaluating feedback support alongside technical AI training, including [[ai-feedback-quality|feedback quality]], actual use, and teaching outcomes that the study did not directly assess.
- **Supervisors.** Hold voluntary developmental conversations about AI-related role expectations and explain how such conversations relate to formal appraisal and its records.
- **Instructors.** Clarify which contributions in AI-assisted teaching and research are valued, since supervisors can provide role information that teachers may seek under identity threat.
- **Researchers.** Combine [[teacher-role|teacher]] reports with supervisor reports, feedback records, and independently assessed work products before treating reported crafting as professional adaptation.
- **Researchers.** Add waves and contextual event measures to separate lag duration from calendar effects and to test time-varying influences.

## Limitations
- **[[self-report-measures|Self-reported]] constructs.** All three measures came from the same respondent, so shared reporting tendencies, recall differences, and social desirability may contribute to the associations.
- **No direct evidence of feedback use.** The study did not measure the content, quality, or use of supervisor feedback, nor independently assess whether work changes improved teaching.
- **Limited settings.** Teachers came from two purposively selected universities in central China, with voluntary participation and a concentration of lecturers or below.
- **Observational design.** Random intercepts do not rule out time-varying confounding, and the authors do not claim causal mediation; a single three-wave sequence was available.
- **Unequal intervals.** With approximately two and three months between waves, a coefficient contrast cannot separate duration from calendar position.
- **Selective attrition.** Higher baseline feedback seeking predicted T3 noncompletion, and missingness may also depend on unobserved responses.

## Citation

Zhang Z and Cui W (2026) AI Identity Threat and Job Crafting Among University Teachers. *Behavioral Sciences*, 16, 2166. https://doi.org/10.3390/bs16112166
