---
title: "Data Provenance and Ethics in the Curricula of U.S. Health AI Education Programs"
created: "2026-10-30T09:42:00-04:00"
updated: "2026-10-30T09:42:00-04:00"
type: article
published: "2026-10-29"
sources: ['raw/papers/giancotti-data-provenance-health-ai-curricula-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [secondary analysis]
discipline: [medical education]
level: [higher ed, graduate]
audience: [curriculum designers, medical educators, administrators, researchers]
pedagogy: []
technology: [generative-ai, machine-learning]
assessment: []
methods: []
institutions: []
ethics: [sustainability, equity-in-ai-education]
foundations: [curriculum-design, ai-literacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-30"
    agent: hermes-agent
source_depth: full text
verified: [citation, quotes, links]
---

> **Synthesis:** Giancotti and colleagues (2026) ask whether the programs that train the health AI workforce teach practitioners to interrogate where training data come from. Their answer, from a structured census of publicly advertised U.S. curricula, is that [[medical-education|health AI education]] teaches ethics without teaching provenance. Of 36 programs at 25 institutional units in 21 universities, 29 (80.6%) covered ethics and only 8 (22.2%) covered data provenance at the level the authors set as the primary outcome — structural sources or dataset limitations — with 6 (16.7%) reaching the structural level. No program addressed the environmental cost of computation, and of 92 named instructors, 76.1% came from computational disciplines against 3.3% from the social sciences or humanities. The paper reads the curriculum as the upstream cause of a downstream failure: models fail for reasons fixed long before deployment.

## Key Findings
1. **Ethics is taught; provenance is not.** Ethics appeared in 29 of 36 programs (80.6%, 95% CI 65.0 to 90.2), against 8 programs (22.2%, 95% CI 11.7 to 38.1) at the primary-outcome level for data provenance and 6 (16.7%, 95% CI 7.9 to 31.9) at the structural level.
2. **Adding weaker coverage changes little.** Three further programs (8.3%) taught data management only; counting those lifts coverage to 11 programs (30.6%), still under a third of the census.
3. **The most advanced degrees did worst.** None of the seven master's degree programs and none of the six executive or professional-development programs met the primary outcome, so the gap is not a feature of introductory courses.
4. **Ethics and provenance did not travel together.** Of the 29 programs covering ethics, 22 did not meet the provenance outcome, which the authors treat as evidence that the two are taught as separate concerns rather than as one method.
5. **Sustainability was absent entirely.** No program addressed the environmental cost of computation — a [[sustainability]] gap the paper names directly rather than as an inference.
6. **Teams were rare across the clinical-technical divide.** Eighteen programs included team-based work, but only 5 assembled teams spanning clinical and technical backgrounds.
7. **Instructors came overwhelmingly from computing.** Of 92 named instructors, 76.1% were from computational disciplines and 3.3% from the social sciences or humanities; among the 51 whose gender could be determined, 66.7% were men.

## Why provenance is the variable that matters

The introduction builds the case from deployment failures with traceable origins: a sepsis model running in hundreds of hospitals before independent evaluation found it missed two thirds of cases, and an algorithm that under-referred Black patients because cost was chosen as the training label and unequal access made cost a poor proxy for illness. In each case the defect was introduced upstream, in how the data were generated or labeled, and surfaced only after the system was in use.

That framing turns a [[curriculum-design|curriculum]] question into a governance one. If practitioners are not taught to ask how a dataset was produced — who was included, what the label actually measures, what the sampling process could not see — then no amount of ethics instruction about fairness principles will surface the specific failure. The authors' claim is narrow and defensible: provenance is a teachable, checkable competency of [[ai-literacy]], and it is largely not being taught.

## A census of what is advertised

The method is a structured multisource web search between April and July 2026, with two investigators coding program pages for provenance coverage, ethics, sustainability, collaborative structure, technical prerequisites, and instructor background. Of 43 candidate entries, 36 programs across 25 institutional units were included.

The unit of analysis is the public description, and the paper is explicitly a cross-sectional analysis of advertised curricula. That design is what makes the census possible at national scale, and it is also its ceiling: a program that teaches provenance without saying so on its website is coded as not teaching it, which the authors accept as a limit of the observable record.

## What the instructor mix implies

The instructor finding is the one with the clearest structural explanation. A faculty drawn from computing will teach what computing curricula teach, and provenance questions — dataset construction, label validity, cohort composition — belong to clinical, epidemiological and social-science traditions. Only 3.3% of named instructors came from those traditions, and only 5 programs built teams across the clinical-technical boundary.

That is a hiring and curriculum-design problem rather than a content problem, and it explains why ethics coverage could reach 80.6% while provenance sat at 22.2%. Ethics can be taught as a module by any instructor; provenance requires someone who knows how clinical data are made.

## What this means for practice

- **Curriculum designers.** Add provenance as a required competency with its own assessment, not as a subsection of ethics. The census shows ethics coverage does not carry provenance coverage: 22 of 29 ethics-covering programs missed it.
- **Medical educators.** Teach the label, not just the model. The cost-as-proxy case is the canonical example, and it can be taught without any machine-learning prerequisite.
- **Administrators.** Count the disciplinary mix of the faculty before counting the courses. A program staffed almost entirely from computing will reproduce the computing curriculum's blind spots regardless of what the syllabus says.
- **Curriculum designers.** Put sustainability on the syllabus. No program in the census addressed the environmental cost of computation, so there is no peer model to copy and no excuse for the omission.

## Limitations

- The unit of analysis is the publicly advertised curriculum, so a program that teaches provenance without describing it is coded as absent; the authors state this is a cross-sectional analysis of public descriptions rather than of delivered teaching.
- Coverage was coded by two investigators from program web pages, which bounds reliability to what a page states and to inter-coder agreement on the coding scheme.
- The census covers 36 programs identified through a web search between April and July 2026, restricted to U.S. universities, so it says nothing about programs elsewhere or about programs that do not advertise.
- No student outcomes, assessments, or graduate competencies were measured; every claim is about stated curricular content.
- The instructor analysis could determine gender for only 51 of 92 named instructors, and discipline was assigned from listed affiliations.

## Citation

Giancotti, R., Santucci, F., Anjum, A., de Villa, M., Mitra, R., Katlariwala, S. B., Mishra, V., & Celi, L. A. (2026). [*Data Provenance and Ethics in the Curricula of U.S. Health AI Education Programs*](https://arxiv.org/abs/2610.39606). arXiv:2610.39606.
