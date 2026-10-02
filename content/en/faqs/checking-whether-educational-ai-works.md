---
title: "How Do We Know an Educational AI Is Working Correctly, Not Just Scoring Well?"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-02T08:21:34-04:00"
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
---

An educational AI can look like it is working while it is not. The scores you see most often — how similar the model's answer is to a correct one, or how closely its grades match a human's — can look strong while the thing you actually care about is broken.

In one project in this knowledge base, the same system earned a good agreement score for grading essays and, in the same deployment, produced feedback that was cut off mid-sentence and unreadable. The grading worked. The feedback did not. Nothing in the headline number said so.

This page is about telling the difference, and it assumes no background in measurement.

## What the usual scores actually measure

Two kinds of number dominate this literature, and both measure **resemblance rather than correctness**.

- **Similarity scores** (you will see them called ROUGE and BLEU) compare the wording of the model's answer with the wording of a reference answer. A model that writes something close to the expected text scores well — even if its reasoning is wrong, and even if a student could reach the right answer by a route that teaches nothing.
- **Agreement scores** (you will see QWK, or quadratic weighted kappa) measure how closely the model's grades line up with a human's grades. A model can agree with the grader on the final mark while being wrong about *why*, which is the part a student learns from.

A student can reach a wrong answer by a wrong route that looks like a right one, and no similarity score will notice. If what you care about is the reasoning, you need something that reads the reasoning — a rubric applied by a person, or a check written for that particular step.

The Linear Control Systems course assistant is a good example of a team reporting this honestly. Its best configuration reached a similarity score of **0.4093** against reference answers, with the improvement measured reliably above zero, and the authors state plainly that their numbers measure wording and format ([[lora-finetuned-control-systems-course-qa-2026]]).

## A system can pass one test and fail the next

This is the most useful lesson in the knowledge base, because it is the one that catches people out.

In the WrAFT project, a fine-tuned model reached an agreement score of **0.84** with human graders across 360 held-out TOEFL essays. That is a strong result for *grading*. The same project's model trained to *write feedback* produced output that was truncated and unparseable — while simply prompting a different model produced the feedback teachers preferred ([[wraft-automated-writing-evaluation-argumentative-2026]]).

So evaluate every output your system produces, one at a time. A good score on the grading module tells you nothing about the feedback module beside it.

## Check whether your automatic checker agrees with people

Many teams now use a second AI to check the first one. That is reasonable, but the second AI is not automatically right.

A study that had a frontier model author hints for an [[intelligent-tutoring|intelligent tutoring system]] found roughly **35%** of them were too general, incorrect, or gave the answer away — and the model's own automated quality checks disagreed with human judgment about which ones were bad ([[reddig-maclellan-personalized-feedback-llm-2026]]).

Practical version: take a sample of about fifty outputs, have a person rate them, and compare that with your automatic checker's ratings. If the two disagree, your automatic number is not evidence.

## Turn a score into a rule you can act on

A correlation tells you the model is usually right. It does not tell you what to do on the occasions when it is not. The confidence-routing result is the clearest template here, and it is simple enough to copy.

Confidence turned out to be a reliable warning sign: when the model was unsure, it was more likely to be wrong (**β = −0.602, p < .001**). So the team sent the least confident **20%** of responses to a human. That single rule raised agreement with human grades from **0.78 to 0.82** and cut manual grading work by roughly **80%** ([[know-when-to-trust-ai-scoring-reliability-2026]]).

Notice what the report contains: a threshold, a person, and a saving. "Agreement 0.84" contains none of those, which is why it is hard to act on.

## When you can, measure the thing itself

The cleanest fix is to train the model on the same quantity you intend to measure. A fine-tuned model was trained to reproduce the statistical properties of test questions — the numbers describing how hard each question is and how well it separates stronger from weaker students — and it learned those patterns rather than being told them ([[multimodal-item-parameter-estimation-2026]]). The target was a property of the assessment itself, so the evaluation could be about that property instead of about wording.

Report the progression as well as the endpoint. SWIM's writing simulator published each stage's score side by side — rubric-based prompting **0.577**, fine-tuning **0.474 ± 0.023**, reinforcement learning **0.618 ± 0.005** ([[swim-student-writing-simulation-2026]]) — which is what lets a reader see whether the training did anything. A single final number cannot tell them that.

## Test safety over a whole conversation, not one reply

Most safety testing checks a single exchange. The harms that matter in tutoring accumulate. SafeTutors found that even models built specifically for teaching degrade over a long conversation and can reveal answers they should be withholding ([[hazra-safetutors-pedagogical-safety-2026]]).

Run the safety check across complete conversations, and include the turns where the student is wrong, keeps pushing, or tries to talk the model out of its role.

## If you test with fake students, check the fake students first

Generating simulated students instead of recruiting real ones makes evaluation far cheaper. But a simulated student is a measuring instrument, and it can be wrong in the ways any instrument can.

The most direct test of this in the knowledge base benchmarked simulated and prompted students against **382 held-out dialogues** from the largest public collection of real student–tutor mathematics dialogues, using seven measures covering language, behavior and thinking ([[simulated-students-tutoring-dialogues-2026]]). Other work pushes on realism from different angles: [[inside-llm-student-simulator-reasoning-2026|INSIDE]] trains models to both *act* and *think* like students, and history-aware profiles condition the simulation on a student's past rather than a fixed persona ([[history-aware-student-simulation]]).

If your testing harness is a simulated student, check the simulator before you trust what it says about your tutor.

## Compare against something outside your own project

If you have no baseline of your own, an outside benchmark tells you whether your number is any good. On the CDPK pedagogy benchmark, EduQwen reached **96.52%** against Gemini-3 Pro's **90.55%** ([[singh-eduqwen-pedagogical-rl-2026]]). The Pedagogy Benchmark, built from real teacher professional-development exams and covering **97 models**, found accuracy ranging from **28% to 89%** ([[cdpk-pedagogy-benchmark-llms|Lelièvre et al., 2025]]).

That spread is the point: on a task about teaching, models ranged from poor to good. Read benchmark results as a range you sit inside, not as a verdict.

## A checklist before you ship

**1.** Write down in one sentence what you actually care about, and pick a measure that captures *that* rather than similarity.
**2.** Get a baseline first, including a simple one. The course assistant's model with no grounding scored below a plain keyword search.
**3.** Check each output your system produces separately.
**4.** Have a person rate a sample and compare it with your automatic checker.
**5.** Turn accuracy into a rule: a threshold, a person, and a saving.
**6.** Test safety across whole conversations.
**7.** Check any simulated student before trusting it.
**8.** Keep the failures. Truncated feedback and answer-revealing hints are the findings, not the noise.

## Related questions

- [[making-ai-better-at-supporting-learning|How can we make AI better at supporting learning in our own subject?]]
- [[training-ai-tutors-to-guide-rather-than-answer|How do we train an AI tutor to guide students rather than answer them?]]
- [[evaluating-ai-interventions-methods|What measures and research methods can an instructor use to evaluate AI-related interventions?]] — the instructor-facing version of this question
- [[reporting-interpreting-aied-research|What are best practices for reporting and interpreting AI in education research?]] — the research-facing version
- [[llm-training-and-fine-tuning]] — the full concept page