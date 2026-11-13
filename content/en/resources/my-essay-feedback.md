---
title: "MyEssayFeedback"
created: "2026-11-12T07:11:46-05:00"
updated: "2026-11-13T00:25:09-05:00"
type: resource
summary: "An instructor-controlled AI feedback platform for college essays: feedback prompts drawn from an OER library of 200+ types, structured student reflections on each AI suggestion, an instructor dashboard with an AI class summary, and LTI integration with Canvas, Blackboard and Moodle."
url: https://myessayfeedback.ai/
author: "Eric Kean"
resource_type: [software, prompt or gem library]
access: [freemium]
last_verified: "2026-11-12"
foundations: [ai-literacy, human-ai-collaboration]
pedagogy: [metacognition, self-regulated-learning]
assessment: [ai-feedback-quality, feedback-literacy, formative-assessment]
ethics: [ai-use-disclosure]
audience: [instructors, learners, faculty developers]
level: [higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
reviewed_by: [editor]
---

MyEssayFeedback puts the instructor between the student and the model. Rather than handing students a general chatbot, an instructor sets an assignment, chooses which kinds of feedback the AI may give, and then reads both the drafts and the students' written reflections on what the AI said. The design bets that the value of [[feedback|AI feedback]] lies in the revision conversation it starts, not in the volume of comments it produces.

## What you can do with it

Create an assignment and pick feedback types from the platform's [OER library of 200+ shared prompts](https://myessayfeedback.ai/oer/types-of-feedback-library) (thesis development, argument structure, evidence, grammar, style) or write your own. Students submit a draft through the LMS or an access code, receive feedback on the aspects you selected, and then complete a structured [[reflection|reflection]]: what they accept, what they question, what they will change. The instructor dashboard shows each essay beside the feedback and the reflection, and an AI-generated class summary reports the cohort's recurring strengths and weaknesses so the next class session can target them. [[peer-review|Peer review]] sits alongside the AI loop, and integration runs through LTI into Canvas, Blackboard and Moodle.

The reflection step is the part worth studying: it is an explicit attempt to make [[ai-feedback-quality|AI feedback]] an object of judgment rather than an answer key, and it is closest to what [[feedback-literacy|feedback literacy]] research describes as the skill that decides whether comments change a draft at all. Because the loop is built around revision rather than a grade, it also functions as [[formative-assessment|formative assessment]] infrastructure, though the platform itself does not grade.

## Who it is for

First-year writing instructors and English departments who want AI feedback without ceding control of what it says; writing centers supplementing human tutoring; individual students who want structured feedback on a draft with no course attached; and homeschool parents. The founder, Eric Kean, has taught at Western Washington University for two decades and develops open educational technology; Anna Mills, a writing instructor whose AI-writing work is widely cited, advises the project and wrote its reflection templates.

## Notes and caveats

The site reports 12,000+ students, 700+ courses and 41,000+ essays reviewed. Those are vendor-reported figures, not an independent audit. FERPA compliance, GDPR readiness and accessibility are likewise the vendor's own claims; essays run through Azure OpenAI, and the site states they are not used to train models, which a district should confirm in the data processing agreement rather than take from the marketing page. Pricing is freemium and shifts by audience: a free first term for new instructors (by request, limited to three per school), about \$12 to 15 per student per term afterwards, and a paid per-review tier for individual students with the first review free. The comparison table against ChatGPT Plus, Packback and Grammarly is the vendor's own. A UC Davis partnership on the PAIRR project is a research collaboration, not published evidence that the platform improves writing.

## Connected Concepts

- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[formative-assessment]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[ai-literacy]]
