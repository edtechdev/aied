---
title: "Potential for Enhanced Learning in Machine Learning Classes by Using Wiki LLM Indexing"
created: "2026-09-23T09:13:46-04:00"
updated: "2026-09-23T09:13:46-04:00"
type: article
published: "2026-09-21"
sources: ['raw/papers/wiki-llm-indexing-ml-classes-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [cs education]
level: [higher ed]
audience: [instructors, researchers]
technology: [rag, llm, knowledge-graph, multimodal]
pedagogy: [student-ai-interaction, retrieval-spacing-interleaving, self-regulated-learning]
assessment: [assessment-validity, educational-measurement]
methods: [ai-ed-evaluation, quantitative-research]
ethics: [hallucination-risk, trust-calibration]
foundations: [curriculum-design]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-23"
    agent: hermes-agent
---

> **Synthesis:** Wright asks whether a course corpus should be structured at ingest rather than merely searched at query time. Over the DS3001/DS 3021 [[machine-learning]] course materials, 59 human-written questions were answered by a [[rag|vector RAG]] baseline and by an [[llm|LLM]]-compiled wiki whose seven concept pages carry cross-references and source citations. The wiki answered better (9.95 vs. 9.05 of 10) and was more often grounded in the material the answerer actually saw (98% vs. 81%); both gaps roughly tripled on questions needing material from more than one page. Tellingly, only 2 of vector RAG's 11 ungrounded answers were retrieval misses; the other 9 had the right excerpts in context and still added unsupported detail.

## Key Findings
1. **The compiled wiki out-scored vector RAG overall.** Across 59 questions the wiki averaged 9.95 of 10 against 9.05, with the bootstrap CI on the difference excluding zero ([0.42, 1.44]).
2. **Grounding separated the arms more sharply than score.** The wiki traced claims to the material the answerer saw on 98% of answers against 81%, a 17-point gap with a CI of [7, 27].
3. **The advantage tripled on cross-page questions.** Topic-page scores were 9.96 against 9.33; cross-page scores were 9.93 against 8.14, while RAG's grounded rate fell from 87% to 64% and the wiki's held.
4. **Only 2 of RAG's 11 ungrounded answers were retrieval failures.** The other 9 retrieved the correct page or relevant chunks and still added unsupported detail, locating the gap in generation as much as retrieval.
5. **Retrieval itself mostly worked.** 43 of 45 topic-page questions (96%) pulled a chunk from the question's actual source page in the top 5; the two misses scored 3 and 4 and were ungrounded.
6. **Single-fact lookup was not a RAG win.** The 9.33-versus-9.96 topic-page score gap excluded zero, so retrieval did not stay competitive on single facts; groundedness there was the one endpoint whose CI touched zero ([0, 22]).
7. **The wiki arm had no context-selection step to fail.** It was graded against 12 fixed pages, 7 of them concept pages, identical across all 59 questions, so the comparison pits real retrieval against perfect context selection.

## Why ingest-time structure was the variable
Beyond the representation the arms were identical: same [[multimodal]] course corpus, answerer (claude opus 5), prompt, questions, and a matched context budget, so context volume could not drive the result. Arm A replicated the prior study's best configuration — 1,500-token chunks with 100-token overlap, all mpnet base v2 embeddings, top k = 5 over a 21-vector index — while Arm B compiled the same frozen snapshot into linked concept pages citing raw sources. Questions were filtered from a pool of 145 down to 59 and spanned a five-part taxonomy: single fact lookup, multi-hop linking, synthesis, contradiction handling, and curriculum updates after a syllabus revision. Scoring combined a 1–10 correctness rating with a binary groundedness flag from gpt 5 mini, a different provider than the answerer.

## Where the groundedness gap comes from
The paper's central claim: the usual story about structure is incomplete. [[hallucination-risk|Ungrounded answers]] were mostly not retrieval misses: 9 of 11 had the relevant excerpts in front of the answerer and still drifted beyond them. Chunked, decontextualized excerpts appear to invite the generator to supply surrounding context, while cross-referenced concept pages constrain elaboration as well as access. A vector RAG system with perfect retrieval would therefore not close the gap, which complicates the [[knowledge-graph|graph and structure-augmented retrieval]] literature that frames structure as a fix for finding content rather than for using only what was found. It also reframes what grounding must mean in class: a fluent, plausible, untraceable answer is more dangerous than a simply wrong one a student can check against the source.

## What the linked pages preserve
Part of the wiki's value is [[pedagogy|pedagogical]], not technical. Citations from each page back to the lecture, slide, or reading that introduced a claim keep the student positioned as the one doing the checking, which bears on [[self-regulated-learning|self-regulation]] and on calibrated [[trust-calibration|trust]] in the [[student-ai-interaction|tutor relationship]]. The authors also argue that cross-references surface concepts recurring across a semester — squared-error loss appears first as the objective linear regression minimizes and again as a regression tree's splitting criterion — producing the delayed, re-contextualized re-encounter that [[retrieval-spacing-interleaving|spaced practice and retrieval]] convert into durable encoding. The claim stays modest — [[curriculum-design|ingest-time structure]] mirroring a course's sequencing may suit week-by-week teaching better than similarity-ranked chunks — and a hybrid arm combining a prebuilt index with wiki context is left to future work.

## What this means for practice
- **Instructors.** Treat citation traceability as a deployment requirement rather than an optional feature: groundedness (98% vs. 81%) was the wiki's largest advantage, and traceability is what lets a student verify a claim.
- **Instructors.** Structure the corpus before tuning the retriever — the same materials compiled into linked concept pages out-answered a tuned chunk index even though retrieval succeeded on 43 of 45 topic-page questions.
- **Designers.** Expect the widest gain where questions span units: the score gap widened from 0.16–1.18 on topic-page questions to 0.57–3.14 on cross-page questions.
- **Researchers.** Read this as directional signal, not an architecture verdict — one run, one index, one [[llm|LLM]] judge.

## Limitations
- Generalization rests on one course corpus (DS3001), and the wiki arm's fixed 12 pages (7 concept pages) meant its context selection could not fail, while Arm A retrieved 5 chunks from a 21-vector index and missed on 2 of 45 topic-page questions.
- Arm A's chunking and embedding configuration was inherited unchanged from the prior study, a confound the authors name: a RAG pipeline re-tuned for this corpus could narrow the gap.
- Scoring used one judge rating plus a binary groundedness flag instead of the RAGAS context recall, faithfulness, and factual correctness triad, and each arm was answered once, so answerer and judge stochasticity went unmeasured.
- Cost — ingest compute, query tokens, latency — went unmeasured, so the price of compiling a wiki at ingest is unknown.

## Connected Concepts
- [[rag]]
- [[llm]]
- [[hallucination-risk]]
- [[knowledge-graph]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[ai-ed-evaluation]]
- [[curriculum-design]]
- [[student-ai-interaction]]
- [[retrieval-spacing-interleaving]]
- [[self-regulated-learning]]
- [[trust-calibration]]
- [[machine-learning]]
- [[higher-ed]]
- [[multimodal]]

## Connected Articles
- [[rethinking-scaffolding-llm-tutors]] — Rethinking Scaffolding in LLM Tutors: The Interactional Mismatch Between Benchmarks and Real-World Deployments
- [[course-specific-rag-help-seeking-higher-ed-2026]] — Reducing Barriers to Academic Support: Evaluating a Course-Specific RAG System for Addressing Help-Seeking Disparities in Higher Education
- [[algorag-rag-theoretical-cs-education-2026]] — AlgoRAG: Retrieval-Augmented Generation for Theoretical Computer Science Education -- A Comprehensive Evaluation Framework for Algorithm Analysis and Complexity Theory
- [[retrieval-augmented-tutoring-algorithm-kite]] — Retrieval-Augmented Tutoring for Algorithm Tracing and Problem-Solving in AI Education
- [[eduguard-safe-rag-llm-tutor]] — EduGuard: A Safe RAG-Based LLM Tutor for Programming Education
- [[structrag-diagram-reasoning-ai-tutoring]] — Advancing diagram-based reasoning in AI tutoring systems: a structural approach for STEM education

## Citation
Wright, B. (2026). [Potential for Enhanced Learning in Machine Learning Classes by Using Wiki LLM Indexing](https://arxiv.org/abs/2609.25303). arXiv:2609.25303.