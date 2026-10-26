---
title: "An AI Factory for Technology Education: An Agentic Pipeline with Closed Loop Audience Feedback"
created: "2026-10-26T09:30:00-04:00"
updated: "2026-10-26T09:30:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/ai-factory-technology-education-agentic-pipeline-2026.md']
confidence: medium
page_kind: [framework]
research_method: [system development]
discipline: [vocational education, information technology]
audience: [instructional designers, educational technology developers, instructors, faculty developers]
level: [adult learning]
pedagogy: [professional-training]
technology: [generative-ai, llm, prompt-engineering, edtech-platform]
assessment: []
methods: [design-based-research, ai-assisted-educational-research]
institutions: []
ethics: []
foundations: [agentic-ai, ai-education]
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-26"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Written guidance about technology tools ages within months, and most [[generative-ai|generative AI]] content systems still produce a document once and never check it against what an audience actually does with it. This paper describes an [[agentic-ai|agentic pipeline]], organized as a typed workflow graph, that treats instructional content production as a manufacturing process with explicit checkpoints: deterministic scripts, model steps bound to a fixed rubric, open-ended agent phases, and human approval gates. Production is split into a demand layer built from video and community sources and an authority layer built from official documentation, so that every published claim must trace back to a verified source. Over five months of continuous operation the deployed system published 26 documented guides at roughly 1.5 hours of operator time per week, and its [[feedback|feedback cycle]] turned four measurable engagement effects into binding rules for later runs, including a hook style that outperformed baseline by a factor of 1.83 in its first analysis window.

## Key Findings

1. **Production at steady state.** Over five months the pipeline published 26 documented multi-page guides at roughly 1.5 hours of operator time per week, with effort concentrated at the two human approval gates and at variation selection, scheduling, and keyword configuration.
2. **A typed workflow graph separates work by judgment required.** Four node classes — deterministic scripts, model steps bound to a fixed rubric, open-ended agent phases, and human approval gates — route each step to the cheapest class capable of performing it.
3. **Two-layer grounding keeps demand and authority apart.** A demand layer built from 11 configured YouTube channels and 8 subreddits shapes topic selection and register, while every published claim must trace back to an authority layer built from official documentation.
4. **The feedback loop rewrites generation rules.** Four measurable engagement effects became binding rules, and the loop retired an earlier narrative-hook default once a later analysis window found that class worst performing.
5. **Keyword gating is associated with higher engagement.** Posts carrying a keyword averaged 314.1 across 18 posts, against 182.5 for 2 posts without one, though the unequal group sizes make the result directional rather than conclusive.
6. **Every reported figure measures adoption, not learning.** Production volume, operator effort, engagement, automated delivery, and membership growth — 612 new members and 763 in total over the window — observe that readers request and receive guides, not whether they learn.
7. **Hook subject and topic fatigue are measurable.** Hooks opening on the reader averaged 340.5 across 8 posts and on the tool 317.0 across 8 posts, against 189.5 across 4 posts on the creator; recently repeated topic families averaged 230.4 against 346.2 for all others.

## The typed workflow graph

The pipeline is organized as a directed graph whose nodes fall into four classes by the kind of work they perform: deterministic scripts with fixed behavior, model steps that apply a fixed scoring rubric, open-ended agent phases that carry out research and writing, and gate nodes where a human operator approves or sends work back. An orchestrator process owns every step that touches the operator or an external system, while a single executor agent carries out the three open-ended phases — topic research, source-grounded outlining, and multi-artifact writing — with quality control embedded as mandatory checklists rather than a second model call. The split is not merely an implementation convenience: because scanning, scoring, and publishing run as fixed scripts, their behavior is deterministic and auditable across all 26 documented runs, and evaluation attention concentrates on the three phases where an agent actually exercises judgment. The architecture reserves full [[agentic-ai|agent invocations]] for the phases that require open-ended judgment, and its persistent executor memory turns per-run editorial correction into standing knowledge the system carries forward across [[edtech-platform|content production]] runs.

## Two-layer grounding and layered quality control

Research separates a demand layer from an authority layer. The demand layer — built from 11 configured YouTube channels scanned over a 7-day lookback and 8 subreddits scanned over a 30-day window — establishes what the audience wants and how it talks about it, shaping topic selection, coverage priorities, and register. The authority layer, built from official documentation, changelogs, and repository readme files, establishes what is actually true: every claim a video creator makes is checked against primary sources under an explicit rule never to trust a single source. Social sources are confined to the demand layer by rule, so video sources may never appear in a published sources list and any unverifiable URL is replaced with a placeholder. Generation is then constrained by four stacked quality layers, including a style filter built from 24 documented failure patterns of machine-generated prose and self-check lists of 4 items for guide content, 8 for distribution copy, and 4 for message templates. The design answers a specific version of the [[hallucination-risk|hallucination problem]] structurally rather than by prompt wording, and it is the clearest example in the paper of [[prompt-engineering|prompt design]] being subordinated to workflow structure.

## Production evidence over five months

The pipeline operated continuously from March to July 2026 and published 26 documented multi-page guides at roughly 1.5 hours of operator time per week, with effort concentrated at the outline and content approval gates, variation selection, post scheduling, and keyword configuration. The 26 count is a registry floor: the distribution board additionally records roughly 15 guide slots whose hub identifiers were never registered. Instrumentation captured 51 keyword automations covering the 26 guides, which registered 3,014 keyword comments and sent 2,803 automated messages; the community recorded 612 new members over the window and 763 in total, with 47 percent of new members attributed by the platform to this distribution channel. The content taxonomy classifies source material into three types — step-by-step tutorial, strategic framework, and comparison or persuasion guide — and roughly 20 of the 26 documented guides are technical tutorials. Every figure in this section is an adoption and demand measure: it observes that readers request and receive guides, not whether they complete them or can perform the procedures the guides teach. That scope is the paper's own stated boundary, and it is the reason the [[scaffolding|scaffolded]] self-sufficiency criterion — a reader must be able to implement what the guide teaches from the guide alone — is not backed by any assessment evidence.

## What the feedback loop actually changed

Post-level telemetry is collected by a scraper and scored as reactions plus 3 times comments plus 2 times shares. The first analysis window, about a month with 16 posts, had a mean score of 447.5 and a median of 349; the second window, roughly two months with 20 posts, had a mean of 300.9 and a median of 263, a 33 percent decline in mean score. Four findings became binding rules for later runs. Keyword gating was associated with higher engagement, with posts carrying a keyword averaging 314.1 across 18 posts against 182.5 for 2 posts without one — directional, given the unequal group sizes. A contrarian hook style performed at 1.83 times baseline in the first cycle and remained the strongest class in the second window at a mean of 387.5, roughly half its earlier mean of 817. Hooks opening on the reader averaged 340.5 across 8 posts, on the tool 317.0 across 8 posts, and on the creator 189.5 across 4 posts. Topics in a recently repeated family averaged 230.4 against 346.2 for all others, and pure news announcement posts averaged 154.8, with the single worst post in the window scoring 6. The loop also retires its own rules, recording the retirement so that generation cannot silently revert to a withdrawn default. This closed-loop adaptation, read alongside the paper's correspondence with the [[learning-design|ADDIE model]], is the contribution most relevant to [[design-based-research|design research]] on [[ai-assisted-educational-research|AI-supported production systems]].

## What this means for practice

- **Instructional designers.** Separate deterministic steps from steps requiring judgment and route each to the cheapest node class capable of it, so evaluation effort lands on the phases where judgment actually occurs.
- **Educational technology developers.** Close the loop from audience telemetry back into generation rules, but keep a human operator with override authority over every rule the loop produces.
- **Instructors.** Treat popularity and community demand as evidence for topic selection and register, never as a source for a factual claim, and require every published claim to trace to an authoritative source.
- **Faculty developers.** Adopt a self-sufficiency criterion for instructional material: a reader should be able to implement what the guide teaches from the guide alone, with no unexplained placeholders and no invented tools or capabilities.

## Limitations

- Every engagement figure is an adoption and demand measure; none observes whether a reader completed a guide or can perform the procedure it teaches, so the pipeline's effect on learning outcomes remains an open question rather than a measured one.
- The operator effort figures are a [[self-report-measures|self-report]] from the person running the pipeline rather than an instrumented time study; a later deployment of the same pipeline core in October 2026, using Sonnet 5.5 over six production runs, measured 1.07 to 1.61 USD per guide (mean 1.35 USD, of which about 1.00 USD was model inference and 0.35 USD source retrieval) and roughly 10 minutes of operator time per guide, against about 30 minutes implied by the self-report — but the figures are not directly comparable.
- Two confounds remain unresolved with the current sample: the June engagement spike cannot be separated into topic and timing effects, and the decline in mean engagement between the first and second analysis windows may reflect changes in platform reach, audience fatigue, or topic selection.
- The pipeline does not measure factual error rates directly and treats grounding as a design property rather than a validated outcome, and no formal exercises, quizzes, or assessments appear in the current templates.

## Citation

Hernandez, J., Amado-Salvatierra, H. R., & Hernandez Rizzardini, R. (2026). [An AI Factory for Technology Education: An Agentic Pipeline with Closed Loop Audience Feedback](https://arxiv.org/abs/2610.31875). *arXiv preprint*.
