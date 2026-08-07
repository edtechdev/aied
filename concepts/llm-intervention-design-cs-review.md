---
title: "A review of intervention designs of LLM Integration in Undergraduate Computer Science Education"
created: 2026-07-31
updated: 2026-07-31
type: concept
tags: [cs-education, generative-ai, llm, scaffolding, instructional-design, efficacy-study, prompt-engineering, higher-ed, computational-thinking]
sources: ["raw/papers/llm-intervention-design-cs-review.md"]
confidence: high
---

# A review of intervention designs of LLM Integration in Undergraduate Computer Science Education

**Author:** Anusha Vissapragada (Hult International Business School)
**Source:** [EdArXiv preprint](https://osf.io/preprints/edarxiv/knhyz_v1) (2026)

## Key Findings

This scoping review analyzed **13 experimental studies** on LLM integration in undergraduate [[cs-education]], examining how intervention design choices shape learning outcomes. The central finding: **LLM effectiveness depends less on the model itself than on pedagogical design**.

### Three Intervention Archetypes

| Type | Studies | Results |
|------|---------|---------|
| **Task and Coding Assistant** | 8 | Mixed — Java code quality improved (p < 0.005), but broader academic performance showed no significant difference |
| **Virtual Tutor or Peer** | 3 | **All three** showed significant improvements — semester-long integrations with scaffolded feedback consistently improved [[computational-thinking]] and performance |
| **Exam and Quiz Help** | 2 | Mixed depending on implementation |

### The "Tool Frustration" Paradox

A striking finding: students using [[generative-ai]] tools **without adequate [[scaffolding]] and prompt literacy training** reported significantly higher frustration than controls (p = 0.008, median frustration 14 vs. 9), even when performance was equivalent. This mirrors concerns in the [[over-reliance]] and [[critical-engagement-code-completion]] literature — LLM access without pedagogical support can actively harm the learning experience.

### Design Patterns That Work

The review identifies four design elements that distinguish effective interventions:

1. **Sustained [[scaffolding]]**: Guided explanations, problem decomposition, and gradual reduction of support as competence grows — consistent with Vygotskian principles also discussed in [[instructional-design]].
2. **Transparent interaction patterns**: Students need to understand *how* the LLM is reasoning, not just receive answers.
3. **Explicit meta-skill instruction**: [[prompt-engineering]] literacy must be taught — students cannot intuit effective prompting strategies.
4. **Assessment redesign**: Emphasize code evaluation and prompt crafting over code generation, as also recommended in [[reshaping-cs-education-genai]].

### Language and Methodological Gaps

Java interventions showed more consistent gains; Python — despite dominance in CS1 — lacks sufficient experimental isolation. The review also documents critical methodological weaknesses: inconsistent outcome operationalization, variable control group definitions, and chronic **underreporting of effect sizes and confidence intervals** — a concern that connects to broader [[efficacy-study]] design standards.

## Relevance to AI in Education

This review is valuable because it shifts the conversation from "do LLMs work?" to "**what design choices make LLMs effective?**" The evidence strongly supports [[scaffolding]]-based approaches over simple tool access, reinforcing findings across the [[genai-meta-analysis-programming-learning]] literature. The "tool frustration" paradox is an important contribution — it suggests that poorly designed [[generative-ai]] integration can be worse than no integration at all.

For [[higher-ed]] contexts, the review provides actionable guidance: semester-long Virtual Tutor designs with structured feedback outperform short-term coding-assistant interventions. This aligns with [[code-review-genai-cs1]] work on structured feedback and the broader [[computing-education]] push toward [[computational-thinking]] over syntax mastery.

## Citation

**APA:** School), A.A.V.I.B., implementation, A.Q.H.S.M.R.D.O., & generators, P.L.A.L.C.R.T.S. (2026). *A review of intervention designs of LLM Integration in Undergraduate Computer Science Education*

## Related Pages

- [[cs-education]]
- [[computing-education]]
- [[generative-ai]]
- [[llm-in-education]]
- [[scaffolding]]
- [[instructional-design]]
- [[computational-thinking]]
- [[efficacy-study]]
- [[prompt-engineering]]
- [[higher-ed]]
- [[critical-engagement-code-completion]]
- [[code-review-genai-cs1]]
- [[reshaping-cs-education-genai]]
- [[over-reliance]]
- [[genai-meta-analysis-programming-learning]]
