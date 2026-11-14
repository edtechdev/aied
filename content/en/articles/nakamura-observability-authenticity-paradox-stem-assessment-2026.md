---
title: "Learning on the record: the observability–authenticity paradox in AI-era STEM assessment"
created: "2026-11-14T05:48:00-05:00"
updated: "2026-11-14T05:48:00-05:00"
type: article
published: "2026-11"
discipline: [science education, stem education]
foundations: [ai-literacy]
pedagogy: [productive-failure, help-seeking, self-regulated-learning]
technology: [generative-ai, learning-analytics]
assessment: [assessment-validity, process-oriented-assessment, formative-assessment, summative-assessment]
ethics: [privacy, differential-effects-across-learner-groups]
research_method: [position paper]
audience: [instructors, instructional designers, administrators, assessment designers]
level: [middle school, higher ed]
page_kind: [framework]
sources: ["raw/papers/nakamura-observability-authenticity-paradox-stem-assessment-2026.md"]
confidence: high
evidence_context: educational
source_depth: full text
source_url: "https://doi.org/10.1186/s40594-026-00659-2"
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-14"
    agent: hermes-agent
---

> **Synthesis:** Nakamura names a tension inside the shift toward [[process-oriented-assessment|assessing learning processes]] rather than products. GenAI tutors record prompts, revisions and admissions of confusion, and those records look like stronger evidence than a finished submission. But the features that make a record informative, exploration, expressed uncertainty and visible error, are the ones a learner has most reason to manage once the record may be graded. He calls this the Observability–Authenticity Paradox: reactivity to evaluation damages both the learning and the inference the record was meant to support.

*This page summarizes a commentary. The paper presents a conceptual argument and no data of its own: the paradox, its design principles and the STEM examples are the author's proposals, and every figure or result mentioned below is attributed to the study that produced it.*

## Key Findings

1. **The paradox is a claim about conditions, not technology.** Traces stay usable for automated feedback and formative review. Risk concentrates where capture is continuous and undeclared, where records feed grading or credentialing, and where inference rests on behavior a learner can withhold.
2. **The reactivity evidence is borrowed.** Nakamura cites reduced help-seeking under performance-relative evaluation (Ames, 1992; A. M. Ryan et al., 2001), more help-seeking when a computer could be asked instead of a person (Karabenick & Knapp, 1988), hint exploitation in tutoring systems (Baker et al., 2004), and covert GenAI use where students believed it was banned (Lnenicka & Coufal, 2026). Little of this comes from GenAI tutoring itself.
3. **Teacher monitoring is the counter-example.** Classroom listening is selective, bounded to a lesson, visible, negotiable and used to adjust instruction. Logs can be verbatim, comprehensive, invisible, automatically interpreted and routed to grades, credentials or vendors. The difference is design, not technology.
4. **Rewarding [[productive-failure|productive failure]] does not dissolve the paradox.** Credit for exploration changes what learners display, not that they display it for an audience, and performed and genuine failure look alike in a log. Blameless postmortems suggest the alternative: judge a declared failure analysis, not the iteration.
5. **Differential reactivity is a fairness problem in the measurement sense.** If groups manage traces differently, through evaluative anxiety, stereotype threat, fluency-sensitive judgment or unequal familiarity with AI tools, construct-irrelevant variance differs by group. Measurement invariance and differential functioning are the tests.
6. **The design answer is declared, episodic and owned assessment.** Each principle addresses learning and inference at once, and together they refine the two-lane model: an open lane that scores captured tutoring records inherits the paradox.

## Why the record looks like better evidence

Four uses of a trace differ in who sees it and what follows: automated feedback, teacher review, grading and credentialing. The last two are consequential and are the paper's concern.

The attraction is genuine. Constructs such as monitoring understanding, seeking help, discarding design options and interrogating AI output are defined by how learners proceed, and a product does not show them. GenAI tutoring also differs from earlier stealth assessment: its records are open-ended language, it carries much learning including solitary study, language models can read the traces without a purpose-built evidence model, and they persist.

Nakamura does not claim anyone advocates continuous logging. He describes a foreseeable drift: guidance already asks programs to emphasize process, and common products let teachers read chat histories. Availability is not a validity argument; an inference still has to be defended, as [[assessment-validity|argument-based validity]] requires.

## What reactivity does to the record

Washback supplies the vocabulary. Messick treated negative washback as a validity problem when assessment induces behavior that distorts the construct. A student who never asks for help may be self-regulating or concealing a need, and the record cannot distinguish them.

Task boundaries erode too: when any part of a history may count, casual exchanges, off-task exploration and sustained reasoning sit in one record, and it is unclear which construct it represents. Anonymization protects identity without changing the learner's awareness of evaluation, and consent may make the purpose more salient. Scoring rules can protect learning while inference stays compromised.

## Designing for the paradox

Declared assessment means learners know when, by whom and for what purpose an activity is evaluated. Because the task is designed and validated for those conditions, the setting becomes part of the intended observation. Transparency alone does not make continuous capture valid: telling students that everything may count only spreads reactivity across their learning.

Episodic assessment gives evaluation edges: between bounded events learners can struggle and fail without their conduct counting, and declared checkpoints can still be frequent.

Owned assessment makes the record the learner's by default. Dialogue becomes evidence only when the learner contributes it to a declared task, separating documentation for learning from evidence for evaluation.

In a density unit, if every exchange counted, students would stop voicing the misconception that heavier objects sink, which the unit exists to surface. Under the principles the dialogue stays private and understanding is assessed in a declared claim-evidence-reasoning explanation. Evaluating an AI-generated claim works the same way: assess a declared critique, not the practice.

## What this means for practice

- **Instructors:** Decide in advance which conversations count toward a grade and say so, then keep exploratory talk unscored. Read a chat history to adjust teaching, not as a window into what a student knows.
- **Instructional designers:** Build the boundary into task and tool: retention limits, learner-selected sharing, declared checkpoints with stated criteria, transcripts that stay with the student. The question is which record supports a defensible claim, not how much a system captures.
- **Administrators:** Treat continuous logging as an assessment decision needing a validity argument, not a procurement feature. Ask which inference it supports, how long it is kept, and which groups may react differently.
- **Assessment designers:** Use the paper's tests rather than its conclusions. Compare declared and undeclared conditions, check whether indicators function equivalently across groups, and pilot the three principles before scaling them.

## Limitations

- The argument is conceptual and reports no data: the paradox is a prediction, and its reactivity evidence is transferred from classrooms, older tutoring systems and workplaces, not measured in GenAI tutoring.
- No institution is shown grading continuous tutor logs; the argument targets a foreseeable drift, so its urgency depends on adoption the paper does not document.
- The design principles are untested, and their costs, including less data for student support and more administrative choreography, are not quantified.
- The fairness analysis is a framework: no group comparisons are reported, and the moderators are reasoned rather than demonstrated.
- Practical questions remain open: logs in integrity cases, episode length, contesting an automated inference. Examples come mainly from science, and transfer to mathematics and engineering design is untested.

## Connected Concepts

- [[assessment-validity]]: argument-based validity and extrapolation are the diagnostic frame
- [[process-oriented-assessment]]: the reform the paradox constrains
- [[formative-assessment]]: teacher monitoring as the counter-model
- [[productive-failure]]: the learning benefit that reactivity threatens
- [[help-seeking]]: the discretionary indicator most likely to disappear
- [[learning-analytics]]: the trace infrastructure behind the argument
- [[privacy]]: contextual integrity and intellectual privacy
- [[summative-assessment]]: grading and credentialing, where the risk peaks

## Connected Articles

- [[thapa-lewis-process-oriented-assessment-2026]]: makes the positive case for process evidence that this commentary qualifies
- [[roe-assessment-twins-2026]]: validity-first redesign of tasks under generative AI
- [[crediting-assisted-work-inflates-mastery-2026]]: evidence that what a tutoring log credits can misstate mastery
- [[black-box-assessment-winstone-2026]]: structural rather than discursive responses to the assessment problem
- [[jin-genai-learning-analytics-feedback-literacy]]: student perceptions of generative AI learning analytics in feedback

## Citation

Nakamura, D. (2026). Learning on the record: the observability–authenticity paradox in AI-era STEM assessment. *International Journal of STEM Education, 13*, 68. https://doi.org/10.1186/s40594-026-00659-2
