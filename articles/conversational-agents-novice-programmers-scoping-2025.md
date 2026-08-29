---
title: "Exploring Conversational Agents for Novice Programmers: A Scoping Review"
created: "2026-08-22T04:52:33-04:00"
updated: "2026-08-22T04:52:33-04:00"
type: article
tags: [conversational-ai, cs-education, intelligent-tutoring, scaffolding, feedback, generative-ai, llm, equity-in-ai-education, multimodal]
research_method: [scoping review]
sources: ['raw/papers/conversational-agents-novice-programmers-scoping-2025.md']
confidence: high
---

> **Synthesis:** This PRISMA-ScR scoping review (23 studies, 2019–June 2024) maps [[conversational-ai|conversational agents]] for novice programmers, finding the field shifting from rule-based chatbots toward [[llm|LLM]]- and [[rag|RAG]]-based agents — yet only 4 of 23 studies ground design in [[scaffolding|learning theory]]. It flags a major [[equity-in-ai-education|inclusivity]] gap (17 of 23 prototypes English-only despite most research originating outside English-speaking countries) and weak, non-standardized evaluation, and offers design recommendations for [[cs-education|introductory programming education]].

## Key Findings

1. **23 studies, PRISMA-ScR.** The review screened 743 citations to select 23 studies on educational conversational agents for novice programmers (January 2019–June 2024), with research peaking in 2022.
2. **A technological shift toward LLMs and RAG.** Prototypes moved from rule-based/scripted systems (n=9) to LLM-based (n=8) and retrieval-augmented/hybrid (n=2) architectures — integrating open-source models, [[rag|retrieval-augmented generation]] to reduce [[hallucination-risk|hallucination]], and flexible pipelines that align technical sophistication with pedagogical adaptability.
3. **Sparse [[learning-theories|pedagogical grounding]].** Only 4 of 23 studies explicitly apply [[learning-theories|learning theories]] (Vygotskian dialogue, the 4C/ID model, [[scaffolding]] techniques, gamification). Without theory-informed design, these tools risk bypassing critical and [[computational-thinking|algorithmic thinking]] development — surfacing a persistent gap between CA development and [[pedagogy]].
4. **Weak and heterogeneous evaluation.** 15 of 23 studies used experimental designs, but most relied on subjective post-usage surveys/interviews; only three used objective pre/post-test designs. Quality was mostly Moderate (none of 17 quasi-experimental studies rated High), limiting causal claims.
5. **English-only dominance creates an inclusivity barrier.** Though most studies originated outside English-speaking countries, 17 of 23 prototypes were English-only; multilingual support (Pynar, Pyo, Profe Alex) remains rare, and only 2 of 23 studies addressed gender representation.

## Implications

For [[cs-education|introductory programming education]], this review shows conversational agents are increasingly viable as [[intelligent-tutoring|personalized tutors]] offering [[feedback]] and adaptive guidance, but their effectiveness hinges on grounding in [[scaffolding|pedagogical theory]] rather than technical novelty alone. The recommendation to integrate [[instructional-design|instructional-design principles]], [[cognitive-offloading|cognitive-load]] management, and formative feedback into modular, educator-customizable templates connects directly to the wiki's [[pedagogical-agent]] and [[conversational-ai]] threads.

The inclusivity findings reinforce that [[equity-in-ai-education|language and gender equity]] must be designed-in — multilingual support and gender-neutral, inclusive interaction — rather than treated as afterthoughts. The call for standardized evaluation frameworks (usability + long-term [[learning-gains|learning outcomes]] + cognitive engagement) and for interdisciplinary collaboration (education, CS, HCI, psychology) aligns with [[ai-ed-evaluation]] concerns across the wiki. The "vibe coding" collaborative pattern connects to [[gaide-vibe-coding-k12-teachers|vibe coding]] work.

## Connected Concepts

- [[conversational-ai]]
- [[pedagogical-agent]]
- [[intelligent-tutoring]]
- [[cs-education]]
- [[scaffolding]]
- [[feedback]]
- [[cognitive-offloading]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[generative-ai]]
- [[llm]]
- [[rag]]
- [[multimodal]]
- [[equity-in-ai-education]]
- [[ai-ed-evaluation]]

## Connected Articles

- [[gaide-vibe-coding-k12-teachers]] — Vibe coding framework for K-12 teachers
- [[conversational-ai-tutors-framework]] — Conversational AI tutors framework
- [[stanford-evidence-base-ai-k12-2026]] — Tutoring-specific vs general AI
- [[measuring-llm-tutors-teach-vs-solve]] — Measuring whether LLM tutors teach or solve
- [[conversational-ai-agents-umbrella-review-2026]] — Umbrella review of conversational AI agents in education

## Citation

Barzanji, C., & Loitsch, C. (2025). [*Exploring conversational agents for novice programmers: a scoping review*](https://doi.org/10.1007/s44163-025-00521-4). *Discover Artificial Intelligence*, 5, 271.
