---
title: Institutional AI Infrastructure
created: "2026-11-12T12:35:00-05:00"
updated: "2026-11-12T14:50:00-05:00"
type: concept
connected_resources: [mindrouter, amplify-genai]
technology: [llm, generative-ai, open-source, edtech-platform]
ethics: [privacy]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed, k 12]
discipline: [information technology]
confidence: high
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
---

> **Institutional AI infrastructure** — the computing, serving, routing and control layer an institution operates so that models can be used across teaching, research and administration under its own rules. It spans the GPUs and clusters that hold the weights, the inference servers that answer requests, the [[llm|gateway]] that meters and routes them, the model cards and audit logs that make the arrangement inspectable, the data pipelines that connect student records to models, and the staff who keep all of it running. It is not the same object as an [[edtech-platform|edtech platform]] (the learner-facing container) or [[governance]] (the policy that constrains both).

## Questions to Consider

- Where does the model actually run in your institution, and can anyone name the person who could answer that without checking?
- Which of the six adoption shapes below are you already in, and which one did you think you were in?
- If ninety percent of usage came from ten percent of users, would a per-seat license or a metered gateway serve your budget better — and do you know which shape your usage has?
- A policy document says requests must not leave the jurisdiction. What in your stack enforces that, rather than asking people to remember it?
- Who is accountable when a course-articulation recommendation is wrong, and does your infrastructure record enough to answer that later?
- For a primary school, what changes when the model is small and runs in the building rather than frontier-scale and remote?

## Introduction

Institutions spent the first years of [[generative-ai|generative AI]] buying access: a [[conversational-ai|chatbot]] license here, a writing assistant there, each with its own terms and its own data path. The result is a portfolio nobody can describe in one sentence, and a set of questions — where did that prompt go, who approved this model, what did we spend — that no single office can answer.

Treating AI as infrastructure is the response. It means a shared serving layer, a gateway that applies the institution's rules to every request, and enough telemetry to see cost, load and failure. The claim in the literature is not that this is cheaper. It is that it makes the institution the party that decides, which is a different kind of claim and a harder one to test.

The papers collected here also widen what counts as infrastructure. Two concern inference for chat and teaching, one concerns the registrar's office, and one concerns assessment records. Once course articulation, workload [[learning-analytics|analytics]] and evidence accumulation depend on embeddings and model calls, the back office is as much a part of the stack as the GPU rack. That is the argument this page now makes: infrastructure is wherever an institution has quietly delegated a decision to a model.

## What you are actually choosing

The field describes six shapes, not two. They differ in who holds the data, who can change the model, and who absorbs the failure.

**Free outsourced tools.** Staff or students use a vendor's service at no cost. [[intelligent-tutoring|AI Tutor]] Pro, from Contact North in Canada, is the clearest case: free, anonymous, no account required, with modes for discussion, [[self-assessment|self-checking]] and study-guide building. Playlab sits in the same band, letting educators construct apps grounded in their own [[curriculum-design|curriculum]] while the vendor hosts the models. The cost is not zero but deferred: no institutional audit trail, no quota control, and terms that can change without notice. This is a defensible place to pilot and a poor place to settle.

**Seats on a commercial education tenant.** A district or university buys ChatGPT Edu, Microsoft 365 Copilot, Google Gemini for Education or a comparable tenant. Procurement is fast, SSO and an admin console come included, and the vendor owns model choice and retention. The institution gains identity integration and loses the ability to route around a provider.

**A platform you host.** [Amplify GenAI](/aied/resources/amplify-genai/) deploys into the institution's own AWS account, so documents and conversations stay in infrastructure the institution controls while the vendor supplies the application. Vanderbilt's pilot reported about \$3 per user per month across 1,300 users, with half of them under \$1 in token spend. This shape buys data control without buying GPUs.

**A gateway over mixed providers.** One front door in front of local and commercial backends, with quotas, SSO, logging and regional routing attached. Fontys built this as three layers; [MindRouter](/aied/resources/mindrouter/) and SPIN implement variants. It is the shape that turns a policy document into an enforced constraint, and the one that needs a platform engineer rather than a procurement officer.

**Your own inference.** GPUs, schedulers, model servers and the people who run them. MindRouter at the University of Idaho is the reference case; SPIN at Georgia Tech is the same bet made inside an HPC center. This is the only shape in which the institution can answer a subpoena, a regulator or a vendor price change without asking permission.

**AI inside tools you already run.** A Moodle question type, a discussion platform's AI partner, an essay-feedback tool. The organizational lift is small and change arrives course by course, which is also its limit: nothing at the center learns from it.

These shapes nest. A gateway can front a hosted platform; a hosted platform can call a local model; a free tool can be the pilot that justifies none of the above. The useful question is not which shape is best but which decision each shape silently makes for you.

## The gateway layer

Three implementations now describe the same architectural move with unusual consistency.

[[huijts-suilen-institutional-ai-sovereignty-gateway-2025|Huijts and Suilen]] at Fontys ICT separate a ChatGPT-style frontend tied to institutional identity, a routing core that enforces budgets and regional constraints, and a provider layer of local and commercial models. Six months and 300 users later, a \$500 monthly cap had never been breached, and every session opened with a model card naming capabilities, hosting region, cost and alternatives.

[[sheneman-mindrouter-institutional-ai-sovereignty-2026|MindRouter]] pushes the same idea into scheduling. Requests are weighted by role — [[administrator]] 10, faculty 5, staff 2, student 1 — through Weighted Deficit Round Robin, and backend selection adds soft scores for latency, load and administrator preference. The gateway keeps the audit log, and it meters energy as well as tokens.

[[rahaman-soa-on-prem-ai-gateway-2026|SPIN at Georgia Tech]] makes the split explicit at the API boundary: LiteLLM and PostgreSQL on a CPU-only virtual machine, vLLM and Triton on GPU nodes inside Slurm, with backend host, port and key resolved from the database at request time. Replacing a model becomes a database update invisible to clients.

The differences are instructive. Fontys governs a multi-provider portfolio, MindRouter governs scarce shared capacity, and SPIN governs inference on a batch scheduler designed to end jobs. All three converge on one claim: the API surface is the contract, and the model behind it is replaceable.

## Serving is a policy, not a benchmark

[[rodenbeck-purdue-on-prem-genai-inference-2025|Purdue's two services]] reached over 1000 users on 10+ [[open-source]] models for roughly \$100,000 in hardware, with about 40% active monthly. The decision that matters is that the team kept Ollama rather than vLLM despite vLLM's 4-5x throughput advantage, because supporting many models mattered more than raw speed for a community that wants to try things.

SPIN's load test gives the other half of the picture. Against a mocked engine at 1000 concurrent requests per second, an 8-vCPU gateway VM reached 76% of the ideal aggregate rate, while 8-worker bare metal reached 98%. The proxy tier is cheap until it is not, and the threshold is measurable rather than mysterious.

Neither result generalizes into a rule. They establish that throughput, model breadth and operational simplicity trade against each other, and that the trade should be made deliberately rather than inherited from a vendor's default.

## The edge changes the argument

[[zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026|Zulfiqar and Iqbal]] describe a school-scale alternative: a refurbished desktop or mini PC with an entry-level GPU, hosting a model between 1B and 13B parameters, at an indicative several hundred to several thousand Australian dollars per server. Their economic case is a school of 400 students that cannot absorb cumulative cloud API costs across classrooms. Their honesty is the admission that no comprehensive lifecycle cost comparison exists, so the saving is a hypothesis rather than a finding.

At course scale, [[on-premises-rag-tutoring-business-education-2026|CourseChat]] shows the same logic under a different constraint: an 8B production model kept over larger candidates that failed a classroom latency gate. [[guadalupe-academic-chatbot-local-llm-2026|Guadalupe, Topón and Iza]] met a 5-second median target at 3.57 s but missed it at p95 with 6.47 s, and traced roughly 96% of end-to-end time to generation.

Running locally changes the privacy question from contractual to physical, and it does not answer it. A local deployment with full prompt logging is still a retention system; what changes is who can be compelled to hand it over.

## The back office is infrastructure too

[[pardos-borchers-institutional-workflows-oecd-2026|Pardos and Borchers]] argue that the consequential site of [[ai-education|AI in education]] is not the chat window but the registrar, the advising office and the curriculum committee. Their examples are embeddings rather than conversations: course vectors learned from enrollment histories, machine translation between two institutions' vector spaces, and tagging pipelines that map open resources onto a standard.

The numbers are specific. Embedding-based transfer prediction validated 65 existing articulations and is now piloted with 59 institutions and four systems of [[higher-ed|higher education]]. Credit hours explained only 6% of variance in perceived workload, while LMS activity features explained 36%. Collaborative AI tagging cut time by roughly 50% but reduced accuracy by 35%.

The adoption finding is the one infrastructure planners should keep. In a 2×2 experiment, hiding low-confidence outlier recommendations raised administrator acceptance and productivity, while asking users to flag recommendations lowered acceptance unless outliers were shown. A more accurate recommender can still fail because of how its output is presented, which makes interface design part of the infrastructure rather than a finishing touch.

## Assessment as a plumbing problem

[[mcnamara-aimcai-continuous-assessment-infrastructure-2026|AIM-CAI]] argues that the evidence needed to interpret learning already exists but is fragmented across systems that cannot read one another. Its framework has six functional layers, three inferential boundaries that limit what a snapshot can support, and seven governance requirements including auditability, uncertainty estimation and human override. It is a framework rather than a deployment, and the page says so.

[[lata-ferpa-compliant-local-llm-autograder|LaTA]] supplies the narrower case: a local reasoning model that removes the [[privacy|FERPA]] question about sending student work to a vendor rather than managing it. Together they suggest that assessment infrastructure is not a feature of a learning platform but a separate problem with its own data model and its own failure modes.

## Cost, latency and the visibility problem

The recurring theme across implementations is that cost and latency become visible only when someone instruments them. Purdue's \$100,000 hardware figure is a capital number with an unstated staffing cost. SPIN's gateway benchmark bounds proxy overhead and says nothing about end-to-end latency. [[sheneman-mindrouter-institutional-ai-sovereignty-2026|MindRouter's]] energy accounting reports about 9.4 kW normal draw against a 14.1 kW observed peak and a 22.1 kW theoretical maximum, and 872,997,430 tokens over a 17-day window imply \$82,843 to \$251,806 in annual savings against commercial equivalents at the paper's rates.

District-scale hosted platforms report the same kind of arithmetic: PSD401 AI Studio claims 67–90% lower per-token cost than commercial alternatives. None of these numbers is comparable across institutions without the same denominator. What is comparable is the practice of measuring at all.

## Sovereignty has an equity dimension

A gateway can route to a local model that handles the institution's language poorly, and the resulting silence is not neutral. The infrastructure argument and the [[digital-divide|digital divide]] argument meet here: institutions with clusters and staff gain capability, and the ones without absorb whatever the vendor offers at whatever price the vendor sets. Free tiers are genuinely useful and genuinely fragile, which makes treating them as a permanent strategy a decision about which institutions get served.

## Common Misconceptions

**"On-premises is cheaper."** The license fee disappears and hardware, power, cooling and staff appear. Purdue's service cost about \$100,000 in hardware before anyone was paid to run it, and the staffing is the part that does not scale down.

**"A gateway is just a proxy."** A proxy forwards. A gateway decides which model, which region, which budget, which user, what gets logged, and what the user is told before they press send.

**"Local means private."** Locality changes who can subpoena the data, not whether it is retained. Audit logging, prompt storage and administrator access are design choices, and a local deployment with full logging is still a surveillance surface.

**"Buying GPUs is the strategy."** Capacity without scheduling, quotas and support becomes a queue. The successful cases describe governance and operations at least as much as hardware.

**"The AI problem is the chatbot."** Most institutional value described in this literature sits in articulation, workload analytics, tagging and assessment records, where no student ever opens a chat window.

## Connected Concepts

- [[open-source]]
- [[rag]]
- [[privacy]]
- [[governance]]
- [[edtech-platform]]
- [[llm]]
- [[digital-divide]]
- [[assessment]]
- [[shadow-ai]]

## Connected Articles

- [[huijts-suilen-institutional-ai-sovereignty-gateway-2025]] — Fontys ICT: a 300-user governed gateway with model cards and a \$500 monthly cap
- [[rodenbeck-purdue-on-prem-genai-inference-2025]] — Purdue: two campus inference services, 1000+ users, 10+ models, Ollama over vLLM
- [[rahaman-soa-on-prem-ai-gateway-2026]] — SPIN: control and serving split at the API boundary, with a load-tested proxy tier
- [[sheneman-mindrouter-institutional-ai-sovereignty-2026]] — MindRouter: fair-share scheduling, quotas and energy accounting in an open-source gateway
- [[guadalupe-academic-chatbot-local-llm-2026]] — ESPOL: hybrid retrieval with a local model, passing the median latency target and missing p95
- [[zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026]] — a school-scale SLM argument from primary education
- [[pardos-borchers-institutional-workflows-oecd-2026]] — the OECD chapter on articulation, workload analytics and assessment production
- [[mcnamara-aimcai-continuous-assessment-infrastructure-2026]] — AIM-CAI: six layers for connecting learning evidence
- [[on-premises-rag-tutoring-business-education-2026]] — CourseChat: an 8B model kept over larger candidates that failed a latency gate
- [[lata-ferpa-compliant-local-llm-autograder]] — LaTA: a local reasoning model that removes the FERPA question rather than managing it
