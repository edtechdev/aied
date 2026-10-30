---
title: "Student-LLM Interactions During Math Learning: Limited Epistemic Proactivity"
created: "2026-10-30T09:20:00-04:00"
updated: "2026-10-30T09:20:00-04:00"
type: article
published: "2026-10-28"
sources: ['raw/papers/abdelghani-student-llm-epistemic-proactivity-math-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [process-outcome modeling]
discipline: [math education]
level: [secondary]
audience: [researchers, instructors, instructional designers]
pedagogy: [self-regulated-learning, help-seeking, metacognition]
technology: [llm, generative-ai, conversational-ai]
assessment: [assessment-validity]
methods: []
institutions: []
ethics: []
foundations: [critical-thinking]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-30"
    agent: hermes-agent
source_depth: full text
verified: [citation, quotes, links]
---

> **Synthesis:** Abdelghani, Kaiser and Murayama (2026) treat epistemic proactivity — whether learners keep responsibility for the thinking that produces learning — as something that develops inside a conversation rather than a disposition students carry in. They coded 880 substantive turns from 112 German secondary students working open-ended mathematical modeling problems with Mistral, sorting behavior into [[self-regulated-learning]] moves, [[help-seeking]] content, and signs of epistemic vigilance. The aggregate picture is thin: 81.5% of student turns were requests, explicit evaluation of AI output was rare, and the help-seeking mix drifted from understanding toward answers as sessions went on. The paper's real contribution is temporal. The steepness of that drift, not any static measure of proactivity, predicted performance on a post-test taken without AI, which reframes [[metacognition]] under [[generative-ai|generative AI]] as a trajectory to be watched rather than a level to be scored.

## Key Findings
1. **Interaction was request-dominated.** Of 880 substantive student turns, 717 (81.5%) were requests, against 9.9% planning, 6.4% monitoring and 2.2% evaluation, so most of the self-regulation cycle was absent from the record.
2. **Understanding-oriented help was barely half of asking.** Among the 717 requests, 28% were procedural, 26% conceptual, 24% answer-seeking and 22% verification-seeking, leaving 54% understanding-oriented against 46% answer-seeking or validation.
3. **Poor answers did draw evaluation, but rarely.** Explicit evaluation rose from 3.1% after adequate AI responses to 22.6% after low-quality ones, χ2(3) = 31.56, p = .0006, but low-quality responses were too scarce for this to become a stable habit.
4. **The trajectory ran in two directions at once.** Explicit self-regulated moves increased modestly across the session (M = +0.103) while understanding-oriented help-seeking declined (M = −0.20), so students regulated more while asking for less understanding.
5. **The slope predicted unassisted performance.** The help-seeking trajectory added ΔR2 = .110 to a model already holding pre-test score, β = .34, 95% CI [.15, .53], p < .001, whereas static interaction features added only ΔR2 = .023 (p = .684).
6. **The self-regulated trajectory did not.** The companion path for explicit self-regulated moves was not associated with post-test performance, β = .09, 95% CI [−.10, .28], p = .347, which separates doing regulation visibly from asking in a way that builds understanding.

## What was made countable

The construct is defined operationally and narrowly. Each student turn is classified by function (plan, monitor, request, evaluate) and, within requests, by what the student is asking for: conceptual explanation, procedural guidance, verification of an answer, or the answer itself. Epistemic vigilance is handled separately, as the outward sign that a student has judged an AI response insufficient, and the authors treat it as exploratory because the coding had so few occasions to observe it.

That choice is what makes the paper's headline possible. A trait measure would have produced a single score per student and found little. A turn-level coding scheme produces a curve, and a curve can be compared against a later test. The cost is that the constructs are domain-general: the authors report that they tried to trace movement through mathematical modeling steps and abandoned it because the framework could not be applied reliably to open-ended dialogue.

## A session that looks compliant rather than agentic

Read as a snapshot, the session is what a critic of [[conversational-ai]] would predict. Students mostly asked, the assistant mostly answered, and the parts of [[self-regulated-learning]] that require a learner to stop and appraise were almost absent: 2.2% evaluation across the corpus. The authors' own reading is careful here. Requesting help is itself regulatory behavior, so 81.5% requests is not the same as 81.5% passivity, and the even split across request types shows students were not simply harvesting answers.

The more interesting number is the response to bad output. When the assistant produced an answer judged low quality, explicit evaluation rose sevenfold. Students were therefore not blind to failure; they were rarely given the occasion to notice it, because most responses were adequate. Epistemic vigilance as a measured behavior is thus bounded by the error rate of the tool rather than by the vigilance of the learner, which is a design fact about the interaction and not only a fact about the students.

## Drift is the finding

The paper's argument rests on change within the chat. Over normalized session position, self-regulated moves trended upward and understanding-oriented help-seeking trended downward, and the downward trend was followed by another verification or answer-seeking request with high probability (P = .61 for verification-to-verification, 95% CI [.46, .73]). Students settled into a pattern rather than escalating one.

Only that settling predicted the unassisted post-test. The authors interpret it as a shift in what the learner is trying to get from the tool: early questions about the mathematics give way to questions about the answer. Because the design is observational, the direction of causation is open — students who understood less may have drifted because the work outpaced them, rather than drifting and then understanding less. What the paper establishes is that the drift is measurable, visible in the log rather than in a questionnaire, and predictive of the outcome everyone cares about.

## What this means for practice

- **Instructors.** Judge a session by its second half. The static count of questions a student asks says little; whether the mix shifts toward answer-seeking is the signal that a student is losing the thread, and it is visible in the transcript before the next assessment.
- **Instructional designers.** Build in the pause that produces evaluation. Students evaluated AI output when it failed, not on schedule, so a designed checkpoint after each response — a required judgment of adequacy — creates the occasions that normal fluency prevents.
- **Instructors.** Teach the difference between the four request types explicitly, since the corpus shows students defaulting to procedural and answer-seeking requests. A prompt that asks for the reasoning rather than the result is a teachable move, not a personality trait.
- **Researchers.** Measure trajectories, not levels. The static model explained almost nothing here while the change model explained a tenth of the variance beyond prior attainment, which suggests much of the existing literature's null results are a measurement artifact.

## Limitations

- The study is observational and single-session: the authors state that associations between interaction dynamics and post-test performance cannot be read causally, and that within-session change is not the development of a stable skill.
- The post-test immediately followed the interaction, so the outcome is subsequent performance rather than retention; the authors call for longitudinal work.
- The mathematical modeling framework could not be applied reliably to the open-ended dialogues and was excluded, so no claim links proactivity to progress through modeling steps.
- Low-quality AI responses were rare enough that the vigilance analysis is described as exploratory and was not carried into the outcome models.
- The analytic sample is 95 students for the performance models from 112 participants in Baden-Württemberg secondary schools, all aged 14–15 (M = 14.67), working with a single general-purpose model.

## Citation

Abdelghani, R., Kaiser, P., & Murayama, K. (2026). [*Student-LLM Interactions During Math Learning: Limited Epistemic Proactivity Overall, but Within-Chat Change Predicts Performance Without AI*](https://arxiv.org/abs/2610.38950). arXiv:2610.38950.
