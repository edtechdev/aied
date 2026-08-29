---
title: "Commenting with Copilot: A Taxonomy and Multi-Year Analysis of Student Code-Generation Specifications"
created: "2026-07-14T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [llm, student-experience, stem-education, higher-ed, cs-education, ai-literacy, rag]
sources: ['raw/papers/2607.10674.md']
confidence: high
---

Analyzes how students specify intended behavior in natural language to AI code tools (Copilot) across multiple years, deriving a taxonomy of code-generation specifications expressed through comments. As AI tools shift emphasis from writing code to specifying behavior, the study documents what students actually ask of these systems.

Situates in [[llm]]-assisted [[programming-its]] and [[student-experience]] within [[cs-education]] and [[higher-ed]], extending [[reshaping-cs-education-genai]] by characterizing the new 'specification' literacy. It informs [[ai-literacy]] for coding and the design of tools that scaffold rather than replace student reasoning.

## Key Findings

- Analyzing a four-year dataset of undergraduate programming submissions and reflections from tasks in which students wrote comments to guide code generation and refined solutions using test-case feedback, the study introduces a taxonomy spanning three dimensions: comment type, code expression level, and code construct.
- Students mostly wrote natural-language What comments — describing intended behavior — while shifting toward How comments for more procedural constructs.
- Students focused more on verifying generated code than on repeatedly rewriting their comments, indicating a verification-oriented workflow in AI-assisted programming.
- Using automated classification, the study examined how the taxonomy dimensions varied across attempts and how students described the process in their reflections.
- The findings characterize the new "specification" literacy emerging as AI tools shift emphasis from writing code to specifying behavior in natural language.

## Study Design & Method

The study draws on multi-year data from undergraduate programming courses in which AI code tools such as GitHub Copilot were integrated into tasks: students wrote comments as specifications, the tools generated code, and students refined solutions based on test-case feedback. A three-dimensional taxonomy — comment type, code expression level, and code construct — was applied via automated classification to trace how specification behavior changed across attempts. Student reflections provided qualitative context on how learners experienced the process of directing code generation.

## Implications for AI in Education

As AI code tools become integrated into programming environments, the emphasis of student work shifts from code writing to specification, and the study documents what students actually ask of these systems. For [[cs-education]], the prevalence of What comments and the shift to How comments on procedural constructs suggest that learners benefit from explicit instruction in writing precise specifications — a form of [[ai-literacy]] for programming. The finding that students concentrated on verification suggests that tools and curricula should scaffold the verification of generated code, treating comments and tests as the interface between student intent and AI output, in line with the broader rethinking of [[reshaping-cs-education-genai]].

## Connected Concepts

- [[ai-literacy]]
- [[cs-education]]
- [[higher-ed]]
- [[llm]]
- [[prompt-engineering]]
- [[student-experience]]

## Connected Articles

- [[programming-its]]
- [[reshaping-cs-education-genai]]
## Citation

Nasser Giacaman, Valerio Terragni, Paul Denny, Viraj Kumar (2026). [Commenting with Copilot: A Taxonomy and Multi-Year Analysis of Student Code-Generation Specifications](https://arxiv.org/abs/2607.10674). arXiv preprint.
