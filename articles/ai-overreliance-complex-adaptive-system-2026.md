---
title: "Modeling AI Overreliance as a Complex Adaptive System"
created: "2026-08-24T09:10:00-04:00"
updated: "2026-08-24T09:10:00-04:00"
type: article
tags: [cognitive-offloading, trust-calibration, human-ai-collaboration, agentic-ai, llm, ai-education]
research_method: [system development]
sources: ['raw/papers/ai-overreliance-complex-adaptive-system-2026.md']
confidence: high
---

> **Synthesis:** Biswas (2026) reframes AI reliance — whether people trust an [[llm|AI assistant]] when it is right and check it when it is wrong — as a **population process** rather than an individual, one-shot judgment. An agent-based model of `N` agents who repeatedly solve a task alone, accept the AI's answer unverified, or verify it, each updating a Bayesian (Dirichlet) belief about AI quality and, when networked, learning from peers, yields four linked results: the environment (task difficulty and AI quality) sets the baseline of [[cognitive-offloading|overreliance]] and calibration regret; social learning creates **consensus, not aggregate overreliance** (a mean-preservation theorem); visible social proof turns reliance into a **[[feedback]] cascade** that collapses verification; and feedback design can prevent that collapse. The paper frames AI reliance as a problem of computational social dynamics, where individual learning, peer observation, and feedback exposure jointly shape whether a population remains calibrated.

The paper opens from the recurring human–AI interaction finding that model accuracy alone does not determine outcomes — calibrated reliance does, with the two failures of overreliance (accepting wrong output) and underreliance (discarding useful AI after it errs). Because users learn trust over time and observe one another, reliance becomes a coupled dynamical system in which each person's behavior is both an outcome of and an input to everyone else's. Such systems can settle into very different macro-states — broad calibration, collective [[cognitive-offloading|overreliance]], or shared skepticism — from nearly identical micro-rules, and can exhibit consensus, path-dependence, and abrupt tipping invisible at the individual level. This is why [[trust-calibration|calibrated trust]] is treated as a system-level, computational social-dynamics question rather than an individual experimental one.

## The Model: Reliance as a Population Process

The model is deliberately minimal, containing only the mechanisms needed to study how reliance evolves. A population of heterogeneous agents faces tasks over discrete steps, choosing among three actions that map to real user options: solve alone (S), accept the AI's answer without checking (A), or use the AI but verify it (V). Each action is driven by the [[agentic-ai|agent]]'s current belief about AI reliability, and each observed outcome updates that belief in a single `belief → action → outcome → updated belief` loop. Three modeling choices anchor it.

First, the three actions separate using AI from checking it, making verification an explicit, costly behavior whose rise and fall is the central dependent variable — collective overreliance is operationally the population abandoning V for A. Second, trust is learned, and the key asymmetry — that one learns the truth about the AI only by verifying, while unverified use yields a noisier, optimism-biased signal — is built into how beliefs update rather than imposed as a fixed bias, so that algorithm aversion and appreciation emerge rather than being assumed. Third, in the networked version agents also learn from peers, and peers' visible behavior feeds back into action utilities, which is what makes the system capable of cascading. Choice follows a multinomial logit over utilities, and the networked variant distinguishes **experience-based learning** (observing exchangeable neighbor outcome signals) from **opinion dynamics** (updating toward neighbors' trust beliefs), so that influential hubs can transmit beliefs directly.

## Key Findings

**Result 1 — The environment sets the baseline.** Overreliance climbs with task difficulty (≈ 0.02 → 0.38), and at hard tasks AI quality moves it from 0.38 (poor AI) to 0.16 (good AI); a Morris sensitivity analysis confirms difficulty and AI quality dominate. Informatively, regret and raw overreliance diverge: high-quality AI on hard tasks has the highest regret (0.441) but not the highest overreliance, because agents over-defer and rarely [[trust|self-rely]], while low-quality AI on hard tasks has the highest overreliance but moderate regret, because the solo alternative is also poor. Regret, not raw overreliance, captures the cost of reliance error.

**Result 2 — Social learning creates consensus, not aggregate overreliance.** In a 2×2 topology×tagging design (random vs. hub-heavy networks × source tagging on/off), with the social-proof channel off all cells give overreliance 0.30–0.31 within confidence intervals; with feedback on they all rise together to ≈ 0.51. Social learning sharply compresses trust dispersion while leaving the aggregate unchanged. Topology matters only when influence transmits correlated beliefs: under experience-based learning even extreme high-trust hubs leave the aggregate at baseline, whereas under opinion dynamics, influential hubs steer the consensus — high-trust hubs raise it, careful hubs lower final overreliance to 0.272.

**Result 3 — Social proof turns reliance into a feedback cascade.** Engaging the verification-suppression feedback tips the population from verifying to collapsed verification: as social proof `s` rises 0 → 0.6, verification falls 0.29 → 0.002 (below the 0.01 "collapse" threshold) and overreliance rises 0.30 → 0.52. Forward and backward sweeps coincide at every `s`, showing a smooth crossover with no hysteresis in the agent-based model — the mean-field fold (a saddle-node) is the strong-coupling analogue. Overreliance here is endogenous, produced by learning dynamics rather than a worse model or worse users.

**Result 4 — Feedback design can prevent verification collapse.** Against a harmful baseline (visible unverified use), making verification visible (`sV = 1.0`) triggers a beneficial counter-cascade that moves the population to near-complete verification (overreliance 0.00, regret down to 0.07). Dampening social proof gives partial recovery (overreliance 0.39), while merely reducing verification friction is the weakest lever (it does not lower regret), because cheaper checking does not counter the social pull toward unverified use. Interventions that change what users see others doing are more effective than ones that only lower the private cost of checking.

## Theoretical Results

The theoretical analysis provides an oracle [[benchmark]] and two proofs that structure the computational results. An **oracle** with correct expectations and infinite decisiveness selects the optimal action and attains zero expected regret up to ties, and behavioral over-/under-reliance are ex-post diagnostic proxies that need not vanish under perfect calibration — even an optimal ex-ante action can yield an unfavorable realized outcome, so regret is the primary normative metric.

A **mean-preservation theorem** (Prop. 2) shows that under a DeGroot trust update with a doubly-stochastic weight matrix, the population mean trust is invariant and the cross-sectional variance is non-increasing; more generally, if peer signals are exchangeable and influence weights are independent of realized signal values, the expected mean is invariant for any weighting, including hub-dominated. The null is scoped: it holds when peer signals are exchangeable and influence is uncorrelated with systematic differences in trust, ability, or skill — when influence transmits beliefs (opinion dynamics), topology becomes a mechanism of amplification.

A **cascade tipping result** (Prop. 3), building on Brock–Durlauf discrete choice with social interactions, shows that real fold points exist only when coupling `θs > 4`, and hysteresis requires the care advantage `c` to fall in a specific fold interval; outside it there is a unique stable equilibrium. In the agent-based model, heterogeneity and endogenous variation keep the system off the fold interval and smooth the transition, so collective overreliance is expected to build gradually as social proof strengthens rather than switching on at a sharp threshold.

## Implications

The results point to a single simple mechanism: deployment context sets the baseline, peer learning aligns beliefs, and visible unverified use can erode verification unless the feedback channel is redesigned. Three implications follow. **Deployment context dominates**, and regret (not raw overreliance) measures its cost. **Connectivity alone is not enough** to explain collective overreliance — under exchangeable signals social learning homogenizes trust without moving its aggregate, so structure bites through the opinion channel and stake/exposure heterogeneity rather than through raw connectivity. And **overreliance is a feedback phenomenon** whose levers are the cost and salience of verification and the structure of exposure: interfaces that keep verification cheap and visible, or dampen social proof for unverified use, prevent collapse.

The paper's [[educational-policy-ai|policy]] implications are qualitative and conditional rather than quantitative forecasts — the model identifies which classes of intervention can work and why, and doubles as testable hypotheses for dynamic, social-reliance experiments. This connects directly to [[ai-education|AI education]] and [[human-ai-collaboration|human-AI collaboration]] design: it suggests that fostering [[metacognition|metacognitive]] verification habits and [[critical-thinking|critical evaluation]] of outputs may matter more than merely reducing friction, and that visible verification norms can counter the [[cognitive-offloading|offloading]] pull of unverified reliance. It also speaks to [[reducing-ai-misuse|reducing AI misuse]] and [[ai-misuse-learning-harm|learning-related harms]], since collective [[trust-calibration|miscalibration]] arises from feedback and peer exposure rather than from worse models or worse users. Limitations include exogenous, stationary AI quality, a fixed network, and stylized verification; future work would estimate key quantities — per-task verification rates, social-proof strength, and how trust updates after verified versus unverified use — from longitudinal traces of AI-assisted work.

## Connected Concepts

- [[cognitive-offloading]]
- [[trust-calibration]]
- [[human-ai-collaboration]]
- [[agentic-ai]]
- [[llm]]
- [[reducing-ai-misuse]]
- [[ai-misuse-learning-harm]]
- [[trust]]
- [[metacognition]]
- [[critical-thinking]]

## Connected Articles

- [[efficiency-gain-illusion-ai-overreliance]] — The efficiency-gain illusion: People underestimate the rate of AI use and overestimate its benefits on simple tasks
- [[ai-advice-suppresses-ikt-suspension-2026]] — AI Advice Suppresses People's Willingness to Say They Don't Know
- [[contextual-sycophancy-ai-literacy]] — The Hidden Cost of Contextual Sycophancy: An AI Literacy Intervention in Human-AI Collaboration
- [[critical-genai-use-predictors]] — GenAI Knowledge, Epistemic Orientation, and Intellectual Values Predict Undergraduate Students' Critical GenAI Use
- [[gerlich-ai-tools-cognitive-offloading-critical-thinking]] — AI Tools in Society: Impacts on Cognitive Offloading and the Future of Critical Thinking
- [[metacognitively-discordant-completion-genai-2026]] — Metacognitively Discordant Completion and the Aware Pass-Through of Non-Understanding in Generative AI Learning

## Citation

Biswas, A. (2026). [*Modeling AI Overreliance as a Complex Adaptive System*](https://arxiv.org/abs/2608.19616).
