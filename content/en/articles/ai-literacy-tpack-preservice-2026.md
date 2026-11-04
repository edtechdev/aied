---
title: "Perceived AI literacy and TPACK in pre-service teacher education: mediating roles of perceived usefulness, ease of use, and value in blended learning"
published: "2026-11-02"
created: "2026-11-03T09:20:00-05:00"
updated: "2026-11-03T09:20:00-05:00"
type: article
sources: ['raw/papers/ai-literacy-tpack-preservice-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1984940"
confidence: high
page_kind: [evaluation]
research_method: [survey]
level: [higher ed]
audience: [instructors, researchers, administrators]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-03"
    agent: hermes-agent
source_depth: full text
foundations: [ai-literacy, tpack]
technology: [technology-acceptance-model]
methods: [quantitative-research]
assessment: [self-report-measures]
---

> **Synthesis:** Zhao surveyed 423 pre-service teachers in blended courses at one Chinese university and asked how [[ai-literacy|perceived AI literacy]] and [[tpack|TPACK]] relate to deep learning, treating perceived usefulness, ease of use and value as [[technology-acceptance-model|technology-acceptance]] mediators. All six indirect paths were positive and significant under both PLS-SEM and covariance-based SEM, but their sizes differ by an order of magnitude: TPACK through ease of use was the largest (0.212) and AI literacy through usefulness the smallest (0.033). A fuzzy-set configurational analysis then found no necessary condition at all — 26 of 28 observed configurations cleared 0.80 consistency — which reframes the mediation as one route among several sufficient ones rather than the route.

## Key Findings

1. **All six mediation paths were significant, twice.** Six indirect effects ran from the two competencies through the three perceptions to deep learning, and a covariance-based SEM robustness check (5,000 resamples) reproduced the sign and significance of every one.
2. **Ease of use carried the largest path.** TPACK → perceived ease of use → deep learning was the biggest indirect effect (0.212, 95% CI [0.149, 0.278]), followed by TPACK through value (0.117) and AI literacy through ease of use (0.102).
3. **AI literacy through usefulness was marginal.** The smallest path was AI literacy → perceived usefulness → deep learning (0.033, 95% CI [0.004, 0.077]), which the authors note was only marginally significant in the PLS model.
4. **The model explained most of the variance in deep learning.** R² was 0.594 for deep learning, with 0.355 for usefulness, 0.495 for ease of use and 0.359 for value of AI use.
5. **No condition was necessary for deep learning.** The highest necessity consistency for high deep learning was perceived usefulness at 0.874, below the 0.90 threshold; for low deep learning the strongest was the absence of ease of use at 0.894.
6. **Configurations were equifinal and asymmetric.** 26 of 28 observed configurations reached the 0.80 consistency threshold, and minimization reduced the solution to single conditions — ease of use (0.888), TPACK (0.845), value (0.835) and usefulness (0.821) each sufficient on its own.
7. **The sample was one university's [[teacher-role|teacher]]-training classes.** 423 pre-service teachers across five intact classes, 73.3% women, mean age 20.3, with 67.8% reporting prior experience with tools such as [[generative-ai|ChatGPT]] or [[intelligent-tutoring|intelligent tutoring systems]].

## A mediation model that also says "many routes"

The paper's design is unusual for this literature: the same data are analyzed with PLS-SEM, a covariance-based re-estimation in Python, and fuzzy-set [[qualitative-research|qualitative]] comparative analysis. The three approaches answer different questions, and the authors keep them apart. The SEM results say the mediated structure holds; the fsQCA results say high deep learning is reachable by several partly substitutable combinations, and that no single competency or perception — nor its absence — is required.

That combination is more useful to a teacher educator than a single path model. If ease of use alone is sufficient for high deep learning in some configurations, then a course that removes friction with AI tools can produce the outcome even where AI literacy is not strongly developed, and a course strong on literacy but awkward in its tooling can miss it. The authors are careful to label the configurational solutions associational.

## Measuring perceived competence, not competence

Both predictor constructs are perceptions. Perceived AI literacy is a short self-report scale, and [[tpack|TPACK]] was reduced from fifteen administered items to six parcels covering six of the seven original dimensions — technological knowledge was dropped entirely during item screening. The authors state this openly: the retained TPACK indicators span content, [[pedagogy|pedagogical]] content, pedagogical, technological content, technological pedagogical content and technological pedagogical knowledge, and claim nothing about TK.

The value construct narrowed the same way. Of five administered items, three survived, and the removed pair were the hedonic and the ethical items, so the perceived-value measure is a functional-value measure. The authors flag that construct-level claims about the ethical or hedonic dimensions of value are unsupported by their own instrument.

## Fit, and what the robustness check showed

The covariance-based re-estimation was not a clean replication of fit: χ2/df = 4.27, CFI = 0.869, RMSEA = 0.086, and deep learning's average variance extracted fell to 0.436, below the 0.50 threshold that PLS met. The authors describe the global fit as approximate and lean on the sign-and-significance agreement across methods rather than on fit equivalence.

Harman's single-factor test accounted for 43.199% of variance, under the 50% benchmark, and the authors note the test is insensitive. All measures came from one questionnaire at one time point.

## What this means for practice

- **Reduce friction before adding content.** Ease-of-use paths were the largest in the model and ease of use was sufficient on its own in the configurational analysis, so reliability and [[usability-research|usability]] of the AI tooling belong in the [[curriculum-design|curriculum plan]] rather than in IT support.
- **Teach TPACK integration explicitly, not AI literacy alone.** TPACK carried the two largest indirect paths; a course that teaches AI concepts without the pedagogical integration work targets the smaller route.
- **Do not expect one design to fit every pre-service teacher.** With 26 of 28 configurations clearing the consistency threshold and no necessary condition, the authors' own conclusion is that different combinations work for different students.
- **Measure more than perception when you evaluate such a course.** Everything here is [[self-report-measures|self-reported]] at one time point; the authors call for observational data, [[learning-analytics|learning analytics]] and lesson-plan evaluation.

## Limitations

- **Single university, cross-sectional, cluster-sampled.** 423 pre-service teachers in five intact classes at one Chinese university, so generalizability is limited and observations within a class are not fully independent.
- **Self-report throughout.** All six constructs are perceptual, with social desirability and common method variance uncontrolled beyond Harman's test.
- **TPACK and value were narrowed by item screening.** Technological knowledge was not represented in the retained TPACK indicators, and the value measure dropped its hedonic and ethical items.
- **The covariance-based fit was only approximate.** CFI = 0.869 and deep learning's AVE of 0.436 sit below conventional thresholds, so the robustness check supports sign and significance rather than model fit.
- **fsQCA calibration anchors were data-driven.** The 95th/50th/5th percentile anchors are standard but results can be sensitive to their choice.

## Citation

Zhao, J. (2026). [*Perceived AI literacy and TPACK in pre-service teacher education: mediating roles of perceived usefulness, ease of use, and value in blended learning*](https://doi.org/10.3389/fpsyg.2026.1984940). Frontiers in Psychology, 17.
