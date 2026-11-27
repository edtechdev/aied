---
title: "ES-LLMs Research Toolkit"
created: "2026-11-27T15:25:00-05:00"
updated: "2026-11-27T15:25:00-05:00"
type: resource
summary: "The MIT-licensed reproducibility toolkit for the ES-LLMs tutoring architecture: pedagogical rules, a 24-scenario safety benchmark, a synthetic-student simulator, evaluation rubrics, and a multi-LLM judge."
url: https://github.com/nizamkadirteach/aied2026-es-llms
source_code: https://github.com/nizamkadirteach/aied2026-es-llms
author: "Nizam Kadir"
author_url: https://orcid.org/0000-0002-6725-1133
resource_type: [developer tool, dataset or benchmark]
access: [free]
license: "MIT"
last_verified: "2026-11-27"
foundations: [agentic-ai]
technology: [llm, intelligent-tutoring, knowledge-tracing]
assessment: [assessment]
ethics: [explainable-ai, trust-calibration]
audience: [researchers, educational technology developers, instructional designers]
level: [middle school]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
reviewed_by: [editor]
connected_concepts: [intelligent-tutoring, llm, agentic-ai, knowledge-tracing, assessment, explainable-ai]
---

**ES-LLMs Research Toolkit** is the official reproducibility repository for an [[intelligent-tutoring|intelligent tutoring]] architecture that separates pedagogical decisions from the wording of a reply. The code is MIT-licensed and organized as a research toolkit rather than a deployable tutor: it contains the rule-based orchestrator and specialized agents, a 24-scenario pedagogical safety benchmark, a Monte Carlo simulator with four synthetic student archetypes, a multi-LLM judge with a seven-dimension rubric, and the human evaluation materials used in the paper.

## What you can do with it

The `benchmark` folder holds the 24-scenario safety set, including hint abuse and off-topic distraction cases, as JSON. The `simulator` runs large batches of synthetic student sessions from BKT parameters. The `evaluator` contains the judge prompts and a script for scoring dialogue logs with six frontier models, while `metrics` computes hint efficiency and constraint adherence. The `evaluation` folder has the human rubric, and the `examples` folder includes anonymized expert scores and simulation output. A Colab notebook demonstrates the pipeline, and a public sandbox is linked from the repository.

## Who it is for

Researchers who want to reproduce or contest the paper's comparisons, and developers building a constraint-heavy [[llm|LLM]] tutor who want a worked example of a deterministic orchestrator with a single rendering step. Instructional designers can read the rules and rubrics to see what an auditable [[agentic-ai|multi-agent]] tutoring policy looks like, but the repository is not a course-ready application.

## Notes and caveats

The toolkit is a research prototype, not an LMS integration or a hosted tutoring service. Running it requires Python and, for the LLM judge and renderer, provider API keys; the MIT license covers the code, not model usage. The sandbox and evaluation data are the authors' own release, and the repository had no tagged releases and two stars when checked on 27 November 2026, so treat it as an early reproducibility package rather than a maintained product. The benchmark and rubrics encode this paper's pedagogical rules; using them to judge a different tutor assumes those rules are the right standard, which is exactly the question a separate evaluation should test.

## Connected Concepts

[[intelligent-tutoring]], [[llm]], [[agentic-ai]], [[knowledge-tracing]], [[assessment]], [[explainable-ai]]
