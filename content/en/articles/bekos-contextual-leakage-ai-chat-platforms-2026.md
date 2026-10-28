---
title: "Penny for Your Prompts: A Measurement Study of Contextual Leakage in AI Chat Platforms"
created: "2026-10-28T12:00:00-04:00"
updated: "2026-10-28T12:00:00-04:00"
type: article
authors: ["Bekos, P.", "Tsouvalas, B.", "Nikiforakis, N.", "Polychronakis, M."]
published: "2026-10-27"
venue: "arXiv preprint"
source_url: https://arxiv.org/abs/2610.37467
foundations: [ai-education]
pedagogy: [student-ai-interaction]
technology: [generative-ai, conversational-ai, edtech-platform]
methods: [research-methods-aied, ai-ed-evaluation]
ethics: [privacy, legal-issues-and-risks]
institutions: [governance, regulation]
research_method: [experiment]
discipline: [cs education]
level: [higher ed, k 12]
audience: [administrators, instructors, educational technology developers]
page_kind: [evaluation]
sources: ['raw/papers/bekos-contextual-leakage-ai-chat-platforms-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
---

> **Synthesis:** Bekos, Tsouvalas, Nikiforakis and Polychronakis (2026) run the first large-scale measurement of contextual leakage in AI chatbots, auditing the web interfaces of 42 platforms — 25 general-purpose and 17 task-specific agents for education, health and legal advice — with network capture plus JavaScript-engine instrumentation that attributes each leak to the user action that caused it. They find that 21 platforms send conversation titles to third-party trackers and nine transmit verbatim prompts, and that 11 of the 13 leaking general-purpose platforms also hand over the registration email, turning an anonymous disclosure into a named record. The mechanism is unremarkable: trackers read the page title, which on a chatbot holds an auto-generated summary of what the user asked. Education platforms were the heaviest trackers in the sample, averaging roughly 367 tracker requests per platform with about 24 percent carrying user content. For anyone running a [[edtech-platform|course chatbot]], the finding moves [[privacy]] risk from the model provider to the analytics tag on the page.

## Key Findings

1. **Leakage is systemic rather than exceptional.** 21 of 42 platforms sent conversation titles to at least one third-party tracker and nine sent the verbatim prompt; 13 of the 25 general-purpose platforms leaked a title.
2. **Context usually arrives attached to identity.** 11 of the 13 leaking general-purpose platforms also sent the registration email to trackers, and on eight a single company received both signals.
3. **Task-specific tutors leak as readily as general ones.** 8 of the 17 domain-specific platforms leaked titles and five leaked full prompts, and all eight also transmitted the user's email.
4. **Education platforms tracked hardest in this sample.** Education averaged about 367 tracker requests per platform with 24 percent carrying user content, against 317 (9 percent) for legal and 124 (3 percent) for health.
5. **One education platform drove most of the category's leakage.** SciSpace accounted for roughly 80 percent of education's leaking requests, so the category gap reflects individual platforms rather than the domain.
6. **The capture mechanism is ordinary page metadata.** On eight of nine leaking platforms a script read the page title property; Meta Pixel instead queried the title element, and Microsoft Clarity walked the page text.
7. **Privacy notices do not describe this collection.** Several platforms state that user data is not sold or shared for targeted advertising while advertising and analytics pixels on their interfaces collected conversational context.

## What the study measured, and how

The audit covers 42 platforms: 25 general-purpose chatbots chosen from popularity rankings and 17 task-specific agents — seven education, seven health and four legal, with one companion app counted twice. Every platform offered a free account and a web interface accepting free-form prompts; coding assistants, API routers and mobile apps were excluded. Sessions ran in clean browsers from a US East vantage point between May 6 and May 20, 2026, with consent prompts accepted as presented.

Two instruments were layered. Puppeteer captured all outbound traffic, and every request was searched for the seeded prompt and the recorded title. VisibleV8, an instrumented Chromium build logging JavaScript calls at the engine level, then ran five isolated scenarios — submit, navigate, delete, scroll, click — so each flow was attributed to one causal trigger. Because [[conversational-ai]] interfaces re-render constantly, that step separates this study from earlier single-prompt audits.

## Why a chat title is not ordinary page metadata

On a conventional site, the page title and URL are static descriptors; a tracker reading them learns which product page a visitor opened. On a chatbot, each conversation renders as a sub-page whose title is generated from the user's own prompt, so the same reads return a compression of what the person asked. The paper traces the exact calls: a property read of the page title on eight of nine leaking platforms, a query for the title element by Meta Pixel on all five platforms where it appears, and a full text walk by Clarity that captured the raw prompt from the input field before any title existed.

That matters because [[learning-analytics|analytics]] and session-replay tools are installed on the assumption that the metadata they collect is generic. On a tutoring platform, a description of the conversation is a description of the student. The authors frame this as a mismatch between tool design and deployment context, which is why configuration review and [[guardrails]] bear on it.

## Education platforms were the heaviest trackers in the sample

The seven education platforms averaged roughly 367 requests to tracker domains per platform, and about 24 percent of those requests carried the title, prompt or email — the highest share of the three sensitive categories. SciSpace generated about 80 percent of the education category's leaking requests, and the authors record it sending title, prompt and email to Google, Amplitude and Intercom. iAsk leaked title, prompt and email to Google in both its education and companion configurations; EduBrain split conversation and email between Google and Intercom; Elicit and Answer.AI leaked as well.

Conversation content traveled in plaintext across all categories, while email addresses were usually hashed with SHA-256 on education and legal platforms and sent unencrypted by the health platform that leaked them. A smaller footprint is not better protection: a hashed identifier is harder to use, but a raw address needs no processing at all.

## What the leaks mean for learners who disclose

The education prompts were deliberately ordinary: a request for academic references paired with a request for sources on a sensitive personal topic. That pairing is the point. Students use study bots for coursework and, in the same session, for something private. The title generator then summarizes the private half and publishes it into the page structure, where [[student-ai-interaction|the next script to run]] reads it.

Multiple platforms disclose that analytics frameworks record page views, clicks and session duration, and several state that data is not sold or shared for targeted advertising, yet the pixels operate and collect. Whether that is a disclosure failure or an unexamined default, the effect for a [[higher-ed|university]] or [[k-12|school]] buyer is the same: the assessment must cover the page, not only the model, and [[regulation|rules]] aimed only at the model vendor leave the installed tag untouched.

The remediation path is modest and demonstrated. ChatGPT and Grok removed the trackers collecting conversation context before the paper was submitted, and TheLawGPT reconfigured the offending tracker after notification. Two design directions follow: generate less revealing titles, and build analytics that measure usage without reading content.

## What this means for practice

- **Instructors.** Treat student disclosure inside a chatbot as data leaving the institution. Five of the seven education platforms leaked conversational context, and leaks fired on prompt submission and on the first navigation between chats.
- **Administrators.** Require a third-party script inventory for any chatbot you license or host, and ask which tags can read the page title, the URL and the input field. Education platforms averaged about 367 tracker requests per platform, with 24 percent carrying user content.
- **Developers.** Do not derive conversation titles from the full prompt by default, and keep prompt text out of the URL. On You.com the prompt sat in the page address, where every tracker reading the location received it.
- **Researchers.** Audit the full interaction sequence, not a single prompt: the five-scenario decomposition found leaks on submission and navigation, and delete triggered a title leak on one platform.

## Limitations

- Measurement ran from May 6 to May 20, 2026 from one US East vantage point with tracking consent accepted, so the study cannot say whether platforms honor consent choices or how deployments differ by jurisdiction.
- The corpus is 42 web platforms with free tiers; mobile and desktop clients are excluded, and the seven-platform education subset describes those platforms rather than the education chatbot market.
- ChatGPT and Grok changed their interfaces and removed the leaking trackers before submission, and the authors excluded both from the interaction-decomposition analysis, so the per-action results rest on nine platforms.
- Detection depends on seeded prompts and recorded titles appearing in outbound requests; context that was re-encoded or hashed beyond either marker would not be counted.

## Citation

Bekos, P., Tsouvalas, B., Nikiforakis, N., & Polychronakis, M. (2026). [*Penny for Your Prompts: A Measurement Study of Contextual Leakage in AI Chat Platforms*](https://arxiv.org/abs/2610.37467). arXiv preprint arXiv:2610.37467.
