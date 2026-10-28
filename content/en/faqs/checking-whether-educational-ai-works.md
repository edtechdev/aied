---
title: "How Do We Know an Educational AI Is Working Correctly, Not Just Scoring Well?"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-28T11:26:02-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, reporting-interpreting-aied-research, evaluating-ai-interventions-methods]
weight: 73
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, intelligent-tutoring, simulating-students, human-in-the-loop-ai]
assessment: [assessment-validity, educational-measurement, automated-assessment, ai-feedback-quality]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [writing education, math education]
confidence: high
methods: [benchmark, ai-ed-evaluation]
ethics: [pedagogical-safety, trust-calibration]
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

A vendor's evaluation report lands with one number at the top: agreement with human graders, 0.84. Or your pilot ends Friday and the evidence consists of a satisfaction survey plus a benchmark line copied from the model's release notes. In the meeting someone asks whether the system works, and you have a figure that sounds like an answer.

The short answer: the scores you see most often measure resemblance, and resemblance is a weaker claim than "this teaches" or even "this feedback is readable." Decide what each number is allowed to prove, score every output your system produces, and turn accuracy into a rule with a threshold, a person, and a saving attached. A number nobody can act on is not evidence.

## The short version

**1.** Write one sentence naming what you care about, then pick a measure that reads that thing. Word overlap will not tell you whether the reasoning is right.

**2.** Evaluate each output separately. A strong grading score says nothing about the feedback module beside it.

**3.** Have a person rate about fifty outputs and compare those ratings with your automatic checker. Where the two disagree, the checker is the thing under test.

**4.** Replace "accuracy 0.84" with a rule: below this confidence, a human reads the response. Report the threshold, the share of work it saves, and what agreement became.

**5.** Test safety across whole conversations, and check any simulated student before you trust what it says about your tutor.

## Decide what the number is allowed to prove

Two families of number dominate this literature. Both measure how closely your output resembles something else, which is a weaker claim than correctness.

**Similarity scores** (ROUGE and BLEU) compare the wording of your system's answer with the wording of a reference answer. A model that writes something close to the expected text scores well, even when its reasoning is wrong, or when a student could reach the right answer by a route that teaches nothing.

**Agreement scores** (QWK, quadratic weighted kappa) measure how closely the model's grades line up with a human's. A model can match the grader on the final mark while being wrong about why, and the why is the part a student learns from.

A student can reach a wrong answer by a wrong route that looks like a right one, and no similarity score notices. If reasoning is the thing you care about, the measure has to read it: a rubric applied by a person, or a check written for that particular step.

The Linear Control Systems course assistant reports this the right way. Its best configuration reached a similarity score of **0.4093** against reference answers, with the improvement measured reliably above zero, and the authors state plainly that the numbers measure wording and format ([[lora-finetuned-control-systems-course-qa-2026]]). The score is unimpressive and the paper is still useful, because it says what the score covers.

## Score every output separately

In the WrAFT project, a fine-tuned model reached an agreement score of **0.84** with human graders across 360 held-out TOEFL essays. That is a strong result for grading. The same project's model trained to write feedback produced output that was truncated and unparseable, while simply prompting a different model produced feedback teachers preferred ([[wraft-automated-writing-evaluation-argumentative-2026]]).

The knowledge base carries the same failure in a second form: a deployment whose grading module scored well and whose feedback arrived cut off mid-sentence and unreadable. Nothing in the headline number said so.

So list the outputs your system produces, then give each one its own measure and its own pass condition. Grading, feedback text, hint selection, and safety refusals fail in different ways, and a module-level score cannot see past its own module.

## Put a person where the model is unsure

A correlation tells you the model is usually right. It does not tell you what to do on the occasions when it is not. The confidence-routing result is the cleanest template in the knowledge base, and it is short enough to copy.

Confidence turned out to be a reliable warning sign: when the model was unsure, it was more likely to be wrong (**β = -0.602, p < .001**). The team sent the least confident **20%** of responses to a human. That single rule raised agreement with human grades from **0.78 to 0.82** and cut manual grading work by roughly **80%** ([[know-when-to-trust-ai-scoring-reliability-2026]]).

Look at what the report contains: a threshold, a person, and a saving. "Agreement 0.84" contains none of those, which is why it is hard to act on and easy to argue about.

## Check your automatic checker against a person

Many teams now use a second model to judge the first. The arrangement is reasonable and the second model is not automatically right.

A study that had a frontier model author hints for an [[intelligent-tutoring|intelligent tutoring system]] found roughly **35%** of them were too general, incorrect, or gave the answer away, and the model's own automated quality checks disagreed with human judgment about which ones were bad ([[reddig-maclellan-personalized-feedback-llm-2026]]).

Practical version: take a sample of about fifty outputs, have a person rate them, and compare that with your checker's ratings. Where the two diverge, you have learned something about the checker. Keep the sample and the disagreement table, because it is also the artifact that answers a reviewer who asks how you know.

## Measure the quantity itself when the task allows

The cleanest fix is to train the model on the same quantity you intend to measure. A fine-tuned model was trained to reproduce the statistical properties of test questions: how hard each item is, how well it separates stronger from weaker students. It learned those patterns rather than being told them ([[multimodal-item-parameter-estimation-2026]]). Because the target was a property of the assessment itself, the evaluation could be about that property instead of about wording.

Report the progression as well as the endpoint. SWIM's writing simulator published each stage's score side by side: rubric-based prompting **0.577**, fine-tuning **0.474 ± 0.023**, reinforcement learning **0.618 ± 0.005** ([[swim-student-writing-simulation-2026]]). A reader can see from that table whether the training did anything. A single final number cannot tell them, and it hides a stage where the fine-tuned model did worse than the prompt.

## Compare against something outside your project

Get a baseline first, including a cheap one. The course assistant's model with no grounding scored below a plain keyword search, which is the sort of result that changes the roadmap and costs a day to find.

An outside benchmark then tells you whether your number is any good at all. On the CDPK pedagogy benchmark, EduQwen reached **96.52%** against Gemini-3 Pro's **90.55%** ([[singh-eduqwen-pedagogical-rl-2026]]). The Pedagogy Benchmark, built from real teacher professional-development exams and covering **97 models**, found accuracy ranging from **28% to 89%** ([[cdpk-pedagogy-benchmark-llms|Lelièvre et al., 2025]]).

On a task about teaching, models ranged from poor to good, so a benchmark result places your system somewhere inside a wide range.

## Test safety over a whole conversation

Most safety testing checks a single exchange. The harms that matter in tutoring accumulate. SafeTutors found that even models built specifically for teaching degrade over a long conversation and can reveal answers they should be withholding ([[hazra-safetutors-pedagogical-safety-2026]]).

Run the check across complete conversations, and write the test turns deliberately: the student who is wrong, the one who keeps pushing, the one who tries to talk the model out of its role. A tutor that holds for ten turns and folds on the eleventh fails the test that matters, and a per-reply suite will score it as clean.

## Check the simulated student before you trust it

Generating simulated students instead of recruiting real ones makes evaluation far cheaper. A simulated student is also a measuring instrument, and it can be wrong in the ways instruments are wrong: too cooperative, too fluent, too quick to accept a hint.

The most direct test in the knowledge base benchmarked simulated and prompted students against **382 held-out dialogues** from the largest public collection of real student-tutor mathematics dialogues, using seven measures covering language, behavior and thinking ([[simulated-students-tutoring-dialogues-2026]]). Other work pushes on realism from different angles: [[inside-llm-student-simulator-reasoning-2026|INSIDE]] trains models to both act and think like students, and history-aware profiles condition the simulation on a student's past rather than a fixed persona ([[history-aware-student-simulation]]).

If your harness is a simulated student, validate the simulator against real transcripts before you let it grade your tutor.

## What evaluation teams get wrong

A high agreement score means the system is correct. It means the system grades like the grader you compared against, on the essays you compared on. WrAFT's 0.84 came with feedback that did not parse.

One number can stand for the product. Teams ship a dashboard with "accuracy 0.84" in the corner and no field for the feedback module, the hint policy, or the refusal behavior. The module-level score is the easiest number to compute and the least informative thing to report.

An outside benchmark settles whether the tool works. The Pedagogy Benchmark spread of 28% to 89% says the task family is hard and unevenly served. Your position in that range is a fact about your model. What your students can do afterward is a different fact.

A model judging a model is a cheap substitute for human ratings. It is cheap. The 35% figure and the disagreement about which hints were bad describe what a judge that was never checked will let through.

Simulated students make evaluation free. They make it cheap, and they move the cost into validation. The 382-dialogue comparison exists because the instrument needed calibrating.

## What will come back at you

**"We do not have annotators for this."** Fifty rated outputs is enough to start. Rate them yourself if nobody else is free, and keep the sheet.

**"Our benchmark score beats Gemini."** It does, on CDPK, on the prompts that benchmark uses. Bring the unassisted measure next to it.

**"Our automated judge agrees with our human raters."** Then you have one correlation on one sample. Ask which outputs it disagreed on and read those, since that is where the failure lives.

**"We cannot run a full evaluation before launch."** Run the cheap three: one output scored separately, fifty outputs rated by a person, one conversation-length safety pass. The expensive items can follow the pilot.

**"The system is only a demo, so evaluation is premature."** A demo is the cheapest place to find out that your number measures wording. Once there is a roadmap attached to it, the same finding costs more to act on.

## What to do this week

**1.** Write the one-sentence claim your evaluation is supposed to support. Put it at the top of the eval doc.

**2.** List every output the system produces and give each a row, a measure and a pass condition.

**3.** Pull fifty outputs, rate them yourself, and put your ratings beside the checker's.

**4.** Compute the confidence distribution and write the routing rule with a number in it, plus the name of the person who reads what falls below.

**5.** Run one safety conversation where the student is wrong, pushes back twice, and asks for the answer.

## Where to go next

[[making-ai-better-at-supporting-learning|How can we make AI better at supporting learning in our own subject?]] covers the design side of the same problem. [[training-ai-tutors-to-guide-rather-than-answer]] handles the training route to a tutoring behavior, and [[evaluating-ai-interventions-methods]] is the instructor-facing version of this question, with [[reporting-interpreting-aied-research]] as the research-facing one. The methods sit under [[ai-ed-evaluation]] and [[llm-training-and-fine-tuning]].
