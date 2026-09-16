---
title: "The impact of risk perception on perceived benefits of generative artificial intelligence users—an empirical study based on university students"
created: "2026-09-16T12:25:00-04:00"
updated: "2026-09-16T13:40:00-04:00"
type: article
tags: [technology-acceptance-model, generative-ai, higher-ed, trust, privacy, hallucination-risk]
audience: [researchers, instructors, administrators, policymakers]
research_method: [survey, quantitative]
sources: ['raw/papers/10.3389_fpsyg.2026.1866428.md']
confidence: high
---

> **Synthesis:** Du, Ning, Shi, and Chen (2026) ask not whether university students adopt [[generative-ai|generative AI]] but what they gain from it, integrating Cognitive Appraisal Theory, Protection Motivation Theory, and [[technology-acceptance-model|TAM/UTAUT2]] into a risk–benefit framework tested on 814 Chinese university students. Using hierarchical regression and Hansen threshold regression, they find that [[trust|perceived controllability]] makes risk perception dimension-specific and non-monotonic: security risk perception is positively associated with academic assistance and skill development, whereas information risk perception — content accuracy concerns that are hard for students to verify — is negatively associated with psychological and emotional support, daily life, and leisure benefits. Beyond critical thresholds (e.g., technical risk at 4.75 for academic assistance), the signs of these associations flip from negative to significantly positive, suggesting risk can activate rather than suppress benefit perception.

## Key Findings

- **Risk perception is multidimensional, not uniformly harmful.** The paper separates information, security, technical, [[ethics|ethical]], and legal risk (7-point Likert); students reported high concern for information, security, and legal risk but relatively low concern for technical and ethical risk. Different dimensions showed significantly differential — and even opposite — associations with perceived benefits.
- **Security risk perception predicted higher academic and skill benefits.** Security risk was significantly positively associated with perceived academic assistance (β = 0.134, SE = 0.061, p < 0.05) and skill development (β = 0.131, SE = 0.062, p < 0.05), consistent with CAT: a controllable threat (manageable via privacy practices) triggers problem-focused coping and more deliberate engagement.
- **Information risk perception eroded non-academic benefits.** Information risk showed significant negative associations with psychological and emotional support (β = −0.288, SE = 0.101, p < 0.05), daily life benefits (β = −0.258, SE = 0.096, p < 0.05), and leisure and entertainment (β = −0.217, SE = 0.097, p < 0.05) — low controllability of content verification produced emotion-focused coping and avoidance in emotionally invested domains.
- **Longer usage experience amplified benefits across domains.** Students with more than 1 year of Gen AI use reported significantly higher academic assistance (β = 0.612, SE = 0.130, p < 0.05), skill development (β = 0.539, SE = 0.132, p < 0.05), psychological and emotional support (β = 0.450, SE = 0.178, p < 0.05), and daily life benefits (β = 0.368, SE = 0.170, p < 0.05) than those with under 6 months of use; leisure and entertainment was the only dimension without a significant duration effect.
- **Threshold effects reveal a U-shaped, activation pattern.** Technical risk's association with academic assistance was significant and negative below the threshold of 4.75 (β = −0.325, p < 0.01) but significant and positive above it (β = 0.432, p < 0.01). Threshold regression indicated a double-threshold effect of security risk on academic assistance (threshold values 3 and 4), single-threshold effects of security risk on skill development (3), and single-threshold effects of technical risk on academic assistance and skill development (4.75) and on psychological and emotional support (2.75), estimated with Hansen's bootstrap method over 5,000 replications. The lower emotional-support threshold suggests emotional domains need less arousal to trigger benefit perception.
- **Effects were robust but modest in explanatory power.** VIF values stayed below 5 (no multicollinearity) and Harman's single-factor test showed the first factor explained 36.687% of variance (below the 40% guideline); trimming (0.15 to 0.1) and sensitivity analyses excluding controls preserved the threshold conclusions, yet including risk perception did not substantially raise the models' explanatory power — its role is real but bounded.
- **Master's students differed from doctoral students.** Education level was significantly associated with academic assistance (master's vs. doctoral, β = 0.335, p < 0.10), psychological and emotional support (β = −0.438, p < 0.05), and leisure and entertainment (β = −0.544, p < 0.05); gender and age had no significant effects.

## Study Design & Method

The study used a cross-sectional [[quantitative-research|quantitative survey]]. Questionnaires were distributed from late October to mid-November 2024 via Wen Juan Xing, yielding 2,613 responses; after excluding 1,071 respondents who had never used Gen AI and 728 invalid responses (excessively short completion times or logical contradictions), 814 valid questionnaires remained, a valid response rate of 31.2%. Risk perception (information, security, technical, ethical, legal) was measured with adapted items on a 7-point Likert scale, and perceived benefit (academic assistance, skill development, psychological and emotional support, daily life, and leisure and entertainment) with adapted items on a 5-point frequency scale; the different scale formats were justified by the need for finer discrimination on the primary independent variable while preserving the original instruments' psychometric properties. Items were adapted from validated scales, reviewed by three subject-matter experts, and piloted with 45 non-sample students.

Analysis was conducted in SPSS 23.0. Cronbach's α was 0.937 for the risk scale and 0.955 for the benefit scale, with EFA (principal component extraction, varimax rotation) extracting five factors for each and total variance explained of 79.582% and 75.991%. The authors used three-layer hierarchical [[research-methods-aied|hierarchical regression]] — controls (gender, age, education level), then Gen AI usage duration, then risk perception — and justified this over SEM as a deliberate prediction-oriented choice coherent with the threshold model. Threshold effects were then tested with Hansen's (2000) bootstrap-based threshold regression (5,000 replications), with candidate values theoretically anchored at the 7-point scale midpoint and its adjacent values.

## Implications

The findings argue against one-size-fits-all AI risk management in [[higher-ed|higher education]]: because risk dimensions diverge, universities should not simply minimize perceived risk. Security risk awareness can be treated as a [[pedagogy|pedagogical]] asset — integrating data-privacy education into [[ai-literacy]] curricula so that concern becomes informed, deliberate engagement rather than passive worry. Information risk requires a different response: developers should prioritize content transparency through source attribution, fact-checking indicators, and confidence scores to rebuild [[trust]] in emotionally invested domains. For technical risk, the paper proposes a threshold-based strategy and a "zone of productive risk" — structured exposure, cognitive reappraisal training, and collaborative skill-building workshops that help students cross the activation threshold without provoking disengagement. Because usage experience predicts benefits across domains, early introductory courses and funded AI literacy initiatives are recommended, and [[stakeholders|policymakers]] should adopt differentiated frameworks for information quality, [[privacy|data protection]], and ethical oversight rather than uniform [[regulation]].

## Limitations

- **Cross-sectional design** precludes causal inference; all relationships are statistical associations, and directionality remains unclear without longitudinal or experimental data.
- **Sample limited to Chinese university students**, restricting generalizability to other populations and cultural contexts.
- **Limited control variables** — AI literacy, digital competence, frequency of use, academic discipline, and prior training were not included as potential confounders.
- **Composite scores treated as observed indicators** rather than latent factors; no CFA, CR, AVE, or HTMT were reported, so measurement error is unmodeled and construct-level validity claims are limited.
- **Common method bias risk** from single-time-point [[self-report-measures|self-report data]]; Harman's single-factor test (first factor 36.687%) is a low-sensitivity diagnostic, and marker-variable or common latent factor analyses were not performed.

## Connected Concepts

- [[technology-acceptance-model]] — the paper integrates TAM/UTAUT2 with CAT and PMT as its theoretical framework
- [[generative-ai]] — the technology whose perceived risks and benefits are modeled
- [[hallucination-risk]] — the accuracy and reliability concerns constituting the information risk dimension
- [[privacy]] — unauthorized data collection and misuse defining the security risk dimension
- [[trust]] — perceived controllability and trust in AI output shape coping appraisals
- [[self-efficacy]] — coping efficacy is the mechanism converting threat appraisal into adaptive use
- [[higher-ed]] — the setting for the recommended AI risk-management strategies

## Connected Articles

- [[tam-critical-use-genai-engineering-2026]] — extended TAM predicting students' use and reliance on generative AI
- [[student-dependency-on-ai-literacy-self-efficacy-2026]] — AI literacy and self-efficacy as factors in student dependency
- [[guarded-adoption-genai-higher-education-2026]] — how high-achieving students cautiously adopt Gen AI
- [[trust-reliance-ai-education-2026]] — trust and reliance calibration in educational AI use
- [[genai-chatgpt-adoption-ethics-students-2026]] — ethical and behavioral factors in students' ChatGPT adoption

## Citation

Du, W., Ning, S., Shi, Y., & Chen, Y. (2026). [The impact of risk perception on perceived benefits of generative artificial intelligence users—an empirical study based on university students](https://doi.org/10.3389/fpsyg.2026.1866428). *Frontiers in Psychology, 17*, 1866428.