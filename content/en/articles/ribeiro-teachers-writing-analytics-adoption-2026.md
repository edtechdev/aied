---
title: "From Design to Classroom Adoption: Teachers' Perspectives on AI-powered Writing Analytics in Resource-Constrained Contexts"
created: "2026-11-02T13:35:00-05:00"
updated: "2026-11-02T13:35:00-05:00"
type: article
technology: [learning-analytics, technology-acceptance-model]
assessment: [automated-essay-scoring, feedback]
methods: [mixed-methods-research, usability-research]
research_method: [user study]
discipline: [writing education]
level: [secondary]
audience: [instructors, learning analytics designers, educational technology developers]
ethics: [digital-divide, equity-in-ai-education]
page_kind: [evaluation]
published: "2026-10"
sources: ['raw/papers/ribeiro-teachers-writing-analytics-adoption-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-02"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Ribeiro and colleagues (2026) put an AI-powered essay-scoring app in front of nine experienced Brazilian high-school writing teachers and asked whether it fit their working lives. The tool, Escreva Mais, is built on the [[ai-education|AIED]]-Unplugged design stance: a phone photographs a handwritten essay, [[automated-essay-scoring|automatic scoring]] returns five ENEM competency scores, and the [[teacher-role|teacher]] gets a summary on the device plus a detailed PDF. Across think-aloud sessions, interviews, [[technology-acceptance-model|TAM]] and SUS [[self-report-measures|questionnaires]] run remotely between June and August 2025, the app scored a median SUS of 92.5 (range 62.5–100) and TAM medians of 7 for intent to use, perceived usefulness, ease of use and relevance, with 6 for result quality. The reason the paper is worth more than its acceptance scores is what the teachers asked for next. They wanted reports that name the specific errors and weak competencies, a field for their own comments, concrete examples of how the student should improve, and a warning telling them the [[feedback]] is not fully reliable and must be reviewed. [[learning-analytics|Learning analytics]] built for a low-infrastructure classroom was accepted precisely because it kept the teacher in the interpretive seat, and the teachers' own requests were about making that seat better equipped, not about automating it away.

## Key Findings

- **Acceptance was high and consistent:** TAM medians of 7 (of 7) for Intention to Use, Perceived Usefulness, Perceived Ease of Use and Relevance, and 6 for Result Quality (range 4–7), with no systematic negative evaluations.
- **Usability was in the top band:** per-teacher SUS scores of 97.5, 62.5, 100, 92.5, 92.5, 82.5, 95, 92.5 and 77.5, median 92.5, which the authors place in the "excellent" range.
- **Where the app fell short of its own profile:** Result Quality was the lowest-scoring construct, matching interview requests for more detailed diagnostics, competency-specific weaknesses and concrete examples of improvement.
- **The strongest perceived benefit was time:** teachers described being limited to occasional essay assignments because of how long feedback took, and projected that faster scoring would let them assign essays more often — one teacher with 300 students said the effort would be worthwhile if the tool worked reliably.
- **Four design principles came out of the sessions:** [[pedagogy|pedagogical]] transparency and curricular alignment as a design constraint, layered and pedagogically grounded reports, workflow compatibility as a facilitator of adoption, and guided onboarding so appropriation does not require technical training.
- **Teachers asked for a reliability warning, unprompted:** one participant proposed an on-screen message saying the report is not 100% reliable and the teacher must review it before passing it to a student, and read that obligation as a positive feature.
- **Requests the design deliberately declined:** batch scanning, direct file upload and automatic inclusion of the motivation text were not adopted, because the unplugged stance keeps technological demands at the level the context can support.

## Study Design & Method

- **Participants:** nine teachers from public and private high schools across distinct regions of Brazil, seven female, most with 10 to 25 years of experience and one with two, teaching 10 to 40 weekly class hours including 1 to 6 essay-writing classes. All had a smartphone and laptop with good home internet; none had used a specialized essay-analysis tool before.
- **Procedure:** remote sessions between June and August 2025. Each teacher installed the app, completed a predefined usage scenario while thinking aloud, then answered TAM and SUS instruments and sat a moderated semi-structured interview.
- **The tool:** Escreva Mais, a mobile app following AIED-Unplugged principles — automatic essay scoring from a photograph, on-device report [[visualization]], and a detailed PDF report aligned to the five ENEM competencies, including flags for off-topic essays, [[academic-integrity|plagiarism]] and insufficient length.
- **The design stance:** AIED-Unplugged, whose conformity principle keeps technological demands within the available infrastructure and whose unskillfulness principle keeps access, implementation and interpretation simple enough not to require additional digital skills.
- **Analysis:** [[qualitative-research|qualitative]] thematic coding of interview and think-aloud data alongside descriptive statistics for the instruments, with medians used because of the ordinal scales and small sample.

## Acceptance is not the finding — the requests are

The scores say the app was liked; the improvement requests say why, and they are about interpretive support rather than automation. Teachers wanted the report to state what went wrong and where, to leave room for their own annotation, and to show the student a concrete path to a better draft. One asked that the submitted essay image stay viewable after scoring so the score could be checked against the writing. Read together, these are the requirements of someone who intends to use a machine score as an input to professional judgment, and who wants the machine's output shaped for that use.

The proposed reliability warning makes the same point from the other side. A teacher volunteering that the app should tell them the report might be wrong, and framing that as a reason to trust the workflow, is the clearest available evidence that this adoption is a division of labor the participants understood. It also shows what the tool's designers decided not to do: the app does not present its score as final, and its reports are built to be read rather than accepted.

## Designing for scarcity on purpose

Every feature the design refused is a feature that would have raised the infrastructure bar. Batch scanning and direct file upload are conveniences in a well-equipped school and additional dependencies in a constrained one; automatic inclusion of source texts presumes a digital corpus that may not exist. The authors frame these refusals as design decisions rather than gaps, and the teachers' responses make that defensible: the app's perceived virtue was fitting into the workflow that exists, on the device people already own.

That has a cost worth naming. The report is only as useful as the teacher's capacity to review it, and the design's reliance on that review is what the reliability warning presupposes. A teacher with 300 students and five weekly essay classes may accept the app and still be unable to give every returned score the scrutiny its accuracy demands, which is where the [[digital-divide|resource difference]] shifts from infrastructure to attention.

## What this means for practice

- **Learning analytics designers in constrained settings.** Fit the tool to the device and the workflow teachers already have, and treat the refusal of convenience features as a design decision to defend in writing rather than a backlog.
- **Developers building AI scoring into teacher workflows.** Ship the reliability warning. Participants asked for it unasked, and it converted a worry about accuracy into a procedure for checking, which is a cheaper intervention than improving accuracy alone.
- **Software teams designing reports.** Teachers did not want shorter reports; they wanted layered ones — per-competency diagnostics, a global summary, and concrete improvement examples. Treat "more detail, better organized" as the requirement, not "less".
- **Administrators and instructional designers.** Onboarding by step-by-step guide, not by training session. One participant asked for it because she was not confident with technology, which is the population a low-infrastructure tool is meant to reach.
- **Anyone evaluating an adoption claim.** High [[usability-research|usability]] scores from nine self-selected teachers in one session are a readiness signal, not evidence of sustained use or of better student writing.

## Limitations

- Nine purposively selected, experienced teachers, all with a smartphone and good home internet, so the sample is better equipped than the "resource-constrained" population it stands for.
- Qualitative coding was done by a single moderator, so no inter-rater reliability could be reported.
- Acceptance and usability rest on self-report and post-task interviews from one session: initial impressions, not long-term adoption or student performance gains.
- No comparison condition and no measurement of writing improvement, so claims about students' development remain projections rather than findings.

## Citation

Ribeiro, F. G. C., Rodrigues, L., Xavier, C., Costa, N. T., Pinheiro, A., Lobo, J., Gašević, D., Drachsler, H., & Mello, R. F. (2026). [*From design to classroom adoption: Teachers' perspectives on AI-powered writing analytics in resource-constrained contexts*](https://doi.org/10.1002/jcal.70362). *Journal of Computer Assisted Learning*, 42, e70362.
