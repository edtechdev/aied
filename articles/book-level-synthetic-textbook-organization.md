---
title: "Beyond Rephrasing: Book-Level Organization Improves Synthetic Textbook Data for Mid-Training"
created: 2026-07-31
updated: 2026-07-31
type: article
tags: [generative-ai, llm, personalized-learning, educational-theory]
sources: ['raw/papers/2607.28109.md']
confidence: medium
---

Studies how organizing synthetic content into coherent book-level documents affects language model training, moving beyond local rewriting. Presents a scalable synthesis pipeline that retrieves source material, clusters it into topical units, and plans hierarchical textbook structures. Shows book-level organization significantly outperforms isolated content generation for educational knowledge acquisition in LLMs.

## Key Findings

- Prior work on synthetic textbooks treated the benefit as a property of generated content or local rewriting style; this paper studies a different factor — whether related content is organized into coherent book-level documents — and provides controlled evidence that organization matters.
- The synthesis pipeline retrieves source material from a pre-training corpus, clusters it into topical units, plans hierarchical tables of contents, and assembles source-grounded sections into complete books, yielding 686K textbooks (32B tokens) across 15,000+ disciplines.
- Replacing natural books in a mid-training mix with this corpus improves downstream performance by +1.09 on average.
- A content-matched Split condition that treats each section as an independent document shows a +1.02 mean gain for Full, isolating document packaging as the active factor.
- A length-matched RandomConcat control that joins sections from different books performs below Full, ruling out document length alone as the explanation.
- A retrieval-pool-matched Rephrase condition that independently rewrites individual documents without clustering, TOC planning, or book assembly yields a +1.17 gain for Full, demonstrating the value of structured synthesis.
- On Llama3-8B, Full likewise outperforms both RandomConcat and Natural Books, supporting book-level organization as a useful axis for synthetic pre-training data design.

## Why Organization Matters

The authors argue that organization is not incidental. On the generation side, a book-level plan provides the scaffold needed to turn scattered retrieved materials into long, structured, and coherent textbook data rather than a collection of locally plausible passages. On the training side, preserving structure determines whether planned adjacent sections remain in a shared document with continuous positions and shared intra-document attention, or are split into independent examples with resets between sections.

## Implications for AI in Education

For educational applications of [[llm]]s, the results indicate that the structure of training data is a design axis in its own right: pedagogically organized, book-level documents improve knowledge acquisition over isolated or locally rewritten content. The pipeline is scalable and source-grounded, offering a practical recipe for generating educational corpora at scale — of interest to researchers building synthetic textbooks for mid-training and to efforts that use [[generative-ai]] to produce learning materials. The controlled-comparison methodology also models how to isolate specific data-design factors, a discipline relevant to [[educational-nlp]] research on training data for education.

## Connected Concepts

- [[llm]]
- [[generative-ai]]
- [[educational-nlp]]
- [[pedagogical-agent]]
- [[open-source]]
- [[affective-computing]]
- [[lifelong-learning]]
- [[self-regulated-learning]]

## Connected Articles



- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[learnmate2-llm-adaptive-learning]] — LearnMate^2: Design and Evaluation of an LLM-powered Personalized and Adaptive Support System for Online Learning
- [[ai-learning-assistants-higher-ed-large-scale]] — Using AI-based Learning Assistants in Higher Education: A Large-Scale Descriptive Analysis
- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM-Enhanced Hierarchical Cognitive Diagnosis
- [[generativism-learning-theory]] — Generativism: Toward a Learning Theory for the Age of Generative Artificial Intelligence
- [[mooc-to-maic]] — From MOOC to MAIC: Reshaping Online Teaching and Learning through LLM-driven Agents
