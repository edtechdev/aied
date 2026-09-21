---
title: "VeriForge: Mitigating Latent Knowledge Gaps in Narrative Drafting via Mixed-Initiative Scaffolding"
created: "2026-08-11T13:10:53-04:00"
updated: "2026-09-19T10:43:18-04:00"
type: article
foundations: [cognitive-offloading]
pedagogy: [creativity, scaffolding]
technology: [generative-ai, human-in-the-loop-ai, knowledge-graph, llm, rag]
research_method: [system development, interviews]
discipline: [writing education]
sources: ['raw/papers/veriforge-narrative-drafting-scaffolding-2026.md']
confidence: high
audience: [instructional designers, software developers]
---

> **Synthesis:** Sun et al. (2026) present VeriForge, a mixed-initiative [[generative-ai]] writing system that assumes initiative over domain discovery while the author retains initiative over narrative synthesis, using proactive highlighting, dual-stream querying with source-anchored Knowledge Cards, and a spatial Knowledge Canvas to surface latent knowledge gaps without homogenizing voice.

## Key Findings

1. **The core problem is latent knowledge gaps.** Current AI writing tools require explicit queries authors cannot formulate, generate finished prose that risks homogenizing voice, or assist only within what authors already know. VeriForge targets the discovery and integration of unfamiliar domain knowledge.
2. **Mixed-initiative division of labor.** Grounded in interviews with 9 fiction writers, VeriForge divides cognitive labor: the system takes initiative over domain discovery while the author keeps full initiative over narrative synthesis, preserving writer agency.
3. **Three complementary mechanisms.** Proactive inline highlighting flags potential knowledge gaps as authors draft; dual-stream querying pairs conversational responses with source-anchored Knowledge Cards for direct fact extraction; a spatial Knowledge Canvas lets authors organize and connect discovered knowledge, all powered by a graph-based [[rag]] pipeline.
4. **Promising preliminary evidence.** A within-subjects user study (N=12) showed the paradigm helps authors recognize previously overlooked knowledge gaps, supports creative exploration, and produced passages rated by experts as having stronger domain grounding in a cold-start task.

## What this means for practice

- **Designers.** Keep the author in charge of narrative synthesis while the system takes initiative only over domain discovery; only 1 of 12 participants detected a deliberately mismatched source card, so a provenance label can act as a seal of authority rather than an invitation to verify.
- Calibrate provenance friction to the stakes of the task: lightweight cues may suffice for creative writing, while legal or clinical retrieval needs interactive mechanisms that invite active inspection.
- Surface knowledge gaps proactively as authors draft, since the gaps most threatening to verisimilitude are ones writers cannot formulate as queries.
- Anchor returned knowledge to sources by pairing conversational responses with source-anchored Knowledge Cards, and note that the system does not determine whether a retrieved term is used correctly.
- **Researchers.** Extend evaluation beyond 30-minute sessions and a single genre, since the study captured only the cold-start phase of domain discovery.

## Limitations

- Small AI-experienced sample of 12 participants (8 creative writing hobbyists and 4 online novelists, mean age 21.92 and mean 3.18 years of writing experience), recruited from local and online writing communities.
- 30-minute writing sessions fixed to a single genre (historical martial scenes), which isolated the cold-start discovery phase rather than sustained use.
- Expert ratings came from a within-subjects comparison against a strengthened baseline (MS Word plus ChatGPT plus Miro) in which the measured gap was dominated by retrieval quality rather than interaction design.
- The deception test used a mismatched source label rather than a false domain claim, and participants were hobbyists and online novelists most prone to latent gaps, so professional novelists with internalized expertise may benefit less.

## Connected Concepts

- [[cognitive-offloading]]
- [[ai-feedback-quality]]
- [[creativity]]
- [[generative-ai]]
- [[hallucination-risk]]
- [[human-in-the-loop-ai]]
- [[knowledge-graph]]
- [[rag]]
- [[scaffolding]]
- [[writing-education]]
- [[sociocultural-learning]]

## Connected Articles

- [[mindcopilot-llm-co-writing]] — MindCopilot co-writing
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — Creative writing with robots
- [[foxglove-writing-feedback-experts-llms]] — Foxglove writing feedback
- [[cognitive-offloading-llm-synthesis-writing]] — Cognitive offloading in writing
- [[self-referential-l2-writing-llm-assessment]] — L2 writing LLM assessment

## Citation

Sun, R., Li, J., Tao, W., Zheng, X., Tan, Y., Wei, J., & Ma, Y. (2026). [*VeriForge: Mitigating Latent Knowledge Gaps in Narrative Drafting via Mixed-Initiative Scaffolding*](https://arxiv.org/abs/2608.09698). (cs.HC); UIST 2026.
