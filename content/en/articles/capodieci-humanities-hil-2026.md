---
title: "Scaffolding or substitution? Generative and Agentic AI in humanities learning under a Human-in-the-Loop lens"
created: "2026-11-08T09:16:04-05:00"
updated: "2026-11-08T09:16:04-05:00"
type: article
page_kind: [synthesis]
research_method: [literature review]
evidence_context: educational
level: [higher ed, secondary]
discipline: [humanities education]
audience: [instructors, instructional designers, researchers]
sources: ['raw/papers/capodieci-humanities-hil-2026.md']
source_url: "https://ceur-ws.org"
source_depth: full text
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-08"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [cognitive-offloading, critical-thinking, agency, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, human-in-the-loop-ai]
assessment: []
methods: []
ethics: [hallucination-risk]
---

> **Synthesis:** Capodieci, Bruno and Quaratino (2026) review [[generative-ai|generative]] and [[agentic-ai|agentic]] AI in [[humanities-education|humanities education]] through the [[human-in-the-loop-ai|human-in-the-loop]] principle, sorting approximately 42 sources gathered between June and July 2026 along one axis: how deeply the AI is woven into the interpretive task, from an external object of scrutiny to an embedded component of it. Their central move is to collapse two variables the field usually reports side by side: depth of mediation and the operationalization of human oversight are, they argue, one mechanism read from two angles, and what decides whether a gain survives is not where a check sits but whether the learner retained [[agency|authorship]] over the sequence that produced the output. The evidence is a map, not a test: agentic AI has one documented humanities case, the causal studies sit outside the discipline, and the paper's transversal-competence claim is offered as a hypothesis.

*Critical narrative review: the authors collect no data of their own. There is no sample, instrument or measured outcome, so every figure below is either an attributed claim about a study in the corpus or a count of the corpus, never a finding of this paper.*

## Key Findings

1. **Generative AI is mature in the humanities; agentic AI is nearly absent.** Across approximately 42 candidate sources the review finds one documented humanities-specific agentic case: a system that produced an extended essay on the Aeneid with minimal step-by-step direction, offered as an illustration rather than an evaluated intervention.
2. **The two paradigms differ in where the human sits.** Generative AI returns a discrete artifact per prompt, examined after generation. An agentic system plans and executes a sequence, so the learner reviews the finished product, with the intermediate steps not directly accessible.
3. **The substitution pattern outnumbers the critical one.** In the reviewed corpus of AI-mediated interpretation episodes, adoption with minimal elaboration or verification accounts for 35.7% of episodes, against 26.2% for the critical pattern of triangulating, questioning and contextualizing output (Voicu, 2026).
4. **Only one study tests the mechanism experimentally.** Wong and Qiu (2026) found that students with unrestricted ChatGPT access reverted to baseline creativity on an unaided task, while students required to generate an idea before consulting the system kept their gains once the tool was withdrawn; the review treats this as its only causal demonstration of the mechanism.
5. **Error and erosion fail differently.** Ross (2023) had ChatGPT substitute a different Catullan poem for Catullus 16 without any disclaimer, while Kosmyna et al. (2025) found neural connectivity and reported ownership strongest in unaided writing, intermediate with a search engine, and weakest when an LLM supplied the content.

## Why a check placed after generation is not a check

The review's sharpest observation is not that AI errs but that its errors arrive at the moment the loop assumes a human will catch them, with nothing in the output marking that moment as one requiring verification. Ross's case shows the shape of the failure: an unflagged substitution that reads as a translation, producing a specific and traceable misconception rather than a vague one.

Read against the review's own comparison, this is a design property rather than a model defect. Generative AI inserts the human after generation; agentic AI pushes the insertion point to after completion, when the reasoning behind the artifact is no longer inspectable. The further the checkpoint moves from the work, the less the output gives a learner reason to use it, and confidence untethered from experience (Kelly et al., 2023) plausibly leaves the learners least able to judge an output the most likely to accept it.

The durability findings point the same way. In Wong and Qiu's experiment the regulated group developed ideas already their own, so the check occurred inside the process; Kosmyna et al. found higher neural engagement among participants who wrote unaided before reassignment to the LLM. Sequencing, not the presence of a tool or a reviewer, is the variable.

## What the depth-of-mediation axis adds to the scaffolding debate

[[scaffolding|Scaffolding]] research usually asks how much support a task supplies and when it should fade. The review reframes the question as who authored the sequence the support belongs to, which it reads through Floridi's distinction between the player, the observer and the designer of a system's rules. Its clearest design example, Caserta's counterfactual sequence on Herodotus, makes the two inseparable: students vary a single detail inside a structured prompt, develop counterfactuals already latent in the source, then compose original scenarios with no prompt structure left to lean on. At each stage what the student authors expands as what the prompt supplies contracts, so the scaffold is not a layer added to the task but the schedule by which authorship is handed over.

That reframing has a ceiling the review is careful to name. Caserta's sequence was itself designed by someone else, and no case in the corpus gives a learner authorship over the architecture of a multi-phase task, as distinct from a single interpretation, a run of prompts, or the structure of one artifact. The proposed alternative is an agentic workflow the learner assembles and supervises — sequencing a translation through source analysis, lexical disambiguation, syntactic parsing, semantic interpretation, terminology verification, drafting and revision rather than delegating the whole sequence and judging only the result. The review states plainly that no documented case of this configuration exists. The axis therefore describes where current practice sits, not an achievable design.

This is where the paper conflicts with a placement-based reading of oversight. If the design question is where in a pipeline human judgment has most marginal value, a well-placed review step should be enough. The review's cases say it is not: the post-generation insertion point is exactly where oversight failed, and the agentic configuration moves it further out rather than fixing it. Placement is necessary and not sufficient; authorship of the process makes it operative.

## What the corpus can and cannot establish

The evidence base is lopsided. Only Wong and Qiu's study manipulates conditions experimentally and tracks a subsequent unaided task, and it is outside the humanities. Only Kosmyna et al. measure cognitive engagement neurophysiologically rather than inferring it from behavior or self-report, and that result rests on a single, not yet replicated study. Within the humanities, the evidence is associational (Voicu's coded classroom corpus) or a design proposed but not tested (Caserta). Ross's case is qualitative testing by a single author. Self-report is the dominant method across the corpus.

That asymmetry governs the central claim. The authors describe the link between depth of mediation and oversight as observed within the cases assembled, not as a general mechanism, and they separate the causal claim (sequencing determines durability) from the associational one ([[critical-thinking|critical interpretation]] is the rarer trajectory). The transversal-competence argument is a third step, resting on bibliometric and policy literature about AI-reconfigured labor markets rather than on measurement inside humanities education.

## What this means for practice

- **Require an independent attempt before the tool, and an unaided task after it.** The review's only causal evidence is a sequencing effect: gains persisted when students generated their own idea first and disappeared when the system supplied the solution outright. Build both ends into the assignment rather than announcing a policy.
- **Assign the sequence, not the artifact.** Where a task can be decomposed — translation, source analysis, counterfactual construction — have students order and supervise the steps and record the choices, instead of delegating the whole sequence and grading the result. The review proposes this configuration without a documented case, so treat it as a design bet to evaluate.
- **Put verification where the output gives no cue.** A substitution presented as a translation will not prompt a check on its own. For classical-language work, require comparison against a second text, a named edition or a peer reading, so the check is a task step rather than an assumed disposition.
- **Do not read agentic autonomy as pedagogical depth.** The one humanities agentic case leaves the learner receiving a finished essay. More system capability moved the learner further from the interpretive work, not closer to it.
- **Grade the process record.** Ask for the prompt sequence, the discarded branches and the verification decisions alongside the artifact; those are the traces that distinguish authored work from accepted output.

## Limitations

- The review is narrative, not systematic: approximately 42 candidate sources from searches in June and July 2026, with no PRISMA flow, no dual independent coding and no formal quality appraisal.
- The humanities-specific agentic literature is thin enough that the authors say a small number of additional sources could alter the picture; the single documented case is an illustration, not a body of evidence.
- Most cited studies report no sample size, and the two strongest designs sit outside the humanities. Wong and Qiu test creativity in university students, not interpretation of a primary text, and Kosmyna et al.'s EEG result is unreplicated.
- The humanities evidence is associational or untested: Voicu's 26.2% and 35.7% describe the distribution of observed trajectories, not the effect of an intervention, and Caserta's sequence has no classroom outcome reported here.
- The transversal-competence claim rests on parallel labor-market and bibliometric literatures, not on measured transfer from humanities learning to employment.
- Depth of mediation is treated as a single descriptive axis; the authors leave a multi-dimensional operationalization of agentic autonomy — goals, constraints, tool access and intermediate-step autonomy — to future work.

## Citation

Capodieci, A., Bruno, A., & Quaratino, L. (2026). [*Scaffolding or substitution? Generative and Agentic AI in humanities learning under a Human-in-the-Loop lens*](https://ceur-ws.org). In *ReDH 2026: Rethinking the Future of Digital Humanities through Ethics and Artificial Consciousness*, co-located with AIxIA 2026, October 6–9, 2026, Perugia, Italy. CEUR Workshop Proceedings, ISSN 1613-0073.
