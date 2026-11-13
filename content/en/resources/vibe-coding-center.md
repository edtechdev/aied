---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
updated: "2026-11-13T12:45:00-05:00"
type: resource
summary: "An educator's field guide to building a static educational website with an AI coding assistant: three Markdown instruction files for design, security and student privacy, with readable guides and a downloadable bundle."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
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
---

**The Vibe-Coding Center** is Miguel Guhlin's free field guide for a teacher who wants to [[vibe-coding|vibe-code]] a small static educational site with an AI coding assistant — an exit ticket, a quiz, a class portfolio — without shipping an exposed API key or student data along with it.

## What you can do with it

Three instruction files carry the guidance: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` and `securevcc.md`. Download them into a project root, complete the project brief template, then ask the assistant to read and apply all three; the guide is explicit that presence is not activation, so the files have to be named in the request. Readable guides explain each one, including a "Three Essential Checks Before You Share" walkthrough: collect less student data, inspect an exposed API key, and fit a tool's design to its learning task. The complete bundle adds the site itself, prompt pack, launch review and rebuild scripts, with a SHA-256 manifest for the download.

The companion [EduSynth Hub examples](https://mguhlin.github.io/funquiz/examples.html) page shows the results as working static tools rather than screenshots: an exit ticket generator that writes a question at a chosen SOLO Taxonomy level, a student portfolio that is a single HTML file on GitHub Pages, and a searchable professional-development resource library, all running client-side with no LMS login.

## Who it is for

Teachers and [[learning-design|instructional designers]] in K-12 and higher education who can describe the tool they want and are willing to check what the assistant produced. It also suits a department that wants one shared checklist before anyone publishes a student-facing tool, and instructors teaching [[ai-literacy]] through building rather than through critique.

## Notes and caveats

The center is guidance, not a compliance product: the site makes no conformance claim for its own WCAG 2.2 AA target, answers "does using these files make my site compliant?" with no, and says an engineering review does not replace school authorization or legal review. The security shelf points at axe-core, Gitleaks, ZAP and Playwright; those are references rather than bundled software, and the invasive ones are meant for a disposable or explicitly authorized target. Reading needs no account. Rebuilding the HTML pages needs Python and `markdown-it-py`, which is a build dependency and not a visitor dependency. The repository is MIT-licensed, while third-party artwork and the linked projects keep their own terms, documented in `CREDITS.md`.

## Connected Concepts

[[vibe-coding]], [[ai-literacy]], [[accessibility]], [[learning-design]], [[design-thinking]], [[generative-ai]], [[privacy]]
