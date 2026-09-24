---
title: "Education Agent Skills"
created: "2026-09-23T21:05:00-04:00"
updated: "2026-09-23T21:05:00-04:00"
type: resource
summary: "A library of 165 evidence-grounded agent skills covering pedagogy, learning science, curriculum, and assessment, packaged for Claude, Codex, and Hermes."
url: https://github.com/GarethManning/education-agent-skills
author: "Gareth Manning"
author_url: https://www.garethmanning.com/
resource_type: [agent skill, collection of tools]
access: [free]
license: "CC BY-SA 4.0"
last_verified: "2026-09-23"
foundations: [learning-design, ai-literacy]
pedagogy: [active-learning, online-teaching-and-learning]
technology: [open-source]
audience: [instructors, administrators, instructional designers]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

**Education Agent Skills** is a library of 165 agent skills for teachers, school leaders, and people building education tools. The skills are grouped into twenty domains spanning pedagogy, learning science, curriculum, assessment, and regeneration, and each one is written to be loaded by an agent rather than read as a document.

## What you can do with it

Skills install into Claude Code, Codex, and Hermes, either as a plugin or by copying the folders, so the same library works across several agent surfaces. A hosted MCP server exposes the collection as tools for agents that cannot install skills locally, and the repository ships both a registry and a pre-built bundle so the server can serve the collection without reading the individual files at deploy time.

The project's distinguishing claim is its grounding: skills cite the evidence they rest on, and the repository's own history shows the discipline being enforced rather than asserted, including a merged fix that removed an unsupported attribution and corrected the description of a tested safeguard in a cited study.

## Notes and caveats

The educational skills, documentation, and curriculum materials are licensed CC BY-SA 4.0, so reuse and adaptation are open while derivatives must carry the same license. Two operational details matter if you deploy it. The hosted MCP endpoint requires tokens rather than being open to anyone, and because the server serves a committed snapshot rather than the SKILL.md files, a skill you add without rebuilding and committing the bundle will not appear on the live server even after a redeploy. The library is built by Gareth Manning, an educator and curriculum designer, and the licensing terms apply to the educational content specifically.

## Connected Concepts
[[learning-design]], [[ai-literacy]], [[active-learning]], [[online-teaching-and-learning]], [[open-source]]