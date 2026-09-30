---
title: "Comparing ChatGPT Feedback and Peer Feedback in Shaping Students’ Evaluative Judgement of Statistical Analysis: A Case Study"
created: "2026-09-30T12:06:47-04:00"
updated: "2026-09-30T12:06:47-04:00"
type: article
sources: ['raw/papers/10.3390_bs15070884.md']
confidence: high
published: "2025"
page_kind: [evaluation]
research_method: [case study, interviews, thematic analysis]
discipline: [language learning]
level: [graduate, higher ed]
audience: [instructors, curriculum designers, researchers]
foundations: [ai-education, human-ai-collaboration, critical-thinking, limitations-in-aied-research]
pedagogy: [collaborative-learning, metacognition, self-regulated-learning, student-engagement, student-ai-interaction]
technology: [generative-ai, conversational-ai, llm, prompt-engineering]
assessment: [evaluative-judgment, peer-assessment, feedback, feedback-literacy, formative-assessment, ai-feedback-quality]
methods: [qualitative-research, mixed-methods-research]
ethics: [trust-calibration, hallucination-risk]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Xie, Zhang and Wilson report a case study of one 14-week doctoral-level statistical analysis course at a research-intensive university in Malaysia. The 32 enrolled students completed a mid-term correlation-analysis assignment and then received feedback either from [[generative-ai|ChatGPT]]-4o or from structured peer sessions, wrote a reflection on the experience, and six were purposively selected for follow-up interviews, three from each condition. Read through Nelson's hard, soft and dynamic dimensions of [[evaluative-judgment]], the reflections and interviews show that each modality supported the three dimensions differently: ChatGPT-4o gave fast, detailed procedural guidance but left correctness depending on the student's own capacity to verify it, while peer dialogue triggered comparison, reflection and collaboration but varied in statistical quality and at times produced consensus reached for practical rather than evidential reasons. The design is a single-cohort case study with six interviewees, so the findings describe these students' experiences rather than established effects.

## Key Findings

- **Both feedback modes prompted hard evaluative judgment, through different mechanisms.** ChatGPT-group students had to check whether fluent outputs were procedurally and interpretively sound: one reported not simply trusting the model when results differed, and another recognized that a poorly framed prompt could produce an answer built on a misunderstanding from the start. Peer-group students detected errors their own checking had missed, and when a group agreed on an answer, one still felt the need for a more authoritative expert or [[teacher-role|teacher]] to confirm it.
- **Soft judgment developed through immediacy on one side and dialogue on the other.** Students in the ChatGPT condition valued on-demand availability and alternative interpretations they would not have generated alone, while others distrusted answers they saw as made up or could not trace to algorithms, training data or privacy practice. [[peer-assessment|Peer feedback]] supported interpretation, motivation and co-regulated learning, yet one student doubted whether peers who were all beginners in statistics could settle a final application.
- **Dynamic judgment separated the two conditions most sharply.** ChatGPT supplied step-by-step software guidance, explanations of tables and figures, and help with reporting results to academic standards, but could not detect data entry mistakes, missing values, or whether the appropriate statistical procedure had actually been followed. Peer interaction caught a wrong data file in real time and forced explicit justification for choosing Spearman over Pearson.
- **Surface fluency can conceal a substantive error.** One student consulted ChatGPT-4o about the difference between Spearman and Pearson correlations, received a concise and well-structured summary, and then applied Pearson correlation to ordinal data without checking whether the dataset met its assumptions.

## How the study was run

The course ran for 14 weeks for a Higher Degree by Research cohort in language and education disciplines, most of whom entered with little or no prior [[quantitative-research|quantitative]] training. Weeks 1–7 covered descriptive statistics, probability theory and correlation; Weeks 8–14 moved to regression modeling and multivariate analysis, with guided tutorials on open-access datasets and SPSS, Version 30. The mid-term assignment asked each student to choose between Pearson and Spearman correlation for their data, formulate a null hypothesis, run the test in SPSS, interpret the output, and report it in the format of an academic research report.

The 32 enrolled students were assigned to receive either ChatGPT-4o feedback or structured peer feedback on that assignment. The ChatGPT group worked independently and captured screenshots of their dialogues with the tool; the peer group held small-group discussions that were video recorded, so the researchers could see how interpretations were negotiated. All students then submitted [[self-report-measures|written reflections]] and a post-implementation survey covering the perceived accuracy and relevance of the feedback and its influence on their [[critical-thinking|analytical thinking]]. Six students were purposively selected for semi-structured, task-based interviews — Mary, John and Tina from the ChatGPT group, and Olivia, Stella and Viki from the peer group — chosen because recordings or screenshots showed [[active-learning|active engagement]].

Analysis used hybrid inductive and deductive thematic coding in NVivo, version 1.5.1. The team first open-coded survey responses and transcripts, then applied a deductive template from Nelson's tripartite framework to classify instances as hard, soft or dynamic, while remaining open to codes that extended or challenged it, and triangulated themes across surveys, interviews, video recordings, ChatGPT screenshots and the marked assignments.

## What this means for practice

- Treat [[ai-feedback-quality|AI feedback]] as a prompt for verification rather than as an authority. The students who gained most compared ChatGPT's output with their own analysis and interrogated the difference; the documented error happened where polished fluency went unchecked.
- Scaffold peer feedback with explicit criteria and expert oversight. Peer dialogue surfaced errors and ambiguity, but groups of novices sometimes converged through practical necessity rather than evidence, and students wanted an authoritative check on the conclusion.
- Design comparison into the task. Ask students to compare feedback from AI, peers and their own analysis and to justify where accounts agree or diverge, so [[feedback-literacy]] and [[trust-calibration]] become explicit learning goals rather than byproducts.
- Attend explicitly to what the tool cannot see. Assumption checking, variable selection and reporting standards fell outside both feedback modes, so instructors should assess those steps directly rather than assume feedback covered them.

## Limitations

- The study is a single case: 32 students in one 14-week course for language and education disciplines at one research-intensive university, with six students interviewed, so the findings are tied to that context rather than generalizable.
- Interviews were purposively sampled for active engagement, and the authors state that interpretation reflects the theoretical assumptions and positionality of the research team.
- Data came from one assignment at one point in the [[curriculum-design|curriculum]], while evaluative judgment is developmental; the study cannot show how either feedback mode shapes it across a doctoral program.
- The authors propose future work with three groups (ChatGPT feedback, peer feedback, and ChatGPT plus peer feedback), so this study cannot say whether combining the modes performs better than either alone.

## Citation

Xie, X., Zhang, L. J., & Wilson, A. J. (2025). [Comparing ChatGPT Feedback and Peer Feedback in Shaping Students' Evaluative Judgement of Statistical Analysis: A Case Study](https://doi.org/10.3390/bs15070884). *Behavioral Sciences*, 15(7), 884.