---
title: "Helpful or harmful? Generative AI dependence, self-reported critical thinking disposition, and self-perceived employability among business students"
created: "2026-09-23T12:30:00-04:00"
updated: "2026-09-23T12:30:00-04:00"
type: article
foundations: [cognitive-offloading, critical-thinking]
pedagogy: [career-development-and-readiness, student-ai-interaction]
technology: [generative-ai]
assessment: [self-report-measures]
methods: [quantitative-research]
institutions: [educational-policy-ai]
ethics: [ai-misuse-learning-harm]
audience: [researchers, instructors]
level: [higher ed]
research_method: [structural equation modeling, survey]
discipline: [business education]
page_kind: [evaluation]
sources: ['raw/papers/shojaei-genai-dependence-critical-thinking-employability-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]

---

> **Synthesis:** Shojaei, Armosh, Lihe, Hamacha, and Labib (2026) survey 412 undergraduate business students in Oman to ask whether [[generative-ai|generative AI]] use supports or undercuts learning and career readiness. Using [[quantitative-research|PLS-SEM]] as the primary estimator, with CB-SEM as a robustness check, they find that GenAI use is positively associated with GenAI dependence (β = 0.378, p < 0.001) and with self-perceived employability (β = 0.255, p < 0.001), and that its adjusted association with self-reported [[critical-thinking|critical-thinking]] disposition is positive (β = 0.185) even though the zero-order correlation is nearly zero (r = 0.050). GenAI dependence, modeled as both outcome and boundary condition, is negatively associated with both outcomes (β = −0.389 for critical-thinking disposition; β = −0.328 for employability) and weakens the links from use to those outcomes (β = −0.239 and β = −0.191). The authors read this as support for [[student-ai-interaction|reflective augmentation]] over substitutive reliance, making the quality of use, not its frequency, the actionable target.

## Key Findings

- **GenAI use was positively associated with GenAI dependence** (β = 0.378, p < 0.001), consistent with a [[cognitive-offloading|cognitive offloading]] and habit account of reliance.
- **Dependence was negatively associated with both outcomes** as main effects: critical-thinking disposition (β = −0.389, p < 0.001) and employability (β = −0.328, p < 0.001).
- **Dependence weakened the use to outcome links**, with negative interactions for critical-thinking disposition (β = −0.239, p < 0.001) and employability (β = −0.191, p < 0.001).
- **The use to critical-thinking link held only in the adjusted model** (β = 0.185); the zero-order correlation was r = 0.050 and the indirect path through dependence was −0.147.
- **Simple slopes showed attenuation, not reversal:** the disposition slope fell from 0.424 at low dependence to 0.185 at the mean and −0.054 at high dependence.
- **Critical-thinking disposition was positively associated with employability** (β = 0.437); the model explained R² = 0.476 of employability variance, 0.186 for disposition, and 0.143 for dependence.
- **All six hypotheses held in direction and significance under CB-SEM.**

## Study Design and Method

This is a [[quantitative-research|cross-sectional survey]] of undergraduate business students at three Omani universities (one public, two private), collected between February and June 2025. Of 587 questionnaires, 104 incomplete responses and 71 failing both attention checks were removed, leaving 412 valid cases, above the roughly 403 indicated by a power analysis. Constructs were measured reflectively on a seven-point agreement scale: frequency and breadth of GenAI use, habitual reliance, [[critical-thinking|critical-thinking]] disposition, and [[career-development-and-readiness|self-perceived employability]]. PLS-SEM with 5,000 bootstrap resamples was the primary estimator because the model includes latent interactions; a product-indicator CB-SEM model served as a robustness check. Loadings ranged from 0.795 to 0.892, composite reliability exceeded 0.90, and all HTMT values fell below 0.85, though [[self-report-measures|self-report]] item means fell in a narrow band from 4.42 to 4.54.

## Reading the Moderation and Indirect Paths

The moderation results read best as a boundary condition on GenAI use, not as evidence that use is harmful. At low dependence the GenAI use slope was 0.424 for critical-thinking disposition and 0.446 for employability; at the mean it matched the reported path coefficients; at high dependence the slopes were −0.054 and 0.064, with confidence intervals including zero, which the authors say is not a reversal. They also decompose the net association: GenAI use carries a negative indirect path of −0.147 (0.378 × −0.389) to disposition through dependence, offsetting the positive adjusted coefficient and helping explain the near-zero bivariate correlation. The framing is complementary: cognitive load theory explains why bounded use may free working memory, [[cognitive-offloading|cognitive offloading]] explains why excessive reliance removes practice at independent judgment, and habit formation explains how rewarded repetition becomes automatic. Dependence marks where [[student-ai-interaction|AI use]] shifts from augmentation toward substitution.

## What this means for practice

- **Instructors.** Require [[metacognition|verification and comparison]] of AI output, since gains here track reflective engagement rather than frequency.
- **Instructors.** Treat critical-thinking disposition as a pathway to [[career-development-and-readiness|employability]] (β = 0.437) and frame coursework around judgment tasks rather than output production.
- **Program leaders.** Because dependence tracks lower outcomes while use tracks higher employability, [[reducing-ai-misuse|misuse prevention]] should target habitual and substitutive patterns rather than discourage use.
- **Institutions.** The authors point to clear [[educational-policy-ai|institutional AI policies]], AI literacy training, and instructor preparation as practical levers.

## Limitations
- The cross-sectional design cannot show that GenAI use causes dependence or that students move from augmentation to substitution over time; reverse explanations remain open, including that students with weaker confidence in independent problem solving report both greater dependence and weaker disposition.
- All constructs come from one questionnaire, so common method bias is reduced but not eliminated (Harman's single-factor test explained 33.3% of variance; maximum full-collinearity VIF was 1.78), and self-perceived employability reflects student belief rather than employer assessment.
- Convenience sampling at three Omani universities limits generalization.
- GenAI dependence is an emerging construct spanning habitual reliance, reduced verification, and perceived loss of cognitive autonomy; one dominant factor emerged (first eigenvalue 3.49, 69.8% of variance, Cronbach's α = 0.892).

## Connected Concepts

- [[cognitive-offloading]]
- [[critical-thinking]]
- [[career-development-and-readiness]]
- [[student-ai-interaction]]
- [[generative-ai]]
- [[self-report-measures]]
- [[ai-misuse-learning-harm]]

## Connected Articles

- [[ai-dependency-self-efficacy-teacher-support-burnout-2026]] — AI dependency as a mediator of self-efficacy, teacher support, and burnout
- [[genai-decision-capability-cognitive-load-2026]] — GenAI, cognitive load, and business students' perceived decision capability
- [[ai-literacy-career-adaptability-business-2026]] — AI readiness and career adaptability in business education

## Citation

Shojaei, S. A., Armosh, F., Lihe, R., Hamacha, R., & Labib, J. (2026). [*Helpful or harmful? Generative AI dependence, self-reported critical thinking disposition, and self-perceived employability among business students*](https://doi.org/10.3389/feduc.2026.1885990).