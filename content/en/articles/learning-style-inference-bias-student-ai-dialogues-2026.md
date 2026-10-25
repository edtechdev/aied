---
title: "Bias and Reliability in Learning-Style Inference from Student–AI Dialogues: An Evaluation of GPT-4o and Gemini 2.0 Flash"
created: "2026-10-21T09:30:00-04:00"
updated: "2026-10-21T09:30:00-04:00"
type: article
sources: ['raw/papers/learning-style-inference-bias-student-ai-dialogues-2026.md']
confidence: high
published: "2026-10-20"
page_kind: [evaluation]
research_method: [experiment]
discipline: [learning sciences]
level: [higher ed, undergraduate]
audience: [researchers, educational technology developers, instructors]
pedagogy: [student-ai-interaction, problem-solving]
technology: [adaptive-learning, conversational-ai, llm, personalized-learning, prompt-engineering, student-modeling]
assessment: [assessment-validity, educational-measurement, psychometrically-aware-ai, self-report-measures]
methods: [ai-ed-evaluation, quantitative-research]
foundations: [agency, interpreting-and-applying-aied-research, limitations-in-aied-research, theories-and-frameworks]
ethics: [bias-mitigation, differential-effects-across-learner-groups, explainable-ai]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-21"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Personalized learning increasingly promises to read learners from their conversations, but this evaluation shows how fragile that promise is. Working from Index of Learning Styles questionnaire labels for 153 [[higher-ed|undergraduate]] participants, Zamanifard, Goudarzi and Robb asked GPT-4o and Gemini 2.0 Flash to infer three Felder-Silverman dimensions from short, task-focused problem-solving dialogues. Under five-fold cross-validation with deterministic prompting, accuracy and support-weighted F1 looked moderate on Sensing-Intuitive and Sequential-Global, yet neither model cleared the empirical majority-class baselines on those dimensions. Macro-F1, balanced accuracy and per-class recall showed why: the scores came from overpredicting the dominant label, with Intuitive and Global learners systematically under-identified. Few-shot prompting produced mixed effects and sometimes made the bias worse — in one condition GPT-4o identified 0 of 39 Intuitive learners — while Active-Reflective classification stayed unstable and even leaned in opposite directions across the two models. The paper's contribution is a methodological warning for [[student-modeling]]: LLM-generated learner-style labels are uncertain, bias-prone signals rather than stable learner profiles, and dialogue-based [[personalized-learning]] needs bias-aware evaluation and uncertainty-sensitive design.

## Key Findings
1. **Aggregate accuracy never meaningfully beat the majority-class baseline.** On zero-shot Sensing-Intuitive, GPT-4o reached 70% and Gemini 2.0 Flash 73% against a 74.5% majority baseline; on Sequential-Global, GPT-4o reached 67% against 64.1%.
2. **Moderate weighted F1 hid weak balanced recognition.** Both models scored 68% support-weighted F1 on zero-shot Sensing-Intuitive, but macro-F1 was 57% for GPT-4o and 52% for Gemini, with balanced accuracy of 56% and 53%.
3. **Intuitive and Global learners were systematically under-identified.** GPT-4o recognized 11 of 39 Intuitive learners (28.2%) and 13 of 55 Global learners (23.6%); Gemini recognized 5 of 39 (12.8%) and 6 of 55 (10.9%).
4. **Few-shot prompting sometimes amplified the bias.** On Sensing-Intuitive, GPT-4o's Intuitive recall fell to 0 of 39 while its Sensing recall rose to 112 of 114 (98.2%); on Sequential-Global its accuracy dropped from 67% to 57%.
5. **Active-Reflective stayed unstable and model-specific.** Zero-shot GPT-4o favored Reflective learners, identifying 65 of 73 (89.0%), while Gemini favored Active learners, identifying 78 of 80 (97.5%); few-shot prompting reversed GPT-4o's preference.
6. **Numerical score prediction was abandoned during prompt refinement.** Initial prompts asked the models for ILS-style scores summing to 11; those were unstable, so the task became categorical classification instead.
7. **The authors read the bias as possibly learned, not merely statistical.** Overprediction of Sensing and Sequential labels may reflect dominant patterns in [[llm-training-and-fine-tuning|pretraining]] data rather than successful detection of real learner-style differences.

## Dialogic learner modeling looks cheap; the evidence is not

Personalized learning aims to adapt content, [[feedback]] and support to learners' needs, and AI-driven [[adaptive-learning|adaptive systems]] use learner models to guide content selection, assessment and feedback. Many still depend on explicit [[self-report-measures|questionnaires]], diagnostic tests or structured traces such as clickstream data, which the authors note can be burdensome, delayed or incomplete in authentic learning environments. Recent [[llm|large language models]] appear to offer an alternative: an [[intelligent-tutoring|LLM tutor]] can engage students in open-ended [[problem-solving]], respond to their questions and generate feedback from the dialogue itself, making [[conversational-ai]] a plausible route to real-time learner modeling. This study asks whether that route holds. Its authors use the Felder-Silverman model as structured analytical labels rather than as fixed cognitive traits, and they note it remains unclear whether models infer learner attributes from dialogue or instead respond to surface-level cues, class imbalance and model-specific bias — an error that could send a misclassified learner misaligned content and support.

## The headline metrics did not survive the balanced metrics

Because the sample skewed toward Sensing (74.5%) and Sequential (64.1%) preferences, the authors interpreted accuracy against empirical majority-class baselines rather than a nominal 50% chance level, and treated macro-F1 and balanced accuracy as the primary reliability metrics. The pattern repeats across dimensions. On zero-shot Sensing-Intuitive neither model beat the 74.5% baseline (GPT-4o 70% accuracy, Gemini 2.0 Flash 73%), and macro-F1 (57% and 52%) and balanced accuracy (56% and 53%) sat far below support-weighted F1. On Sequential-Global, GPT-4o's 67% accuracy edged past the 64.1% baseline while its balanced accuracy remained 58%. Per-class recall shows what the aggregates concealed: GPT-4o identified 96 of 114 Sensing learners (84.2%) but only 11 of 39 Intuitive learners (28.2%), and 90 of 98 Sequential learners (91.8%) but 13 of 55 Global learners (23.6%). On Active-Reflective, where reference labels were nearly balanced (80 Active, 73 Reflective), the two models still leaned in opposite directions.

## Few-shot prompting swapped biases rather than removing them

Supplying labeled examples through [[prompt-engineering|few-shot prompting]] did not fix the problem. In that condition, 60 examples were sampled from each iteration's training folds and provided alongside the validation dialogues. GPT-4o's Sensing-Intuitive accuracy rose from 70% to 73% but stayed under the 74.5% majority baseline while support-weighted F1 fell from 68% to 63%; on Sequential-Global its accuracy dropped from 67% to 57% and F1 from 62% to 50%, with the confidence interval shifting from [54%, 71%] to [40%, 59%]. Gemini 2.0 Flash moved little: support-weighted F1 improved from 56% to 58% on Sequential-Global, which the authors call a small aggregate shift rather than a stable improvement in balanced classification. Recall confirms the diagnosis — GPT-4o identified 0 of 39 Intuitive learners while its Sensing recall reached 112 of 114, and Gemini recovered only modestly on Global learners (12 of 55, 21.8%). Labeled examples, the authors conclude, did not guarantee stronger or more reliable inference; they often intensified dominant-class preferences, reversed bias direction or added instability.

## Treating inferred learning styles as uncertain signals

The authors trace part of the risk to operationalization: the ILS produces continuous scores, and converting them into binary labels can exaggerate small differences near the cutpoint and make borderline learners hardest to classify. Their recommendations follow from the bias evidence. Systems should prefer confidence scores, soft labels or ordinal representations of learner profiles. Educators and learners should be able to review, question or override model-generated classifications, ideally alongside complementary evidence such as survey responses, performance data or interaction history. Personalization should avoid rigid routing on a single predicted style, instead offering both step-by-step explanations and high-level overviews so a misclassification does not restrict what a learner can access. This is a [[psychometrically-aware-ai]] program, and it connects to broader fairness, accountability and transparency concerns in educational AI. For learners whose profiles fall in the minority class, the failure is not hypothetical: systematic under-identification of Intuitive and Global learners is exactly where [[bias-mitigation]] work has to begin.

## What this means for practice
- **Instructors.** Never let an inferred learning-style label route a student into one activity type — give the same content in step-by-step and high-level forms and let students choose.
- **Educational technology developers.** Instrument learner-modeling features with per-class recall and balanced accuracy, not accuracy alone, and show users a confidence-aware label they can question or override.
- **Researchers.** Report per-class recall and the majority-class baseline beside aggregate accuracy when evaluating any learner-modeling classifier, and treat an inferred style label as an uncertain signal rather than a validated construct.

## Limitations
- The analytical dataset is 153 undergraduates at a single large public university in the southeastern United States, retained from 270 original participants, and the Sensing-Intuitive and Sequential-Global dimensions were imbalanced.
- ILS labels come from a 44-item self-report questionnaire and serve as reference labels, not objective learner traits; the study does not validate them against learning outcomes.
- Dialogues were short, text-based and collected through one chatbot design, and the Visual-Verbal dimension was excluded entirely.
- The chatbot that collected the dialogues used the GPT-4o-mini API, while the classification study ran GPT-4o and Gemini 2.0 Flash; both evaluated models are superseded generations as of October 2026, so the accuracy and bias findings scope to that model vintage and this zero-temperature evaluation design rather than to dialogue-based learner-style inference in general.
- No supervised non-LLM text classifier was run as a baseline, so the results do not show that LLMs are preferable to simpler learner-modeling approaches.
- Prompt refinement, few-shot exemplar selection, output parsing and provider-side model updates all limit reproducibility.

## Citation
Zamanifard, S., Goudarzi, S., & Robb, A. (2026). [*Bias and Reliability in Learning-Style Inference from Student–AI Dialogues: An Evaluation of GPT-4o and Gemini 2.0 Flash*](https://arxiv.org/abs/2610.27448). arXiv preprint arXiv:2610.27448.
