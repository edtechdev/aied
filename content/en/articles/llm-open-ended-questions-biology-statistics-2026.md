---
title: "Evaluating Large Language Model Performance on Open-Ended Questions: Answering and Marking Capabilities"
created: "2026-10-16T09:20:00-04:00"
updated: "2026-10-16T09:20:00-04:00"
type: article
sources: ['raw/papers/llm-open-ended-questions-biology-statistics-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
level: [higher ed]
audience: [instructors, administrators, researchers]
discipline: [biology education]
pedagogy: []
technology: [llm, generative-ai, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, evaluative-judgment]
methods: [quantitative-research]
institutions: []
ethics: []
foundations: [critical-thinking, human-ai-collaboration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-16"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Three [[llm|large language models]] — GPT-4, Gemini 2.0, and Llama 3.1 — were set against 20 graduate students on 1,344 answers to 336 unique open-ended [[biology-education|biological statistics]] questions spanning Bloom's taxonomy, and Claude Sonnet 4.0 was separately tested as an [[automated-assessment|automated marker]] against an instructor with more than 20 years of teaching experience. Both [[quantitative-research|Friedman tests]] rated every model above the pooled student group, whose scores sat 0.2604 points below the grand mean (95% CI [-0.3450, -0.1759]), but the advantage was not uniform: the Type 7 evaluative questions drew the lowest score from the human grader and the longest answers from every respondent. Inter-rater reliability was poor — only Type 2 and Type 3 reached statistical agreement (ICC = 0.9035 and 0.9076), and no student reached "fair" agreement (κ ≥ 0.21) — while the LLM grader compressed its marks into 3-4. The authors read the score gap as partly stylistic, and treat the model's sub-hour marking run against the instructor's more-than-a-week as useful but not yet parity.

## Key Findings

1. Across 1,344 answers to 336 unique questions, both Friedman tests rated the three LLMs above the pooled 20-student group (W = 0.5536 for Expert1; W = 0.7192 for Expert2).
2. The student group's pooled mean sat 0.2604 points below the grand mean (95% CI [-0.3450, -0.1759]); Dunn's test put it below all three LLMs (p < 0.001), which did not differ from each other (p = 1.0000).
3. The advantage was uneven across cognitive levels: Type 7 evaluative questions scored lowest under Expert1 at 4.2283 (SD ± 1.0093), against a Type 4 high of 4.6700 (SD ± 0.8334).
4. Expert2 (Claude Sonnet 4.0) marked on a compressed scale, from 3.1961 (SD ± 0.7946) at Type 1 to 3.3859 (SD ± 0.7668) at Type 7, making Type 7 its highest-scoring type.
5. Inter-rater agreement was poor: only Type 2 and Type 3 were statistically significant (ICC = 0.9035, 95% CI [0.1200, 0.9900]; ICC = 0.9076, 95% CI [0.1400, 0.9900]), and no student reached "fair" agreement (κ ≥ 0.21).
6. Within-grader consistency favored the human: Expert1 reached ICC = 0.5818 (p < 0.001) while Expert2 showed no detectable pattern (ICC = 0.1200, p = 0.2200).

## Answering against Bloom's levels

RQ1 asked how [[llm|LLM]] answers to open-ended biological statistics questions compare with graduate students', and whether any gap holds across Bloom's cognitive levels. Question generation spanned seven genres, from fact-based to evaluative, to avoid clustering at recall; after deduplication the pool ran from 692 questions to 336 unique ones, each answered by the student group and by GPT-4, Gemini 2.0, and Llama 3.1, for 1,344 answers. Only the two endpoints carry an explicit ordinal claim, which makes the five middle types genres rather than one complexity ladder. Both graders rated all three models above the students, but the highest level resisted: Type 7 drew the longest answers overall (16,080 words against 11,590 for Type 1) yet, under the human grader, the lowest mean score (4.2283). The authors read that as evidence that evaluative [[critical-thinking|reasoning]] under ambiguity is not yet a solved task for current models.

## Marking: low agreement and a compressed scale

For RQ2 the same 1,344 answers were graded on a holistic five-point rubric by Expert1, an instructor with more than 20 years of statistics teaching, and by Expert2, Claude Sonnet 4.0, given identical rubric text and blinded respondent labels. Only Type 2 (ICC = 0.9035) and Type 3 (ICC = 0.9076) reached statistical significance, and their 95% CIs — [0.1200, 0.9900] and [0.1400, 0.9900] — are wide enough that the point estimates cannot be read as precise. Per student, none reached even "fair" agreement (κ ≥ 0.21) on the unweighted, linear-weighted, or quadratic-weighted kappa; Student1's unweighted kappa was negative (-0.0220) and its agreement rate 10.7143%. Behind those numbers sat a range restriction: Expert1 used the full 1-5 scale while Expert2 mostly used 2-4, a central-tendency problem the authors compare to the verbosity and self-enhancement biases documented in [[evaluative-judgment|LLM-as-judge]] systems and flag as an [[assessment-validity|assessment validity]] concern.

## Graders' internal consistency and what separated them

Consistency within each grader separated them as sharply as agreement between them. Testing whether the four students keep their relative rank across seven question types, Expert1 reached ICC = 0.5818 (p < 0.001, 95% CI [0.2100, 0.8900]) while Expert2 reached ICC = 0.1200 (p = 0.2200, 95% CI [-0.1500, 0.6400]). The intervals overlap between 0.2100 and 0.6400, but only the human's excludes zero. That bears on [[human-in-the-loop-ai|human oversight]]: a model that ranks students differently depending on question type cannot yet stand in for the instructor it is meant to assist. The cost side is real, though — Expert2 scored all answers in under an hour against more than 1 week for Expert1 — which is why the authors frame the model as a preliminary grader [[trust-calibration|whose output needs review]], not a replacement.

## Why the student–LLM gap may be stylistic

A second thread runs through the discussion: the models' advantage may be partly an artifact of writing style. LLM answers were consistently longer than the students', and while the word-count/score correlation was small and only marginally significant (Student1 Spearman 0.1111, p = 0.0418), LLM-as-judge systems are known to favor longer responses. Blinding hid respondent identity and question type, but not the stylistic cues embedded in the text, so length stayed a visible signal — and the paper's own Type 7 example shows both graders scoring a one-sentence human answer lowest and three longer model answers higher. The authors also raise a language confound: most of the 20 students were non-native English speakers, and concise, context-assuming answers may be penalized by a rubric that rewards elaboration. The measured gap, then, may not equal a gap in disciplinary [[problem-solving|problem solving]], a distinction worth holding when a model's marks judge a learner's [[human-ai-collaboration|collaboration]] with it.

## What this means for practice

- **Instructors.** Use LLMs as a preliminary marker for lower- and middle-order questions, and keep human review on evaluative work, where Type 7 drew the lowest score (4.2283) and the longest answers. Calibrate the two graders before holistic scoring — no calibration ran here, and no student reached even "fair" agreement (κ ≥ 0.21) on any kappa variant.
- **Administrators.** Weigh time savings against reliability — the LLM grader finished in under an hour against more than 1 week for the human, but its within-grader ICC was 0.1200 against 0.5818.
- **Researchers.** Do not generalize from one LLM grader; a single model (Claude Sonnet 4.0) supplied every LLM mark here, and per-type agreement rests on n = 4 subjects.

## Limitations

- The comparison rests on a single human grader and a single LLM grader (Claude Sonnet 4.0), so the observed inter-rater disagreement cannot be separated from the disagreement any two graders would show on this rubric.
- The student group (Student1) aggregates responses from 20 individuals while each LLM condition is one model's output, giving the human category between-person variance the LLM categories cannot exhibit.
- The holistic rubric was adapted from non-peer-reviewed sources (Association of American Colleges and Universities 2009; Sorial 2026), not a validated psychometric instrument, and no calibration exercise ran between graders before scoring.
- All materials were presented in English to a cohort of predominantly non-native English speakers, and English proficiency was not controlled.
- Per-type ICC estimates rest on n = 4 subjects, producing 95% CIs as wide as [0.1200, 0.9900] for Type 2; the inconclusive results more likely reflect low power than genuine disagreement.
- Findings cover one domain (biological statistics), one graduate program, and three model versions (GPT-4, Gemini 2.0, Llama 3.1) prompted without systematic variation.

## Citation

Nguyen, Q. T., Lo, M., Tran, M. P., & Tran, Q. D. (2026). [*Evaluating Large Language Model Performance on Open-Ended Questions: Answering and Marking Capabilities*](https://osf.io/h367z). EdArXiv preprint.
