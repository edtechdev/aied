---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
updated: "2026-09-24T05:29:55-04:00"
type: resource
summary: "An open-source Agent Skill and private browser editor that turn eighteen rules for clearer writing into draft, rewrite and review modes for prose."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

**Clarity** pairs an Agent Skill with a browser editor, both built around eighteen rules for writing that "earns its reader." The skill installs into coding agents such as Claude Code and Codex with `npx skills add addyosmani/clarity`, and then works in three modes: review mode critiques a draft and leaves the file untouched, rewrite mode edits a draft in place, and interview mode asks the writer questions first and co-writes from the answers. The [[assessment|feedback]] a writer gets is aimed at substance before style. The rules ask who the piece is for and what they already know, press for claims over subjects and specifics over abstractions, and treat padding as a problem of not knowing what the piece is for rather than of vocabulary.

The browser editor runs locally in the page and does not upload a draft. It reports the tells of machine-written prose, readability, and gaps in substance, which makes it useful for reviewing text a [[generative-ai|generative AI]] produced before it reaches a reader. The project is explicit that the goal is writing that stays recognisably the author's own rather than prose engineered to pass [[ai-literacy|AI detection]], a distinction instructors will recognize when they set a policy on AI-assisted [[writing-education|writing]].

## What to know before adopting it

The repository publishes an evaluation protocol, before-and-after samples in `samples/`, and reference files behind the skill, so a reviewer can inspect how the rules behave rather than take a claim on trust; the page here does not restate any measured result. The author is Addy Osmani, the license is MIT, and the work is independent rather than a product of any institution. It is young and active: created in August 2026, 54 commits, three releases with the latest at version 0.2.1 that September, and roughly 250 stars when checked in September 2026. Three contributors have landed changes. Skill instructions load into an agent the reader already runs, so the usual [[prompt-engineering|prompt engineering]] caveats apply: the quality of the critique depends on the draft handed to it.

## Connected Concepts
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
