---
title: "Exploring Middle School Students' Interactions and Perceptions of Using Generative AI in STEAM Learning Environments"
created: "2026-09-30T12:00:00-04:00"
updated: "2026-09-30T12:00:00-04:00"
type: article
sources: ['raw/papers/10.3390_bs16091626.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [case study, interviews, thematic analysis]
discipline: [stem education, math education, engineering education, music education, arts education]
level: [middle school, k 12]
audience: [instructors, curriculum designers, researchers]
foundations: [ai-education, human-ai-collaboration, ai-literacy, critical-thinking, limitations-in-aied-research]
pedagogy: [student-ai-interaction, collaborative-learning, inquiry-based-learning, scaffolding, student-engagement, metacognition]
technology: [generative-ai, llm, conversational-ai, prompt-engineering]
assessment: [self-report-measures, evaluative-judgment, feedback-literacy]
methods: [qualitative-research, mixed-methods-research]
ethics: [trust]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Zhao and Li ran an exploratory, small-sample study of how twelve eighth-grade students in Zhejiang, China used [[generative-ai|generative AI]] across six collaborative groups in two 120 min STEAM modules, one on mathematics and engineering and one on mathematics and music, held in an off-campus study room in January 2025. Data were group-level GenAI interaction logs plus 25 min semi-structured interviews, and the paper reports both interaction frequencies and students' perceptions rather than any measured learning outcome. Students overwhelmingly used the assistant to acquire information, most often by copying the instructor's instruction verbatim, and they rated their satisfaction and trust highly while barely using review, verification, evaluation or reflection. There was no control group, the two modules were delivered by different instructors in sequence, so the findings are exploratory and context-specific and cannot support claims about whether GenAI-supported STEAM learning works better than traditional instruction.

## Key Findings

1. **Information requests dominated the recorded interactions.** Of 310 prompts, 303 (97.7%) were information requests and only 5 (1.6%) were review requests.
2. **STEAM knowledge and information was the largest content category,** at 51.1% of 370 coded content entries, followed by [[problem-solving]] process at 24.9% and inquiry plan at 15.7%; analysis and results reached 4.3%, presentation and display 3.5%, and evaluation and reflection only 0.5%. Result verification and future inquiry directions were never coded at all.
3. **Exact copying of the instructor's instruction was the most frequent student standpoint,** at 47.1% of 310 prompts, ahead of spontaneous inquiry at 28.7% and summary of instruction at 21.3%; copying GenAI's own recommendations was rare at 2.3%.
4. **Direct retrieval/review prompts made up 64.4% of 315 coded prompts,** with optimization prompts at 33.0% and non-functional scope prompts at 1.9%.
5. **Satisfaction was high: M = 4.75, SD = 0.40 on a 5-point retrospective rating.** Trust was lower but still positive, at M = 3.91, SD = 0.72. Interview accounts described satisfaction either rising with familiarity or fluctuating with specific outputs.
6. **Students named eight distinct roles for GenAI, four positive and four neutral.** Information retrieval/integration assistant and slide generation were each mentioned by all twelve students (positive), while research plan evaluation/refinement and contextual awareness and memory were the most-cited neutral roles.
7. **Module ratings differed slightly:** satisfaction was M = 4.65 (SD = 0.43) for the mathematics-engineering module and M = 4.54 (SD = 0.50) for mathematics-arts. Seven students reported no module difference in trust, four favored mathematics-engineering and one favored mathematics-arts; seven considered GenAI more suitable for mathematics-engineering, one for mathematics-arts and four saw no difference.

## What the interaction logs showed

The design was exploratory and deliberately small: twelve students (nine boys, three girls, aged 13 to 14) with little or no prior GenAI experience, recruited by convenience sampling and organized into six groups, each group sharing one laptop running Kimi AI. Each pair-to-group unit worked through two 120 min modules with five sessions each, supported by a teaching assistant who gave on-demand prompt-formulation help but not answers. Interaction logs were archived per group after each session, giving 12 datasets; each prompt and its response was one analytical unit, yielding 310 entries, and paired prompts and responses were treated as the unit for [[student-ai-interaction]] content coding.

Two coders double-coded a stratified random sample of 20% (n = 62), with Cohen's kappa of 0.964, 0.975, 0.943 and 1.000 for interaction content, student standpoint, prompt type and prompt purpose. Across the two modules the overall volume of interaction was similar, but the pattern differed: the mathematics-arts module produced more spontaneous inquiry, direct retrieval/review prompts and review requests, while the mathematics-engineering module produced more optimization engagement. The authors read these differences as context-sensitive rather than as evidence of better learning in one module, noting that engineering content was unfamiliar and drove more requests for context and simplification.

## What students perceived, and what they did not question

On the perception side the study was interview-based and [[self-report-measures|self-report]]. Students largely trusted the assistant and relied on [[prior-knowledge|prior knowledge]] and subjective judgment to check it, typically catching only obvious errors. The three highest-trust students said the visible count of web pages Kimi reported reading made answers seem well-founded, and some students admitted they "usually do not verify the accuracy but directly adopt key information." A few were more skeptical and cross-checked outputs against search engines or source links. This is the pattern the paper flags as the central instructional risk in STEAM, where interdisciplinary claims are hard to verify and where a fluent, aggregated answer can carry unwarranted authority.

Students also liked what GenAI did without feeling it was theirs. They valued the speed of summarizing and the slide-generation function, but described low [[student-engagement]] and little [[self-regulated-learning]]: one student said the written report "doesn't feel like my own achievement." When comparing GenAI-based STEAM work with traditional courses, students praised the breadth of interdisciplinary knowledge but described their own inquiries as shallow, and three students explicitly preferred traditional courses.

## What this means for practice

- **Build verification into the task, not the prompt.** Require each group to check at least one key GenAI output against textbooks, reliable sites or empirical data, justify accepting or rejecting it, and revise through follow-up prompts; with evaluation and reflection at 0.5% of coded content and result verification never coded, this cycle will not happen on its own.
- **Fade prompt [[scaffolding]] instead of publishing a script.** The 47.1% exact-copy rate suggests that modeled prompts become templates; move from full models, to prompt frames, to students formulating and revising their own prompts and explaining the rationale.
- **Teach [[critical-thinking]] about aggregated answers.** Students read the "reads dozens of pages" signal as authority; explicit instruction on source checking and on plausible-but-wrong output addresses the limited critical evaluation the interviews exposed.
- **Treat modality as a design choice, not a default.** Satisfaction and trust were slightly higher for mathematics-engineering and students found objective, verifiable tasks a better fit; for open-ended arts work, help students build their own criteria for judging GenAI output before using it.

## Limitations

- Twelve students (nine boys, three girls), convenience sampling, an off-campus laboratory-like study room and no non-GenAI comparison group: the authors state this limits generalizability and causal interpretation and precludes conclusions about the relative effectiveness of GenAI-supported STEAM learning.
- The two modules were delivered sequentially by different instructors, so module differences are confounded with instructor effects and module order, and teaching assistants' prompt-formulation support may have shaped the [[prompt-engineering|prompting]] practices that were recorded.
- Interaction logs are group-level, not individual-level, because students shared one device, and the two short modules may capture novelty-driven responses rather than stable patterns.
- Trust was measured with a single retrospective rating item, which the authors say does not capture the construct's multidimensional nature, and the same team both implemented the study and conducted the interviews, so demand characteristics may have shaped self-reports.

## Citation

Zhao, Q., & Li, S. (2026). [Exploring Middle School Students' Interactions and Perceptions of Using Generative AI in STEAM Learning Environments](https://doi.org/10.3390/bs16091626). *Behavioral Sciences*, 16(9), 1626.