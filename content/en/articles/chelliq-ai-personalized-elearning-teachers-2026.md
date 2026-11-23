---
title: "The Role Of Artificial Intelligence In Supporting Teachers For Personalized E-Learning: Opportunities And Challenges"
created: "2026-11-23T11:30:00-05:00"
updated: "2026-11-23T11:30:00-05:00"
type: article
published: "2026-11-23"
sources: ['raw/papers/chelliq-ai-personalized-elearning-teachers-2026.md']
source_url: "https://doi.org/10.61166/bgn.v4i2.120"
confidence: medium
evidence_context: educational
page_kind: [framework]
research_method: [position paper]
level: [higher ed]
audience: [instructional designers, instructors, educational technology developers, administrators]
foundations: [learning-design]
pedagogy: [scaffolding]
technology: [personalized-learning, student-modeling, adaptive-learning, generative-ai, recommender-systems-and-learning-paths]
methods: [meta-analysis-systematic-review]
ethics: [privacy, equity-in-ai-education]
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-23"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Chelliq, Anoir and Khaldi (2026) propose a conceptual framework for AI-supported [[personalized-learning|personalized e-learning]] organized around the [[teacher-role|teacher]] rather than the algorithm. Its five layers — learner, [[student-modeling|data and learner model]], artificial intelligence, teacher decision support and personalized learning activity — place explicit human validation between what an AI recommends and what is taught, and an iterative cycle updates the learner model as new evidence arrives. The authors are direct about the genre: this is a "conceptual and analytical approach" whose purpose is to clarify relationships between components and provide a basis for later implementation and empirical evaluation. It reports no new data. Every figure in it belongs to another study, presented descriptively and deliberately not combined into one estimate. What the framework contributes is a division of labor — AI handles pattern detection, prediction and content preparation while teachers retain interpretation, [[pedagogy|pedagogical]] judgment and the final decision — and a warning that computational plausibility is not educational appropriateness.

*A conceptual framework, not an empirical study: there is no experiment, sample, instrument or result, and every [[quantitative-research|quantitative]] figure is attributed to a cited publication rather than measured by the authors.*

## Key Findings

- **The teacher sits inside the personalization loop, not outside it.** The framework places teacher validation between AI-generated recommendations and their classroom implementation, so personalization emerges from learner data, computational analysis, teacher judgment and an adapted activity rather than from an algorithm alone.
- **[[student-modeling|Learner modeling]] supplies the raw material.** The proposed learner model organizes profile, knowledge, behavior and preferences into four categories, explicitly described as revisable as new information becomes available instead of a fixed description of the learner.
- **Recommendation is distinct from decision-making.** The authors separate computational recommendation from pedagogical judgment: a suggestion can be relevant on the data yet unsuitable for the curriculum, the objective or the learner's circumstances.
- **The technology set is a menu, not a requirement.** [[machine-learning|Machine learning]], classification, clustering, recommendation systems, [[educational-nlp|natural language processing]], [[generative-ai|generative AI]] and [[learning-analytics|predictive analytics]] serve different stages, and the framework argues they should not be treated as interchangeable or used simultaneously by default.
- **Challenges are attached to each opportunity.** The article pairs every benefit with the condition responsible implementation needs, from data quality and biased recommendations to factual errors in generated content and unequal access to [[ai-literacy|AI literacy]].
- **Figures about the field are attributed, not found here.** The review-level counts the authors cite — 78 studies in one review, 142 empirical studies in another — are reports about other publications, presented descriptively and not pooled or recomputed.
- **The framework is untested.** The authors state it has not been implemented or empirically validated and that future work should build a prototype and evaluate its use in authentic settings.

## What kind of paper this is

The methods section describes a conceptual and analytical approach built from three complementary perspectives: the characteristics of personalized learning, the capabilities of artificial intelligence, and the pedagogical role of teachers. Four methodological components — personalized [[online-teaching-and-learning|e-learning]], learner modeling, [[ai-technologies|AI technologies]] and teacher decision support — are integrated into a conceptual architecture for AI-supported personalized e-learning. There is no data collection and no analysis of collected data, so the contribution is a vocabulary and a set of relationships rather than an estimate.

That shapes how its numbers must be read. The results section states that it rests on "a descriptive and thematic synthesis of published research," comparing selected literature reviews and empirical studies to identify main technologies, approaches, teacher-related applications and implementation challenges, and that the quantitative figures correspond to evidence in the cited publications. Because those publications differ in scope, selection criteria and periods covered, the authors present numerical findings descriptively and deliberately do not combine them into a single quantitative estimate.

## The framework's components

Personalized e-learning is treated through five dimensions: learner profile, content, activities, learning pathway and feedback. Learner modeling, drawn from adaptive hypermedia research, is organized into four categories — profile, knowledge, behavior and preferences — and the authors insist it stays open to revision rather than becoming a permanent profile. The artificial intelligence layer processes that information to identify patterns, estimate difficulties, classify learner situations and formulate recommendations, and may additionally support generating or adapting content; the framework does not assume all functions appear together in every system.

The teacher decision-support layer is the load-bearing move. Teachers examine AI outputs against their knowledge of the learner and the curriculum and decide whether a proposed intervention fits, with the authors stressing that this human validation matters most when recommendations are uncertain, learner data are incomplete, or a decision needs contextual understanding. The final personalized learning layer is the resulting response — a different resource, a modified activity, a changed sequence, additional feedback or further practice — and subsequent learner interactions generate new data that loops back into the learner model. An iterative cycle therefore connects data analysis to pedagogical action and then to renewed interaction.

The authors map each AI-supported function against the corresponding teacher responsibility: learner analysis pairs with interpreting findings in context, resource recommendation with checking pedagogical relevance and alignment to objectives, activity recommendation with selecting, modifying or rejecting proposals, learning difficulty prediction with examining evidence and deciding whether to intervene, feedback support with verifying accuracy, clarity and appropriateness, and learning pathway adaptation with judging whether the proposed progression fits.

## What the reviewed literature is reported to show

Because the paper's evidence is cited rather than measured, each figure carries its own attribution. One [[meta-analysis-systematic-review|systematic review]] analyzed 78 studies published between 2019 and 2024 and identified 11 categories of AI-mediated solutions for designing personalized learning paths; another synthesized 142 empirical studies on AI techniques for adaptive education; a third examined 125 studies across educational contexts; a fourth analyzed 25 Scopus-indexed articles between 2019 and 2024 focused on tertiary and [[higher-ed|higher education]]; and one screened 861 papers and retained 55. Within that last review, "personalized learning" appeared in 28 studies (50.9%), "[[adaptive-learning|adaptive learning]]" in 13 (23.6%) and "[[intelligent-tutoring|intelligent tutoring]]" in nine (16.4%), with the remaining five studies using other terms — the authors note these terms are not interchangeable.

On the teacher side, a two-study investigation is cited in which 15 [[k-12]] teachers took part in focus-group interviews and a second study involved 128 teachers. The first study's sample comprised nine female teachers (60%) and six male teachers (40%), with five participants from each of the elementary, middle and high-school levels, all with more than five years of teaching experience and prior use of AI-based educational services. Eight roles that AI could augment were identified — personalized [[curriculum-design|curriculum design]], instructional material development, foundational learning support, [[reflection|self-reflection]], student evaluation, career guidance, student management and administrative support. The authors caution that a sample of 15 participants is limited and that its composition does not establish how frequently such expectations occur among teachers generally.

## What this means for practice

- **Instructional designers.** Design the recommendation stage to end at a decision point rather than an output: a suggestion should carry enough evidence for a teacher to accept, modify or reject it, and the framework's pairing of AI function with teacher responsibility is a checklist for that handoff.
- **Teachers.** Treat AI-generated recommendations as pedagogical options, not instructions, and keep the interpretive work — checking fit with objectives, validating feedback accuracy, judging whether a learner's difficulty is temporary — with the person who knows the learner.
- **Educational technology developers.** Make the reasoning behind a recommendation inspectable and make rejection cheap; the paper flags over-reliance on automated outputs and reduced teacher autonomy when a system's logic is opaque or leaves little room for professional judgment.
- **Administrators.** Fund the conditions the framework depends on — data quality, privacy protection, accessibility and AI literacy — rather than treating the algorithm's sophistication as the measure of success.

## Limitations

- The framework is a conceptual proposal: the authors state it has not been implemented or empirically validated, so none of its layers or cycles has been tested in use.
- The evidence is a descriptive thematic synthesis rather than a systematic review, with no stated protocol, search record flow or pooled estimate, and the cited reviews differ in scope, selection criteria and period.
- No primary data exist, so every figure on teacher roles, terminology and review coverage is an attributed claim about another study rather than a finding of this one.
- The learner model, the technology taxonomy and the opportunity-challenge table are analytic classifications; their categories are asserted rather than derived from observed outcomes.
- Transfer is bounded by the reviewed literature's own contexts, and the authors point to implementation and empirical evaluation in authentic educational settings as the required next step.

## Citation

Chelliq, I., Anoir, L., & Khaldi, M. (2026). [The Role Of Artificial Intelligence In Supporting Teachers For Personalized E-Learning: Opportunities And Challenges](https://doi.org/10.61166/bgn.v4i2.120). *BEGINNER: Journal of Teaching and Education Management*, 4(2), 96–122.
