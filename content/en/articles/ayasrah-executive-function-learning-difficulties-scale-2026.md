---
title: "Measuring AI-Mediated Executive Function Learning Difficulties: The EFB-LDS-AI Scale"
created: "2026-11-12T18:00:00-05:00"
updated: "2026-11-12T20:20:00-05:00"
type: article
sources: ['raw/papers/ayasrah-executive-function-learning-difficulties-scale-2026.md']
source_url: "https://doi.org/10.1007/s12144-026-09404-y"
source_depth: full text
confidence: high
evidence_context: educational
research_method: [instrument development, network analysis]
page_kind: [evaluation]
level: [secondary]
audience: [researchers, instructors, assessment designers]
discipline: [learning sciences]
foundations: [theories-and-frameworks]
pedagogy: [metacognition, self-regulated-learning, cognitive-psychology]
assessment: [assessment-validity, self-report-measures]
technology: [generative-ai]
ethics: [ai-use-disclosure]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Ayasrah and colleagues developed the [[executive-function|Executive Function]]-Based Learning Difficulties Scale for AI-Driven Educational Environments (EFB-LDS-AI), a 35-item self-report instrument derived from interviews with 18 specialists, teachers, and students and validated on 616 Jordanian secondary school students. Its six dimensions — [[cognitive-offloading|cognitive offloading]], illusion of understanding, AI-induced informational bias, memory erosion, AI-induced cognitive laziness, and decline of critical thinking — explain 67.16% of the variance, with Cronbach's alpha from 0.893 to 0.958. The authors define EF-BLD as self-reported maladaptive [[cognitive-offloading|reliance]] and reduced effortful monitoring, not as a clinical executive-function deficit, so the instrument profiles habits rather than measuring capacity.

## What the scale actually measures

The EFB-LDS-AI asks learners to endorse first-person statements about how they work with AI: "The more I use AI, the less I try to personally come up with new solutions for my assignments" and "I make less effort to retain details because I know I can always ask AI again." Responses use a 5-point agreement scale (strongly disagree to strongly agree). Six subscales carry the items: Cognitive Offloading in AI-Based Learning (6 items), Illusion of Understanding (6), AI-Induced Informational Bias (6), Memory Erosion due to AI Reliance (6), AI-Induced Cognitive Laziness (5), and Decline of Critical Thinking (6).

The construct label deserves scrutiny. The paper states that EF-BLD "refers to AI-mediated executive-control learning difficulties, operationalized as self-reported maladaptive reliance behaviors and perceived reductions in effortful monitoring/verification during AI-supported learning, rather than a diagnosis of stable executive-function deficits." No working-memory task, inhibition task, or clinical cutoff appears anywhere in the study. "Memory erosion" is a perceived decline in the effort to encode and retrieve; "decline of critical thinking" is a self-reported drop in comparison and verification. Subscale scores describe study habits under AI use, not changed executive capacity.

The authors contrast the scale with the Behavior Rating Inventory of Executive Function (parent and teacher report), the Executive Skills Questionnaire-Revised (unvalidated in AI settings), and the Minnesota Executive Function Scale (performance-based, cultural fit untested in the Middle East), none of which they say screens specifically for AI-mediated difficulties. The theory base combines cognitive load, [[self-regulated-learning]], transactive memory, motivation, confirmation bias, and cognitive offloading, with [[metacognition]] as the implied counterweight.

## Two-phase development

The qualitative phase drew on semi-structured interviews with 18 purposively selected participants: cognitive science specialists, learning psychologists, educational technology experts, teachers using AI-based tools, and high school students. Interviews averaged about 35 min, with saturation reported after 16. Conventional content analysis produced 58 codes, 21 primary categories, 10 subcategories, and six final categories, which became the six dimensions.

Item generation combined 32 preliminary items from a literature review with 48 items from the qualitative analysis; merging and de-duplication left 53 items. Ten experts reviewed clarity, relevance, and overlap, removing three items and rewriting five. Quantitative face validity used an Item Impact Score threshold of 1.5; content validity used floors of 0.62 (Content Validity Ratio) and 0.79 (Content Validity Index), removing two further items. A pilot of at least 50 high school students, including think-aloud probing, produced a mean completion time of 9.1 min (SD = 2.3; range = 6–14). The paper calls the resulting form a 42-item scale, a figure that does not reconcile with the 35 items carried into analysis.

The quantitative phase tested 616 Jordanian secondary school students (370 male, 60%; 246 female, 40%; mean age 16.4 years, SD = 1.43), recruited through multistage cluster sampling between January and April 2025. Sample size was planned for 80% test power at 5–25 respondents per item. The sample was split into two random subsamples of 308, for exploratory and confirmatory factor analysis respectively.

## Psychometric results

Sampling adequacy was strong (KMO = 0.856) and Bartlett's test significant (Chi-Square = 11675.11, df = 666, p < .000). Six factors with eigenvalues above one emerged, and the Promax solution explained 67.16% of the total variance. Contributions were close together: 12.45% (eigenvalue = 4.60), 11.43% (4.22), 11.37% (4.20), 11.18% (4.13), 11.25% (4.16), and 9.49% (3.51). Items 30 and 32 were dropped for loadings below 0.4, leaving 35 items.

The first-order six-factor model fit acceptably: χ2 = 1485.12, df = 538, χ2/df = 2.76, RMSEA = 0.076, TLI = 0.907, GFI = 0.903, IFI = 0.916, CFI = 0.916. The second-order model was nearly identical (χ2 = 1507.06, df = 547, χ2/df = 2.75, RMSEA = 0.076, TLI = 0.907, GFI = 0.903, IFI = 0.915, CFI = 0.915), and all 35 items loaded above 0.4 at p < .001. Internal consistency was high: Cronbach's alpha ranged from 0.893 to 0.958, ICC from 0.774 to 0.879, and McDonald's omega and composite reliability were above 0.89 for every dimension. Test-retest reliability used 50 respondents over a two-week interval against a 0.75 criterion.

Multi-group CFA across gender ran configural, metric, scalar, and strict invariance steps, with absolute changes in CFI and RMSEA below 0.01. Exploratory graph analysis added a network check: across 1,000 bootstrap samples the median dimensionality was 6, and a six-dimensional structure appeared in 99.8% of samples (998 of 1,000), with item stability above 0.75. A random forest model ranked AI-Induced Informational Bias highest (importance score = 56.5657), followed by Cognitive Offloading in AI-Based Learning (44.88452), then Decline of Critical Thinking, Memory Erosion, AI-Induced Cognitive Laziness, and Illusion of Understanding. Item-level permutation importance put EFB26 at 19.90%, EFB15 at 17.53%, and EFB3 at 17.45%.

## Reading the six dimensions together

The dimensions are treated as distinct but correlated rather than as one general factor. AI-Induced Informational Bias correlated with AI-Induced Cognitive Laziness at r = .51, Cognitive Laziness with Decline of Critical Thinking at r = .50, and Cognitive Offloading with Informational Bias at r = .38 and with Cognitive Laziness at r = .36. The authors read offloading as upstream: it reduces effortful processing, which feeds the illusion of understanding, weaker encoding, and less verification. They also state that the cross-sectional design makes these "theory-driven explanatory pathways rather than causal assertions," and that random forest importance rankings "should not be seen as causal or proof of 'true' construct dominance."

## Key Findings

1. The instrument has 35 items across six subscales: 6 each on cognitive offloading, illusion of understanding, informational bias, memory erosion, and critical thinking, and 5 on cognitive laziness.
2. Validation rested on 616 Jordanian secondary school students (370 male, 246 female; mean age 16.4 years, SD = 1.43), split into two subsamples of 308 for EFA and CFA.
3. The six-factor solution explained 67.16% of total variance, with factors ranging from 9.49% to 12.45%.
4. Confirmatory fit was acceptable for both first-order (CFI = 0.916, RMSEA = 0.076, χ2/df = 2.76) and second-order (CFI = 0.915, RMSEA = 0.076, χ2/df = 2.75) models.
5. Reliability was high: Cronbach's alpha 0.893 to 0.958, ICC 0.774 to 0.879, and omega and composite reliability above 0.89.
6. Exploratory graph analysis recovered six dimensions in 99.8% of 1,000 bootstrap samples, and measurement invariance held across gender with CFI and RMSEA changes below 0.01.
7. Random forest importance ranked AI-Induced Informational Bias first (56.5657) and Cognitive Offloading second (44.88452), with item EFB26 the single strongest predictor at 19.90%.

## What this means for practice

- **Screen, do not diagnose.** The scale profiles habits, so use it to open a conversation about how a learner works with AI, not to label a deficit or refer for clinical assessment.
- **Target the subscale, not the total.** A learner with high informational bias needs verification routines and contrasting sources; a learner with high memory erosion needs retrieval practice and AI-free recall. Averaging six dimensions hides the distinction the instrument was built to make.
- **Build [[ai-literacy]] around verification, not tool fluency.** The item content is about checking, comparing, and retaining, so instruction that only teaches prompting leaves the measured behaviors untouched.
- **Keep scores out of accountability systems.** These are self-reports of behavior students may not want to admit; using them for evaluation would corrupt the responses they depend on.

## Limitations

- The sample is 616 secondary school students in Jordan, so the factor structure is untested in other countries, grade levels, and adult or professional populations, a constraint the authors acknowledge.
- Every measure is self-report. The authors concede that scores may reflect disclosure tendencies as much as behavior and call for AI usage logs, behavioral verification tasks, and teacher or parent ratings.
- The design is cross-sectional, so the proposed ordering from offloading to memory erosion and reduced critical thinking is a theoretical pathway that the data cannot establish.
- No tool-specific exposure metrics were collected (platforms, dose, frequency, purpose), leaving open whether the scale behaves the same for light and heavy users.
- The item audit trail does not reconcile: the paper describes a 42-item form, then reports 35 items after removing two, and its [[generative-ai]] framing is inferred from item wording rather than specified.
- The conclusion asserts that the scale "reliably distinguished between learners with and without learning difficulties," but no group-comparison analysis is reported, and invariance across gender says nothing about mean-score equality.

## Citation

Ayasrah, M. N., Gharaibeh, M., Al Khatib, A. J., Khasawneh, M. A. S., & Aboutaleb, A. H. (2026). Exploring executive function-based learning challenges in AI-enhanced education: Development and validation of a novel psychometric scale using network and machine learning analysis. *Current Psychology, 45*, 855. https://doi.org/10.1007/s12144-026-09404-y
