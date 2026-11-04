---
title: "Trusting AI too much? Psychological correlates of overtrust and the role of AI literacy"
created: "2026-11-01T09:08:37-05:00"
updated: "2026-11-02T06:45:00-05:00"
type: article
sources: ['raw/papers/kim-overtrust-ai-literacy-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [survey]
discipline: [learning sciences]
level: [higher ed]
audience: [instructors, curriculum designers, researchers]
technology: [generative-ai, llm, technology-acceptance-model]
foundations: [ai-literacy, cognitive-offloading, critical-thinking]
pedagogy: [motivation, self-efficacy, self-determination-theory]
assessment: [self-report-measures]
methods: [quantitative-research]
ethics: [trust, trust-calibration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A survey of 300 South Korean university students found that the learners most likely to overtrust ChatGPT were not the uncertain ones. [[self-efficacy|Academic self-efficacy]] and [[motivation|intrinsic motivation]] both predicted higher overtrust, contrary to the authors' hypotheses. [[ai-literacy|AI literacy]] correlated with overtrust at r = 0.051, which is close to nothing, yet inside a serial mediation model it carried a negative association once performance expectancy was held constant. High expectations combined with high literacy predicted lower overtrust across all three traits.

## Key Findings

1. The sample was 300 students at South Korean universities, surveyed online in March 2025 through Embrain, all with prior ChatGPT use for academic work. Half were men and half women; 79.3% were undergraduates, 11.7% master's students and 9.0% doctoral students; 58% were aged 19 to 24. Engineering supplied 30.3%, social sciences 22.7%, humanities 18.0%.
2. Academic self-efficacy was four items from Nielsen et al. (alpha = 0.79) and motivation three items each from the MSLQ's intrinsic and extrinsic goal orientation subscales (alpha = 0.75 and 0.58). Performance expectancy was three items adapted from [[technology-acceptance-model|UTAUT]] (alpha = 0.82), AI literacy nine spanning [[critical-thinking|critical thinking]], operation skill and [[ethics]] (alpha = 0.77), and overtrust three (alpha = 0.85), all rated 1 to 5.
3. Overtrust correlated positively with academic self-efficacy (r = 0.230), intrinsic motivation (r = 0.224), extrinsic motivation (r = 0.315) and performance expectancy (r = 0.360), and not with AI literacy (r = 0.051). Mean overtrust was 3.16 (SD 0.90), performance expectancy 4.07 and AI literacy 4.01.
4. In the models, academic self-efficacy (B = 0.3901, 95% CI [0.2190, 0.5612]), [[motivation|intrinsic motivation]] (B = 0.2300, 95% CI [0.1083, 0.3517]) and extrinsic motivation (B = 0.3187, 95% CI [0.1713, 0.4661]) each predicted higher overtrust. The self-efficacy and intrinsic-motivation results reversed the hypothesized direction; the extrinsic result confirmed it.
5. The serial model ran predictor to performance expectancy to AI literacy to overtrust (PROCESS Model 6). Performance expectancy predicted overtrust at B = 0.6107 and AI literacy negatively at B = -0.5323 in the self-efficacy model. The expectancy-only indirect path was positive for all three predictors: 0.1355 [0.0542, 0.2330], 0.0708 [0.0136, 0.1343] and 0.1499 [0.0788, 0.2292].
6. The literacy-only indirect path was negative for self-efficacy (-0.1542, 95% CI [-0.2439, -0.0740]) and intrinsic motivation (-0.0301, 95% CI [-0.0698, -0.0034]) but not for extrinsic motivation (-0.0103, 95% CI [-0.0454, 0.0197]). The full serial path was negative for all three: -0.0317 [-0.0609, -0.0105], -0.0135 [-0.0318, -0.0013] and -0.0287 [-0.0614, -0.0049].
7. For self-efficacy the direct effect (0.3901) exceeded the total effect (0.3397, 95% CI [0.1760, 0.5034]) while the total indirect effect was not significant (-0.0504, 95% CI [-0.1571, 0.0619]). The authors read this as suppression: AI literacy offsets rather than carries the positive association.
8. Their conclusion: overtrust is not confined to learners who look psychologically at risk. AI literacy education should therefore be psychologically differentiated rather than remedial, and should stress critical and ethical reasoning rather than operational proficiency.

## How the study was built

Recruitment ran through Embrain, a Korean survey panel, with institutional review board approval secured beforehand. Eligibility required current enrollment at a South Korean university and prior ChatGPT use for academic work, and the sample spans undergraduate through doctoral study rather than one course or one major. Students answered a single online questionnaire; there was no task, no log and no observation of what anyone did with a model.

The three predictor scales describe general academic dispositions, while performance expectancy, AI literacy and overtrust were written to refer explicitly to ChatGPT. Overtrust was operationalized as comparative judgment: the three items ask whether ChatGPT makes more accurate judgments than human teachers, whether its information is trusted more than teachers' information, and whether its advice is more reliable than teachers' advice. That is a claim about relative epistemic authority, not a count of unverified acceptances.

The model is PROCESS macro version 4.2, Model 6, with performance expectancy placed before AI literacy. The ordering is argued rather than tested: the authors reason that expectations about usefulness shape the motivation to evaluate a tool critically, while conceding that operational competence could run the other way. Indirect effects use 5,000 bootstrap samples and bias-corrected 95% confidence intervals, with significance read as an interval excluding zero. Each predictor was modeled separately, with no demographic or usage covariates in the main models; a sensitivity analysis adding age, sex, degree level, major and usage frequency left the three direct effects in the same direction. The design cannot establish that any of this is a sequence: a single administration fixes no temporal order, and the paper says so more than once.

## The confident and the curious trusted the tool more, not less

Both reversed hypotheses point the same way. The automation-bias literature predicts that people who doubt their own judgment lean on a machine, so low [[self-efficacy]] should mean high overtrust. Here the sign flipped. Their explanation: [[generative-ai|generative AI]] rewards active use: confident students adopt the tool earlier and accumulate positive experiences that raise their estimate of what it can do. Extrinsic motivation fit the original prediction and was numerically the strongest of the three (0.3187 against 0.2300), which fits an efficiency story rather than a curiosity one.

Confidence does not arrive at the tool as a guard against credulity; it arrives as a warrant. A student who believes in their own academic competence may read a fluent answer as confirmation of their judgment rather than as a claim to be checked, which is [[cognitive-offloading]] dressed as mastery. The authors also note, tentatively, that peer use and conformity pressure in the Korean context may push the same way. Either reading makes the well-motivated learner a calibration target, not a natural skeptic.

## AI literacy's association was invisible until performance expectancy was held constant

The correlation table says literacy and overtrust are unrelated (r = 0.051). The model says literacy predicts overtrust at B = -0.5323. Both are in the paper, and the reconciliation is the most transferable idea in it. Performance expectancy correlates 0.457 with literacy and 0.360 with overtrust, so at zero order the two strands cancel: students who think AI is useful know more about it and trust it more, and the literacy signal disappears into that shared variance. Hold expectancy constant, and the evaluative part of literacy shows up as a brake.

That makes AI literacy a suppressor rather than a mediator, a distinction the authors draw explicitly. The practical consequence is uncomfortable: a cohort can post a healthy [[ai-literacy]] mean (4.01 here, on a 5-point scale) and still be miscalibrated, because the students who score high also expect a great deal from the tool. The composite also hides which subcomponent works. Nine items cover critical thinking, ethics and operation skill, and the paper cannot say which carries the negative path; the authors suspect the evaluative items.

## The overtrust items ask students to rank ChatGPT against their teachers

Every construct here is a [[self-report-measures|self-report]] score, and overtrust least of all reads as behavior. The items ask for a comparison with human instructional judgment, which is a stance a student can hold without ever having skipped a verification step. A learner who checks every citation but still thinks the model explains thermodynamics better than their lecturer would score high. The measure catches [[trust]] misaligned in the abstract, not [[trust-calibration]] in the act.

A behavioral measure would have shown whether students accepted wrong answers, and none was collected; the authors list logs and judgment-error tasks as the next step. What the instrument does capture well is the thing institutions worry about, namely whether students have promoted a [[conversational-ai|chatbot]] to epistemic authority over their teachers. On that reading the null bivariate result is less surprising: holding an attitude about AI's comparative authority and knowing how to evaluate AI output are different competencies, and only the second one is taught.

## What this means for practice

- **Instructors and academic-support staff.** Aim calibration work at confident, high-expectancy users, not at the anxious ones. The paper's own suggestions are concrete: have students compare model output against verified sources, deliberately expose them to errors and [[hallucination-risk|hallucinations]], and require an analytic review before accepting an answer. A workshop pitched at students who fear AI misses the group with the highest overtrust scores.
- **AI literacy curriculum designers.** Weight the critical and ethical dimensions over operational skill. The authors argue that existing frameworks, by teaching efficient use, may raise performance expectancy without raising scrutiny, and that a curriculum organized around "use it well" can feed the pathway that predicts overtrust. Pair any efficiency training with explicit instruction on limits, bias and uncertainty.
- **Researchers.** Do not screen for overtrust with a literacy correlation. At zero order the association was 0.051; inside a model controlling performance expectancy it was -0.5323. Any study that measures literacy and overtrust without expectancy will report a null and conclude that literacy does not matter, which is the opposite of what this model implies.

## Limitations

- One country and one recruitment channel: 300 students at South Korean universities, drawn from a single online panel in March 2025, so the cultural and institutional reading of AI use is not tested against any other setting.
- Every construct is self-report, taken once. Social desirability and common-method variance are uncontrolled, and no usage log or task performance anchors the overtrust scores.
- The mediation is a model, not a mechanism. The authors state that the sequence was theoretically specified rather than empirically established, so it demonstrates no temporal precedence and no causal mediation.
- The extrinsic motivation scale is weak (alpha = 0.58), and convergent validity fell below threshold for extrinsic motivation and two AI literacy subcomponents (AVE = 0.34, 0.39 and 0.37). Discriminant validity was never formally tested.
- Table 8's labels for the extrinsic-motivation indirect paths appear transposed: the label on -0.0103 is the serial path while the text calls it the literacy-only path, and the reverse holds for -0.0287. Read the text, not the row labels.
- The paper is an Article in Press. The wording, table numbering and any figure may change when the edited version replaces it, so quotations here should be rechecked against the version of record.

## Citation

Kim, Y., Kim, J. H., & Zhang, S. (2026). [Trusting AI too much? Psychological correlates of overtrust and the role of AI literacy](https://doi.org/10.1186/s40359-026-05797-4). *BMC Psychology*. Article in press; no volume, issue or page numbers have been assigned yet.
