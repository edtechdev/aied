---
title: "AI-Mediated Feedback Improves Student Revisions: A Randomized Trial with FeedbackWriter in a Large Undergraduate Course"
created: "2026-11-10T19:45:00-05:00"
updated: "2026-11-10T19:45:00-05:00"
type: article
sources: ['raw/papers/lu-ai-mediated-feedback-feedbackwriter-rct-2026.md']
source_url: "https://doi.org/10.1145/3772318.3791121"
source_depth: full text
confidence: high
evidence_context: educational
research_method: [experiment]
methods: [rct, quantitative-research]
level: [undergraduate]
audience: [instructors, instructional designers]
technology: [llm, generative-ai]
assessment: [feedback, ai-feedback-quality, automated-assessment]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Lu, Ju, Dudley, Sano and Wang (2026) ran a [[rct|randomized controlled trial]] in a 354-student introductory economics course at a public R1 university, comparing handwritten teaching-assistant [[feedback|feedback]] with [[ai-feedback-quality|AI-mediated feedback]] in which TAs reviewed, adopted, edited or dismissed suggestions from a system called FeedbackWriter. Across 1,366 graded essays, students who received AI-mediated feedback produced better revisions, with an effect of Cohen's d = 0.50 — roughly the move from the 50th to the 70th percentile — and the gain grew as TAs adopted more AI suggestions. TAs adopted 51.3% of AI feedback suggestions and corrected 11.3% of AI rubric judgments, and they provided longer comments with broader rubric coverage. The crucial null result sits beside the positive one: assignment to AI-mediated feedback did not improve post-test scores (b = -0.007, p = .31), so better revisions did not translate into measured learning at this dosage.

## Key Findings

1. **Revision quality improved substantially.** Mean first-to-final draft gain was 0.23 (SD = 0.16) in the FeedbackWriter condition against 0.17 (SD = 0.16) in the baseline, a condition effect of b = 0.05, t = 5.02, p < .001, and Cohen's d = 0.50.
2. **Adoption drove the effect.** Students did better when their TA adopted more AI suggestions, which makes the result a finding about the human-plus-AI workflow rather than about raw model output.
3. **TAs used AI as a draft, not an answer key.** They adopted 3,141 AI feedback suggestions (51.3% of feedback) against 1,348 historic suggestions (22.2%), flipped 2.83 AI rubric judgments per essay, approved 88.7% of judgments and corrected 11.3%, and further edited 806 comments.
4. **Feedback changed in form, not just volume.** FeedbackWriter feedback averaged 286 words against 157, covered more rubric items (M = 0.195 vs. 0.165), and contained significantly more summary and solution moves, while praise and problem statements did not differ significantly.
5. **Inter-rater consistency improved.** TAs in the AI condition assigned scores with lower variance than baseline TAs, and AI-generated scores had lower variance than human baseline scores — one reason the authors used the AI scorer for essay quality.
6. **Learning did not move.** Post-test means were 0.59 (SD = 0.19) for FeedbackWriter and 0.56 (SD = 0.18) for baseline, with no significant condition effect (b = -0.007, t = -1.02, p = .31), which the authors attribute to a single practice opportunity per rubric item.

## What FeedbackWriter does

The system takes an instructor-supplied rubric and, for each rubric item, scans the essay for relevant sentences, judges whether the rubric is satisfied or missing, and drafts a feedback message anchored directly to the passage. The TA sees the sentence highlighting, the rubric judgment with a checkbox to flip it, and a choice between the AI-generated message and instructor-supplied historic feedback. Final feedback boxes and scores are left empty so that every student-facing message is reviewed and confirmed by the TA. The model was GPT-4o via the OpenAI API.

The design choice matters for interpreting the trial. This is not AI feedback delivered directly to students, and it is not a generic chatbot. It is a reviewer-support tool that keeps a human between the model and the student, which is why the authors call the condition AI-mediated rather than AI-generated.

## The trial

The setting was ECON101, a large introductory course, with 354 students and 11 TAs. Students were randomly assigned to baseline handwritten TA feedback or to feedback mediated by FeedbackWriter, and the analysis used mixed-effects models with random intercepts for students and TAs. A randomization check found no pre-existing difference between conditions on two proctored in-person exams.

Two writing assignments produced 1,366 graded essays; 703 fell in the FeedbackWriter condition (386 for Assignment 1 and 317 for Assignment 2). Essay quality was scored with an AI pipeline rather than TA scores, because TA scores in the baseline had higher variance; the authors report that the AI scorer was validated against human judgments with Cohen's kappa. Revision quality was the first outcome, a blind post-test the second.

The adoption analysis is the part that distinguishes this study from a simple tool comparison. TAs evaluated 24,853 rubric items and wrote 6,121 comments in the AI condition, and their behavior varied: they repositioned highlights only 11 times, regenerated feedback 230 times, and mostly made small manual edits because the initial suggestion was "good enough." More adoption predicted better revisions, which suggests the benefit comes from the combination of a usable suggestion and a TA who knows when to keep it.

## Why revisions improved but post-tests did not

The authors' explanation is dosage. Each rubric item, such as proposing a policy to address market failure, affords essentially one practice opportunity in a single revision, so the expected downstream learning effect is much smaller than the effect on the revision itself. Detecting a post-test gain would require repeated practice across assignments and a larger sample, which the study did not have.

A second explanation is that the revision task and the post-test measure different things. The revision is a writing task with the essay in front of the student; the post-test is a blind assessment of economic knowledge. Better feedback can improve the artifact without producing durable conceptual change in one pass, which is consistent with the writing-to-learn literature the authors cite.

The quality analysis adds a mechanism. AI-mediated feedback was longer, covered more rubric items, and included more summary and solution moves. Longer feedback is not automatically better, but the rubric coverage measure suggests the gain was partly completeness: TAs using the tool addressed more of what the assignment asked for, and students revised accordingly.

## What this means for practice

- **Build reviewer support, not student-facing autograding.** The workflow — AI suggests, TA verifies and edits, student receives vetted comments — produced the effect and avoids unfiltered model output.
- **Leave the final box empty.** Requiring a human to confirm every message is the design choice that makes adoption defensible and keeps accountability with the TA.
- **Track adoption, not just assignment.** The dose-response pattern means a course where TAs ignore suggestions should not expect the same result.
- **Expect artifact gains before learning gains.** One revision per rubric item is unlikely to move a post-test; plan repeated practice if durable learning is the goal.
- **Show the AI's rubric judgment.** The checkbox and color cues let TAs correct the model cheaply, and corrections were frequent enough (11.3%) to matter.

## Limitations

- Essay quality was scored by an AI evaluator rather than human raters; the authors argue the pipeline was more consistent than TA scores, but the outcome is model-scored.
- The comparison is AI-mediated versus human-only feedback; there is no AI-only arm, so the study cannot say whether the human review is what produces the gain.
- The post-test measured learning after a single revision cycle, and the authors describe the dosage as too low to detect downstream effects.
- Student-facing data are performance measures only; students were not surveyed or interviewed about receiving AI-mediated feedback, and they were not told which comments were AI-suggested.
- The setting is one introductory economics course at one R1 university with 11 TAs, which limits generalization to other disciplines, class sizes and TA populations.

## Citation

Lu, X., Ju, K. P., Dudley, M., Sano, L., & Wang, X. (2026). [*AI-Mediated Feedback Improves Student Revisions: A Randomized Trial with FeedbackWriter in a Large Undergraduate Course*](https://doi.org/10.1145/3772318.3791121). Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI '26), Barcelona, Spain.
