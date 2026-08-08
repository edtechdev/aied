---
title: 'Let''s Chat: Leveraging Chatbot Outreach for Improved Course Performance'
created: 2026-08-03
updated: 2026-08-03
type: concept
tags: [higher-ed, student-experience, generative-ai, engagement-metrics, rct]
sources: [raw/papers/lets-chat-chatbot-outreach-2026.md]
confidence: high
---

# Let's Chat: Chatbot Outreach for Course Performance

> Meyer, Page, Mata et al. (2026) ran two pre-registered RCTs at Georgia State University testing a **non-generative** academic chatbot that texted students 2–3 customized nudges per week in large-enrollment online courses. It raised the probability of earning an A or B by **4 percentage points** — driven entirely by women in Microeconomics (+7 grade points, +11 pp A/B, −10 pp DFW) — via a task-completion channel (tutoring attendance, homework completion), with no spillover to other courses.

## Design

- Two RCTs (REES-registered) in GSU's Introduction to American Government and Principles of Microeconomics — large-enrollment, asynchronous online courses
- Half of students got a **Mainstay chatbot**: 2–3 scheduled text messages/week (due dates, nudges for missing assignments, encouragement), personalized ("Hi FIRSTNAME") and targeted (differentiated by missing-work status); 24/7 AI responses from a curated content knowledge base, TA fallback for unanswered questions
- Note: the bot is **non-generative AI** — rule/AI-answered from a pre-programmed knowledge base — which is precisely why it's relevant: minimal hallucination risk at scale

## Results

- **+4 pp likelihood of earning an A or B**, similar across both courses
- **Microeconomics women: +7 grade points** vs control women; **+11 pp A/B**; **10 pp less likely to DFW**. No treatment effects for men
- Mechanisms: treated students **more likely to attend university tutoring**; suggestive homework-completion gains in Micro (weekly-assignment course); no assignment effects in Government
- **No spillover**: no effects on other courses that term or on next-semester enrollment/performance — course-specific gains without (yet) developed study habits
- **82% of surveyed students recommended continuing the bot** and expanding it

## Why it matters

- Large-enrollment online courses have documented negative outcomes; low-touch, scalable outreach is one of the few levers that work
- Contrasts with other low-touch outreach null results (Oreopoulos & Petronijevic 2019) — **timing and customization matter**; nudges work best on ongoing, dynamic tasks (weekly assignments) rather than one-shot inputs
- Shows the channel matters: chatbot outreach moved students to *human* tutoring — a complementarity rather than substitution story
- A useful counterpoint to [[genai-can-harm-teaching-rct-2026]]: this is student-facing, non-generative, low-stakes outreach, where AI assistance had positive effects — the harm findings are about generative teacher-facing tools used for delegation

## Connections to the wiki

- A positive control for the [[higher-ed]] AI-outreach literature: rule-based chatbots with curated content bases avoid the [[hallucination-risk]] of generative systems while capturing the engagement gains
- The task-completion channel connects to [[engagement-metrics]] and to the "nudge vs. tutoring" debate — it works by pushing students toward human support
- The null spillover (no habit formation) mirrors [[genai-availability-grades-satisfaction]]: proximal effects do not always translate into durable learning gains
- Ties to [[student-experience]]: students liked and recommended the bot (82%)
- Contrast with [[beyond-detection-authentic-assessment-ai-2025]]'s generative-AI framing: outreach chatbots are a low-ambition, high-reliability AI use case

## Related Pages
- [[higher-ed]] — large-enrollment online course context
- [[student-experience]] — engagement and recommendation outcomes
- [[engagement-metrics]] — A/B, DFW, and task completion as outcomes
- [[generative-ai]] — the non-generative contrast case
- [[hallucination-risk]] — why the curated knowledge base matters
- [[genai-can-harm-teaching-rct-2026]] — the teacher-facing generative-AI counterpoint
- [[genai-availability-grades-satisfaction]] — null results on grades elsewhere
- [[intelligent-tutoring]] — human tutoring as the mechanism
- [[equity]] — women-only effects in Microeconomics
- [[over-reliance]] — low-stakes outreach avoids the reliance trap

## Citation

- Meyer, K. E., Page, L. C., Mata, C., Smith, E., Walsh, B. T., Fifield, C. L., Tyson, M., Eremionkhale, A. E., Evans, M., Frost, S., & Jung, E. E. (2026). Let's Chat: Leveraging Chatbot Outreach for Improved Course Performance. NBER Working Paper No. 35397. [NBER](https://www.nber.org/papers/w35397)
