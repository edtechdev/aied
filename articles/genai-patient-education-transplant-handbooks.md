---
title: "Auditing Institutional Heterogeneity for Generative AI in Patient Education: A Large-Scale Study of 102 US Transplant Handbooks"
created: "2026-07-28T04:33:04-04:00"
updated: "2026-09-20T03:45:11-04:00"
type: article
foundations: [ai-education]
technology: [generative-ai, llm, simulation]
ethics: [equity-in-ai-education]
research_method: [secondary analysis]
sources: ['raw/papers/2607.22606.md']
confidence: high
audience: [institutions, policymakers]
page_kind: [evaluation]
discipline: [medical education]
---

> **Synthesis:** Li, Padman and Krishnan audit 102 US transplant-center patient handbooks that serve as grounding corpora for [[generative-ai|generative AI]] patient-education assistants. They show large [[governance|institutional]] heterogeneity in the underlying education materials, undermining the premise that grounding a genAI assistant in local content yields consistent guidance: patients at different institutions can receive materially different AI-mediated answers to the same question. The study extends grounding-quality concerns familiar from [[retrieval-augmented-tutoring-algorithm-kite]] into health education, and connects to AI-driven medical training work such as [[medeasy-ai-standardized-patients]], [[adaptive-virtual-patient-psychotherapy-training]] and [[medgame-llm-medical-education-gamification]]. The equity implication (institution-dependent quality of AI-mediated education) parallels [[equity-in-ai-education]].

## Key Findings

- The study audits 102 US transplant-center patient handbooks that serve as grounding corpora for genAI patient-education assistants.
- Large institutional heterogeneity in the underlying education materials undermines the premise that grounding a genAI assistant in local content yields consistent guidance.
- Patients at different institutions can receive materially different AI-mediated answers to the same question.
- The equity implication is that the quality of AI-mediated education becomes institution-dependent, mirroring broader concerns in [[equity-in-ai-education]].

## What this means for practice

- **Institutions.** Run the pairwise-judge self-consistency audit over your own patient-education corpus before deploying a grounded patient-facing assistant; the authors report the instrument as reproducible and tractable on a local corpus.
- **Institutions.** Treat silence as a fixable content gap rather than a prompt problem: reproductive health was the most-silent topic (82% absent) and pre-transplant handbooks were the most silent of all (mean 90% absence), precisely when fertility-preservation and pregnancy-timing decisions are made.
- **Institutions.** Do not rank centers or handbooks by raw disagreement rates; divergence may reflect legitimate medical variation, differing risk tolerance, or simply more comprehensive documentation, and a failed retrieval can mimic disagreement.
- **Policymakers.** Fold corpus-level self-consistency auditing into existing pre-deployment audit and monitoring expectations for clinical [[generative-ai]], rather than treating grounding in local documents as sufficient assurance of consistent guidance.
- **Policymakers.** Ask deployers to report disagreement and retrieval failure separately, because the study shows apparent divergence between institutions can arise from [[rag]] retrieval behavior rather than from editorial conflict.

## Limitations

- Single domain: the audit covers 102 handbooks from 23 U.S. solid-organ transplant centers, and the authors state the specific blind-spot topics, divergence themes, and institutional-voice effects should not be assumed to generalize to other clinical domains without replication.
- Judge bias was not eliminated: a 200-pair human-judge agreement study is informative for population-level kappa but is not powered to detect bias along sub-axes such as institution, organ, answer length, or clinical-significance rating.
- English-only and snapshot-in-time: the corpus and the 1,115 TransplantQA questions are English, and handbooks were collected over a single 2024-2025 window even though many centers also distribute Spanish and Mandarin materials and guidance evolves.
- Retrieval-induced apparent divergence: differences between two handbooks' answers may reflect one poorly matching retrieval rather than institutional disagreement, and the absence pre-screen only partially mitigates this without controlled passage baselines.

## Connected Concepts

- [[equity-in-ai-education]]
- [[llm]] — the model technology powering patient-education assistants
- [[rag]] — grounding assistants in local handbook content
- [[hallucination-risk]] — risk of inconsistent or unreliable AI-mediated answers
- [[trust]] — patients relying on institution-provided guidance
- [[governance]] — institutional oversight of AI-mediated patient education
- [[ai-education]] — AI use in patient and health-education contexts
## Connected Articles

- [[retrieval-augmented-tutoring-algorithm-kite]]
- [[medeasy-ai-standardized-patients]]
- [[adaptive-virtual-patient-psychotherapy-training]]
- [[medgame-llm-medical-education-gamification]]
## Citation

Yubo Li, Rema Padman, Ramayya Krishnan (2026). [Auditing Institutional Heterogeneity for Generative AI in Patient Education: A Large-Scale Study of 102 US Transplant Handbooks](https://arxiv.org/abs/2607.22606).
