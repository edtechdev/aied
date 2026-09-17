---
title: "AI Personas: Can LLMs Replace Fieldwork in Experiential Learning?"
created: "2026-09-16T08:12:20-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
foundations: [limitations-in-aied-research]
pedagogy: [experiential-learning, social-emotional-learning]
technology: [conversational-ai, human-in-the-loop-ai, pedagogical-agent, prompt-engineering, simulation]
ethics: [culturally-relevant-pedagogy, global-south]
sources: ['raw/papers/ai-personas-fieldwork-experiential-learning-2026.md']
confidence: high
research_method: [case study, qualitative]
audience: [educators, instructors, curriculum designers, researchers]
level: [higher ed]
methods: [qualitative-research]
---

> **Synthesis:** Elhajj et al. (2026) report an emergency [[pedagogy|pedagogical]] substitution: when the 2024 war in Lebanon made community [[experiential-learning|fieldwork]] impossible for the HEHI 303 Experiential Learning course at the American University of Beirut, student groups interviewed ChatGPT-generated [[pedagogical-agent|AI personas]] instead of real stakeholders in needs assessment interviews and focus group discussions. Two HEI raters scored all 10 group prompts on five indicators, and [[conversational-ai|AI dialogue]] came out strongest where schooling normally wins anyway. Educational alignment (mean 5.00) and diversity of perspectives (4.90) topped the rubric, while group dynamics (3.80) and limitations (3.20) were weakest, where flat emotion, over-polished phrasing, absent disagreement and thin cultural specificity ran through every context. The authors conclude that AI personas are a useful complement and a crisis stopgap, not a replacement for real fieldwork.

## Key Findings

1. The study analyses all 10 AI persona prompts developed by 10 student groups out of the 63 students enrolled in the graduate HEHI 303 Experiential Learning course, each group working a distinct humanitarian case, with all personas built using ChatGPT 4.0.
2. Prompts were rated on a five-indicator rubric: Authenticity and Realism, Diversity of Perspectives, Alignment with Educational Goals, Group Dynamics & Coherence, and Limitations and Gaps, on a 1 to 5 scale, each scored independently by two HEI research assistants and averaged.
3. Educational Alignment was the strongest indicator, reaching a perfect mean of 5.00 across all ten prompts: regardless of context, personas produced usable material for stakeholder mapping, needs assessment, thematic coding and systems thinking.
4. Diversity of Perspectives scored a mean of 4.90, with nine of ten prompts generating broad demographic, occupational and geographic variation. The exception was Prompt 2, whose women's focus group produced near-identical answers, a pattern the authors warn risks reinforcing stereotypes about displaced women.
5. Authenticity and Realism averaged 4.38 and was highest where prompts were most locally specific (WASH professionals in Lebanon, Maasai women in Kenya, climate professionals in Ethiopia) and lower for broad or complex settings where responses drifted toward polished generality.
6. Persona register mattered: authority figures such as a Ministry of Education official returned bullet-point policy prose that "reads as a policy document rather than spoken dialogue", while youth, elderly and other vulnerable personas produced the most conversational, emotionally expressive exchanges.
7. Group Dynamics & Coherence was the most variable indicator (mean 3.80, range 2.5 to 4). Its lowest score came from Prompt 4, where 30 simultaneous Syrian women personas exceeded ChatGPT's capacity for group interaction and the output became a set of sequential interviews rather than a discussion.
8. Limitations and Gaps recorded the lowest scores everywhere (mean 3.20), a cross-cutting weakness the authors read as a structural property of current LLMs rather than a prompt-design failure: emotional flatness, repetition, no contradiction or hesitation, and little cultural specificity in every one of the ten contexts.
9. Inter-rater reliability was high overall: 84% exact agreement with a mean absolute difference of 0.15 points. Educational Alignment and Diversity of Perspectives reached 100% exact agreement, Authenticity and Realism 80% exact and 90% within ±0.5, Group Dynamics & Coherence 80%, and Limitations and Gaps only 60%, a gap the authors say means that indicator should be used alongside instructor reflection and student debriefing, not as a standalone metric.
10. Student groups were trained on a seven-step persona routine: specify the task, define role and context, request detailed background, state the role-play, state the aim of the interview, provide an interview guide, and ask for a conversational tone.
11. Specificity drove quality. More contextually detailed prompts produced richer, more differentiated responses, while vague prompts produced generic, culturally thin output, consistent with prior findings on prompt sensitivity in [[simulation|simulated]] interview training.
12. The cross-case conclusion is blunt: AI personas perform best against educational and diversity objectives and worst at reproducing the dynamic, unpredictable, emotionally layered nature of real fieldwork.

## Study Design & Method

This is a qualitative case study of a single bounded context: the HEHI 303 Experiential Learning course of the Humanitarian Engineering Initiative at AUB during the 2024 conflict, when students could not reach communities for needs assessments. The design is descriptive rather than comparative. Each group wrote one prompt to generate personas for simulated stakeholder interviews and [[qualitative-research|focus group discussions]], and the unit of analysis is the resulting prompt-and-dialogue set, not the students. The paper frames the work as analyzing student reflections alongside AI-generated dialogue, but the reported Results are the prompt-by-prompt and aggregated ratings; no separate student-perception survey or reflection scores are presented. Data collection is dated to December 2024, anonymised before analysis and granted a retrospective IRB exemption because the activity was originally course assessment, not research.

## Implications for Teaching Practice

The authors' recommendations are conditional rather than enthusiastic. AI personas are appropriate when physical access to communities is impossible or unsafe, and as low-stakes rehearsal before real fieldwork, for practicing interview guides, stakeholder dynamics and question sequencing. They should not be treated as equivalent substitutes where emotional complexity, cultural specificity and interpersonal dynamics are themselves the learning objective. The suggested mitigation is structural: pair AI role-play with real interviews so students can compare, and train students to interrogate AI output for inconsistency, bias and cultural generalization rather than accept it as evidence. [[human-in-the-loop-ai|Instructor oversight]] is load-bearing throughout, because over-generalized or inaccurate persona claims (for instance, assuming all students had online access) can pass into student analysis unchecked.

## Limitations

The paper's own stated limitations are substantial and it is candid about them. The study is a single descriptive case inside one course at one institution during one conflict, and it reports no learning-outcome data, so it cannot show that persona practice produced better competencies than fieldwork would have. The evaluation rubric was applied only to AI-generated dialogue; traditional FGDs and interviews were used informally during prompt development rather than scored as a matched comparison dataset. The two raters were HEI research assistants actively involved in the course, and their agreement was weakest on exactly the indicator that matters most here, Limitations and Gaps at 60% exact agreement, which the authors concede reflects genuine ambiguity in those judgments. They also flag that the rubric measures response quality, not student learning, and that emotion, contradiction and cultural texture were consistently underplayed regardless of geographic setting. Finally, the practical limitations they list for wider adoption are technical accuracy, training-data bias, privacy exposure through personalization, resource intensity, and the risk that over-dependence on AI erodes the interpersonal skills that [[social-emotional-learning|social and emotional learning]] depends on.

## Connected Concepts

- [[experiential-learning]] — the course model AI personas were tested against
- [[simulation]] — AI role-play standing in for community interviews and FGDs
- [[conversational-ai]] — ChatGPT 4.0 as the persona engine
- [[prompt-engineering]] — the seven-step persona prompt routine taught to students
- [[pedagogical-agent]] — personas cast as stakeholders rather than tutors
- [[qualitative-research]] — needs assessment, thematic coding and focus group method being taught
- [[human-in-the-loop-ai]] — instructor guidance required to contextualize inaccurate output
- [[human-ai-collaboration]] — the complement-not-replace framing the paper ends on
- [[culturally-relevant-pedagogy]] — the cultural specificity gap in AI dialogue
- [[social-emotional-learning]] — emotional nuance as the consistently missing element
- [[global-south]] — fragile, low-resource and conflict-affected educational settings
- [[limitations-in-aied-research]] — single-case, rater-based evaluation and its reliability ceiling

## Connected Articles

- [[adversarial-stress-testing-role-playing-agents]] — Stress-testing role-playing LLM agents
- [[conversational-agents-business-simulation-gaming-2026]] — Conversational agents in business simulation
- [[genai-simulate-patient-history-pbl-2026]] — Simulated patient histories for problem-based learning
- [[jiang-ai-powered-simulation-nursing-education-2026]] — AI-powered simulation in nursing education
- [[llm-qualitative-coding-consensus-2026]] — LLMs for qualitative coding and consensus
- [[human-vs-llm-ordered-coding]] — Human versus LLM coding of qualitative data
- [[empathy-coaching-chatbot]] — Chatbot coaching of empathy
- [[culturally-aware-aied-community-learning]] — Culturally aware AI in community learning
- [[human-ai-complementarity-social-emotional-learning-2026]] — Human-AI complementarity in social-emotional learning
- [[prompting-teachability-novice-personas-lbt-2026]] — Prompting teachability in novice personas

## Citation

Elhajj, I., Germani, A., Farah, J. M., Sabbagh, D., & Hajj Hassan, J. (2026). [AI Personas: Can LLMs Replace Fieldwork in Experiential Learning?](https://doi.org/10.3390/aieduc2030030). *AI in Education, 2*(3), 30.
