---
title: "Learning Commons"
created: "2026-11-04T17:37:01-05:00"
updated: "2026-11-05T02:05:00-05:00"
type: resource
summary: "Open AI infrastructure for education products: a knowledge graph of standards and curricula, evaluators for scoring LLM output, model-agnostic agent skills for teacher workflows, and Curriculum Sync for loading curricula into a learning management system."
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
---

**Learning Commons** publishes three open tools for putting AI features on top of real curriculum content — a **Knowledge Graph** of academic standards, curricula and learning-science research, a library of **Evaluators** for judging generated text, and model-agnostic **Agent Skills** for common teacher workflows — and runs a platform that adds Curriculum Sync for loading curricula into a learning management system.

## What you can do with it

**Align generated content to a standard.** The [[knowledge-graph|Knowledge Graph]] models standards, [[curriculum-design|curricula]] and research as entities and relationships under one shared schema. A product can look up the standard an item should target, traverse prerequisite relationships, or ground a tutor's content in the curriculum it is supposed to teach, without building and maintaining its own data pipeline.

**Score generated output before students see it.** The **Evaluators** measure attributes of [[llm|LLM output]] — text complexity, [[feedback]], standards alignment and durable skills — and ship as Python and TypeScript SDKs on npm and PyPI. In practice they work as a regression check when a prompt or model changes, as a comparison across candidate models, or as a filter on generated items and explanations.

**Package a teacher workflow.** **Agent Skills** bundle instructions, references and guardrails in an open, model-agnostic format: a check for understanding, tiered lesson differentiation, a standards-aligned lesson plan, and lesson preparation. They can be dropped into an [[agentic-ai|agent framework]] or read as worked templates for how much structure a reliable classroom workflow needs.

**Move a curriculum into a learning management system.** Curriculum Sync is the platform step that turns a standards map into something a course can actually use ([[edtech-platform|LMS]]).

## Who it is for

Developers building AI features into curriculum and [[assessment|assessment]] products, and the curriculum or standards teams who supply the data those products align to. [[teacher-role|Instructors]] can use the Agent Skills on their own, but the repository's own framing is infrastructure for people shipping tools.

## Notes and caveats

Being [[open-source|open source]] does not make the data open. The Knowledge Graph and Evaluator code is MIT and Agent Skills is Apache-2.0, while each dataset carries its own access label — Open, Open + Gated, or Gated — and Gated content is not covered by the open licenses the repository cites, so check the dataset catalog before assuming reuse rights. Evaluator prompt content is CC BY 4.0, but the annotated CLEAR and PERSUADE 2.0 corpora it uses are CC BY-NC-SA 4.0. The platform and the datasets behind it need an account.

## Connected Concepts

- [[curriculum-design]] — the graph exists to align generated content to standards and curricula
- [[open-source]] — MIT and Apache-2.0 code with per-dataset data licensing
- [[educational-nlp]] — the evaluators are a text-measurement layer over LLM output
- [[agentic-ai]] — skills that package a workflow for a model to carry out
- [[edtech-platform]] — Curriculum Sync loads curricula into a learning management system
- [[llm]] — the target of the evaluation and the consumer of the skills
