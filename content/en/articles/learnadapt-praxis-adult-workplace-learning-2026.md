---
title: "LearnAdapt Praxis: Controlled AI Assistance and Evidence Traces for Adult Workplace Learning"
created: "2026-10-05T10:00:00-04:00"
updated: "2026-10-05T10:00:00-04:00"
type: article
sources: ['raw/papers/learnadapt-praxis-adult-workplace-learning-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [system development]
discipline: [vocational education]
level: [adult learning]
audience: [instructional designers, educational technology developers]
foundations: [learning-design, human-ai-collaboration, reducing-ai-misuse, agency]
pedagogy: [scaffolding, productive-failure, transfer-of-learning, professional-training]
technology: [llm, human-in-the-loop-ai, learning-analytics, edtech-platform]
assessment: [formative-assessment, process-oriented-assessment, learning-gains]
methods: [usability-research, ai-ed-evaluation]
ethics: [ai-use-disclosure, privacy, trust]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-05"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A useful AI-generated workplace artifact is not, by itself, evidence that its user can explain or reproduce the reasoning behind it. Kadir presents LearnAdapt Praxis, a five-stage learning workspace — Frame, Learn, Build, Validate and Transfer — that keeps assisted work separate from an independent transfer attempt. During active transfer, project-level server controls withdraw coaching, earlier draft access, and learner export; versioned specifications, validation observations, and a separate transfer response preserve inspectable evidence. A reproducibly scripted rehearsal ran 120 serial project episodes across three fictional workplace contexts and four injected provider conditions, and all 3,990 recorded checks met their specified expectations, producing 240 specification versions and 1,200 activity events with 60 retained hints. Separate authentication regressions found and fixed a real session-expiry defect. The report is explicit that this verifies engineering properties only: it does not establish [[learning-gains|learning gains]], model-output quality, unaided assessment validity, population [[usability-research|usability]] or production capacity.

## Key Findings
1. **The workflow boundaries held under scripted test.** All 120 episodes completed the authorized path and all 3,990 nested checks met their specified expectations with zero unexpected failures.
2. **Transfer controls restricted assistance and export.** During active transfer all 120 coaching requests were rejected without calling the provider and all 120 learner exports were rejected, while the facilitator retained inspection access.
3. **Provider failures did not fabricate hints.** The exception and empty conditions each recorded 30 unavailable outcomes and stored zero hints; the valid and reentrant conditions each stored 30, for 60 hints across 120 callback invocations.
4. **The record supports provenance, not learning.** Final exports retained versioned specifications, server-assigned reviewer identity and timestamped events, but the report states that a saved change does not measure a learning gain.
5. **Authentication testing exposed a real defect.** An expired session could render a new login form without persisting a token, so the next login POST failed CSRF validation; the fix passed 58 HTTP checks and 37 JavaScript assertions.
6. **Live checks established connectivity only.** Staging and production each produced one live OpenAI gpt-4o-mini response reporting 419 and 428 tokens, establishing invocation and persistence rather than accuracy or learning support.
7. **The independent-task boundary is bounded.** Controls apply to the current project and tested API paths; they cannot establish that a learner avoided previously viewed material, downloads, other tools, or other people.

## An inspectable separation of assistance and evidence

Praxis responds to a specific design problem: an AI-supported project can look competent while leaving the participant's reasoning difficult to inspect. The workspace implements a coarse withdrawal point. The learner's starting response is saved and locked before coaching begins; five specification fields are versioned; validation observations are recorded; and a separate transfer scenario then restricts the learner's earlier content and the coach for the active project. The report is candid that this is a design response to Pea's account of [[scaffolding]] rather than a validated fading algorithm — the system does not estimate latent competence and does not decide to withdraw help on the basis of a psychometric model, so it is not an instance of [[adaptive-learning]]. Coaching asks the model for one concise diagnostic question and at most one scaffold, an interface choice motivated by research on [[formative-assessment|formative feedback]]; preserving the locked starting response is likewise one trace a future study could read alongside revision and transfer, not a replication of [[productive-failure]]. The transfer stage exists specifically to make independent performance a separate outcome from assisted work.

## What the synthetic rehearsal did and did not test

The rehearsal crossed three fictional workplace contexts with four injected provider conditions and ten repetitions per cell, producing 120 episodes and 3,990 nested checks — a design the report repeatedly warns should not be read as 120 statistically independent learners, a representative adult sample, or 3,990 independent trials. The provider conditions are test doubles rather than four [[llm|language models]]: valid deterministic replies, injected runtime exceptions, empty content, and a reentrant overlapping save. Negative probes requested another user's record, attempted facilitator edits and learner self-review, tried coaching before the baseline, and attempted stale-revision saves and transfer submission without enough text or attestation; a rejection passed only when the expected domain exception occurred. The service ran serially in memory under PHP 8.5.4 and SQLite 3.51.3 on an arm64 host, and the recorded episode times of 0.856 to 1.620 ms — median 0.923 ms, 95th percentile 1.091 ms — exclude HTTP, authentication, rendering, transport, and real inference, so they are reproducibility diagnostics rather than latency estimates. This is developer-led verification of a frozen release, an [[ai-ed-evaluation|engineering evaluation]] with an unusually explicit [[benchmark|scope statement]].

## Provenance is not educational validity

The application retains local analogues of provenance: project versions, activity events, and authenticated actors. The report distinguishes that from the W3C PROV model and states plainly that the JSON schema is not a conformant PROV serialisation, that it does not capture every interaction or store a tamper-evident audit log, and that a provider/model label plus a policy identifier is insufficient for exact reconstruction of a historical response. Its table of inference boundaries is the clearest part of the argument: a baseline and versioned specification support only the claim that text was saved in a particular sequence; a hint record supports only that a response and its reported origin were stored; a validation observation records that an actor described testing, not that a prototype passed; and a facilitator rubric records that an authorized reviewer supplied values, not that those ratings are reliable or calibrated. These are [[learning-analytics|process records]], not outcome measures, and conflating them would be a basic [[assessment-validity]] error. The report therefore separates what its evidence supports from what requires additional, human-collected data.

## From engineering readiness to a future learner study

The report positions the rehearsal as preparation for, not a substitute for, a learner study. The proposed next steps are to check whether the workflow is understandable in the intended course, to distinguish interface difficulties from difficulty with the workplace problem, and to assess independent performance with clearly defined, preferably supervised tasks and a prespecified rubric; delayed [[transfer-of-learning|transfer]] is suggested where the question concerns retained workplace reasoning, and raters would be trained with agreement reported before reconciliation. Automated interaction traces would remain explanatory process measures rather than substitute outcome scores. The design also keeps [[human-in-the-loop-ai|human judgment in the loop]]: a facilitator assigns rubric judgments and feedback, and the transfer controls restrict the learner's own project rather than attempting to police conduct elsewhere, which is why the report says the boundary cannot prove that assistance was absent outside the application. Governance is named as future work — research use requires its own consent, retention, deletion, and model-provider data-handling decisions, which are [[privacy]] decisions as much as ethical ones — and the report makes no claim of completed ethics approval, a gap that any [[professional-training]] evaluation would need to close before recruiting adults.

## What this means for practice

- **Instructional designers.** Separate assisted work from the moment you intend to assess: Praxis saves and locks a baseline response, requires a specification and validation observations before transfer, and rejects coaching and export during an active transfer attempt.
- **[[educational-technology-developers|Educational technology developers]].** Treat provider failure as a first-class state: the exception and empty conditions each recorded 30 unavailable outcomes and stored zero hints, and a pending-request marker with a nonce and expiry prevented stale saves from being accepted.
- **Researchers.** Read the rehearsal for what it establishes — tested workflow, authority, failure-recovery and provenance properties — and design the human study separately, with a prespecified rubric, trained raters, and delayed transfer if retained reasoning is the outcome.
- **Administrators.** Do not treat application use as consent to research: the report calls for separate consent and governance arrangements before any participant study.

## Limitations

- The evaluation contains no human participants: all responses are scripted synthetic content, test identities, and demonstration accounts, and facilitator-role feedback is a fixture.
- The 120 episodes are repetitions of the same specified transitions, and the 3,990 checks are nested assertions with different numbers per provider condition — not statistically independent trials.
- The tests are developer-led and were written with knowledge of the implementation, and the author has a direct interest in the system's development, so an all-pass result does not demonstrate the absence of bugs or provide independent certification.
- The recorded timings exclude HTTP, authentication, rendering, transport and real inference, and no concurrent-user load, soak, hardware benchmark, or device and accessibility sample was run.
- The facilitator rubric has not undergone reliability or validity testing, and the live checks contributed only one provider response per environment.
- The starting and transfer scenarios are not established as equivalent forms, so subtracting a baseline score from a transfer score would not automatically yield a valid learning-gain measure.

## Citation

Kadir, N. (2026). [*LearnAdapt Praxis: Controlled AI Assistance and Evidence Traces for Adult Workplace Learning*](https://arxiv.org/abs/2610.02699). arXiv:2610.02699.