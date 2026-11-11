---
title: "Comparing Teacher and AI-Generated Feedback in the Writing Classroom: Experimental Results from Secondary School Classrooms"
created: "2026-11-11T11:30:00-05:00"
updated: "2026-11-11T08:20:00-05:00"
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
confidence: high
sources: ['raw/papers/meyer-teacher-ai-feedback-writing-2026.md']
source_url: "https://doi.org/10.1145/3774398.3811602"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Meyer and colleagues compared teacher-written [[feedback|feedback]] with [[llm|LLM]]-generated feedback in an authentic English-as-a-foreign-language writing unit with 391 German students in Grades 10 and 11, adding a delayed-AI condition so that feedback source and feedback timing could be separated. No outcome differed significantly by condition: revisions, later writing, time on task, and perceived usefulness, motivation and affect were all statistically indistinguishable. Bayesian analyses put teacher feedback ahead on later writing (probability of direction .80) and affective response (.90), but with enough posterior mass inside the region of practical equivalence to make the gap contestable, while edit distance favored the delayed model. Immediate AI feedback was rated more useful and more motivating than teacher feedback. The case for [[automated-assessment|automated feedback]] therefore rests less on outperforming teachers than on redistributing instructional effort.

## Key Findings

1. **Three feedback conditions in real classrooms.** 391 students in Grades 10 and 11 in Schleswig-Holstein, Germany, were randomized to teacher-written feedback (n = 141), immediate LLM feedback (n = 129) or delayed LLM feedback (n = 121). The model was GPT-4-1106-preview at temperature 0, prompted to give hints and examples on structure, content and language style.
2. **Every frequentist contrast was null.** Revision performance, second-task performance, time on task, and perceived usefulness, motivation and affect showed no significant difference between teacher feedback and either LLM condition; the largest reported estimate, delayed LLM versus teacher on revision performance, was −0.11 (SE 0.16).
3. **Bayesian posteriors leaned toward teacher feedback on transfer and affect, without settling it.** Teacher feedback was favored on second-task performance (probability of direction .80) and affective perceptions (.90), but 40% and 28% of the posterior mass respectively fell inside the region of practical equivalence, so practical relevance remained ambiguous rather than established.
4. **On revision, timing and motivation the difference looked negligible.** More than half the posterior mass sat inside the region of practical equivalence for revision performance, time on task and motivational perceptions, which is the strongest form of "no practical difference" this design can report.
5. **Edit distance went the other way.** Posterior estimates favored delayed LLM feedback on edit distance, with only 19% of mass inside the region of practical equivalence — the one outcome where the model's output produced a difference the authors did not read as negligible.
6. **Immediate AI feedback was rated more useful and more motivating than teacher feedback.** That advantage attached to immediacy, not to authorship: the delayed LLM arm, matched on source, did not draw the same ratings.
7. **Writing itself moved, independent of condition.** Revisions improved relative to the first draft (2.56 to 2.71 on the TOEFL holistic scale from 0 to 5, t(340) = −6.12, p < .001, d = .47) and the second writing task scored lower than the first (2.57 to 2.35, t(317) = 4.29, p < .001, d = .90), so both conditions produced revision gains that did not carry into a new text.

## What the study did

The problem is capacity before it is quality. Individualized feedback on student writing is time-intensive, which limits how much of it exists in ordinary classrooms, and LLMs have raised the prospect of scaling it. What has been missing is evidence from authentic classrooms that compares machine feedback against what teachers actually write, rather than against a no-feedback control.

The design ran in EFL classrooms in Schleswig-Holstein between January 2024 and April 2025. Students wrote an argumentative essay, received feedback in their assigned condition, revised, and later wrote a second essay. Texts were scored on the TOEFL iBT holistic scale (0–5) by an automated scoring algorithm trained on expert-rated essays; the gap between the two measurement points averaged 13 days. Randomization was at the student level within classes, and baseline writing scores were equivalent across conditions, F(2, 382) = 0.12, p = .887.

The delayed-LLM arm is the design's structural key. Comparing AI against teacher feedback alone confounds who wrote the feedback with when it arrived; holding the model constant and varying only the delay isolates timing. The analysis paired frequentist tests with Bayesian estimation, reporting posterior distributions and the proportion of mass inside a region of practical equivalence rather than only a significance test.

## Reading a null against a perception advantage

The paper reports no condition effect on writing. That is the finding, and it is worth stating plainly because the abstract-level version of this study circulates as "AI feedback matches teachers," which is true only in the weak sense that the data cannot separate them.

The Bayesian layer adds texture without overturning that. Teacher feedback was more likely than delayed AI feedback to produce better second-task writing (.80) and better affective response (.90), but between a quarter and two-fifths of the posterior mass sat inside the equivalence region, so a reader cannot treat those as demonstrated advantages. Revision, time on task and motivation were the outcomes where the authors were most confident the difference was negligible. Edit distance was the exception: the delayed model's feedback produced shorter revisions, and the posterior put only 19% of mass in the equivalence region.

The perception result points the other way and attaches to timing. Immediate feedback was rated more useful and more motivating than teacher feedback, while the delayed model arm was not. Feedback only works if students engage with it, so an uptake advantage is a real advantage — but it is an advantage of latency, and a system that batches comments overnight reproduces the condition that did not get it.

## Where the value sits

The paper's interpretive move is to shift the question from "which feedback is better" to "what does each source free up." If a model can return a usable first round on every draft, the revision cycle no longer waits on a teacher working through a stack of essays, and the teacher's scarce attention can go to the parts of writing instruction a model handles poorly: diagnosing why a student keeps making the same move, sequencing tasks, and talking through revision decisions.

That is a claim about the division of instructional labor, and the study measures the student side of it. It does not record how teachers spent saved time, whether they trusted the model's comments, how teacher feedback was standardized, or whether a hybrid arrangement improves writing across a term. The redistribution argument is the authors' reading of a result consistent with it, not a tested workload outcome.

## What this means for practice

- **Instructors.** Use immediate AI feedback for the first revision pass, when students are still willing to rewrite, and keep your own comments for judgments a model cannot make: what this student is avoiding, which error matters now, and how the draft connects to the next task.
- **Designers.** Treat latency as a design variable. The perception advantage belonged to immediate feedback specifically, and a system that batches comments overnight reproduces the delay the design tested without the benefit.
- **Administrators.** Judge writing-feedback pilots on revision behavior and student perceptions alongside text quality. A tool that ties on quality while lifting engagement is a different purchase from one that does neither — and this trial found no quality difference to sell.
- **Researchers.** Report the equivalence region alongside the posterior. "No significant difference" and "practically equivalent" are different claims, and only the second licenses the sentence most pilots want to write.

## Limitations

The study is one German federal state, two grade levels, EFL argumentative essays, and a single model from early 2024; transfer to other genres, languages and model versions is untested. Writing was scored by an automated algorithm trained on expert-rated essays (expert quadratic weighted kappa .67), which compresses genre-specific quality into a single holistic number and inherits whatever the scorer misses. The second writing task was completed shortly after the first, so durability beyond a few weeks is unknown, and the design cannot separate novelty from genuine preference in the perception ratings. Teacher feedback was written by many teachers whose practice, training and available time varied; the paper reports the pooled effect, not the distribution. Time on task is a platform proxy for engagement, not a measure of what students did with the comments.

## Citation

Meyer, J., Steinbach, M., Schiller, R., Mertens, U., Schaller, N.-J., Horbach, A., Fleckenstein, J., Köller, O., Kizilcec, R. F., & Jansen, T. (2026). [*Comparing Teacher and AI-Generated Feedback in the Writing Classroom: Experimental Results from Secondary School Classrooms*](https://doi.org/10.1145/3774398.3811602). In *Proceedings of the Thirteenth ACM Conference on Learning @ Scale (L@S '26)*. ACM. DOI: 10.1145/3774398.3811602.
