---
title: "Perceived Technological Dependence on Generative AI: Knowledge, Trust, Anxiety and Self-Efficacy"
created: "2026-10-25T10:05:00-04:00"
updated: "2026-10-25T10:05:00-04:00"
type: article
published: "2026-10-23"
page_kind: [evaluation]
research_method: [survey]
discipline: [design education]
level: [higher ed]
audience: [researchers, instructors, instructional designers]
foundations: [human-ai-collaboration, cognitive-offloading]
pedagogy: [self-efficacy, anxiety-and-stress, motivation]
technology: [generative-ai, technology-acceptance-model, llm]
assessment: [self-report-measures]
methods: [quantitative-research]
ethics: [trust]
confidence: high
sources: ['raw/papers/wei-perceived-technological-dependence-genai-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Wei, Zhang and Heo (2026) extend the Technology Acceptance Model to ask what sits between knowing a [[generative-ai|generative AI]] tool and coming to depend on it. Using [[technology-acceptance-model|PLS-SEM]] on 526 design students who had used AI-generated content tools for design work, the study models perceived reliability, perceived ease of use, usefulness, perceived intelligence, perceived AIGC knowledge, [[trust]], [[anxiety-and-stress|anxiety]], [[self-efficacy]] and usage intention as antecedents of **perceived technological dependence**. Perceived knowledge, trust, reliability, usefulness, intelligence and anxiety were each positively associated with self-efficacy, while perceived ease of use was not. Perceived knowledge was positively associated with trust, self-efficacy and usage intention and negatively with anxiety; trust, anxiety and self-efficacy each carried a significant *indirect* pathway from knowledge to usage intention; and usage intention was strongly associated with reported dependence. The authors are explicit that the cross-sectional data establish neither temporal order nor that reported dependence is harmful overuse.

## Key Findings

1. **Perceived ease of use did not predict self-efficacy.** Of the technological perceptions modeled, perceived ease of use was the one not significantly associated with [[self-efficacy]], while perceived reliability, usefulness, perceived intelligence, perceived knowledge and anxiety each were.
2. **Perceived knowledge cut anxiety and raised trust and intention.** Perceived AIGC knowledge was positively associated with [[trust]], self-efficacy and usage intention, and negatively associated with AIGC-related anxiety.
3. **Three constructs carried indirect paths.** Trust, AIGC-related anxiety and self-efficacy each showed a significant specific indirect effect in the modeled relationship between perceived AIGC knowledge and usage intention.
4. **Usage intention was strongly associated with dependence.** The modeled outcome, perceived technological dependence, was strongly associated with intention to use the tools.
5. **Anxiety belonged to the pathway, not outside it.** AIGC-related anxiety was positively associated with self-efficacy and functioned as part of the indirect route rather than as a simple barrier to use.
6. **The construct is functional reliance, not pathology.** The authors define perceived technological dependence as reported reliance on the tools for design work, and state directly that the data do not show the reported dependence reflects harmful overuse.

## Why the ease-of-use null is the interesting result

The finding that carries the most information is the one that did not appear. In the TAM lineage, perceived ease of use is usually a reliable predictor, and it was the only technological perception here that failed to reach significance against self-efficacy.

That makes sense once the construct is generative rather than transactional. A tool whose value comes from producing material for a creative task presents the student with a different problem than an interface that is easy to click: whether the output can be judged. Design students in this sample were eligible only if they had already used AIGC tools for design work, so the study speaks to students past the access barrier, for whom lack of friction no longer distinguishes anything. What distinguishes them is whether they understand what the tool does, which is why perceived knowledge is the construct doing the work in this model.

The anxiety result is a companion to that reading. Anxiety was positively associated with self-efficacy in this sample and sat on a significant indirect path, which is not what a simple "anxiety blocks adoption" story would predict. A plausible account, consistent with the authors' framing, is that some anxiety is the residue of taking the task seriously — students who understand that the output needs checking also feel the burden of checking it.

## What this model can and cannot establish

The design is a single cross-sectional questionnaire, analyzed with PLS-SEM using 5,000 bootstrap resamples and percentile confidence intervals. That machinery is appropriate for estimating associations among latent constructs, and the authors are unusually clear about its limits: the arrows represent hypothesized association, not observed sequence, and the paper says explicitly that the framework's ordering "does not represent an observed sequence of changes in the students."

This matters most for the dependence finding, which is the one that will be quoted. A strong association between usage intention and perceived dependence in cross-sectional data is compatible with dependence causing intention, intention producing a self-report of dependence, and both being produced by a third factor such as genuine usefulness. The paper does not claim otherwise, and its closing caution — that reported dependence is functional reliance rather than demonstrated harmful overuse — is the sentence to hold on to when citing it.

There is also a construct-validity question worth naming. Perceived knowledge was measured with four self-report items, so the model's most active predictor is students' belief about their understanding, not their understanding. The authors flag this directly, noting that TAM-based studies implicitly assume users can evaluate the technology they are asked to accept, an assumption that is less stable for generative tools where apparent ease of use outstrips the competence to judge output.

## What this means for practice

- **Instructors.** Teach evaluation of AI output rather than operation of AI tools, because perceived ease of use did not distinguish students once they were already users, while perceived knowledge did.
- **Instructional designers.** Build the checking step into the task, since the model puts self-efficacy and trust on the pathway from knowledge to intention, and a task that supplies an evaluation criterion exercises both.
- **Researchers.** Treat perceived knowledge as belief rather than competence and measure the two separately, because the model's strongest predictor is a self-report and the paper says so.
- **[[teacher-role]]** Do not read reported dependence as evidence of harm; measure outcomes such as retention or unaided performance if the question is whether reliance has become costly.
- **Educational technology developers.** Do not rely on frictionless interfaces to build confidence, since ease of use was the null result here and perceived capability was what moved the model.

## Limitations

- The data are cross-sectional, so no temporal order or causal direction among the constructs is established, and the authors state that their framework's ordering is theoretical rather than observed.
- Perceived AIGC knowledge was measured by four self-report items, so it captures students' belief about their understanding rather than their demonstrated competence in evaluating or using the tools.
- Perceived technological dependence is a self-report of functional reliance; the study reports no behavioral usage data and does not show that the reported dependence reflects harmful overuse.
- Prior formal training in generative AI was not recorded in the questionnaire, so it cannot be ruled out as a confounder of the knowledge, anxiety and self-efficacy pathways.
- Participants were design students with prior AIGC use in design work, recruited through a questionnaire circulated between June and August 2025, so the model describes one discipline, one national context and one self-selected population already past the access threshold.
- Of 537 submitted questionnaires 11 were excluded for reporting no AIGC design experience, leaving 526, and the excluded cases are too few to affect the estimates but mean the sample is defined by prior use rather than by assignment.

## Citation

Wei, L., Zhang, S., & Heo, J. (2026). [Psychological mechanisms of perceived technological dependence on generative artificial intelligence tools: perceived knowledge, trust, anxiety, and self-efficacy](https://doi.org/10.3389/fpsyg.2026.1928967). *Frontiers in Psychology*, *17*, 1928967.
