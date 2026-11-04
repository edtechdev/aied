---
title: "K-12 AI literacy frameworks after generative AI: A scoping review"
created: "2026-11-01T09:09:38-05:00"
updated: "2026-11-02T06:45:00-05:00"
published: "2026"
type: article
sources: ['raw/papers/kharbach-k12-ai-literacy-frameworks-scoping-review-2026.md']
confidence: medium
page_kind: [synthesis]
research_method: [literature review]
level: [k 12]
audience: [curriculum designers, policymakers, researchers]
foundations: [ai-literacy, curriculum-design]
pedagogy: [constructivist, scaffolding]
technology: [generative-ai]
assessment: [educational-measurement, self-report-measures]
methods: [meta-analysis-systematic-review]
ethics: [equity-in-ai-education]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A [[meta-analysis-systematic-review|scoping review]] of 50 K-12 [[ai-literacy|AI literacy]] frameworks published in 2024 and 2025 finds a field producing structure faster than it produces agreement. The frameworks sort into four clusters, lean heavily on self-report scales, and share a five-dimension vocabulary whose labels do not line up. Grade progression is proposed almost everywhere and evidenced nowhere: no study followed the same students across bands. [[generative-ai|Generative AI]], the reason most of this work exists, stays at the edge of the instruments meant to measure it.

## Key Findings

1. Fifty studies met the inclusion threshold: thirty-five published in 2025 and fifteen in 2024, selected from 320 database records plus 19 gray-literature records, 339 in all.
2. The corpus spans fifteen countries, unevenly. The United States contributed sixteen studies (32%), Hong Kong thirteen (26%) and mainland China six (12%), together 70%. South Korea added three, the United Kingdom two, and ten countries or regions one each.
3. The paper does not report a peer-reviewed versus gray-literature split for the fifty. Nineteen records entered through gray-literature channels, and the included set is mostly journal articles alongside AAAI, ACM and IEEE conference papers.
4. Structural completeness varied on the review's own five-criterion checklist: twenty-one studies scored 5/5, five scored 4.5, fourteen scored 4, six scored 3, and four sat at the 2/5 inclusion minimum.
5. Forty-four papers fell into four clusters: cross-grade and system-level frameworks (11), primary and elementary frameworks (6), secondary competency and assessment frameworks (16), and pedagogical or design-based implementations (11). Six field-mapping reviews were left unassigned.
6. Competency definitions converged on cognitive, affective, behavioral, ethical and social dimensions, but the labels and constructs did not align. The ABCE framework came closest to a shared measurement tradition, adapted or validated across Hong Kong, Shanghai and Taiwan.
7. Progression across grade bands was proposed repeatedly and evidenced nowhere. No study tracked the same students across more than one band, and Sun and Chan's measurement invariance across years 10-12 supports consistent scoring, not developmental growth.
8. Generative AI stayed peripheral. The 27-item GAIAS was the only GenAI-specific instrument in the corpus, and the dominant tools, AILQ, SAICS and the Chung et al. diagnostic, do not assess GenAI literacy "at all."
9. Assessment leaned on [[self-report-measures|self-report]] scales. Su et al.'s review of 36 studies found 63.8% of tools reporting reliability evidence and fewer than 20% reporting validity evidence.

## How the review was built

The protocol follows JBI scoping-review guidance and reports against PRISMA-ScR and PRISMA-S, with the protocol registered on OSF before screening. Four databases were searched on 15 January 2026 for English-language work published between January 2024 and December 2025: Academic Search Premier (55 records), Education Research Complete (70), Education Research Index (105), and Web of Science (90). Gray literature came from UNESCO, OECD, EDUCAUSE, Jisc, MIT, ACM SIGCSE and IEEE EDUCON, plus institutional repositories and the reference lists of included studies, adding 19 records for a total of 339.

Removing 135 duplicates left 204 unique records. Two reviewers screened titles and abstracts independently and excluded 54. Of 150 reports read in full, 95 were excluded for lacking a framework structure, addressing teachers without student-facing expectations, or falling outside K-12, and three surviving duplicates were removed. The remaining 55 were scored against a purpose-built five-criterion checklist: grade bands, competencies, critical constructs such as bias and fairness, an assessment strategy, and classroom exemplars. Each criterion scored 1 for present, 0.5 for partial and 0 for absent; papers below 2 of 5 were dropped, leaving 50.

A standardized matrix captured bibliographic data, country, study type, grade-band organization, competencies, critical constructs, progression model, assessment, feasibility evidence and checklist score. One reviewer charted and a second checked entries. Synthesis was narrative and organized by the five research questions.

What this design can say is bounded. No quality appraisal was performed, because the authors judged conventional appraisal inappropriate for mapping framework structure rather than testing claims. No effect sizes were pooled, since the corpus mixes conceptual frameworks, scale validations, quasi-experiments and reviews with no shared outcome metric.

## Fifty frameworks in two years is a sign of demand, not of convergence

Thirty-five of the fifty studies appeared in a single year. That rate is evidence of institutional appetite, not of a field settling. Each framework carries internal logic, and several are carefully built: Chiu et al. ran four co-design cycles with 30 teachers from 15 Hong Kong middle schools, and Chiu et al. (2025) validated an eight-dimension, 32-item scale through a three-round Delphi with 29 teachers and confirmatory factor analysis with 448 students. What none of them carries is a translation table.

The review names this as the field's main structural problem. ABCE, the five-component model of technology, impact, ethics, collaboration and [[reflection|self-reflection]], and four-dimensional scales organize [[ai-literacy|AI literacy]] differently, and their labels do not map cleanly across studies. Ma et al. and Zhou et al. attempted synthesis at a higher level but produced new organizing structures rather than a crosswalk among existing ones.

The cost is cumulative. A measurement tradition grows when a scale can be reused, contested and revised by people who did not build it. Adaptation across three systems is what makes ABCE the closest thing here to that tradition, and three systems is a thin base for a construct addressed by frameworks from fifteen countries. The review's own remedy is a field-level consensus process, similar in purpose to the AI4K12 content standards work, that would stabilize competency measurement and allow comparison.

## Progression is declared in the framework documents and never tested on students

Grade bands are the first checklist criterion, and most frameworks name them. Fewer specify what changes between them. Chung et al. offer the clearest three-tier account, from recognizing AI in everyday life in elementary school, to studying its dependence on data in middle school, to neural networks, foundation models and societal implications in high school. Xia reports a comparable Chinese sequence, Joshi proposes a US-aligned one, and Tadimalla and Maher map outcomes onto Bloom's revised taxonomy. None of these transitions was tested.

What the corpus contains instead is within-course progression, foundational lessons followed by application and creation. Okada et al. [[scaffolding|scaffold]] lower, middle and upper secondary through the CARE-KNOW-DO model, but implementation evidence is reported within each level rather than across them. Sun and Chan's invariance result is often read as grade-band evidence and is not: consistent scores across years 10-12 mean the instrument behaves the same way, not that literacy grows.

The stated conclusion is blunt. Current progression models remain theoretical, cross-sectional or curriculum-based, and longitudinal evidence on how [[k-12|K-12]] AI literacy develops over time is absent. A 5/5 checklist score records that a paper states grade bands, competencies, constructs, assessment and exemplars. It cannot record that the sequence was observed. Twenty-one papers at 5/5 and no validated progression anywhere are not contradictory findings; they measure different things, and only one of them is about students.

## A district picking one framework is picking a vocabulary nobody has crosswalked

For a curriculum lead, the corpus presents fifty options and no comparison key. Framework selection is a bet on a vocabulary, and the instruments that come with the bet are mostly self-report. AILQ, SAICS, GAIAS and Luo et al.'s information literacy scale report solid [[assessment-validity|psychometric]] properties for perceived competence, awareness or self-efficacy. Few show that scores move when instruction happens.

The frameworks that pair measurement with classroom work are the ones worth the bet. Chung et al. developed framework and diagnostic together, a 24-item criterion-referenced tool validated with item response theory and piloted with 287 sixth graders, then refined with 293 more. Masla et al. built exit tickets and analytic rubrics directly onto the RAICA curriculum and tested them with teachers and students across four continents. Both scored 5/5, and both are exceptions.

Subject integration offers a cheaper entry point than a standalone course. Smyslova et al. taught foundational [[generative-ai|generative AI]] concepts through a Markov chains module in grade 9 English language arts, Zha et al. embedded four AI literacy lessons in advanced biology, and Dong et al. used StoryQ across five machine-learning lessons in grades 8, 9 and 11. Adoption, though, runs through teachers. Bosch et al. found RAICA activities delivered "as prescribed" 40.7% of the time and assessments 37.5% of the time across nine sites in four countries, and Joshi reports a 45-point gap between teacher awareness of AI and readiness to teach it.

## What this means for practice

- **District and ministry curriculum leads.** Ask for the assessment before the framework. Without one, a scope and sequence cannot be checked. Prefer candidates whose authors developed curriculum and measurement together, and treat self-report scales as a measure of confidence rather than competence.
- **Teacher educators.** The recurring barrier in this corpus is preparation, not materials. Low-barrier tools and subject-embedded lessons lower the entry cost, but sustained co-design, as in the Gelder et al. and Mannila et al. studies, is what built ownership in the reported cases. A one-day workshop does not match that evidence.
- **Framework authors.** Separate the stable core from the version-specific layer. Output evaluation against external evidence, reasoning about data provenance and judging when assistance is appropriate survive model generations; prompt behavior for one product does not. The review found no framework that makes that separation explicit, which is why instruments published in 2025 encode a conception of AI formed in 2022 or 2023.
- **Researchers.** The missing study is longitudinal and unglamorous: the same students, more than one grade band, more than one year. Until one exists, progression claims in [[curriculum-design|curriculum documents]] rest on plausibility.

## Limitations

- The search covered English-language sources from 2024 to 2025 only, so earlier and non-English work may be missing.
- The five-criterion checklist encodes the authors' operational definition of a framework; papers organized differently may have been excluded, as may local policy or curriculum documents outside indexed venues.
- The checklist measures structural completeness, not quality or effect. It says nothing about whether a framework improves learning.
- Country was assigned by study setting for empirical work and by lead author affiliation for conceptual and review papers, so the geographic picture is an approximation.
- Papers published after the 15 January 2026 search date may already address some gaps identified here.
- No quality appraisal and no pooled effects, by design, so the review cannot rank frameworks by effectiveness.

## Citation

Kharbach, M., Woodworth, J., & Sawchuk, S. (2026). K-12 AI literacy frameworks after generative AI: A scoping review. *International Journal of Professional Development, Learners and Learning, 8*(2), Article e2618. https://doi.org/10.30935/ijpdll/19665
