---
title: "Evaluating LLM-Generated Feedback on Handwritten Mathematics: Feedback Quality and Subsequent Exam Performance"
created: "2026-10-21T09:30:00-04:00"
updated: "2026-10-21T09:30:00-04:00"
type: article
sources: ['raw/papers/llm-feedback-handwritten-mathematics-exam-performance-2026.md']
confidence: high
published: 2026-10-20
page_kind: [evaluation]
research_method: [experiment, quasi-experiment]
discipline: [math education]
level: [higher ed, undergraduate]
audience: [instructors, assessment designers, researchers]
pedagogy: [self-regulated-learning]
technology: [llm, multimodal, generative-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, assessment-validity]
methods: [mixed-methods-research, ai-ed-evaluation]
foundations: [human-ai-collaboration]
ethics: [privacy, ai-use-disclosure, differential-effects-across-learner-groups]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-21"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Can a large language model turn a student's photographed handwritten mathematics into feedback worth reading? This evaluation reports a semester-long deployment in one [[higher-ed|undergraduate]] mathematics course at the Vrije Universiteit Brussel, where GPT-5.1 generated individualized comments and two practice exercises from scanned answer sheets and verified [[automated-assessment|LLM-assisted grades]], for an English cohort (n = 343) and a Dutch cohort (n = 236). Six reviewers scored 157 messages on six criteria from 0 to 3; the practice exercises drew the strongest [[ai-feedback-quality|feedback quality]] ratings, while diagnostic specificity and clarity lagged, and feedback on the weakest answers was judged less actionable. A randomized crossover on two of the six weekly bonus tests found no statistically significant difference on linked exam questions after adjustment, and the two cohorts sat separate exams graded by different people. Attendance and cumulative feedback exposure tracked higher exam scores, but the authors could not separate that contribution from attendance and practice, so the [[feedback|feedback]] effect on later performance stays unresolved.

## Key Findings
1. **Practice exercises were the strongest output.** Reviewers gave the highest rating to 300 of 314 exercise ratings (95.5%), with one weak and no deficient ratings.
2. **Mathematical accuracy was high but not clean.** 195 of 314 ratings (62.1%) rated the evaluation of the student's work as strong, while 26 (8.3%) were deficient.
3. **Diagnosis and communication scored far lower.** Strong ratings were 129 of 314 (41.1%) for diagnostic specificity and 105 of 314 (33.4%) for clarity and tone, which also drew 61 weak ratings and one deficient rating (19.7%).
4. **Feedback on the weakest answers was less actionable.** For students scoring 0 or 1 out of 10, the first reviewer gave the top actionability rating to 16 of 28 messages (57.1%), against 115 of 127 (90.6%) above 1/10.
5. **The randomized crossover found no stable exam-question effect.** Across four linked-question comparisons the smallest unadjusted difference was p = 0.026 in the Dutch cohort; after Holm adjustment none was significant (pHolm = 0.104).
6. **Attendance tracked exam performance more clearly than feedback did.** Attendance correlated with total exam score (Spearman ρENG = 0.49, ρNL = 0.54, both p < 0.001), and within attendance strata more feedback exposure came with higher medians.

## How feedback was generated from handwritten answers
This work extends a [[human-in-the-loop-ai|human-in-the-loop]] grading pipeline: answer sheets were scanned and anonymized, then GPT-5.1 (Reasoning High), a [[llm|large language model]], scored each response five times against a rubric-style grading key, and a human grader verified the maximum as the provisional grade. Only once grades were final did a separate generation step produce feedback, using the question text, a cropped image of the student's answer, the official worked solution, and the final numerical grade, with no names or identifiers. The [[prompt-engineering|prompt]] required strengths and mistakes to be named, adherence to the official method without citing it, no mention of the score, and two practice exercises with final solutions only — no hints or intermediate steps. LaTeX was flattened into plain text, and the output was screened for dangerous content, none of which was found. Feedback arrived by email with the grade and answer image, about one and a half week after each test, labeled as AI-generated.

## What six reviewers found in 157 messages
The authors sampled three English-cohort tasks offering 82, 108, and 210 eligible messages, stratified by verified grade into five score bands, yielding 51, 51, and 55 messages. Each of the 157 messages was rated independently by two of six reviewers on six criteria — mathematical accuracy, diagnostic specificity, actionability, method alignment, clarity and tone, and practice-exercise quality — each scored from 0 to 3 with the answer material in hand. Exercises dominated the top category, while diagnosis and presentation were more often merely adequate: reviewers described feedback that credited absent reasoning, missed an error, or proposed unnecessary improvements to a correct answer. Agreement was uneven — for actionability the first rating was strong for 131 of 155 messages (84.5%) against 94 of 157 (59.9%), and for method alignment 150 of 155 (96.8%) against 97 of 157 (61.8%).

## Correctness is not the same as usefulness
The sharpest finding concerns who received weaker feedback. For students who scored 0 or 1 out of 10, the first reviewer gave the highest actionability rating to 16 of 28 retained messages (57.1%), against 115 of 127 (90.6%) for grades above 1/10, and the second reviewer showed the same pattern. The authors attribute this to the answers themselves: students who scored 0 or 1 generally wrote very little, so comments tended toward encouragement rather than specific guidance. They also flag a prompt-level tension: requiring strengths and improvements may push the model to find a weakness in a correct answer. Their proposed fix is guidance conditional on progress: a first step for those who barely started, an extension for those who answered correctly. Whether that helps is untested, and none of it matters unless students act on the comments, an uptake question tied to [[feedback-literacy|feedback literacy]] and [[self-regulated-learning|self-regulation]].

## A crossover design that did not move exam scores
Feedback assignment was randomized on tests 1 and 3 with a fixed crossover: students who received feedback on the first test served as controls on the third, and vice versa; on the remaining tests all attendees received feedback. The linked exam questions differed in both directions — in the Dutch cohort the feedback arm's median was 4.25 against 2.00 for controls (p = 0.026, pHolm = 0.104), while on the other the control arm scored higher — and after Holm adjustment across the four comparisons nothing reached significance, which the authors read as a single exposure being too light an intervention to shift a question asked months later. Descriptively, attendance correlated with the [[summative-assessment|final exam]] (Spearman ρENG = 0.49, ρNL = 0.54, both p < 0.001), and within attendance strata more feedback exposure came with higher medians, about 0.5 grade points on the conditional mean and about 0.9 on the conditional median. Because exposure outside the crossover tests depended on which tests students attended, those contrasts cannot be attributed to feedback alone.

## What this means for practice
- **Instructors.** Do not let automated comments be the whole intervention for students at the bottom: supply the first step yourself, because that is where reviewers rated the material least actionable.
- **Assessment designers.** Make the prompt conditional on demonstrated progress — a first step for non-attempts, an extension for correct answers — and log whether students open the feedback or attempt the exercises.
- **Researchers.** Instrument feedback exposure directly instead of inferring it from attendance before attributing an exam-score gain to automated feedback, because this study could not separate the two.

## Limitations
- GPT-5.1 (Reasoning High) did both grading and feedback generation, and each message was generated only once, so these ratings describe that model version, prompt, and one-shot setup rather than current systems. The six bonus tests ran inside one course semester and the paper states no calendar data-collection window; the preprint is dated October 21, 2026.
- One course at one institution, the Vrije Universiteit Brussel: 343 English-cohort and 236 Dutch-cohort students taught by the same professor but by different teaching assistants and from different schooling backgrounds.
- Each message was scored by only two of six reviewers, and the two ratings diverged most on actionability (84.5% versus 59.9% strong) and method alignment (96.8% versus 61.8%).
- The linked-exam comparisons used small groups restricted to students who attended both crossover tests with an observed outcome, between 31 and 52 per arm, and conditioning on attendance may undermine the comparability created by random assignment.
- Students were told the feedback was AI-generated, which the authors note could have lowered reliance on it, and the supporting student comments came from a self-selected group attending the final lecture.
- No records exist of whether students read the feedback or attempted the practice exercises.

## Citation
Vanhoyweghen, A., Holst, V., Mobini, M., Van de Voorde, L., Vanleke, T., Algaba, A., Verboven, S., Guerry, M.-A., Van Droogenbroeck, F., & Ginis, V. (2026). [*Evaluating LLM-Generated Feedback on Handwritten Mathematics: Feedback Quality and Subsequent Exam Performance*](https://arxiv.org/abs/2610.27881). arXiv preprint arXiv:2610.27881.
