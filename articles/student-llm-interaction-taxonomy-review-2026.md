---
title: "Toward Convergence in Student-LLM Interactions: A Rapid Scoping Review and Taxonomy for Learning-Oriented Use"
created: "2026-08-14T09:17:22-04:00"
updated: "2026-08-24T10:30:00-04:00"
type: article
tags: [llm, generative-ai, student-ai-interaction, learning-analytics, higher-ed, self-regulated-learning, assessment, ai-feedback-quality, research-methods-aied]
research_method: [scoping review, research methods]
level: [higher ed]
category: [assessment]
sources: ['raw/papers/student-llm-interaction-taxonomy-review-2026.md']
confidence: high
---

> **Synthesis:** Borchers, Jansen, and Weidlich (2026) conduct a rapid scoping review of how student interactions with large language models are defined and categorized, finding that research remains conceptually fragmented. Across 46 categorizations drawn from 33 studies, they identify substantial variation in data sources, category-construction approaches, and units of analysis, which prevents comparison across studies and understanding of when LLM use supports learning. The review argues for a convergent taxonomy of learning-oriented [[llm]] interactions. It provides a methodological foundation for the [[student-experience]] literature and for interpreting [[learning-analytics]] and self-regulatory evidence across heterogeneous studies.

## Key Findings

1. Across 46 categorizations extracted from 33 studies, the literature shows no shared meta-characteristic (Nickerson et al.'s term) for what student–LLM interaction categories describe — studies variously classify outputs, intentions, activities, dialogue moves, and strategies, so similar labels often name different phenomena and vice versa.
2. Four recurring taxonomy types emerge: **Type A** (output/product), **Type B** (function/activity), **Type C** (dialogue move), and **Type D** (strategy/pattern). Type B dominates the corpus while Type D is least common, indicating most research abstracts away from concrete interaction sequences.
3. Category construction is heterogeneous: roughly 43.5% of taxonomies were built inductively, 32.6% ad hoc, and 23.9% deductively, split about evenly between self-report and interaction-log data — so categories often reflect the measurement approach as much as the interaction itself.
4. The authors propose a hierarchical taxonomy of *interaction episodes* — goal-directed, temporally bounded sequences of observable exchange between student and system — with six broad classes: knowledge acquisition, evaluative feedback, strategic guidance, dialogic inquiry, artifact refinement, and co-regulation.
5. The episode-level unit occupies an intermediate level between isolated dialogue moves and broad cross-task strategies, connecting observable [[student-ai-interaction]] behavior to established learning processes and enabling future integration with [[learning-analytics]] and adaptive systems.

## A Fragmented Field

Generative LLMs are now widely used by students, yet research on their role in learning remains conceptually fragmented. Existing studies describe student interactions using heterogeneous and often incompatible categories, ranging from speculative use cases to fine-grained dialogue acts, making it difficult to compare findings across studies and to understand when and how LLM use supports learning. The problem is fundamentally one of classification: [[learning-theories]] that explain *why* interaction processes matter, such as the [[icap-framework]] and [[self-regulated-learning]], do not supply a consistent vocabulary for categorizing and comparing learner–LLM interaction. Research on [[knowledge-tracing]], [[scaffolding]], and instructional support in LLM-based environments remains underdeveloped, and LLM exchanges lack the predefined event structures (feedback events, error states) that anchor [[intelligent-tutoring]] analytics.

## Method and Variation

This rapid scoping review follows the PRISMA-ScR extension, searching Scopus (July 2025) and pragmatically screening the 200 highest-ranked of 326 records, yielding 33 studies and 46 distinct taxonomies or taxonomic levels. It examines how interaction types are defined and constructed, coding each categorization's data source, construction approach, and unit of analysis. The authors find substantial variation reflecting divergent theoretical commitments and research purposes: self-report studies tend to capture perceptions and intentions, whereas log-based studies capture observable conversational behavior, and the two are rarely integrated. Categories are frequently posited ad hoc or built from [[qualitative-research|qualitative]] coding, and the field is producing categories faster than it is integrating them, impeding cumulative knowledge building and systematic comparison.

## Four Taxonomy Types

The manual coding distinguishes four analytical layers of student–LLM use. **Type A** taxonomies classify the products or deliverables an interaction yields — summaries, outlines, generated code — but say nothing about how interaction unfolds. **Type B** taxonomies, the dominant group, classify broad functions or learning activities such as brainstorming, verification, and feedback seeking, yet may conflate goals, cognitive processes, and observable actions. **Type C** taxonomies capture turn-level conversational behavior — follow-up questions, clarification, acknowledgment — but are too granular to connect readily to task and learning goals. **Type D** taxonomies describe recurring strategies spanning episodes or tasks, such as task decomposition or iterative prompting, but abstract from how strategies are enacted within particular exchanges. Coder disagreements clustered precisely at the boundaries between these types, especially where studies mixed functional purposes with observable conversational behavior.

## The Interaction Episode and Six Classes

To integrate these divergent categorizations, the review adopts the *interaction episode* as the organizing unit: a goal-directed, temporally bounded sequence of observable exchange between a student and an LLM, occupying an intermediate level between isolated dialogue moves and broad strategies. The resulting hierarchical taxonomy groups episodes into six broad classes: (1) **knowledge acquisition** — seeking information, explanations, worked examples, and conceptual understanding; (2) **evaluative feedback** — submitting answers or artifacts for checking, critique, and revision guidance; (3) **strategic guidance** — requesting direction on how to learn, study, or organize work; (4) **dialogic inquiry** — advancing understanding through reasoning, hypothesis testing, and guided probing; (5) **artifact refinement** — improving a student-produced artifact through iterative editing and style refinement; and (6) **co-regulation** — reflecting on goals, progress, and strategies with LLM support, where regulation unfolds through observable exchange. This structure deliberately preserves distinctions among outputs, episodes, dialogue moves, and cross-episode strategies, focusing on enacted behavior rather than system functionality or outcomes.

## Toward a Shared Taxonomy

The lack of shared terminology motivates a convergent taxonomy of learning-oriented use. The authors situate these interaction categories within [[self-regulated-learning]] and [[learning-analytics]], supporting [[research-methods-aied]] for synthesizing evidence on [[ai-feedback-quality]] and the conditions under which student-LLM engagement produces learning rather than mere completion. They position the taxonomy as complementary to other pathways toward convergence: meta-theoretical frameworks distinguishing learning- versus performance-oriented engagement, application of established theories such as ICAP and Bloom, and new AI-specific theories like Agentivism. Integrating interaction taxonomies with [[learning-analytics]] and adaptive educational systems is identified as a promising direction for correlating instructional dialogue acts with rates of skill acquisition and [[learning-gains]].

## Implications

The review carries several implications for research and design. Methodologically, it argues that the field needs a shared unit of analysis capable of linking observable student–LLM interaction to established theories of learning, and that future work should integrate self-report and interaction-log evidence rather than letting the measurement approach dictate the categories. For [[assessment]] and [[feedback]], the taxonomy offers a vocabulary for describing learning-oriented (versus completion-oriented) use of generative AI, supporting clearer specification of [[formative-assessment]] and feedback designs. For practitioners and researchers in [[higher-ed]], it reframes questions about whether LLMs support learning into questions about *which interaction episodes* support which learning processes, enabling [[human-ai-collaboration]] and [[agency]] to be examined empirically rather than assumed. The taxonomy also lays groundwork for designing AI-mediated learning environments that recognize and respond to distinct interaction types, though its episode boundaries and coding reliability still require validation against an independent corpus of learner–LLM dialogues.

## Connected Concepts

- [[llm]]
- [[generative-ai]]
- [[student-experience]]
- [[learning-analytics]]
- [[meta-analysis-systematic-review]]
- [[higher-ed]]
- [[self-regulated-learning]]
- [[assessment]]
- [[ai-feedback-quality]]

## Connected Articles

- [[tracing-genai-literacy-interaction-patterns]]
- [[llm-sentiment-analysis-education-research]]
- [[student-rationalization-ai-writing]]
- [[students-llm-usage-critical-thinking]]
- [[learnmate2-llm-adaptive-learning]]
- [[ai-generated-feedback-higher-ed]]

## Citation

Borchers, C., Jansen, S., & Weidlich, J. (2026). [*Toward convergence in student-LLM interactions: A rapid scoping review and taxonomy for learning-oriented use*](https://osf.io/preprints/edarxiv/s74t8_v1/). EdArXiv preprint.
