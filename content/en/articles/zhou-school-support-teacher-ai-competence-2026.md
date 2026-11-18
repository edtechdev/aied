---
title: "The relationship between school support and teachers' perceived AI teaching application competence: the mediating roles of psychological and cognitive factors and the moderating role of practical experience"
created: "2026-11-18T09:55:00-05:00"
updated: "2026-11-18T09:55:00-05:00"
type: article
technology: [generative-ai]
methods: [quantitative-research]
foundations: [teacher-ai-competency, ai-literacy]
sources: ['raw/papers/zhou-school-support-teacher-ai-competence-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1997903"
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [survey, structural equation modeling]
discipline: [teacher education]
level: [k 12]
audience: [administrators, faculty developers, policymakers]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-18"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Zhou, Xie and Chen (2026) surveyed 782 primary and secondary teachers across 16 Chinese schools and modeled [[teacher-ai-competency|perceived AI teaching application competence]] with partial least squares structural equation modeling. Perceived school support had no significant direct association with competence (β = −0.013), but it worked entirely through four mediators: AI-TPACK (indirect effect 0.204), [[self-efficacy|self-efficacy]], psychological resilience and [[anxiety-and-stress|AI anxiety]]. The strongest direct predictor of competence was AI-TPACK (β = 0.372), followed by self-efficacy (0.308) and practical experience (0.258), while AI anxiety was negative (−0.111). Practical experience also moderated the model: the self-efficacy path to competence was non-significant at low experience (β = −0.013) and significant at mean and high experience, and the full model explained 72.0% of the variance in competence.

## Key Findings

- **Support operated indirectly, not directly.** The direct school-support path to perceived competence was non-significant; every association ran through psychological or cognitive mediators.
- **AI-TPACK was the dominant channel.** School support predicted AI-TPACK strongly, and the support-to-competence indirect effect through AI-TPACK was the largest of the six indirect paths.
- **Knowledge and confidence beat anxiety.** AI-TPACK and self-efficacy were the strongest positive predictors of perceived competence, while AI anxiety was negative.
- **Experience mattered on its own and as a moderator.** Practical experience predicted competence directly and strengthened both the AI-TPACK and self-efficacy paths.
- **Self-efficacy only paid off with experience.** At low practical experience the self-efficacy path to competence was non-significant; at mean and high experience it was positive and significant.
- **No gender or urban-rural differences survived correction.** Multigroup analysis found no significant structural differences between male and female teachers or between urban and rural schools.

## The model and the sample

The study frames school support as a stimulus, four psychological and cognitive factors as the organism, and perceived competence as the response, in a stimulus–organism–response design. Competence was defined as teachers' self-judged capacity to integrate AI around instructional goals across design, classroom implementation, assessment and feedback-based improvement. Measures were adapted from established scales, translated and back-translated, piloted with 60 teachers, and administered through an online survey platform in March and April 2026. Of 1,331 [[self-report-measures|questionnaires]] collected, 1,071 met the eligibility screen of at least one month of accumulated AI-related training or practice, and 289 were removed for speed, failed attention checks or straight-lining, leaving 782 usable responses from 16 schools.

The sample spans primary (51.4%), junior secondary (27.4%) and senior secondary (21.2%) teachers, split almost evenly between urban (51.4%) and rural (48.6%) schools and weighted toward western China (42.4%). Respondents were experienced users: 33.0% reported frequent AI use in teaching and 37.9% very frequent use, while 8.3% reported using it rarely.

## Why the indirect-only result matters

A non-significant direct path is often reported as a null finding and moved past. Here it is the substantive result: having supportive school conditions did not, by itself, make teachers feel competent, and the association was carried by what support changed in teachers' knowledge, confidence and anxiety. The AI-TPACK channel accounts for most of it, which points at [[educational-development|professional development]] that builds [[tpack|technological pedagogical content knowledge]] rather than at equipment, licenses or policy statements alone.

The experience moderation adds a second qualifier. Self-efficacy without practical experience did not translate into perceived competence at all, which is consistent with a reading in which confidence is only actionable once a teacher has classroom evidence to attach it to. The authors describe practical experience as a boundary condition rather than a remedy, and note that the cross-sectional design cannot tell whether experience builds efficacy or efficacy leads teachers to accumulate experience.

## What this means for practice

- **Administrators.** Fund the training channel, not just the tool: support reached competence through AI-TPACK and efficacy, so provisioning without professional learning leaves the main path empty.
- **Faculty developers.** Sequence knowledge-building before confidence-building; self-efficacy did not predict competence for teachers with little practical experience.
- **Faculty developers.** Treat AI anxiety as a real negative predictor (β = −0.111) rather than an attitude problem, and address it alongside knowledge.
- **Policymakers.** Note that urban and rural schools showed no structural differences here, so a single support model is not obviously wrong, though the sample was not probability-based.

## Limitations

- **Cross-sectional.** The model cannot establish temporal ordering or exclude reverse relationships and unobserved factors.
- **All self-report.** Competence, support, efficacy and anxiety were measured by questionnaire at one time point, with common-method and social-desirability risk; the study reports no classroom observation, artifact scoring or usage logs.
- **Non-probability sample.** Recruitment was restricted to teachers with prior AI training or practice, which limits representativeness.
- **Schools not modeled as a level.** School-level clustering was handled with a supplementary robust-error analysis rather than a multilevel model, and objective school factors such as infrastructure were not included.

## Citation

Zhou, H., Xie, Y., & Chen, C. (2026). [*The relationship between school support and teachers' perceived AI teaching application competence: the mediating roles of psychological and cognitive factors and the moderating role of practical experience*](https://doi.org/10.3389/fpsyg.2026.1997903). Frontiers in Psychology, 17, 1997903.
