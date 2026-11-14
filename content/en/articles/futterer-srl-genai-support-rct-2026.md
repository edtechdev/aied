---
title: "Enhancing School Students’ Self-Regulated Learning through Generative AI Support: A Randomized Controlled Trial"
created: "2026-11-11T07:37:46-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors]
sources: ['raw/papers/futterer-srl-genai-support-rct-2026.md']
source_url: "https://doi.org/10.1007/s10648-026-10133-8"
source_depth: full text
confidence: high
foundations: []
pedagogy: [scaffolding, self-regulated-learning, motivation]
technology: [generative-ai, llm, prompt-engineering]
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

> **Synthesis:** Can a [[conversational-ai|chatbot]] teach secondary students to manage their own learning? Fütterer and colleagues gave 371 students in Grades 7–9 four lessons with one of three GPT-4o systems: prompts that connected content to students' own lives, prompts that pushed learning-by-explaining, or plain ChatGPT with no [[pedagogy|pedagogical]] [[prompt-engineering|prompting]]. Only the first held its ground, and only by preventing a decline — students' sense of the material's usefulness fell in the explaining condition and stayed flat in the other two. No condition beat plain ChatGPT on interest, effort, strategy use or knowledge. Students who used the bot substantively kept more interest. Brief prompting, the authors conclude, can protect [[motivation|motivation]] but not build [[self-regulated-learning|self-regulated learning]] — and [[generative-ai|generative AI]] without pedagogical design may do neither.

## Key Findings

1. **A short prompt can stop value draining away.** Students whose bot tied the content to their own lives did not lose the sense that the material was useful; students in the explaining condition did. Neither structured condition raised value above plain ChatGPT, so the gain was protection, not improvement.
2. **The explaining prompt changed nothing measurable.** Students did not report using more elaboration strategies on the [[self-report-measures|self-report]] scale, and their written explanations to a classmate did not improve.
3. **Performance slipped in every condition.** All three groups declined on the explain-to-a-classmate task with no difference between them, which the authors read as fatigue across the sessions rather than an effect of the bot.
4. **Plain ChatGPT matched both structured bots** on maintained interest, effort and domain knowledge. Access to a capable chatbot, not the added pedagogy, is what students got.
5. **What students did with the bot mattered more than which bot they had.** Students who engaged substantively kept more interest. In the plain ChatGPT group, more meaningful interaction actually went with lower interest afterwards, and the two structured conditions weakened that link.
6. **Physics and English behaved the same.** There were no subject differences on interest, effort or knowledge, so the null results were not an artifact of one subject.
7. **A third of the sample was lost before the posttest.** 130 students, spread fairly evenly across conditions, had no posttest data, and about a fifth of all entries were missing.

## What the study did

The trial ran in regular physics and English lessons at Gymnasium and Realschule schools in Baden-Württemberg in April and May 2025, with 371 students in Grades 7–9 recruited by convenience through their teachers; nearly half reported a migration background. Randomization was individual and unblocked inside the IWM [[edtech-platform|learning platform]], which produced unequal groups of 109, 140 and 122. The sequence was a pretest, four learning sessions and a posttest, each 45 minutes.

All three conditions used GPT-4o through an identical interface with the same visual and naming conventions, so only the system prompt differed. Students needed no prompting skill because the prompts were embedded. The utility-value system asked them to connect content to hobbies, aspirations and daily life. The cognitive-strategy system pushed explaining, self-correction and [[metacognition|metacognitive]] questions through [[socratic-method|Socratic questioning]]. The control chatted lightly about the task and offered no pedagogical strategy. Every system was told not to give correct answers even when asked, with solutions shown on a following page; tasks covered energy in physics and job interviews and grammar in English.

Outcomes were perceived utility value, self-reported elaboration, a written learning-by-explaining task rated by teachers blinded to condition, maintained interest, effort investment and domain-specific knowledge. The trial was preregistered, analyzed with linear mixed-effects models and correction for multiple comparisons, and checked with multiple imputation, a no-dropout sample, covariates and a complier average causal effect estimate.

## Why the prompts did not move strategy use

The authors give three explanations, the first of which they treat as a measurement problem in their own design. The self-report scale measured general, dispositional elaboration rather than task-specific strategy use during the intervention, so it was unlikely to register a change across four sessions; they report the null anyway because the hypothesis was preregistered. Second, the prompts may have lacked the depth or [[personalized-learning|personalization]] that strategy training needs — prompting a strategy is often insufficient without guidance on implementing and monitoring it, and a production deficiency can leave students knowing the strategy but not deploying it. Third, engagement: observation and [[teacher-role|teacher]] reports indicated some students used the bot mainly to hunt for answers, were annoyed when it withheld them, and entered minimal text. All conditions declined on the explaining task, which the authors read as consistent with fatigue.

The control condition matters for interpretation. Free-form ChatGPT was itself a plausible source of engagement, so the trial estimates the added value of structured prompting over ordinary chatbot access, not over business as usual; the authors note that a waitlist group would have isolated that. They also point out that four 45-minute sessions is short by the standards of SRL training, and that several studies find brief AI interventions failing where longer ones succeed.

## What this means for practice

- **Instructors:** Use utility-value prompting when an abstract unit tends to lose its point for students. It held value where the explaining prompt did not — but do not expect it to raise value above what plain ChatGPT already produces.
- **Instructors:** Set expectations before the first session. Students who expected the bot to hand over answers disengaged when it withheld them, and only about half used it meaningfully at least once per task.
- **Designers:** Do not ship a strategy chatbot and assume strategy use follows. The explaining prompts produced no measurable change in reported or applied elaboration; the authors argue for longer cycles with implementation guidance and monitoring.
- **Administrators:** Do not treat four 45-minute sessions as an SRL [[curriculum-design|curriculum]]. The authors write that promoting SRL in that window "may be overly optimistic" and call for integration across the school year.
- **Researchers:** Analyze the dialogue logs. The study collected them, but its interaction measures capture engagement and compliance rather than planning, monitoring or [[explainable-ai|explanation quality]].

## Limitations

The sample is a convenience sample from one German state, groups were unequal without blocking, and 35% of students were lost between T1 and T2 — handled with intention-to-treat analysis plus imputation, no-dropout and complier-average checks, not avoided. Several exploratory three-way analyses raise false-positive risk despite correction. Teacher presence varied implementation, all outcomes were measured immediately with no delayed follow-up, and some scales had low reliability (openness α = 0.39, [[ai-literacy|AI literacy]] KR-20 = 0.23). The explain-to-a-classmate task was single-coded by the teachers who designed it, with no interrater agreement calculated, and the condition contrasts are reported as beta coefficients and χ² tests rather than standardized effect sizes.

## Citation

Fütterer, T., Bardach, L., Kuhn, J., Keller, S. D., & Gerjets, P. (2026). [Enhancing School Students’ Self-Regulated Learning through Generative AI Support: A Randomized Controlled Trial](https://doi.org/10.1007/s10648-026-10133-8). *Educational Psychology Review*. DOI: 10.1007/s10648-026-10133-8.
