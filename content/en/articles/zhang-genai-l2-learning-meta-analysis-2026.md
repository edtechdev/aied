---
title: "When Does GenAI Work for L2 Learning? A Three-Level Meta-Analysis"
created: "2026-11-12T15:45:00-05:00"
updated: "2026-11-12T15:45:00-05:00"
type: article
sources: ['raw/papers/zhang-genai-l2-learning-meta-analysis-2026.md']
source_url: "https://doi.org/10.1002/rev3.70252"
source_depth: full text
confidence: high
evidence_context: educational
research_method: [literature review]
page_kind: [synthesis]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, researchers, educational technology developers]
discipline: [language learning]
foundations: [ai-literacy]
pedagogy: [scaffolding, sociocultural-learning]
assessment: [feedback, assessment-validity]
technology: [generative-ai, conversational-ai]
ethics: [ai-use-disclosure]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Zhang, Aubrey, Wu and Chiu synthesize 67 effect sizes from 48 controlled studies (N = 5196) published between 2023 and 2026 to ask not *whether* [[generative-ai|GenAI]] helps [[language-learning|second language learning]] but *when*. The unadjusted pooled effect is large (g = 0.76, 95% CI [0.50, 1.02]); after removing three extreme outliers it falls to g = 0.57 and stays significant. The variation is systematic. Effects are largest where GenAI provides [[feedback|feedback]] and assessment (g = 1.15), moderate where it acts as an interaction partner (g = 0.81), and small where it is an instructional integrator (g = 0.28) — and configurations that keep the learner in charge outperform autonomous AI-led ones. Their conclusion is that GenAI's effectiveness is a property of instructional design, not of the technology.

## What the synthesis did that earlier ones did not

The authors' complaint about the existing evidence base is specific: prior meta-analyses pooled generative systems with rule-based chatbots and treated GenAI as a uniform intervention. This one restricts inclusion to GenAI's text-generation and conversational capabilities and codes each study along three dimensions — the language skill targeted, the functional role GenAI played, and the mode of human–AI interaction, with teacher role as a further moderator.

The corpus is 48 controlled studies yielding 67 dependent effect sizes, analyzed with a three-level model that accounts for nesting of effect sizes within studies. Methodological quality was appraised with RoB 2.0 for the 25 randomized trials and an equivalent tool for the quasi-experiments. Heterogeneity is high (I² = 92.64%), which is the paper's central caution: a pooled average across this literature describes a distribution, not a typical classroom.

## The overall effect, and what the outliers did

The headline number is g = 0.76, a large effect by conventional standards. Three effect sizes exceeded the standardized-residual threshold — a g = 5.70 and a g = 4.56 from the same study, and a g = 5.16 from another — and removing them reduced the pooled estimate to g = 0.57. The authors read this as evidence that the conclusion is robust but somewhat inflated by extreme values, and publication bias was detected, with funnel-plot asymmetry attenuated after those removals.

That sequence matters for how the page should be read. The honest summary is a moderate effect of roughly half a standard deviation, not the large one the abstract leads with, and the authors say so themselves.

## Where the effect lives

Skill domain moderated the effect significantly (Q(4) = 14.52, p = 0.006). Speaking showed the largest full-sample effect at g = 1.48 across 12 studies (16 effect sizes), but it fell to g = 0.65 after outlier adjustment — the largest single casualty of the sensitivity analysis. Vocabulary (g = 0.66, 4 studies, 8 effect sizes) and writing (g = 0.61, 29 studies, 36 effect sizes) stayed moderate. Reading showed no significant effect (g = 0.076, 5 studies).

The authors call the reading result a paradox and offer an explanation rather than a dismissal: GenAI may support comprehension indirectly, through vocabulary scaffolding or metacognitive support, rather than producing measurable reading gains on its own. They flag it as a question for process data rather than for more pooled averages.

## Design, not technology

Three design dimensions did the explanatory work.

**Functional role** (Q(3) = 11.66, p = 0.009): GenAI as feedback and assessment provider produced g = 1.15 across 20 studies, as interaction partner g = 0.81 across 13, and as instructional integrator only g = 0.28 across 11. After outlier removal the feedback role remained the strongest configuration at g = 0.83.

**Interaction mode** (Q(4) = 10.37, p = 0.016): assistive configurations, where the learner directs the tool, produced g = 0.92 across 26 studies; co-creation g = 0.82 across 12; instrumental g = 0.58 across 3; autonomous, AI-led configurations only g = 0.34 across 7.

**Teacher role** did not moderate outcomes in the primary analysis (p = 0.536 for instructional role, p = 0.115 for feedback role). After outlier removal it became significant (Q(2) = 6.09, p = 0.048), with teachers acting as observers associated with larger effects (g = 0.99) than teachers as lead instructors or absent. The authors treat that as a hypothesis for local testing rather than a prescription, which is the right call given it appeared only after the sensitivity analysis.

Study design also moderated the estimate: randomized trials showed larger effects (g = 1.02, 25 studies) than quasi-experiments (g = 0.48, 23 studies) — the opposite of the usual suspicion that weaker designs inflate effects, and a reminder that pooled estimates across design types are unstable.

## Key Findings

1. GenAI produced a large unadjusted effect on L2 outcomes (g = 0.76, 95% CI [0.50, 1.02]) across 48 studies with N = 5196, which fell to a moderate g = 0.57 after three extreme outliers were removed.
2. Effects are skill-specific: speaking benefits most on the full sample (g = 1.48) but drops to g = 0.65 after outlier adjustment, while vocabulary (g = 0.66) and writing (g = 0.61) hold and reading is non-significant (g = 0.076).
3. GenAI works best as a feedback and assessment provider (g = 1.15), less well as an interaction partner (g = 0.81), and least as an instructional integrator (g = 0.28).
4. Learner-directed configurations outperform AI-led ones: assistive mode g = 0.92 against autonomous mode g = 0.34, with co-creation at g = 0.82.
5. Randomized trials reported larger effects (g = 1.02) than quasi-experiments (g = 0.48), so design type moderates the pooled estimate in an unexpected direction.
6. Teacher role did not moderate effects in the primary analysis; after outlier removal, teachers as observers were associated with larger effects (g = 0.99), which the authors present as a hypothesis rather than a finding.
7. The reading null is explained as indirect support — vocabulary or metacognitive scaffolding — rather than direct comprehension gain, and is named as the question process data should answer.

## What this means for practice

- **Use GenAI for formative feedback, not content delivery.** The feedback-and-assessment configuration is the strongest in the corpus; a draft–AI diagnostic–revision–teacher review pipeline is the worked example the authors give for writing.
- **Keep the learner as decision-maker.** Ask students to draft first, request targeted feedback rather than generated content, revise, and explain which suggestions they accepted or rejected and why.
- **Deploy speaking practice as low-stakes conversation.** The speaking effect is real but fragile after outlier adjustment, and its rationale rests on interaction and reduced anxiety rather than on measurable long-term proficiency.
- **Do not expect reading comprehension gains.** Treat reading support as indirect and design for vocabulary or metacognitive scaffolds rather than assuming comprehension will follow.
- **Treat teacher observation as a design option to test locally.** The observer advantage appeared only after sensitivity analysis, so it is not yet a rule.

## Limitations

- Heterogeneity remained very high (I² = 92.64%) even under multilevel modeling, so moderator categories are coarse and unmeasured instructional features likely explain further variance.
- Publication bias was detected. Sensitivity analyses supported the overall conclusion, but the authors call for large-scale preregistered trials to stabilize the estimate.
- Coding of interaction configurations depended on how studies reported procedure, and boundary cases — teacher-operated systems without direct student interaction, unstructured self-directed use — required judgment calls.
- Treatment and control conditions were not always comparable beyond the GenAI component, so residual confounding cannot be excluded.
- The evidence is largely short-term, higher-education and East Asian, which limits generalization to K–12, lower-proficiency learners, other linguistic settings and longer timeframes.
- Effects are measured on outcomes, not mechanisms: the meta-analysis cannot say whether gains reflect interaction, feedback uptake, motivation or novelty, and the authors call for interaction logs and revision histories to find out.

## Citation

Zhang, Z., Aubrey, S., Wu, X., & Chiu, T. K. F. (2026). When does GenAI work for L2 learning? A three-level meta-analysis. *Review of Education, 2026*(3), 20496613. https://doi.org/10.1002/rev3.70252
