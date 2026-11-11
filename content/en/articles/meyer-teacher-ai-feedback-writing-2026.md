---
title: "Comparing Teacher and AI-Generated Feedback in the Writing Classroom: Experimental Results from Secondary School Classrooms"
created: "2026-11-11T11:30:00-05:00"
updated: "2026-11-11T11:30:00-05:00"
type: article
evidence_context: educational
published: "2026"
page_kind: [evaluation]
research_method: [experiment]
discipline: [writing education, language learning]
level: [secondary]
audience: [researchers, instructors]
foundations: [human-ai-collaboration, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai, llm]
assessment: [feedback, automated-assessment, feedback-literacy]
methods: [quantitative-research]
confidence: medium
sources: ['raw/papers/meyer-teacher-ai-feedback-writing-2026.md']
source_url: "https://doi.org/10.1145/3774398.3811602"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
source_depth: abstract only
verified: [citation, numbers, links]
---

> **Synthesis:** Meyer and colleagues compared teacher-written [[feedback|feedback]] with [[llm|LLM]]-generated feedback in an authentic English-as-a-foreign-language writing unit with 391 secondary students, adding a delayed-AI condition so that feedback source and feedback timing could be separated. Bayesian analyses found small performance differences favoring teacher feedback that were neither statistically nor practically significant, while immediate AI feedback drew more positive ratings of usefulness and motivation. The authors read the pattern as a trade-off rather than a defeat: the case for [[automated-assessment|automated feedback]] rests less on outperforming teachers than on redistributing instructional effort, with models sustaining revision cycles so that teachers can spend their limited feedback time on planning, [[scaffolding|targeted scaffolding]] and pedagogical interaction.

## Key Findings

1. **Three feedback conditions in real classrooms.** *N* = 391 secondary students in an authentic English-as-a-foreign-language context, with teacher-written feedback compared against both delayed and immediate LLM-generated feedback.
2. **Teacher feedback produced no significant performance advantage.** The differences associated with teacher feedback in students' essay revisions and subsequent writing performance were small and, under Bayesian analysis, neither statistically nor practically significant.
3. **Immediate AI feedback was rated more useful.** Students rated the immediate LLM condition as more useful, a difference the authors report as favoring immediate feedback.
4. **Immediate AI feedback was rated as more motivating.** The same pattern appeared on [[motivation|motivation]], where immediate feedback drew the more positive ratings the authors report.
5. **Timing carried at least part of the perception advantage.** Because the design contrasted immediate with delayed LLM feedback while holding the source constant, the more positive ratings cannot be attributed to machine authorship alone; immediacy itself is doing work.
6. **Revision, performance and perception were measured as separate outcomes.** The study traced effects on students' essay revisions, their subsequent writing performance, and their perceptions of the feedback rather than collapsing them into a single satisfaction measure.
7. **The authors argue for hybrid feedback rather than replacement.** Their conclusion is that AI feedback is most valuable when it consistently supports revision and short-term learning, freeing teachers for higher-order planning, targeted scaffolding and pedagogical interaction.

## What the study did

The problem the study addresses is a capacity problem before it is a quality problem. Writing proficiency is an essential skill for secondary students and high-quality feedback supports it, but individualized feedback on student writing is time-intensive, which limits how much of it is available in ordinary classroom practice. LLMs have raised interest in automated feedback as a way to scale and supplement what teachers already do, yet evidence of its effectiveness relative to teacher feedback in authentic classroom settings remains limited. That gap is what the experiment was built to fill.

The setting was an authentic English-as-a-foreign-language context in secondary schools, with 391 students. The study compared three feedback conditions: feedback written by their teacher, LLM-generated feedback delivered immediately, or LLM-generated feedback delivered after a delay. The delayed condition is the design's most important structural choice. Comparing AI feedback only against teacher feedback would confound who produced the feedback with when it arrived; adding a delayed AI arm creates a contrast in which the source is held constant and only the timing varies.

Three outcome families were measured. The first was students' essay revisions, meaning what they actually changed in response to the feedback. The second was subsequent writing performance, which tests whether any revision behavior carried over into later writing rather than producing a one-off repair of a single text. The third was students' perceptions of the feedback, covering usefulness and motivation. The analysis used Bayesian methods, which the authors describe as a way to characterize the magnitude and uncertainty of differences between conditions rather than only asking whether a difference crosses a significance threshold.

## Reading a null against a perception advantage

The performance result needs to be read precisely. The authors do not report that AI feedback beat teacher feedback on writing. They report that the small performance differences associated with teacher feedback were neither statistically nor practically significant. Two claims are packed into that sentence: the data are consistent with no difference, and the difference that was observed is too small to matter for practice. The second claim depends on a judgment about what counts as a meaningful effect in writing improvement, and the abstract does not state the threshold the authors used. A reader should treat "practically significant" as the authors' judgment rather than as a property the data establish on their own.

The perception result points the other way. Immediate feedback was rated more useful and more motivating than the alternatives. That matters because feedback only works if students engage with it, and [[student-engagement|engagement]] is a well-known bottleneck in writing instruction. A condition that students rate as more useful and more motivating has an uptake advantage that a pure text-quality comparison would miss.

Put together, the two results describe a trade-off rather than a winner. Teacher feedback may be marginally better on the text, by an amount the study cannot distinguish from noise; immediate AI feedback is clearly better received. Neither result supports replacing teachers with a model, and neither supports treating teacher feedback as obsolete.

## Where the value sits

The paper's interpretive move is to shift the question from "which feedback is better" to "what does each source free up." If a model can deliver a usable first round of feedback on every draft, immediately and at scale, then the revision cycle no longer depends on how quickly a teacher can work through a stack of essays. The teacher's scarce attention can move to the parts of writing instruction that a model handles poorly: planning a sequence of writing tasks, diagnosing why a particular student keeps making the same move, and talking through revision decisions with a class.

That is a claim about the division of instructional labor, and it is worth being explicit that the study measures the student side of it, not the teacher side. The experiment shows that immediate AI feedback was received at least as well as teacher feedback on performance and better on perceptions. It does not measure how teachers spent the time they saved, whether they trusted the model's comments, or whether the hybrid arrangement produced better writing across a term. The redistribution argument is therefore the authors' proposed reading of a result that is consistent with it, not a tested workload outcome.

## What this means for practice

- **Instructors.** Use immediate AI feedback for the first revision pass, when students are still willing to rewrite, and reserve your own comments for the judgments a model cannot make: what this student is avoiding, which error is worth fixing now, and how the draft connects to the next task.
- **Designers.** Treat latency as a design variable rather than an infrastructure detail, because the perception advantage in this study attached to immediate feedback specifically, and a system that batches comments overnight reproduces the delay the design was built to test.
- **Administrators.** Judge writing-feedback pilots on revision behavior and student perceptions alongside text quality, since a tool that ties on quality but lifts engagement is a different purchase decision from one that does neither.
- **Researchers.** Pre-specify the smallest effect of interest and report the posterior distribution, because "neither statistically nor practically significant" is only interpretable against a stated threshold, and the abstract record of this study does not state one.

## Limitations

The study sits in one instructional context: secondary English as a foreign language, 391 students. Performance was measured on essay revisions and subsequent writing performance, so durability beyond the study's writing tasks and transfer to other genres are not tested in the record available here. That record also reports no effect sizes, credible intervals, or Bayes factors, so the magnitude of the small teacher-feedback advantage cannot be checked independently, and the practical-significance judgment rests on a threshold the authors do not state. Teacher feedback varies in quality by teacher, and the abstract does not describe how it was standardized or how much time teachers had. Perceptions are self-report and need not predict uptake. Finally, the design cannot rule out novelty as a contributor to the more positive ratings, and it does not test whether the perception advantage persists once the format is familiar.

## Citation

Meyer, J., Steinbach, M., Schiller, R., Mertens, U., Schaller, N.-J., Horbach, A., Fleckenstein, J., Köller, O., Kizilcec, R. F., & Jansen, T. (2026). [*Comparing Teacher and AI-Generated Feedback in the Writing Classroom: Experimental Results from Secondary School Classrooms*](https://doi.org/10.1145/3774398.3811602). In *Proceedings of the Thirteenth ACM Conference on Learning @ Scale (L@S '26)*. ACM. DOI: 10.1145/3774398.3811602.
