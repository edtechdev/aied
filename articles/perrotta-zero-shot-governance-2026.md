---
title: "Zero-Shot Governance: General-Purpose AI in Policy"
created: "2026-09-09T19:18:07-04:00"
updated: "2026-09-09T19:18:07-04:00"
type: article
tags: [governance, educational-policy-ai, generative-ai, llm, agency]
research_method: [theoretical analysis, case study]
discipline: [learning sciences]
audience: [policymakers, researchers, administrators]
level: [higher ed]
sources: ['raw/papers/perrotta-zero-shot-governance-2026.md']
confidence: high
---

> **Perrotta (2026)** advances the concept of **zero-shot governance** — the scenario in which domain-agnostic [[generative-ai|generative AI]] foundation models intervene in policy decisions — through a critical infrastructural analysis of **Redbox**, a discontinued UK civil-service prototype built on off-the-shelf [[llm|LLMs]]. Reading Redbox's codebase through intersecting technical, political, and cultural lenses, the article argues that the general-purpose nature of LLMs is a structural feature of the technology that can be *mitigated but never ruled out* — a conclusion with direct implications for [[educational-policy-ai|education policy]] and [[governance|AI governance]].

## Key Findings

- **The "world model" principle underlies zero-shot governance.** Building on Amoore et al.'s "zero-shot politics," the article argues that the general-purpose potential of foundation models — their ability to produce a usable response to almost any prompt, with few or no examples — extends the anticipatory-governance paradigm toward a probabilistic "world of experimentation, generalisation, and the capacity to act in all unencountered situations." This casts [[agentic-ai|autonomous agents]] as potential policy "actors" that reason beyond immediate data.
- **Redbox is a proof of concept for LLMs in the professional toolkit of policy.** An infrastructural analysis of Redbox's codebase (its `poetry.lock` and `redbox.py`) reveals it is essentially an invisible system prompt plus a thin Python wrapper on a pre-existing platform stack: AWS compute (Elastic module), a [[rag]] pipeline (retrieve → format → generate) that transforms the user's prompt against a predefined governance framework, and a provider-agnostic commitment to OpenAI, Google, and Anthropic.
- **Agentic AI does not interrupt the platform political economy.** Redbox's reliance on a few LLM providers and cloud infrastructure confirms that agentic AI continues the monopolistic, rentier logic of platforms — proprietary assets hired out, with many tool variations sharing the same general-purpose foundations. The shift from generic Redbox to tailored agents (e.g., DBT Assist) was "agile yet impressionistic," driven more by a "vibe" than by principled design.
- **The general-purpose nature of LLMs is structural and cannot be ruled out.** Probabilistic generality is policed through internal system prompts and prior "sources of truth," but recent [[research-methods-aied|research]] shows general-purpose models increasingly evade [[guardrails]] toward "misaligned" objectives, requiring nested containment/sandboxing architectures. Hallucination and the ability to generate novelty share the same structural principle — so aberrant behavior is never zero-risk.
- **Implications for oversight: humans are "peering over the loop," not in it.** Zero-shot governance risks encouraging a "gambler's delusion" and epistemological amateurism — trusting a superhuman "attention" mechanism to discover latent patterns across heterogeneous datasets, while probabilistic outputs remain grounded in [[prior-knowledge|prior knowledge]] and bias. The article calls for clearer articulation of the possibilities and dangers of agentic AI for education governance and the polity.

## Synthesis

The article's distinctive contribution is to give a concrete, code-level account of how general-purpose AI becomes a governance actor: not through any novel capability, but through an agile wrapping of off-the-shelf LLMs in a thin [[discipline-specific-aied|domain-specific]] [[scaffolding|scaffold]] (a system prompt + RAG). Zero-shot governance is therefore best understood not as a distinct technology but as a *structural condition* of platformisation — the general-purpose orientation of foundation models is what makes rapid, "zero-shot" repurposing into policy tools possible at all, and it is this same orientation that makes aberrant, hallucinated output a permanent, only-mitigable risk. For education, the article cautions against treating the world-model rhetoric as a reliable epistemic foundation for [[agency|policy reasoning]], and insists that oversight of such tools must assume the probabilistic brittleness is irreducible.

## Connected Concepts

- [[governance]]
- [[educational-policy-ai]]
- [[generative-ai]]
- [[llm]]
- [[agency]]
- [[ai-literacy]]

## Connected Articles

- [[baroudi-anticipatory-governance-ai-higher-ed-2026]] — Anticipatory governance and leadership for AI in higher education
- [[agentic-literacy-debt]] — Agentic literacy debt: the structural AI-literacy gap from autonomous agents
- [[ai-uk-higher-education-policy-2026]] — AI in UK higher-education policy
- [[cognitive-commons-ai-expertise-regeneration]] — The tragedy of the cognitive commons: AI and expertise regeneration

## Citation

Perrotta, C. (2026). [Zero-shot governance](https://doi.org/10.1080/02680939.2026.2730191). *Journal of Education Policy*. Advance online publication.
