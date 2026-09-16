---
title: "Acceptance of AI-Gamified Adaptive Learning in EFL: Bifactor Evidence for Essential Unidimensionality and the Limits of Subscale Scoring"
created: "2026-09-16T11:00:00-04:00"
updated: "2026-09-16T13:40:00-04:00"
type: article
tags: [language-learning, game-based-learning, adaptive-learning, technology-acceptance-model, educational-measurement]
audience: [researchers, instructors]
research_method: [educational measurement]
sources: ['raw/papers/10.3389_feduc.2026.1929123.md']
confidence: high
---

> **Synthesis:** Zhorabekova et al. (2026) tested whether the commonly assumed subdimensions of [[technology-acceptance-model|acceptance]] for AI-gamified [[adaptive-learning]] in [[language-learning|EFL]] are empirically separable, using a 13-item questionnaire administered to 401 students at a Kazakhstani university. Parallel analysis, competing confirmatory models, bifactor dimensionality indices, an ordinal (WLSMV) sensitivity analysis, and an independent held-out replication converge on the same answer: the scale behaves as **essentially unidimensional**, dominated by a single general factor (ECV = .82; ωh = .93), with perceived gamification the only partly distinguishable facet. The practical message is that a general total score is defensible and fine-grained subscales are not — with the caveat that the general factor may be substantially method-influenced.

## Key Findings

- **The assumed subdimensions are not empirically separable.** Horn's parallel analysis on the exploratory half (n = 200) retained a single factor (first observed eigenvalue 8.63 vs. parallel 95th-percentile value 1.55; second 1.19 vs. 1.41), and a strict one-factor model nonetheless fitted poorly [χ²(65) = 555.1; CFI = .895; RMSEA = .137; SRMR = .054], so a simple first-order unidimensional model is also inadequate.
- **A dominant general factor explains the covariance.** The bifactor model fitted best [χ²(52) = 151.9; CFI = .979; TLI = .968; RMSEA = .069; SRMR = .023] and showed ECV = .822, ω = .971, ωh = .927, PUC = .808 — above conventional [[benchmark|benchmarks]] for essential unidimensionality. Several specific-factor loadings were very small once the general factor was accounted for (e.g. AI3 = .16, EFF1 = .06, EFF3 = .11).
- **Discriminant validity failed for three of four domains.** Inter-construct correlations reached r = .93–.95 and HTMT up to .94 (AI–effectiveness), with the Fornell–Larcker criterion violated; only perceived [[game-based-learning|gamification]] was consistently distinguishable (HTMT = .76–.79). The pattern held on the independent confirmatory half (maximum HTMT = .97).
- **The bifactor model was not identifiable under ordinal (WLSMV) estimation**, consistent with very weak specific factors (though also consistent with model instability); an S-1 diagnostic omitting the effectiveness facet converged and fitted well [χ²(55) = 193.4; CFI = .992; RMSEA = .079], implicating the effectiveness-specific factor as a major contributor to the non-identification.
- **The general factor may be partly method-induced.** All items were positively worded, single-occasion, self-report, with a ceiling effect (item means 4.03–4.31); Harman's single-factor test put 66.5% of variance on the first unrotated factor. Learner characteristics explained only 3.4% of acceptance variance, with frequency of use the sole significant (and conceptually overlapping) predictor (b = .121, p = .002).

## Study Design & Method

An initial pool of 13 items was generated from the gamification, AI-in-education, and technology-acceptance literatures and organized a priori into four domains — perceived gamification (GAM1–GAM3), perceived AI (AI1–AI3), perceived effectiveness (EFF1–EFF3), and engagement/satisfaction (ENG1–ENG3 plus SAT) — each rated on a five-point Likert scale and presented simultaneously in English, Kazakh, and Russian via a single Google Forms instrument. Content validation was informal (colleague review only; no content-validity index, cognitive interviewing, pilot, back-translation, or test–retest), so the study is characterized by its authors as exploratory structural validation.

Using convenience sampling, 401 complete cases were analyzed (from 421 returned; 20 incomplete removed listwise) — [[higher-ed|undergraduate]] [[teacher-education|prospective English teachers]] at O. Zhanibekov South Kazakhstan [[pedagogy|Pedagogical]] University (Shymkent, Kazakhstan); 362 (90.3%) were female and 281 (70.1%) first-year, with self-reported English level mostly A2–B2.

To separate exploration from confirmation, the sample was randomly split into an exploratory half (n = 200) and a held-out confirmatory half (n = 201). Analyses proceeded through descriptives and Cronbach's α, [[quantitative-research|EFA]] with parallel analysis, competing CFAs (one-factor, four correlated factors, second-order, and bifactor), χ² difference tests and log-likelihood information criteria, HTMT and Fornell–Larcker discriminant checks, bifactor indices following Rodriguez et al. (2016), a WLSMV re-estimation on the polychoric matrix with an S-1 bifactor diagnostic, and a preliminary regression of composite acceptance on four ordinal-coded learner characteristics. ML models were run in Python 3.12 (semopy, factor_analyzer, statsmodels) and WLSMV models in R 4.3 (lavaan); a [[llm|large language model]] assisted with analysis scripting, with all results verified by the authors.

## Implications for AI in Education

The headline implication is a scoring instruction: for this 13-item instrument the evidence supports a single general total score, and the AI, effectiveness, and engagement subscales should not be interpreted as distinct dimensions. More broadly, it is a [[research-methods-aied|methodological]] warning for a field that routinely assembles multidimensional [[technology-acceptance-model|acceptance]] questionnaires and scores their subscales separately — [[assessment-validity|discriminant validity]] (HTMT) and dimensionality (ECV, ωh) should be tested before a multidimensional structure is assumed, a caution that extends well beyond EFL to [[educational-measurement|educational technology measurement]] generally.

The finding that gamification alone remains partly separable is theoretically interpretable: game mechanics (points, badges, leaderboards) are concrete and visible, so learners can distinguish them from the more diffuse experience of AI support — which supports treating gamification as a design lever rather than folding it into a general positivity index. Conversely, the strong general factor cautions against over-reading "attitudes toward AI" from ad hoc adapted items that inherit the scoring assumptions of TAM and UTAUT without inheriting their validation evidence. Because the general factor may reflect [[self-report-measures|self-report]] method variance or impression-based generality rather than a unified psychological construct, strong substantive claims about [[student-engagement|engagement]] or perceived effectiveness as separate mechanisms — or about links to [[self-determination-theory|motivation]] and [[self-efficacy]] — should be made cautiously until multi-method evidence is available.

## Limitations

- **No criterion validity.** The preliminary regression explained only R² = .034; the sole significant predictor (frequency of use) is itself a self-report conceptually close to acceptance, so shared-method variance may explain even that. No behavioral or learning outcome (usage logs, task completion, achievement, [[teacher-role|teacher]] ratings) and no established acceptance instrument (e.g. UTAUT) were available for convergent comparison.
- **Common-method variance is an unresolved alternative explanation.** Positively worded items, a single self-report occasion, and a pronounced ceiling effect all inflate inter-construct correlations and HTMT; no theoretically unrelated marker variable was collected, so marker-based tests could not be run, and the authors argue a post hoc method factor would not provide an independent test in these data. Construct heterogeneity (items referred to AI-gamified tools as a class, not one named platform) is a third, non-method account that the design cannot separate.
- **Informal content development.** No formal content-validity index, cognitive interviewing, piloting, or back-translation; item validity is asserted rather than demonstrated.
- **Scope and sampling.** No single platform was specified, so respondents may have evaluated different applications; the sample is a single-institution convenience sample, predominantly female and first-year, precluding gender comparison and limiting generalization.
- **Design coverage.** No test–retest data, so temporal stability is unknown; the trilingual single-form [[administrator|administration]] precludes language-anchored modeling and measurement-invariance tests across languages.

Next steps named by the authors: establish criterion validity against external behavioral and learning measures, anchor items to a named platform, add reverse-coded items and a marker variable, collect multi-occasion data, and replicate in larger multi-institution samples with formal tests of measurement invariance.

## Connected Concepts

- [[language-learning]]
- [[game-based-learning]]
- [[adaptive-learning]]
- [[technology-acceptance-model]]
- [[educational-measurement]]

## Connected Articles

- [[acceptance-ai-english-tools-2026]] — Acceptance of AI-Assisted English Language Learning Tools in Higher Education
- [[tam-critical-use-genai-engineering-2026]] — Intention to Use and Reliance on Generative AI: An Extended TAM with Critical Use
- [[will-skill-not-tool-chinese-university-students-acceptance-of-generative-ai-for-]] — Will, Skill, Not Tool: Acceptance of Generative AI for Academic Writing
- [[ai-literacy-course-satisfaction-pbl-scale-2026]] — Development and Validation of an AI Project-Based Learning Scale
- [[arcs-motivational-ergonomics-gamified-ai-2026]] — Motivational Ergonomics in Gamified and AI-Supported Learning
- [[medgame-llm-medical-education-gamification]] — MedGame: Storytelling Gamification Empowered by LLMs

## Citation

Zhorabekova, A., Duisenova, M., Kurmasheva, M., & Yesnazar, A. (2026). [Acceptance of AI-Gamified Adaptive Learning in EFL: Bifactor Evidence for Essential Unidimensionality and the Limits of Subscale Scoring](https://doi.org/10.3389/feduc.2026.1929123). *Frontiers in Education, 11*, 1929123.
