---
title: "Why we believe chatbots: trust calibration as a design problem"
created: "2026-09-16T12:25:00-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
tags: [trust-calibration, trust, ai-literacy, conversational-ai, generative-ai, explainable-ai, hallucination-risk, llm]
connected_faqs: [verify-ai-output]
audience: [researchers, designers, instructors, policymakers]
research_method: [theoretical analysis]
sources: ['raw/papers/10.3389_fpsyg.2026.1935527.md']
confidence: high
---

> **Synthesis:** This Hypothesis and Theory article reframes miscalibrated [[trust-calibration|trust]] in [[llm]] [[conversational-ai|chatbots]] as a design problem, arguing that transparency alone fails because its affordances are inert and wait for the user to act. The authors build a two-dimensional user typology — ability to verify and motivation to verify — and synthesize two families of intervention: [[explainable-ai|interpretability]] affordances that make evaluation possible and engagement mechanisms that make it happen, integrated through Reason's Swiss cheese model into eight testable propositions, with [[ai-literacy]] positioned as the slowest but most durable layer of defense.

## Key Findings

- **Fluency, not accuracy, earns trust.** Users evaluate chatbot outputs through surface cues such as fluency, confidence, and responsiveness rather than verifiable sourcing, so confidence and correctness are systematically decoupled (Lee & See, 2004; Jakesch et al., 2023).

- **Trust and reliance have drifted apart at scale.** Across large global samples spanning dozens of countries, heavy daily use of AI far outpaces expressed willingness to trust it, and unreliability ranks among the most-cited concerns about the technology (Gillespie et al., 2025; Huang et al., 2026).

- **Transparency features go unused.** In a passive tracking study of US adults, users who encountered an AI-generated summary clicked a cited source within it on only about 1% of visits, and clicked any result link far less often than users who saw no summary (Chapekis, 2025).

- **Machine authorship can inflate credibility.** Readers rated scientific summaries as more credible and more trustworthy when written by GPT than by humans, chiefly because the model wrote in simpler language (Markowitz, 2024).

- **[[trust-calibration|Miscalibration]] runs both directions and within the same user.** Overtrust (misuse) and distrust (disuse) coexist; users who valued AI for emotional support were roughly three times more likely to also report concerns about emotional dependency (Huang et al., 2026), and educators report witnessing far more cognitive atrophy than cognitive growth among AI users.

- **Effort alone cannot close a design-created gap.** High-stakes domains trigger triangulation (medical evaluators found errors in fluent GPT-4 answers; legal experts detected coherence gaps non-experts overlooked), while low-stakes, low-involvement contexts default to peripheral fluency cues.

- **The framework yields eight testable propositions** linking each intervention family and mechanism to the user profiles it serves — from interpretability affordances (best for high-motivation users) to engagement gates, cooling-off periods, dialogue scaffolds, social verification signals, and adaptive friction (best for low-motivation or low-ability users).

## Study Design & Method

This is a Hypothesis and Theory (conceptual) contribution, not an empirical study. The authors ground a working definition of chatbot trust — "a user's willingness to accept and act on its outputs without independent verification" — in four bodies of research: psychological trust research (Mayer et al., 1995; Rousseau et al., 1998), source credibility in communication research (Hovland & Weiss, 1951), human-factors trust in automation (Lee & See, 2004; Hoff & Bashir, 2015), and computing research on trust in intelligent systems (Jacovi et al., 2021). They then develop a user typology crossing two dimensions — ability to verify chatbot outputs and motivation to do so — yielding four profiles with distinct calibration risks (high-high near calibrated; high-ability/low-motivation prone to complacent overtrust; low-ability/high-motivation prone to misplaced confidence or frustration-based disuse; low-low most exposed to overtrust). On this basis they synthesize two families of intervention: five interpretability affordances (source transparency, rationale generation, uncertainty expression, interactive scrutiny, progressive disclosure) and six engagement mechanisms (cooling-off periods, engagement gates, dialogue scaffolds, adaptive friction, social verification signals, commitment prompts). The two families are integrated through Reason's (1990) Swiss cheese model of layered defense and formalized in eight quantitative propositions using a calibration gap measure C (mean confidence minus proportion correct).

## Implications

- **Design for [[trust-calibration|calibration]], not for maximum trust.** The goal is trust that matches what a system can actually do; interpretability should be a structuring principle of chatbot design rather than a feature bolted on afterward.

- **Move from transparency-as-disclosure to transparency-as-practice.** Engagement mechanisms (friction, gates, scaffolds) outperform passive warnings because dialogic engagement drives durable cognitive change whereas information alone does not.

- **Segment interventions to user profiles.** Citation helps motivated users, social signals help low-ability users, and cooling-off periods help the expert who lacks the moment rather than the novice who lacks knowledge.

- **Layer defenses.** No single intervention recalibrates trust; combinations across layers cover one another's gaps, with literacy building the most durable but slowest layer.

- **Deployment requires institutional scaffolding.** Adaptive friction carries privacy obligations of its own, so behavioral data used for dosing should stay within-session; [[regulation]] (e.g., the EU AI Act) and institutional procurement can mandate calibration-supporting features.

## Limitations

- **Conceptual, not empirical.** The framework is a normative synthesis; its eight propositions are untested predictions and require validation across both confidence and behavioral measures.

- **Operationalization gaps.** The calibration gap C records confidence (an index) rather than the reliance-based willingness the authors define, and a mean-level score can mask a user who is confident in wrong answers and doubtful of correct ones; discrimination measures and calibration curves are needed to complement it.

- **The typology is deliberately simple** with soft boundaries between profiles; the same person may occupy different cells across tasks or within a session, complicating profile assignment.

- **Mechanism evidence is mixed** — some mechanisms (message-based norm nudges) showed no significant effect in a direct tournament, so social verification signals in particular must earn their keep empirically.

## Connected Concepts

- [[trust-calibration]] — the core construct; miscalibration is reframed as the design target.
- [[trust]] — the willingness-based attitude that underlies reliance on a system's outputs.
- [[ai-literacy]] — positioned as the durable third layer of defense that moves users across profiles.
- [[explainable-ai]] — interpretability affordances (rationales, citations, uncertainty) operationalize XAI for public-facing chatbots.
- [[hallucination-risk]] — fabricated but convincingly formatted citations inflate perceived credibility and miscalibrate trust.
- [[conversational-ai]] — the sustained, personalized, bidirectional setting that makes engagement mechanisms possible.

## Connected Articles

- [[calibrating-trustworthiness-llm-education-2026]] — calibrating trustworthiness judgments toward LLMs in education taps the same calibration frame.
- [[trust-in-ai-psychological-profiles-ml-2026]] — individual psychological profiles predict AI trust, complementing the ability/motivation typology.
- [[trust-reliance-ai-education-2026]] — distinguishes trust from reliance in educational AI use, the same distinction the paper stresses.
- [[xai-teachers-trust-edtech-recommendations-2026]] — explainable AI shapes teachers' trust in edtech recommendations.
- [[chatgpt-inoculation-training-verification-2026]] — inoculation/verification training operationalizes literacy-based recalibration.
- [[cognitive-offloading-llm-synthesis-writing]] — overtrust and reduced verification in AI-assisted writing reflects the reliance-without-checking pattern.

## Citation

Jaidka, K., & Cai, M. (2026). [Why we believe chatbots: trust calibration as a design problem](https://doi.org/10.3389/fpsyg.2026.1935527). *Frontiers in Psychology, 17*, 1935527.