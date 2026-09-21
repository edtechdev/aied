---
title: "Environmental Education"
created: "2026-09-20T12:40:00-04:00"
updated: "2026-09-20T12:40:00-04:00"
type: concept
foundations: [ai-education]
pedagogy: [inquiry-based-learning, situated-learning, critical-pedagogy]
technology: [generative-ai, llm, open-source]
ethics: [sustainability, ethics, global-south]
institutions: [educational-policy-ai, governance]
discipline: [environmental education]
confidence: medium
---

## Questions to Consider

- "AI and environmental education" can mean two very different things: using AI to teach *about* climate and sustainability, and reducing the environmental cost of *using AI* in classrooms. Which do you hear in your institution — and which has a budget line attached?
- If a university teaches climate science with an energy-intensive [[llm|large language model]] on every student laptop, has it advanced environmental education or undercut it? What would have to be true for the answer to be "both"?
- [[ai-assisted-inquiry-ssi-climate|One experiment]] found AI-assisted inquiry improved climate decision-making over inquiry alone, with gains concentrated on the weakest steps. Would you trust an AI-supported climate unit in your classroom, and what would you need to see first?
- Nearly no [[ai-education|AIED]] papers report their compute or carbon footprint. Is unreported [[sustainability]] impact a research problem, a procurement problem, a teaching problem, or none of these?

## Introduction

**Environmental education** develops learners' understanding of ecological systems, climate, and human–environment interdependence, together with the dispositions and competences to act on them — often framed institutionally as Education for Sustainable Development (ESD) or "green education." In an AI-in-education context the term carries a tension the corpus runs into without always naming: **AI as a tool for environmental education** (teaching climate and sustainability content with generative tools) and **the environmental footprint of AI itself** (the carbon, water, and energy cost of the models institutions deploy). These are different questions with different evidence, actors, and remedies; conflating them — as several papers and most strategy documents do — makes it impossible to say who is accountable for what.([[daniel-ai-sustainability-scoping-review-2026]])([[aied-carbon-footprint-reporting]])

## Two things called "environmental education with AI"

- **AI for environmental education** — using AI to teach environmental content, build sustainability consciousness, or support green skills. This half has frameworks, a [[teacher-role|teacher]]-survey study, and one classroom experiment.
- **The footprint of AI in education** — emissions and resource use of the models and infrastructure used for teaching, whatever the subject. This half has one review of reporting practice, one engineering [[benchmark]], and one small interface study — and nothing on the footprint of AI used for environmental education specifically.

A third, weaker strand treats "sustainable learning" as a [[pedagogy|pedagogical]] property rather than an environmental one: learning that persists and transfers rather than being short-circuited by [[cognitive-offloading]]. It shares sustainability's vocabulary but is not an environmental claim.([[zhu-e3-hot-embodied-intelligence-sustainable-learning]])

## Teaching environmental and climate topics with AI

The strongest evidence is a three-group quasi-experiment using climate change as a socio-scientific issue. Students working with an AI partner inside a structured [[inquiry-based-learning|inquiry]] task outperformed inquiry-only peers (d = 0.69) and traditional instruction (d = 1.88) on a decision-making rubric, with the largest gains on steps students entered weakest — monitoring and adaptive management, and generating alternatives. The AI condition was *additional to* inquiry rather than a replacement, and data collection and analysis did not separate the groups at all, suggesting the AI supported reasoning about trade-offs rather than evidence gathering.([[ai-assisted-inquiry-ssi-climate]])

At [[curriculum-design|curriculum]] level, the AI-SEE framework integrates AI across an [[engineering-education|engineering curriculum]] on four pillars (intelligence-driven, green-empowered, responsibility-leading, practice-integrated) rather than as a bolt-on sustainability module; a 144-student pilot reported gains in sustainability consciousness and behavioral [[student-engagement|engagement]] across personal, academic, professional, and social levels. The authors caution that this is single-institution, self-reported, single-time-point interview evidence from one Chinese transportation program.([[liu-ai-sustainable-engineering-education-2026]])

Two smaller studies cover the design side. AI-assisted [[learning-design|instructional design]] under Sustainable Development Pedagogy constraints improved pre-service teachers' lesson plans with an implausibly large effect (d = 2.80, 28 teams, no control group). Separately, a structural-equation study of 122 in-service teachers found *practical* AI use on science and green-energy tasks plus involvement in developing ESD-aligned materials predicted AI-integration capability, while abstract AI knowledge and attitudes did not — though a dichotomous [[self-report-measures|questionnaire]] and a weak knowledge construct limit how far it travels.([[talebzadeh-ai-green-education-2026]])([[riandi-teacher-ai-green-energy-education-2026]])

## The environmental footprint of AI in education

This half is where the corpus is thinnest. A review of all 396 AIED 2025 proceedings papers found "LLM adoption without disclosure": most projects use [[llm|LLMs]], 85 papers reported any computational cost, and only 57 mentioned environmental impact — using incompatible metrics, so the field cannot aggregate its own evidence. The authors argue that failing to report environmental cost is itself an [[ethics|ethical]] concern, and propose an [[open-source]] method (CodeCarbon plus a two-parameter FLOPs estimate for proprietary models).([[aied-carbon-footprint-reporting]])

On the learner side, an eco-feedback interface exposing the latency–carbon trade-off during live LLM use was studied with 89 computer science undergraduates in a computing ethics course: students chose the lower-carbon mode in roughly 45% of low-latency interactions but under 5% at high latency, and sustainability awareness significantly raised that choice. The sample is small and unusually technically informed, but it is the only direct evidence in the corpus that footprint information moves learners at all — and it suggests the binding constraint is patience, not values.([[llm-environmental-impact-student-usage-2026]])

Mitigation evidence comes from an on-premise [[cs-education|CS]] knowledge-base assistant on a single consumer GPU (12 GB VRAM) with openly licensed content: 1.8 mWh per query at best — about 0.54 Wh for a class of 30 students submitting ten queries each — with quantization-aware fine-tuning containing both the accuracy loss and the [[hallucination-risk|hallucination]] rise that compression alone caused. It is an engineering benchmark, not a learning study, but it shows the footprint question has design levers (grounding, quantization, deployment location), not only usage-discipline levers.([[shen-sustainable-ai-knowledge-base-cs-education-2026]])

## Green skills, sustainability consciousness, and teacher capacity

Together these studies describe a green-skills agenda delivered unevenly: sustainability consciousness as a curricular outcome, ESD-aligned material development as the mechanism for teacher capability, and climate decision-making as a measurable reasoning skill. The value-critical strand supplies the caveat: a conceptual analysis argues AI's contribution to sustainable education is **conditional and governance-mediated**, supporting sustainability only when adoption is subordinated to explicit educational values and human-centered purposes — which places [[governance]] and [[critical-pedagogy|critical pedagogy]] inside environmental education rather than beside it.([[alsuhaymi-sustainable-education-ai-digitalization-2026]])

The [[meta-analysis-systematic-review|scoping review]] organizing this literature supplies the field's own verdict on scale: applications cluster around energy management, climate monitoring, and green-campus programs, but are limited in scale, often lack ethical or environmental guidelines, and much of the research remains conceptual or small-pilot. Coverage is skewed toward North America and Europe, with almost nothing from the [[global-south|Global South]] beyond a few South African studies.([[daniel-ai-sustainability-scoping-review-2026]])

## What the evidence does not yet establish

- **No footprint evidence for environmental education specifically.** Carbon and energy figures come from general LLM studies and a CS-context benchmark; nothing measures the environmental cost of an AI-supported climate or ESD curriculum.
- **No learning-gain evidence for footprint interventions.** Eco-feedback changed choices in a lab-like study; nothing shows it changes habits, assessment outcomes, or procurement.
- **No causal evidence for the curriculum frameworks.** AI-SEE is a single-site self-report case and E3-HOT a design blueprint with no implemented study; the SDP lesson-design result has no control group.
- **No large-scale or cross-context evidence.** Every empirical result here is single-site, and the teacher studies rest on small purposive samples with weak instruments.
- **The two halves are rarely studied together**, even though both bear on the same classroom.

## Implications for AI in education

1. **Name which question you are answering.** Strategies that use "sustainability" for both AI-for-climate-teaching and AI's own footprint hide the accountability gap [[daniel-ai-sustainability-scoping-review-2026|Daniel et al. (2026)]] identify; keep the agendas separate, with separate owners.
2. **Treat footprint disclosure as field infrastructure.** Reporting compute and carbon beside accuracy — with a sustainability statement even when measurement is imperfect — is the only route out of the incompatible-metrics problem.
3. **Design for the impatient learner.** If the lower-carbon option costs perceived latency, most students will not take it: keep latency low, expose controls, and describe impact in concrete outcome terms, not abstract carbon units.
4. **Prefer lighter deployment where pedagogy allows.** Grounding a model in a licensed local corpus and quantizing with fine-tuning gave usable accuracy at a fraction of the energy — reuse that pattern before scaling cloud inference.
5. **Build teacher capability through material development, not awareness campaigns,** and fill the [[global-south|Global South]] gap rather than importing evidence from North American and European contexts.

## Connected Concepts

- [[sustainability]]
- [[global-south]]
- [[critical-pedagogy]]
- [[inquiry-based-learning]]
- [[science-education]]
- [[engineering-education]]
- [[teacher-education]]
- [[curriculum-design]]
- [[ethics]]
- [[governance]]

## Connected Articles

- [[daniel-ai-sustainability-scoping-review-2026]] — Separates AI for sustainability from sustainable AI; Global South gap
- [[ai-assisted-inquiry-ssi-climate]] — AI-assisted climate inquiry, d = 0.69 over inquiry alone
- [[aied-carbon-footprint-reporting]] — AIED 2025 disclosure review plus an open-source footprint method
- [[llm-environmental-impact-student-usage-2026]] — Eco-feedback on latency–carbon trade-offs with 89 CS students
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — On-premise quantized assistant at 1.8 mWh per query
- [[liu-ai-sustainable-engineering-education-2026]] — AI-SEE: sustainability consciousness in engineering education
- [[riandi-teacher-ai-green-energy-education-2026]] — Practical AI use and ESD material development predict integration
- [[talebzadeh-ai-green-education-2026]] — AI-assisted design under Sustainable Development Pedagogy constraints
- [[alsuhaymi-sustainable-education-ai-digitalization-2026]] — AI's contribution to sustainable education as governance-mediated
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — "Sustainable learning" as durable cognitive agency, not an environmental claim
