---
title: "Faster Completion, Less Learning: Generative AI Reduced Study Time on Math Problems and the Knowledge They Build"
created: "2026-05-23T04:33:04-04:00"
updated: "2026-08-28T00:00:00-04:00"
type: article
tags: [generative-ai, cognitive-offloading, stem-education, k-12, higher-ed, learning-gains, student-experience, regulation, ai-literacy, ai-education, math-education, assessment]
research_method: [learning analytics]
discipline: [stem education, math education]
audience: [learners]
level: [k 12, higher ed]
category: [assessment]
sources: ['raw/papers/2605.21629.md']
confidence: high
---

> **Synthesis:** Rismanchian, Uzun, Matayoshi, Cosyn, and Kurd-Misto (2026) provide the first large-scale behavioral and outcome evidence that [[generative-ai|generative AI]] has fundamentally altered how students study and what they retain. Using a ten-year panel of **3.2 million ALEKS learning interactions** plus **12.2 million ALEKS PPL placement-assessment response times**, a quasi-experimental design exploits within-curriculum variation in AI susceptibility: text-based word problems (transcribable into AI prompts) are treated, while interactive graph-based problems (requiring platform manipulation) serve as control. Learning time on AI-susceptible problems fell **2.8% per quarter** among college students after ChatGPT's release (26.9% cumulative over eleven quarters), the divergence **vanishes entirely under proctoring**, and proctored retention items show a **25% cumulative decline** in odds of correct response. The authors call this population-level displacement of thinking **cognitive surrender** — a shift from [[cognitive-offloading|deliberate offloading]] to passive dependency. 

## Study design and scale

The study is notable for its scale and its quasi-experimental identification strategy:

- **Time-on-task:** a ten-year panel of **3.2 million ALEKS learning interactions** (a mastery-based math learning platform).
- **Learning outcomes and proctoring:** **12.2 million ALEKS PPL placement-assessment response times**, used to test whether the time decline persists when AI use is blocked (proctored) versus when it is not.
- **Identification:** within-curriculum variation in **AI susceptibility** — text-based word problems that can be transcribed into prompts for an LLM serve as the treated group, while graph-based problems requiring interactive platform manipulation serve as the comparison. This isolates AI-assisted offloading from general platform or curriculum effects.

## Time-on-task decline

Learning time on AI-susceptible problems declined at **2.8% per quarter** among college students after ChatGPT's release, cumulating to a **26.9% reduction** over eleven quarters. The effect varied sharply by age:

- High school: **31.3%** cumulative decline
- Middle school: **9.0%** cumulative decline
- Grade 5: **no detectable change**

The age gradient — absent for the youngest learners, strongest for high-schoolers and college students — is consistent with older students being more likely to access and use generative AI on their own.

## Proctoring eliminates the effect

The divergence in study time **vanishes entirely under proctoring** for college students. This rules out general efficiency improvements, platform changes, cohort effects, or curriculum revisions as the explanation, and strongly implicates **off-platform AI use** as the driver. It is the cleanest evidence in the study that the decline reflects students substituting AI for their own [[cognitive-offloading|cognitive work]] rather than learning faster.

## Learning outcome impact

- **Proctored retention items:** a **25% cumulative decline** in odds of correct response (logistic fixed-effects models on randomly assigned proctored retention items) — durable knowledge is measurably worse.
- **Non-proctored assessment:** a large **opposite-signed increase** — performance looks *better* when AI is available, but this is "impossible to attribute to anything other than AI assistance." This is the classic [[genai-performance-vs-learning|performance–learning gap]]: AI inflates immediate scores while eroding durable learning.

## The "cognitive surrender" concept

The authors introduce **cognitive surrender** to describe students offloading thinking to generative AI, producing a measurable population-level decline in durable knowledge. This represents a fundamental shift from [[cognitive-offloading]] as a deliberate, often [[metacognition|metacognitively]]-managed strategy to a passive, unreflective dependency — echoing the knowledge base's distinction between adaptive and maladaptive offloading and the mechanisms documented under [[reducing-ai-misuse]] and [[ai-misuse-learning-harm]].

## Implications for AI in education

This study provides the strongest empirical evidence yet for the over-reliance phenomenon documented across the knowledge base, at population scale with objective behavioral measures rather than self-report. Direct implications include:

- **[[academic-integrity]] policy and assessment governance:** proctored, unassisted measures are essential because non-proctored performance is inflated by AI; the 25% proctored retention decline is the cost of unmonitored AI use.
- **[[ai-literacy]] and [[self-regulated-learning]] curriculum design:** students need training to recognize and resist cognitive surrender, not just to use tools.
- **[[assessment]] redesign:** the proctoring result validates unassisted and process-based assessment as ways to reveal and protect durable learning.
- **[[learning-gains]] measurement methodology:** outcome measures must control for AI accessibility; self-report and non-proctored performance systematically understate the harm.
- **Educational [[regulation]] and AI policy:** the age gradient and proctoring findings inform how policy should target different [[k-12]] and [[higher-ed]] levels.
- **[[math-education]] specifically:** mastery platforms like ALEKS are directly affected, since text-based problems are the most AI-susceptible.

## Connected Concepts

- [[generative-ai]]
- [[cognitive-offloading]]
- [[academic-integrity]]
- [[ai-literacy]]
- [[regulation]]
- [[learning-gains]]
- [[math-education]]
- [[k-12]]
- [[higher-ed]]
- [[assessment]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[ai-misuse-learning-harm]]
- [[reducing-ai-misuse]]

## Connected Articles

- [[genai-performance-vs-learning]] — Distinguishing performance gains from learning
- [[cognitive-shift-ai-education]] — Evidence of a cognitive shift in AI education
- [[absent-cognitive-baseline-2026]] — The absent cognitive baseline in AI-native students
- [[making-ai-tutoring-productive-mastery-math-2026]] — Making AI tutoring productive in mastery math
- [[genai-availability-grades-satisfaction]] — AI availability, grades, and satisfaction

## Citation

Rismanchian, S., Uzun, H., Matayoshi, J., Cosyn, E., & Kurd-Misto, E. (2026). [*Faster Completion, Less Learning: Generative AI Reduced Study Time on Math Problems and the Knowledge They Build*](https://arxiv.org/abs/2605.21629).
