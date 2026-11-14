---
title: "AI-Assisted Feedback in Higher Education: Mechanisms, Efficacy, and Motivational Pathways — A Mixed-Methods Investigation"
created: "2026-11-11T07:42:02-05:00"
updated: "2026-11-14T09:45:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [survey]
audience: [researchers, instructors]
sources: ['raw/papers/liu-ai-feedback-motivational-pathways-2026.md']
source_url: "https://doi.org/10.1016/j.caeai.2026.100691"
source_depth: full text
confidence: high
foundations: []
pedagogy: [scaffolding, metacognition, student-engagement, motivation]
technology: [generative-ai, llm, intelligent-tutoring]
assessment: [feedback, formative-assessment]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** AI [[feedback|feedback]] that students rate as good works through three separate motivational routes: it makes them feel capable, in control, and accompanied. Liu et al. tested twelve combinations of feedback focus and depth inside an eight-week [[intelligent-tutoring|tutoring system]] across three Chinese university courses. What the feedback was *about* decided which route carried the effect: process and [[self-regulated-learning|self-regulation]] prompts built autonomy, person-level feedback built relatedness, and elaborated feedback built competence. Each route fed a different outcome, so "better feedback" is three levers rather than one, and a tool that always emits the same dense commentary leaves most of them unused — which matters for how [[motivation|motivation]] becomes [[learning-gains|achievement]].

## Key Findings
1. **Feedback quality moved all three needs, competence most.** Students who rated the AI feedback as higher quality felt more capable, more in control of their work and more accompanied. The competence effect was the strongest of the three; relatedness stayed the weakest need in the environment.
2. **Feedback about process built autonomy; feedback about the person built relatedness.** Prompts that named strategies and self-monitoring raised students' sense of control, and feedback addressed to the student as a person was the only kind that increased relatedness. Task-level feedback did neither as strongly.
3. **Richer feedback built competence and autonomy, but not relatedness.** Moving from basic to elaborated feedback raised perceived competence steadily and autonomy sharply. Relatedness did not respond to depth at all, which fits an environment where the "partner" is a model.
4. **Each need carried a different outcome.** Competence predicted learning gains, autonomy predicted engagement, and relatedness predicted persistence. Relatedness carried no achievement effect, so a warm response buys continued participation rather than better work.
5. **Students described the three routes and added a fourth.** Interviews matched the pathways — seeing exactly where an argument broke down, choosing when to open a hint, feeling accompanied by a warm response — and added a theme the need model does not contain: feedback richness set the standard students thought they would be held to. Elaborated feedback read as high expectations; basic feedback let some invest less because "the AI wasn't going to catch the subtle issues anyway."
6. **The study randomized assignment but not classrooms.** The comparison ran inside three existing courses at one university over eight weeks, with one model producing every response, which limits how far the motivational pattern can be generalized.

## How the feedback was built

The intervention was a self-developed wrapper around GPT-4 rather than an off-the-shelf [[conversational-ai|chatbot]], and the reason matters for interpretation: every learner in a condition received feedback from an identical, archived prompt template. Twelve version-controlled combinations implemented the four foci of Hattie and Timperley (task, process, self-regulation, self) and the three levels of Shute's taxonomy (basic, intermediate, elaborated), differing only in the instruction under study. The submission–feedback–revision loop was held constant, so the comparison is between [[pedagogy|pedagogical]] messages, not between interfaces.

Measurement ran at weeks 0, 4 and 8: perceived feedback quality, the three need scales, learning gains as post-test minus pre-test, and persistence from system logs. The [[qualitative-research|qualitative]] phase sampled 24 students for interviews in week 9, varying course, gender, prior achievement and logged engagement, and analyzed transcripts with two independent coders. The authors report the intervention against the TEP-[[ai-education|AIED]] disclosure model.

Of 287 recruited students, 247 completed every phase. Perceived feedback quality predicted competence most strongly, then autonomy, then relatedness, all controlling for pre-test scores, gender and course. Focus changed where the path ran: process and self-regulation feedback produced stronger autonomy than task feedback (0.58 and 0.61 against 0.41), and self-level feedback produced stronger relatedness than task feedback (0.39 against 0.21). Elaboration produced a gradient on competence, from 0.41 under basic feedback to 0.62 under elaborated feedback, and on autonomy from 0.36 to 0.53. In mediation, competence carried 38% of the effect on learning gains, autonomy 34% of the effect on engagement and relatedness 22% of the effect on persistence. Moderation rests on cells of 61–63 students (focus) and 82–83 (complexity), and one self-regulation advantage on competence only reached p = 0.052.

## Why the pathways diverge

The pattern is coherent if feedback focus is read as a pedagogical message rather than a content category. Process and self-regulation feedback tell learners that strategies are choosable and that monitoring is theirs, which is why the autonomy path is strongest there. Self-level feedback addresses the person, and it is the only condition that moved relatedness, the need an AI environment is worst placed to meet. Elaborated feedback supplies reasons, examples and hints, the material from which competence is built.

The interviews corroborate the routes without testing them. The interesting extension is effort calibration, a [[metacognition|metacognitive]] decision the three-need model does not contain: feedback design appears to set the standard learners expect to be held to, and basic feedback can license a lower investment.

One caution attaches to the whole paper: it is a journal pre-proof, the accepted manuscript before copyediting and final typesetting. The substance is complete, but the version of record may differ in detail.

## What this means for practice

- **Designers:** expose focus and depth as configuration, not as a single "[[ai-feedback-quality|AI feedback]]" switch. Elaboration buys competence, process and self-regulation prompts buy autonomy, and warm [[personalized-learning|personalization]] buys relatedness — but keep praise aimed at progress rather than at the person's traits, so it does not flood the response.
- **Instructors:** decide which outcome you want before choosing a feedback mode. If the target is grades, elaboration is the lever; if it is engagement, strategy and monitoring prompts with real learner choice are; if it is persistence, the relational register matters more than information density.
- **Administrators:** ask vendors whether a product can vary feedback focus and depth and whether it logs learner uptake. A generator that always produces the same elaborated commentary leaves three of the four design levers unused, and there is no evidence that more text is better.
- **Researchers:** between-group path comparisons at these cell sizes are underpowered, and the marginal competence result shows it. Replication needs larger cells, delayed outcomes and models other than GPT-4.

## Limitations

- **One university, three courses.** Students were nested in courses and instructors, so despite random assignment this was not a true [[rct|randomized controlled trial]] and course-level variance is confounded with the manipulations.
- **Eight weeks, no delayed test.** Nothing in the design shows whether the motivational effects persist after the course ends.
- **One model, one moment.** GPT-4 supplied every response, so the pattern may not hold for other models or later versions.
- **Mostly self-report.** Needs and engagement are [[self-report-measures|self-reported]], perceived quality rests on a single adapted scale, and the relatedness measure was rewritten for a non-social context, which raises a construct-validity question the authors acknowledge.
- **Thin moderation cells.** Learning gains are a single-indicator gain score, and the moderation analyses compare groups of 61–63 and 82–83 students, so the focus and depth differences are provisional.

## Citation

Liu, C., Lv, H., Zhou, W., & Yan, S. (2026). [AI-Assisted Feedback in Higher Education: Mechanisms, Efficacy, and Motivational Pathways — A Mixed-Methods Investigation](https://doi.org/10.1016/j.caeai.2026.100691). *Computers and Education: Artificial Intelligence*. https://doi.org/10.1016/j.caeai.2026.100691
