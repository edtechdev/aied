---
title: "Do Not Copy/Paste: Soft Barriers for Copying in AI-Assisted Programming"
created: "2026-08-25T09:52:34-04:00"
updated: "2026-08-25T09:52:34-04:00"
type: article
tags: [cs-education, academic-integrity, generative-ai, llm, cognitive-offloading, ai-literacy, instructional-design]
discipline: [cs education]
category: [instructional design]
sources: ['raw/papers/soft-barriers-copying-ai-programming-2026.md']
confidence: high
---

> **Synthesis:** Olatunji et al. (2026) reframe copy-paste in [[generative-ai|AI]]-assisted programming as an "AI code handoff" problem: the instant model-generated text crosses from a conversational chat window into an editor or committed software is a design boundary that current tools leave unmanaged. They propose **soft barriers** — mechanisms that preserve access to AI assistance while making unexamined transfer less frictionless — and instantiate the idea with Unicode output perturbations that keep text visually readable yet disrupt naive copy-paste execution. Across HumanEval and MBPP with four LLMs, they define and measure **Copy-Paste Resistance (CPR)**, finding output-level barriers can achieve high resistance but that effectiveness is highly model- and task-dependent, and an 18-participant pilot suggests soft barriers shift users from direct transfer toward editing and reconstruction.

## Key Findings
1. Copy-paste is a core, largely unmanaged "handoff" moment in AI-assisted programming, particularly salient in [[cs-education|programming education]], code review, and security-sensitive development.
2. The authors introduce **Copy-Paste Resistance (CPR)**, the fraction of functionally correct clean solutions that become syntactically invalid after perturbation.
3. Unicode perturbation barriers can achieve high CPR, but their effectiveness varies substantially by model and task — no universal barrier works.
4. An exploratory 18-participant pilot found early evidence that soft barriers shift behavior from direct copy-paste toward editing and reconstruction, without blocking AI use outright.
5. The paper positions Unicode perturbations as a "minimal probe," not a deployment-ready solution, opening a research agenda on practical, transparent, and policy-aware AI code handoff.

## Discussion
The paper's conceptual contribution is to broaden how we evaluate AI coding assistants: not only by the code they generate but by how they mediate the transfer of that code into artifacts. This shifts the [[academic-integrity|integrity]] conversation in programming education away from blunt detection-and-punish toward design interventions that shape the [[cognitive-offloading|cognitive offloading]] boundary. Soft barriers preserve the legitimate use of AI assistance while creating a friction point that forces learners to engage with the code they are adopting — a form of [[scaffolding|scaffolded]] [[student-engagement|engagement]] rather than blanket restriction. The work connects directly to debates about when [[ai-literacy|AI literacy]] should mean fluent delegation versus deliberate understanding, and offers an empirically grounded alternative to copy-paste [[ai-detection|detection]].

## Connected Concepts
- [[cs-education]]
- [[academic-integrity]]
- [[generative-ai]]
- [[llm]]
- [[cognitive-offloading]]
- [[ai-literacy]]
- [[ai-detection]]
- [[scaffolding]]
- [[instructional-design]]
- [[cs-education|programming education]]

## Connected Articles
- [[reshaping-cs-education-genai]] — Reshaping CS Education for Generative AI
- [[genai-oop-programming-assessments-2026]] — GenAI on OOP Assessments
- [[learn-framework-responsible-genai-pbl-2026]] — LEARN Framework for Responsible GenAI

## Citation

Olatunji, I. E., Djire, A. E., Klein, J., & Bissyandé, T. F. (2026). [*Do Not Copy/Paste: Soft Barriers for Copying in AI-Assisted Programming*](https://arxiv.org/abs/2608.22638).
