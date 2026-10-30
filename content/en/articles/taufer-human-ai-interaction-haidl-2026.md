---
title: "Human-AI Interactions as First-Class Data: A Formal Interaction Model and Runtime for Explainable AI Collaboration"
created: "2026-10-30T10:20:00-04:00"
updated: "2026-10-30T10:20:00-04:00"
type: article
authors: ["Taufer, M.", "Ng, K. W.", "Lumsden, I.", "Pandey, A.", "Gore, R.", "Ju, A.", "Moudgalya, S.", "Deelman, E.", "Swaminathan, S."]
published: "2026-10-29"
venue: "arXiv preprint"
source_url: https://arxiv.org/abs/2610.40006
foundations: [human-ai-collaboration, agency, learning-design]
pedagogy: [help-seeking, self-regulated-learning, student-engagement]
technology: [generative-ai, llm, learning-analytics, human-in-the-loop-ai]
assessment: [assessment, formative-assessment, learning-gains]
methods: [usability-research, design-based-research]
research_method: [system development, case study]
level: [higher ed]
audience: [researchers, learning analytics designers, educational technology developers, instructors]
page_kind: [framework]
sources: ['raw/papers/taufer-human-ai-interaction-haidl-2026.md']
confidence: medium
source_depth: full text
verified: [citation, quotes, numbers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-30"
    agent: hermes-agent
---

> **Synthesis:** Taufer and colleagues (2026) make a claim about data rather than about pedagogy: a human-AI exchange is a data class of its own, and treating it as a transient prompt-response pair discards exactly what an explanation needs. Their representation, HAIDL, records each exchange as one object spanning the computational state that motivated the request, the request, the prompt payload, the response, the user's assessment of it, the problem context, provenance and model metadata. The accompanying middleware, HAIDL-X, runs inside JupyterLab and instantiates those objects during ordinary coursework. Their point is sharp: two students who each call an assistant a dozen times look identical in prompt counts, while one is debugging error by error and the other is pasting answers forward. A 35-student deployment across four assignments shows the representation separating those cases, and shows how little a call count tells you: across 140 student-assignment pairs, interaction count correlated with successfully executed cells at only r = 0.12.

## Key Findings

1. **Existing records each capture half the coupling.** Observability conventions such as OpenTelemetry GenAI instrument the model side but omit the user's computational context and the actions that followed; provenance models from W3C PROV to PROV-AGENT and LLMography trace agent actions within workflows without treating request-response-assessment as a unit; programming-process formats such as ProgSnap2 standardize the human side but predate AI assistance. The paper's taxonomy of what each leaves out is the clearest part of its argument for a new class.
2. **The unit of representation is an interaction, not a message.** Each object carries model, request, prompt payload, response, feedback, computational context, provenance and latency, and a sequence forms an interaction trajectory. Knowledge is then expressed as a derivation over relationships among objects rather than as a label stored beside them, so an error in a cell is an observation while an AI request made in response to that error is error-recovery behavior.
3. **A small event taxonomy carried the analysis.** Interaction events were classified as error recovery, stuck-next-step, conceptual help or validation, from the source cell, execution state and request-response pair. Their distribution moved with the task: the algorithmic assignment produced the most stuck-next-step, error-recovery and validation requests, the text-processing assignment shifted toward conceptual help, and the two PySpark assignments were dominated by error recovery, with the machine-learning pipeline assignment also producing substantial conceptual help.
4. **Access did not mean use, and use did not stay inside the assigned condition.** In a crossover deployment of 35 students over four assignments, 37 student-assignment pairs had access but no interactions, while 26 pairs used the assistant outside their assigned-access condition, in every assignment. The authors keep the crossover as context rather than discarding those cases, since the distinction between access and actual use is itself the finding.
5. **Prompt counts are unrelated to progress.** Across all 140 pairs, interaction count had only weak correlation with successfully executed cells (r = 0.12) and with touched cells (r = 0.12). The same call can be a next step, a validation or a rescue, and a metric that counts it cannot say which.
6. **Combining the two evidence streams separated students the AI log alone confuses.** Non-use with strong notebook outcomes reads as self-sufficient; non-use with weak outcomes reads as a disengaged struggler, and the two are indistinguishable in the AI log alone. On the Spark assignments, eight pairs in one assignment and six in the other fell into low-performance with high engagement, an engaged-struggle state that no performance-only or activity-only view surfaces.
7. **First-class capture cost little.** Capture overhead, the server-side request latency minus the LLM invocation latency, grew with concurrency but stayed within 25 milliseconds across every provider, model and client-request configuration tested.

## What this means for practice

- **Learning-analytics designers**: Stop counting prompts. The paper's evidence is that call counts carry almost no signal about whether help worked, and that the signal lives in the execution state on either side of the call. A schema that records the surrounding cell output is worth more than a larger sample of message text.
- **Instructors and course teams**: Usage data alone cannot distinguish a student who never needed help from one who never asked. If AI adoption is being inferred from interaction logs, that inference is wrong for the pairs where access and non-use coincided, which here was 37 of 140.
- **Educational technology developers**: The overhead measurement makes instrumentation defensible in a live classroom, and the crossover design is a cheap way to compare access conditions across assignments without splitting a cohort by student.
- **Researchers**: The derivations are reproducible expressions over recorded fields rather than analyst judgments stored apart from the data, which is what allows the behavioral interpretation to be audited or re-run against the same interactions.

## Limitations

- The deployment is 35 students over four assignments in one Data Engineering course, analyzed at the level of 140 student-assignment pairs. It is a demonstration that the representation separates behaviors, and the authors state plainly that it does not estimate a causal effect of the assistant on performance.
- Performance and engagement are computed from notebook execution, so successful execution stands in as a proxy for a correct solution while a cell that runs cleanly over a wrong answer counts as success.
- The behavioral states are interpretations of observable behavior for one student on one assignment, not diagnoses or traits, and the derived personas rest on rules the paper specifies rather than on validated instruments.
- The learning framing is illustrative. The authors say the mechanism is not inherently educational and the same derivations could describe scientific workflows or software debugging, so the education-specific evidence is the deployment rather than the model.
- Only one exploratory case surfaced as validation-dominated over-use, and no answer-extraction cases appeared, so the taxonomy's negative categories are asserted more than exercised.

## Citation

Taufer, M., Ng, K. W., Lumsden, I., Pandey, A., Gore, R., Ju, A., Moudgalya, S., Deelman, E., & Swaminathan, S. (2026). [*Human-AI Interactions as First-Class Data: A Formal Interaction Model and Runtime for Explainable AI Collaboration*](https://arxiv.org/abs/2610.40006). arXiv preprint arXiv:2610.40006.
