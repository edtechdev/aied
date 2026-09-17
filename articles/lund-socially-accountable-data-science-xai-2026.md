---
title: "Toward Socially Accountable Data Science Education: A Conceptual Framework for Integrating Explainable AI and Accountability Principles"
created: "2026-09-17T04:10:00-04:00"
updated: "2026-09-17T08:05:01-04:00"
type: article
tags: [explainable-ai, ethics, governance, curriculum-design, cs-education, critical-thinking, bias-mitigation, ai-literacy]
foundations: [ai-literacy, critical-thinking, curriculum-design]
stakeholders: [governance]
ethics: [bias-mitigation, ethics, explainable-ai]
research_method: [theoretical analysis]
audience: [curriculum designers, instructors, educators, researchers]
level: [higher ed]
discipline: [cs education]
page_kind: [framework]
confidence: low
sources: ['raw/papers/lund-socially-accountable-data-science-xai-2026.md']
connected_faqs: [incorporating-ai-literacy, equity-ethics-pedagogical-safety-research]
---

> **Synthesis:** Lund and colleagues (2026) argue that programs training AI developers have taught technical proficiency while leaving social accountability to elective ethics content, and propose a conceptual framework for embedding both in the core curriculum. Its structure is four pillars — **answerability**, **responsibility**, **enforcement** and **reflexivity** — each crossed with four dimensions of [[explainable-ai|XAI]] implementation (technical, social, organizational, political), yielding a crosswalk that tells an instructor what each pillar looks like in practice. The paper's distinctive move is pedagogical concreteness: graded model cards, structured explanation audits with LIME and SHAP, algorithmic impact assessments, tiered peer-review panels, positionality statements and reflective design journals, each rated for classroom cost and failure mode, with a staged adoption path for programs that cannot afford the full set. It is explicit that the framework is conceptual and has not been evaluated in a classroom, and that explanation alone is not accountability — an accurate explanation of a model's behavior says nothing about whether the right features should have been used at all.

## The gap it names: principles without enforcement

The paper's diagnosis of the field is that the ethics literature has produced abundant normative vocabulary and very little operational machinery. Reviews of global AI ethics frameworks (Jobin et al., 2019; Camilleri, 2024) find transparency, fairness and accountability named almost universally, with limited mechanisms for oversight or compliance. For education this matters because the standard curricular response — a guest lecture, a dedicated module, a standalone ethics course — signals by its placement outside the technical sequence that accountability is separable from competence rather than constitutive of it.

Two further obstacles are technical. Machine learning systems are opaque in several distinct ways, including the plain complexity of the models and the proprietary secrecy that surrounds deployed ones (Burrell, 2016), and algorithmic accountability depends on more than transparency: a system can expose its inputs while offering no usable account of how a decision was reached or how it might be contested (Diakopoulos, 2016). Students who graduate without the habit of producing such accounts are, in the paper's framing, not fully prepared for professional practice.

## The four pillars

**Answerability** is the obligation to give reasons for a decision to the people affected by it (Bovens, 2007) — for a developer, being able to explain what data a system relies on, how it reaches its outputs, and on what grounds those outputs could be evaluated. The paper's curricular translation is threefold: teach interpretability techniques so explanation can be operationalized rather than merely promised; make structured documentation — model cards, data sheets — a graded part of coursework rather than an optional artifact; and examine documented algorithmic harms so technical design is always situated in social consequence. The framing it recommends to instructors is professional necessity rather than regulatory burden, since systems that mediate access to information and opportunity make their developers stewards of infrastructure.

**Responsibility** is the ongoing commitment across a system's lifecycle, from design and data selection through deployment and review, including thinking ahead about harm rather than defending decisions afterward. It is shared but unequal: developers must interrogate assumptions and trade-offs, organizations must build governance, audits and review, and governments and communities must set limits. A worked example the paper reuses throughout is the medical risk model that used historical healthcare spending as a proxy for need and thereby underestimated the needs of Black patients (Obermeyer et al., 2019) — a choice that was technically convenient, not malicious, and consequential. Responsibility teaching therefore means asking who benefits, who might be harmed, and what protections are required, and then continuing to monitor after deployment.

**Enforcement** is the pillar that distinguishes this framework from most ethics guidance, because it supplies consequences. Translating institutional accountability into a course means letting course structures model it: rubrics that explicitly weigh responsible documentation, projects that can be required to revise before approval on ethical grounds, and peer review structured around accountability criteria rather than technical ones alone. At program level this becomes oversight of capstone work against transparency and fairness standards, and alongside both sits regulatory literacy — the EU AI Act and GDPR as the frameworks that define external obligations. The paper notes that enforcement is also where data science education most visibly fails, because grading rarely rewards the documentation and explanation work that accountability requires.

**Reflexivity** is the pillar the authors expect to be dropped first in a technical curriculum, since its outputs are habits rather than artifacts. Making it gradeable means structuring and assessing the self-examination: positionality statements written before work with a dataset and revisited at completion, creating a before-and-after record of how students understood their own influence on the system; reflective design journals documenting choices, rejected alternatives and reasons; and structured stakeholder engagement where students present their systems to people who are not data scientists. The stakes are illustrated with the same Obermeyer case read differently — not as a failure of data quality but of unexamined assumptions about the relationship between cost and care, a category error the developers had no training to see.

## Four dimensions, and why the crosswalk matters

Each pillar has a technical, social, organizational and political expression, and the paper supplies a crosswalk so instructors can locate the cell they are actually teaching. Answerability spans interpretability outputs (LIME, SHAP, counterfactuals) at the technical level, explanations legible to non-technical stakeholders at the social level, assigned ownership for producing and reviewing explanations organizationally, and the right to explanation as a floor rather than a guarantee politically. Responsibility ranges from anticipating harm in features and metrics to weighing accuracy against fairness for affected groups, running impact assessments across the lifecycle, and distributing obligation across developers, institutions and regulators. Enforcement runs from documentation and audit trails to peer and stakeholder review of accountability claims, grading rubrics and oversight committees, and regulatory literacy with civil-society oversight. Reflexivity runs from documenting choices and rejected alternatives to positionality statements and stakeholder engagement, institutional norms that reward self-examination, and the political question of whose assumptions get encoded and who bears the consequences.

## What instructors actually assign

The curriculum section is where the paper earns its keep, because each pillar arrives with assignments and an honest appraisal of what they cost.

- **Graded model cards** (after Mitchell et al., 2019; Gebru et al., 2021) require students to document intended use, known limitations, training-data characteristics and evaluation results in a format legible to non-technical readers, weighted alongside accuracy metrics rather than treated as supplementary.
- **Structured explanation audits** have students apply LIME or SHAP to their own models and then present the results to a peer audience without shared technical background, developing explanation and communication together. The paper adds a caution from Chuan et al. (2024): XAI methods are themselves prone to bias, so audits should ask whether the explanations produced are faithful or merely persuasive.
- **Algorithmic impact assessments** (adapted from Reisman et al., 2018) ask who is affected by a system's outputs, what harms errors or misuse could cause, and what design choices would mitigate them — revisited as a project evolves rather than completed once.
- **Tiered peer review and program oversight** put accountability criteria into the review itself: before a model counts as complete, students must answer questions about its behavior, its limits and its potential for harm.
- **Positionality statements and reflective design journals** structure reflexivity and give it a grade, with the statements written early and revisited late.
- **Stakeholder engagement** confronts students with concerns their own positionality led them to overlook, scaffolded with protocols for listening, documenting feedback, and revising in response.

## Feasibility: a staged path rather than an all-or-nothing adoption

The paper's most usable contribution to practice may be this ranking. Model cards and positionality statements are low-cost — no additional software, integrable into existing deliverables, gradeable with a rubric an instructor can write in an afternoon — and their principal risk is superficial compliance, mitigated but not eliminated by requiring revision at the end rather than accepting one submission. Explanation audits and impact assessments need real scaffolding: students require prior exposure to interpretability tools, and impact assessment needs enough domain grounding (lending, hiring, healthcare) that identified harms are plausible rather than generic. Tiered peer panels and oversight committees are the most resource-intensive, demanding coordination across sections, training students to evaluate one another against accountability criteria, and institutional buy-in beyond a single instructor's reach — though a lighter version, one structured peer-review session inside an existing capstone, captures much of the benefit. Stakeholder engagement depends on willing external participants; where they are unavailable, role-play on documented cases approximates the perspective-taking at lower fidelity. The recommendation is to start with the cheap tools and layer in the expensive ones as capacity allows.

## The illustrative scenario

A graduate team builds a model predicting which undergraduates are at risk of academic probation so advisors can intervene early. It performs well on a held-out test set. Answerability: applying SHAP surfaces prior GPA and withdrawal history as dominant features, and presenting that to a non-technical audience leads the team to realize withdrawal may reflect financial hardship or caregiving rather than disengagement — a distinction the model cannot make. Responsibility: an impact assessment finds students from lower-income backgrounds over-represented among those flagged, and advisor capacity too limited for timely outreach, so the system could produce the appearance of intervention without its substance while shifting institutional liability. Enforcement: classmates review the documentation against explicit accountability criteria — limitations disclosed, harms addressed, explanations meaningful — and the project is incomplete until those questions are answered. Reflexivity: positionality statements written at the outset, revisited at the end, reveal that several students had framed the problem as a prediction task with a clean outcome variable rather than as an institutional and social challenge whose design choices would themselves shape outcomes.

## Why the pillars cannot be adopted one at a time

The paper's central synthesis is that the four pillars work as an interlocking set. Answerability without enforcement risks symbolic disclosure. Responsibility without reflexivity risks encoding a narrow conception of harm. Enforcement without answerability risks compliance for its own sake, decoupled from whether affected communities can understand or act on the explanations produced. Partial implementation of any single pillar is unlikely to produce the accountability outcomes the framework exists to support.

## How the framework was built

The paper is explicit about its own method, which matters for how much weight the framework can carry. This is a **narrative synthesis, not a systematic review**: the authors describe an interpretive, argument-building approach rather than reproducible retrieval. Three literatures supply the material — accountability theory from public administration and governance, particularly Bovens' (2007) conceptualization of answerability and the distinction between processes of explanation and processes of *consequence*; the XAI literature, combining technique-level work on interpretability (LIME, SHAP, counterfactual explanations, model cards) with critical scholarship questioning whether explanation suffices as a guarantor of accountability (Mittelstadt et al., 2019; Rudin, 2019); and data science and information science education scholarship on integrating ethics, reflexivity and governance into curricula (Davis, 2020; Saltz et al., 2018; Dogucu et al., 2025).

Sources came from iterative searches of Web of Science, Scopus and Google Scholar using terms such as "explainable AI", "algorithmic accountability", "AI ethics education", "data science curriculum" and "responsible AI governance", plus citation chaining from key theoretical works. The authors state plainly that this process involved **no fixed date range, no formal inclusion or exclusion criteria and no independent dual-reviewer screening**, and that the goal was conceptual coverage and argumentative coherence rather than exhaustive or reproducible retrieval. The four pillars were derived analytically from accountability theory and adapted to AI development education; the four analytical dimensions are an original typology developed for this paper rather than borrowed wholesale. Read the page with that in mind: the framework is a reasoned design proposal with a traceable intellectual lineage, not a validated instrument, and its evidence rating here is correspondingly low.

## What adopting it actually requires

A section on implementation barriers is unusually candid about why frameworks like this stall, and it is worth taking seriously before recommending the approach to a program. The largest obstacle is **faculty readiness**: many instructors in data science, computer science and information science were trained in technical methods and have no formal preparation in accountability theory, XAI critique, or facilitating the reflexive, discussion-based exercises the reflexivity pillar depends on. Expecting individual instructors to develop that expertise alone is, in the authors' words, unrealistic; institutions should budget for faculty development such as workshops co-led with colleagues in ethics, science and technology studies, library and information science, or the social sciences.

**Resistance is framed as an institutional design problem rather than an attitude problem.** A faculty member hired and evaluated for technical research productivity has legitimate grounds to question an expectation that they also teach accountability content without training or recognition, and the paper recommends responding structurally: co-teaching arrangements, shared curriculum materials that lower the preparation burden on any single instructor, and explicit recognition of this teaching in workload and evaluation criteria. Interdisciplinary collaboration, meanwhile, runs into budget models that do not accommodate split teaching credit, departmental scheduling conflicts, and disciplinary disagreement about how accountability should be taught at all — practical constraints a conceptual framework can describe but not resolve.

## Where it sits, and what it does not establish

The framework positions itself against three prior approaches: ethics as supplementary content (Saltz et al., 2018), which is easy to adopt but teaches that accountability is separable from technical work; high-level principle frameworks such as the IEEE's *Ethically Aligned Design* (2019) and AI4People, which state values without supplying classroom machinery; and work that embeds ethics in technical coursework, which this paper extends by adding enforcement and reflexivity as distinct pillars with their own assignments. The authors are direct about the limits: it is a conceptual paper, not yet evaluated in a classroom, and the scenario in the discussion is a hypothetical composite built from documented patterns of harm rather than a reported case. They call for piloting the curriculum strategies in real courses and evaluating them with both quantitative measures (assignment performance, documentation quality) and qualitative analysis of student reflexivity statements.

## Contribution to the knowledge base

This is the knowledge base's most concrete answer yet to the question of what [[explainable-ai|explainability]] looks like as a taught practice rather than a model property. Where the existing XAI pages cover techniques, evaluation and trust calibration, this paper supplies the curricular architecture: which assignments carry each pillar, what they cost an instructor, and how they fail when implemented cheaply. Its enforcement pillar is the genuinely novel element for this knowledge base, since most of the ethics-education material here describes content and dispositions rather than graded consequences — rubrics that weigh documentation, projects that can be sent back on ethical grounds, peer panels with accountability checkpoints, program-level review. It also connects [[explainable-ai|XAI]] pedagogy to [[cs-education]] and [[curriculum-design]] in a way the wiki's separate ethics strand does not, and its interlocking-pillars argument is a useful caution against the common practice of bolting one ethics module onto a technical program. Weight the evidence as a design proposal: nothing here has been tested with students, and the feasibility judgements are the authors' reasoning rather than measured outcomes, so the page is best used as a source of assignment designs to pilot, not as evidence that they work.

## Connected Concepts

- [[explainable-ai]] — the technique layer the framework asks students to practice rather than merely name
- [[ethics]] — the normative content, here given curricular machinery
- [[curriculum-design]] — where the four pillars are meant to be embedded
- [[cs-education]] — the program context the framework targets
- [[critical-thinking]] — reflexivity and the interrogation of one's own assumptions
- [[bias-mitigation]] — the harm the responsibility and reflexivity pillars are meant to catch
- [[governance]] — the institutional and regulatory layer of the enforcement pillar
- [[ai-literacy]] — the broader competence this framework specializes for AI builders

## Connected Articles

- [[xai-education-framework]] — a framework for explainable AI in education
- [[cost-of-ethics-crisis-cs-ethics-education]] — the cost of the ethics crisis in CS ethics education
- [[ai-ethics-education-public-discourse]] — AI ethics education and public discourse
- [[ai-ethics-bibliometric-2026]] — bibliometric mapping of AI ethics research
- [[fair-explainable-edu-recommendations]] — fairness and explainability in educational recommendations
- [[xai-teachers-trust-edtech-recommendations-2026]] — XAI and teacher trust in edtech recommendations
- [[agarwal-ethical-values-norms-aied-2026]] — ethical values and norms in AI in education
- [[bilgic-sever-ethical-dimensions-ai-higher-ed-2026]] — ethical dimensions of AI in higher education

## Citation

Lund, B. D., Alizai, K., Amoje, E., Chandrasekaran, A., Darvischi, S., Denmark, J., Paulraj, N. J., Nallamothula, L., Paes, A., & Vemulapalli, B. S. (2026). [*Toward socially accountable data science education: A conceptual framework for integrating explainable AI and accountability principles*](https://doi.org/10.3390/aieduc2030032). *AI in Education*, 2(3), 32.
