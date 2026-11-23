---
title: "eLearning Prompt Library"
created: "2026-11-23T09:12:00-05:00"
updated: "2026-11-23T09:12:00-05:00"
type: resource
summary: "Sunil Iyer's MIT-licensed GitHub collection of 22 copy-paste AI prompts for instructional designers and eLearning developers, each tagged with the learning theory it applies."
url: https://github.com/linuxsunil/elearning-prompt-library
source_code: https://github.com/linuxsunil/elearning-prompt-library
author: "Sunil Iyer"
author_url: https://github.com/linuxsunil
resource_type: [prompt or gem library]
access: [free]
license: "MIT"
last_verified: "2026-11-23"
foundations: [ai-literacy, learning-design]
pedagogy: [learning-theories]
technology: [generative-ai, prompt-engineering]
audience: [instructional designers, educational technology developers, curriculum designers]
connected_resources: []
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-23"
    agent: hermes-agent
connected_concepts: [prompt-engineering, learning-design, learning-theories, generative-ai]
---

**eLearning Prompt Library** is a GitHub repository by Sunil Iyer that collects [[prompt-engineering|AI prompts]] written for instructional designers, eLearning developers and L&D project managers. Twenty-two prompt files sit in seven category folders — instructional design, content development, Articulate Storyline and Rise, assessment, project management, QA and review, and AI media. Each file is a copy-and-paste block with bracketed placeholders, and each names the learning theory it applies; a companion reference document lists sixty theories in six families. The author's framing is that generic prompts produce content which looks instructional without being grounded in how people learn, and that tagging every prompt with a named theory is what makes the set usable.

## What you can do with it

The library is organized by production task rather than by tool. Its instructional-design prompts cover gap analysis against [[bloom-taxonomy|Bloom's taxonomy]], a cognitive-load audit, turning SME notes into a lesson plan, selecting a theory, planning a Gagné nine-events module, action mapping and a UDL accessibility audit. Content prompts build storyboard shells, narration scripts and an ARCS motivation review. The Storyline and Rise prompts address trigger logic, Rise block sequencing and HTML5 interaction specifications; the assessment prompts cover branching scenarios, question banks and Kirkpatrick evaluation planning; and two project-management and two QA prompts round out the set.

The prompts are tool-agnostic — the README says they run in Claude, ChatGPT or Gemini — and the contribution guide asks each author for three to five short "Notes" carrying iteration tips.

## Who it is for

Instructional designers and educational technology developers who want a theory-tagged starting point rather than an empty prompt box, and L&D teams building Articulate Rise or Storyline courses. It suits someone who already knows which theory fits a project and wants the prompt scaffold. It is a professional-production library aimed at adult and workplace learning, not a classroom tool for students.

## Notes and caveats

- **The counts disagree.** The README badge and its category table both say 23 prompts; the repository holds 22 Markdown prompt files, and its own index table stops at 22.
- **Theory tagging is the author's own mapping.** Nothing validates that a prompt applies the theory it names. "Evidence-based" and "production-ready" are the author's claims, and each output still needs subject-matter checking before it goes into a course.
- **Very young and unvetted.** One contributor, two stars, no published releases as of November 2026, and a repository created on 15 November 2026 — days old, not a maintained collection. Adoption counts are as read on 23 November 2026.
- **MIT licensed.** Free to copy and adapt, including commercially, with attribution.

## Connected Concepts

[[prompt-engineering]], [[learning-design]], [[learning-theories]]
