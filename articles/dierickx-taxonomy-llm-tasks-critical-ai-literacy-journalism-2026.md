---
title: "A Taxonomy of LLM-Supported Tasks for Critical AI Literacy in Journalism"
created: "2026-08-26T17:52:26-04:00"
updated: "2026-08-26T17:52:26-04:00"
type: article
tags: [generative-ai, ai-literacy, prompt-engineering, writing-education, critical-thinking, ethics, human-in-the-loop-ai, higher-ed, curriculum-design]
audience: [instructors]
research_method: [literature review, theoretical analysis]
level: [higher ed]
category: [curriculum design]
sources: ['raw/papers/dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026.md']
confidence: high
---

> **Synthesis:** Dierickx, Bjerknes, Opdahl, & Lindén (2026) develop a **task-based taxonomy** for integrating [[generative-ai|large language models (LLMs)]] into journalism education, organised around the four stages of the news workflow — newsgathering, sensemaking, editing, and publication/distribution. Drawing on task definitions from [[ai-technologies|machine learning]] and [[educational-nlp|natural language processing]] alongside journalism studies, the taxonomy translates journalistic activities into computationally-informed tasks, each linked to a baseline [[prompt-engineering|prompt]] and an explicit risk-and-mitigation strategy. By framing prompting as a [[situated-learning|situated]], reflexive professional practice rather than a technical skill, the paper advances [[ai-literacy|critical AI literacy]] — foregrounding bias, hallucination, [[cognitive-offloading|overreliance]], and the enduring need for [[human-in-the-loop-ai|human editorial oversight]].

Dierickx, Bjerknes, Opdahl, & Lindén (2026) address a gap in journalism education: prompting is increasingly recognised as an educational tool but remains underdeveloped there, with existing work focusing on AI use in newsrooms rather than translating journalistic work into structured [[pedagogy|pedagogical]] tasks. They ask: *How can prompting be structured as a pedagogical practice in journalism education, drawing on task definitions from natural language processing and machine learning?*

## The taxonomy: four stages of the news workflow

The paper organises journalistic work into four stages that mirror the news production process, each with tasks that can be meaningfully supported by LLMs while remaining compatible with journalism's norms of verification, editorial judgement, and ethical responsibility:

| Stage | Tasks |
|-------|-------|
| **Newsgathering** (collecting/structuring information) | Classification/clustering, detection/discovery, extraction, linking, summarisation |
| **Sensemaking** (analysing/interpreting to guide editorial decisions) | Comparison, evaluation, exploration, prediction, prioritisation |
| **Editing** (revising/enriching/correcting content) | Augmentation, correction, generation, segmentation, simplification |
| **Publication/distribution** (adapting/disseminating content) | Adaptation, conversion/translation, generation, personalisation, reformulation |

Each task is defined, given a model-agnostic **baseline prompt**, and paired with a **risk-and-mitigation strategy** (e.g. linking's risk of over-interpretation, false authority, hallucination and confirmation bias is mitigated through source citation, cross-checking with primary sources, and human validation). The same computational operation (e.g. generation) recurs across stages because it serves different editorial objects with different risks.

## Prompting as situated professional judgement

A central contribution is reframing prompting. Rather than treating it as a neutral technical act, the paper frames **task definition as a form of journalistic judgement** that must be learned, articulated, and critically assessed. Three ideas anchor this:

- **Prompting is a form of writing.** Because [[llm]] outputs result from the interplay of instructions, training data, and system processes — and because language, thinking, and knowledge are mutually constitutive in writing — a prompt shapes its output in the same way writing shapes thought. Task definition is therefore not neutral but a constitutive element of knowledge production.
- **Task definition makes assumptions visible.** Expressing journalistic work as explicit prompts surfaces assumptions, priorities, and [[ethics|ethical considerations]] that are more visible than in traditional newsroom practice. Defining tasks thus becomes a method for teaching editorial responsibility and awareness of the limits of automation.
- **High/low-task divides are not fixed.** The distinction between automatable low-level tasks and human-only high-level tasks is not a property of the tasks themselves but a relationship shaped by available technologies. As LLMs reshape what can be delegated, the question becomes how journalistic judgement, domain knowledge, and algorithmic capability work together.

## Addressing the four challenges of GenAI in postdigital education

The taxonomy practically addresses Jandrić's (2026) four challenges of generative AI in postdigital education:

- **Detection** — exposing students to the possibilities and limitations of LLMs through repeated task formulation and output evaluation
- **Sourcing** — grounding outputs in evidence, highlighting that LLM output is based on probabilistic patterns rather than verified knowledge
- **Writing** — requiring [[critical-thinking|critical evaluation]] of the reasoning behind generated text
- **Attitude** — promoting responsible and reflexive [[student-engagement|engagement]], and justifying the decision to delegate tasks to LLMs

In the classroom, the approach shifts assessment from evaluating the "quality" of AI-generated text to articulating tasks, justifying prompt choices, and reflexively evaluating AI behaviour. Rather than positioning human review as a final corrective step after an autonomous AI process, each task is treated as an ongoing negotiation in which journalistic judgement, professional norms, and algorithmic output are shaped together through iterative prompting and revision.

## Transferability beyond journalism

While grounded in journalism, the taxonomy's underlying logic is transferable to other knowledge-intensive professions — law, [[medical-education|medicine]], public policy — where accuracy, source evaluation, and accountability are at stake, and where practitioners increasingly decide what can be delegated to algorithmic systems. It understands AI literacy as a form of professional reasoning learned through the practice of defining tasks, formulating prompts, and critically evaluating outputs in context, and it argues the ability to articulate *why* a task is or is not suitable for LLM support is more valuable than familiarity with any particular tool.

## Connected Concepts

- [[ai-literacy]]
- [[prompt-engineering]]
- [[generative-ai]]
- [[critical-thinking]]
- [[ethics]]
- [[human-in-the-loop-ai]]
- [[higher-ed]]
- [[curriculum-design]]
- [[ai-technologies]]
- [[educational-nlp]]
- [[scaffolding]]

## Connected Articles

- [[ying-genai-journalism-assessment-2026]] — Practice-based GenAI journalism assessment intervention
- [[aaai2026-prompting-literacy-k12]] — K-12 prompting literacy
- [[tracing-genai-literacy-interaction-patterns]] — Tracing GenAI literacy interaction patterns
- [[misiejuk-cognitive-offloading-prompting-2026]] — Prompting patterns and cognitive offloading
- [[critical-media-literacy-education-2026]] — Critical media literacy education

## Citation

Dierickx, L., Bjerknes, F., Opdahl, A. L., & Lindén, C.-G. (2026). [A Taxonomy of LLM-Supported Tasks for Critical AI Literacy in Journalism](https://doi.org/10.1007/s42438-026-00690-0). *Postdigital Science and Education*. https://doi.org/10.1007/s42438-026-00690-0
