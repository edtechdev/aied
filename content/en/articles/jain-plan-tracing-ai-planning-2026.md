---
title: "A Plan-Tracing Interface for AI-Supported Algorithm Planning"
created: "2026-11-11T07:37:12-05:00"
updated: "2026-11-11T07:53:16-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors]
sources: ['raw/papers/jain-plan-tracing-ai-planning-2026.md']
source_url: "https://arxiv.org/abs/2602.03197"
source_depth: full text
confidence: high
pedagogy: [scaffolding, problem-solving, prior-knowledge, self-efficacy]
technology: [llm, generative-ai]
assessment: [feedback, formative-assessment]
discipline: [cs education]
level: [higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Twenty students with prior programming experience but limited exposure to greedy algorithms solved the Jump Game problem in a between-subjects study: ten wrote a natural-language plan and revised it with [[feedback|AI feedback]], and ten also traced how their plan's variables changed on a concrete input before coding. Tracing changed how students wrote plans. They produced fewer steps (β=-2.03, p=.026) and fewer code-like control-flow references (β=-3.51, p=.018) with no drop in word count, and their plans stated goals and rationale rather than imitation code. It did not improve the AI feedback: the model localized the first erroneous step in 74% of traced submissions against 80% of untraced ones, a difference the authors did not find significant. Students described tracing as tedious but worthwhile when they were unsure of their approach.

## Key Findings

1. **Tracing pushed plans up a level of abstraction.** Plans in the tracing condition contained fewer steps (β=-2.03, SE=0.91, p=.026) and fewer control-flow references such as "if", "elif", "else", "while" and "return" (β=-3.51, SE=1.48, p=.018) than planning-only plans, while total word count did not differ. The qualitative analysis matched the counts: traced plans bundled several operations into one goal-level step and attached a reason to it, where planning-only plans split the same work into code-shaped instructions.
2. **The trace did not make the AI feedback more accurate.** The model correctly identified the earliest erroneous plan step in 74% of plan-tracing submissions and 80% of planning-only submissions, with mean explanation quality of 0.66 and 0.69 respectively; the mixed-effects models produced no significant condition effect.
3. **Code performance was statistically indistinguishable.** Against 178 LeetCode test cases, planning-only participants passed 79.00 on average (median 44.00, SD 86.27) and plan-tracing participants passed 60.90 (median 39.50, SD 67.21), with no significant difference reported.
4. **Confidence fell in the tracing condition despite comparable performance.** Planning-only participants reported higher confidence in solving similar problems in future (U=21.5, p=.025, r=-.50), the one survey difference the study found.
5. **Students valued tracing as verification, not as instruction.** Nine of ten tracing participants said trace-based planning was valuable, describing uses such as testing small examples, surfacing edge cases, detecting emerging patterns and revising an approach before any code was written; several said it was beneficial for how they practiced problem solving rather than for learning new concepts.
6. **Tracing was conditional on uncertainty.** Students called it tedious on large inputs and when the solution already felt obvious, and most useful when they did not know what was going on and could step through a small case by hand.
7. **Feedback failed in three recurring ways in both conditions.** Students reported explanations that identified an error without saying why the reasoning was wrong or how to revise it, feedback that contradicted earlier verdicts or repeated a message after the flagged step had been fixed, and pressure toward verbose, highly detailed plans because the variable set was fixed. Perceived learning, workflow adoption and usability did not differ.

## How the workflow runs

The interface separates strategy from implementation. Students write an ordered list of natural-language steps, decompose steps into nested substeps, and reorder or delete them as the approach develops. In the tracing condition they also receive a starter input and a predefined set of variables, and for every plan step they record how those values change as the described algorithm proceeds. For the Jump Game task the variables were `nums`, `counter` and `tracker`, with the input `nums = [2,3,1,1,4]`; students could edit the input to test other cases.

Feedback is deliberately delayed until a complete plan and trace exist, so the model informs revision rather than steering the first attempt. Verification sends GPT-4o the problem statement, the plan, the trace attached to each step and an instructor-written reference solution. The model reports the first step that diverges from the reference and explains why it is wrong without saying how to fix it, a fix-withholding design meant to leave the revision to the student. The flagged step is highlighted in red with the explanation beside it, and students can revise and re-verify as many times as they wish. Coding comes last and without AI assistance, with the plan available as a reference.

The authors fixed these constraints to make the trace comparable with an expert trace, and ordered plan, trace and code to keep the two stages distinct. Both choices became sources of friction.

## Why tracing changed plans but not feedback

The design assumed tracing would make plans more precise, giving the model concrete evidence of intended behavior. Plans became less precise about execution and more precise about purpose instead: the trace absorbed the step-by-step state changes, and students used the written plan to say what each step should accomplish and why. The authors read this as a gain, since organizing actions into higher-level subgoals supports transfer and a plan that states intent is easier to revise than one that imitates syntax.

The null result on feedback follows from the same shift. In the planning-only condition the model inferred intent from code-like natural-language steps. In the tracing condition it had an explicit execution trace but a plan written at a higher level. The two packages carried comparable evidence about what the algorithm would do, so the model localized errors about equally well. The trace changed the division of labor between plan and artifact without adding information the model could use.

The confidence result is read against that backdrop. Tracing surfaced edge cases and flaws that students would otherwise have met in code, so the task may have felt harder precisely because it was being checked more thoroughly. Participants in the tracing condition attributed their uncertainty to greedy algorithms rather than to the workflow, and the authors connect the pattern to work showing that active engagement can lower the feeling of learning while raising actual learning.

## Where the design trades off

Three tensions run through the paper. The first is support level: every student in the tracing condition had to trace before coding, and every student received the same fix-withholding feedback, but students wanted tracing only when they were unsure and some found the withheld fix too little to act on. A single setting served novices and experienced learners unevenly.

The second is representational flexibility against reliable evaluation. Fixing the variables lets the system compare a student's trace with a reference trace, which is what makes step-level feedback possible, but students reported that the fixed variable set pushed them toward approaches they had not intended. The authors suggest surfacing flaws inside a student's own approach instead of steering toward a canonical one.

The third is sequence. The workflow treats planning as a gate before coding, yet students found that writing code exposed logical problems the plan had not, and several wanted to revise the plan or trace mid-implementation and get feedback on the revision. The paper recommends an integrated workflow in which planning, tracing and coding inform each other, and it points to natural-language programming tasks as a place where mismatches between intention and specification may matter more.

## What this means for practice

- **Instructors:** Treat tracing as a conditional scaffold. Students found it valuable when they were uncertain and tedious when the approach already seemed clear, so requiring it for every problem spends effort where it buys least.
- **Instructors:** Expect a confidence dip when you introduce tracing, and say so in advance. Traced students performed comparably but rated their confidence lower (U=21.5, p=.025), which is consistent with the trace making gaps visible rather than with the workflow harming learning.
- **Instructors:** Do not assume the trace will improve the AI's feedback. Localization was 74% with a trace against 80% without, so pair tracing with an instructor or peer review if accurate diagnosis matters.
- **Designers:** Give the feedback pipeline memory of prior submissions, and balance reference-anchored reliability against learner flexibility. Students lost trust when the model contradicted an earlier verdict or repeated a message after a fix, and they felt the fixed variable set pushed them toward approaches they had not intended.
- **Researchers:** Measure plan representation, not only code correctness. The clearest effect was a change in how students described algorithms, which a test-case score would have missed.

## Limitations

This is an exploratory study with 20 participants, 10 per condition, so it is underpowered for anything but large effects; the absence of a significant difference in feedback quality or code performance is not evidence that none exists. Participants solved one LeetCode problem in a single 60-minute session, with 15 minutes for planning and 10 for coding, and learning was measured by test cases passed rather than by a delayed or transfer task. Code performance varied widely within conditions (SD 86.27 and 67.21), which makes the comparison noisy. Eligibility rested on self-reported familiarity with greedy algorithms, the sessions were think-aloud and recorded, and the feedback ratings came from one coder after a 15% double-coded sample that reached 67% agreement. The paper reports no effect sizes for the null comparisons.

## Citation

Jain, Y., Do, H., Wu, Z., & Wang, A. Y. (2026). [*A Plan-Tracing Interface for AI-Supported Algorithm Planning*](https://arxiv.org/abs/2602.03197). arXiv preprint.
