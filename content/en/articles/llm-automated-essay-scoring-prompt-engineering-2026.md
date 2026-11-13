---
title: "Optimizing large language model-driven automated essay scoring: Integrating linguistic features and prompt engineering to enhance scoring accuracy"
created: "2026-11-13T09:15:00-05:00"
updated: "2026-11-13T10:45:00-05:00"
type: article
page_kind: [evaluation]
research_method: [experiment]
evidence_context: educational
discipline: [language learning]
level: [higher ed, adult learning]
audience: [assessment designers, researchers, instructors]
sources: ['raw/papers/llm-automated-essay-scoring-prompt-engineering-2026.md']
source_url: "https://doi.org/10.1016/j.asw.2026.101145"
source_depth: full text
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-13"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-13"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [learning-design]
assessment: [automated-essay-scoring, automated-assessment, assessment-validity, educational-measurement]
technology: [llm, generative-ai, educational-nlp, prompt-engineering]
---

> **Synthesis:** Tao and Min (2026) ask what makes an [[llm|LLM]] agree with human raters when it scores essays, comparing prompt designs on essays graded A1 to C1 from a large EFL corpus, then testing whether explicit linguistic measures add predictive power. Scored examples and a required rationale did most of the work, while a detailed rubric on its own scored worse than a bare prompt. For educators, an [[automated-essay-scoring|automated scorer]] must be calibrated against judged samples before it means anything, and a holistic level is placement evidence rather than feedback.

## Key Findings

1. A bare instruction produced only moderate agreement with human levels, and the model avoided both ends of the scale.
2. Scored calibration examples were the largest single improvement, and requiring a written rationale helped nearly as much on its own.
3. A detailed rubric without examples or a rationale scored worse than the bare prompt.
4. The combined prompt reduced both the size and the direction of errors, with the largest gains at the lowest and highest levels.
5. Adding explicit linguistic measures to the model's score explained more of the variance in proficiency level than the score alone.
6. Lexical measures carried most of that feature gain, while the features without the model's score were markedly weaker.

## What the prompt gave the model to work with

The first experiment isolates [[prompt-engineering|prompt design]]. Two hundred fifty essays, fifty per level, drawn from sixty-eight topics in the EF-Cambridge Open Language Database, were scored by Qwen 2.5-Max under five conditions that added calibration examples, a detailed rubric and a required rationale, separately and together. The bare prompt reached a quadratic weighted kappa of 0.488, calibration examples 0.752, a required rationale 0.711, and the combined prompt 0.829; the rubric-only condition fell to 0.460.

The score distributions help explain why. Under the bare prompt just over half the essays were placed at level three, with few at either extreme; the rubric-only prompt assigned four essays an A1 rating and one a C1 rating. The authors read this as a calibration problem: a rubric describes criteria in the abstract, while scored examples show where the boundaries sit in real learner text, and a detailed rubric gave the model more criteria to match literally without an anchor for the scale.

## Where the errors moved

The authors also cross-tabulated predicted against benchmark levels. Exact agreement rose from 30.6% to 60.4% under the combined prompt and agreement within one level from 80.6% to 94.4%; errors of two or more levels fell from 19.4% to 5.6%. Over-scoring fell from 31.5% to 17.2% and under-scoring from 37.9% to 22.4%, so the enriched prompt did not trade one bias for another.

The gains were concentrated at the ends of the scale, where a compressed scorer does the most damage. Exact agreement for level-one essays rose from 4.0% to 40.0% and for level-five essays from 6.0% to 44.0%. Under the bare prompt, 96.0% of level-one essays were over-scored and 94.0% of level-five essays under-scored. In [[writing-education|writing instruction]], that is a beginner routed into intermediate writing and an advanced student held back.

## What the linguistic measures added

The second experiment pairs the score with observable properties of the text. Five hundred essays, one hundred per level, were scored and entered into a logistic regression with forty-five measures spanning lexical diversity and sophistication, syntactic complexity, fine-grained dependency, verb-argument constructions and cohesion, with seven models comparing the score alone, each feature family, every feature, and features without the score.

The score-only model reached a Nagelkerke pseudo-R² of 0.728; adding all features raised it to 0.803. Lexical features alone reached 0.768, fine-grained syntactic and verb-argument measures 0.763, syntactic complexity 0.737, and cohesion 0.726, below the score-only baseline. Features without the model score reached 0.580, well below every model that kept it.

In the best-fitting model, passive nominal subjects per clause, adverbial clauses per clause and mean clause length had positive and significant coefficients, while moving-average type-token ratio, concreteness and all-causal cohesion were negative. The features are external evidence, not an account of the model's reasoning. For [[feedback|feedback]], that distinction matters: clause length can be shown to a student and discussed, while a model score cannot.

## What this means for practice

- **Instructors:** Before using an LLM score to place or stream students, run essays you have already graded through the same prompt and check the borderline cases; a scorer that never assigns the top or bottom level is compressing your range.
- **Assessment designers:** Build the prompt around scored anchor scripts and a required rationale first, and add rubric detail only if it improves agreement on your own calibration set.
- **Program designers:** Use the score for placement or triage and route borderline essays to a human reader; the paper measures a proficiency band, not readiness for a particular course.
- **Faculty developers:** Ask for calibration scripts and a disagreement sample alongside the headline agreement figure, and review both with the raters.
- **Researchers:** Report the error profile, including how many essays were misplaced by two levels and in which direction, because aggregate agreement hides a scorer that over-rates beginners.

## Limitations

- Only holistic CEFR level was predicted, so the design cannot show whether the hybrid improves grammar, coherence, content, organization or argumentation — the dimensions a writing [[teacher-role|teacher]] would act on.
- The benchmark is the corpus's own teacher-assigned level, tied to course progression in one online [[curriculum-design|curriculum]], not a fresh double-scoring, so the ceiling reflects one operational grading system.
- One corpus and one model version were used. Generalization across datasets and model families is untested, and prompt sensitivity is what the study shows to be large.
- Topic and learner background were neither stratified nor modeled, so some variance credited to features may be task or first-language variation, and repeated scoring was not tested.

## Citation

Tao, R., & Min, S. (2026). [*Optimizing large language model-driven automated essay scoring: Integrating linguistic features and prompt engineering to enhance scoring accuracy*](https://doi.org/10.1016/j.asw.2026.101145). *Assessing Writing, 71*, 101145.
