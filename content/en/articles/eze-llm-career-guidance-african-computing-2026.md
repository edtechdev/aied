---
title: "Evaluating Large Language Models for career guidance: a comparative analysis of computing competency recommendations across ten African countries"
created: "2026-11-15T08:45:00-05:00"
updated: "2026-11-15T08:45:00-05:00"
type: article
pedagogy: [career-development-and-readiness]
technology: [llm, generative-ai]
ethics: [global-south, equity-in-ai-education, bias-mitigation, ethics]
methods: [qualitative-research]
sources: ['raw/papers/eze-llm-career-guidance-african-computing-2026.md']
source_url: "https://doi.org/10.1016/j.caeo.2026.100425"
source_depth: full text
confidence: high
evidence_context: educational
research_method: [thematic analysis]
discipline: [cs education, engineering education]
level: [higher ed]
audience: [instructors, administrators, researchers, policymakers]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-15"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Eze, Lunn and Berhane (2026) asked what six [[llm|large language models]] tell computing students in ten African countries about entry-level careers, and how much of that advice fits local conditions. Sixty standardized prompts were answered by [[generative-ai|ChatGPT]]-4, DeepSeek, Gemini, Claude 3.5, Llama 3, and Mistral AI, and the responses were coded against the Computing Curricula 2020 framework through the lenses of digital colonialism and Ubuntu philosophy. Technical competencies such as cloud computing and programming appeared consistently, but non-technical competencies — especially [[ethics|ethics]] and responsible AI use — varied sharply, and models recognized country-specific ecosystems, language requirements, and national policies only 35.4% of the time on average. [[open-source]] models led on contextual awareness (Llama 4.47/5, DeepSeek 4.25/5) ahead of ChatGPT-4 (3.90/5) and Claude (3.46/5), while Mistral scored 0.00/4.

## Key Findings
1. **Contextual awareness averaged 35.4%.** Across the ten countries, models recognized local technology ecosystems, language requirements, and national policies barely a third of the time.
2. **Open-source models led on context, but not uniformly.** Llama scored 4.47/5 and DeepSeek 4.25/5 against ChatGPT-4's 3.90/5 and Claude's 3.46/5, yet Mistral scored 0.00/4.
3. **Technical advice converged; professional advice did not.** Cloud computing and programming appeared consistently, while ethics and responsible AI use varied substantially between models.
4. **Development philosophy did not predict responsiveness.** Mistral's near-zero contextual score despite being open-source shows that openness alone does not produce locally grounded guidance.
5. **The study is the first multi-country comparison of its kind.** Sixty responses across six models and ten countries had not previously been compared for computing career guidance.

## What the prompts asked and what the models assumed

The study's most transferable finding is not the ranking but the failure mode. Asked what an entry-level computing job requires, the models produced a recognizable, Western-shaped stack: cloud platforms, programming languages, standard tooling. What they rarely produced was anything that depended on knowing the country — which languages employers actually use, which national digital strategies create demand, which local technology ecosystems exist at all. That is [[bias-mitigation|bias]] in a specific and actionable form: not derogatory content, but an unmarked default that treats one labor market's infrastructure as universal. For a student in a country whose employers run on different systems, advice that ignores this is not merely incomplete; it points at skills the local market does not hire for.

## Digital colonialism as an analytic frame

The authors read the pattern through digital colonialism, the argument that exported technical standards carry the assumptions of their origin and subordinate local arrangements. The Ubuntu lens supplies the counterweight: a relational account of personhood in which guidance is embedded in community and context rather than delivered to an autonomous individual optimizer. Using both frames lets the paper move past "the models are biased" to a claim about what kind of advice career guidance should be. The finding that [[global-south|Global South]] contexts are systematically under-served by generic [[prompt-engineering|prompting]] is the empirical half; the normative half is that [[career-development-and-readiness|career guidance]] in these settings needs a hybrid model with a human who knows the local market.

## The case for hybrid guidance

The practical recommendation follows from the scores rather than from principle. If contextual awareness averages 35.4%, then roughly two-thirds of the country-specific detail a student needs must come from somewhere else — a counselor, an institutional page, a local employer. The paper argues for hybrid human-AI guidance rather than abandoning the tools, because the technical half of the advice was consistent and usable. That is a narrower and more defensible position than either uncritical adoption or rejection, and it maps onto the [[equity-in-ai-education|equity]] argument that the same tool can widen or narrow gaps depending on who verifies its output. Institutions can act on this cheaply by publishing local requirements in a form students can paste into a prompt.

## What this means for practice
- **Instructors.** Treat model output as a starting point that needs local verification; roughly two-thirds of the contextual detail a student needs was missing on average.
- **Institutions.** Publish local labor-market, language, and policy requirements in a form students can paste into a prompt, rather than assuming the model already knows them.
- **Policymakers.** Fund the human side of guidance rather than only the tool side, since the models supplied the technical competencies reliably and the context unreliably.

## Limitations
- Sixty responses from six models is a small corpus, and each country was probed with a limited set of standardized prompts.
- Coding against Computing Curricula 2020 and the two theoretical lenses required coder judgment, and each country's score rests on a handful of responses.
- Model versions were current at data collection (ChatGPT-4, Claude 3.5, Llama 3), so the scores describe a specific generation and will not transfer to later releases.
- The study assesses what models say, not what students do with the advice or how it affects their career outcomes.

## Citation

Eze, P., Lunn, S., & Berhane, B. (2026). [*Evaluating large language models for career guidance: A comparative analysis of computing competency recommendations across ten African countries*](https://doi.org/10.1016/j.caeo.2026.100425). *Computers and Education Open*, 100425.
