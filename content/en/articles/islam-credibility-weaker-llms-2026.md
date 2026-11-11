---
title: "Shaping Credibility Judgments in Human–GenAI Partnership via Weaker LLMs: A Transactive Memory Perspective on AI Literacy"
created: "2026-11-11T07:36:20-05:00"
updated: "2026-11-11T07:53:16-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors]
sources: ['raw/papers/islam-credibility-weaker-llms-2026.md']
source_url: "https://arxiv.org/abs/2603.26522"
source_depth: full text
confidence: high
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, llm]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Islam, Akgun and Billah (2026) treat a student's use of [[generative-ai|generative AI]] as a transactive memory partnership in which [[ai-literacy|credibility judgments]] regulate when the student relies on the model and when they check it. In an undergraduate visual analytics course, 42 students were randomly assigned to three workflows for repeated in-class activities using the same locally run 7B model: reflect before consulting the AI, consult it and then verify against course materials, or use it without restriction. Adjusted credibility was lowest in reflection-first (5.65), intermediate in verification-required (6.22) and highest in control (6.60) at post-intervention, F(2,38)=5.48, p=.008, ηp²=.224. Specialization and coordination did not differ. The authors read the divergence as an instructional effect: sequencing and accountability cues, not model capability, changed how much students trusted the output.

## Key Findings

1. **Credibility diverged by condition over the semester.** ANCOVA controlling for baseline weighted credibility found a condition effect at mid-course, F(2,38)=4.02, p=.026, ηp²=.175, and a larger effect at post-intervention, F(2,38)=5.48, p=.008, ηp²=.224.
2. **Reflection-first produced the lowest credibility.** Adjusted post-intervention means were 5.65 for reflection-first, 6.22 for verification-required and 6.60 for control. Holm-adjusted pairwise comparisons separated reflection-first from control (p=.006); the remaining contrasts did not reach statistical significance.
3. **The ordering was already visible at mid-course.** Reflection-first and verification-required shifted downward from baseline while control shifted upward, and baseline weighted credibility was comparable across conditions, F(2,39)=1.23, p=.30.
4. **Specialization and coordination did not move.** The ANCOVA on the SP-COR composite found no evidence of condition differences, even though open-ended responses described varied divisions of labor in all three conditions.
5. **Assumption checks held.** The homogeneity of regression slopes assumption was met, F(2,36)=0.06, p=.94, and Levene's test indicated comparable Time 3 variances, F(2,39)=1.91, p=.16.
6. **Students described a change in stance, not a change in liking.** Across conditions, written responses described moving from accepting fluent answers to treating output as a claim to be checked, with lower credibility expressed as more active judgment rather than as dislike of the tool.
7. **The local model's limits were reported as useful.** Students said the constrained model forced specification and verification, and several contrasted it with commercial assistants that answer fluently and confidently.

## Why a weaker model

Instead of a cloud assistant, students used Qwen 2.5 Coder, a 7B-parameter model run locally through Ollama. The authors note that 7B weights occupy roughly 14 GB in FP16, about 7 GB at 8-bit quantization and 3–4 GB at 4-bit, so the model fits on many student laptops. Context length matters as much as parameter count, because each additional token increases the key-value cache and lengthens response time, so students worked under tighter context and turn budgets than a commercial system would impose.

The pedagogical claim is that these constraints generate useful friction. A weaker model produces more variable accuracy, shorter-range coherence and more frequent hallucination on long prompts, which makes fallibility visible often enough that verification becomes a routine step rather than an abstract instruction. Stronger models, by contrast, produce fluent responses that can inflate perceived certainty and compress the interaction into a smooth pipeline that hides uncertainty. The authors are explicit that the friction has a ceiling: when latency and context limits dominate the activity, students report frustration, and instruction has to keep the constraint inside a productive range by scoping AI use, supplying prompt templates, limiting turns and requiring reconciliation with course materials.

The theoretical frame is transactive memory, which describes how partners distribute cognitive work through beliefs about where knowledge resides, how reliable it is and how contributions are coordinated. The authors use three dimensions — specialization, credibility and coordination — and treat credibility as the process that regulates reliance and verification during task execution. Their outcome measure is a factor-weighted credibility score (CR-S) built from an adapted transactive memory questionnaire, with a specialization-coordination composite (SP-COR) as a secondary outcome.

## Three workflows, one task set

All students completed identical data visualization tasks; only the instructions governing AI use differed. In reflection-first, students reasoned through the task and articulated an initial approach before consulting the model, so the AI served as a secondary resource for checking or extending their own reasoning. In verification-required, students could consult the model at any point but had to evaluate its output against lecture notes, provided examples and task-specific datasets, identify useful and problematic aspects, and justify whether and how they incorporated the suggestions. Control students had unrestricted access with no required reflection or evaluation.

The course was a visual analytics course at a large public R1 university, and 42 undergraduates completed all three survey waves, with approximately 12–18 students per condition. Surveys ran at pre-intervention, mid-course and post-intervention, with repeated in-class activities in between. Analyses used ANCOVA with Type III sums of squares, condition as a between-subjects factor and baseline scores as covariates, reported with partial eta squared.

The qualitative side came from open-ended post-intervention items asking how students' approach to questioning AI had changed, how they saw human and AI roles, and how course structure shaped their use. Thematic analysis produced codes organized under the credibility and specialization-coordination dimensions, with representative quotes drawn from all three conditions.

## What the written responses add

The quantitative ordering is small in absolute terms — less than a point between the lowest and highest adjusted mean — and the qualitative material is what gives it meaning. Students in every condition described learning from direct encounters with model error. A control student wrote that they initially accepted responses "without much thought because they looked clear and confident" and later began treating AI as "something to question and verify rather than simply trust." A verification-required student generalized from the local model: "if small models can hallucinate to an extent that it changes the final output, I can't imagine how much bigger models hallucinate."

Condition-specific pathways matched the ranking. Reflection-first students described the workflow as anchoring the activity in their own reasoning, with AI positioned as a secondary check — one wrote that the requirement made them treat AI as "a tool to double-check ideas rather than something to trust automatically," and another described needing to complete a draft before the AI could offer suggestions. Verification-required students described claim-by-claim inspection against course materials. Control students were heterogeneous: some developed skeptical routines through experience, others retained higher trust when inputs were well scoped, and one named over-reliance directly, saying the local model "hindered my learning a bit because I tended to rely overly on the LLM instead of using my own knowledge."

Role descriptions clustered into three configurations that appeared across all conditions: human as decision-maker with AI as executor, human as evaluator with AI as generator, and a more symmetric collaborative partnership. Their spread across conditions is consistent with the null result on specialization and coordination, and the authors read that null as evidence that instructional design can shift credibility without redistributing roles.

## What this means for practice

- **Instructors.** Sequence matters more than exhortation. Requiring an initial answer before the model is consulted produced the largest downward shift in credibility, larger than requiring verification after consultation.
- **Instructors.** Put the accountability cue in the assignment text. Both active conditions constrained how AI entered the task, and both differed from unrestricted use.
- **Designers.** Treat model capability as a design variable rather than a quality setting. A weaker local model makes fallibility encounterable; a fluent one can remove the occasions that prompt checking.
- **Instructors.** Watch the friction ceiling. The authors warn that latency and context limits can dominate an activity and produce frustration, and recommend prompt templates, turn limits and scoped tasks to keep the constraint productive.
- **Researchers.** Pair perception measures with behavioral ones. This study measured reported credibility; prompt logs, revision histories and artifact comparisons would show whether verification actually changed.

## Limitations

The sample is 42 students in one course at one institution, roughly 12–18 per condition, which limits power for the smaller specialization and coordination effects. All outcomes are self-reported perceptions from a factor-weighted transactive memory questionnaire; the study collected no prompt logs, revision histories or artifact comparisons, so it cannot show that students verified more, only that they reported different credibility judgments. No course learning outcome was measured, so a downward shift in credibility cannot be read as better learning. The intervention used one model, Qwen 2.5 Coder via Ollama, in one visual analytics course, and the authors note that other tasks, domains and model profiles may produce different dynamics.

## Citation

Islam, M. T., Akgun, M., & Billah, S. (2026). [*Shaping Credibility Judgments in Human–GenAI Partnership via Weaker LLMs: A Transactive Memory Perspective on AI Literacy*](https://arxiv.org/abs/2603.26522). arXiv:2603.26522 [cs.HC]. Preprint.
