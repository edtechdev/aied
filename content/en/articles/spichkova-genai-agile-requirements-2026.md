---
title: "Does GenAI Perform Better than Students and Novice Software Developers in Agile/Scrum Requirements Engineering Tasks?"
created: "2026-11-12T09:30:00-05:00"
updated: "2026-11-12T09:30:00-05:00"
type: article
page_kind: [synthesis]
research_method: [case study, thematic analysis]
evidence_context: educational
discipline: [cs education]
level: [higher ed, undergraduate]
audience: [instructors, curriculum designers]
sources: ['raw/papers/spichkova-genai-agile-requirements-2026.md']
source_url: "https://doi.org/10.3390/educsci16111923"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
verified: [citation, numbers, links]
pedagogy: [professional-training, problem-solving]
technology: [generative-ai, llm]
assessment: [assessment]
methods: [qualitative-research]
---

> **Synthesis:** Spichkova analyzed [[feedback|marking feedback]] on product backlogs built by 211 student teams — 144 Bachelor's and 67 Master's — across four semesters of an Agile/Scrum course, and derived 17 recurring mistake types in six categories, packaged as a checklist for students and junior developers. Priorities were the most common failure (81% of Bachelor's teams, 67% of Master's), followed by backlog scope and content (74% vs 39%), effort estimation (45% vs 33%), readability and style (44% vs 37%) and user-story format (42% vs 31%). Teams that attended a workshop introducing the checklist made mistakes in 1.67 categories against 2.6 for absent Master's teams. She then gave the same elicitation notes to five [[llm|LLMs]] under a zero-shot [[prompt-engineering|prompt]]: GPT-6.1 Sol Medium produced 26–33 items and, on her reading, outperformed the teams on scope, user-story format, priorities and effort, while Val and Gemini 2.0 Flash produced weaker backlogs. The comparison is descriptive, coded by the author alone, and grounded in marking feedback rather than raw submissions.

## Key Findings

1. **Priorities were the most common mistake.** 81% of Bachelor's teams and 67% of Master's teams had priority-related issues, often reading "low priority" as a should-have rather than a nice-to-have.
2. **Scope and content separated the cohorts most.** 74% of Bachelor's teams and 39% of Master's teams had scope or content issues; 31% and 15% respectively omitted functionalities, usually low-priority ones.
3. **Effort estimates were present but not credible.** 45% of Bachelor's teams and 33% of Master's teams had effort issues; only 1% omitted estimates entirely, while 34% and 25% gave unrealistic ones.
4. **The checklist workshop tracked with fewer mistakes.** Attending Master's teams averaged 1.67 mistake categories against 2.6 (35.90% better) and 48.81% fewer mistake types; Bachelor's teams averaged 2.52 against 3.13.
5. **A current [[generative-ai|GenAI]] model beat the teams on most criteria.** Under one zero-shot prompt, GPT-6.1 Sol Medium generated 26–33 items and matched or exceeded the student teams on scope, user-story format, priorities and effort.
6. **Older models missed whole functionalities.** Val generated 9–14 items and missed seven functionalities in one case; Gemini 2.0 Flash generated 17–37, some of them page descriptions rather than user stories.

## Seventeen mistake types, one checklist

The dataset is marking feedback, not submissions: anonymized comments from an eLearning system on an [[authentic-assessment|authentic team assignment]] run in Semesters 1 and 2 of 2023 and 2024, before GenAI use was common on this task. [[qualitative-research|Open coding and constant comparison]] produced 17 codes, summarized into six categories — product backlog scope and content, user-story format, epics, readability and style, priorities, and effort. The checklist is deliberately distinct from the marking rubric: a rubric makes a grade transparent to markers and students, while a checklist is a pre-submission check against the failures that actually recur. Its categories map onto the three marking criteria, so completeness belongs to scope and content, user-story format to format, epics and style, and priorities and effort to their own categories. Teams typically produced 20–25 user stories, and backlogs with fewer than 20 had scope or granularity problems. The instrument is the kind of task-specific diagnostic vocabulary [[cs-education]] rarely formalizes: a checklist an instructor can hand to a team before marking, not after.

## Where teams lose marks

The five challenges observed in more than 30% of teams are a profile of novice requirements work. Priority misunderstanding led at 81% of Bachelor's and 67% of Master's teams, and it took two forms: reading "low priority" as necessary-but-not-urgent, and ignoring the elicitation notes in favor of the team's own assumptions. Scope followed, with out-of-scope stories added from assumptions and low-priority functions omitted. Effort estimation was less often absent than implausible: nearly every team supplied story points, but many assigned the same number to similar items while ignoring code reuse or workflow dependencies, and 34% of Bachelor's and 25% of Master's teams produced estimates the markers judged unrealistic. Readability and user-story format failures clustered around wordiness, mixed personae ("I want to", "I would like to") and missing or tautological "so that" clauses, which the author traces to backlogs assembled from separately written parts without a collaborative editing pass. Because many Master's students already had industry experience, the author treats their performance as a reasonable approximation of junior developers, which is what makes the profile relevant to [[professional-training]] as well as to [[higher-ed|coursework]].

## What the workshop did and did not show

In Semester 2 2024 the checklist was taught in a Week 7 workshop, with the assignment due in Week 8. Of 59 teams that semester (33 Bachelor's, 26 Master's), eight Bachelor's and five Master's had no member attend. Attending Master's teams made mistakes in 1.67 categories against 2.6 for absent teams, a 35.90% difference, and their mistake types fell by 48.81%; attending Bachelor's teams made mistakes in 2.52 categories against 3.13, 19.49% better, with a 25% reduction in mistake types. The author labels these descriptive differences, and the design supports no more: attendance was not randomized, teams chose whether to attend, and the same semester supplied both groups. No new codes appeared in the post-workshop feedback, which is the stronger signal — the taxonomy had stabilized — but it says nothing about whether the checklist caused the improvement. Read as [[scaffolding]] for a complex deliverable, the workshop is a plausible mechanism, and the honest claim is that a one-session introduction tracked with fewer recorded mistakes among teams that showed up.

## The GenAI comparison

Five models were run on the same four elicitation notes: GPT-4.0 Turbo, GPT-6.1 Sol Medium, Gemini 2.0 Flash, Gemini 3.5 Flash-Lite-High and Val, a version of GPT-4.1 mini refined with university-specific safety requirements. Prompting was deliberately zero-shot, on the argument that a low-performing student could not deploy chain-of-thought and that guided prompting would mimic a junior developer with a senior colleague. Item counts separated the models before quality was judged: GPT-4.0 Turbo produced 18–27 items and performed near the average team, Gemini 2.0 Flash produced 17–37 including non-story items, and Val produced 9–14 while missing seven functionalities in one case study. GPT-6.1 Sol Medium produced 26–33 items with low granularity and few mistakes, and the author reports it outperformed the teams except for including too much detail in user stories — the part of [[human-ai-collaboration|delegation]] that still needs a reviewer. Every other model left top-priority work as large epics more often than the teams did — a reversal worth noting, since only 7% of teams had epic-related issues. For [[assessment-validity|validity]], the implication is that a take-home backlog assignment no longer distinguishes a student who understands requirements from one who can prompt, and the author's response is [[authentic-assessment|in-class team assessment]] plus taught prompting as part of the [[curriculum-design|curriculum]].

## What this means for practice

- **Instructors.** Give teams the 17-item checklist before the assignment and require each priority to be justified against the elicitation notes; priority misunderstanding was the single most common failure at 81% of Bachelor's teams.
- **Curriculum designers.** Move backlog specification into scheduled class time and assess the prompting as well as the artifact, because a zero-shot model now produces a backlog the paper rates above the average team.
- **Professional trainers.** Use the checklist in [[career-development-and-readiness|junior-developer onboarding]]; the Master's cohort's performance is the paper's proxy for early-career developers, and the five major challenges are the ones to review first.
- **Researchers.** Replicate the model-versus-team comparison with blind raters and more than four elicitation notes; the comparison sets a checklist against a rubric and depends on one coder.

## Limitations

- The study is one Agile/Scrum course at one university, and the GenAI experiments used four elicitation notes, so the model comparison rests on a narrow task set.
- Coding and classification were done by the author, who is also the course coordinator, so the coding rests on one person, and the analysis works from marking feedback rather than from student submissions.
- Model and team results were judged through different procedures — the checklist for models, the marking rubric and feedback for teams — which the author argues are aligned but not methodologically identical.
- GPT-4.0 Turbo, Val and Gemini 2.0 Flash were run once per prompt per case study; only GPT-6.1 Sol Medium and Gemini 3.5 Flash-Lite-High were run three times, and issues were counted if they appeared in any run.
- The workshop comparison is descriptive: eight Bachelor's and five Master's teams of the 59 were entirely absent, attendance was self-selected, and the paper does not rule out other reasons for the difference.

## Citation

Spichkova, M. (2026). [*Does GenAI Perform Better than Students and Novice Software Developers in Agile/Scrum Requirements Engineering Tasks?*](https://doi.org/10.3390/educsci16111923). *Education Sciences*, 16(11), 1923.
