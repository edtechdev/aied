---
title: "The Socratic Challenger: a structured GenAI-assisted workflow for undergraduate research inquiry"
created: "2026-11-26T13:15:00-05:00"
updated: "2026-11-26T13:15:00-05:00"
type: article
published: "2026-08-18"
sources: ['raw/papers/mikaelyan-socratic-challenger-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [survey]
discipline: []
level: [higher ed]
audience: [instructors, researchers]
pedagogy: []
technology: [generative-ai]
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-26"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Mikaelyan and colleagues evaluated an eight-step [[generative-ai|generative AI]]-assisted workflow for helping [[higher-ed|undergraduates]] turn a broad interest into a defensible research question in one ecology course. The sequence alternated AI-assisted exploration with AI-free literature verification, challenge questions, and human feedback. Every step drew a median rating of "Helped a lot," and perceived value was spread across the sequence rather than concentrated in one stage. Students described AI as a [[socratic-method|Socratic]] thought partner that narrowed ideas and surfaced gaps, while they credited the staged pacing, literature checks, and peer and instructor feedback with keeping their work grounded. The design offers a reproducible model for embedding AI in [[inquiry-based-learning|inquiry-based learning]], but the evidence is [[self-report-measures|self-reported]]: the study did not measure whether students' research questions actually improved.

## Key Findings
1. **Every step was rated helpful.** The median response was "Helped a lot" at all eight stages, and no step drew a "No impact" majority.
2. **Perceived value was distributed, not concentrated.** No single step stood out as the decisive one; different students named different turning points.
3. **Literature comparison and final feedback led the ratings.** The step pairing a [[meta-analysis-systematic-review|literature review]] with a source-checking tool, and the last step with expert feedback, drew the highest averages.
4. **The challenge-and-revision steps sat lowest.** The two AI-driven gap-challenge and question-refinement stages had the lowest averages, though still near "Helped a lot."
5. **Students treated AI as a thinking partner.** They credited it with clarifying concepts, narrowing scope, and surfacing gaps, but kept ownership of the final question.
6. **Workflow structure mattered alongside the tool.** Students pointed to staged deadlines, literature verification, and human feedback as what moved their questions forward.

## The workflow in concrete terms

The study was embedded in AEC 400, an undergraduate ecology course at an R1 institution in Fall 2025. All 45 enrolled students completed the workflow and consented to research use of their coursework after grading; the full cohort was the analytical sample. No sampling procedure or sample-size formula was used, and analysis ran on de-identified records. The institution's review board granted exempt status (protocol 28410), and consent was collected after grades were finalized.

Students worked through eight steps that alternated AI-off and AI-on phases. (1) They chose a broad topic without AI. (2) They generated subtopics with ChatGPT. (3) They identified keywords with ChatGPT. (4) They reviewed the literature without AI, then compared their reading with NotebookLM. (5) In the knowledge-gap challenge, ChatGPT posed questions testing novelty, feasibility, and methodological tractability; students answered those questions from scholarly sources without AI and revised accordingly. (6) They refined the research question with ChatGPT. (7) They ran a final literature check without AI. (8) They sought expert feedback and finalized the question.

The design casts the model as a structured challenger rather than an answer generator: it accelerates exploration, while checkpoints force verification against sources. After each step, students rated its perceived impact on a four-level ordinal scale — "No impact," "Helped a little," "Helped a lot," "Dramatically enhanced" — mapped to 1–4 for analysis. [[reflection|Written reflections]] were thematically analyzed following Braun and Clarke, with a second researcher independently reviewing and refining themes through discussion.

## What the ratings and reflections showed

Perceived impact clustered at the high end. More than half of responses at every step fell in "Helped a lot" or "Dramatically enhanced," and "No impact" was a small minority in each step. Step medians were uniformly 3 ("Helped a lot"). The highest means went to Step 8 (3.16) and Step 4 (3.09); the lowest to Steps 5 and 6 (both 2.73). The share rating a step "Dramatically enhanced" ranged from 20.0% at Steps 1 and 3 to 42.2% at Step 4, with Step 8 at 35.6%.

An overall within-student difference across the eight steps was detected, Friedman χ²(7) = 14.525, p = 0.0426 (n = 45 complete cases), but the magnitude was small, Kendall's W = 0.046. After Holm correction, no pairwise Wilcoxon comparison remained significant; the smallest adjusted p-value was 0.088 for Step 7 versus Step 8. Ratings showed acceptable internal consistency (Cronbach's α = 0.745 raw, 0.752 standardized), and the aggregate score averaged 23.2 out of 32 (SD = 4.29).

Two themes organize the reflections. First, AI functioned as a technological thought partner that helped students refine and focus ideas: students said it clarified concepts, revealed knowledge gaps, and made searches more targeted through better keywords. Second, the [[scaffolding|scaffolded]] workflow itself was the [[primary-education|primary]] structure supporting progress, with staged deadlines preventing procrastination and literature checks, [[peer-assessment|peer feedback]], and instructor input providing credibility that AI suggestions did not. One student said they trusted a classmate's advice more than AI services. As an exploratory [[metacognition|metacognitive]] screen, 22 of 45 reflections (49%) contained first-person language indicating monitoring or revision of ideas.

## What this means for practice

- **Instructors.** Alternate AI-on and AI-off stages so learners must verify model suggestions against sources before revising; the literature-comparison and final expert-feedback steps drew the highest ratings.
- **Instructors.** Frame the challenger step as a set of questions about novelty, feasibility, and method, then require answers from scholarly sources without AI, as the workflow did.
- **Instructional designers.** Build staged checkpoints with intermediate deadlines; students said the pacing kept them from leaving the project until the last minute.
- **Instructors.** Preserve peer and expert review as distinct stages; students explicitly trusted classmates' and instructors' advice more than AI suggestions.
- **Researchers.** Report these ratings as perceptions, not [[learning-gains|learning gains]], and pair them with [[rubrics|rubric]]-scored questions or revision traces before claiming the workflow improved question quality.

## Limitations

- One undergraduate ecology course at a single R1 institution in Fall 2025 supplies all 45 cases; there was no comparison group, random assignment, or sampling procedure, so the findings describe one implementation.
- Every outcome is self-reported. The four-level positively anchored scale compressed ratings near the top — all medians were "Helped a lot" — and the authors state that perceived impact does not establish improved research-question quality or learning gains.
- The study did not directly measure [[information-and-media-literacy|source evaluation]] or synthesis quality, and it collected no artifact-based outcome such as rubric-scored early and late questions; the authors name that as a next step.
- The second researcher reviewed reflections to broaden and challenge interpretation, not to compute inter-coder reliability, so no reliability statistic is reported for the themes.
- The metacognitive-language indicator was an exploratory, first-person-restricted regular-expression screen (22 of 45 reflections, 49%), not a validated measure, and no revision traces were captured to test whether challenge steps changed question structure.

## Citation

Mikaelyan, A., McKenney, E. A., Mathieson, O. L., & Toprani, D. (2026). [The Socratic Challenger: a structured GenAI-assisted workflow for undergraduate research inquiry](https://doi.org/10.3389/feduc.2026.1913451). Frontiers in Education, 11, 1913451.
