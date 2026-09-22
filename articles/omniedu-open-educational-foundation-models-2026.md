---
title: "OmniEdu: Open Foundation Models for Learning and Teaching"
created: "2026-09-22T09:18:32-04:00"
updated: "2026-09-22T09:18:32-04:00"
type: article
published: "2026-09-19"
sources: ['raw/papers/omniedu-open-educational-foundation-models-2026.md']
confidence: high
page_kind: [framework]
research_method: [system development]
level: [k 12]
audience: [instructors, researchers, software developers]
foundations: [curriculum-design]
pedagogy: [scaffolding, misconceptions, socratic-method]
technology: [pedagogical-llm-training, open-source, intelligent-tutoring, llm, multimodal]
assessment: [assessment, automated-question-generation]
methods: [benchmark, ai-ed-evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** OmniEdu is an open family of K–12 foundation models at 4B, 9B, and 27B parameters, trained on a corpus whose supervision is organized by capability instead of by source or subject. The authors define four target capabilities — subject competence, [[curriculum-design|curriculum grounding]], diagnostic reasoning, and [[scaffolding|pedagogical action and scaffolding]] — then filter roughly 1.34M candidate examples down to a 69,999-example mixture through cleaning, [[llm]] auditing, quality scoring, and token-budgeted diversity selection (9,048 of those examples are general instructions). Every tuned model beat its own base model on curriculum grounding, K–12 [[problem-solving|problem solving]], and tutoring, with the largest gains in scaffolded instruction and in the use of a student's learning history rather than in answer accuracy alone. OmniEdu-27B leads the open-weight field on those dimensions, while knowledge-state diagnosis remains its weakest measured capability: capability-balanced [[pedagogical-llm-training]] is reproducible from published data and weights.

## Key Findings
1. **Capability-balanced supervision improved every scale.** Education-oriented tuning raised results across curriculum grounding, K–12 problem solving, and tutoring at 4B, 9B, and 27B; OmniEdu-27B reached 63.12% EM and 76.69% F1 on K12-Bench against 52.11% and 73.48% for its base.
2. **The final corpus is small and heavily filtered.** More than 100 sources supplied about 1.34M education examples; the six-stage pipeline reduced them to 60,951, and the final mixture holds 69,999 examples and 15.96M supervised response tokens.
3. **Scaffolding showed the largest effects.** MathTutorBench Scaffold win rate rose 55.37 points for OmniEdu-4B and 61.26 for OmniEdu-9B; OmniEdu-27B reached 78.74% Scaffold and 83.59% Scaffold-hard, from 57.16% and 55.86%.
4. **Longitudinal history use improved sharply.** LongTutor Evidence average moved from 36.80% to 78.20% for OmniEdu-27B, whose Teaching average of 3.02 was the best among all evaluated models.
5. **Curriculum alignment improved in both directions.** EDUMATH MaC rose 20.80, 15.40, and 16.35 points at 4B, 9B, and 27B; MathFish reached 85.89% and K12-Bench prerequisite EM rose from 60.32% to 73.67%.
6. **General capability was retained.** MMMU-Pro accuracy rose at all three scales (50.46%→52.60%, 58.38%→60.75%, 64.97%→67.98%), and IFEval and GPQA improved rather than degrading.
7. **Diagnosis remains the weak capability.** Knowledge-state diagnosis peaked at 54.04% (27B) and 53.55% (9B); the authors call those accuracies evidence that inferring a learner's knowledge state is hard.

## Supervision organized by capability rather than by source
The design claim is that the bottleneck is data [[writing-education|composition]], not data volume. Educational examples supervise genuinely different behaviors: a short answer rewards correctness, a curriculum relation rewards structural knowledge, a [[cognitive-diagnosis|misconception diagnosis]] rewards error-sensitive reasoning, and a tutoring exchange rewards withholding the answer long enough for the learner to produce it. Mixing those by source alone blurs the response policy each example is meant to teach. OmniEdu therefore assigns every example one primary capability — subject competence, curriculum grounding, diagnostic reasoning, or [[pedagogy|pedagogical]] action and [[scaffolding]] — and each selected example then receives exactly one of 20 task-specific system instructions describing the behavior to imitate. The final mixture is 31,855 subject-competence examples, 14,226 pedagogical, 9,381 curriculum-grounding, 5,489 diagnostic, and 9,048 general-purpose, with [[multimodal]] examples retained for diagram-based reasoning.

## A six-stage filter that discards ninety-five percent of candidates
Deterministic cleaning, duplicate removal, answer-consistency checks, and decontamination against the evaluation set left 870,711 examples. A Qwen3.5-122B-A10B-FP8 auditor then scored each item 0–100, keeping 85–100, rewriting 50–84, and discarding anything below 50, cutting the pool to 440,100. K-center greedy selection over BGE-M3 embeddings compressed overrepresented sources (RACE from 60,180 to 5,000; AquilaEdu from 23,226 to 2,000; CJEval from 17,178 to 2,000), and a GPT-5.6-Terra scorer on 1–5 rubric dimensions retained only items scoring at least 3 everywhere, with 4 required for correctness, validity, and grounding. Only 121,318 examples survived. Token-budgeted selection then produced the final 60,951, because a tutoring dialogue consumes an order of magnitude more supervised tokens than a hint.

## Where the gains land, and where a proprietary model still leads
Curriculum grounding is the cleanest result: OmniEdu-27B takes the best K12-Bench overall score of the evaluated set while remaining second to Kimi-K3 on EDUMATH (86.95% MaC against 90.00%). Tutoring is where the capability-oriented mixture separates from scale alone — the base models were weak scaffolders (Qwen3.5-4B at 20.42% Scaffold win rate) and the tuned models are not, and the tuned 4B model reaches 65.88% on LongTutor Evidence where its base sat at 25.67%. It is not a sweep: Claude-Opus-5 scores 87.89% on MathTutorBench Scaffold against OmniEdu-27B's 78.74%, and Kimi-K3 leads TutorBench at 63.65% against 59.42%. The honest reading is that a compact open model trained on capability-labeled data closes most of the gap on teaching behaviors, unevenly.

## What this means for practice
- **Instructors.** Judge a [[intelligent-tutoring|tutoring system]] by how it scaffolds, not only by whether it answers correctly: answer accuracy and scaffold win rate were supervised here as separate capabilities, and models tuned for both improved on both.
- **Software developers.** The weights, training data, and pipeline are published, so a school or vendor can fine-tune a 4B or 9B model in-house; the tuned 4B model lifted Scaffold win rate by 55 points over its base.
- **Curriculum designers.** Treat [[recommender-systems-and-learning-paths|prerequisite relations]], grade alignment, and difficulty as trainable supervision rather than metadata: K12-Bench prerequisite EM moved from 60.32% to 73.67% once curriculum structure became an explicit capability target.
- **Researchers.** Report curriculum grounding, subject solving, and tutoring separately; one aggregate would hide that this family is strongest at scaffolding and history use and weakest at knowledge-state diagnosis.

## Limitations
- Five open-weight baselines and GLM-5.3 do not accept image inputs, so they got only the text of image-dependent examples, making multimodal comparisons asymmetric.
- Knowledge-state diagnosis accuracy reached only 54.04% for the best model, so the pipeline does not yet deliver reliable inference of what a learner actually knows.
- Superiority is not uniform: Claude-Opus-5 beat OmniEdu-27B on MathTutorBench Scaffold (87.89% versus 78.74%), and Kimi-K3 led on EDUMATH MaC (90.00% versus 86.95%) and TutorBench (63.65% versus 59.42%).
- Evaluation is entirely [[benchmark]]-based; the paper reports no classroom deployment, learner outcome, or [[teacher-role|teacher]]-in-the-loop study.

## Connected Concepts
- [[pedagogical-llm-training]]
- [[scaffolding]]
- [[curriculum-design]]
- [[open-source]]
- [[intelligent-tutoring]]
- [[benchmark]]
- [[llm]]
- [[cognitive-diagnosis]]
- [[misconceptions]]
- [[student-modeling]]
- [[multimodal]]
- [[ai-ed-evaluation]]

## Connected Articles
- [[cdpk-pedagogy-benchmark-llms]] — Benchmarking the Pedagogical Knowledge of Large Language Models
- [[astra-multi-agent-tutoring-benchmark-2026]] — ASTRA: A synthetic benchmark for trace-based evaluation of socially intelligent multi-agent tutoring
- [[ai-tutoring-quality-k12-methodologies-2026]] — Methodologies for Improving the Quality of AI Tutoring in K-12 Education
- [[ai-tutor-behavioral-evaluation]] — The Missing Evaluation Axis: What 10,000 Student Submissions Reveal About AI Tutor Effectiveness
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — Effective Personalized AI Tutors via LLM-Guided Reinforcement Learning
- [[adaptive-intelligent-tutoring-primary-mathematics-2026]] — Effectiveness of adaptive versus non-adaptive intelligent tutoring systems in early primary mathematics
- [[connected-ai-lesson-planning-vietnam]] — ConnectED: A Curriculum-Aligned AI System for Vietnamese Instructional Lesson Planning and Student Learning

## Citation
Liang, H., Lin, Q., Qiang, M., Sun, L., Feng, H., Chen, M., Qiu, S., & Zhang, W. (2026). [OmniEdu: Open Foundation Models for Learning and Teaching](https://arxiv.org/abs/2609.23088). arXiv:2609.23088.