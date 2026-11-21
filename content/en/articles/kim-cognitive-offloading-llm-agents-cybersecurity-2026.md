---
title: "Cognitive Offloading with Large Language Model Agents in Cybersecurity Education: Perceived Burden and Engagement in a Single-Cohort Study with Ten-Year Institutional Context"
created: "2026-11-21T09:37:00-05:00"
updated: "2026-11-21T09:37:00-05:00"
type: article
published: "2026"
discipline: [cs education]
foundations: [cognitive-offloading, learning-design, agentic-ai]
pedagogy: [project-based-learning, active-learning, collaborative-learning, bloom-taxonomy]
technology: [generative-ai, llm, vibe-coding]
assessment: [peer-assessment, self-report-measures, authentic-assessment]
methods: [quantitative-research]
research_method: [survey, case study]
audience: [researchers, faculty developers, instructors]
level: [higher ed, undergraduate]
page_kind: [evaluation]
sources: ['raw/papers/kim-cognitive-offloading-llm-agents-cybersecurity-2026.md']
confidence: medium
evidence_context: educational
source_depth: full text
source_url: "https://doi.org/10.3390/app162211343"
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-21"
    agent: hermes-agent
connected_concepts: [cognitive-offloading, vibe-coding, project-based-learning, agentic-ai, bloom-taxonomy, student-engagement, peer-assessment, automation-bias]
connected_articles: []
---

> **Synthesis:** Kim asks whether handing system construction to a [[llm|large language model]] agent changes what learners perceive and do in practice-based cybersecurity education. Within the 2026 cohort (34 enrolled) of a university web-security course, the study combines retrospective final-course surveys from 27 respondents, weekly build-time logs from 25 students, peer cross-evaluations (71 ratings across eight teams), and nine years of institutional satisfaction records used only as context. Nearly all respondents agreed that implementation burden had decreased and that a lighter coding workload let them engage more deeply in vulnerability analysis and defense design; logged coding time was low, peers rated the appropriateness of AI-tool use highest among five criteria, and the 2026 satisfaction score ranked second of nine records. There is no comparison group, no achievement outcome, and only single-item retrospective measures with a strong ceiling effect, so the evidence supports perceived burden and reported engagement in one cohort rather than improved learning.

## Key Findings

- Delegating construction to an LLM agent was associated with lower perceived implementation burden: 26 of 27 final-course respondents agreed or strongly agreed that burden had decreased, and median total logged coding time across 25 students was 3.8 hours.
- Reported engagement moved with it: 25 of 27 respondents agreed or strongly agreed that a reduced coding workload let them immerse themselves more deeply in vulnerability design and attack/defense practice.
- Peers judged AI use to be appropriate. The criterion on the appropriateness of AI-tool use received the highest mean rating of the five peer cross-evaluation criteria, at 8.65 of 10 points.
- Effort fell to a narrow band. Logged totals ranged from about 0.03 to 22.1 hours with a mean of 6.5 hours; sessions averaged 84.0 minutes and 14.5 AI prompts.
- Baseline worry preceded the intervention. Before the term, respondents rated the anticipated burden of building a service from scratch at 68.6 on a 0–100 scale and their baseline web-development and security competence at 53.5.
- Satisfaction was high but only descriptively comparable. The 2026 course scored 91.55 on the institutional quality survey, second of nine annual records and 6.1 points above the 2017–2024 mean of 85.4.
- Nothing here measures learning. There is no comparison group, no objective achievement outcome, and no delayed transfer measure, so the findings describe perceptions and satisfaction inside one cohort.

## The model: prompt-built systems, then audit and attack

The course keeps the shape of [[project-based-learning|project-based learning]] but moves construction out of the learner's hands. In Phase 1, students specify a system in natural language and an [[agentic-ai|AI agent]] builds the target web service; they then apply a secure-coding audit checklist covering input-validation routines and parameterized queries before proceeding, submitting a prompt log and a build report. Phase 2 casts each team as Red Team, attacking a matched team's system with OWASP-based vectors and producing an attack-diagnosis report. Phase 3 switches to Blue Team: learners detect attack packets in real time, trace paths through Wireshark and system logs, patch vulnerabilities with AI assistance, and write a defense-diagnosis report. Phase 4 collects the final-course survey, while archiving code through GitHub pull requests is optional. As of the deadline the course repository held 20 pull requests (19 open, 1 closed), which the author does not treat as outcome data.

The rationale draws on [[cognitive-offloading|Cognitive Load Theory]]: working memory is limited, and effort spent on syntax and infrastructure is extraneous load that competes with vulnerability analysis. Delegation is meant to free attention for the higher-order strata of [[bloom-taxonomy|Bloom's Revised Taxonomy]], analysis and evaluation, realized as Red/Blue cross-team training. The mechanism is [[vibe-coding|vibe coding]] under Human-on-the-Loop control, where the agent takes responsibility for generation while the learner supervises and audits. The design is explicitly built against [[automation-bias|complacency]]: a purely supervisory role can degrade skill unless the supervisory task itself demands active engagement, so the audit checklist, cross-attack, and packet tracing keep the learner working on code they did not write.

## What the 2026 cohort reported

Both hypotheses were tested on the final-course items against the neutral midpoint. Agreement that vibe coding had reduced the psychological burden and time of building averaged 4.67 of 5 (SD = 0.55, 95% CI [4.45, 4.89]); 26 of 27 respondents agreed or strongly agreed, and every non-tied response lay above the midpoint (Wilcoxon V = 351, p < 0.001). On the institution's converted scale the mean was 93.7 (SD = 10.1). Agreement that reduced burden allowed deeper immersion in vulnerability design and attack/defense practice averaged 4.44 (SD = 0.64); 25 of 27 agreed or strongly agreed, and the converted mean was 89.6 (SD = 11.3). Distributions were skewed upward: the burden item drew 19 strongly-agree responses and the engagement item 14, with no respondent choosing either disagreement option. Both items are retrospective self-reports with a pronounced ceiling effect, and the burden item combines burden and time while presuming improvement, so they indicate direction and consistency rather than magnitude. That is the honest reading of the [[student-engagement|engagement]] result too.

Logs give context rather than confirmation. Across 25 students with usable entries, total logged coding time had a median of 3.8 hours (interquartile range 2.0–11.0; mean 6.5, SD = 6.3; range 0.03–22.1). Sessions averaged 84.0 minutes (median 58, SD = 80.5) and 14.5 AI prompts (SD = 15.5). Before the term, respondents had already rated the anticipated burden of building a service from scratch at 68.6 (SD = 20.4) and worry that coding would displace security-analysis time at 62.8 (SD = 21.1); baseline competence averaged 53.5 (SD = 16.8). Because the pre- and final-course items are worded differently, they are not a paired comparison.

## Peer judgment and institutional context

Peers rated deliverables on a 60-point [[peer-assessment|cross-evaluation]] instrument with five criteria; the 2026 version added a criterion on the appropriateness of AI-tool use. Ratings averaged 50.46 of 60 (SD = 9.59) across 71 ratings from 27 raters on eight projects, with project means from 37.0 to 53.1. The AI-use criterion was the highest-rated at 8.65 of 10 (SD = 1.66), above required features (16.99 of 20), originality (8.27 of 10), additional features (8.17 of 10), and expert attack-path reasoning (8.39 of 10). These are within-cohort judgments, not independent measurements, and no comparable peer data exist for earlier offerings. Institutional Course Quality Improvement records provide context only: the 2026 score of 91.55 was second of nine available annual records, marginally below the 2024 peak of 91.67 and 6.1 points above the 2017–2024 mean of 85.4 (SD = 4.1), while exceeding the department mean (91.06) and university mean (89.79). The series has no 2025 record, the response scale changed from five to seven points in 2025, and the intervention cannot be separated from cohort or year effects.

## What this means for practice

- **Instructors.** Keep an explicit audit step between AI generation and use: the Phase 1 checklist and the attack and defense phases are what make delegated construction pedagogically defensible.
- **Assessment designers.** Make AI-tool use a visible, rated criterion. The 2026 peer instrument scored appropriateness of AI use alongside functionality, originality, and attack-path reasoning.
- **Faculty developers.** Present delegation as a role shift toward auditing, attacking, and defending rather than as a way to skip implementation; sequencing traditional coding practice with this model across a program is the safer long-term design.
- **Researchers.** Treat these results as a single-cohort signal. Replication needs comparison groups, objective outcomes such as vulnerability-detection accuracy, and validated multi-item perception scales.
- **Students.** Expect to read, question, and attack code you did not write; the course's value rests on that audit, not on the generated artifact.

## Limitations

- A single institution, single course, single cohort of 34 with no comparison group for perceived burden or engagement; the historical satisfaction series is descriptive context only.
- Both outcome constructs were measured with single, course-specific retrospective items, so there is no internal-consistency estimate, no test–retest reliability, and no convergent validity against validated instruments.
- The burden item combines burden and time and presumes improvement relative to expectations, leaving it open to acquiescence and expectancy bias; both items show a pronounced ceiling effect that may inflate standardized magnitudes.
- Build-time logs are self-reported, free-form, and incomplete, and they do not separate time spent generating, reviewing, and correcting code; teams also switched tools and models freely, so the AI assistance received was not uniform.
- The pre-course sample (36 respondents) exceeds enrollment (34) and could not be matched to the roster, so baseline figures describe the responding group; characteristics of the 7 final-course non-respondents are unknown.
- No individual-level achievement outcome, delayed transfer task, or objective coding measure was collected, so the study cannot establish that learning improved, and its web-application setting leaves hardware and IoT generalization open.

## Citation

Kim, D.-W. (2026). [Cognitive Offloading with Large Language Model Agents in Cybersecurity Education: Perceived Burden and Engagement in a Single-Cohort Study with Ten-Year Institutional Context](https://doi.org/10.3390/app162211343). *Applied Sciences, 16*(22), 11343.
