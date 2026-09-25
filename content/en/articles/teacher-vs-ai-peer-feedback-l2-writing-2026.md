---
title: "Teacher feedback vs. AI-assisted peer feedback in L2 writing: A quasi-experimental study in a Chinese university"
created: "2026-09-25T11:42:33-04:00"
updated: "2026-09-25T12:56:00-04:00"
type: article
sources: ['raw/papers/teacher-vs-ai-peer-feedback-l2-writing-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [quasi-experiment]
discipline: [language learning, writing education, english education]
level: [higher ed, undergraduate]
audience: [instructors, instructional designers, researchers, assessment designers]
foundations: [teacher-role]
pedagogy: [collaborative-learning, metacognition, scaffolding, sociocultural-learning, student-ai-interaction]
technology: [generative-ai, llm]
assessment: [automated-essay-scoring, educational-measurement, feedback, feedback-literacy, formative-assessment, learning-gains, peer-assessment]
methods: [quantitative-research, research-methods-aied]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-25"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Grounded in Vygotsky's [[sociocultural-learning|sociocultural theory]], this 8-week quasi-experiment treated teacher feedback and AI-assisted peer feedback as two kinds of [[scaffolding|scaffold]] and compared them within one [[writing-education]] course at an application-oriented Chinese university. The control class (n = 31) received teacher written annotations; the experimental class (n = 30) worked in pairs, using DeepSeek to check a partner's draft against the same five-dimensional checklist before negotiating revisions. Across 244 graded texts the two modes behaved as "heterogeneous scaffolds": teacher [[feedback]] offered broader coverage and adapted its focus, while [[peer-assessment|AI-assisted peer feedback]] held a narrower but steadier focus and produced a stable learning-curve in scores — after trailing in the first task it passed the teacher-feedback class in second-task average revision score. Neither mode improved syntactic complexity, and the AI-assisted advantage in lexical diversity faded after the first task. The authors argue for a hybrid "AI-Peer-Teacher" model rather than substitution.

## Key Findings
1. 61 second-year English majors (30 experimental, 31 control) wrote 244 texts; baselines were comparable (82.68, SD = 5.48 vs. 81.56, SD = 5.65; t = 0.79, p = 0.415).
2. First-task feedback: 316 teacher items vs. 185 for AI-assisted peer feedback, the gap in vocabulary errors (t(59) = −2.677, P = .010, d = 0.66) and technical details (t(59) = −2.620, P = .012, d = 0.58).
3. By task 2 teacher feedback fell to 169 items (organization and content/argumentation = 46.15%); AI-assisted peer feedback produced 120 and cut content suggestions (teacher M = 1.11, SD = 1.21 vs. peer M = 0.40, SD = 0.58; t(59) = −2.68, P = .010).
4. Teacher feedback led after task 1 (4.06 vs. 3.87 points) but fell 32.8% to 2.73 points in task 2; AI-assisted peer feedback held at 3.89 points, its task-2 revision mean (89.82, SD = 5.45) exceeding the control (88.35, SD = 5.52).
5. AI-assisted peer feedback raised lexical diversity in task 1 (F(1,59) = 12.288, p < .001, ηp² = .200) but not task 2 (F(1,59) = 1.084, p = .303, ηp² = .022).
6. Syntactic complexity moved under neither mode: only a task-1 time effect was significant (F = 6.184, p = .016; composite mean 2.03 → 2.14); task-2 time, group, and interaction effects were non-significant (F(1,59) = 0.234, p = .630; F(1,59) = 1.991, p = .165; F(1,59) = 0.417, p = .522).
7. The paper's output is an "AI-Peer-Teacher" model: AI for drafting-time content guidance and error marking, peers for revision negotiation, teachers for complex syntax and argumentation.

## Study design: one varied factor, two scaffolds
The study ran 8 weeks with 61 second-year English majors at a Chinese application-oriented university. Two classes matched on pretest scores became the experimental group (n = 30, AI-assisted peer feedback) and the control (n = 31, teacher feedback), with gender split 4/26 vs. 4/27 and all other teaching variables constant; only 12 of 61 had used ChatGPT before.

Both classes wrote two ~200-word essays on iWrite 2.0, then revised. The control class received teacher annotations against a standardized five-dimension [[formative-assessment|feedback checklist]] covering structure, content, grammar, vocabulary, and technical details; experimental pairs used the [[generative-ai]] tool DeepSeek on the same checklist and negotiated revisions, with no teacher content feedback. Content validity was 0.92 with three experts (tenure above 10 years) and pilot reliability Cronbach's α 0.78–0.86 on 10 non-experimental essays; Coh-Metrix 3.0 extracted features, SPSS 27.0 ran statistics.

## What each mode attended to — and how it shifted
The authors call the two modes "heterogeneous scaffolds": the teacher pattern an "expert dynamic scaffold" re-prioritizing against the learner's zone of proximal development, the AI-assisted one "core-focused" and steadily guided — strong on content and structure, weaker on language form. Unlike static [[automated-essay-scoring|automated writing evaluation]], the tool is dialogic and multi-round, not a fixed score.

## Divergent trajectories in writing scores
The paper reads authoritative error correction as a fast early gain that may encourage passive, error-avoidance revision, and links error emphasis without praise to [[motivation|reduced motivation]] and risk-taking; the AI-plus-peer loop has students evaluate suggestions and internalize the tool as a cognitive resource — a [[student-ai-interaction]] path of scaffolding that fades with competence. Gains used repeated-measures ANOVA and within-group t tests: the task-2 between-group difference was small and not significant (mean difference 1.16, 95% CI [−1.06, 3.38], t(59) = 1.048, p = .294); so was the task-1 difference (mean difference −0.19, 95% CI [−3.10, 2.72], t(59) = −0.131); the control class's draft mean was 85.62 (SD = 4.80).

## Micro-linguistic outcomes and the hybrid proposal
AI supplies an immediate "resource scaffold" of lexical choices students did not convert into a stable strategy; on draft 1 the AI-assisted class led on LDTTRc (0.80, SD = 0.07 vs. 0.71, SD = 0.06; t = −4.854, p < .001). Syntactic development needs targeted intervention, and [[llm|language models]] have not systematically identified learners' syntactic weaknesses. The proposal assigns AI to drafting-time content guidance and error marking, peers to revision negotiation, and teachers to what lies beyond both: complex syntax and argumentation.

## What this means for practice
- **Course teams.** Treat the modes as complementary: AI-assisted peer review holds the line on content and structure while teachers diagnose higher-order problems.
- **Instructors.** Front-load process training before an AI-assisted peer cycle and add verification prompts for language form.
- **Instructional designers.** General writing feedback will not move syntactic complexity; design targeted sentence-pattern work over a horizon longer than 8 weeks.
- **Administrators.** The teacher's adaptive feedback was time-expensive, its early advantage flattening once tasks demanded structural breakthroughs; offload routine error marking to AI.
- **Assessment designers.** Track holistic scores and micro-linguistic indicators separately; AI-assisted peer review needs [[feedback-literacy|intermediary capabilities]], so students must challenge tool output rather than let reliance impair [[critical-thinking]].

## Limitations
- The intervention lasted only 8 weeks and drew English majors from a single university, restricting generalizability.
- The study traced feedback patterns and scores, not how learners internalize feedback types, so micro-level mechanisms stay unexplained; it calls for interviews and think-aloud methods.
- DeepSeek is named without a version identifier, and consent ran 14 March to 27 March 2025; results describe a superseded model generation — a 2025 snapshot.
- Intact classes rather than random assignment, and the second-task between-group difference did not reach significance; score findings rest on within-group change.

## Connected Concepts
- [[scaffolding]]
- [[sociocultural-learning]]
- [[peer-assessment]]
- [[feedback]]
- [[feedback-literacy]]
- [[formative-assessment]]
- [[generative-ai]]
- [[llm]]
- [[automated-essay-scoring]]
- [[writing-education]]
- [[language-learning]]
- [[student-ai-interaction]]
- [[motivation]]
- [[critical-thinking]]
- [[metacognition]]
- [[research-methods-aied]]

## Connected Articles
- [[genai-teacher-feedback-comparison]] — Comparing Generative AI and teacher feedback: student perceptions of usefulness and trustworthiness
- [[peer-group-vs-ai-feedback-2026]] — Comparative analysis of peer group and AI-generated feedback in peer assessment: Insights into feedback quality and student perceptions in higher education
- [[farrokhnia-genai-feedback-student-revisions-2026]] — Generative AI offers more, but students revise less: comparing the effects of teacher and AI feedback on student essay revisions
- [[irwin-muller-efl-peer-feedback-literacy]] — Positioning Generative AI in EFL Peer Feedback: Training Feedback Literacy and Enabling Uptake in Speaking Classes
- [[chang-genai-peer-feedback-collaborative-argumentation-2026]] — Leveraging generative AI to facilitate peer feedback in collaborative argumentation learning
- [[empowerment-ai-assisted-deep-revision-efl-writing-2026]] — Empowerment over enforcement: unpacking the psychological drivers of AI-assisted deep revision in EFL writing

## Citation
Tang, J., Li, P., & Luo, R. (2026). [*Teacher feedback vs. AI-assisted peer feedback in L2 writing: A quasi-experimental study in a Chinese university*](https://doi.org/10.1371/journal.pone.0345976). *PLOS ONE*.