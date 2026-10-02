---
title: "How Can We Make AI Better at Supporting Learning in Our Own Subject?"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-02T08:07:09-04:00"
weight: 74
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, rag, prompt-engineering, open-source, machine-learning]
assessment: [automated-assessment]
audience: [educational technology developers, software developers, instructional designers]
level: [higher ed, k 12]
discipline: [writing education]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-02"
    agent: hermes-agent
---

A general-purpose model will happily answer a student's question for them, and it knows nothing about your curriculum, your rubric, or the mistakes your students actually make. Closing that gap is usually framed as a training problem. In this knowledge base it is mostly a **grounding and prompting** problem, and the evidence for that ordering is unusually direct: a course-assistant study found that retrieval, not the model, was the first-order decision, and that a general model with no grounding scored *below* a plain TF-IDF baseline.

Training is real and sometimes necessary, but it is the third or fourth thing to try rather than the first. What follows is the ladder in the order that avoids wasted compute.

## The short version

There are five levers, in increasing order of cost and commitment: **prompting**, **retrieval** over your own materials, **parameter-efficient adaptation** ([[llm-training-and-fine-tuning|LoRA]] and similar), **full fine-tuning**, and **post-training** with preference or reward signals. Each rung costs more data, more compute and more evaluation discipline than the one below it, and each is a worse first choice unless a measurement justifies the climb.

The research literature reports mostly the top of that ladder, which is why it is easy to reach for training when grounding would have been enough.

## Step 1: Get a baseline you can actually beat

Before changing anything, log what you get from a plain prompt. Then log what a trivial method gets, because that is the number that keeps you honest.

The [[shen-sustainable-ai-knowledge-base-cs-education-2026|course knowledge-base assistant]] study is worth reading for this alone. A local LLM with no retrieval reached **52.3%** accuracy. A TF-IDF baseline — a lexical method decades old — reached **55.4%**. The model was worse than the classical method.

If you skip this step you cannot tell whether your fine-tune helped, and you may ship something that a keyword search beats.

## Step 2: Ground the model in your own materials

Adding [[rag|retrieval-augmented generation]] over the course materials, with no fine-tuning at all, lifted that same system from 52.3% to **66.6%**. That is the largest single gain reported in this knowledge base for the cost, and it is reversible: when your documents change, you re-index rather than retrain.

Two other results point the same way. A PRISMA review of 23 empirical studies on customizing AI for [[writing-education|writing instruction]] found **prompt engineering dominant (N = 13), ahead of fine-tuning (N = 7)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). And where a knowledge base has to stay current, retrieval is the only lever that stays current without re-running a training job.

Retrieval also has a pedagogical form. Grounding a model in your own worked examples and rubrics is how it stays inside the [[scaffolding|scaffold]] you designed rather than drifting into generic advice.

## Step 3: Engineer the prompt against a rubric

Prompt work is not a preliminary you do while waiting to train. Two results here show what it achieves on its own:

- **Rubric-guided prompting, iteratively co-refined, raised LLM–human agreement on student design work from 54.75% to 81.25%** (Cronbach's Alpha 0.393 → 0.798), with no fine-tuning at all ([[yasar-llms-iterative-pedagogical-design-2026]]).
- A literature-grounded custom prompt elicited target mathematical [[misconceptions]] at **0.98** presence, against **0.40** for a broad prompt ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).

The practical signal is the **plateau**. In the item-generation study, iterative prompt refinement stopped improving, and fine-tuning GPT-4.1 *on the optimized prompt* then added the remaining gain ([[gpt-item-generation-l2-listening-2026]]). A plateau after real prompt work is your evidence that training might add something. Reaching for training before you have hit one is guessing.

## Step 4: Adapt the model when the target is stable and specific

Adaptation pays when you need the model to hold a property reliably: a reading level, an output format, a domain it lacks. The recurring result is that **targeting beats size**.

- Three **8B** models fine-tuned on an expert-designed children's reading curriculum outperformed zero-shot GPT-4o and Llama 3.3 70B on difficulty-related metrics, with negligible safety issues. The authors frame this as **controllability over scale** ([[llm-children-reading-story-generation]]).
- A **24,795-example** instruction dataset grounded in Indian Knowledge Systems produced a **7B** fine-tune scoring **6.39** on a five-judge external panel, within **0.15** of a strong general reference model at a fraction of the deployment cost — while the same base model scored **near zero on domain-specific dimensions** without the fine-tune ([[iks-instruct-dataset-indian-knowledge]]). That gap between "competent generally" and "competent here" is the entire case for domain adaptation.
- A single [[llm-training-and-fine-tuning|LoRA]] adapter trained on roughly **3,900** pooled graded examples brought five small open models (4B–30B) to parity or better with a human grader across two computer-science exams ([[llm-graders-computer-science-exams-2026]]). One adapter, one dataset, several base models: that is the shape of a deployment a small team can actually run.

Note the word *stable* in the heading. Format, rubric, reading level and domain vocabulary are stable targets. Judgment-laden prose is not, and that is where adaptation fails.

## Step 5: Change how it behaves, not just what it produces

Adaptation teaches a model *what to produce*. Post-training teaches it *how to behave*, and for tutoring that distinction is the whole problem: general models are post-trained on human preference for helpfulness, which means answering promptly, while teaching requires withholding the answer.

This is where the strongest educational results live. EduQwen's reward model explicitly prioritized **guiding responses over direct answers**, and its three-stage pipeline reached **96.52%** on the CDPK benchmark against Gemini-3 Pro's **90.55%** ([[singh-eduqwen-pedagogical-rl-2026]]). SWIM's writing simulator moved from rubric-grounded prompting (best QWK **0.577**) to supervised fine-tuning (**0.474 ± 0.023**) to reinforcement learning (**0.618 ± 0.005**) across every trait and prompt ([[swim-student-writing-simulation-2026]]).

One finding in this area is easy to miss and expensive to ignore: **supervision quality beats supervision quantity**. Instruction-tuned models learned algebra misconceptions only when trained on **step-level solution traces**; trained on final answers alone, accuracy stayed **below 30% at every data size** ([[misconception-acquisition-dynamics-llms-2026]]). If your training examples are question-and-correct-answer pairs, you are training the wrong thing.

## When adapting the model does not help

This is the part the enthusiasm usually skips.

- **Judgment-laden text.** In WrAFT, the same project that fine-tuned successfully for *scoring* essays (QWK 0.84) produced truncated and unparseable output when it fine-tuned for *feedback*, while directly prompting Claude 3.7 produced the feedback teachers rated best ([[wraft-automated-writing-evaluation-argumentative-2026]]). Fine-tuning taught the model to hit a score; it did not teach it to write.
- **Scale is not a reliable predictor** of downstream performance under LoRA adaptation, and **identical hyperparameters produced qualitatively different behavior across architectures** ([[aiawe-automated-writing-evaluation]]). A recipe that worked on one model is not a recipe.
- **Architecture can matter more than parameter count.** Fine-tuning three open text-to-image models on 1,000 captioned nuclear-engineering images substantially improved Stable Diffusion XL, gave limited gains for SD-v3.5-Medium, and produced **no measurable improvement for Flux.1 at all** ([[nuclear-diffusion-text-to-image-learning-2026]]).
- **Sometimes the answer is validation instead of training.** A frontier untrained GPT-4 produced roughly **35%** too-general, incorrect or answer-revealing hints when authoring tutoring feedback, and its own automated quality checks disagreed with human judgment ([[reddig-maclellan-personalized-feedback-llm-2026]]).

## What it takes in practice

For the adaptation rung the bar is lower than most teams assume: **a few hundred to a few thousand examples and a single GPU**. LoRA trains a small number of added parameters and leaves the base weights frozen, so several models can be served from one adapter.

Rank is a trade-off rather than a dial to maximize: gain per million adapter parameters fell monotonically as rank rose, and course-level alignment was a scale-and-rank decision rather than a free upgrade ([[lora-finetuned-control-systems-course-qa-2026]]). Which layers you adapt is also a real choice — updating **only the last four Transformer layers** of a BERT-based discourse analyzer beat both adapting only the top layer and full-depth fine-tuning ([[bert-discourse-english-teaching-2026]]).

The cost that is easy to underestimate is evaluation, not compute. See [[checking-whether-educational-ai-works|How do we know an educational AI is working correctly, not just scoring well?]]

## Calibrate what you expect

Model and prompt choice together account for only about **15%** of the misalignment between LLMs and student learning gains, and in that study benchmark-weighting and unanimous-voting ensembles made alignment *worse* ([[educational-llm-alignment]]). Pretraining data is the dominant lever on how a model behaves, and it is the one lever you cannot pull.

That is not an argument against the work above. It is an argument against expecting a fine-tune to fix a design problem. If the issue is that your tutor answers too readily, training may address it. If the issue is that your learners do not engage with it, training will not.

## A short decision order

**1.** Log a prompt-only baseline, including a trivial one.
**2.** Add retrieval over your own materials.
**3.** Engineer the prompt iteratively against your rubric, and watch for the plateau.
**4.** Adapt the model with LoRA when the target is a stable format, rubric, level or domain.
**5.** Post-train only when you need to change *how* it behaves, and write the reward against a benchmark, because it will be gamed.
**6.** Supervise at the step level, not the answer level.
**7.** Keep a human in the loop where confidence is low.
**8.** Test safety across whole conversations, not single turns.

## Related questions

- [[training-ai-tutors-to-guide-rather-than-answer|How do we train an AI tutor to guide students rather than answer them?]] — the post-training half in detail
- [[checking-whether-educational-ai-works|How do we know an educational AI is working correctly, not just scoring well?]] — how to tell whether any of it worked
- [[developing-ai-tutor|What are best practices for developing an effective AI tutor?]] — the interaction-design side of the same goal
- [[designing-educational-ai-software|What are best practices and tips for designing effective educational AI software?]]
- [[llm-training-and-fine-tuning]] — the full concept page