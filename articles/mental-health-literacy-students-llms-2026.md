---
title: "Mental Health Literacy Across Psychology Students and Large Language Models"
created: "2026-09-22T09:31:40-04:00"
updated: "2026-09-22T09:31:40-04:00"
type: article
published: "2026-09-21"
sources: ['raw/papers/mental-health-literacy-students-llms-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [survey]
level: [higher ed, undergraduate]
audience: [instructors, researchers]
foundations: [ai-literacy, critical-thinking]
pedagogy: [misconceptions]
technology: [llm, generative-ai]
assessment: [educational-measurement, self-report-measures]
methods: [quantitative-research, benchmark]
ethics: [hallucination-risk, trust-calibration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** Richter et al. (2026) asked 150 psychology students at one German university — 70 in their first semester and 80 further along — to classify 15 [[well-being|mental health]] myths and 15 facts as correct, incorrect, or do not know, then put the same 30 statements to GPT-5.4, Claude Sonnet 4.5, DeepSeek V3.2, and GLM-5 across 80 independent runs each. Students judged myths more accurately than facts (first-semester 75.2% vs. 55.4%; advanced 87.7% vs. 69.3%), advanced students beat first-semester students on both, and every model beat both student groups overall. The item-level analysis is what makes the study useful: accuracy ranged from 73.3% to 100% depending on model and statement type, some errors recurred in all 80 runs, and on individual items students beat every model.

## Key Findings
1. **Students reject myths better than they know facts.** First-semester students classified 75.2% of myths accurately against 55.4% of facts; advanced students reached 87.7% and 69.3%, a gap the authors read as familiarity with common [[misconceptions]] exceeding specific factual knowledge.
2. **Later stages of study tracked with higher accuracy.** Advanced students had 3.22 times the odds of classifying a myth accurately as first-semester students (95% CI [2.40, 4.32]) and 2.83 times the odds for facts ([2.17, 3.69]).
3. **Model accuracy varied enormously.** Myth accuracy ran from 93.2% for GPT-5.4 to 100% for Claude Sonnet 4.5 across all 1,200 myth runs; fact accuracy ran from 73.3% for DeepSeek V3.2 to 99.4% for GLM-5.
4. **Two facts defeated nearly everyone.** Students scored 20.7% on the fact that child abuse prevalence is about 30% and 18.7% on the claim that psychotherapy works for all mental disorders; pooled model accuracy was 26.9% and 24.4%.
5. **Some items favored the students.** Students classified the myth that suicides are relatively rare accurately in 88.7% of cases against 54.7% for the models, which answered it incorrectly in 45.3% of responses.
6. **Errors repeated on identical statements across every run.** GPT-5.4 misclassified the suicides myth and the psychotherapy-effects fact in all 80 runs; Claude Sonnet 4.5 and DeepSeek V3.2 missed child abuse prevalence, psychotherapy effects, and healthy life years lost in all 80.
7. **Do not know is not the same as wrong.** Accuracy coding counted uncertainty as inaccurate, yet the patterns diverged: 67.3% of students chose do not know for the child abuse prevalence fact, while 60.6% of model responses were positively wrong.

## Rejecting a myth is not the same as knowing the fact
The directional finding deserves stating plainly: [[misconceptions]] are easier to recognize than the evidence base is to reproduce. The myths in this set are familiar public claims — psychotherapy is only for severe cases, addiction is a failure of willpower, schizophrenia means a "split personality" — and students may have met them before. The facts demanded narrower knowledge: prevalence, treatment effectiveness, the strength of evidence behind specific approaches, and the boundaries of psychotherapy. The authors draw the teaching conclusion themselves: mental health literacy is not identical to misconception rejection, so a [[curriculum-design|curriculum]] built around debunking myths leaves its factual base untested.

## The stage gap is real, but the design cannot explain it
Advanced students outperformed first-semester students on both statement types, consistent with earlier work finding fewer endorsed misconceptions with more coursework. The study cannot say what produced the gap. The comparison is cross-sectional, so the groups may differ in [[prior-knowledge|prior knowledge]], interest in mental health topics, or motivation rather than in what the program taught. The advanced group also pooled Bachelor students from later semesters with Master's students, so the study cannot say when any particular myth or fact is acquired. A longitudinal design would be needed to show how this knowledge develops.

## High overall accuracy hid persistent, model-specific errors
The item-level analysis is the part with practical bite. [[llm]] myth accuracy reached 99.4% on benzodiazepines and St. John's wort against 42.7% for students, 100% on split personality against 51.3%, and 100% on the electroconvulsive therapy myth against 60.0%. On facts the largest gap favored the models on the claim that resolving social conflicts alone is not psychotherapy — 97.2% against 12.7%. Yet GPT-5.4 consistently misclassified the suicides myth, and two other models missed the same three facts in every single run. High aggregate accuracy, the authors conclude, is no guarantee of accuracy on a given topic, findings from one model should not be generalized to others, and an overall score can hide recurring errors on individual topics.

## What this means for practice
- **Instructors.** Teach the facts, not only the myths. Students in this sample rejected common misconceptions at 75-88% but classified factual statements at 55-69%, so [[refutation-text|misconception-focused]] teaching leaves prevalence, treatment effectiveness, and clinical terminology under-covered.
- **Assessment designers.** Include a do not know option in knowledge checks. A third of students chose it on two hard facts, and the paper argues a forced correct/incorrect format cannot separate uncertainty, which calls for consolidating knowledge, from an incorrect belief, which calls for direct refutation.
- **Curriculum designers.** Use item-level results to target teaching. The statements both groups failed — child abuse prevalence and the claim of universal psychotherapy effectiveness — point to specific topics for which exposure during the degree is not yet producing accurate knowledge.
- **Researchers.** Report per-item and per-model results, and repeat the runs. Identical errors recurred across all 80 independent sessions, so a single-pass evaluation records an average that conceals them.

## Limitations
- One psychology program at one German university: 150 students, mean age 22.5 years, 83.3% of them female, so generalization to other institutions, countries, or gender-balanced samples is untested.
- The advanced group mixed students from different semesters and degree programs, and the comparison with first-semester students is cross-sectional, so the study cannot show that the program caused the accuracy difference.
- The 30-statement questionnaire was newly written with clinicians but has no comprehensive psychometric validation, and several items used hard numerical estimates or absolute wording.
- Both students and models classified isolated statements in single-session tasks — one statement per chat session for the models — so nothing here tests explanation, follow-up questioning, or uncertainty communication.

## Connected Concepts
- [[misconceptions]]
- [[llm]]
- [[generative-ai]]
- [[ai-literacy]]
- [[critical-thinking]]
- [[educational-measurement]]
- [[benchmark]]
- [[quantitative-research]]
- [[hallucination-risk]]
- [[trust-calibration]]
- [[self-report-measures]]
- [[higher-ed]]

## Connected Articles
- [[llm-misconception-difficulty-easy-trap]] — The Easy Trap: Why LLMs Underestimate Misconception-Driven Difficulty
- [[correct-answer-trap-misconceptions]] — The Correct Answer Trap: Pedagogically-Grounded Detection and Feedback for Hidden Misconceptions
- [[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026]] — AI tutors vs. tenacious myths: Evidence from personalised dialogue interventions in education
- [[rudolph-ai-myths-critical-higher-ed]] — Don't believe the hype. AI myths and the need for a critical approach in higher education
- [[llms-misconception-collaborative-learning-healthcare-2026]] — Implementing Large Language Models to Support Misconception-Based Collaborative Learning in Health Care Education
- [[richmond-nicholls-genai-psych-feedback-ai-literacies]] — Using Generative AI to Promote Psychological, Feedback, and Artificial Intelligence Literacies in Undergraduate Psychology
- [[small-god-cross-cultural-genai-mental-health-2026]] — "It feels like a small God": A Thematic Analysis of Cross-Cultural Imaginations of Generative AI Among Users Seeking Emotional and Mental Health Support

## Citation
Richter, E., Schoeniger, K., Schulze, M., Frede, L., Moeller, K., Redlich, R., et al. (2026). [Mental Health Literacy Across Psychology Students and Large Language Models](https://osf.io/e6s4t/). PsyArXiv preprint.
