---
title: "Predictors of the ethical use of generative AI in higher education"
created: "2026-09-16T11:00:00-04:00"
updated: "2026-09-16T13:40:00-04:00"
type: article
tags: [academic-integrity, ethics, ai-literacy, higher-ed, ai-education, critical-thinking, privacy, generative-ai, governance]
audience: [learners, instructors, administrators]
research_method: [survey, structural equation modeling, educational measurement]
sources: ['raw/papers/10.3389_feduc.2026.1942426.md']
confidence: high
---

> **Synthesis:** Tabares-Cruz and colleagues survey 980 students at the State University of Milagro (Ecuador) to test which competencies and institutional conditions predict the ethical use of generative AI in academic work. A covariance-based [[quantitative-research|structural equation model]] with six antecedent constructs fits the data almost perfectly (CFI = 0.998; RMSEA = 0.008) and accounts for 44.0% of the variance in ethical GenAI use, with [[academic-integrity|academic integrity and transparency]] the strongest predictor (β = 0.231). The core argument is that responsible use is not a by-product of technical proficiency or frequency of use, but the joint product of [[ethics|ethical]] principles, critical verification, [[self-regulated-learning|self-regulation]], and clear institutional [[governance]].

## Key Findings

**Academic integrity and transparency dominate.** Of the six predictors, academic integrity and transparency had the strongest standardized effect on ethical GenAI use (β = 0.231; B = 0.332, p < 0.001), followed by ethical and technical [[ai-literacy|AI literacy]] (β = 0.181), [[critical-thinking|critical thinking]] and content verification (β = 0.177), institutional guidance and ethics education (β = 0.159), self-[[regulation]] and academic responsibility (β = 0.119), and data protection, [[privacy]], and risk management (β = 0.114). All six structural paths were positive and statistically significant, and no 95% confidence interval included zero, supporting H1–H6.

**Six predictors explain 44% of the variance.** The six exogenous constructs jointly explained R² = 0.440 of the variance in the endogenous construct, leaving 56.0% unexplained — the authors read this as meaningful but explicitly non-exhaustive explanatory capacity, with other individual, [[pedagogy|pedagogical]], technological and contextual factors still at work.

**Model fit was exceptionally close.** Fit indices were χ² = 936.899, df = 881, χ²/df = 1.063, CFI = 0.998, SRMR = 0.021, RMSEA = 0.008, PClose = 1.000. The authors caution that such indices show compatibility with the a priori specification, not that the model is uniquely correct, and note that no competing models were estimated.

**Bivariate associations were moderate.** Predictor-to-outcome correlations ranged from r = 0.370 (data protection/privacy) to r = 0.507 (academic integrity and transparency), all p < 0.001; across the full construct matrix correlations ranged from r = 0.248 to r = 0.507. HTMT values (0.442–0.762, all below 0.85) and AVE exceeding MSV for every construct supported discriminant validity among the seven latent dimensions.

**Awareness and training gaps coexist with wide adoption.** Only 24.2% of students said they clearly knew institutional AI rules and 38.9% reported partial knowledge; 17.1% had no formal AI training, 22.6% were self-taught, and 25.0% had completed an institutional course. AI use itself was widespread but not fully consolidated: 36.3% used these tools "sometimes", 25.2% "rarely", and the dominant purposes were information retrieval (23.4%), [[writing-education|academic writing]] (21.5%) and text summarization (20.6%).

**Privacy behaves as a conditional, situation-specific safeguard.** The authors explain the comparatively weaker privacy path as a matter of situational activation rather than normative importance: integrity decisions about authorship and disclosure are triggered by nearly every AI-assisted task, whereas privacy safeguards only matter when personal data, confidential documents or institutional information enter the interaction.

## Study Design & Method

A quantitative, applied, non-experimental, cross-sectional, correlational and confirmatory design using covariance-based structural equation modeling (CB-SEM) in IBM SPSS AMOS. The target population was 3,850 enrolled students at the State University of Milagro during the 2026 academic period; the final sample of **980 students** was recruited by non-probability purposive sampling, with informed consent required before the Google Forms questionnaire could be opened. The sample was 56.8% female, 63.6% undergraduate, 28.8% from Education, and 45.8% in face-to-face modality.

Data came from a purpose-built **44-item questionnaire** on a five-point Likert scale covering seven dimensions: ethical and technical AI literacy, academic integrity and transparency, critical thinking and content verification, self-regulation and academic responsibility, data protection/privacy/risk management, and institutional guidance and ethics education (six items each, the six exogenous constructs), plus **eight items** measuring the endogenous construct, ethical GenAI use in [[higher-ed|higher education]]. Seven reverse-worded indicators (AET6, IAT6, PCV6, ARA6, PDP6, OIF6, UEI7) were reverse-scored before analysis; a sensitivity analysis showed their removal *lowered* Cronbach's alpha in every dimension (0.837–0.913), so all 44 items were retained.

Psychometric quality was strong: standardized loadings 0.671–0.811, composite reliability 0.896–0.938, AVE 0.508–0.605, Cronbach's alpha 0.861–0.924, McDonald's omega 0.896–0.938. Multicollinearity was acceptable (tolerance 0.688–0.831; VIF 1.204–1.454). The measurement and structural models were specified a priori on theoretical grounds, no exploratory factor analysis was run, no correlated residuals were added, and modification indices were consulted only diagnostically — a deliberate confirmatory stance the authors report explicitly.

## Implications for AI in Education

The findings reframe responsible AI use as a governance and assessment problem, not merely a skills problem. Because **authorship and disclosure decisions carry the largest weight**, institutions should prioritize [[ai-use-disclosure|disclosure protocols]], clear norms distinguishing original from AI-generated content, and assessment designs that require students to account for algorithmic assistance — rather than relying on detection or prohibition. Technical [[ai-literacy]] alone is insufficient: the model separates understanding how models work from the normative criteria that decide whether a use is acceptable.

Since **institutional guidance and ethics education** contributed independently (β = 0.159), the authors argue that institutional support should be modelled as a distinct condition rather than an extension of individual competence. Their recommendations include integrating ethics and technical AI literacy across the [[curriculum-design|curriculum]], teaching systematic content verification against [[hallucination-risk|inaccurate or biased output]], strengthening data-protection practices, and keeping guidelines consistent across courses, modalities and academic levels.

The gaps in awareness (only ~a quarter of students clear on policy) and training are presented as actionable: training should reach beyond functional tool use into authorship, transparency, [[bias-mitigation|algorithmic bias]], accountability for AI-assisted outputs, and the limits of algorithmic support. Given the frequency-of-use finding in prior work and the [[ethics|ethical]] framing here, the practical message is that exposure to [[generative-ai]] does not by itself produce responsible practice — deliberate instruction and [[governance|institutional policy]] must do the work.

## Limitations

- **Cross-sectional, non-experimental design:** no temporal precedence, so paths are predictive associations, not causal effects.
- **Non-probability purposive sampling:** with 3,850 eligible students and 980 respondents, selection probabilities were unknown; the large sample does not substitute for random selection, and self-selection and coverage bias cannot be ruled out. Generalization beyond the participating students and institution is cautioned.
- **[[self-report-measures|Self-reported measures]]:** susceptible to social desirability bias and to discrepancies between reported and actual behavior; no behavioral indicators, authentic-task data or platform interaction logs were collected.
- **No competing models or cross-validation:** the [[educational-measurement|psychometrics]] come from the same sample used to estimate the structural model, and no held-out or independent data were used; alternative specifications were deliberately not estimated post hoc, so model uniqueness is not established.
- **Explained variance is incomplete:** 56.0% of variance remains unaccounted for, and predictor-specific Cohen's f² was not estimated because nested re-estimation was not performed.

## Connected Concepts

- [[academic-integrity]]
- [[ai-literacy]]
- [[ethics]]
- [[higher-ed]]
- [[critical-thinking]]
- [[privacy]]
- [[generative-ai]]
- [[self-regulated-learning]]
- [[governance]]

## Connected Articles

- [[lopez-lopez-academic-integrity-ai-study-practices-2026]] — Academic integrity and AI study practices
- [[ssaho-ai-academic-integrity-review-2025]] — Review of AI and academic integrity
- [[ethical-use-ai-engineering-education-review-2026]] — Ethical use of AI in engineering education
- [[genai-chatgpt-adoption-ethics-students-2026]] — Ethical and behavioral factors in ChatGPT adoption
- [[aigc-affordance-student-self-regulation-2026]] — AIGC affordances and student self-regulation
- [[longitudinal-ai-usage-ethics-policy-teacher-education-2026]] — Longitudinal AI usage, ethics and policy
- [[institutional-ai-policy-health-informatics-2026]] — Institutional AI policy in health informatics

## Citation

Tabares-Cruz, Y. B., Cevallos-Sánchez, H. A., Arteaga-Pita, I. G., et al. (2026). [Predictors of the Ethical Use of Generative Artificial Intelligence in Higher Education](https://doi.org/10.3389/feduc.2026.1942426). *Frontiers in Education, 11*, 1942426.
