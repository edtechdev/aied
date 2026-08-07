---
title: "Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm"
created: 2026-07-29
updated: 2026-07-29
type: concept
tags: [agentic-ai, ai-literacy, educational-theory, generative-ai, higher-ed, intelligent-tutoring, llm, multi-agent, open-source, scaffolding, scoping-review, stem-education]
sources: [raw/papers/agentic-ai-education-scoping-review-2026.md]
confidence: high
---

# Agentic AI in Education: Scoping Review (474 Studies, 2020–2026)

**Wang, Zou, Xie & Qin (2026)** — Lingnan University & Hong Kong Polytechnic University.
Published in *Computers and Education: Artificial Intelligence*, accepted 27 July 2026.
📄 doi:[10.1016/j.caeai.2026.100653](https://doi.org/10.1016/j.caeai.2026.100653) · [local](raw/papers/agentic-ai-education-scoping-review-2026.md)

## Summary

This scoping review systematically maps **474 studies** (January 2020 – May 2026) on generative AI-powered agentic AI in education, providing the most comprehensive synthesis of the field to date. The authors analyze publication characteristics, study designs, agent roles, AI models/architectures, six dimensions of agentic capability, and the extent of educational theory integration.

## Key Findings

### 1. Rapid Expansion Since 2025
The field has grown explosively, but the literature is dominated by **conference papers** concentrated in **higher education**, **STEM disciplines**, and **text-based tutoring** scenarios. This mirrors the general trajectory of [[llm-in-education]] research, but with a specific agentic inflection point in 2025.

### 2. Technology Stack: GPT + LangChain Dominate
**GPT-series models** and **LangChain** are the most widely adopted technologies. Notably, **OpenClaw** and other frontier agent paradigms (governed tool orchestration, persistent memory, long-horizon planning, multi-agent coordination) remain **largely absent** from educational research — revealing a significant technology–application gap. This stands in contrast to the vision articulated in [[agentic-ai-ecosystems-higher-education]].

### 3. Agentic Capabilities Remain Modest
Across the six capability dimensions analyzed:
- **Single-task autonomy** — commonly demonstrated ✓
- **Sequential planning** — increasingly present ✓
- **Multi-agent collaboration** — growing ✓
- **Strong tool orchestration** — rarely exhibited ✗
- **Robust embedded governance** — rarely exhibited ✗
- **Persistent memory / long-horizon planning** — largely absent ✗

This maps closely to the four-paradigm framework in [[agentic-workflows-education]] (reflection, planning, tool use, multi-agent collaboration), where the reviewed systems tend to cluster in the first two paradigms while falling short on the more advanced ones.

### 4. Theoretical Grounding is Limited
Only **138 of 474 studies** (29%) explicitly drew on educational theory, revealing a **clear disciplinary divide** between technically oriented research (CS/engineering) and pedagogically oriented work (education/learning sciences). This echoes broader concerns in [[principled-ai-education]] about the gap between technological capability and pedagogical intentionality.

### 5. Methodological Limitations
Most studies rely on **small-scale, short-term designs**. Longitudinal and real-world validation studies are rare, limiting the evidence base for claims about effectiveness. The review calls for more rigorous [[efficacy-study]] designs and attention to [[student-experience]] beyond immediate performance metrics.

### 6. Six Dimensions of Agentic Capability (the Review's Analytical Framework)

| Dimension | Description | Status in Reviewed Studies |
|---|---|---|
| Task Autonomy | Independent task initiation, planning, completion | Common |
| Goal-Directed Reasoning | Strategy selection and adaptation to context | Emerging |
| Memory & Context Awareness | Using interaction history and learner profiles | Limited |
| Planning & Sequencing | Multi-step plan formulation and execution | Growing |
| Tool Orchestration | Invoking and coordinating external tools/resources | Rare |
| Governance & Oversight | Auditable action, safety constraints, human-in-the-loop | Rare |

The governance gap is particularly concerning given frameworks like [[human-in-the-loop-ai]], which emphasize that educational AI systems require robust oversight mechanisms — not just technical capability.

## Priority Research Directions

The review identifies several converging priorities:
1. **Longitudinal and real-world validation** — moving beyond short-term lab studies
2. **Stronger pedagogical grounding** — bridging the CS/education disciplinary divide
3. **Governed adoption of emerging agent infrastructures** — particularly tool orchestration and multi-agent coordination
4. **Systematic integration of ethics and human oversight** — connecting to [[equity]] and [[academic-integrity]] concerns
5. **Expanding beyond STEM and higher education** — into K-12, language learning, special education, and professional training contexts

## OpenClaw as an Analytical Lens

The review uses **OpenClaw** (Steinberger, 2026) — the fastest-growing [[open-source]] AI project in early 2026 — as an illustrative reference point for the "frontier agent paradigm": systems that feature governed tool orchestration via MCP, persistent memory, long-horizon planning, multi-agent coordination, and auditable action. The finding that these capabilities are largely absent from educational agentic systems is the review's most striking technology–application gap. While the authors are careful not to position OpenClaw as a normative target, its feature set serves as a useful benchmark for assessing how far educational systems lag behind general-purpose agentic infrastructure.

## Citation

**APA:** Qin, N.W.D.Z.H.X.S.J., doi:[10.1016/j.caeai.2026.100653](https://doi.org/10.1016/j.caeai.2026.100653), C.A.E.A.I.A.J., applications, G.A.A.S.A.I.P.F.E., 2026, R.S.M.S.P.B.J.A.M., technical, H.E.S.D.A.T.T.S.I.T.O., technologies, I.G.M.A.L.A.T.M.W.A., the, W.O.A.O.F.A.P.R.L.A.A., & studies, F.A.E.P.T.G.R.L.O. (2026). *Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm*. https://doi.org/10.1016/j.caeai.2026.100653

## Related Pages

- [[agentic-workflows-education]] — Kamalov's four-paradigm framework (reflection, planning, tool use, multi-agent)
- [[agentic-ai-ecosystems-higher-education]] — Multi-agent frameworks for institutional intelligence
- [[llm-in-education]] — Foundation of LLM-powered educational systems
- [[adaptive-learning-systems]] — Tutoring systems that agentic AI builds upon
- [[human-in-the-loop-ai]] — Governance and oversight frameworks
- [[principled-ai-education]] — Bridging the pedagogical theory gap
- [[student-experience]] — Learner-centered evaluation
- [[equity]] — Ethics and inclusive design in agentic systems
