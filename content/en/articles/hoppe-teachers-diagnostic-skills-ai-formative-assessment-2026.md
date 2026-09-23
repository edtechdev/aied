---
title: "Rethinking teachers’ diagnostic skills in AI-supported formative assessment: from diagnosis to meta-diagnosis"
created: "2026-09-23T12:30:00-04:00"
updated: "2026-09-23T13:15:00-04:00"
type: article
foundations: [ai-literacy, teacher-ai-competency, human-ai-collaboration, teacher-role]
pedagogy: [metacognition]
technology: [adaptive-learning, human-in-the-loop-ai, learning-analytics, cognitive-diagnosis]
assessment: [formative-assessment, automated-assessment]
ethics: [explainable-ai, trust-calibration]
audience: [instructors, researchers]
level: [k 12]
research_method: [theoretical analysis]
discipline: [learning sciences]
page_kind: [framework]
sources: ['raw/papers/hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]

---

> **Synthesis:** Hoppe, Loibl, and Leuders (2026) reframe what teachers must do once AI-supported tools generate diagnostic claims about students. Their conceptual analysis contrasts two third-grade subtraction lessons: in the first, a teacher interprets a smaller-from-larger error ("44 - 26 = 22") through her own observation and a short diagnostic conversation; in the second, an AI platform highlights the same pattern on a dashboard while the teacher notices the student becoming disengaged. AI-generated inferences, the authors argue, are not simply more assessment information but a qualitatively different kind of evidence, because they are already the result of algorithmic interpretation. Teachers must therefore evaluate and integrate them with their own diagnostic judgments, a process the authors call [[metacognition|meta-diagnosis]]. They specify this shift within the DiaCoM framework and derive five conceptual propositions for research on diagnostic skills and teacher professional development, stressing that teachers remain the central reflective agents and responsible decision-makers in [[human-in-the-loop-ai|human-in-the-loop]] classrooms.

## Key Findings

- This is a conceptual analysis, not an empirical study: no participants or effect sizes are reported, and the argument is the contribution.
- AI-generated diagnostic inferences are qualitatively different from teacher-observed cues because they are already outputs of algorithmic interpretation, not raw data.
- Two contrasting third-grade subtraction cases illustrate the shift from teacher-only diagnosis to meta-diagnosis involving two kinds of evidence.
- Meta-diagnosis is the cognitive process through which teachers critically evaluate and integrate AI-generated inferences with their own judgments and contextual knowledge.
- The DiaCoM framework is specified for AI support by making AI-generated inferences a situation characteristic and accept, reject, or modify decisions diagnostic behavior.
- Five conceptual propositions frame future research, including when teachers override AI inferences and the role of data and AI literacy.

## From diagnosis to meta-diagnosis

The paper builds on a cognitive account of diagnosing: teachers perceive cues about student learning, interpret them, and arrive at [[formative-assessment|formative assessment]] judgments that inform instructional adaptation. The first case follows that account. A student writes "44 - 26 = 22", a response consistent with the documented smaller-from-larger error, treating the tens and ones columns independently (4 - 2 = 2 and 6 - 4 = 2). Because the written answer alone cannot establish the source of the error, the teacher probes with follow-up questions, reads a flicker of frustration, and responds. The second case keeps the mathematics and adds a platform that analyses responses in real time, surfacing a dashboard summary of recurring errors across the class. The teacher now faces an extra layer: whether the AI inference is plausible, what it misses about engagement, and whether to act on its recommendations.

## What AI-generated evidence adds, and what it leaves out

AI-supported tools let teachers attend to many learners at once and detect patterns not visible in the moment, supporting micro-level and macro-level adaptation. The authors do not treat this as pure gain. Current systems mostly rest on performance data such as task correctness and completion time, while motivational states, learning histories, and classroom dynamics stay largely absent. The paper also rehearses familiar risks: training data can carry bias or underrepresent particular groups, systems not validated for education may produce plausible but incorrect output, and automation bias can push teachers to defer to algorithmic recommendations. Explainable AI features that show how an inference was derived may help; where such insight is limited, teachers must lean harder on their own observations, including how students behave while using the AI. Teachers therefore need data literacy and [[ai-literacy|AI literacy]], and calibrated rather than uncritical trust.

## Specifying DiaCoM for AI-supported assessment

To make the shift analysable, the paper adapts the DiaCoM framework, which treats diagnosing as information processing shaped by person characteristics, situation characteristics, and available cues, with observable diagnostic behavior alongside internal diagnostic thinking. For AI-supported [[formative-assessment|formative assessment]], the specification places AI-generated inferences among situation characteristics as a distinct source of information, and describes diagnostic behavior as decisions to accept, reject, or modify AI suggestions. Person characteristics expand to include knowledge of how AI systems function. This is a redistribution of work rather than a transfer of responsibility: AI can supply timely inferences across many students, while teachers contribute professional knowledge about typical [[misconceptions|misconceptions]], contextual knowledge about individuals, longer-term goals, and the current classroom situation.

## Research agenda

The paper closes with five conceptual propositions meant to seed empirical work rather than prescribe practice. They cover when teachers accept, reject, or override AI-generated inferences; how teachers integrate different sources of evidence with contextual knowledge; how data literacy and AI literacy shape the use of those inferences; how diagnostic judgments are translated into [[adaptive-learning|adaptive]] instructional decisions; and how far diagnosing should extend to students' interactions with AI environments when the underlying processes are not transparent. The authors note that evidence for the effectiveness of AI-supported diagnostic systems in classrooms remains limited. For teacher education, the implication is that preparation for diagnosing should now include judging the quality and trustworthiness of algorithmic claims, not only reading student work accurately.

## What this means for practice
- Treat an AI-generated inference as a claim to be examined, not a finding to be applied.
- When a dashboard flags a recurring error pattern, ask what data produced it and what it leaves out, then set it beside your own observations of how students worked and how they responded while using the tool.
- Where the two disagree, probe the student directly, as the teacher does in the paper's first case, rather than defaulting to the algorithm or dismissing it.
- Make the accept, reject, or modify decision deliberately and be able to say why, since teachers remain responsible for the instructional choice.
- Because engagement and motivational cues are largely absent from current systems, watch students' behavior during AI-supported work as its own source of evidence. Finally, treat judging algorithmic claims as a training target: professional development should build [[ai-literacy]] alongside subject-specific diagnostic knowledge, aiming at [[trust-calibration|calibrated trust]] rather than uncritical reliance.

## Limitations
- This is a conceptual analysis, so its claims are argued rather than tested: there are no participants, no comparison conditions, and no measured outcomes.
- The two third-grade subtraction cases are constructed illustrations of the proposed shift, not observed lessons, so they show what meta-diagnosis could look like rather than establishing that it occurs or that it improves instruction.
- The DiaCoM specification and the five propositions are offered as a starting point for research, and the authors state plainly that evidence for the effectiveness of AI-supported diagnostic systems in classrooms remains limited.
- Several risks stay unresolved in the argument: training data can carry bias or underrepresent particular groups, systems not validated for education can produce plausible but incorrect output, and automation bias can push teachers toward uncritical reliance. Transparency is a further constraint, since teachers cannot fully evaluate an inference whose derivation is not visible to them. Current tools also rest mainly on performance data such as correctness and completion time, so the account may need revision as instrumentation changes.

## Connected Concepts

- [[formative-assessment]] - the practice whose diagnostic demands are rethought
- [[ai-literacy]] - recognizing bias, limits, and relevance of AI output
- [[human-in-the-loop-ai]] - teachers as responsible decision-makers
- [[learning-analytics]] - dashboards as AI-generated inference
- [[cognitive-diagnosis]] - diagnosing as cognitive information processing
- [[trust-calibration]] - calibrated trust instead of automation bias

## Connected Articles

- [[llm-formative-feedback-systematic-review-2026]] - LLM-generated formative feedback: A qualitative systematic literature review
- [[trust-fairness-motivation-ai-teaching-assistants-2026]] - How trust prospectively predicts fairness and motivation toward AI teaching assistants
- [[ai-tpack-teacher-multi-agent-workflow]] - Modeling AI-TPACK in Practice: Teachers' Multi-Agent Workflow Design

## Citation

Hoppe, T., Loibl, K., & Leuders, T. (2026). [*Rethinking teachers’ diagnostic skills in AI-supported formative assessment: from diagnosis to meta-diagnosis*](https://doi.org/10.3389/feduc.2026.1857661).