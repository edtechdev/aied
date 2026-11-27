---
title: "Designing and governing generative AI for language education: a testable sociotechnical framework (RAiLE)"
created: "2026-11-27T01:28:00-05:00"
updated: "2026-11-27T01:28:00-05:00"
type: article
published: "2026-07-08"
sources: ['raw/papers/khodi-language-education-sociotechnical-2026.md']
confidence: low
evidence_context: educational
page_kind: [framework]
research_method: [position paper]
discipline: []
level: []
audience: [instructors, researchers]
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

> **Synthesis:** Khodi and Curle's Perspective argues that personalization-first generative AI in language education carries three risks when it is introduced without pedagogical and governance constraints: epistemic substitution, in which learners hand over judgments about stance, genre and evidence to the system; normative compression, in which dominant language varieties are presented as neutral; and governance opacity, in which interaction data are captured and may be repurposed. Their response is RAiLE, a testable sociotechnical framework that couples pedagogical commitments with system design requirements and institutional governance mechanisms, then maps each principle to an implementable feature and candidate indicators. The article reports no empirical data: it contains no sample, instrument, outcome or statistical analysis, and its cited studies are used to show plausibility rather than to validate the framework.

## Key Findings
1. **Unbounded personalization is the target, not personalization itself.** The authors accept that fluent, adaptive feedback can help learners; their objection is to optimization for surface quality without constraints that keep agency, plurality and transparency in view.
2. **Three named risks organize the argument.** Epistemic substitution, normative compression and governance opacity are presented as distinct but related failure modes of personalization-first deployment in language education.
3. **Rhizomatic learning is treated as a design constraint.** Rather than an "anything goes" pedagogy, branching across languages, genres and rhetorical options is converted into requirements that systems and teachers can implement and evaluate.
4. **The framework has three interdependent layers.** Pedagogy without design constraints is undermined by opaque AI authority; design without governance enables data extractivism; governance without pedagogy reduces responsibility to compliance.
5. **Four design features make the proposal concrete.** Serendipity triggers, dissent-aware pairing, learner-facing explanations with uncertainty cues, and variety-respecting output options are specified as buildable features.
6. **Governance is written into the pedagogy.** Co-authored data pacts, limits on repurposing interaction logs, meaningful opt-out without penalty and human review of integrity allegations form a stated minimum baseline.
7. **The authors propose a research program, not results.** Design-based cycles, quasi-experimental or cluster-randomized comparisons, longitudinal mixed-method studies, comparative cases and component-based designs are offered as routes to refinement or falsification.

## The proposal in concrete terms

The pedagogical layer asks teachers to treat AI output as provisional. Learners should have structured opportunities to accept, reject, revise and justify suggestions, so that [[agency]] is practiced rather than assumed. Bounded exploration means branching across languages, genres and rhetorical strategies, then returning to shared questions through cycles of exploration, comparison, justification, peer testing and disciplinary goals. Feedback should offer multiple viable alternatives with rationales about register, audience, stance and evidence, instead of a single corrected rewrite. Translanguaging is treated as a legitimate learning mechanism, not a workaround.

The system design layer specifies what platforms would have to enable. Serendipity triggers intentionally interrupt narrow personalization tunnels by introducing adjacent discourse options: alternative genres, counterarguments or variety-sensitive formulations, always with prompts to compare and justify. Dissent-aware pairing forms groups across linguistic, cultural or disciplinary differences and supplies facilitation scripts that normalize disagreement. Learner-facing explainability is pedagogical rather than technical: the system says why a formulation fits a purpose and signals uncertainty rather than projecting false certainty. Variety-respecting output design presents contextually legitimate alternatives without labeling non-dominant forms as wrong.

In the illustrative English for Academic Purposes scenario, a student submitting an introduction sees three alternative openings: cautious hedging typical of empirical research, a more assertive stance, and a critical or counterargumentative perspective. Each carries an explanation of its rhetorical implications. The student selects or modifies one and justifies the choice, then discusses it with a peer from a different background before the instructor relates the decision to genre conventions and audience expectations.

The governance layer treats data rules as part of the learning design. A data pact states what is collected, for what purpose, how long it is retained, who may see it and how learners can opt out without penalty. The stated baseline restricts prompts, drafts, revision histories and logs to pedagogical and formative use; bars repurposing for discipline, ranking, staff evaluation or product development without informed consent; limits identifiable access to the learner and instructor; and requires human review and due process for any integrity allegation. Procurement is expected to favor transparency, data minimization and avoidance of vendor lock-in.

## How the framework could be tested

The authors convert each principle into an observable mechanism and candidate indicators in a table. Distributed agency is paired with a structured accept/reject/modify workflow and indicators such as the proportion of suggestions modified or rejected and the specificity of learner justifications. Bounded feedback is paired with serendipity prompts and compare-and-justify tasks, with attention to the breadth of rhetorical options considered. Dialogic feedback is paired with multi-option rationales and measures such as uptake distribution and reduced convergence on a single template. Dissent-aware collaboration and explainability are likewise linked to participation balance, perspective-taking, learner questions and reduced reliance on AI as final arbiter. Data pacts and safeguards are linked to trust, opt-out without penalty, self-censorship and learner understanding of data use.

The research agenda is explicitly revisable. Design-based research would introduce features incrementally and examine whether learners consider a wider range of options over repeated cycles. Quasi-experimental or cluster-randomized studies would compare RAiLE-informed classrooms with personalization-first environments on agency, rhetorical diversity and perceptions of AI authority. Longitudinal mixed-method work would combine discourse-analytic coding of revisions with surveys of perceived authority and autonomy. Comparative case studies would examine data pacts across institutions, while factorial or component-based designs would try to isolate which features do the work. The authors stress that [[critical-thinking|critical]] judgment and voice may shift even where proficiency effects are mixed or delayed, so proficiency-only evaluations would miss the point.

## What this means for practice
- **Instructors.** Ask learners to accept, reject or modify AI suggestions and to justify the decision, rather than treating a fluent rewrite as the end of the task.
- **Instructors.** Offer feedback as multiple viable options with rationales about audience, register and stance, and make space for peer disagreement about language choices.
- **Institutions.** Write classroom data pacts that state collection, retention, access and opt-out terms, and forbid using interaction logs as the sole basis for misconduct allegations.
- **Researchers.** Treat RAiLE as falsifiable: test individual features, track revision histories and justification quality, and compare governance arrangements before claiming effectiveness.

## Limitations
- The piece reports no empirical data at all: there is no sample, instrument, intervention, outcome measure or statistical analysis, so none of the proposed effects has been estimated.
- The studies cited are treated as indicative evidence that the risks are plausible, not as confirmation that RAiLE works; the authors explicitly reject a causal-validity claim.
- Feasibility depends on contextual conditions such as pedagogical autonomy, digital infrastructure and participatory governance, which may not exist in resource-constrained or highly standardized settings.
- The framework acknowledges real trade-offs: justification tasks can raise teacher workload, explainability can add interface complexity, and data restrictions can reduce analytics used for quality assurance.
- It does not claim guaranteed proficiency gains, and its indicators remain candidates rather than a validated measurement model.

## Citation
Khodi A and Curle S (2026) Designing and governing generative AI for language education: a testable sociotechnical framework (RAiLE). Front. Educ. 11:1806184. doi: 10.3389/feduc.2026.1806184.
