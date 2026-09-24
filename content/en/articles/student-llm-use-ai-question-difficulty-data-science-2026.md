---
title: "Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses"
created: "2026-09-24T09:11:52-04:00"
updated: "2026-09-24T09:11:52-04:00"
type: article
published: "2026-09-22"
sources: ['raw/papers/student-llm-use-ai-question-difficulty-data-science-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [survey, secondary analysis]
discipline: [cs education]
level: [undergraduate, graduate]
audience: [instructors, researchers, assessment designers]
foundations: [cognitive-offloading, ai-literacy]
pedagogy: [retrieval-spacing-interleaving, student-ai-interaction, student-engagement]
technology: [llm, generative-ai, knowledge-graph, adaptive-learning]
assessment: [assessment-validity, automated-question-generation, educational-measurement, formative-assessment]
methods: [quantitative-research]
institutions: []
ethics: []
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A 10-week classroom study at Drexel University paired four student surveys with a construct-validity audit of LLM-generated retrieval practice. Across three data science courses students used [[llm|LLMs]] heavily for debugging and concept questions and reported high satisfaction, yet perceived deep-learning benefit declined. The audit produced the sharper result: the model's Easy, Medium, and Hard labels tracked the Bloom's levels generated alongside them (ρ = 0.90) but were unrelated to how students performed (ρ = 0.06). LLM-assigned [[assessment-validity|difficulty labels]] describe question formatting, not difficulty, so [[automated-question-generation|generated item metadata]] needs calibration against student response data before instructors trust it.

## Key Findings
1. **Labels track Bloom, not students.** Over 378 authored questions the LLM's difficulty rank correlated with its co-generated Bloom's Taxonomy level at Spearman ρ = 0.90, but with empirical item difficulty at only ρ = 0.06.
2. **Difficulty is a packaging artifact.** Mean stem length rose from 15.9 to 22.1 to 30.2 words across Easy, Medium, and Hard, and the share of stems containing a digit from 5.6% to 11.9% to 26.2%.
3. **Longer options were easier.** Mean option length correlated negatively with empirical difficulty (ρ = −0.18), the opposite of the model's apparent assumption that more text signals a harder question.
4. **Usage rose through the term.** By the final wave debugging and understanding concepts were near universal (100%, 93%); baseline respondents named [[generative-ai|ChatGPT]] (73%) and Claude (68%), across 94 survey responses.
5. **Satisfaction high, depth in doubt.** Final-survey endorsement of improved performance was 4.57 and time saved 4.29, but over-reliance reached 3.43 and learning more without AI sat at the neutral midpoint (3.07).
6. **The practice items were easy.** Roughly 70% of deployed items were answered correctly by every student (p = 1.0), restricting variance across 311 deployed questions and 7,888 responses from 54 students.

## Student LLM use in data science courses

Four anonymous Qualtrics surveys ran over a 10-week quarter in three Drexel data science courses — an intermediate undergraduate [[machine-learning|machine learning]] course, an upper-division big data and cloud computing course, and a graduate applied machine learning course — yielding 94 responses. Baseline adoption was high: ChatGPT and Claude were named by 73% and 68% of the 37 students answering the tool item, and prior use centered on debugging (75%) and understanding concepts (67%). Students endorsed efficiency (improved performance 4.57, time saved 4.29), but the picture on depth was less comfortable. The perceived [[learning-gains|learning]] effect fell from 0.67 in Week 3 to 0.47 at the end of the term, and the group split at the neutral midpoint (3.07) on learning more without AI. Usage frequency and self-reported over-reliance were highest in Course-BD.

## What the LLM treats as "difficulty"

Questions were generated in six-item sets (two Easy, two Medium, two Hard per lecture), alternating between GPT-5.4-mini and Gemini-3.1-flash-lite, with 378 items authored across the term. The difficulty label behaved as a proxy for surface form. Mean stem length rose monotonically from 15.9 to 22.1 to 30.2 words across the levels, mean option length from 6.7 to 8.5 to 12.6 words, and the share of stems containing a digit from 5.6% to 11.9% to 26.2%. The label also rose in lockstep with the Bloom level the same model assigned, reaching Spearman ρ = 0.90. Because difficulty and Bloom labels were produced together in one generation pass, the authors treat this alignment as a labeling convention rather than evidence about how hard a question is. LaTeX formatting, code snippets, negation words, and numeric-option counts did not separate the levels.

## The construct-validity gap

The decisive analysis moved to the 311 deployed items and 7,888 student responses from 54 participants across 52 quizzes. Using the difficulty index (1 − p) from Classical [[educational-measurement|Test Theory]], nothing the model used to sort its own questions predicted performance: the LLM difficulty label correlated with empirical difficulty at ρ = 0.06 and the assigned Bloom level at ρ = 0.02, while option length ran backwards (ρ = −0.18). One structural condition matters: about 70% of items drew a perfect correct rate, so variance was compressed and the corpus was empirically easy. The authors frame the result as a construct-validity failure rather than a calibration error: the labels measure text length and model-selected cognitive tags, not demand on [[prior-knowledge|prior knowledge]]. Realized difficulty depends on phrasing, terminology, and what students already know.

## Toward calibrated retrieval practice

The recommended path is empirical calibration: estimate difficulty and discrimination from student responses, beginning with Classical Test Theory and moving to [[item-response-theory|item response theory]] as response volume grows, then let a system select, retire, or update items to hit a target profile. The authors position [[knowledge-graph|knowledge graphs]] built from lecture content as the generation-side complement. The classroom case for generation is not in doubt: low-stakes quizzing every 15 to 20 minutes proved practical and was well received, and prior work supports [[retrieval-spacing-interleaving|retrieval practice]] for retention. What the study undercuts is treating generated difficulty metadata as a measurement instrument on its own.

## What this means for practice

- **Treat difficulty labels as a drafting aid, not a measurement.** Use them to triage a question bank quickly, then confirm difficulty against student responses before relying on them.
- **Calibrate with p-values you can compute.** The difficulty index (1 − p) is available within a week in any quiz tool; track it per item rather than trusting form cues such as stem length.
- **Ask about depth, not only satisfaction.** Time saved (4.29) can coexist with flat or falling [[self-report-measures|perceived learning]]; survey both when [[ai-ed-evaluation|evaluating AI]] in a course.
- **Separate co-generated tags before auditing.** Bloom levels arriving in the same pass as difficulty labels inflate apparent agreement; score them independently.

## Limitations

- Survey samples were small and analyzed descriptively (94 responses across four waves, some course cells in the single digits), and anonymity prevented tracking individual change over time.
- The study ran at one institution over one 10-week quarter with two instructors, and classroom retrieval practice was managed by a single instructor.
- About 70% of deployed items were answered correctly by everyone, restricting score variance and limiting what item statistics can show.

## Connected Concepts

- [[assessment-validity]]
- [[automated-question-generation]]
- [[educational-measurement]]
- [[formative-assessment]]
- [[item-response-theory]]
- [[retrieval-spacing-interleaving]]
- [[student-ai-interaction]]
- [[cognitive-offloading]]
- [[llm]]
- [[prior-knowledge]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[psychometrically-aware-ai]]
- [[self-report-measures]]
- [[trust-calibration]]

## Connected Articles

- [[razavi-powers-item-difficulty-llm-2026]] — Estimating Item Difficulty Using Large Language Models and Tree-Based Machine Learning Algorithms
- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the Quality of AI-Generated Exams: A Large-Scale Field Study
- [[multimodal-item-parameter-estimation-2026]] — Multimodal Item Parameter Estimation using Simulated Response Probabilities
- [[bayesian-consensus-irt-item-banks-2026]] — Bayesian Consensus Calibration of Continuously Evolving IRT Item Banks
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: A Process-Based Framework for Fine-Grained Math Item Quality Assessment
- [[slidesqaqa-pedagogical-question-generation]] — Slide Deck Q&A Quality Assurance App: A Multi-Stage Pipeline for Pedagogical Question Generation
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[automated-formative-assessments-a-level-sciences]] — The Effect of High-Frequency, Automatically-marked Formative Assessments on Student Outcomes in A-Level Sciences

## Citation

Yuan An & Lei Wang (2026). [*Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses*](https://arxiv.org/abs/2609.27063). arXiv preprint.