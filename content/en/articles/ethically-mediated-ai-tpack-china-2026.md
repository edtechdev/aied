---
title: "Towards a New AI-TPACK Framework: Evidence from China"
created: "2026-10-06T17:12:00-04:00"
updated: "2026-10-06T17:12:00-04:00"
type: article
foundations: [tpack, teacher-ai-competency, ai-literacy]
ethics: [ethics]
technology: [ai-technologies]
methods: [quantitative-research]
research_method: [survey, structural equation modeling]
discipline: [learning sciences]
level: [higher ed]
audience: [faculty developers, researchers, administrators]
page_kind: [framework]
sources: ['raw/papers/ethically-mediated-ai-tpack-china-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-06"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Chen, Yu, Liu and An (2026) surveyed 454 university teachers across 45 Chinese universities to test whether AI-integrated teaching competence — [[tpack|AI-TPACK]] — accumulates from separate knowledge domains or forms through their interaction. Their structural model finds a suppression pattern: isolated AI-technological knowledge had a *negative* direct association with integrated competence (β = −0.303) even though its total effect was strongly positive (β = 0.639), because its contribution ran indirectly through [[pedagogy|pedagogical]], content, and [[ethics|ethical]] knowledge. Pedagogical mediation carried the largest share of that indirect effect, and AI-ethical knowledge both transmitted technological knowledge and channeled it onward through pedagogy and content. The authors read the pattern as evidence that [[teacher-ai-competency|teacher AI competence]] develops through ethically mediated integration rather than the addition of discrete skills.

## Key Findings

1. **Isolated technical AI knowledge had a negative direct association with integrated competence.** With the mediators in the model, AI-technological knowledge predicted AI-TPACK at β = −0.303 (p = .001), while its total effect remained positive at β = 0.639 — inconsistent mediation, or suppression.
2. **Pedagogical mediation carried the largest indirect effect.** The path through technological pedagogical knowledge was strongest (β = 0.378, 95% CI [0.248, 0.533]), ahead of technological content knowledge (β = 0.220, [0.085, 0.363]) and ethical knowledge (β = 0.186, [0.124, 0.255]).
3. **Ethics worked as a sequential channel, not a side constraint.** AI-ethical knowledge predicted both pedagogical (β = 0.353) and content knowledge (β = 0.269), and the two-step paths AI-TK → AI-EK → AI-TPK → AI-TPACK (β = 0.114) and AI-TK → AI-EK → AI-TCK → AI-TPACK (β = 0.045) were both significant.
4. **The model explained most of the variance in integrated competence.** R² was 0.834 for AI-TPACK, 0.741 for technological pedagogical knowledge, 0.753 for technological content knowledge, and 0.280 for ethical knowledge.
5. **The suppression depended on pedagogy specifically.** Removing technological pedagogical knowledge from the model made the direct effect non-significant (β = −0.061, p = .308), while removing content or ethical knowledge left it negative and significant (β = −0.130, p = .012; β = −0.446, p < .001).
6. **Mediation beat both rival specifications.** The model fit better than an additive direct-effects model (Δχ² = 133.357, p < .001; AIC 1480.42 vs. 1611.78) and better than a second-order model loading the three mediators on one factor (AIC 1480.42 vs. 1674.25).
7. **The measurement model held across subgroups.** The adapted Celik (2023) Intelligent-TPACK scale reached composite reliability of 0.894–0.943 and average variance extracted of 0.619–0.674, with full measurement and structural invariance across gender, discipline, and institutional type (all ΔCFI within 0.01).

## The suppression pattern: why technical knowledge alone did not help

The paper's central result is counterintuitive on its face: teachers who knew AI tools best did not report the strongest integrated competence once pedagogy, content, and ethics were accounted for, and the direct path between the two turned negative. The authors classify this as suppression, consistent with inconsistent mediation, in which a predictor's direct and indirect effects carry opposite signs. Their explanation is not that technical knowledge is worthless — the total effect is positive and large — but that it becomes productive only when it passes through the other domains.

The discussion offers three readings, none of which the cross-sectional data can separate. The first is cognitive and practical: mastering complex AI tools consumes attention and can push teachers toward operational fluency at the expense of [[learning-design|instructional design]], encouraging efficiency-driven use that resists pedagogical adaptation. The second is professional: [[generative-ai|generative AI]] as a knowledge co-creator can unsettle teachers' [[teacher-role|epistemic authority]], and role uncertainty of this kind is associated with [[anxiety-and-stress|emotional exhaustion]] and defensive retreat from adoption. The third follows from the first two — a deeper understanding of AI raises awareness of [[bias-mitigation|algorithmic bias]], [[privacy]] exposure, and misuse, and without an ethical framework to work with, that informed caution can slow integration rather than sharpen it.

## Ethics as an integrative mediator rather than a checklist

The study's second contribution concerns where [[ethics|AI-ethical knowledge]] sits in the framework. Prior AI-TPACK work treats it as a core dimension alongside the others; this model gives it a connective role, with significant paths into both pedagogical knowledge (β = 0.353) and content knowledge (β = 0.269), and indirect paths to integrated competence that run through each. In the authors' framing, ethics orients technological capability toward responsible ends instead of constraining it, and may be what allows teachers to experiment with AI more confidently in [[curriculum-design|curriculum]] planning rather than less.

That reading is consistent with the model's comparison against a second-order specification, where the three mediators load on one higher-order factor; the mediation model fit better on both AIC and BIC, which supports keeping pedagogical, content, and ethical knowledge distinct. The study is also unusual in its population: most AI-TPACK evidence comes from [[k-12]] in-service and pre-service teachers, while this sample is [[higher-ed|university]] faculty, whose ethical context extends to [[adult-learning|adult learners]]' data autonomy and research integrity.

## What the study measured, and how far the evidence reaches

Participants were full-time teachers at 45 universities in Zhejiang Province, recruited through departmental WeChat groups and email lists with no incentives; 483 responses yielded 454 valid cases after excluding submissions completed in under two minutes or with identical responses across all items. The sample was 62.6% female, 56.6% aged 39 or younger, 46.9% lecturers, 46.0% from regular undergraduate universities, and 36.6% from STEM fields. The sample was split at random into two halves of 227 for exploratory and confirmatory factor analysis.

The instrument adapted Celik's (2023) Intelligent-TPACK scale to Chinese higher education, supplementing technological and content items from the literature and refining the ethical scale with work on educational AI ethics. Exploratory analysis resolved a four-factor structure for the AI-TPACK dimensions — dropping one cross-loading item and reclassifying another — and a unidimensional five-item ethical scale (α = 0.91), whose confirmatory fit was good on the incremental indices (CFI = 0.982, TLI = 0.955) despite a root mean square error of approximation of 0.120 that the authors attribute to the model's small degrees of freedom. All constructs showed discriminant validity against the heterotrait–monotrait criterion (all values below 0.85), and a single-factor model fit substantially worse (CFI = 0.714), which argues against common method variance as the whole explanation.

## Reorienting professional development away from tool training

The practical argument follows directly from the paths: if technical knowledge contributes mainly through pedagogy, content, and ethics, then [[educational-development|professional development]] organized around tool proficiency spends its effort in the wrong place. The authors call the target *translational capacity* — the ability to move from an AI capability to a defensible pedagogical decision — and connect it to practical wisdom rather than decontextualized skill. Their concrete suggestions are institutional as much as individual: interdisciplinary design teams for collaborative AI exploration, cross-subject peer review of AI adaptations, structured ethical review built into lesson planning and tool evaluation, and scenario-based critique of AI applications within a discipline.

A fourth implication concerns [[learning-analytics|analytics]]: the validated instrument gives institutions a way to profile teachers' AI-TPACK and to prioritize support, and the authors argue that [[ai-ed-evaluation|evaluation of AI]] integration should move past adoption counts toward indicators of pedagogical alignment, disciplinary grounding, and ethical quality — precisely because isolated technological knowledge was the one component associated with weaker integration.

## What this means for practice

- **Instructors.** Start from a teaching problem you already have — a concept students struggle with, an assessment that misleads — and evaluate AI tools against it, rather than learning a tool first and looking for a use afterward.
- **Instructors.** Make ethical reasoning part of planning rather than a review gate: ask what data the tool collects about your students, whose interests its recommendations serve, and where its output should not be trusted.
- **Faculty developers.** Replace standalone tool workshops with design studios that require participants to justify an AI-supported activity in terms of learning objectives, disciplinary content, and ethical tradeoffs.
- **Administrators.** Treat adoption counts as a misleading indicator of integration quality; if this model holds, rising tool use without pedagogical and ethical mediation can coexist with weaker integrated competence.
- **Researchers.** Reuse the adapted five-dimension instrument when studying faculty AI competence in higher education, and report the ethical scale's five items alongside its fit statistics given the elevated RMSEA on that subscale.

## Limitations

- **Cross-sectional, [[self-report-measures|self-report data]] cannot establish the direction of the paths.** The suppression pattern is consistent with the proposed mediation, but the study cannot rule out that weaker integrated competence prompts different reports of technical knowledge.
- **Common method variance was addressed but not eliminated.** The Harman single-factor test is insensitive, the unmeasured latent method construct model did not converge, and the authors rest their argument on the independent-sample factor analysis and stable structural paths instead.
- **The sample is one Chinese province.** All 454 teachers came from Zhejiang higher education institutions, so the suppression effect's boundary conditions outside that context are untested.
- **The study reports no data-collection window and names no AI tool generation.** The paper gives received and accepted dates only, so the AI tools and capabilities teachers had in mind when answering are unspecified.
- **Self-perceived knowledge is not observed practice.** The instrument measures what teachers believe they know about integrating AI, which the authors note may not capture the behavioral complexity of classroom teaching.

## Citation

Chen, X., Yu, B., Liu, X., & An, Z. (2026). [Towards a New AI-TPACK Framework: Evidence from China](https://doi.org/10.1016/j.caeai.2026.100686). *Computers and Education: Artificial Intelligence*.
