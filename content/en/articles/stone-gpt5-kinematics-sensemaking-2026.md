---
title: "AI is ready, but are the students. From answer-making to sense-making"
created: "2026-11-11T09:20:00-05:00"
updated: "2026-11-11T09:20:00-05:00"
type: article
evidence_context: educational
published: "2026"
page_kind: [evaluation]
research_method: [thematic analysis]
discipline: [science education]
level: [higher ed]
audience: [researchers, instructors]
foundations: [human-ai-collaboration]
pedagogy: [scaffolding]
technology: [generative-ai, llm]
methods: [qualitative-research, quantitative-research]
confidence: high
sources: ['raw/papers/stone-gpt5-kinematics-sensemaking-2026.md']
source_url: "https://arxiv.org/abs/2611.13404"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Stone, Zhang and Utter ask a question that most AI-in-physics studies skip: if the model can now answer the test, does the student use it any differently? GPT-5 cleared 84% of the Test of Understanding Graphs in Kinematics items on average, against 43% for the earlier GPT-4 baseline, with 15 of 26 items perfect across 60 trials each. Yet the 134 student dialogues coded from a 43-student discussion section were dominated by recipe requests and answer checks: recipe-seeking and confirmation together accounted for more than three-quarters of coded phrases. The end-of-term assignment, graded and carrying a rubric that demanded at least three iterative exchanges, flipped that distribution, with think-aloud and explanation requests rising from 0% to 25% and causal reasoning from 4% to 12%. The paper's conclusion is about framing, not capability: accuracy made a peer-like role possible, but only the assignment design made students occupy it.

## Key Findings

1. **GPT-5 is far more accurate on the TUG-K than GPT-4.** Each of the 26 items was presented 60 times in a fresh session with memory disabled; average item correctness rose from 43% (SD 39) under the earlier model to 84%, t(25) = 5.64, p < .001, d = 1.11. Fifteen items were answered perfectly in every trial, and Item 24 moved from 1.6% to 100%.
2. **One item got worse, for an instructive reason.** Item 14 fell from 81.6% to 40% correct. The authors trace the error to the model misreading the graphical answer options rather than to the physics, which is the same failure mode reported for GPT-4 in the study this one replicates.
3. **Early-term dialogue was answer-making.** Across 134 screenshots from three graphing topics — kinematics graphs, projectile motion and Hooke's Law — 52% of coded phrases sought a recipe ("Give me the steps", "Walk me through"), 26% sought confirmation of an answer, 11% asked what to prioritize, 7% asked how quantities relate, and 4% used if-then causal reasoning.
4. **The graded final assignment reversed the mix.** Seeking recipes fell to 22% and confirmation to 16%, while relating and comparing rose to 15%, causal reasoning to 12%, and a new category — think-aloud framing, summarizing the problem and asking about physical meaning — appeared at 25%, up from zero.
5. **The think-aloud exchanges resemble classroom dialogue.** Students began writing their own framing, assumption or partial idea and then asked the model to check it, producing initiation-response-feedback sequences that cannot arise when the prompt is a pasted problem statement. The authors treat this as the clearest linguistic evidence of sensemaking rather than answer-seeking.
6. **Accuracy and framing were both necessary and neither was sufficient.** The paper's own account is that GPT-5 being accurate made a peer-like role viable, while practice, a graded rubric, an explicit warning against pasting prompts, and a requirement to show three iterative exchanges made students adopt it.

## What the study did

The first part replicates a published GPT-4 evaluation. Each TUG-K question went to GPT-5 sixty times, in a new conversation with memory off, under one fixed prompt asking for an answer plus two sentences of reasoning. Accuracy was compared item by item against the earlier model's published rates.

The second part follows one discussion section of a large calculus-based introductory mechanics course in spring 2026, with 43 students, one teaching assistant and four learning assistants. The TA gave three instructions: do not submit problem statements as written, reformulate the question, and explain what you learned from the response. Two other sections used AI without that guidance. Students submitted screenshots of their exchanges after three graphing sessions, and again for an end-of-term assignment that was graded, rubric-scored, and required at least three iterative dialogue strings.

Coding was inductive: the authors read the screenshots in Delve, identified recurring syntax and lexicon, and built six categories from what they found. Two raters coded independently and agreed on 95% of segments initially, reaching 100% after review.

## What the end-of-term shift can and cannot show

The paper is candid that the discussion sessions and the final assignment differ in at least four ways: students had practiced, the assignment counted toward the grade, the rubric stated expectations, and it required multiple exchanges. Any of those could produce the change, and the design cannot separate them. The authors say so, and they also note the two unguided sections as a comparison they did not analyze.

That leaves the result as a well-documented existence proof rather than an effect estimate. It shows that the same model, in the same course, produced recipe-seeking dialogue in one setting and think-aloud dialogue in another, and that the difference tracked the task's demands. It does not show how much of the shift came from the rubric, how much from practice, or whether either produced learning.

The GPT-5 comparison has its own limits. The baseline comes from a different study, and the paper's methods section calls it GPT-4.1 while the background and discussion call it GPT-4 — a labeling inconsistency that matters when the comparison is the headline. The item-level paired test also treats 26 items as the unit, with 60 trials collapsed per item, so the precision of the 84% mean is not what the full 26 × 60 trial pool would suggest.

## What this means for practice

- **Instructors.** If you want sensemaking, require it in the artifact: ask for a student framing plus at least three exchanges, and grade the dialogue rather than the answer. The discussion sessions in this study had permission to use AI; the assignment had a specification.
- **Course designers.** Put the AI-use instructions in the rubric, not in a preamble. Students responded to what was scored, and the rubric's warning against pasting prompts was visible in the transcripts.
- **Teaching assistants.** Reformulation is the teachable move. Asking students to restate the question before querying the model is cheap, and it is the difference between a pasted problem and an IRF exchange.
- **Researchers.** Compare guided and unguided sections before attributing the shift to framing, since this study had that comparison available and did not run it.

## Limitations

One section, 43 students, one institution, one term, one model version, and a self-selected set of submitted screenshots: students chose what to show, and nothing verifies that the 134 episodes represent their ordinary use. No learning outcome was measured, so the paper establishes dialogue quality, not understanding. The coding is inductive and the categories were built from the same corpus they classify, with no external validation. The GPT-4 baseline is imported from another study with a different date and possibly different model version. And the timing confound — practice, stakes, rubric and required exchanges arriving together — is acknowledged rather than resolved.

## Citation

Stone, A., Zhang, R., & Utter, B. (2026). [*AI is ready, but are the students. From answer-making to sense-making*](https://arxiv.org/abs/2611.13404). arXiv:2611.13404 [physics.ed-ph]. https://doi.org/10.48550/arXiv.2611.13404.
