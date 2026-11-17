---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T08:25:00-05:00"
updated: "2026-11-17T08:25:00-05:00"
type: resource
summary: "A model leaderboard for education benchmarks aimed at low- and middle-income countries, covering pedagogy, foundational literacy, SEND, visual maths and multilingual performance, with price and open-weight columns."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
---

Fab AI evaluates models on education tasks that matter where budgets, bandwidth and language coverage are constrained, and publishes the results as a sortable leaderboard rather than a paper. The core table scores a pedagogy benchmark alongside SEND, visual maths and visual reasoning, with separate tabs for multilingual pedagogy, foundational literacy and read-aloud assessment.

## What you can do with it

Compare roughly 300 models on pedagogy scores that currently run from the low nineties down to 21%, then sort by what an education ministry actually has to weigh: price per million tokens, parameter count, open weights and release date. The spread at the bottom is the useful part. Sub-2B open models sit between 21% and 43% on the pedagogy benchmark while frontier models sit in the low nineties, which turns "can we run this offline on cheap hardware" into a quantified trade rather than a guess.

The multilingual pedagogy tab is the reason to bookmark the page. Most education benchmarks are English-only, and the question of whether a model's pedagogy survives translation is exactly the question a ministry in a multilingual system needs answered. The data is downloadable as CSV, so the comparisons can be re-run locally.

## Who it is for

Policymakers and procurement teams choosing models for national systems, researchers studying [[digital-divide|the access gap]] in AI-supported education, and developers who need a pedagogy target that is not an English-language exam.

## Notes and caveats

A leaderboard measures models on the benchmark's own tasks: a high pedagogy score is evidence about those items, not about a classroom. The price column blends input and output token prices at a 3:1 ratio, which is a modelling choice and not what any particular deployment will cost. Coverage of languages and of locally hosted models moves as new models appear, and the low-end scores for small models partly reflect task format as much as capability. Fab AI's framing is explicitly about low- and middle-income countries, so the benchmark's item set reflects that context and should not be read as a general education ranking. Check release dates: several entries predate the current model generation.

## Connected Concepts

- [[benchmark]] — the wider class of instruments this belongs to
- [[digital-divide]] — the constraint the price and open-weight columns exist to make visible
- [[equity-in-ai-education]] — the policy question the leaderboard informs
