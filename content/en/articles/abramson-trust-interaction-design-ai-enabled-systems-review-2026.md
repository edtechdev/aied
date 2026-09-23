---
title: "Trust and interaction design in AI-enabled systems: a systematic literature review"
created: "2026-09-23T12:50:00-04:00"
updated: "2026-09-23T13:40:00-04:00"
type: article
foundations: [human-ai-collaboration, limitations-in-aied-research]
technology: [conversational-ai, generative-ai, technology-acceptance-model]
assessment: [self-report-measures]
methods: [meta-analysis-systematic-review]
ethics: [trust, trust-calibration, explainable-ai]
research_method: [literature review]
page_kind: [synthesis]
level: [higher ed]
audience: [researchers, instructional designers]
sources: ['raw/papers/abramson-trust-interaction-design-ai-enabled-systems-review-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]

---

> **Synthesis:** Abramson, Sora-Cardenas, Nandakumar, Bruce, Gopinath, Zangari, and Feijóo-García (2026) systematically review how user [[trust]] in AI-enabled systems is defined, measured, and shaped by interaction design. Screening 1,565 articles published between January 2023 and June 2025 across IEEE Xplore, ACM Digital Library, Scopus, and Web of Science, they included 33 empirical studies. The corpus is institutionally and disciplinarily diverse but conceptually fragmented: 21 studies (63.64%) reported a trust definition drawn from nine different sources, and 24 (72.73%) measured trust through self-report alone. Inductive coding produced nine design factors, led by explainability (20 studies) and anthropomorphism (5), and these map onto Crampton Smith's semantics, visual, physical embodiment, and time dimensions. The authors argue for targeting [[trust-calibration|calibrated trust]] rather than higher trust, and for real rather than simulated systems, longer-term designs, and more diverse participants. Fragmentation, rather than an absence of findings, is their main diagnosis, and shared constructs and measurements would let the field build cumulative design guidance for trustworthy AI, including AI tutors.

## Key Findings

- **No shared definition of trust.** Of 33 studies, 21 (63.64%) reported a definition, drawn from nine distinct sources, most often Lee and See with six citations and Mayer et al. with four.
- **Trust is mostly measured by self-report.** Self-report alone accounted for 24 studies (72.73%); seven combined methods, and only two relied on behavioral measures alone.
- **Explainability dominates the design literature.** Twenty studies manipulated explainability, followed by anthropomorphism (5), confidence (3), and interface and errors (2 each); four other factors had one study each.
- **Explanations do not reliably build trust.** Heatmaps aided comprehension in complex visual tasks, but multiple simultaneous explanations raised cognitive load, slowed performance, and sometimes left trust unchanged.
- **Populations are narrow and mostly adult.** Sample sizes ranged from 10 to 1,511 (mean 245.73); 28 studies (84.84%) reported participants aged 18 or older and four (12.12%) reported only non-Western participants.
- **Simulations outweigh deployed systems.** Simulation-based AI appeared in 13 studies and conversational AI in 10, so much trust evidence comes from prototypes rather than systems in sustained real use.

## How the Review Was Built

This is a non-registered PRISMA [[meta-analysis-systematic-review|systematic review]]. The search ran in June 2025 across four databases, limited to English publications from January 2023 through June 2025, with terms piloted alongside an independent librarian. Screening ran in two stages, with ambiguous abstracts escalated to the full team and full texts re-reviewed by the first two authors. Studies had to be peer-reviewed, involve human participants, and empirically test at least one interaction design factor through direct interaction or simulation. Disciplines came from Web of Science research areas, with 82.35% coder agreement, and the nine design factors emerged inductively from four researchers.

## Defining and Measuring Trust

The review defines trust as a user's willingness to be vulnerable to a system expected to perform its function, treating it as dynamic rather than static. Convergence is partial at best. The two most borrowed definitions come from automation research and organizational psychology, not from AI research itself, and measurement is similarly fragmented. Self-report alone covered 24 studies (72.73%), close to the 69.56% that Bach et al. found in work published between 2011 and 2021, suggesting little methodological change across the generative AI transition. Seven studies combined self-report with behavioral, physiological, or qualitative data; the most cited instrument was Hoffman et al.'s [[explainable-ai|explainable AI]] trust scale.

## Nine Design Factors

The factors cut across Crampton Smith's semantics, visual, physical embodiment, and time dimensions, with several spanning more than one. Explainability was by far the most studied (20 papers, average sample size 285). Effects were mixed: heatmaps helped users follow reasoning in complex visual tasks, yet layering explanation types raised cognitive load and slowed users. Anthropomorphism produced no clear causal effect on trust in controlled settings, though one long-term study linked perceived anthropomorphism to integrity-based trust. Interface studies favored text-based [[conversational-ai|conversational interfaces]] over speech and embodied formats, but both papers shared authors and an institution. Error studies disagreed about timing, yet agreed that trust recovers when performance improves afterward.

## Design guidance for learning systems

The review recommends designing for [[trust-calibration|calibrated trust]] rather than maximum trust: explanations should help users separate reliable outputs from unreliable ones, and confidence cues should be compared on equal terms. That target matters in education, where a persuasive tutor is not the same as a trustworthy one. Simulation-based systems dominated (13 studies versus 10 for conversational AI), so conclusions rest on prototypes that miss the variability of deployed [[generative-ai|generative AI]] tutors. Participants skewed toward adults, university-educated samples, and Western countries, a pattern the authors tie to WEIRD sampling and ethical caution about research with minors.

## What this means for practice

- **Design for calibrated trust, not maximum trust.** The review's central recommendation is to aim at appropriate reliance, so a design decision should be judged by whether it helps users separate reliable outputs from unreliable ones rather than by whether it raises raw [[trust]].
- **Do not assume that explanations build trust.** [[explainable-ai]] was the most studied factor (20 studies), yet effects were mixed: heatmaps aided comprehension in complex visual tasks, while stacking several explanation types at once raised cognitive load, slowed users down, and in some cases left trust unchanged.
- **Treat expressed confidence as a calibration lever.** Misalignment between a system's stated confidence and its actual accuracy tended to produce over-reliance or degraded trust, while well-calibrated expressions of uncertainty supported more appropriate reliance decisions.
- **Plan for error recovery, not error avoidance alone.** The two error studies disagreed about whether early or late errors were more damaging, but both agreed that trust can recover when performance improves afterward, and that stakes matter: trust collapses abruptly in high-stakes settings while low-stakes users are more forgiving.
- **Match modality to context instead of assuming more human-like is better.** Interface studies favored text-based [[conversational-ai|conversational interfaces]] over speech and embodied formats, but both papers shared authors and one institution, and anthropomorphism produced no clear causal effect on trust in controlled settings.

## Limitations

- **Trust is mostly measured by self-report.** 24 of the 33 studies (72.73%) relied on [[self-report-measures]] alone and only two used behavioral measures alone, so the evidence is strongest about what users say about [[trust]] and weakest about what they actually do.
- **Simulations outweigh deployed systems.** Simulation-based AI appeared in 13 studies against 10 for [[conversational-ai]], so much of the evidence comes from prototypes rather than systems in sustained real use, which limits transfer to deployed [[generative-ai]] tools.
- **Populations are narrow.** 28 studies (84.84%) reported participants aged 18 or older and only four (12.12%) reported solely non-Western participants, with university-educated samples and English-language requirements reinforcing the WEIRD skew the authors describe, which limits generalization to other learners and regions.
- **Definitions and instruments vary across studies.** 21 studies (63.64%) reported a definition drawn from nine different sources and measurement instruments were similarly fragmented, so findings are hard to compare and the review reports recurring patterns rather than cumulative, replicated effects.

## Connected Concepts

- [[trust]] and [[trust-calibration]] — the core construct and recommended design target
- [[explainable-ai]] — the dominant design factor, with mixed effects
- [[generative-ai]] and [[conversational-ai]] — the systems most studied
- [[self-report-measures]] — the dominant trust measurement strategy
- [[human-ai-collaboration]] and [[limitations-in-aied-research]] — framing and fragmentation

## Connected Articles

- [[xai-teachers-trust-edtech-recommendations-2026]] — Explainable AI, teacher trust, and acceptance of AI edtech recommendations
- [[trust-calibration-chatbots-design-problem-2026]] — Trust calibration as a design problem in chatbot interactions
- [[task-context-trust-educational-hri-2026]] — Task context rather than appearance shapes trust in educational HRI

## Citation

Abramson, S. L., Sora-Cardenas, J., Nandakumar, P., Bruce, J. E., Gopinath, N., Zangari, L. G., & Feijóo-García, P. G. (2026). [*Trust and interaction design in AI-enabled systems: a systematic literature review*](https://doi.org/10.3389/fpsyg.2026.1932655).