---
title: "Explaining ChatGPT Adoption in Higher Education: Insights for AI Literacy, Educational Practice, and Responsible AI"
created: "2026-09-03T14:20:00-04:00"
updated: "2026-09-19T10:56:42-04:00"
type: article
foundations: [academic-integrity, ai-literacy, critical-thinking, teacher-role]
pedagogy: [self-regulated-learning]
technology: [generative-ai, learning-analytics, technology-acceptance-model]
ethics: [ethics, trust]
research_method: [survey]
audience: [instructors, administrators, researchers]
level: [higher ed]
sources: ["raw/papers/jacome-vasconez-chatgpt-adoption-xai-2026.md"]
confidence: medium
page_kind: [framework]
institutions: [educational-policy-ai, governance]
---

> **Synthesis:** Jácome-Vásconez et al. (2026) propose an **explainable AI (XAI) framework** that integrates the Unified Theory of Acceptance and Use of Technology 2 ([[technology-acceptance-model|UTAUT2]]) with [[machine-learning|machine learning]] and explainability techniques to explain university students' behavioral intention to adopt ChatGPT. Survey data from 522 students at the University of Alicante were analyzed with Ordinary Least Squares regression, Random Forest, SHAP, Necessary Condition Analysis (NCA), Importance–Performance Map Analysis (IPMA), and K-Means clustering. The framework explains 67.6% of the variance in behavioral intention and identifies four distinct student adoption profiles.

## Key findings

- **Habit is the strongest predictor** of behavioral intention (β = 0.199), followed by Performance Expectancy (0.194), Hedonic Motivation (0.163), Social Influence (0.150), and Facilitating Conditions (0.118). Price Value had negligible influence across all analyses.
- **Effort Expectancy is a necessary condition, not a driver.** Although ease of use was statistically insignificant in the linear model, Random Forest ranked it highly and NCA showed that minimum levels of perceived ease of use are *required* before students develop high behavioral intention. Usability functions as a foundational enabling condition rather than a continuous [[motivation|motivational]] factor.
- **Four adoption profiles** emerged from K-Means clustering: *Resistant Adopters* (8.8%), *Late Adopters* (27%), *Pragmatic Adopters* (50%), and *Technology Enthusiasts* (14.2%). Profiles scale proportionally — there were no divergent segments (e.g. high ease-of-use with low social influence).
- **Demographics did not moderate** the model: gender, age, and education level had no significant interaction effects.
- **XAI complements, not replaces, UTAUT2.** The study demonstrates that explainable machine learning uncovers nonlinear relationships, threshold effects, and necessary conditions that conventional linear regression misses — most notably the role of Effort Expectancy.

## Connections and distinctions

- **[[research-methods-aied|Methodological]] contribution:** Unlike [[determinants-chatgpt-use-higher-education-2026|the exploratory ML study of ChatGPT determinants]], this work explicitly integrates a full UTAUT2 model with XAI, NCA, IPMA, and clustering, showing how explainability techniques enrich — rather than replace — established acceptance theory.
- **Person-centered vs. variable-centered:** Like [[saihi-ahmed-genai-adoption-personas-higher-ed-2026|Saihi & Ahmed's adoption personas]] and [[chen-preservice-teachers-chatgpt-lpa-2026|Chen et al.'s latent profile analysis]], the K-Means profiles reveal hidden heterogeneity that linear models miss — but here the profiles scale proportionally rather than showing divergent configurations.
- **Contrast with the regulatory-competence critique:** [[ai-anxiety-strategic-regulation-writing-2026|Kim's]] argument that adoption models treat use as a stable decision (rather than ongoing judgment) is echoed here in the finding that ease of use is a prerequisite, not a driver — supporting the reframing of AI literacy as regulatory competence and [[critical-thinking]].
- **Over-reliance link:** The finding that Habit is the strongest predictor connects directly to [[cognitive-offloading|over-reliance]] concerns — habitual use without [[pedagogy|pedagogical]] guidance risks substituting AI output for students' own cognitive processes.

## What this means for practice

- **Instructors.** Verify baseline usability before pushing adoption. Effort Expectancy was statistically insignificant in the linear model, but Necessary Condition Analysis showed that minimum levels of perceived ease of use are required before students develop high behavioral intention — so spend the first session on access, logins, and core workflows rather than assuming ease of use.
- **Instructors.** Build repeated, structured course use into the schedule rather than leaving AI use optional: Habit was the strongest predictor of behavioral intention (β = 0.199), ahead of Performance Expectancy (0.194) and Hedonic Motivation (0.163). Do not equate frequent use with competence: AI literacy should be a transversal competency spanning technical knowledge, critical thinking, ethical reasoning, information verification and prompt design, and repeated use should be paired with structured reflection and critical evaluation, since over-reliance on generative AI is associated with reduced self-regulated learning.
- **Administrators.** Size support to the profile distribution, not to the average: with 8.8% Resistant and 27% Late Adopters, roughly a third of students need targeted [[scaffolding]], workshops, and peer mentoring, while Technology Enthusiasts (14.2%) need critical-evaluation prompts instead. Treat faculty as key mediators of responsible adoption: Social Influence was both a significant predictor and a necessary condition, so explicit guidance and responsible-use policies facilitate adoption where institutional silence creates uncertainty.
- **Administrators.** Do not lead the case for adoption with price or cost arguments. Price Value had a negligible influence across all analyses, whereas Facilitating Conditions (β = 0.118) were significant and necessary. Treat adoption as an institutional responsibility rather than a matter of tool access: Facilitating Conditions were necessary conditions, so implementation requires investment in faculty development and student support.
- **Researchers.** Model [[technology-acceptance-model|acceptance]] predictors as thresholds as well as linear effects, and read the unexplained variance as a research target: the framework accounts for 67.6% of behavioral intention, leaving nearly a third to other drivers.

## Limitations

- Cross-sectional survey with non-probability convenience sampling at a single university (University of Alicante, first semester of 2026): 615 students were invited, 540 completed the questionnaire (87.8% response rate), and 522 valid responses were retained; eligibility additionally required prior ChatGPT experience, so students without it were excluded by design, and the authors state the single-context design limits generalization and precludes causal claims.
- The outcome is self-reported behavioral intention, not actual use or educational outcomes, and the authors explicitly scope the findings to intention.
- Only students' perspectives were measured; no instructors, administrators, or policymakers were surveyed, which the authors list as a gap for understanding institutional adoption.
- Measurement caveats: the residuals departed from normality, addressed by relying on the Central Limit Theorem at n = 522, and heteroscedasticity was addressed with Davidson–MacKinnon HC3 robust standard errors.

## Connected Concepts

- [[technology-acceptance-model]]
- [[ai-literacy]]
- [[higher-ed]]
- [[generative-ai]]
- [[trust]]
- [[learning-analytics]]
- [[academic-integrity]]
- [[self-regulated-learning]]
- [[critical-thinking]]
- [[teacher-role]]
- [[ethics]]
- [[governance]]
- [[educational-policy-ai]]

## Connected Articles

- [[determinants-chatgpt-use-higher-education-2026]] — ML/SHAP determinants of future ChatGPT use
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — GenAI adoption personas via clustering
- [[chen-preservice-teachers-chatgpt-lpa-2026]] — Pre-service teacher ChatGPT acceptance profiles (LPA)
- [[ai-anxiety-strategic-regulation-writing-2026]] — From AI anxiety to strategic regulation
- [[tian-genai-learning-adoption-pathways-2026]] — Symmetric and asymmetric pathways in GenAI adoption (UTAUT3 + ARCS)
- [[genai-chatgpt-adoption-ethics-students-2026]] — Behavioral and ethical drivers of student ChatGPT adoption

## Citation

Jácome-Vásconez, S., Diaz-Bedoya, D., Roig-Vila, R., González-Rodríguez, M., & Acosta-Vargas, P. (2026). Explaining ChatGPT adoption in higher education: Insights for AI literacy, educational practice, and responsible AI. *Education Sciences, 16*(9), 1432. https://doi.org/10.3390/educsci16091432
