---
title: "Public AI Libraries"
created: "2026-11-05T02:58:35-05:00"
updated: "2026-11-05T07:06:00-05:00"
type: resource
summary: "A 2025–2026 national pilot that puts a shared Public AI workstation in US public libraries — chat, image, music and video generation, a code IDE and an educational guide — with a private account for each patron."
url: https://libraries.publicai.co/
source_code: https://github.com/forpublicai/libraries-kiosk
author: "Public AI"
author_url: https://libraries.publicai.co/
resource_type: [software, collection of tools]
access: [freemium]
license: "GPL-3.0 (kiosk site); MIT (inference utility)"
last_verified: "2026-11-05"
foundations: [ai-literacy]
technology: [llm, generative-ai]
ethics: [digital-divide, equity-in-ai-education]
level: [adult learning]
audience: [librarians, administrators, learners]
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---
**Public AI Libraries** is a 2025–2026 national pilot that puts a shared AI workstation, called a kiosk, into [[libraries|public libraries]] across the United States. It is a partnership of the Library of Congress, Metagov and Public Knowledge, joined by the Utah and New Jersey state libraries; eight libraries in five states were running a kiosk when the program page was last read. The premise is provisioning rather than training: the [[digital-divide|library supplies the access]] that individual patrons cannot buy, in a staffed place where someone can help.

## What you can do with it

Each kiosk is a cloud-hosted workstation that runs on a computer the library already owns. It offers a chat assistant for research, learning and general questions; image, music and video generation; an online IDE for coding and small app projects; and an educational area with an interactive learning guide and library-vetted material. Every patron gets a separate account, so work and history are private even on a shared machine — the program says it does not store patrons' conversations or generated content on its own platform.

## Who it is for

Public libraries that want to host a kiosk (the program takes applications for pilot sites), and the staff who support patrons using it. The published use cases are job applications, business plans, coursework and creative projects. The code is also worth reading for anyone building public-interest AI services: the program site and kiosk front end are GPL-3.0 at [libraries-kiosk](https://github.com/forpublicai/libraries-kiosk), and the chat service is the [[open-source|open-source]] Public AI Inference Utility (MIT) at [chat.publicai.co](https://github.com/forpublicai/chat.publicai.co), an Open WebUI deployment that anyone can use with a free account.

## Notes and caveats

- Participating libraries contribute **$1,000 per kiosk deployment per year**; the pilot itself is limited to the sites that applied.
- The privacy statement is the program's claim, not an audited finding; a library should confirm retention and child-safety terms in its own data-processing agreement.
- The roadmap's second and third phases, letting libraries ingest local archives and govern the resulting systems, are planned rather than shipped.

## Connected Concepts

- [[libraries]]
- [[digital-divide]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[open-source]]
- [[lifelong-learning]]
- [[llm]]
