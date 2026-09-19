---
title: "Exploring Conversational Agents for Novice Programmers: A Scoping Review"
created: "2026-08-22T04:52:33-04:00"
updated: "2026-09-19T09:24:40-04:00"
type: article
pedagogy: [scaffolding]
technology: [conversational-ai, generative-ai, intelligent-tutoring, llm, multimodal]
assessment: [feedback]
ethics: [equity-in-ai-education]
research_method: [systematic review]
discipline: [cs education]
sources: ['raw/papers/conversational-agents-novice-programmers-scoping-2025.md']
confidence: high
audience: [educators, instructional designers, software developers]
level: [higher ed]
page_kind: [synthesis]
---

> **Synthesis:** This PRISMA-ScR [[meta-analysis-systematic-review|scoping review]] (23 studies, 2019–June 2024) maps [[conversational-ai|conversational agents]] for novice programmers, finding the field shifting from rule-based chatbots toward [[llm|LLM]]- and [[rag|RAG]]-based agents — yet only 4 of 23 studies ground design in [[scaffolding|learning theory]]. It flags a major [[equity-in-ai-education|inclusivity]] gap (17 of 23 prototypes English-only despite most [[research-methods-aied|research]] originating outside English-speaking countries) and weak, non-standardized evaluation, and offers design recommendations for [[cs-education|introductory programming education]].

## Key Findings

1. **23 studies, PRISMA-ScR.** The review screened 743 citations to select 23 studies on educational conversational agents for novice programmers (January 2019–June 2024), with research peaking in 2022.
2. **A technological shift toward LLMs and RAG.** Prototypes moved from rule-based/scripted systems (n=9) to LLM-based (n=8) and retrieval-augmented/hybrid (n=2) architectures — integrating [[open-source]] models, [[rag|retrieval-augmented generation]] to reduce [[hallucination-risk|hallucination]], and flexible pipelines that align technical sophistication with pedagogical adaptability.
3. **Sparse [[learning-theories|pedagogical grounding]].** Only 4 of 23 studies explicitly apply [[learning-theories|learning theories]] (Vygotskian dialogue, the 4C/ID model, [[scaffolding]] techniques, [[game-based-learning|gamification]]). Without theory-informed design, these tools risk bypassing critical and [[computational-thinking|algorithmic thinking]] development — surfacing a persistent gap between CA development and [[pedagogy]].
4. **Weak and heterogeneous evaluation.** 15 of 23 studies used experimental designs, but most relied on subjective post-usage surveys/interviews; only three used objective pre/post-test designs. Quality was mostly Moderate (none of 17 quasi-experimental studies rated High), limiting causal claims.
5. **English-only dominance creates an inclusivity barrier.** Though most studies originated outside English-speaking countries, 17 of 23 prototypes were English-only; [[multilingual-learning|multilingual]] support (Pynar, Pyo, Profe Alex) remains rare, and only 2 of 23 studies addressed gender representation.

## What this means for practice

- **Designers.** Ground the agent in [[scaffolding|learning theory]] before building features: only 4 of the 23 reviewed studies applied theories such as Vygotskian dialogue, the 4C/ID model, or gamification, and the review attributes bypassed critical and algorithmic thinking to theory-free design.
- **Designers.** Ship modular, educator-customizable templates that build in [[scaffolding]], [[cognitive-offloading|cognitive-load]] management, and [[feedback|formative feedback]], rather than hard-coding a fixed pedagogical script.
- **Instructors.** Treat evaluation as part of adoption, not an add-on: 15 of 23 studies used experimental designs but most measured outcomes with post-usage surveys and only three used objective pre/post-tests, so run your own pre/post check on [[learning-gains|learning gains]] instead of relying on satisfaction ratings.
- **Designers.** Design language and gender inclusivity in from the start: 17 of 23 prototypes were English-only despite most research originating outside English-speaking countries, and only 2 of 23 studies addressed gender representation.
- **Designers.** Plan for [[multilingual-learning|multilingual]] output that keeps the programming language consistent while explaining concepts in the learner's native language, following existing examples such as Pyo and Pynar.

## Limitations

- The review covers 23 studies from 743 screened citations (January 2019–June 2024) and is restricted to English-language, peer-reviewed publications, which the authors flag as potential language and publication bias.
- Screening and data extraction were performed by a single researcher (with both authors discussing decisions), so selection and coding error were not independently controlled.
- The primary studies' evidence is weak: most of the 17 quasi-experimental studies were rated Moderate and none High, and only 3 of 23 used objective pre/post-test designs, so the review's causal claims about learning are limited.
- Publication characteristics skew toward a few countries (US, South Africa, Taiwan) and research peaked in 2022, so the synthesis may not represent current LLM-era practice; it also excludes commercial products and code generators by design.

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
