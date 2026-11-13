---
title: "Optimizing large language model-driven automated essay scoring: Integrating linguistic features and prompt engineering to enhance scoring accuracy"
created: "2026-11-13T09:15:00-05:00"
updated: "2026-11-13T09:15:00-05:00"
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
verified: [citation, numbers, links]
foundations: [learning-design]
assessment: [automated-essay-scoring, automated-assessment, assessment-validity, educational-measurement]
technology: [llm, generative-ai, educational-nlp, prompt-engineering]
---

> **Synthesis:** Tao and Min (2026) ask what makes an [[automated-essay-scoring|automated essay scorer]] built on an [[llm|LLM]] agree with human raters, and find that the prompt does more work than the rubric. Using 250 essays stratified across CEFR levels A1-C1 from the EF-Cambridge Open Language Database and Alibaba's Qwen 2.5-Max, they compared five [[prompt-engineering|prompt designs]]: agreement rose from a quadratic weighted kappa of 0.488 with a bare prompt to 0.829 when the prompt carried calibration examples, a required rationale and the rubric. Adding a detailed rubric alone *lowered* agreement to 0.460. They then tested whether the model's scores could be made more interpretable by combining them with 40-plus linguistic features in an ordinal regression; the full feature set raised Nagelkerke pseudo-R² from 0.728 to 0.803, with lexical diversity and syntactic complexity carrying most of the gain. The paper is a careful engineering result with a clear limit: it scores holistic CEFR level, not the dimensions a writing teacher would want to give feedback on.

## Key Findings

1. **Calibration examples were the single biggest prompt improvement.** Adding them to a bare prompt raised QWK from 0.488 to 0.752, and requiring a rationale raised it to 0.711.
2. **The full enriched prompt performed best.** Calibration examples plus required rationale plus detailed rubrics reached a kappa of 0.829, the highest of the five designs.
3. **A detailed rubric on its own hurt.** Supplying the rubric without examples or a rationale dropped agreement to 0.460, below the bare prompt.
4. **Errors became smaller and less biased.** Exact agreement rose from 30.6% to 60.4%, adjacent-or-exact agreement from 80.6% to 94.4%, and two-level errors fell from 19.4% to 5.6%.
5. **Scores alone left real variance unexplained.** A regression on Qwen scores alone explained less of the variance in CEFR level than the same model with the full linguistic feature set added.
6. **Lexical features carried most of the feature gain.** Adding only lexical measures reached 0.768, close to the full set; linguistic features without the model's score reached only 0.580.
7. **Three syntactic measures were significant predictors.** Passive nominal subjects per clause, adverbial clauses per clause and mean clause length each had positive, significant coefficients in the best-fitting model.

## What the prompt experiments show

The design isolates the prompt as the variable, and the results are not what rubric-centric advice would predict. A model given a bare instruction scored at only moderate agreement with corpus labels, and it avoided the extremes: with detailed rubrics it assigned four essays an A1 rating and one a C1 rating out of 250. Calibration examples — scored samples that show where the boundaries sit — fixed both problems at once, and requiring a rationale produced a comparable gain on its own. Together they lifted exact agreement by nearly 30 percentage points. The authors' explanation is plausible and useful for anyone building a scorer: rubrics describe criteria in the abstract, while examples and rationales anchor the scale to actual text. Detailed rubrics alone appear to distract the model into literal criterion-matching, which is why that condition underperformed even the bare prompt. The practical reading is that prompt design for scoring is a calibration problem before it is an instruction problem.

## Why linguistic features still matter

The second half of the paper addresses a different complaint about LLM scoring: that a single number is unaccountable. Adding 40-plus features from five families — lexical, syntactic complexity, fine-grained dependency, verb-argument constructions, cohesion — to the model's score in an ordinal logistic regression raised pseudo-R² from 0.728 to 0.803, and the coefficients identify what the model was implicitly rewarding. Lexical diversity alone recovered most of that gain (0.768), which is consistent with vocabulary range being the dominant signal in CEFR-aligned judgments of learner writing. The features-only model reached 0.580, so the LLM score is doing real work rather than proxying surface statistics. For [[writing-education|writing instruction]], the interesting detail is which syntactic measures mattered: subordinate clause use, passive nominal subjects and longer clauses, not cohesion markers. That is a partial answer to what distinguishes a B2 essay from a C1 one, and it is a more defensible basis for [[feedback|feedback]] than a bare model score.

## What this means for practice

- **Assessment designers.** Calibrate a scorer with scored examples and a required rationale before adding rubric detail, and check whether a more elaborate rubric actually improves agreement on your own sample.
- **Instructors.** Treat a holistic CEFR prediction as a placement signal, not as feedback: the paper measured no analytic dimension, so it cannot tell a student what to improve.
- **Researchers.** Report the error profile, not only kappa — the shift from 19.4% to 5.6% two-level errors changes how usable a scorer is in practice, and kappa alone hides it.
- **Developers.** Pair an LLM score with explicit linguistic measures when the score must be explained, and validate the combined model rather than assuming features add accuracy.

## Limitations

- Only holistic CEFR level was predicted, so the design cannot show whether the hybrid improves grammar, coherence, content or organization scoring.
- One dataset (EFCAMDAT cleaned subcorpus) and one model family (Qwen 2.5-Max) were used, and the authors state that generalization across datasets, model families and versions is untested.
- Sampling was stratified by CEFR level but not by topic, and topic effects were not modeled, so task variation may have added variance.
- The 40-plus features were selected from prior work rather than derived, and the study reports no test of whether the same set holds across learner L1 or nationality subgroups.
- Human ratings come from the corpus's CEFR-aligned labels, not from a fresh double-scoring of these 250 essays, so the benchmark is a corpus label rather than an adjudicated human judgment.

## Citation

Tao, R., & Min, S. (2026). [*Optimizing large language model-driven automated essay scoring: Integrating linguistic features and prompt engineering to enhance scoring accuracy*](https://doi.org/10.1016/j.asw.2026.101145). *Assessing Writing, 71*, 101145.
