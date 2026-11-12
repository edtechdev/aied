---
title: "An academic chatbot with hybrid retrieval and local large language models"
created: "2026-11-12T11:55:00-05:00"
updated: "2026-11-12T11:55:00-05:00"
type: article
evidence_context: educational
sources: ['raw/papers/guadalupe-academic-chatbot-local-llm-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [system development]
discipline: [information technology]
level: [higher ed]
audience: [administrators, educational technology developers]
foundations: [human-ai-collaboration]
technology: [rag, llm, generative-ai, open-source]
methods: [ai-ed-evaluation]
ethics: [privacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** University staff spend much of their day answering questions whose answers already sit in academic bylaws and enrollment manuals. Guadalupe, Topón, and Iza build a [[rag|retrieval-augmented generation]] assistant for that document base at Universidad Indoamérica in Quito, answering in Spanish and running ingestion, embeddings, retrieval, and a 14-billion-parameter [[llm|local language model]] on institutional hardware so that no document, query, or answer leaves the premises. Structure-aware chunking meets reciprocal rank fusion, and the deployed system is judged by RAGAS, a latency target, and a nineteen-person questionnaire. The aggregate score clears its bar on short documents, yet answer relevancy misses in all three sets, the long bylaw falls below the global threshold, and p95 latency exceeds five seconds. The accounting is the contribution: the remaining failures belong to chunking, prompt verbosity, and GPU capacity, not to locality.

## Key Findings

1. **The local pipeline cleared the aggregate quality bar but not the conjunctive one.** On eight corpus-wide questions it reached a global RAGAS score of 0.90 against a 0.74 threshold, with faithfulness of 0.97 and context precision and recall both at 1.00. Answer relevancy was 0.64 against its 0.75 bar and stayed below it in all three sets.
2. **Structure-aware ingestion fixed the unit of retrieval before any retriever tuning.** Layout-aware conversion produced structured Markdown, and chunking followed the header hierarchy at roughly 512 tokens rather than a fixed window, keeping provisions intact. Five documents of 6 to 26 pages yielded 106 chunks, from 9 for the 8-page assistantship instructions to 42 for the 26-page credit-recognition bylaws.
3. **Fusion's interpretable gain was faithfulness, not the global score.** Over an independent ten-question set, hybrid retrieval scored 0.82 globally against 0.80 for dense-only and 0.27 for lexical-only, a 0.02 difference the authors call inconclusive. Faithfulness rose from 0.78 with dense retrieval alone to 0.89 with fusion.
4. **The deployed lexical signal could not stand alone.** Conjunctive full-text search returned no chunk for 8 of the 10 natural-language questions, leaving lexical-only retrieval at 0.27 globally, with context precision and recall both at 0.20. The authors limit the claim: this describes an implementation without inverse-frequency weighting, not a well-specified BM25 baseline.
5. **Quality degraded sharply on the long, cross-referenced bylaw.** The 26-page credit-recognition document scored 0.69 globally, below the 0.74 threshold, with faithfulness of 0.62 and context recall of 0.70. Its per-question standard deviation was 0.21 against 0.02 for the corpus-wide set, so its aggregate is indicative rather than precise.
6. **Median latency met the target; the tail did not, and generation owned the time.** End-to-end median latency was 3.57 seconds against a 5-second p95 target, but p95 reached 6.47 seconds, 29% above it, with a 7.38-second maximum. Local generation took approximately 96% of end-to-end time; hybrid retrieval contributed a median of 0.15 seconds and a p95 of 0.19 seconds.
7. **Users rated the system favorably but trusted its factuality less than the judge did.** Nineteen participants placed the global perception index at 3.64 out of 5, and 73.7% fell in the two favorable satisfaction categories. Only 57.9% agreed that the system does not fabricate information (M = 3.68), far more severe than the 0.97 faithfulness the judge assigned.

## A local stack sized for one institution

The reference deployment is one server with a 16 GB data-center GPU (NVIDIA Tesla V100), a 28-core, 56-thread processor, and 125 GB of RAM. That graphics memory must hold both the embedding model and the generator, which is why the 14-billion-parameter model runs in Q4_K_M quantization through Ollama: roughly 28 GB at 16-bit precision, about 9 GB quantized. Everything executes inside the institutional network, behind a reverse proxy that terminates TLS and rate-limits at 60 requests per minute for student chat and 30 for the administrative API. Students query anonymously; administrators authenticate with signed JSON Web Tokens.

The stack is ordinary and entirely [[open-source]]: FastAPI and Uvicorn, Celery and Redis, PostgreSQL 15 with pgvector 0.7, Docling and PyMuPDF, and Docker Compose. Data sovereignty is a design property, not a policy promise: no driven adapter routes traffic to an external inference service, verified by construction and by inspecting egress at run time. That connects the engineering to [[privacy]] obligations under Ecuador's Organic Law on Personal Data Protection and removes the per-token cost of a commercial API.

## Ingestion and retrieval as the quality levers

Ingestion runs asynchronously in five stages: layout-aware extraction and conversion, header-based chunking at approximately 512 tokens with a 50-character minimum, vectorization into 1024-dimensional BGE-M3 embeddings on the GPU, indexing into an HNSW graph for dense search and a GIN index over a tsvector column for lexical search, and cleanup of the temporary PDF. Each chunk inherits its header path, so every passage knows its document and section. The authors treat this structure-preserving choice, not retriever tuning, as the ingestion decision with the largest effect on regulatory text; ingestion cost runs from 24 seconds for the 6-page quality-assurance policy to close to 12 minutes for the 26-page scanned bylaw.

At query time both retrievers run in parallel over top-10 candidates each, the dense side applies a cosine floor of 0.4, and the rankings fuse through reciprocal rank fusion at k = 60, which needs no normalization because it uses rank positions alone. The top 5 chunks enter a prompt instructing the model to answer only from context, to say when information is unavailable, and to reply in Spanish, with temperature 0.1 and a 512-token ceiling. The ablation changes only retrieval, so it shows that exact strings such as article numbers matter, that the lexical configuration cannot carry a natural-language workload, and that fusion mainly buys grounding rather than a better average.

## Evaluation that measures itself

The evaluation has four planes: RAGAS answer quality, verified data sovereignty, functional correctness through unit, integration, and end-to-end tests, and user perception as an external contrast. The first three are jointly necessary; the fourth is a contrast. RAGAS 0.2 supplies faithfulness (0.80), answer relevancy (0.75), and context precision and recall (0.70 each), averaged into a global score with a 0.74 bar. The judge is the same qwen2.5:14b that generates the answers, a choice the authors flag rather than hide.

The set is twenty-two synthetic pairs generated from indexed chunks by that same local model: eight spanning the corpus, four on the compact document, ten on the long bylaw, plus a separate ten for the ablation. Three consequences are stated plainly. No staff expert validated the pairs. The same set served both parameter tuning and final reporting, with no held-out partition, introducing an optimistic bias of unquantified size. And because reference contexts are the chunks from which questions were generated, the 1.00 context precision and recall partly certify recovery of the source chunk rather than generalization to independently phrased questions.

## Users as an external check

Twenty-two people responded, nineteen consented, and the sample was twelve prospective students (63.2%) and seven enrolled students (36.8%), with no academic-administrative staff. Internal consistency was high in aggregate (Cronbach's alpha 0.930) but collapsed for interface [[usability-research|usability]] at 0.206, traceable to a reverse-worded item that correlated negatively with the rest after recoding (r = −0.486; p = 0.035), a pattern consistent with acquiescent responding. Two convergences matter more than the headline index. Response time was the worst-rated item (M = 3.42; 47.4% agreement), matching the one target the instrumentation missed. Confidence in the absence of fabrication lagged the judge badly, supporting the reading of a same-family judge as an upper bound. Favorably, document grounding and trust was the best-rated construct, with 84.2% agreeing the system deserves trust comparable to the reference administrative offices.

## What this means for practice

- **Administrators.** Budget for GPU capacity, not just software: generation consumed approximately 96% of end-to-end time, and the unmet p95 target came from inference on one 16 GB card rather than from local hosting as such.
- **Educational technology developers.** Invest in structural conversion and header-based chunking before tuning the retriever; the 26-page bylaw shows what fixed-size assumptions cost on cross-referenced text.
- **Records and registrar staff.** Treat a generated answer as a pointer, not a ruling: every response carries its document and section, and the authors make staff validation of question sets a prerequisite for adoption beyond a pilot.
- **Evaluation and quality teams.** Separate tuning questions from reporting questions and use a judge from a different model family; the gap between 0.97 faithfulness and 57.9% user agreement on fabrication is what a self-judging loop can hide.

## Limitations

- The corpus and evaluation cover one institution and one language, Spanish, so external validity is not established.
- The quality evidence rests on twenty-two synthetic pairs split into sets of four to ten questions, generated by the model under evaluation and never validated by an independent regulations expert.
- The same set served tuning and final reporting with no held-out partition, and the judge is the same qwen2.5:14b used for generation, so scores carry an optimistic bias of unquantified magnitude.
- Context precision and recall are inflated by construction, because reference contexts are the chunks from which questions were generated; the 1.00 values are a ceiling effect, not a transferable estimate.
- The perception sample is small, non-probabilistic, and missing the administrative staff who are the primary users; the open-ended item received no responses, and there is no control condition or pre-intervention measure.
- Latency was measured only for individual sequential queries after warm-up, with no sustained concurrency; chunking and fusion constants were tuned empirically without a sweep, and the lexical baseline is conjunctive full-text search rather than BM25.

## Citation

Guadalupe, J., Topón, B., & Iza, C. (2026). [*An academic chatbot with hybrid retrieval and local large language models*](https://doi.org/10.37815/rte.v38nE1.1595). *Revista Tecnológica ESPOL*, 38(E1), 50–70. https://doi.org/10.37815/rte.v38nE1.1595
