---
title: "From automated scoring to learning diagnosis: a mechanism study of AI-supported formative assessment in English writing"
created: "2026-09-27T07:34:00-04:00"
updated: "2026-09-27T07:34:00-04:00"
type: article
sources: ['raw/papers/automated-scoring-learning-diagnosis-english-writing-2026.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [quasi-experiment]
discipline: [writing education, language learning]
level: [higher ed]
audience: [instructors, researchers]
foundations: [ai-education, teacher-role]
pedagogy: [self-regulated-learning, metacognition]
technology: [generative-ai, cognitive-diagnosis]
assessment: [automated-assessment, formative-assessment, feedback, feedback-literacy, self-assessment]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-27"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Yao and Fan asked whether the formative value of [[automated-assessment|AI-supported writing assessment]] lies in the score or in what happens after it. Two pre-existing intact classes of 48 students each, 96 in total, completed three writing-feedback-revision cycles in one university English writing course. The Control class received AI scores with standard feedback, routine teacher checking, and revision. The Diagnostic Review class received issue-level [[generative-ai|DeepSeek-R1 diagnoses]], completed an interpretation sheet before revising, then went through structured teacher review, reassessment, and a reflection. The diagnostic class scored higher on diagnostic accuracy, [[feedback|actionability]], comprehension, revision quality, and [[self-assessment|self-assessment accuracy]] in all three cycles, and comprehension correlated most strongly with revision quality (r = 0.501, p < 0.001). Writing gains diverged too: 5.92 points against 3.58. An automated diagnosis, the authors argue, becomes [[formative-assessment|formative]] only when learners interpret it and teachers verify it, and their records show what verification costs.

## Key Findings

1. **Writing gains favored the diagnostic workflow.** Mean gains were 5.92 points (95% CI [5.38, 6.47]) against 3.58 (95% CI [2.92, 4.24]), a difference of 2.35 points (Hedges' g = 1.12, p < 0.001).
2. **Diagnostic accuracy was higher in every cycle.** Means were 0.696, 0.721, and 0.775 against 0.590, 0.619, and 0.619 in Control, with Hedges' g of 1.35, 1.17, and 1.71 (all p < 0.001).
3. **Comprehension tracked revision quality most closely.** Correlations with revision quality were r = 0.501 for comprehension, 0.480 for actionability, and 0.445 for diagnostic accuracy (all p < 0.001).
4. **Only actionability did not interact with cycle.** Group by Cycle interactions were significant for diagnostic accuracy (p = 0.030), comprehension (p = 0.044), revision quality (p = 0.019), and self-assessment accuracy (p < 0.001), but not actionability (p = 0.199).
5. **Teacher checking cost more.** Mean AI-teacher issue agreement was 0.768 in Diagnostic Review against 0.650 in Control, and review time ran 10.06 to 10.79 minutes per cycle against 7.82 to 8.28.

## How the two workflows differed

Both conditions were pre-existing intact classes taught by the same instructor, and the groups were comparable at baseline: pretest writing 66.57 against 65.56, p = 0.418. Control students received an AI score or level with standard feedback and routine checking, and follow-up records existed for 135 of 144 student-cycle observations (93.8%). Diagnostic Review students received a score plus an issue-level diagnosis naming category, location, severity, explanation, and revision direction, completed an interpretation sheet, a [[self-regulated-learning|self-regulated]] step requiring problem restatement, effect explanation, uncertainty identification, and a revision plan, before independent revision and structured [[teacher-role|teacher review]], then reassessment. One generated output per draft was retained, with no documented regeneration or pre-delivery screening. Two coders double-coded 96 of 288 cycle-level records (33.3%): Cohen's kappa 0.82 (95% CI [0.75, 0.88]), ICC(2,1) 0.88 (95% CI [0.83, 0.92]).

## What the cycle-wise numbers show

Diagnostic Review minus Control contrasts for diagnostic accuracy were 0.106, 0.102, and 0.156 across Cycles 1 to 3, and 0.62, 0.74, and 0.71 for actionability. Comprehension contrasts were 0.41, 0.62, and 0.56 (Hedges' g = 1.04, 1.33, and 1.36), and self-assessment accuracy widened from g = 0.32 (p = 0.120) in Cycle 1 to 0.80 and 1.50 (both p < 0.001). Revision quality differences were g = 1.39, 1.50, and 1.86. Control's surface-level revisions were 36.5%, 42.4%, and 40.6% of coded revisions, against larger shares of meaning change, organization, and content or argument work in Diagnostic Review. The mechanism analysis found positive cycle-adjusted indirect effects: 0.094 through actionability (95% CI [0.040, 0.151]), 0.039 through comprehension (95% CI [0.010, 0.074]), and 0.133 in total (95% CI [0.074, 0.194]); after adjustment for condition they shrank to 0.043, 0.024, and 0.067.

## Where teacher judgment entered

AI-teacher agreement, as mean F1 against teacher-confirmed labels, was 0.768 (SD = 0.037) in Diagnostic Review against 0.650 (SD = 0.030) in Control, and within Diagnostic Review it rose from 0.738 in Cycle 1 to 0.803 in Cycle 3. Cycle 3 values were highest for vocabulary word choice (F1 = 0.824) and coherence/cohesion (F1 = 0.816), while the lowest Control value was source use/evidence in Cycle 1 (F1 = 0.579). Review records show confirmation, correction, supplementation, and re-explanation of AI issues, concentrated on content and organization. Review minutes per cycle were 7.82, 8.20, and 8.28 in Control against 10.06, 10.79, and 10.71 in Diagnostic Review, and review intensity was 1.69, 1.78, and 1.88 against 2.61, 2.75, and 2.94 (g = 2.61, 2.67, and 2.73).

## What this means for practice

- **Instructors.** Keep diagnosis separate from the revision suggestion: this study's prompt asked for problems and revision direction separately, and told the model not to rewrite the composition.
- **Instructors.** Insert an interpretation step before revision. The sheet asked students to restate each problem, explain its effect, name uncertainties, and specify a plan, and comprehension carried the strongest correlation with revision quality (r = 0.501).
- **Instructors and faculty developers.** Budget the review time: review minutes ran 10.06 to 10.79 per cycle in Diagnostic Review against 7.82 to 8.28 in Control, with review intensity Hedges' g of 2.61 to 2.73.
- **Administrators.** Treat early cycles as ramp-up: self-assessment accuracy showed no group difference in Cycle 1 (g = 0.32, p = 0.120) before reaching 0.80 and 1.50.

## Limitations

- The study covers two parallel classes in one university writing course, 96 students in total, with non-random class-level assignment. Differences may reflect those two classes and their conditions rather than the diagnostic workflow, and nothing here establishes transfer beyond this course.
- Grading relied on a single rater with no inter-rater estimate, formal coder blinding was not documented, and no separate validation study of the process coding rubrics is documented.
- The indirect-effect analysis is exploratory: its estimates shrank after adjustment for condition, from 0.133 to 0.067.
- DeepSeek-R1 was accessed through the official web interface, the backend snapshot was not exposed, and temperature, top-p, and maximum-token settings were not manually configurable, so the exact system cannot be reproduced.

## Citation

Yao, X.-C., & Fan, L. (2026). [From automated scoring to learning diagnosis: a mechanism study of AI-supported formative assessment in English writing](https://doi.org/10.3389/fpsyg.2026.1905455). *Frontiers in Psychology*, 17, Article 1905455.