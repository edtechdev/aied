---
title: "Scandinavian teachers' attitudes toward generative artificial intelligence: Exploration of associations"
created: "2026-11-09T09:35:00-05:00"
updated: "2026-11-09T09:35:00-05:00"
type: article
page_kind: [evaluation]
research_method: [secondary analysis]
evidence_context: educational
level: [secondary, primary education]
audience: [instructors, administrators, faculty developers, researchers]
sources: ['raw/papers/white-scandinavian-teachers-genai-attitudes-2026.md']
source_url: "https://osf.io/preprints/edarxiv/72vry_v1/"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-09"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [teacher-ai-competency, teacher-role, educational-development]
pedagogy: [professional-training]
methods: [quantitative-research]
institutions: [educational-policy-ai]
---

> **Synthesis:** Scandinavian teachers answered the TALIS 2024 module on [[generative-ai|generative AI]] with uncertainty rather than a verdict. Asked whether the technology helps with lesson planning, differentiation, individual support, and administrative work, and whether it enables misrepresentation, bad recommendations, bias, privacy loss, and unsuitable pedagogy, large shares answered "I don't know" to both halves. White and colleagues use the 455 Norwegian, 818 Danish, and 886 Swedish lower-secondary teachers who received the GenAI form — 386, 728, and 751 respectively in the regression models after listwise deletion — and find that the two strongest correlates of settled attitudes are personal use in the last 12 months and GenAI-related [[professional-training|professional development]]. Users sit 0.72 SD higher on agreement with benefits and 0.26 SD lower on uncertainty about them; PD recipients sit 0.20 SD higher on benefits. Concerns do not fall in step. Users agree with the concern statements more often than non-users, and women and master's-degree holders agree more with concerns without agreeing more with benefits — experience buys clarity, not optimism.

## Key Findings

1. **Uncertainty, not rejection, is the modal answer.** Large shares of teachers answered "I don't know" to both the benefit and the concern statements, so the ten items behave as separate judgments rather than as one positive-to-negative scale.
2. **Personal use is the largest correlate of settled views.** Teachers who had used GenAI in the last 12 months were 0.72 SD higher on agreement with benefits and 0.26 SD lower on uncertainty about benefits, and 0.18 SD lower on uncertainty about concerns.
3. **GenAI-related professional development does part of the same work.** Recipients were 0.20 SD higher on agreement with benefits and 0.08 SD lower on uncertainty about concerns, with no statistically significant difference in concern agreement.
4. **Use does not dissolve concern.** GenAI users agreed with the concern statements more often than non-users; statement by statement, they more often agreed that GenAI lets students misrepresent others' work and makes recommendations that may not be appropriate or correct.
5. **Women and master's-degree holders lean toward concern.** Women were 0.25 SD higher on concern agreement; teachers with a master's degree were 0.16 SD higher on concerns and 0.16 SD lower on benefits.
6. **The least experienced teachers are the most favorable.** Teachers with five years of experience or fewer were 0.25 SD higher on benefits, 0.29 SD lower on concerns, and 0.13 SD lower on uncertainty about benefits.
7. **Collaboration type tracks valence.** Professional collaboration in lessons was associated with more benefit agreement (Beta = 0.09) and exchange of information and ideas with more concern agreement (Beta = 0.11), effects the authors call small in magnitude.

## What TALIS 2024 measured

TALIS 2024 put a GenAI module to lower-secondary teachers, and the module appeared on only one of three survey forms, so about a third of each country's teachers saw it: 455 in Norway, 818 in Denmark, and 886 in Sweden. Ten agreement statements followed a plain definition of AI. Five described benefits (planning, adapting materials to different abilities, individual support, students with specific needs, administration) and five described concerns (misrepresentation, inappropriate recommendations, amplified bias, privacy, unsuitable pedagogy). Respondents could also answer "I don't know," and that option is the study's main object. The authors build composites for the percentage of "I don't know" answers within each valence, and separate composites for agreement after recoding to a one-to-four scale and treating "I don't know" as missing. Read through a [[technology-acceptance-model|technology acceptance]] lens, these are the appraisals that precede use. Regressions are weighted with the survey package in R 4.6.1 and fit as single-level models after initial checks found little systematic variation across schools.

## Use, training, and the concern that does not fade

Teachers who use GenAI and teachers who have had related training are the two groups whose answers look decided. Both report fewer "I don't know" responses and more agreement that GenAI helps with planning, differentiation, individual support, and administration. The pattern holds across the three countries, and being a user is the largest coefficient in the models: 0.72 SD on benefit agreement, against roughly 0.20 SD for professional development. The authors are careful about direction. Teachers with settled views may be the ones who try the tool; trying the tool may equally settle views; they judge that both processes are probably at work. What use does not do is reduce concern. Users agree with the concern statements more often than non-users, and the statement-level analysis shows this is not diffuse caution: users more often agree that students can misrepresent others' work and that the tool makes inappropriate recommendations, while agreeing less that it threatens student privacy or pushes unsuitable pedagogy. The authors set this alongside [[teacher-ai-competency|GenAI literacy]] research, and note that under the wide [[teacher-role|autonomy]] Scandinavian teachers hold, how they read these tools governs whether the tools reach students at all.

## Who is uncertain, and which collaboration counts

Uncertainty is not evenly spread. Women report more "I don't know" on both valences and agree more with concerns; teachers with a master's degree show the same tilt toward concerns and away from benefits. The authors raise the possibility that women are simply more willing to choose "I don't know" on surveys, and state that the data cannot separate response style from substance. Teachers with five years or fewer run the other way, endorsing benefits and rejecting concerns — but experience is entangled with age, so the association resists a clean reading. [[collaborative-learning|Collaboration]] splits by intensity. Exchanging ideas with colleagues, the peripheral form, went with more concern agreement (Beta = 0.11); team teaching and collaboration inside lessons went with more benefit agreement (Beta = 0.09). The authors' hypothesis is that loose exchange becomes a venting channel while intensive collaboration lets teachers watch the tool work with students. Digital [[self-efficacy|self-efficacy]], measured with a single general item, predicted neither outcome, which the authors attribute to the item not being about GenAI.

## What this means for practice

- **Instructors.** Try the tool on a task you already do well, and expect your concerns to sharpen rather than soften: the teachers reporting the most use also agreed most that students can pass off AI work. Use is the strongest correlate of a settled view, so a considered trial beats waiting for a verdict.
- **Administrators.** Fund GenAI professional development as an attitude intervention, not only a skills one — recipients were more likely to see benefits and less likely to answer "I don't know". Expect concern to persist alongside adoption and plan for it instead of reading it as resistance.
- **Faculty developers.** Build the intensive form of collaboration the models favor — co-teaching, observing a lesson where the tool is in use — rather than depending on staffroom exchange, which tracked with more concern agreement here.
- **Researchers.** Model "I don't know" as an outcome in its own right, and test the ordering with longitudinal data: cross-sectional TALIS cannot tell whether settled teachers adopt or adoption settles teachers. The items feed [[educational-policy-ai|policy]] comparisons, so this is the uncertainty systems are planning around.

## Limitations

- The GenAI items appeared on one of three randomly assigned TALIS forms, leaving 455 Norwegian, 818 Danish, and 886 Swedish respondents, and 386, 728, and 751 in the regression models after listwise deletion.
- The Norwegian sample had a relatively low response rate (39%), which the authors flag as a greater risk of bias even though Norwegian researchers report no evidence of bias in it.
- Self-efficacy was measured by a single item about general skill with digital resources, not about GenAI, which the authors say may explain the null findings for that construct.
- All results rest on cross-sectional self-report data: a single snapshot that assumes teachers understood the questions as intended.
- The ten statements are agreement items aggregated into composites the authors explicitly decline to call scales, and no GenAI product, platform, or model version is named anywhere in the survey.
- Planned multilevel models were abandoned because initial analyses showed little systematic variation in attitudes or GenAI use across schools.

## Citation

White, M., Rohatgi, A., Eriksen, H., & Steinman, K. (2026). [*Scandinavian teachers' attitudes toward generative artificial intelligence: Exploration of associations*](https://osf.io/preprints/edarxiv/72vry_v1/). EdArXiv preprint. https://doi.org/10.35542/osf.io/72vry_v1
