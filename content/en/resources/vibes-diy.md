---
title: "Vibes DIY"
created: "2026-09-23T17:45:00-04:00"
updated: "2026-09-23T17:45:00-04:00"
type: resource
summary: "A plain-language app builder: describe a small tool in words and get a working, shareable web app, with the underlying React packages and CLI released under Apache-2.0."
url: https://vibes.diy/
source_code: https://github.com/VibesDIY/use-vibes
author: "The Vibes DIY project"
resource_type: [software, collection of tools]
access: [freemium]
license: "Apache-2.0"
last_verified: "2026-09-23"
foundations: [ai-literacy, design-thinking]
pedagogy: [constructivist]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [onmicro-ai]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

**Vibes DIY** turns a description written in plain words into a working web app, then keeps changing it as the creator describes what to change next. Someone who wants a bingo card generator, a scoreboard, or a small practice tool can build one without writing code, share it by link, and let others remix it from a gallery.

## What you can do with it

Describe an app, keep talking to revise it, and choose whether it stays private, is shared by invitation, or is published. Some projects connect to email, documents, or social accounts, which is how a small app becomes a working assistant with a personality. The `examples/` directory in the repository holds thirty complete apps with their source, including backends and access control, and the project publishes the prompt set it uses for generation, so the technique is inspectable rather than hidden.

## Who it is for

It is a general-purpose builder rather than an education product: it is useful to an instructor or student who needs a small purpose-built tool and does not want to commission software, and to a class that studies how such tools are made. The React library, the CLI, the image component, and the prompt package are open source under Apache-2.0, so a district or a course can build with them directly.

## Notes and caveats

The platform has a free tier but it is credit-based: accounts get 1,000 AI credits a month, and building, editing, generating images, and in-app AI features all spend them. A subscription adds the option to buy more credits, which do not expire. Any course that intends to rely on the platform should check the current terms, since free usage is metered rather than unlimited, and should treat student-created apps as content with data-handling questions of its own.

## Connected Concepts
[[ai-literacy]], [[open-source]], [[design-thinking]], [[constructivist]], [[learning-design]]