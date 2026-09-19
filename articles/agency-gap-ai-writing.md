---
title: "The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning"
created: "2026-08-03T04:33:04-04:00"
updated: "2026-09-19T07:42:07-04:00"
type: article
foundations: [agentic-ai, ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, rag]
stakeholders: [student-experience]
ethics: [equity-in-ai-education]
research_method: [experiment]
discipline: [writing education, medical education]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/caeai-2026-agency-gap-ai-writing.md']
confidence: high
institutions: [regulation]
---

> **Synthesis:** A randomized experiment (n = 79 medical/nursing students) examining how the **initiative design** of an AI writing agent shapes reasoning, agency, and immediate independent performance. Students completed two [[multimodal]] analytical writing tasks (interpreting healthcare-[[simulation]] data visualizations: bar chart, network diagram, ward heatmap) with either a **reactive agent** (responds only when prompted, n = 39) or a **proactive agent** (initiates sequenced questions and feedback, n = 40). [[generative-ai|GenAI]] literacy was measured with the validated 20-item **GLAT**. The study introduces the **agency gap**: a relational mismatch between the initiative an AI agent demands and the learner's capacity to initiate, monitor, evaluate, and internalize AI-supported reasoning — neither an individual deficit nor a fixed property of the system.

## Key findings

### RQ1 — Epistemic network structure differs strongly by design
- ENA (explaining 38.3%/22.7% and 27.5%/26.4% of variance) separated conditions with **large effects** (Cliff's δ = −0.56, −0.78; both p < .001).
- **Proactive** dialogues: stronger links between conceptual reasoning, adequate reasoning, and constructive [[student-engagement|engagement]] (EP-CS–EP-CP-Adeq, EP-PS–EP-CP-Adeq, I-CON–EP-CP-Adeq) — more integrated epistemic elaboration.
- **Reactive** dialogues: more factual/procedural/off-task pairings (EP-PS–EP-OFF, EP-OFF–I-ACT) — the learner's own [[regulation]] is more visible but discourse stays descriptive.
- The difference is in *how ideas are connected*, not how often categories appear and not the final score.

### RQ2 — GenAI literacy predicts immediate independent performance
- After AI support was removed, GLAT predicted **Visual Data Integration** (OR 1.14, p = .039), **[[critical-thinking|Critical Thinking]]** (OR 1.15, p = .029), and the **Composite score** (OR 1.11, p = .032) — modest, higher-order effects; not significant for insightfulness, organization, or linguistic quality.
- AI-supported performance strongly predicted AI-removal performance on all dimensions (all p ≤ .001) — continuity, but cannot distinguish learning from stable competence.
- No significant condition effect and **no significant literacy-by-design interaction**.

### RQ3 — Mediation patterns are suggestive, not confirmatory
- Reactive condition: significant total literacy→performance association (β = 0.172, p = .020) with direct path remaining (β = 0.140); indirect effect non-significant (95% CI [−0.022, 0.108]).
- Proactive condition: total and direct coefficients near zero; indirect non-significant.
- Pattern is *consistent with* smaller literacy-related performance differences under proactive scaffolding, but does **not establish** compensation, mediation, or moderation — hypothesis-generating for future adequately powered tests.

### RQ4 — Three design heuristics from learner reflections
1. **Sustain autonomy** through contextual and confirmatory feedback (reactive strength: confirms interpretations, lowers barrier, but redundant for proficient learners).
2. **Promote integrative reasoning and immediate independent application** through dialogic scaffolding (proactive strength: connects evidence across visuals, prompts self-correction; risks over-scaffolding easy tasks).
3. **Ensure [[equity-in-ai-education|equity]] through adaptive alignment** of initiative with learner expertise and task complexity — a uniform interaction style may under-support some learners while over-directing others.

## Interpretation

- **Process ≠ outcome**: agent design produced large differences in the relational organization of dialogue but no significant direct effect on immediate writing scores — the mechanism is how epistemic work is distributed, not output quality.
- The agency gap frames the failure modes: **under-support** (low literacy × strongly reactive design) and **over-direction** (high capability × rigidly proactive design), echoing [[scaffolding]]'s expertise-reversal effect and adaptive-scaffolding accounts.
- Practice: make initiative **visible and adjustable** (request/skip/pause [[prompt-engineering|prompting]]), structure proactive prompts to orient–interpret–connect–synthesize rather than supply answers, and fade prompts as learners demonstrate independence; teach GenAI literacy as part of [[writing-education|academic writing]] ([[ai-literacy]], [[agentic-ai]]).
- Limitations: n = 79 underpowered for mediation; medical/nursing sample; immediate AI-removal task measures near transfer, not durable learning; agency gap theorized, not directly measured; no manipulation-check coding of agent turns.

## What this means for practice

- **Learners.** Choose and adjust how much initiative the agent takes rather than accepting its default: proactive prompts demand that you monitor, evaluate, and internalize sequenced questions, while the reactive agent's strength — confirming an interpretation and lowering the barrier to starting — was largely redundant for learners who were already proficient.
- **Learners.** Do not read strong AI-supported performance as evidence you have learned the move: AI-supported scores predicted post-support scores on every dimension (all p ≤ .001), which the authors note is continuity that cannot distinguish learning from stable competence.
- **Learners.** Invest in your own [[ai-literacy|GenAI literacy]]: the study found that generative AI literacy predicted independent writing performance once support was removed, and the authors argue that learners with stronger literacy are better positioned to evaluate and internalize useful reasoning strategies.
- **Designers.** Make initiative visible and adjustable — let learners request, skip, or pause [[prompt-engineering|prompting]] — structure proactive prompts to orient, interpret, connect, and synthesize rather than to supply answers, and fade them as learners demonstrate independence.
- **Designers.** Align initiative with learner expertise and task complexity to protect [[equity-in-ai-education|equity]]: a uniform interaction style risks under-supporting lower-literacy learners while over-directing the more capable, the two failure modes the agency gap names.

## Limitations

- The study is remote (Prolific recruitment, £8 for roughly one hour) with 79 analyzed participants after excluding 2 whose written responses contained fewer than 20 words; the condition-specific mediation analyses involved only 39 and 40 participants and the authors treat them as exploratory.
- The a priori power analysis (72 participants, f = 0.25, power 0.80, α = 0.05) covered only the primary two-condition comparison, so the authors explicitly warn it does not guarantee adequate power for secondary models — the literacy-by-design interaction was non-significant in an underpowered design.
- All participants were current students or recent graduates of medical or nursing programs, and literacy was measured with the 20-item multiple-choice GLAT, so both the sample and the literacy construct are domain-specific to healthcare education.
- The post-support task was administered immediately after the AI was removed, so it indexes near transfer rather than durable learning; the agency gap itself is theorized rather than directly measured, and no manipulation-check coding of agent turns is reported.

## Connected Concepts

- [[agentic-ai]]
- [[ai-literacy]]
- [[higher-ed]]
- [[scaffolding]]
- [[student-experience]]
- [[writing-education]]
- [[agency]]
- [[human-ai-collaboration]]
- [[critical-thinking]]
- [[equity-in-ai-education]]

- [[generative-ai]]- [[network-analysis]]

## Connected Articles

- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[chatgpt-feedback-engagement-genai]] — Students' engagement with ChatGPT feedback: implications for student feedback literacy in the context of generative a...
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[feedback-futures-genai]] — Feedback futures: beyond the limits of human and GenAI capacities
- [[learner-centered-feedback-ai]] — Enhancing learner-centered feedback with AI: teachers' practices and perceptions

## Citation

Jin, Y., Yang, K., Martinez-Maldonado, R., Gašević, D., & Yan, L. (2026). [*The agency gap in AI-supported writing: How reactive and proactive agent designs shape multimodal reasoning*](https://doi.org/10.1016/j.caeai.2026.100655). *Computers and Education: Artificial Intelligence*. Advance online publication
