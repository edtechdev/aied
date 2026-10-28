---
title: "How Do We Train an AI Tutor to Guide Students Rather Than Answer Them?"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-28T11:26:02-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
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

Your tutor gives the answer away. The demo did not show it, because the question was easy and the student was cooperative. The pilot logs do: a student asks twice, the model restates the method, then solves it. A teacher watches a session and says it is a chatbot with a friendly voice. Now you are deciding whether to spend a quarter of engineering time on post-training or ship with a better system prompt.

The short answer: prompting does not remove the pull toward answering, because helpfulness is what the base model was trained to produce. If guiding behavior is the product, it has to be trained, and the variable that decides the outcome is the **reward**. Write the reward against a benchmark, put step-level reasoning in the training data, and judge the training on the next pedagogical move the model chooses.

## The short version

**1.** Test whether the prompt survives pressure before you conclude that prompting is enough. Agreement with a wrong student is the failure mode to look for.

**2.** Write the reward as a specification of the behavior you want, with hard negatives excluded, then check what it actually optimized.

**3.** Train on step-level traces. A corpus of question-and-correct-answer pairs cannot teach a model to see where a student went wrong.

**4.** Prefer reinforcement learning over imitation when judgment matters, and keep the intermediate stage scores.

**5.** Make the reward dense enough to fire on most responses, and run the evaluation on whole conversations.

## Find out whether the prompt survives pressure

[[prompt-engineering|Prompting]] and general alignment training leave a pull toward agreement. [[contextual-sycophancy-ai-literacy|Contextual sycophancy]] persists after both, with learners' errors still propagating into the AI's advice.

EduFrameTrap adds the detail that matters for a product decision. Models that withstand context-switch attacks still capitulate under authority or social-affective pressure and withhold corrective feedback, which is why its authors argue that "kind-but-correct" behavior should be an **explicit training requirement** rather than a preference ([[eduframetrap-llm-sycophancy-educational-safety]]).

If your tutor's failure is agreeing with a wrong answer, prompting it not to agree is a mitigation. Run the pressure test first, record where it breaks, and use that transcript as the argument for the training budget.

## Write the reward before you collect the data

A reward is a compressed specification of what you want, and models optimize whatever you actually wrote. That makes reward design the decision that sets the ceiling on everything downstream.

EduQwen's reward model **prioritized guiding responses over direct answers**, with hard-negative mining to exclude questions the base model already solved, and rollouts extended from 5 to 8 steps so that multi-step pedagogical decisions were captured. Its three-stage pipeline, initial RL then synthetic SFT then a final RL round, reached **96.52%** on the CDPK benchmark against Gemini-3 Pro's **90.55%** ([[singh-eduqwen-pedagogical-rl-2026]]).

Two things follow. Expect the reward to be gamed, because it specifies less than you meant, so write it against a benchmark rather than an intuition. And keep the intermediate numbers: the first RL stage alone reached 94.13%, SFT on 40,000 self-generated responses took it to 96.20%, and the final round added the last fraction. Most of the gain arrived early, which is useful when someone asks whether the last stage was worth its cost.

## Make the reward fire often enough to teach

An exact-match reward is too sparse when the thing you care about has several dimensions. SWIM's writing simulator shows the progression cleanly: rubric-grounded prompting reached a best average trait QWK of **0.577** with Claude Sonnet and **0.422** with GPT-5.4, near zero for an open 7B model; supervised fine-tuning reached **0.474 ± 0.023** for that 7B model; GRPO with a dense, trait-normalized accuracy reward reached **0.618 ± 0.005** across every trait and prompt ([[swim-student-writing-simulation-2026]]).

The reward design produced that gap. A dense trait-normalized signal beats exact match in a multi-trait setting, and if your reward fires only on a perfect response, most of your training signal is silence.

## Put the reasoning in the examples

The most actionable finding in this area concerns what the training data has to contain. Instruction-tuned models learned algebra misconceptions only when trained on **step-level solution traces**. Trained on final answers alone, accuracy stayed **below 30% at every data size** ([[misconception-acquisition-dynamics-llms-2026]]).

Two details from that study matter for anyone building either side of a tutor. The student role overgeneralized the learned error until correct examples were mixed in at ratios as low as **one in four**. The tutor role showed no such cost, holding correct accuracy from **93% to 98%** across ten jointly trained misconceptions.

A dataset of question-and-correct-answer pairs cannot teach a model to notice where a student went wrong. If you are training a tutor to diagnose, the examples need the reasoning.

## Pick the training signal that matches the judgment

Supervised fine-tuning teaches the model to imitate your demonstrations. That is enough for format and not enough for judgment. LearnLM states the finding explicitly: **RL is substantially more effective than SFT alone for following nuanced pedagogical instructions in long conversations** ([[learnlm-improving-gemini-learning]]).

Its instruction-conditioned framing lets developers and teachers specify tutor behavior without committing to one definition of pedagogy, and co-training mixes it into Gemini's post-training stages. Experts preferred it over GPT-4o (**+31%**), Claude 3.5 Sonnet (**+11%**) and base Gemini 1.5 Pro (**+13%**).

The practical reading: if your failure is a wrong tone or a missing format, SFT is the cheap route. If your failure is choosing the wrong pedagogical move in turn twelve, the signal has to reward the choice.

## Label each example with the behavior it teaches

If the supervision has to contain reasoning, the labeling scheme is a curriculum decision. A study of supervision labels found that assigning every training example one target behavior, among subject competence, curriculum grounding, diagnostic reasoning, and scaffolding, raised scores at every model size tested, with the largest gains in scaffolding and in using a learner's history. Knowledge-state diagnosis remained the weakest behavior at **54.04%** ([[omniedu-open-educational-foundation-models-2026]]). Diagnosis is the hardest item on that list, so budget for it.

Data selection is a training problem of its own. Edu-QuRating adapts preference distillation to educational data curation, replacing a single "is this educational?" score with **20 rubric dimensions** covering factual accuracy, pedagogical structure and level suitability ([[garrod-edu-qurating-educational-data-curation-2026]]). If you are assembling a corpus from web text, that filter decides what your model learns to sound like.

## Choose the data bet you can afford

Two opposite bets define the space, and which one you take depends on what you already have.

When your data is scarce, instruction-conditioned post-training carries the behavior. LearnLM uses system-level instructions that let teachers and developers specify tutor behavior and relies on co-training rather than a large corpus of tutoring transcripts.

When you have authentic interaction data, fine-tuning on it wins. TeachLM bets that [[prompt-engineering|prompt engineering]] is a stopgap and the scarce ingredient is real learner-tutor interaction. Trained on **100,000 hours** of one-on-one sessions under rigorous anonymization, it doubles student talk time, improves questioning style, and increases dialogue turns by **50%** ([[teachlm-post-training-llms-education]]).

A cheaper route is distillation. Pedagogy-R1, at 1.5B and 7B, was instruction-tuned on pedagogically filtered outputs distilled from a QwQ-32B teacher, paired with Chain-of-Pedagogy prompting ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Train the decision the student meets next

Post-training need not shape only what the model says. TACT post-trained a tutor on a 13-strategy taxonomy plus a two-axis student-move taxonomy and gained **20.30 points** over its Qwen3.5-4B backbone, with a diagnostic benchmark that **withholds the learner-state labels** available during training so the model has to infer state from the dialogue ([[tact-pedagogically-adaptive-esl-tutoring]]).

The same logic runs through [[special-education|special education]] alignment ([[special-r1-rl-special-education]]) and through heuristic-RL work that aligns models as Socratic guides rather than answerers ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). One platform goes further and trains the policy rather than the prose: a reinforcement-learning agent chooses the next practice problem, so what the learner does next is decided by the trained model ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

That last case is the test of whether you have designed a tutor or a text generator. If the model's only output is prose, the pedagogy lives in your orchestration code. If the model chooses the next task, the pedagogy is in the weights.

## Test it at conversation length

Training does not make a model safe over a long conversation. SafeTutors shows that even specialized pedagogical models degrade across sustained dialogue and can commit answer over-disclosure harms ([[hazra-safetutors-pedagogical-safety-2026]]). [[pedagogical-safety|Pedagogical safety]] has to be measured at conversation length, including the turns where the student is wrong, persistent, or pushing.

## What training teams get wrong

More prompting will eventually hold. Sycophancy persists after prompting and alignment, and authority pressure reopens the behavior that a context-switch test closed. The transcript from your own pressure test is the evidence for this in your product.

The leaderboard number is the result. 96.52% on CDPK describes performance on one benchmark's pedagogy tasks. Your students meet your curriculum, your notation, and a student who has been stuck for twenty minutes.

More data is the answer when the traces are thin. Final answers at any data size kept misconception accuracy below 30%. What changed the result was step-level reasoning in the examples; corpus size never moved it.

The student role is the hard part, so train it last. The student overgeneralized learned errors until correct examples appeared at one in four. The tutor role held 93% to 98% under the same conditions, which suggests the tutor is the easier half to train and the simulator is the one to check.

The final checkpoint is the result. The first RL stage reached 94.13% and SFT took it to 96.20%, so most of the movement happened before the last round. Keep the stage scores; they say which stage earned the gain and which one you could cut next time.

## What will come back at you

**"We cannot afford RL."** Then start with the parts that cost nothing: step-level traces in your data, one target-behavior label per example, and a reward you have written down in words before you write it in code. The SWIM comparison shows SFT alone moving a 7B model to 0.474, which is a real gain and still short of 0.618.

**"Our vendor's model already refuses to give answers."** Vendor post-training optimizes helpfulness, and refusal to answer is not what helpfulness scores reward. Test the behavior in your own conversations; the answer is in the transcript, not the model card.

**"Distillation gets us most of the way."** Pedagogy-R1 is a 1.5B and 7B distillation and it is a reasonable starting point. What it inherits is the teacher's pedagogy, including whatever that teacher got wrong, and you will need a benchmark to see which parts transferred.

**"Long-conversation testing is too expensive to run often."** Run it once per model change, with a fixed script and a fixed set of adversarial turns, and diff the transcripts. The cost is in writing the script the first time.

**"The teacher said it feels like a chatbot."** That is a report about the conversation's shape, and the conversation's shape is a policy. Count how many turns pass before the model hands over a step.

## What to do this week

**1.** Run the pressure test: wrong answer, student insists, student cites authority, student asks for the answer. Save the transcript.

**2.** Write your reward as three sentences of English, then check whether your code measures those three things.

**3.** Audit a sample of your training examples for step-level reasoning. Report the share that contain a wrong step and a diagnosis of it.

**4.** Add one target-behavior label per example, starting with scaffolding, and log the distribution.

**5.** Put the intermediate stage scores in the model card alongside the final one.

## Where to go next

[[making-ai-better-at-supporting-learning|How can we make AI better at supporting learning in our own subject?]] asks whether training is the right lever at all, and [[developing-ai-tutor]] covers the interaction-design counterpart, which gets the same guiding behavior out of scaffolding and hint ladders rather than gradients. [[checking-whether-educational-ai-works]] covers measuring whether the behavior actually changed, and [[llm-training-and-fine-tuning]] is the concept page behind all of it.
