---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
updated: "2026-11-24T09:45:00-05:00"
type: resource
summary: "An educator's field guide to building a static educational website with an AI coding assistant: four Markdown instruction files for design, security, student privacy and repair, plus a library of agent-ready skills and a downloadable bundle."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-24"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-13"
    agent: hermes-agent
reviewed_by: [editor]
connected_concepts: [vibe-coding, ai-literacy, accessibility, learning-design, design-thinking, generative-ai, privacy]
---

**The Vibe-Coding Center** is Miguel Guhlin's free field guide for a teacher who wants to [[vibe-coding|vibe-code]] a small static educational site with an AI coding assistant — an exit ticket, a quiz, a class portfolio — without shipping an exposed API key or student data along with it.

## What you can do with it

Four instruction files carry the guidance: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md`, `securevcc.md`, and a newer fourth guide, Vibe-Code Rescue, for stabilizing a project that keeps breaking. Download them into a project root alongside a completed `PROJECT_BRIEF.md` recording what you are building and who it serves, then ask the assistant to read and apply all four; the guide is explicit that presence is not activation, so the files have to be named in the request. Readable guides explain each one, including a four-checks-before-you-share walkthrough: collect less student data, inspect an exposed API key, fit a tool's design to its learning task, and reproduce and repair a bug before trusting the fix.

Alongside the guides sits a library of 25 reusable skills covering learning, writing, evidence and app-development workflows, each supplied as Markdown with a setup prompt and a use prompt, plus concept sketches and hero illustrations that suggest rather than supply finished apps. Each skill can also be created inside a project as an agent skill. The complete bundle contains the four featured guides, 29 agent-ready skill files counting the guides themselves, the SecureVCC reference and provenance files, pointer examples for both AGENTS.md and CLAUDE.md, hero art and both visual explainers, and the site source with resource-review and rebuild scripts. A SHA-256 manifest ships beside the download, and reading needs no account.

The companion [EduSynth Hub examples](https://mguhlin.github.io/funquiz/examples.html) page shows the results as working static tools rather than screenshots: an exit ticket generator that writes a question at a chosen SOLO Taxonomy level, a student portfolio that is a single HTML file on GitHub Pages, and a searchable professional-development resource library, all running client-side with no LMS login.

## Who it is for

Teachers and [[learning-design|instructional designers]] in K-12 and higher education who can describe the tool they want and are willing to check what the assistant produced. It also suits a department that wants one shared checklist before anyone publishes a student-facing tool, and instructors teaching [[ai-literacy|AI literacy]] through building rather than through critique.

## Notes and caveats

The center is guidance, not a compliance product: the education guide separates engineering safeguards from legal review and school authorization, so an engineering review does not replace either. The security guide asks for source evidence and safe synthetic tests rather than treating a hidden button, a working login or a clean scanner report as proof that private information is protected. Rebuilding the published HTML pages needs Python and the dependency listed in `requirements.txt`, which is a build dependency and not a visitor dependency. The repository is MIT-licensed, while third-party artwork and the linked projects keep their own terms, documented in `CREDITS.md`; the site credits design refinement to unslop by Damir Sokolovsky under CC BY 4.0.
