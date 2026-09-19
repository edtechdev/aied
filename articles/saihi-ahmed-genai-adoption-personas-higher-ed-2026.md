---
title: "Uncovering adoption personas for generative AI in higher education: a clustering-based segmentation approach"
created: "2026-08-23T14:00:00-04:00"
updated: "2026-09-19T09:16:28-04:00"
type: article
foundations: [ai-literacy, human-ai-collaboration]
technology: [conversational-ai, generative-ai, technology-acceptance-model]
stakeholders: [student-experience]
ethics: [ethics, trust]
research_method: [survey]
audience: [learners, instructors]
level: [higher ed]
sources: ['raw/papers/saihi-ahmed-genai-adoption-personas-higher-ed-2026.md']
confidence: high
institutions: [change-management]
---

> **Synthesis:** Saihi and Ahmed (2026) apply a person-centered, clustering-based approach to uncover distinct adoption personas for [[generative-ai|GenAI]] [[conversational-ai|chatbot]]s in higher education, moving beyond the aggregate, average-effect assumptions of traditional TAM/UTAUT models. Using hierarchical clustering followed by k-means on 192 validated observations (107 students, 85 educators), they identify a four-persona solution — Cautious Achievers, Skeptical Utilitarians, Disengaged Doubters, and Engaged Enthusiasts — that reflects diverse configurations of trust, usefulness, efficiency, ethical comfort, and satisfaction. The study argues that understanding this latent user heterogeneity is essential for designing inclusive, context-aware AI interventions rather than one-size-fits-all deployments.

## Core Finding

**GenAI chatbot users in higher education are not homogeneous; they cluster into four distinct adoption personas — Cautious Achievers, Skeptical Utilitarians, Disengaged Doubters, and Engaged Enthusiasts — that traditional variable-centered models obscure.** While TAM and UTAUT estimate average structural relationships across an entire population (assuming user homogeneity), the person-centered analysis reveals that perceptual, experiential, contextual, and demographic indicators combine differently across user subgroups. A four-cluster solution was selected as optimal using internal validation indices (Silhouette, Calinski-Harabasz, Davies-Bouldin). These personas matter because attitudes like [[trust]], perceived usefulness, ethical comfort, and satisfaction configure differently across roles and contexts — for instance, an educator concerned with [[academic-integrity]] may assess chatbots very differently than a student focused on task efficiency.

## From Variable-Centered to Person-Centered Adoption

The paper's central [[research-methods-aied|methodological]] contribution is shifting from variable-centered technology-adoption modeling to a person-centered lens. Traditional frameworks like the [[technology-acceptance-model]] (TAM) and UTAUT identify average predictors of adoption intention but cannot discover naturally occurring user profiles. The study repurposes a validated survey dataset (previously analyzed with structural equation modeling) and applies unsupervised [[reinforcement-learning|machine learning]] — hierarchical clustering followed by k-means — to perceptual and experiential indicators (ease of navigation, trust in AI, data-[[privacy]] concerns, perceived efficiency, user satisfaction, perceived learning performance). This complements rather than replaces the earlier SEM model, offering a richer depiction of user diversity within the same theoretical framework.

## The Four Personas and What Drives Them

The identified personas reflect distinct configurations of adoption-related perceptions:

- **Engaged Enthusiasts** — high trust, usefulness, and satisfaction; active, exploratory [[student-engagement|engagement]] with [[conversational-ai]].
- **Cautious Achievers** — reasonably positive but guarded; achievement-oriented with moderated trust.
- **Skeptical Utilitarians** — value functional utility/efficiency but hold skeptical or ethical reservations.
- **Disengaged Doubters** — low trust, low satisfaction, limited engagement.

The personas are profiled using demographic and contextual characteristics (role, tech-savviness, study field, gender, age, education level). Role distinctions matter: students tend to prioritize immediate [[feedback]] and user-friendly interfaces, while educators are more concerned with content accuracy, instructional alignment, and academic integrity. Technological proficiency and disciplinary culture (e.g., [[humanities-education|humanities]] vs. [[stem-education|STEM]]) further shape perceptions and engagement.

## Relevance to the Knowledge Base

This article provides an empirical, person-centered complement to the knowledge base's coverage of AI adoption and acceptance in [[higher-ed]]. It directly engages the [[technology-acceptance-model]] concept and connects it to [[trust]], [[conversational-ai]], and [[student-ai-interaction]]. It also speaks to [[educational-development]] and [[teacher-role]] by highlighting how educators and students differ in their concerns and support needs, and to [[governance]] by informing differentiated deployment strategies.

## What this means for practice

- **Instructors.** Segment before you assign: establish where your students sit on trust, perceived efficiency, ethical comfort, and satisfaction, then differentiate how you introduce and support the tool instead of running one uniform rollout.
- **Instructors.** Address the guarded middle directly. Learners who see the efficiency but doubt the ethics or accuracy will not be won over by convenience alone, so pair practical use cases with explicit guidance on data privacy and avoiding [[academic-integrity]] breaches.
- **Instructors.** Tailor chatbot onboarding, training, and support to specific user segments, using the clustering-derived personas as a data-driven segmentation tool for your own course rather than relying on assumptions about the average learner.
- **Instructors.** Track digital-readiness and disciplinary differences across your group (tech-savviness, study field, device access). Deploying GenAI without that awareness risks failing to deliver value and widening existing inequalities in [[inclusive-learning|inclusion]].

## Limitations

- The segmentation rests on 192 valid survey responses (107 students, 85 educators) collected through purposive and snowball sampling via email invitations and LinkedIn outreach, which the authors state limits representativeness of the wider higher education population.
- The sample was confined to three academic disciplines — engineering, business, and medical sciences — so the personas may not transfer to humanities and social sciences, where academic cultures are known to shape technology perceptions differently.
- Data came from a single cross-sectional Qualtrics survey of self-reported perceptions and intentions; the authors note this limits causal inference and leaves the findings open to common method and subjective bias.
- Participants used whichever GenAI chatbot they already used (ChatGPT the most commonly reported), so platform differences in functionality, conversational quality, and interface design are mixed into the cluster structure.

## Connected Concepts

- [[generative-ai]]
- [[higher-ed]]
- [[technology-acceptance-model]]
- [[trust]]
- [[student-experience]]
- [[conversational-ai]]
- [[ai-literacy]]
- [[human-ai-collaboration]]
- [[ethics]]
- [[teacher-role]]
- [[student-ai-interaction]]

## Connected Articles

- [[alrahmi-org-drivers-ai-adoption-he-2026]]
- [[acceptance-ai-english-tools-2026]]
- [[enright-staff-perspectives-genai-2026]]

## Citation

Saihi, A., & Ahmed, V. (2026). [*Uncovering adoption personas for generative AI in higher education: a clustering-based segmentation approach*](https://doi.org/10.1186/s41239-026-00583-z). *International Journal of Educational Technology in Higher Education*.
