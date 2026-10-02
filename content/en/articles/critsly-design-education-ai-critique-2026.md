---
title: "Critsly and StudioCrit: An Artefact-Aware AI Critique Workspace and Simulation-Based Readiness Study"
created: "2026-10-02T11:30:00-04:00"
updated: "2026-10-02T11:30:00-04:00"
type: article
page_kind: [evaluation]
research_method: [system development]
discipline: [design education, cs education]
level: [higher ed]
audience: [instructors, researchers, educational technology developers]
pedagogy: [scaffolding, metacognition, creativity]
technology: [generative-ai, llm, learning-analytics, human-in-the-loop-ai, simulation, visualization]
assessment: [feedback, ai-feedback-quality, assessment, educational-measurement, assessment-validity]
methods: [usability-research, ai-ed-evaluation]
institutions: [governance]
ethics: [privacy, ethics, explainable-ai]
foundations: [learning-design, human-ai-collaboration]
sources: ['raw/papers/critsly-design-education-ai-critique-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-02"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This technical report presents Critsly, an [[ai-feedback-quality|AI critique]] workspace that keeps a design artifact, the learner's stated intentions and a critique history in one visual board, together with StudioCrit, its architecture-studio research mode. Critsly layers guided reflection, selectable critique perspectives and action planning over structured board context so that AI [[feedback]] stays attached to the work it discusses. StudioCrit adds class organization, role-based access and provisional cognitive and architectural labels on critique notes, drawing its cognitive vocabulary from Bloom's revised taxonomy and exposing [[learning-analytics|analytics]] and a 39-column export for educators and researchers. The evidence is a [[simulation|simulation-based]] readiness exercise, not a classroom trial: three simulated studios produced 109 classified rows, a 50-account rehearsal produced 56, and a later hardening pass recorded 50 completed sessions with 50 denied student attempts to reach analytics. The report's contribution is a working critique-to-evidence workflow; its author states plainly that classifier accuracy, [[human-in-the-loop-ai|human review]] and every learning benefit remain unvalidated.

## Key Findings

1. **The workflow keeps artifact context intact.** Three simulated studios exercised multiple linked boards, and the report records successful class organization, visible cognitive and architectural badges, and role-aware access.
2. **Bloom labels skewed higher-order.** Of 109 rows in the three-studio simulation, 85 (78.0%) were assigned to Analyzing, Evaluating or Creating; the 50-account rehearsal assigned 46 of 56 rows (82.1%) to those categories.
3. **Creating dominated both distributions.** It was the most frequent category in the simulated corpora, at 57 of 109 rows and 39 of 56, which the report notes may reflect how the prompts and notes were constructed.
4. **Architectural focus was uneven and incomplete.** In the 50-account rehearsal the displayed categories were Technical (24), Design (17), Research (10) and Communication (5); the three-studio chart summed to 104 against a 109-row total, a gap left unexplained.
5. **Review load was high by the system's own measure.** The rehearsal dashboard marked 46 of 56 rows "Needs review" and two "Low confidence", counts the report warns are not estimates of classification error.
6. **Hardening held under the rehearsal.** A staging pass with 50 distinct learner accounts recorded 50 completed sessions, 50 successful board pulls and 50 student analytics-access denials, with API session times of 3.064 s median and 6.023 s maximum.
7. **Export was rated pass/partial.** The 39-column schema carries studio, provenance, classification and human-review fields, but final research coding still depends on dual-coder reconciliation that the report never completed.

## How the critique workspace is built

Critsly keeps the object of discussion present. A visual board holds design intentions, notes, media, annotations and feedback pins; a board-state interface serializes that context and the critique history, and an AI layer built on [[llm|large language models]] routes requests through bounded activities — reflection, evidence seeking, perspective-taking, synthesis and action planning. The intended sequence for [[design-education|design education]] is to state an intention, inspect the work, consider critique and decide what to revise, with a [[metacognition|guided reflection]] flow and selectable perspective lenses supporting the move from discussion to revision. StudioCrit is the optional studio/class mode for [[arts-design-and-media-education|architecture studios]]: it organizes classes and linked boards, classifies notes and comments against Bloom's revised taxonomy and architectural evaluation dimensions, and exposes badges, analytics and export under role-based access for learners, educators and researchers. The report is explicit that artifact awareness means structured board context, not complete visual understanding of every drawing, and that the design makes each label [[explainable-ai|inspectable]] rather than proven.

## What the simulation exercise recorded

The evaluation was a simulation-and-readiness exercise rather than a classroom study. Three [[higher-ed|higher-education]] design-studio scenarios — a foundation sustainable pavilion, an urban mobility spine and a facade climate/tectonics lab — produced 109 classified evidence rows, of which 85 (78.0%) carried higher-order Bloom labels and 24 (22.0%) lower-order ones. A separate rehearsal with 50 disposable learner accounts produced 56 rows, 46 (82.1%) higher-order and 10 (17.9%) lower-order; the report recalculated the percentages from the original counts. Architectural categories in that rehearsal were Technical (24), Design (17), Research (10) and Communication (5); the three-studio architectural chart summed to 104, five short of the 109-row cognitive total, a coverage difference the report leaves unexplained. The rehearsal [[visualization|dashboard]] flagged 46 rows "Needs review" and two "Low confidence". The author stresses that these are machine-labeled simulated rows used as the unit of analysis, not distinct people, and that the proportions support no hypothesis test or causal claim.

## Why the readiness claims stay provisional

The report's most consequential move is its account of what remains unvalidated. No completed human-coder validation or inter-rater reliability analysis is reported, so classifier accuracy is unknown and confidence scores are not calibrated probabilities; ambiguous and low-confidence cases were identified as relevant but never given numerical rates. The proposed remedy is a coding manual, a defined unit of analysis and independent coders who report agreement — Cohen's kappa is offered as one nominal option — before disagreements are reconciled, with the machine compared against a reference annotation rather than only against other coders. These checks are not a [[usability-research|usability evaluation]] and the exercised paths are not a validated automated [[assessment]], only encouragement for [[ai-ed-evaluation|controlled evaluation]]. Because research exports carry user identifiers, note contents and provenance, [[privacy|data privacy]] and retention cannot be an afterthought; before any human-participant deployment the author calls for separate identity mapping, a retention and deletion procedure and established arrangements for [[ethics]], consent and data handling.

## What this means for practice

- **Instructors.** Treat the AI critique as a prompt for revision, not a verdict: the board deliberately keeps intentions, work and critique history together, but a generated action plan proves nothing about whether a student acted on it.
- **Researchers.** Budget for human coding before trusting any label. The export already separates machine classification from coder-review fields, so a dual-coder reconciliation is the obvious next step, and agreement should be reported before disagreements are resolved.
- **Developers.** Reuse the pattern that makes the workflow inspectable — bounding AI requests to named activities, storing manual overrides beside the original machine label, and gating analytics behind role-based access — because inspectability, not raw accuracy, is the supported contribution.
- **Institutions.** Read the readiness evidence as permission for a carefully scoped pilot, not for unrestricted deployment; [[governance]] for exports, retention and consent is still unestablished.

## Limitations

- The evidence is software and synthetic-trace observation from a simulation exercise with 50 disposable learner accounts, not 50 recruited learners, and it measures no [[learning-gains|learning gains]] or human cognitive performance.
- No classifier validation was completed: the report provides no gold-standard annotation set and no inter-rater reliability, and the unexplained architectural coverage difference (104 labels against 109 cognitive rows) prevents a complete joint-distribution analysis.
- Counts and timings are transcribed from an unpublished July 2026 coursework report and are documentary evidence rather than independently rerun measurements; the raw dataset, exact classifier configuration and load-generation protocol were not recovered.
- This is one author's engineering account of a single system, with no completed human-subject study and no claim that ethics approval was obtained; the figures show historical staging interfaces, and raw participant-level exports are not deposited.

## Citation

Kadir, N. (2026). [*Critsly and StudioCrit: An Artefact-Aware AI Critique Workspace and Simulation-Based Readiness Study for Design Education*](https://arxiv.org/abs/2610.00085). arXiv preprint.
