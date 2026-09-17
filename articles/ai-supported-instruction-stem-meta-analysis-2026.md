---
title: "The Impact of Artificial Intelligence-Supported Instruction on Student Learning in STEM: A Systematic Review and Meta-Analysis"
created: "2026-09-16T09:14:31-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
tags: [meta-analysis-systematic-review, stem-education, learning-gains, intelligent-tutoring, adaptive-learning, personalized-learning, science-education, math-education, engineering-education, higher-ed, k-12, ai-education]
foundations: [ai-education]
technology: [adaptive-learning, intelligent-tutoring, personalized-learning]
assessment: [learning-gains, meta-analysis-systematic-review]
sources: ['raw/papers/ai-supported-instruction-stem-meta-analysis-2026.md']
confidence: high
research_method: [systematic review, meta-analysis]
audience: [educators, researchers, policymakers, curriculum designers]
level: [k 12, higher ed, secondary, elementary]
category: [synthesis]
discipline: [stem education]
---

> **Synthesis:** This [[meta-analysis-systematic-review|systematic review and meta-analysis]] pools 35 experimental and quasi-experimental studies published between 2005 and 2025 to estimate how AI-supported instruction affects student learning in [[stem-education|STEM education]]. Using Hedges' g under a random effects model, the authors report a moderate to strong positive overall effect (g = 0.670, 95% CI [0.491, 0.848], p < 0.001), largest at the high school level and for interventions lasting more than one month and up to two months. Differences between science, [[math-education|mathematics]] and technology/engineering were not statistically significant, and the publication bias diagnostics suggested the overall result was robust, although heterogeneity across studies was substantial and the authors applied no formal quality appraisal tool.

## Key Findings

1. Across the 35 included studies, the random effects estimate of AI-supported instruction on STEM achievement was g = 0.670 (95% CI [0.491, 0.848], Z = 7.35, p < 0.001), described by the authors as a moderate to strong positive effect relative to traditional teaching.
2. The fixed-effect counterpart for the same 35 studies was g = 0.593 (95% CI [0.522, 0.664], Z = 16.36, p < 0.001). The authors prefer the random effects model because it incorporates between-study variance into the estimate and is therefore more conservative and generalizable ([[quantitative-research|effect-size synthesis]]).
3. Heterogeneity must be read model by model, as the paper reports it separately: the fixed-effect analysis shows a high level of inconsistency (Q = 199.76, I2 = 82.98%), while the random effects analysis reports I2 = 15.75% once between-study variance (τ2) is modeled. The high fixed-effect heterogeneity is the authors' main reason for not treating AI as uniformly effective.
4. Educational level was the strongest and only clearly significant moderator (between-group Q = 30.13, df = 3, p < 0.001): high school showed the largest effect (g = 1.099, 95% CI [0.89, 1.30], Z = 10.53, p < 0.001), followed by university (g = 0.578, 95% CI [0.48, 0.68], Z = 11.67, p < 0.001), elementary or primary (g = 0.465) and [[k-12|middle school]] (g = 0.392).
5. Intervention duration also moderated effects (between-group Q = 16.95, df = 5, p = 0.004). The strongest band was more than one month and up to two months (g = 0.833, 95% CI [0.67, 0.99], Z = 10.30, p < 0.001); short interventions of up to five hours were also significant (g = 0.621, p = 0.003); the weakest band, more than one and up to seven days, was not statistically significant (g = 0.256, p = 0.070).
6. There was no consistent pattern of increasing effectiveness with longer duration. Duration bands of more than two and up to three months (g = 0.618) and more than three months (g = 0.576) sat below the one-to-two-month band, which the authors read as evidence that instructional quality matters more than mere exposure time.
7. Subject area differences were small and not statistically significant (between-group Q = 4.85, df = 2, p = 0.088): science g = 0.676, mathematics g = 0.650, technology and engineering g = 0.501. The authors explicitly caution that cross-disciplinary differences should be interpreted with caution and instead read the result as cross-disciplinary potential for adapted tools.
8. Class size produced a marginally significant between-group difference (Q = 4.61, df = 2, p = 0.099), with the largest effect in medium-sized classes (g = 0.687), then large classes (g = 0.545) and small classes (g = 0.448).
9. Publication bias diagnostics pointed to minimal distortion. The funnel plot was generally symmetrical around the mean effect with a few high-effect outliers on the right; Egger's regression intercept test was not significant (p = 0.095), while Begg's test was borderline (tau = −0.2303, p = 0.0517), which the authors ask readers to weigh with caution.
10. Trim-and-fill imputed only one missing study and adjusted the mean effect upward from g_mean = 0.6799 to 0.7269 (95% CI [0.6696, 0.7841]). The increase rather than decrease is attributed to sampling variability, and the authors conclude publication bias did not substantially change the conclusions.
11. Rosenthal's fail-safe number was 2404, meaning that many null-effect studies would be needed to make the pooled result non-significant; by Rosenthal's (1979) criterion the authors treat the meta-analytic findings as robust.
12. Theoretical interpretation draws on cognitive load theory, [[constructivist]] and sociocultural accounts of AI as a mediational artifact within the [[sociocultural-learning|zone of proximal development]], and [[tpack]] and [[samr-model|SAMR]]; the authors conclude AI-supported instruction mostly augments or modifies existing practice rather than transforming it.
13. The overall picture is conditional rather than universally positive: AI is not inherently effective but becomes effective under specific [[pedagogy|pedagogical]] and contextual conditions, with learner readiness, design quality and implementation driving the variation.

## Study Design and Method

The review followed [[research-methods-aied|PRISMA]] 2020 guidance and the protocol was registered on OSF. Searches ran in September 2025 across Web of Science, Scopus, ERIC, ScienceDirect, Google Scholar and the Council of [[higher-ed|Higher Education]] National Thesis Center, in Turkish and English, using Boolean strings combining AI terms ([[conversational-ai|chatbot]], [[intelligent-tutoring|intelligent tutoring system]], [[adaptive-learning|adaptive learning]], [[machine-learning|machine learning]], deep learning) with STEM and achievement terms. The window opened in January 2005 and closed on 1 September 2025.

The PRISMA flow records 450 records identified, 86 duplicates removed before screening, 364 titles and abstracts screened with 319 excluded, 45 reports sought for retrieval with 2 not retrievable, and 43 full-text reports assessed. Of these, 8 were excluded for insufficient quantitative data (n = 5) or poor methodological quality (n = 3), leaving 35 studies. Most included studies (n = 29) were published after 2020.

Inclusion required an AI-supported intervention in a STEM field, an experimental or quasi-experimental design with comparison groups, measurable achievement outcomes and sufficient statistics (N, M, SD) for an effect size; book chapters and letters to the editor were excluded, while preprints, theses and conference papers were considered. Three researchers coded the studies: they first coded pilot studies jointly to standardize the form, then randomly assigned studies to two independent coders, reaching Cohen's Kappa κ = 0.93. Only one effect size was extracted per study to preserve statistical independence, and Hedges' g was chosen over Cohen's d because the correction factor reduces small-sample bias. Analyses used Comprehensive Meta-Analysis (CMA) 3.0.

## Implications

The authors argue AI should be treated as a [[pedagogical-partnerships|pedagogical partner]] rather than an autonomous instructional agent. Because effectiveness depends on design quality, they call for AI tools aligned with learning objectives and structured to manage cognitive load, and warn that poorly designed implementations risk superficial engagement, [[cognitive-offloading|over-reliance]] on [[ai-feedback-quality|automated feedback]], or overload. They stress [[teacher-ai-competency|teacher competence]] to evaluate AI outputs critically, and flag [[equity-in-ai-education|equity]] risk: differences in infrastructure, learner readiness and resources could let AI reinforce existing inequalities, so they recommend sustained, system-level integration instead of isolated short-term pilots.

## Limitations

The authors state several limitations directly. Heterogeneity remained high, leaving a substantial share of variance unexplained and pointing to unmeasured moderators such as implementation fidelity, [[teacher-role|teacher]] involvement and learner characteristics. The predominance of short- to medium-term interventions limits what can be said about long-term [[sustainability]] and transfer, so longitudinal work is needed. The evidence base is mostly cognitive and achievement-focused, so affective, [[motivation|motivational]] and [[metacognition|metacognitive]] outcomes are underrepresented, and the role of [[generative-ai|generative AI]] in relation to accuracy, trust and [[critical-thinking|critical thinking]] needs more study. Cross-cultural and contextual comparisons remain underexplored. Critically, the authors did not apply a formal quality appraisal tool: methodological quality was operationalized through the predefined inclusion and exclusion criteria, which they describe as ensuring a minimum threshold of rigor, and the three studies excluded for poor quality were judged on that basis rather than a validated appraisal instrument. The borderline Begg's test (p = 0.0517) is also flagged as a reason for interpretive caution.

## Connected Concepts

- [[meta-analysis-systematic-review]] — the study's method: pooled effect sizes from experimental STEM studies
- [[stem-education]] — the setting and population for all included interventions
- [[learning-gains]] — the achievement outcomes synthesized (tests, exams, standardized assessments)
- [[intelligent-tutoring]] — one of the main AI intervention types in the pooled studies
- [[adaptive-learning]] — adaptive platforms and sequenced feedback as intervention designs
- [[personalized-learning]] — the personalization mechanism the authors credit for the effect
- [[science-education]] — highest-effect subject area subgroup
- [[math-education]] — closely matched subject area subgroup
- [[engineering-education]] — lower-effect technology and engineering subgroup
- [[higher-ed]] — the largest subgroup by number of studies (university level)
- [[k-12]] — primary, middle and high school subgroups, where effects diverged sharply
- [[ai-education]] — the broader field the synthesis contributes to

## Connected Articles

- [[bartos-ai-learning-meta-meta-analysis-2026]] — meta-meta-analysis of AI on learning outcomes
- [[genai-educational-outcomes-meta-analysis]] — meta-analysis of generative AI effects on educational outcomes
- [[ai-stem-bibliometric-trends]] — bibliometric mapping of AI research in STEM
- [[ai-metacognition-stem-review]] — review of AI and metacognition in STEM settings
- [[ai-science-chemistry-education-systematic-review-2025]] — systematic review of AI in science and chemistry education
- [[genai-meta-analysis-programming-learning]] — meta-analysis of generative AI in programming learning
- [[bin-bakheet-adaptive-ai-stem-deep-learning-2026]] — adaptive AI in STEM with deep learning methods
- [[ai-tutoring-quality-k12-methodologies-2026]] — methodological critique of K-12 AI tutoring evidence

## Citation

Doğan, Y., Kılıç, Z., Kalınkara, Y., & Talan, T. (2026). [The Impact of Artificial Intelligence-Supported Instruction on Student Learning in STEM: A Systematic Review and Meta-Analysis](https://doi.org/10.3390/jintelligence14060109). *Journal of Intelligence, 14*(6), 109.