---
title: "Calibrating LLM Tutor Initiation to Learner Expertise: Proactive and Reactive Support for Computational Thinking"
created: "2026-11-11T07:36:33-05:00"
updated: "2026-11-11T07:53:16-05:00"
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
verified: [citation, numbers, links]
---

> **Synthesis:** This working paper asks who should carry the diagnostic work in an [[intelligent-tutoring|LLM tutor]]: the system or the learner. In a controlled experiment, 90 students in an introductory Python course at a minority-serving institution used CodeTutor, a GPT-4o tutor held constant in style and content but varied in who initiates support. Proactive initiation, triggered by repeated errors or inactivity, helped novices; reactive initiation, which waits for a request, helped more advanced learners. There was no average treatment effect. The effects appeared only in conceptual reasoning, not code implementation, where the compiler supplies the error signal. The result reframes tutor design as the allocation of diagnostic responsibility, conditional on [[prior-knowledge|prior knowledge]] and task phase.

## Key Findings
1. **There was no average difference between modes.** CT proficiency growth was .14 in the reactive condition against .13 in the proactive condition on the pseudocoding task (difference .01, p = .81), and .13 against .12 on the coding task (difference .01, p = .83). Both groups improved significantly from pre-test to post-test on overall CT proficiency and on pattern recognition, decomposition and abstraction.
2. **Expertise reversed the effect in conceptual reasoning.** The interaction between tutor initiation and initial CT proficiency was negative for the pseudocoding task (β = −.48, p < .05), meaning the value of proactive initiation fell as initial proficiency rose. For low-proficiency learners, moving from reactive to proactive was associated with a .57 unit increase in CT growth (dy/dx = .57, p < .10); for high-proficiency learners the sign reversed (dy/dx = −.40, p > .10).
3. **Prior programming experience produced the same pattern.** The interaction between tutor initiation and prior experience was negative and significant (β = −1.01, p < .05). Proactive initiation was associated with a .42 unit increase for less experienced learners (dy/dx = .42, p < .10) and a .59 unit decrease for more experienced learners (dy/dx = −.59, p < .10).
4. **The moderation disappeared in code implementation.** For the coding task the initial CT by mode coefficient was .25 (.24) and not significant, and no comparable expertise interaction appeared. The authors attribute this to the IDE and compiler, which signal that something is wrong without the learner or the tutor having to diagnose it.
5. **Proactive initiation coupled the CT dimensions more tightly, but only in reasoning.** On the pseudocoding task the average inter-item correlation among the four CT dimensions rose by .28 in the proactive condition (bootstrap 95% CI .06 to .45, p = .01) against .16 in the reactive condition (CI −.11 to .37, p = .23). On the coding task the change was .04 overall (CI −.13 to .19, p = .70).
6. **The interaction traces show a diagnostic division of labor.** Diagnostic specificity rose more for advanced learners under reactive initiation (+15.2%, p = .01) and for novices under proactive initiation (+10.5%, p = .00). Proactive tutoring cut recovery time from sustained error states for advanced learners (150 against 356 seconds, a difference of 206 seconds, t = 2.40, p = .02) but not for novices (69 seconds, t = 0.49, p = .63).
7. **Novices switched solution paths far more often.** Under proactive initiation, structural switching was 1.2% among higher-proficiency learners and 13.5% among lower-proficiency learners, and proactive nudges raised novices' processing latency by 102% (p < .01), consistent with [[cognitive-offloading|offloading]] the structuring of a solution onto the tutor.
8. **The mediation analysis did not confirm a student-level pathway.** None of the conditional indirect effects, or their high-minus-low differences, was significant at the 95% level; every bootstrap confidence interval included zero. The authors present the process results as suggestive rather than as an established mechanism.

## The CodeTutor design

CodeTutor is a GPT-4o system that combines a code editor, a chat panel, a code-output pane and a whiteboard in one workspace. It was built as a design class for expertise-contingent support after focus groups with more than 200 students at a minority-serving institution found that learners often could not articulate what was wrong and preferred help that let them keep reasoning rather than complete solutions.

Only one thing varied between conditions: initiation. In the reactive condition the tutor stayed available but spoke only when the learner asked. In the proactive condition it monitored interaction signals, including repeated errors, execution failures and extended inactivity, and intervened when those signals indicated sustained difficulty. Everything else was held constant. Both modes used Socratic prompting capped at two sentences, both were barred from rewriting code or giving complete answers, and both retrieved from instructor-provided course materials through a retrieval-augmented generation pipeline. That constraint matters for interpretation: the experiment isolates when support arrives, not what it says.

The evaluation recruited 94 students and analyzed 90 after four did not complete the second session, 45 per condition, with stratified randomization on initial CT proficiency. In session one they completed a background survey and a pre-test. Two days later they worked on a parallel task with CodeTutor and then took a post-test without AI assistance. Each test had two parts: a natural-language pseudocode task (T1) that captured conceptual reasoning with no execution feedback, and a Python implementation task (T2) run in an IDE with continuous compiler and runtime feedback. Submissions were scored on four CT dimensions by a separate LLM, validated against blinded human raters; the decomposition dimension reached Cohen's κ = 0.85 and F1 scores ranged from 0.80 to 0.96 across rubric components.

## Why the phase matters

The theoretical argument is that [[scaffolding|scaffolds]] do not act on a uniform learner. Expertise reversal predicts that support which compensates for missing diagnostic capacity in a novice becomes redundant for someone who can already diagnose the problem. Proactive initiation takes over part of that diagnosis; reactive initiation leaves it with the learner. The experiment shows the expected crossover in the phase where diagnosis is hardest and least supported: building a problem representation and choosing an approach, with no compiler to say that something is wrong.

Once code runs, the environment supplies the error signal. A failed execution or a runtime exception tells the learner that a problem exists, so the tutor's diagnostic contribution has less marginal value. That is why the authors describe the finding as phase-contingent as well as expertise-contingent, and why they expect the logic to generalize to other tasks with sparse execution feedback, such as algorithm specification or system design.

The process data add a trade-off that a simple reading would miss. Faster error recovery came with less time in productive struggle. Learners who spent longer in sustained error states later produced more diagnostically specific help requests, with a 15.9% higher mean diagnostic specificity (p < .001), and the effect was pronounced under reactive initiation (+20.3%, p < .001). Proactive support also exposed novices to tutor-shaped solution paths: switching was 13.5% for novices against 1.2% for advanced learners, and novices paused 102% longer after a proactive nudge. The efficiency gain and the loss of ownership are the same mechanism seen from two sides.

## What this means for practice

- **Instructors.** Do not adopt one tutor behavior for a whole class. The trial's own conclusion is that proactive support suits students with low initial proficiency or little programming experience, while reactive support suits students who can diagnose their own errors.
- **Instructional designers.** Calibrate initiation to the phase of the task. Early conceptual work, where there is no execution feedback, is where proactive support earned its gains; during implementation, a restrained tutor avoids displacing self-diagnosis the environment already supports.
- **Designers.** Treat the initiation policy as a tunable parameter rather than a fixed product feature, and use signals such as low diagnostic specificity, prolonged unresolved error states or repeated adoption of tutor-suggested paths to decide when to intervene and when to recede.
- **Researchers.** Measure the interaction process, not only the post-test. The outcome data alone showed no average effect; the traces made the conditional pattern interpretable, even though the student-level mediation was underpowered.

## Limitations

This is a manuscript under review, not a peer-reviewed publication, and the evidence is bounded by its setting: one introductory Python course at one minority-serving institution, 90 analyzed students, and a single two-day sequence with an immediate post-test. The authors state that the sample is adequate for primary effects but limited for higher-order interactions and subgroup models, and their own power simulations show low power for the moderated indirect effects. The process measures are model-derived, including an LLM scoring pipeline and CodeBERT-based classification of structural switching, and the mediation analysis aggregates fine-grained traces to the student level. No delayed test establishes whether the expertise-contingent gains persist, and the study cannot show whether a dynamically adaptive policy would outperform either fixed mode.

## Citation

Rai, A., Chen, L., Ramesh, B., Breazeal, C., Long, Y., Ampel, B. M., & Aria, A. (2026). [*Calibrating LLM Tutor Initiation to Learner Expertise: Proactive and Reactive Support for Computational Thinking*](https://bampel.com/uploads/calibrating-llm-tutor-initiation.pdf). Working paper, under review at Information Systems Research.
