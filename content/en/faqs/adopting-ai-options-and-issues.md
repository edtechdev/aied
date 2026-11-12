---
title: "What Are the Options and Issues to Consider When Adopting AI Tools?"
created: "2026-11-12T15:20:00-05:00"
updated: "2026-11-12T15:20:00-05:00"
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

A department chair is handed three quotes for an AI tutoring platform by Friday. A teacher wants to use a free tool that half the staff already uses. A CIO is asked whether the institution should "just run its own model" and cannot say what that would cost. These are the same question at three altitudes, and the honest answer is that the options are fewer than the vendor list suggests and the issues are more durable than the product.

The short answer: choose the option that matches the decision you are actually making. An individual is deciding what to put into a tool. An institution is deciding who may use which model, on what data, at what cost, and who answers when it goes wrong. Most bad adoption decisions come from answering the institutional question with an individual tool.

## The short version

**1.** Settle the boundary first: what data may leave the room or the institution. Everything else is negotiable; that is not.

**2.** Pick the smallest shape that fits. Free or outsourced tools for a pilot, a hosted platform for data control without GPUs, a gateway when you need quotas and routing, owned inference only when the other three fail.

**3.** Compare per-seat and metered pricing against your actual usage distribution, not a vendor's average. Usage is almost always skewed.

**4.** Require a sanctioned path that is faster than the unapproved one. EDUCAUSE found 94% of staff and faculty using AI for work and 54% aware of the policy; 56% used tools their institution does not provide.

**5.** Decide in advance what evidence would make you stop. Adoption without an exit test becomes permanent by default.

## At the individual level

For an instructor or a student, adoption is a data decision before it is a pedagogical one. Six checks cover most of it:

- **What leaves your hands.** Student names, IEP details, disciplinary notes and unpublished research are the items that create liability. Redact first, then decide whether the tool still does the job.
- **What the terms permit.** Retention, training on your inputs, and subprocessors are usually in a document nobody opens. If the answer cannot be found in five minutes, treat it as unknown.
- **What the tool is good at.** Generated text is strongest at drafting, restructuring and summarizing, and weakest at arithmetic, citations and anything requiring current facts. The verification habits are part of the tool, not an optional extra.
- **What it costs you.** Free tiers are free because the usage is the product, or because the tier will change. Both are reasons to keep an exit in mind.
- **Who else is affected.** A tool that reshapes how a course runs is a decision for the students in it, not only the instructor using it.
- **Whether it is allowed.** If your institution has a policy, read it once. If it does not, the [[shadow-ai]] literature suggests you are already making policy by default.

The practical individual heuristic is blunt: use the sanctioned tool when it is within reach, and when it is not, write down what you did and why. That record is what protects you if the judgment is questioned later.

## At the institutional level

An institution is buying a service, a data flow, a support obligation and a political commitment at once. The six shapes below are the real menu; most institutions are in two or three of them at the same time without knowing it.

**Free outsourced tools.** AI Tutor Pro from Contact North is free, anonymous and requires no account. Playlab lets educators build apps grounded in their own curriculum while the vendor hosts the models. These are the right place to start a pilot and a poor place to settle: no audit trail, no quota control, and terms that can change.

**Seats on a commercial tenant.** ChatGPT Edu, Microsoft 365 Copilot, Google Gemini for Education. Fast procurement, SSO and an admin console included, and the vendor owns model choice and retention.

**A platform you host.** [Amplify GenAI](/aied/resources/amplify-genai/) deploys into your own AWS account; Vanderbilt's pilot reported about \$3 per user per month at 1,300 users, half of them under \$1 in tokens. Data control without GPUs.

**A gateway over mixed providers.** One front door with quotas, SSO, logging and regional routing. Fontys ran this for 300 users under a \$500 monthly cap that was never breached; [MindRouter](/aied/resources/mindrouter/) adds role-weighted scheduling and energy metering.

**Your own inference.** Purdue's two services reached over 1000 users on 10+ open-source models for roughly \$100,000 in hardware, before staffing. This is the shape that answers a regulator without asking a vendor's permission.

**AI inside tools you already run.** A Moodle question type, a discussion platform's AI partner, an essay-feedback tool. Low lift, course-by-course change, and nothing learned at the center.

## The issues that do not go away

**Data protection.** The question is not whether a vendor is reputable but which record now exists that did not before, where it lives, and who can retrieve it. A tool that receives a class list has created an institutional record regardless of the contract.

**Identity and access.** Anything used at scale needs SSO, role-based access and offboarding. A tool that cannot deprovision a departing employee is a standing account with your data in it.

**Cost shape.** Per-seat pricing rewards vendors for headcount; metered pricing rewards them for usage. Your usage is probably concentrated: a small share of users generates most of the tokens, which means per-seat can look cheap until the heavy users move to something else.

**Measurement.** EDUCAUSE found 92% of institutions with a work-related AI strategy and 13% measuring return on investment. If you cannot say what the tool replaced, you cannot defend the renewal.

**Equity and accessibility.** A tool that requires a fast connection, a paid tier or English fluency distributes benefit unevenly. Accessibility conformance is a procurement question, not a later fix.

**Academic integrity.** Adoption changes what assessment measures. If the tool can complete the assignment, the assignment is the thing that needs revision, not the tool.

**Staffing.** Every shape above except the first has an owner. The common failure is buying the fourth or fifth shape and staffing it with whoever was already busy.

**Vendor dependence.** Ask what happens at renewal, at a price change, and at a model deprecation. The gateway shapes exist precisely so that the answer is a routing change rather than a migration.

## What a good first year looks like

Pick two or three measures before you start: who used it, for what, at what cost per active user, and what changed in the work. A pilot that cannot produce those numbers is a demo with a budget.

Review the boundary conditions at the same time. If the tool touched student records, did the data flow match what you told the privacy office? If usage went unmeasured, was that because the tool could not report or because nobody asked?

And keep the sanctioned path short. The adoption literature is consistent on this point: people do not bypass governance because they prefer risk, but because the approved route takes longer than the task. A gateway with a model card and same-day access is a governance instrument, not only an IT convenience.

## Common mistakes

**Buying the platform before naming the problem.** A tool in search of a use case produces usage statistics and nothing else.

**Treating free as a strategy.** Free tools are excellent for a pilot and unstable as infrastructure.

**Assuming a local model is private.** Locality changes who can be subpoenaed, not whether prompts are retained.

**Measuring satisfaction instead of effect.** "Teachers liked it" is not a finding about learning.

**Publishing a policy without a path.** Guidance that cannot be followed within a week describes the institution's preferences, not its rules.
