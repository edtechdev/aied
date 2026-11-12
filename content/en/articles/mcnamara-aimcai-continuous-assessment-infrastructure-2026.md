---
title: "AI-Mediated Continuous Assessment Infrastructure (AIM-CAI): Connecting Learning Evidence Across Contexts and Time"
created: "2026-11-12T13:15:00-05:00"
updated: "2026-11-12T13:15:00-05:00"
type: article
sources: ['raw/papers/mcnamara-aimcai-continuous-assessment-infrastructure-2026.md']
confidence: medium
page_kind: [framework]
research_method: [position paper]
discipline: [information technology]
level: [higher ed]
audience: [administrators, assessment designers]
foundations: [human-ai-collaboration]
technology: [llm, generative-ai, learning-analytics]
assessment: [formative-assessment, assessment]
methods: [ai-ed-evaluation]
ethics: [privacy, equity-in-ai-education]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** [[assessment|Educational assessment]] still summarizes learning through examinations, assignments, grades, and credentials — efficient snapshots of a process that actually unfolds across platforms, workplaces, and AI-mediated environments. McNamara and Hasnine argue that the evidence needed to interpret that process already exists but remains fragmented across systems that cannot read one another. AIM-CAI is their answer: a conceptual sociotechnical framework organized into six functional layers that generate, represent, translate, interpret, accumulate, and govern learning evidence. Its wager is architectural rather than technical. Semantic translation by AI replaces the search for universal standards, learner models remain probabilistic and uncertainty-aware, and governance is built into the infrastructure instead of appended as policy. The paper is explicit that this is a reference architecture and research agenda, not a deployed system or a validated intervention.

## Key Findings

1. **Episodic assessment is an inherited compromise.** Examinations, assignments, grades, and credentials give scalable summaries of achievement, but each event captures one observation of a developmental process that continues across courses, platforms, workplaces, and informal settings.
2. **Six layers define the evidentiary chain.** Evidence generation, evidence representation, evidence translation, evidence interpretation, learner representation, and governance and trust each perform a distinct function between a learning activity and an educational decision.
3. **Three inferential boundaries limit what a single assessment can support.** Learning develops over time, tasks align imperfectly with the competencies they are meant to represent, and a small number of observations may be insufficient for valid inference; institutional boundaries add questions about where evidence is recognized.
4. **Semantic translation, not universal standardization, is the interoperability bet.** SCORM, xAPI, LTI, and Caliper fragment in practice, so AIM-CAI treats AI-mediated ontology alignment as a provisional, versioned, and reviewable process rather than a binary match.
5. **Learner representations stay probabilistic and revisable.** Bayesian networks, dynamic Bayesian networks, and [[knowledge-tracing|knowledge tracing]] update competency estimates as evidence accumulates, and sparse or uneven evidence raises uncertainty instead of lowering judged competence.
6. **Governance is a cross-cutting layer, not a policy appendix.** The framework specifies risk-proportionate safeguards and seven requirements: auditability, transparency, probabilistic uncertainty estimation, human override, semantic accountability, fairness monitoring, and [[agency|learner agency]].
7. **The contribution is architectural and integrative.** AIM-CAI assembles established traditions — evidence-centered design, programmatic assessment, stealth assessment, [[student-modeling|learner modeling]], semantic interoperability, privacy-preserving computation — without claiming to invent them, and without an implementation study.

## Why episodic assessment runs out of evidence

The paper opens historically rather than polemically. Industrial-era institutions needed standardization, administrative efficiency, and a way to evaluate large numbers of learners, and discrete assessment events supplied all three. Those functions remain real, which is why examinations and transcripts persist. The problem is evidentiary: an assessment captures performance at a particular point in time, so it represents a trajectory only partially.

McNamara and Hasnine separate three inferential boundaries. The first is developmental: short, decontextualized tasks are poor vehicles for adaptive expertise, collaboration, [[creativity]], or transfer. The second concerns alignment between task and competence: structured examinations may not represent complex judgment or adaptability in authentic settings. The third concerns sufficiency: because assessment is evidentiary reasoning from observation to latent construct, a limited number of observations may not warrant claims about growth. A fourth, institutional boundary determines where evidence is generated and whether it enters educational decision-making at all.

Programmatic assessment, competency-based education, and twenty-first-century skills frameworks already answer part of this by aggregating multiple low-stakes observations across contexts, evaluators, and time. What has changed is feasibility. [[learning-analytics|Learning analytics]], [[educational-nlp|natural language processing]], [[multimodal]] analytics, learner modeling, and distributed computation make continuous interpretation operationally plausible in a way it was not when episodic assessment was designed. Plausible is not valid, and the authors say so: richer evidence still needs defensible inferential models, theoretical grounding, and governance.

## Six layers along one evidentiary chain

The architecture runs from generation to governance. The evidence generation layer captures activity across learning management systems, intelligent tutors, [[simulation|simulations]], laboratories, [[eportfolio|portfolios]], conversations, workplaces, and instructor observation, preserving provenance, timing, and conditions. The representation layer turns those observations into machine-readable events that keep relationships among learners, activities, time, and context, balancing standardization against contextual fidelity. The translation layer connects representations across systems and competency frameworks. The interpretation layer applies evidence-centered reasoning and probabilistic modeling to decide which evidence counts, how it is weighted, and how uncertainty is represented. The learner representation layer accumulates those inferences into a longitudinal, revisable profile rather than a transcript of isolated outcomes. Governance and trust spans all five.

Six characteristics follow from the design: assessment is continuous, inferential, probabilistic, distributed, longitudinal, and interoperable. The paper's worked example is a first-year engineering student learning recursion. A correct base case and a repaired recursive call support a claim about recognizing structural requirements, not a claim of independent design skill. A reflective explanation supports conceptual understanding of decomposition and termination, not implementation fluency. Correcting an error after a general hint to inspect termination supports a narrower claim about productive debugging and scaffold use; a hint naming the exact correction would support something narrower still. The example carries the framework's central discipline: evidence warrants specific claims, and the specificity of support changes the inference.

## Translation is the conceptual core

AIM-CAI's most consequential argument concerns interoperability. Existing standards — SCORM, xAPI, LTI, Caliper Analytics — support technical exchange but depend on prior agreement, and the historical record is one of fragmentation. xAPI's flexible Actor–Verb–Object statements, stored in a Learning Record Store, produced inconsistent verbs, object structures, and activity representations across implementations. Innovation in educational technology consistently outpaces consensus standards, so the heterogeneity the standards were meant to remove keeps returning.

The framework therefore bets on AI-mediated semantic translation instead of universal schemas. [[machine-learning|Machine learning]], natural language processing, and [[llm|large language models]] support ontology alignment, semantic mapping, and probabilistic reconciliation across competency frameworks. Institutions keep their local representations; the translation layer connects them. Because those mappings feed consequential inferences, the paper requires them to be treated as provisional, with documented provenance, version, confidence, and degree of semantic equivalence. Where equivalence cannot be established, evidence should remain linked to its original framework or wait for [[human-in-the-loop-ai|human review]] before informing accreditation, certification, or credentialing.

The healthcare [[metaphors-and-analogies|analogy]] is instructive and cautionary. UMLS and SNOMED CT have spent decades reconciling clinical vocabularies, and alignment systems still fail on ambiguity and inconsistent categorization — in a domain where concepts are more stable than creativity, collaboration, or [[critical-thinking|critical thinking]]. Education's constructs are culturally situated and contested, which is why the authors frame translation as ongoing negotiation rather than a solved technical problem.

## Governance and trust as architecture

Continuous assessment creates visibility that episodic testing never had: interaction traces, behavioral telemetry, conversational exchanges, revision histories, multimodal signals, and longitudinal trajectories. The paper takes the critical literature seriously. Learning analytics can flatten educational processes into behavioral proxies; learners can adapt to invisible predictive systems; persistent profiles can become data doubles that shape opportunity; and educational AI trained on dominant linguistic patterns can reproduce epistemic hierarchies.

Its response is risk-proportionate [[governance|governance]] embedded in the architecture. Lower-risk uses such as formative feedback, adaptive support, or instructional recommendations may rely on probabilistic estimates with uncertainty shown. Higher-risk uses — accreditation, certification, selection, progression — require human review, traceable evidentiary basis, documented interpretation, and a route for learners to contest decisions. The NIST AI Risk Management Framework's Govern, Map, Measure, and Manage functions supply one operational model, and the seven requirements translate into data lineage, audit trails, fairness monitoring, and override mechanisms.

Federated and privacy-preserving architectures carry the load at the infrastructure level. SafeInsights, secure enclaves, synthetic data sandboxes, and zero-copy analytics let researchers analyze data inside protected institutional environments; differential privacy, federated learning, and secure multi-party computation reduce disclosure risk. The paper is candid about the costs: differential privacy trades analytic precision for protection, which bites hardest for small or marginalized populations; federated systems complicate error localization and debugging; and decentralized governance can diffuse accountability when a harmful inference emerges.

The institutional argument follows. If evidence accumulates across contexts, institutions lose their monopoly on competency validation and become validators, interpreters, and governors within broader ecosystems. Credentials become developmental rather than terminal, degrees persist as one layer rather than the whole record, and faculty shift from grading toward evidence interpretation, [[learning-design|learning design]], and governance participation. Adoption should start in lower-risk contexts where governance can mature before inference carries consequences.

## What this means for practice

- **Administrators.** Do not procure a platform and call it infrastructure. Settle competency frameworks, evidence stewardship, retention, access, and contestability policies before AI-supported inference goes live, then pilot where decisions are low-stakes.
- **Assessment designers.** Write down the claim each evidence stream can support. A correct answer after a hint naming the fix warrants a much narrower inference than unaided success, and the design should record which one it is.
- **Learning analytics and platform developers.** Treat semantic mappings as versioned objects with confidence and equivalence metadata, not as binary matches; preserve the original framework whenever equivalence is uncertain.
- **Faculty and [[curriculum-design|curriculum]] leads.** Use bounded implementations in [[formative-assessment|formative feedback]] and advising to learn how models fail, and keep human review attached to any inference that affects progression or credentials.

## Limitations

- The paper is conceptual. It reports no implementation, no participants, no data collection, and no outcome study, so every claim about educational value is argued rather than demonstrated.
- Cross-context semantic translation is asserted to be more viable than standardization, but the evidence offered is analogical — healthcare informatics — and no educational translation system is evaluated.
- The psychometric validity and reliability of continuously updated competency estimates remain open questions in the authors' own account; no calibration, stability, or generalizability study is reported.
- The governance model is prescriptive. Risk tiers, human review, and the seven requirements are not costed, staffed, or tested for enforceability, and the paper does not say who pays for the oversight it requires.
- Privacy-preserving designs are described through examples such as SafeInsights and trusted research environments; the privacy–utility trade-off for small populations is acknowledged but not measured.
- The institutional transformation argument — continuous credentialing, diminished institutional monopoly, reshaped faculty roles — is speculative and does not model accreditation, legal, or labor constraints.

## Citation

McNamara, D. S., & Hasnine, M. N. (2026). [AI-Mediated Continuous Assessment Infrastructure (AIM-CAI): Connecting Learning Evidence Across Contexts and Time](https://doi.org/10.3390/info17080806). *Information*, 17(8), 806.
