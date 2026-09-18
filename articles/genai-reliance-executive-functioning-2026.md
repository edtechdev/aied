---
title: "Individual Differences in Reliance on Generative AI in Schoolwork: The Role of Executive Functioning Difficulties, Perceived Usefulness, and Habitual Use"
created: "2026-09-18T15:20:00-04:00"
updated: "2026-09-18T15:20:00-04:00"
type: article
foundations: [cognitive-offloading]
pedagogy: [self-regulated-learning, metacognition, self-efficacy]
technology: [generative-ai, llm]
stakeholders: [student-experience, learners]
methods: [quantitative-research]
research_method: [survey, quantitative, structural equation modeling]
level: [secondary, k 12]
audience: [researchers, educators, learning designers]
page_kind: [evaluation]
sources: ['raw/papers/genai-reliance-executive-functioning-2026.md']
confidence: high
---

> **Synthesis:** Klarin, Hoff and Daukantaitė ask which adolescents turn to [[generative-ai|generative AI]] in their schoolwork as a preferred route rather than one option among several — reliance, defined as preferring GenAI over one's own effort or [[teacher-role|teacher]] support together with difficulty initiating schoolwork without it. Two Swedish community samples of [[learners|adolescents]], 849 lower secondary (analytic n = 735) and 898 upper secondary (analytic n = 839) students, completed the BRIEF2 self-report of everyday executive functioning (EF) difficulties alongside brief scales for [[technology-acceptance-model|perceived usefulness]], habitual use and reliance. Using structural equation modeling the authors test a sequential mediation: EF difficulties → perceived usefulness → habitual use → reliance. EF difficulties correlated positively with all three GenAI measures (r = .14–.33), the sequential indirect path was significant in both groups (β = .08–.10), and the direct path survived (β = .17 in both) — perceived usefulness carried the most consistent indirect association, while the habitual-use-only pathway was weak. The authors deliberately read reliance as agnostic: for students who struggle with planning, task initiation and [[cognitive-psychology|working memory]], turning to GenAI may be adaptive compensation rather than a habit risk. That reframes the question from whether students use AI to which students need support using it well.

## Key Findings

1. **EF difficulties track every GenAI-related measure, in both school groups.** Among lower secondary students, EF difficulties correlated with perceived usefulness (r = .20), habitual use (r = .23) and reliance (r = .33), all p < .001; among upper secondary students the same pattern held (r = .14, .16 and .28, all p < .001). The strongest of the EF associations was consistently with reliance itself, and the authors report the range as rs = .14–.33.
2. **Perceived usefulness was strongly tied to habitual use and to reliance.** Perceived usefulness correlated with habitual use at r = .61 (lower) and .67 (upper), and with reliance at r = .67 (lower) and .59 (upper); habitual use correlated with reliance at r = .75 and .72. These links are large by Cohen's conventions and dwarf the EF correlations.
3. **A sequential indirect pathway replicated across both groups.** The path EF difficulties → perceived usefulness → habitual use → reliance was significant in lower secondary (β = .10, 95% CI [.06, .14], p < .001) and upper secondary (β = .08, 95% CI [.04, .12], p < .001) students. Both indirect effects are small in absolute size.
4. **Perceived usefulness was the more consistent mediator.** The specific indirect path through perceived usefulness alone was significant in both groups (lower: β = .07, 95% CI [.04, .10], p < .001; upper: β = .04, 95% CI [.01, .06], p = .004). By contrast the path through habitual use alone was not significant among lower secondary students (β = .04, 95% CI [-.01, .08], p = .052) and only just significant among upper secondary students (β = .05, 95% CI [.01, .10], p = .012) — despite habitual use being the strongest single correlate of reliance.
5. **The structural paths linking EF to usefulness and use differed slightly by age group.** EF difficulties predicted perceived usefulness at β = .24, 95% CI [.16, .32] for lower secondary and β = .15, 95% CI [.07, .23] for upper secondary students. Perceived usefulness predicted habitual use at β = .72 [.67, .77] and β = .76 [.71, .80]; habitual use predicted reliance at β = .60 [.50, .70] and β = .69 [.60, .78].
6. **EF difficulties retained a direct association with reliance.** With both mediators in the model, the direct path stayed significant in lower secondary (β = .17, 95% CI [.10, .23]) and upper secondary (β = .17, 95% CI [.12, .23]) students, all p < .001 — signalling that perceived usefulness and habitual use do not fully explain the link, and that other mechanisms remain open.
7. **The three-factor measurement model was needed and mostly invariant.** A three-factor solution (perceived usefulness, habitual use, reliance as separate latent factors) fit acceptably in both groups (CFI = .93, TLI = .91, SRMR = .04–.05, RMSEA = .08), better than one- or two-factor alternatives. Configural and metric invariance held across school groups (ΔCFI = .006, ΔRMSEA = .000) though full scalar invariance did not (ΔCFI = .020, ΔRMSEA = .007), so associations — not latent means — were compared.
8. **GenAI use in schoolwork was near-universal and skewed toward reliance constructs at the older age.** Only 13.3% of lower secondary and 6.1% of upper secondary students reported never using GenAI for schoolwork; mean use frequency was 1.86 (SD = 1.23) and 2.32 (SD = 1.15) on differing 0–4 scales. ChatGPT dominated among users (75.8% lower, 98.6% upper), followed by Google Gemini (58.8% lower, 26.9% upper).
9. **All four measures were reliable, and the design was explicitly cross-sectional.** BRIEF2 Global Executive Composite α = .95 / .96; perceived usefulness (7 items) α = .80; habitual use (3 items) α = .88 / .90; reliance (3 items) α = .74 / .75. The [[meta-analysis-systematic-review|literature review]] supporting the model draws on cognitive-offloading evidence (Bastani et al. 2025; Kreijkes et al. 2026), but the study itself can only establish concurrent associations.

## How reliance and executive functioning were measured

Reliance is the paper's central construct and the authors separate it carefully from neighbours. It is defined as a dispositional tendency to turn to GenAI in preference to one's own effort or teacher support, together with difficulty initiating schoolwork without it, and it is measured with just three items (for example, preferring an AI tool over asking the teacher, and "I have difficulties initiating tasks without the use of AI") rated 1–5. Crucially, the authors position the measure as agnostic about outcomes: reliance is not [[cognitive-offloading|cognitive offloading]] in the harmful sense, not overreliance (accepting AI output without independent evaluation) and not cognitive substitution (removing effort a task was meant to exercise). Whether a reliance score is adaptive or maladaptive depends on whether output is evaluated, whether the effort saved is reinvested, and whether the task was meant to exercise the outsourced ability — questions the three-item scale cannot answer.

Executive functioning (EF) is measured with the Behaviour Rating Inventory of Executive Function, Second Edition (BRIEF2) Self-Report Form, a 55-item instrument for ages 11–18 with seven clinical scales (Inhibition, [[metacognition|Self-monitoring]], Shift, Emotional Control, Task Completion, Working Memory, Planning/Organization) feeding three indices and a Global Executive Composite. Only the GEC is used, matching the study's aim of capturing overall everyday EF difficulties rather than specific domains — a choice the authors also flag as a limitation. Higher scores mean greater difficulty. Perceived usefulness (seven items) and habitual use (three items, adapted from Limayem et al. 2007) complete the model, the latter capturing automaticity rather than mere frequency.

## Design, sample and analysis

The study is part of the [[well-being]] in the school environment project at Lund University and uses two cross-sectional Swedish community samples analysed separately because lower secondary (compulsory) and upper secondary (non-compulsory) schooling are distinct developmental and educational contexts. The lower secondary sample was 849 students (M age = 14.8 years, 49.4% girls, four schools, 72% response rate); the upper secondary sample was 898 students (M age = 17.4 years, 55.2% girls, one school of about 1,350, 67% response rate). After excluding invalid responders and the 13.3% and 6.1% who never used GenAI, the analytic samples were 735 and 839. Surveys were administered digitally during class in about 20 minutes, with opt-out consent from guardians and digital informed consent from students; the study was approved by the Swedish [[ethics|Ethical]] Review Authority (2021-01666, 2024-01276-02) and funded by the Swedish Research Council (2025-05241).

Analysis proceeded through confirmatory factor analysis to establish that perceived usefulness, habitual use and reliance were distinguishable constructs, measurement-invariance testing across school groups, Pearson correlations, and structural equation modeling with maximum likelihood estimation (robust ML sensitivity checks matched the main results). Latent variables were used throughout, and indirect effects were judged significant when the 95% confidence interval excluded zero. [[self-report-measures|Self-report]] was the only measurement channel for every latent variable, which the authors treat as a substantive limitation.

## Results: which predictors carry the weight

Two things stand out. First, EF difficulties are reliably but modestly associated with how adolescents perceive and use [[generative-ai|GenAI]]: the correlations with perceived usefulness, habitual use and reliance are small-to-moderate, and the total sequential indirect effect (β = .08–.10) is small. Second, the mediators among themselves are tightly bound — perceived usefulness to habitual use (β = .72–.76) and habitual use to reliance (β = .60–.69) are very large paths. The consequence is that the model's explanatory muscle lies largely in the habit-and-usefulness chain, not in the EF→GenAI edge.

The comparison of specific indirect effects is the paper's most delicate result. Habitual use has the strongest bivariate and structural association with reliance, yet its role as a mediator from EF difficulties is inconsistent — significant only in the older group and borderline in the younger. Perceived usefulness, less dramatic on its own, mediated in both groups. The authors' reading is that perceived usefulness is the more robust individual-difference link between EF difficulties and reliance, and they highlight its conceptual fit: GenAI [[scaffolding|scaffolds]] exactly the operations — task initiation, planning, organisation, working memory, summarisation — that students with greater EF difficulties find costlier, which plausibly inflates how useful the tool feels.

## Reading the finding: compensatory strategy or habit risk

The authors resist the deficit framing that a bare reliance score invites. Because reliance is defined without reference to evaluation or substitution, and because GenAI supports precisely the executive operations these students struggle with, greater reliance "need not in itself indicate maladaptive use" and may reflect adaptive compensation for demands the student would otherwise fail to manage. Repeated [[self-regulated-learning|self-regulation]] research is invoked here: GenAI can act as an adaptive scaffold that helps students initiate tasks and overcome obstacles, and the habit literature (dual-process accounts of automatic versus deliberative control) explains why an initially deliberate choice can harden into a default. The tension the paper leaves open is that the same automaticity that supports a struggling student can also crowd out the effortful processing learning depends on — recent experimental work finds weaker comprehension and retention when an unrestricted [[conversational-ai|chatbot]] substitutes for thinking (Bastani et al. 2025; Kreijkes et al. 2026), whereas hint-first chatboxes do not. Reliance, overreliance and cognitive substitution are the three constructs a future measure must prise apart, and reliance should not be assumed to displace teacher or peer [[help-seeking|help seeking]], which evidence suggests persists alongside GenAI adoption.

For [[student-experience|students]] with EF difficulties the practical message is therefore a design and support message rather than a prohibition message. If the students most likely to lean on GenAI are those for whom schoolwork's executive demands are highest, then support aimed at "effective AI use" should acknowledge variation in EF and self-[[regulation|regulatory]] capacity, and should ask how and why a student uses the tool rather than only whether they do. Banning or blanket-warning approaches treat reliance as uniform and risk withdrawing a genuine scaffold from the students who benefit most, while ignoring the students for whom reliance quietly substitutes for the effort a task was meant to build.

## Implications, limitations and what does not transfer

Implications follow the individual-differences frame. The consistency of the pattern across both school groups, and the replication of the EF→perceived-usefulness association from the authors' earlier study (Klarin et al. 2024), suggest the associations are not an artefact of one age band. Still, the paper is candid about its limits. The data are cross-sectional, so no temporal ordering or causality can be claimed and reciprocal paths are plausible — reliance and [[cognitive-offloading|offloading]] could themselves shape students' perceived EF difficulties. The upper secondary sample came from a single school, so replication across settings with different policies and [[pedagogy|teaching practices]] is needed. Every construct is self-reported, raising common-method-variance and shared-response-bias concerns, and the BRIEF2 GEC cannot show whether specific EF domains (working memory versus inhibition, say) behave differently. The models were not adjusted for gender, age, achievement, socioeconomic background or neurodevelopmental conditions such as [[neurodiversity|ADHD and autism]], so unmeasured confounds may inflate the associations. The three-item reliance measure is new and needs further psychometric validation against cognitive offloading, cognitive substitution, overreliance and academic help seeking. Finally, the model captures only some of the relevant factors — broader acceptance frameworks add social influence, facilitating conditions and hedonic motivation, and stable traits such as personality may matter too. Confidence in the article rests on the large samples, high response rates, latent-variable modelling and replicated EF–usefulness link, not on any [[learning-gains|learning-outcome]] claim, which the design cannot support.

## Connected Concepts

- [[cognitive-offloading]] — the offloading literature that frames whether reliance helps or bypasses effortful thinking
- [[self-regulated-learning]] — self-regulatory capacity as the individual difference the study foregrounds
- [[metacognition]] — monitoring and evaluating AI output, conceptually distinct from reliance as measured
- [[self-efficacy]] — academic self-efficacy named among candidate mechanisms behind the residual EF–reliance path
- [[generative-ai]] — the technology whose schoolwork use and reliance the model explains
- [[llm]] — the chatbot class (ChatGPT, Gemini, Copilot, MyAI) that dominates students' reported tool use
- [[technology-acceptance-model]] — perceived usefulness as the TAM-derived mediator in the sequential model
- [[help-seeking]] — teacher support as the alternative reliance is defined against, and evidence that it is not displaced
- [[student-experience]] — the adolescents' own perceptions of usefulness, habit and preference for AI over effort
- [[neurodiversity]] — ADHD and autism as populations where EF difficulties and reliance may interact
- [[self-report-measures]] — the single measurement channel for every construct and the source of common-method risk
- [[learning-gains]] — the outcome the cross-sectional design explicitly cannot address

## Connected Articles

- [[seung-basham-cognitive-offloading-swld-2026]] — Cognitive offloading and GenAI for students with learning disabilities, the paper's applied companion
- [[yan-cognitive-outsourcing-genai-assessments-2026]] — Outsourcing versus reallocation of cognitive effort in unsupervised GenAI assessment
- [[metacognitively-discordant-completion-genai-2026]] — Aware pass-through of non-understanding when GenAI completes the work
- [[aigc-affordance-student-self-regulation-2026]] — Serial mediation of GenAI affordance, self-efficacy and motivation
- [[reclaiming-epistemic-agency-co-agency-2026]] — A critical framework for human–GenAI co-agency and student judgement
- [[absent-cognitive-baseline-2026]] — The missing cognitive baseline in AI-native students' self-assessment
- [[ai-cognitive-partner-co-regulation-learning]] — Developmental account of human–AI co-regulation in learning
- [[learning-behavior-background-advantage-ai-ed]] — How learning behaviour, not access, drives AI-assisted advantage
- [[young-people-learning-generative-ai-rapid-review-2026]] — PreK-12 evidence review on young people's GenAI learning use
- [[epistemic-proactivity-math]] — Temporal trajectories of student–AI interaction in mathematics

## Citation

Klarin, J., Hoff, E., & Daukantaitė, D. (2026). [*Individual Differences in Reliance on Generative AI in Schoolwork: The Role of Executive Functioning Difficulties, Perceived Usefulness, and Habitual Use*](https://osf.io/preprints/psyarxiv/2rafb_v4). PsyArXiv preprint. (Lund University)
