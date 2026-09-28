---
title: "Generative AI in higher education: A systematic review of empirical uses, outcomes, and risks"
created: "2026-09-28T05:40:00-04:00"
updated: "2026-09-28T05:40:00-04:00"
type: article
sources: ['raw/papers/generative-ai-higher-education-systematic-review-2026.md']
confidence: high
published: "2026"
page_kind: [synthesis]
research_method: [literature review]
audience: [instructors, administrators, researchers]
foundations: [ai-literacy, ai-education]
technology: [generative-ai, llm, conversational-ai]
assessment: [assessment, feedback]
methods: [meta-analysis-systematic-review, qualitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-28"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Synthesizing 103 peer-reviewed empirical studies of [[generative-ai]] in [[higher-ed]] published between January 2023 and October 2025, Hawi and Samaha conclude that reported benefits depended less on the tool itself than on the surrounding pedagogy, assessment design, and verification practices. Their PRISMA 2020 review, searching four international databases, converged on seven instructional categories and a four-level outcome typology in which 56% of studies fell into a single conditional pattern: GenAI raised confidence and motivation without a corresponding gain in durable competence. The most stable distinction across disciplines is scaffolding versus substitution. [[learning-gains]] appear when GenAI surfaces and strengthens student thinking through attempts, explanations, critique, and verification; they erode when it produces complete solutions in the student's place.

## Key Findings

- **Seven categories describe how GenAI is used.** Content analysis converged on general learning support; communication, writing, and language learning; [[assessment]], [[feedback]], and grading workflows; pedagogical design and instructor adoption; STEM, analytics, and problem solving; programming and computer science learning; and health and professional education.
- **One typology covers four outcome patterns.** Studies were coded as strongly positive, positive but conditional with tradeoffs, neutral or modest, or problematic with elevated risk, with independent dual coding and Cohen's κ = 0.781.
- **Conditional beats definitive.** With 56% of studies in the positive but conditional pattern, the review's reading is that GenAI helps only under specific conditions — clear scaffolding, task alignment, and strong verification — so many gains may be fragile.
- **Strong outcomes required structure, not access.** High-impact implementations demanded an initial learner attempt followed by structured hints, feedback, or guided questioning, with convincing gains reflecting retention, transfer, or stable skill growth. A custom GPT-4 tutor in an authentic physics course produced higher learning gains in less time than in-class active learning.
- **Grades frequently did not move.** In a large controlled programming course, permitting ChatGPT did not change lab scores, midterm results, or final grades, because the course was redesigned with hard-to-prompt tasks, in-class work without ChatGPT, oral defenses, and paper exams — which the authors read as successful risk-managed integration, not failure.
- **Problem cases cluster around integrity and dependency.** GPT-4 submissions earned grades similar to typical student work, and staff reported only about half of the suspected AI cases, so detection alone could not estimate the extent of AI use. Higher GenAI dependency was linked to underperformance through patterns consistent with erosion in critical thinking, writing, and content learning, and one case study tied dependency to lower GPA.
- **Use mattered more than frequency.** Greater use of [[llm]] tools for code generation and debugging was associated with lower final grades, while explanation-seeking use showed weaker or non-significant links — a [[cognitive-offloading]] pattern that polished outputs can hide.

## Method and Evidence

The review followed PRISMA 2020, used the SPIDER framework to operationalize eligibility, and developed its protocol a priori without prospective registration, adding an OSF record only retrospectively. Searches ran across PubMed, EBSCO Education Source, Web of Science Core Collection, and Scopus for English-language empirical studies published between January 1, 2023, and October 31, 2025, with the final search completed between November 1 and November 21, 2025. Only peer-reviewed primary studies in Q1 or Q2 journals according to Scimago Journal Rank were eligible.

After deduplication in EPPI-Reviewer, 2,351 unique records remained. Automated filters removed 558; title and abstract screening excluded 1,605 — 520 outside the Q1/Q2 criterion and 1,085 non-empirical — leaving 188 studies for formal screening. A further 73 were dropped for insufficient thematic relevance, 4 of the 115 sought could not be retrieved, and 8 of the 111 full texts assessed failed on unclear methodology or mismatch with the review question, leaving a corpus of 103. The two authors screened independently, jointly reviewed 25 studies first to calibrate the criteria, and resolved 11 disagreements by discussion, reaching κ = 0.811.

Because designs, interventions, comparators, and measures were heterogeneous, no statistical meta-analysis was performed. The authors used content analysis with constant comparison, an MMAT-informed appraisal that stopped short of full scoring criteria, and narrative synthesis, running no sensitivity analyses, funnel plots, or clustering. Prior [[meta-analysis-systematic-review]] work fell outside the corpus as non-primary research.

## What this means for practice

- **Design for disciplined autonomy.** GenAI should increase learners' capacity to perform without it, and permissive policies should be paired with task designs that discourage substitution and reward verification and process transparency.
- **Treat assessment as the governance lever.** [[academic-integrity]] solutions built on detection are brittle; redesign is more structurally robust. Designs such as GenAI-free exams, oral defenses, in-lab extensions, localized tasks, and explicit justification requirements tie grades to internalized reasoning, and studies in programming and health education tie safer use to [[ai-literacy]] and mandatory verification against trusted sources.
- **Keep a human in the loop on feedback.** Automated grading can match instructor ratings yet scores more generously. Hybrid approaches performed best, with teachers reviewing or adjusting AI comments rather than relying on fully automated grading.
- **Look past grades to process.** Grades are insufficient proxies for whether GenAI strengthens or hollows out core practice; process data, interaction logs, and code quality metrics reveal what scores miss.
- **Watch the equity dimension.** Rather than leveling performance, GenAI integrations may widen the gap between cohorts: higher-performing students tend to use the tool for disciplined autonomy, while lower-performing students are more susceptible to substitution.

## Limitations

- **Registration and scope.** The protocol was not prospectively registered; the OSF record was retrospective. Restricting eligibility to English-language articles in Scimago Q1 or Q2 journals was an author-imposed delimitation that may have introduced publication-selection bias and excluded work in lower-ranked, newer, regional, or interdisciplinary journals; the findings apply to the included corpus rather than the full population of GenAI higher education studies.
- **Search recall.** The strategy relied primarily on free-text GenAI and higher-education terms; controlled-vocabulary terms and broader educational descriptors were deliberately not added retrospectively, which may have reduced recall even though brand- and model-specific terms were retained.
- **Heterogeneity, appraisal, and a moving target.** Included studies varied widely in discipline, intervention design, comparator structure, and outcome measurement, ruling out pooled quantitative synthesis. Many also used short intervention periods, single-course or single-institution samples, or self-report measures, and reporting was stronger for tool and context description than for longer-term learning outcomes, transfer effects, or equity consequences. Terminology and indexing practices also keep shifting, so a review bounded at October 2025 may underrepresent later work.

## Citation

Hawi, N. S., & Samaha, M. (2026). [*Generative AI in higher education: A systematic review of empirical uses, outcomes, and risks*](https://doi.org/10.1016/j.ijedro.2026.100584). *International Journal of Educational Research Open*, 11, 100584.