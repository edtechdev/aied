---
title: "Coauthorship integrity: Reconceptualising assessment validity for the age of generative artificial intelligence"
created: "2026-08-10T17:08:30-04:00"
updated: "2026-09-20T06:30:22-04:00"
type: article
foundations: [academic-integrity, agentic-ai, ai-education]
technology: [conversational-ai, generative-ai, intelligent-tutoring, llm]
assessment: [assessment, assessment-validity]
research_method: [theoretical analysis]
sources: ['raw/papers/coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene.md']
confidence: high
audience: [assessment designers, assessment professionals, educators]
level: [higher ed]
connected_faqs: [asynchronous-online-courses-ai]
---

Ebrahimzadeh, Shibani, and Buckingham Shum argue that when AI support for academic work is ubiquitous and often undetectable, assessment integrity must be reframed from a provenance problem (who wrote the text?) to a validity problem (what can justifiably be inferred from the evidence?). Written artifacts were trusted as proxies for the cognitive processes behind them; capable [[llm]]s break that link.

Using the assessment validity framework of the *Standards for Educational and Psychological Testing* (AERA et al., 2014), the authors show that [[generative-ai|GenAI]] undermines multiple forms of validity evidence, then propose **Coauthorship Integrity** — violated when students submit AI-generated content they do not understand — as a new conceptual source of validity evidence. Their **"AI Viva"** prototype, a [[conversational-ai|conversational agent]], combines elements of a viva voce with comprehension questions of controllable type and complexity, quantitative and dialogic [[feedback]], and an open-ended closing dialogue.

> **Synthesis:** The paper reframes [[ai-detection]] as a [[assessment-validity]] question: when authorship is uncertain, the evidentiary basis for every other validity source is compromised. Coauthorship Integrity asks whether the student is the epistemic agent behind the submitted ideas — a proposition the authors argue is logically prior to the five AERA sources, which assume the test taker authored the response. The AI Viva is a proof-of-concept mechanism for eliciting response-process evidence at scale, not a summative solution.

## Key Findings

1. **GenAI breaks the written-artifact proxy.** Fluent text can now be produced with little visible evidence of the cognitive work behind it.
2. **All five validity sources are threatened.** Test content, response processes, internal structure, relations to other variables, and consequences each lose evidentiary force in non-proctored contexts.
3. **Coauthorship Integrity as a new source of validity evidence.** It asks whether the student is the epistemic agent behind the ideas and reasoning in the submitted work.
4. **Two exemplar evidence strands.** Dialogic Interaction (this paper's focus, via viva voce/interactive orals) and Embodied Performance (work samples, simulations, OSCE-style testing).
5. **The AI Viva prototype.** Five item types with 30 variations covering all the six levels of the revised Bloom's taxonomy, generated from the student's own text.
6. **Preliminary expert validation (n = 8).** Experts rated comprehension, difficulty, scoring accuracy and feedback on a 0-10 scale; open-ended items averaged 8.38-9.00 for comprehension.
7. **Positioned as formative, for now.** The authors state the work is not a summative solution; the planned next phase tests it with students.

## From provenance to validity

For each of the five sources the paper gives a definition, the GenAI threat, and a higher education example. Test content is threatened when AI embellishment obscures whether an artifact reflects the intended construct. Response-process evidence weakens because behavioral traces no longer represent unaided reasoning but a human/AI "pragmatic system". Internal structure blurs as AI homogenises style across tasks and students, flattening variation between subskills. Relations to other variables suffer when inflated scores distort correlations with later performance, and consequential validity is implicated when decisions such as certification rest on evidence not originating from the student.

## Coauthorship Integrity as an evidentiary strand

Coauthorship Integrity complements rather than replaces the established sources, addressing a new threat the Standards could not have anticipated. Validity there is a unitary construct supported by multiple sources, and the five commonly cited sources are described as illustrative rather than exhaustive, so extension is in principle open. The structural difference matters: response-process evidence assumes the test taker authored the response, whereas in GenAI-mediated writing the submitted text may not reflect the student's cognitive processes at all. Coauthorship Integrity therefore functions as a foundational strand on which the others' evidentiary value depends. The authors keep the theoretical proposal separate from the AI Viva mechanism, whose feasibility is what the study evaluates.

## The AI Viva prototype and its evaluation

Deployed through Microsoft Azure using GPT-4-1106, the prototype's prompt comprised approximately 29000 words; testing concluded that attempting more than 5 items at a time produced poorer performance, so it was delivered in structured segments (around 6000 words generating 5 items per run). It is deliberately a hybrid rather than a full simulation of the human viva: a 1-1 dialogue with prepared questions, consistent feedback and grading, and an open-ended closing discussion, with questions on screen. Eight expert educators and assessment experts (M = 10.5 years teaching experience, SD = 6.07) rated items and contested the agent's scoring. They judged recognition formats easier and justification-heavy items more challenging, approximating the intended cognitive gradient across Bloom's levels, and said the questions prompted them to revisit the clarity of their own writing.

## What this means for practice

- **Instructors.** Move from catching AI use to verifying epistemic ownership: ask students to explain, justify, and extend the ideas in their submitted text, and treat the dialogue as evidence of comprehension rather than authorship.
- **Assessment designers.** Add Coauthorship Integrity as an evidentiary strand alongside the existing sources, and follow a staged pathway: proof-of-concept and expert critique before any wider pilot.
- **Assessment professionals.** Where authorship is uncertain, the other validity sources lose their evidentiary basis; the paper's mapping of GenAI threats onto the five AERA sources is a usable audit prompt.
- **Educators weighing higher stakes.** Keep AI Vivas formative; summative use raises identity verification, locked-down computers and invigilation, and AI-on-AI cheating remains an unresolved challenge.

## Limitations

- The text-centric prototype cannot probe reasoning in fields requiring audio-visual data or mathematical formulae, and it does not simulate the social dynamics of an oral interview.
- The expert evaluation (n = 8) used high-quality texts authored by the participants themselves in 7 of 8 cases — an optimal scenario. It shows technical feasibility, not readiness for summative deployment, which the authors say needs testing with student-authored texts of varying quality and length.
- Because the submitted text may itself contain misunderstandings and responses are scored for consistency with it, scoring and feedback risk reinforcing those misconceptions; mitigations are proposed but not yet verified.
- The contribution is a validity-framework extension plus a proof-of-concept: no students had used the tool, and items at the Evaluate and Create levels of Bloom's taxonomy were not evaluated because answering them exceeded the time available.

## Connected Concepts

- [[assessment-validity]] — the lens adopted to analyze GenAI's effects
- [[academic-integrity]] — reframed as coauthorship integrity
- [[generative-ai]] — the technology undermining the written-artifact proxy
- [[agentic-ai]] — the conversational-agent basis of the AI Viva
- [[assessment]] — the practice being reconceptualized
- [[authentic-assessment]] — aligned verification of understanding
- [[feedback]] — dialogic feedback in the AI Viva
- [[llm]] — the underlying technology
- [[ai-education]] — the umbrella field
- [[higher-ed]] — the assessment context

## Connected Articles

- [[will-skill-not-tool-chinese-university-students-acceptance-of-generative-ai-for-]] — Student acceptance of GenAI for academic writing
- [[learning-to-learn-in-the-age-of-generative-ai-a-scoping-review-and-conceptual-fr]] — GenAI overuse and learner agency
- [[genai-declaration-frameworks-higher-education]] — GenAI declaration frameworks in higher ed

## Citation

Ebrahimzadeh, M., Shibani, A., & Buckingham Shum, S. (2026). [*Coauthorship integrity: Reconceptualising assessment validity for the age of generative artificial intelligence*](https://doi.org/10.1016/j.caeai.2026.100609). *Computers and Education: Artificial Intelligence*, 10, 100609.
