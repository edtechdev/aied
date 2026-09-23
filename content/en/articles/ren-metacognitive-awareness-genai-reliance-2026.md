---
title: "College students’ metacognitive awareness of generative-AI reliance: an experimental study of decision confidence and attribution bias"
created: "2026-09-23T13:05:00-04:00"
updated: "2026-09-23T13:05:00-04:00"
type: article
foundations: [cognitive-offloading, critical-thinking]
pedagogy: [metacognition, self-regulated-learning]
technology: [generative-ai, llm]
ethics: [trust-calibration]
methods: [quantitative-research, rct]
research_method: [experiment]
level: [higher ed]
sources: ['raw/papers/ren-metacognitive-awareness-genai-reliance-2026.md']
confidence: medium
audience: [researchers, instructors, instructional designers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]

---

> **Synthesis:** Ren (2026) asks whether college students notice how much generative AI shapes their own judgments. In a three-condition randomized experiment, 342 undergraduates at one Chinese university completed 24 analytical reasoning, data interpretation, and information credibility tasks under no AI, open multi-turn ChatGPT support, or the same ChatGPT support plus a brief metacognitive reflection prompt. Open ChatGPT support raised final confidence and carried 62.4% acceptance of incorrect AI advice. Reflection cut that acceptance to 39.7% (OR = 0.40), improved [[trust-calibration|awareness calibration]] between perceived and behavioral reliance (0.59 vs. 0.41), and weakened the attribution bias index (0.21 vs. 0.42), without reducing recommendation accuracy or triggering blanket rejection of useful advice. The paper frames reliance as a monitoring problem rather than a frequency-of-use problem, and treats "metacognitive dependence" as an organizing label rather than a validated trait.

## Key Findings

- A three-condition randomized experiment (N = 342, 114 per condition) compared independent decisions with open multi-turn ChatGPT support and with ChatGPT support plus a reflection prompt.
- Open ChatGPT support raised final [[metacognition|decision confidence]] (76.1 vs. 68.4 on a 0 to 100 scale) relative to independent decision-making.
- Students accepted incorrect ChatGPT recommendations on 62.4% of trials under open support, falling to 39.7% with reflection (OR = 0.40, 95% CI [0.28, 0.56]).
- Awareness calibration improved with reflection (0.59 vs. 0.41), and underestimation of reliance drove the weaker calibration in the open ChatGPT condition.
- The AI-specific [[critical-thinking|attribution]] bias index dropped from 0.42 to 0.21 under reflection (p = 0.002); alignment with correct AI advice stayed high.

## Study Design and Method

Participants were 342 undergraduates at Anhui University of Science and Technology (18 excluded from 360 recruited) and took part online in Spring 2026. Each of the 24 tasks required an initial answer and a 0 to 100 confidence rating before any AI interaction; the two AI conditions then used a browser-based ChatGPT interface (model label GPT-5.4) with a standardized starter prompt and at most two follow-up questions. The reflection condition answered three prompts about its own reasoning, the evidential basis of the AI explanation, and what would justify rejection, before finalizing answers. Two coders extracted each final ChatGPT recommendation and scored its correctness (Cohen's kappa = 0.91).

## Condition Effects on Confidence and Advice Use

Open ChatGPT support produced the largest confidence shift, with final confidence of 76.1 against 68.4 for independent decisions, while the reflection group landed in between at 72.3. Initial confidence was nearly identical across groups (66.7 to 67.2), so the divergence followed AI interaction rather than baseline differences. The same condition ordering appeared in advice use: recommendation accuracy was statistically comparable across the two AI-assisted groups (66.3% vs. 67.0%), yet acceptance of incorrect advice differed sharply, and students revised answers toward AI advice on 58.6% of open-support trials versus 46.8% under reflection. The gap concentrated on incorrect advice, so reflection made reliance more discriminative rather than uniformly defensive.

## Attribution and Responsibility

After feedback, participants rated whether outcomes stemmed from their own ability, their effort, AI advice, or task difficulty. In the open ChatGPT condition the resulting index showed the familiar self-serving pattern: credit claimed for correct answers, blame assigned outward when answers were wrong. Reflection reduced that AI-specific attribution bias index from 0.42 to 0.21, and a source-level model confirmed the direction, with attribution to AI advice after incorrect outcomes notably lower under reflection. The independent condition could not support an AI attribution score because no recommendation was ever available, so it served as a descriptive benchmark only. Within the AI-assisted conditions, awareness calibration moved opposite to incorrect-advice acceptance and bias.

## What this means for practice

- **Instructors.** Add a short pre-submission reflection prompt asking for the student's own reasoning, which parts of an AI explanation rest on evidence rather than fluency, and what would change their mind.
- **Instructors.** Expect confidence to rise with AI help regardless of accuracy, and build tasks where students compare their initial answer with the AI response explicitly.
- **Program designers.** Pair AI-literacy teaching with monitoring practice, since knowing about model limits did not stop students from accepting plausible wrong advice.
- **Assessment leads.** Keep some work unassisted where independent mastery is the target, because assisted performance and understanding can diverge.

## Limitations

- **One university, one context.** The sample came from a single institution, so effect sizes may not generalize across institutions, cultures or disciplines.
- **Short, bounded tasks.** Results describe immediate decision behavior rather than durable learning, transfer or semester-long change.
- **Awareness calibration is not independent of the outcome.** It incorporates behavioral reliance and was measured after the decision episode, which is why the exploratory indirect effect is reported as associational rather than causal mediation.
- **The attribution index is constructed**, and "metacognitive dependence" is not validated as a single latent trait.

## Connected Concepts

- [[metacognition]] — monitoring accuracy as the study's central construct
- [[trust-calibration]] — appropriate reliance versus uncritical adoption of AI advice
- [[cognitive-offloading]] — external support that can hide how much reasoning was outsourced
- [[generative-ai]] — the tool examined in all three conditions

## Connected Articles

- [[eight-mode-ai-engagement-typology-2026]] — Self-Report and Behavior Gap in AI Engagement
- [[efficiency-gain-illusion-ai-overreliance]] — Efficiency Gain Illusion and AI Overreliance
- [[wang-reflective-ai-use-engagement-programming-2026]] — Reflective AI Use and Engagement in Programming

## Citation

Ren, S. (2026). [*College students’ metacognitive awareness of generative-AI reliance: an experimental study of decision confidence and attribution bias*](https://doi.org/10.3389/fpsyg.2026.1926110).
