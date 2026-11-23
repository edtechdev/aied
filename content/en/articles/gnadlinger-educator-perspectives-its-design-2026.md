---
title: "Towards incorporating educators’ perspectives into the meta-system design of intelligent tutoring systems"
created: "2026-11-16T07:34:23-05:00"
updated: "2026-11-16T09:30:00-04:00"
type: article
authors: ["Gnadlinger, F.", "Kriglstein, S."]
published: "2026"
venue: "Smart Learning Environments"
source_url: https://doi.org/10.1186/s40561-026-00473-x
evidence_context: educational
foundations: [human-ai-collaboration, learning-design, teacher-role, limitations-in-aied-research]
pedagogy: [pedagogical-patterns]
technology: [intelligent-tutoring, learning-analytics, student-modeling, adaptive-learning]
assessment: [formative-assessment, feedback]
ethics: [explainable-ai]
research_method: [literature review, network analysis]
discipline: [learning sciences, cs education]
level: [k 12, higher ed]
audience: [researchers, educational technology developers, instructional designers, administrators]
sources: ['raw/papers/gnadlinger-educator-perspectives-its-design-2026.md']
confidence: high
methods: [meta-analysis-systematic-review, qualitative-research, network-analysis]
source_depth: full text
page_kind: [framework, synthesis]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
---
> **Synthesis:** Gnadlinger and Kriglstein (2026) start from a suspicion about the standard blueprint of [[intelligent-tutoring|intelligent tutoring systems]]: the four-model picture — Domain, Learner, Tutor and Interface — describes a system built for learners and leaves out the educator who has to run it. To test that, they ran a PRISMA-guided [[meta-analysis-systematic-review|systematic review]] across seven databases, reduced 1,068 unique records to 21 studies of ITSs deployed in real classrooms, and extracted 435 statements through five analytical lenses (Domain, Learner, Tutor, Educator and Feedback). The distribution is the finding. Statements about the educator lens were the most numerous (160), but 66 of them concerned learner analytics and monitoring, 23 authoring and configuration, 18 professional development and only 5 teaching support. [[learning-analytics|Dashboards]] tell teachers about students; almost nothing tells teachers how to teach with the system or how to change it. A [[network-analysis|network analysis]] confirms the pattern: the strongest co-occurrence is Learner–Educator and the weakest is Domain–Educator. The authors respond with a revised meta-system design that makes educators plural actors in the environment, adds an Educator Interface, wraps the system in the phases of the [[learning-design|Learning Design]] teaching cycle, and draws a bidirectional [[feedback|feedback]] triangle among educator, learner and system.

*No primary data: this is a conceptual/design contribution.*

## Key Findings

- **Teachers appear in these reports mainly as an audience for data, not as decision-makers.** Of the 435 extracted statements, 160 were coded to the Educator Model. Within that lens the largest cluster, Learner Analytics and Monitoring, held 66 statements about knowledge transferred from the system to the educator about learners, while Authoring and Configuration held 23, Professional Development and Educator Support 18, and Teaching Support only 5.
- **The evidence base is small but deliberately narrow.** Of 1,219 records retrieved, 151 were duplicates, leaving 1,068; 533 were removed on meta-inclusion criteria; 21 studies survived full-text screening. Those 21 yielded 435 statements, extracted with page, paragraph and position recorded.
- **The Domain Model is the least connected lens.** It produced 57 statements and had the weakest co-occurrence with the Educator Model in the [[network-analysis|epistemic network analysis]]. The authors read this as the place where decision-making is most completely taken over: exercises, assessments and materials are usually prefabricated, and only two studies (Holstein et al., 2019a; Lim et al., 2018) described domain-agnostic systems that require educators to author content themselves.
- **The Tutor Model is described technically rather than educationally.** Its 69 statements clustered around adaptive content, content selection and personalization, and automated scoring, validation and grading; only 5 fell into the Teaching Support cluster. The authors connect this to the long-standing criticism of ITSs as [[explainable-ai|black boxes]].
- **Feedback runs mostly one way.** The 78 Feedback Model statements formed five clusters, each a directed exchange: feedback to the educator from the ITS, to the educator from the learner, to the ITS from the learner, to the learner from the educator, and to the learner from the ITS. The weight of reporting sits on feedback to students.
- **The network's strongest edge is the one the blueprint already has.** Across all conversations the most frequent co-occurrence was Learner Model with Educator Model, and the least frequent was Domain Model with Educator Model. In the two-dimensional projection the first axis carried roughly a third of the variance and the second roughly a quarter.
- **Publications specialize rather than cover all five lenses.** A chi-square test with Monte Carlo simulation (10,000 replicates) showed the distribution of codes across publications was far from even, which the authors take as evidence that the corpus is heterogeneous: individual papers lean hard on particular codes rather than distributing attention evenly.
- **Educator-relevant statements sit in the methods section.** Normalizing statement position by page, the mean landed between 0.36 and 0.41 for all five lenses — the second third of each paper — while the Learner Model was largely absent from discussion and conclusion sections. Reports describe what the system collected, then stop before asking what the teacher did with it.
- **The reviewed systems cover a narrow slice of schooling.** Mathematics accounted for 8 studies, computer science 5, natural sciences 3, language 3 and domain-agnostic systems 2; learner groups were preschool-to-elementary (5), elementary-to-middle (7), middle-to-high (2) and higher education (7). Main authors were affiliated in Australia (8), Europe (7), Asia (5) and North America (1).
- **The proposed extension has four moves.** Make educator(s) actors alongside learner(s) in the real-world environment; treat the five models as analytical lenses rather than software modules; add an Educator Interface that reaches every component across the teaching cycle; and add the bidirectional feedback triangle with task-related, process-related, personal, metacognitive and social feedback.
- **The teaching cycle supplies the missing time structure.** The revised design places Design and Plan, Engage with Learners, Reflection and Professional Development around the educator as cognitive states, so that the same dashboard or authoring tool is understood to serve different purposes at different points rather than existing as a static feature.

## How the study was done

The review followed PRISMA 2020 and the methodological guidance of Kitchenham and Brereton and of Brignardello-Petersen and colleagues. Seven databases were searched — ACM Digital Library, Scopus, Google Scholar, Semantic Scholar, Springer Link, Taylor & Francis Online and Wiley — chosen to span stable and semantic search behavior, with the acknowledged cost of lower reproducibility. The final search ran on 1 April 2024 and covered publications from 2014 onward.

The query was built from five AND-conjunct categories: adaptive learning or intelligent tutor or personalized learning; educator, teacher, instructor or practitioner; role or model; dashboard, learner analytics or visualization; and formative assessment. Screening applied three meta-inclusion criteria (peer reviewed, primary study, full text accessible) and four domain-inclusion criteria (reports an ITS or adaptive system; involves educators or their perspectives; emphasizes educator-ITS contact points such as dashboards or analytics; reports formative assessment in its broadest sense), with a second researcher consulted on ambiguous cases because one author did the bulk of screening.

Statements were extracted against a coding schema defining the five lenses and stored with their location. Analysis proceeded in two steps: an [[network-analysis|epistemic network analysis]] to model which codes co-occur within a publication, and a directed qualitative content analysis that clustered the statements into themes. A chi-square test in R checked whether the distribution of codes across publications was homogeneous. The revised meta-system design was then drawn from the clusters and from the Learning Design teaching cycle.

## What this means for practice

- **For ITS designers and product teams.** The five-cluster map is a checklist of what a real deployment needs and what most reports omit: authoring, an educator-facing monitoring view, explicit teaching support, and professional development material. Shipping a dashboard satisfies one of the four. The map is also a level map: a tutoring system spans learner, tutor, educator and feedback levels at once, the terrain [[learning-environments-as-systems|learning environments as systems]] describes.
- **For schools and districts procuring an ITS.** Ask what a teacher can change, not only what a teacher can see. The Domain Model finding is the sharp one: if content and assessment are fixed by the vendor, the educator's pedagogical decisions are already made elsewhere.
- **For researchers reporting on a deployment.** Describe the educator's task, the artifact that mediates it, the rules and policies that constrain it, and the division of labor between teacher and system. These are the categories the Educator Model lens makes visible, and the paper's normalized-position finding suggests they are currently confined to a methods paragraph.
- **For professional development.** Eighteen statements across 21 studies concerned support for understanding the system, which the authors note matches a recent review by Tan and colleagues. Training is not a nice-to-have appended to implementation; on this evidence it is nearly absent from the literature.
- **For interdisciplinary teams.** The revised design is offered as a shared artifact for conversation between learning scientists, AI developers and teachers, not as a specification to implement directly. Its value is in the questions it forces before a build starts.

## Limitations

- The authors describe the work as exploratory and say plainly that it does not validate an analytical framework; the extended meta-system design is an artifact for further discussion.
- One researcher performed most screening, extraction and analysis, with a second consulted on ambiguous cases. The authors acknowledge the bias risk and the low number of included publications (21 of 1,068).
- The search query was deliberately restrictive and English-only, and the choice of databases traded precision for coverage, so studies that describe educator work without using the query's vocabulary would not have been retrieved.
- The five lenses blur by design; ambiguous statements were split across codes, which makes the counts indicative of emphasis rather than a clean partition of the literature.
- The proposal is not evaluated with educators, and the paper does not report whether the added Educator Interface or teaching-cycle framing improves explainability, usability or transparency in use; those remain claims to be tested.
- This is an article in press; pagination may change, and no article number is assigned in the version read here.

## Citation

Gnadlinger, F., & Kriglstein, S. (2026). [*Towards incorporating educators’ perspectives into the meta-system design of intelligent tutoring systems*](https://doi.org/10.1186/s40561-026-00473-x). *Smart Learning Environments*. Article in press.
