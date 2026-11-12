---
title: "What Are the Options and Issues to Consider When Adopting AI Tools?"
created: "2026-11-12T15:20:00-05:00"
updated: "2026-11-12T17:10:00-05:00"
type: faq
connected_faqs: [institutional-ai-policy, course-ai-policy, checking-whether-educational-ai-works, what-not-to-do-ai-education]
weight: 88
foundations: [ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, open-source]
ethics: [privacy, equity-in-ai-education, ai-use-disclosure]
methods: [ai-ed-evaluation]
audience: [instructors, administrators, educational technology developers, policymakers, learners]
level: [higher ed, k 12]
institutions: [governance, institutional-ai-infrastructure, shadow-ai]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
---

A department chair has three quotes for an AI tutoring platform and a Friday deadline. A teacher wants to use a free tool that half the staff already uses. A chief information officer is asked whether the institution should run its own model and cannot say what that would cost.

These are the same question at three altitudes. The options are fewer than a vendor list suggests, and the issues last longer than any product.

The choice should match the decision in front of you. An individual decides what to put into a tool. An institution decides who may use which model, on what data, at what cost, and who answers when something goes wrong. Most bad adoption decisions come from answering the institutional question with an individual tool.

## The short version

Five rules cover most of it. Settle the data boundary first, because everything else can be renegotiated and that cannot. Pick the smallest shape that fits: free or outsourced tools for a pilot, a hosted platform when you need data control without GPUs, a gateway when you need quotas and routing, and owned inference only when the other three fail. Compare per-seat and metered pricing against your own numbers, since most usage usually comes from a few heavy users. Make the sanctioned path faster than the unapproved one, since EDUCAUSE found 94% of staff and faculty using AI for work, 54% aware of the policy and 56% using tools the institution does not provide. Then decide in advance what evidence would make you stop, because adoption without an exit test becomes permanent by default.

## At the individual level

An instructor or a student is making a data decision before a teaching decision. Student names, IEP details, disciplinary notes and unpublished research create the liability, so redact first and check whether the tool still does the job. Then read the terms: retention, training on your inputs and subprocessors usually sit in a document nobody opens, and if the answer cannot be found in five minutes, treat it as unknown.

Know what the tool does well. Generated text is strongest at drafting, restructuring and summarizing, and weakest at arithmetic, citations and anything needing current facts. Know what it costs you too. A free tier is free because the usage is the product or because the tier will change, and either is a reason to keep an exit in mind.

Two questions remain. Who else is affected, since a tool that reshapes a course is a decision for the students in it. And whether it is allowed: read the policy once if there is one, and if there is not, the [[shadow-ai]] evidence suggests you are already making policy by default.

The blunt heuristic: use the sanctioned tool when it is within reach, and when it is not, write down what you did and why. That record is what protects you if the judgment is questioned later.

## At the institutional level

An institution buys a service, a data flow, a support obligation and a political commitment in one purchase. Six shapes make up the real menu, and most institutions are in two or three of them without knowing it.

The easiest start is a free outsourced tool. AI Tutor Pro from Contact North needs no account, and Playlab lets educators build apps grounded in their own curriculum while the vendor hosts the models. Both are fine for a pilot and poor as a settlement: no audit trail, no quota control, and terms that can change.

Buying seats on a commercial tenant, whether ChatGPT Edu, Microsoft 365 Copilot or Google Gemini for Education, brings fast procurement, SSO and an admin console, and leaves model choice and retention with the vendor.

A platform you host keeps the data closer. [Amplify GenAI](/aied/resources/amplify-genai/) deploys into your own AWS account, and Vanderbilt's pilot reported about \$3 per user per month at 1,300 users, half of them under \$1 in tokens. That buys data control without GPUs.

A gateway over mixed providers puts one front door in front of several. It carries quotas, SSO, logging and regional routing; Fontys ran one for 300 users under a \$500 monthly cap that was never breached, and [MindRouter](/aied/resources/mindrouter/) adds role-weighted scheduling and energy metering.

Your own inference is the most expensive shape and the most independent. Purdue's two services reached over 1000 users on 10+ open-source models for roughly \$100,000 in hardware, before staffing. It answers a regulator without asking a vendor's permission.

The last shape is AI inside tools you already run: a Moodle question type, a discussion platform's AI partner, an essay-feedback tool. Low lift and course-by-course change, with little learned at the center.

## The issues that do not go away

Data protection comes first. What matters is which record now exists that did not before, where it lives and who can retrieve it. A tool that receives a class list has created an institutional record whatever the contract says.

Identity and access come next. Anything used at scale needs SSO, role-based access and offboarding, and a tool that cannot deprovision a departing employee leaves a standing account with your data in it.

Costs depend on how the price is counted. Per-seat pricing rewards headcount and metered pricing rewards usage. Because a small share of users usually generates most of the tokens, per-seat looks cheap until the heavy users go elsewhere.

Measurement is usually the missing piece. EDUCAUSE found 92% with a work-related AI strategy and 13% measuring return on investment. If you cannot say what the tool replaced, you cannot defend the renewal.

Equity and accessibility belong in procurement rather than in a later fix. A tool that requires a fast connection, a paid tier or English fluency spreads its benefit unevenly.

Academic integrity changes what assessment measures. When a tool can complete the assignment, the assignment is what needs revising.

Staffing and vendor dependence matter as much as the price. Every shape above except the free one needs an owner, and the usual failure is buying the fourth or fifth shape and staffing it with whoever was already busy. Ask what happens at renewal, at a price change and at a model deprecation; the gateway shapes exist so that the answer is a routing change rather than a migration.

## What a good first year looks like

Choose two or three measures before anything launches: who used it, for what, what it cost per active user, and what changed in the work. A pilot that cannot produce those numbers is a demo with a budget.

Check the boundary conditions at the same time. If the tool touched student records, did the data flow match what you told the privacy office? If usage went unmeasured, was that because the tool could not report or because nobody asked?

Keep the sanctioned path short. The EDUCAUSE figures suggest people bypass governance because the approved route takes longer than the task. A gateway with a model card and same-day access is a governance instrument as much as an IT convenience.

## Common mistakes

Buying a platform before naming the problem produces usage statistics and little else. Treating free as a strategy works for a pilot and fails as infrastructure. A local model changes who can be subpoenaed; it does not decide whether prompts are retained. Measuring satisfaction instead of effect turns "teachers liked it" into a finding it is not. And a policy published without a workable path describes preferences rather than rules.
