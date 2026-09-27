---
title: "From automated scoring to learning diagnosis: a mechanism study of AI-supported formative assessment in English writing"
created: "2026-09-27T12:30:36-04:00"
updated: "2026-09-27T12:30:36-04:00"
type: article
sources: ['raw/papers/automated-scoring-learning-diagnosis-mechanism-2026.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [quasi-experiment, process-outcome modeling]
discipline: [language learning, writing education]
level: [higher ed]
audience: [instructors, assessment designers, researchers, learning analytics designers]
foundations: [ai-education, human-ai-collaboration, teacher-role, limitations-in-aied-research]
pedagogy: [self-regulated-learning, metacognition, student-engagement]
technology: [generative-ai, llm, learning-analytics, cognitive-diagnosis]
assessment: [formative-assessment, automated-essay-scoring, feedback-literacy, self-assessment, learning-gains]
methods: [mixed-methods-research, quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-27"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Yao and Fan compared two pre-existing intact classes of 48 students each in one university English writing course across three writing-feedback-revision cycles. Control received AI score and standard feedback with routine teacher checking; Diagnostic Review received DeepSeek-R1 issue-level diagnoses, an interpretation sheet before independent revision, structured teacher review, reassessment and a reflection. Measures tracked [[formative-assessment]]: diagnostic accuracy, feedback actionability and comprehension, [[self-assessment]] accuracy, revision quality, reflection quality and review workload, analysed with mixed-effects models with student random intercepts. Diagnostic Review scored higher on every process measure and gained 5.92 writing points against 3.58 for Control, and group by cycle interactions were significant for all outcomes except actionability.

## Key Findings

1. **Writing gains favoured the diagnostic routine.** Control rose from 66.57 to 70.15 and Diagnostic Review from 65.56 to 71.48, mean gains of 3.58 and 5.92 points, a between-group difference of 2.35 points (Hedges' g = 1.12, p < 0.001).
2. **Diagnostic accuracy was higher in Diagnostic Review in all three cycles,** with estimated marginal means of 0.696, 0.721 and 0.775 against 0.590, 0.619 and 0.619 (Hedges' g = 1.35, 1.17, 1.71, all p < 0.001).
3. **Feedback comprehension showed the strongest association with revision quality** (r = 0.501, p < 0.001), ahead of actionability (r = 0.480) and diagnostic accuracy (r = 0.445).
4. **Groups diverged more as cycles repeated for four of five outcomes, but not for actionability.** Group by Cycle interactions were significant for diagnostic accuracy (F = 3.57, p = 0.030), comprehension (F = 3.18, p = 0.044), revision quality (F = 4.02, p = 0.019) and self-assessment accuracy (F = 10.31, p < 0.001), but not for actionability (F = 1.63, p = 0.199).
5. **AI-teacher agreement was moderate and issue-dependent,** at mean F1 = 0.768 (SD = 0.037) in Diagnostic Review against 0.650 (SD = 0.030) in Control, highest at vocabulary word choice (0.824) and lowest for source use/evidence in Control (0.579).
6. **The routine changed revision type and teacher time.** Control revisions stayed surface-level in 36.5%, 42.4% and 40.6% of coded revisions, and review ran 10.06 to 10.79 minutes per cycle in Diagnostic Review against 7.82 to 8.28 in Control.

## How the diagnostic-review routine was built and coded

Ninety-six students in two intact classes (48 each) followed the same topics, rubric and scoring scale, taught by one instructor with roughly eight years of university EFL and English-writing experience. The three cycles were a problem-solution paragraph, a two-paragraph opinion response and a source-based short response; the analytic file held 288 cycle-level observations. Pretest writing (66.57 and 65.56, p = 0.418), [[feedback-literacy]], [[self-regulated-learning]] and self-assessment accuracy (0.71 in both) were comparable at baseline.

DeepSeek-R1, accessed through its official web interface, produced the feedback in all cycles; the interface exposed no backend snapshot and its generation settings were not configurable. Each prompt supplied task requirements, the rubric and the draft and requested a score or level, issue category, location, severity, explanation and revision direction, with diagnosis separated from suggestions and no rewriting permitted. One output per draft was retained, with no documented regeneration or pre-delivery screening. Coding used fixed scales: accuracy measures 0 to 1, actionability, comprehension, revision quality and reflection quality 1 to 5, review intensity 1 to 4. Two coders calibrated on about 24 excluded records and double-coded 96 of the 288 cycle-level records (33.3%) stratified by group and cycle, reaching Cohen's kappa = 0.82, 95% CI [0.75, 0.88] and ICC(2, 1) = 0.88, 95% CI [0.83, 0.92].

## What moved, and what the exploratory paths suggest

Revision quality favoured Diagnostic Review in every cycle (Hedges' g = 1.39, 1.50, 1.86, all p < 0.001), rising from 3.31 to 3.91 while Control moved from 2.70 to 3.09. Self-assessment accuracy differed only from Cycle 2 onward (g = 0.32, p = 0.120, then 0.80 and 1.50, both p < 0.001). Group main effects were significant for all five process outcomes (diagnostic accuracy F = 67.84, actionability 83.26, comprehension 51.72, revision quality 91.43, self-assessment accuracy 23.68; all p < 0.001).

The exploratory indirect analysis linked diagnostic accuracy to revision quality through actionability and comprehension. Cycle-adjusted indirect effects were 0.094 through actionability (95% CI [0.040, 0.151]), 0.039 through comprehension (95% CI [0.010, 0.074]) and 0.133 total; after adjustment for condition with 5,000 student-cluster bootstrap samples, 0.043, 0.024 and 0.067 total (95% CI [0.024, 0.113]). The authors label these estimates exploratory within the intact-class design.

## Where the human work remained

Teacher review records documented confirmation, correction, supplementation and re-explanation of AI feedback, with higher workload in Diagnostic Review. Added teacher instruction averaged 1.27, 1.25 and 1.42 comments per record in Control against 2.60, 2.85 and 3.08 in Diagnostic Review (Hedges' g = 1.42, 1.50, 1.61), and review intensity ran 1.69 to 1.88 against 2.61 to 2.94 (g = 2.61, 2.67, 2.73). Agreement was strongest for locally cued issues such as grammar and vocabulary and weakest for source use, where evidence has to function in relation to a claim.

Diagnostic Review reflections contained no coded misunderstanding in 84.0% of records, against 77.8% of the 135 available Control follow-up records, while Control records showed more accepting AI without judgment (6.9%) and ignored feedback (4.2%). Reflection quality was 2.96 (SD = 0.56) in Cycle 1 in Diagnostic Review against 2.59 (SD = 0.60) in Control.

## What this means for practice

- **Instructors.** Do not stop at the score: comprehension carried the strongest association with revision quality (r = 0.501), and a written interpretation sheet with restatement, effect explanation, uncertainty identification and a revision plan is what moved it.
- **Instructors.** Budget the extra review: roughly 10 to 11 minutes per cycle per student in the diagnostic condition against about 8 in Control.
- **Assessment designers.** Treat [[automated-essay-scoring]] agreement as issue-dependent: F1 = 0.824 on vocabulary word choice against 0.579 on source use and evidence.
- **Administrators.** Staff teacher mediation, not model output. Confirmation, correction, supplementation and re-explanation stayed in the workflow, and the authors tie scalability claims to that workload.

## Limitations

- Two intact classes taught by one instructor, with non-random class-level assignment, leave class selection and instructor effects inside the group contrast, and student time-on-task was not recorded, so the contrast may include additional interpretation, reflection and revision time.
- Comprehension and reflection came from structured forms in Diagnostic Review but routine follow-up records in Control, and the authors concede the record source may contribute to those contrasts.
- Cycle order coincided with task type, no delayed post-test was administered, and teacher learning, confidence and later unaided feedback practice were not measured.
- Course grading was single-rater with no inter-rater estimate, formal coder blinding was not documented, no separate validation of the process coding rubrics is archived, and the DeepSeek-R1 interface exposed no backend snapshot.

## Citation

Yao, X.-C., & Fan, L. (2026). [From automated scoring to learning diagnosis: a mechanism study of AI-supported formative assessment in English writing](https://doi.org/10.3389/fpsyg.2026.1905455). *Frontiers in Psychology*.