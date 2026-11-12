---
title: "Providing On-Prem GenAI Inference Services to a Campus Community"
created: "2026-11-12T11:50:00-05:00"
updated: "2026-11-12T11:50:00-05:00"
type: article
evidence_context: educational
sources: ['raw/papers/rodenbeck-purdue-on-prem-genai-inference-2025.md']
confidence: high
page_kind: [evaluation]
research_method: [system development]
discipline: [information technology]
level: [higher ed]
audience: [administrators, educational technology developers]
foundations: [human-ai-collaboration]
technology: [llm, generative-ai, open-source, edtech-platform]
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

> **Synthesis:** Research computing centers face a build-or-buy decision when their campuses ask for [[llm|large language models]]. Purdue's Rosen Center for Advanced Computing chose to build, releasing AnvilGPT for the national Anvil community and Purdue [[generative-ai|GenAI]] Studio for the campus community in the fall of 2024, both assembled from [[open-source]] components and hosted entirely on premises. The two services support over 1000 users working with 10+ open-source models, run on approximately \$100,000 (total) in hardware, and are free to researchers. The architecture pairs Open WebUI as the interface and API layer with Ollama for serving and Postgres for persistence, across three Kubernetes deployments. The paper is an operating account, not an outcome evaluation: it documents the customization work a campus release demands, the serving-engine and hardware trade-offs, and a "grow as you go" strategy built on existing hardware, but reports no learning outcomes, no user-satisfaction measures, and no per-user cost.

## Key Findings
1. **Two services reached over 1000 combined users with about 40% monthly activity.** Both were released in the fall of 2024, and the paper reports a combined user base of over 1000, with about 40% active every month.
2. **A modest hardware budget carried the whole service.** The authors put hardware at approximately \$100,000 (total), with each backend served by two NVIDIA GPUs (H100 or GH200) with 96GB of vRAM and a minimum requirement of 40G vRAM to host 4-bit quantized 70B parameter models.
3. **Users migrate to the largest models even when smaller ones are the default.** Each service supports about 15 models, ranging from DeepSeek-r1:1.5B to llama3.3:70B, and the 70B models account for 35-40% of usage between the two services despite smaller defaults.
4. **Ollama was chosen over vLLM for flexibility, at a measured throughput cost.** vLLM had 4-5x higher throughput than Ollama in the team's testing, but Ollama offered more flexibility for serving multiple models and is optimized for dynamic model loading on a single GPU.
5. **The platform is three open-source projects and three Kubernetes deployments.** Ollama, Open WebUI, and Postgres form the base, running as a GPU-backed Ollama deployment plus two CPU deployments for the front end and database.
6. **Most customizations were quality-of-life work, not release prerequisites.** The team moved from SQLite to PostgreSQL and ChromaDB to PGVector, added CILogon single sign-on, document collections, secure model sharing, a PyMuPDF parser, speech and image-generation pages, and usage metrics with Slack health alerts; the authors say only a few should be viewed as required to roll out a similar service.
7. **The recommended strategy is to grow as you go.** The paper argues that purchasing new, dedicated hardware immediately to deploy a GenAI pilot is unnecessary, that building on existing hardware is sufficient, and that a growing user base makes the case for further investment easier.

## Build versus buy at a campus HPC center

The service began as a response to demand that could not be met one request at a time. Campus researchers, students, and staff were asking RCAC for help integrating GenAI into research pipelines, and many wanted help running specific open-source models, which produced unsustainable bespoke solutions given the required requests and resources. The authors frame the choice as build or buy: commercial services charge usage- or seat-based fees for infrastructure that HPC centers often already own, and campus deployment and management have been consistently less expensive than public cloud services. Their comparison is fiscal rather than technical — approximately \$100,000 (total) in hardware against the multi-million dollar deals other university systems have made with commercial platforms.

Requirements came from three user profiles. Chat users are the largest group and mostly want one-off help with tasks such as writing emails and debugging code, customizing only through [[prompt-engineering|prompt engineering]]. [[rag|Retrieval-augmented generation]] users form the second most common case, typically building on research papers or domain-specific documentation. API users are the most advanced: they integrate models into larger workflows, may want to fine-tune a foundational model or build agentic workflows, and often connect the service to science gateways such as Nanohub as the backend of a custom [[conversational-ai|chatbot]]. Two cross-cutting requirements shaped the design: [[privacy|data privacy]], because keeping user data private to users enables work with proprietary data, and model variety, because different use cases need different open-source models.

## A serving stack assembled from three projects

Open WebUI supplies the self-hosted web interface and the API surface, including user management, native Ollama integration for switching between hosted models, and the option to point at the OpenAI API for models to which users have paid access. It also supports RAG with database and vector store integration. Postgres holds application data, and Ollama performs inference. The interface layer is the part with the most churn: Open WebUI has an active development community, and several limitations the team worked around have since been fixed upstream.

[[institutional-ai-infrastructure|Model serving]] was evaluated on latency, throughput, and flexibility — the number of models that can be hosted. vLLM won on throughput and lost on flexibility, so Ollama was retained for dynamic model loading on a single GPU. Hardware follows from that choice. The team standardizes on 4-bit quantized models to make efficient use of GPU memory, keeps models on SSDs for fast load times, and reports that two 96GB GPUs per backend are sufficient to serve 70B parameter and smaller models simultaneously. Load balancing across backends can use DNS or a reverse proxy. Kubernetes is described as a natural fit rather than a requirement.

## The customization burden of a campus release

The gap between a working demo and a campus service shows up in the customizations. The team moved the database from SQLite to PostgreSQL for robustness and scalability at a large user base, and moved RAG storage from ChromaDB to PGVector to simplify provider management. Vector deletion proved tricky because of the abstraction layer, so they track vector IDs at insertion and mirror a document's movement across the vector store and the relational database. Single sign-on through CILogon and OIDC was treated as crucial to offering the service across the community.

Feature work followed user requests. Collections let users group documents by topic, and the ingestion path was adjusted to avoid leakage across collections. Users can build private custom models by changing knowledge, prompts, and parameters, then share them by registered email ID at inference-only or full edit access — the paper's example is inference-only access for a teaching assistant in a course. Document parsing exposed a concrete defect: the default PyPDF loader misread font ligatures as null bytes, which broke context building, so the team switched to PyMuPDF. Speech-to-text and [[speech-and-voice-technologies|text-to-speech]] became a standalone workspace tab, and image generation got its own page built on the A1111 interface.

Measurement was its own project. Because Open WebUI does not retain deleted chats or messages sent via API for statistics by default, the team changed the database to support chat, model, performance, and user metrics, and added Slack alerts for application health. The authors also record a maintenance lesson: new Open WebUI releases sometimes conflicted with or duplicated their customizations, and they intend to contribute fixes upstream rather than maintain a private fork indefinitely.

## What this means for practice

- **Administrators.** Treat the approximately \$100,000 (total) hardware figure as a capital estimate only: it does not cover the staff time behind single sign-on, database migration, parsing fixes, and usage instrumentation, all of which the paper presents as necessary for a campus release.
- **Educational technology developers.** Plan for document-pipeline defects before launch. Ligatures parsed as null bytes broke context building until PyPDF was replaced with PyMuPDF, and collection isolation had to be enforced in the ingestion path rather than assumed from the interface.
- **Research computing and platform teams.** Instrument usage from the first release, since Open WebUI discards deleted chats and API messages by default, and those are the records that support a later hardware case.
- **Teaching and learning staff.** The sharing model already reaches instruction through inference-only access for a teaching assistant, but the paper reports no course-level deployment or student-outcome evidence, so any teaching pilot needs its own evaluation design.

## Limitations

- The paper reports a single institution's two services and offers no comparison group, replication, or benchmark against a commercial platform beyond cited cost claims from other university systems.
- Adoption is measured as accounts and monthly activity — over 1000 users and about 40% active every month — with no measure of depth of use, satisfaction, or value delivered.
- Performance evidence is thin in the prose. The only throughput figure is vLLM's 4-5x advantage over Ollama in the team's testing; response times appear in a figure without reported values, and no concurrent-load study is described.
- The approximately \$100,000 (total) hardware figure is not converted into a per-user or per-token cost, and staff labor for customization, support, and upstream maintenance is not costed.
- Privacy is asserted as a design rationale rather than evaluated: no threat model, retention schedule, or audit of stored user data is presented, and the authors note that deleted chats and API messages are not retained by default.
- The account is a snapshot of a fast-moving dependency stack. Upstream releases conflicted with or duplicated the team's customizations, and the paper does not assess whether a small team can sustain the work.

## Citation

Rodenbeck, S., Gough, E., Mohana Krishnan Sangeetha, A., Ashish, Ahlawat, M., Karunai Kiri Ragavan, V., Muthukumar, A., & Ahmad, A. (2025). [*Providing On-Prem GenAI Inference Services to a Campus Community*](https://doi.org/10.1145/3708035.3736039). In *Proceedings of the Practice and Experience in Advanced Research Computing (PEARC '25)*. ACM. https://doi.org/10.1145/3708035.3736039
