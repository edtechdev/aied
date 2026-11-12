---
title: "Good questions, sound measurement? Item-writing quality, psychometric functioning, and competence-level alignment of AI-generated multiple-choice assessments in chemistry education"
created: "2026-11-12T05:30:00-05:00"
updated: "2026-11-12T05:30:00-05:00"
type: article
page_kind: [evaluation]
research_method: [instrument development]
evidence_context: educational
level: [secondary, k 12]
audience: [instructors, assessment designers, researchers]
sources: ['raw/papers/rodemer-ai-generated-mcq-chemistry-assessment-2026.md']
source_url: "https://doi.org/10.3389/feduc.2026.1939585"
source_depth: full text
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
verified: [citation, numbers, links]
assessment: [assessment-validity, automated-question-generation, item-response-theory]
methods: [mixed-methods-research, quantitative-research]
---
> **Synthesis:** Rodemer, Franke and Feldon asked whether [[generative-ai|generative AI]] can produce a defensible multiple-choice test in secondary-school [[chemistry-education|chemistry]]. Prompting GPT-4 with the North Rhine-Westphalia electrochemistry curriculum, they generated 27 four-option items, nine per curriculum competence level, and administered the test to 95 students. On average, 87.71% of items met the [[assessment-validity|item-writing criteria]], but only 33.33% reduced specialized language and 48.15% balanced option length. [[item-response-theory|Rasch]] fit was broadly acceptable, with item reliability .91 and person reliability .66. The sharpest result is that agreement between the levels GPT-4 was told to write and those implied by empirical difficulty was 25.93% exact — 50.00% and κ = 0.429 once categories were combined — and only seven of 27 items kept their classification in at least 70% of bootstrap samples. The test is a usable first draft, not a validated instrument.

## Key Findings

1. **The items cleared most item-writing criteria, on average.** Across 22 binary-rated categories applied to 27 items, an average of 87.71% of items met the quality criteria, with pass rates ranging from 33.33% to 100%; two raters agreed at Cohen's κ = 0.93 before consensus resolution.
2. **Curricular and formal criteria were saturated.** Contextualization, alignment with curriculum content and with specific competencies, avoidance of bias and of absolute statements (in stems and distractors), autonomy of distractors, avoidance of "all of the above," logical order and uniqueness of options were each met by all 27 items (100.00%).
3. **Language load and option-length balance were the recurring weaknesses.** Only 33.33% of items reduced specialized language (9 items) and only 48.15% balanced answer-choice length (13 items); 3 items contained spelling mistakes and 6 contained syntax errors.
4. **Rasch fit was acceptable in the aggregate.** Infit MNSQ ranged from 0.83 to 1.17 (mean .998) and Outfit from 0.67 to 1.44 (mean 1.007); against the .7 to 1.3 band, item 15 underfit and item 1 overfit, the rest sitting within 0.79–1.28. Global MADaQ3 was .103 with no item pair significant after Holm correction, though a first residual component with an eigenvalue of 2.49 left unidimensionality unproven.
5. **Item ordering was stable; person measurement was not precise.** Item reliability was .91 against a .90 target, but person reliability was .66. Overall targeting was close — mean person ability 0.001 logits against mean item difficulty 0.040 logits, a 0.039-logit difference — yet the Wright Map showed gaps of 0.73 logits between Items 1 and 14 (six students), 0.65 logits between Items 6 and 15 (three students), and 0.59 logits between Items 8 and 5 (14 students).
6. **Distractors varied in diagnostic value.** Ten items contained 12 distractors chosen by less than 5% of test-takers. Of 81 distractors, correlations could be estimated for 77: 61 (79.22%) were negative as expected and 16 (20.78%) were zero or positive, median −.13, range −.49 to .36; correct options correlated positively for 22 of 27 items (81.48%), median .26, range −.10 to .58.
7. **Intended competence levels did not survive empirical classification.** Exact agreement between a priori and scale-anchored levels was 25.93% across all 27 items; after combining Group > III with Group III and excluding seven unclassified items, agreement was 50.00% with squared-weighted κ = 0.429. Stricter criteria classified 15 items and produced 11.11% exact agreement, 46.67% adjusted agreement and κ = 0.261; a 5,000-replication bootstrap gave median adjusted agreement of 43.48% and median κ of .314, with only seven of 27 items retaining their classification in at least 70% of samples.

## How the test was built and how its items were judged

The instrument was generated in German with GPT-4 through the ChatGPT interface, using a prompt refined over several iterations. Definitions and competence expectations from the North Rhine-Westphalia core curriculum were pasted in unmodified to support content validity, and the model was asked for nine single-select four-option items, three per competence level, until 27 items existed — a length suitable for a single lesson. Level I meant recalling information, Level II explaining knowledge in a new context and Level III solving a complex transfer problem. Generated items were reviewed against the prompt specifications and checked for correctness against a chemistry textbook; they were deliberately left unmodified, since editing them would have defeated the study's purpose.

Item quality was coded with a 22-category system drawn from Haladyna et al. (2002), Moreno et al. (2006) and Towns (2014). Two authors rated every item on every criterion as met or not met and reached κ = 0.93; disagreements were resolved by consensus. Unlike the coarse "suitable / minor edits" judgments common in AI-item studies, the coding locates problems precisely: clarity of formulation passed at 85.19% and grammatical consistency at 92.59%, while jargon and unequal option length fell far below. Because unequal length lets students pick the longest option without knowing the content, that 48.15% is a test-wiseness risk, not a cosmetic one.

## What the Rasch analysis showed about measurement

The test was administered to 98 upper secondary students at the end of an electrochemistry unit, with identical item order for all; three were excluded for overall missing answers, leaving 95. Fit statistics support the internal structure without settling it: most items sat inside the accepted MNSQ band and residual correlations gave no clear sign of local dependence, but a residual principal component analysis found no interpretable grouping by intended level, so the authors call the evidence broadly supportive rather than definitive proof of unidimensionality.

The reliability split matters more for practice than the fit statistics. A .91 item reliability means the difficulty hierarchy is stable and the sample sufficed to locate items; a .66 person reliability means the test separates individual students poorly. That is not a targeting failure — the 0.039-logit difference between mean person ability and mean item difficulty is closely aligned — but a distribution problem: the item pool left local gaps where several students sat with no nearby item. Distractor analysis adds a second signal. Twelve options attracted under 5% of responses and added little diagnostic information, while Items 9 and 27 had distractors that outdrew the key (corrected correlations of −.18 and −.25), which the authors read as productive difficulty rather than malfunction.

## Why competence-level alignment failed

Scale anchoring converts person abilities to a scale of 300 to 700 (M = 495.64, SD = 83.36), forms three ability groups across 375–425, 475–525 and 575–625 (N = 10, 19 and 11), and classifies each item by the share of each group solving it. Applied here, it placed items in empirical groups that only partly resembled the levels GPT-4 had been asked to target. Level I items were a priori 1, 4, 7, 10, 13, 16, 19, 22 and 25; the empirical Level I set was 1, 11, 14 and 19. Item 13, written as Level I, landed in Group III, and seven items met no classification criterion at all.

The authors are careful about what this means. Cognitive demand and empirical difficulty are conceptually distinct, so a mismatch does not prove the items were mislabelled — difficulty also responds to representation demands, contextualization and [[misconceptions|prevalent misconceptions]]. The design cannot attribute the gap to GPT-4, the prompting, the item format, the curriculum's level definitions or the sample; it belongs to the AI-assisted development process as a whole. What it does establish is that a level label assigned at generation time is a hypothesis, and that measurement evidence has to decide whether it holds. That is the sense in which the paper is about [[psychometrically-aware-ai|psychometrically aware AI]]: the model can draft, but only student response data can calibrate.

## What this means for practice

- **Instructors writing items with an LLM.** Prompt for the constraints the model neglected: a target reading level, definitions for key terms, concise stems and options, and an explicit rule that the key must not be longer than the distractors. This model met those criteria at only 33.33% and 48.15% respectively.
- **Assessment designers.** Budget a human review pass for the errors that survived generation (3 spelling mistakes and 6 syntax errors across 27 items) and inspect every distractor chosen by under 5% of students, since 12 such options across 10 items contributed little discrimination.
- **Department leads and administrators.** Treat a generated test as an initial draft: the authors conclude AI items can serve early stages of defensible construction only with expert review and model-based screening before consequential use.
- **Researchers and test developers.** Run a short Rasch pilot before trusting a generated instrument: infit and outfit screen misfitting items, the Wright Map locates gaps where items are needed, distractor correlations flag non-functioning options, and scale anchoring tests whether intended levels exist in the data. Here that check returned 25.93% exact agreement, the number to carry into any claim that an AI-written item "assesses application."

## Limitations

- The study covers one topic, electrochemistry, bounding generalizability; the authors defend it as a stringent test of language demands but call for replication in STEM topics with different representational and contextual requirements.
- The sample was modest: 95 students, split into anchoring groups of 10, 19 and 11, which produced gaps along the ability continuum and made level assignments sensitive to items near cut points.
- The instrument reflects an AI-assisted process combining GPT-4 with researcher prompt optimization, not an assessment of GPT-4 operating without human guidance.
- Only GPT-4 was tested, and the authors note that newer models, particularly o1-preview and GPT-5, showed greater accuracy and consistency in related chemistry work — evidence about solving items, not about generating them.
- Scale anchoring treats competence levels as if they mapped directly onto item difficulty, although items at the same nominal level can vary in difficulty with representation demands, contextualization and misconceptions.
- The conditional bootstrap held the Rasch calibration, group boundaries and group membership fixed, so it captured sampling variation within the three groups but not uncertainty in estimating person abilities or assigning participants to groups; age and gender were not assessed.

## Citation

Rodemer, M., Franke, J., & Feldon, D. (2026). [*Good questions, sound measurement? Item-writing quality, psychometric functioning, and competence-level alignment of AI-generated multiple-choice assessments in chemistry education*](https://doi.org/10.3389/feduc.2026.1939585). *Frontiers in Education, 11*, 1939585. https://doi.org/10.3389/feduc.2026.1939585
