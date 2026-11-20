---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "A web application for building step-by-step AI assignments in which the instructor sets the model's role and the gates on student use, and student identity is kept out of the model's context."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [learning-design, guardrails, ai-use-disclosure]
---

A builder for AI-integrated assignments, built by Joseph Slade at Oregon State University and operated by AI Education Labs, Inc. The premise is that the alternative to a free-for-all chatbot is not prohibition but structure: the instructor defines the steps a student moves through, decides what role the model plays at each step, and sets how far a student may lean on it. The assignment is then published as a join link rather than distributed as a prompt document.

## What you can do with it

- **Set the model's role per assignment.** The builder offers tutor, Socratic questioner, feedback provider and research assistant presets, plus a custom prompt, so the assistant behaves the way the task requires.
- **Put gates between steps.** A step can require a student to explain their reasoning before advancing, and AI help can be capped per step — the interface shows a remaining count rather than open-ended access.
- **Choose the working surface.** Students write on a document page with comments in the margin, with chat and notebook layouts available where they fit the task better than a page.
- **Publish and watch reasoning, not just output.** A join link enrolls students, progress saves as they go, and the instructor can read each student's transcript and export it as CSV or Markdown.
- **Draft with AI, then refine.** Setup can start from a few questions, an uploaded existing assignment or a previous one, with an instructor-side assistant filling in a first draft.

The published examples suggest the intended range: a physics evidence-and-testimony task, a biology exercise diagnosing the reasoning error in an AI intern's explanation, and a psychology task checking whether a news story describes a study's design.

## Who it is for

Instructors in higher education who want [[learning-design|learning design]] to carry the AI policy — that is, who would rather constrain how a model can be used inside a task than police whether it was used. The gates and role settings are a design-time expression of [[guardrails|guardrails]], and the app is aimed at coursework rather than at institutional chat deployment.

## Notes and caveats

- **Pilot stage.** The terms state the service is currently provided without charge for pilots and that paid plans may be introduced with notice, and that features may change or be withdrawn. There is no public pricing page; you reach pricing only after signing in.
- **The privacy claim is architectural, and worth reading closely.** Each student gets a random session identifier per assignment, the mapping from student account to session stays on Repertoire's server, and the model receives the anonymous session, the assignment context and the student's writing. The caveat is in the policy itself: text a student types that identifies them is sent like any other text, and the course instructor can read the transcripts.
- **Third-party inference.** Replies are generated through Anthropic's Claude API with OpenAI's API as a backup, under commercial terms that the policy says exclude training on API inputs and outputs as of September 2026. An institution should confirm that through its own agreement rather than through a web page.
- **It is not a grader.** The policy and terms both describe assistant judgments such as "objective met" as aids to the instructor; grades and academic decisions stay with the instructor and institution, and decisions about [[ai-use-disclosure|disclosing AI use]] to students are left to the instructor.
- **US-hosted.** Data sits in Google Cloud Firestore with Vercel hosting, and the policy addresses FERPA obligations where the service handles education records; users outside the United States are told their data is processed there.
