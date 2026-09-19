---
title: 'Advancing Problem-Based Learning in Biomedical Engineering in the Era of Generative AI'
created: "2026-08-20T06:50:00-04:00"
updated: "2026-09-19T09:24:40-04:00"
type: article
foundations: [curriculum-design]
pedagogy: [problem-based-learning]
technology: [generative-ai]
research_method: [case study]
discipline: [engineering education, medical education]
level: [higher ed]
sources: ['raw/papers/pbl-biomedical-engineering-genai-2026.md']
confidence: medium
audience: [curriculum designers, instructors, medical educators]
---

> **Synthesis:** This article presents a modularized, implementation-ready [[problem-based-learning|problem-based learning]] (PBL) framework tailored to biomedical AI, positioning [[generative-ai|generative AI]] (GenAI) as a guarded knowledge-summarization and coding-support module rather than an answer engine. A three-year case study (2021–2023) across Georgia Tech and Emory University engaged 248 students in interdisciplinary teams on real biomedical AI problems, with GenAI governed by disclosure, source-anchoring, verification, and version-logging policies. The framework reframes GenAI as a [[scaffolding|scaffold]] that accelerates baseline learning and frees students for higher-order [[critical-thinking|critical thinking]] and innovation. A portable replication package (syllabi, milestones, rubrics, team procedures, and AI-usage templates) accompanies the design for adoption under variable resources.

## Key Findings

- **Modularized PBL+AI framework:** The design comprises four interdependent modules—problem formation via authentic biomedical problem briefs with curated deidentified datasets, AI-supported knowledge inquiry, [[problem-solving]] with robustness and reproducibility evaluation, and presentation through written reports, oral demos, and [[peer-assessment|peer assessment]].
- **Grade distribution shift:** Post-integration cohorts (2021–2023) showed higher A-rates (66.4% vs. 39.1% control, Δ = +27.3 points, p = 0.042) and fewer low grades (6.1% vs. 22.4%), a trend that persisted after excluding the COVID-19-affected year (A-rate 67.4% vs. 39.1%, p = 0.037).
- **Coding fluency as an enabler:** Students with more coding experience performed better (exploratory OLS β ≈ +1.88 points per year, p = 0.022), suggesting foundational coding readiness enables productive GenAI use for ideation and code assistance.
- **High [[research-methods-aied|research]] productivity:** Implementation-focused PBL yielded 16 student-authored peer-reviewed publications addressing biomedical AI problems (e.g., wearable COVID-19 detection, graph-based single-cell RNA severity classification, synthetic augmentation for transplant-rejection imaging).
- **Strong teamwork outcomes:** Peer evaluations remained high across courses (BHI 89.8–94.6%, MIP 88.8–90.6%, biostatistics ~92–94%), indicating effective collaboration under AI-augmented PBL.
- **Guardrailed AI use:** Approved institution-reviewed tools only (DeepSeek banned), no PII/PHI submitted, mandatory disclosure and validation logs, source-anchored literature claims, and code provenance comments preserved both transparency and PBL's learner-directed intent.

## What this means for practice

- **Instructors.** Position GenAI as a knowledge-summarization and [[scaffolding|coding scaffold]] rather than an answer engine, so teams still assemble baseline knowledge and retain the higher-order synthesis and design work.
- **Instructors.** Enforce guardrails for technical and clinical courses: institution-approved tools only (the deployment banned DeepSeek), no PII or PHI in prompts, mandatory disclosure and validation logs, source-anchored literature claims, and preserved code-provenance comments.
- **Designers.** Build the [[problem-based-learning|four-module structure]] — problem formation on authentic briefs with curated deidentified datasets, AI-supported knowledge inquiry, problem-solving with robustness and reproducibility evaluation, and presentation with written reports, demos, and peer assessment — and reuse the portable replication package of syllabi, milestones, rubrics, team procedures, and AI-usage templates.
- **Instructors.** Require foundational coding readiness before AI-assisted ideation: students with more years of coding experience scored about 1.88 points higher per year in the exploratory model, and coding fluency appears to enable productive use of GenAI for ideation and code assistance.
- **Instructors.** Protect independent problem-solving time and mitigate accuracy risk — [[hallucination-risk|hallucination]] is a real hazard in biomedical work, addressed here through [[rag|retrieval-augmented generation]] and critical-evaluation training — and account for [[equity-in-ai-education|GenAI bias]] against nonnative speakers and diverse backgrounds when deciding who gets tool access.

## Limitations

- The comparison is historical and non-randomized: intervention cohorts with AI access (2021-2023) were compared against control cohorts without it (2016-2020), and the authors state that attribution remains limited and cause-and-effect relationships are hard to isolate.
- Outcomes rest on course grades rather than student-level learning measures — A-rates 66.4% vs. 39.1% and low grades 6.1% vs. 22.4%, with mean GPA rising 3.38 to 3.69 but not significant (p = 0.142) — and no pre/post concept or self-efficacy measures were collected in this cycle.
- Legacy enrollments constrained the analysis: enrollment-weighted tests, student-level ordinal mixed models, and rater-reliability estimates (double-rating with quadratic weighted kappa or ICC) were not possible and are listed as future refinements.
- Tool drift is uncontrolled across the multi-year deployment, which is why the authors recommend standardized AI-usage disclosures with defined version windows.

## Connected Concepts

- [[problem-based-learning]]
- [[generative-ai]]
- [[engineering-education]]
- [[curriculum-design]]
- [[scaffolding]]
- [[higher-ed]]

## Connected Articles

- [[substitution-to-scaffolding-ai-harm-cycle-2026]]
- [[tam-critical-use-genai-engineering-2026]]
- [[genai-thoughtless-use-self-directed-learning-2026]]

## Citation

Nnamdi, M.C., Tamo, J.B., Marteau, B., Shi, W., & Wang, M.D. (2026). [*Advancing problem-based learning in biomedical engineering in the era of generative AI*](https://doi.org/10.1109/TE.2026.3658007). *IEEE Transactions on Education*, 69(2).