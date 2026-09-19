---
title: "Acceptance of AI-Gamified Adaptive Learning in EFL: Bifactor Evidence for Essential Unidimensionality and the Limits of Subscale Scoring"
created: "2026-09-16T11:00:00-04:00"
updated: "2026-09-19T09:19:18-04:00"
type: article
pedagogy: [game-based-learning]
technology: [adaptive-learning, technology-acceptance-model]
assessment: [educational-measurement]
audience: [researchers, instructors]
research_method: [educational measurement]
sources: ['raw/papers/10.3389_feduc.2026.1929123.md']
confidence: high
discipline: [language learning]
level: [higher ed]
page_kind: [evaluation]
---

> **Synthesis:** Zhorabekova et al. (2026) tested whether the commonly assumed subdimensions of [[technology-acceptance-model|acceptance]] for AI-gamified [[adaptive-learning]] in [[language-learning|EFL]] are empirically separable, using a 13-item questionnaire completed by 401 students at a Kazakhstani university. Parallel analysis, competing confirmatory models, bifactor dimensionality indices, an ordinal robustness check, and an independent held-out confirmation converge on the same answer: the scale is essentially unidimensional, dominated by a single general factor, with perceived [[game-based-learning|gamification]] the only partly distinguishable facet. The practical message is that a general total score is defensible and fine-grained subscales are not — though the general factor may be substantially method-influenced.

## Key Findings

- **The assumed subdimensions are not empirically separable.** Parallel analysis retained a single factor, yet a strict one-factor model also failed to reproduce the covariance structure. The data are best captured by a broad general factor running through all 13 items, with the individual facets contributing very little once that factor is taken into account.

- **A dominant general factor explains nearly all the common variance.** The bifactor model fitted best, and its dimensionality indices (explained common variance near .82, hierarchical omega near .93) cleared conventional thresholds for essential unidimensionality. Several specific-factor loadings were very small once the general factor was partialled out, so the fine-grained facets add little reliable measurement beyond the total score.

- **Discriminant validity failed for three of the four domains.** The perceived-AI, effectiveness, and engagement/satisfaction subscales were so highly inter-correlated that they could not be distinguished from one another; only perceived gamification remained consistently separable. The same pattern held on the independent confirmatory half of the sample.

- **The model was not identifiable under ordinal estimation**, consistent with very weak specific factors. An S-1 diagnostic that omitted the effectiveness facet converged and fitted well, implicating that facet as a major contributor to the non-identification.

- **The general factor may be partly method-induced.** Every item was positively worded, self-reported on a single occasion, and showed a pronounced ceiling effect, and a Harman-style screen loaded much of the variance onto one factor. Learner characteristics explained little of the variance in acceptance, and the only significant predictor — frequency of use — is itself a self-report conceptually close to acceptance.

## Study Design & Method

An initial pool of 13 items was generated from the gamification, AI-in-education, and technology-acceptance literatures and organized a priori into four domains — perceived gamification, perceived AI, perceived effectiveness, and engagement/satisfaction — each rated on a five-point Likert scale and presented simultaneously in English, Kazakh, and Russian via a single Google Forms instrument. Content validation was informal (colleague review only), so the authors characterize the study as an exploratory structural validation rather than full construct validation.

Using convenience sampling, 401 complete cases were analyzed — [[higher-ed|undergraduate]] [[teacher-education|prospective English teachers]] at O. Zhanibekov South Kazakhstan [[pedagogy|Pedagogical]] University (Shymkent, Kazakhstan), predominantly female and first-year, with self-reported English mostly around A2–B2. The sample was randomly split into exploratory and held-out confirmatory halves so that exploration could be separated from confirmation. Analyses proceeded through reliability and sampling-adequacy checks, [[quantitative-research|exploratory factor analysis]] with parallel analysis, competing confirmatory models (one-factor, four correlated factors, second-order, and bifactor), discriminant-validity checks using the heterotrait–monotrait ratio and the Fornell–Larcker criterion, bifactor dimensionality indices, an ordinal (WLSMV) sensitivity analysis with an S-1 diagnostic, and a preliminary regression of acceptance on learner characteristics. ML models were fitted in Python and WLSMV models in R; a [[llm|large language model]] assisted with analysis scripting, with all results verified by the authors.

## What this means for practice

- **Instructors.** Interpret one total acceptance score from this 13-item instrument and stop reading the AI, effectiveness, and engagement/satisfaction subscales as separate dimensions; discriminant validity failed for three of the four domains.
- **Instructors.** Treat gamification as a distinct design lever, since perceived gamification was the only facet that stayed consistently separable from the dominant general factor.
- **Designers.** Anchor items to one named platform before measuring acceptance, because respondents here may have evaluated different applications and the general factor may be partly self-report method variance.
- **Researchers.** Test dimensionality and [[assessment-validity|discriminant validity]] before assuming a multidimensional structure for ad hoc [[technology-acceptance-model|TAM or UTAUT]] adaptations; in these data the general factor explained roughly 82% of common variance and hierarchical omega reached about .93, and strong claims about [[student-engagement|engagement]] or perceived effectiveness as separate mechanisms should wait on multi-method evidence, since the general factor may be partly self-report method variance.

## Limitations

- **No criterion validity.** The preliminary regression explained very little variance, and its sole significant predictor (frequency of use) is itself a self-report conceptually close to acceptance, so shared-method variance may explain even that association. No behavioral or learning outcome (usage logs, task completion, achievement, [[teacher-role|teacher]] ratings) and no established acceptance instrument (e.g. UTAUT) were available for convergent comparison; **Common-method variance is an unresolved alternative explanation.** Positively worded items, a single self-report occasion, and a pronounced ceiling effect all inflate inter-construct correlations; no theoretically unrelated marker variable was collected, so marker-based tests could not be run, and the authors argue a post hoc method factor would not provide an independent test in these data. Construct heterogeneity (items referred to AI-gamified tools as a class, not one named platform) is a third, non-method account the design cannot separate.

- **Informal content development.** No formal content-validity index, cognitive interviewing, piloting, or back-translation; item validity is asserted rather than demonstrated.

- **Scope and sampling.** No single platform was specified, so respondents may have evaluated different applications; the sample is a single-institution convenience sample, predominantly female and first-year, precluding gender comparison and limiting generalization; **Design coverage.** No test–retest data, so temporal stability is unknown; the trilingual single-form administration precludes language-anchored modeling and measurement-invariance tests across languages.

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
