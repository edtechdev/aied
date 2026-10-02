---
title: "PhysicsMate: A Curriculum-Grounded Bengali Benchmark for Secondary Physics QA with Small-Model Adaptation"
created: "2026-10-02T11:30:00-04:00"
updated: "2026-10-02T11:30:00-04:00"
type: article
sources: ['raw/papers/physicsmate-bengali-secondary-physics-benchmark-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [physics education]
level: [secondary]
audience: [instructors, researchers]
technology: [llm, llm-training-and-fine-tuning, knowledge-graph, educational-nlp]
methods: [benchmark]
ethics: [global-south, multilingual-learning, hallucination-risk]
foundations: [curriculum-design]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-02"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Bengali, spoken by over 300 million people, remains underrepresented in [[educational-nlp|educational NLP]], and its [[k-12|secondary education]] lacks [[curriculum-design|curriculum-grounded]] benchmarks for [[stem-education|STEM]] question-solving; general-purpose models also struggle with the terminology, unit conventions, and derivations that [[physics-education|physics]] problems demand. Jahin and colleagues introduce PhysicsMate, a [[benchmark]] of 1,834 Bengali question–answer pairs built from the National Curriculum and Textbook Board (NCTB) Grade 9–10 physics syllabus and grounded in a multi-relational [[knowledge-graph]] of 1,760 nodes and 2,600 edges across ten ontological types. Using a single LoRA recipe, they adapt [[llm|Qwen3 language models]] at 0.6B, 1.7B, and 4B parameters, gaining +5.5, +15.0, and +23.3 percentage points in closed-book accuracy. A node-type analysis shows the largest gains on structured curricular knowledge — physical quantities, laws, and definitions — and the smallest on loosely specified entity knowledge, offering [[multilingual-learning|low-resource-language]] education a diagnostic account of where [[llm-training-and-fine-tuning|parameter-efficient adaptation]] pays off.

## Key Findings

1. PhysicsMate releases 1,834 curriculum-grounded Bengali QA pairs built from the NCTB Grade 9–10 physics textbook and mapped to a knowledge graph of 1,760 nodes across 10 ontological types and 2,600 directed edges.
2. The corpus is partitioned into training (n = 1,374; 74.9%), validation (n = 185; 10.1%), and held-out test (n = 275; 15.0%) sets stratified by chapter, with membership checked programmatically so no question ID appears in more than one partition.
3. Under one fixed LoRA recipe, fine-tuning improved every metric at every scale: closed-book accuracy rose by 5.5, 15.0, and 23.3 percentage points for the 0.6B, 1.7B, and 4B Qwen3 models respectively.
4. The adapted 4B model reached 50.9% accuracy — well below the zero-shot cloud baselines GPT-4o-mini (69.5%) and Gemini-2.5-Flash-Lite (82.9%), yet higher than them on Token F1 and BERTScore.
5. Node-type diagnostics show relative Token F1 gains of 93.9% for physical quantities, 56.6% for laws, and 56.1% for definitions, against just 8.7% for loosely specified entity-level knowledge.
6. The adapted 4B model was 4-bit quantized into a small offline binary for local inference in environments with limited connectivity and hardware.

## A curriculum-grounded benchmark and knowledge graph

The NCTB Grade 9–10 physics textbook spans 13 chapters and 359 pages across mechanics, electromagnetism, optics, and modern physics. The pipeline begins with page-level OCR, converts each page to normalized Markdown, then extracts self-contained curricular knowledge units using three-page context windows with two-page overlaps, yielding 811 semantic units. Each record carries an ontology type, a canonical Bengali title, a formula where applicable, SI units, source pages, a topic, typed relations, and provenance. The resulting multi-relational graph stores 1,760 nodes — concepts (397), questions (252), quantities (224), figures (218), examples (188), entities (176), definitions (136), formulas (83), laws (65), and higher-secondary topics (21) — connected by 2,600 directed edges. Principal relations include part_of, applies_to, illustrates, example_of, depends_on, and derived_from. The [[automated-question-generation|automated question generation]] step then links each of the 1,834 QA pairs to a specific knowledge node and originating semantic unit, so every item can be traced back to a textbook passage.

## What adaptation changes, and where

All three Qwen3 scales were fine-tuned under one LoRA configuration — rank 16, scaling factor 32, dropout 0.05, 3 epochs, 8-bit AdamW — so model capacity was the key variable. The unadapted 0.6B model answered no test question correctly; after adaptation it reached 5.5%. The 1.7B model doubled from 10.5% to 25.5%, and the 4B model improved by 23.3 points to 50.9%. The authors caution that three data points cannot establish a scaling law, though the trend is monotonic across accuracy, Token F1, and BERTScore. Node-type diagnostics trace the gains to canonical knowledge: quantities, laws, and definitions adapt most readily, while entity mentions, which admit multiple valid surface forms, adapt least. [[qualitative-research|Qualitative]] cases show adaptation correcting a fabricated optics rule and completing a derivation that had stopped at Ohm's law. The authors argue the extraction framework generalizes to other [[science-education|secondary science curricula]] and to syllabi across [[global-south|South Asia]].

## What this means for practice

- **Instructors.** Treat an adapted small model as a teaching aid, not an autonomous grader: the best offline model reaches only 50.9% closed-book accuracy, so keep a [[teacher-role|teacher]] in the loop before outputs reach students.
- **Instructors.** Focus practice on canonical, structured content — physical quantities, laws, and definitions — where low-rank adaptation works best, and expect weaker support on loosely specified entity knowledge.
- **Curriculum designers.** Note the ontology's proposed reach: secondary [[chemistry-education|chemistry]] maps to physical quantities, named laws, formulas, and definitions, while secondary [[biology-education|biology]] maps to hierarchical concepts, anatomical figures, taxonomic entities, and descriptive definitions.
- **Researchers.** Reuse the released splits and provenance metadata to compare adaptation recipes without re-partitioning, and hold the recipe fixed when testing whether capacity or data drives the gains.
- **Institutions.** Plan for the hardware the pipeline still needs; offline deployment narrows but does not close the resource gap, because a classroom still needs at least one capable device.

## Limitations

- Accuracy rests on an LLM judge (Gemini-2.5-Flash-Lite at temperature 0) that was not cross-validated against an independent judge or a human-annotated subset, a [[assessment-validity|validity]] gap the authors flag as an open limitation.
- Evaluation is text-only: the 218 figures linked in the knowledge graph are never used as visual inputs.
- The benchmark covers one national curriculum, NCTB Grade 9–10 physics; generalization to other syllabi or subjects has not been tested.
- Automated extraction with proprietary LLMs risks silent [[hallucination-risk|hallucinations]] and ontological omissions that were not thoroughly human-checked, and unadapted models can reinforce [[misconceptions]] with fabricated rules or incomplete derivations.

## Citation

Jahin, R. A., Sajid, S., Reza, K. R. I., & Nimi, S. T. (2026). [*PhysicsMate: A Curriculum-Grounded Bengali Benchmark for Secondary Physics QA with Small-Model Adaptation*](https://arxiv.org/abs/2610.00664). arXiv:2610.00664.
