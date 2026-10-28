---
title: "When AI Can Build It, What Should We Assess? Rethinking Evidence of Engineering Competence"
created: "2026-10-28T12:00:00-04:00"
updated: "2026-10-28T12:00:00-04:00"
type: article
authors: ["Shakiba, A."]
published: "2026-10-27"
venue: "arXiv preprint"
source_url: https://arxiv.org/abs/2610.36413
foundations: [ai-education]
pedagogy: [project-based-learning, collaborative-learning]
technology: [generative-ai, llm]
assessment: [assessment-validity, process-oriented-assessment, evaluative-judgment]
methods: [design-based-research, ai-ed-evaluation]
ethics: [ai-use-disclosure]
research_method: [design and evaluation study, case study]
discipline: [engineering education, cs education]
level: [graduate, higher ed]
audience: [instructors, assessment designers]
page_kind: [framework]
sources: ['raw/papers/shakiba-ai-engineering-competence-assessment-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
---

> **Synthesis:** Shakiba (2026) reports the redesign and first deployment of a 13-week, AI-permissive, software-intensive postgraduate engineering course, built on the premise that a correct artifact no longer evidences the capability behind it. Rather than restricting AI or detecting its use, the course permits substantial delegation while reserving planning, verification, review, integration and explanation for students, structured by a six-stage accountability workflow and an assessment evidence architecture with six complementary channels — product, process/origin, verification, explanation, reflection and individual assurance — interpreted through a collect-cross-check-escalate logic. By Week 11 the deployment covered 87 students in 17 teams, supported by 957 individual weekly repositories and 34 group repositories. The author's four lessons are candid: AI shifts where rubric criteria carry evidential weight, multiple channels do not cross-check themselves, designed evidence strength can exceed what is realized, and automation scales collection far more readily than interpretation. It is a single-course design study with no comparison condition, so it offers a [[assessment-validity|validity-oriented design pattern]] rather than proof that competence was better measured.

## Key Findings

1. **Artifact quality stops being sufficient evidence.** When AI generates code, tests and documentation, a correct submission no longer shows a student can reason about, verify or defend the engineering work inside it.
2. **Human decision authority sits at named boundaries.** The workflow runs Frame, Delegate, Inspect, Verify, Review, Integrate: AI may draft plans and modify code in forks, while students approve scope, judge verification and authorize integration.
3. **Six evidence channels support different inferences and carry different limits.** Product, process/origin, verification, explanation, reflection and individual assurance are distributed across the course, and none is treated as sufficient on its own.
4. **AI shifts evidential weight within the rubric.** Criteria acting as quality floors — installability, repository organization, basic structural separation — became easier to satisfy, while integration, failure diagnosis and trade-off justification still separated students.
5. **Some channels carried less evidence than designed.** The demonstration's two-minute Q&A usually allowed one student to answer, yielding team-level explanation rather than individual assurance, and cross-channel triage rested on assessor judgment.
6. **Evidence channels were partly correlated.** Students could use AI for code, journal entries, reflective writing and prepared explanations, so six channels did not yield six independent sources; independence requires genuinely different capabilities.

## The redesign, and why it inverts the usual response

The vehicle is ELEC5308: Intelligent Information Engineering Practice, a 13-week postgraduate unit at the University of Sydney. Its application domain is autonomous systems, but the work is software-intensive throughout — modular Python systems, version control and pull requests, CI pipelines, testing and profiling, and integration of perception, localization, control, planning and learning components — which is what makes it a fair test of [[engineering-education|engineering education]] under [[higher-ed|AI-permissive conditions]].

Detection has a weak evidentiary basis at the point that matters: a reliable estimate that AI contributed to an artifact does not establish whether a student understood, verified or could defend the decisions embodied in it. Authorship and competence are separate questions, and the paper treats the gap as one of [[assessment-validity|assessment validity]] rather than [[academic-integrity|academic integrity]] alone. That framing drives the design choice: permit delegation generously, then make responsibility visible where [[evaluative-judgment|engineering judgment]] is actually exercised.

Two structural features carry this. Assignments 1 and 2 are deliberately open-ended [[project-based-learning|project work]] with rubrics published in advance, and Assignment 2 must extend, refactor or deploy the Assignment 1 baseline — a fresh start is prohibited, approximating brownfield development where earlier decisions remain consequential. Reproducibility is operationalized as a hard threshold: a new user must clone the repository and run the demonstration within 15 minutes, and failure is penalized in the relevant rubric criteria.

## What the six channels actually captured

The architecture separates what was produced from how it came about. Product evidence covers code, models, reports and the integrated system; process/origin evidence covers commits, forks, pull requests and [[peer-assessment|peer review]] together with AI Journal records embedded in commit bodies through a Visual Studio Code extension, which ties declared AI activity to a timestamped point in repository history. Verification covers unit tests, CI pipelines, autograder results and the reproducibility check. Explanation covers weekly stand-ups and demonstrations — formative rather than separately marked; reflection is individually marked and grounded in Git evidence; individual assurance rests on milestones, quizzes, targeted [[oral-assessment|oral follow-up]] and a supervised final examination.

The weights reflect that mix: 5 percent early-feedback quiz, 10 percent weekly quizzes, 5 percent individual weekly milestones, 20 percent for Assignment 1, 30 percent for Assignment 2, and 30 percent for the supervised examination, with a hurdle requiring at least 30 percent of the examination marks to pass. Stand-ups ran from Week 4, typically about 10 minutes per team and sometimes past 20, recorded as supporting evidence rather than marks.

## What the deployment taught about evidence

The most useful lesson is that AI does not raise the difficulty of everything equally. It compresses the criteria that function as floors and leaves the ones that require judgment intact, so a rubric weighted for pre-AI conditions can let higher artifact quality dominate a mark without showing capability. Shakiba revised the Assignment 2 rubric to weight integration quality and improvement over the baseline, and to require explicit evidence of integration-stage decisions: what AI-generated components needed adaptation, what was verified before integration, and what was rejected.

The second lesson is organizational. At 87 students, evidence collection was largely automated — repository provisioning through the GitHub API, autograding, repository-analysis tools summarizing commits, reviews and contribution distributions — but relating channels to each other stayed manual and attention-intensive. The coordinator reviewed repository activity weekly and triggered targeted intervention in three instances; tutors were not resourced to prepare comparably. This is the practical argument for treating interpretive capacity, not tooling, as the binding constraint on [[process-oriented-assessment|process-rich assessment]].

## What this means for practice

- **Instructors.** Move rubric weight onto what AI cannot supply for the student: integration, diagnosis, verification adequacy and the justification of trade-offs. Quality floors such as installability became easier to satisfy and no longer discriminate.
- **Instructors.** Budget contact time for oral assurance before you claim it. A two-minute Q&A after an eight-minute demonstration produced team-level explanation evidence, not individual evidence, because only one student could answer.
- **Assessment designers.** Design channels to be independent, not merely numerous. If code, journal entries, reflections and prepared answers can all be produced by the same [[agentic-ai|agentic workflow]], they corroborate each other by construction.
- **Administrators.** Fund the interpretation stage when you fund the tooling. Repository automation made 957 individual repositories manageable; cross-channel comparison and escalation remained the expensive part and concentrated in one coordinating role.

## Limitations

- This is a single offering of a postgraduate, software-intensive course at one institution, with a favorable technical setting — Git workflows, automated assessment infrastructure and substantial coordinator involvement — so transferability is claimed at the level of design principles.
- There is no comparison condition and no student-level learning outcomes, marks or longitudinal behavior are analyzed; the paper supports claims about designing and operating the assessment system, not about improved learning.
- The six channels and CCE logic are a design decomposition, not a validated measurement model, and evidence collection was operationalized course-wide while cross-channel escalation was not implemented through defined triggers.
- Visible mechanisms may shape behavior: AI-use records, repository activity and reflections can become compliance-oriented once students know the traces are assessed.

## Citation

Shakiba, A. (2026). [*When AI Can Build It, What Should We Assess? Rethinking Evidence of Engineering Competence*](https://arxiv.org/abs/2610.36413). arXiv preprint arXiv:2610.36413.
