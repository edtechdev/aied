---
title: "How Do I Check Whether AI-Generated Quiz and Exam Questions Are Actually Good?"
created: "2026-10-30T12:05:00-04:00"
updated: "2026-10-30T12:05:00-04:00"
type: faq
connected_faqs: [ai-grading-fairness-reliability, redesign-assessment-ai-era, checking-whether-educational-ai-works, does-ai-help-students-learn]
weight: 78
technology: [generative-ai, llm]
assessment: [automated-question-generation, assessment-validity, educational-measurement, formative-assessment, summative-assessment]
methods: [quantitative-research, research-methods-aied]
research_method: [experiment, case study]
audience: [instructors, assessment designers, instructional designers]
level: [higher ed, secondary]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-30"
    agent: hermes-agent
---

You ask for twenty questions from your lecture notes. They come back with answer keys, explanations, difficulty labels and Bloom's taxonomy categories, in a formatted document that looks finished. Your name is about to go on it.

Short answer to give a colleague: generated questions are candidates, not an assessment. Solve each one yourself, check what the item demands a student actually do, and find out how students respond to it before it counts. On the two largest studies in this knowledge base, the interesting signal is not that generation works but where it fails. Iterative generation inside a course-specific workflow produced usable multiple-choice exams across 71 college classes ([[assessing-quality-ai-generated-exams-field-2025|Isley et al., 2025]]). In a data-science audit of 311 deployed questions, the model's difficulty labels tracked the Bloom's levels it had generated alongside them almost perfectly (Spearman ρ = 0.90) while tracking what students actually scored at ρ = 0.06 ([[student-llm-use-ai-question-difficulty-data-science-2026|An and Wang, 2026]]). The label was a description of the prompt, not a measurement of the item.

## The short version

**1.** Write down the outcome and the evidence a satisfactory response would provide before you generate anything.

**2.** Build a blueprint so you can see which outcomes the set samples and how often.

**3.** Solve every item yourself before trusting the key, and read the explanation as a claim to be checked.

**4.** Ask what a student must do to answer it. A question that says "analyze" and requires recall is a recall question.

**5.** Treat difficulty labels as prompt metadata, not as psychometrics.

**6.** Pilot the items and inspect how they function, then revise the weak ones.

## Start with the learning you want evidence of

Generation is cheap enough that the output format quietly becomes the specification. If your notes produce tidy multiple-choice items, you will end up measuring whether students can choose among plausible statements, whatever outcome the syllabus claims.

Specify the outcome first, then the evidence a satisfactory response would supply, then the knowledge students are expected to bring. Include the course materials, the misconceptions you expect, any permitted tools and the response format. If you want students interpreting evidence, the item has to require interpretation, and adding the word to a definition question does not do it. A long scenario can still be answerable through one familiar phrase that gives the game away.

An assessment blueprint is a table of outcomes against items, and its value is that it exposes gaps before students do. It also makes the trade-off visible: every item you generate from the easiest material is an item you did not spend on the outcome you care about most.

## Review each item on six dimensions

Start with the key. Is it defensible against authoritative course content, and does the explanation hold up when you check it independently? The key and the explanation often come from the same flawed step, so checking one does not check the other.

Then ask what answering the item actually requires a student to do between reading and choosing. This is where generated items fail most often, and where the label is least reliable.

Check alignment next: does answering supply evidence for the intended outcome, or for something adjacent and easier to assess?

Read the wording as a student would. Is the needed information present, and has ambiguity unrelated to your construct been removed?

Look at the options and the scoring rules together. Are the distractors plausible and distinct from each other and from the key, and does the key recognize legitimate alternative answers that your rubric would credit?

Finally, ask who the item excludes. Reading load, cultural context, visuals and formatting can impose demands unrelated to the outcome. For a multilingual or disabled student, an item that rewards fast reading is measuring something you did not intend, and [[differential-effects-across-learner-groups|subgroup performance]] is where that shows up.

A second model can help you spot problems, and agreement between two models is not independent verification of correctness. They share training data and failure modes. Solve the item, then have a qualified person look at the ones that will count.

## Do not let the difficulty label decide

The [[automated-question-generation|question-generation]] literature is more useful on the failure of labels than on the success of generation. [[student-llm-use-ai-question-difficulty-data-science-2026|An and Wang (2026)]] examined 378 authored questions in data-science courses, of which 311 were deployed to 54 students across 7,888 responses. The model's easy, medium and hard labels correlated with its own co-generated Bloom's levels at ρ = 0.90 and with empirical item difficulty at ρ = 0.06. Roughly 70% of the deployed items were answered correctly by every student, which left almost no variation for a difficulty label to track even in principle.

Two lessons follow. First, difficulty is a property of the interaction between an item and a population, so no label produced before administering the item can be trusted as a measured value. Second, a bank of items everyone answers correctly is not an easy assessment, it is a useless one: it carries almost no information about who knows what.

The positive case is narrower than vendor claims and worth knowing precisely. [[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]] generated ten-question multiple-choice exams for 71 college classes, roughly 1,200 students, using a loop that generates, judges and revises each item conditioned on each course's own instructor-provided materials, then benchmarked the items against human-authored exams. That is a workflow with a reviewer inside it, run per course, not a single prompt over generic content. The support is for the workflow under those conditions, and it does not extend to whatever the same model produces from a paste of unedited notes.

## Run a generate, review, pilot, revise cycle

Generate against a blueprint, and ask for the intended outcome, the key, a concise solution and the misconception each distractor is meant to catch. The annotations make the design inspectable. They are not evidence that the design is sound.

Repair before you accumulate. Delete unsupported claims, duplicate items, accidental clues in the stem, multiple defensible keys and complexity unrelated to the construct, and note what you changed, because the pattern of repairs tells you which part of the prompt to fix.

Pilot where a pilot is proportionate. Low-stakes practice, or a managed pilot inside the assessment, gives you response data. Tell students how to report an ambiguous or wrong question and read those reports, since they are your most informative error signal.

Then inspect how the items function: the proportion answering correctly, which distractors attract responses, and whether success on the item travels with performance on the rest of the assessment. An item where strong students fail and weak students succeed is a defect rather than a hard question. In a small class these statistics are unstable, so combine them with content review and student explanations instead of treating a percentage as a verdict.

Revise, and keep the record: the approved version, the outcome it serves, the key, the rationale, the review notes and the administration history. For large or high-stakes banks this is where assessment specialists and proper psychometric methods belong, and [[educational-measurement|measurement]] expertise is not something a careful read can substitute for.

## What this looks like in a course

In an introductory sociology course the outcome might be distinguishing a structural explanation from an individual one. A weak item asks students to define "structural," which measures vocabulary recognition. A stronger candidate gives a short scenario about a family and an employment decision, then asks which explanation best identifies a structural constraint, with distractors representing plausible but different interpretations.

The instructor checks that the scenario genuinely supports the key, that no two options express the same idea, and that answering does not depend on terminology the course never introduced. A one-line follow-up, "which detail supports your choice?", surfaces the reasoning that the selected option conceals. The adaptation is untested as an item format, and its value is narrower: the review questions above can be answered before an item is administered, and a bad key can be repaired before students see it.

For students generating their own practice questions, the same rule applies at their level: attempt the item, check the explanation against course sources, and bring the unresolvable cases to someone who knows the subject. [[study-with-ai|Study practice]] that trains students to accept generated keys uncritically teaches the wrong habit.

## What will come back at you

**"It gave an answer and an explanation."** Both can repeat one mistake, and the explanation generates confidence precisely because it is fluent. Verify the reasoning against your materials, not against its own restatement.

**"These are only practice questions."** Practice teaches misconceptions when wrong keys go uncorrected, and students rehearse the error as readily as the correct answer. Lower stakes change how much review is proportionate. They do not change whether accuracy matters.

**"The students liked the quiz."** Enjoyment is evidence about the experience. An easy quiz that everyone finishes comfortably feels good and measures little, and the data-science audit found the items' popularity was not accompanied by any usable difficulty signal.

**"The rubric or Bloom's tags show it hits the outcomes."** Bloom's labels supplied by the same generation step are the least independent evidence available. The ρ = 0.90 against labels and ρ = 0.06 against student performance is exactly what that looks like when it is measured.

## What to do this week

**1.** Choose one outcome and write the evidence a satisfactory response would provide. Then generate five items against it, asking for the key, solution and intended misconception behind each distractor.

**2.** Solve all five without looking at the keys, and log the ones where you and the model disagree.

**3.** Ask a colleague to inspect the two strongest candidates for alignment and ambiguity, and delete anything neither of you can defend.

**4.** Pilot the survivors with a short follow-up asking students which detail supports their choice.

**5.** Record what you changed and why, so the next batch starts from a better prompt rather than the same one.

## Where to go next

[[automated-question-generation]] is the concept page for generation methods and their measured quality, and [[educational-measurement]] covers item analysis, reliability and the psychometrics that a pilot only gestures at. Both sit under [[assessment-validity|assessment validity]], which is the standard the whole cycle is serving.

The judgment side of the same problem belongs to [[ai-grading-fairness-reliability|AI grading]], since a good item graded badly is no better than a bad item graded well. For the wider question of what a grade should represent when students can use AI, see [[redesign-assessment-ai-era|redesigning assessment in the AI era]].
