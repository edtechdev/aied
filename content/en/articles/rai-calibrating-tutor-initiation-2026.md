---
title: "Calibrating LLM Tutor Initiation to Learner Expertise: Proactive and Reactive Support for Computational Thinking"
created: "2026-11-11T07:36:33-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors, instructional designers]
sources: ['raw/papers/rai-calibrating-tutor-initiation-2026.md']
source_url: "https://bampel.com/uploads/calibrating-llm-tutor-initiation.pdf"
source_depth: full text
confidence: high
foundations: [cognitive-offloading]
pedagogy: [scaffolding, metacognition, desirable-difficulties, prior-knowledge]
technology: [llm, generative-ai, intelligent-tutoring]
assessment: [feedback]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** This working paper asks who should carry the diagnostic work in an [[intelligent-tutoring|LLM tutor]]: the system or the learner. Ninety students in an introductory Python course used CodeTutor, a GPT-4o tutor identical in style and content but varied in who initiates support. Proactive help, triggered by repeated errors or inactivity, helped novices; reactive help, which waits to be asked, helped more advanced learners. Averaged across the class the two modes looked the same. The difference appeared only in conceptual reasoning, not in code implementation, where the compiler already says something is wrong. Tutor design becomes a question of allocating diagnostic responsibility according to [[prior-knowledge|prior knowledge]] and task phase.

## Key Findings

1. **On average, neither mode was better.** Growth in computational thinking was essentially identical whether the tutor intervened on its own or waited to be asked, on both the conceptual and the coding task. Both groups improved.
2. **For novices, proactive help paid off in conceptual work.** Students with low initial proficiency gained more when the tutor stepped in on its own, and that advantage shrank and then reversed as proficiency rose.
3. **Prior programming experience showed the same crossover.** Less experienced students did better with proactive support; more experienced students did worse with it.
4. **The effect vanished once students wrote runnable code.** In the implementation task there was no expertise interaction, which the authors attribute to the IDE and compiler, which flag a problem without anyone having to diagnose it.
5. **Proactive help tied the reasoning skills together.** Under proactive initiation the four computational-thinking dimensions became more closely related on the conceptual task, suggesting students drew on them together rather than one at a time.
6. **The traces show a division of diagnostic labor.** Advanced learners produced more specific help requests under reactive initiation and novices did so under proactive initiation; proactive support also cut advanced learners' recovery time from sustained errors, but not novices'.
7. **Speed came at a cost in ownership.** Under proactive support novices switched solution paths far more often than advanced learners and paused much longer after a nudge, consistent with [[cognitive-offloading|offloading]] the structuring of a problem onto the tutor.

## The CodeTutor design

CodeTutor is a GPT-4o system that combines a code editor, a chat panel, a code-output pane and a whiteboard in one workspace. It was built as a design class for expertise-contingent support after focus groups with more than 200 students at a minority-serving institution found that learners often could not articulate what was wrong and preferred help that let them keep reasoning rather than complete solutions.

Only one thing varied between conditions: initiation. In the reactive condition the tutor stayed available but spoke only when the learner asked. In the proactive condition it monitored interaction signals, including repeated errors, execution failures and extended inactivity, and intervened when those signals indicated sustained difficulty. Everything else was held constant. Both modes used [[socratic-method|Socratic]] [[prompt-engineering|prompting]] capped at two sentences, both were barred from rewriting code or giving complete answers, and both retrieved from instructor-provided course materials through a [[rag|retrieval-augmented generation]] pipeline. That constraint matters for interpretation: the experiment isolates when support arrives, not what it says.

The evaluation recruited 94 students and analyzed 90 after four did not complete the second session, with stratified randomization on initial computational-thinking proficiency. In session one they completed a background survey and a pre-test. Two days later they worked on a parallel task with CodeTutor and then took a post-test without AI assistance. Each test had two parts: a natural-language pseudocode task that captured conceptual reasoning with no execution feedback, and a Python implementation task run in an IDE with continuous compiler and runtime feedback. Submissions were scored on four computational-thinking dimensions by a separate [[llm|LLM]], validated against blinded human raters, with strong agreement on the decomposition dimension and F1 scores across [[rubrics|rubric]] components in the acceptable-to-good range.

## Why the phase matters

The theoretical argument is that [[scaffolding|scaffolds]] do not act on a uniform learner. Expertise reversal predicts that support which compensates for missing diagnostic capacity in a novice becomes redundant for someone who can already diagnose the problem. Proactive initiation takes over part of that diagnosis; reactive initiation leaves it with the learner. The experiment shows the expected crossover in the phase where diagnosis is hardest and least supported: building a problem representation and choosing an approach, with no compiler to say that something is wrong.

Once code runs, the environment supplies the error signal. A failed execution or a runtime exception tells the learner that a problem exists, so the tutor's diagnostic contribution has less marginal value. That is why the authors describe the finding as phase-contingent as well as expertise-contingent, and why they expect the logic to generalize to other tasks with sparse execution feedback, such as algorithm specification or system design.

The process data add a trade-off that a simple reading would miss. Diagnostic specificity rose more for advanced learners under reactive initiation, and for novices under proactive initiation. Proactive tutoring cut the time advanced learners spent recovering from sustained error states, from 356 seconds to 150, but made no difference for novices. At the same time, faster recovery came with less time in [[desirable-difficulties|productive struggle]]. Learners who spent longer in sustained error states later produced more diagnostically specific help requests. Proactive support also exposed novices to tutor-shaped solution paths: structural switching was 13.5% among novices against 1.2% among advanced learners, and novices paused 102% longer after a proactive nudge. The efficiency gain and the loss of ownership are the same mechanism seen from two sides.

## What this means for practice

- **Instructors.** Do not adopt one tutor behavior for a whole class. The trial's own conclusion is that proactive support suits students with low initial proficiency or little programming experience, while reactive support suits students who can diagnose their own errors.
- **Instructional designers.** Calibrate initiation to the phase of the task. Early conceptual work, where there is no execution feedback, is where proactive support earned its gains; during implementation, a restrained tutor avoids displacing self-diagnosis the environment already supports.
- **Designers.** Treat the initiation policy as a tunable parameter rather than a fixed product feature, and use signals such as low diagnostic specificity, prolonged unresolved error states or repeated adoption of tutor-suggested paths to decide when to intervene and when to recede.
- **Researchers.** Measure the interaction process, not only the post-test. The outcome data alone showed no average effect; the traces made the conditional pattern interpretable, even though the student-level mediation was underpowered.

## Limitations

This is a manuscript under review, not a peer-reviewed publication, and the evidence is bounded by its setting: one introductory Python course at one minority-serving institution, 90 analyzed students, and a single two-day sequence with an immediate post-test. The authors state that the sample is adequate for primary effects but limited for higher-order interactions and subgroup models, and their own power [[simulation|simulations]] show low power for the moderated indirect effects. The process measures are model-derived, including an LLM scoring pipeline and CodeBERT-based classification of structural switching, and the mediation analysis aggregates fine-grained traces to the student level. No delayed test establishes whether the expertise-contingent gains persist, and the study cannot show whether a dynamically adaptive policy would outperform either fixed mode.

## Citation

Rai, A., Chen, L., Ramesh, B., Breazeal, C., Long, Y., Ampel, B. M., & Aria, A. (2026). [*Calibrating LLM Tutor Initiation to Learner Expertise: Proactive and Reactive Support for Computational Thinking*](https://bampel.com/uploads/calibrating-llm-tutor-initiation.pdf). Working paper, under review at Information Systems Research.
