---
title: "The Six-Facet Artificial Intelligence Literacy Questionnaire (SFAILQ): Assessing AI Literacy in Adolescents, Young Adults, and Midlife Adults"
created: "2026-09-30T11:20:00-04:00"
updated: "2026-09-30T11:20:00-04:00"
type: article
sources: ['raw/papers/10.3390_bs16071110.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [instrument development, survey, structural equation modeling]
level: [middle school, secondary, higher ed, adult learning]
audience: [researchers, instructors, assessment designers, assessment professionals]
foundations: [ai-literacy, theories-and-frameworks]
pedagogy: [self-efficacy, student-engagement, lifelong-learning]
technology: [ai-technologies]
assessment: [self-report-measures, educational-measurement, assessment-validity]
methods: [quantitative-research]
ethics: [ethics]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Liu and colleagues developed and validated the Six-Facet Artificial Intelligence Literacy Questionnaire (SFAILQ), a 32-item [[self-report-measures|self-report]] instrument built on a six-facet model—affective experiences, usage skills, cognitive evaluation, ethical norms, responsible use, and self-development—that adds two factors, responsible use and self-development, to the affective, behavioral, cognitive, and ethical dimensions of earlier AI literacy frameworks. Data came from 2,443 Chinese participants aged 12 to 60 years, divided by a random split-half into an item-reduction sample (N1 = 1217) and a validation sample (N2 = 1226). Exploratory and confirmatory factor analyses supported a six-factor structure, and the authors report high reliability and satisfactory convergent, discriminant, and criterion-related validity. The single most important qualification is that this is a first validation of a brand-new scale in a convenience and snowball sample drawn entirely from China, so it establishes promise rather than a ready instrument for deployment.

## Key Findings

- **A six-facet model drove item generation, and the final instrument has 32 items.** Affective experiences contains 5 items, usage skills 5, cognitive evaluation 6, ethical norms 6, responsible use 4, and self-development 6; the final exploratory factor analysis explained 73.76% of the total variance.
- **The item pool was reduced in stages.** From 70 generated items, content validation with four subject matter experts retained 64 items (I-CVI = 1.00, S-CVI/Ave = 1.00); item discrimination removed eight items, and the exploratory factor analysis removed further weak or cross-loading items, ending at 32.
- **Confirmatory factor analysis supported the six-factor structure.** Fit was marginal but acceptable: χ2/df = 6.06, CFI = 0.93, RMSEA = 0.06 (90% CI [0.056, 0.064]), and SRMR = 0.05, with all standardized factor loadings exceeding 0.60. The authors attribute the high χ2/df to the large validation sample (N = 1226).
- **Scalar invariance held across the three age groups.** Configural, metric (∆CFI = 0.005, ∆RMSEA = 0.005), and scalar (∆CFI = 0.008, ∆RMSEA = 0.007) models met the recommended change thresholds, though the scalar ∆CFI approached the 0.01 cutoff and the authors urge caution in interpreting age-group mean differences.
- **Reliability was high.** All six dimensions and the total score exceeded α = 0.85, with the total at α = 0.97 and CR = 0.99; the square root of the AVE for each dimension ranged from 0.74 to 0.84.
- **Criterion correlations differed by facet.** Usage skills correlated most strongly with academic self-efficacy (0.56), responsible use with academic engagement (0.59), and self-development with work self-efficacy (0.57).

## How the instrument was built and validated

This was a cross-sectional, instrument-development study. Item generation drew on existing AI literacy scales, back-translated into Chinese, plus newly written items targeting the six facets, yielding 70 items. Four subject matter experts reviewed them under a strict retention rule—an item survived only if all four rated it quite or highly relevant—leaving 64 items. Three high schools in cities at different economic levels were selected by convenience sampling with stratified selection across classes and grades, while adults were recruited by snowball sampling distributed through WeChat. Data were collected between June and August 2024 under ethics approval from Beijing Normal University.

The study used a random split-half: Sample 1 (N = 1217) for item discrimination and exploratory factor analysis, Sample 2 (N = 1226) for confirmatory factor analysis and reliability and validity testing. Parallel analysis suggested seven factors, and the initial seven-factor solution accounted for 69.11% of the variance, but five items loaded mainly on a seventh factor that lacked a coherent interpretation and showed substantial cross-loadings, so those and other items were removed; the KMO value was 0.98 and Bartlett's test gave χ2 = 61,255.87, df = 1540, p < 0.001.

## What the scale measures and how it behaves

The six dimensions map onto an integrative definition of [[ai-literacy]] as the responsible use of AI within ethical standards, marked by positive emotion, proficiency, rational [[assessment-validity|evaluation]], and continual self-development. Measurement invariance testing (multi-group confirmatory factor analysis) supported configural, metric, and scalar invariance, which is what licenses comparing the instrument across adolescents (12–17), young adults (18–40), and midlife adults (41–60).

Convergent validity was assessed against a digital literacy scale, with correlations from 0.49 to 0.68. Inter-factor correlations ranged from 0.43 to 0.72, and the heterotrait–monotrait ratios did not exceed 0.80, below the conventional 0.85 threshold. For criterion-related validity, all six dimensions and the total score correlated significantly and positively with academic [[self-efficacy]], academic [[student-engagement]], and work self-efficacy; the total score correlated 0.49, 0.56, and 0.44 with these three variables respectively. Notably, the negative-affect items were dropped: the four items intended to capture negative emotional responses showed low means (M = 1.94–2.22), positive skewness (0.46–0.77), and a pronounced floor effect.

## What this means for practice

- **Use the six facets as a diagnostic profile, not only a total score.** The facets behaved differently against outcomes—usage skills showed the strongest correlation with academic self-efficacy (0.56), responsible use the highest with academic engagement (0.59), and self-development the strongest with work self-efficacy (0.57)—so a dimensional profile points to where to intervene.
- **Treat responsible use and self-development as teachable, measurable targets.** The authors position responsible use as the behavioral translation of ethical understanding (managing usage intensity and not delegating obligations to AI) and self-development as continued upskilling, both of which map onto [[lifelong-learning]] and to DigCompEdu's responsible-use and professional-engagement areas.
- **Do not adopt the SFAILQ for high-stakes decisions yet.** The authors state the instrument "requires comprehensive validation in larger, more diverse cohorts before any real-world deployment can be justified."
- **Read cross-age comparisons cautiously.** Scalar invariance held, but its ∆CFI approached the conventional cutoff, so mean comparisons across the three age groups should be interpreted with restraint.

## Limitations

- **The affective dimension now covers only positive experiences.** All four negative-affect items were removed because of floor effects—the lowest two response options were chosen by 65.0% to 72.3% of participants—so the scale does not capture [[anxiety-and-stress|anxiety]], technostress, or frustration with AI.
- **Sampling and generalizability are constrained.** The sample combined convenience sampling (three schools, mixed online and offline [[administrator|administration]]) with snowball sampling, was overwhelmingly drawn from the 18–40 range, and was entirely Chinese, so cross-cultural and broader age generalizability remain untested.
- **A single random split is not independent replication.** Splitting one dataset in half does not provide the same cross-validation strength as replicating the factor structure in a separate sample, which the authors recommend as future work.
- **Very high total-score reliability may signal redundancy.** The total score's α = 0.97 and CR = 0.99 suggest some item redundancy across the 32 items, and the authors propose a shortened version.

## Citation

Liu, Q., Miao, W., Li, J., & Lei, Y. (2026). [The Six-Facet Artificial Intelligence Literacy Questionnaire (SFAILQ): Assessing AI Literacy in Adolescents, Young Adults, and Midlife Adults](https://doi.org/10.3390/bs16071110). *Behavioral Sciences*, 16(7), 1110.