---
title: "Can I Use AI to Grade Student Work Fairly and Reliably?"
created: "2026-10-30T11:40:00-04:00"
updated: "2026-10-30T11:40:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-30"
    agent: hermes-agent
---

You have a rubric you believe in, more submissions than hours, and a tool that returns a score plus several confident paragraphs in the time it takes to read one essay. You try it on work you already graded. Half the scores look right. One is strangely generous, one strangely harsh, and you cannot yet tell whether that is the tool or the essay.

Short answer to give a colleague: AI grading earns a place as a supervised assistant or a second reader, on tasks where you have checked it against work you have already marked. Agreement does not transfer across assessment types. In a sixteen-student pharmacy examination, [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] found near-perfect agreement on objective item types and unreliable agreement on open-ended responses. Across three English universities, [[opraise-automated-marking-ai-assessment-2026|the OpRaise project]] found AI and human assessors agreeing on the degree band between 35% and 65% of the time depending on institution, with marks compressed toward the middle. A fluent justification is not evidence that your criteria were applied. Whether the result is [[assessment-validity|valid for your decision]] is a local question you have to answer yourself, and [[human-in-the-loop-ai|a person stays accountable]] for anything that becomes a recorded grade.

## The short version

**1.** Name the role before you run anything: feedback assistant, second reader, or primary scorer. They need different amounts of evidence.

**2.** Start with the least consequential role that solves your real problem. If a deterministic key would do the job, an LLM adds risk rather than value.

**3.** Calibrate on work you already graded, including strong, weak, borderline and unusually structured submissions. Convenient examples prove nothing.

**4.** Keep the calibration set and the test set separate, or you are measuring how well you tuned the tool to familiar essays.

**5.** Report exact agreement, score differences and direction of bias, not a correlation. Check pass/fail boundaries specifically.

**6.** Tell students which role the tool plays, who decides the grade, and how to ask for review.

## Decide what the AI is allowed to do

Three arrangements get called "AI grading" and they carry different obligations.

A **feedback assistant** drafts comments or flags possible omissions for you to accept, rewrite or discard. The risk is confined to comment quality, and you read everything before it reaches a student. A **second reader** proposes criterion scores or flags disagreements to structure your own marking. Its errors have to be useful rather than merely wrong: a flag that sends you back to a submission you would have marked carelessly is worth having. A **primary scorer** produces scores that become recorded grades. That is the arrangement the evidence in this knowledge base does not support beyond narrow, locally validated cases.

Choose the lowest rung that addresses your actual constraint. If your marking load comes from checking a fixed answer key, ordinary deterministic scoring is more transparent and auditable than a language model, and the pharmacy study suggests the LLM's advantage on objective items was partly an artifact of being handed the correct answers during grading. Reserve the model for work that needs interpretation, then check that interpretation.

[[automated-assessment|Automated assessment]] covers the wider machinery of scoring, moderation and feedback generation. This page is the judgment question underneath it.

## What the evidence actually shows

Agreement depends on the item type. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] graded a mixed-format pharmacy examination completed by 16 students and reported concordance with faculty grading between 0.935 and 1.000 for multiple-choice, select-all-that-apply and fill-in-the-blank items. Agreement on subjective open-ended responses was unreliable. Two details matter more than the headline. Correct answers were supplied during grading, which flatters objective-item results, and adding a rubric did not consistently improve agreement, which undercuts the common assumption that a good rubric converts an LLM into a consistent marker. Sixteen students cannot support a claim about your course. The variation inside one examination is the transferable finding: a system that handles your multiple-choice section says nothing about your essays.

Band agreement is moderate and uneven. [[opraise-automated-marking-ai-assessment-2026|The OpRaise report]] examined authentic undergraduate psychology essays and found agreement between AI and human assessors on the UK degree band of 63% at Cambridge, 53% at Nottingham and 35% at Manchester Metropolitan. Marks were compressed toward the middle, with the tails marked least accurately: an essay a human marked 75 was scored several points lower by every AI system, and an essay marked 50 several points higher. That compression is the failure to watch for, because it damages exactly the students at the top and bottom of your distribution while leaving the middle looking fine. This is a project report rather than a peer-reviewed trial, and it is the most useful warning in the evidence base.

Your own marks are an imperfect reference. Instructors disagree with each other, and your previous score on a similar essay is a judgment, not a ground truth. Agreement with one marker establishes consistency with that marker, which is not the same as fairness. Where the stakes justify it, use a second qualified reader to adjudicate difficult cases, and treat a disagreement between the AI and a human marker as a prompt to re-read the work rather than a verdict on which side is right.

Consistency and sound judgment diverge. A model can return near-identical scores on a rerun while applying your criteria badly, because repeatability measures stability, not validity. The OpRaise tails show the pattern: the system was steady and wrong about the essays that mattered most.

## Validate the procedure before it touches a grade

Work through this on previously assessed, appropriately protected submissions that span the responses you actually receive: strong, weak, borderline, incomplete, unusually structured, and correct answers expressed in an unfamiliar way.

**1. Specify criteria and demand evidence.** Give the assignment, rubric, scoring rules and examples of how legitimate alternative answers earn credit. Ask for concise criterion-level justifications tied to identifiable passages. Then check those justifications against the submission yourself.

**2. Separate calibration from evaluation.** Tune on one set, test on another. Without that split you cannot distinguish a validated procedure from a well-fitted one.

**3. Measure the decisions that matter.** Record exact agreement, the size and direction of score differences, and whether the model systematically awards higher or lower marks. Examine pass/fail and other consequential boundaries on their own. A high correlation can sit on top of a systematic shift.

**4. Test repeatability and subgroup behavior.** Rerun a subset under identical settings. Look for criterion-level errors and for language, formatting or legitimate style being mistaken for weaker understanding. Small subgroup counts support caution, not a fairness claim.

**5. Write the escalation rule.** Decide which cases always get human marking and how disagreements are resolved. Do not let the model's stated confidence decide; confidence needs validating against observed errors before it can carry weight.

**6. Protect the workflow.** Use an approved environment, minimize identifying information, and keep rubric and instructions separate from submitted content. That separation makes manipulation harder to hide. It does not make it impossible.

**7. Record what would invalidate the check.** Keep the model and version, prompt, rubric and settings. A model update or a rubric revision is a reason to repeat the representative checks rather than assume continuity.

## Make the arrangement visible to students

Students are entitled to know what role the tool plays, who decides, and how to contest a result. Vague disclosure produces suspicion; specifics produce a workable relationship. Something like: "An approved AI tool may draft rubric comments on your draft. I review every comment and determine your grade. Contact me if a comment misrepresents your work." Then make that true.

Two failure directions need separate attention. Excessive deductions are the ones students report, and they dominate appeals. Unearned credit is the one that goes unmentioned and quietly corrupts the record. Sample for both, and include your verification hours when you judge whether the workflow saved you anything.

## What will come back at you

**"Humans are biased too."** They are, which is why the comparison needs explicit criteria rather than a single marker's score as the standard. The OpRaise institutional spread is the argument here: if human markers at three universities produced such different band agreement with the same systems, the human reference is part of what has to be specified, not a fixed yardstick.

**"The rubric makes it objective."** A rubric makes expectations explicit. Applying it remains interpretation, and the pharmacy study found that supplying a rubric did not consistently improve agreement. What the rubric buys you is a checkable standard for the justifications, not a guarantee of the scores.

**"I would have to check everything, which defeats the purpose."** For some tasks that is the right conclusion, and the answer is to narrow the job. Drafting comments from your own scoring notes leaves the judgment with you and removes the typing. Second-reader flags on borderline submissions concentrate your attention where it changes an outcome.

**"My colleague tried it and it worked well."** Ask what they measured. Positive ratings coexist with errors in this literature routinely, and a colleague who read a few sensible outputs has run a demonstration, not a validation. The question is what their procedure would do to the essays you would notice last.

## What to do this week

**1.** Pick one assessment and write down the single role the AI would play. Write down what evidence would let you move it one rung higher.

**2.** Run it on five submissions you have already graded, chosen to include a strong one, a weak one, a borderline one and one with an unusual but legitimate structure.

**3.** Log every disagreement with the work and the criterion, and name the errors you would consider unacceptable rather than merely wrong.

**4.** Test whether score differences run in a consistent direction, and check your pass/fail boundary separately.

**5.** Draft the student-facing disclosure paragraph and the route to review, and compare your verification time with the marking time you avoided.

## Where to go next

[[assessment-validity|Assessment validity]] is the concept that decides these questions: whether the evidence supports the inference you want to make. [[automated-assessment]] covers the technology and its measured performance across formats, and [[ai-feedback-at-scale]] handles the adjacent problem of generated comments and whether students act on them.

For what a grade should represent once students are using AI, including construct substitution and authenticated process evidence, see [[redesign-assessment-ai-era|redesigning assessment in the AI era]]. For whether detection can substitute for a defensible task design, see [[should-we-use-ai-detectors|whether to use AI detectors]]. For the evaluation question underneath all of it, see [[checking-whether-educational-ai-works|checking whether an educational AI works]].
