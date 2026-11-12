---
title: "MindRouter: Open-Source LLM Inference Gateway for Institutional AI Sovereignty"
created: "2026-11-12T12:20:00-05:00"
updated: "2026-11-12T12:20:00-05:00"
type: article
evidence_context: educational
sources: ['raw/papers/sheneman-mindrouter-institutional-ai-sovereignty-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [system development]
discipline: [information technology]
level: [higher ed]
audience: [administrators, educational technology developers]
foundations: [human-ai-collaboration]
technology: [llm, generative-ai, open-source]
methods: [ai-ed-evaluation]
ethics: [privacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Universities must decide which AI workloads can leave campus and which must stay inside institutional walls. MindRouter is an Apache 2.0 [[open-source|open-source]] [[institutional-ai-infrastructure|inference gateway]] that fronts vLLM and Ollama backends on institutional GPUs, translating OpenAI, Ollama, and Anthropic client protocols through one canonical schema, allocating capacity with a Weighted Deficit Round Robin scheduler, and enforcing single sign-on, quotas, role-based access, [[guardrails]], and audit logging. The paper reports a production deployment at the University of Idaho spanning 13 GPU nodes and 40 GPUs, serving 64 open-weight models, and argues that mid-sized institutions can run their own [[llm|LLM]] service instead of routing regulated or strategic work through commercial APIs. Its evidence is operational rather than experimental: token volume, energy draw, and an estimated commercial-cost comparison, with no user counts, no latency figures, and no teaching or learning outcome. The contribution is a credible architecture and a deployment account, not proof that sovereignty pays for itself everywhere.

## Key Findings

1. **One gateway spans three client protocols and two inference engines.** MindRouter exposes OpenAI-compatible endpoints (/v1/chat/completions, /v1/embeddings, /v1/models), Ollama-compatible endpoints (/api/chat, /api/generate, /api/tags), and an Anthropic Messages endpoint (/anthropic/v1/messages), replacing N × M point-to-point translators with N + M translators around a canonical schema. The paper's examples are an Anthropic SDK application targeting models on Ollama and an OpenAI-configured LangChain application routed to vLLM, with tool-call deltas and structured outputs preserved.
2. **Fair sharing is role-weighted rather than first-come.** Each user gets a group weight — [[administrator]]=10, faculty=5, staff=2, student=1 — with per-user deficit counters and burst credits accumulated during idle periods, so one user can absorb otherwise idle capacity. Under contention credits decay rapidly and a configurable fairness window lowers the effective priority of users who have already consumed a disproportionate share.
3. **Backend selection is a scored decision behind hard filters.** Model availability, modality support, capacity, and memory fit eliminate ineligible backends before soft scoring: +100 for a model already resident in GPU memory, +50 for utilization below 50%, +40 for low latency on an exponential moving average, +30 for a short queue, +20 for recent tokens per second, and +N x 10 for administrator preferences by GPU capability.
4. **Separating nodes from backends makes heterogeneous hardware usable.** The deployment mixes NVIDIA H200, H100, RTX A8000, and A4000 cards across 13 GPU nodes and 40 GPUs, with multiple backends per node and each backend assigned to at least part of a physical GPU. A pynvml sidecar reports per-GPU utilization, memory, temperature, power draw, clock speeds, and running processes; the gateway caches device state once per node, then derives backend utilization by filtering on GPU indices, which the authors say cuts redundant calls while preserving accurate visibility.
5. **Security review was a precondition, not a final polish.** The design passed institutional CISO review covering authentication, secrets management, encryption, network architecture, container security, database security, and input validation. Argon2-hashed API keys and passwords, Azure AD single sign-on with just-in-time provisioning, role-based access control, non-root Docker containers behind nginx TLS termination, shared-secret sidecar authentication with constant-time comparison, localhost-bound internal services, and full request and response audit logging support the claim that all data remains on campus.
6. **Energy and cost became first-class operating metrics.** Power telemetry showed normal operation at about 9.4 kW, an observed peak of 14.1 kW, and a theoretical maximum of 22.1 kW; including facility overhead the authors put normal operation at about 275 kWh/day. Over a 17-day observed period in March 2026 the system processed 872,997,430 tokens on campus electricity, against an estimated \$4,027 to \$11,896 for comparable commercial API usage, implying annual savings of \$82,843 to \$251,806 depending on provider and model assumptions.
7. **Adoption followed the interface rather than the scheduler.** Telemetry since early 2026 records 3.7B tokens across 64 models, with OpenAI gpt-oss-120b and Qwen3.5 400B/122B among the most used. The authors credit a built-in web chat interface and locally hosted Kokoro [[speech-and-voice-technologies|text-to-speech]] and Whisper speech-to-text endpoints with accelerating use by several non-technical groups; self-service API keys let the OpenAI Python SDK, LangChain, LlamaIndex, IDE extensions, and agentic harnesses connect without a ticket.

## Sovereignty as an operating requirement

The framing is not isolationist: an effective strategy combines cloud and on-premises systems, and sovereignty means retaining control over infrastructure, data, models, access policies, guardrails, monitoring and governance. The named workloads are concrete — FERPA-regulated student records, controlled unclassified information, export-controlled data, and institutionally managed intellectual property. The case for local control is not only regulatory. Dependence on a few commercial providers creates institutional risk through pricing changes, service interruptions, policy changes, and reduced flexibility, and the EU AI Act adds governance considerations for institutions working internationally.

That framing sets the bar the rest of the paper must meet: if sovereignty is a portfolio decision, a gateway earns its place by making the on-premises option operable at a defensible cost, with controls a compliance office will accept. Existing components cover narrower slices. vLLM serves one engine at high throughput, Ollama lacks multi-user scheduling and enterprise authentication, and LiteLLM proxies providers without GPU-aware scheduling or audit logging. The claimed gap is the combination of protocol interoperability, heterogeneous routing, fair-share scheduling, and institutional [[governance|governance]] in one campus-operated service.

## Architecture and the scheduling argument

MindRouter is a containerized FastAPI application with five components: API gateway, translation layer, fair-share scheduler, backend registry with GPU sidecars, and observability stack. Each request passes through authentication, translation, per-user quota enforcement, scheduling, retries, and response formatting.

The scheduler is the most consequential choice, because shared GPU clusters serve two populations with incompatible expectations: automated workflows that can saturate the hardware, and interactive users who notice queueing immediately. Adapting deficit round robin to inference lets the cluster stay fully utilized while idle and responsive under contention, as the authors describe normal operation. The mechanism is legible — weights encode institutional priority, burst credits reward patience during quiet periods, and the fairness window prevents a heavy automated user from monopolizing capacity once others arrive. What is missing is a contention experiment: full utilization when idle and fair sharing under load are operational observations from one deployment, not a measured comparison against another policy.

Backend scoring follows the same explicit-rules philosophy. Hard constraints run first, so a request cannot reach a backend lacking the model, modality, capacity, or memory; soft factors then rank survivors, weighting an already-loaded model most heavily because reloading dominates latency, and treating administrator preference as a bounded tiebreaker rather than an override. The node-and-backend split is what makes mixed hardware work: one server can host several endpoints, each pinned to part of a GPU, and large multi-GPU models can be placed deliberately rather than by accident.

## Deployment experience

MindRouter has run in production at the University of Idaho since early 2026. Provisioning is integrated with Azure AD single sign-on through Microsoft Entra ID, with users assigned to groups that determine both scheduler weights and quota allocations, and API keys are issued through a self-service dashboard. The authors draw four operational lessons: node-backend separation enabled efficient use of heterogeneous GPUs and proper placement of large multi-GPU models; automatic context-length capping for vLLM and Ollama prevented GPU memory oversubscription; the scheduler held utilization when idle and shared fairly under contention; and the built-in chat interface drove adoption among non-technical groups.

The energy accounting is the part most likely to be reused, and the part most dependent on assumptions. Normal draw of about 9.4 kW against an observed peak of 14.1 kW and a theoretical maximum of 22.1 kW gives a capacity-planning envelope, while 275 kWh/day translates it into something a facilities office can price. The 17-day March 2026 window supplies the token denominator for the commercial comparison. The paper is explicit that the \$4,027 to \$11,896 range, and the implied \$82,843 to \$251,806 in annual savings, depend on provider and model assumptions — the right caveat, since this is avoided list-price spend rather than a full total-cost accounting including staff time, hardware depreciation, or facility overhead beyond the stated conversion.

The transferable claim is organizational rather than numerical: a small IT team ran a heterogeneous, institution-owned inference service for real workloads, with better visibility into utilization, energy and cost than commercial alternatives.

## What this means for practice

- **Administrators.** Treat the gateway as the policy point, not an add-on: group weights, quotas, guardrails, and audit records are configured there, so the scheduling table is effectively a statement of institutional priority and should be reviewed by the people who own that judgment, not only by IT.
- **Educational technology developers.** Build against the OpenAI-compatible surface and keep the base URL configurable; the same application can then reach models on vLLM or Ollama without a rewrite, and structured outputs and tool calls survive translation — which matters for agentic course tools.
- **Research computing and IT staff.** Budget for the unglamorous parts the paper credits with stability — context-length capping to avoid memory oversubscription, sidecar telemetry, TLS termination, non-root containers — and expect compliance review to be a gate rather than a final polish.
- **Instructors and researchers.** Ask what actually stays on campus and who can see it before assuming a local service satisfies a data-sharing agreement; "all data remains on campus" describes this deployment, not every self-hosted stack.

## Limitations

- This is a four-page experience report from a single institution, with no controlled comparison against commercial APIs and no independent replication of the deployment.
- The cost comparison is an estimate under stated provider and model assumptions; it excludes staff time, hardware depreciation, and facility cost beyond the stated overhead conversion, so the savings range is not a total-cost result.
- The paper reports no user counts and no latency or per-request throughput measurements; the "high throughput, low latency" language in the architecture figure is [[qualitative-research|qualitative]], and scheduling fairness is described from operation rather than measured under contention.
- The energy figures describe one cluster at roughly 9.4 kW under normal operation during a 17-day window in March 2026; seasonal variation, workload mix, and model-level efficiency differences are not analyzed.
- Security was validated through institutional CISO review covering the named areas, not an external audit or penetration test, and the mapping from features to FERPA, CUI, and export-control obligations is asserted rather than certified.
- No teaching, learning, or research-productivity outcome is measured; adoption evidence is token volume plus the authors' account of uptake by non-technical groups, so the paper cannot show that sovereign serving improves educational results.

## Citation

Sheneman, L. (2026). [*MindRouter: Open-Source LLM Inference Gateway for Institutional AI Sovereignty*](https://doi.org/10.1145/3785462.3815861). In *Proceedings of the Practice and Experience in Advanced Research Computing (PEARC '26)*. ACM. https://doi.org/10.1145/3785462.3815861
