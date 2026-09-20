---
title: "Beyond Rephrasing: Book-Level Organization Improves Synthetic Textbook Data for Mid-Training"
created: "2026-07-31T04:33:04-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
pedagogy: [learning-theories]
technology: [generative-ai, llm, personalized-learning]
methods: [benchmark]
audience: [software developers]
sources: ['raw/papers/2607.28109.md']
confidence: medium
---

> **Synthesis:** Studies how organizing synthetic content into coherent book-level documents affects language [[pedagogical-llm-training|model training]], moving beyond local rewriting. Presents a scalable synthesis pipeline that retrieves source material, clusters it into topical units, and plans hierarchical textbook structures. Shows book-level organization significantly outperforms isolated content generation for educational knowledge acquisition in LLMs.

## Key Findings

- Prior work on synthetic textbooks treated the benefit as a property of generated content or local rewriting style; this paper studies a different factor — whether related content is organized into coherent book-level documents — and provides controlled evidence that organization matters.
- The synthesis pipeline retrieves source material from a pre-training corpus, clusters it into topical units, plans hierarchical tables of contents, and assembles source-grounded sections into complete books, yielding 686K textbooks (32B tokens) across 15,000+ disciplines.
- Replacing natural books in a mid-training mix with this corpus improves downstream performance by +1.09 on average.
- A content-matched Split condition that treats each section as an independent document shows a +1.02 mean gain for Full, isolating document packaging as the active factor.
- A length-matched RandomConcat control that joins sections from different books performs below Full, ruling out document length alone as the explanation.
- A retrieval-pool-matched Rephrase condition that independently rewrites individual documents without clustering, TOC planning, or book assembly yields a +1.17 gain for Full, demonstrating the value of structured synthesis.
- On Llama3-8B, Full likewise outperforms both RandomConcat and Natural Books, supporting book-level organization as a useful axis for synthetic pre-training data design.

## Why Organization Matters

The authors argue that organization is not incidental. On the generation side, a book-level plan provides the [[scaffolding|scaffold]] needed to turn scattered retrieved materials into long, structured, and coherent textbook data rather than a collection of locally plausible passages. On the training side, preserving structure determines whether planned adjacent sections remain in a shared document with continuous positions and shared intra-document attention, or are split into independent examples with resets between sections.

## What this means for practice

- **Designers.** Package related synthetic content as book-level documents instead of independent chunks: the Full condition beat a content-matched Split condition by a mean gain of +1.02, so document packaging rather than the content itself carried the improvement.
- **Designers.** Keep planned adjacent sections inside one document so continuous positions and intra-document attention survive training, rather than resetting between examples.
- **Designers.** Spend effort on the structure, not just the text. Full also outperformed a retrieval-pool-matched Rephrase condition that rewrote documents individually without clustering, TOC planning or book assembly (+1.17 gain for Full), showing that organization did work that rewriting did not.
- **Designers.** Budget the retrieval-infrastructure cost before adopting the pipeline — it requires a searchable corpus index, and only a research-licensed subset of the 686K-textbook, 32B-token corpus is released.
- **Researchers.** Copy the control design when isolating a data-quality claim: content-matched, length-matched (RandomConcat) and pool-matched (Rephrase) conditions each remove a different confound, which is why the paper can attribute the gain to organization rather than length or content — a discipline relevant to [[educational-nlp]] work on training data for education.

## Limitations

- Each condition was trained once, so training-run variance remains unmeasured; the authors note that the aggregate gains are not driven by outlier benchmarks but do not estimate run-to-run variation.
- Gains are averaged over 28 benchmarks (+1.09 overall, winning on 19/28), with the comparison against natural books at p = 0.044 on a one-sided sign test — a real but modest margin, evaluated on benchmark scores only, with no human or learning-outcome evaluation.
- The benefit is demonstrated for mid-training of LMs, not for classroom use, and the pipeline depends on a searchable pre-training corpus index, adding preprocessing and retrieval overhead not available to users without a suitably indexed corpus.
- Component ablations rely on a fixed LLM judge, so the authors present them as diagnostic evidence about which pipeline stages matter rather than as downstream evidence.

## Connected Concepts

- [[llm]]
- [[generative-ai]]
- [[educational-nlp]]
- [[curriculum-design]]

## Connected Articles

- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[learnmate2-llm-adaptive-learning]] — LearnMate^2: Design and Evaluation of an LLM-powered Personalized and Adaptive Support System for Online Learning
- [[ai-learning-assistants-higher-ed-large-scale]] — Using AI-based Learning Assistants in Higher Education: A Large-Scale Descriptive Analysis
- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM-Enhanced Hierarchical Cognitive Diagnosis
- [[generativism-learning-theory]] — Generativism: Toward a Learning Theory for the Age of Generative Artificial Intelligence
- [[mooc-to-maic]] — From MOOC to MAIC: Reshaping Online Teaching and Learning through LLM-driven Agents

## Citation

Jiawen Tao, Miao Peng, Yaoming Li, Xiaokun Yuan, Mengzhou Wu (2026). [Beyond Rephrasing: Book-Level Organization Improves Synthetic Textbook Data for Mid-Training](https://arxiv.org/abs/2607.28109).
