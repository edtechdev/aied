---
title: "What Students Ask Matters: LLM Interaction Depth, Task Quality, and Immediate Recall in Higher Education"
created: "2026-08-30T16:50:00-04:00"
updated: "2026-09-19T08:33:23-04:00"
type: article
foundations: [cognitive-offloading]
pedagogy: [metacognition, self-regulated-learning]
technology: [conversational-ai, learning-analytics, llm, prompt-engineering]
methods: [quantitative-research]
research_method: [experiment, process-outcome modeling]
level: [higher ed]
sources: ['raw/papers/10.1186_s41239-026-00617-6.md']
confidence: high
audience: [instructors, researchers, instructional designers]
page_kind: [evaluation]
---

> **Synthesis:** Tsiligkiris (2026) examines how the *depth* of students' [[llm]] interaction relates to task quality and immediate recall. In a controlled session, 22 postgraduate students completed a pre-test, an LLM-assisted neuroeconomics case task, and an immediate post-test, with fine-grained interaction logs capturing Depth (proportion of "why/how/explain" prompts), Volume, and Pacing. Students showed large immediate learning gains (Cohen's dz = 2.12), and interaction *depth* was positively associated with independently marked task quality (β = 6.27) — what students ask matters more than how much they ask. However, depth was *not* associated with immediate recall; gain scores were driven by baseline knowledge. This dissociation between performance quality and short-term recall aligns with the distinction between elaboration-driven comprehension and retrieval-driven consolidation.

## Key Findings

1. **Explanation-seeking depth predicts task quality, not volume.** Depth (the proportion of explanation-seeking "why/how/explain" prompts) was positively associated with task quality beyond baseline knowledge and overall Volume (β = 6.27, p = .006) — a one-SD increase in explanation-seeking prompts corresponded to ~6 additional marks on a 0–100 scale. The *[[writing-education|composition]]* of interaction matters more than the *amount*.
2. **Depth did not predict immediate recall.** Depth showed a null association with immediate post-test recall (β = −0.014, p = .728); gain scores were strongly associated with baseline knowledge (β = −0.161), consistent with reduced headroom among higher-baseline students.
3. **A dissociation between performance and retention.** The pattern aligns with [[cognitive-psychology|cognitive psychology]]: explanation-seeking (elaboration) improves comprehension and applied performance, while retrieval practice — not fluent explanation — consolidates retention. In LLM-supported study without explicit retrieval demands, learners may experience high fluency with limited need to retrieve knowledge unaided.
4. **Depth may function as a productive scaffold for applied outputs.** Depth-oriented use appears to scaffold applied task performance (aligned with constructive [[student-engagement|engagement]] and the [[icap-framework|ICAP framework]]), even when it does not translate into improved recall — a nuance on the cognitive-offloading account.
5. **[[research-methods-aied|Methodological]] contribution.** The study demonstrates a replicable, privacy-preserving instrumentation pipeline linking turn-level conversational telemetry (Depth/Volume/Pacing) to [[learning-gains|learning outcomes]] — a process–outcome modeling approach for LLM interactions.

## Comprehension vs. retention in LLM-supported learning

The central theoretical contribution is separating comprehension from retention in LLM-mediated learning. Depth-oriented dialogue can enhance reasoning, integration, and production quality (benefiting applied tasks) while leaving memory encoding largely unaffected — because the LLM supplies complete, coherent explanations on demand, learners may allocate less effort to internal retrieval and reconstruction, consistent with [[cognitive-offloading]] and the "illusion of competence" literature. The author argues this is not merely a null result but a theoretically informative dissociation: elaboration drives comprehension; retrieval practice drives consolidation. This echoes the [[transfer-of-learning|performance-vs-learning]] distinction central to the knowledge base.

## What this means for practice

- **Instructors.** Embed retrieval demands immediately after LLM use — short-answer questions, from-memory concept maps, or teach-back explanations produced without the tool — because explanation-seeking depth predicted task quality (β = 6.27, p = .006) but not immediate recall (β = −0.014, p = .728).
- **Instructors.** Separate scaffolding from checking: allow the LLM for clarification and feedback during learning, then set distinct checkpoints where learners demonstrate independent recall unaided.
- **Instructional designers.** Design [[prompt-engineering|prompt]] tasks that require learner-generated reasoning — asking the model to pose questions, generate counterexamples or [[misconceptions]], or critique the student's own explanation — instead of producing finished answers.
- **Researchers.** Instrument turn-level interaction logs so Depth, Volume, and Pacing are coded separately; only this separation shows that the composition of interaction, not its amount, tracks applied task quality.

## Limitations

- The study has a single-group design, so the authors make no causal claims about the interaction depth they measured.
- The sample is modest (n = 22), which the authors note leaves any moderation or clustering analysis underpowered.
- Testing was immediate only: the study measured comprehension, not delayed retention, so it cannot speak to what persists.
- Interaction depth was proxied by keywords in student messages, which captures the surface form of explanation-seeking rather than its underlying quality.


## Connected Concepts

- [[llm]]
- [[conversational-ai]]
- [[learning-analytics]]
- [[higher-ed]]
- [[prompt-engineering]]
- [[cognitive-offloading]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[scaffolding]]
- [[desirable-difficulties]]

## Connected Articles

- [[measuring-llm-tutors-teach-vs-solve]] — Measuring whether LLM tutors teach or solve
- [[genai-performance-vs-learning]] — The performance-vs-learning distinction in generative AI
- [[stanbkt-bayesian-knowledge-tracing]] — Knowledge tracing and learning outcomes
- [[gerlich-ai-tools-cognitive-offloading-critical-thinking]] — AI use, cognitive offloading, and critical thinking

## Citation

Tsiligkiris, V. (2026). [What students ask matters: LLM interaction depth, task quality, and immediate recall in higher education](https://doi.org/10.1186/s41239-026-00617-6). *International Journal of Educational Technology in Higher Education, 23*(44).
