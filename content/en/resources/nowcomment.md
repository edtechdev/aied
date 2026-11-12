---
title: "NowComment"
created: "2026-11-12T09:05:00-05:00"
updated: "2026-11-12T09:05:00-05:00"
type: resource
summary: "A free account-based annotation platform where threaded discussion attaches to specific sentences, image regions and video timestamps, and where OpenAI-based 'AI Thinking Partners' can draft a reply on a selected passage for the student to edit before posting."
url: https://nowcomment.com/
author: "Paul Allison"
author_url: https://youtube.com/@paulallison
resource_type: [software, collection of activities]
access: [free with account]
last_verified: "2026-11-12"
foundations: [ai-literacy, human-ai-collaboration]
pedagogy: [collaborative-learning, student-ai-interaction]
assessment: [peer-assessment, ai-feedback-quality, formative-assessment]
audience: [instructors, learners, faculty developers]
level: [k 12, higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
reviewed_by: [editor]
---

NowComment turns a text, an image or a video into a discussion surface: comments are threaded against the exact sentence, paragraph, image region or timestamp they respond to, so a class conversation stays anchored to evidence instead of drifting into a comment feed. What distinguishes it from a plain annotation tool is the AI layer the maintainer built into that same surface — an [OpenAI-based](https://nowcomment.com/) "AI Thinking Partner" can be asked about a passage the reader has selected, and the result arrives as an editable draft rather than as the reply.

## What you can do with it

Upload a document, invite readers, and any selected passage can carry multiple conversations, displayed in a side column or inline. On top of that, the AI features are the reason to look at it now. **Ask AI** on a double-clicked sentence or paragraph opens a partner picker: the reader chooses a *GPT Thinking Partner*, writes a question, adds an optional note about the reader, and can **Resubmit** repeatedly until the output is useful. The reply is then edited in place before it is posted, which makes the student a co-author of the AI text rather than its forwarder. A directory of vetted partners sits alongside user-built ones, and the site's help materials include prompt guides that keep an assistant asking the reader to plan a revision instead of producing one. A companion *GPT Dialogue Notebook* pattern collects weekly written logs plus the readings, images and videos they connect to, with privacy set per document, so AI dialogue accumulates across a term instead of resetting each session. Built-in analytics count comments and visits per document and export to CSV.

The annotation loop itself is a [[collaborative-learning|collaborative learning]] design in the older sense: readers respond to the same evidence, and the thread records who said what about which sentence. Because replies can be peer or AI, it also works as a low-stakes [[peer-assessment|peer assessment]] surface, and the partner prompts can be aimed at the qualities of [[ai-feedback-quality|useful AI feedback]] rather than at answers.

## Who it is for

Teachers running close-reading, document study or media analysis in K-12 or higher education, and faculty developers who want students negotiating a text with an assistant in the open rather than in a private chat window. The maintainer, Paul Allison, records regular walkthroughs and classroom examples on [his YouTube channel](https://youtube.com/@paulallison), including a series on AI thinking partners in writing classrooms, which is the practical way to see the partner workflow before committing a class to it.

## Notes and caveats

Accounts are free, and documents can be public or shared with an invited group. The AI partners run on OpenAI large language models, so selected passages and questions leave the platform's own hosting and are subject to that provider's terms — a district should read the data processing arrangement before using it with minors. Output is capped by a token limit that the site says it is still expanding, the partner directory is behind a login, and the AI surfaces are a fast-moving part of the product: treat any capability described here as the state of the site in November 2026, not a settled feature set.

## Connected Concepts

- [[collaborative-learning]]
- [[peer-assessment]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[human-ai-collaboration]]
- [[student-ai-interaction]]
