---
title: Differential Effects Across Learner Groups
created: "2026-09-19T06:20:00-04:00"
updated: "2026-09-19T06:20:00-04:00"
type: concept
ethics: [equity-in-ai-education, inclusive-learning, digital-divide, accessibility, neurodiversity, multilingual-learning, bias-mitigation, culturally-relevant-pedagogy]
technology: [personalized-learning]
methods: [meta-analysis-systematic-review, mixed-methods-research]
assessment: [assessment-validity]
research_method: [quasi-experiment, survey]
audience: [instructors, instructional designers, administrators, researchers, learners]
page_kind: [evaluation, synthesis]
confidence: medium
connected_faqs: [equity-ethics-pedagogical-safety-research, research-gaps-aied]
reviewed_by: [editor]
---

> **Differential effects across learner groups** — what [[ai-education|AI in education]] research finds about how the *use* of AI and its *effects* differ across kinds of learners: [[special-education|students with disabilities]] and [[neurodiversity|neurodivergent students]], second-language and [[multilingual-learning|multilingual learners]], girls and boys, minoritized students, students from lower-income backgrounds, rural students, first-generation students, international students, and [[adult-learning|adult learners]]. The pattern worth carrying away is uneven in two directions at once: some strands have real evidence (disability, language) while others are close to empty (first-generation, international, refugee), and even the strong strands rarely establish that a *group* differs — they establish that a tool helped or harmed a sample of that group, which is a different claim. This page maps what exists, what it shows, and the methodological reasons a group average is not a prediction about a learner.

## Questions to Consider

- Your tool mostly works for the students in your class, and a subgroup of five struggled. Would a subgroup difference of that size be detectable at all in a study of this kind — and would you want to change the tool for the whole class on that evidence?
- Research on students with disabilities reports effects that vary by disability category. If two categories sit at very different effect sizes in the same [[meta-analysis-systematic-review|meta-analysis]], what does that say about treating "disability" as one group in a design decision?
- Several studies find AI tools that do *not* differ by gender in their effects, and other work shows that [[ai-feedback-quality|AI feedback]] and AI-assisted writing *do* reproduce gender stereotypes when personas or prompts carry them. How can both be true at once?
- Most fairness work tests simulated student personas rather than real learners, because real demographic attributes are not available to the model at inference in most deployments. What can a counterfactual persona audit establish, and what can it not?
- Reviewing the strands on this page, which learner groups are actually represented in the studies behind your tool's validation — and what would you do about a group that is absent?
- An intervention that raises outcomes for everyone but closes a gap (helping the students who were behind the most) has a different equity story from one that raises the average. When you evaluate a pilot, are you measuring the gap or the mean?

## Introduction

Two questions hide inside "does AI work for *this* kind of student?". The first is about effects: whether a tool produces different outcomes for different groups. The second is about use: whether different groups adopt, access, or interact with the same tool differently, which can shape outcomes without any differential effect at all. This page covers both, group by group, and states plainly where the literature stops.

It is deliberately not a duplicate of its neighbours. [[equity-in-ai-education|Equity in AI Education]] carries the normative and structural frame — access, representation, and outcome equity, and the argument for what AI in education *should* do. [[inclusive-learning|Inclusive Learning]] carries the design frame, including [[universal-design-for-learning|Universal Design for Learning]]. [[digital-divide|Digital Divide]] covers the access-and-skills layers. [[neurodiversity]], [[special-education|Special Education]], [[accessibility]], and [[multilingual-learning|Multilingual Learning]] go deep on single groups. What is left for this page is the cross-group evidence map and the appraisal question: how these effects are estimated, which groups are studied at all, and what a group-level finding licenses you to do.

## How group differences get reported, and why most of it cannot

**A single-group study is not a differential-effect study.** Most of the literature in this area measures one group in the absence of a comparison group. [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]] pooled 29 (quasi-)experimental studies of AI for students with disabilities and found a medium positive effect (Hedge's g = 0.588, 95% CI [0.349, 0.826]) — with no neurotypical comparator. That tells you an intervention helped, not that it helped this group differently.

**Subgroup analyses are usually too small to answer the question.** The [[ai-tutoring-micro-rct-gcse-science-2026|GCSE science micro-RCT]] is unusually explicit: its treatment-by-status interaction was 0.57 marks (95% CI −2.25 to 3.39), with stratified estimates of g = 0.28 (95% CI −0.04 to 0.59) for one group and g = 0.35 (95% CI 0.18 to 0.52) for the other. A subgroup interval that overlaps zero is a question for a local pilot, not a basis for a class-wide rule.

**Demographic attributes are usually simulated.** Real learner demographics are rarely attached to model inputs, so audits supply personas instead. [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto and Hovy (2026)]] ran six instruction-tuned models across three educational tasks under model-default, explicit-persona, and implicit-history conditions — 192,480 inference calls — and found that both explicit personas and *implicit* conversation histories move model behavior. Their distinction is worth keeping: awareness of learner differences can be desirable (adjusting feedback for a learner's first language), while the same sensitivity is a harm when it shifts the judgment of identical work.

**Fairness fixes may not generalize.** [[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]] reduced gender- and age-targeted error gaps in student-attention estimation on [[assessment-validity|validation]] data, but the gains did not consistently transfer to held-out subjects or repeated subject-level splits.

**Group labels hide the variation inside them.** In the same disability meta-analysis, students with specific learning disabilities, intellectual and developmental disabilities, or who are deaf showed a larger effect (g = 0.952) than students with autism spectrum disorder (g = 0.368) — a difference the authors report as not statistically significant across 239 effect sizes from 41 independent samples. "Disability" is not one group, and neither is "L2 learner".

## Disability and neurodivergence

This is the deepest strand in the knowledge base, and the one where the reporting is strongest.

- **Effects are real but unevenly distributed by outcome.** In [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]], [[learning-gains|academic performance]] showed the largest effect (k = 80, g = 0.929), ahead of daily-life and other skills (g = 0.766) and social-emotional skills (k = 144, g = 0.382). Publication bias was present (Egger's test β = 2.837, p < .001); trim-and-fill reduced the pooled estimate to g = 0.2694, which remained statistically significant. Read the headline effect and the bias-adjusted one together.
- **The field has reorganized around [[generative-ai|generative AI]].** The [[assistive-tech-neurodivergent-higher-ed-review-2026|scoping review of digital assistive technologies for neurodivergent students]] screened 766 records to include 40 empirical studies, of which 15 used generative AI and 11 used immersive formats. The strand is small and recent rather than mature.
- **Some AI supports equalize rather than differentiate.** [[adhd-video-segmentation-computing-education|Pimenova, Begel and colleagues]] segmented [[video-education|instructional videos]] into single-instruction chunks with fixed pauses in a within-participants study (17 ADHD, 10 non-ADHD); everyone improved, and ADHD participants' errors and hesitations fell to parity with their non-ADHD peers. That is the strongest available shape of evidence for [[universal-design-for-learning|Universal Design for Learning]] through automated content transformation: a general change that closes a gap, rather than a group-targeted fix.
- **What neurodivergent students say they need is often mundane.** [[neurodivergent-computing-students|A survey of 24 neurodivergent computing students and 20 neurotypical peers]], with four interviews, found significant discomfort with assignments that lack clear structure or carry ambiguous expectations — an accommodation that costs nothing to provide.
- **Design choices can also exclude epistemically.** [[genai-minoritized-knowledges-disability|Tali-Otmani (2026)]] argues that Anglophone, Western-centric training data marginalizes non-hegemonic ways of knowing and puts the situation of disabled learners at the center of that critique.

## Language: second-language, multilingual, and English learners

By article count this is the largest strand, and it splits cleanly into tool effects and tool harms.

- **Tool effects are promising and noisy.** [[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang and Zou (2026)]] meta-analyzed 11 studies (17 effect sizes, N = 595) of robot-assisted [[language-learning|language learning]] and found a positive overall effect (g = 0.83, 95% CI [0.46, 1.21]) with high heterogeneity (I² = 84.4%); of six moderators tested, only robot-learner interaction type was significant. An evidence base this size supports a provisional [[benchmark]], not a procurement decision.
- **The infrastructure itself is uneven before any tool is used.** [[structural-silence-underrepresented-language-ai-2026|Roy and Roy (2026)]] document the corpus gap with Bengali as the case: under 0.5% of global web content against roughly 49.5% for English, despite Bengali speakers being nearly 4% of the world's population.
- **Language of instruction changes outcomes across 294 higher-education students.** The same review reports that foreign-language content yielded lower outcomes than native-language instruction, and that bilingual [[cs-education|programming]] instruction outperformed English-only instruction.
- **Detectors penalize second-language writers.** [[hadra-ai-detector-accuracy-efl-2026|Hadra, Cambridge and Mesbah (2026)]] tested Turnitin and Originality against 192 texts: one detector classified 48 of 48 professionally authored texts correctly but misclassified four of 48 EFL student texts (91.6%). The asymmetry is the point — the error lands on the group whose writing is already being scrutinized.

## Gender

Gender research here divides into whether tools treat learners differently, and whether learners are exposed to stereotype-laden tooling.

- **A deliberately gender-neutral design showed no gender difference.** [[ada-female-coded-chatbot-gender-stereotypes-2026|A quasi-experimental study of 195 ninth-grade students]] tested ADA, a female-coded [[conversational-ai|chatbot]] grounded in Ada Lovelace: situational interest rose for both genders with no gender difference in emotional response, cognitive load, or academic performance. A role-model persona can be built without triggering stereotype threat.
- **But prompt content transfers bias into student work.** [[gender-bias-transfer-llm-writing|A controlled study with 123 participants]] had students write career-plan essays for paired profiles differing only in gender, under no-AI, neutral-AI, and gender-biased-AI conditions; the biased condition transferred gender-differentiated language into student writing and suppressed female [[agency]] asymmetrically. The researchers first confirmed the effect on 1,600 generated essays.
- **Space and framing matter as much as the tool.** [[all-girls-genai-makerspace-gender-equity-2026|An all-girls generative AI makerspace case study]] found girls valued the single-gender setting as safer and more relaxed, and warns against "girlification" — surface-level adaptation that leaves power relations untouched.
- **Model sensitivity is a model property, not a constant.** In [[edufair-bench-pedagogical-fairness-llm-tutors-2026|EduFair-Bench]], five tutors from 7B to 70B were audited across nine demographic levels: Qwen2.5-7B exceeded the |r| ≥ 0.10 bias threshold in 7 of 12 domain-by-dimension cells, while LLaMA-3.1-8B exceeded it once. Pedagogy-specific training reduced some biases and increased others.

## Race, ethnicity, and minoritized students

This strand is small in article count and strong in mechanism, because the evidence is about what AI does *with* a demographic attribute once it has one.

- **[[personalized-learning|Personalization]] is a bias vector.** [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]] shows [[llm]] writing-feedback tools shifting toward stereotype-aligned praise and withheld critique when feedback is personalized with a student's race, language, disability, achievement, or [[motivation|motivation]] — on identical essays.
- **The demographic cue can be implicit.** The counterfactual audit above found that conversation histories, not just explicit personas, moved scoring and feedback behavior — the same [[demographic-signals-llm-student-assessment-2026|192,480 inference calls]] result, and a reason a disclosure rule about *declared* demographics is insufficient.
- **Migration and language gaps can dominate.** In EduFair-Bench, the 70B model paired the largest language and immigration gaps with the smallest pedagogy gaps, so a tutor that looks pedagogically strong can be the one most sensitive to who the student appears to be.
- **Epistemic exclusion, not just error:** see [[genai-minoritized-knowledges-disability|the marginalization of minoritized knowledges]] above.

## Socioeconomic status, geography, and age

- **Digital literacy, not AI usage, is the mediator.** [[ai-divide-ses-personality-primary-education-2026|Wang and colleagues (2026)]] modeled survey and national registry data from 4,497 Grade 6 students in the Netherlands and found the link between personality traits and academic performance ran through digital literacy rather than AI usage intensity, with differences in digital literacy driven more by personality than by socioeconomic status — and SES advantages operating independently of AI engagement. The classic SES-only framing is incomplete.
- **Geography can be the binding constraint.** [[arc-hubs-k12-ai-robotics-rural-2026|ARC's account]] of [[k-12]] robotics and AI education reports that rural FIRST LEGO League participation fell in the 2020 remote season and never recovered while urban participation gradually did, and identifies sustained local technical mentorship — not kits or curriculum — as the constraint that is distributed geographically.
- **Adult learners are a separate design case,** covered by [[adult-learning|Adult Learning]] and the knowledge base's andragogy work rather than by K-12 studies.
- **Access still gates everything else:** see [[digital-divide|Digital Divide]] and the finding that [[access-not-enough-ai-tutoring-2026|access to AI tutoring is not enough]] without [[pedagogy|pedagogical]] integration.

## Where the evidence is missing

The honest finding of this survey is how thin some groups are. Each of these is a real gap in the evidence base, not a gap in this page.

- **First-generation students:** one study reports a usage difference rather than an effect. In [[student-ai-inquiry-types-cs2-2026|a CS2 inquiry study]], continuing-generation students treated the AI as an active [[problem-solving]] partner, while first-generation students took a confirmatory, validation-oriented role and asked fewer questions overall.
- **International students:** one [[mixed-methods-research|mixed-methods]] study (survey n = 60, interviews n = 14) on [[international-students-conversational-ai-adaptation|cross-cultural adaptation support]].
- **Gifted and high-achieving students:** effectively unstudied as a group in this corpus.
- **Refugee, immigrant, and displaced learners:** no studies.
- **Gender is still analysed as binary** in most of the work above, and disability categories vary across studies, so cross-study comparison of "the same" group has limits.

## Using this evidence without overfitting a group label

- **Treat group means as hypotheses about a population, never as predictions about a person.** Every differential claim above is a distributional statement.
- **Ask whether your learners were in the validation sample at all** before trusting a tool's claimed inclusivity; the neurodivergence and language strands both show that representation in development is the exception.
- **Prefer equalizing designs where the evidence allows.** The ADHD video-segmentation result — everyone improves, the gap closes — is a better-fitting goal for a general classroom than a group-targeted add-on.
- **Be careful with personalization that consumes demographic attributes.** The [[marked-pedagogies-linguistic-bias-writing-feedback|marked pedagogies]] finding is directly about that mechanism, and it applies to [[well-being|wellbeing]] check-ins, [[affective-computing|affective tutors]], and [[recommender-systems-and-learning-paths|recommender systems]] that profile learners.
- **Test locally, on the group you care about, with an outcome measured without the tool.** See [[interpreting-and-applying-aied-research|Interpreting and Applying AIEd Research]] for the appraisal habits and [[research-methods-aied|Research Methods in AI in Education]] for the designs that make a local test defensible.

## Connected Concepts

- [[equity-in-ai-education]]
- [[inclusive-learning]]
- [[digital-divide]]
- [[neurodiversity]]
- [[accessibility]]
- [[special-education]]
- [[multilingual-learning]]
- [[language-learning]]
- [[bias-mitigation]]
- [[culturally-relevant-pedagogy]]
- [[universal-design-for-learning]]
- [[assistive-technology]]
- [[global-south]]
- [[personalized-learning]]
- [[learners]]
- [[learner-identity]]
- [[interpreting-and-applying-aied-research]]

## Connected Articles

- [[zhang-ai-students-disabilities-meta-analysis-2024]] — 29 studies of AI for students with disabilities: g = 0.588, and g = 0.269 after bias adjustment
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — 766 records to 40 studies, 15 of them generative AI
- [[adhd-video-segmentation-computing-education]] — A general design change that brought ADHD participants to parity
- [[neurodivergent-computing-students]] — 24 neurodivergent students on structure, ambiguity, and collaboration
- [[genai-minoritized-knowledges-disability]] — Epistemic marginalization in AI, with disability as the case
- [[robot-assisted-language-learning-meta-analysis-2026]] — g = 0.83 with I² = 84.4% in a small L2 evidence base
- [[structural-silence-underrepresented-language-ai-2026]] — Bengali's under 0.5% of web content against English's 49.5%
- [[hadra-ai-detector-accuracy-efl-2026]] — Detectors misclassify EFL writing while scoring professional texts perfectly
- [[ada-female-coded-chatbot-gender-stereotypes-2026]] — A 195-student test of female-coded role models with no gender difference
- [[gender-bias-transfer-llm-writing]] — Gender-biased prompts transferring into student essays
- [[all-girls-genai-makerspace-gender-equity-2026]] — Single-gender space valued, with a warning against girlification
- [[edufair-bench-pedagogical-fairness-llm-tutors-2026]] — Tutor fairness varying by model, domain, and behavior dimension
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Stereotype-aligned feedback on identical essays
- [[demographic-signals-llm-student-assessment-2026]] — 192,480 calls: explicit personas and implicit histories both move models
- [[student-attention-estimation-fairness-2026]] — Fairness regularization that did not generalize
- [[ai-divide-ses-personality-primary-education-2026]] — 4,497 students: digital literacy, not AI use, mediates the gap
- [[arc-hubs-k12-ai-robotics-rural-2026]] — Rural participation that never recovered, and mentorship as the constraint
- [[ai-tutoring-micro-rct-gcse-science-2026]] — A subgroup interaction whose confidence interval crosses zero
- [[student-ai-inquiry-types-cs2-2026]] — The corpus's one first-generation usage finding
- [[international-students-conversational-ai-adaptation]] — The corpus's one international-student study
