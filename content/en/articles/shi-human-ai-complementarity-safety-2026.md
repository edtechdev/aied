---
title: "AI assistance made people worse at catching the AI's mistakes"
created: "2026-11-11T06:30:28-05:00"
updated: "2026-11-11T07:05:00-05:00"
type: article
page_kind: [synthesis]
evidence_context: non_educational
research_method: [experiment]
audience: [researchers, instructors, administrators, software developers]
sources: ['raw/papers/shi-human-ai-complementarity-safety-2026.md']
source_url: "https://arxiv.org/abs/2610.24969"
source_depth: full text
confidence: high
foundations: [ai-literacy]
technology: [generative-ai, human-in-the-loop-ai]
assessment: [assessment-validity]
ethics: [trust-calibration, automation-bias, trust]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Shi and colleagues (2026) asked 416 paid raters to judge 3,957 safety-relevant items, some alone and some with model assistance, and collected 35,613 judgments. Humans alone reached 62.5% accuracy against 65.3% for the model, but they were right where the model was wrong on 12.7% of items, so an oracle choosing between them would have reached 78.0%. The assistance tested did not capture that opportunity: it raised human accuracy on items the model already got right while cutting human accuracy on items the model got wrong from 36.7% to 20.6% (Top-NN with Sonnet) and from 36.2% to 21.8% (iterative subtask delegation with Gemini). Routing between human and model answers added nothing on average. The finding is about oversight of AI, not about classrooms, but it is the cleanest demonstration available that [[trust-calibration|checking an AI's work]] inside the AI's own interface can degrade the check.

## Key Findings

1. **The complementarity opportunity is large.** Human committees and the model scored 62.5% and 65.3% respectively, with humans correct where Sonnet was wrong on 12.7% of the 3,957 items and where Gemini was wrong on 13.2%. Oracle selection would have reached 78.0% and 76.6%.
2. **The two sources fail on different items.** Human–model error correlation was φ = 0.41, against 0.60 between Sonnet and Gemini, and pairing a human with a model produced a higher oracle ceiling (78.1–79.1%) than pairing the two models (74.9%).
3. **Assistance barely moved the average.** Committee accuracy went from 62.5% unassisted to 61.7% with Top-NN assistance and 64.5% with iterative subtask delegation, and the averages hide swings of more than 30 points in both directions across domains.
4. **Assistance cut the corrections that matter most.** On items the model got wrong, committee accuracy fell from 36.7% to 20.6% under Top-NN and from 36.2% to 21.8% under subtask delegation. On items the model got right, accuracy rose by 7.3 and 11.5 points. Assistance made raters agree with the model.
5. **Raters rarely found the correct alternative.** When Top-NN's leading candidate was wrong but another candidate was right, only 11% of candidate selections on Liar's Bench and 16% on Attune took the correct alternative, with rankings hidden.
6. **Subtask delegation mostly pre-filled the answer.** On CulturalBench the model supplied answers for 96% of subtasks and 86.5% of sessions had no unanswered subtasks, so raters reviewed model answers rather than producing their own.
7. **The loss lands on the risky cases.** On detailed unsafe SafeAgentBench plans, accuracy fell from 89.7% to 81.2% (Top-NN) and 84.9% (subtask delegation), while accuracy on safe plans rose.
8. **Routing did not recover the opportunity.** Across 260 dataset–signal–calibration–pairing configurations, the best test-performing routing policy averaged −0.3 percentage points against the better single source. Confidence AUROC was 0.73 for Sonnet and 0.68 for Gemini against 0.64 for human committee agreement, and better calibration lowered expected calibration error without improving that discrimination.

## What the study measured

The authors assembled 3,957 items from eight datasets across six safety-relevant domains: factual verification, alignment and values, unsafe agent actions, deceptive alignment, reasoning, and bias and fairness. Datasets were screened for headroom, requiring model accuracy below 70% so that both sources could contribute, and for labels with at least 90% accuracy.

Raters came from Prolific's AI-tasker pool and judged items one at a time, reporting confidence on a five-point scale. Committee answers are plurality votes within each condition. Three conditions matter here: unassisted, Top-NN (the model offers its three highest-ranked candidates with rationales, shown in random order with confidence withheld), and iterative subtask delegation (the model decomposes the task, answers high-confidence subtasks as editable suggestions, and asks the rater for the rest).

The paper is careful about what this design supports. The condition comparisons are observational, not identified causal effects, and the two assistance methods were each paired with a different model family, so method and model cannot be separated. The authors state both limits directly.

## Why assistance made raters worse at the task

Three mechanisms appear in the data rather than only in theory. The first is deference to a presented answer: Top-NN showed alternatives, yet raters took a correct alternative in only 11–16% of the cases where the leading candidate was wrong. The second is completion by default: subtask delegation filled 96% of subtasks, so the human's job became review of a finished draft. The third is that the assisted errors became more like the model's errors, which is what the falling accuracy on model-wrong items measures directly.

The aggregate numbers conceal this. A rater who is more accurate on the 65.3% of items the model gets right and much less accurate on the remaining third it gets wrong can post a similar total score while providing far less oversight value. The paper's framing is exact: assistance must make errors more detectable, not merely make answers more available.

## What this could mean for education

None of this was measured in a classroom, and the transfer below is an inference from the mechanism, not a finding about students or teachers.

The nearest educational analogue is the assignment that asks students to "check the [[conversational-ai|chatbot]]'s answer" or to "verify the AI's sources", the same shape as the [[verify-ai-output|verification guidance]] this knowledge base gives learners. That task has the same structure as the assisted condition here: a model answer is presented, and the learner is asked to catch its errors. The study's result is that presenting the answer first reduces error-catching even when it improves overall accuracy. A student who reads a confident, fluent model answer and then checks it is doing the harder task, not the easier one, and the [[ai-literacy|AI literacy]] skill being taught is not the one being assessed.

The same shape appears in professional work that this knowledge base already treats as a calibration problem. Teachers reviewing AI-generated lesson plans, feedback or grades are reviewing a draft that arrives complete; the [[automation-bias|automation bias]] literature predicts exactly the shift measured here, and [[human-in-the-loop-ai|human-in-the-loop]] designs that place the human after generation inherit the risk. Graders and admissions reviewers face it too: if the model's recommendation is shown before the human judgment, the judgment is no longer independent.

Three design implications follow, all testable in education and none yet tested:

- **Elicit the human answer first.** Cognitive-forcing designs that require a judgment before advice is shown are the direct countermeasure to the assistance effect, and the paper names them as the next thing to test on confidently wrong model answers.
- **Show evidence without the verdict.** The authors point to prior work in which raters who received search results and evidence, but not the model's conclusion, relied on the model more appropriately.
- **Score the unaided check.** A verification exercise graded on whether the student caught the error, with the model's answer available, measures something closer to agreement than to verification, and the [[assessment-validity|validity]] problem is in the task, not the scoring.

## What this does not show

The raters were paid crowd workers judging short, safety-relevant items, not teachers or students working with course material over a term. The tasks are oversight tasks, not learning tasks, and nothing here measures learning, retention or transfer. The assistance conditions were observational comparisons, and each method was tested with one model family, so the size of the effect for a different interface is unknown. The paper also does not test the countermeasures it recommends: eliciting judgment first and evidence-only assistance remain hypotheses for this task suite.

## What this means for practice

- **Instructors:** if a task asks students to check AI output, have them commit to their own answer first, in writing, before the model's answer is revealed. The order is the intervention.
- **Students:** when you open a chatbot answer, write down your own attempt first, even a rough one. Checking after reading is a different and harder task than checking against your own reasoning.
- **Tool designers:** a review interface that presents a finished draft, pre-filled subtasks and a confidence score is optimizing for agreement. Withholding the verdict, or requiring an independent entry, is the design that preserves the correction.
- **Administrators:** "human in the loop" describes a position in the workflow, not a guarantee of independent judgment. Ask where in the sequence the human judgment is recorded.

## Limitations

The study is a laboratory-style evaluation with paid raters on a curated item suite, and its own authors describe the condition comparisons as observational. The dataset screening deliberately selected tasks where models were below 70% accuracy, so the complementarity opportunity here is larger than in settings where the model is stronger. The raters had no domain expertise in the safety tasks, which may understate what expert reviewers can catch and may overstate the assistance effect. Two assistance methods, each tied to one model, cannot separate interface from model quality. Nothing in the design measures whether a rater who catches fewer errors learns to catch them later.

## Citation

Shi, S. L., Christ, M. A., Modesitt, E., Louis, A., Cheng, K., Tran, B. T., Lee, S., Pawar, R., Molinaro, G., Bain, J., Donthi, N., Pavlovic, M., Dahmani, A., Bianco, F., Shah, A., Crosse, T., Singh, A., Huang, K., Krishna, S., Voudouris, K., Africa, D. D., Jacob, J., & Jain, R. (2026). [*Towards Human-AI Complementarity for AI Safety*](https://arxiv.org/abs/2610.24969). arXiv:2610.24969v2. https://doi.org/10.48550/arXiv.2610.24969
