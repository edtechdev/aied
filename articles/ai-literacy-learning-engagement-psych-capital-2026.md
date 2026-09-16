---
title: "The impact of artificial intelligence literacy on learning engagement among university students: the mediating role of psychological capital and the moderating role of professional identity"
created: "2026-09-16T12:25:00-04:00"
updated: "2026-09-16T13:40:00-04:00"
type: article
tags: [ai-literacy, student-engagement, self-efficacy, motivation, learner-identity, career-development-and-readiness, higher-ed, self-determination-theory]
audience: [researchers, instructors, administrators, curriculum designers]
research_method: [structural equation modeling, survey, quantitative]
sources: ['raw/papers/10.3389_fpsyg.2026.1892204.md']
confidence: high
---

> **Synthesis:** Wang (2026) tests a moderated mediation model on 1,198 [[higher-ed|undergraduates]] from four universities in Zhengzhou, China, showing that [[ai-literacy|AI literacy]] not only directly predicts [[student-engagement|learning engagement]] but also works indirectly by building psychological capital — a resource-transformation chain in which a technological cognitive resource becomes a psychological resource and then a behavioural one. Drawing on Conservation of Resources Theory with [[self-determination-theory|Self-Determination Theory]] and Broaden-and-Build as complements, the study finds that [[learner-identity|professional commitment]] does not itself drive engagement but acts as a contextual amplifier, roughly doubling the efficiency with which psychological capital converts into engagement. The finding reframes AI literacy training as necessary but insufficient: its educational payoff depends on simultaneous psychological and identity work.

## Key Findings

- **AI literacy directly predicts learning engagement.** The baseline PLS-SEM model explained a substantial share of variance (R² = 0.446), with a standardized path from AI literacy to learning engagement of β = 0.668 (p < 0.001), supporting H1.
- **Psychological capital partially mediates the literacy–engagement link.** In the mediation model, AI literacy predicted psychological capital (β = 0.712, p < 0.001) and psychological capital predicted learning engagement (β = 0.459, p < 0.001), while the direct path remained significant (β = 0.347, p < 0.001). The indirect effect was 0.327 (95% CI [0.289, 0.365], 5,000 bootstrap resamples), with a variance accounted for (VAF) of 48.5% — partial, not full, mediation (H2 supported).
- **Professional commitment moderates the psychological capital → engagement path.** The interaction term (psychological capital × professional commitment) was significant (β = 0.134, t = 5.288, p < 0.001; f² = 0.018, small-to-medium), while professional commitment had no significant main effect on learning engagement (β = 0.011, t = 0.384, p = 0.701) — evidence for moderation rather than a direct effect (H3 supported).
- **Simple slopes show a near doubling of effect at high commitment.** The slope of psychological capital predicting engagement was 0.324 at one SD below the mean, 0.459 at the mean, and 0.593 at one SD above the mean — 83.0% higher in the high-commitment group.
- **The indirect effect is conditioned on professional commitment.** The AI literacy → psychological capital → engagement indirect effect rose from 0.204 (SE = 0.023, 95% CI [0.160, 0.249]) at low commitment to 0.289 at the mean and 0.374 (SE = 0.022, 95% CI [0.332, 0.418]) at high commitment — an 83.3% increase, with the index of moderated mediation significant at β = 0.307 (p < 0.001).
- **Demographic differences were substantial.** Males scored higher on AI literacy (t = 5.51, p < 0.001) while females scored higher on learning engagement (t = 9.74, p < 0.001); student leaders reported higher learning engagement (t = 5.72), psychological capital (t = 5.46), and professional commitment (t = 5.79, all p < 0.001); grade-level differences emerged for learning engagement (F = 8.19) and professional commitment (F = 15.82, both p < 0.001), with freshmen and seniors relatively higher.
- **Professional commitment was empirically independent of the other constructs.** Its correlations with AI literacy (r = 0.001, p = 0.997) and learning engagement (r = 0.063, p = 0.063) were near zero — a pattern the author reads as evidence that it works as a pure boundary condition rather than a confounded proxy predictor.

## Study Design & Method

Cross-sectional questionnaire survey of undergraduate students at four universities in Zhengzhou, Henan Province, conducted February–April 2026. A stratified random sampling design was used, with strata formed from the full combination of gender (male/female), grade level (freshman–senior), and student leadership status (2 × 4 × 2 = 16 strata), proportional allocation by stratum, and a mixed-mode [[administrator|administration]] (719 online via Wenjuanxing, 681 offline paper). After excluding invalid responses — excessive missing data, patterned responding, or completion times below two SDs of the mean — 1,198 valid [[self-report-measures|questionnaires]] remained, an effective response rate of 85.6%. The sample was 49.0% female (587), 51.0% male (611); by grade, 339 freshmen (28.3%), 291 sophomores (24.3%), 311 juniors (26.0%), 257 seniors (21.5%); 237 (19.8%) held student leadership positions. The gender distribution closely matched the national figure of 50.76% female higher-education enrolment.

Instruments: AI literacy via the College Students' Artificial Intelligence Literacy Scale (Kou, 2025; six dimensions — AI perception, comprehension, knowledge, skills, evaluation, innovation; 22 items; 5-point); professional commitment via the Lian et al. (2005) Professional Commitment Scale (ideal, affective, continuance, normative; 27 items, three reverse-coded; 5-point); psychological capital via the Positive Psychological Capital Questionnaire (Zhang et al., 2010; self-efficacy, resilience, hope, optimism; 27 items; 7-point); learning engagement via the Utrecht Work Engagement Scale for Students (Schaufeli et al., 2002; vigor, dedication, absorption; 17 items; 7-point). [[educational-measurement|Psychometrics]] were strong: Cronbach's α = 0.93–0.99, composite reliability = 0.96–0.99, AVE = 0.78–0.84, item loadings = 0.89–0.92. Procedural remedies for common method bias included temporal separation (predictors before outcomes), differential scale anchors across constructs, and anonymity assurances; Harman's single-factor test extracted a first factor accounting for 47.3% of variance, below the 50% threshold.

Analysis used SPSS 26.0 for descriptives and Pearson correlations and SmartPLS 4.0 for PLS-SEM, chosen over CB-SEM for its prediction orientation, tolerance of model complexity (mediation, moderation, second-order construct, interaction term), lack of multivariate normality requirements, and suitability for exploratory [[theory-development-aied|theory development]]. Mediation and moderated mediation were tested with 5,000 bootstrap resamples and 95% bias-corrected confidence intervals excluding zero; simple slopes were plotted at ±1 SD of the moderator. Discriminant validity was supported (all HTMT values below 0.85; e.g. AI literacy–psychological capital 0.713, AI literacy–engagement 0.676, psychological capital–engagement 0.718) and multicollinearity was absent (all VIFs below 5; AI literacy 2.035, psychological capital 2.031, professional commitment 1.001, interaction term 1.004).

## Implications

- **Skills training alone is insufficient.** Because psychological capital transmits roughly half of the AI literacy effect on engagement, institutions should pair AI literacy curricula with activities that generate success experiences and positive feedback — scaffolded, progressively difficult AI-assisted projects — to build [[self-efficacy|self-efficacy]], hope, optimism, and resilience.
- **Identity work should precede or accompany skill investment.** For students with weak professional identity — freshmen, transfer students, or those assigned to a major involuntarily — professional orientation courses, alumni career [[storytelling-in-education|storytelling]], industry–university practice programmes, and faculty mentoring that links academic content to career relevance should take priority, since without an identity carrier even high psychological capital fails to convert into sustained behaviour.
- **Differentiate by student profile.** Students high in AI literacy but low in psychological capital benefit most from small-step, achievable [[group-work|group projects]]; those high in psychological capital but low in professional commitment need identity-focused interventions; those low on both need foundational support on both dimensions at once.
- **Monitor and screen.** Universities can embed psychological capital and professional commitment measures into academic monitoring systems to flag the two priority groups (high literacy/low capital, high capital/low commitment) and target interventions cost-effectively, while producing data to evaluate intervention effects over time.
- **Theorists gain a resource-transformation account.** Positioning professional commitment as a contextual amplifier rather than a direct predictor reconciles previously inconsistent findings that AI use sometimes enhances and sometimes erodes [[active-learning|active learning]] behaviours: benefits are contingent on the co-presence of psychological resources and professional identity.

## Limitations

- The cross-sectional design precludes strict causal inference; reverse or reciprocal paths (e.g. engaged students seeking out AI literacy) cannot be ruled out. Longitudinal designs or pretest–posttest intervention studies are needed.
- The sample is confined to undergraduates at four universities in Zhengzhou, limiting generalizability across regions, disciplines, and educational levels.
- Only psychological capital as a composite construct was tested as a mediator; future work should disaggregate AI self-efficacy, technological resilience, and other specific mediators.
- Rapid iteration of [[generative-ai|generative AI]] is shifting use from shallow instrumental application toward deep collaborative co-creation, so the conceptualization and measurement of AI literacy — and assessment tools capable of capturing adaptability and reflection across usage patterns — must evolve accordingly.

## Connected Concepts

- [[ai-literacy]] — the independent variable, treated as a technological cognitive resource that predicts engagement directly and via psychological capital
- [[student-engagement]] — the outcome, operationalized as vigor, dedication, and absorption on the UWES-S
- [[self-efficacy]] — one of the four psychological capital dimensions and the theoretical hinge of the cognitive mechanism
- [[self-determination-theory]] — used to explain how autonomy and competence need satisfaction convert AI literacy into psychological resources
- [[motivation]] — the intrinsic motivational state that need satisfaction activates along the pathway
- [[learner-identity]] — professional commitment as identity-based boundary condition; self-verification and social identity theories account for its amplifying role
- [[career-development-and-readiness]] — the study frames professional commitment as a malleable, career-relevant psychological variable that institutions can cultivate
- [[higher-ed]] — institutional context for the intervention implications

## Connected Articles

- [[genai-motivation-engagement-2026]] — SDT-based modelling of autonomy support and autonomous motivation as mediators of GenAI's effect on engagement, testing an adjacent motivational pathway
- [[student-motivation-need-satisfaction-genai-sdt-2026]] — decomposes GenAI-supported learning by autonomy, competence, and relatedness satisfaction, the same needs mechanism invoked here
- [[liang-ai-learning-motivation-sdt-2026]] — latent transition analysis linking self-determined motivational profiles to gains in AI literacy, the reverse-direction counterpart to this pathway
- [[wang-goal-setting-ai-engagement-2026]] — SEM study of learning engagement in AI-assisted learning with a different motivational lens (achievement goal orientations)
- [[student-dependency-on-ai-literacy-self-efficacy-2026]] — shows AI literacy alone does not protect against overreliance and that self-efficacy matters at least as much, echoing the "literacy is not enough" argument
- [[ai-literacy-career-adaptability-business-2026]] — finds AI readiness and AI self-efficacy, not literacy alone, link AI competence to career adapt-abilities, a parallel mediation account
- [[sun-llm-nursing-education-professional-identity-2026]] — examines how AI integration reshapes professional identity formation, the construct this study treats as a moderator

## Citation

Wang, N. (2026). [The impact of artificial intelligence literacy on learning engagement among university students: the mediating role of psychological capital and the moderating role of professional identity](https://doi.org/10.3389/fpsyg.2026.1892204). *Frontiers in Psychology, 17*, 1892204.
