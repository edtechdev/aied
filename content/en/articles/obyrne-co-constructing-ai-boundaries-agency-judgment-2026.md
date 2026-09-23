---
title: "Co-Constructing AI Boundaries: Agency, Judgment, and Ethical Literacy in AI-Mediated Meaning-Making"
created: "2026-09-22T21:26:59-04:00"
updated: "2026-09-22T21:26:59-04:00"
type: article
published: "2026"
sources: ['raw/papers/obyrne-co-constructing-ai-boundaries-agency-judgment-2026.md']
confidence: medium
page_kind: [evaluation, framework]
research_method: [case study]
discipline: [writing education]
level: [teacher education, undergraduate]
audience: [instructors, faculty developers, researchers]
foundations: [agency, ai-literacy, academic-integrity]
pedagogy: [student-ai-interaction, sociocultural-learning]
technology: [generative-ai, rag, human-in-the-loop-ai]
assessment: [evaluative-judgment]
methods: [qualitative-research]
ethics: [ethics]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-22"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** O'Byrne (2026) reports a semester-long [[qualitative-research|qualitative case study]] of 23 [[higher-ed|undergraduates]], most of them [[teacher-education|pre-service teachers]], who used Google's NotebookLM as a required cognitive partner during a literacy ethnography. Reading exported JSON interaction logs as digital trace data through Nexus Analysis, the study segments the work into Trios (student prompt, AI response, student reflection) and distinguishes two profiles. Orchestrators kept [[agency|epistemic authority]] by constraining, correcting, and re-authoring system output; Outsourcers delegated organizational and interpretive work early and accepted its framing with little revision. Artifacts from both looked deceptively similar, so the difference appeared only in process-level traces. The paper reframes [[human-in-the-loop-ai|human-in-the-loop]] as an interactional literacy practice rather than a technical safeguard, and argues that [[teacher-education|teacher education]] should design "loops worth living in" that normalize [[desirable-difficulties|productive friction]] and professional refusal.

## Key Findings
- **Two profiles organized the same task differently.** Orchestrators sustained oversight and constraint; Outsourcers delegated authority early and intervened little once output looked sufficient.
- **Final artifacts concealed the difference.** Both produced polished, coherent products, so the evidence sat in prompts, latency, corrections, and refusals: NotebookLM's Convert to Source function kept reflective notes inside the working corpus, not in end-of-course reflections.
- **Boundary work, not technical skill, separated the profiles.** Both used the same [[rag|retrieval-augmented]] source-grounding tool; the difference was how long students stayed accountable for its output.
- **Evaluation ran through a recurring four-step routine.** O'Byrne names an Agency Check: Credible, Relevant, Acceptable, and Nuanced, asking whether output is accurate, fitting, serviceable, and carries stance and voice.
- **[[ethics|Ethical]] discomfort tracked with the most active boundary workers.** The [[academic-integrity|"cheating tension"]] over authorship intensified among students doing the most boundary work.

## Tracing judgment through NotebookLM interaction logs
Twenty-three undergraduates in a language and literacy course at a small liberal arts institution in the southeastern United States completed a semester-long literacy ethnography; all 23 shared their notebooks with the instructor-researcher. NotebookLM was chosen because its source-grounded structure kept students inside a bounded corpus of self-collected materials rather than the open web. Logs were exported in JSON, de-identified, and segmented into Trios, then read against three interpretive indicators: latency between output and the student's next action, prompt evolution in specificity and constraint, and edit distance between AI language and the student's final wording. Nexus Analysis supplied a [[sociocultural-learning|sociocultural]] frame: interaction order, historical body, and discourses in place.

## The Orchestrator and the Outsourcer
Patterns of [[student-ai-interaction|student-AI interaction]] clustered into two profiles. In the Orchestrator pattern the system became a junior analyst: prompts were high-constraint and persona-driven, output was redirected immediately, and the student kept the structure while replacing descriptors, examples, and framing with their own language. One reflective note worried the notebook would only reflect the resources already provided, said the student needed to "lock in on only one part," and admitted, "I worry about this notebook and how I am choosing to use it." The Outsourcer pattern inverted that relation: prompts were low-constraint and generic, default genres such as study guides, quizzes, glossaries, and summaries were accepted, and reflections were brief. In a focal case on a municipal fire department, the system's headings became the analysis backbone.

## Boundary work as the mechanism of agency
Cross-case comparison set the profiles against six dimensions: interaction order, prompt structure, response latency, integration strategy, epistemic stance, and reflection. The distinction was not whether AI was used but whether boundary work was sustained, since [[agency|epistemic authority]] was asserted or ceded within the interaction order, and the recurring [[evaluative-judgment|evaluative judgment]] inside each Trio made that contest legible. Where interruption and correction disappeared, delegation shaded into [[cognitive-offloading|cognitive offloading]] and the system shifted from cognitive amplifier to structural authority, producing final work that was conceptually safe but shallow.

## From verification to valuation
When [[generative-ai|generative AI]] enters an authentic literacy task, verification-oriented instruction that asks whether information is accurate, credible, or relevant is necessary but insufficient, because [[rag|RAG]] systems generate technically accurate yet conceptually flattened output. Only the Orchestrator engaged in valuation, rejecting responses not as incorrect but as lacking nuance, voice, or epistemic stance. The paper's design proposal is "loops worth living in": environments where evaluation, refusal, and reflection are visible and expected, with pause-and-probe moments and [[assessment]] that values process alongside product. For [[teacher-role|teacher educators]], the aim is not [[prompt-engineering|prompt strategies]] or compliance but helping pre-service teachers distinguish offloading mechanical tasks from non-delegable interpretive and community-representational work. The closing claim: the central question of [[ai-literacy|AI literacy]] is how students learn to decide when not to delegate judgment.

## What this means for practice
- **Instructors.** Grade the loop, not only the artifact: require the prompt, response, and reflective note alongside the draft, since comparable products came from quite different processes.
- **Instructors.** Build in pause-and-probe moments that expect refusal, because evaluative labor disappears from view when interaction becomes too smooth; ask students to name what they rejected or rewrote.
- **Instructors.** Treat discomfort as signal, not violation: the "cheating tension" surfaced most among the students doing the most boundary work.
- **Faculty developers.** Distinguish delegable from non-delegable work with pre-service teachers, since offloading mechanical tasks is not the same as handing over interpretive and community-representational labor.
- **Researchers.** Read interaction traces alongside final products, because [[self-report-measures|self-report]] cannot recover the judgments and refusals that shaped an artifact.

## Limitations
- One undergraduate course at a single small liberal arts institution in the southeastern United States, taught by the researcher who designed the assignment, with 23 participants.
- The two profiles are analytic abstractions that did not map neatly onto every participant; each is illustrated through a focal case rather than reported case by case.
- Digital trace data cannot capture intentions or affective states, so latency, prompt evolution, and edit distance were read as interpretive signals rather than metrics, and claims required patterns recurring across multiple Trios and data sources.
- NotebookLM was chosen as a constrained, source-grounding environment, so the boundary work it made visible is tied to a tool that supplies a bounded corpus rather than searching the web.

## Connected Concepts
- [[agency]] — enacted through interruption, correction, constraint, and refusal rather than through maximal tool use
- [[ai-literacy]] — reframed here as judging which work should not be delegated to a system
- [[human-in-the-loop-ai]] — reconceived as an interactional literacy practice, not a technical safeguard
- [[evaluative-judgment]] — the credibility, relevance, adequacy, and nuance checks that structure the loop
- [[cognitive-offloading]] — what delegation without evaluative interruption produces
- [[teacher-education]] — the dual-positionality site where AI boundaries are rehearsed professionally

## Connected Articles
- [[preservice-teacher-agency-genai-design-learning-2026]] — pre-service teachers' agency with generative AI, traced as a process
- [[tracing-genai-literacy-interaction-patterns]] — student-AI interaction patterns in academic writing
- [[cognitive-offloading-llm-synthesis-writing]] — profiles of offloading in LLM-mediated synthesis writing
- [[ai-refusal-higher-education-diagnostic-non-use-2026]] — refusal as a diagnostic rather than a deficit
- [[reclaiming-epistemic-agency-co-agency-2026]] — a critical framework for human-GenAI epistemic agency
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — HITL as a technical safeguard in writing assessment

## Citation
O'Byrne, W. I. (2026). [*Co-constructing AI boundaries: Agency, judgment, and ethical literacy in AI-mediated meaning-making*](https://doi.org/10.1177/23813377261476996). *Literacy Research: Theory, Method, and Practice*, 1-22.