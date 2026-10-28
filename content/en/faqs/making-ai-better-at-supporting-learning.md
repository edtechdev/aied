---
title: "How Can We Make AI Better at Supporting Learning in Our Own Subject?"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-28T11:21:19-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works, developing-ai-tutor, designing-educational-ai-software]
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-28"
    agent: hermes-agent
---

The ticket says "fine-tune the model on our course materials." The budget is approved, a GPU is booked for next month, and a graduate student has been asked to assemble a dataset. Nobody on the call has asked what a plain prompt scores, or what a keyword search scores, on the same questions.

Ask those two questions first. In this knowledge base, the gap between a general model and a course-competent one is mostly a grounding and prompting problem, and the evidence for that ordering is unusually direct: a course-assistant study found retrieval, not the model, was the first-order decision, and a general model with no grounding scored *below* a plain TF-IDF baseline.

Training is real and sometimes necessary. It is the third or fourth thing to try, and the work below is ordered so that you find out which rung you actually need before you spend the quarter's compute.

## The short version

**1.** Log what a plain prompt scores, and what a trivial lexical method scores, before you change anything. That second number is what keeps you honest.

**2.** Put retrieval over your own materials in front of the model. It is the largest single gain reported here for the cost, and it is reversible.

**3.** Engineer the prompt against your rubric and iterate until improvement stops. The plateau is the signal that training might add something.

**4.** Adapt the weights with [[llm-training-and-fine-tuning|LoRA]] when the target is stable and narrow: a format, a rubric, a reading level, a domain vocabulary.

**5.** Post-train when the problem is behavior rather than content, and write the reward against a benchmark you expect to be gamed.

**6.** Build the training set at step level. Answer-only data does not teach a misconception.

## Get a baseline you can actually beat

Before changing anything, log what a plain prompt returns. Then log what a trivial method returns.

The [[shen-sustainable-ai-knowledge-base-cs-education-2026|course knowledge-base assistant]] study is worth reading for this alone. A local LLM with no retrieval reached **52.3%** accuracy. A TF-IDF baseline, a lexical method decades old, reached **55.4%**. The model was worse than the classical method.

Skip this step and you cannot tell whether your fine-tune helped. Worse, you can ship a system that a keyword search beats and only find out when a teaching assistant mentions it. Two numbers on a spreadsheet, taken in an afternoon, protect the rest of the budget.

## Ground the model in your own materials

Adding [[rag|retrieval-augmented generation]] over the course materials, with no fine-tuning at all, lifted that same system from 52.3% to **66.6%**. That gain came from an index, and it comes with a property a training run does not have: when your documents change, you re-index.

Two other results point the same way. A PRISMA review of 23 empirical studies on customizing AI for [[writing-education|writing instruction]] found **prompt engineering dominant (N = 13), ahead of fine-tuning (N = 7)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Where a knowledge base has to stay current, retrieval is the only lever that stays current without re-running a training job.

Retrieval also has a pedagogical form. Grounding a model in your own worked examples and rubrics is how it stays inside the [[scaffolding|scaffold]] you designed, answering at the level you set instead of drifting into generic advice. That drift is the most common complaint about off-the-shelf tutors, and it is a retrieval problem more often than a weights problem.

## Write the prompt against your rubric, and watch for the plateau

Prompt work is not a preliminary you do while waiting for the GPU. Two results show what it achieves alone:

- **Rubric-guided prompting, iteratively co-refined, raised LLM-human agreement on student design work from 54.75% to 81.25%** (Cronbach's Alpha 0.393 to 0.798), with no fine-tuning at all ([[yasar-llms-iterative-pedagogical-design-2026]]).
- A literature-grounded custom prompt elicited target mathematical [[misconceptions]] at **0.98** presence, against **0.40** for a broad prompt ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).

The practical signal is the **plateau**. In the item-generation study, iterative prompt refinement stopped improving, and fine-tuning GPT-4.1 *on the optimized prompt* then added the remaining gain ([[gpt-item-generation-l2-listening-2026]]). A plateau after real prompt work is evidence that training has room to add something. Reaching for training before you hit one is guessing, and guessing costs a month.

Note what the item-generation result implies about sequencing. The fine-tune was built on the optimized prompt, so the prompt work was not wasted when the team eventually trained. The cheap rung is also the specification for the expensive one.

## Adapt the weights when the target is stable and narrow

Adaptation pays when you need the model to hold a property reliably: a reading level, an output format, a domain it lacks. The recurring result is that **targeting beats size**.

- Three **8B** models fine-tuned on an expert-designed children's reading curriculum outperformed zero-shot GPT-4o and Llama 3.3 70B on difficulty-related metrics, with negligible safety issues. The authors frame this as **controllability over scale** ([[llm-children-reading-story-generation]]).
- A **24,795-example** instruction dataset grounded in Indian Knowledge Systems produced a **7B** fine-tune scoring **6.39** on a five-judge external panel, within **0.15** of a strong general reference model at a fraction of the deployment cost. The same base model scored **near zero on domain-specific dimensions** without the fine-tune ([[iks-instruct-dataset-indian-knowledge]]). That gap between competent generally and competent here is the whole case for domain adaptation.
- A single [[llm-training-and-fine-tuning|LoRA]] adapter trained on roughly **3,900** pooled graded examples brought five small open models (4B to 30B) to parity or better with a human grader across two computer-science exams ([[llm-graders-computer-science-exams-2026]]). One adapter, one dataset, several base models: that is the shape of deployment a small team can run.

The word *stable* in the heading carries the weight. Format, rubric, reading level and domain vocabulary are stable targets. Judgment-laden prose has no such target, and that is where adaptation fails, as the next two sections show.

## Change the behavior when the answers are the problem

Adaptation teaches a model *what to produce*. Post-training teaches it *how to behave*. For tutoring that distinction is the whole problem: general models are post-trained on human preference for helpfulness, which means answering promptly, and teaching requires withholding the answer.

The strongest educational results in this corpus live here. EduQwen's reward model explicitly prioritized **guiding responses over direct answers**, and its three-stage pipeline reached **96.52%** on the CDPK benchmark against Gemini-3 Pro's **90.55%** ([[singh-eduqwen-pedagogical-rl-2026]]). SWIM's writing simulator moved from rubric-grounded prompting (best QWK **0.577**) to supervised fine-tuning (**0.474 ± 0.023**) to reinforcement learning (**0.618 ± 0.005**) across every trait and prompt ([[swim-student-writing-simulation-2026]]).

Read the SWIM numbers carefully, because the middle step went backwards. Supervised fine-tuning on demonstrations made the simulator worse than the prompt it started from, and only the reward signal recovered the loss and then beat the baseline. If your plan stops at supervised fine-tuning, the plan may be a detour.

## Supervise at the step level

One finding here is easy to miss and expensive to ignore: **supervision quality beats supervision quantity**. Instruction-tuned models learned algebra misconceptions only when trained on **step-level solution traces**. Trained on final answers alone, accuracy stayed **below 30% at every data size** ([[misconception-acquisition-dynamics-llms-2026]]).

If your training examples are question-and-correct-answer pairs, you are training the wrong thing, and adding examples will not repair it. What you need is the intermediate work: the wrong turn, the step where the student went astray, the correction. Collecting that is a data engineering problem with a pedagogical constraint, and it usually means logging sessions rather than scraping answer keys.

## Where adaptation quietly fails

This is the part the enthusiasm skips.

**Judgment-laden text.** In WrAFT, the same project that fine-tuned successfully for *scoring* essays (QWK 0.84) produced truncated and unparseable output when it fine-tuned for *feedback*, while directly prompting Claude 3.7 produced the feedback teachers rated best ([[wraft-automated-writing-evaluation-argumentative-2026]]). Fine-tuning taught the model to hit a score, and scoring was the only thing it learned.

**Transfer between models.** Scale is not a reliable predictor of downstream performance under LoRA adaptation, and **identical hyperparameters produced qualitatively different behavior across architectures** ([[aiawe-automated-writing-evaluation]]). A recipe that worked on one model is not a recipe.

**Architecture over parameter count.** Fine-tuning three open text-to-image models on 1,000 captioned nuclear-engineering images substantially improved Stable Diffusion XL, gave limited gains for SD-v3.5-Medium, and produced **no measurable improvement for Flux.1 at all** ([[nuclear-diffusion-text-to-image-learning-2026]]).

**The problem was validation.** A frontier untrained GPT-4 produced roughly **35%** too-general, incorrect or answer-revealing hints when authoring tutoring feedback, and its own automated quality checks disagreed with human judgment ([[reddig-maclellan-personalized-feedback-llm-2026]]). That is a filtering problem, and a LoRA will not solve it.

The pattern across all four: adaptation reliably moves a model toward a target you can specify and score. It adds no judgment, and a pipeline that lacks a check will still ship bad output.

## Budget the adaptation honestly

For the adaptation rung the bar is lower than most teams assume: **a few hundred to a few thousand examples and a single GPU**. LoRA trains a small number of added parameters and leaves the base weights frozen, so several models can be served from one adapter.

Rank is a trade-off rather than a dial to maximize. Gain per million adapter parameters fell monotonically as rank rose, and course-level alignment was a scale-and-rank decision rather than a free upgrade ([[lora-finetuned-control-systems-course-qa-2026]]).

Which layers you adapt is also a real choice. Updating **only the last four Transformer layers** of a BERT-based discourse analyzer beat both adapting only the top layer and full-depth fine-tuning ([[bert-discourse-english-teaching-2026]]). Three configurations, three different results, and the cheapest one won.

The cost that is easy to underestimate is the evaluation, which is larger than the compute bill. See [[checking-whether-educational-ai-works|How do we know an educational AI is working correctly, not just scoring well?]]

## Calibrate what you expect

Model and prompt choice together account for only about **15%** of the misalignment between LLMs and student learning gains, and in that study benchmark-weighting and unanimous-voting ensembles made alignment *worse* ([[educational-llm-alignment]]). Pretraining data is the dominant lever on how a model behaves, and it is the one lever you cannot pull.

None of that argues against the work above. It argues against expecting a fine-tune to fix a design problem. If the issue is that your tutor answers too readily, training may address it. If the issue is that your learners do not engage with it, training will not, and the 15% figure says the money is better spent elsewhere.

## What teams get wrong

Fine-tuning is how you teach a model your course. Retrieval over your own materials took the same system from 52.3% to 66.6% with no training at all, and a prompt refined against a rubric moved agreement from 54.75% to 81.25%. Training teaches behavior and format far more reliably than it teaches content.

A bigger base model removes the need for all of this. An 8B model fine-tuned on a children's reading curriculum beat zero-shot GPT-4o and Llama 3.3 70B on difficulty metrics, and a 7B fine-tune landed within 0.15 of a strong general reference at a fraction of the deployment cost. Size and fit are different axes, and only one of them is for sale by the token.

More data will fix a training set that is built wrong. Answer-only supervision left accuracy below 30% at every data size in the misconception study. Scale does not repair a target that is missing the information the model needs.

A recipe that worked on one model will work on the next. Identical hyperparameters produced qualitatively different behavior across architectures, and the same fine-tuning method improved one image model substantially and did nothing measurable for another. Re-run the recipe on your base model or you are guessing.

Supervised fine-tuning is the safe middle step before reinforcement learning. In SWIM the supervised stage scored 0.474 against 0.577 from the prompt it replaced, and only the reward signal recovered it. The middle step can cost you a month and a regression.

## What will come back at you

**"The budget is approved for fine-tuning, so let us fine-tune."** Spend a week on the baseline and the index first. If retrieval moves the number, the fine-tune is a later decision made with better information, and you will have a stronger case for it or a good reason to return the GPU.

**"Our problem is that students do not use it."** Training changes what the model produces. The 15% figure describes how much model and prompt choice account for in the misalignment with learning gains, and engagement sits outside it. Instrument where students drop out before you buy compute.

**"We cannot send student work to a vendor API."** The strongest LoRA result here came from open models in the 4B to 30B range, and a single adapter served several of them. That deployment shape is available to a team with one GPU and no data processing agreement.

**"Prompting is a hack; real work means training."** The review of 23 writing-instruction studies found prompting the dominant approach and fine-tuning behind it, and the largest reported gain on this page came from an index. Both the review and the course-assistant study ordered those rungs by measured gain.

**"We tried prompting and it plateaued, so we need training."** That is the correct reading, and it is the one case where the climb is justified. Take the optimized prompt into the fine-tune as the item-generation team did, and expect the gain to be smaller than the prompt work was.

**"Our course materials are inconsistent, so retrieval will return junk."** It will, and retrieval inherits the quality of the corpus. Cleaning the corpus is cheaper than training a model to work around it, and the gain from 52.3% to 66.6% was measured over ordinary course materials rather than a curated set.

## What to do this week

**1.** Run a prompt-only baseline and a keyword baseline on 50 real questions from your course, and write both numbers down.

**2.** Point retrieval at the materials you already have and re-run the same 50, so the gain is measured against your own baseline.

**3.** Put the rubric into the system prompt and iterate for a week. Stop when two rounds add nothing.

**4.** Audit your training set for step-level traces. If it is question and answer pairs, the dataset is not ready.

**5.** Write the single property you need held reliably, and decide whether it is behavior or content. That decision picks the rung.

## Where to go next

[[training-ai-tutors-to-guide-rather-than-answer|How do we train an AI tutor to guide students rather than answer them?]] covers the post-training half in detail. [[checking-whether-educational-ai-works|How do we know an educational AI is working correctly?]] covers how to tell whether any of it worked. [[developing-ai-tutor|What are best practices for developing an effective AI tutor?]] is the interaction-design side of the same goal, and [[designing-educational-ai-software|What are best practices for designing educational AI software?]] covers the surrounding system. The full concept page is [[llm-training-and-fine-tuning]].
