---
title: "A helping hand or a dominant partner? Individual perceptions of GenAI reliance and human agency in collaborative learning"
created: "2026-09-27T08:18:00-04:00"
updated: "2026-09-27T08:18:00-04:00"
type: article
sources: ['raw/papers/genai-reliance-human-agency-collaborative-learning-2026.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [longitudinal study]
discipline: [learning sciences]
level: [higher ed, undergraduate]
audience: [instructors, researchers, learning analytics designers]
foundations: [agency, cognitive-offloading, human-ai-collaboration]
pedagogy: [collaborative-learning, metacognition, student-engagement]
technology: [generative-ai, llm]
methods: [quantitative-research]
ethics: [trust]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-27"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Wu and Lu examine whether students' self-reported reliance on [[generative-ai|generative AI]] predicts a subsequent loss of perceived [[agency|human agency]] in AI-supported [[collaborative-learning|collaborative learning]], using three waves of data from 342 undergraduates working in 85 fixed groups in an AI-supported [[writing-education|collaborative writing]] course. They estimated both a traditional cross-lagged panel model and a random intercept cross-lagged panel model to separate observed-level associations from within-person temporal relations after accounting for stable between-person differences. In the RI-CLPM, higher-than-usual reliance was associated with lower subsequent agency, whereas agency-to-reliance paths were weaker and not statistically supported. Equality-constraint tests were consistent with directional asymmetry, though confidence intervals and Monte Carlo sensitivity analyses showed that small reverse effects remain possible. Backend logs confirmed that self-reported reliance corresponded to AI-use intensity, but log indicators could not distinguish strategic consultation from [[cognitive-offloading]] or deference.

## Key Findings

1. **Reliance predicts declining agency, not the reverse.** In the random-intercept model, higher-than-usual reliance predicted lower subsequent perceived human agency, while agency-to-reliance paths were weaker and not statistically supported.
2. **Directional asymmetry, but with residual uncertainty.** Equality-constraint tests were consistent with reliance having the stronger longitudinal path, while 95% confidence intervals and Monte Carlo sensitivity analyses showed small reverse effects remain possible.
3. **Reliance tracks AI-use intensity.** Backend logs showed self-reported reliance corresponded to how intensely students used AI, but the logs could not distinguish strategic consultation from cognitive offloading or deference.
4. **A three-wave panel design.** Three-wave data came from 342 undergraduates in 85 fixed groups in a collaborative writing course, analyzed with both CLPM and RI-CLPM.
5. **The practical lever is visibility.** The authors conclude that AI-supported collaborative tasks should keep students' responsibility for interpretation, judgment, and authorship visible throughout the learning process.

## Reliance, agency, and the look within person

The study responds to a recurring concern in AI-supported learning: that system-generated suggestions may reduce opportunities for judgment, negotiation, and ownership. Traditional cross-lagged panel models, however, conflate stable between-person differences with within-person temporal associations, so the authors estimated a random intercept cross-lagged panel model that separates the two. The RI-CLPM result — higher-than-usual reliance predicting lower subsequent agency — provides stronger evidence for the reliance-to-agency direction than for the reverse, while acknowledging that small reverse effects cannot be ruled out.

The design situates the question in authentic practice: an AI-supported collaborative writing course in which students worked together and used GenAI for [[feedback]], explanation, and drafting support. The use of 85 fixed groups and three waves allowed within-person temporal relations to be examined after between-person differences were accounted for, a distinction that matters because students who chronically rely on AI differ from students whose reliance changes wave to wave.

## Using logs without equating activity with over-reliance

A distinctive finding concerns how AI-use intensity is interpreted. Backend logs confirmed that students' self-reported reliance corresponded to how intensely they used AI. Yet the authors caution that high log-based AI-use intensity is not the same as over-reliance, because log indicators cannot distinguish strategic consultation from cognitive offloading or deference. The implication for [[learning-analytics|learning analytics]] is direct: dashboards should not equate high AI-use intensity with over-reliance unless log data are interpreted alongside discourse, reflection, revision, or decision-making evidence. This matters for how the field measures dependence, since the same behavior can signal thoughtful use or outsourcing depending on the context.

## What this means for practice

- **Instructors.** Ask groups to form an initial position before invoking AI and to explain why AI suggestions are accepted, revised, or rejected, so responsibility for interpretation and authorship stays visible.
- **Instructors.** Design GenAI tools to support agency by offering criticism and [[prompt-engineering|prompting]] reflection while leaving decisions about task direction to students, rather than delivering ready answers.
- **Learning analytics designers.** Do not equate high AI-use intensity with over-reliance; interpret log data alongside evidence of discourse, reflection, and revision before flagging dependence.
- **Researchers.** Use random-intercept cross-lagged designs when studying reliance and agency, because traditional CLPMs conflate stable between-person differences with within-person change.

## Limitations

- The outcome is [[self-report-measures|perceived]] human agency, not observed agency or measured learning outcomes.
- Log-based AI-use data could corroborate reliance intensity but could not distinguish strategic consultation from cognitive offloading or deference.
- The study is a single collaborative writing course at one institution, so generalization to other tasks and contexts is limited.
- Small reverse effects (agency-to-reliance) remain possible, as the confidence intervals and Monte Carlo sensitivity analyses show.

## Citation

Wu, Y., & Lu, X. (2026). [A helping hand or a dominant partner? Individual perceptions of GenAI reliance and human agency in collaborative learning](https://doi.org/10.1111/bjet.70090). *British Journal of Educational Technology*. Advance online publication.
