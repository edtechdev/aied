---
title: "Career-related psychological cognitions and career exploration behavior among Chinese college students: statistical indirect pathways through generative artificial intelligence use"
created: "2026-11-12T06:36:55-05:00"
updated: "2026-11-14T10:00:00-05:00"
published: "2026"
type: article
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
evidence_context: educational
level: [higher ed, undergraduate]
audience: [researchers, administrators, instructors]
sources: ['raw/papers/lu-career-cognitions-genai-exploration-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1934479"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
pedagogy: [career-development-and-readiness, self-efficacy, student-support-and-success]
technology: [generative-ai, technology-acceptance-model]
assessment: [self-report-measures]
methods: [quantitative-research]
---

> **Synthesis:** Students who judged [[generative-ai|generative AI]] useful for career preparation used it more, and used it more alongside [[career-development-and-readiness|career exploration]] — but that describes belief and behavior at one moment, not benefit. Confidence in one's own career decision-making had the strongest direct link to exploration, with or without the tool in the picture. Worry about the job market was unrelated to AI use once other beliefs were accounted for, so anxious students are not a separate adoption market. In [[technology-acceptance-model|acceptance]] terms, usefulness did the work; in career terms, [[self-efficacy|confidence]] did. Teach purposeful, verified use and keep building job-search confidence, and read the [[quantitative-research|pathways]] as associations from a single [[self-report-measures|self-report]] questionnaire.

## Key Findings

1. **Usefulness, not confidence, drove AI use.** Students who rated generative AI as useful for career preparation were far more likely to use it; students who felt capable in career tasks were only slightly more likely to, and that slight link disappeared in the sensitivity check.
2. **More AI use went with more career exploration.** The association was substantial, and it survived the model checks the authors ran.
3. **Career confidence was the strongest direct driver of exploration.** Belief in one's own career-task ability related to exploring careers more strongly than judged usefulness of the tool did, and that route did not run through the technology.
4. **The usefulness route through AI was the pathway that mattered.** Most of the association between judged usefulness and exploration ran through actual use; the corresponding route from career confidence was small and fragile.
5. **Career insecurity was a false lead.** It correlated weakly with AI use on its own, but the association vanished once usefulness entered the model — worry about the job market overlaps with judgments about AI's value rather than driving adoption.
6. **Students rated the tool's usefulness highest of the measures.** All five constructs sat near the middle of their scales, so neither exploration nor AI use looked widespread or saturated.
7. **The sample was large and close to the labor market.** Third- and fourth-year undergraduates at five universities in eastern China, most already preparing for job search — so the pattern describes students about to graduate, not the workforce.

## What the study measured

The paper joins two theories: social cognitive career theory, which links what students believe about themselves and their prospects to what they do, and the [[technology-acceptance-model|Technology Acceptance Model]], which links judged usefulness to adoption. "Career-related psychological cognitions" is a label for three separate appraisals, not a single score: career insecurity (worry about future opportunities), career self-efficacy (confidence in handling career tasks and job search), and perceived usefulness (the judged value of generative AI for gathering information, writing résumés, preparing for interviews and making career decisions).

An online questionnaire ran from April to May 2026, recruited by convenience at five universities in eastern China. Of 1,476 returned, 1,445 were usable — a valid response rate of 97.9%. Respondents were third- and fourth-year undergraduates, and about three-quarters had begun to learn about or prepare for job search. Item screening cut 42 administered items to 25, five per construct, and reliability was high. The structural model was estimated on the full sample with 5,000 bootstrap resamples.

## What tracked AI use, and what did not

Magnitude, not significance, is the story. Students who saw generative AI as useful for career preparation used it more than any other group in the model; that was the largest association in the study. Career confidence pointed the same way but weakly, and the re-estimation in the hold-out half of the sample could not distinguish it from zero. The authors accordingly decline to call self-efficacy a strong predictor of AI use. Confidence shows up in exploration instead.

Career insecurity is the instructive null. Theory would predict that worry about the job market pushes students toward AI; the raw correlation ran weakly the other way, and the path collapsed to nothing once perceived usefulness entered. A supplementary regression traces the collapse step by step: insecurity alone was weakly positive, adding career confidence raised it slightly, and adding usefulness drove it to essentially zero. The authors attribute this to overlap between career worry and beliefs about AI's value, noting that general career insecurity is not the same as [[anxiety-and-stress|anxiety]] about being replaced by AI.

Exploration was associated with usefulness directly, with career confidence directly and more strongly, and with AI use most strongly of all. Bivariately, AI use and exploration moved closely together; insecurity and exploration barely moved together at all.

## The pathway through AI use, and what it cannot show

The framing places AI use between career beliefs and exploration, and the bootstrap results support that for two of the three predictors: usefulness had a sizeable indirect association through use, while career confidence had a small one, with most of its association direct. For career insecurity the indirect association was zero.

None of this identifies a mechanism. Every variable was measured at one time point in one self-report instrument, so "AI use leads to exploration" fits the data as well as "exploration leads to AI use," and a third factor such as career decidedness could produce both. The authors call these statistical indirect pathways rather than causal mediation. Sensitivity checks reinforced the caution: restoring all eight insecurity items left those paths non-significant, dropping one exploration item barely moved the main path, and the hold-out sample removed significance from the confidence route.

## What this means for practice

- **[[student-support-and-success|Career services]] and instructors:** Teach purposeful use rather than more use. Show students when, how and for what purpose to bring generative AI into career preparation; judged usefulness carried the largest association with use in the model.
- **Instructors:** Require verification. Build problem framing, [[prompt-engineering|prompt design]], cross-checking against a second source, and discussion of what AI-generated career advice cannot know. The authors warn that students may accept output without checking or reflecting.
- **Career advisers:** Keep investing in [[self-efficacy|confidence-building]] — job-search training, mock interviews, feedback and individual counseling. Confidence had the strongest direct association with exploration of any belief measured, independent of any technology.
- **Administrators:** Do not build AI programs around anxious students. Worry about the job market was unrelated to AI use once other beliefs were accounted for; offer concrete job information and next steps instead of treating insecurity as an adoption lever.
- **Researchers:** Measure the quality and verification of AI use, not only its frequency, and report effect sizes alongside significance tests; a sample this large makes small coefficients significant.

## Limitations

- The design is cross-sectional and self-reported, with all variables measured at a single time point between April and May 2026; no temporal ordering or causal claim is possible, and the indirect effects are statistical associations rather than demonstrated mediation.
- Sampling was by convenience at five universities in eastern China, so generalization to other regions, institution types, and academic years is untested; university identifiers were stripped from the analytic file, leaving institutional clustering unexamined.
- Same-source bias cannot be ruled out: all five constructs came from one questionnaire, and although diagnostics showed only small improvements from a method factor, the authors state that common method variance may still operate.
- The career self-efficacy pathway was unstable: it was small in the primary model, smaller still in the hold-out sample, and its indirect effect was not significant there, so the association should not be treated as established.
- Measurement adaptation was informal: no back-translation, expert content-validity panel, or cognitive interviewing preceded data collection; item screening cut the 42 administered items to 25, and reliability coefficients were high enough to suggest item overlap. The response-quality thresholds behind the exclusions were not retained, so the screening cannot be reproduced.
- The study measured general career insecurity and overall AI use only; it did not assess AI-specific replacement anxiety, [[ai-literacy|AI literacy]], verification skill, quality of use, or coping resources, and it names no specific AI system or version, so nothing can be said about which tools produce these patterns.

## Citation

Lü, Q., Chen, J., Wang, H., Li, X., & Zhang, Y. (2026). [*Career-related psychological cognitions and career exploration behavior among Chinese college students: statistical indirect pathways through generative artificial intelligence use*](https://doi.org/10.3389/fpsyg.2026.1934479). *Frontiers in Psychology, 17*, 1934479. https://doi.org/10.3389/fpsyg.2026.1934479
