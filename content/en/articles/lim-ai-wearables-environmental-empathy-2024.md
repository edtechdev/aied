---
title: "Exploring the Potential of AI in Nurturing Learner Empathy, Pro-Social Values and Environmental Stewardship"
created: "2026-11-10T20:50:00-05:00"
updated: "2026-11-10T20:50:00-05:00"
type: article
pedagogy: [experiential-learning, inquiry-based-learning]
technology: [generative-ai, sensor-and-gaze-analytics, learning-analytics]
ethics: [sustainability]
sources: ['raw/papers/lim-ai-wearables-environmental-empathy-2024.md']
source_url: "https://arxiv.org/abs/2408.15906"
source_depth: full text
confidence: low
evidence_context: educational
research_method: [experiment]
methods: [quantitative-research]
discipline: [environmental education]
level: [secondary]
audience: [instructors, curriculum designers, researchers]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Lim, Nguyen Duc and Nguyen Thien (2024) describe a design concept in which learners wear DIY electrodermal-activity wristbands and environmental sensors record the microclimate around them, then use interpretable machine learning to see how air quality, temperature, humidity and infrared radiation relate to their own physiological stress. In a second experiment they use generative image fill (Adobe Firefly) to turn a pristine landscape into a visibly polluted one, on the theory that an AI-generated image is a stronger emotional stimulus than a photograph. With five participants in the first experiment and four in the second, the paper demonstrates a pipeline and reports that AI-altered images produced roughly twice the electrodermal arousal of real polluted images (2.27 versus 1.07). It does not measure [[empathy]], pro-environmental attitudes or stewardship; those remain the framing, not the outcome.

**Relevance to [[ai-education|AI in Education]]:** The chapter is a useful blueprint for [[experiential-learning|experiential]] environmental education that puts the learner's own body in the data, and a caution about how easily "empathy" gets claimed when what was measured is arousal. It connects [[sensor-and-gaze-analytics|sensing]] and [[learning-analytics|learning analytics]] to [[sustainability|sustainability]] education.

## Key Findings

- **Microclimate predicted physiological stress modestly.** A random-forest model using environmental variables reached R² = 0.425 for one EDA feature and 0.622 for another; CO₂ concentration was the most influential predictor, followed by temperature, humidity and infrared radiation.
- **AI-generated pollution imagery was more arousing than a photograph.** Viewing a generative-filled polluted image produced a mean TVSymp of 2.27 against 1.07 for the original polluted photograph, with a Kruskal-Wallis p of 3.54E-12.
- **The scale is tiny.** Five participants (four men, one woman) generated more than 30,000 environmental readings and 300,000 EDA readings in the first experiment; four men took part in the second.
- **The construct is not measured.** Empathy, pro-social values and stewardship are the stated aims; the reported outcomes are electrodermal features and self-assessment manikin ratings.

## The two experiments

The first experiment ran a two-hour protocol divided into eight 15-minute windows, each with randomized combinations of microclimatic conditions. Every window combined a three-minute rest baseline, a five-minute demanding mathematics task and a survey (Self-Assessment Manikin plus an acute-stress appraisal). Participants wore a DIY wristband on the non-dominant arm throughout.

The second experiment showed participants images of a pristine environment, prompts for generative fill, an unaltered polluted environment, and a polluted version created by Firefly from the pristine image. After each, participants completed a Self-Assessment Manikin and continued to have EDA recorded.

## What the chapter actually demonstrates

Two things are solid enough to reuse. First, the sensing stack is cheap and reproducible: a DIY EDA wristband, commercial environmental sensors, and a random forest with SHAP explanations are within reach of a school or a small research group. Second, the affective-stimulus idea works mechanically — an AI-edited image did produce a larger physiological response than the photograph it was derived from.

What it does not demonstrate is the educational claim. A larger skin-conductance response to a distressing image is evidence that the image was arousing, not that the learner became more empathic or more likely to act pro-environmentally. The paper's own framing moves from "emotional arousal" to "empathy" and "stewardship" without a measure in between, and it acknowledges the small sample.

There is also a design question worth flagging. Making environmental degradation vivid is a well-known tactic, and it can produce avoidance or resignation rather than stewardship, particularly in young learners. The chapter does not test either response.

## What this means for practice

- **Use the pipeline, not the conclusion.** Body-based environmental data plus explainable models is a genuine [[inquiry-based-learning|inquiry]] activity; "this raises empathy" is not yet supported.
- **Treat AI-generated imagery as a stimulus to be tested.** If the goal is emotional engagement, measure engagement and then measure the attitude you actually want to change.
- **Plan for the affective response you might get.** Distressing imagery can demotivate; pair it with efficacy — something the learner can do — rather than with more threat.

## Limitations

- Four and five participants, all from one context, with the second experiment entirely male.
- No measure of empathy, pro-social values, stewardship, or behavior; the outcomes are physiological and self-report affect.
- The generative-AI experiment compares an AI-edited image with a photograph, so image content and image source are confounded.
- Reported as a book chapter/preprint describing potential; it is a feasibility demonstration rather than an evaluation of a learning intervention.
- Self-Assessment Manikin ratings are retrospective single-item affect reports, not empathy measures.

## Citation

Lim, K. Y. T., Nguyen Duc, M. A., & Nguyen Thien, M. T. (2024). [*Exploring the potential of AI in nurturing learner empathy, pro-social values and environmental stewardship*](https://arxiv.org/abs/2408.15906). arXiv:2408.15906.
