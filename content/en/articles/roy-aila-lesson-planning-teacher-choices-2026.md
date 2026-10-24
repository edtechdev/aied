---
title: "Lesson planning using AI lesson assistant, Aila - A Teacher Choices Trial"
created: "2026-10-24T09:54:00-04:00"
updated: "2026-10-24T09:54:00-04:00"
type: article
authors: [Palak Roy, Helen Poet, Ruth Staunton, Katherine Aston, David Thomas, Ben Styles]
pub_date: 2026-10-01
venue: "Education Endowment Foundation"
url: https://educationendowmentfoundation.org.uk/projects-and-evaluation/projects/aila-teacher-choices-trial
foundations: [teacher-ai-competency, teacher-role, learning-design]
pedagogy: [anxiety-and-stress]
technology: [generative-ai, llm, rag]
methods: [rct, mixed-methods-research]
research_method: [experiment, interviews, survey]
institutions: [educational-policy-ai]
level: [k 12]
audience: [instructors, administrators, researchers]
page_kind: [evaluation]
sources: ['raw/papers/roy-aila-lesson-planning-teacher-choices-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-24"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** An independent [[rct|cluster randomized controlled trial]] funded by the Education Endowment Foundation put Oak National Academy's Aila, a [[generative-ai|generative AI]] lesson assistant, against business as usual for ten weeks in English primary schools. Teachers randomized to Aila spent 2.51 hours a week preparing lessons and resources against 3.32 hours for the comparison group, a fold change of 0.76 (95% CI 0.64 to 0.89, p = 0.001), which is 0.81 hours or roughly 48.6 minutes a week. That saving arrived while Aila was used for only 7% of lessons in an average week, with use falling rather than growing over the ten weeks, and while many teachers said they preferred other tools. The resource quality check found the Aila arm no worse, but this is a non-inferiority claim from 42 scored lessons read by six reviewers whose exact agreement was 8.3%, not evidence that quality held or improved.

## Key Findings

- **Planning time fell by about a fifth, on a small dose.** Adjusted means were 2.51 hours a week (95% CI 2.21 to 2.86) in the Aila group against 3.32 hours (2.90 to 3.79) in the comparison group, a standardized effect size of -0.22 (-0.35 to -0.09) across the 416 teachers with diary data. The trial reads that as Aila-group time being 76% of comparison time, with 64% to 89% as the plausible range.
- **Usage declined instead of settling in.** Some 81% of Aila-assigned teachers used the tool at least once, but it covered 7% of lessons in an average week and both frequency and volume fell across the ten weeks. Teachers who did not adhere used it for 0.6% of lessons, so the low uptake did not dissolve the contrast between arms.
- **Resource quality was tested for non-inferiority, not equality.** An independent panel of six teacher-reviewers scored 42 lessons, 21 per arm, on a 0 to 25 scale, with a pre-declared margin of -2.5. Observed means were 17.7 for Aila against 16.7 for comparison lessons (standardized effect size 0.25), and the non-inferiority test was significant, so the honest reading is that the arm was not meaningfully worse.
- **Reviewer agreement was poor, and unevenly poor.** Exact agreement was 8.3% overall, rising to 50% once a tolerance of plus or minus 2 points was allowed. The intraclass correlation was 0.50 overall but 0.26 in the Aila arm and 0.70 in the comparison arm, which the authors note could mean either heavier reviewer disagreement on Aila lessons or a narrower quality spread among them.
- **The saving concentrated in particular teachers.** Aila-assigned teachers with lower confidence in their subject knowledge, lower pedagogical knowledge, less time in the profession, or higher confidence with technology tended to have lower workload than comparable teachers in the comparison group.
- **Most teachers wanted something else.** They found Aila accessible and aligned to the curriculum, but many preferred [[conversational-ai|general tools]] such as ChatGPT or Copilot, called its output generic or inflexible, and fewer than one in five felt it meaningfully changed their teaching and planning. Teachers also had to adapt what it produced before it was classroom ready.

## The choice the trial actually tested

Recruitment ran from 15,755 primary schools approached in England to 464 teachers in 108 schools, with 232 teachers randomized to each arm at school level on 23 September 2025, after baseline surveys closed. Both arms were free to use other [[generative-ai|generative AI]] tools for planning; the restriction was on downloading new resources from the Oak National Academy website, which is the corpus Aila draws on. That design keeps the comparison honest about Aila specifically and stops it being a test of AI against no AI, since 76% of trial teachers had already used generative AI to support planning before the trial began.

The outcome was a weekly diary of time spent preparing lessons and resources. Diaries are [[self-report-measures|self-report]], and the analysis acknowledges the skew: time data pile up near zero, so the primary model logged the outcome, with a 0.1 offset to keep the zeros, and the reported hours are back-transformed from that scale. Of the 464 randomized teachers, 48 (10.3%) filed no diary at all and dropped out of the primary analysis.

A second layer of the evaluation examined practice. It surveyed teachers, visited five schools, and interviewed 16 teachers online, eight of whom had used Aila, drawing [[qualitative-research|qualitative data]] from 21 teachers across 20 schools. A scoping survey through Teacher Tapp in March 2025, answered by more than 2,500 teachers in English state-maintained primary schools, established the baseline: 35% planned most lessons independently and 29% planned collaboratively, 45% used an AI tool for planning at least a few times a month including 17% weekly, and 90% of trial teachers called planning a source of stress.

## Why a saving this small still matters

The comparison number is the interesting one. The median trial teacher expected to spend six hours a week planning and to plan somewhere between 21% and 40% of those lessons from scratch. Aila is built for the from-scratch case, and the from-scratch case is a minority of the work. A tool that intercepts one part of a six-hour week, used on 7% of lessons, still moved weekly preparation time by nearly three quarters of an hour. For an institution watching workload, that is the argument: the lever does not need to be used much to register.

The trial also compares itself to the earlier EEF trial of ChatGPT for planning, where the ChatGPT group spent 69% as much time as the non-GenAI group. Aila's 76% sits in the same band, so an education-specific tool built on curated curriculum resources did not beat a general chatbot on time. What it might offer instead is [[curriculum-design|curriculum alignment]] and a planning process that pauses for teacher judgment, and that design is precisely why teachers found it slower to use than dropping a prompt into a general chat window.

## Where the evidence stops

The quality finding should not be read as reassurance. A non-inferiority design answers one question, whether the arm is worse than the margin, and 42 lessons scored by six people is a narrow base. The reviewers agreed poorly, and agreement was much worse inside the Aila arm, which means the score comparison rests on a measurement instrument that struggled to reproduce itself.

The workload finding is also about planning time, not about learning. Nothing in the trial measures what pupils gained, and the report is explicit that the time saved did not come with a measured cost or a measured benefit to pupils. Whether a plan that needed adaptation before it was classroom ready produced a different lesson than a plan made another way is outside what was measured.

## What this means for practice

- **Budget for partial adoption, not replacement.** The median teacher planned a fifth to two fifths of lessons from scratch, so a tool aimed at that case will touch a minority of planning even when teachers adopt it willingly.
- **Judge planning tools on time and on quality separately.** A time saving with a non-inferiority result on quality is a different claim from a time saving with better resources, and the margin and the reviewer agreement belong in the procurement record.
- **Read low usage as a design signal.** Use declined over ten weeks while the tool was free and encouraged, and teachers named ease of use and adaptation cost as reasons, so an integration that adds steps will lose ground to a general chatbot.
- **Watch who benefits.** The larger reductions landed with less experienced and less confident teachers, which makes targeted support plausible and also means an average effect understates the spread.

## Limitations

- Reviewer agreement was poor on the pre-specified metric, and the alternative metrics the authors report afterwards were not pre-registered, so the reliability question is only partly answered.
- Ten percent of randomized teachers filed no diary, and endpoint and longitudinal survey response fell to 67% and 48%.
- The setting is English primary schools in Key Stage 2 over ten weeks in one autumn term, with volunteers who answered a recruitment approach, so the teachers are not a random sample of the profession.
- Planning time was self-reported in a weekly diary, and diary completion itself is an effort that may interact with the workload being measured.
- Quality was scored on 42 lessons, and the trial reports no pupil outcome.

## Citation

Roy, P., Poet, H., Staunton, R., Aston, K., Thomas, D. and Styles, B. (2026). [*Lesson planning using AI lesson assistant, Aila - A Teacher Choices Trial: Evaluation report*](https://educationendowmentfoundation.org.uk/projects-and-evaluation/projects/aila-teacher-choices-trial). London: Education Endowment Foundation. Published under the Open Government Licence v3.0.
