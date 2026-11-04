---
title: "Learning Commons"
created: "2026-11-04T18:20:00-05:00"
updated: "2026-11-04T18:20:00-05:00"
type: resource
summary: "Open AI infrastructure from Mark Zuckerberg and Priscilla Chan's education initiative: a knowledge graph of standards, curricula and learning science data, evaluators for judging LLM output, and model-agnostic agent skills for teacher workflows."
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

**Learning Commons** is Mark Zuckerberg and Priscilla Chan's education initiative, launched in 2025 to carry the Chan Zuckerberg Initiative's learning-science work into the infrastructure that edtech products are actually built on. Its argument is infrastructural rather than pedagogical: research exists, academic standards exist, and high-quality curricula exist, but they sit in separate systems, so developers build on whatever is easiest to reach. The organization publishes three open tools on GitHub — a Knowledge Graph, a set of Evaluators, and Agent Skills — and operates a platform that adds Curriculum Sync for loading curricula into a learning management system.

## What you can do with it

The **Knowledge Graph** models academic standards, curricula and learning-science research as entities and relationships under one shared schema, so a tool can align generated content to a standard without building its own data pipeline. The **Evaluators** measure attributes of LLM output through a learning-science lens — text complexity, [[feedback]], academic standards alignment and durable skills — and ship with Python and TypeScript SDKs, published on npm and PyPI, for scoring generated content or comparing candidate models. **Agent Skills** package instructions, references and guardrails for common teacher workflows in an open, model-agnostic format: a check for understanding, tiered lesson differentiation, standards-aligned lesson plans, and lesson preparation. In practice the graph is what makes the other two credible: content alignment is the claim, and the graph is the reference it is checked against.

## Who it is for

Developers building AI features into [[curriculum-design|curriculum]] and assessment products, and the curriculum or standards teams who supply the data those products align to. Instructors can use the agent skills on their own, but the repository's own framing is infrastructure for people shipping tools.

## Notes and caveats

Being open in [[open-source|source]] does not make the data open. The Knowledge Graph code is MIT, while each dataset carries its own access label — Open, Open + Gated, or Gated — and Gated content is explicitly not covered by the open licenses the repository cites, so check the dataset catalog before assuming reuse rights. Evaluator code is MIT and its prompt content CC BY 4.0, but the annotated CLEAR and PERSUADE 2.0 corpora it uses are CC BY-NC-SA 4.0. The platform and the datasets behind it need an account. Repository activity as read on 2026-11-04: 167 stars for the Knowledge Graph, 88 for Evaluators, 41 for Agent Skills. The initiative is funded by CZI, and its framing of the problem is the funder's own.

## Connected Concepts

- [[curriculum-design]] — the graph exists to align generated content to standards and curricula
- [[open-source]] — MIT and Apache-2.0 code with per-dataset data licensing
- [[educational-nlp]] — evaluators as a measurement layer over LLM output
- [[llm]] — the target of the evaluation and the consumer of the skills
