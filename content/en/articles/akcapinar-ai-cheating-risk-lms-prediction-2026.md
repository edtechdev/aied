---
title: "Early Prediction of AI-Assisted Cheating Risk in Online Exams Through Learning Analytics"
created: "2026-10-03T01:37:41-04:00"
updated: "2026-10-03T01:37:41-04:00"
type: article
sources: ['raw/papers/akcapinar-ai-cheating-risk-lms-prediction-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [process-outcome modeling]
discipline: [cs education]
level: [undergraduate]
audience: [instructors, researchers]
technology: [learning-analytics, student-modeling]
pedagogy: [video-education, self-regulated-learning]
assessment: [educational-measurement]
methods: [quantitative-research]
ethics: [privacy]
foundations: [academic-integrity]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-03"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Integrity work on generative AI usually arrives during or after the assessment — [[remote-proctoring|proctoring]] watches an exam as it unfolds, and [[ai-detection|AI-text detectors]] examine what was submitted, with documented limits on their reliability. Akçapınar asks an earlier question: can a student's first eight weeks of [[learning-analytics|LMS traces]] indicate who may later need support, while there is still time to offer it? Using Moodle and video-player records from 52 first-year programming students, the study derives risk labels from prohibited in-exam events and predicts them with [[student-modeling|student-level]] classifiers, reaching an AUC of 0.763 with logistic regression. The author frames the output explicitly as a signal for academic guidance rather than evidence of misconduct, and reports an operating point that trades precision for reach.

## Key Findings

1. In a cohort of 52 first-year undergraduates taking an Introduction to Programming course at a public university in Türkiye, 23 students (44.2%) were labeled high-risk — in an exam that was proctored and administered face to face in a computer laboratory.
2. Risk labels came from three events the exam instructions prohibited: copying a question or option, losing window focus, and right-clicking. A question counted as suspicious when at least one occurred while it was displayed, and each question counted at most once; text selection alone was excluded because it also happens during ordinary reading.
3. The distribution of suspicious-question counts was strongly bimodal — 25 students showed none, four showed one or two, and no student fell between three and four. The 20% labeling threshold (five of 25 questions) sits inside that empty region, so any cut-off between 9% and 20% yields the same partition, and thresholds up to 48% move only the four observations nearest the boundary.
4. Five predictors were selected per fold from 27 candidates using the Mann-Whitney U test. Logistic Regression performed best (accuracy 73.1%, balanced accuracy 0.718, AUC 0.763); Naive Bayes was close (AUC 0.760), while Random Forest (0.720) and Gradient Boosting (0.646) trailed.
5. At the 0.50 decision threshold, logistic regression identified 14 of the 23 high-risk students (sensitivity 60.9%) and 24 of the 29 low-risk students (specificity 82.8%). Lowering the threshold to 0.30 raised sensitivity to 91.3% at 51.7% specificity, which the author presents as the operating point appropriate to low-stakes outreach.
6. Course-module views, assignment submissions, and the number of days on which course videos were accessed were selected in all 52 folds. Low-risk students averaged higher values on every one of the seven features ever selected (Cliff's δ 0.50 to 0.60), so lower recorded engagement tracked higher behavioral risk.

## From in-exam detection to a pre-exam signal

The study positions itself against two established responses. Proctoring systems monitor behavior immediately before or during an assessment, and AI-text detectors analyze submitted work for signs of generation; evaluations of the latter have found accuracy and reliability limits, including degraded performance after text manipulation, that constrain their use in high-stakes integrity decisions. Assessment redesign can be applied in advance, but it does not identify which individual students might benefit from support. An earlier study by the same author clustered in-exam behaviors — text selection, right-clicking, focus loss — and found that roughly a third of students showed patterns associated with AI-assisted cheating, but because that approach works during or after the exam it leaves little room for preventive action.

The present study keeps the behavioral outcome and moves the predictors earlier. Its target variable is a question-level risk label built from final-exam logs, while its predictors come only from the first eight weeks of the semester, before the midterm. That ordering is the contribution: the model is meant to run when outreach is still possible.

## Labels, folds, and what the model actually sees

The exam contained 25 multiple-choice questions presented in random order, with no return to earlier questions and automatic advancement when a question's time expired. Students had been told that only the exam application could remain open, that other activity would violate the exam rules, and that interactions would be recorded. Records were anonymized before analysis, and the study states plainly that it does not label students as cheaters — the target is a behavioral proxy for risk, not verified AI use.

Predictors came from Moodle logs and a custom video player, 27 features in three groups: video interaction measures (nine), viewing-purpose selections students made when opening a video (five), and Moodle activity measures (13) including sessions, course-module views, assignment submissions, resource views, quiz attempts, and URL clicks. Exam, assignment, and quiz grades were excluded from the predictors, so grades are not doing the work indirectly.

Evaluation used leave-one-out cross-validation with fold-specific preprocessing and feature selection: within each of the 52 folds, scaling and the Mann-Whitney U screening were fitted only on the 51 training students before the held-out student was predicted. The number of retained features was fixed at five to limit complexity under small-sample conditions, and the held-out student's data never influenced selection — a detail that matters more than the headline accuracy given the sample size.

## What the features suggest, and what the scores do not show

The author reads the three stable features as plausibly self-regulatory. Course-module views track behavioral engagement; the number of days on which videos were accessed reflects how study activity was distributed over time; assignment submissions reflect meeting course responsibilities. Earlier [[learning-analytics|learning analytics]] work has used regularity, submission, and distributed access as trace-based indicators of [[self-regulated-learning|self-regulated learning]], so lower values in the high-risk group may indicate weaker self-regulation as well as lower engagement. The study is careful that these are proxies: self-regulated learning was not measured directly, and future work should pair traces with validated instruments.

A descriptive result runs alongside the model. Thirteen of the 23 high-risk students scored 80 or above on the final exam, while none of the 29 low-risk students reached 80 — the highest low-risk score was 76 — and among the 12 students with suspicious events in at least 20 of the 25 questions, 11 scored 80 or above. Because final-exam scores were excluded from both label construction and training, the author calls this convergent descriptive context rather than validation of the labels.

## What this means for practice

The practical message is about where the score may be used, not how accurate it is. The author recommends low-stakes interventions — reminders about course materials, assignment follow-up, brief instructor check-ins, and clear guidance on acceptable AI use — and argues the threshold should be chosen for the intended use: a lower threshold buys reach for outreach and is unsuitable for disciplinary decisions. Each flag should be reviewed by an instructor in context, the score should stay separate from grading and misconduct records, and students should have a way to question how their data were interpreted.

That framing connects to a wider argument in the integrity literature that AI-enabled misconduct is better answered through assessment design and ethical pedagogy than through surveillance. The selected features point toward specific supports rather than sanctions: the students the model flags are, on the traces, the ones who interacted least.

## Limitations

- The sample is small (N = 52) and drawn from one programming course at one public university in Türkiye. Engagement patterns vary with course design, LMS configuration, exam format, institutional AI policy, and local patterns of technology access, and both the labeling rule and the classification threshold require local validation before use elsewhere.
- The risk labels are a behavioral proxy, not confirmed misconduct: they rest on repeated prohibited events rather than verified AI use. Their association with final-exam scores is convergent and indirect, and validating them would need ethically collected evidence such as expert review, student interviews, or additional session records.
- No student received the intervention the model is designed to trigger, so whether supportive outreach improves outcomes remains untested. The author describes the work as an early demonstration rather than a deployment-ready system.
- The cohort and final-exam records are the same as those of the author's earlier clustering study, so the two papers are not independent evidence about this group of students.

## Citation

Akçapınar, G. (2026). [Early Prediction of AI-Assisted Cheating Risk in Online Exams Through Learning Analytics](https://arxiv.org/abs/2609.37280). *17th International Conference on Education Technology and Computers (ICETC 2026)*. arXiv:2609.37280. https://doi.org/10.48550/arXiv.2609.37280