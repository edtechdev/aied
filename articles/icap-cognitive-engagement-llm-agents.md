---
title: "Measuring Cognitive Engagement in Collaborative Discourse with an Extended ICAP Framework: Comparing Human Annotation, In-Context Learning, and Reflective LLM Agents"
created: "2026-08-03T04:33:04-04:00"
updated: "2026-08-24T09:45:00-04:00"
type: article
tags: [llm, collaborative-learning, learning-analytics, student-ai-interaction, nlp-education, collaborative-ai-tutoring, metacognition, ai-tutoring]
sources: ['raw/papers/2607.28651.md']
confidence: high
---

> **Lan Anh Do, Hanling Jiang, Shuchin Aeron, Ayanna K. Thomas** — CogSci 2026 (accepted full paper).

## Synthesis

This study applies an extended 7-point [[icap-framework|ICAP]] framework (Interactive, Constructive, Active, Passive) to characterize variation in cognitive engagement during collaborative problem-solving, then compares how reliably trained human annotators versus LLM-based labeling approaches — in-context learning (ICL), zero-shot prompting, and self-reflective agents — can code that engagement. Human interrater reliability was robust across framework-refinement stages (QWK = 0.906–0.998), far exceeding ICL-based annotation (QWK = 0.541–0.655). Crucially, the refinements that improved human agreement (ΔQWK = 0.10) gave only modest gains to LLMs (ΔQWK < 0.04), and ICL offered no advantage over zero-shot prompting. A novel self-reflective LLM agent reached substantial agent–agent agreement (QWK = 0.841) and independently revised the coding framework, but human–machine agreement remained moderate throughout.

## Key Findings

1. **The 7-point extension improves measurement.** Introducing intermediate levels between the four ICAP modes substantially improved interrater reliability between LLMs (ΔQWK = 0.261, ΔRandolph's κ = 0.427, ΔKrippendorff's α = 0.352 vs. original four-mode ICAP), showing that finer-grained scales can support more consistent annotation of engagement.
2. **Humans remain far more reliable coders.** Human annotators reached very high agreement (overall QWK = 0.974; Krippendorff's α = 0.966), rising from 0.906 in Stage 1 to 0.998 by Stage 3 as the framework was refined. LLM-based human–machine agreement stayed moderate (QWK ≈ 0.59–0.66).
3. **Human-refined criteria do not transfer to LLMs.** The framework revisions that boosted human agreement (Δκ = 0.10) produced only small, inconsistent changes for ICL annotators (Δκ < 0.04), indicating that criteria optimized for human interpretation do not translate to models through prompt modifications alone.
4. **ICL does not beat zero-shot prompting.** Few-shot examples drawn from human consensus annotations added no consistency benefit over clear task instructions; in several conditions zero-shot slightly outperformed ICL.
5. **Self-reflective agents show promise for scalability.** An agent that labeled samples while reflecting on and revising the framework reached substantial agent–agent agreement (QWK = 0.841) and autonomously refined the mid-level categories, though it never added, merged, or deleted levels.
6. **Mid-level categories are the ambiguous zone.** Both humans and agents concentrated their disagreements and revisions on Levels 3–5 (24% of human disagreements were between Levels 4 and 5), suggesting that refining mid-scale boundaries is where future extended-ICAP work should focus.

## Background: engagement, ICAP, and LLM annotation

Productive [[collaborative-learning|collaboration]] depends on the quality of the dialogue in which learners generate, refine, and integrate ideas. The [[icap-framework|ICAP framework]] (Chi 2009; Chi & Wylie 2014) is the dominant theoretical lens for characterizing the cognitive engagement that makes such dialogue productive, ordering learner behavior from *passive* (attending without overt contribution) to *active* (participating without new understanding) to *constructive* (generating explanations, summaries, or questions) to *interactive* (sustained, reciprocal building on others' reasoning). Within a single mode, however, important variation exists — a brief "uh-huh" differs from silence, and a "why" question advances understanding more than a fact-check.

To capture these gradations while preserving ICAP's theoretical ordering, the authors coded engagement on a **7-point scale** anchored to the four modes, adding intermediate levels (e.g., Level 2 = minimal responses while listening; Level 4 = emerging constructive engagement such as higher-order questions; Level 6 = two-turn exchanges). This enables fine-grained, trial-level analysis of how engagement unfolds over time in collaborative problem-solving.

LLMs have increasingly been used as scalable tools for text-based labeling in psychological and educational research. In-context learning (ICL) lets a model perform an unseen task by conditioning on labeled examples in the prompt without retraining — sometimes approaching fine-tuning performance — but is sensitive to prompt design and lacks persistent mechanisms for iterative, multi-step annotation. LLM-based [[agentic-ai|agents]], by contrast, maintain state, reason iteratively, and can take actions, making them potentially better suited to complex annotation workflows. This study compares all three machine approaches against trained human annotation.

## Method

Cognitive engagement was measured during a logical-inference task in which three-person groups of [[higher-ed|undergraduates]] inferred hidden numerical assignments (letters A–J mapped to digits 0–9) through iterative trials of arithmetic expressions and guesses, with immediate [[feedback]]. The final dataset comprised **42 group conversations** (averaging ~11 minutes and six trials each).

**Human annotation.** Two trained annotators classified engagement on the 7-point scale at trial level across three refinement stages. Stage 1 (videos 1–10) involved the first author mediating criteria development (Criteria Version 1); Stage 2 (videos 11–31) had annotators work independently, meeting after every two videos; Stage 3 (videos 32–42) applied a more detailed Criteria Version 2 with explicit codebook justifications. Disagreements were resolved through consensus.

**LLM annotation.** GPT-4o and GPT-5.2 were evaluated under (a) ICL prompting with human consensus examples, (b) zero-shot prompting, and (c) a self-reflective agent that labeled each sample, reflected on ambiguities, and decided whether to modify, add, delete, hold, or merge scale levels — retaining short-term memory of recent samples and criteria versions. Reliability was assessed with quadratic weighted kappa, Krippendorff's α, and Randolph's κ.

## Results

**Human–human reliability** was very high and improved with refinement (Stage 1 QWK = 0.906 → Stage 3 QWK = 0.998; overall QWK = 0.974, α = 0.966). **Agent–agent reliability** was substantial but lower (QWK = 0.841 during refinement; 0.655–0.790 after applying separately-refined frameworks). **Human–machine reliability** was moderate (GPT-5.2 ICL QWK 0.593–0.655; GPT-4o QWK ≈ 0.585–0.631). **Machine–machine reliability** (QWK ≈ 0.85–0.89 under human criteria) exceeded human–machine but stayed below human–human agreement.

Two patterns stand out. First, applying the **same human-refined criteria** produced only small reliability changes for LLMs, in contrast to the large gains for humans — refinements tuned for human interpretation do not transfer to models. Second, **ICL did not improve consistency** over zero-shot prompting, suggesting that few-shot human examples add little signal beyond clear task instructions for complex, theory-based coding.

Both human annotators and agents concentrated revisions on the **mid-range levels (3–5)**, and both preserved the seven-level structure (agents only modified existing levels, never adding, merging, or deleting). Human disagreements were most frequent between Levels 4–5 (24%), 5–6 (17%), and 3–4 (16%), with bidirectional confusion in the mid-scale.

## Implications

The findings have direct relevance for [[learning-analytics]] pipelines that automate [[student-ai-interaction|student interaction]] coding. LLM annotation can scale engagement measurement, and self-reflective agents show genuine promise for autonomous framework refinement — but the persistent human–machine gap means automated coding cannot yet substitute for trained human judgment when fidelity matters. Designers should treat LLM-coded engagement as an approximation whose systematic shortfall must be accounted for, and should pair automation with [[human-in-the-loop-ai|human oversight]]. The failure of human-refined criteria and ICL examples to improve LLM agreement also cautions against assuming that human expertise transfers straightforwardly to machine coding. Finally, the concentration of ambiguity in mid-level categories points to where extended-ICAP frameworks and their LLM implementations should be sharpened.

## Limitations

Human coders had access to video (tone, timing, nonverbal cues) while LLMs were text-only, potentially undercutting the machines' sensitivity to [[multimodal]] aspects of engagement. Framework refinement also differed: humans refined across three staged phases with consensus discussion, whereas agents refined at every iteration in isolation — an asymmetry that may partly explain the human–machine gap. Future work should test fine-tuning on human-refined data and explore hybrid human–agent and fully multi-agent annotation systems.

## Connected Concepts

- [[agentic-ai]]
- [[collaborative-learning]]
- [[educational-nlp]]
- [[feedback]]
- [[higher-ed]]
- [[human-in-the-loop-ai]]
- [[icap-framework]]
- [[learning-analytics]]
- [[llm]]
- [[multimodal]]
- [[student-ai-interaction]]
- [[student-engagement]]

## Connected Articles

- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[llm-facilitation-timing-online-discussions]] — To Facilitate or not to Facilitate: Human and LLM Facilitator Tendencies in Online Discussions
- [[becerra-aicofe-feedback-2026]] — AI Peer Feedback Systems
- [[hingle-collaborative-ai-literacy-2025]] — Collaborative AI Literacy Framework
- [[spritz-ai-disciplinary-mediation-student-teams-2026]] — Exploring AI-Supported Disciplinary Mediation in Student Project Teams' Text-Based Communication
- [[prober-ai-inquiry-writing]] — Prober.ai: Gated Inquiry-Based Feedback via LLM-Constrained Personas for Argumentative Writing

## Citation

Do, L. A., Jiang, H., Aeron, S., & Thomas, A. K. (2026). [Measuring cognitive engagement in collaborative discourse with an extended ICAP framework](https://arxiv.org/abs/2607.28651). *CogSci 2026*. arXiv:2607.28651.
