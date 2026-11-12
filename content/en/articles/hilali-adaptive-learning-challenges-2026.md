---
title: "Exploring adaptive learning challenges and AI opportunities through educational professionals practices"
created: "2026-11-12T09:30:00-05:00"
updated: "2026-11-12T09:30:00-05:00"
type: article
page_kind: [synthesis]
research_method: [survey, thematic analysis]
evidence_context: educational
audience: [instructional designers, instructors, educational technology developers]
sources: ['raw/papers/adaptive-learning-challenges-professionals-2026.md']
source_url: "https://doi.org/10.1007/s44217-026-02232-z"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
verified: [citation, numbers, links]
technology: [adaptive-learning, personalized-learning, edtech-platform, generative-ai]
assessment: [feedback]
methods: [mixed-methods-research]
---

> **Synthesis:** A [[mixed-methods-research|mixed-methods]] survey of 90 education professionals — teachers, [[learning-design|instructional designers]] and trainers recruited through LinkedIn and academic networks — asked what stands between [[adaptive-learning|adaptive learning]] and everyday practice. Of the 90, 74 (82.2%) could name situations that required adapting to learners, but only 50 (55.6%) had implemented an adaptation, while respondents credited adaptation with improving [[student-engagement|engagement]] (98.9%) and retention (96.7%). Thematic analysis of the implementers' open-ended responses sorted their practice into four categories: content, [[pedagogy|pedagogical]], technological, and evaluative and supportive adaptation. Barriers were overwhelmingly practical rather than technical — missing information about learners, the time and material resources required to build differentiated materials, competing duties — and only 12% named technology itself. Over 80% wanted AI to structure training plans, generate resources and track progress; 41 respondents raised [[privacy|confidentiality]] concerns about content shared with AI tools. Because recruitment ran through LinkedIn and academic networks and the instrument was a single self-report questionnaire, the adoption and AI-readiness figures describe an early-adopter subpopulation rather than the profession, and no student outcome was measured.

## Key Findings

1. **Recognition does not become implementation.** Of 90 respondents, 74 (82.2%) identified situations requiring adaptation, but only 50 (55.6%) had implemented any adaptive measure at all.
2. **Four categories describe adaptation practice.** Content adaptation, pedagogical adaptation, technological adaptation, and evaluative and supportive adaptation organize how the 50 implementers described their work.
3. **The binding barrier is learner information.** Lack of accurate data on learners' needs, preferences and levels is the most frequently cited obstacle; only 12% named technology as a major barrier.
4. **Content creation is where the cost lands.** Time, material resources and competing professional duties dominate the obstacles to building personalized material, ahead of tool skill.
5. **The demand for AI is specific.** Over 80% wanted AI to structure training plans, generate resources, propose activities and monitor learners in real time.
6. **Privacy is the reservation participants voice.** 41 respondents expressed concern about the confidentiality of content shared with AI systems, the one doubt the survey quantifies.
7. **Adaptation is valued for engagement and retention.** 98.9% and 96.7% of respondents affirm those benefits, which are beliefs about adaptation rather than measured effects.

## The gap between knowing and doing

The paper's most quotable result is a distance, not a rate. Most could recognize a moment that demanded adaptation; just over half had built one. The authors read the discrepancy against literature that already reports low implementation in [[higher-ed|higher education]], and offer a deflationary explanation: positive perception may attach to the hope of benefits, while implementation meets the friction of a real course. Their obstacle hierarchy supports that reading: what sits at the top is not software but the absence of trustworthy [[learning-analytics|learning data]] and the hours required to act on it.

This matters for how the result is used. It is tempting to treat 55.6% as an adoption benchmark, but the authors warn that participants self-selected into a study of technology-enhanced learning, so both the implementation rate and the enthusiasm for AI-assisted design are best read as upper bounds on the wider profession — the same caution the knowledge base applies when [[interpreting-and-applying-aied-research|interpreting single-sample AIEd surveys]]. What the design cannot support is any claim that those who adapted achieved more: there is no comparison group and no outcome measure.

## What practitioners actually adapt

Asked what they had done, the 50 implementers described work mostly predating any AI system; thematic analysis sorted it into four kinds. Content adaptation covers simplification, popularization and the production of multiple versions of the same material. Pedagogical adaptation covers the choice of method — [[active-learning|active learning]], [[collaborative-learning|collaborative learning]], differentiated instruction, the flipped classroom — rather than the choice of artifact. Technological adaptation covers deliberate use of digital tools, including adaptive platforms and AI, to diversify media. Evaluative and supportive adaptation covers continuous assessment, immediate [[feedback]], remediation, and coaching for learners who fall behind.

The taxonomy refuses the usual binary between technological and human adaptation: three of the four categories are things a [[teacher-role|teacher]] does without software, consistent with the sample's low ranking of technology as a barrier. Read alongside the [[personalized-learning|personalized learning]] literature, the list also marks where the effort concentrates. Content adaptation is the category the authors expect to grow, since [[generative-ai|generative AI]] makes variant production cheap — turning a pedagogical ambition into a [[curriculum-design|curriculum design]] and quality-control problem rather than a technical one.

## Where AI is wanted, and what it would have to do

Participants were not asked to evaluate an AI product but what they wanted one to do, and the answers cluster around the design workflow rather than around instruction. The most requested features were personalized resource suggestions, interactive content generation, [[visualization]] of learner profiles, and real-time progress monitoring. Confidence was uneven in an informative way: respondents rated themselves strongly prepared to select AI-assisted pedagogical methods, share their practices and evaluate AI recommendations, but only moderately prepared to create the multiple resources adaptation requires.

The authors turn those preferences into four design requirements. [[student-modeling|Learner modeling]] should use [[educational-nlp|natural language processing]] and structured [[conversational-ai|chatbot]] conversations to collect [[prior-knowledge|prior knowledge]], preferences and difficulties directly from learners, addressing the missing-information barrier that the survey ranks first. [[knowledge-graph|Knowledge graphs]] should structure raw content and expose prerequisites for designer validation. Generative adaptation should produce variants against the learner and domain models. Dashboards should return progress to both learner and teacher. Each requirement keeps a [[human-ai-collaboration|human decision]] in the loop, which matches how respondents described themselves: prepared to judge AI output, not to delegate design to it.

## What this means for practice

- **Instructors.** Write the adaptation need down when you meet it. The survey's central gap is that 82.2% could identify a situation and only 55.6% acted on one, so keep an explicit list of the learners and moments that demanded a change and treat it as your design backlog rather than a memory.
- **Instructional designers.** Build the learner-information step before the content step: the most-cited obstacle was missing data on learner needs, preferences and level, so a short structured intake — prior knowledge, preferred format, known difficulty — buys more adaptation than another authoring tool.
- **Administrators.** Budget hours and materials, not just licenses. Only 12% of respondents named technology as a major barrier while time, material resources and competing duties dominated the list, so released time is the intervention the findings actually point to.
- **Researchers.** Treat adoption and AI-readiness percentages from LinkedIn-recruited professional samples as upper bounds, and pair them with an outcome measure — the study reports no student result, only respondents' beliefs about engagement and retention.

## Limitations

- The sample is 90 professionals recruited through personalized LinkedIn messages and academic networks, and the authors state that both the 55.6% implementation rate and the high readiness for AI features are likely higher than would be observed in the general population of education professionals.
- Participants came primarily from Morocco and France, which the paper names as limiting generalization to other institutional and cultural contexts.
- Data came from a single online questionnaire with no observation of practice, so social desirability bias is unaddressed and [[self-report-measures|self-reported]] adaptation cannot be verified against actual course design.
- The engagement (98.9%) and retention (96.7%) figures are respondent beliefs, not measured outcomes; no student-level learning measure appears in the study.
- The four design recommendations — learner modeling, content structuring, dynamic adaptation, feedback dashboards — are derived from the survey and prior literature; none was implemented or tested with learners here.

## Citation

Hilali, K., & Chergui, M. (2026). [*Exploring adaptive learning challenges and AI opportunities through educational professionals practices*](https://doi.org/10.1007/s44217-026-02232-z). Discover Education.
