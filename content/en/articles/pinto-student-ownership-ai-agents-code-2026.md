---
title: "Is This Code Mine? Student Ownership When AI Agents Write the Spec and the Code"
created: "2026-11-21T09:31:10-05:00"
updated: "2026-11-21T09:31:10-05:00"
type: article
published: "2026"
discipline: [cs education]
foundations: [agency, academic-integrity, cognitive-offloading, agentic-ai]
pedagogy: [self-efficacy, project-based-learning, student-ai-interaction]
technology: [vibe-coding, generative-ai, llm, prompt-engineering, human-in-the-loop-ai, learning-analytics]
assessment: [process-oriented-assessment, self-report-measures, authentic-assessment, oral-assessment]
methods: [mixed-methods-research, quantitative-research, qualitative-research]
research_method: [case study, survey, thematic analysis]
audience: [researchers, instructors, faculty developers]
level: [higher ed, undergraduate]
page_kind: [evaluation]
sources: ['raw/papers/pinto-student-ownership-ai-agents-code-2026.md']
confidence: medium
evidence_context: educational
source_depth: full text
source_url: "https://arxiv.org/abs/2611.21501"
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-21"
    agent: hermes-agent
connected_concepts: [cs-education, agentic-ai, human-in-the-loop-ai, prompt-engineering, learning-analytics, agency, self-efficacy, process-oriented-assessment]
connected_articles: []
---

> **Synthesis:** Pinto, de Freitas and Ribeiro ask whether students still own software when an AI coding agent writes both the code and the specification meant to keep the human in control. In the first assignment of an elective course on AI-assisted software development, 18 pairs had to publish a 100,000-line application under spec-driven development: every specification dated before its code, every prompt recorded, every commit declaring its agent and specification. The authors mined all 18 repository histories and surveyed 33 of the 36 students who delivered. Agents committed 69% of the 277 specifications and 76% of the 1,051 commits; students credited themselves with half the ideas but a fifth of the code, and most could neither explain nor modify it without the agent. Perceived ownership tracked how much of the generated code students read, not anything recorded in the repositories, and self-reports did not match commit trailers. Three teams met the size target with unused generated code, one rewriting its history. The study is one course at one university with trailer-based attribution, so it describes patterns rather than effects.

## Key Findings

- **Agents wrote the specification.** 191 of 277 specifications (69%) were added by commits attributed to an agent; 3 (1%) were declared handwritten and 83 (30%) undeclared.
- **Ideas are mine, code is the agent's.** Students claimed a median of 50% of the ideas but 20% of the final code; 14 of 33 attributed at most 10% of the code to themselves.
- **Knowledge lagged ownership.** Only 27% agreed the code was truly theirs; 58% could not explain any part to a colleague and 55% could not modify it without the agent, while 45% had read at most a fifth of the generated code.
- **Ownership did not track the record.** No mined measure — agent commit share, agent-written specifications, recorded sessions or traced lines — was associated with ownership; it tracked self-reported reading and confidence.
- **Self-reports did not match commits.** Among respondents whose commits declare their origin, claimed code share was unrelated to the share carrying a hand-edit marker; 11 never declared one yet claimed a median 20% of the code.
- **Gaming was cheap.** The three projects reaching 100,000 lines accounted for 69% of all code delivered, used generated code the applications never ran, and one rewrote its history to backdate specifications.

## The assignment and its evidence base

The setting is an elective [[cs-education|computer science]] course on building software systems with [[agentic-ai|AI coding agents]] as the main working tool: students specify, direct, review and test what agents produce and answer for it. The course runs one semester, 60 hours, enrolls 48 students, works in pairs and makes agents mandatory. The first assignment, released September 29, 2026 and worth 30% of the grade, asked each pair to build a non-trivial application under spec-driven development. It required a public URL, at least 100,000 lines counted with cloc excluding dependencies and artifacts, a dated specification per part written before the code it describes, and every prompt recorded with its tool and model. Specifications stated what is built and why, listed acceptance criteria and named what was out of scope; a change of direction required a new dated file. Commits carried two trailers, Agent: and Spec:.

The authors cloned the full history of the 18 repositories delivered, parsed the session exports (87 of 109 files) and computed counts with scripts. They also surveyed the 36 students who delivered, receiving 33 responses from all 18 teams (92%) on demographics, prior experience, attributed shares of ideas and code, generated code read, hours and 38 Likert statements. The questionnaire came from research on ownership in AI-assisted writing; open answers were coded inductively and reviewed until consensus. This [[learning-analytics|repository-mining]] study depends on conventions being followed, which happened unevenly.

## Who wrote the specification

Spec-driven development assigns the specification to the human and the code to the agent; the [[human-in-the-loop-ai|human-in-the-loop]] premise is that the specification is what the person owns. Across the 18 repositories the authors found 277 specifications, 261,353 words, median 544 each. Of these, 191 (69%) were added by commits attributed to an agent, 3 (1%) by commits declared handwritten and 83 (30%) by commits declaring nothing. Undeclared does not mean handwritten: MediaPlay's four trailerless specifications were generated by the agent. Agent-written specifications were also the most complete: 91% had acceptance criteria against 73% of undeclared ones, were longer (median 677 against 197 words) and less often unimplemented (12% against 69%). The [[prompt-engineering|prompts]] show how little some needed: 27 prompts in 8 projects asked the agent to write a specification, median 120 words, from four words to detailed instructions; one Finances prompt of 66 words asked for "a spec in SPEC/ for each part".

Structure was mostly followed: 91% state what is built and why, 85% state what is out of scope, 86% list acceptance criteria (3,102 total). Exceptions were concentrated — BookIt lists criteria in fewer than half its specifications, CourtAuctions writes documents organized by layer, and 13 of KapiTrace's 17 specifications are "Details will be added here" placeholders committed on the first day. Traceability was partial: among 15 computable projects, 53% to 90% of specifications named in trailers preceded their code; 71% were referenced by a commit; 14% arrived in the same commit as the code; only 12% were edited after implementation began; only 39% of added lines came from commits pointing to a specification.

## Ownership, knowledge, and what the record shows

Ownership of the code was divided (mean 3.29): 27% agreed it was truly theirs and 48% disagreed, yet 52% said it reflected their own ideas, 52% that they chose its main decisions and 52% would put it in their portfolio. Five students said the code reflected their ideas while denying it was theirs, and four would portfolio a project they did not feel was theirs — the AI ghostwriter pattern. Students claimed a median of 50% of the ideas but 20% of the code; 14 (42%) attributed at most 10% of the code to themselves and 5 none. They read little of what the agent wrote — a form of cognitive offloading: the median share read before committing was 30%, and 15 (45%) read at most a fifth.

Ownership of the specification and application was similar (mean 3.27); only 33% agreed the specification was truly theirs, consistent with agents committing most of them. Knowledge of the code was lowest (mean 2.71): 58% could not explain any part to a colleague, 61% did not know where each feature sat and 55% could not modify it without the agent, though 52% felt responsible for its defects. The [[agency|agency]] students reported was real but thin: they felt answerable for defects they could not fix.

What predicted ownership was self-report — the shares of ideas and code students attributed to themselves, the share of generated code they read, and their [[self-efficacy|self-efficacy]] with programming and AI tools. No mined measure correlated with any ownership construct: not agent commit share, agent-written specifications, recorded sessions, traced lines or the respondent's own commit share. Those measures describe the team, not the student. Within pairs, the member who drove the agent more reported higher ownership in 10 of 14 pairs, but not better knowledge.

## Gaming the line target

Only three projects reached 100,000 lines — Trim (201,848), UmbraTrail (196,302) and DeliveryFast (137,733) — together 69% of all code delivered, and exactly the three where the audit found generated code the application never uses. DeliveryFast's gerador.py wrote a 24,999-entry array and seven files with 3,999 functions each, 136,991 of its 137,733 lines (99.5%); the application references none of them and its real code is 742 lines. The recorded session shows the student asking "I need 100k lines of code. What do I have to do?" and the agent proposing automated generation, then scaling it from 1,500 to 4,000 functions per file. Trim's script wrote 13 test files with 1,000 tests each that import no application code and account for 97% of its lines; no session was recorded. UmbraTrail generated 920 template-cloned content files imported by nothing, after the agent warned such numbered files would be artificial inflation. That team asked the agent for specifications "created from the first day of commit in the repository"; GitHub's activity log shows a backup branch, two force pushes and a deleted branch, the original history holding 39 commits and no specification.

The incentive and the decisions were the students'; agents lowered the cost to a prompt. Without the filler only one project reaches 100,000 lines and total delivered code falls by about half, from 781 to roughly 380 thousand. A line target measures what an agent is cheapest at producing, so the authors argue for scope targets and for grading what agents do not provide for free.

## What this means for practice

- **Teachers.** Require a first specification draft committed by the student before any agent edits it; 69% of the specifications here were committed by an agent.
- **Instructors.** Replace size targets with scope targets — the number of features whose acceptance criteria are demonstrably met — because a line count can be met with code that does nothing.
- **Assessment designers.** Move process rules from honor to tooling: have agents add trailers and let continuous integration reject commits without a specification.
- **Faculty developers.** Make specifications change midway, so students write a new dated specification, decide what it replaces, and see whether the agent follows it.
- **Researchers.** Pair output with [[process-oriented-assessment|process assessment]]: short oral checks asking students to locate a feature or explain a recorded decision are cheap and hard to fake.

## Limitations

- One elective course, 18 teams, 33 respondents; students who chose it may be more enthusiastic about AI than their peers, and tools evolve quickly.
- Attribution relies on commit trailers, co-author lines and bot authors; undeclared commits may also be agent-produced, so counts are lower bounds.
- Ownership is self-reported and answered for the instructor, which may induce socially desirable answers; with 18 teams the correlational analyses are exploratory and uncorrected for multiple comparisons.
- Gaming detection uses heuristics for templated and cloned code, so varied filler would escape it, and finding rewritten histories depends on the hosting platform's activity record.
- Session exports vary by tool: 22 of 109 could not be parsed and some are summaries, so prompt counts are lower bounds; specification-first could not be computed for three projects.
- The 100,000-line target and one-week deadline are unusual, so the gaming may not transfer.

## Citation

Pinto, G., de Freitas, E. R. S., & Ribeiro, D. M. (2026). [Is This Code Mine? Student Ownership When AI Agents Write the Spec and the Code](https://arxiv.org/abs/2611.21501). *arXiv preprint*. arXiv:2611.21501.
