---
title: "Explaining ChatGPT Adoption in Higher Education: Insights for AI Literacy, Educational Practice, and Responsible AI"
created: "2026-09-03T14:20:00-04:00"
updated: "2026-09-03T14:20:00-04:00"
type: article
tags: [technology-acceptance-model, ai-literacy, higher-ed, generative-ai, trust, learning-analytics, academic-integrity, self-regulated-learning, critical-thinking, teacher-role, ethics, governance, educational-policy-ai]
research_method: [survey]
audience: [instructors, administrators, researchers]
level: [higher ed]
sources: ["raw/papers/jacome-vasconez-chatgpt-adoption-xai-2026.md"]
confidence: medium
---

## Overview

Jácome-Vásconez et al. (2026) propose an **explainable AI (XAI) framework** that integrates the Unified Theory of Acceptance and Use of Technology 2 ([[technology-acceptance-model|UTAUT2]]) with [[machine-learning|machine learning]] and explainability techniques to explain university students' behavioral intention to adopt ChatGPT. Survey data from 522 students at the University of Alicante were analyzed with Ordinary Least Squares regression, Random Forest, SHAP, Necessary Condition Analysis (NCA), Importance–Performance Map Analysis (IPMA), and K-Means clustering. The framework explains 67.6% of the variance in behavioral intention and identifies four distinct student adoption profiles.

## Key findings

- **Habit is the strongest predictor** of behavioral intention (β = 0.199), followed by Performance Expectancy (0.194), Hedonic Motivation (0.163), Social Influence (0.150), and Facilitating Conditions (0.118). Price Value had negligible influence across all analyses.
- **Effort Expectancy is a necessary condition, not a driver.** Although ease of use was statistically insignificant in the linear model, Random Forest ranked it highly and NCA showed that minimum levels of perceived ease of use are *required* before students develop high behavioral intention. Usability functions as a foundational enabling condition rather than a continuous [[motivation|motivational]] factor.
- **Four adoption profiles** emerged from K-Means clustering: *Resistant Adopters* (8.8%), *Late Adopters* (27%), *Pragmatic Adopters* (50%), and *Technology Enthusiasts* (14.2%). Profiles scale proportionally — there were no divergent segments (e.g. high ease-of-use with low social influence).
- **Demographics did not moderate** the model: gender, age, and education level had no significant interaction effects.
- **XAI complements, not replaces, UTAUT2.** The study demonstrates that explainable machine learning uncovers nonlinear relationships, threshold effects, and necessary conditions that conventional linear regression misses — most notably the role of Effort Expectancy.

## Implications for practice

- **Do not equate frequent AI use with AI competence.** The predominance of Habit and Performance Expectancy suggests adoption is driven by perceived educational value, not deep understanding. [[ai-literacy]] should be a transversal competency spanning technical knowledge, critical thinking, [[ethics|ethical]] reasoning, information verification, and [[prompt-engineering|prompt design]] — not an isolated digital-skills initiative.
- **Faculty are key mediators of responsible adoption.** Social Influence was both a significant predictor and a necessary condition, positioning instructors as the shapers of norms around the legitimacy, usefulness, and ethical acceptability of ChatGPT. [[governance|Institutional]] silence creates uncertainty; explicit guidance and responsible-use policies facilitate adoption.
- **Cultivate reflective habits, not maximal use.** Habit contributes to intention, but over-reliance on [[generative-ai|generative AI]] is associated with reduced [[self-regulated-learning]], diminished analytical reasoning, and [[academic-integrity]] risks. Institutions should pair repeated use with structured opportunities for reflection, [[metacognition]], and critical evaluation.
- **Differentiate support by adoption profile.** Pragmatic Adopters (the largest group) use ChatGPT as a complementary resource and represent the most sustainable model; Technology Enthusiasts need encouragement to critically evaluate AI output; lower-adoption clusters need targeted [[scaffolding]], AI-literacy workshops, peer mentoring, and instructor guidance rather than one-size-fits-all policy.
- **Treat AI adoption as an institutional responsibility.** Facilitating Conditions (infrastructure, digital competencies, institutional support) are necessary conditions, so implementation requires investment in [[educational-development|faculty development]] and student support — not just access to tools.

## Connections and distinctions

- **[[research-methods-aied|Methodological]] contribution:** Unlike [[determinants-chatgpt-use-higher-education-2026|the exploratory ML study of ChatGPT determinants]], this work explicitly integrates a full UTAUT2 model with XAI, NCA, IPMA, and clustering, showing how explainability techniques enrich — rather than replace — established acceptance theory.
- **Person-centered vs. variable-centered:** Like [[saihi-ahmed-genai-adoption-personas-higher-ed-2026|Saihi & Ahmed's adoption personas]] and [[chen-preservice-teachers-chatgpt-lpa-2026|Chen et al.'s latent profile analysis]], the K-Means profiles reveal hidden heterogeneity that linear models miss — but here the profiles scale proportionally rather than showing divergent configurations.
- **Contrast with the regulatory-competence critique:** [[ai-anxiety-strategic-regulation-writing-2026|Kim's]] argument that adoption models treat use as a stable decision (rather than ongoing judgment) is echoed here in the finding that ease of use is a prerequisite, not a driver — supporting the reframing of AI literacy as regulatory competence and [[critical-thinking]].
- **Over-reliance link:** The finding that Habit is the strongest predictor connects directly to [[cognitive-offloading|over-reliance]] concerns — habitual use without [[pedagogy|pedagogical]] guidance risks substituting AI output for students' own cognitive processes.

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
