---
title: "Faster Completion, Less Learning: Generative AI Reduced Study Time on Math Problems and the Knowledge They Build"
created: "2026-05-23T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [ai-education, ai-literacy, cognitive-offloading]
technology: [generative-ai]
assessment: [assessment, learning-gains]
stakeholders: [student-experience]
research_method: [learning analytics]
discipline: [stem education, math education]
audience: [learners]
level: [k 12, higher ed]
sources: ['raw/papers/2605.21629.md']
confidence: high
institutions: [regulation]
---

> **Synthesis:** Rismanchian, Uzun, Matayoshi, Cosyn, and Kurd-Misto (2026) provide the first large-scale behavioral and outcome evidence that [[generative-ai|generative AI]] has fundamentally altered how students study and what they retain. Using a ten-year panel of **3.2 million ALEKS learning interactions** plus **12.2 million ALEKS PPL placement-assessment response times**, a quasi-experimental design exploits within-curriculum variation in AI susceptibility: text-based word problems (transcribable into AI prompts) are treated, while interactive graph-based problems (requiring platform manipulation) serve as control. Learning time on AI-susceptible problems fell **2.8% per quarter** among college students after ChatGPT's release (26.9% cumulative over eleven quarters), the divergence **vanishes entirely under proctoring**, and proctored retention items show a **25% cumulative decline** in odds of correct response. The authors call this population-level displacement of thinking **cognitive surrender** — a shift from [[cognitive-offloading|deliberate offloading]] to passive dependency. 

## Study design and scale

The study is notable for its scale and its quasi-experimental identification strategy:

- **Time-on-task:** a ten-year panel of **3.2 million ALEKS learning interactions** (a mastery-based math learning platform).
- **Learning outcomes and proctoring:** **12.2 million ALEKS PPL placement-assessment response times**, used to test whether the time decline persists when AI use is blocked (proctored) versus when it is not.
- **Identification:** within-curriculum variation in **AI susceptibility** — text-based word problems that can be transcribed into prompts for an [[llm]] serve as the treated group, while graph-based problems requiring interactive platform manipulation serve as the comparison. This isolates AI-assisted offloading from general platform or curriculum effects.

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

## What this means for practice

- **Learners.** Notice the pattern this study names cognitive surrender and protect unassisted practice time: non-proctored performance rose while proctored retention items fell 25% in cumulative odds of a correct response.
- **Instructors.** Ground high-stakes [[academic-integrity]] judgment in proctored, unassisted measures, because the post-ChatGPT time decline vanishes entirely under proctoring and the same estimator on non-proctored assessment yields a large opposite-signed increase that is impossible to attribute to anything other than AI assistance.
- **Instructors.** Redesign [[assessment]] toward unassisted and process-based work, and build [[ai-literacy]] and [[self-regulated-learning]] training so students can recognize and resist passive dependency rather than only use the tools.
- **Instructors.** Do not treat self-report or non-proctored performance as evidence of [[learning-gains|learning]]: only proctored items exposed the 25% retention decline, so outcome measures must control for AI [[accessibility]].
- **Administrators.** Target [[regulation]] and [[educational-policy-ai|AI policy]] by level and platform, since the population-scale, objective behavioral evidence shows cumulative declines of 31.3% in high school and 9.0% in middle school against no detectable change in Grade 5, and [[math-education|math]] mastery platforms like ALEKS are directly affected because text-based problems are the most AI-susceptible.

## Limitations

- The learning-time analysis uses ALEKS learning data while the retention analysis uses the ALEKS PPL placement dataset — different populations under different conditions — so the individual-level causal chain cannot be established with the current data.
- AI use is never observed directly; all inferences come from behavioral signatures, validated by two falsification tests, and alternative behavioral explanations cannot be fully excluded.
- ALEKS PPL placement performance reflects prior learning, test-taking familiarity, and platform experience rather than purely retention of concepts practiced during ALEKS learning, so a gap remains between it and a laboratory-grade retention test.
- The retention analysis observes the mechanism only at the population level, even though the evidence is consistent with it.

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
