---
title: "As Effective as the Teacher, but Less Motivating: AI-Generated and Teacher Feedback in a Randomized Trial"
created: "2026-11-01T08:06:18-05:00"
updated: "2026-11-01T08:06:18-05:00"
type: article
sources: ['raw/papers/liu-ai-generated-teacher-feedback-writing-motivation-rct-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [writing education]
level: [higher ed, undergraduate]
audience: [instructors, researchers, educational technology developers]
technology: [llm, generative-ai]
assessment: [feedback, ai-feedback-quality, feedback-literacy]
pedagogy: [motivation, self-efficacy, student-engagement]
methods: [rct]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A three-arm randomized trial assigned 312 first-year university writers to AI-generated [[feedback]], instructor [[feedback]], or a no-substantive-feedback control, and 287 completed the single revise-and-resubmit cycle. Both feedback sources improved revised-essay quality by the same margin — *d* = 0.60 for AI and *d* = 0.59 for the instructor — and the two were statistically equivalent within a pre-specified ±0.35 SD band. The difference appeared in [[motivation]]: instructor feedback raised intrinsic motivation more than AI feedback, and perceived relatedness to the feedback source accounted for that gap.

## Key Findings

1. Of 340 students screened, 312 were randomized (AI 104, instructor 102, control 106) and 287 entered the analysis (AI 96, instructor 94, control 97); attrition was 8.0% and did not differ by arm, *χ*²(2) = 0.05, *p* = 0.975.
2. Adjusted post-test writing means were 48.28 for control, 54.70 for AI feedback and 54.58 for instructor feedback; AI versus control was *d* = 0.60, 95% CI [0.32, 0.89], and instructor versus control *d* = 0.59, 95% CI [0.30, 0.88].
3. The two feedback arms were equivalent within the pre-specified margin of ±0.35 standard deviations, and the equivalence margin was fixed before data collection rather than set after the results.
4. [[student-engagement|Feedback engagement]] carried the performance effect: the indirect effect was 5.05, 95% CI [3.57, 6.69], while the pathway through [[self-efficacy]] was not significant, 0.23, 95% CI [−0.20, 0.75].
5. Intrinsic motivation means were 4.61 (control), 4.90 (AI) and 5.16 (instructor); instructor beat AI at *d* = 0.31, AI beat control at *d* = 0.35, and instructor beat control at *d* = 0.65.
6. Perceived relatedness mediated that motivational gap, indirect = 0.25, 95% CI [0.12, 0.40], with a negligible direct effect — a [[self-determination-theory|relatedness]] account of why the same quality of commentary does not feel the same.
7. AI literacy did not significantly moderate the feedback effect on performance, *p* = 0.058, so the exploratory pattern in the discussion is a signal rather than a finding.

## How the trial was built, and how carefully the two feedback streams were matched

The [[rct|randomized design]] is the reason this study can say "as effective as" rather than "students preferred". Randomization succeeded: conditions did not differ on pre-test writing (*F*(2, 284) = 0.09, *p* = 0.910), GPA (*F*(2, 284) = 0.40, *p* = 0.670), age (*F*(2, 284) = 0.08, *p* = 0.919) or gender (*χ*²(2) = 1.90, *p* = 0.388). The analytic model was an ANCOVA controlling for pre-test writing, GPA and gender, with HC3 robust standard errors and Holm adjustment leaving both feedback contrasts significant at *p* < 0.001.

The two feedback streams were deliberately equated on more than length. Both used the same analytic rubric covering thesis, argument structure, evidence and clarity; the instructor — a Master's graduate in Applied Linguistics with six years of [[writing-education|academic-writing teaching]] — was calibrated for two hours on five sample essays, was blind to the study hypotheses and to pre-test scores, and spent roughly 15 minutes per essay. Feedback came from Qwen2.5-27B-Instruct deployed locally and reached through its REST API, driven by a standardized rubric prompt, with temperature 0.7 and a 1,024-token cap, all generated in September 2025. Students rated the two streams as similarly useful (*M* = 4.56 on a 7-point scale).

What the design does not control is the *content* of the feedback. The authors did not independently code accuracy, specificity, actionability or tone, so equivalence rests on rubric alignment, comparable length and student ratings rather than on verified parity of what each source actually said.

## Equal quality of revision, unequal relationship with the source

The motivational result is the paper's contribution, because the performance result is the one a vendor would predict. Instructor feedback produced higher intrinsic [[motivation]] than [[ai-feedback-quality|AI feedback]] (*d* = 0.31) even though revised essays were indistinguishable in quality, and the mediation model locates the difference in perceived relatedness: instructor feedback raised relatedness (*a* = 0.53), relatedness predicted intrinsic motivation (*b* = 0.48), and the direct effect of feedback source on motivation was negligible. Relatedness correlated 0.54 with intrinsic motivation in the zero-order matrix, the strongest association in the study.

Both feedback arms still beat the control on motivation, so the finding is not that [[generative-ai|AI feedback]] demotivates. It is that a scalable source recovers the performance benefit without the relational one. The authors read that as an argument for blended arrangements where AI carries volume and the instructor carries relationship, rather than as a case for replacing either.

The mechanism finding on engagement points the same way. Engagement — how far students read, processed and acted on the commentary — transmitted the performance effect, and self-efficacy did not, which suggests the useful design target is the student's uptake of feedback rather than their confidence in writing. That is a [[feedback-literacy|feedback literacy]] claim as much as a technology claim, and it is the piece an instructor can act on without changing tools.

## What the study can and cannot say about AI replacing marking

Two design features bound the claim tightly. First, one feedback-and-revision cycle on one argumentative prompt, in two supervised sessions at one comprehensive university, with first-year students screened for native or near-native English proficiency and no prior experience of AI feedback in the course. Sustained exposure could widen the motivational gap, close it, or turn relatedness into a non-issue; nothing in a single episode speaks to that.

Second, the AI arm is one implementation: one model, one rubric prompt, one interface, with feedback generated in September 2025. The authors note that systems designed to be more personable could behave differently, and that the study cannot separate the model's capability from the prompt's constraints.

The indirect effects are also associational. Engagement and relatedness were measured after the manipulation but never manipulated, so the mediation estimates are consistent with causal pathways without establishing them. The moderating role of [[ai-literacy|AI literacy]] sits at *p* = 0.058 — a pattern worth following up, not a result to design around.

## What this means for practice

- **Instructors.** Keep the relational layer even when AI drafts the commentary. In this trial the AI feedback produced the same revision quality for a fraction of the 15 minutes per essay the instructor spent, so the defensible division is AI on first-pass criterion coverage and the instructor on the conversation about the work.
- **Writing program designers.** Target engagement, not confidence. The pathway that carried performance was how far students processed and acted on the comments; a workflow that asks for a revision memo or a comment-by-comment response does more for outcomes than one that tries to raise writing self-efficacy first.
- **Tool builders.** Relatedness is a design variable, not a fixed property of machine feedback. If a system can make the source legible, consistent and responsive across a term, the motivational penalty measured here is the thing to test against, not assumed.
- **Researchers.** Report equivalence margins before the trial and match the two feedback streams on more than length. Without an equivalence margin fixed in advance, "no significant difference" between AI and instructor feedback is uninterpretable.

## Limitations

- One feedback-and-revision cycle on a single argumentative prompt, in two supervised sessions at one institution; persistence, course engagement and writing development over a term are untested.
- The AI condition is a single implementation — Qwen2.5-27B-Instruct, locally deployed, one rubric prompt, temperature 0.7, feedback generated in September 2025 — so results may not transfer to other models, prompts or interfaces.
- The two feedback streams were matched on length, format and rubric criteria but never independently coded for accuracy, specificity, actionability, tone or rubric alignment.
- Motivation and both mediators are [[self-report-measures|self-reported]] and measured proximally; no behavioral or longer-horizon motivation indicator was collected, and no interviews or think-alouds explain why instructor feedback evoked stronger relatedness.
- The sample is first-year writers at one comprehensive university, screened for native or near-native English proficiency at one comprehensive [[higher-ed|university]]; generalization to other disciplines, genres, proficiency levels and institutions is untested.
- The study was not preregistered, and the equivalence margin, though fixed before data collection, rests on the authors' judgment of a practically meaningful difference.

## Citation

Liu, Y., & Shi, M. (2026). [As effective as the teacher, but less motivating: A randomized controlled comparison of AI-generated and teacher feedback on students' writing performance and intrinsic motivation](https://doi.org/10.3389/fpsyg.2026.1918748). *Frontiers in Psychology, 17*, 1918748.
