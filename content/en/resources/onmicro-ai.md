---
title: "OnMicro.AI"
created: "2026-09-23T17:45:00-04:00"
updated: "2026-09-23T17:45:00-04:00"
type: resource
summary: "A no-code builder that lets educators make focused AI apps, publish them by link, embed them in an LMS through LTI, and see how students use them."
url: https://onmicro.ai/
source_code: https://github.com/onmicroai/micro_ai
author: "The OnMicro.AI project"
resource_type: [software, collection of tools]
access: [freemium]
license: "AGPL-3.0"
last_verified: "2026-09-23"
foundations: [ai-literacy, ai-education]
pedagogy: [scaffolding, active-learning]
technology: [open-source, edtech-platform]
audience: [instructors, instructional designers, administrators]
level: [higher ed]
confidence: high
connected_resources: [vibes-diy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

**OnMicro.AI** is a no-code builder for education that produces narrow, purpose-built AI apps rather than open-ended chat. An instructor designs a structured workflow, controls what the app accepts and returns, publishes it as a link that students can open without accounts or licenses, and then sees aggregate use, cost, satisfaction, and accuracy for the app itself.

## What you can do with it

Apps can be embedded in Canvas, Moodle, Blackboard, or any LTI-compatible platform, where grades and access can sync; the published examples include a patient-communication simulation, a case-study feedback app that scores understanding before a student moves on, and a short language-practice challenge. Usage analytics are the reason the project gives for preferring apps to custom chatbots: a designed flow can be observed and revised, while an open chat cannot. Models from the major providers can be selected, and the platform tracks what each app costs to run.

## Who it is for

It suits instructors and learning designers who want bounded, repeatable interactions, and administrators who need a supported deployment path. It is a hosted commercial service this repository documents: the source is open, and the platform is also sold as a subscription.

## Notes and caveats

The free tier is limited to 10,000 AI credits and three apps; unlimited apps and advanced models start at the Pro tier, and LTI integration, single sign-on, and advanced analytics are listed at the Enterprise tier, so the features an institution most needs are the ones that carry a price. The repository is licensed **AGPL-3.0** according to its `LICENSE` file, which matters for anyone intending to self-host or modify it, and its README still says LGPL from before that change, so read the license file rather than the README. Institutions should also confirm their own data-processing terms before routing student work through a hosted third-party service.

## Connected Concepts
[[teacher-ai-competency]], [[learning-design]], [[open-source]], [[intelligent-tutoring]], [[scaffolding]]