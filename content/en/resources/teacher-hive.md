---
title: "Teacher Hive"
created: "2026-11-10T19:47:00-05:00"
updated: "2026-11-10T19:52:00-05:00"
type: resource
summary: "Tony Vincent's free-to-use hosting platform where teachers publish AI-generated classroom web apps, share them by link or QR code, and browse hundreds of apps made by other teachers."
url: https://teacherhive.app/
author: "Tony Vincent"
author_url: https://teacherhive.app/about
resource_type: [software, collection of tools]
access: [freemium]
last_verified: "2026-11-10"
foundations: [teacher-ai-competency]
technology: [generative-ai]
audience: [instructors, instructional designers]
level: [k 12, teacher education]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
reviewed_by: [editor]
---

**Teacher Hive** is a hosting and sharing platform for teacher-made classroom apps, built by Tony Vincent. Its premise is that the hard part of classroom AI is no longer getting a model to write a small app but finding somewhere it will run on a school network and be easy for students to open. Teachers paste or upload a single HTML file produced by ChatGPT, Claude or Gemini, and Teacher Hive serves it at a short public link with an icon and QR code. Browsing, bookmarking, following and publishing are free; a paid Pro tier raises storage and app limits.

## What you can do with it

**Browse** published apps by collection — brain breaks, ELA, math, science, social studies, teacher tools — then **Publish** an app by pasting HTML, adding a name, description, icon and AI attribution. Each app gets an info page with a Launch button and QR display, and opens without branding or a student login. An optional **Superpowers** layer adds saved responses, AI calls, email and file storage, metered by plan. For a single app that does not need a gallery, two free alternatives work by drag-and-drop: [Cloudflare Drop](https://www.cloudflare.com/drop/) publishes a folder, zip or single HTML file to a workers.dev URL without an account, provided the deployment is claimed within 60 minutes, and [Netlify Drop](https://app.netlify.com/drop) publishes the same inputs to a public link on its free plan.

## Who it is for

K–12 teachers who have used [[generative-ai|generative AI]] to build a small tool and need somewhere reliable to host it are the primary audience; the platform is designed for [[vibe-coding]] rather than for developers. Instructional designers and teacher educators can use the collections as examples and as a low-stakes way to build [[teacher-ai-competency|teacher AI competency]].

## Notes and caveats

Member and Builder are free (Builder: 50 apps, 50 MB); Pro is $10 per month or $60 per year for 500 apps. Access is freemium.

Privacy is the stronger claim, but it shifts responsibility to teachers. Teacher Hive creates no student accounts, asks students for no personal information, and runs no analytics or advertising scripts inside published apps. Because apps are public by link, the terms make teachers responsible for ensuring their apps collect no names, emails, student IDs or location. Accessibility coverage (WCAG 2.2 AA) applies to Teacher Hive's own pages, not teacher-made apps, which are untested. No open-source license is stated, and uptime and data retention are not guaranteed.

## Connected Concepts

- [[teacher-ai-competency]]
- [[generative-ai]]
- [[vibe-coding]]
- [[ai-literacy]]
- [[professional-training]]
