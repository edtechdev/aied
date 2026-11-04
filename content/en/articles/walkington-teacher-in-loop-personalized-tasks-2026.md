---
title: "Should there be a teacher in-the-loop? A study of generative AI-personalized tasks middle school"
published: "2026-10-23"
created: "2026-11-03T09:50:00-05:00"
updated: "2026-11-03T09:50:00-05:00"
type: article
sources: ['raw/papers/walkington-teacher-in-loop-personalized-tasks-2026.md']
source_url: "https://doi.org/10.1007/s11423-026-10756-2"
confidence: high
page_kind: [evaluation]
research_method: [thematic analysis]
discipline: [math education]
level: [middle school]
audience: [instructors, curriculum designers, researchers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-03"
    agent: hermes-agent
source_depth: full text
pedagogy: [motivation, problem-solving]
technology: [personalized-learning, generative-ai, human-in-the-loop-ai]
foundations: [teacher-role, teacher-ai-competency]
methods: [qualitative-research]
---

> **Synthesis:** Walkington, Feng, Pruitt-Britton, Beauchamp and Lan watched 7 [[k-12|middle school]] mathematics teachers use [[generative-ai|ChatGPT]] to rewrite 143 [[curriculum-design|curriculum]] problems as [[personalized-learning|context-personalized tasks]] for their seventh graders, and analyzed the 558 prompts they wrote, the students' ratings, and three open-ended feedback questions (454, 449 and 446 responses). Personalization with a [[human-in-the-loop-ai|teacher in the loop]] happened at a broad grain size — a popular-culture topic area rather than a specific reference the student would recognize — while students asked for finer-grained, specific references. Teachers averaged 3.9 prompts (SD = 2.6) and about 4 minutes per problem, and their [[prompt-engineering|prompting]] was largely [[teacher-ai-competency|epistemic monitoring]]: fixing realism, age-appropriateness, readability and math structure, and catching inappropriate or biased outputs.

## Key Findings

1. **[[teacher-role|Teacher]]-in-the-loop personalization landed at a broad grain size.** Of 415 follow-up prompts, 19 gave only a general popular-culture topic area and 105 swapped in a specific reference the teacher chose, while 56 asked the model to choose a brand or reference itself.
2. **Students wanted finer grain than their teachers supplied.** Of the open-ended feedback, 103 students said the problem needed no change and 30 said it should change without saying how; many of the rest asked for a specific reference swap rather than a new topic area.
3. **Cost was about four minutes per problem.** Teachers used 558 prompts to write 143 problems, 3.9 prompts per problem (SD = 2.6), averaging 246 s (SD = 165.7 s), with teacher means from 2.0 to 5.5 minutes and 2.7 to 6.6 prompts.
4. **Students were lukewarm on the results.** Mean interestingness was 2.46 (SD = 1.24) and mean rated closeness to their interests 2.53 (SD = 1.28) on the study's scale, with ratings peaking visually around 3–5 prompts and declining at higher prompt counts.
5. **Most prompting was repair, not ideation.** Realism of the numbers and quantities drew 76 prompts, realism of the context 64, and brainstorming or research 45 — teachers were correcting generated problems more often than inventing new ones.
6. **Teachers caught ethical problems themselves.** Six prompts addressed output that was inappropriate or biased, including problematic celebrities, a gender swap the model introduced, and a weight-tracking scenario; 27 addressed readability and 16 addressed math difficulty or clarity.
7. **Students were not the realism check their teachers were.** Only 13 responses named an inaccurate context and 5 named inaccurate numbers, while most feedback stayed on surface features such as whether the reference was current.

## Personalization is a design process, not a prompt

The paper's useful reframing is distributed personalization: the teacher, the model and the student each hold part of the design, and the interesting question is where the boundaries sit. Teachers held authority over realism, age-appropriateness and mathematical structure; the model supplied volume and speed of variation; students supplied the ground truth about whether a reference was actually theirs. When those three are not connected, the result is a task that is personalized to a category rather than to a person.

That explains the grain-size gap. Asking for "food" or "sports" is a safe, fast prompt that produces something plausibly relevant to any adolescent; naming a specific brand requires knowing which brands this class actually cares about, which is exactly the knowledge the teacher in this study often lacked and sometimes researched through the model itself.

## What the time numbers mean

Four minutes per problem is the study's most quotable figure and also the most conditional one. It was produced by teachers in a research setting, observed while prompting, after specific training and [[reflection]] sessions, with 7 participants whose averages ranged from 2.0 to 5.5 minutes. The authors treat the estimate as descriptive and note that an efficiency claim cannot be settled without a comparison — no baseline of how long the same teachers took to personalize problems without AI appears in the design.

The prompt-count analysis is exploratory in the same way: ratings rose to a visual peak around three to five prompts and fell beyond that, with no inferential test, which the authors present as hypothesis-generating rather than as an optimum.

## Where this bears on teacher AI competency

The prompt taxonomy is effectively a map of what [[teacher-ai-competency|teacher judgment]] looks like when a model generates the artifact. Grain size and ownership, depth and realism, and ethical monitoring are the three dimensions the coding scheme separates, and the ethical cases are the ones a program can build on: a model that suggests a problematic celebrity or silently changes a character's gender is producing something a teacher has to notice and refuse.

For [[math-education|mathematics education]] specifically, the repair prompts about numbers and quantities show where the model's arithmetic realism fails, which is a limitation no amount of context personalization fixes.

## What this means for practice

- **Ask for the specific reference, not the topic area.** Teacher prompts at broad grain size produced tasks students rated as only moderately close to their interests, and student feedback asked for specific swaps.
- **Budget for repair, not just generation.** Most follow-up prompts corrected realism, readability or math structure, so a workflow that stops at the first generated problem leaves the work undone.
- **Keep an ethical check in the loop.** Six prompts caught inappropriate or biased output in this small sample, which is enough to show the failure mode exists.
- **Do not promise large time savings yet.** The four-minute average comes from seven trained, observed teachers with no non-AI baseline, so it is a description rather than an efficiency finding.

## Limitations

- **Seven teachers, one grade, one curriculum.** All taught seventh-grade mathematics using IM through ASSISTments, and each contributed multiple problems across two design sessions.
- **Observation changed the setting.** Teachers were observed while prompting and had received specific training and reflection sessions, so behavior may differ from naturalistic planning.
- **Descriptive and exploratory analysis.** Prompt counts are [[qualitative-research|qualitative]] coding reported for transparency, and the prompt-count-to-rating relationship was examined visually without inferential tests.
- **No performance outcome.** The study measures student interest and perceived closeness, not learning, which the authors name as the important next step.
- **Small feedback counts in places.** 13 responses named an inaccurate context and 5 named inaccurate numbers, so the student realism comparison is thin.

## Citation

Walkington, C., Feng, M., Pruitt-Britton, T., Beauchamp, T., & Lan, A. (2026). [*Should there be a teacher in-the-loop? A study of generative AI-personalized tasks middle school*](https://doi.org/10.1007/s11423-026-10756-2). Educational Technology Research and Development.
