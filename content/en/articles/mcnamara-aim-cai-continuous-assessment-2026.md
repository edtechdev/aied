---
title: "AI-Mediated Continuous Assessment Infrastructure (AIM-CAI): Connecting Learning Evidence Across Contexts and Time"
created: "2026-10-10T19:38:00-04:00"
updated: "2026-10-16T13:51:50-04:00"
type: article
technology: [learning-analytics, llm, adaptive-learning]
pedagogy: [mastery-learning]
assessment: [formative-assessment, summative-assessment]
ethics: [privacy]
audience: [researchers, administrators, educational technology developers]
level: [teacher education]
sources: ['raw/papers/mcnamara-aim-cai-continuous-assessment-2026.md']
confidence: high
methods: [qualitative-research]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
---

> **Synthesis:** This paper proposes AIM-CAI, a conceptual reference architecture for continuous assessment — the longitudinal accumulation and dynamic interpretation of learning evidence generated across contexts, replacing the field's historical reliance on episodic assessment (examinations, assignments, grades, credentials) as the primary record of competence. The organizing insight is that learning now unfolds across platforms, workplaces, AI tutors, simulations, portfolios, and collaborative networks, generating evidence that remains fragmented across systems, and that converging advances in AI, learning analytics, multimodal analytics, learner modeling, and semantic interoperability make connecting this evidence feasible — but *feasibility is not validity*. AIM-CAI's contribution is explicitly architectural: six interconnected functional layers (evidence generation, evidence representation/serialization, AI-mediated semantic translation, psychometric/inferential interpretation, dynamic learner representation via longitudinal competency profiles, and federated governance) that show how established components — evidence-centered design, programmatic assessment, stealth assessment, semantic interoperability, privacy-preserving computation — can operate together as an infrastructure rather than as isolated techniques. The framework's distinctive posture is its governance seriousness: a table of seven structural tensions (interoperability vs. local autonomy; privacy vs. utility analytics; learner agency vs. predictive automation; innovation vs. governance stability; transparency vs. model complexity; distributed governance vs. accountability; continuous support vs. surveillance), each with concrete risks and governance responses (differential privacy, secure enclaves, contestability mechanisms, explainable AI, bounded monitoring, participatory governance). The paper is candid that the novelty is integrative, not component-level, and that unresolved challenges — validity, fairness, surveillance, semantic instability, ownership of learning evidence — define the research agenda.

The conceptual-shift table is the article's core deliverable for practitioners: learning documented through examinations becomes learning generating evidence across laboratories, writing, collaboration, simulations, workplace experiences, AI-supported learning, and portfolios; grades summarizing discrete achievement become competency profiles evolving as evidence accumulates; feedback attached to individual assignments becomes longitudinal feedback supporting advising, reflection, and future learning; credentials certifying completed learning become credentials supported by transparent longitudinal evidence; governance over institutional records becomes governance spanning the generation, interpretation, sharing, and use of evidence. Each shift carries a failure mode the authors name explicitly — without careful governance design, continuous inferential systems risk privileging dominant cultural norms and marginalizing non-traditional or culturally situated forms of learning. This is a position paper (reference architecture and research agenda), not an empirical evaluation; its value is the shared vocabulary and the governance tension map.

## Key findings / framework components

- **Six functional layers:** (1) learning evidence generation across distributed environments; (2) evidence representation/serialization preserving source and context; (3) AI-mediated semantic translation across systems and competency representations; (4) evidence interpretation through psychometric and inferential models; (5) longitudinal learner representation via dynamic competency profiles; (6) governance and trust over how evidence and inferences are accessed, interpreted, contested, and used.
- **Seven governance tensions (Table 1), each with risks and responses:** interoperability vs. local autonomy (semantic fragmentation; AI-mediated translation layers, federated standards); privacy vs. utility analytics (loss of signal for small populations; differential privacy, secure enclaves, federated learning); learner agency vs. predictive automation (path dependency, predictive determinism; human oversight, learner control, contestability); innovation vs. governance stability (governance lag; adaptive governance architectures); transparency vs. model complexity (black-box inference; explainable AI, audit trails, uncertainty visualization); distributed governance vs. accountability (unclear liability; federated accountability structures); continuous support vs. surveillance (behavioral conformity, algorithmic governmentality; permissioned access, bounded monitoring, participatory governance).
- **Seven conceptual shifts (Table 2), episodic → continuous:** evidence sources (exams → authentic activities across contexts); observations (isolated → accumulating); interpretation context (single course → cross-institutional); learner representation (grades → evolving competency profiles); feedback (per-assignment → longitudinal); credentials (completion → transparent development evidence); governance (institutional records → evidence lifecycle governance).
- **Explicitly NOT proposed:** a centralized learner database, a fully developed technical system, or comprehensive learner monitoring — the architecture is federated, with locally governed systems contributing selected evidence.
- **Epistemic risk named:** without governance design, continuous inferential systems risk privileging dominant cultural norms, rhetorical traditions, and behavioral expectations while marginalizing non-traditional or culturally situated learning — the fairness argument for the governance layer, not just the privacy argument.

## What this means for practice

- **For institutions:** the architecture gives a vocabulary for auditing existing evidence flows — which of the six functions your current LMS/AI-tutor/assessment stack actually implements, and where the gaps (typically serialization and translation) sit.
- **For governance design:** the tension table is a ready-made review checklist — each tension has a concrete failure mode and a menu of governance responses, usable as a procurement or policy review framework.
- **For assessment reform:** the shift table reframes "continuous assessment" from a technology project (more data capture) into an interpretation-and-governance project (evidence integration with preserved context and contestability).
- **For credentialing:** the transparent-longitudinal-evidence shift is the concrete alternative to both transcript inflation and skills-badge fragmentation.

## Limitations

- Conceptual position paper: no empirical validation, no prototype evaluation, no measurement of whether the architecture improves validity or equity in practice.
- Framed around US-centric regulatory categories (FERPA, COPPA) and interoperability standards (xAPI, LTI, LRS, RDF) — international generalization is not addressed.
- The governance tension analysis is qualitative; the tension *taxonomy* is asserted rather than derived from empirical study of governance failures.
- Longitudinal competency profiles inherit all the psychometric challenges of existing learner models without solving them (the paper says so — "continued empirical research will refine the architecture").
- The Acknowledgment discloses generative-AI tool use (ChatGPT, Claude, Gemini) in drafting — standard for the venue, but the paper is explicitly an architecture argument rather than an evidence-generating study.

## Citation

McNamara, D. S., & Hasnine, M. N. (2026). [*AI-Mediated Continuous Assessment Infrastructure (AIM-CAI): Connecting Learning Evidence Across Contexts and Time*](https://doi.org/10.3390/info17080806). *Information, 17*(8), 806.
