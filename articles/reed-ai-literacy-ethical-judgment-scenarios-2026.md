---
title: "AI literacy and scenario-based ethical judgment about generative AI among undergraduate students"
created: "2026-09-18T05:09:07-04:00"
updated: "2026-09-18T05:09:07-04:00"
type: article
foundations: [ai-literacy, academic-integrity, critical-thinking]
pedagogy: [student-ai-interaction]
technology: [generative-ai]
assessment: [self-report-measures, educational-measurement, assessment-validity]
methods: [quantitative-research]
stakeholders: [learners, student-experience]
institutions: [educational-policy-ai]
ethics: [ethics, ai-misuse-learning-harm, ai-use-disclosure]
research_method: [survey, quantitative]
level: [higher ed]
audience: [researchers, instructors]
sources: ['raw/papers/reed-ai-literacy-ethical-judgment-scenarios-2026.md']
confidence: high
---

> **Synthesis:** Reed, Ferdig, Dodson, Gunstad and Hughes (2026) surveyed 531 undergraduates at one public Midwestern university using six scenario-based ethical vignettes and the 20-item Generative AI Literacy Assessment Test (GLAT) to test whether [[ai-literacy]] predicts applied [[ethics|ethical judgment]] about [[generative-ai]]. Students largely agreed on which uses were acceptable: 57.6% classified all six scenarios correctly, and an objective AI literacy score showed a small positive association with classification accuracy (Spearman's ρ = 0.234, p < .001). The authors conclude that AI literacy contributes to but does not fully explain ethical judgment, and that the ceiling effect points to a need for more discriminating scenarios and earlier, practice-oriented AI ethics instruction.

## Key Findings

1. **Students separated learning-support uses from substitution uses with high accuracy.** The mean percentage of scenarios answered correctly was 88.54%. All three scenarios depicting verification-supported AI use were classified as ethical by a large majority: summarizing textbook notes with professor verification (91.7%), grammar improvement on a self-written paper (84.9%), and AI-generated search terms followed by an independent [[meta-analysis-systematic-review|literature review]] (91.1%).
2. **Substitutionary uses were overwhelmingly judged unethical, though with more disagreement.** Submitting an unmodified AI-generated reflection journal was called unethical by 94.5% of students, minimally edited AI-generated assignment text by 83.4%, and AI-generated references that could not be verified by 85.3%. "Unsure" responses ranged from 2.6% to 9.9% across the six scenarios.
3. **A pronounced ceiling effect narrowed the measure's range.** 57.6% (n = 306) correctly classified all six scenarios, a further 28.8% (n = 153) classified five, and 13.5% (n = 72) classified four or fewer, including 1.1% (n = 6) who classified none correctly.
4. **AI literacy was a small but significant predictor of classification accuracy.** In the adjusted binomial model, each additional correct response on the 15-item Non-Ethics GLAT was associated with a 13.9% increase in the modeled odds of correctly classifying a scenario (B = 0.130, SE = 0.033, Wald χ²(1) = 15.37, p < .001, OR = 1.14, 95% CI [1.07, 1.22]).
5. **Demographic predictors were weak.** Sex was not associated with classification accuracy (Wald χ²(1) = 0.65, p = .420, male OR = 0.88, 95% CI [0.64, 1.21]). Academic status was significant overall (Wald χ²(3) = 13.24, p = .004), but the only notable contrast, sophomores scoring lower than seniors (OR = 0.62, 95% CI [0.39, 0.99]), did not survive Bonferroni correction (adjusted p = .135) and is treated as exploratory.
6. **Correct classification is not ethical conduct.** The authors are explicit that the study measured judgment, not behavior, citing evidence that students frequently engage in AI-enabled academic misconduct even when they know it violates their own beliefs or institutional policy (Adzima, 2025; Sholikhah et al., 2024).

## How the study was conducted

The design was a cross-sectional survey run in Fall 2025. Of 619 recorded responses, 88 were excluded for failed attention checks, "speeding" (under one third of the median completion time), "straight-lining" on reverse-coded items, or missing data; complete-case analysis left a final sample of 531 (114 men, 417 women; mean age 18.77, SD = 2.64). The sample was predominantly non-Hispanic White (76.5%) and overrepresented first-year students (40.5%) and psychology majors (39.9%). Students enrolled in General Psychology or [[research-methods-aied|Research Methods]] in Psychology were recruited through the Sona Systems platform for course or extra credit, then completed a 45-minute Qualtrics survey; data collection ran from October 14 to November 22, 2025.

The six ethical scenarios were adapted with permission from Dodson et al. (2025); nursing-specific roles, clinical settings, and terminology were replaced with broadly applicable equivalents. Each scenario was answered *ethical*, *unethical*, or *unsure*, with "unsure" scored as incorrect, consistent with prior scenario-based ethical judgment research. Scenarios were presented in a fixed non-sequential order (Q1, Q2, Q4, Q6, Q3, Q5) to reduce response patterning, with an attention check embedded between Q4 and Q6. Internal consistency for the six-item measure was modest (KR-20 = 0.61), which the authors attribute to the ceiling effect and limited score variability.

AI literacy was measured with the objective 20-item multiple-choice GLAT (Jin et al., 2025), covering Know and understand (8 items), Use and apply (3), Evaluate and create (4), and Ethics (5), scored 0 to 20. Because the outcome of interest was ethical judgment, the primary correlational and multivariable analyses used a 15-item Non-Ethics GLAT score that excluded the five ethics items to reduce conceptual overlap or criterion contamination (KR-20 = 0.65); the full 20-item score (KR-20 = 0.72) was retained for descriptive and secondary sensitivity analyses. Analyses used SPSS Version 28, a Spearman's rank-order correlation chosen because the outcome was discrete and ceiling-bound, and a binomial generalized linear model with a logit link, six trials, and robust covariance estimates. Race/ethnicity and academic major were not entered into the model because several categories had insufficient sample sizes.

## Scenario design and where uncertainty remained

The study follows a deliberate methodological argument for scenarios over attitude surveys. Vignettes are described as capturing the divergence between what people think and what they decide (Kmetty & Stefkovics, 2025), addressing moral responsibility (Bartels et al., 2015), and showing strong predictive validity (Smith et al., 2022). Rather than asking students to define terms such as beneficence or justice, the vignettes present dilemmas resembling common academic situations, and the three response options let the researchers quantify classification accuracy directly.

Uncertainty clustered in the gray areas that matter most. "Unsure" responses were highest for David's minimally edited AI-generated assignment (9.6%) and Laura's unverifiable AI-generated references (9.9%), with lower rates for the clearer cases. The authors read this as evidence that boundaries between AI assistance and meaningful human authorship remain unclear (Formosa et al., 2025; Wiese et al., 2025), and that institutions need to articulate those boundaries explicitly for students who remain unsure about [[academic-integrity]] categories.

## AI literacy and ethical judgment

The relationship between [[ai-literacy]] and [[evaluative-judgement|judgment accuracy]] was positive but small. Spearman's rank-order correlation between the Non-Ethics GLAT and the number of scenarios correctly classified was ρ = 0.234, p < .001 (N = 531); a Pearson sensitivity analysis produced a comparable result, r(529) = 0.213, p < .001. The multivariable model improved significantly on the intercept-only model, likelihood-ratio χ²(5) = 76.04, p < .001, with the Non-Ethics GLAT remaining a significant positive predictor net of sex and academic status. The authors warn, however, that goodness-of-fit statistics indicated extra-binomial dispersion (deviance/df = 1.64; Pearson χ²/df = 1.91), so inferential results should be read cautiously.

The theoretical framing treats ethical judgment as a skills-based outcome of AI literacy. Rest (1986) positions moral sensitivity and knowledge as necessary preconditions for ethical judgment, and Long and Magerko's (2020) conception of AI literacy supplies the second pillar; the authors also cite Yang et al. (2025), whose three-dimension model has ethical knowledge shaping ethical attitudes and, in turn, practical ethical competence. Crucially, the paper resists over-reading its own high scores. It notes that Lund et al. (2025) found limited consensus on what constitutes fair AI use and that students' personal ethical beliefs may matter more than institutional policy awareness, so agreement on six predesignated scenarios is not evidence of a broadly shared ethical framework. The university offered no AI literacy courses or formal training at the time of data collection, and participants' prior sources of AI ethics knowledge were not measured, so the study cannot determine how these judgments developed.

## Implications for practice and policy

The authors argue for embedding explicit AI ethics instruction early in undergraduate curricula, leaning on the observation that students' personal AI ethics appear to form during the transition into [[higher-ed|higher education]]. At the course level they recommend structured, scenario-based discussion with guided decision-making prompts, structured reflection on AI use, and assignments requiring transparency such as disclosure statements or process documentation; students could also be required to justify AI-use decisions or identify ethical risks within [[assessment|assignments]]. These tactics target the scenarios where uncertainty was highest.

For [[educational-policy-ai|institutional policy]], the findings support moving beyond rigid binary prohibitions toward more nuanced, guidance-oriented rules, since strict policies alone may not resolve the ambiguous cases students face. The authors also stress that ethical judgment does not automatically translate into ethical behavior, and that formal AI literacy courses may therefore need to go beyond conceptual understanding toward practice-based learning, discussion, and self-analysis of the motivations and rationalizations behind [[ai-misuse-learning-harm|AI misuse]]. [[educational-development|Faculty development]] matters here too: instructors model ethical AI use and communicate expectations, and the paper notes how little research exists on helping educators integrate AI ethically (Tan et al., 2025), while also acknowledging the general scarcity of empirical work on teaching applied [[ethics]].

## Limitations

The convenience sample came from one public university and was predominantly White, female, and first-year, with recruitment through psychology courses, so [[student-experience|student]] results may not generalize to the broader undergraduate population; race/ethnicity and discipline analyses were not possible because of small cell sizes. Coding "unsure" as incorrect may understate genuine ethical reasoning, since uncertainty can reflect epistemic humility or deliberation rather than lack of understanding. The fixed presentation order means order or priming effects cannot be excluded. The ceiling effect restricted score range and likely attenuated associations with AI literacy and demographics; the six-item measure's internal consistency was only KR-20 = 0.61, and the authors caution that high classification accuracy should not be read as comprehensive ethical competence. Removing the GLAT's ethics items to avoid criterion contamination narrowed the construct measured, and conceptual overlap between AI literacy and ethical judgment may not have been eliminated completely. Finally, the extra-binomial dispersion warrants caution, the cross-sectional design precludes causal claims, and the hypothetical, low-stakes vignettes should not be treated as evidence of students' intentions or actual conduct under academic pressure.

## Connected Concepts

- [[ai-literacy]] — the objectively measured predictor, operationalized with the GLAT
- [[ethics]] — the judgment construct the scenarios assess
- [[academic-integrity]] — the boundary students must draw between assistance and misconduct
- [[generative-ai]] — the technology the vignettes concern
- [[evaluative-judgement]] — judgment distinguished from awareness, knowledge, and behavior
- [[self-report-measures]] — quantified performance contrasted with self-reported attitudes
- [[educational-measurement]] — ceiling effects, KR-20 reliability, and criterion contamination frame the results
- [[assessment-validity]] — the ethics-subscale exclusion is a criterion-contamination adjustment
- [[critical-thinking]] — verification and original authorship define the accepted scenarios
- [[ai-misuse-learning-harm]] — substitution of AI-generated work for student work
- [[ai-use-disclosure]] — transparency practices the authors recommend
- [[higher-ed]] — the setting and policy audience
- [[learners]] — the undergraduate sample
- [[student-experience]] — how students navigate GenAI decisions in coursework

## Connected Articles

- [[mulisa-students-genai-integrity-perspectives-2026]] — students' own perspectives on GenAI and integrity
- [[ivory-psychology-assessment-integrity-2026]] — adjacent psychology assessment-integrity work
- [[predictors-ethical-genai-use-higher-ed-2026]] — predictors of ethical GenAI use in higher education
- [[ai-literacy-assessment-misalignment]] — measuring AI literacy against instructional goals
- [[genai-assessment-literacy-scale-2026]] — instrument design for GenAI literacy and assessment
- [[ai-tools-academic-work-cheating-2026]] — the cheating framing these scenarios probe
- [[taylor-lacroix-purpose-before-policy-academic-integrity-2026]] — purpose before policy in academic integrity

## Citation

Reed, J. M., Ferdig, R. E., Dodson, T. M., Gunstad, J., & Hughes, J. W. (2026). [*AI literacy and scenario-based ethical judgment about generative AI among undergraduate students*](https://doi.org/10.1007/s10805-026-09757-w). *Journal of Academic Ethics*, 24, 82.
