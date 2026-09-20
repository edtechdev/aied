---
title: Assessment in Team Problem-Solving Exercises in Computing Education
created: "2026-07-22T04:33:04-04:00"
updated: "2026-09-20T03:44:50-04:00"
type: article
technology: [learning-analytics]
assessment: [feedback, formative-assessment, educational-measurement]
stakeholders: [student-experience]
research_method: [secondary analysis]
discipline: [stem education]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/2607.19209.md']
confidence: high
---

> **Synthesis:** Tabletop exercises (TTXs) let learner teams rehearse high-stakes workplace tasks such as cybersecurity incident response, but their open-ended, collaborative nature makes [[formative-assessment]] difficult: teams often receive delayed or incomplete feedback. This full [[research-methods-aied|research]]-to-practice paper compares assessment methods that exploit the action and communication logs captured by TTX platforms to evaluate how well teams meet learning objectives.

The work situates team [[problem-solving]] assessment within [[cs-education]] and broader [[stem-education]] contexts, showing how logged interaction data can drive faster, richer [[feedback|Feedback Loop]]s than manual grading. By operationalizing teamwork behaviors as measurable signals, it connects to [[learning-analytics]] and the [[student-experience]] of collaborative crisis-response training, with implications for [[higher-ed]] computing courses where TTXs are increasingly used but rubric reliability remains a barrier.

## What this means for practice

- **Learners.** Treat your platform logs as part of the assessment record: the study scored teams from logged milestone IDs and timestamps, so whether and when the team reaches each milestone in the exercise is evidence in its own right.
- **Learners.** Ask for cluster-level feedback, which lets instructors give one round of assessment-based advice to several comparable teams; the analytics ran in under 2 minutes on a standard laptop.
- **Learners.** Check how your written incident-response communication was scored against the shared rubric, which human assessors applied as a three-dimensional score vector (2 = satisfied, 1 = partially satisfied, 0 = not satisfied).
- **Learners.** Expect process to be judged, not one right answer: both exercises (EXF and PHI) are open-ended collaborative tasks, and the assessment methods target how a team deviates from effective practice.
- **Learners.** Ask for human review of any LLM-based assessment of your work: the authors recommend instructor oversight of automated decisions for accountability and fairness, and the local clustering keeps your data from being shared with an external service.

## Limitations

- The sample is small and domain-specific: 36 cybersecurity students at one Czech university in the EXF exercise and 11 teams in the Estonian PHI exercise, 76 participants across 24 teams after one team declined consent, and the authors say findings generalize reliably only to learners who already have basic cybersecurity knowledge.
- Automated assessment was restricted to specific LLMs (GPT-4o in the pilot, GPT-5.2 in the validation study), and because the models' internals are inaccessible the authors cannot determine why LLM scores sometimes differed from human scores - a limitation of all black-box methods.
- LLM-based assessment depended on querying an external service, so an unavailable model or a changed version would alter the assessment's validity and reliability, unlike the clustering, which ran locally.
- Clustering features came only from activity logs (milestone IDs, timestamps, action sequences and tool use) and exclude communication and external factors, so the method indicates similarity of team process rather than quality of outcome.

## Connected Concepts

- [[formative-assessment]]
- [[cs-education]]
- [[stem-education]]
- [[feedback]]
- [[learning-analytics]]
- [[student-experience]]
- [[higher-ed]]
- [[assessment]]
- [[collaborative-learning]]
- [[automated-assessment]]
## Connected Articles

- [[debugtracker-classroom-debugging]] — DebugTracker: Lightweight Process Evidence for Classroom Debugging
- [[llm-misconception-difficulty-easy-trap]] — The Easy Trap: Why LLMs Underestimate Misconception-Driven Difficulty
- [[becerra-aicofe-feedback-2026]] — AICoFE: AI-Powered Feedback System
- [[student-math-competence-clustering]] — Archetypes or ability? Clustering for modeling student mathematical competence
- [[ai-learning-tools-engineering-education-needs]] — Designing Needs- and Attention-Aware AI Learning Tools for Engineering Education: Insights from Psychological Outcomes
- [[llm-sentiment-analysis-education-research]] — LLM-assisted sentiment analysis for integrated computational and qualitative mixed methods education research: A case study of students' written reflection assignments

## Citation

Valdemar Švábenský, Jan Vykopal, Sukrit Leelaluk, Pavel Čeleda, et al. (2026). [Assessment in Team Problem-Solving Exercises in Computing Education](https://arxiv.org/abs/2607.19209). .
