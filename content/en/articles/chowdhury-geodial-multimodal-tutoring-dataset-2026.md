---
title: "GeoDial: A Multimodal Dialog Tutoring Dataset for Geometry Problem-Solving with Visual Tutor Turns"
created: "2026-11-27T05:35:00-05:00"
updated: "2026-11-27T05:35:00-05:00"
type: article
published: "2026"
sources: ['raw/papers/chowdhury-geodial-multimodal-tutoring-dataset-2026.md']
confidence: medium
evidence_context: educational
page_kind: [design case]
research_method: [design and evaluation study]
discipline: []
level: []
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: [benchmark, quantitative-research]
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Chowdhury and colleagues introduce GeoDial, a [[multimodal]] geometry tutoring dataset of over 1.3K [[teacher-role|teacher]]–student dialogues collected from experienced mathematics teachers, in which instructional turns are explicitly grounded in diagram highlights. After filtering, 1,341 dialogues were retained and split into 800 training, 141 validation and 400 test examples; each turn carries a dialog act, a subact, optional standardized highlights and a feedback type. [[llm-training-and-fine-tuning|Fine-tuning]] vision–[[llm|language models]] on GeoDial substantially improves tutor-turn generation, yet the same models struggle to select correct diagram highlights: they learn to abstain more often, and decision-level highlight scores remain weak. The paper treats visually grounded [[pedagogy|pedagogical]] action as a distinct challenge and releases the dataset and models. The PDF prints a NeurIPS 2026 Evaluations and Datasets track line and no DOI.

## Key Findings
1. **The corpus couples language with visual guidance.** Over 1.3K dialogues were collected from teachers with mathematics teaching experience; 1,341 survived filtering and were split 800/141/400 without stratification by author or any other dimension.
2. **Annotation captures both pedagogical intent and visual action.** A hierarchy of five acts and 16 subacts specifies the tutor's strategy, while green and brown pen highlights and a positive or negative feedback prefix make the visual and evaluative channels explicit.
3. **Roughly half of tutoring turns carry highlights.** About 45% of utterances have a corresponding diagram highlight, with a median of three highlights per conversation; dialogues average about 8.6 teacher utterances, with a median of 8 and a maximum of 27.
4. **Teachers judged the [[simulating-students|simulated students]] reasonably faithful.** Debrief ratings had a median of 5 on four five-point questions, five interviewed teachers described initial student confusions as largely indistinguishable from real ones, and manual quality ratings exceeded 4.2 on every criterion.
5. **Fine-tuning helps the words but not the highlights.** Fine-tuned models improve act, subact and utterance generation and are preferred on [[scaffolding]] in pairwise human comparison, but decision scores for line and angle highlights fall because models increasingly leave the highlight set empty.
6. **Highlight imbalance is part of the difficulty.** The empty set is correct for approximately 77% of line instances and 83% of angle instances, inflating prediction accuracy for rare arcs and labels while their F1 scores stay low; separating highlight prediction and repeating positive examples improves results.

## How GeoDial was built
Problems were drawn from Geometry3k, a set of 3,000 geometry problems with diagrams and annotations, and PGPS9k, which extends it to 9,000 problems. The authors used the entire Geometry3k training set plus 1,700 additional PGPS9k problems, removed diagrams lacking point labels with a vision–language model, generated 10 candidate solutions per question and kept questions where at least two had a wrong final answer. Correct step-by-step solutions were generated and checked against official answers, leaving 1,422 problems.

Dialogues were collected from annotators recruited on a platform with mathematics teaching experience and English fluency. After a 12-minute onboarding video and a quiz, candidates completed a round of annotation and authors invited those with high-quality dialogues back. Most dialogues came from 11 main annotators, six male and five female; ten additional annotators contributed 89 conversations. Each annotator selected an act and subact, drew optional highlights and chose a feedback type, while three proposing models suggested candidate utterances that the annotator could ignore or rewrite. The ethics committee approved the process under a named project.

The team collected 237 dialogue batches and retained 1,341 dialogues after filtering problematic cases. Annotators believed they led the student to a correct answer without revealing much of it in 84.6% of conversations, and reached the answer with substantial revealing in 13.6%. Positive feedback was selected in 53% of utterances and negative feedback in 18%. Gemini proposals were chosen in 31.7% of utterances, Claude in 25.6%, GPT in 20.1%, and the custom option in 22.5%, with most custom utterances apparently written from scratch.

In total, 5,168 highlighted diagrams were annotated, of which 1,045 included brown-pen highlights; lines appeared in 2,644 diagrams, angles in 2,001, labels in 799 and arcs in 399. A second author independently annotated 100 images, producing 193 annotations with only one disagreement, an accuracy of 99.5%. Free-form marks were standardized as lines, angles, arcs and labels so that the same visual target could be compared across annotators.

## What the model experiments show
The authors fine-tuned and evaluated three closed models, three open text-only models and four vision–language models, with a random-turn baseline. Categorical acts, subacts and feedback were scored with macro-F1; teacher utterances with BLEU and BERTScore; and highlights with two separate measures, prediction accuracy for whether a highlight category should be produced and decision F1 for which elements to select when a highlight is required.

Supervised fine-tuning improved categorical prediction and tutor utterances, with the strongest overall results from the larger vision–language model. In a pairwise human preference comparison over 40 randomly selected conversations, the fine-tuned model was preferred over the base model on scaffolding, while correctness and answer leakage were largely unchanged. Visual grounding did not follow: fine-tuning improved prediction but lowered decision scores for lines and angles, because models learned to abstain more often in a dataset where the empty highlight set dominates.

Focused experiments separated highlight prediction from utterance generation on the two most common highlight types. Using model-generated rather than ground-truth utterances made the setting realistic, and repeating each positive sample three times per epoch while presenting negatives once generally improved highlighting; weighted training produced the best viable models. A data-size ablation increasing the training set from 0 to 800 in steps of 200 found the largest gain between 0 and 200, with act and subact scores saturated by the full set. The authors conclude that GeoDial exposes a genuine gap between generating pedagogical language and choosing the right visual elements.

## What this means for practice
- **Instructors.** Treat a diagram highlight and the utterance that refers to it as one instructional move when guiding a learner through an incorrect geometry solution.
- **Instructors.** Keep early turns corrective but non-revealing, [[prompt-engineering|prompting]] the learner to inspect the highlighted element rather than supplying the full solution.
- **Educational technology developers.** Model highlight selection as a separate task from utterance generation, and report decision-level as well as prediction-level metrics so abstention cannot masquerade as accuracy.
- **Researchers.** Use both language and visual metrics when evaluating multimodal tutors, and avoid treating low highlight F1 as evidence of no hypothesis when empty sets are the correct answer most of the time.
- **Researchers.** Do not train student simulators from these dialogues; the teachers in the study were not trained to detect artificial students and not all student types are represented.

## Limitations
- Student errors and student utterances were generated by vision–language models rather than real learners; teachers are not trained to detect artificial students, and there is no reason to assume all student types are equally represented.
- Visual interaction is limited to highlighting an existing diagram: no constructions, spontaneous sketching or student modifications, and drawing with a mouse likely discouraged complex highlights.
- Geometry is a small part of mathematics and education, and other subjects would need substantial adaptation of the annotation scheme.
- The ground-truth utterance and highlights are only one of several equally valid next steps at each point, a general limitation of dialogue data.
- Standardizing highlights abstracts over some nuance, especially in the labels category, where miscellaneous cases were a small fraction of label and total highlights.
- Current models still struggle to select accurate diagram highlights, and the paper reports no learner-outcome evidence that training on GeoDial improves tutoring in practice.

## Citation
Chowdhury S P, Rooein D, Wang A, Wang J and Sachan M (2026) GeoDial: A Multimodal Dialog Tutoring Dataset for Geometry Problem-Solving with Visual Tutor Turns. 40th Conference on Neural Information Processing Systems (NeurIPS 2026), Track on Evaluations and Datasets.
