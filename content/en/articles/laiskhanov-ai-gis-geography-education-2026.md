---
title: "Ready but Untrained: Geography Students' Self-Reported Readiness for AI-GIS Integration in Kazakhstan"
created: "2026-11-04T16:20:00-05:00"
updated: "2026-11-04T16:20:00-05:00"
type: article
sources: ['raw/papers/laiskhanov-ai-gis-geography-education-2026.md']
confidence: high
page_kind: [evaluation, framework]
research_method: [survey]
discipline: [stem education, environmental education]
level: [higher ed, undergraduate, graduate]
audience: [instructors, curriculum designers, faculty developers, researchers]
technology: [generative-ai, llm, personalized-learning]
assessment: [self-report-measures]
pedagogy: [project-based-learning, problem-based-learning, inquiry-based-learning]
methods: [quantitative-research]
ethics: [hallucination-risk, bias-mitigation, privacy]
foundations: [ai-literacy, tpack, teacher-ai-competency, curriculum-design]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A cross-sectional survey of 100 geography students at al-Farabi Kazakh National University found that 67% called themselves ready to use [[ai-technologies|AI]] and GIS together in lessons — 12% fully ready, 55% ready only with further training. Familiarity ran well ahead of capability: 68% knew AI well against 26% for GIS and 8% for GeoAI, and 99% had used ChatGPT or a similar tool, yet 6% had ever applied the combination in teaching practice. The paper's five-component model is built from these self-reports and has not been tested.

## Key Findings

1. The sample was 100 [[higher-ed|university]] geography students — 63% female, 91% aged 20–29, 79% bachelor's (11% first year, 27% second, 15% third, 26% fourth), 13% master's and 8% doctoral — surveyed online in May–June 2026, all taught in Kazakh.
2. Reported AI familiarity was high (68% extremely, 30% moderately, 2% slightly familiar), GIS familiarity moderate (26% extremely, 52% moderately, 22% slightly) and GeoAI knowledge thin: 8% very familiar, 19% somewhat familiar, 36% had heard the term, 37% never had.
3. Readiness to use AI-GIS as a future teacher split four ways: 12% fully ready, 55% ready but needing more training, 28% expecting difficulty, 5% seeing no need — the 67% figure the paper reports.
4. Tool use was broad but shallow. ChatGPT, Gemini or Claude had been used by 99%, alternative [[generative-ai|generative AI]] tools by 35%, Copilot by 26% and Midjourney or DALL-E by 14%; ArcGIS led GIS platforms at 66%, ahead of QGIS (33%), Google Earth (30%), ArcGIS Online (14%) and Sentinel Hub (13%), and 15% had used none.
5. Readiness correlated with GIS familiarity (*ρ* = 0.508), GIS proficiency (*ρ* = 0.472) and GeoAI knowledge (*ρ* = 0.425), all *p* < 0.001, but not with AI familiarity (*ρ* = 0.071, *p* = 0.485) or computer literacy (*ρ* = 0.093, *p* = 0.355). H1 was rejected; H3 (*ρ* = 0.468) and H4 (*ρ* = 0.478) were supported; H2 was treated as a descriptive expectation rather than tested.
6. Readiness differed by level of study, *χ*²(3) = 24.56, *p* < 0.001, confirmed by a Monte Carlo permutation test with 20,000 permutations. Among bachelor's students 3 of 79 (4%) were fully ready and 47 (59%) wanted more training; among master's and doctoral students 9 of 21 (43%) were fully ready. Gender made no difference, *χ*²(2) = 1.403, *p* = 0.496.
7. Practice lagged far behind intention. Only 6% had actively used AI-GIS during teaching practice and 31% partially, while 41% had not yet done practice and 22% had no opportunity. Just 3% could build an AI-GIS lesson plan independently, 37% could with support, 37% only with difficulty and 23% could not. Eighteen percent understood how to combine AI-GIS with project-based, problem-based, case and interdisciplinary teaching; 56% understood partially and 26% not at all.
8. Ethical awareness was the weakest area. Sixty-seven percent were not familiar with algorithmic bias (4% very, 14% somewhat, 15% had heard of it); for data-privacy risk the figures were 13%, 24%, 29% and 34%. Even so, 88% said AI-GIS integration improves or significantly improves lesson quality, 89% rated the knowledge important for a future geography teacher and 78% said teachers must critically evaluate AI outputs. Only 43% judged the university's instruction in these technologies adequate, 47% partial and 10% inadequate.
9. The seven-item index reached Cronbach's *α* = 0.78 with corrected item-total correlations of 0.28 to 0.72, but principal component analysis extracted two components (eigenvalues 3.08 and 1.35, explaining 44.0% and 19.4%), so the authors read it as a general indicator with two aspects rather than one construct. A sensitivity analysis excluding two respondents who had not confirmed consent (n = 98) gave *α* = 0.78 and *χ*²(3) = 23.80.

## What the study measured, and what it did not

The design is a single-institution, cross-sectional online questionnaire with convenience sampling. There was no comparison group, no pre-test and post-test, no classroom observation and no measure of what students learned. Item Q16 asked students to recall whether they had used AI-GIS in practice, and item Q19 asked whether they believed integration improves lesson quality. Both are [[self-report-measures|self-reports]] of perception and recollection, and the authors say so explicitly.

The instrument was written by the authors from the literature and the Intelligent-TPACK and TPACK-Place-AI frameworks. It was not adapted from a validated scale, and no expert validation or pilot testing was carried out — a limitation the paper states rather than conceals. The 27 closed items analyzed here sit in three blocks: social and intellectual characteristics (Q1–Q10), experience and integration (Q11–Q20), and professional needs and ethics (Q21–Q27). Three open-ended items, Q28–Q30, are reported separately and are not part of this article.

That combination bounds the claim sharply. A 67% readiness figure from one university describes what these 100 students say about themselves. It does not show that a training program works, that AI-GIS raises achievement, or that readiness predicts classroom behavior. The paper is candid on this point: its model is "informed by" the survey and "has not yet been tested empirically," and the authors call for a quasi-experimental or experimental implementation as the next step.

## Why GIS skill, not AI familiarity, tracked readiness

The most useful result is the near-zero correlation between general AI familiarity and readiness, *ρ* = 0.071. Students who knew AI well were no more likely to say they would teach with it. The authors offer an explanation they did not test: with 99% of the sample already using generative tools, AI familiarity has almost no variance left to explain, while GIS proficiency varies widely and sits closer to the task named in the readiness question.

That reading is consistent with the rest of the correlation matrix. GIS familiarity and GIS proficiency were the strongest pair (*ρ* = 0.650), GeoAI knowledge tracked both, and readiness tracked the GIS-side variables at roughly 0.42 to 0.51. If the explanation holds, "AI literacy" as generic tool familiarity is the wrong target for [[teacher-education|geography teacher preparation]]; the binding constraint is spatial-analytical competence with the software and data.

It also fits the [[tpack|TPACK]] tradition the paper builds on. [[teacher-ai-competency|Teacher AI competency]] here is not knowledge about AI in the abstract but the intersection of tool, subject matter and pedagogy — knowing how to make a GIS layer or a satellite image do instructional work. The [[personalized-learning|personalization]] promise that dominates vendor messaging barely appears; students report needing methodological support for lesson design.

## Confidence without competence

Sixty-seven percent had never encountered algorithmic bias, while 88% expected quality gains from integration and 78% endorsed critical evaluation of AI outputs. Beliefs run ahead of skills, and that is the paper's real finding. Thirty-three percent say AI-generated geographical content always requires verification, yet 2% call it always accurate and 25% mostly accurate.

The practice items show the same gap from the other side. Six percent active use, 3% independent lesson planning, 18% full understanding of how AI-GIS fits established methods. The authors read this through Ertmer's first- and second-order barriers: students recognize the technology, but have not built the pedagogical confidence or the experience of using it in a lesson. Their proposed remedy is a five-component model — content, technological, methodological, integrative and competency — with feedback and assessment blocks added as proposals.

Read carefully, that model is a design argument, not a validated intervention. Each measured component maps to survey items, and the strongest evidence behind it is a correlation of 0.468 and a chi-square of 24.56; the feedback and assessment blocks were never measured at all. Its value is as an organizing scheme for a training program, which is what "informed by survey data" means.

## What this means for practice

- **Geography teacher educators.** Teach GIS seriously before teaching GeoAI. Readiness in this sample moved with GIS proficiency and GeoAI knowledge, not with familiarity with chatbots, so a course that adds an AI module to an unchanged GIS sequence is unlikely to shift students' capacity to plan lessons.
- **Program designers.** Build the ethics unit around algorithmic bias, not around a general warning. Two-thirds of students had never encountered the concept, and bias in a map or a spatial analysis is exactly the failure mode their future work will meet.
- **Practicum coordinators.** Give students a real occasion to use the tools. Forty-one percent had not yet done teaching practice and another 22% had no opportunity to use AI-GIS during it; the 6% who used it actively are the only ones with anything like experience to draw on.
- **[[curriculum-design|Curriculum]] committees.** Differentiate by level. Bachelor's students mostly want foundational training (59% asked for more knowledge), while 43% of master's and doctoral students already felt fully ready — one uniform course serves neither group well.
- **Researchers.** Treat readiness surveys as scoping work, not as evidence of effect. The instrument here is unvalidated and two-dimensional, and the field still lacks the quasi-experimental test the authors themselves request.

## Limitations

- Single institution and convenience sample of 100 students at one Kazakh university, surveyed once: no control group, no pre-post comparison and no learning-outcome measure, so every construct is self-reported perception.
- The questionnaire was author-written, with no expert validation, pilot testing or confirmatory factor analysis; the seven-item index is not unidimensional and its two-factor structure is only exploratory.
- The proposed five-component model has not been implemented or evaluated, and two of its blocks (feedback and assessment) were never measured.
- Nearly all respondents were instructed in Kazakh and 91% were aged 20–29, leaving language of instruction and older learners unexamined; 41% had not yet completed teaching practice, which limits what the practice items can show.
- Three open-ended items (Q28–Q30) are reported separately, so the quantitative picture has no qualitative triangulation, and perceived usefulness and institutional support — established readiness drivers — were not measured.

## Citation

Laiskhanov, S., Tabyldina, A., Abdulla, A., Kalimurzina, A., Orynbek, B., & Bisheyeva, B. (2026). [A model for enhancing the quality of geography education based on the integration of Artificial Intelligence and Geographic Information Systems](https://doi.org/10.3389/feduc.2026.1990735). *Frontiers in Education, 11*, 1990735.
