---
title: "Reimagining feedback through generative AI in engineering education"
created: "2026-08-10T17:08:30-04:00"
updated: "2026-09-19T10:43:18-04:00"
type: article
foundations: [curriculum-design]
pedagogy: [self-regulated-learning]
technology: [generative-ai]
assessment: [ai-feedback-quality, automated-essay-scoring, formative-assessment]
research_method: [experiment]
level: [higher ed]
sources: ['raw/papers/10.1016_j.caeai.2026.100574.md']
confidence: high
discipline: [cs education, engineering education]
audience: [instructors, assessment designers]
---

> **Synthesis:** Pecuchova, Benko, and Drlik (2026) investigate the capacity of a large language model (GPTo1) to generate formative feedback for student-created UML diagrams in a university software engineering course. Across two cohorts (N = 262), AI-generated, teacher-generated, and no-feedback conditions were compared, analyzing student perceptions, [[learning-gains|learning outcomes]], and grading reliability. Results show that while students rated [[generative-ai|GenAI]] feedback as beneficial and often comparable to human comments, teacher feedback remained more effective in supporting performance gains, especially in complex modeling tasks. Linguistic analysis revealed GenAI feedback was more repetitive and less pedagogically rich than human feedback.

## Key Findings

- Students rated both feedback sources highly (GenAI mean = 4.09; teacher mean = 4.38 on a 5-point scale) and perceived GenAI feedback as beneficial; for some assignments (requirements specification, activity diagram) they found no significant difference between GenAI and teacher feedback, while teacher feedback was rated higher for use-case and class diagrams.
- **Teacher feedback was more effective for learning**: students receiving teacher feedback gained on average 0.87 points more than those receiving GenAI feedback on score gain, and scored significantly higher on the automatically evaluated theoretical quizzes (p < 0.01) — though feedback source did not significantly influence final theoretical exam scores.
- Feedback source significantly influenced performance on the **visual modeling tasks** of the final exam (p < 0.05), where teacher feedback led to better outcomes — teacher feedback was more effective in helping students master abstract modeling tasks.
- **Perceived feedback quality** (not source alone) significantly predicted final exam performance; a mediation analysis suggested feedback source influenced perceived quality (β = −0.28, marginally non-significant p = 0.056).
- **GenAI feedback was more repetitive and less linguistically rich**: teacher feedback had higher TTR, Hapax, and Entropy values. GenAI feedback skewed heavily toward diagnostic feedback (66% vs. teacher's 48%), was predominantly positive/neutral in early tasks but overly punitive in complex visual modeling, and had reduced capacity for nuance with partial or ambiguous diagrammatic content.
- The findings argue for **hybrid feedback architectures** where GenAI operates as a first-pass evaluator and instructors retain formative oversight, given GenAI's "brittle" [[pedagogy|pedagogical]] judgment in ambiguity, abstraction, and design variation.

## Study Design & Method

This empirical study was conducted across two cohorts (N = 262 students) in a university software engineering course at Constantine the Philosopher University in Nitra, Slovakia, over two academic years (2023/2024, 2024/2025). Students completed four UML modeling assignments (requirements specification, use case diagram, class diagram, activity diagram) and six theoretical quizzes, followed by a final exam with three UML diagram tasks. A structured dataset of over 1800 unique student submissions with 68 variables per student was compiled. The GPTo1 model evaluated diagrams using nine prompt configurations (3 per diagram type), and results were compared with two independent human graders. Feedback was categorized by a human evaluator into four types (diagnostic, design, [[metacognition|metacognitive]], [[motivation|motivational]]), analyzed via two-way ANOVA, Mann-Whitney U tests, chi-square tests, Spearman correlation, and mediation analysis. A custom Slovak lexicon-based sentiment analysis and QuitaUp linguistic metrics (TTR, Hapax, Entropy) were used to assess feedback tone and richness. Students rated feedback on a 5-point Likert scale without knowing the source.

## What this means for practice

- **Instructors.** Reserve teacher feedback for abstract and ambiguous modeling work: students receiving teacher feedback gained on average 0.87 points more than those receiving GenAI feedback, and feedback source significantly influenced performance on the visual modeling tasks of the final exam (p < 0.05).
- **Instructors.** Deploy GenAI as a first-pass evaluator on well-specified tasks — students found no significant difference between the two sources for requirements specification and activity diagrams — while keeping formative oversight on partial or ambiguous diagrams, where GenAI feedback turned overly punitive.
- **Assessment designers.** Judge a feedback system by perceived quality rather than by its source: perceived feedback quality significantly predicted final exam performance, while the mediation path from source through perceived quality was only marginal (β = −0.28, p = 0.056).
- **Assessment designers.** Expect source effects to be outcome-specific, and design the assessment mix accordingly: teacher feedback raised performance on the automatically evaluated quizzes (p < 0.01) but feedback source did not significantly influence final theoretical exam scores.
- **Assessment designers.** Audit generated feedback for redundancy and pedagogical range before scaling it: GenAI feedback was more repetitive and less linguistically rich than teacher feedback (lower TTR, Hapax and Entropy), skewed toward diagnostic comments (66%, against the teacher's 48%), and supplied motivational comments only 4% of the time.

## Limitations

The study is context-specific (a Slovak university software engineering course; UML diagram tasks in a [[discipline-specific-aied|domain-specific]] language), and the sentiment analysis relied on a custom heuristic Slovak lexicon rather than validated general-purpose tools. The dataset included a high proportion of international students, but nationality was not used in analysis. The no-feedback control condition's effects and long-term retention are not fully separated from the main comparisons. As a single-institution study, generalizability to other disciplines, languages, and feedback contexts requires replication.

## Connected Concepts

- [[generative-ai]]
- [[formative-assessment]]
- [[ai-feedback-quality]]
- [[higher-ed]]
- [[curriculum-design]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[automated-essay-scoring]]

## Connected Articles

- [[genai-teacher-feedback-comparison]] — Comparing Generative AI and Teacher Feedback
- [[multimodal-ai-feedback-learning]] — LLM-Based Multimodal AI Feedback Produces Equivalent Learning
- [[becerra-aicofe-feedback-2026]] — AICoFE: AI-Powered Feedback System
- [[pairr-ai-peer-review-2025]] — Peer and AI Review + Reflection (PAIRR)
- [[ai-internal-feedback-evaluative-judgments]] — Unravelling Undergraduates' Development of Evaluative Judgments
- [[rail-ed-genai-literacy-teacher-education]] — AI Literacy Training for Teachers
- [[liang-genai-systematic-review-human-ai-2026]] — GenAI Systematic Review: Human-AI
- [[mind-the-trust-gap-teacher-student-views-control-agency-k12-classroom-ai]] — Mind the Trust Gap

## Citation

Pecuchova, J., Benko, L., & Drlik, M. (2026). [*Reimagining feedback through generative AI in engineering education*](https://doi.org/10.1016/j.caeai.2026.100574). *Computers and Education: Artificial Intelligence*.
