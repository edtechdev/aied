---
title: "Human–AI collaboration in academic writing instruction: A calibrated feedback model for EAP"
created: "2026-10-05T10:00:00-04:00"
updated: "2026-10-05T10:00:00-04:00"
type: article
sources: ['raw/papers/human-ai-collaboration-academic-writing-feedback-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [thematic analysis, survey]
discipline: [writing education, language learning]
level: [higher ed, undergraduate]
audience: [instructors, assessment designers, researchers]
foundations: [human-ai-collaboration, ai-literacy, academic-integrity]
pedagogy: [scaffolding, student-ai-interaction, metacognition]
technology: [generative-ai, llm]
assessment: [automated-assessment, automated-essay-scoring, feedback, formative-assessment, ai-feedback-quality]
methods: [mixed-methods-research, quantitative-research, qualitative-research]
ethics: [ethics, privacy, trust]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-05"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Farzi (2026) compares feedback on 60 argumentative essays from 30 students in a Canadian [[higher-ed|university]] English for Academic Purposes course, scored independently by the instructor and by ChatGPT-3.5 across three calibration phases. Quantitatively, the human instructor assigned a slightly higher mean (74.23) than the model (72.98), a difference that was not statistically significant (p = .104, Cohen's d = 0.27) — evidence that calibrated [[generative-ai|generative AI]] can produce scores broadly aligned with [[human-in-the-loop-ai|human judgment]]. Qualitatively, thematic analysis of a 16-item survey and an instructor memo showed that students valued the immediacy and clarity of AI [[feedback]] for grammar and vocabulary, but trusted instructor feedback more for rhetorical structure, coherence, and idea development. Most preferred a hybrid model. The paper argues that through calibrated [[prompt-engineering|prompt design]] and [[pedagogy|pedagogical]] reframing, generative AI can supplement — but not replace — human feedback, and it offers guidance for integrating these tools into [[writing-education|academic writing instruction]] while preserving instructional quality and [[agency|student agency]].

## Key Findings

1. **Calibrated AI scores track human scores.** Across 60 essays, ChatGPT-3.5 averaged 72.98 against the instructor's 74.23; the paired t-test found no significant difference (t = 1.47, p = .104, Cohen's d = 0.27).
2. **Surface accuracy, rhetorical blind spot.** The model reliably caught grammar and vocabulary issues but, according to students and the instructor, offered weaker [[scaffolding]] on coherence, tone, argument development, and genre expectations.
3. **Students want both.** In the survey, 24 of 30 students preferred combined human and [[ai-feedback-quality|AI feedback]]; 27 valued timeliness and 25 valued the clarity of AI comments.
4. **Three-stage calibration mattered.** The prompt progressed from the bare rubric to elaborated descriptors to embedded high, mid, and low anchor texts, tightening alignment between AI and instructor scoring.
5. **Immediacy drove iterative revision.** Students reported that instant AI comments supported faster revision cycles, while instructor feedback remained more targeted to individual needs despite being delayed.
6. **Supplement, not substitute.** The author concludes that with calibrated prompts and pedagogical reframing, generative AI can extend instructor capacity without displacing human judgment or lowering academic standards.

## Calibration closes the scoring gap

The study's [[quantitative-research|quantitative]] core is a paired comparison of total scores on a four-domain rubric, with each category rated on a 5-point scale. The instructor, who had more than ten years of EAP assessment experience, rated all 60 essays blind to the AI scores. ChatGPT-3.5's evaluations ran through three calibration phases: a bare rubric prompt, then elaborated descriptors, then annotated high, medium, and low exemplars embedded as performance anchors. The gap between the two sets of scores was small and non-significant, and the distributions were similarly shaped. For the author, this supports [[automated-essay-scoring]] as a supplementary rater in [[formative-assessment]], where [[educational-measurement|scoring consistency]] matters for fairness. The slightly lower AI mean may reflect rigid rubric application: the model did not adjust for context or student intention the way an experienced human rater can. The paper draws on [[assessment-validity|validity]] reasoning, noting that [[benchmark]] texts and rater training sustain construct validity and score reliability.

## What students valued and what they missed

Thematic analysis of the 16-item survey and the instructor's reflective memo produced four themes. Students praised the precision with which ChatGPT flagged grammatical and lexical errors, often catching problems they had not noticed, and they valued immediacy, which enabled quicker revision cycles. Yet many found the comments formulaic and repetitive, and several said the model told them to "improve organization" without explaining how. They contrasted this with instructor feedback that addressed rhetorical choices, audience, and how to reorganize an argument. The instructor similarly reported that AI handled surface features accurately but struggled with cultural or contextual interpretation. These patterns echo the paper's review of [[automated-assessment|automated writing evaluation]], whose feedback has long been described as formulaic and lacking contextual sensitivity, and they echo concerns about [[language-learning|second language]] writers judged against dominant norms. They also raise the [[ai-literacy|critical AI literacy]] question: students must judge the relevance and reliability of automated comments rather than accept them uncritically.

## A hybrid feedback model

Most students preferred receiving both kinds of feedback, viewing AI as useful for technical correction and the instructor as essential for depth. The author frames this as a hybrid or combined model: generative AI provides preliminary feedback on drafts, while the instructor guides refinement of higher-order concerns. This division of labor could ease workloads in large or writing-intensive courses where individualized feedback is scarce, and the paper suggests it may support [[peer-assessment|peer-review]] models in which students engage AI and peer comments before instructor input. Crucially, the model treats AI and instructor feedback as complementary rather than interchangeable, preserving students' [[trust]] in the feedback relationship and their development of [[metacognition|metacognitive]] growth. The author stresses that effectiveness depends on situating tools within a clear pedagogical framework — calibrated prompts, rubric design, and deliberate planning — with the instructor acting as a mediator between AI systems and human judgment, a stance consistent with [[human-ai-collaboration|human–AI collaboration]]. Ethical concerns about [[privacy]], student data handling, and homogenized writing remain, requiring transparent policy and monitoring.

## What this means for practice

- **Instructors.** Calibrate prompts before trusting AI scores: alignment in this study only emerged after rubric descriptors and high, mid, and low anchor texts were embedded, not with the bare rubric.
- **Instructors.** Assign AI feedback to surface-level grammar and vocabulary and reserve your own attention for rhetorical structure, coherence, and argument development — the areas students said the model missed.
- **Instructors.** Frame AI as one input among several, having students weigh AI and peer comments before instructor feedback, and teach them to question automated suggestions rather than accept them.
- **Assessment designers.** Treat calibrated AI scoring as a supplementary rather than replacement rater in formative contexts, and disclose to students when and how AI contributes to their feedback.
- **Administrators.** The model may relieve workload in large writing courses, but the author ties its value to instructor-designed rubrics, prompt calibration, and explicit attention to [[equity-in-ai-education|fairness]] for [[multilingual-learning|multilingual learners]].

## Limitations

- The sample was small: 30 students in a single first-year EAP course at one Canadian university, which limits generalizability.
- Only one genre was assessed: both tasks were argumentative (an essay and a synthesis), so results may not transfer to expository, reflective, or report writing.
- ChatGPT-3.5 was the version available at data collection; the author says it is unclear whether the findings apply to newer models such as GPT-4 or GPT-5.
- Student perceptions were [[self-report-measures|self-reported]] and may have been shaped by prior attitudes toward technology; the study reports no objective performance measures of improvement.
- The instructor's involvement centered on rubric design, essay scoring, and written feedback, so the study did not examine [[teacher-role|teacher]]–student interactions around AI feedback during the writing process.

## Citation

Farzi, R. (2026). [*Human–AI collaboration in academic writing instruction: A calibrated feedback model for EAP*](https://doi.org/10.18192/olbij.v15i1.7773). *Cahiers de l'ILOB / OLBI Journal*, 15, 1–22. https://doi.org/10.18192/olbij.v15i1.7773