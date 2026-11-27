---
title: "Generative AI and Assessment Redesign in Chemical Engineering Education: A Conceptual Framework for Learning Evidence"
created: "2026-11-27T16:50:00-05:00"
updated: "2026-11-27T16:50:00-05:00"
type: article
published: "2026-11-14"
sources: ['raw/papers/liu-genai-assessment-chemical-engineering-framework-2026.md']
confidence: low
evidence_context: educational
page_kind: [framework]
research_method: [literature review]
discipline: []
level: [higher ed]
audience: [assessment designers, instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation]
---

> **Synthesis:** This narrative review asks where [[generative-ai|generative AI]] weakens the evidence that a chemical engineering submission represents a student's own engineering judgment, and what additional observations could support a defensible judgment. It identifies four recurring failure mechanisms: answer substitution, compression of reasoning into final products, smoothing of design rationales, and loss of individual attribution. Detection, prohibition, disclosure and [[authentic-assessment|authentic tasks]] each address part of the problem but none establishes that a student can explain or defend the work. The proposed Authenticity, Process Visibility, Verification, Reflection and Transparency framework coordinates five evidence functions according to the specific inference at risk. This review reports no new empirical data; APVRT is a conceptual proposal whose effects on judgment validity, fairness and workload remain unevaluated.

## Key Findings
1. **The problem is evidential, not simply about use.** A polished calculation or report may no longer reveal which assumptions and judgments were the student's own.
2. **Four mechanisms recur across formats.** Answer substitution, evidentiary compression, rationale smoothing and attribution loss each break a different link between artifact and learning claim.
3. **Common responses are partial.** Detection classifies textual origin, prohibition sets conditions, disclosure records claimed assistance, and authentic tasks strengthen context; none directly observes understanding.
4. **More documentation is not automatically better.** A log no one uses or a viva sampling an irrelevant detail can add workload without strengthening the intended inference.
5. **Five complementary functions are proposed.** Authenticity elicits disciplinary judgment, Process Visibility records consequential decisions, Verification samples reasoning, Reflection interprets revisions, and Transparency clarifies assistance and contributions.
6. **Attribution depends on conditions of observation.** Records and declarations support an individual judgment only when tied to identifiable work and checked at a consequential point.
7. **Evidence can be distributed across a course.** Formative, project and supervised occasions may supply complementary observations rather than every task carrying the full burden.

## Where the evidence becomes ambiguous

The review draws on Web of Science and Scopus searches, targeted publisher searches and citation tracking, with relevant literature checked through October 2026. It separates three questions that often get conflated: provenance, integrity and [[assessment-validity|assessment validity]]. A declaration may say who produced a submission and a policy may say whether assistance was permitted, but neither shows that the student can reproduce or defend the reasoning.

In structured calculations, a correct answer does not establish who selected the equations or checked the assumptions. In open-ended modeling and control, coherent code or a plausible rationale can conceal untested boundary conditions. The chemical engineering evidence it cites includes a course implementation with a pre-lab survey n = 130 and post-lab survey n = 121 in which comparison with a previous cohort did not establish a significant improvement in marks, and a three-group pre/post study with 157 first-year students on prompt training whose transfer to independent performance remained open. [[benchmark|Benchmarks]] across ten subjects at seven universities show that several systems can complete conventional tasks, which identifies vulnerability without showing misconduct or student learning.

In laboratory work, a report compresses prediction, action, observation, calculation and conclusion into one retrospective artifact. Process design and safety analyses can hide rejected options and unresolved trade-offs behind fluent justification. In technical communication and [[group-work|group projects]], language polishing and shared drafting obscure which member made or understood a consequential decision. Peer ratings and version histories flag what to check but cannot by themselves settle attribution.

## The APVRT framework in concrete terms

Each function is paired with the evidentiary condition under which it is useful. Authenticity requires a scenario that changes the solution and criteria that assess how the student handles its particulars; a realistic brief alone does not show who decided. Process Visibility is strongest when records are captured at selected checkpoints, linked to identifiable data or drafts, and the consequential decision can be checked with the student. Verification asks the student to respond to an artifact-specific or unseen question under specified assistance conditions, using consistent prompts and scoring criteria. Reflection must concern a specific decision, be anchored to earlier work and be corroborated when individual judgment is claimed. Transparency requires specific reporting categories, identification of consequential AI contributions, and checking where a declaration affects a judgment.

The review maps failure mechanisms to functions: answer substitution points primarily to Verification, evidentiary compression to Process Visibility, rationale smoothing to Authenticity and Verification, and attribution loss to Transparency and Verification. These are proposed design choices rather than validated prescriptions. Where reports, checkpoints and individual performance conflict, the recommended rule is targeted clarification under criteria communicated in advance, not averaging the evidence or presuming misconduct.

Course-level coordination can spread functions across occasions. Formative activities may permit exploratory use and require output critique; extended projects can capture process development; selected supervised or oral tasks can sample independent understanding. The authors note that oral verification may disadvantage students through [[anxiety-and-stress|anxiety]], language or accessibility factors, so supervised written explanations addressing the same claim may serve as alternatives. Records should be limited to what assessment requires, with access and retention defined in advance.

## What this means for practice
- **Instructors.** Start from the learning claim and ask which observation has become ambiguous before adding any new assessment component.
- **Instructors.** Use sampled checks drawn from the submitted artifact, such as an unusual assumption or an inconsistency, rather than long generic [[oral-assessment|oral examinations]].
- **Assessment designers.** Tie process records to consequential decisions and identifiable drafts, and limit collection to records that will actually be used.
- **Institutions.** Coordinate policy, shared [[rubrics]] and assessor calibration across courses so that verification conditions are consistent and [[equity-in-ai-education|equitable]].

## Limitations
- The article reports no new empirical data and explicitly states that no new data were created or analyzed.
- It is a critical narrative review rather than a [[meta-analysis-systematic-review|systematic review]] with prespecified search and selection criteria.
- APVRT has not been tested for effects on judgment validity, fairness, student or staff workload, or [[differential-effects-across-learner-groups|differential effects]] across groups.
- The cited studies vary widely in design, and perceptions, model benchmarks and classroom outcomes are not treated as equivalent evidence.
- The framework offers conditions for stronger inferences but does not specify how much evidence is sufficient for an individual judgment.
- Skills-based and contextual sources from adjacent disciplines may not transfer directly to chemical engineering settings.

## Citation
Liu J, Niu Y, Wang F and So CC (2026) Generative AI and Assessment Redesign in Chemical Engineering Education: A Conceptual Framework for Learning Evidence. Information 17:1151. https://doi.org/10.3390/info17111151
