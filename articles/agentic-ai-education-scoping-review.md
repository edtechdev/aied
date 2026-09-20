---
title: "A scoping review of generative AI-powered agentic AI in education: Research landscape, agentic capabilities"
created: "2026-07-29T04:33:04-04:00"
updated: "2026-09-19T07:42:07-04:00"
type: article
foundations: [agentic-ai, ai-literacy]
pedagogy: [learning-theories, scaffolding]
technology: [generative-ai, intelligent-tutoring, llm, open-source]
methods: [meta-analysis-systematic-review]
audience: [researchers, instructors]
level: [higher ed]
sources: ['raw/papers/agentic-ai-education-scoping-review-2026.md']
confidence: high
page_kind: [synthesis, framework]
---
> **Synthesis:** This scoping [[meta-analysis-systematic-review|review]] systematically maps **474 studies** (January 2020 – May 2026) of [[generative-ai|generative-AI-powered]] [[agentic-ai|agentic AI]] in [[ai-education|education]], the most comprehensive synthesis of the field to date. Analyzing publication characteristics, study designs, agent roles, model architectures, six dimensions of agentic capability, and the extent of [[learning-theories|educational theory]] integration, it finds rapid post-2025 expansion concentrated in [[higher-ed|higher education]], [[stem-education|STEM]], and text-based [[intelligent-tutoring|tutoring]], but modest capability levels: systems rarely exhibit strong tool orchestration, embedded [[governance]], or persistent memory. The review exposes a disciplinary divide — only **138 of 474 studies (29%)** drew on educational theory — and converges on priorities of longitudinal validation, stronger [[pedagogy|pedagogical]] grounding, and more governed adoption of frontier agent infrastructures.

## Summary

This scoping review systematically maps **474 studies** (January 2020 – May 2026) on [[generative-ai|generative AI-powered]] [[agentic-ai|agentic AI]] in education, providing the most comprehensive synthesis of the field to date. The authors analyze publication characteristics, study designs, agent roles, AI models/architectures, six dimensions of agentic capability, and the extent of educational theory integration.

## Key Findings

### 1. Rapid Expansion Since 2025
The field has grown explosively, but the literature is dominated by **conference papers** concentrated in **[[higher-ed|higher education]]**, **[[stem-education|STEM disciplines]]**, and **text-based tutoring** scenarios. This mirrors the general trajectory of [[ai-education]] research, but with a specific agentic inflection point in 2025.

### 2. Technology Stack: GPT + LangChain Dominate
**GPT-series models** and **LangChain** are the most widely adopted [[ai-technologies|technologies]]. Notably, **OpenClaw** and other frontier agent paradigms (governed tool orchestration, persistent memory, long-horizon planning, multi-agent coordination) remain **largely absent** from educational research — revealing a significant technology–application gap. This stands in contrast to the vision articulated in [[agentic-ai]].

### 3. Agentic Capabilities Remain Modest
Across the six capability dimensions analyzed:
- **Single-task autonomy** — commonly demonstrated ✓
- **Sequential planning** — increasingly present ✓
- **Multi-agent [[collaborative-learning|collaboration]]** — growing ✓
- **Strong tool orchestration** — rarely exhibited ✗
- **Robust embedded governance** — rarely exhibited ✗
- **Persistent memory / long-horizon planning** — largely absent ✗

This maps closely to the four-paradigm framework in [[agentic-workflows-education]] (reflection, planning, tool use, multi-agent collaboration), where the reviewed systems tend to cluster in the first two paradigms while falling short on the more advanced ones.

### 4. Theoretical Grounding is Limited
Only **138 of 474 studies** (29%) explicitly drew on [[learning-theories|educational theory]], revealing a **clear disciplinary divide** between technically oriented research (CS/engineering) and pedagogically oriented work (education/learning sciences). This echoes broader concerns about the gap between technological capability and [[pedagogy|pedagogical]] intentionality.

### 5. Methodological Limitations
Most studies rely on **small-scale, short-term designs**. Longitudinal and real-world validation studies are rare, limiting the evidence base for claims about effectiveness. The review calls for more rigorous [[ai-ed-evaluation|efficacy-study]] designs and attention to [[student-experience]] beyond immediate performance metrics.

### 6. Six Dimensions of Agentic Capability (the Review's Analytical Framework)

| Dimension | Description | Status in Reviewed Studies |
|---|---|---|
| Task Autonomy | Independent task initiation, planning, completion | Common |
| Goal-Directed [[critical-thinking|Reasoning]] | Strategy selection and adaptation to context | Emerging |
| Memory & Context Awareness | Using interaction history and learner profiles | Limited |
| Planning & Sequencing | Multi-step plan formulation and execution | Growing |
| Tool Orchestration | Invoking and coordinating external tools/resources | Rare |
| Governance & Oversight | Auditable action, safety constraints, [[human-in-the-loop-ai|human-in-the-loop]] | Rare |

The governance gap is particularly concerning given frameworks like [[human-in-the-loop-ai]], which emphasize that educational AI systems require robust oversight mechanisms — not just technical capability.

## Priority Research Directions

The review identifies several converging priorities:
1. **Longitudinal and real-world validation** — moving beyond short-term lab studies
2. **Stronger pedagogical grounding** — bridging the CS/education disciplinary divide
3. **Governed adoption of emerging agent infrastructures** — particularly tool orchestration and multi-agent coordination
4. **Systematic integration of [[ethics]] and human oversight** — connecting to [[equity-in-ai-education]] and [[academic-integrity]] concerns
5. **Expanding beyond STEM and higher education** — into [[k-12]], [[language-learning|language learning]], [[special-education|special education]], and [[professional-training]] contexts

## OpenClaw as an Analytical Lens

The review uses **OpenClaw** (Steinberger, 2026) — the fastest-growing [[open-source]] AI project in early 2026 — as an illustrative reference point for the "frontier agent paradigm": systems that feature governed tool orchestration via MCP, persistent memory, long-horizon planning, multi-agent coordination, and auditable action. The finding that these capabilities are largely absent from educational agentic systems is the review's most striking technology–application gap. While the authors are careful not to position OpenClaw as a normative target, its feature set serves as a useful [[benchmark]] for assessing how far educational systems lag behind general-purpose agentic infrastructure.

## What this means for practice

- **Designers.** Test whether governed tool orchestration, persistent memory, and long-horizon planning can serve learning goals rather than assuming simple [[conversational-ai|chatbot]] interaction is the ceiling — the review's technology–application gap shows the field uses only a narrow slice of available agentic capability.
- **Researchers.** Pair technical system-building with explicit [[learning-theories|learning theory]] and [[learning-design|instructional design]] so automation supports rather than replaces [[self-regulated-learning|learner cognition]]; only 138 of the 474 reviewed studies (29%) drew on educational theory.
- **Researchers.** Treat [[learning-gains|effectiveness claims]] cautiously and design longitudinal, real-world validation studies, since most reviewed work uses small-scale, short-term, single-context samples.
- **Administrators.** Make [[governance]], [[human-in-the-loop-ai|human oversight]], [[equity-in-ai-education|equity]], and [[academic-integrity]] core design constraints rather than afterthoughts as systems scale toward greater autonomy and multi-agent coordination.
- **Instructors.** Scrutinize any agentic tutor before adoption for auditable action and human-in-the-loop checkpoints, because robust embedded governance was rare across the 474 systems reviewed.

## Limitations

- As a scoping review, the study conducted no meta-analysis and did not assess risk of bias in individual studies, so it maps the field's shape but cannot establish effectiveness.
- The search was restricted to titles, abstracts, and keywords, and screening used an LLM-assisted strategy with two human reviewers, leaving relevant studies retrievable only through full-text indexing outside the corpus.
- The evidence base itself is dominated by small-scale, short-term designs and post-2025 publication (278 of 474 studies in 2025, 146 in January–May 2026), limiting the maturity of any cumulative claim.
- First authors are heavily concentrated in China (150, 31.6%) and the United States (93, 19.6%) — 51.2% combined — which the authors flag as a threat to generalizability across educational systems.

## Connected Concepts

- [[adaptive-learning]]
- [[agentic-ai]]
- [[human-in-the-loop-ai]]
- [[ai-education]]
- [[open-source]]
- [[student-experience]]
- [[meta-analysis-systematic-review]]
- [[equity-in-ai-education]]
- [[governance]]
- [[academic-integrity]]
- [[ai-literacy]]
- [[generative-ai]]
- [[higher-ed]]
- [[llm]]
- [[scaffolding]]
## Connected Articles

- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[finkelstein-principled-ai-education-2025]] — Principled AI in Education
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning

## Citation

Wang, N., Zou, D., Xie, H., & Qin, S. J. (2026). [*A scoping review of generative AI-powered agentic AI in education: Research landscape, agentic capabilities, and insights from the frontier agent paradigm, exemplified by OpenClaw*](https://doi.org/10.1016/j.caeai.2026.100653).
