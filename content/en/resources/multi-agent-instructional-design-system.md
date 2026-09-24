---
title: "Multi-Agent Instructional Design System"
created: "2026-09-24T05:21:08-04:00"
updated: "2026-09-24T05:21:08-04:00"
type: resource
summary: "A three-role prompt system in which a designer, a reviewer and an accessibility reviewer work in sequence to turn raw content into review-ready learning experiences."
url: https://github.com/linuxsunil/multi-agent-instructional-design-system
author: "Sunil Iyer"
author_url: https://www.linkedin.com/in/sunil-iyer-b545964/
resource_type: [prompt or gem library]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking]
pedagogy: [online-teaching-and-learning]
technology: [generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning]
assessment: [assessment]
audience: [instructional designers, curriculum designers]
level: [adult learning, higher ed]
confidence: medium
connected_resources: [id-toolbox, idstack, master-instructional-design]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

The **Multi-Agent Instructional Design System** is a set of prompt files that divides [[learning-design|instructional design]] work among three roles and runs them in sequence. A Designer agent drafts the learning experience, a Reviewer agent critiques its instructional quality, and a QA and Accessibility agent checks usability and compliance. Working it this way rather than prompting once for finished content is the point of the project: each stage is meant to surface design gaps before the material is delivered. The stated capabilities cover [[curriculum-design|curriculum design]], e-learning storyboarding, branching scenarios, [[assessment|assessment design]], cognitive load optimization and accessibility review against WCAG 2.1, with [[design-thinking|design]] decisions left visible for a human to judge.

Using it means loading a single entry file, `system.md`, into an AI environment such as OpenWorker, ChatGPT or Claude, then addressing the roles by name: "Act as Designer" to draft, "Act as Reviewer" to critique, "Act as QA" to check accessibility. The author warns against loading the individual agent files separately, since competing instructions across three loaded files produce inconsistent output. OpenWorker, the framework it builds on by Andrew Ng, is credited in the README.

## What to know before using it

The project is early and unproven: six commits, a single branch, no releases, and no stars or forks when checked in September 2026, with the last commit in July 2026. Its `LICENSE` file is the MIT text inherited from the OpenWorker framework and still names Andrew Ng as the copyright holder rather than this repository's author, so anyone adopting it commercially should resolve that first. The README's roadmap items, including automated orchestration, LMS integration and structured JSON output, describe work not yet done and should not be read as features.

## Connected Concepts
[[learning-design]], [[design-thinking]], [[curriculum-design]], [[assessment]], [[prompt-engineering]], [[generative-ai]], [[accessibility]], [[universal-design-for-learning]]
