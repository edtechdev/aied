---
title: "Conceptualising local AI infrastructure using small language models (SLMs) for primary education"
created: "2026-11-12T07:36:15-05:00"
updated: "2026-11-12T13:20:00-05:00"
type: article
evidence_context: educational
sources: ['raw/papers/zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026.md']
confidence: medium
page_kind: [framework]
research_method: [position paper]
discipline: [information technology]
level: [primary education]
audience: [administrators, instructors]
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

> **Synthesis:** A primary school that adopts a cloud [[llm|large language model]] hands a vendor the prompts, the responses, and the retention rules for its students' learning interactions. Zulfiqar and Iqbal argue that this is a poor exchange for institutions serving children aged five to 12, and propose instead a school-hosted server running a small language model (SLM) of 1B–13B parameters, reachable only from the school's own network, with outbound transmission architecturally prohibited. Their contribution is a framework rather than a trial: hardware, [[open-source]] serving software, network topology, and governance policy are specified, and the educational case rests on the fit between SLM limits and the structure of primary instruction. The authors' criterion for adoption is institutional appropriateness — whether school leaders can explain and control what happens to children's data — rather than model capability. No deployment, cost accounting, or learning outcome is reported.

## Key Findings

1. **The proposed unit is a commodity server, not a data center.** A refurbished desktop with a mid-range GPU, or a mini PC with an entry-level GPU, is presented as sufficient for a model in the 1B–13B parameter range, and a single server could host multiple SLM instances serving different classroom networks.
2. **Capital cost replaces subscription cost, without a proven saving.** Indicative implementation cost is several hundred to several thousand Australian dollars per server, a one-off capital expenditure rather than recurring fees; the authors decline to claim a lifecycle advantage, since no comprehensive empirical total-cost comparison exists.
3. **The privacy guarantee is architectural rather than contractual.** Student devices reach the model only over the school LAN or intranet, and the server is to be configured without outbound internet connectivity, so data leaves only through a physical or configuration failure rather than a change in vendor policy.
4. **Primary instruction is unusually tolerant of SLM weaknesses.** [[curriculum-design|Curriculum]] tasks are described as domain-specific, repetitive, heavily scaffolded, and mediated by a [[teacher-role|teacher]], which the authors argue offsets reduced reasoning depth and smaller context windows while leaving the governance advantages intact.
5. **Local hosting shifts responsibility more than it removes risk.** A school can set retention rules, audit access logs, and show [[parents-and-families|parents]] what is stored, but it also assumes cybersecurity, patching, backup, physical security, and incident response — in many schools with a single part-time information technology technician.
6. **Offline operation is treated as an [[equity-in-ai-education|equity]] feature.** A school-hosted model keeps working through broadband outages, which the authors present as material for rural and remote schools and for excursions, whereas a cloud service stops entirely.
7. **The recommended decision rule is institutional fit.** The paper's test is whether a system is controllable, explicable, and affordable for a particular school, summarized in the claim that "smaller but controllable" may be institutionally more valuable than "larger but opaque."

## Why a smaller model suits a smaller institution

The technical case is stated as a trade, not a triumph. SLMs typically carry 1B to 13B parameters, run on consumer-grade GPUs or on CPUs with appropriate optimization, operate offline after the initial model download, and cost far less per inference than hosted APIs. They also consume less energy, avoid vendor lock-in, and let a school govern model parameters, [[llm-training-and-fine-tuning|fine-tuning]], and access logs directly. The corresponding deficits are real: shallower multi-step reasoning, smaller context windows, narrower domain coverage, higher [[hallucination-risk|hallucination]] rates, and weaker performance on out-of-distribution tasks. Zulfiqar and Iqbal do not dispute these; they argue that primary schooling rarely demands what the deficits remove. Tasks are curriculum-bound, format-consistent, scaffolded by an adult, written in simplified language, and evaluated by a teacher before students see the output. The institutional arithmetic is blunt: a school with 400 students cannot absorb cumulative cloud API costs across classrooms, and a rural school cannot absorb an outage.

## What a school-hosted installation looks like

The reference design is deliberately unglamorous. One or more dedicated servers sit on the school network: refurbished workstations with mid-range GPUs, mini PCs with entry-level GPUs, or existing network-attached storage. Serving is handled by open-source tooling — Ollama or LM Studio — rather than low-level deep learning [[libraries]], and models are drawn from public repositories such as Hugging Face: Gemma or Phi for literacy work, Mistral or Llama 2 for reasoning and curriculum explanation. The network section carries the argument's weight. Student tablets, laptops, and classroom computers connect through the LAN or intranet only, the server is configured without outbound internet access, and a teacher dashboard exposes interaction logs, usage patterns, and retained transcripts for [[pedagogy|pedagogical]] and safeguarding review. The design assumes a school can inspect its own deployment and tell a parent where a child's prompts are stored and when they are deleted.

## Governance: authority gained, risk retained

The strongest claims concern data sovereignty. When inference and storage stay inside the school, records of student interaction are held by the institution rather than by a provider whose terms may permit secondary use, connecting this to documented concern about data monetization and to parental scrutiny of surveillance. Retention can be set to delete logs automatically, access can be audited, and compliance with child data protection regimes — the Children's Online Privacy Protection Act in North America, the GDPR in the European Union — becomes a local policy that a school can demonstrate rather than a vendor assurance it must accept. The authors frame this as [[privacy|privacy by design]]: protection built into the architecture instead of bolted on as paperwork. They are equally direct that the protection is not absolute. A poorly secured server can be compromised, staff misconduct can violate policy, and the school now owns the breach. The honest summary is that local hosting relocates privacy governance from a commercial entity to a school, which is an improvement in accountability only where the school has the capacity to exercise it. That tension runs through the [[digital-divide|digital divide]] argument: the architecture lowers dependence on connectivity while raising dependence on technical staff, favoring rural schools on one axis and disadvantaging under-resourced ones on the other.

## Use cases and the pedagogical frame

Four uses are offered as illustrations rather than findings: literacy support such as vocabulary explanation and comprehension prompts; teacher assistance with differentiated worksheets, rubrics, and scaffolded explanations; guided classroom inquiry in which a teacher structures the questioning and corrects the model; and inclusion support through simplified language, multilingual [[scaffolding]], and focused pacing. The framing is [[constructivist]], with SLMs as resources for exploration rather than substitutes for instruction, and social constructivist, with the model as supplementary scaffolding inside a teacher-managed [[sociocultural-learning|zone of proximal development]]. The authors are explicit that teacher mediation is what makes the design safe: the educator decides when assistance is appropriate, checks accuracy, and retains pedagogical authority. Their broader claim is evaluative rather than technical. Educational technology has tended to rank systems by capability, under which a frontier model is simply better; the paper proposes judging a system by [[institutional-ai-infrastructure|institutional capacity]] to deploy it, authority to govern it, pedagogical fit, sustainability, and regulatory alignment. That reframing draws on critiques of technological determinism and on digital sovereignty, and it produces the paper's central question: not what AI can do for education, but what kind of AI aligns with a school's values and governance capacity.

## What this means for practice

- **Administrators.** Cost the second and third year, not the purchase: electricity, hardware replacement, patching, backup, and support belong in the comparison, and the paper supplies no lifecycle costing to copy.
- **Instructors.** Treat every output as a draft: the authors place hallucination and bias correction with the teacher and require review before student exposure, a workload commitment rather than a setting.
- **Technology leads.** Enforce the no-outbound rule at the network layer and keep an inventory of what the model host can reach; a server that can reach the internet is a cloud service with extra steps.
- **Procurement staff.** Ask whether current purchasing rules quietly require cloud hosting, since the authors argue that vendor-oriented procurement can foreclose the local option before anyone evaluates it.

## Limitations

The paper is a Perspective, and a Perspective advances an argument rather than testing it; most of the constraints below follow from that genre.

- No system was deployed and no classroom was studied. The architecture, costs, and benefits are propositions, and the authors state that empirical validation through pilots, classroom studies, and stakeholder evaluation is required before effectiveness can be claimed.
- Cost figures are indicative only. The several-hundred-to-several-thousand-dollar range is not tied to a bill of materials, a usage profile, or a multi-year ownership model, and the authors concede that no comprehensive lifecycle comparison exists.
- The capability argument rests on secondary literature. Claims that SLMs suit young learners draw on studies of child-like text production and overregularization in computational [[simulation|simulations]] and textual analysis, not on classroom use with children.
- Governance benefits are asserted rather than measured. No compliance audit, breach record, retention practice, or vendor comparison is reported, so the claim that local hosting improves accountability is a reasoned expectation, not a demonstrated result.
- No stakeholder evidence is presented. Teachers, parents, school leaders, and students were not surveyed, and the two capacity constraints the paper itself names — teacher digital literacy and a single part-time technician — are acknowledged without being tested.
- Scale and generalization are untested. Hardware sizing is illustrative, no concurrent-user load is modeled, and a single-school design is extrapolated to the sector without multi-site or longitudinal data.

## Citation

Zulfiqar, M., & Iqbal, U. (2026). [*Conceptualising local AI infrastructure using small language models (SLMs) for primary education*](https://doi.org/10.3389/friot.2026.1886609). *Frontiers in the Internet of Things*, 5, 1886609.
