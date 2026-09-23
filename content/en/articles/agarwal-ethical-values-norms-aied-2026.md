---
title: "Identifying the ethical values and norms for artificial intelligence in education: A systematic literature review"
created: "2026-09-03T14:00:00-04:00"
updated: "2026-09-23T09:52:53-04:00"
type: article
foundations: [ai-education]
ethics: [bias-mitigation, ethics, privacy]
sources: ['raw/papers/agarwal-ethical-values-norms-aied-2026.md']
confidence: high
audience: [policymakers, institutions, instructional designers]
page_kind: [framework]
methods: [meta-analysis-systematic-review]
institutions: [educational-policy-ai, governance]
---

> **Synthesis:** **Identifying the ethical values and norms for artificial intelligence in education: A systematic literature review** — Agarwal, Urlings, van Lankveld & Klemke (2026) report a [[meta-analysis-systematic-review|systematic literature review]] (25 articles from 736 records across Web of Science, ERIC, IEEE CSDL and ACM DL, plus backward snowballing) that consolidates the fragmented [[ethics|ethics of AIED]] literature into six main ethical values for [[ai-education|AI in education]]: non-discrimination, data stewardship, [[human-in-the-loop-ai|human oversight]], goodwill, explicability, and educational aptness. It maps the ethical norms extracted from the literature onto a stakeholder-by-value matrix, showing which norms each stakeholder set (developers, educational institutes, end users, regulators) should follow to realize each value. The review positions these six values as robust across AIED types — including [[generative-ai]] — and calls for integrating ethics into AIED design and a greater focus on the educational ([[pedagogy|pedagogical]]) dimension of AIED ethics.

## Key Findings

- **Six main ethical values (EVs) for AIED.** Thematic grouping of value definitions in 16 articles yielded six EVs: [[bias-mitigation|non-discrimination]] (definitions using bias/discrimination/diversity), data stewardship (data/information), human oversight (people/third-party/self), goodwill ([[well-being]]/harm/consequences), explicability (explain/justify/inspect, as an umbrella for explainability, transparency and accountability), and educational aptness (the distinctive value that no prior AI-ethics framework includes — it captures the pedagogical suitability of AIED). The values map closely onto established ethical AI principles (Floridi et al., Dignum's ART framework, Jobin et al.) except for educational aptness.
- **Ethical norms (ENs) are distributed unevenly across stakeholders.** Norms from 15 articles were grouped by the four Smuha (2022) stakeholder sets — developers of AIED, educational institutes (deployers), end users (students/teachers/parents), and regulators. Developers attract the most norms, followed by educational institutes and regulators, while end users receive the fewest and least actionable norms; educational institutes are the only set with norms for all six EVs.
- **End users are largely passive in the ethical literature.** No norms on non-discrimination, data stewardship, or educational aptness address end users directly, and student voices are essentially absent — norms for "end users" are mostly actions other stakeholders take to enable teachers. The authors argue end users should have agency and active roles rather than being treated as passive beneficiaries.
- **The combined matrix links stakeholders, values, and norms.** Norms for human oversight cluster on educational institutes and end users; educational aptness on educational institutes and regulators; and goodwill norms aimed at regulators are far more numerous (nine) than for any other set, signaling regulators' role in ensuring AIED benefits learners through policy and legislation. The mapping makes norms actionable rules for realizing specific values.
- **Values are tightly coupled and can conflict.** Tensions can arise between EVs — e.g. explicability vs. accuracy/[[privacy]], and non-discrimination vs. data stewardship — producing ethical dilemmas, alongside conflicting norms between stakeholder sets and power asymmetries (students-teachers, teachers-institutions, institutions-developers).
- **Gaps in the literature.** Only three of 25 articles are methodology papers or original [[research-methods-aied|research]] (12%), indicating ethics is rarely integrated into the design of AIED research; only two articles address [[k-12|K-12 education]], showing lagging attention there. Norms for human oversight and educational aptness are underrepresented, while data, discrimination and explicability dominate.
- **The six EVs appear robust across AIED generations.** A preliminary mapping of ethical principles in five recent systematic reviews on the ethics of [[generative-ai|generative AI]] in education (published 2024–2025) shows those principles fit within the same six EVs, suggesting the framework predates and generalizes beyond GenAI.
- **A framework for governance and policy.** The value/norm matrix offers a foundation for building detailed ethical frameworks and [[regulation]] for AIED, giving educational institutions, developers and regulators concrete norms to implement specific values — relevant to [[governance]], [[educational-policy-ai]], and [[equity-in-ai-education]].

## What this means for practice

- **Institutions.** Adopt the six values — non-discrimination, data stewardship, human oversight, goodwill, explicability, and educational aptness — as the review checklist for an AIED procurement, because educational institutes are the only stakeholder set the review found carrying norms for all six.
- **Institutions.** Define educational goals and staff human oversight explicitly in deployment plans: oversight norms fall only on educational institutes and end users, and educational aptness norms only on educational institutes and regulators.
- **Designers.** Build explicability and non-discrimination into the product rather than documenting them after release, since developers carry the most norms of any stakeholder set, including seven for non-discrimination and four for explicability.
- **Policymakers.** Write goodwill obligations into regulation and licensing — regulators carry nine goodwill norms, more than any other stakeholder set — and create norms that give end users, who receive only four norms in total with none for non-discrimination, data stewardship, or educational aptness, an active role.
- **Institutions.** Treat value conflicts as design decisions, not edge cases: the review documents tensions such as explicability against accuracy and [[privacy]], and non-discrimination against data stewardship, that have to be adjudicated before deployment.

## Limitations

- The 736 records were screened by a single reviewer, and the thematic grouping of ethical values was performed by the primary researcher alone; the authors name both as limitations that raise the risk of missing relevant studies.
- The database search ran in November 2022, so no post-ChatGPT literature is represented, and the authors state that their section on [[generative-ai|generative AI]] ethics in education is therefore not comprehensive.
- Only eight of the 25 included articles mention any educational setting, and only two focus on [[k-12|K-12]] education, so claims about schooling levels rest on a very thin base.
- The values and norms were derived by thematically grouping definitions and keywords from 25 articles — 22 from the database search plus 3 found by backward snowballing — of which only three (12%) were methodology papers or original research.

## Connected Concepts

- [[ethics]]
- [[ai-education]]
- [[governance]]
- [[educational-policy-ai]]
- [[bias-mitigation]]
- [[privacy]]
- [[meta-analysis-systematic-review]]
- [[social-norms-ai-use]] — the informal rules around AI use

## Connected Articles

- [[ai-ethics-bibliometric-2026]] — Bibliometric analysis situating AI ethics in professional educational practice
- [[raffaghelli-situated-ai-ethics-2026]] — Situated, ecological AI-ethics framework for education
- [[ethical-use-ai-engineering-education-review-2026]] — Systematic review of ethical AI use in a discipline
- [[league-ethical-governance-student-data-2026]] — Ethical governance framework for student data
- [[policy-deficit-ai-sel-2026]] — Policy gap analysis on ethics and governance of AI in education
- [[ssaho-ai-academic-integrity-review-2025]] — Systematic review of AI ethics and policy in higher education

## Citation

Agarwal, B., Urlings, C., van Lankveld, G., & Klemke, R. (2026). [Identifying the ethical values and norms for artificial intelligence in education: A systematic literature review](https://doi.org/10.1016/j.ijaied.2026.100004). *International Journal of Artificial Intelligence in Education*, 36, 100004.
