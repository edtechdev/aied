---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
updated: "2026-09-24T05:08:48-04:00"
type: resource
summary: "An open-source set of eleven Claude Code skills that audit a course against the instructional-design evidence base, tagging every recommendation with its evidence tier."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

**idstack** is an open-source collection of eleven skills for evidence-based [[learning-design|instructional design]], distributed as a Claude Code plugin with a companion Chrome side-panel extension. Rather than drafting a course, the skills audit one: they classify objectives against revised Bloom's taxonomy, check constructive alignment between objectives, activities and assessments, flag cognitive load problems, and review accessibility against WCAG 2.1 AA and Universal Design for Learning. Each recommendation carries an evidence tier, from T1 for meta-analyses and randomized trials through T5 for expert opinion. The project states that its citations draw on 108 peer-reviewed studies across eleven research domains; that count is the project's own claim, and its bibliography is published in Markdown so a reviewer can check it.

Courses enter through a Canvas API connection, an IMS Common Cartridge file, a SCORM package, a PDF export from an authoring tool, or pasted documents. A shared project manifest remembers the course across sessions, and a pipeline skill chains the design stages while skipping completed work. Reviews report against the eight Quality Matters standards and the Community of Inquiry framework, separating teaching, social and cognitive presence, then rank recommendations by severity.

## What to know before adopting it

The plugin requires Claude Code and a bash shell to install; PowerShell and cmd cannot run the setup script, and Python 3 is recommended for score trends. Course data stays in the project folder on the reader's own machine, and leaves it only through an integration the user invokes, such as a Canvas API call. The Chrome extension's live inference needs the reader's own free Google AI Studio API key, though a simulation mode demonstrates it without one. The project labels itself beta at version 3.5.1.0 and warns of breaking changes between minor versions, and it is published under the savvides GitHub account rather than by a named author.

## Connected Concepts
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
