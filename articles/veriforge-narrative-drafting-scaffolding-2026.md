---
title: "VeriForge: Mitigating Latent Knowledge Gaps in Narrative Drafting via Mixed-Initiative Scaffolding"
created: "2026-08-11T13:10:53-04:00"
updated: "2026-08-11"
type: article
tags: [writing-education, scaffolding, generative-ai, rag, human-in-the-loop, creativity, knowledge-graph, cognitive-offloading, llm]
sources: ['raw/papers/veriforge-narrative-drafting-scaffolding-2026.md']
confidence: high
---

> **Synthesis:** Sun et al. (2026) present VeriForge, a mixed-initiative [[generative-ai]] writing system that assumes initiative over domain discovery while the author retains initiative over narrative synthesis, using proactive highlighting, dual-stream querying with source-anchored Knowledge Cards, and a spatial Knowledge Canvas to surface latent knowledge gaps without homogenizing voice.

## Key Findings

1. **The core problem is latent knowledge gaps.** Current AI writing tools require explicit queries authors cannot formulate, generate finished prose that risks homogenizing voice, or assist only within what authors already know. VeriForge targets the discovery and integration of unfamiliar domain knowledge.

2. **Mixed-initiative division of labor.** Grounded in interviews with 9 fiction writers, VeriForge divides cognitive labor: the system takes initiative over domain discovery while the author keeps full initiative over narrative synthesis, preserving writer agency.

3. **Three complementary mechanisms.** Proactive inline highlighting flags potential knowledge gaps as authors draft; dual-stream querying pairs conversational responses with source-anchored Knowledge Cards for direct fact extraction; a spatial Knowledge Canvas lets authors organize and connect discovered knowledge, all powered by a graph-based [[rag]] pipeline.

4. **Promising preliminary evidence.** A within-subjects user study (N=12) showed the paradigm helps authors recognize previously overlooked knowledge gaps, supports creative exploration, and produced passages rated by experts as having stronger domain grounding in a cold-start task.

## Implications

VeriForge addresses a central tension in [[writing-education]] with AI: how to leverage [[generative-ai]] for knowledge augmentation without ceding authorship and voice. The mixed-initiative design is a concrete instantiation of [[human-in-the-loop-ai]] collaboration, offering a counterpoint to [[cognitive-offloading]] concerns by making writers aware of what they do not know rather than silently filling gaps.

For [[creativity]] research, the system's emphasis on preserving author agency over synthesis speaks directly to worries about [[cognitive-offloading|Over-Reliance]] and homogenized output. The knowledge-gap-revealing mechanism also connects to [[scaffolding]] theory and [[zone-of-proximal-development]], positioning the AI as a scaffold that surfaces and supports what the writer can learn rather than replacing it.

The graph-based [[rag]] pipeline with source-anchored evidence cards also models best practice in [[ai-feedback-quality]] and [[hallucination-risk]]: surfaced knowledge is traceable to sources, mitigating [[hallucination-risk]]. The study offers design guidance for [[llm]]-based writing tools across domains beyond fiction, including academic and expository writing.

## Connected Concepts

- [[cognitive-offloading]]
- [[ai-feedback-quality]]
- [[creativity]]
- [[generative-ai]]
- [[hallucination-risk]]
- [[human-in-the-loop-ai]]
- [[knowledge-graph]]
- [[cognitive-offloading]]
- [[rag]]
- [[scaffolding]]
- [[writing-education]]
- [[zone-of-proximal-development]]

## Connected Articles

- [[mindcopilot-llm-co-writing]] — MindCopilot co-writing
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — Creative writing with robots
- [[foxglove-writing-feedback-experts-llms]] — Foxglove writing feedback
- [[cognitive-offloading-llm-synthesis-writing]] — Cognitive offloading in writing
- [[self-referential-l2-writing-llm-assessment]] — L2 writing LLM assessment

## Citation

Sun, R., Li, J., Tao, W., Zheng, X., Tan, Y., Wei, J., & Ma, Y. (2026). [*VeriForge: Mitigating Latent Knowledge Gaps in Narrative Drafting via Mixed-Initiative Scaffolding*](https://arxiv.org/abs/2608.09698). arXiv:2608.09698 (cs.HC); UIST 2026.
