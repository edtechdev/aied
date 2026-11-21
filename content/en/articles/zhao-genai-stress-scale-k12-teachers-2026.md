---
title: "Development and Initial Validation of the GenAI Stress Scale for Chinese K-12 Teachers (T-GenAISS)"
created: "2026-11-21T14:15:00-05:00"
updated: "2026-11-21T14:15:00-05:00"
type: article
published: "2026"
discipline: [teacher education]
foundations: [ai-literacy, teacher-role, educational-development]
pedagogy: [anxiety-and-stress, self-efficacy, well-being, professional-training]
technology: [generative-ai, llm]
assessment: [educational-measurement, self-report-measures, assessment-validity]
ethics: [privacy, ethics, equity-in-ai-education]
methods: [quantitative-research]
research_method: [instrument development, survey, structural equation modeling]
audience: [researchers, faculty developers, administrators, assessment designers]
level: [k 12, secondary, primary education]
page_kind: [evaluation]
sources: ['raw/papers/zhao-genai-stress-scale-k12-teachers-2026.md']
confidence: medium
evidence_context: educational
source_depth: full text
source_url: "https://doi.org/10.3390/educsci16111959"
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-21"
    agent: hermes-agent
connected_concepts: [anxiety-and-stress, assessment, generative-ai, k-12, self-report-measures, well-being]
connected_articles: []
---

> **Synthesis:** Zhao, Li, Fang, and Long develop and initially validate a seven-dimension [[generative-ai|GenAI]] stress scale for [[k-12|K-12]] teachers, drawing on a transactional stress-appraisal definition in which GenAI stress is teachers' appraisal that GenAI-related demands exceed their resources or threaten valued goals. From an initial pool of 65 items covering eleven components, exploratory analysis on half of 612 ATS-affiliated pre-service and in-service teachers yielded 33 items in seven dimensions — [[privacy|Privacy Violation]], Job Replacement, Professional Development, [[ethics|Against Ethics]], Lack of Transparency, Technological Dependence, and Bias Behavior — with high internal consistency. Confirmatory analysis on the other half reproduced the structure only after eight post-hoc residual covariances were added, and two fit indices, one dimension's variance-extracted value, and four discriminant-validity comparisons failed their own thresholds. Reported stress sat slightly above the scale midpoint, with Lack of Transparency endorsed most strongly and Job Replacement least, though the authors decline to infer professional confidence from that ordering. The study is empirical but reports evidence as initial rather than as a validated instrument, and states plainly that diagnostic or evaluative use awaits independent replication.

## Key Findings

- A 33-item, seven-dimension scale emerged from a 65-item pool, with high internal consistency overall and subscale values ranging from adequate to strong.
- The seven dimensions are Lack of Transparency, Professional Development, Job Replacement, Bias Behavior, Against Ethics, Privacy Violation, and Technological Dependence; three dimensions originally proposed separately were merged into others.
- The unmodified seven-factor model fit the confirmation sample poorly, and acceptable fit was reached only after eight post-hoc residual covariances were specified, all within rather than across dimensions.
- Discriminant validity held under the heterotrait–monotrait criterion but failed the Fornell–Larcker criterion for four dimension pairs, most notably involving Job Replacement and the pairing of Against Ethics with Lack of Transparency.
- Overall reported stress was slightly above the scale midpoint, with Lack of Transparency endorsed most strongly and Job Replacement least; the authors decline to infer professional confidence or irreplaceability from that ordering.
- Pre-service teachers scored higher than in-service teachers on five dimensions, while no dimension differed by gender after multiplicity correction and none differed by educational background.

## Construct definition and item development

The authors define GenAI stress through the transactional model of stress and coping, as teachers' cognitive appraisals that GenAI-related demands and conditions in their professional work exceed their resources or threaten valued goals. Three boundaries follow. The construct sits at the appraisal stage rather than measuring stressors, so the items index perceived threat, harm, or loss rather than how often GenAI events occur. It is stimulus-bound, anchored to identifiable GenAI objects such as student data, generated content, and assessment processes, unlike the persistent, object-unspecific worry described by [[anxiety-and-stress|general AI anxiety]]. And because appraisal is cognitive-affective, the "I am concerned that..." wording is consistent with perceived-stress measurement, not with physiological or acute-response indicators, which the instrument does not include.

Item content did not come from scratch. The first pool drew substantially on the seven dimensions of AI anxiety proposed by earlier work, then re-specified them as appraisals situated in teachers' work and extended them with content following from pedagogical and ethical responsibilities. An expert panel of two faculty members and five graduate students reviewed every item for relevance, clarity, and appropriateness to the K-12 context, using a retain/revise/delete judgment, though no item-level or scale-level content validity index was computed. A pilot of 23 experienced teachers prompted two changes: replacing the abbreviation "GenAI" with the full Chinese term throughout, and rewording some items to avoid misinterpretation.

## Factor reduction and confirmation

Item analysis removed six items: one reverse-keyed item whose scores did not differ between the highest and lowest scoring groups, and five further reverse-keyed items with low correlations to the total score. The authors read that pattern as a reverse-wording method effect rather than a coding error and note a consequence: the final instrument is entirely positively keyed and cannot detect acquiescent responding.

Exploratory analysis on one randomly split half of the sample retained 33 items. Two originally proposed dimensions merged into one Professional Development factor, Existential Risk merged into Against Ethics, and Artificial Consciousness merged into Job Replacement. Each merger carries a substantive argument: learning to use GenAI is treated as the principal contemporary form of professional development rather than a separate activity; the existential risk items were judged to appraise unpredictable instructional risk rather than species-level survival; and displacement, epistemic overreach, and loss of control are read as three expressions of one appraisal of autonomous agency encroaching on professional jurisdiction.

Confirmation on the independent second half is where the evidence is mixed. The unmodified model fell short on nearly every index. Eight residual covariances were then specified within dimensions, concentrated in the job-replacement items, and the respecified model reached acceptable levels on most criteria but not on GFI and NFI. Composite reliability exceeded the conventional threshold for all seven dimensions, and variance extracted exceeded its criterion for six, with Job Replacement the exception; the authors treat that dimension as the least well-established of the seven. A second-order model, in which a general GenAI stress factor explains the covariation among dimensions, retained adequate fit with negligible loss, which they read as support for a shared higher-order construct rather than redundancy.

## Levels and group differences

Overall GenAI stress averaged slightly above the midpoint of the five-point scale, meaning respondents on average slightly agreed with the concern statements. Lack of Transparency was endorsed most strongly and Job Replacement least, the latter sitting just below the scale midpoint. The authors are explicit that these are descriptive comparisons within one sample, and that the ordering does not demonstrate a strong professional identity or a sense of being irreplaceable, because those constructs were not measured.

Pre-service teachers reported higher stress than in-service teachers on five of the seven dimensions, with small to moderate effect sizes, and all five differences survived correction for multiplicity. The comparison is exploratory, since measurement invariance across teacher type was not tested and the groups differ systematically in age, experience, and employment status. Gender differences favored lower male scores on two dimensions before correction but did not survive it, and scalar invariance across gender was supported on the baseline structure, making those comparisons interpretable as latent-mean differences. Teaching experience showed one corrected difference: less experienced groups scored higher on Privacy Violation than the most experienced group, a contrast rather than a mid-career peak. Educational background was unrelated to any dimension, though the authors caution that only five in-service teachers held an associate degree or lower while more than two thirds held a bachelor's degree, so the comparison could not detect anything short of a large effect.

## What this means for practice

- **Administrators.** Treat transparency as the leading concern if the dimension ordering replicates: helping teachers trace, monitor, and evaluate GenAI-mediated student work addresses the issue endorsed most strongly, ahead of displacement worries.
- **Faculty developers.** Prioritize support around opacity, privacy, and professional development demands when designing induction for GenAI-trained teachers, since those dimensions carry the heaviest reported appraisals.
- **Assessment designers.** Read the transparency items as a signal about [[assessment|assessment]] integrity: when the process of intellectual struggle is hidden, diagnosing learning gaps and judging authentic achievement become harder.
- **Researchers.** Use the 33-item scale for research with the stated caveats, and administer established technostress and AI-anxiety instruments alongside it to test whether it adds incremental variance.
- **Assessment professionals.** Treat dimension scores as screening indicators requiring corroboration rather than diagnoses; the authors state that local reliability and measurement invariance must be established before institutional use.

## Limitations

- No external criterion variables were measured, so convergent validity against established technostress, AI-anxiety, or teacher-stress instruments, and predictive validity for burnout, avoidance, [[well-being|well-being]], or GenAI use, remain untested; and because the analyses are cross-sectional and [[self-report-measures|self-reported]], no behavioral trace data accompany the appraisals.
- The confirmatory model required eight post-hoc residual covariances and was evaluated on the same data that motivated them, so its fit statistics are optimistic and independent replication is needed before the structure counts as confirmed.
- The reduction from 65 to 33 items involved raising the loading threshold during analysis and prioritizing some items within the same criterion, decisions that capitalize on sample-specific characteristics; extraction used principal component analysis with orthogonal rotation rather than a common-factor method with oblique rotation.
- The sample was drawn purposively from one professional learning community whose members had received GenAI training since 2023, and included 174 pre-service teachers, so the mean levels should be read as those of GenAI-trained, community-affiliated teachers rather than Chinese K-12 teachers generally.
- Job Replacement fell below the variance-extracted criterion and mixes displacement and autonomy-and-control content, while Technological Dependence rests on only two items, limiting content breadth and weakening identification.
- The instrument was translated into Chinese without blind back-translation, so cross-language equivalence is unestablished, and the data were collected before agentic tools became widely adopted, making the findings historically specific.

## Citation

Zhao, G., Li, L., Fang, Z., & Long, T. (2026). [Development and Initial Validation of the GenAI Stress Scale for Chinese K-12 Teachers (T-GenAISS)](https://doi.org/10.3390/educsci16111959). *Education Sciences, 16*(11), 1959.
