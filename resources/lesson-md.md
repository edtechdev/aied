---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
updated: "2026-09-20T13:49:11-04:00"
type: resource
summary: "An open, plain-text format for block-based eLearning lessons, plus an agent skill that writes lessons, assessments and whole course bundles in that format."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox]
---

**LESSON.md** is an open format for block-based eLearning content: a Markdown file with YAML frontmatter and `:::` directives for text, images and knowledge checks, readable by a person and parseable by any tool. It exists because course content is usually locked inside one authoring tool, and because large language models can only help with lessons they can actually read.

## What you can do with it
Write a lesson in any text editor and import it into any tool that supports the format, without copy-paste and reformatting. Interactive pieces — multiple-choice knowledge checks with attempt limits and answer-level feedback — are expressed as simple properties rather than a GUI. A companion `ASSESSMENT.md` at a bundle root becomes the course's scored assessment. The project also ships a `lesson-md` skill that teaches Claude, Codex or another agent the format, so describing a course in plain language returns lessons, assessments and a full bundle.

## Who it is for
Instructional designers and course creators who want their content to survive a tool change, eLearning vendors who want an import and export format their users already understand, and anyone building AI-assisted authoring on top of a readable format. Contributors include Dan Bashaw of LXD Integral, and the format has a public changelog up to v1.8.

## Connected Concepts
[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]]
