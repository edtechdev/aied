---
title: "Jev Sandbox"
created: "2026-09-20T13:49:11-04:00"
updated: "2026-09-20T13:49:11-04:00"
type: resource
summary: "An AI that answers with probabilities instead of prose: you write the rubric or the question, it returns a number per item, and its uncertainty stays visible."
url: https://mwatkins03-netizen.github.io/Probability-Sandbox-Jev/
source_code: https://github.com/mwatkins03-netizen/Probability-Sandbox-Jev
author: "mwatkins03-netizen"
author_url: https://github.com/mwatkins03-netizen
foundations: [human-ai-collaboration]
technology: [generative-ai]
assessment: [formative-assessment, feedback, assessment-validity]
ethics: [explainable-ai, trust-calibration, ai-use-disclosure]
resource_type: [software]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructors, learners, researchers]
confidence: high
---

**Jev** inverts the usual chatbot interaction. Instead of asking a model to write, you hand it a piece of text and a set of questions you wrote yourself, and it returns a typed answer per question: a probability for yes/no, a full probability spread for pick-one, or a weighted score across rubric levels you wrote. It never writes a sentence and cannot be asked to, which makes its uncertainty visible — the thing students are usually asked to read off a paragraph of fluent prose.

## What you can do with it
The sandbox includes five student coaches and two faculty tools, a graph builder for your own judgments, and lenses that fetch live public data (news headlines, occupations, federal comments) to chart. A worked example judges an AI-use disclosure statement against a rubric and yes/no checks, which is a direct teaching case for [[ai-use-disclosure]] and for reading model probabilities critically. In the classroom it suits fast second readings of drafts against a rubric, triage of a stack of short responses, and teaching probability literacy.

## Limits the project states itself
A vague question gets a confident wrong answer, so rubric wording carries more weight than with a chatbot; the model sees only the text in front of it and cannot check a source or notice sarcasm; and the text you submit travels to a company server for the length of the request, so it should carry no names or grades. Numbers like 0.97 will be taken as truth unless you teach students not to.

## Notes
The site names no individual author; the source is a public GitHub repository updated in September 2026, written mostly in HTML with JavaScript and Python.

## Connected Concepts
[[formative-assessment]], [[feedback]], [[assessment-validity]], [[explainable-ai]], [[trust-calibration]], [[ai-use-disclosure]]
