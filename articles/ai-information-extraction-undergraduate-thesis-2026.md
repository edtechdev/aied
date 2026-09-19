---
title: "From Literature to Research-Based Learning: An AI-Powered Information Extraction System to Enhance Undergraduate Thesis Completion"
created: "2026-09-01T12:00:00-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
sources: ["raw/papers/ai-information-extraction-undergraduate-thesis-2026.md"]
pedagogy: [inquiry-based-learning, self-directed-learning]
technology: [generative-ai, knowledge-graph]
confidence: medium
research_method: [system development, mixed methods, user study]
discipline: [stem education]
audience: [educators, instructional designers]
level: [higher ed]
page_kind: [framework]
---

> **Synthesis:** An and colleagues design and evaluate an AI-powered information extraction system that converts unstructured research publications into structured, traceable, and comparable datasets to support literature-driven comparison and [[stem-education|undergraduate thesis]] completion in [[higher-ed]]. Grounded in [[inquiry-based-learning]], [[cognitive-offloading|cognitive load]] theory, and digital [[scaffolding]], the system is positioned as an epistemic scaffold that lets students inspect evidence–claim relationships through source traceability and structured comparison while reducing low-level data-handling demands. A [[mixed-methods-research|mixed-methods]] pilot with 20 undergraduates and four supervisors suggests the system shifts students from isolated reading toward cross-study comparison and evidence-based justification, with implications for [[self-directed-learning]], [[knowledge-graph|structured knowledge organization]], and the responsible use of [[generative-ai|generative AI]] as a learning scaffold rather than a shortcut.

## Key Findings

- **High extraction coverage.** Across the 80 uploaded documents, over 90% of the targeted experimental parameters and performance entries were successfully extracted and standardized (system log analysis).
- **Reduced [[meta-analysis-systematic-review|literature review]] time.** Students' self-reported literature review time decreased by approximately 65%.
- **Improved variable identification.** Among the 16 junior students, the proportion able to identify at least three influential variables in experimental designs rose from 37.5% (6/16) to 87.5% (14/16) in a pre/post variable-identification prompt.
- **Positive student perceptions.** Over 90% of students agreed the system improved the efficiency and clarity of their literature review; ~85% said the structured tables and visual filters helped identify key experimental variables and performance trends; more than 80% found the interface intuitive.
- **Reduced supervisory burden.** All four supervisors reported a reduced need for repeated instruction and improved transparency of students' research logic, and 75% said the platform facilitated differentiated guidance by letting students present filtered data before consultation.
- **Shift toward evidence-based reasoning.** Students moved from passive reading toward cross-study comparison, trend-spotting, and [[research-methods-aied|methodological]] evaluation — behaviors associated with higher-order analysis and evaluation and growth in epistemic cognition within an [[inquiry-based-learning]] frame.
- **Over-reliance caution.** Interviews surfaced that normalized tables and comparison views can create a sense of completeness, tempting students to rely on extracted entries without checking boundary conditions; supervisors stressed treating the system as a structuring/indexing tool requiring explicit verification routines.

## What this means for practice

- **Instructors.** Embed the extraction system in source-verification routines rather than releasing it as an answer source: normalized tables and comparison views can create a sense of completeness, so require students to check boundary conditions and verify the entries they intend to cite.
- **Instructors.** Use the traceable intermediate artifacts — extracted variables, comparison tables, source links, and workflow traces — to shift supervision from explaining basics toward [[formative-assessment|formative]], differentiated, data-informed guidance; all four supervisors reported less repeated instruction and 75% reported improved differentiated guidance.
- **Instructors.** Add scaffold-fading, reflective prompts, and check-the-source practice while the system offloads search, transcription, and unit standardization, so that epistemic [[agency]] survives the efficiency gain of roughly 65% self-reported [[meta-analysis-systematic-review|literature review]] time saved.
- **Designers.** Recalibrate entity templates, field definitions, and domain ontologies, and validate them, before porting the pipeline to another [[higher-ed|STEM domain]] where parameter-based comparison is central.
- **Researchers.** Treat the pilot's quantitative results as descriptive process evidence rather than effects: with 20 undergraduates the study deliberately ran no inferential hypothesis testing.

## Limitations

- **Small, single-institution pilot with purposive recruitment:** 20 undergraduates (16 junior, 4 senior) from four schools and four supervisors at one university, with quantitative results interpreted as descriptive and mechanism-oriented rather than statistically generalizable.
- **Single-domain empirical validation:** the pilot ran in materials-science thesis work, and full cross-domain porting had not been completed at the time of the study.
- **Verification behavior was not quantified:** although check-the-source was emphasized in onboarding and supported by traceability links, the study did not log how often students used the "Confirm" link or how many records each student cross-checked.
- **Self-report and post-task perception data dominate:** the roughly 65% reduction in review time is self-reported, most perception measures were collected post-task, and no assessment of unaided manual data-extraction skill tested whether the workflow transfers without the system.

## Connected Concepts

- [[inquiry-based-learning]]
- [[stem-education]]
- [[higher-ed]]
- [[self-directed-learning]]
- [[knowledge-graph]]
- [[generative-ai]]

## Connected Articles

- [[self-directed-growth-generative-ai-learning-analytics]] — a conceptual framework treating GenAI as a non-prescriptive scaffold for self-directed growth, complementing this study's empirical view of AI as an epistemic scaffold
- [[dynamic-skill-matching-capstone-teams]] — LLM-driven skill extraction and team formation in STEM capstone courses, another AI-for-higher-ed workflow
- [[embodied-inquiry-ai-facilitator-physics-2026]] — where a language-based AI can stand within inquiry-based STEM learning, addressing a complementary boundary of AI as facilitator

## Citation

[From literature to research-based learning: An AI-powered information extraction system to enhance undergraduate thesis completion](https://www.sciencedirect.com/science/article/pii/S2666920X26000536) — An, R., Zhu, W., Zhao, Q., Laaksonen, A., & Lan, S. (2026). *Computers and Education: Artificial Intelligence*, 10, 100591.
