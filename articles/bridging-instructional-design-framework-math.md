---
title: "WIP: Bridging the Gap Between Instructional Design and Pedagogical Use: A Framework for Mathematics Educators"
created: "2026-06-23T07:38:00-04:00"
updated: "2026-09-20T06:30:22-04:00"
type: article
foundations: [ai-literacy, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring, llm]
research_method: [theoretical analysis]
discipline: [stem education]
audience: [instructors, learners]
level: [k 12, higher ed]
confidence: medium
page_kind: [framework]
sources: ['raw/papers/2606.20934.md']
---

This work-in-progress paper argues that the growing supply of digital [[math-education|mathematics]] resources does not by itself improve learning outcomes: their impact depends on selection and integration processes that often lack explicit pedagogical criteria. [[learning-theories]] are used as frameworks for justification, analysis, or design, the authors find, but are rarely operationalized into functional components of technological systems — so the decisions fall on teachers.

Castillo Ventura, Solis Lastra, and Alves Franco Brandão propose a framework for the pedagogical characterization of digital resources in high school mathematics, translating learning theory principles into observable pedagogical variables structured as metadata across four dimensions: conceptual structure of the content, theoretical–pedagogical alignment, resource conditions, and teacher mediation. As a WIP contribution, only the first is developed here.

> **Synthesis:** The contribution is a translation layer, not a system: constructivist, sociocultural, meaningful-learning, APOS, and semiotic-representation principles become four metadata variables — Mathematical Content Addressed, Prior Knowledge Requirements, Predominant Representation, and Type of Conceptual Construction. The backing [[meta-analysis-systematic-review|literature review]] screened 276 records, reviewed 33 in full text, and retained 14, finding theory use at justification and analytical levels and none at operational implementation. The framework sits between theory and practice, informing but not replacing [[teacher-role|teacher]] judgment, and is unevaluated in real contexts.

## Key Findings

1. Availability of digital tools does not guarantee learning gains: selection and integration lack explicit pedagogical criteria, which is the gap the framework targets.
2. The structured review screened 276 records, reviewed 33 articles in full text, and retained 14, searching Scopus and Web of Science with SciELO and the Digital Library of the Brazilian Computer Society (SOL) as complements.
3. On a five-level operationalization scale (L0 Mention, L1 Justification, L2 Analytical use, L3 Design principles, L4 Operational implementation), theory use concentrates at the bottom: no studies were identified at L4.
4. The framework has four dimensions — conceptual structure of the content, theoretical–pedagogical alignment, resource conditions, teacher mediation — and develops only the first.
5. That dimension yields four observable variables: Mathematical Content Addressed (topic/subtopic, approach), Prior Knowledge Requirements (concepts, dependency level), Predominant Representation (representation, coordination), and Type of Conceptual Construction (action, process, object, schema).

## The operationalization gap

The review asked which learning theories have been applied in high school mathematics teaching and how they underpin digital technologies at what level of operationalization. Studies without explicit theoretical grounding, purely technical works, and those focused exclusively on teacher training were excluded. After duplicate removal, 276 records were screened by title and abstract; a second stage focused on the second question, 33 articles were reviewed in full text, and 14 were retained. Classification shows theory used as justification (L1) or analytical framework (L2), several studies informing design (L3), and none implementing theory as functional components of a system (L4). The authors read that absence as missing intermediate levels of operationalization: theories influence design or analysis, but are not integrated in forms teachers can use for pedagogical decision-making.

## The framework and what it leaves for later

The framework translates learning theory principles into observable pedagogical variables — properties of a resource explicitly identifiable from its content, representation, and conceptual organization, and therefore representable as metadata. Only the conceptual dimension is specified; theoretical–pedagogical alignment, resource conditions, and teacher mediation are described as covering complementary aspects such as the types of activities supported, possibilities for interaction and representation, and integration into instructional sequences, and are explicitly left for future work. Acknowledging that a resource's conceptual structure is not sufficient on its own, the authors position the framework as an intermediate layer between theoretical knowledge and teaching practice that supports teachers' decision-making without replacing their professional judgment, and note that the metadata structure may support computational processing, laying groundwork for repositories or recommendation systems.

## Inside the conceptual structure dimension

Prior Knowledge Requirements comes from meaningful learning theory: new concepts are incorporated through their relationship with existing cognitive structures, so a resource becomes inadequate when it assumes knowledge that has not been previously acquired, constraining possibilities for understanding. Type of Conceptual Construction comes from APOS theory, used not to describe learners' internal cognitive states but as an analytical lens on the resource — which levels of conceptual construction its design and instructional uses make accessible. Predominant Representation draws on semiotic representation registers, where graphical, symbolic, or verbal forms offer distinct ways of approaching the same content, and where the predominant representation and the coordination of multiple representations shape the understanding a resource can support. Mathematical Content Addressed anchors the set in topic and approach.

## A worked example: secant to tangent

The illustrative resource is an interactive applet of the secant–tangent transition: a function represented graphically with a secant line defined by two points, one varying with a parameter h, so that as h approaches zero the secant line converges to the tangent line at a given point. Mathematical Content Addressed is the derivative at a point, conceptual. Prior Knowledge Requirements list the notion of function, graphical interpretation, and slope of a line as essential, with secant and tangent lines as recommended. Predominant Representation is graphical, multiple representations yes, coordination implicit; Type of Conceptual Construction is process. Although the interaction involves actions such as manipulating the parameter, the authors explain, the resource's main contribution is making the transition from secant to tangent accessible as a process, consistent with the process level in APOS theory.

## What this means for practice

- **Instructors.** The four variables work as a review checklist: the topic and approach covered, the prior concepts assumed and how essential they are, the dominant representation and whether representations are coordinated, and the level of conceptual construction actually supported.
- **Learners.** The framework characterizes resources, not students, which is a useful caution: a resource assuming knowledge not previously acquired constrains what can be understood, so prior-knowledge requirements are worth surfacing when sequencing study.
- Teaching-support systems could store the variables as metadata, organizing resources by pedagogical properties rather than topic label alone — though the conceptual dimension alone is insufficient, since the framework's potential depends on the three dimensions still left for future work.

## Limitations

- The framework is an initial approach; by the authors' own statement its usefulness should be evaluated in future research through application in real educational contexts and in repositories or recommendation systems. The paper reports no classroom deployment, teacher trial, or student outcome data.
- The review was restricted to specific databases and criteria, which the authors acknowledge may have excluded relevant studies; the retained corpus is 14 articles from 33 reviewed in full text and 276 screened records, so the absence of L4 studies rests on a small base.
- The classification of operationalization levels involves a degree of interpretation, so placing studies at L0–L4 is analytical judgment rather than objective measurement, and the illustration is a single hand-picked applet rather than a sample of resources tested against the scheme.

## Connected Concepts

- [[teacher-role]]
- [[stem-education]]
- [[ai-literacy]]
- [[learning-design]]
- [[math-education]]
- [[k-12]]
- [[scaffolding]]

## Connected Articles

- [[genai-academic-search-workshop]] — Report on CHIIR 2026 Workshop on Generative AI and Academic Search (GAI&AS)
- [[cognitive-offloading-llm-synthesis-writing]] — Profiling cognitive offloading in LLM-mediated synthesis writing: Volume vs. content
- [[edumirror-educational-social-dynamics]] — EduMirror: Modeling Educational Social Dynamics with Value-driven Multi-agent Simulation
- [[adaptive-virtual-patient-psychotherapy-training]] — The Empirically Grounded Adaptive Virtual Patient for Psychotherapy Training
- [[trio-ethnography-llm-programming-education]] — Beyond Perspectives: A Trio-Ethnography of Interpretation Evolution in LLM-Supported Programming Education
- [[reshaping-cs-education-genai]] — Reshaping Undergraduate Computer Science Education in the Generative AI Era

## Citation

Castillo Ventura, E., Solis Lastra, J. U., & Alves Franco Brandão, A. (2026). [*WIP: Bridging the Gap Between Instructional Design and Pedagogical Use: A Framework for Mathematics Educators*](https://arxiv.org/abs/2606.20934).
