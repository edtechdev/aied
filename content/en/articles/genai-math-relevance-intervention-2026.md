---
title: "Utilizing generative AI to promote high school students' personal relevance to math and interest in the math class: An intervention"
created: "2026-09-18T12:35:00-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
pedagogy: [motivation, student-engagement, self-efficacy]
technology: [generative-ai, conversational-ai, pedagogical-agent]
foundations: [ai-literacy]
methods: [mixed-methods-research]
research_method: [quasi-experiment, survey, interviews]
level: [secondary, k 12]
audience: [instructors, researchers]
discipline: [math education]
page_kind: [evaluation]
sources: ['raw/papers/genai-math-relevance-intervention-2026.md']
confidence: high
---

> **Synthesis:** Guo, Fryer and Shum test whether semi-structured dialogue with [[generative-ai|generative AI]] can lift 218 Chinese second-year high school students' relevance as identification with math, the most personal of the three relevance types in Priniski and colleagues' framework, and whether any gain carries over into interest in the math class. Three intact classes of a medical vocational high school, taught by the same [[teacher-role|teacher]], became an individualized AI condition (E1, n=70) where each student asked a Chinese chatbot five researcher-written questions about math and their ideal career, life purpose or long-term interest; a collective AI condition (E2, n=73) where the researcher ran the same dialogue on a classroom computer and the class voted on which parts to pursue; and a control group (C, n=75) that watched a documentary on great mathematicians. Contrary to the [[personalized-learning|personalization]] hypothesis, only the less individualized collective condition worked: it raised relevance as identification immediately (η² = 0.073, a medium effect) and, through that gain, predicted relevance to a specific math lesson one week later. Interest in the math class barely moved, which the authors attribute to a single one-hour session. Interviews explain the surprise: individually generated identity links felt abstract and unusable, while the collective dialogue tied math to proximal concerns such as time management and to cross-domain applicability.

## Key Findings

1. **The intervention worked, but only the collective condition.** The omnibus MANCOVA controlling prior relevance as identification, prior interest, prior [[self-efficacy]], prior math grade and gender was significant (Wilk's λ = 0.94, F = 3.13, p = .015), driven entirely by relevance as identification (F = 4.35, p = .014, η² = 0.04); interest in the math class showed F = 0.29, p = .75, η² = 0.003.
2. **E2 beat the control, E1 and E2 did not differ.** Planned comparisons put the collective AI group above the control on relevance as identification (Wilk's λ = 0.89, F = 8.70, p < .001; univariate F = 11.11, p = .001, η² = 0.073, adjusted M = 2.08, SE = 0.10 vs M = 1.57, SE = 0.10), a medium effect by Cohen's cutoffs. E1 versus C (F = 1.28, p = .261) and E1 versus E2 (F = 1.86, p = .175) were not significant.
3. **Gains were sustained for at least a week.** In a fully-forward latent-variable SEM, E2 positively predicted post-intervention relevance as identification (β = 0.18, p < .01) and, mediated by that post score, predicted relevance to a specific math lesson one week later (indirect effect = 0.108, p < .05). Model fit was good (CFI = .941, TLI = .920, RMSEA = .061, CI .054–.068).
4. **Interest did not follow relevance, contradicting the hypothesis.** The authors read the decoupling as a dose problem: interest development is held to need repeated exposure and engagement, and a one-hour single session leaves no room for relevance gains to consolidate into interest in the class.
5. **The individualized condition failed for a coherent reason.** In interviews, 7 of 10 E1 students described the AI's identity-based connections as overly abstract and doubted they would ever use those applications, as in one student who "just want[s] to be a cook" and saw no need for the math the AI described.
6. **Collective dialogue produced two distinct pathways.** Among E2 students, 8 of 10 named immediate practical utility, most often time management, and 6 of 10 (Table 6; the text reports 7 of 10) named cognitive broadening, seeing math applied across different fields for the first time.
7. **Baselines were low and the sample skews practical.** Prior relevance to math averaged 1.97 of 6 (SD = 1.38) and prior class interest 2.68 (SD = 1.44) against prior self-efficacy of 1.98 (SD = 1.31), so the starting point was a vocational-track cohort that already saw [[math-education|math]] as secondary to career training.
8. **[[educational-measurement|Measurement]] held up across four time points.** McDonald's omega ranged from .89 to .95, and longitudinal configural, metric and scalar invariance were tenable for both constructs (largest |ΔCFI| = .006, largest |ΔRMSEA| = .014).

## How the intervention was built and compared

The theoretical target was the top of Priniski, Hecht and Harackiewicz's continuum of personal meaningfulness. Earlier relevance interventions, whether teachers stated the utility of content or students wrote about it themselves, aimed at personal usefulness; relevance as identification, connecting subject matter to identity and sense of self, had not been directly targeted. The authors argue this type is more personalized and more complex, which is what makes a real-time, dialogue-capable system a plausible tool rather than another worksheet.

All three conditions lasted one hour. E1 students in a medical vocational high school used Baidu's Wenxin Yiyan individually to ask five semi-structured questions, beginning with an ideal career, life purpose or sustained individual interest and then probing how math, and specifically the trigonometry they were currently studying, related to it. E2 ran the same script as a whole class: the researcher typed the dialogue on the classroom computer, projected the answers, and the class voted on which strand to deepen, most often time management and then logical thinking. The control group watched a documentary about prominent historical mathematicians. Students reported relevance as identification and class interest before the intervention, immediately after, and one week and two weeks later, in each case about a specific math lesson.

## What the numbers showed

The design was a mixed-methods sequence: [[quantitative-research|quantitative]] analysis came first, and the follow-up interviews were built to explain a result that contradicted the hypotheses. Both expectations were tested together, that both AI conditions would beat the control and that the more personalized one would do better; the omnibus [[mixed-methods-research|mixed-methods]] test confirmed the first only for the collective condition and refuted the second outright. Missingness ran from 1.3% to 3%, almost all of it from missed classes, and was handled with an expectation-maximization imputation. With only three classes, multilevel modeling was judged pointless, so class-level clustering is not modeled in the SEM; the analysis instead leans on the fully-forward specification, in which every earlier variable predicts every later one with no paths trimmed for fit.

## Why collective dialogue outperformed individual dialogue

Interviewing 20 students five days after the intervention, 10 drawn from the top quartile of E2 gainers and 10 from E1 whose change approximated the control mean, produced three themes with substantial coder agreement (κ = 0.82). Individually generated relevance was judged too abstract and too detailed; the answers were correct in the abstract and unconvincing about the future the student actually expected. The collective dialogue, by contrast, surfaced proximal utility, the classroom vote landing on time management and optimization, and widened the perceived range of fields in which mathematics operates. Students described the broadening directly: the response "made me realize the mathematics can be applied in different fields. I have not thought about this before."

The proposed mechanism links [[student-engagement|engagement]] and [[motivation]] through relevance, but with a developmental qualification. Because adolescents' identities are still forming, an AI-supplied link between trigonometry and a future profession may be too distant to feel self-relevant, whereas connections to current concerns or to the sheer breadth of application are close enough to register. The paper's practical rule is therefore the reverse of the intuition that drove the design: use generative AI to tie subject matter to what students face now, or to its general reach across domains, rather than to an identity they have not yet settled.

## What this means for practice

- **Teachers.** Run relevance work as collective dialogue rather than one-to-one chat: the collective condition beat the control on relevance as identification (η² = 0.073) while the individualized condition did not differ from the control (F = 1.28, p = .261).
- **Teachers.** Anchor math to what students face now and to its reach across fields rather than to a career identity they have not settled: 7 of 10 students in the individualized condition described the AI's identity links as too abstract to use, one of them seeing no need for the math described because he "just want[s] to be a cook."
- **Teachers.** Plan repeat sessions when interest in the math class is the target: after a single one-hour session interest moved by F = 0.29, p = .75, η² = 0.003, and the authors attribute that null to dose rather than to the method.
- **Teachers.** Use the dialogue to establish relevance ahead of the specific lesson it is meant to support; in the collective condition the relevance gain carried through to relevance for a particular math lesson one week later (indirect effect = 0.108, p < .05).
- **Researchers.** Read any effect against the cohort's starting point — prior relevance averaged 1.97 of 6 in a vocational medical track where math was already secondary to career training — before assuming the same script will move a general secondary class.

## Limitations

- **Site.** The sample is one medical vocational high school, where students plausibly treat math as less important than practical training, so replication in general secondary settings is needed.
- **Dose.** A single one-hour session is short for interest development and even for durable relevance, and the authors propose multi-session designs, for example establishing relevance with AI before each lesson.
- **Design and measures.** Clustering by class is unmodelled given three clusters, the measures are [[self-report-measures|self-report]], only one Chinese system was used, and the interviews deliberately contrasted extreme and typical cases, which leaves moderate performers unexamined.
- **Horizon.** The two-week window says nothing about longer persistence, so the study's contribution is a correction to the design of AI-assisted relevance work rather than a demonstration that [[conversational-ai|conversational AI]] reliably raises interest in a school subject.

## Connected Concepts

- [[motivation]] — relevance as a pivotal motivational construct and the paper's outcome of interest
- [[student-engagement]] — the engagement state relevance is expected to feed, and the interest development it did not
- [[self-efficacy]] — collected as a prior covariate and measured at a notably low baseline
- [[generative-ai]] — used here as a dialogue partner for building identity-based relevance
- [[conversational-ai]] — the real-time, personalized dialogue capability that motivated the intervention
- [[pedagogical-agent]] — the AI cast in a guided, semi-structured instructional role within a researcher-authored script
- [[math-education]] — trigonometry as the content and relevance to math as the target outcome
- [[k-12]] — second-year high school students aged 15 to 17 in a vocational track
- [[student-ai-interaction]] — the chat exchanges and the stimulated-recall interviews about them
- [[personalized-learning]] — the personalization hypothesis that the results undercut
- [[transfer-of-learning]] — generalization of relevance from math in general to a specific lesson a week later
- [[mixed-methods-research]] — quantitative-then-qualitative sequencing built to explain an unexpected result

## Connected Articles

- [[utility-value-intervention-teach-responsibly-genai-2026]] — Utility-value relevance interventions repurposed for responsible GenAI use
- [[llm-cultural-relevance-k12]] — Making learning content culturally relevant to K-12 students
- [[taklif-ai-interest-based-personalized-assignments]] — Personalized assignments keyed to student interests
- [[mathematics-teachers-chatbot-motivation-2026]] — Chatbots and motivation in mathematics classrooms
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Affective math tutoring, the motivational counterpart to relevance framing
- [[student-motivation-need-satisfaction-genai-sdt-2026]] — Need satisfaction and motivation when students work with GenAI
- [[genai-motivation-engagement-2026]] — Broader evidence on GenAI, motivation and engagement
- [[student-ai-conversations-cognitive-engagement-2026]] — What students actually do inside AI conversations
- [[mindful-llm-math-tutoring-2026]] — Design choices in LLM math tutoring that shape learning
- [[genai-writing-program-primary-l2-motivation-engagement]] — Motivation and engagement outcomes in a GenAI writing intervention

## Citation

Guo, Z., Fryer, L. K., & Shum, A. (2026). [*Utilizing generative AI to promote high school students' personal relevance to math and interest in the math class: An intervention*](https://doi.org/10.31234/osf.io/srxga_v1). *PsyArXiv Preprints*.
