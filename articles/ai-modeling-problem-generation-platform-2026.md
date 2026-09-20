---
title: "Creating an AI-powered platform for generating modelling problems: A case study on direct variation in secondary school"
created: "2026-09-01T14:00:00-04:00"
updated: "2026-09-20T06:30:22-04:00"
type: article
methods: [mixed-methods-research]
sources: ['raw/papers/ai-modeling-problem-generation-platform-2026.md']
foundations: [curriculum-design, learning-design]
technology: [generative-ai, intelligent-tutoring]
confidence: medium
research_method: [system development, case study]
discipline: [math education]
audience: [teachers, curriculum designers, instructional designers]
level: [secondary]
---

Lo and colleagues report the design, development, and evaluation of an AI-powered platform that generates mathematical modeling problems together with teacher-facing pedagogical recommendations for secondary school mathematics. The work responds to two gaps identified in the literature: teachers lack the time and suitable resources to design high-quality modeling tasks, and existing [[generative-ai]] tools typically generate conventional word problems or routine mathematics exercises rather than tasks that build modeling competencies such as making assumptions and identifying relevant factors. The platform was built through the ADDIE (Analysis, Design, Development, Implementation, Evaluation) approach, integrating seven published design principles for mathematical modeling instruction with [[rag|retrieval-augmented generation]] over expert-crafted exemplar tasks. Direct variation was chosen as an accessible, curriculum-aligned case.

The empirical component is an in-depth [[mixed-methods-research|mixed-methods]] case study. A focal teaching intervention involved 49 secondary students from Grades 10 (n = 15), 11 (n = 28), and 12 (n = 6) in a Hong Kong seminar, and an evaluative study drew on 36 in-service teachers. Four data sources were collected: a video recording of the 30-min lecture, pre-test and post-test scores, a student engagement survey, and a teacher evaluative survey. The workspace gives teachers three regions — a central panel for specifying requests (question type, free-text theme, and output language such as English, Chinese, or [[multilingual-learning|bilingual]]), a history panel of previously generated resources, and a conversational assistant with "chat" and "generate" modes. GPT-4.1 produces curriculum-aligned problems and teacher guides, while DALL-E 3 generates illustrations.

> **Synthesis:** Grounding [[generative-ai]] in explicit modeling design principles and a small base of expert-vetted exemplars yielded classroom-ready, curriculum-aligned tasks: students made large, statistically significant short-term gains in both school mathematics and modeling competencies, and teachers rated the resources positively on all five evaluation dimensions. The same design also bounded the result. Cognitive engagement was unrelated to achievement, discourse stayed instructor-led with limited student-initiated contributions, and accuracy problems persisted — unrealistic numerical values, oversimplified assumptions, and distorted AI-generated images. The authors therefore frame the platform as a human–AI co-design partner rather than a replacement for [[teacher-role|teacher]] expertise.

## Key Findings

1. **Large short-term learning gains.** Students (n = 49) scored significantly higher on the post-test (median = 15.00) than the pre-test (median = 7.00), confirmed by a Wilcoxon signed-rank test (Z = 6.10, p < 0.001, large effect size r = 0.62). School mathematics rose from a median of 5.00 to 8.00 (Z = 5.58, p < 0.001, r = 0.56) and modeling from 1.00 to 8.00 (Z = 5.95, p < 0.001, r = 0.60). The authors caution that the same-day pre-/post-test design and the structural similarity between lecture examples and test items may have produced test effects that inflated the gains.
2. **Modeling competencies improved markedly.** On the post-test, over 90% of the students provided correct solutions for making assumptions in both linear and exponential relationships, and about 70% correctly identified relevant factors. Even so, over 25% of the students were still unable to provide correct solutions on some items; identifying factors in the exponential context reached 85.7% correct.
3. **Engagement dimensions behaved differently.** Behavioral engagement positively predicted post-test scores (B = 1.279, p = 0.029, explaining 9.8% of the variance) and emotional engagement positively predicted learning gains (B = 1.359, p = 0.037, 9.0% of the variance). Cognitive engagement showed no significant correlation with either post-test scores or learning gains. Only 63.3% of students reported participating in class discussions (BE_3), and 51.0% reported being so involved that they forgot everything around them (CE_4).
4. **Classroom discourse stayed instructor-led.** Coding of 151 speech turns across five lecture episodes, using a mathematics-discourse-in-instruction framework, showed the resources structured the "I do, we do, you do" progression through naming, legitimations, examples, and tasks. The instructor's MDI moves decreased from 20 (I do) and 18 (we do) to 15 (you do) speech turns, while student responses accounted for only 2 to 6 speech turns in each problem-solving episode, leaving opportunities for extended, student-initiated contributions limited.
5. **Teachers rated the resources positively.** All five evaluative dimensions exceeded a mean of 4.0 on a 5-point scale, and over 80% of the 36 teachers rated each aspect "good" or "very good": realism and credibility of the context (M = 4.31, SD = 0.75), pedagogical value (M = 4.33, SD = 0.68), clarity, structure, and solvability (M = 4.25, SD = 0.60), technical correctness (M = 4.33, SD = 0.68), and inclusivity and ethics (M = 4.08, SD = 0.69; 80.6% agreement). Qualitative coding reached 91.4% inter-coder agreement.
6. **Data realism and task variety were the recurrent weaknesses.** Both expert and teacher feedback flagged numerical values adjusted for computational convenience; one generated context cited a petrol price of HKD 18 per litre when the market rate was around HKD 30 at the time of content generation. Fifteen teachers praised the everyday-life scenarios, while three cited oversimplified assumptions, three cited weak data realism, and five cited limited variety and difficulty, with few tasks involving inverse or joint variations.

## Platform design and development

The platform was developed across all five ADDIE phases. Seven design principles for mathematical modeling instruction (Galbraith, 2006; Geiger et al., 2022; synthesized in Lo et al., 2022) were embedded in the generation behavior through [[prompt-engineering]], covering the integration of real-world contexts with school mathematics, accessibility and feasibility for secondary students, and teacher support and didactical flexibility. Two subject experts drafted a pool of exemplar modeling problems and associated teacher guides, adapted from textbook and local exam word problems and rewritten to include modeling terminology and prompts to state assumptions and identify influential factors. Those exemplars formed the [[rag]] base and served a dual function: constraining generation to structurally similar vetted tasks, and ensuring every generated problem carried accompanying teacher guidance rather than question items alone. A three-region workspace — generation panel, history panel, and conversational assistant — supported reuse and adaptation across classes. An initial evaluation had two experts and five in-service secondary mathematics teachers (with 6 to 18 years of experience) review 20 sets of direct-variation resources, prompting revisions before classroom use.

## Classroom implementation and discourse

Seven sets of AI-generated resources (two for the pre-test, three for the lecture, and two for the post-test) were adopted for the teaching intervention. After a 5-min orientation and a 10-min pre-test, a 30-min lecture introduced mathematical modeling and worked through three problems using the "I do, we do, you do" approach, ending with a 10-min post-test and a 5-min engagement survey. Analysis of the videotaped lecture coded 151 speech turns across five episodes: introduction (Turns 1 to 35), the "I do" problem (36 to 66), "we do" (67 to 104), "you do" (105 to 136), and conclusion (137 to 151). The AI-generated resources carried substantial discourse weight in the three problem-solving episodes, supplying examples, legitimations of mathematical terms and procedures, and tasks. Yet student responses accounted for only 2 to 6 speech turns per episode, and the authors note that extended, student-initiated contributions remained limited — a pattern documented in Confucian-heritage mathematics classrooms, where teachers retain a dominant role.

## Student learning gains and engagement

Each test comprised one item on a basic linear relationship and one on a more advanced exponential relationship, with possible scores of 0 to 16, split evenly between school mathematics (8 marks) and mathematical modeling regarding assumptions made and other factors to consider (8 marks). Inter-rater agreement exceeded 90%. Overall scores moved from a pre-test median of 7.00 to a post-test median of 15.00; students performed fairly well on school mathematics beforehand (median = 5.00, "indicating that the majority of them were able to recall what they had learned about direct variation") but poorly on modeling (median = 1.00), then reached a post-test median of 8.00 on both components. Engagement was generally high — most survey items drew over 75% agreement — but the regression models explained only 9.8% and 9.0% of variance in post-test scores and learning gains respectively. The authors read the null result for cognitive engagement as evidence that the three dimensions operated as distinct constructs in a tightly scaffolded lesson, and that self-reported cognitive engagement may require more specific design requirements.

## Teacher evaluations

Thirty-six of 38 secondary school teachers from a workshop on mathematical modeling instruction rated the resources after viewing the lecture recording through visual learning analytics that synchronised video segments with coded speech turns, and after receiving the materials as PDFs within a one-week window. Quantitative ratings were consistently positive, but the authors place their emphasis on the critical comments, recognizing potential bias in the rater pool and acknowledging that the five-dimensional framework "originates from a conference paper" and was used as an organizing structure rather than as a formally validated instrument. The qualitative themes mirrored this balance. Teachers judged the scenarios authentic and curriculum-aligned, valued the clear structure and stepwise scaffolding, and noted potential for values education around themes such as sugar and electricity; against this, they reported that problem range and difficulty were limited, that assumptions and factors were sometimes oversimplified, and that some images contained inaccurate or misleading details, such as a distorted calculator.

## What this means for practice

- **Instructors.** Use the platform as a co-design partner that drafts candidate problems and teacher guides, while retaining responsibility for checking contextual realism, verifying correctness, and calibrating difficulty to students' ability levels — the teachers in this study flagged data adjusted for convenience and oversimplified assumptions as recurring weaknesses.
- **Curriculum designers.** Grounding generation in explicit modeling design principles and a small base of expert exemplars produced tasks that aligned with the local curriculum and needed no wholesale revision of schemes of work, addressing the practical constraint of insufficient teaching time; demand the same grounding from comparable tools.
- **Instructional designers.** Build the teacher back into the loop: teacher-editing interfaces, validation checklists for data realism (comparing generated values with plausible ranges from market prices and public statistics), an in-platform reporting button for hallucinations, and options to adjust task complexity, with corrected outputs fed back into the prompts and knowledge base.
- Since classroom talk stayed teacher-led, future teacher guides should embed academically productive talk moves — pressing for reasoning and challenging ideas — and present alternative AI-generated datasets with noise or outliers so students must justify their data-handling choices rather than working with a single simplified dataset.

## Limitations

- **Small, convenience samples.** Fifty-eight students enrolled in and attended the seminar, and 49 consented to participate; the 36 teachers came from a single workshop. The authors state the samples were convenience rather than representative, that local norms may have influenced discourse patterns, student outcomes, and teacher perspectives, and that findings have limited generalizability and should be interpreted as indicative rather than definitive.
- **One topic and one short lesson.** The study focused on direct variation — typically taught in Grade 10 — across a single 30-min lecture; the authors acknowledge that this scope limits generalizability and call for future research examining the platform across multiple topics.
- **Quality was judged by expert consensus and teacher survey, not classroom outcomes.** Content quality rested on a five-dimensional evaluative framework taken from a conference paper and used as an organizing structure rather than a formally validated instrument, with 91.4% inter-coder agreement on the teacher comments and acknowledged rater-pool bias.
- **No comparison condition and only immediate outcomes.** The case study assessed immediate learning outcomes and engagement without parallel instructional conditions using teacher-authored materials or generic LLM-generated outputs; at the time of writing, no local mathematics textbooks including modeling tasks were available for comparison. The authors also warn that the same-day pre-/post-test design and the structural similarity between lecture examples and test items may have inflated the observed gains, and they did not study teachers' use of the platform's conversational assistant to iteratively edit or deploy materials in their own classrooms.

## Connected Concepts

- [[math-education]]
- [[generative-ai]]
- [[learning-design]]
- [[curriculum-design]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[prompt-engineering]]
- [[human-ai-collaboration]]
- [[teacher-role]]
- [[student-engagement]]
- [[problem-solving]]
- [[rag]]

## Connected Articles

- [[didactical-teacher-assistant-dimensional-modeling]] — Both papers build AI teacher assistants that ground instructional output in domain-specific design frameworks to support lesson preparation.
- [[dai-chatbots-problem-posing-primary-2026]] — Both examine generative-AI tools that pose mathematics problems, here extended from primary problem-posing to secondary mathematical modeling.
- [[ai-tpack-mathematics-teacher-education-2026]] — Both situate AI integration in secondary mathematics teaching and consider the teacher competencies and beliefs required to use AI tools effectively.

## Citation

[Creating an AI-powered platform for generating modelling problems: A case study on direct variation in secondary school mathematics](https://doi.org/10.1016/j.caeai.2026.100640) — Lo, C. K., Huang, X., Cheung, H. W., Yee, T. L., Bai, S., Chen, G., & Tlili, A. (2026). *Computers and Education: Artificial Intelligence*, 11, 100640.