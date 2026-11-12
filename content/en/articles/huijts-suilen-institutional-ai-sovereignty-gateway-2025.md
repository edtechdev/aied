---
title: "Institutional AI Sovereignty Through Gateway Architecture: Implementation Report from Fontys ICT"
created: "2026-11-12T11:45:00-05:00"
updated: "2026-11-12T11:45:00-05:00"
type: article
sources: ['raw/papers/huijts-suilen-institutional-ai-sovereignty-gateway-2025.md']
confidence: medium
page_kind: [evaluation]
research_method: [system development]
discipline: [information technology]
level: [higher ed]
audience: [administrators, educational technology developers, instructors]
foundations: [human-ai-collaboration]
technology: [llm, generative-ai, open-source, edtech-platform]
ethics: [privacy]
methods: [ai-ed-evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Fontys ICT, a Dutch university of applied sciences, replaced a patchwork of personal AI subscriptions with an institutional platform during a six-month, 300-user pilot. Three layers separate concerns: a ChatGPT-style frontend behind institutional single sign-on, a Portkey gateway that enforces access, budget, and hosting policy, and a provider catalog where each model carries an institutional model card and consent flow. Routing defaults to EU infrastructure — GPT-4o through Azure's Swedish region, Mistral through Azure Germany, open-source models through Scaleway's French datacenters — while US-hosted Claude requires a documented, acknowledged exception. The authors report no [[privacy|privacy]] incidents, a \$500 monthly cap never breached, and \$10 API allocations per approved user. Their claim is that architecture is [[governance]]: institutional values encoded in configuration, and that encoding demands a dedicated AI Officer.

## Key Findings
1. **A three-layer gateway preserved model diversity without surrendering policy control.** OpenWebUI, Portkey, and an external provider catalog let the institution add or retire models by configuration while access scopes, spending ceilings, and routing stayed institutional.
2. **Every alternative failed at least one requirement.** Commercial licensing scored Low on data sovereignty and pedagogical flexibility; consortium procurement Medium on sovereignty; self-hosting High on both but Low on feasibility; the gateway High on equity, sovereignty, and pedagogy with Medium-High feasibility.
3. **EU-first routing was a default with an explicit exception path.** GPT-4o ran in Azure's Swedish region, Mistral in Azure Germany, and GreenPT's open-source models on Scaleway's French renewable-powered infrastructure; US-only Claude stayed hidden until authorized and required recorded acknowledgment of cross-border processing.
4. **Spending control was flat, small, and never stressed.** Each approved API user received \$10 with a single justified \$10 top-up available; only one project needed extra shuffling, the interface sat under a \$500 monthly cap that was never breached, and most users never reached their limit.
5. **The model card became an operating instrument.** Each model received a twelve-section card mapped to the forty-three ethical requirements Puhlfürß and colleagues derived from twenty-six AI ethics guidelines, three documentation frameworks, and ten model cards, organized under four principles and twelve sub-principles.
6. **Pilot governance worked because it was informal, which is why it could not scale.** Claude Sonnet 4.5 shipped one day after release and DeepSeek moved to Groq after severe latency, but access requests were approved within one to two business days by the same small team that judged them, with no documented criteria.
7. **The authors locate missing capacity in a role, not a tool.** They propose an AI Officer reporting to institutional leadership, combining technical literacy, governance authority, and educational responsibility; technical staff can integrate models but lack authority for value-based decisions.

## Why subscriptions failed the institutional test

The starting condition was sprawl. Students and faculty mixed ChatGPT, Claude, Gemini, and niche services by preference, and only Microsoft Copilot carried an institutional license. Faculty expensed premium subscriptions personally and students paying for ChatGPT Plus or Claude Pro outpaced peers on free tiers. Students wiring APIs into coursework chose providers for free tiers rather than privacy posture, leaving fragmented contracts, unclear processing locations, and no way for faculty to see which tools had touched submitted work.

The turning point was December 2024, when SURF advised against Microsoft 365 Copilot after a DPIA flagged opaque data collection, incomplete access responses, fabricated personal data, and excessive telemetry retention. SURF reduced the rating to "medium" in September 2025, but the authors read the episode as proof that institutions need their own framework. Their comparison table is the argument in miniature: consolidation is easy to buy and poor at sovereignty, self-hosting is sovereign and infeasible at this scale, and only the gateway reaches High on equity, sovereignty, and pedagogical flexibility while staying Medium-High on feasibility. They note this is an institutional judgment, not a sector position, and that the gateway can absorb the alternatives as routes.

## Three layers, one policy surface

The frontend is OpenWebUI, chosen over LibreChat and a custom build because it integrated with the gateway and matched an interface students knew. Azure Active Directory authentication ties access to institutional identity, supplying audit trails and immediate revocation. Group membership does the coarse work: applied GenAI students through enrollment groups, research teams through professorship groups, sensitive cases narrowed to one user and one model with a dedicated budget. Model selection is never automatic. Each entry carries hosting region, cost as euro icons against a baseline, capability tags, and a compliance badge, and switching triggers a tooltip on latency, token limits, and [[privacy]] caveats.

The gateway is Portkey, chosen because it unifies provider integrations, issues scoped API keys with budget limits, enforces spend at model, user, and project levels, and records usage without logging content. That matters for a public institution: the audit trail shows who spent what without retaining the conversation. Adding a provider requires configuration rather than user-facing code, which lets the catalog track a market that changes monthly. The provider layer mixes Azure AI Foundry's EU-hosted GPT-4o and Mistral variants with GreenPT's [[open-source]] models on French renewable-powered infrastructure, direct Anthropic access for Claude, and OpenRouter for models unavailable elsewhere. Sensitive workloads can route to Fontys-operated hardware in the Netherlands, where inference stays local and the gateway logs only metadata.

## Cost, hosting, and consent as governance

Every user approved for API access received \$10 with one justified \$10 top-up, and only one project needed additional shuffling. The chat interface sat under a \$500 monthly institutional cap that was never breached, and automated emails warned users nearing their limits and nudged them toward cheaper models. The authors read this as success and limitation at once: caps kept spending predictable, but flat allocations could not express institutional priorities.

Hosting followed default plus documented exception. EU processing is the baseline; a US-only model is never disqualified by default but becomes a conscious choice. Requests arrive through support tickets stating intended use and acknowledging privacy implications; the gateway then enforces the resulting group membership.

Consent is where the card becomes enforceable. Selecting a restricted model opens a modal that blocks the conversation until each risk is acknowledged individually — geographic processing, training-data opacity, hallucination likelihood, cost — with no accept-all shortcut. Consent persists, a panel lists granted permissions with dates, and revocation immediately blocks interaction. The full card covers twelve sections; for Claude the appendix states a context window of 200,000 tokens, a maximum output of 8,192 tokens, retention of 30 days, \$15.00 per million input and \$75.00 per million output tokens, and a cost roughly 5x the GPT-4o-mini baseline.

## From pilot governance to a named role

Six months of operation surfaced governance functions the stack could not perform: model lifecycle management, hosting exceptions, access authorization, budget allocation, compliance monitoring, and stakeholder communication. All ran on informal judgment. Lifecycle changes were executed within hours when Portkey supported the provider, weighed on reliability, cost, and educational value without standardized metrics. Hosting exceptions were granted through conversation, access requests reviewed manually, and compliance monitoring stayed reactive: a suspected policy change triggered a manual review, with no schedule, automation, or clear owner. Nothing changed during the pilot, which is why the authors distrust the method.

Their production requirements are procedural: documented evaluation criteria, designated decision authority, scheduled reviews, data-sensitivity tiers with approval workflows, structured request forms, and revalidation of model cards when provider terms shift. Communication splits by audience on a quarterly cadence. The AI Officer is the institutional answer — technical literacy to read claims and logs, governance authority to approve or decline integrations, and educational responsibility to connect the platform to curricula and examinations. It can be one person or a coordinated team, but must be formally designated and report to leadership, because portfolio and data-processing decisions need organizational legitimacy.

## What this means for practice

- **Administrators.** Budget for governance labor, not just infrastructure; the pilot's six functions were absorbed informally by a small technical team, which the authors say fails at university scale.
- **Educational technology developers.** Treat routing, access scope, and spend ceilings as one configuration surface; the gateway is what makes EU-first hosting and per-group budgets enforceable without frontend code.
- **Instructors.** Model choice can carry curriculum: explicit selection with hosting region, relative cost, and capability tags turns each session into a lesson in trade-offs, though exposure alone does not guarantee better decisions.
- **Privacy officers.** The consent modal, not the model card, is the compliance artifact at the point of use: individual checkboxes, persisted consent, immediate revocation.

## Limitations

- Non-peer-reviewed institutional whitepaper from one Dutch university of applied sciences, describing a single pilot with no external evaluation, comparison institution, or independent audit.
- The document states it was developed through iterative collaboration with Claude Sonnet 4.5, which served as an intellectual sparring partner on arguments, structure, and language; the authors say factual claims were independently verified and retain responsibility, but that division of labor is not inspectable.
- No learning-outcome or assessment data are reported, and adoption is called strong without survey percentages, response counts, or a named instrument.
- Cost evidence is pilot-scale: \$10 allocations and a \$500 monthly cap, with no institutional total, per-token aggregate, or measured comparison against the subscription baseline.
- Reliability is asserted, not measured: "ran reliably" and "no privacy incidents" appear without uptime, error rate, or response-time figures, and the DeepSeek latency problem is only narrative.
- Governance findings rest on the authors' own account; no ticket counts, approval statistics, incident logs, or user research substantiate the diagnosed gaps.

## Citation

Huijts, R., & Suilen, K. (2025). [*Institutional AI Sovereignty Through Gateway Architecture: Implementation Report from Fontys ICT*](https://arxiv.org/abs/2512.08978). arXiv:2512.08978.
