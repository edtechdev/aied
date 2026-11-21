---
title: "Generative AI for Inorganic Chemistry Problems and Chemistry Students’ Self-Rated Ability to Verify Its Responses: An Exploratory Study"
created: "2026-11-21T08:13:00-05:00"
updated: "2026-11-21T08:13:00-05:00"
type: article
published: "2026"
discipline: [chemistry education]
foundations: [ai-literacy, critical-thinking, cognitive-offloading]
pedagogy: [problem-solving, metacognition, self-efficacy]
technology: [generative-ai, llm]
assessment: [self-assessment, self-report-measures]
methods: [mixed-methods-research, quantitative-research, benchmark]
research_method: [survey, design and evaluation study]
audience: [researchers, instructors, faculty developers, assessment designers]
level: [higher ed, undergraduate]
page_kind: [evaluation]
sources: ['raw/papers/bauyrzhan-genai-inorganic-chemistry-verification-2026.md']
confidence: medium
evidence_context: educational
source_depth: full text
source_url: "https://doi.org/10.3390/educsci16111997"
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-21"
    agent: hermes-agent
connected_concepts: [generative-ai, chemistry-education, ai-literacy, self-efficacy, automation-bias, trust-calibration, self-assessment, hallucination-risk]
connected_articles: []
---

> **Synthesis:** Bauyrzhan and colleagues ask two questions at once: how accurately three free [[generative-ai|generative AI]] chatbots handle ordinary inorganic chemistry problems, and how well chemistry students believe they can check the answers. Between 11 and 20 May 2025, ChatGPT (GPT-4o), Gemini (2.5 Flash) and DeepSeek (V3) each solved 42 course problems once. On the 38 problems whose statements and keys the authors verified, 109 of 111 substantive responses were correct; DeepSeek's lower headline accuracy came from server non-responses rather than chemistry errors. When the problem itself was defective — three flawed statements and one ambiguous one — none of the eight substantive responses reached the intended solution or said the problem could not be solved as written, although most noted an inconsistency and still answered. A survey of 570 students at three universities in Southern Kazakhstan found near-universal ChatGPT use, with 61.6% rating themselves able to tell correct from incorrect AI information; that [[self-efficacy|self-rating]] behaved like an AI self-efficacy item rather than a separate judgment. The study is exploratory and does not measure actual error detection.

## Key Findings

- **Near-perfect on well-posed problems.** On 38 verified problems, ChatGPT and Gemini were each strictly correct on 37 and DeepSeek on 35; pooled, 109 of 111 substantive responses were correct.
- **DeepSeek's gap was availability, not chemistry.** Its shortfall consisted of four non-responses caused by server unavailability; it answered all 35 substantive attempts correctly.
- **Defective statements were the real failure.** On three flawed problems, none of the eight substantive responses reached the intended solution or stated that the problem could not be solved as written; seven noted an inconsistency or missing datum and still gave a definite answer.
- **No response asked for clarification.** Across 11 responses to the four problematic problems, none flagged the defect or asked what was meant; every final answer rested on unused data, a reinterpretation or an added premise.
- **Only two responses contained chemistry errors as such.** Independent calculation or chemistry mistakes appeared in two of the eight flawed-problem responses; the shared deficiency was treating a defective statement as well posed.
- **Confidence in checking was widespread but not distinct.** Most students rated themselves able to judge AI output, yet the item behaved like general AI self-efficacy: its association with reported use largely disappeared once self-efficacy and attitudes were controlled.
- **Use was nearly universal.** Almost all students reported using AI for learning chemistry, with ChatGPT dominant and image generators marginal.

## Two components and how they were analyzed

Part B evaluated three freely available chatbots through their standard web interfaces, with default settings and free accounts, between 11 and 20 May 2025. The task set comprised 42 problems drawn from the [[chemistry-education|inorganic chemistry]] course, covering seven topics at three difficulty levels with two problems per cell; a panel of three instructors assigned difficulty. Each problem was entered unchanged as a single prompt, without system instructions or follow-up questions, and each was run once per system. Model versions were recorded at testing: ChatGPT free tier (GPT-4o), Gemini free tier (2.5 Flash) and DeepSeek-V3.

During scoring the authors noticed defective statements and answer-key inconsistencies, then re-verified every statement against the Kazakh original and every worked solution. Three problems were classified as flawed — inconsistent or underspecified as written — and one as ambiguous, leaving 38 verified problems. These naturally occurring defects were kept and analyzed separately rather than removed.

Part A surveyed 570 undergraduate and graduate students at three universities in Southern Kazakhstan through convenience sampling, using a 15-item questionnaire administered online in Kazakh. An exploratory factor analysis retained a single factor: the first eigenvalue was 9.68 against 1.35 expected from random data, and the second 0.95 against 1.26; the common factor accounted for 62.1% of item variance. The authors therefore defined measures by item content rather than the original groupings, kept the verification item separate, and used the other subsets as statistical controls. Because the components differ in time, participants and unit of analysis, they were integrated only at the interpretation stage.

## Accurate on well-posed problems, unquestioning on flawed ones

On the 38 verified problems, ChatGPT and Gemini were each strictly correct on 37 and DeepSeek on 35. Pooled over systems, 109 of 114 prompts and 109 of 111 substantive responses were correct. Only two substantive responses were wrong: ChatGPT gave an unbalanced equation for silicon with aqueous sodium hydroxide, and Gemini made an electrode-potential error. Both concerned redox chemistry and electrochemistry. DeepSeek returned "server busy" on four prompts, all in the solutions and redox sections, and none for the other two systems.

For the flawed problems, the authors coded how each response handled the statement. No response asked a clarifying question or explicitly identified the defect. Three responses noticed that the data did not fit and still gave a final composition; two adopted another reading without comment; three supplied an invented premise, such as an assumed density or an unstated melt. Seven of the eight responses contained an uncertainty marker somewhere in the working, but only two let doubt reach the conclusion. On the ambiguous problem, ChatGPT silently read a lost degree sign as 32 °C to 62 °C and obtained the intended answer, while Gemini and DeepSeek read it literally as 320 °C to 620 °C and solved that version correctly, for about 1205 mL; none said it had chosen between readings.

The main deficiency was not faulty chemistry but treating a defective statement as well posed. Detecting the flaw in the gases problem required recognizing that the stated reagent could not produce the stated amount of product — disciplinary knowledge novices are still acquiring. The pattern is consistent with benchmark evidence that frontier models rarely abstain on underspecified or false-premise questions, a [[hallucination-risk|confident-guessing]] tendency. The authors note a cheap practical check: the only verified problems on which the systems disagreed were the two on which one of them was wrong, and the defects themselves surfaced only when an output diverged from the key.

## Confidence in checking tracked general AI self-efficacy

Almost all students (547 of 570, 96.0%) reported using AI for learning chemistry; ChatGPT was used by 96.8%, Gemini by 67.4% and DeepSeek by 14.9%. The verification [[self-assessment|self-rating]] averaged 3.52 on the five-point scale, and 61.6% agreed or strongly agreed that they can distinguish reliable from unreliable AI information in a chemical context. Confidence did not rise with year of study: 57.6% of Year 1 students rated themselves at 4–5, compared with 56.4% of Year 3 and 54.9% of master's students, while 71.5% of Year 2 students did.

The central result is a measurement finding. Reported use correlated with the verification self-rating, but the association largely disappeared once AI self-efficacy, orientation towards AI and digital technologies were controlled — a partial correlation of about 0.12, against 0.59 before adjustment. In an ordinal regression, reported use was no longer a predictor while AI self-efficacy was strong. Cross-classification showed the same pattern: 81.8% of frequent users rated their verification ability highly, against 38.0% of less frequent users. The authors read this as students not distinguishing confidence in verifying output from general competence with AI; the design cannot establish direction, and self-efficacy may itself grow with use. Whether students can actually detect errors was not tested. Fluent, confident output of the kind observed here is exactly what [[automation-bias|automation bias]] research warns about, and it makes [[trust-calibration|calibrated trust]] the relevant educational target rather than trust alone.

## What this means for practice

- **Instructors.** Teach checking of the problem statement as well as the solution: whether the data are mutually consistent, and whether the stated reagent can produce the stated product.
- **Assessment designers.** Make reasoning visible in assessment; at this level of accuracy, take-home problem sets alone no longer show what an individual student can do.
- **Students.** Compare two chatbots' answers — in this study the systems disagreed exactly where one of them was wrong — and ask a model to check the problem before solving it.
- **Teacher educators.** Use flawed AI solutions as critique material and teach chemistry-specific checks: mass and charge balance, oxidation-state bookkeeping, unit and order-of-magnitude checks, with attention to multi-step redox and electrochemistry problems.
- **Faculty developers.** Provide institution-level guidance and check translated or transcribed materials, since two of the four defective statements originated in translation or transcription; build [[ai-literacy|AI literacy]] around verification as an assessable skill.

## Limitations

- Convenience sampling in one region and a cross-sectional design limit generalization; all survey measures are self-reports sharing a single general factor.
- Verification ability and reported use were each measured with one agreement item, and verification was not measured with a performance task, so actual error detection is untested.
- The benchmark used 42 problems, of which 38 were verified, with one run per system on the free tiers in May 2025; run-to-run variability is unknown and the tested versions can no longer be re-run.
- Accuracy near the ceiling means moderate differences between systems or difficulty levels could not be detected, and no ranking is implied.
- The flawed and ambiguous problems were not designed, were identified with knowledge of the model outputs, and are too few to generalize about behavior on ill-posed problems.
- Scoring and coding were carried out by the authors with AI pre-screening and a non-blind specialist review; no independent blind double coding was completed, so the reliability of the codes is not quantified.

## Citation

Bauyrzhan, L., Yegemberdiyeva, S., Zhylysbayeva, G., Kerimbayeva, K., Nurdillayeva, R., & Zhylysbayeva, A. (2026). [Generative AI for Inorganic Chemistry Problems and Chemistry Students’ Self-Rated Ability to Verify Its Responses: An Exploratory Study](https://doi.org/10.3390/educsci16111997). *Education Sciences, 16*(11), 1997.
