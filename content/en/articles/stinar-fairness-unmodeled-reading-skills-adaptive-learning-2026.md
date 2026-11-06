---
title: "Fairness Implications of Unmodeled Reading Skills in Adaptive Learning Systems"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/stinar-fairness-unmodeled-reading-skills-adaptive-learning-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis]
audience: [researchers, educational technology developers, curriculum designers]
level: [middle school, secondary]
discipline: [math education]
technology: [adaptive-learning, knowledge-tracing, intelligent-tutoring, student-modeling]
methods: [quantitative-research]
ethics: [equity-in-ai-education, bias-mitigation, differential-effects-across-learner-groups]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Stinar and colleagues analyze two years of Carnegie Learning MATHia log data from 8,549 students to ask whether Bayesian knowledge tracing (BKT) treats emerging and non-emerging readers unfairly when reading ability is left unmodeled. Emerging readers mastered skills at lower rates (.687 versus .776 in 2021–2022, difference 95% CI [0.075, 0.095]), and although the aggregate BKT model showed only small bias (statistical parity −0.077), specific skills such as "apply exponent" produced gaps of 26% in predicted mastery. An [[differential-effects-across-learner-groups|intersectional analysis]] with gender and race/ethnicity found that emerging-reader status explains differences in mastery of up to 10% within demographic groups, leading the authors to argue that [[adaptive-learning|adaptive learning systems]] should treat [[reading-education|reading]] as a skill worth [[student-modeling|modeling]] for both [[equity-in-ai-education|fairness]] and [[knowledge-tracing|accuracy]].

## Key Findings

1. **Emerging-reader status predicts mastery in MATHia.** First-answer mastery base rates were .687 for emerging and .776 for non-emerging readers in 2021–2022 (mean difference .089, 95% CI [.0747, .0950]), and .673 versus .748 in 2022–2023 (mean difference .075, CI [.0722, .0932]).
2. **BKT predictions mirror the gap without inflating it.** Predicted mastery was .708 versus .752 (CI [0.0366, 0.0503]) and .679 versus .733 (CI [0.0317, 0.0452]); root-mean-square error differences were not significant (−.0031 and −.0006, with confidence intervals including 0), while calibration differences were significant but tiny (.0046 and .0054).
3. **Aggregate fairness metrics show small but statistically significant bias.** Statistical parity was −0.077 (2021–2022) and −0.066 (2022–2023), disparate impact 0.885 and 0.878, and average odds −0.052 and −0.047, against aggregate AUCs of 0.696/0.694 and RMSEs of 0.386/0.393.
4. **Skill-level bias is larger and concentrated in reading-heavy skills.** The "apply exponent" model had statistical parity −0.262 (a 26% difference in predicted mastery), disparate impact 0.609 and average odds −0.181; "identifying units" −0.175, 0.736 and −0.089; the more graphical "geometric transform" −0.009, 0.991 and −0.007. In all, 36 of the 50 skills analyzed were biased against emerging readers by statistical parity and disparate impact, and 34 by average odds.
5. **Reading status explains up to 10% of mastery differences within demographic groups.** Within female students the emerging-versus-non-emerging base-rate gap was .1007 (95% CI [.0857, .1161]) in 2021–2022 — the nearly 10% difference the authors highlight — and .0912 ([.0747, .1061]) in 2022–2023; for male students it was .0731 ([.0596, .0872]) and .0756 ([.0608, .0902]).
6. **Race/ethnicity patterns differ across years.** In 2021–2022, 8 of the 12 bootstrapped statistics were significant among non-emerging readers but only 1 of 12 among emerging readers; in 2022–2023, race/ethnicity also explained differences within emerging-reader groups, such as a white-versus-Hispanic base-rate difference of .0733 (CI [.0367, .1080]). The 2022–2023 white emerging-reader group was too small (n = 83) for calibration to be calculated.

## How reading status was measured

The emerging-reader category comes from an existing, validated reading comprehension model (Almoubayyed, Fancsali and Ritter, 2023a) that estimates a student's reading ability from behavior in MATHia's introductory workspace, using only the first few interactions: whether problem steps are correct on the first attempt, the total attempts per step, feedback prompts received, and hints requested per step. The workspace has a Gunning fog index of 7.5, roughly a seventh-grade reading level. The estimator was trained to predict standardized English Language Arts outcomes, and the lowest 25% of predicted probabilities within each grade level are classified as emerging readers — so the category is behavioral rather than diagnostic, and the authors caution it can conflate English language learner status with struggling-reader status.

The two datasets cover the 2021–2022 and 2022–2023 school years from several schools in one Northeastern United States school district, with students at the same grade level each year. The 2021–2022 dataset held 4,733 students, of whom 3,617 (76.4%) were non-emerging and 1,116 (23.6%) emerging; the 2022–2023 dataset held 3,816 students, with 2,895 (75.8%) non-emerging and 921 (24.2%) emerging readers. BKT models were trained with the pyBKT package on the 50 skills with the most interactions per dataset under five-fold cross-validation, with slip options of 0, 0.05 and 0.1 and guess options of 0, 0.1, 0.2 and 0.3. Fairness was assessed with statistical parity (difference in mastery rates), disparate impact (ratio of selection rates), average odds (mean false- and true-positive rate difference) and model calibration, and significance was tested by bootstrapping 10,000 iterations of differences in means at the 95% confidence level.

## Aggregates hide skill-level bias

At the aggregate level the MATHia BKT model looks close to fair: the authors report absolute statistical parity below .08 and absolute average odds below .06 in both years, and the three anti-discrimination criteria — independence, separation and sufficiency — are mostly satisfied. Yet the aggregate picture conceals the skills where bias concentrates: the "apply exponent" model predicted 26% lower mastery for emerging than non-emerging readers, and models for "identifying units" showed statistical parity of −0.175. The pattern is interpretable — the more graphical "geometric transform" skill, which demands less reading comprehension, was nearly unbiased, while the most text-dependent skills carried the largest gaps — and it holds across the corpus: 36 of the 50 skills were biased against emerging readers. The authors argue that aggregate-level audits alone are insufficient, because fairness at the system level can coexist with substantial unfairness inside individual knowledge components.

The significance of even the small aggregate differences matters because the base rates themselves differ: since emerging readers genuinely master fewer skills, no single model can be fair on every criterion at once. Higher predicted mastery for one group improves independence but worsens calibration or accuracy for the other, a trade-off the authors make explicit rather than resolve, citing parallel findings on mastery thresholds in adaptive learning.

## Reading status at the intersection of demographics

Gender differences appear only among emerging readers: within the emerging group, male-female base-rate differences of .0249 (CI [.0064, .0435]) in 2021–2022 and .0199 ([.0013, .0387]) in 2022–2023 were significant, while no gender difference was significant within non-emerging readers. The bigger effect runs the other way: within each gender, emerging-reader status explains large mastery gaps, up to the .1007 base-rate difference for female students in 2021–2022. Both groups are affected, though unequally.

Race/ethnicity results shift between years. In 2021–2022 the emerging-reader groups looked similar across race/ethnicity — only 1 of 12 statistics significant, consistent with the reading requirement dominating other differences — while non-emerging readers showed the usual significant gaps (8 of 12), for example white-versus-African-American base-rate differences of .0249 (CI [.0131, .0363]) and white-versus-Hispanic differences of .0437 (CI [.0288, .0588]). In 2022–2023 race/ethnicity explained differences within emerging readers as well, with white-versus-African-American (.0467, CI [.0138, .0771]), white-versus-Hispanic (.0733) and Hispanic-versus-African-American (−.0267, CI [−.0503, −.0042]) base-rate differences all significant. Across both years, emerging-reader status explained significant base-rate differences within every race/ethnicity group, from .0624 (white, 2022–2023) to .0926 (Hispanic, 2022–2023). The authors frame these as exploratory findings: the many comparisons raise type I error risk, and the analysis scripts are available on the Open Science Framework.

## What this means for practice

- **Audit fairness at the skill level, not just the system level.** Aggregate statistical parity of −0.077 hid skills like "apply exponent" with parity of −0.262 and a 26% gap in predicted mastery; 36 of 50 skills were biased against emerging readers even though the overall model looked near-fair. Fairness dashboards should report per-knowledge-component metrics alongside aggregate ones.
- **Consider modeling reading as its own skill.** The authors propose adding one or more reading skills to BKT models for steps that demand high reading comprehension, or weighting the slipping parameter by estimated emerging-reader probability, so reading ability is estimated alongside math knowledge instead of being conflated with it.
- **Expect a fairness trade-off, not a single fix.** Because base rates differ (.687 versus .776 in 2021–2022), raising predicted mastery for emerging readers improves parity but worsens calibration; designers must choose between equally predicted rates and equally correct predictions, and weigh options such as different mastery thresholds per skill.
- **Reading status is estimable from first interactions.** The validated estimator uses only introductory-workspace behavior — first-attempt correctness, attempts, feedback prompts and hints — so fairness grouping is feasible at scale (MATHia serves over 500,000 students) without test scores or demographic records, though the label should not be treated as an English-learner or disability diagnosis.

## Limitations

- The data come from several schools in a single Northeastern United States school district over two years, with gender categories limited to male/female and race/ethnicity to white, African-American and Hispanic as defined by the district, so generalization to other districts and regions is untested.
- The emerging-reader estimator is specific to MATHia's introductory workspace and may conflate English language learner status with struggling-reader status; the authors caution against using the estimates beyond low-stakes adaptive support.
- Only the 50 most commonly completed skills were analyzed; less frequent content could be non-random with respect to reading reliance and was excluded.
- The many bootstrapped comparisons are exploratory, raising the risk of type I error, and the authors call for confirmatory research in more contexts before the findings are treated as general.
- The 2022–2023 white emerging-reader group was too small (n = 83) for model calibration differences to be calculated at that intersection.

## Citation

Stinar, F., Lee, H., Belitz, C., Nasiar, N., Fancsali, S. E., Ritter, S., Almoubayyed, H., Baker, R. S., Ocumpaugh, J., & Bosch, N. (2026). *Fairness Implications of Unmodeled Reading Skills in Adaptive Learning Systems*. *Journal of Educational Data Mining*, 18(2), 242-268.
