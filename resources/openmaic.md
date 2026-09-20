---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
updated: "2026-09-20T17:30:00-04:00"
type: resource
summary: "The open-source release of MAIC: a multi-agent classroom that turns a topic or document into slides, quizzes, interactive simulations and project-based activities, delivered by AI teachers and classmates."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
stakeholders: [educational-technology-developers]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, edtech designers, learners]
confidence: high
connected_resources: [deeptutor, lesson-md]
---

**OpenMAIC** is the open-source release of the MAIC multi-agent classroom described in [[mooc-to-maic|the MAIC study]]: describe a topic or attach your own materials and it generates a full lesson — slides, quizzes, interactive HTML simulations and project-based activities — then delivers it through AI teachers and AI classmates who speak, draw on a whiteboard and take part in discussion. It is the code behind a classroom that can be run rather than only read about.

## What you can do with it

One-click generation produces a lesson in minutes from a prompt or uploaded document, audio or video. The multi-agent layer adds classroom discussion the learner can join or be called into, roundtable debates between personas with whiteboard illustrations, and free-form Q&A where the teacher answers with slides or diagrams. Sessions support slide decks, quizzes, interactive simulations and PBL, and export as editable `.pptx` or interactive `.html`. Version 1.0.0 (August 2026) added an agent workbench: a chat-first workspace that plans and revises whole courses, durable server-backed sessions you can cancel, resume or steer, and 24 built-in skills covering slides, quizzes, interactives, images, video and voices. A `SKILL.md` package lets an agent harness build classrooms from a messaging app.

## Who it is for

Instructors and course teams who want generated materials they can still edit, instructional designers prototyping multi-agent activities, and developers who need a self-hostable classroom rather than a hosted product. Schools can deploy it on Vercel or with Docker, and the project ships a hosted demo at open.maic.chat.

## Notes

Licensed MIT, with an English and Chinese user guide and an active community on Discord and Feishu. It is model-neutral: you supply at least one LLM provider key, and optional local components (Lemonade for local models, FunASR for speech recognition) let you run more of the stack offline — so "free" describes the software, not the inference bill. The paper behind it appeared in the *Journal of Computer Science and Technology* (2026, DOI 10.1007/s11390-025-6000-0), and the repository had more than 38,000 stars by September 2026.

## Connected Concepts
[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]]
