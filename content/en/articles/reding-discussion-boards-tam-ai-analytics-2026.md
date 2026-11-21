---
title: "Student Perceptions of Discussion Boards: A Technology Acceptance Model Study to Inform AI-Enabled Learning Analytics Design"
created: "2026-11-16T07:34:23-05:00"
updated: "2026-11-16T09:30:00-04:00"
type: article
authors: ["Reding, T.", "Gartner, A.", "Nugent, C."]
published: "2026-05-31"
venue: "ASEE Computers in Education"
source_url: https://doi.org/10.18260/B45D-98-54781
foundations: [human-ai-collaboration, theories-and-frameworks, critical-thinking]
pedagogy: [online-teaching-and-learning, student-engagement, student-experience, social-norms-ai-use]
technology: [technology-acceptance-model, learning-analytics, edtech-platform, generative-ai]
assessment: [formative-assessment]
ethics: [trust]
research_method: [interviews]
discipline: [stem education, engineering education]
level: [undergraduate, higher ed]
audience: [instructors, learning analytics designers, instructional designers]
sources: ['raw/papers/reding-discussion-boards-tam-ai-analytics-2026.md']
confidence: medium
methods: [qualitative-research]
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
evidence_context: educational
---
> **Synthesis:** Reding, Gartner and Nugent (2026) held four virtual focus groups in Spring 2024 with 26 undergraduates enrolled in STEM courses at a large Midwestern university, and coded the transcripts deductively against the [[technology-acceptance-model|Technology Acceptance Model]] to find out what a discussion board has to do to be worth a student's time. The answer is not about the board software. Students called the Canvas tool easy to use and then described the work around it as busywork: posts written to satisfy a grade, replies that repeat what classmates already said, and threads that are hard to navigate once a conversation goes past one level. Usefulness tracked the prompt. When a prompt demanded application or exposed students to how classmates were reasoning, students described learning from the board; when a prompt was vague, repetitive or disconnected from the course, they described checking a box. The study is the first phase of the NSF-funded INSIGHTS project, and its purpose is instrumental: the authors convert these perceptions into design requirements for [[learning-analytics|learning analytics]] dashboards, one instructor-facing and one student-facing, that are meant to raise the cognitive demand of discussion without adding to instructor workload.

## Key Findings

- **Perceived usefulness attaches to prompt design rather than to the discussion board itself.** Students found boards useful when prompts required higher-order thinking, applied course content, or exposed them to multiple perspectives. The authors state the conclusion directly: perceived usefulness "is more related to how the prompts are designed and implemented than the presence of the discussion boards themselves."
- **[[teacher-role|Instructor presence]] is the external factor students name most often.** One student described an instructor who "really pushes discussion boards," asks students to respond to each other and then replies later in the week, and said she personally liked that feedback. Students also acknowledged that instructors face time constraints, which is where the authors see a role for analytics.
- **Thread navigation is the concrete usability complaint.** Students generally found the Canvas discussion tool easy to use, but locating a reply to a reply was difficult: "Sometimes it's hard, like when you reply to somebody, to find that like reply or that discussion, answer."
- **Busywork is what turns attitude negative.** Students described posts as "just another something you have to check off the list," replies as "a waste of time" when they are graded, and the format as not a discussion at all: "Discussions could just be assignments where you like do short writing assignments. Cause it's never really a discussion like legitimately." One student summarized the value-versus-effort judgment: "Seeing how other people think helps me learn, but sometimes it feels like busy work if it's just repeating what others said."
- **Motivation is grade-shaped, and students know it.** Most participants said they were motivated to complete boards only for the grade, one reported never having had a back-and-forth exchange on a board, and another described the peer norm of superficial praise — "great job on this, good job on your insights" — offered because everyone is "kind of forced to" reply.
- **Social risk suppresses participation for students outside their major.** A student taking an art course without art background expected the board to feel "intimidating" beside classmates who were "way more advanced," which is the participation cost the format is supposed to remove.
- **The design response is two dashboards, not one.** The instructor-facing dashboard would classify a draft prompt by cognitive demand, for example a [[bloom-taxonomy|Bloom's Taxonomy]] level, and suggest revisions such as asking students to compare or justify rather than recall. The student-facing dashboard would feed back on the quality or cognitive depth of a response so that grades are not the only signal. AI theme summaries and identification of exemplary posts were also proposed, but the authors note that Canvas's summarizing feature is instructor-only and that INSIGHTS could not build a student-facing version within its budget.

## How the study was done

Twenty-six students were recruited through the eight instructors participating in INSIGHTS, all of whom teach in Canvas and represent disciplines including engineering, environmental and sustainability studies, animal science, agronomy and horticulture, gerontology and anthropology. Students completed an online form to indicate availability and consent, and were assigned to one of four focus groups. The group spanned freshmen through seniors and majors from agricultural business and animal science to civil, construction and mechanical engineering, computer science, chemistry and public health. Four participants were freshmen, seven sophomores, eight juniors and seven seniors.

The four semi-structured focus groups ran virtually on Zoom in Spring 2024, with Zoom transcription used for the record. Questions asked how discussion boards had helped with success in online courses, which features students found useful and which could be improved, how they felt about boards overall, and what would make them more likely to participate regularly. Analysis used directed content analysis: the coding scheme was fixed in advance from the TAM's four categories — perceived usefulness, perceived ease of use, attitude toward using, and external variables — with subcategories drawn from prior educational technology studies using the same model, including performance improvement, task relevance and applicability, efficiency and time savings, accessibility and inclusivity, collaboration and communication, user interface design, perceived effort and cognitive load, enjoyment, value versus effort, social influence, instructor support, cultural norms, and incentives and motivation.

AI supported the coding. Transcripts were stripped of identifiers and uploaded to a licensed enterprise version of ChatGPT with an explicit role instruction, the predefined coding scheme, and the cited literature defining each subcategory, with instructions to preserve original wording and not infer intent or emotion. The researchers ran iterative quality checks, and because OpenAI's 2024 policies prevented the model from returning verbatim quotations from uploaded texts, every quotation used in the paper was located in the original transcripts by the researchers. The paper reports the focus group protocol and coding scheme in full but does not report inter-rater agreement statistics.

## What this means for practice

- **Instructors revising a discussion assignment.** The findings point at the prompt before the platform. If the question can be answered by restating the reading, students will treat the board as a compliance task no matter how good the software is. Questions that ask for comparison, justification or application are the ones students described as teaching them something.
- **Instructors deciding whether to reply.** Visible instructor presence was the external factor students credited most, and it did not require replying to everything. Replying within the week to the thread, rather than to each post, is the pattern the quoted student described.
- **Designers of learning analytics.** The two requirements that fall out of the data are cognitive demand and navigational cost. A dashboard that flags a low-demand prompt before it is published is a different intervention from one that grades participation after the fact, and the authors argue the first is where the leverage is.
- **Administrators.** The paper is unusually candid that the student-facing summarization students asked for is the feature the project could not afford to build, and that the commercial equivalent is instructor-only. That is a statement about which users learning analytics tends to serve.
- **Researchers using AI for qualitative coding.** The workflow described here — identifiers removed, framework and definitions supplied, quotes re-verified by hand — is a usable template, and the gap between what the model returned and what the researchers had to check is the part worth copying.

## Limitations

- The authors state that qualitative results are context-specific and rest on a relatively small sample from a single institution, and that the findings are intended to inform user-centered design rather than to generalize.
- Directed content analysis fixes the categories before coding, which the authors name as a limit: perspectives that fall outside the TAM's four categories were unlikely to be recorded. A theme that does not map to usefulness, ease of use, attitude or external variables had no slot.
- AI-assisted coding depends on prompt design and cannot account for contextual nuance or implicit meaning, as the authors acknowledge. All model output was reviewed by the research team and every quote cross-checked, but no reliability statistic is reported for the coding itself.
- Students were recruited through instructors who already use discussion boards and volunteered for a focus group, so the sample over-represents students willing to talk about the format and says nothing about students who disengage from it entirely.
- The design recommendations are derived from student perceptions and have not been tested: the dashboards did not exist at the time of writing, and the paper's contribution to learning outcomes is a hypothesis the project's later phases are meant to examine.

## Citation

Reding, T., Gartner, A., & Nugent, C. (2026). [*Student Perceptions of Discussion Boards: A Technology Acceptance Model Study to Inform AI-Enabled Learning Analytics Design*](https://doi.org/10.18260/B45D-98-54781). *ASEE Computers in Education, 15*(2), 36–56.
