---
title: "Let's Chat: Leveraging Chatbot Outreach for Improved Course Performance"
created: "2026-09-28T05:55:00-04:00"
updated: "2026-10-01T20:36:14-04:00"
type: article
sources: ['raw/papers/chatbot-outreach-course-performance-2026.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [experiment]
level: [undergraduate, higher ed]
audience: [instructors, administrators, researchers]
foundations: [ai-education]
pedagogy: [student-engagement]
technology: [conversational-ai]
assessment: [learning-gains]
methods: [rct, quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-28"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Meyer and colleagues report a pre-registered, multi-semester randomized controlled trial of a non-generative text chatbot that sent two to three customized messages a week in two large, asynchronous online [[higher-ed|undergraduate]] courses at Georgia State University (GSU). Pooled across Introduction to American Government (*N* = 1,568) and Principles of Microeconomics (*N* = 915), treated students were four percentage points more likely to earn an A or B (61% of controls) and about two percentage points more likely to attend supplemental instruction tutoring. Effects held across most demographics except one: treated women in Microeconomics earned final grades seven points higher than control women.

## Key Findings

- **Higher final grades at the A/B threshold.** Pooled, treated students were four percentage points more likely to earn an A (36% of controls) and four points more likely to earn an A or B (61% of controls). After multiple-comparison correction, earning a B or higher remained significant (adjusted *p* = 0.090); the pooled numeric grade effect (+1.58 points) was not significant.
- **Completion effects differed by course.** Treated Government students were three percentage points less likely to DFW relative to 18% of controls, mostly from a two-point, not significant D-or-F decline; treated Microeconomics students were three points less likely to drop relative to 8% of controls.
- **One demographic exception.** Treated women in Microeconomics earned final grades seven points higher than control women (control women averaged 68.9, men 70.5) and were 11 points more likely to earn a B or higher, 10 points more likely to earn a C or higher, and six points less likely to drop; there were no effects for men.
- **Tutoring as a plausible mechanism.** Treated students were about two percentage points more likely to attend supplemental instruction against low baselines (7% in Government, 2.4% in Microeconomics); mediation put tutoring's indirect effect on final grade at about 0.32 grade points (*p* = 0.041; 17.8% of the total effect).
- **Assignment completion in Microeconomics.** Treated students were five percentage points more likely to complete practice quizzes (worth 15% of the grade) and earned practice quiz grades 3.59 points higher; for women, assignment completion explained 48–73% of the total grade effect.
- **Students welcomed it, but optional tool use was modest.** About 90% of treated Government respondents recalled the messages, 72% read most, 64% found them helpful, and 82% recommended expansion; 65% knew of #quizme, only 38% used it.
- **Engagement ran close to plan, with no spillover.** Over 98% of treated students received at least one message, roughly 44–46 over the semester; 4% (Government) and 3% (Microeconomics) opted out, and about half ever replied, more in Government (54%). Treatment did not shift term GPA, other-course credits, or next-term enrollment in the subject.

## Method and Evidence

This is a pre-registered [[rct|randomized controlled trial]] with intent-to-treat estimation, registered under Registry ID 8160 (Government) and Registry ID 13760 (Microeconomics) with the Registry of Efficacy and Effectiveness Studies. Students who consented to GSU texts were randomized each term, with a second wave during add/drop. The pooled analytic sample is 2,483 students — 1,568 in Government (fall 2021, spring 2022, fall 2022) and 915 in Microeconomics (2022-23). Effects come from regression models with baseline covariates, fixed effects for course, instructor, and term, and robust standard errors; the pre-registered minimum detectable effect size was about 0.157.

GSU is a public research university in Atlanta enrolling more than 52,000 undergraduates; 63% of students identify as Black, Hispanic, or of two or more races, and 53% receive Pell grants. Treatment students received 2–3 scheduled texts weekly (about 40 over the semester), personalized and targeted from course performance data and a content knowledge base built with university administrators; low-confidence queries went to the course teaching assistant, whose replies updated the knowledge base. Government also had a #quizme function Microeconomics lacked. Outcomes come from deidentified gradebooks, learning management system and administrative records, Mainstay message logs, and a Government-only end-of-course survey.

## What this means for practice
- [[student-support-and-success|Course-specific outreach]] can close information gaps in large or online courses: the intervention worked through reminders, performance feedback, and invitations to ask questions rather than by teaching content, and the authors treat message customization — targeted by whether a student had a missing assignment or was current on coursework — as the active ingredient, contrasting it with generic due-date notices.
- Use a trusted sender: encouragement messages were signed by the course teaching assistant, who also handled flagged questions and kept the knowledge base current, creating a low-stakes route to [[help-seeking|help-seeking]].
- Budget for human oversight and for piloting: the assistant reviewed responses daily, monitoring settled under two hours per week after the pilot, and a pilot semester was crucial to building the knowledge base — GSU's existing contracts and staff experience lowered the marginal cost, and the university now runs the tool as status quo.
- Women in economics may be a priority population: the authors tie the Microeconomics results to women's underrepresentation in the field, framing proactive communication as a route toward [[equity-in-ai-education|greater equity]].

## Limitations
- The paper contradicts itself in places: the abstract says messaging "increased students' final grades" although the pooled numeric grade effect was not statistically significant, and the introduction reports women in Microeconomics as 10 percentage points less likely to DFW while the results tables report a 10-point rise in earning a C or higher and a four-point DFW drop.
- Mechanisms remain suggestive: assignment-completion effects are null in Government and only marginal in Microeconomics, mediation leaves most of the effect unexplained, and GSU could not supply on-time assignment or reading data, so the study substituted ever completing assignments for the pre-registered timing measure.
- Survey evidence is thin and treatment receipt unclear: about half of Government students responded, response rates skewed by demographics, and no survey ran in Microeconomics, while receipt of treatment was not cleanly observable so no treatment-on-treated analysis was run — with only two large online courses at one institution, [[differential-effects-across-learner-groups|effects may not generalize]].
- Course gains did not build transferable habits: no within-term spillover or medium-term effects emerged.

## Citation

Meyer, Katharine, Lindsay C. Page, Catherine Mata, Eric N. Smith, B. Tyler Walsh, C. Lindsey Fifield, Michelle Tyson, Amy Eremionkhale, Michael Evans, Shelby Frost, and Eye Eoun Jung. (2026). [Let's Chat: Leveraging Chatbot Outreach for Improved Course Performance](https://doi.org/10.26300/es6b-sm82). EdWorkingPaper No. 22-564. Annenberg Institute at Brown University. Version: June 2026.