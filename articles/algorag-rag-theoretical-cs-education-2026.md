---
title: "AlgoRAG: Retrieval-Augmented Generation for Theoretical Computer Science Education -- A Comprehensive Evaluation Framework for Algorithm Analysis and Complexity Theory"
created: "2026-09-15T10:30:00-04:00"
updated: "2026-09-17T02:30:30-04:00"
type: article
foundations: [computational-thinking]
pedagogy: [problem-solving]
technology: [educational-nlp, intelligent-tutoring, knowledge-graph, llm, rag]
assessment: [automated-question-generation]
sources: ['raw/papers/algorag-rag-theoretical-cs-education-2026.md']
confidence: high
research_method: [system development, benchmark, design and evaluation study]
discipline: cs education
audience: [educators, researchers]
level: higher ed
page_kind: [evaluation]
---

> **Synthesis:** AlgoRAG is a purpose-built [[rag]] system for theoretical computer science (TCS) courses that couples a [[llm|large language model]] with a curated knowledge base of textbooks, 847 lecture slides, 312 solved practice problems, 156 worked proof templates and 89 complexity worksheets, adding mathematical entity recognition, notation-aware retrieval and [[pedagogy|pedagogical]] re-ranking. On 179 instructor-authored exam-style questions spanning seven topics it answered every item within the timeout (100% success rate) at a mean of 38.0 seconds — but that headline number measures completion, not correctness. Surface metrics were weak (BLEU-4 = 0.0000 on all 179 questions, ROUGE-1 F1 = 0.0963, semantic similarity 0.0752) while a six-criterion rubric gave pedagogical quality 0.7620, and the authors argue at length that the zero BLEU is a property of n-gram matching on mathematical proofs rather than evidence of system failure. The paper positions RAG as a viable architecture for personalized [[higher-ed]] [[cs-education]] support, while conceding that no controlled study has yet shown that its richer explanations produce [[learning-gains]].

## Key Findings
1. All 179 curated questions across seven TCS topics were answered inside the 240-second timeout, giving a 100.0% success rate; the topic breakdown was Asymptotic Analysis 89, Recurrence Relations 17, Dynamic Programming 17, Graph Algorithms 21, NP-Completeness 21, Divide-and-Conquer 8 and Sorting 6.
2. Mean response time was 38.0 seconds per question and the full evaluation run took approximately 1.9 hours of continuous generation on a Google Colab harness.
3. BLEU-4 was 0.0000 on every one of the 179 questions — the authors interpret this as evidence that logically equivalent proofs routinely differ in notation, variable names and proof strategy, not as a system failure.
4. Aggregate overlap scores were ROUGE-1 F1 = 0.0963, ROUGE-2 F1 = 0.0285, ROUGE-L F1 = 0.0683 and embedding cosine similarity = 0.0752; ROUGE-1 stayed inside a narrow 0.0876–0.1285 band across all seven topics.
5. The composite pedagogical quality score, the mean of six binary rubric criteria, was 0.7620 overall and varied far more by topic (0.6629–0.8250) than any lexical metric did.
6. Per-criterion breakdown: roughly 65% of responses had fully enumerated reasoning steps, 78% used correctly formatted mathematical notation, only 42% included a concrete worked example, an average 71% of key sub-questions were addressed, and about 80% were rated satisfactory on explanation depth.
7. NP-Completeness produced the highest ROUGE-1 F1 (0.1285) and Graph Algorithms the best pedagogical quality among topics with n ≥ 20 (0.8086); Recurrence Relations was weakest pedagogically (0.6629).
8. Sorting Algorithms recorded the single highest pedagogical quality score (0.8250) on only six test items, consistent with the highly standardized structure of comparison-sort lower-bound arguments.
9. The knowledge base contains 847 lecture slides grouped into 15 topic clusters, 312 practice problems with full solutions, 156 worked proofs and 89 complexity worksheets; retrieval uses all-mpnet-base-v2 768-dimensional embeddings in ChromaDB over 500-token chunks with 50-token overlap.
10. The 42% worked-example rate is the rubric's weakest criterion, and the authors attribute it to the retrieval pipeline under-exploiting the 312-item practice-problem component — their first stated near-term fix.

## System Design
AlgoRAG runs a five-stage pipeline: query analysis, hybrid dense-plus-sparse retrieval, pedagogical re-ranking, context-grounded generation, and notation post-processing. Query analysis uses a scientific-text named-entity model to distinguish O(n) as Big-O notation from the letter O as a variable and to detect proof markers such as "by induction" or "assume for contradiction", which route the query to the matching proof-template subset of the [[knowledge-graph]].

Retrieval deliberately departs from lexical matching. Dense sentence embeddings are fine-tuned on the TCS corpus, sparse search matches technical terms exactly, and a custom scoring function rewards mathematical-notation consistency — boosting polynomial-time documents when the query contains O(n²) — and penalises off-topic tangents. Notation-aware similarity treats log n and log₂ n as contextually equivalent, and specialized handlers normalize expressions such as n¹ → n or inject the Master Theorem when a complexity argument is detected.

The third stage re-scores candidates on educational utility rather than topical relevance: explanation clarity, step granularity, presence of worked examples, and alignment with the inferred difficulty of the query. Introductory questions surface introductory-labeled material while advanced queries are pushed toward formal sources. Generation uses structured prompt templates with mandatory introduction, step-by-step reasoning and conclusion sections. DeepSeek V3 replaced locally hosted Llama 2 and Mistral after preliminary runs showed insufficient multi-step mathematical proof performance — the switch the authors credit for the final 100% success rate.

| Stage | Mechanism | Domain-specific element |
|---|---|---|
| 1 Query analysis | NER over CS/maths text | Distinguishes notation from variables; detects proof type |
| 2 Hybrid retrieval | Dense + sparse scoring | Notation-consistency boost; knowledge-graph expansion |
| 3 Pedagogical re-ranking | Educational-utility scoring | Difficulty-matched source selection |
| 4 Generation | DeepSeek V3 with structured templates | Mandatory LaTeX and stepwise sections |
| 5 Post-processing | Coherence and notation checks | Step numbering, case analysis, canonical maths |

## Evaluation Design and Results
The test set was drawn from past exams, practice tests and problem sets, with reference answers written by domain instructors plus metadata on topic, difficulty and expected proof technique. It is unusually skewed toward asymptotic analysis (89 of 179 questions), which limits the precision of the per-topic comparisons for the smaller categories.

Metrics were chosen to separate surface wording from instructional value. ROUGE-1/2/L measured n-gram overlap, BERT-style sentence embeddings measured conceptual alignment, and the pedagogical rubric — step-by-step exposition, correct notation, worked example, query coverage, explanation depth, proof-step granularity — was scored 0 or 1 per criterion and averaged. Response time and success rate were recorded as feasibility measures.

The core empirical pattern is a divergence between the two families of measure. Lexical overlap is low and near-flat across topics (ROUGE-1 range 0.0876–0.1285), while pedagogical quality moves meaningfully (0.6629–0.8250) and tracks how structurally regular a topic's proofs are. NP-completeness reductions follow standard phrasing ("reduce from X to Y", "problem is in NP") and score highest on overlap; recurrence relations resist standardized exposition and score lowest on pedagogy. The authors read this divergence as evidence that AlgoRAG synthesises multi-source explanations rather than paraphrasing single passages, and as an argument that rubric-based scoring should be the primary quality measure for [[automated-question-generation]] and mathematical [[educational-nlp]] systems.

## Why BLEU Fails Here — and What the Study Does Not Show
The paper's most transferable contribution is its critique of [[benchmark]] metrics in formal domains. BLEU was designed for machine translation, where paraphrase preserves most n-grams. Proving f(n) ∈ O(n) by finding explicit constants, by computing a limit, or by bounding terms individually yields three responses sharing almost no 4-grams yet logically equivalent — so a zero BLEU says more about the metric than about the system. The same logic, at lower intensity, explains the modest ROUGE and semantic-similarity values: AlgoRAG answers are more expansive than the terse reference solutions, adding alternative strategies and examples that reduce surface overlap.

The [[limitations-in-aied-research|limitations]] are stated plainly. No controlled user study was run, so educational effectiveness is inferred from the rubric rather than measured through outcome data; the rubric itself is scored by the researchers, not by independent instructors. The knowledge base was assembled from public resources and may lag newer algorithmic results. Results depend on the external DeepSeek V3 API, adding latency and availability risk. At 38.0 seconds per query the system fits asynchronous study — problem sets, exam review, self-paced homework — but not live classroom interaction; prompt caching, concurrent retrieval and quantisation are named as remedies. The 42% worked-example inclusion and the weak recurrence-relations score are treated as retrieval-index problems to be fixed by reweighting toward practice problems and adding proof templates.

A second gap sits between the metrics and the risk they cannot see. ROUGE and the rubric measure form and coverage, not logical validity; a response can be well-structured and confidently wrong. RAG's grounding in authoritative textbooks is the paper's stated answer to [[hallucination-risk]], but the evaluation design cannot detect a subtly incorrect derivation, which is why the authors call for formal reasoning modules (recurrence solvers, lightweight theorem provers) and controlled [[learning-gains]] studies before claims about [[problem-solving]] improvement can be sustained.

## Connected Concepts
- [[rag]]
- [[llm]]
- [[cs-education]]
- [[higher-ed]]
- [[computational-thinking]]
- [[problem-solving]]
- [[intelligent-tutoring]]
- [[automated-question-generation]]
- [[educational-nlp]]
- [[knowledge-graph]]
- [[hallucination-risk]]
- [[learning-gains]]
- [[scaffolding]]
- [[pedagogical-llm-training]]

## Connected Articles
- [[retrieval-augmented-tutoring-algorithm-kite]] — Retrieval-Augmented Tutoring for Algorithm Tracing and Problem-Solving in AI Education
- [[eduguard-safe-rag-llm-tutor]] — EduGuard: A Safe RAG-Based LLM Tutor for Programming Education
- [[structrag-diagram-reasoning-ai-tutoring]] — Advancing diagram-based reasoning in AI tutoring systems: a structural approach for STEM education
- [[ai-tutor-behavioral-evaluation]] — The Missing Evaluation Axis: What 10,000 Student Submissions Reveal About AI Tutor Effectiveness
- [[correct-answer-trap-ai-tutor]] — Catching The Correct Answer Trap: Characterizing AI Tutor Blind Spots When Analyzing Student Reasoning
- [[cstutorbench-slm-tutors]] — CSTutorBench: Benchmarking Small Language Models as Tutors for Block-Based Programming
- [[conversational-ai-tutors-framework]] — The Path to Conversational AI Tutors: Integrating Tutoring Best Practices and Targeted Technologies to Produce Scalable AI Agents
- [[code-review-genai-cs1]] — Combating Harms of Generative AI in CS1 with Code Review Interviews and a Flipped Classroom
- [[computational-thinking-aica-2026]] — Exploring the Effect of Computational Thinking Levels on Students' Learning Performance, Cognition, and Behavior

## Citation
Sushan Adhikari (2026). [*AlgoRAG: Retrieval-Augmented Generation for Theoretical Computer Science Education -- A Comprehensive Evaluation Framework for Algorithm Analysis and Complexity Theory*](https://arxiv.org/abs/2609.14572). arXiv preprint.
