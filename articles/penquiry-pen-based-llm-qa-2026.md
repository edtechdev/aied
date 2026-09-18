---
title: "Penquiry: A Pen-based Interactive In-situ Q&A System Leveraging LLMs"
created: "2026-09-18T09:15:00-04:00"
updated: "2026-09-18T09:15:00-04:00"
type: article
technology: [llm, multimodal, conversational-ai]
pedagogy: [self-directed-learning, help-seeking, active-learning, student-ai-interaction]
stakeholders: [learners]
methods: [usability-research]
research_method: [user study, system development]
audience: [learners, designers, edtech designers]
level: [higher ed]
sources: ['raw/papers/penquiry-pen-based-llm-qa-2026.md']
confidence: high
---

> **Synthesis:** Rhee et al. (2026) start from a mismatch: pen-based digital study is fluid and spatial, while [[llm|LLM]] [[prompt-engineering|prompting]] is discrete and keyboard-bound. **Penquiry** closes the gap with an in-situ question-answering system that lets [[learners]] ask questions directly on digital study materials with a pen. The authors name the two obstacles — a *Referential Barrier* (grounding fine-grained visual elements into the query context) and an *Expressive Barrier* (translating equations and diagrams into typed sentences) — and answer them with Content Snapping and Question Autocompletion. Two iterative studies of 16 participants each found the system significantly reduced the cognitive and physical overhead of inquiry.

## Key Findings

1. **Two barriers explain why pen users avoid AI help.** The Referential Barrier blocks unambiguous pointing at a diagram region or equation term; the Expressive Barrier forces translation of non-textual intent into rigid prose.
2. **Content Snapping resolves reference** by attaching ink marks to specific document elements, so a question carries an unambiguous target.
3. **Question Autocompletion expands sparse ink keywords into rich semantic queries**, lowering the effort of formulating a good prompt.
4. **Overhead fell measurably** in two iterative user studies (N = 16 each) compared with conventional interfaces.
5. **The design preserves the study material as the locus of interaction**, rather than moving the learner into a chat window — the interaction stays *in situ*.

## Why interaction design is the binding constraint for AI study help

Access to a capable model is no longer the scarce resource in [[self-directed-learning]]; the scarce resource is the learner's willingness to interrupt their work to formulate a question. The friction is behavioural as much as technical: every keystroke and every rephrasing is a cost paid at exactly the moment [[help-seeking]] is most fragile. Penquiry's contribution is to treat that cost as the design problem, which is why its results speak to [[student-ai-interaction]] and to the broader [[student-experience]] literature rather than only to input-modality engineering.

## Tensions the paper leaves open

Lowering the cost of asking makes asking easier — including for questions a learner could answer themselves, the classic [[cognitive-offloading]] risk. The authors' proposed direction of *temporally adaptive* autocompletion, moving from foundational fact-checking early in a session toward higher-level prompts later, is explicitly an attempt to turn scaffolding into [[scaffolding|fading support]] rather than a permanent crutch. That remains a design hypothesis rather than a tested outcome, and it is the point where this work intersects the wiki's ongoing questions about when AI help helps.

## Connected Concepts

- [[llm]]
- [[help-seeking]]
- [[self-directed-learning]]
- [[student-ai-interaction]]
- [[multimodal]]
- [[conversational-ai]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[usability-research]]
- [[student-experience]]
- [[active-learning]]

## Connected Articles

- [[ai-advice-suppresses-ikt-suspension-2026]] — AI advice and the suspension of prior knowledge
- [[ai-dependence-academic-writing-ipace-2026]] — AI dependence in academic writing
- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]] — Adaptive AI scaffolds for collaborative problem solving
- [[ai-tutor-authoring-promptdecipher]] — Authoring AI tutors from prompts

## Citation

Rhee, J., Lee, C., Kim, H., Choe, K., Kim, B., Ko, S., & Seo, J. (2026). [Penquiry: A Pen-based Interactive In-situ Q&A System Leveraging LLMs](https://arxiv.org/abs/2609.19870). arXiv:2609.19870.
