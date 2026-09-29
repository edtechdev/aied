---
title: "K12-KGraph: A Curriculum-Aligned Knowledge Graph for Benchmarking and Training Educational LLMs"
created: "2026-09-29T17:53:57-04:00"
updated: "2026-09-29T17:53:57-04:00"
type: article
sources: ['raw/papers/liang-k12-kgraph-curriculum-knowledge-graph-2026.md']
confidence: high
published: "2026-07-24"
page_kind: [framework]
research_method: [system development]
discipline: [science education, math education]
level: [k 12, primary education, secondary]
audience: [instructors, researchers, curriculum designers]
foundations: [curriculum-design]
pedagogy: [prior-knowledge, transfer-of-learning]
technology: [knowledge-graph, pedagogical-llm-training, multimodal]
methods: [benchmark, ai-ed-evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-29"
    agent: hermes-agent
---

> **Synthesis:** Liang and colleagues (2026) argue that the [[benchmark|benchmarks]] for Chinese [[k-12|K–12]] education — C-Eval, GaokaoBench and EduEval among them — measure factual recall and leave "curriculum cognition" untested: the prerequisite chains, concept taxonomies and figure–concept links a [[teacher-role|teacher]] needs to sequence instruction. They built K12-KGraph from official People's Education Press textbooks for [[math-education|mathematics]], [[physics-education|physics]], [[chemistry-education|chemistry]] and [[biology-education|biology]], a [[knowledge-graph|knowledge graph]] of nine node types and fourteen relation types, and derived two resources: K12-Bench, a 23,640-question multi-select benchmark in five task [[parents-and-families|families]], and K12-Train, 7,335 fine-tuning samples (2,267 text-only, 5,068 [[multimodal|multimodal]]). Ten models answered K12-Bench zero-shot; Gemini-3-Flash reached 57.1% exact match and the strongest open-weight model, Gemma-4-31B-IT, 46.4%. Under a strictly matched 2,300-sample budget, training on K12-Train-Text beat equally sized subsets of eight mainstream instruction corpora on GaokaoBench and EduEval, and K12-Train-Full led three multimodal educational [[benchmark|benchmarks]] — evidence that curriculum structure, not exam recall, is what [[generative-ai|generative AI]] tutoring still lacks.

## Key Findings
1. **Benchmarks test answers, not curriculum structure.** The paper separates factual recall from curriculum cognition: prerequisite order, concept taxonomy, experiment–concept links and where an idea sits in the textbook.
2. **One graph backs both resources.** K12-KGraph covers four subjects of People's Education Press textbooks and defines nine node types and fourteen relation types across textual and [[multimodal|multimodal]] components.
3. **Ten models stalled on K12-Bench.** Gemini-3-Flash reached 57.1% exact match and Gemma-4-31B-IT 46.4% on 23,640 multi-select questions; Prereq and Neighbor stayed below 35% even for the best model.
4. **Smaller models were barely above guessing.** Meta-LLaMA-3-8B-Instruct scored 7.2% exact match overall against a random baseline of 6.7%, while Ground and Evidence reached the highest F1, above 75% and 72%.
5. **Curriculum-grounded data was sample-efficient.** At a matched 2,300-sample budget, K12-Train-Text beat eight equally sized instruction corpora, adding 24.1 GaokaoBench points over the strongest baseline on Qwen3-4B-Base and 32.4 on Llama3.1-8B-Base.
6. **Gains transferred beyond the trained subjects.** K12-Train covers only mathematics, physics, chemistry and biology, yet it also produced the top Chinese (120.18) and humanities mathematics (132.00) scores on GaokaoBench.
7. **Textual and visual supervision were complementary.** K12-Train-Full, combining 2,267 text-only and 5,068 multimodal samples, led Gaokao-MM (39.9), MDK12-Bench (52.94) and K12Vista (79.95) among all training configurations.

## Building K12-KGraph from the textbooks
K12-KGraph is extracted from textbook PDFs in [[math-education|mathematics]], [[physics-education|physics]], [[chemistry-education|chemistry]] and [[biology-education|biology]]. The pipeline runs in five stages: an OCR parser converts the PDFs into Markdown and a table-of-contents parser splits them into section files; GPT-5.2 extracts nodes and edges under a schema-aware prompt that requires an evidence citation or confidence score per edge; per-section graphs are merged bottom-up with deduplication; and depth-first cycle detection enforces a DAG over taxonomic and [[recommender-systems-and-learning-paths|prerequisite relations]]. The multimodal side adds Figure and VisualElement nodes with illustrates, refers_to, requires_figure and supports_edge relations that ground knowledge in textbook images. The merged graph holds 6,579 concepts, 1,364 skills, 652 experiments and 1,171 exercises across 48 books, plus 7,388 figures and 10,203 visual elements. Twelve subject specialists verified every node and edge, with Fleiss' κ = 0.84 overall and weakest agreement on the semantic relates_to relation (0.69).

## What K12-Bench measures
K12-Bench turns graph neighborhoods into 23,640 four-option multi-select questions in five families named for the relation probed: Ground (tests_concept, tests_skill), Prereq (prerequisites_for), Neighbor (is_a, relates_to), Evidence (verifies) and Locate (appears_in, leads_to). Correct answers are true graph neighbors; distractors are structurally proximate non-answers screened by 3-gram similarity and a GPT-5.2 [[pedagogy|pedagogical]] filter that drops options a careful teacher might accept. Models see the question text alone, with no graph context, so the [[benchmark]] probes parametric knowledge of [[curriculum-design|curriculum structure]]. Because items are derived deterministically, their [[educational-measurement|measurement]] quality reduces to graph quality: a stratified spot-check of 15% of items found 98.4% fully correct. Coverage is uneven: Locate's first-appearance subtask supplies 8,456 items against 168 for chapter prerequisites, and Evidence draws no mathematics items because that subgraph has no experiment nodes.

## Training on curriculum structure
K12-Train renders node properties and edge semantics into question–answer pairs for supervised [[pedagogical-llm-training|instruction tuning]]: node-grounded questions generated with Qwen3-235B-A22B, relation-grounded questions that explain the relation, and deterministic templates for unambiguous exercise-to-concept edges. The corpus totals 7,335 samples — 2,267 text-only (K12-Train-Text) and 5,068 requiring a figure (K12-Train-MM). Under a matched budget of roughly 2,300 samples, full-parameter tuning on K12-Train-Text beat eight mainstream instruction corpora on GaokaoBench and EduEval: 1009.96 total on Qwen3-4B-Base against 985.91 for the strongest baseline, and 625.49 on Llama3.1-8B-Base against 593.08. LoRA tuning on Qwen3.5-2B-Base with all 7,335 samples led three multimodal benchmarks over configurations trained on the full DataFlow (10,000) and WizardLM (142,759) sets. These results belong to the paper's mid-2026 toolchain — GPT-5.2 extracting the graph, ten evaluated models from Meta, GLM, Mistral, Alibaba, Google and OpenAI — not to [[generative-ai|generative AI]] in general, and the gain is [[transfer-of-learning|transfer]] of a structurally grounded answer style rather than memorized content.

## What this means for practice
- **Instructors.** Do not read a high exam-style score as evidence that a tool knows your course sequence: the best model missed the complete answer set on most prerequisite and neighbor questions, so test a tutoring assistant on the concepts that precede a lesson.
- **Curriculum designers.** Treat the prerequisite map as a checkable artifact: the four benchmark families are a usable audit template for a scope and sequence.
- **[[educational-technology-developers|Educational technology developers]].** Extract curriculum structure before scaling a fine-tuning set: curriculum-aligned question–answer pairs beat an equal-sized slice of a large general corpus in text-only and multimodal evaluations.
- **Researchers.** Use the released graph, benchmark and corpus as fixed baselines for [[ai-ed-evaluation|evaluating AI in education]], and inspect the matching graph edge when an item fails.

## Limitations
- The graph, benchmark and corpus cover four subjects from Chinese People's Education Press textbooks only, so nothing here speaks to other languages or to subjects such as history or language arts.
- K12-Bench items come deterministically from one validated graph, so errors trace to a graph edge, and the 15% stratified spot-check leaves most of the 23,640 items unexamined.
- K12-Train rests on a 10% sample (96.9% judged fully correct) rather than full re-annotation; human verification covers the graph, not the derived pairs.
- Stability was tested on a 20% stratified subsample rather than the complete evaluation sets, and the contamination check is n-gram overlap, which cannot catch semantic leakage.

## Citation
Liang, H., Lin, Q., Han, Z., Ma, X., Wong, Z. H., Qiang, M., Sun, L., & Zhang, W. (2026). [K12-KGraph: A Curriculum-Aligned Knowledge Graph for Benchmarking and Training Educational LLMs](https://arxiv.org/abs/2605.09635). arXiv preprint.