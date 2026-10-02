---
title: "An Educator-Guided LLM Pedagogical Agent for Scaffolded Feedback in Conceptual Database Design"
created: "2026-10-02T11:30:00-04:00"
updated: "2026-10-02T11:30:00-04:00"
type: article
sources: ['raw/papers/educator-guided-llm-pedagogical-agent-2026.md']
confidence: high
page_kind: [framework]
research_method: [system development]
discipline: [cs education]
level: [higher ed]
audience: [instructors, researchers]
pedagogy: [scaffolding, problem-solving]
technology: [pedagogical-agent, intelligent-tutoring, llm, human-in-the-loop-ai]
assessment: [feedback, ai-feedback-quality, formative-assessment]
methods: [mixed-methods-research]
ethics: [privacy]
foundations: [human-ai-collaboration, agency, teacher-role]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-02"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Riazi and Rooshenas present an educator-guided [[llm|large language model]] [[pedagogical-agent]] for [[scaffolding|scaffolded]] [[feedback]] in conceptual database design. Built into an entity–relationship diagram (ERD) editor, it separates a hidden, artifact-grounded diagnosis from the workflow that decides what support a student sees, grounding feedback in the diagram, the assignment requirements, educator-authored rubrics, and instructional resources. A four-stage, learner-controlled sequence runs from concept checks and guided application to low-detail feedback and localized clarification, with each request opening a stateful episode linked to versioned ERD states. Across three ERD environments and 383 episodes, 71.1% of observed target-level changes fully or partly incorporated the hidden diagnostic target, including many reached after only the first two stages. Staged disclosure could withhold inaccurate details or leave room for later recovery, though some errors still shaped revisions, and a self-selected survey favored delayed disclosure and student [[agency|agency]] while flagging indirectness and repetition.

## Key Findings

1. **Four stages under learner control.** Stage 1 offers up to three educator-authored concept questions; Stage 2 fills template questions from the selected ERD component; Stage 3 withholds the localized correction; Stage 4 supports multi-turn clarification. Each accessed stage consumes one feedback credit.
2. **The educator defines the stages and disclosure limits.** A controller selects the active stage and assembles context from the ERD diagnosis, educator resources, and episode history; the [[llm]] only selects, adapts, or generates content within those limits — external workflow policy rather than [[prompt-engineering|prompt design]] or model [[llm-training-and-fine-tuning|fine-tuning]].
3. **The system extends, not re-evaluates, requirement-grounded ERD feedback.** The diagnostic pipeline is adopted from prior work; the contribution is the educator-guided delivery layer, which never modifies the ERD and preserves student authorship.
4. **Students used the workflow as an early-stage scaffold.** Most responding episodes ended after Stage 1 or Stage 2, only 12 error-positive episodes reached Stage 4, and 35 ended after the concept check was displayed but before any response.
5. **Incorporation was real but conditional.** A later ERD was stored for 186 of 383 episodes (48.6%). Among 250 error-positive episodes, 128 (51.2%) changed the targeted relationship, and 91 of those incorporated the hidden target — 36.4% of error-positive episodes and 71.1% of observed target-level changes.
6. **Staged disclosure sometimes hid diagnostic errors, but not reliably.** An inaccurate diagnosis could merely select a related concept or let students adopt only a valid recommendation; elsewhere an incorrect claim entered the scaffold and the revision still scored fully incorporated.
7. **Students favored delayed disclosure but wanted smoother help.** Among 31 respondents (one excluded; 30 users, 47.6% of enrollment), 21 of 28 (75.0%) disagreed that the system revealed too much too early, while 11 of 28 (39.3%) found it too indirect and 12 of 28 (42.9%) reported repetition.

## Educator control over diagnosis, disclosure, and interaction

The architecture separates three things that one-shot feedback collapses: the hidden diagnosis, the [[pedagogy|pedagogical]] workflow that controls disclosure, and the student-facing generation. Each assignment supplies requirements and educator-authored rubrics, and question pools, conceptual explanations, and workflow stages are defined at the learning-objective level, so educators reuse them across assignments. At runtime the controller selects the active stage and assembles the context available to the model from the ERD diagnosis, educator-provided resources, and retrieved episode history. The [[llm]] then selects, adapts, or generates content within those disclosure limits — a departure from [[intelligent-tutoring|intelligent tutoring systems]] that require extensive domain-model authoring.

Returning to the editor ends the episode; a later request reprocesses the current ERD and creates a new episode, even for the same relationship, so the previous diagnosis is not assumed to remain valid after revision. The agent never modifies the ERD. Governance is expressed through requirements, rubrics, concept-aligned questions and resources, workflow definitions, and feedback-credit [[educational-policy-ai|policies]] — [[human-in-the-loop-ai|educator oversight]] that leaves the model unchanged.

## What the classroom deployment showed

The system ran in an online, mixed-level [[cs-education|Database Systems course]] in Summer 2026. The course enrolled 63 students, mostly [[higher-ed|undergraduates]]; 48 completed an individual homework containing three ERD environments assigned together for one week. Use of the editor was required, but [[ai-feedback-quality|AI feedback]] was optional and ungraded, and [[teacher-role|teaching assistants]] independently graded the submitted ERDs. Each student received 15 feedback credits per environment, and no student requested additional credits. GPT-4o handled the LLM-mediated diagnosis and stage-generation steps.

Students leaned on the workflow as an early-stage scaffold. Most responding episodes ended after Stage 1 or Stage 2, and a later ERD was available for just 186 of 383 episodes (48.6%), indicating that many requests were followed by no saved revision or by work that could not be linked to a later artifact state. The third environment stored fewer later ERDs and showed lower early-stage incorporation; its requirements contained several closely related relationships requiring distinctions among direction, cardinality, and participation, though the environments were not designed as comparison conditions.

## Diagnostic errors and the limits of staged disclosure

Manual inspection of 20 randomly sampled trajectories exposed four ways the hidden diagnosis, the student-visible scaffold, and the eventual revision can diverge. Sometimes an inaccurate diagnosis merely selected a related conceptual topic: the educator-authored explanation stayed accurate while the erroneous claim stayed hidden, and the next saved ERD omitted the participation change the diagnosis had wrongly recommended.

Sometimes two contradictory diagnoses passed in sequence, because revising the ERD removed the pattern that triggered the earlier inference; since neither was presented verbatim, the student never received two explicit contradictions. Sometimes a partly wrong target let a student adopt only the valid recommendation, yet the episode was labeled partially incorporated even though the unapplied portion was never clearly stated. And sometimes an inaccurate claim did enter the scaffold and the student revised accordingly, scoring fully incorporated because the revision matched the hidden target. The reverse also occurred: correct, increasingly explicit feedback across all four stages still failed to produce the intended artifact change. Incorporation therefore measures correspondence with the hidden diagnosis, not the correctness of the diagnosis or the quality of the revision.

## What this means for practice

- **Instructors.** Author the workflow, not just the content: define stages, allowed disclosure, rubrics, and question pools at the learning-objective level so the scaffold — not the model — controls when a correction appears.
- **Instructors.** Let staged support run before the explicit answer: 73.4% of the 109 target-level changes after early exits still incorporated at least part of the hidden target, and most students never needed Stage 4.
- **Course teams.** Watch the no-error route: when no error is diagnosed the controller routes straight to Stage 3 confirming feedback without earlier scaffolding, so a false negative reaches the student unbuffered.
- **Developers.** Log the active stage, input context, student response, generated feedback, and disclosed information, so an inaccurate diagnostic detail that stays hidden but still shapes the scaffold can be reviewed later.
- **Researchers.** Treat incorporation as behavioral alignment with a hidden target, not as evidence that the diagnosis was correct or that learning occurred.

## Limitations

- Single online, mixed-level Database Systems course in Summer 2026: 63 students enrolled, 48 completed the homework, and only 30 system users (47.6% of enrollment) remained after one respondent was excluded for not using the agent.
- Incorporation rates are bounded by missing artifacts and a narrow denominator: a later ERD existed for just 186 of 383 episodes (48.6%), and the 71.1% rate is conditional on the student making a relevant target-level change, not an overall success rate.
- The diagnostic pipeline is adopted from prior work and not re-evaluated here, and manual verification covered only 20 randomly sampled trajectories with no disagreements — a consistency check on the classification, not a validation of the underlying diagnosis.
- The [[self-report-measures|survey]] was optional and ungraded, drew 31 responses with one excluded, and item-level sample sizes varied because respondents skipped questions, so the perception results may reflect self-selection rather than the full cohort.

## Citation

Riazi, S., & Rooshenas, P. (2026). [*An Educator-Guided LLM Pedagogical Agent for Scaffolded Feedback in Conceptual Database Design*](https://arxiv.org/abs/2610.00870). arXiv:2610.00870.
