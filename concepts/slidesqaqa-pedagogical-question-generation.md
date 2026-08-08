---
title: "Slide Deck Q&A Quality Assurance App: A Multi-Stage Pipeline for Pedagogical Question Generation"
created: 2026-05-27
updated: 2026-05-27
type: concept
tags: [prompt-engineering, generative-ai, llm, higher-ed, scaffolding, formative-assessment, multimodal]
sources:
  - raw/papers/2605.26428.md
confidence: high
---

# Slide Deck Q&A Quality Assurance App: A Multi-Stage Pipeline for Pedagogical Question Generation

**Jim Salsman (2026)** — arXiv preprint. cs.CL; cs.HC.

## Overview

SlidesQAQA is a Flask-based system that extracts text and rendered images from PDF lecture slides and processes them through a four-stage [[llm]] pipeline: **window planning** (segment extraction), **deck synthesis** (cross-slide reasoning), **slide annotation** (per-slide question generation), and **reconciliation** (deck-level revision to reduce redundancy and improve coverage). The key innovation is joint reasoning about slide modality and pedagogical role, with a bounded question budget that forces prioritization of important content.

## How It Works

Unlike earlier [[automated-question-generation]] systems that generate questions slide-by-slide in isolation, SlidesQAQA reasons across the entire presentation. This enables **deck-level scaffolding** — questions build on each other across the slide sequence, matching the intended instructional flow. The reconciliation stage filters non-instructional slides and revises draft annotations to eliminate redundancy, producing structured JSON output with deck-level goals, section structure, slide summaries, question sets, and evaluation scores.

## Comparison to Related Systems

This approach contrasts with [[generate-then-validate-question-gen]] frameworks by front-loading pedagogical reasoning rather than post-hoc validation. Where [[ai-generated-slides-student-perception]] research has shown that AI-generated slide content can be perceived as lower quality, SlidesQAQA focuses on question quality rather than slide generation itself. It also differs from [[aissa-slides-analysis]] systems that analyze slides for accessibility rather than pedagogical question extraction.

## Pedagogical Design

The bounded question budget per slide forces the system to make pedagogical decisions about what content merits a question — an implicit form of [[scaffolding]] that prioritizes key concepts. Initial experiments on two technical lecture decks demonstrated successful filtering of non-instructional slides and generation of pedagogically coherent questions for visually complex content. This has implications for [[formative-assessment]] automation at scale.

## Implications for AIED

SlidesQAQA represents a practical step toward AI systems that understand pedagogical structure rather than just processing content. Its [[multimodal]] approach — jointly processing text and rendered images — addresses a known weakness of text-only question generation systems. For [[higher-ed]] instructors managing large courses, automated pedagogical question generation from existing slide materials could dramatically reduce the burden of creating formative assessments.

## Related Pages
- [[kt4eqg-personalized-question-generation]] — 7 of 8 papers in May 28 scan

- [[automated-question-generation]] — the broader field this system contributes to
- [[generate-then-validate-question-gen]] — an alternative pipeline architecture
- [[ai-generated-slides-student-perception]] — student perspectives on AI-generated educational content
- [[aissa-slides-analysis]] — complementary slide analysis for accessibility
- [[scaffolding]] — the pedagogical principle embedded in the pipeline design
- [[formative-assessment]] — the primary use case for generated questions
- [[multimodal]] — the joint text+visual reasoning capability
- [[higher-ed]] — the primary deployment context (lecture courses)

## Citation

Salsman, J. (2026). [Slide Deck Q&A Quality Assurance App: A Multi-Stage Pipeline for Pedagogical Question Generation](https://arxiv.org/abs/2605.26428). arXiv:2605.26428.
