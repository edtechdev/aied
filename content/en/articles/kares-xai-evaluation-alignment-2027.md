---
title: "Explainability metrics and user studies disagree about which explanation is best"
created: "2026-11-11T09:15:00-05:00"
updated: "2026-11-11T09:15:00-05:00"
type: article
page_kind: [synthesis]
evidence_context: non_educational
research_method: [experiment]
audience: [researchers, software developers, instructional designers]
sources: ['raw/papers/kares-xai-evaluation-alignment-2027.md']
source_url: "https://doi.org/10.1016/j.chb.2026.109163"
source_depth: full text
confidence: high
ethics: [explainable-ai, trust, trust-calibration]
assessment: [self-report-measures]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Kares and colleagues (2027) ran a preregistered between-subjects study with 166 participants, comparing three saliency-map techniques — LIME, Grad-CAM and Guided Backpropagation — across the three families of evidence that [[explainable-ai|explainable AI]] is evaluated with: what users say about the explanation, what users can do with it, and what mathematical metrics say about it. The three families disagreed. Satisfaction and [[trust|trust]] ratings found no differences at all; task performance favored Grad-CAM; mathematical metrics favored Guided Backpropagation. Mathematical metrics were only partly related to how well participants actually judged the model, and some relationships ran in the opposite direction to the one the metrics are supposed to certify. The study is not about education, but its conclusion is the one an educational software team needs before shipping "explainable" feedback: a favorable metric is not evidence that a learner or teacher understands the model.

## Key Findings

1. **The three evaluation families pointed at different winners.** Subjective measures found no differences, objective measures favored Grad-CAM, mathematical metrics favored Guided Backpropagation (GBP), and the paper's own summary table records this as a misalignment between the families.
2. **Users could not tell the methods apart.** Perceived explanation satisfaction was 3.98 for Grad-CAM, 3.92 for GBP and 3.87 for LIME, with no significant difference (F(2, 163) = 0.48, p = .618) and no significant pairwise comparison.
3. **Trust did not track quality either.** Trust in the classifier (p = .91), trust in the map (p = .87) and perceived trustworthiness (p = .31) were all flat across conditions.
4. **Ability measures did discriminate.** Grad-CAM users estimated model accuracy with a mean absolute error of 18.1%, against 20.3% for GBP and 21.3% for LIME, and Grad-CAM beat LIME significantly on both prediction error (d = −0.63) and error rate (0.375 vs 0.408, p = .007, d = −0.52).
5. **Everyone was still bad at the task.** Classification prediction error was 37–40% across conditions, only slightly better than chance, and participants' mean accuracy estimate (67%) sat close to the classifier's (70%) while individual estimates carried a standard deviation of 15 points.
6. **Mathematical superiority did not transfer.** GBP led on Deletion (0.0687), Sparseness (0.8081) and Entropy Complexity (9.2976), and held a large advantage on Monotonicity (Cohen's d = 2.1), yet it produced the second-best human performance.
7. **Metric–performance links were mixed and sometimes inverse.** Deletion, Sparseness and EPG showed associations in the expected direction in at least one group, while Insertion in the LIME group, Monotonicity in the GBP group, and Entropy Complexity and Average Sensitivity in the Grad-CAM group were associated with worse accuracy estimates.
8. **Localization came closest to a proxy.** EPG, which measures overlap with human-annotated object regions, was the metric most consistently associated with participants' accuracy predictions, and only in the GBP and Grad-CAM groups.

## What the study did

Participants were recruited from an ICT background and were randomly assigned to one of the three saliency methods. Each saw twelve images, one per class of a twelve-class classifier, and made three judgments per trial: how satisfied they were with the explanation, how much they trusted the classifier and the map, and whether the classifier would get that image right. Their predicted accuracy was then compared against the classifier's real accuracy for that class.

The mathematical side used seven established metrics across four properties: fidelity (Insertion, Deletion, Monotonicity), complexity (Sparseness, Entropy Complexity), robustness (Average Sensitivity) and localization (EPG). The paper preregistered the design and published data and materials on OSF.

The finding that matters for anyone choosing an explanation method is not that Grad-CAM wins. It is that the three families can rank the same three methods differently, and that a team optimizing the mathematical metrics would have picked the method that produced worse human performance.

## Why the families diverge

The authors offer a mechanism for the performance result: Grad-CAM tends to land on a semantic granularity that matches how people read an image, specific enough to point at the relevant region without inviting over-interpretation. LIME can be too coarse or oddly shaped, and GBP too fine, tracing edges rather than objects. That is a claim about human factors, and it is invisible to a metric that measures pixel attribution.

The subjective measures have a separate problem, and the paper says so directly: satisfaction and trust ratings did not distinguish methods whose users performed differently, which is consistent with the wider finding that perceived understanding diverges from actual understanding. A product team that ships the explanation users rate highest has learned something about adoption, not about comprehension.

## What this could mean for education

The study contains no educational data, and everything in this section is inference from its mechanism rather than a result about learners or teachers.

The direct audience is [[educational-technology-developers|educational software]] teams that show explanations — highlight the sentence that drove an automated score, the passage a chatbot cited, the features behind a predicted grade or a dropout risk flag. Those teams are routinely asked to justify the feature, and the easiest justification is a faithfulness metric. This paper is evidence that the metric does not license the claim. A developer who reports "our explanation method scores well on deletion and sparseness" has shown something about the model, not about whether a teacher can act on the explanation.

The second audience is researchers who evaluate explanations in educational tools. The field's default instrument is the satisfaction or trust questionnaire, sometimes alongside a comprehension check. Here those instruments were flat while the ability measures separated, which is the pattern [[self-report-measures|self-report measures]] are known to produce: they capture the experience of understanding, not its presence. An evaluation that reports only satisfaction would have concluded the three methods were interchangeable.

For instructors, the useful implication is narrower and more practical. If a tool offers an explanation view, the question to ask is not whether it looks convincing but what a person can do differently after seeing it. The paper's participants had ICT backgrounds and still misjudged the model by roughly a fifth of its accuracy, and the paper notes that lay users would likely do worse.

## What this does not show

Saliency maps on image classification are a testbed, not a classroom. The participants were English-speaking ICT professionals, deliberately chosen because they were likely to encounter such maps at work, so the results describe expert-adjacent users rather than students or teachers. The study used one classifier and twelve classes. The metric–performance analyses rest on twelve observations per metric per approach, which the authors describe as limited, and they report the mixed directions rather than a clean ordering. Nothing here measures learning, and nothing here tests an educational interface.

## What this means for practice

- **Software developers:** do not ship a faithfulness metric as evidence that an explanation helps. Pair it with a task that measures what a user can do after seeing the explanation, and report both.
- **Researchers:** if you evaluate an explanation feature with satisfaction or trust items, add an ability measure. The flat-subjective/differentiated-objective pattern is the reason.
- **Instructional designers:** an explanation view that users find satisfying may still leave them unable to predict the system's behavior. Test comprehension by asking users to predict a specific outcome, not to rate the explanation.
- **Administrators:** when a vendor justifies explainability with a technical score, ask for the user study that shows a decision changing.

## Limitations

The sample is one population with ICT expertise, and the authors flag lay users as a likely different case. Only one classifier was used, though the authors argue the misalignment finding does not depend on that. The mathematical analyses rest on twelve trials per metric per group, so individual metric–performance associations are weak evidence on their own. The presentation differed slightly between methods — Grad-CAM maps kept the original image visible, LIME's was faint, and GBP had no background — which the authors name as a possible contributor to the Grad-CAM performance advantage. The study also compares saliency maps only, and the authors present that as a testbed for a broader claim about XAI evaluation rather than a complete account of explanation quality.

## Citation

Kares, F., Speith, T., Zhang, H., & Langer, M. (2027). [Are explainable AI (XAI) evaluation strategies aligned? Comparing subjective, objective, and mathematical evaluation measures using saliency maps](https://doi.org/10.1016/j.chb.2026.109163). *Computers in Human Behavior, 187*, 109163. https://doi.org/10.1016/j.chb.2026.109163
