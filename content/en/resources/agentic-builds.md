---
title: "Agentic Builds (Marc Watkins)"
created: "2026-11-13T09:14:20-05:00"
updated: "2026-11-13T09:14:20-05:00"
type: resource
summary: "An open shelf of classroom apps built by prompting a coding agent, arranged in six teaching pathways with a fuller 35-build gallery behind it — each app starts from a teaching problem and ships with its own AI disclosure."
url: https://marcwatkins.org/builds/
source_code: https://github.com/mwatkins03-netizen?tab=repositories
author: "Marc Watkins"
author_url: https://marcwatkins.org/about/
resource_type: [collection of tools]
access: [free]
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [desirable-difficulties]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers]
level: [higher ed]
connected_resources: [vibe-coding-center]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-13"
    agent: hermes-agent
reviewed_by: [editor]
---

**Agentic Builds** is Marc Watkins's open shelf of classroom apps built in conversation with a coding agent — thirty-five of them gathered in the Grove Lab gallery, each one starting from a teaching problem and shipping with its own AI disclosure.

## What you can do with it

Six pathways organize the collection. Stand-alone learning apps are one focused activity a student opens, works through and exports — *Pause Before You Prompt* asks for critical sources and the questions that matter before AI use, and *Sentence Sound Lab* makes sentence length audible. Gamified apps and simulations run from *Career Futures*, a decision game about AI exposure and labor fed by live data, to *The AI Midway*, a carnival of higher education's improvised and contradictory responses to AI. Research and outside data builds pull from APIs and archives: *The Complaint Atlas* reads CFPB student-loan complaint narratives through TypeSafe AI's Jev model, and *Body of Evidence* asks "how do you know that?" across nine body systems. [[desirable-difficulties|Desirable difficulties]] gathers builds that deliberately slow students down — *Omelas: The Classroom Walk*, *The Focus Classroom*, a field edition of Hemingway's *Big Two-Hearted River*. Faculty and course design tools include an assignment-guidelines builder that outputs Blackboard-ready HTML. The [gallery](https://mwatkins03-netizen.github.io/The-Grove-Lab/gallery.html) adds search, "close to my idea" tags and a build-request form, so the collection doubles as a design intake.

## Who it is for

Instructors and [[learning-design|instructional designers]] who want a worked example of a small app tied to one teaching problem, and faculty developers looking for models to hand to colleagues. Each build is a [[vibe-coding|vibe-coded]] static site rather than a platform: a reader can open it in a browser, and a department can see what a shelf looks like when every project is small enough to finish.

## Notes and caveats

The builds are described as shared openly, but no license is stated on the builds or gallery pages, so reuse needs the author's permission rather than an assumed grant. The source is public, though — the account's repositories hold the HTML and JavaScript behind the builds, plus a tutorial for working with coding agents in education, so a reader can inspect an app rather than only run it. Several links point at Netlify deploy-preview addresses rather than a project site; those are built for review and can expire, while the GitHub Pages builds are the stable ones. Some builds depend on TypeSafe AI's Jev model and show its probabilities, so the underlying behavior is a model's judgment rather than a fixed rule. The desirable-difficulties pathway is an argument — friction as a feature — and the page presents it without reporting an evaluation of whether students learn more.

## Connected Concepts

[[vibe-coding]], [[learning-design]], [[desirable-difficulties]], [[agentic-ai]], [[generative-ai]], [[simulation]]
