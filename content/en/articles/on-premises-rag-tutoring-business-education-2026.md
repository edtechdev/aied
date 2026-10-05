---
title: "On-Premises Multi-Course RAG Tutoring for Business Education: Hardware–Software Trade-offs in a Campus AI Tutor"
created: "2026-10-05T10:00:00-04:00"
updated: "2026-10-05T10:00:00-04:00"
type: article
sources: ['raw/papers/on-premises-rag-tutoring-business-education-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [system development]
discipline: [business education]
level: [undergraduate]
audience: [instructors, educational technology developers]
foundations: [educational-development, learning-design, human-ai-collaboration]
pedagogy: [scaffolding, self-regulated-learning, retrieval-spacing-interleaving]
technology: [rag, llm, conversational-ai, intelligent-tutoring, open-source, edtech-platform]
assessment: [formative-assessment, feedback, automated-question-generation, assessment-validity, learning-gains]
methods: [ai-ed-evaluation, research-methods-aied]
ethics: [privacy, hallucination-risk]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-05"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Campus [[intelligent-tutoring|AI tutors]] built on [[rag|retrieval-augmented generation]] must ground answers in assigned course materials while keeping textbooks and student dialogue on institutional infrastructure. CourseChat is an on-premises, multi-course tutor for undergraduate [[business-education|business education]], deployed behind a campus web gateway and intended for Moodle-embedded use. Six isolated offerings, each keyed by its own course reference number, share twin edge hosts running a FastAPI service, a local vector database, and a [[llm|local large language model]] served by Ollama. The authors report two generation-model bake-off rounds, a separate fixed-evidence source-fidelity comparison, and conversation and quiz audits. Larger models failed a classroom speed gate of +30% latency, while a 12B model and a 7B alternative passed it; a mixture-of-experts candidate improved some corrections but introduced new factual and continuity errors. The team retained the 8B production model pending a demonstrated overall improvement. 435 prebuilt questions across 65 modules decouple practice from live generation. The results treat model choice, evidence selection, serving compatibility, and product design as one joint engineering decision, and do not establish [[learning-gains|learning gains]].

## Key Findings
1. **One shared generator can serve isolated courses.** Six offerings keyed by course reference number share twin edge hosts and one 8B model, while separate collections, data trees, and request routing keep course boundaries intact.
2. **Larger models failed the classroom speed gate.** Qwen 14B, Gemma 12B, and Qwen3 14B passed all 12 live probes but ran at 1.75×, 2.25×, and 3.36× the 8B median, exceeding the +30% latency allowance.
3. **A 7B and a 12B candidate passed.** Qwen 7B ran at 1.01× and Mistral Nemo 12B at 1.24× the baseline across 12/12 probes; both were retained as candidates for paired faculty review rather than promoted.
4. **A mixture-of-experts candidate regressed on quality.** The 35B-A3B configuration logged a faster warm median (3.00 s vs 3.47 s) but produced three regressions across twelve fixed-evidence cases, so activation was withheld.
5. **Follow-up topic resolution improved without a model change.** A deterministic resolver raised intended-topic follow-up rates to 90–100% across five courses, with all 400 scope checks passing and zero API errors.
6. **Prebuilt quiz banks make practice reproducible.** 435 questions across 65 modules use stored keys and deterministic grading (warm medians of 4.8 and 5.8 ms server-local), keeping answer keys server-side until an attempt.
7. **Citation integrity did not guarantee faithful explanations.** A ten-request live textbook audit found three supported replies, four retrieval misses, two source contradictions, and one partly grounded answer, though every citation resolved to its source.

## Hardware–software co-design on campus

Campus deployment forced an explicit hardware–software trade-off. Each of the two serving nodes is a DGX Spark-class appliance with a Grace Blackwell GB10 and on the order of 128 GB unified memory shared by the API workers, the vector database, embedding and rerank models, and Ollama. Two uvicorn workers permit overlapping application requests, but the authors are careful that worker count alone does not establish classroom capacity. The IIS gateway terminates TLS, rewrites course slugs, and routes to the twin nodes. Document extraction and page review run on a Mac workstation, after which reviewed corpora are ingested on Node A with the same encoder the API uses and snapshot-replicated to Node B, keeping OCR engines off the classroom hosts and making A/B parity enforceable on git SHA and health. This arrangement rests on [[open-source]] infrastructure — FastAPI, Qdrant, and Ollama — assembled into a course-isolated [[edtech-platform|platform]]. The organizing claim is that building such a tutor means pushing quality into retrieval, scoping, and evaluation rather than into ever-larger generators.

## Model choice is a serving-contract decision

Model selection was treated as a constrained operating decision rather than a parameter-count ranking. Two bake-off rounds held context length at 8,192 tokens, output at 768 tokens, retrieval settings, and the probe set fixed, and re-measured a fresh 8B baseline each round. The promotion rule required median complete-answer latency within +30% of that baseline, usable two-request overlap, preserved course scope, and a reviewed quality improvement. Thinking-mode defaults were treated as disqualifying when they emptied student-visible content or exhausted the token budget — a Qwen 3.6 35B-A3B configuration returned 0/12 probes because its reply filled the thinking channel. The subsequent fixed-evidence [[benchmark]] changed the model, prompt, structured response contract, validation, and transport together, so its gains belong to the complete configuration rather than to scale alone. Runtime compatibility, quantization, and sampling options belong in the experimental specification alongside the model tag. This is [[ai-ed-evaluation]] applied to a shipping system: passing twelve keyword-and-citation probes was necessary but explicitly not sufficient.

## Grounding: retrieval, fidelity, and abstention

Course knowledge is indexed, not baked into weights: production chat embeds the query, runs hybrid search over the course collection, applies module and chapter filters, reranks with a cross-encoder, and then generates with bounded history and citations. Retrieval favors original lecture and reading passages over generated study aids, and a module-scope fallback may widen the evidence set using the model's current context — never material from another course. The preparation pipeline preserved eighty lecture files that contributed 2,242 passages, and four newly completed textbook-course corpora contain 15,730 prepared passages. Grounding, however, resolved only part of the problem. Every citation in the ten-request audit resolved to a real passage, yet four requests missed available evidence and two answers contradicted their sources. The authors' entailment experiment missed both original production errors, and the retained 8B model reproduced incorrect accounting claims, failed to correct an earlier pricing error, and attributed an equation to an exercise that did not state it. Citation integrity reduces [[hallucination-risk]] but does not establish that an explanation preserves a source's meaning, and it cannot by itself earn a student's [[trust]].

## From engineering evidence to educational value

The intended educational value lies in supporting students' own effort. Conversation supports checking and revisiting a concept with adjustable detail, while quiz mode presents one multiple-choice item at a time with an optional stored hint that leaves progress unchanged and does not reveal the key. This sequence draws on [[retrieval-spacing-interleaving|retrieval practice]] and on accounts of [[formative-assessment|formative feedback]] that help a learner identify a gap and decide what to do next, but it does not require an attempt before disclosure. The authors frame these as design choices informed by [[self-regulated-learning]] research, not as demonstrated effects. A future evaluation would pair interaction measures — attempts before revealing answers, responses to hints — with delayed assessments and new problems completed without the tutor, and would compare against existing course resources and the general-purpose assistants students already use. [[technology-acceptance-model|Perceived usefulness]], assisted task performance, and independent learning are to remain separate outcomes, and patterns of [[help-seeking]] would be one window into whether the tutor supports appropriate independent effort.

## What this means for practice

- **Instructors.** Review the prebuilt banks before release: 435 questions across 65 modules remain marked instructor-reviewed: false, and the structural audits establish reproducible behavior rather than suitable difficulty or plausible distractors.
- **Administrators.** Treat on-premises control as an ongoing operational obligation, not a one-time purchase: the replica must receive index snapshots, and quiz banks, source ledgers, and cumulative review histories require separate deployment to both nodes.
- **[[educational-technology-developers|Educational technology developers]].** Diagnose poor answers by layer: the five-course audit recorded 93 no-match turns, and a bounded facet expansion recovered eleven of 24 affected questions without lowering the relevance floor.
- **Researchers.** Pair faculty review on held-out dialogues with explicit measurement of false refusals and source-condition errors before treating a model change as an improvement; the present sets are not representative samples.

## Limitations

- Latency measurements were predominantly serial and server-local and bypassed the IIS gateway; warm timings excluded a 25.417 s cold request observed for the larger candidate, and no concurrent-user load study was completed.
- The twelve live probes exercise keyword presence and citation behavior rather than a complete [[pedagogy|pedagogical]] rubric, and no candidate cleared both the +30% speed gate and a faculty-reviewed quality gain.
- Faculty ratings for usefulness and factual support remain pending, instructor approval of all banks is incomplete, and no learning-outcome or controlled classroom study is reported.
- The diagnostic sets are small and pre-selected: ten requests in the textbook audit and twelve fixed-evidence cases in the fidelity comparison cannot support a population error estimate.
- Students already had access to Copilot, Gemini, [[generative-ai|ChatGPT]] and other tools, so the pilot's additional value over those services is not established.

## Citation

Shapiro, S., & Lindemann, J. (2026). [*On-Premises Multi-Course RAG Tutoring for Business Education: Hardware–Software Trade-offs in a Campus AI Tutor*](https://arxiv.org/abs/2610.02510). arXiv:2610.02510.