---
title: "AI-assisted automated short answer grading of handwritten university-level mathematics exam"
created: "2026-09-19T21:07:40-04:00"
updated: "2026-09-19T21:07:40-04:00"
type: article
technology: [llm, multimodal]
assessment: [automated-assessment, assessment-validity, summative-assessment]
methods: [quantitative-research]
research_method: [experiment]
discipline: [math education]
level: [higher ed]
audience: [assessment designers, instructors, researchers]
page_kind: [evaluation]
sources: ['raw/papers/teamat2026-handwritten-math-grading.md']
confidence: high
---

> **Synthesis:** Automated [[assessment]] of handwritten mathematics is a two-stage problem, and this study locates the failure in both stages at once. GPT-4 first has to read German-language handwriting that mixes prose, algebra and integrals, then has to apply grading rules that were originally written for teaching assistants. On a voluntary undergraduate mock exam, the best workflows reached an agreement with human graders, measured by Krippendorff's alpha, of only 0.22 to 0.44 and an accuracy of 0.59 to 0.62, which the authors state plainly is not acceptable for high-stakes [[summative-assessment|summative]] use. The paper's most useful contribution is diagnostic rather than technical: it separates transcription failure from grading-rule failure, shows that a probabilistic confidence filter meant to flag doubtful grades for human re-checking did not recover reliability because its average false-positive rate was 0.27, and derives exam-design lessons that any institution planning [[multimodal]] grading of pen-and-paper work should read before collecting data.

## Key Findings

1. The study graded a voluntary German undergraduate mathematics mock exam taken by 105 students, 54 of whom consented to the use of their answers. Problems were semi-open: students produced written reasoning and mathematics rather than selecting options, and wrote their answers in designated boxes on the exam sheet.
2. Two extraction routes were compared: pre-cut answer boxes and whole graded pages. Two transcription engines were compared: Mathpix and GPT-4 with vision. Two [[prompt-engineering|prompting]] modes were compared: the original rubric formulations written for human staff and an itemised multi-criteria rewrite.
3. Agreement with human-assigned grades on the most promising workflows averaged a Krippendorff's alpha of 0.22 with the original rubric and 0.31 with itemised rules on the pre-cut box route, and 0.30 and 0.40 respectively on the whole-page route. Accuracy across the same four workflows averaged 0.62, 0.44, 0.60 and 0.31.
4. Grading without a rubric was clearly worse: accuracy 0.50 and alpha 0.32 when taking a single GPT-4 judgement, 0.51 and 0.34 under majority or averaged aggregation, against 0.69 and 0.60 for the best rubric-based approach.
5. Itemising the grading rules helped unevenly. It improved alpha only on the partial-credit problem and did not rescue the overall picture, which the authors read as evidence that the bottleneck is not prompt detail but the model's grasp of mathematical substance.
6. The system was robust to rewording. Five GPT-4-generated paraphrases of the itemised rules graded with a Krippendorff's alpha of 0.88 among themselves, so prompt-sensitivity to phrasing is not the limiting factor.
7. The confidence filter failed in the direction that matters. Using the standard deviation of the model's probabilistic grade estimate as a reliability flag, the criterion identified correct grades with an accuracy between 0.44 and 0.94 per problem, averaging 0.69 once problems with too few correct answers were dropped, but the average false-positive rate was 0.27: roughly a quarter of the grades it marked reliable did not match the human grade, with per-problem rates from 7% to 41%.
8. Transcription quality drove the rest. The average transcription success rate across problems was 83%, and the weakest problems were those where students wrote across answer-box borders or worked outside the box, which the pre-cut route simply lost.
9. Per-problem agreement was extremely uneven, from 0.91 down to 0.27, so exam-level averages hide items on which [[automated-assessment|automated grading]] is effectively unusable. The authors also warn against supplying the question text with the grading prompt as a general fix, because earlier experiments showed the model "fixing" student answers, seeing what it expects.

## Why the pipeline failed as a whole

The paper's structure makes clear that two failure modes were being measured, not one. Reading the handwriting is a recognition task with its own error profile: Mathpix and GPT-4V differ in which problems they recover, GPT-4V at a higher sampling temperature preserved more of some short expressions, and both were derailed by the answer boxes themselves, which functioned as extraneous graphical elements on the page. Applying the rules is a judgement task that inherits the quality of both the transcription and the rule text.

The rule-text failure is the more generalisable one. A grading rule written for a teaching assistant assumes a reader who knows the mathematics, infers intent, and ignores instructions meant for a later stage of marking. Handed to GPT-4, one such rule asked implicitly for a judgement while the model instead tried to determine the additional roots of an equation itself, a calculation outside its reliable competence. Rewriting the same rule as "judge as correct if the student found x = 1 as the only real solution; disregard any complex solutions for now" produced the intended verdict, which is a worked example of the difference between rules for people and rules for models.

The confidence-filter result is the part with the widest implications. Confidence filtering is the standard remedy proposed whenever automated grading is used with [[human-in-the-loop-ai|a human in the loop]]: let the model grade the easy cases, and route low-confidence cases to a person. Here the criterion was not merely weak but systematically optimistic, since high-confidence accuracy concentrated on problems with many zero grades, and the cases it selected as reliable were disproportionately the ones where it was wrong. Selective automation that routes a quarter of its "confident" grades to students incorrectly is not a safety net.

## Lessons for exam design and grading practice

The authors' first recommendation is procedural and cheap: scan and transcribe the complete exam sheet including questions, and use textual markers such as "Problem N (n points):" and "Solution of Problem N" to cut the file afterwards with regular expressions, rather than cropping answer boxes. The markers survive optical character recognition and the layout can be reconstructed deterministically, whereas boxes lose answers written on the margins of the next problem.

Second, grading rules need to be written differently for a model than for a marker, with explicit scope statements about what to disregard at each stage.

Third, language proved not to be a barrier in these experiments: German and English graded at comparable accuracy and no explicit translation step was needed, though the authors caution that this does not generalise to less widely represented languages.

Fourth, the authors report preliminary follow-up evidence that GPT-4o interprets handwritten mathematical expressions better than GPT-4V, which suggests the transcription half of the pipeline is improving faster than the judgement half.

## What this means for practice

- Treat handwriting recognition and grading-rule quality as separate risks to be measured separately; a single end-to-end accuracy figure hides which one is failing.
- Do not rely on model confidence to decide what needs human review, because a high false-positive rate among "reliable" grades is worse than uniform human checking.
- Write rubric text for the model's limitations, including what it should ignore, and expect rules inherited from teaching assistants to produce unrequested mathematical work.
- Design exam sheets for the scanner: full-page capture with textual markers and generous answer space, decided before the exam is administered, since layout choices are unrecoverable afterwards.

## Limitations

- The exam was a voluntary mock, so students may not have applied themselves fully, and their handwriting may differ from that in a compulsory assessment; only 54 of 105 students consented to their answers being used.
- Three problems had too few correct answers to be evaluated, and the analysis reports results on the remaining subset, so per-problem statistics rest on small samples.
- The study evaluates one model generation, GPT-4 and GPT-4V, and the authors' own follow-up suggests GPT-4o is better at handwritten mathematics, so the absolute numbers are already dated.
- Detection of handwriting and recognition of mathematical expressions remains an active research problem, and the paper does not attempt a specialised recognition pipeline.
- The overall picture is a snapshot of a single university exam in one discipline and one national grading culture, and the authors do not claim the thresholds transfer.
- No comparison is made against alternatives such as selective automation by item difficulty, ensemble grading, or investing the same effort in better human-marking logistics.

## Connected Concepts

- [[automated-assessment]] — the pipeline studied: recognition, rule application, and reliability flagging
- [[assessment-validity]] — the paper's core concern, expressed through agreement statistics and false-positive rates
- [[summative-assessment]] — the high-stakes use the authors explicitly rule out on this evidence
- [[multimodal]] — vision-language transcription of handwriting as a precondition for grading
- [[llm]] — the model class under test, with GPT-4V for transcription and GPT-4 for judgement
- [[math-education]] — German undergraduate mathematics with semi-open written answers
- [[authentic-assessment]] — handwritten semi-open tasks as authentic assessment, and what automating them costs in validity
- [[human-in-the-loop-ai]] — the confidence-filter remedy, and why it underperformed here
- [[assessment]] — the broader decision about what counts as reliable grading evidence
- [[psychometrically-aware-ai]] — the agreement and reliability bar that these alpha values fail to reach

## Connected Articles

- [[llm-grading-self-preference-bias-2026]] — model graders favour their own outputs, another reason automated grading needs external anchors
- [[humble-prompt-injection-ai-grading-red-team-2026]] — adversarial pressure on LLM grading, complementary to this study's reliability analysis
- [[know-when-to-trust-ai-scoring-reliability-2026]] — reliability thresholds for automated scoring, which this study's alpha values fail to reach
- [[llm-cognitive-diagnosis-handwritten-math]] — handwriting as an input channel for mathematics, from the diagnostic rather than the grading side
- [[llms-do-not-grade-essays-like-humans-2026]] — the same divergence between model and human judgement in a text domain

## Citation

Liu, T., Chatain, J., Kobel-Keller, L., Kortemeyer, G., Willwacher, T., & Sachan, M. (2026). [AI-assisted automated short answer grading of handwritten university-level mathematics exam](https://doi.org/10.1093/teamat/hrag010). *Teaching Mathematics and its Applications: An International Journal of the IMA, 45*(1), 84–105.
