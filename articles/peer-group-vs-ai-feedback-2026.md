---
title: "Comparative analysis of peer group and AI-generated feedback in peer assessment: Insights into feedback quality and student perceptions in higher education"
created: "2026-09-22T07:44:00-04:00"
updated: "2026-09-22T07:44:00-04:00"
type: article
published: "2026-09-17"
foundations: [critical-thinking, human-ai-collaboration]
pedagogy: [collaborative-learning]
technology: [generative-ai, llm, conversational-ai]
methods: [mixed-methods-research, quantitative-research, qualitative-research]
assessment: [feedback, peer-assessment, group-work, formative-assessment, ai-feedback-quality]
ethics: [hallucination-risk]
audience: [instructors, assessment designers, instructional designers, researchers]
level: [undergraduate, higher ed]
research_method: [thematic analysis, interviews, user study]
discipline: [learning sciences, design education]
page_kind: [evaluation]
source_url: https://doi.org/10.14742/ajet.11467
sources: ['raw/papers/peer-group-vs-ai-feedback-2026.md']
confidence: high
connected_faqs: [ai-feedback-at-scale, group-work-ai, redesign-assessment-ai-era]
contributors: [editor]
reviewed_by: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-22"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** This [[mixed-methods-research|mixed-methods]] study puts a [[conversational-ai|chat assistant]] and student groups side by side in the same [[peer-assessment]] task, and the most useful result is that the comparison does not hold still. In the first of two three-week rounds, [[feedback]] from peer groups, rated blind on effectiveness, constructiveness, accuracy, completeness and concreteness, scored no differently from [[generative-ai|ChatGPT]]-4o's. In the second round the model pulled ahead on constructiveness, accuracy and concreteness. What students said about the two sources also divided cleanly: group feedback was comprehensive, context-sensitive and sometimes subjective; model feedback was constructive, criteria-faithful and objective, but formulaic and occasionally robotic. Both sources were adopted at high rates — 85.09% of 127 revisions drew on one or both — and the students who accepted AI feedback most readily ended up with stronger designs. The paper's own framing is the useful discipline here: use AI as a supplementary feedback source under [[human-in-the-loop-ai|human oversight]], and treat its fluency as unvalidated.

### Overview

The study sits at the intersection of two well-established asymmetry problems. Peer assessment produces contextually rich feedback but is vulnerable to subjectivity, effort and fatigue, and its quality depends on the assessors' competence. Machine-generated feedback is consistent and scalable but can be fluent without being right, and it cannot see the classroom it is commenting on. Rather than asking whether AI can grade, this study asks how its feedback compares with what students produce for each other, how students read each source, and what they actually do with it during revision.

Three research questions run through the paper: differences in feedback quality between group and model feedback, students' perceptions of each, and how students adopt and apply both during revision. The design is a two-round, within-course comparison in which each group's design work was assessed by another group and by the model, with the two feedback reports anonymized as Feedback 1 and Feedback 2 before students rated them.

### Key Findings

1. **Round one found no quality difference at all.** Across all five dimensions — effectiveness, constructiveness, accuracy, completeness and concreteness — group feedback and ChatGPT-4o feedback scored comparably, with group feedback marginally ahead on most and the model marginally ahead on concreteness. The authors attribute this to the explicit rubric both sources were working from.
2. **By round two the model had an edge in three dimensions.** Significant differences appeared for constructiveness (p < .001), accuracy (p = .010) and concreteness (p = .021), each favoring the model, which the authors read as evidence of strong iterative assessment rather than a property that existed from the start.
3. **Group feedback was perceived as rich but interested; model feedback as fair but mechanical.** Interviews produced complementary themes: comprehensiveness and specificity for groups, alongside subjectivity tied to personal opinions and, in some accounts, grade considerations; constructiveness, specificity and objectivity for the model, alongside templatisation and a sense of rigidity. Notably, students valued the model's adherence to the rubric as fairness rather than as inflexibility.
4. **Acceptance was high for both, and the two sources drove different kinds of revision.** Of 127 revisions, 107 drew on one or both feedback sources — an overall acceptance rate of 85.09%, split 44.09% group-only against 37.0% model-only, with 3.15% integrating both. Group feedback generally triggered direct textual fixes; model feedback more often prompted reconsideration of the design's coherence and logic.
5. **High acceptance of AI feedback tracked with better final designs.** Groups classified as high-acceptance made more effective use of the model's feedback and achieved higher accuracy scores, and their rated feedback quality was significantly higher across all five dimensions, with accuracy showing the largest gap.
6. **A visible share of revisions came from neither source.** About 15.75% of revisions (20 of 127) were classified as extra revisions unrelated to either feedback report, rising to 16 of 72 in the second round — evidence that feedback acted as a catalyst for further thinking rather than only as an instruction list.

### How the study was done

Thirty-nine third-year undergraduates in [[higher-ed|a Chinese university]], majors in educational technology, aged 20 to 21 (13 male, 26 female), took a course titled Smart Learning Environment Design and were randomly assigned to groups of three or four. Each round ran three weeks: a group design task, evaluation of the design by another group and by ChatGPT-4o under the same published criteria, blinded rating of the two feedback reports, then revision and resubmission. Students rated each report on five dimensions using a five-point scale and justified every score in writing. Interviews were held with six randomly selected groups in 15-minute focus-group sessions, one per round.

Model feedback was generated with a structured CO-STAR prompt that fixes the evaluator persona, objective, style, tone, audience and required output, and all prompts were pilot-tested by the research team for rubric alignment. Ratings were compared with Mann–Whitney U tests; interview transcripts were analyzed thematically with two coders reaching 82.6% agreement; revision behavior was traced through Track Changes records and classified by which source each revision drew on, then used to split groups into high- and low-acceptance categories.

### Reading the comparison honestly

The round-over-round change is the paper's most interesting and least decisive result. A single study cannot separate three plausible explanations: the model improved because the second task gave it a better rubric-and-context pairing, the human assessors tired across repeated rounds, or the students got better at prompting and responding to the model between rounds. The authors themselves point to prompt design, task clarity and iterative interaction as influences on [[ai-feedback-quality|AI feedback quality]], which is a statement about [[prompt-engineering|prompting]] as much as about the model — and it means the "AI feedback improved" finding is partly a finding about the humans running it.

The perception data is more robust because it is [[qualitative-research|qualitative]] and consistent with the wider literature, and it is also more actionable. Students did not simply prefer one source. They assigned each a defensible role: peers for context, the model for consistency. That is close to what other studies of [[feedback|feedback]] sources find, and it leaves the practical question not "which is better" but "which parts of this task can each source be trusted with".

Two numbers deserve care when the findings are quoted. The paper's abstract refers to 13 undergraduate peer groups where the methods section describes 12 groups of three or four from 39 students; and the acceptance rate is a count of revisions attributed to a source, not a measure of whether the feedback improved the work, which the paper explicitly did not test.

## What this means for practice

- **Give the model the same rubric you gave the students.** Comparable quality in round one came from shared criteria; the model's later advantage came with better-aligned prompts, so rubric-aligned prompting is the part of the setup to standardize.
- **Position AI feedback as a second reader, not a replacement assessor.** Students accepted it most when it supplemented peer review, and the study's own recommendation is supplementary use with instructor oversight.
- **Keep peers in the loop for context, and use the model for consistency.** Group feedback captured what peers knew about the design's practical constraints; the model caught surface and criteria-level problems more evenly.
- **Budget instructor time for verification.** The paper warns about [[hallucination-risk|hallucinations]] and pedagogically unsound suggestions, and its own limitation is that AI feedback validity was never systematically checked — review before returning machine feedback to students.
- **Pay attention to who accepts feedback and why.** High-acceptance groups did better, so an unread or dismissed AI report is a signal worth following up, and so is uncritical acceptance, since the model's authority came largely from criteria-faithfulness rather than validated accuracy. A sixth of revisions traced to neither source, which suggests the most valuable outcome of a feedback round may be the discussion it starts rather than the edits it prescribes.

## Limitations

- **Small sample, short window, novice users.** Thirty-nine students in one educational technology course over two three-week rounds, with limited prior ChatGPT experience, so the round-two shift cannot be attributed to the model rather than to practice, prompt refinement or assessor fatigue.
- **One discipline and one kind of task.** Participants were all educational technology majors evaluating text-based design proposals, so transfer to other fields, other artifact types and [[multimodal]] assessment is untested.
- **The study measured adoption, not learning.** Revision behavior was classified by which feedback source it followed, and the paper did not test whether the revised work improved, so acceptance rates cannot be read as evidence of [[learning-gains|learning gains]].
- **AI feedback validity was never independently verified.** Scores and comments were produced by the model and used as a feedback condition without expert review or fact-checking, leaving open how accurate the feedback students found so objective actually was.

## Connected Concepts
[[feedback]], [[peer-assessment]], [[group-work]], [[formative-assessment]], [[ai-feedback-quality]], [[generative-ai]], [[conversational-ai]], [[collaborative-learning]], [[human-ai-collaboration]], [[critical-thinking]]

## Connected Articles
- [[genai-teacher-feedback-comparison]] — Comparing Generative AI and teacher feedback: student perceptions of usefulness and trustworthiness
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI-assisted, instructor-supervised grading and feedback in higher education: Design and evaluation of an end-to-end pipeline
- [[tripartite-feedback-framework-ai-assessment-2026]] — A Tripartite Feedback Framework for AI-Assisted Assessment of Complex Reports in Higher Education
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs Do Not Grade Essays Like Humans

## Citation

Li, X., Zhang, Y., & Liu, T. (2026). [Comparative analysis of peer group and AI-generated feedback in peer assessment: Insights into feedback quality and student perceptions in higher education](https://doi.org/10.14742/ajet.11467). *Australasian Journal of Educational Technology, 42*(4), 129–146.