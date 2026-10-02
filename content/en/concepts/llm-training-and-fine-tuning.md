---
title: LLM Training and Fine-Tuning
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-02T08:08:45-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works]
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [generative-ai, llm, intelligent-tutoring, adaptive-learning, reinforcement-learning, open-source, educational-nlp]
audience: [educational technology developers, software developers, instructional designers, researchers]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
reviewed_by: [editor]
---

> **LLM Training and Fine-Tuning** — how educational AI models are made: the pipeline from pretraining through post-training to adaptation, what each stage costs, and what the evidence says it buys. The organizing problem is an **incentive mismatch**: general-purpose models are optimized to answer, while teaching requires withholding the answer. Post-training and fine-tuning are the two levers that change that behavior, and the knowledge base's clearest result is that they are a *third* choice, not the first — retrieval and prompting come earlier in the decision, and one study here found supervised fine-tuning failing at a task where plain prompting won ([[wraft-automated-writing-evaluation-argumentative-2026|WrAFT]]). Written for educational software developers and teaching practitioners deciding what to build with.

## Questions to Consider

- If you have a tutoring task where a general model answers too readily, is your first move a better prompt, retrieval over your own materials, or training? What would you need to measure to tell which one helped?
- Fine-tuning needs data. Where would your project's training examples come from, who owns them, and what privacy review would they need before they could be used?
- A study here found that fine-tuning a model on assessment data improved *formatting and similarity* while a separate fine-tune failed outright at generating feedback. What does that suggest about matching the training method to the task?
- Post-training with reinforcement learning can teach a model to guide rather than answer. What reward would you write to capture "guides well", and how would a model game it?
- The knowledge base reports that model and prompt choice account for only about 15% of the gap between an LLM and student learning gains. If that is right, how should it change your build-versus-buy decision?
- A fine-tuned model that is accurate can still be unsafe across a long conversation. What would you test before letting one talk to students unsupervised?

## Introduction

Educational AI development runs into the same wall from two directions. General-purpose language models are post-trained on human preference for helpfulness, which in practice means answering promptly and completely; tutoring requires the opposite, because the pedagogical goal is to help a student reach the answer rather than to hand it over. At the same time, a general model knows nothing about your curriculum, your rubric, or your institution's voice, and no amount of prompt engineering reliably installs those.

This page covers the techniques that change a model rather than the text you send it. They sit on a **ladder of increasing commitment**: prompting, then retrieval, then parameter-efficient adaptation, then full fine-tuning, then post-training with preference or reward signals. Each rung costs more data, more compute, and more evaluation discipline than the last, and each is a worse first choice than the rung below it unless a specific measurement justifies the climb. Much of the research literature reports only the top of that ladder, which makes it easy for a developer to reach for training when retrieval would have been sufficient.

The page is organized around the decisions a builder actually faces: which lever to pull (this section and the next), what adaptation buys and costs in practice, what post-training can shape that adaptation cannot, and how these systems fail. Terminology is used in its standard sense: **pretraining** is the from-scratch stage on a general corpus, **post-training** is everything after it that shapes behavior (supervised fine-tuning, preference optimization, reinforcement learning), and **fine-tuning** covers both the supervised stage of post-training and the later task- or domain-adaptation work, including parameter-efficient methods.

## The training pipeline, stage by stage

Three stages, with very different accessibility. Knowing which one a paper is describing prevents most misreadings of this literature.

**Pretraining** builds a base model from a general text corpus. It is the stage that produces the model's broad capability, and it is out of reach for essentially every educational project: the cost is measured in millions of dollars and the data is a web-scale crawl. Nothing in this knowledge base does it. Its relevance to practitioners is diagnostic rather than actionable — pretraining data is the dominant lever on how a model behaves, and it is the one lever you cannot pull. That asymmetry is why the field's remaining techniques all operate on an already-trained model.

**Post-training** shapes behavior on top of the base model. Supervised fine-tuning (SFT) teaches the model to imitate demonstrations; preference optimization and reinforcement learning then push it toward outputs a reward model or a set of human judgments rates higher. This is the stage where a model can be taught to guide instead of answer, and it is where the most striking educational results live. It is also the stage most sensitive to reward design, because a reward is a compressed specification of what you want and models optimize whatever you actually wrote.

**Adaptation** fits an existing model to your task or domain, usually with far less data and compute. Parameter-efficient fine-tuning (PEFT), of which LoRA is the common form, trains a small number of added parameters and leaves the base weights frozen. Full fine-tuning updates everything. Distillation and unlearning sit alongside them. The sections below take each in turn. For most educational developers this is the practical stage — the one where a few hundred to a few thousand examples and a single GPU can produce a deployable model.

## Prompt, retrieve, or train? The decision that comes first

The strongest single result in this knowledge base on that question is a retrieval study, not a training study. Building a course knowledge-base assistant, Shen et al. (2026) evaluated local models in three configurations and found that **retrieval, not the model, is the first-order design decision**: their local LLM with no retrieval reached only **52.3%** accuracy, *below* a TF-IDF baseline of **55.4%**, while adding [[rag|retrieval-augmented generation]] with no fine-tuning at all lifted it to **66.6%** ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). The fine-tuning configurations they also tested are reported alongside retrieval ablations, quantization and energy per query, which makes the comparison unusually honest: a base model with no grounding can be worse than a decades-old lexical method, and the cheapest fix is not training.

What the field actually builds reflects a similar ordering. A PRISMA-guided review of 23 empirical studies (2020–2025) on customizing AI for [[writing-education|writing instruction]] found **prompt engineering dominant (N = 13), ahead of fine-tuning (N = 7) and hybrid architectures (N = 3)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). The review's sharper finding is a structural misalignment rather than a technique ranking: stated pedagogical goals have moved toward writing processes, [[feedback-literacy|feedback literacy]] and higher-order academic skills, while the dominant implementations still pursue product-focused goals through prompt design or fine-tuning.

Where prompting and training have been compared head-to-head, the result depends on the task, which is exactly why the decision should be measured rather than assumed:

- **Training wins when the target is a stable output format or a controlled property.** On automatic item generation for L2 listening assessment, iterative prompt refinement plateaued, and fine-tuning GPT-4.1 *on the optimized prompt* then improved generation beyond prompting alone — isolating model adaptation, rather than prompt design, as the driver of the remaining gain ([[gpt-item-generation-l2-listening-2026]]).
- **Prompting wins when the target is judgment-laden text.** The same system that fine-tuned successfully for *scoring* failed at *feedback*: in WrAFT, a fine-tuned GPT-4o module reached QWK 0.84 and RMSE 0.44 on 360 held-out TOEFL essays, but supervised fine-tuning for feedback generation produced truncated and unparseable output, while directly prompting Claude 3.7 produced the feedback teachers rated best ([[wraft-automated-writing-evaluation-argumentative-2026]]). Fine-tuning taught the model to hit a score; it did not teach it to write.
- **Prompt-level shaping can substitute for training when the target is a persona or a rubric.** Rubric-guided prompting, iteratively co-refined, raised LLM–human agreement on student design work from **54.75% to 81.25%** (Cronbach's Alpha 0.393 → 0.798) without any fine-tuning ([[yasar-llms-iterative-pedagogical-design-2026]]), and a literature-grounded custom-GPT prompt elicited target mathematical misconceptions at **0.98** presence against **0.40** for a broad prompt ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).
- **There is a ceiling on all of it.** Hardy and Kim (2026) estimate that model and prompt choice together account for only about **15%** of the misalignment between LLMs and student learning gains, with the rest shared across models, and they found that benchmark-weighting and unanimous-voting ensembles made alignment *worse* ([[educational-llm-alignment]]). If pretraining data is the dominant lever and it is the one you cannot pull, then expectations for what any of these techniques can achieve should be calibrated accordingly.

## What fine-tuning buys: controllability over scale

When a general model cannot be made to hold a property you need, fine-tuning on a modest dataset often can — and the recurring result is that *targeting beats size*. Three 8B models fine-tuned on an expert-designed children's reading curriculum outperformed zero-shot GPT-4o and Llama 3.3 70B on difficulty-related metrics, with negligible safety issues. The authors frame this as **controllability over scale**, since a compact model can be tuned to a specific reading level and error pattern in a way a general model cannot be asked to ([[llm-children-reading-story-generation]]).

The pattern repeats across very different tasks:

- **Curriculum grounding.** A 24,795-example multilingual instruction dataset grounded in Indian Knowledge Systems produced a 7B fine-tune scoring **6.39** on a five-judge external panel (median over 1,201 stratified items). That is within **0.15** of a strong general reference model at a fraction of the deployment cost — while the same base model scored **near zero on IKS-specific dimensions** without the fine-tune ([[iks-instruct-dataset-indian-knowledge]]). That gap between "competent generally" and "competent here" is the whole case for domain adaptation. Note also the counterintuitive detail the authors report: quality did **not** rise monotonically with data curation.
- **Assessment reliability, cheaply.** A single LoRA adapter trained on roughly **3,900** pooled graded examples brought five small open models (4B–30B) to parity or better with a human grader across two computer-science exams, and nearly erased persona sensitivity (drift ≤ 0.32 MAE) ([[llm-graders-computer-science-exams-2026]]). One adapter, one dataset, several base models — this is the shape of a practical deployment.
- **Selective automation.** Confidence was a reliable predictor of scoring error (β = −0.602, p < .001). Routing the least confident **20%** of responses to human review moved a fine-tuned GPT-3.5 model from r = 0.781 to **r = 0.822** (RMSE 0.5990 → 0.5544) while cutting manual scoring work by roughly **80%** ([[know-when-to-trust-ai-scoring-reliability-2026]]). Fine-tuning here is not replacing the human; it is making the human's attention affordable.
- **Measuring constructs you would otherwise hand-score.** Fine-tuned Hungarian transformers (hubert-base-cc, PULI-BERT-Large) were benchmarked against TF-IDF features and Qwen3 embeddings for scoring reflective writing in [[teacher-education|teacher training]] ([[reflection-level-classification-hungarian-essays-2026]]), and a fine-tuned multimodal model (Qwen3.5-based) was shown to reconstruct item characteristic curves for multiple-choice items, learning the response patterns encoded in 3PL and MCM curves rather than being told them ([[multimodal-item-parameter-estimation-2026]]).

## Parameter-efficient adaptation in practice

LoRA and its relatives are where most educational teams will actually work, and the literature contains unusually specific guidance about how they behave.

**Rank is a trade-off, not a dial to maximize.** Lu et al. (2026) built 360 system–user–assistant dialogues from a Linear Control Systems course, restructured answers into a Solution–Method–Teaching-Points format, and applied LoRA to Qwen2.5-3B and 7B at ranks 4, 8 and 16. Structured-output coverage moved from near zero at base to roughly **1.00**, and the best configuration (7B, r = 16) reached ROUGE-L **0.4093** with bootstrap confidence intervals for the gain entirely above zero. But **gain per million adapter parameters fell monotonically as rank rose**, so course-level alignment is a scale-and-rank trade-off rather than a free upgrade ([[lora-finetuned-control-systems-course-qa-2026]]). Their metrics measure similarity and formatting, not derivational accuracy, which is the standard caveat for this whole family of evaluations.

**Scale does not predict success, and identical settings behave differently across architectures.** AiAWE, an open-source automated writing evaluation system built on a LoRA-adapted Gemma-3-27B-it, reached RMSE 0.474, QWK 0.828, and agreement within ±0.5 of the human score on **90.56%** of 360 evaluation essays, outperforming LLaMA-3.3-70B and a fine-tuned GPT-3.5 baseline — while running on a consumer-grade server. Three broader findings matter more than the score: model scale was **not** a reliable predictor of downstream performance under LoRA adaptation, **identical LoRA hyperparameters produced qualitatively different adaptation behaviors across architectures**, and a well-tuned mid-size open model can be competitive with proprietary systems ([[aiawe-automated-writing-evaluation]]).

**Which layers to adapt is a real decision.** In a discourse-analysis system for English teaching, fine-tuning a truncated BERT by updating **only the last four Transformer layers** beat both alternatives: adapting only the top layer hit a lower ceiling, and full 12-layer fine-tuning overfitted and oscillated ([[bert-discourse-english-teaching-2026]]).

**The base architecture can matter more than the parameter count.** Fine-tuning three open text-to-image models on 1,000 captioned nuclear-engineering images substantially improved Stable Diffusion XL, gave limited gains for SD-v3.5-Medium, and produced **no measurable improvement for the flow-matching Flux.1 model at all** ([[nuclear-diffusion-text-to-image-learning-2026]]). A fine-tuning recipe is not portable across architectures, which is the same lesson AiAWE reports from the other direction.

Two adjacent techniques round out the adaptation stage. **Distillation** compresses a large or black-box system into a small deployable one. A two-stage pipeline distilled a fitted black-box ML estimator and its post-hoc interpretation into a small open-weight LLM, with a 2B-parameter "mentee" achieving near-lossless recovery of the oracle effect surface (r > .90). That result is reported under a faithfulness-first evaluation that audits every narration against the attribution it claims to describe ([[distilling-self-explaining-lm-learning-analytics-2026]]). **Unlearning** removes targeted content after training: gradient-based unlearning was applied to three models to strip PII and harmful content, tested in two removal orders (PII-first and harmful-content-first) ([[llm-unlearning-math-privacy]]) — the relevant tool when a model has memorized something it should not carry.

## Post-training: shaping behavior, not just format

Adaptation teaches a model *what to produce*; post-training teaches it *how to behave*. This is where the pedagogical results are most striking, and where the design of the reward or preference signal decides everything.

**The pipeline result.** Singh et al. (2026) transformed Qwen3-32B into EduQwen through three stages — initial RL, synthetic SFT, final RL — reaching **96.52%** on the CDPK benchmark and surpassing Gemini-3 Pro's **90.55%**. The intermediate results are the instructive part: the first RL stage alone reached 94.13%, SFT on 40,000 self-generated responses took it to 96.20%, and the final RL round added the last fraction. The reward model prioritized **guiding responses over direct answers**, hard-negative mining excluded questions the base model already solved, and rollouts were extended from 5 to 8 steps to capture multi-step pedagogical decisions ([[singh-eduqwen-pedagogical-rl-2026]]). Against that, the Pedagogy Benchmark — drawn from real teacher professional-development exams across **97 models** — found accuracy ranging from **28% to 89%**, evidence that pedagogical knowledge is not acquired incidentally during general pretraining ([[cdpk-pedagogy-benchmark-llms|Lelièvre et al., 2025]]).

**Training the decision rather than the utterance.** TACT post-trained a tutor on a 13-strategy taxonomy plus a two-axis student-move taxonomy and gained **20.30 points** over its Qwen3.5-4B backbone, with a diagnostic benchmark that withholds the learner-state labels available during training so the model must infer state from dialogue ([[tact-pedagogically-adaptive-esl-tutoring]]). The same logic appears in Special-R1 for [[special-education|special education]] alignment ([[special-r1-rl-special-education]]) and in heuristic-RL work that aligns models as Socratic guides rather than answerers ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Post-training need not only shape what the model says: one platform pairs a guarded tutoring chatbot with a reinforcement-learning agent that chooses the next practice problem, so the trained policy decides what the learner does next ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

**Distilled reasoning models.** A cheaper route to pedagogical behavior is to teach a small model to imitate a larger one: Pedagogy-R1 (1.5B and 7B) was instruction-tuned on pedagogically filtered outputs distilled from a QwQ-32B teacher, paired with Chain-of-Pedagogy prompting ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

**Instruction-conditioned post-training versus authentic data.** LearnLM frames education-model training as *pedagogical instruction following*, carrying system-level instructions that let developers and teachers specify tutor behavior without committing to one definition of pedagogy. It is mixed into Gemini's post-training stages by co-training, and experts preferred it over GPT-4o (**+31%**), Claude 3.5 Sonnet (**+11%**) and base Gemini 1.5 Pro (**+13%**). The key finding is that **RL is substantially more effective than SFT alone** for following nuanced pedagogical instructions in long conversations ([[learnlm-improving-gemini-learning]]). TeachLM takes the opposite bet: that [[prompt-engineering|prompt engineering]] is a stopgap and the scarce ingredient is *authentic* learner–tutor interaction data. Trained on **100,000 hours** of one-on-one sessions under rigorous anonymization, it doubles student talk time, improves questioning style, and increases dialogue turns by **50%** ([[teachlm-post-training-llms-education]]). Together they define the design space: instruction-conditioned post-training when your data is scarce, fine-tuning on real tutoring interactions when you have it.

**Supervision quality beats supervision quantity.** SWIM's progression for a writing simulator is the cleanest demonstration. Rubric-grounded prompting gave limited proficiency control (best average trait QWK 0.577 for Claude Sonnet, 0.422 for GPT-5.4, near zero for an open 7B model); supervised fine-tuning lifted that 7B model to **0.474 ± 0.023**. GRPO against an automated-essay-scoring-derived reward lifted it further to **0.618 ± 0.005** across every trait and prompt, with the reward designed as a dense trait-normalized accuracy because exact-match rewards are too sparse in the multi-trait setting ([[swim-student-writing-simulation-2026]]). The misconception-modeling study reaches a sharper conclusion about *what* the supervision must contain: instruction-tuned models learned algebra misconceptions only when trained on **step-level solution traces**, with accuracy staying **below 30% at every data size** when trained on final answers alone. Its student role overgeneralized the learned error until correct examples were explicitly mixed in at ratios as low as **one in four**, while the tutor role showed no such cost, holding correct accuracy from **93% to 98%** across ten jointly trained misconceptions ([[misconception-acquisition-dynamics-llms-2026]]).

The training data is itself something models can curate: Edu-QuRating adapts preference distillation to educational data curation, replacing a single "is this educational?" score with 20 rubric dimensions covering factual accuracy, pedagogical structure and level suitability ([[garrod-edu-qurating-educational-data-curation-2026]]).

**Theory can be a training scaffold.** For agents automating [[learning-design|instructional systems design]], a hybrid of classical ADDIE and Dick & Carey frameworks with ReAct-style reasoning outperformed both pure theory (structured but inflexible) and technique-only agents (flexible but ungrounded), across **25,795** scenarios from a 51-variable context matrix with a multi-judge protocol to reduce LLM-as-judge bias ([[jeon-isd-agent-bench-2026]]). And a study of supervision *labels* found that assigning every training example one target behavior — subject competence, curriculum grounding, diagnostic reasoning, or scaffolding — lifted every model scale tested, with the largest gains in scaffolding and in using a learner's history, while knowledge-state diagnosis remained weakest at **54.04%** ([[omniedu-open-educational-foundation-models-2026]]).

## Training the learner side, not only the tutor

The same machinery is increasingly pointed at simulating students, which changes the economics of evaluating a tutor: instead of recruiting learners, you generate them.

The caution is that simulated students must be validated like any other instrument. Benchmarking fine-tuned and prompted models on **382 held-out dialogues** from the largest public corpus of real student–tutor mathematics dialogues — across seven metrics spanning linguistic, behavioral and cognitive aspects — produced the field's most direct test of whether simulated students behave like students ([[simulated-students-tutoring-dialogues-2026]]). Two further approaches push on fidelity: INSIDE fine-tunes LLMs to both *act* and *think* like students, generating internal dialogue grounded in Bloom's Taxonomy across cognitive, affective and action dimensions and training on paired think-traces and actions ([[inside-llm-student-simulator-reasoning-2026]]), and history-aware profiles condition simulation on a student's prior trajectory rather than a static persona ([[history-aware-student-simulation]]). For a developer, the practical lesson is that a simulator is a measurement instrument and inherits every validity question that implies.

## What goes wrong

**Sycophancy is a training objective, not a usability setting.** Tutoring requires corrective friction, and models resist it. EduFrameTrap shows that models which withstand context-switch attacks still capitulate under authority or social-affective pressure and withhold corrective feedback, which is why its authors argue "kind-but-correct" behavior should be an explicit training requirement rather than a preference ([[eduframetrap-llm-sycophancy-educational-safety]]). Training that rewards guiding over answering — as EduQwen's DAPO reward model does — is one structural lever against it, but [[contextual-sycophancy-ai-literacy|contextual sycophancy]] persists after prompting and alignment, with learners' errors still propagating into AI advice ([[contextual-sycophancy-ai-literacy]]).

**Training does not make a model safe over a long conversation.** SafeTutors shows that even specialized pedagogical models degrade across sustained dialogue and can commit answer over-disclosure harms ([[hazra-safetutors-pedagogical-safety-2026]]), so [[pedagogical-safety|pedagogical safety]] has to be tested at conversation length rather than at the single turn.

**Validation can substitute for training — or be required instead of it.** A frontier untrained GPT-4 produced roughly **35%** too-general, incorrect or answer-revealing hints when authoring feedback for an intelligent tutoring system, and its own automated quality checks misaligned with human judgment; the authors conclude that LLMs lack an internal model of instruction and that robust validation or domain-specific training is needed before unsupervised learner-facing use ([[reddig-maclellan-personalized-feedback-llm-2026]]). The practical implication cuts both ways: sometimes the right answer is a validation layer rather than a training run, and sometimes validation is what tells you a training run failed.

**Your evaluation may be measuring the wrong thing.** This is the most common trap in the fine-tuning literature here. ROUGE-L and QWK measure similarity and ranking, not derivational correctness ([[lora-finetuned-control-systems-course-qa-2026]]); a fine-tune can reach excellent QWK while the same system's feedback is unparseable ([[wraft-automated-writing-evaluation-argumentative-2026]]); and a model can rank students correctly while being wrong about how likely each is to need help. Where the target is a construct, fine-tuning should be paired with an instrument that measures the construct — the confidence-routing result is a good template, since it converts an accuracy number into an operating policy with a human in the loop ([[know-when-to-trust-ai-scoring-reliability-2026]]).

## A practical sequence for educational developers

Distilled from the evidence above, in the order that avoids wasted compute:

1. **Establish a baseline you can beat, including a trivial one.** The course-assistant study's no-retrieval model scored below TF-IDF. Log your prompt-only accuracy before you consider training.
2. **Add retrieval before parameters.** Grounding the model in your own materials is the cheapest large gain reported here (52.3% → 66.6%), and it is reversible.
3. **Engineer the prompt, and re-engineer it iteratively.** Rubric-guided refinement moved agreement from 54.75% to 81.25% with no training at all, and item generation improved only after prompt refinement had plateaued — that plateau is your signal that training might add something.
4. **Fine-tune when the target is a stable format, a controlled property, or a domain the base model lacks.** LoRA on a few thousand examples can put small open models at human-grader parity, and an instruction dataset can take a 7B model from near zero to within 0.15 of a much larger reference on domain-specific dimensions.
5. **Choose rank and layers deliberately, and expect architecture-specific behavior.** Gain per adapter parameter fell as rank rose, four-layer adaptation beat both shallower and full-depth fine-tuning, and one model family improved substantially while another did not move at all.
6. **Use post-training when you need to change *how* the model teaches.** Reward guiding over answering, and expect the reward to be gamed — write it against a benchmark, not an intuition.
7. **Supervise at the step level.** Final-answer-only training produced sub-30% misconception accuracy at every data size.
8. **Keep a human in the loop where confidence is low.** Routing the least confident fifth of responses removed about 80% of manual work while improving agreement.
9. **Test safety across whole conversations.** Long dialogues are where specialized models degrade.
10. **Calibrate expectations.** Model and prompt choice account for only about 15% of the misalignment with learning gains; some of what you want from training is not available from training.

## Open Questions

1. Does pedagogical post-training generalize across subjects, or is subject-specific tuning always needed?
2. Can the RL–SFT–RL pipeline be combined with longitudinal memory for personalization across terms?
3. What is the smallest supervision set that still teaches step-level pedagogical reasoning, and can it be shared across institutions without sharing student data?
4. How should evaluation of fine-tuned educational models be standardized, given that similarity metrics can be excellent while the model is unusable?

## Connections to related concepts

This page is the *how a model is made* companion to [[llm]], which covers what large language models are and how they behave. It sits under [[ai-technologies]] as the training-and-adaptation node, beside [[rag]] (the retrieval alternative that usually comes first), [[prompt-engineering]] (the cheapest lever), and [[reinforcement-learning]] (the RL half of post-training). Its outputs feed [[intelligent-tutoring]] and [[adaptive-learning]]; its most common educational applications are [[automated-assessment]], [[automated-essay-scoring]] and [[ai-feedback-quality]]; and its closest conceptual relatives are [[educational-nlp]], [[simulating-students]], [[open-source]] and [[student-modeling]]. The risks it creates are held by [[pedagogical-safety]], [[ai-sycophancy]], [[hallucination-risk]] and [[privacy]].

## Connected Concepts

- [[llm]] — what these models are; this page is how they are made
- [[ai-technologies]] — umbrella: AI technologies and techniques
- [[rag]] — retrieval, the step before training
- [[prompt-engineering]] — the cheapest lever, and the baseline to beat
- [[reinforcement-learning]] — the RL stage of post-training
- [[intelligent-tutoring]] — the main application domain
- [[adaptive-learning]] — adapting to learners, as distinct from adapting models
- [[automated-assessment]] — where fine-tuned scoring models land
- [[automated-essay-scoring]] — the task most of the scoring evidence comes from
- [[ai-feedback-quality]] — what fine-tuning does and does not fix
- [[educational-nlp]] — the adjacent method family
- [[simulating-students]] — the learner-side application of the same machinery
- [[student-modeling]] — the modeling layer beneath simulation
- [[open-source]] — open weights are what make local fine-tuning possible
- [[benchmark]] — how these systems are evaluated, and the limits of that
- [[assessment-validity]] — why a good metric can still mean a bad instrument
- [[pedagogical-safety]] — what training does not guarantee
- [[ai-sycophancy]] — a behavior post-training can target
- [[hallucination-risk]] — the failure mode fine-tuning cannot cure
- [[privacy]] — the constraint on training data and on unlearning
- [[human-in-the-loop-ai]] — the fallback that makes automation affordable
- [[metacognition]] — a pedagogical target for post-training
- [[scaffolding]] — the behavior the reward functions try to encode
- [[ai-education]] — the field this work serves

## Connected Articles

- [[singh-eduqwen-pedagogical-rl-2026]] — RL–SFT–RL pipeline: 96.52% on CDPK, surpassing Gemini-3 Pro
- [[learnlm-improving-gemini-learning]] — pedagogical instruction following inside Gemini's post-training
- [[teachlm-post-training-llms-education]] — post-training on 100,000 hours of authentic tutoring data
- [[tact-pedagogically-adaptive-esl-tutoring]] — taxonomy-aligned post-training targeting the pedagogical decision
- [[swim-student-writing-simulation-2026]] — SFT and GRPO against rubric prompting, with reward design detail
- [[misconception-acquisition-dynamics-llms-2026]] — step-level traces as the binding requirement for misconception training
- [[jeon-isd-agent-bench-2026]] — theory-grounded instructional design agents across 25,795 scenarios
- [[wang-socratic-guides-heuristic-reinforcement-learning-2026]] — heuristic RL to align models as Socratic guides
- [[special-r1-rl-special-education]] — reinforcement learning for special education alignment
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — LLM-guided reinforcement learning for personalization
- [[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]] — a pedagogical large reasoning model
- [[omniedu-open-educational-foundation-models-2026]] — one target behavior per example, across model scales
- [[garrod-edu-qurating-educational-data-curation-2026]] — curating educational data for training
- [[lora-finetuned-control-systems-course-qa-2026]] — LoRA rank effects and gain per adapter parameter
- [[aiawe-automated-writing-evaluation]] — LoRA-adapted AWE where scale did not predict success
- [[llm-graders-computer-science-exams-2026]] — one adapter on ~3,900 examples reaching human-grader parity
- [[iks-instruct-dataset-indian-knowledge]] — a 24,795-example instruction dataset and the near-zero base baseline
- [[llm-children-reading-story-generation]] — controllability over scale for reading-level control
- [[bert-discourse-english-teaching-2026]] — which layers to fine-tune, and why four beat twelve
- [[nuclear-diffusion-text-to-image-learning-2026]] — architecture, not parameter count, decides whether fine-tuning works
- [[distilling-self-explaining-lm-learning-analytics-2026]] — distillation into a 2B model with a faithfulness audit
- [[llm-unlearning-math-privacy]] — gradient-based unlearning of PII and harmful content
- [[reflection-level-classification-hungarian-essays-2026]] — fine-tuned transformers versus classical and embedding baselines
- [[multimodal-item-parameter-estimation-2026]] — learning IRT curves from multimodal items
- [[know-when-to-trust-ai-scoring-reliability-2026]] — confidence routing as the human-in-the-loop policy
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — retrieval as the first-order decision, with energy and VRAM reported
- [[customizing-ai-writing-pedagogy-systematic-review-2026]] — 23 studies: prompting 13, fine-tuning 7, hybrid 3
- [[gpt-item-generation-l2-listening-2026]] — prompting plateaus, then fine-tuning adds the rest
- [[wraft-automated-writing-evaluation-argumentative-2026]] — fine-tuning won at scoring and failed at feedback
- [[educational-llm-alignment]] — the ~15% ceiling on model and prompt choice
- [[yasar-llms-iterative-pedagogical-design-2026]] — rubric-guided prompting as the no-training alternative
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]] — prompt-level persona control for misconception simulation
- [[eduframetrap-llm-sycophancy-educational-safety]] — sycophancy as an explicit training requirement
- [[contextual-sycophancy-ai-literacy]] — sycophancy surviving prompting and alignment
- [[hazra-safetutors-pedagogical-safety-2026]] — safety degrading over sustained dialogue
- [[reddig-maclellan-personalized-feedback-llm-2026]] — ~35% unusable hints from an untrained frontier model
- [[simulated-students-tutoring-dialogues-2026]] — whether simulated students behave like students
- [[inside-llm-student-simulator-reasoning-2026]] — fine-tuning a model to act and think like a student
- [[history-aware-student-simulation]] — simulation conditioned on a learner's trajectory