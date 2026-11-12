---
title: "Enhancing School Students’ Self-Regulated Learning through Generative AI Support: A Randomized Controlled Trial"
created: "2026-11-11T07:37:46-05:00"
updated: "2026-11-11T08:09:47-05:00"
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
verified: [citation, numbers, links]
---

> **Synthesis:** Can a [[conversational-ai|chatbot]] teach secondary students to regulate their own learning? Fütterer and colleagues randomized 371 students in Grades 7–9 across physics and English lessons in Baden-Württemberg to four 45-minute learning sessions with one of three GPT-4o systems: utility-value reflection prompts, cognitive-strategy (learning-by-explaining) prompts, or standard ChatGPT with no [[pedagogy|pedagogical]] [[prompt-engineering|prompting]]. Only the utility-value condition held its ground: perceived utility value fell in the strategy condition (ΔM = 0.30, p < .001) but not in the utility-value or control groups, and no condition beat control on interest, effort, strategy use or knowledge. Students who used the bot substantively kept more interest. Brief prompting, the authors conclude, can protect [[motivation|motivation]] but not build [[self-regulated-learning|self-regulated learning]] — and [[generative-ai|generative AI]] without pedagogical design may do neither.

## Key Findings

1. **Utility value held only under utility-value prompts.** The time × condition interaction was significant, χ²(2) = 19.05, p < .001. Against the strategy condition the coefficient was β = −0.50, SE = 0.11, p < .001; against control there was no difference. Within groups, utility value fell in the strategy condition (ΔM = 0.30, p < .001) and stayed flat in the utility-value (ΔM = −0.08, p = .328) and control (ΔM = −0.15, p = .063) conditions. The authors read this as buffering a decline, not building value.
2. **The strategy hypothesis failed on self-report.** [[self-report-measures|Self-reported]] elaboration-based strategy use showed no time × condition interaction, χ²(2) = 0.08, p = .960, and no fixed effect reached significance (all ps > 0.53).
3. **It failed on performance too.** On the written explain-to-a-classmate task, χ²(2) = 0.01, p = .992; all main and interaction effects were non-significant (all ps > 0.09). Every condition declined descriptively by ΔM ≈ 0.32–0.35, with no pairwise difference between conditions (all ps > 0.96).
4. **No intervention beat standard ChatGPT on interest, effort or knowledge.** Maintained interest χ²(1) = 0.54, p = .463; effort investment χ²(1) = 0.24, p = .623; domain-specific knowledge χ²(1) = 1.28, p = .257.
5. **Meaningful use, not assignment, predicted who kept interest.** The condition × time × relative meaningful interactions term was β = 0.30, SE = 0.00, p = .009. In the control group more meaningful interaction predicted lower posttest interest (β = −0.25, SE = 0.00, p = .005); the intervention conditions attenuated that (β = 0.26, SE = 0.00, p = .014).
6. **No subject differences.** Condition × time × subject interactions were non-significant for interest (χ²(1) = 0.32, p = .570), effort (χ²(1) = 0.00, p = .992) and knowledge (χ²(1) = 0.56, p = .455).
7. **A third of the sample dropped out before the posttest.** 130 students (35%) had no data at T2: 37 (34%) in the utility-value condition, 51 (36%) in the cognitive-learning condition and 42 (34%) in the control group, and 21% of all numerical entries were missing.

## What the study did

The sample was 371 students in Grades 7–9 at Gymnasium and Realschule schools in Baden-Württemberg (age M = 13.92, SD = 1.27; 45% reported a migration background), recruited by convenience through their teachers and taught in regular physics and English lessons in April and May 2025. Randomization was simple, at the individual level, inside the IWM [[edtech-platform|learning platform]] with no blocking, which produced groups of 109, 140 and 122. The study ran six 45-minute sessions: a pretest, four learning sessions, and a posttest.

All three conditions used GPT-4o through an identical interface with the same visual and naming conventions; only the system prompt differed, and students needed no prompting skill because the prompts were embedded. The utility-value system asked students to connect content to hobbies, aspirations and daily life. The cognitive-strategy system pushed explaining, self-correction and [[metacognition|metacognitive]] questions through [[socratic-method|Socratic questioning]]. The control chatted lightly about the task and offered no pedagogical strategy. All systems were instructed not to give correct answers even when asked, with solutions shown on a following page; tasks covered energy in physics and job interviews and grammar in English, three or four per session, written by three teachers with two subject specialists.

Outcomes were perceived utility value (3 items), self-reported elaboration (3 items), a written learning-by-explaining task rated by teachers blinded to condition, maintained interest (4 items), effort investment (5 items), and three domain-specific knowledge items per subject, z-standardized within subject. The trial was preregistered, analyzed with linear mixed-effects models and Benjamini–Hochberg correction, and checked with multiple imputation, a no-dropout sample, covariates, and a complier average causal effect estimate.

## Why the prompts did not move strategy use

The authors give three explanations, the first of which they treat as a measurement problem in their own design. The self-report scale measured general, dispositional elaboration rather than task-specific strategy use during the intervention, so it was unlikely to register a change across four sessions; they report the null anyway because the hypothesis was preregistered. Second, the prompts may have lacked the depth or [[personalized-learning|personalization]] that strategy training needs — prompting a strategy is often insufficient without guidance on implementing and monitoring it, and a production deficiency can leave students knowing the strategy but not deploying it. Third, engagement: observation and [[teacher-role|teacher]] reports indicated some students used the bot mainly to hunt for answers, were annoyed when it withheld them, and entered minimal text. All conditions declined on the explaining task, which the authors read as consistent with fatigue.

The control condition matters for interpretation. Free-form ChatGPT was itself a plausible source of engagement, so the trial estimates the added value of structured prompting over ordinary chatbot access, not over business as usual; the authors note that a waitlist group would have isolated that. They also point out that four 45-minute sessions is short by the standards of SRL training, and that several studies find brief AI interventions failing where longer ones succeed.

## What this means for practice

- **Instructors:** Use utility-value prompting when the goal is to stop value draining out of an abstract unit. It held utility value where the strategy prompt did not, but it did not raise value above standard ChatGPT.
- **Designers:** Do not ship a strategy chatbot and expect strategy use. The explaining prompts produced no measurable change in reported or applied elaboration; the authors argue for longer cycles with implementation guidance and monitoring.
- **Instructors:** Set expectations before the first session. Students who expected answer-giving disengaged when the bot withheld solutions, and only about half used it meaningfully at least once per task.
- **Administrators:** Do not treat four 45-minute sessions as an SRL [[curriculum-design|curriculum]]. The authors write that promoting SRL in that window "may be overly optimistic" and call for longitudinal integration across schooling.
- **Researchers:** Analyze the dialogue logs. The study collected them, but its interaction measures capture engagement and compliance rather than planning, monitoring or [[explainable-ai|explanation quality]].

## Limitations

The sample is a convenience sample from one German state, groups were unequal without blocking, and 35% of students were lost between T1 and T2 — handled with intention-to-treat analysis plus imputation, no-dropout and complier-average checks, not avoided. Several exploratory three-way analyses raise false-positive risk despite correction. Teacher presence varied implementation, all outcomes were measured immediately with no delayed follow-up, and some scales had low reliability (openness α = 0.39, [[ai-literacy|AI literacy]] KR-20 = 0.23). The explain-to-a-classmate task was single-coded by the teachers who designed it, with no interrater agreement calculated, and the condition contrasts are reported as beta coefficients and χ² tests rather than standardized effect sizes.

## Citation

Fütterer, T., Bardach, L., Kuhn, J., Keller, S. D., & Gerjets, P. (2026). [Enhancing School Students’ Self-Regulated Learning through Generative AI Support: A Randomized Controlled Trial](https://doi.org/10.1007/s10648-026-10133-8). *Educational Psychology Review*. DOI: 10.1007/s10648-026-10133-8.
