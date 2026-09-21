---
title: "Levels of Education"
created: "2026-09-20T13:08:39-04:00"
updated: "2026-09-20T13:08:39-04:00"
type: concept
foundations: [ai-education, learner-identity]
pedagogy: [scaffolding, self-regulated-learning, prior-knowledge]
technology: [adaptive-learning, personalized-learning]
assessment: [assessment, learning-gains]
methods: [meta-analysis-systematic-review]
audience: [learners, parents and families]
institutions: [educational-policy-ai, governance]
ethics: [differential-effects-across-learner-groups, equity-in-ai-education, privacy, pedagogical-safety]
level: [preschool, primary education, middle school, secondary, k 12, higher ed, undergraduate, graduate, adult learning, special education, teacher education]
confidence: medium
---

> **Levels of education** — the bands that organize this knowledge base's `level` metadata: **preschool**, **primary education**, **middle school**, **secondary**, **k 12**, **higher ed**, **undergraduate**, **graduate**, **adult learning**, **special education** and **[[teacher-role|teacher]] education**. This page is the umbrella for that field rather than a duplicate of any single band page: it explains what changes as you move across the bands, why the school/university break matters more than the subject being taught, and where the AI evidence is dense and where it is thin.

## Questions to Consider

- A graduate seminar and a second-grade mathematics lesson are both "education," yet a tool that helps one can harm the other. What about the band — not the subject — changes what good AI use looks like?
- One trial with 132 second-graders found an adaptive mathematics tutor no better than a fixed sequence. Would you expect the same null for a university student, and what learner capacity does adaptation silently assume?
- 'K-12' and 'higher education' each compress several distinct settings into one label. Which comparisons do those labels hide?
- If a band's evidence base is thin, is the honest response to say nothing, to borrow from an adjacent band, or to design a study?

## Introduction

The `level` metadata field names the band of education a source is about — bands, not ages: **preschool**, **primary education**, **middle school**, **secondary**, **k 12**, **higher ed**, **undergraduate**, **graduate**, **adult learning**, **special education**, **teacher education**. Some name a stage of schooling, two name the very different halves of university study, two name a [[learners|learner population]] rather than a stage, and one names the people who teach. A source can carry several bands at once.

This page is the umbrella for that field; the band pages do the deep work and should be read with it: [[k-12]], [[early-childhood-elementary-ai-education]], [[higher-ed]], [[adult-learning]], [[special-education]], [[teacher-education]] and [[vocational-education]].

## What distinguishes one band from another

Bands differ along several axes at once, and AI research usually varies only one of them.

- **Capacity for self-regulation.** Two versions of the same second-grade mathematics tutor — identical content, interface, feedback and spoken hints, differing only in whether task selection followed a [[knowledge-tracing|Bayesian Knowledge Tracing]] mastery estimate — produced no posttest difference among 132 seven-year-olds (F(1, 124) = 0.32, p = .574). The authors' first explanation is developmental: [[adaptive-learning|adaptive systems]] presuppose learners who can engage feedback, regulate effort and stay focused, and young children have limited [[self-regulated-learning|self-regulation]] ([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **Who mediates the interaction.** In the school bands an adult stands between learner and tool. A survey of 270 preschool teachers found adoption intention driven by [[technology-acceptance-model|perceived usefulness]], ease of use, AI [[self-efficacy]] and [[anxiety-and-stress|AI anxiety]] — and the study deliberately excluded AI directed at children ([[preschool-teachers-ai-behavioral-intention-2026]]).
- **What the assessment is for.** Secondary assessment feeds external stakes; university assessment is coursework and credentials; graduate assessment is the making of a researcher.
- **[[prior-knowledge|Prior knowledge]].** Prior knowledge dominated that trial's posttest performance (F(1, 124) = 206.99, p < .001, η²p = .63), so a band label correlates with, but does not equal, a knowledge level.

## The school years and the university years

The most consequential divide is the break between school and university, and the two commonest labels each hide it or cross it.

Inside the school years the measured outcome changes sharply by band. In primary it is subject learning: 97 Chinese third-graders using [[conversational-ai|GenAI chatbots]] in [[science-education|science inquiry]] posed better problems than a search-engine control (t = 2.47, p = 0.015) ([[dai-chatbots-problem-posing-primary-2026]]). In secondary it often becomes attitude rather than achievement: a survey of 508 Taiwanese junior high students found experiential appeal working through enjoyment to shape intention to use [[generative-ai|ChatGPT]] for lyric learning (XM → PEOU β = 0.630; PE → ATU β = 0.369), with 81.5% on the free tier — an access-[[equity-in-ai-education|equity]] fact disguised as a technology-acceptance finding ([[chatgpt-music-education-junior-high-2026]]). Secondary also holds the corpus's largest learning warning: across 26,811 Chinese students in grades 7–12, homework scores rose 18% and completion time fell 30% while [[summative-assessment|closed-book exam]] scores dropped about 20% within six months, concentrated among the ~81% whose behavior indicated homework outsourcing ([[stromberg-generative-ai-learning-penalty-secondary-2026]]).

The university years split again. Undergraduate study is coursework under external judgment: among undergraduate writers at a minority-serving R1 university, [[ai-literacy]] predicted *which type* of [[llm]] reliance a student occupied rather than how much they used it ([[llm-reliance-types-undergrad]]). Graduate study is research training, where the outcome shifts from performance to formation. Among 420 astronomy doctoral and postdoctoral researchers, AI dependence was negatively associated with research [[agency|autonomy]] (r = −.355) and [[self-efficacy]] (r = −.321), and the indirect path to innovative behavior ran mostly through autonomy (−.115) rather than self-efficacy (−.069); supervisory support weakened the negative link to autonomy (B = .077, p = .020) ([[ai-mediated-research-agency-formation-2026]]). A doctoral student is judged on the judgment that AI dependence appears to erode; an undergraduate is not. Lumping both under 'higher education' hides that.

## Where the evidence is concentrated, and where it is thin

The corpus is unevenly populated, and the level field makes the imbalance visible.

**Dense.** Higher education is the most-covered band: the pages consulted here include an eight-week platform trial with 60 engineering students ([[ai-assisted-seminar-learning-information-literacy-2026]]), a survey of 395 education managers ([[ai-adoption-readiness-ukraine-education-managers-2026]]), a meta-synthesis of 18 African higher-education studies ([[data-privacy-ai-african-higher-education-2026]]) and a 420-researcher study of doctoral training ([[ai-mediated-research-agency-formation-2026]]). Primary and secondary also carry outcome evidence.

**Thin, and in places absent.** The pages consulted here report no child-outcome study at the preschool band at all; the nearest evidence is a survey of teachers' intentions that excluded child-facing tools ([[preschool-teachers-ai-behavioral-intention-2026]]). Middle school appears mainly as a *proposed* design and longitudinal study rather than reported outcomes ([[ai-lms-middle-school-longitudinal]]). The vocational band's strongest evidence is 63 [[self-report-measures|self-report]] responses from one course, which its authors say requires replication ([[ai-ive-pbl-vocational-design-creativity-2026]]). The graduate evidence is cross-sectional, with a reverse-path model fitting slightly better than the developmental one, so the direction from dependence to reduced autonomy is inferred rather than confirmed ([[ai-mediated-research-agency-formation-2026]]). Nothing consulted here reports AI outcome evidence for **adult learning** or **special education** as bands; those have their own coverage on [[adult-learning]] and [[special-education]], and this page does not generalize from school-age findings to fill the gap.

One pattern holds at every level surveyed: the human layer absorbs the hardest cases. A human expert stayed at the credibility decision point for engineering students even when algorithmic recommendation reached F1 = 0.64 ([[ai-assisted-seminar-learning-information-literacy-2026]]); supervisory support was the one condition that weakened AI dependence's negative links in doctoral training ([[ai-mediated-research-agency-formation-2026]]); and it is preschool teachers, not children, who are the adopters ([[preschool-teachers-ai-behavioral-intention-2026]]).

## What level-appropriate design actually changes

- **Autonomy and support.** With young learners, adapt the *level of support* — more [[scaffolding]], guidance or hints — rather than task difficulty; difficulty adaptation bought nothing in early primary, while mastery gating may have held adaptive students back ([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **Reading level.** An age-tailored chatbot used prompt variables for ages 7–9, 9–11 and 12–14, and 63 children from first through eighth grade treated it as a credible information source ([[vahedian-children-attitudes-ai-chatbot-2026]]).
- **Mediation.** [[parents-and-families|Parents]] and teachers mediate in the school years, [[librarians]] and supervisors in the university years — and the university counterpart is expertise rather than guardianship: the engineering platform kept a human where the algorithm was least confident ([[ai-assisted-seminar-learning-information-literacy-2026]]).
- **Assessment stakes.** The middle-school LMS design gates AI by activity, keeping bounded hints in practice mode and switching AI off on graded items ([[ai-lms-middle-school-longitudinal]]) — a precaution the secondary learning-penalty evidence makes concrete ([[stromberg-generative-ai-learning-penalty-secondary-2026]]).
- **Data-protection duties for minors.** Obligations scale with age: for minors the corpus's proposals are structural — data minimization, age-appropriate response constraints, role-based access control, auditable logs ([[ai-lms-middle-school-longitudinal]]) — and children's digital-safety awareness cannot be assumed, since some were willing to confide secrets in a chatbot ([[vahedian-children-attitudes-ai-chatbot-2026]]). For adults the duties shift toward consent, control and cross-border data flow ([[data-privacy-ai-african-higher-education-2026]]).
- **Governance that fits the band.** Readiness is layer-specific: 395 Ukrainian managers scored personal readiness 0.68 points above system readiness (d = 0.73), cited regulatory absence most often (58.5%), and rated [[personalized-learning|personalization]] — the benefit vendors promise most — lowest of all applications (29.4%) ([[ai-adoption-readiness-ukraine-education-managers-2026]]).

## Implications for AI in education

- **Read the level field before the topic field.** A finding from one band is a hypothesis for another, not a transferable result.
- **For the youngest bands, adapt support, not task difficulty** ([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **Don't port a tool across the school/university break without re-specifying who holds epistemic authority.** Dependence that lowers autonomy in doctoral training is a research-formation risk ([[ai-mediated-research-agency-formation-2026]]).
- **Gate AI by activity, not by enthusiasm**, and scale privacy duties with age ([[ai-lms-middle-school-longitudinal]], [[data-privacy-ai-african-higher-education-2026]]).
- **Design for the mediating adult of that band** — parent, teacher, librarian or supervisor — and measure their readiness separately from the institution's ([[ai-adoption-readiness-ukraine-education-managers-2026]], [[ai-assisted-seminar-learning-information-literacy-2026]]).
- **Say plainly when a band has no evidence**, and **don't mistake intention for achievement**: several level-specific studies report attitude or [[self-report-measures|self-report]] outcomes rather than learning.

## Connected Concepts
- [[k-12]]
- [[early-childhood-elementary-ai-education]]
- [[higher-ed]]
- [[adult-learning]]
- [[special-education]]
- [[teacher-education]]
- [[vocational-education]]
- [[learners]]
- [[parents-and-families]]
- [[differential-effects-across-learner-groups]]

## Connected Articles
- [[adaptive-intelligent-tutoring-primary-mathematics-2026]] — Adaptive versus non-adaptive tutoring in second-grade mathematics (Sibley et al. 2026)
- [[dai-chatbots-problem-posing-primary-2026]] — GenAI chatbots and problem posing with third-graders in primary science
- [[chatgpt-music-education-junior-high-2026]] — Junior high students' attitudes toward ChatGPT for lyric learning (Weng & Chiang 2026)
- [[ai-lms-middle-school-longitudinal]] — AI-integrated LMS designed for middle school, with a proposed longitudinal study
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — The generative AI learning penalty in Chinese secondary education (Strömberg et al. 2026)
- [[llm-reliance-types-undergrad]] — Four types of LLM reliance among undergraduate writers (Hossain 2026)
- [[ai-assisted-seminar-learning-information-literacy-2026]] — AI-assisted seminar platform with embedded librarian support for engineering students
- [[ai-mediated-research-agency-formation-2026]] — AI dependence, autonomy and innovation in doctoral and postdoctoral training (Han & Liu 2026)
- [[data-privacy-ai-african-higher-education-2026]] — Stakeholder views on data privacy in African higher education (Duncan 2026)
- [[ai-adoption-readiness-ukraine-education-managers-2026]] — Education managers' AI adoption readiness across Ukraine (Kremen et al. 2026)
- [[ai-ive-pbl-vocational-design-creativity-2026]] — AI-enabled immersive PBL for vocational design students (Jin et al. 2027)
- [[preschool-teachers-ai-behavioral-intention-2026]] — Preschool teachers' intention to use AI in early childhood settings
- [[vahedian-children-attitudes-ai-chatbot-2026]] — Children's attitudes toward an age-tailored AI chatbot
