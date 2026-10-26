---
title: "GenAIT: An Objective Generative AI Literacy Test for High School Students and Its Associations with LLM Use and Perceptions"
created: "2026-10-26T09:30:00-04:00"
updated: "2026-10-26T09:30:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/genait-genai-literacy-test-high-school-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [instrument development]
discipline: [learning sciences]
audience: [instructors, assessment designers, instructional designers, researchers]
level: [k 12, secondary]
pedagogy: [student-ai-interaction, metacognition]
technology: [generative-ai, llm]
assessment: [assessment-validity, educational-measurement, item-response-theory, self-report-measures]
methods: [quantitative-research, research-methods-aied]
institutions: []
ethics: []
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-26"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** GenAIT is an 18-item multiple-choice [[educational-measurement|test]] of the conceptual knowledge component of [[ai-literacy|generative AI literacy]], developed in Estonian and validated on 7,432 [[k-12]] students from 100 Estonian high schools. Expert review gave an S-CVI-Ave of .99 across the retained items, and the final three-parameter logistic [[item-response-theory]] model fit well (RMSEA = .013, TLI = .987, CFI = .990, SRMSR = .021), supporting a single total score for group-level research but not for high-stakes individual classification. Score reliability was broadly adequate (marginal reliability = .72, KR-20 = .69) while precision was markedly better above the trait mean than below it. Most strikingly, demonstrated knowledge bore almost no relation to how students feel about [[llm|large language models]]: perceived ease of use was unrelated (ρ = .01), perceived usefulness was very slightly negative (ρ = −.05), and general (ρ = −.16) and school-related (ρ = −.19) LLM use frequency were both negatively associated. The study's lesson for [[ai-education]] is that [[generative-ai]] adoption and favorable [[trust|perceptions]] cannot be read as evidence of conceptual [[trust|understanding]].

## Key Findings

1. **The test is psychometrically sound but group-level only.** The 18-item 3PL [[item-response-theory|IRT]] model fit well (RMSEA = .013, TLI = .987, CFI = .990, SRMSR = .021) with marginal reliability = .72 and KR-20 = .69, yet conditional reliability ranged from .55 at the 5th percentile to .89 at the 95th percentile.
2. **Expert review established [[assessment-validity|content validity]].** Five experts reviewed the item pool in January 2026; the initial 21-item version reached an S-CVI-Ave of .96, and the retained 18 items retrospectively reached .99.
3. **Knowledge and LLM perceptions barely co-vary.** GenAIT scores showed no significant association with perceived ease of use (ρ = .01) and a very small negative association with perceived usefulness (ρ = −.05).
4. **Higher literacy went with less use.** General LLM use frequency correlated at ρ = −.16 and school-related use at ρ = −.19 with GenAIT scores, both small to medium negative effects.
5. **[[self-report-measures|Self-report]] instruments measure something different.** The authors argue that objective [[assessment]] captures real knowledge that perceived competence, shaped by [[metacognition|metacognitive]] calibration, does not.
6. **The scale is mis-targeted for struggling students.** Conditional reliability exceeded the .70 benchmark only between θ = −0.27 and θ = 2.62, covering approximately 61% of students.
7. **Students answered many items incorrectly.** Raw GenAIT scores averaged 8.35 of 18 (SD = 3.39), with the hardest technical items answered correctly by 19.9% to 48.1% of students.

## What GenAIT measures and how it was built

GenAIT operationalizes the conceptual knowledge component of [[ai-literacy|generative AI literacy]] across three domains drawn from the Council of Europe framework: technical, practical, and human. The technical domain covers how [[generative-ai]] systems work and where their limits lie, including that [[llm|LLMs]] produce novel data and that token prediction is their fundamental mechanism. The practical domain covers [[prompt-engineering|prompting]], [[critical-thinking|critical evaluation]] of outputs, and awareness of [[ai-sycophancy|sycophancy]], bias, and [[hallucination-risk|hallucinations]]. The human domain covers [[cognitive-offloading|cognitive offloading]], misinformation, the [[digital-divide|digital divide]], and the energy and water demands of training and inference. The authors specified these domains for representative coverage, not as separate subscales, so a single total score summarizes demonstrated knowledge across all three.

Item development began with 21 target concepts, 7 per domain, drafted iteratively by five members of the Artificial and Natural Intelligence Lab at the University of Tartu. Each concept became a four-option multiple-choice item in Estonian with one correct answer, and distractors were designed to reflect [[misconceptions]] and partially correct intuitions rather than random errors. Because existing [[ai-literacy]] instruments had not been validated on high school students or in Estonian, the work addressed both a general and a local gap in [[educational-measurement|measurement]]. The authors prioritized concepts expected to remain relevant despite rapid technological advance.

## Psychometric evidence

Expert review ran in January 2026 with five raters: three AI or data science experts, one educational technologist, and one psychologist. Eight items were flagged for review; seven were revised and one was removed. Retrospectively recalculated for the 18 retained items, the scale-level content validity index reached .99, with a clarity index of .90, and experts averaged 3.25 on a four-point comprehensiveness scale. In a pilot study of 71 students, the 20-item form showed adequate internal consistency (KR-20 = .77) and correlated negatively with magical perception of AI (Spearman's ρ = −.35).

The main validation study ran from February to the beginning of April 2026, with students in Grades 10 and 11 from 100 participating Estonian schools completing a questionnaire that took around 30 minutes. Of 8,698 respondents, 1,266 (~14.6%) were removed, leaving 7,432 students, approximately 36.6% of all Estonian students enrolled in Grades 10 and 11 in the 2025/2026 school year. Respondents were split into a development subsample (n = 3,737) and a held-out validation subsample (n = 3,695). A one-factor confirmatory factor analysis with WLSMV estimation supported approximate unidimensionality, and local independence was supported by maximum Yen's Q3 values of .045 and .035.

Item selection removed Items 3 and 10 and retained four other flagged items after weighing the deviation against content validity. The final 3PL model was chosen over 1PL and 2PL alternatives because it fit significantly better with lower AIC and BIC. Discrimination parameters ranged from 0.59 to 4.23 and item difficulties from −1.71 to 2.05. Raw scores and expected a posteriori latent trait estimates correlated at Spearman's ρ = .97, so raw totals were used for reporting. The [[psychometrically-aware-ai|psychometric]] discipline is the point: the same items support group inference and defeat individual decision-making.

## Knowledge is not adoption

The study's most consequential result is that objectively measured [[ai-literacy]] was essentially unrelated to how students perceive and use [[llm|LLMs]]. After adjusting for multiple testing across the ten pairwise correlations, perceived ease of use showed no significant association (ρ = .01) and perceived usefulness a very small negative one (ρ = −.05). This is the first such evidence from objective assessment of AI or generative AI literacy, and it contradicts a [[technology-acceptance-model|technology acceptance model]] reading in which greater literacy produces more favorable perceptions. The authors propose a fluency-bias explanation: less cognitive friction during use may inflate perceived competence and therefore self-reported literacy without inflating demonstrated knowledge.

Both general and school-related LLM use frequency were negatively associated with GenAIT scores, at ρ = −.16 and ρ = −.19 respectively. The authors read this as consistent with students who understand [[llm]] limitations better being more selective about delegating schoolwork to them, though they concede that selectivity cannot be inferred from use frequency alone. Because the design was cross-sectional, no causal direction can be established, and the associations may depend on the target population and educational context. A comparable undergraduate study found a positive association, which the authors offer as a possible population difference rather than a contradiction.

## What this means for practice

- **Instructors.** Teach foundational mechanisms, not just tool operation, because students answered many technical items incorrectly, with correct-response rates as low as 19.9% to 48.1% on the hardest technical items.
- **Instructors.** Do not treat frequent [[llm]] use or confident [[self-assessment]] as evidence of understanding, since demonstrated knowledge correlated negatively with both general (ρ = −.16) and school-related (ρ = −.19) use frequency.
- **Assessment designers.** Use GenAIT for group-level research and description of aggregate response patterns, and avoid high-stakes individual classification given reliability of .72 and precision that is uneven across the trait.
- **Assessment designers.** Report any literacy score alongside its criterion, and treat [[self-report-measures|self-report]] and objective scores as measuring different constructs rather than interchangeable ones.
- **Instructional designers.** Build [[scaffolding]] that addresses conceptual gaps directly, because the pilot data showed that a knowledge measure can diverge sharply from how students rate their own competence.

## Limitations

- GenAIT measures only the conceptual knowledge component of [[ai-literacy]], so the results do not generalize to skills or the application of knowledge in [[authentic-assessment|authentic tasks]].
- Precision was uneven: conditional reliability rose from .55 at the 5th percentile to .89 at the 95th, exceeding the .70 benchmark only between θ = −0.27 and θ = 2.62, which covers approximately 61% of students, and the authors call for easier items.
- Evidence from external variables rests on a pilot study with only 71 students, which the authors say is too small to provide stable correlation estimates, so convergent, discriminant, criterion-related, and predictive validity remain unestablished.
- [[bias-mitigation|Differential item functioning]] and measurement invariance across grade levels or gender could not be examined because demographic data and school identifiers were removed for data-protection reasons, and clustering of students within schools was therefore not modeled.
- Students' interpretations of items were not directly examined; the authors recommend cognitive interviews or think-aloud protocols, and note that experts identified statistical modeling and [[ethics]] as potentially underrepresented.
- The associations among GenAIT, LLM perceptions, and use frequency were correlational, so no causal inference is possible; the authors call for experimental and longitudinal designs.

## Citation

Puppart, B., Laak, K.-J., & Aru, J. (2026). [GenAIT: An Objective Generative AI Literacy Test for High School Students and Its Associations with LLM Use and Perceptions](https://arxiv.org/abs/2608.25815). *arXiv preprint*.
