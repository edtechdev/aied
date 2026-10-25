---
title: "Towards AI learning ecosystems: A domino effect framework for generative AI tutoring in mathematics"
created: "2026-10-25T00:00:00-04:00"
updated: "2026-10-25T00:00:00-04:00"
type: article
authors: ["Ng'ambi, D.", "van der Merwe, J."]
published: "2026-01-01"
venue: "South African Journal of Higher Education"
source_url: https://dx.doi.org/10.20853/40-6-8438
foundations: [ai-literacy, ai-education, curriculum-design, learning-design, teacher-role, teacher-ai-competency, theories-and-frameworks, critical-thinking, human-ai-collaboration]
pedagogy: [problem-based-learning, scaffolding, sociocultural-learning, critical-pedagogy, socratic-method, metacognition, professional-training, student-ai-interaction, collaborative-learning, problem-solving]
technology: [generative-ai, llm, conversational-ai, intelligent-tutoring, pedagogical-agent, prompt-engineering]
assessment: [assessment, authentic-assessment, feedback, ai-detection]
methods: [qualitative-research]
ethics: [ethics, global-south, equity-in-ai-education, privacy, guardrails]
research_method: [case study]
discipline: [math education]
level: [k 12, secondary]
audience: [curriculum designers, instructors, faculty developers, researchers, institutions, policymakers]
page_kind: [framework]
sources: ['raw/papers/ngambi-ai-learning-ecosystems-domino-framework-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
---

> **Synthesis:** Ng'ambi and van der Merwe (2026) report a [[qualitative-research|qualitative]] classroom study of [[generative-ai|generative AI]] tutoring in a Grade 9 mathematics class at a public high school in South Africa's Western Cape, contrasting 40 AI-learner chat transcripts produced under structured and [[problem-based-learning|problem-based learning]] designs. Analyzed through Computational Grounded Theory and framed by [[scaffolding]] within Vygotsky's Zone of Proximal Development, Laurillard's Conversational Framework and a critical AI literacy model the authors call SMART, the data are formalized as a Domino Effect Framework in which Initial Engagement, Sustainable Dialogue, Quality Scaffolding and Mathematical Understanding form a sequential cascade that [[problem-based-learning|problem-based]] contexts activate and structured contexts foreclose. The authors' central argument is that institutional responses defaulting to restriction and [[ai-detection|detection]] miss the point: the pedagogical role an AI tutor can play is decided upstream by [[curriculum-design|curriculum design]].

## Key Findings

- **Curriculum design, not the tool, decides what the tutor can do.** The same [[llm|large language model]], configured identically and facilitated by the same researcher, produced extended, thoughtful exchanges in [[problem-based-learning|problem-based]] tasks and short, transactional exchanges in structured procedural tasks, where a learner asked, the AI supplied the steps and the result, and the learner closed with "Ok, thanks."
- **A four-stage cascade, not a static feature.** The [[theories-and-frameworks|Domino Effect Framework]] names four interrelated phases: Initial Engagement (entry driven by curiosity or a problem), Sustainable Dialogue (iterative exchanges that deepen understanding), Quality Scaffolding (structured AI guidance that breaks a task into manageable steps) and Mathematical Understanding (conceptual mastery and accurate procedure). Initial engagement triggers the subsequent cycles, and each domino names what happens when that stage fails: disengagement, one-sided or abruptly stopped conversation, support that is too easy or too hard, or learning that stays surface-level.
- **Scaffolding and understanding move together.** Among six pairwise correlations across the ten [[problem-based-learning|problem-based]] chats, Quality Scaffolding and Mathematical Understanding showed the highest association (r = 0.81), then Sustainable Dialogue with Mathematical Understanding (r = 0.75) and with Quality Scaffolding (r = 0.71). The weakest was Quality Scaffolding with Initial Engagement (r = 0.47), implying early interest alone does not predict the quality of the AI's support. These are exploratory heuristics on N = 10, indicative of tendencies in one classroom rather than [[learning-gains|generalizable findings]].
- **The AI tutor is best read as a scaffolding partner, not an information source.** In a [[problem-based-learning|problem-based]] excerpt the learner arrived with a formed hypothesis ("if I buy a cortado every day of a work week, I will be able to buy myself a Nespresso machine within 17 days"), and the AI's first move was to disaggregate it into the information required rather than affirm it, then to pursue the learner's reasoning with [[socratic-method|Socratic]] questions. In a structured excerpt on Pythagoras the same tool restated, drifted off-topic into simple interest, and the learner exited with "no."
- **The AI tool is itself a research instrument.** The tutor used, Mindjoy, was a wrapper around Claude 3.5 Sonnet, deployed with the Lorelei tutoring prompt and no external web access, a configuration that prioritizes pedagogical scaffolding over information retrieval. The authors state plainly that a different configuration would have produced different dialogue patterns, and that findings here are about one tool, in one configuration, in one setting.
- **Critical AI literacy is the enabling condition.** The SMART model, synthesized from [[ai-literacy|UNESCO's AI competency guidelines]] and two further models, organizes five competencies: Seeing AI capabilities and constraints, Managing context-appropriate implementation, Asking effective prompts, Respecting ethical boundaries and Thinking critically about outputs Without them learners cannot reach the AI's scaffolding potential, and the [[metacognition|metacognitive]] Think component is the cornerstone.

### The Southern framing

The paper is positioned as [[global-south|Southern scholarship]] rather than as research merely conducted in the South. The authors treat the fifteen-million-teacher shortfall in sub-Saharan Africa as an artifact of colonial education legacies, structural underinvestment and the persistent characterization of African pedagogy as deficient, not as a neutral supply problem. AI cannot substitute for the cultural, linguistic and political work teachers perform, they argue, but under pedagogical scarcity intentional [[learning-design|learning design]] and critical AI literacy can extend what teachers and learners do together. Ubuntu philosophy, with its emphasis on personhood constituted through relation, supports treating AI as a participant within a [[sociocultural-learning|social learning ecosystem]] rather than a surrogate teacher.

## Study Design

- **Context:** A public high school in the Central Karoo District of the Western Cape, a rural-urban context with limited prior exposure to AI tools, mixed-language learner backgrounds (predominantly Afrikaans and English), and curriculum aligned to the South African CAPS Mathematics framework. The school was reached through an existing institutional research agreement and the teacher's willingness to integrate AI tutoring into Grade 9 lessons.
- **Participants and data:** 40 individual chats between an AI tutor and Grade 9 learners across two sessions in February 2024. Session 1 had 30 participants generating 30 chats under a structured procedural design; Session 2 saw 10 of them return for a further 10 chats under a [[problem-based-learning|problem-based]] design. A chat is continuous dialogue across two 50-minute periods, learners free to continue until satisfied. Reduced second-session participation is attributed to the absence of formal [[assessment]] requirements.
- **Analytic focus:** The article concentrates on the 10 returning-participant chats, which offer richer evidence of sustained engagement and progression.
- **Analysis:** Computational Grounded Theory, the hybrid approach integrating human interpretation with computational pattern recognition, conducted in NVivo 15. Researchers manually read each transcript and coded instances of four predefined Domino Effects, each backed by direct textual evidence. Pearson coefficients were then calculated across the ten [[problem-based-learning|problem-based]] chats as an exploratory heuristic, interpreted as tendencies rather than [[educational-measurement|statistical]] findings.
- **Theoretical framing:** Three complementary frameworks. Vygotsky's Zone of Proximal Development positions [[generative-ai|generative AI]] as a "more knowledgeable other" capable of scaffolding; Laurillard's Conversational Framework is adapted so the AI mirrors the teacher role in iterative dialogue cycles; and Roper's four-level feedback model (verification, correct response, error flagging, elaboration) classifies whether responses offer developmentally appropriate scaffolding or superficial answers.
- **Ethics:** Approvals were obtained from both the university and the education department. The authors also argue that integrating Global North AI tools into Southern classrooms raises data sovereignty, algorithmic bias and political economy concerns that conventional consent and anonymity framings do not reach, and that the interaction data learners generate is held under foreign governance regimes.

## What this means for practice

- **Curriculum designers.** Build the task before you buy the tool. The study's most consequential design lesson is that the same AI tutor produced qualitatively different dialogue under different task structures, so [[curriculum-design|curriculum redesign]] toward authentic, [[problem-based-learning|problem-based]] scenarios is a prerequisite for AI tutoring to function as scaffolding rather than substitution. Structured procedural tasks did not fail because the model was weak but because the task offered no room for a cascade to develop.
- **Instructors.** Teach learners to initiate dialogue, not just to query. The [[socratic-method|Socratic]] excerpts show the AI responding well to a hypothesis the learner had already reasoned about, and its [[scaffolding]] depends on the learner supplying information and tolerating being questioned. This is a [[student-ai-interaction|student-facing]] competency that the SMART Ask component targets, and it is not prompt syntax.
- **Faculty developers.** Professional development for dialogical AI-supported learning cannot be reduced to technical training in tool use. The authors argue that schools are social spaces inhabited by actors with vested interests, professional identities, fears about displacement and classroom rituals sedimented over decades, and that decentering the teacher from sole knowledge authority, even when framed as progressive, carries identity, status and labor implications that teachers will reasonably resist if those implications are not addressed openly.
- **Assessment designers.** The structured-session design carried no formal [[assessment]] requirement, and participation dropped sharply in the second session when that requirement was absent. Assessment design is therefore not peripheral to AI integration: it shapes who returns, what they attempt, and whether dialogue continues long enough for scaffolding to occur. The paper's own [[feedback]] analysis, using Roper's four levels, offers a compact instrument for judging whether an AI response is scaffolding or merely answering.
- **Institutions and researchers.** Restriction-first policy is a legitimate response to real risks but forecloses the conditions under which AI might extend rather than replace teachers. The decision is not whether to integrate AI but how, and institutions adopting free or low-cost tools without [[guardrails]] risk reinforcing the inequalities those tools nominally address, since the value they generate through user data and dependency flows largely to companies in the Global North. The transcript can sustain a procedural claim, that the conversation continued and the answer was reached, but not a substantive claim about dialogical engagement. Recovering learner intent behind brief responses requires stimulated-recall interviews, classroom ethnography and longitudinal tracking over months rather than two sessions.

## Limitations

- One Grade 9 mathematics classroom in one South African school, 40 chats across two sessions, with the detailed analysis resting on 10 [[problem-based-learning|problem-based]] chats from returning participants. The authors state explicitly that the Domino Effect Framework and the SMART model are analytical contributions, not scaled-up findings about AI tutoring effectiveness in general.
- The Pearson correlations were computed across N = 10 chats and are presented as exploratory heuristics, indicative of tendencies within this bounded classroom context. No inferential testing is reported, and the authors caution against reading the coefficients as statistically generalizable.
- The researcher facilitated all sessions and conducted all analysis, so task framing, modeling of AI interaction and classroom presence shaped how learners engaged, and the same person selected and interpreted the transcripts. Computational Grounded Theory with unsupervised and supervised AI-enabled stages and predetermined theoretical lenses is described as making that influence visible rather than eliminating it.
- The AI tutor was one wrapper around Claude 3.5 Sonnet, deployed with the Lorelei tutoring prompt and no external web access. The authors note that interface choices, including which prompts are foregrounded and when the tool offers direct answers versus Socratic questioning, shape the dialogue structure in ways not directly under researcher or learner control, and that a different configuration would have produced different patterns.
- The interpretation is offered through a declared interpretivist lens with [[critical-pedagogy|critical pedagogy]] commitments, and the authors acknowledge that another reader would draw different inferences. The framework also names the sociology of the cascade incompletely: it does not explain why and how the sequence is initiated, sustained or refused.

## Citation

Ng'ambi, D., & van der Merwe, J. (2026). [*Towards AI learning ecosystems: A domino effect framework for generative AI tutoring in mathematics*](https://dx.doi.org/10.20853/40-6-8438). *South African Journal of Higher Education*, 40(6), 111-142.
