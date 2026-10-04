---
title: "AILitHub: Building AI Literacy Infrastructure to Situate Frameworks into Practice"
created: "2026-10-04T07:50:00-04:00"
updated: "2026-10-04T07:50:00-04:00"
type: article
sources: ['raw/papers/ailithub-ai-literacy-case-infrastructure-2026.md']
confidence: low
page_kind: [framework, evaluation]
research_method: [system development, design and evaluation study]
level: [k 12, teacher education]
audience: [faculty developers, curriculum designers, researchers, policymakers]
pedagogy: [professional-training, situated-learning]
technology: [edtech-platform, generative-ai]
methods: [mixed-methods-research]
assessment: [self-report-measures]
foundations: [ai-literacy, teacher-ai-competency]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** [[ai-literacy|AI literacy]] frameworks describe what teachers should know but stay abstract, and framework authors have no steady supply of real classroom cases to test them against. AILitHub addresses both ends by having teachers submit their own AI-related cases and tag them with stakeholders and OECD framework competencies. In a first deployment with 200+ teachers in a professional-development program, 53 usable cases came in — and the pattern is the finding: teachers wrote fluent, detailed accounts of AI helping them teach, but struggled to supply the negative examples that frameworks also need.

## Key Findings

1. AILitHub is a multilingual web system (English, Spanish, Simplified and Traditional Chinese) where teachers submit a narrative case from their practice, label it AI Literate or Not AI Literate, name the stakeholders involved, and map it to one or more competencies from the OECD AI Literacy Framework.
2. In an online livestream professional-development program with over 200 in-service teachers in an East Asian context, 69 submissions yielded 53 complete cases from 53 unique teachers after invalid responses were excluded.
3. The participant group was largely outside the technology fold: 51 of 53 taught disciplines other than information technology, only 13 percent (N = 7) reported prior AI-related training, 75 percent were female, and 62 percent taught in public schools.
4. Teachers and students dominated the cases as stakeholders (N = 47 and N = 41), and the teacher-and-student pairing appeared in 26 cases (49 percent); [[parents-and-families|parents]] (N = 9) and community members (N = 6) trailed far behind, and only two cases involved neither teachers nor students.
5. Competency mapping clustered on practical judgment: every case carried at least two competencies (mean 7.52), with the top selections being evaluating whether AI outputs should be accepted, revised or rejected (N = 38) and describing how AI systems can be designed to solve a community problem (N = 31).
6. The competencies that frameworks emphasize for critical understanding were the ones teachers rarely reached for — societal bias (N = 5), ethical alignment (N = 6), AI's energy and resource use (N = 9), and data curation (N = 9).
7. Teachers submitted 43 AI-literate cases against only 10 non-AI-literate ones, and half of those ten closely echoed the example already in the tool, which the authors read as a sign that the [[scaffolding]] shaped the responses rather than teachers' own situated judgment.

## How the system works

The design starts from a two-sided gap. Frameworks such as the OECD's define competencies but are hard to apply in daily teaching decisions, while the people refining those frameworks lack timely cases spanning the range of classroom situations. AILitHub sits in between as collection infrastructure rather than a course: teachers contribute a case, and their annotation is what turns one teacher's anecdote into structured evidence about how framework concepts show up in practice.

The OECD framework was chosen because it was written for primary and [[k-12|secondary education]] and its four domains — engaging with AI, creating with AI, managing with AI, designing with AI — give a concrete annotation scheme. Before submitting, participants see example cases for inspiration and answer background questions covering country or region, gender, age group, institution type, teaching setting, education level, whether they identify as an IT teacher, and whether they had prior AI-related [[educational-development|professional development]]. For each case they then classify it as AI literate or not, select from a stakeholder list (student, teacher, parent, school [[administrator]], government, curriculum developer, edtech company, researcher, community, other), and map it to one or more competencies.

The paper also declares its own AI use: GPT-5 and Grammarly for language editing, and Cursor with Claude Sonnet 4.6 assisting the code development, with the authors stating they reviewed and edited both content and code and take responsibility for the publication. The authors are explicit about what the annotations are. Because a goal is to learn how teachers themselves interpret AI literacy frameworks, the labels are treated as teacher-perceived mappings rather than validated expert codes — evidence of recognition and perception, not ground-truth competency assignments.

## What the first deployment produced

The deployment ran inside an online livestream professional-development program on AI literacy, with participation counting toward teachers' required annual PD hours, and participants given roughly ten minutes in the system after instruction on the framework. Of the 69 submissions received, 53 survived screening for invalid responses such as duplicates. Participation was voluntary and IRB-approved, and the authors frame the analysis as a dataset snapshot and feasibility demonstration rather than evidence of teacher learning.

Three patterns came out of the 53 cases. Stakeholder roles were narrow: teachers and students accounted for almost all mentions, the pairing appeared in half the cases, and broader actors named in frameworks — government, [[educational-technology-developers|edtech companies]], researchers — appeared once each. Competency selections were lopsided toward practical judgment and away from the critical and societal dimensions, and the authors note the imbalance matters because the rare competencies are exactly the ones a critical AI literacy agenda depends on.

The third pattern is the one the authors press hardest. The tool's own example case shows a teacher using AI for efficiency with positive academic outcomes, and participants mostly went beyond it — describing AI-supported parent communication, counselling with a social-emotional focus, simulated practice for student intervention, and creative [[multimodal]] activities. But among the ten non-AI-literate cases, half reproduced the example's structure almost exactly: someone generates materials with AI without reviewing them, and the result contains inappropriate material and factual errors. That is a case of teachers reflecting the tool's template back at it rather than reporting what they have actually seen.

## What this means for practice

- **Professional development facilitators.** Treat the missing critical cases as the curriculum gap they are. Teachers in this deployment could describe AI helping them differentiate materials, but rarely connected a case to bias, [[ethics]], environmental cost or data practices, so PD that only models productive tool use will not produce that awareness on its own.
- **Teacher educators and curriculum designers.** Ask for negative examples explicitly and give real ones. Half the non-AI-literate cases mirrored the tool's own example, which suggests teachers default to the framing they are shown — a blank prompt for a failure case invites a template, not a memory.
- **Framework developers.** Case collections like this give an early signal about which competencies are legible to practitioners and which stay invisible. Here, evaluation and design competencies attached readily to classroom stories while societal and environmental ones did not, which is information about the framework's descriptors as much as about the teachers.
- **Researchers.** The honest use of a dataset like this is typology-building, not scoring. Since the labels are self-annotations without inter-rater checks, mine the narratives and the stakeholder-competency co-occurrence, and treat any claim about teacher competence as a hypothesis needing independent coding.
- **Policymakers and program funders.** Counting submissions is not evidence of learning. The authors report a feasibility demonstration and say so; a funded deployment should carry annotation-quality checks and pre-post measures rather than a submission count.

## Limitations

- The sample is small (N = 53) and drawn from a single professional-development context in one East Asian setting, so the authors state the patterns need testing across cultures, school types and educator populations.
- The dataset relies on self-annotation, and the authors cannot yet determine how reliably participants applied the AI-literate labels or selected competencies; annotation quality, inter-rater agreement and alignment with independent coding remain untested.
- Non-AI-literate submissions that closely mirrored the tool's example suggest some responses were shaped by the scaffolds rather than by participants' own situated judgment.
- The ten-minute contribution window and the workshop setting bounded what teachers could write, and the collection happened inside a PD program whose participants were there for credit toward required hours.
- The labels carry no validity evidence: they are teacher-perceived mappings, and the authors explicitly frame the analysis as a snapshot rather than evidence of teacher learning outcomes or validated competency distributions.
- The system has no public URL in the paper, so the infrastructure is not yet available for others to reuse or inspect, which limits what the contribution can do for the field beyond the dataset.

## Citation

Wang, J., Xiao, R., Yu, M., Nieu, H., Tseng, Y.-J., Stamper, J., & Hou, X. (2026). AILitHub: Building AI Literacy Infrastructure to Situate Frameworks into Practice. *AI for Education Day workshop at SIGKDD 2026*.