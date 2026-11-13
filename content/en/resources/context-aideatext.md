---
title: "conText (AIdeaText)"
created: "2026-11-12T07:11:46-05:00"
updated: "2026-11-13T00:25:09-05:00"
type: resource
summary: "A free browser tutor that reads a photo of a notebook, a PDF or a text, then talks the student through it Socratically in English or Spanish while drawing a live graph of the ideas they connect as they speak."
url: https://context.aideatext.ai/?lang=en
author: "AIdeaText"
author_url: https://aideatext.ai/
resource_type: [software]
access: [free]
last_verified: "2026-11-12"
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, knowledge-graph, speech-and-voice-technologies]
assessment: [formative-assessment]
audience: [learners, instructors, faculty developers]
level: [k 12, higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
reviewed_by: [editor]
---

conText is the cleanest small demonstration of a direction [[intelligent-tutoring|AI tutoring]] mostly talks about and rarely implements: the model does not answer the student's question, it asks the next one, and the student's ideas are drawn as a graph while they talk. Upload a photo of a notebook page, a PDF or a text, and the tool first says what it understood, then starts a spoken [[socratic-method|Socratic]] dialogue. Every idea the student names appears as a node in a live [[knowledge-graph|knowledge graph]]; edges appear as the conversation connects them, and the panel reports how many ideas remain unconnected.

## What you can do with it

The loop is deliberately short. Material goes in (up to 10 MB, eight PDF pages or 15,000 characters of text), the tutor reads it back, and the conversation is by voice, and the site says the tutor does not grade and does not write for the student. The graph is the artifact that makes the session worth something afterwards: it shows which ideas the student actually put into relation and which stayed loose, which is a far more specific thing to review than a chat transcript. The session can be exported as a graph XML file and re-uploaded on another day to continue, and the delete button erases it immediately; otherwise the server drops it after one hour.

That combination, a tutor that withholds the answer and a visual record of the reasoning, is within what [[scaffolding|scaffolding]] and [[metacognition|metacognitive]] reflection try to achieve, and it gives a teacher something concrete to ask about rather than a finished essay or a correct number. The site's own framing is that a correct result no longer proves understanding once generative AI can produce it, so the process has to be visible.

## Who it is for

Students working through a reading or a problem set who want to be questioned rather than answered for, teachers who want a low-stakes check on whether a student can connect ideas, and faculty developers looking for a concrete example of process evidence. Teachers have a curriculum-aligned guide in English, Spanish, Portuguese and French; the tool itself runs in English and Spanish, and the walkthrough video is in Spanish.

## Notes and caveats

No price or account is published for the student-facing tool, while institutional deployment (cloud, on-premises or hybrid) is offered through a bespoke proposal and a meeting; treat "free" as the state of the public demo in November 2026, not a guarantee. Text and images go to a hosted service powered by Claude, and the site itself tells users to strip names, amounts, addresses and company names before uploading, which shifts the burden of de-identification onto the person uploading rather than the platform. Sessions self-delete after an hour unless exported. The underlying company also markets a broader reasoning-graph assessment platform to institutions, and its claims about distinguishing deductive, inductive, abductive and analogical graphs come from four reference texts. The site calls that a demonstration, with validation at scale still to come.

## Connected Concepts

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
