---
title: "A systematic mapping review on how generative artificial intelligence impacts social and emotional learning: A case of large language model chatbots"
published: "2026"
created: "2026-11-07T09:26:35-05:00"
updated: "2026-11-07T12:30:00-05:00"
type: article
research_method: [literature review]
audience: [researchers, instructors, instructional designers]
level: [higher ed]
page_kind: [synthesis]
sources: ['raw/papers/liu-genai-sel-mapping-review-2026.md']
source_url: "https://doi.org/10.1002/rev3.70141"
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-07"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Liu, Fang, Cui and Chiu (2026) map 43 empirical studies of [[llm|large language model]] chatbots used for [[social-emotional-learning|social and emotional learning]] in higher education, screening 6,878 records from five databases under PRISMA. Coding against a six-domain SEL model, they identify 15 competencies and 19 affordances grouped into seven genres. Cognitive competencies are targeted most often (24 studies), followed by identity (15) and social (14), while values (4) and perspectives (3) are thin. The most common affordances are immediate personalized feedback, information retrieval and interactive question and answer, and most interventions use only one or two of them. The ethical picture is weaker than the design picture: 38 of 43 studies reach only the first tier of transparency, 5 report any equality practice, and none reaches full reproducibility. The contribution is a framework mapping domains to affordances, not evidence that the mapping improves outcomes.

## Key Findings

1. **The evidence base is three years deep, not eight.** Although the search window ran from 2017 to 2024, the included studies appeared only in 2022 (n = 1), 2023 (n = 4) and 2024 (n = 38), which the authors connect to the November 2022 launch of ChatGPT. Asia contributed 27 studies (62.8%), Europe 7 (16.3%), Oceania 5 (11.6%), North America 3 (7.0%) and South America 1 (2.3%).
2. **Coverage is uneven across the six SEL domains.** Cognitive competencies appear in 24 studies, identity in 15, social in 14 and emotion in 7, while values (4) and perspectives (3) remain marginal. The most studied single competencies are critical thinking (n = 13) and self-efficacy (n = 9).
3. **Fifteen competencies are distributed across the six domains.** Cognitive: critical thinking, metacognition, cognitive flexibility and self-management and planning. Emotional: emotional regulation. Social: conflict resolution and social problem-solving, prosocial and cooperative skills, communication skills. Values: ethical decision-making and responsible AI use. Perspectives: cultural openness and perspective-taking. Identity: self-efficacy, agency and self-esteem.
4. **Nineteen affordances cluster into seven genres.** The genres are knowledge provision and curation, language support and conversation, assessment and feedback, teaching and management support, simulation and content creation, self-regulated learning and personalization, and emotional support. Immediate personalized feedback, information retrieval and interactive question and answer were the most common, and the median intervention deployed only two affordances.
5. **The corpus is methodologically conventional and built on one model family.** Twenty-nine studies were interventional (67.4%) and 14 observational; 18 were quantitative (41.7%), nine qualitative (20.9%) and 16 mixed methods (37.2%). Surveys supplied data in 30 studies (70.0%) and interviews in 17 (39.5%), while ChatGPT appeared in 38 studies (88.4%).
6. **Ethical reporting is thin across every dimension the authors coded.** Thirty-eight of 43 studies reached only Tier 1 transparency and five reached Tier 2, with none meeting Tier 3. Privacy reporting was compliant in 23 of 43 studies, partial in 13 and absent in 7. Only 5 studies reported any equality practice, and 15 reported beneficence safeguards, mostly informal.
7. **Affect and identity outcomes split rather than converge.** Twenty-one studies reported benefits such as motivation, self-efficacy and perceived support, while 10 reported risks including anxiety, over-reliance and diminished belonging. A latent profile analysis separated Enthusiastic Explorers, Adaptable Learners and Ambitious-Anxious Pioneers, showing that one design can engage some students and stress others.

## How the review was built

The authors followed PRISMA, searched Web of Science, Scopus, PsycINFO, PsycArticles and ERIC on 4 November 2024, and restricted the publication period to 1 January 2017 through 30 October 2024 because the Transformer architecture appeared in 2017. The search string combined LLM and chatbot terms with higher education terms but omitted SEL vocabulary, since competencies such as emotional regulation and empathy carry too many synonyms. From 6,878 records, 3,332 remained after duplicate removal, 86 went to full-text assessment and 43 were included. Two reviewers screened independently after a 20-paper calibration exercise, with agreement above 80% on a 25% sample. The review was not prospectively registered and no protocol was prepared.

Analysis combined deductive and inductive coding. SEL competencies were coded against the six-domain model of Brush et al. (2022), which adds perspectives and identity to the cognitive, emotional, social and values set. Affordances began from four themes borrowed from Yan et al. (2023) and were extended inductively into seven genres. Ethics coding covered transparency, privacy, equality, beneficence and affect/identity safety, the last split into harmful evidence, positive evidence and safeguards.

## What the fifteen competencies and nineteen affordances look like

Cognitive work dominates the corpus, and the review draws a deliberate line between SEL cognitive competencies and academic cognitive skills. [[critical-thinking|Critical thinking]], [[metacognition]], cognitive flexibility and self-management are treated as higher-order skills exercised in social and emotional situations, not as content mastery measured by test scores. The supporting studies are mostly instructional: ChatGPT as a problem-solving partner in nursing education, collaborative note-taking that raised metacognitive awareness in an EFL course, scaffolds for [[self-regulated-learning|self-regulated learning]] in teacher education, and reflective prompts in engineering design.

The emotional domain is thinner and less conclusive. Most studies measured affect rather than emotion regulation, and results run both ways: reduced foreign language anxiety and slightly lower stress in a music course, but no significant change in math anxiety, and evidence that AI social support can accompany higher loneliness and lower belonging than human support. Social outcomes rest largely on [[simulation|simulated]] interaction, including conflict management training, sales role play and multilingual exchange, with intercultural competence the clearest reported gain. Values and perspectives are the smallest domains, covering ethical decision-making through a debate-partner chatbot, responsible AI use, cultural openness and perspective-taking. Identity work centers on [[self-efficacy]] and [[agency]], with a caution that withdrawing AI assistance can depress performance and leave strategies unconsolidated.

The affordance side is more practical. Knowledge provision and curation was the most prevalent genre, and the three most frequent affordances were immediate personalized feedback, information retrieval and interactive question and answer. Simulation, brainstorming, language polishing and adaptive support appeared less often. Because the median intervention used two affordances, the framework is best read as a menu for deliberate selection rather than a description of rich, multi-affordance designs.

## The ethics gap

Transparency is the starkest result. Thirty-eight studies named only "ChatGPT" or another product without model version, prompt set or parameters, five identified the model and gave interpretable procedural detail, and none released the prompts, parameters and artifacts that would allow replication by AI researchers. [[privacy|Privacy]] reporting divided into 23 compliant protocols, 13 partial reports and 7 with no discernible consent or data management description. [[equity-in-ai-education|Equality]] was mostly measured rather than designed for: five studies reported subgroup analyses, accessibility support or multilingual accommodation, and 38 reported none of these.

Beneficence safeguards were rare and informal. Fifteen studies implemented or partly implemented something, usually as a design feature rather than a protocol, and most relied on generic advice rather than [[human-in-the-loop-ai|human-in-the-loop]] checks. No study reported safeguards specific to affect and identity safety, even though 10 studies documented anxiety, reduced confidence, over-reliance or isolation. The authors treat this as the central governance problem: the same interaction that produces motivational benefits can erode trust or belonging.

## A framework that has not been tested

The paper's main output is a SEL-LLM framework that maps the six domains to the observed affordances: assessment and [[feedback]] for cognitive work, sentiment analysis and emotionally intelligent feedback for emotional work, [[peer-assessment|peer review]] and multilingual aids for social work, ethical auditing for values, global case curation for perspectives, and progress dashboards and goal-setting assistants for identity. The authors present it as a design aid for instructors and a reporting aid for researchers, and invite additions, removals and revisions.

It is a synthesis artifact, not a validated instrument. The framework was derived from the same 43 studies rather than tested against new ones, and the review could not estimate effect sizes because comparable interventions were too few for meta-analysis. That limits what a reader can claim: the mapping shows which affordances have been attached to which competencies, not which combinations produce which gains.

## What this means for practice

- **Choose affordances deliberately and name them.** Since the median intervention used two affordances, a single chatbot feature is already a design decision. Use the seven genres as a checklist and state which affordance is meant to develop which competency.
- **Do not let cognitive gains stand in for [[social-emotional-learning|SEL]].** Cognitive competencies were the most studied domain, but the review separates them from academic achievement. A course that improves [[critical-thinking|critical thinking]] through chatbot [[feedback]] has not necessarily touched emotional regulation, values or perspective-taking.
- **Measure affect by subgroup, not only on average.** The latent profile result is the practical warning: the same activity engaged Enthusiastic Explorers and co-occurred with stress for Ambitious-Anxious Pioneers. Pre and post measures of anxiety, confidence and belonging, reported by profile, would surface effects that an aggregate mean hides.
- **Build the human layer and the escalation route.** The studies that reported harms reported almost no affect or identity safeguards. Instructor check-ins, identity-aware prompt guidance, safer settings for sensitive topics and a route to human support when crisis cues appear are the minimum protections the evidence implies.
- **Report at Tier 2 or better.** Model and version, verbatim prompts, procedures and consent arrangements cost little to document and are the difference between a study another instructor can use and one they can only cite.

## Limitations

- The search closed on 30 October 2024, so the review cannot speak to models released after DeepSeek-R1 in January 2025.
- No meta-analysis was possible because too few comparable interventions existed, so the framework carries no pooled effect estimates.
- The search was English only and covered five databases, excluding regional, subject-specific and gray literature, which likely reinforces the Asian concentration.
- Most included studies used GPT infrastructure, so transferability to other model families is untested, and the framework has not been field-tested.
- Two internal inconsistencies affect precise citation: the coding section describes 20 affordances while the findings report 19, and the cognitive domain appears as 24 studies in one table and 25 in the running text. This page uses 19 and 24, which match the enumerated lists and the figure.

## Citation

Liu, H., Fang, X., Cui, Q., & Chiu, T. K. F. (2026). [*A systematic mapping review on how generative artificial intelligence impacts social and emotional learning: A case of large language model chatbots*](https://doi.org/10.1002/rev3.70141). *Review of Education*, 14, e70141.
