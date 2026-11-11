---
title: "Socratic AI in K–12 Science Classrooms: Effects on Critical Thinking, Motivation, and Self-Regulation in a Randomized Controlled Trial"
created: "2026-11-11T11:30:00-05:00"
updated: "2026-11-11T11:30:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors]
sources: ['raw/papers/kao-socratic-ai-k12-science-2025.md']
source_url: "https://doi.org/10.21203/rs.3.rs-8118546/v1"
source_depth: full text
confidence: high
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, conversational-ai, llm]
assessment: [feedback]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Can a Socratic chatbot improve scientific reasoning inside an ordinary high-school classroom? Kao, Grant and Woltering randomized 90 tenth-grade students in northern Taiwan to AI-supported Argument-Driven Inquiry using ChatGPT's Study Mode, plain Argument-Driven Inquiry (ADI), or no intervention. Controlling for pretest scores, the AI group gained more in scientific argumentation (η²p = .20) and critical thinking (η²p = .32) than both comparison groups, and reported higher self-efficacy and cognitive engagement. Metacognitive self-regulation did not move (p = .12). The authors describe this as the first experimental evidence that a widely available commercial Socratic tutor can raise adolescents' reasoning and engagement in real [[science-education]] — with the caveat that the [[generative-ai|generative AI]] may have done the [[metacognition|metacognitive]] work the students did not.

## Key Findings

1. **Socratic AI beat both comparisons on scientific argumentation.** Adjusted posttest scores differed by condition, F(2, 86) = 10.63, p < .001, η²p = .20; the AI group outperformed the control group (p < .001) and the ADI group (p = .038). ADI alone did not separate from control (p = .066).
2. **Critical thinking showed the largest gap.** F(2, 86) = 20.20, p < .001, η²p = .32, with the AI group above both control and ADI (both p < .001) and ADI above control (p = .037). Unadjusted means moved from 20.4 (4.0) to 25.4 (3.2) in the AI group, from 19.9 (5.4) to 22.2 (2.9) under ADI, and from 20.2 (4.7) to 20.5 (3.2) in the control group.
3. **Self-efficacy rose only with the AI tutor.** F(2, 86) = 6.43, p = .002, η²p = .13; AI versus control p = .007, AI versus ADI p = .009, ADI versus control p = .98. The AI group's mean went from 30.6 (8.2) to 35.7 (8.9) on the eight-item MSLQ subscale.
4. **Cognitive engagement separated all three conditions.** F(2, 86) = 19.90, p < .001, η²p = .32; AI above control and ADI (both p < .001), ADI above control (p = .008). Means: 11.6 (1.4) to 17.4 (3.3) for AI, 12.0 (2.4) to 14.6 (3.4) for ADI, 11.9 (2.6) to 12.5 (2.2) for control.
5. **Metacognitive self-regulation was the null.** F(2, 86) = 2.18, p = .12, η²p = .05. The AI group moved from 49.7 (7.4) to 51.1 (7.0) while the control group fell from 51.6 (8.8) to 49.2 (6.8), but the ANCOVA found no condition effect.
6. **Randomization held.** All 90 assigned students completed the study; pretest ANOVAs found no group differences on argumentation F(2, 87) = 0.46, p = .63, critical thinking F(2, 87) = 0.10, p = .91, or self-efficacy F(2, 87) = 0.25, p = .78, and groups were balanced on gender χ²(2) = 2.52, p = .28 and self-reported AI use F(2, 87) = 2.29, p = .11.
7. **The advantage over ADI was incremental, not absolute.** ADI with peer review improved critical thinking over no intervention (p = .037) but not argumentation (p = .066), so the argumentation advantage came largely from adding the AI rather than from inquiry instruction as such.

## What the study did

Ninety tenth-graders aged 16–17 at a large high school in northern Taiwan, all with 32–36 hours of prior ADI instruction and a TOEFL Junior score of at least 745, were randomized by the on-site researcher in Microsoft Excel with no stratification or blocking: AI-powered ADI (n = 30, 10 female), traditional ADI (n = 30, 14 female) and control (n = 30, 16 female). Everyone completed a 30-minute module on AI literacy and Toulmin-style argument structure before the intervention. Data collection ran over two consecutive days in August 2025 in computer laboratories, with 200 minutes of instructional time (four class periods) on day two.

Both ADI conditions addressed the same socio-scientific issue and wrote a claim-evidence-reasoning argument. The traditional group then did a double-blind peer review in randomly pre-assigned pairs and revised; the teacher facilitated procedure only and gave no content feedback. The AI group worked individually with ChatGPT's Study Mode (GPT-5, August 2025), configured to question rather than answer: it prompted clarification, justification and reflection at each phase of argument construction, and all chat logs were retained. The control group resumed ordinary coursework and returned only for posttests.

Outcomes were the 36-item Test for Scientific Argumentation (α = .82, r = .59 with the Cornell Critical Thinking Test), the MSLQ self-efficacy (8 items, α = .93) and metacognitive self-regulation (12 items, α = .79) subscales on a 7-point scale, and a 4-item situational cognitive engagement scale. Analysis was one-way ANCOVA with pretest as covariate in R 4.5.1, with partial eta squared as the effect size. The paper is a preprint posted to Research Square on 15 December 2025.

## Why questioning helps — and what it may replace

The authors' account is that Socratic questioning reproduces the moves of expert human guidance: asking a student to unpack "disproportionately affects," to supply a real case, to separate causal from correlational reasoning. Their published example shows the tutor declining to supply content and instead pressing for specificity. Because the dialogue is private, it may also lower the social cost of being wrong, which the authors connect to the self-efficacy and engagement gains in an adolescent sample sensitive to peer evaluation.

The null on [[self-regulated-learning|self-regulated learning]] gets the more interesting reading. If the AI continuously supplies the planning and monitoring prompts a student would otherwise have to generate, the student can finish the task without practicing self-regulation: the [[scaffolding]] carries the metacognitive load, and no transfer to independent strategy use occurs. The authors say explicit metacognitive prompts and gradual withdrawal of support would be needed, which a 200-minute design did not include.

## What this means for practice

- **Instructors:** Treat a Socratic tutor as an addition to argument-based inquiry, not a replacement. ADI alone did not reliably beat no intervention on argumentation here; the AI condition did.
- **Designers:** Keep the question-only constraint. The tutor was configured never to give answers, and the authors attribute the reasoning gains to that [[conversational-ai|dialogue design]] rather than to chatbot access as such.
- **Instructors:** Do not assume reasoning gains become study skills. Pair the dialogue with explicit planning and monitoring prompts, and plan to withdraw the AI's cues, since metacognitive self-regulation did not improve.
- **Administrators:** Budget for the prerequisite. Every student completed a 30-minute AI literacy and argumentation module first, and the sample was selected for English proficiency, which is part of why the result may not transfer cheaply.
- **Researchers:** Report the writing task. The study collected essay-based argument data during intervention and posttest but does not report those results, and no delayed post-test was run.

## Limitations

The trial sits in one well-resourced high school with established digital infrastructure and motivated, English-proficient students, so generalization to under-resourced settings is untested; exposure lasted 200 minutes and measured immediate change rather than durable learning or [[transfer-of-learning|transfer]]. Self-efficacy and engagement are self-report. The AI had no student model and relied on heuristic prompting, limiting adaptivity. The design also confounds medium with social arrangement: the AI group worked individually while the ADI group worked in pairs with peer review, so the contrast cannot separate the effect of the tutor from the effect of working alone. No confidence intervals are reported, and the essay-based argument measure is collected but not analyzed.

## Citation

Kao, S., Grant, P., & Woltering, S. (2025). [Socratic AI in K–12 Science Classrooms: Effects on Critical Thinking, Motivation, and Self-Regulation in a Randomized Controlled Trial](https://doi.org/10.21203/rs.3.rs-8118546/v1). Research Square (preprint). DOI: 10.21203/rs.3.rs-8118546/v1.
