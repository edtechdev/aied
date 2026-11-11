---
title: "AI-Supported Grading and Rubric Refinement for Free Response Questions"
created: "2026-11-10T20:35:00-05:00"
updated: "2026-11-10T20:35:00-05:00"
type: article
sources: ['raw/papers/zhao-ai-supported-grading-rubric-refinement-2026.md']
source_url: "https://doi.org/10.1145/3770762.3772545"
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [design and evaluation study]
methods: [quantitative-research]
level: [higher ed]
audience: [instructors, instructional designers]
discipline: [cs education]
technology: [llm]
assessment: [automated-assessment, feedback, formative-assessment]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Zhao and colleagues (2026) integrated an [[llm|LLM]]-based [[automated-assessment|grading]] pipeline into PrairieLearn and piloted it in two [[cs-education|computing]] courses, not to replace graders but to turn the AI's disagreements with instructors into a rubric-development instrument. The tool makes the same binary present/absent decision on each rubric item that a human grader makes, using GPT-4o with retrieval of up to five previously hand-graded submissions as few-shot examples. Across identify-the-bug and explain-in-plain-English questions, AI–human agreement reached 89–100%, comparable to or above agreement between trained human graders; on theory-of-computation explanations it fell to 75% on the detail item, and on a Markov-matrix problem with six legitimate solutions it dropped to 65%. The paper's argument is that the interesting signal is the disagreement: instructors can see which rubric item, and which wording, the AI misapplies, then revise the rubric until the instrument measures what they intended.

## Key Findings

1. **High agreement on well-specified factual items.** AI and instructor agreed on 99.4% of 320 submissions for a single-item identify-the-bug question, and at 100%, 99.7%, and 99.7% on the three rubric items of a second bug-identification question (319 submissions).
2. **Explain-in-plain-English agreement was on par with human graders.** On a shared-code question (317 submissions), AI–human agreement ran 94–97% while the two human graders agreed 92–98%; on a randomized variant (318 submissions), AI pairs reached 89–96% against 92–94% between humans. Every possible pairing of two humans and the AI was the best-agreeing pair on at least one rubric item.
3. **Conceptual explanations exposed the failure mode.** On two finite-state-machine questions (N = 20 each), two of three rubric items reached 100% agreement, but the "detail" item fell to 75% on one question because students gestured at the right idea without naming the states the rubric required.
4. **Multi-solution problems broke the grader.** A Markov-matrix question with six valid state-vector definitions produced only 65% agreement, largely because the AI credited a correct matrix that did not match the student's own state vector — a cross-consistency judgment the rubric did not specify.
5. **The refinement loop is the contribution.** The recommended workflow has instructors hand-grade about 10 submissions, run the AI on those, inspect item-level disagreement, and revise or expand rubric descriptions until agreement is satisfactory before scoring the remainder.
6. **Sample selection can inflate the agreement shown to instructors.** Grading the first 10 submissions on the page, as future practice may do, risks a sample of the responses the AI finds easiest and an artificially high agreement estimate.

## Why the rubric, not the model, is the unit of work

The paper starts from a practical bottleneck: free-response questions measure understanding better than multiple-choice or numeric items, but they do not scale, and hand-grading hundreds of short answers each week is impractical. Earlier automated short-answer grading either trains on large labeled corpora and struggles to explain its scores, or prompts a generative model and inherits prompt sensitivity. PrairieLearn's binary rubric format sits between those options: an instructor writes the key ideas a correct answer must contain, each student response is marked item by item, and the selected items double as [[feedback|feedback]].

The integration keeps the human in charge of the label. The AI's selections are displayed next to the instructor's, with a green check for full agreement and plus/minus icons marking items the AI added or missed; the human grade always takes precedence. The RAG step supplies up to five manually graded examples per submission, excluding the submission itself. The pedagogical claim is not that the model grades like an expert but that it applies a stated rubric consistently — and that consistency is what makes disagreement informative.

## The refinement loop

The workflow is a calibration loop rather than a one-shot deployment. An instructor grades roughly ten responses by hand, runs the AI over the same ten, and reads the item-level agreement table. A rubric item that the AI repeatedly selects when the instructor does not, or misses when the instructor selects it, is treated as evidence that the item's description is ambiguous, too broad, or missing an example. The instructor clarifies the item, adds a negative item, or expands the description with concrete cases, then re-runs the check. Only after agreement is acceptable does the AI grade the rest of the class.

Two examples show the loop doing real work. In the explain-in-plain-English task, one instructor counted local variable names as evidence of a low-level, line-by-line response while the AI did not; adding that standard to the rubric's negative item narrowed the gap. In the randomized variant, concrete examples of line-by-line answers could not be supplied for all thirteen code variants, so the AI had to judge "line-by-line" unaided — and agreement on that item fell to 89–90%, below the human–human 94%. The authors read the difference as evidence that rubric specificity, not model capability, set the ceiling.

## Where agreement held and where it broke

The pattern across tasks is consistent: agreement is high when the rubric item names a checkable feature of the response (a missing range bound, an in-place list mutation, a yes/no answer) and lower when the item requires judging the quality or completeness of an explanation. The FSM case is the clearest: students who wrote "you would need more states to keep track of the 0s seen" were on the right track but did not describe the states the rubric expected, and the AI credited or rejected them inconsistently.

The Markov-matrix failure is a different kind. The problem had six valid solutions depending on how students defined the state vector, and the AI sometimes awarded points for a matrix that was internally correct but did not follow from the student's definition. That is not a wording ambiguity an instructor can fix by adding an example; it is a relational check across two parts of a response, and the authors suggest that code execution or a dedicated validator, rather than more rubric prose, is the plausible remedy.

The pilot also surfaced the familiar subjectivity of conceptual grading. In one case the AI credited "negative numbers" to a response that noticed the algorithm looks only at the two largest values — a subtle misattribution the authors say less experienced teaching assistants also make. Their conclusion is not that the AI is more objective but that consistent application of a shared interpretation can make grading fairer at scale, provided the interpretation is written down.

## What this means for practice

- **Budget rubric time, not just deployment time.** The workflow assumes an instructor will hand-grade about ten responses and revise the rubric before scaling; a team that treats the rubric as fixed will get the AI's interpretation of it, not the instructor's.
- **Write items as observable checks.** Items that name a concrete feature of the answer travelled well; items that ask whether an explanation is "detailed enough" did not.
- **Watch item-level agreement, not only the total.** A high overall agreement can hide one systematically misapplied item, which is exactly the item that needs rewriting.
- **Do not use the first ten submissions as the validation sample.** They are convenient but may be the easiest cases; a spread of response types gives a more honest agreement estimate.
- **Keep the human label authoritative.** The pilot displays AI selections for review rather than auto-publishing them, which preserves the instructor's judgment and makes the disagreement visible.

## Limitations

- This is a two-course pilot at one large public university, with the AI run after the semester ended; students received AI grades in the identify-the-bug and EiPE tasks, but the accuracy evaluation was retrospective and no learning outcome was measured.
- The samples are large for the short-answer items (317–320 submissions) but small for the theory questions (N = 20), where a handful of disagreements moves the percentage substantially.
- Agreement is measured against a single instructor's labels, and the paper itself shows that human graders disagree with each other at similar rates; high agreement with one grader is not evidence of a correct score.
- The pipeline uses one model endpoint (gpt-4o-2024-11-20) with a fixed few-shot/RAG configuration, so the results do not establish how much the rubric-refinement loop depends on that model or how it transfers to other question types.
- The authors report no cost analysis and no comparison of instructor time with and without the tool, so the efficiency claim rests on the workflow description rather than measurement.

## Citation

Zhao, C., Fowler, M., Gertner, Y., Poulsen, S., West, M., & Silva, M. (2026). [*AI-Supported Grading and Rubric Refinement for Free Response Questions*](https://doi.org/10.1145/3770762.3772545). Proceedings of the 57th ACM Technical Symposium on Computer Science Education (SIGCSE TS 2026), St. Louis, MO, USA.
