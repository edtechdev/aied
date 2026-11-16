---
title: "Developing AI-Powered Chatbots as Learning Assistants to Enhance Undergraduate Computer Science and Engineering Education"
created: "2026-11-16T09:30:00-04:00"
updated: "2026-11-16T09:30:00-04:00"
type: article
authors: ["Jackson, T.", "Mware, N.", "Jiang, H."]
published: "2026-09-30"
venue: "ASEE Computers in Education"
source_url: https://doi.org/10.18260/B4D7-9A-56086
foundations: [cognitive-offloading, human-ai-collaboration, ai-literacy]
pedagogy: [scaffolding, socratic-method, active-learning, student-ai-interaction]
technology: [conversational-ai, intelligent-tutoring, generative-ai, llm, prompt-engineering]
ethics: [privacy]
research_method: [survey, user study]
discipline: [cs education, engineering education]
level: [undergraduate, higher ed]
audience: [instructors, instructional designers, software developers]
sources: ['raw/papers/jackson-ai-chatbots-learning-assistants-cs-2026.md']
confidence: medium
methods: [mixed-methods-research]
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
evidence_context: educational
---
> **Synthesis:** Jackson, Mware and Jiang (2026) built two versions of a course [[conversational-ai|chatbot]] whose defining design decision was to refuse to answer the question. One implementation used the Rasa framework with hand-authored intents and dialogue flows; the other used OpenAI's GPT models with a system prompt engineered to withhold complete solutions and respond with hints, step-by-step explanations, [[socratic-method|Socratic]] prompts and reflective questions instead. The GPT version won on conversational flexibility and was deployed as an optional, ungraded assistant in an introductory C++ course at Benedict College and then extended to an assembly language course and a freshman college experience course. The evaluation is modest and the paper is honest about it: 21 survey submissions collected at the end of chatbot conversations, with means between 3.86 and 4.62 out of 5, plus informal interviews and side-by-side test cases comparing the customized bot with default ChatGPT on the same prompts. The finding worth keeping is the design tension the authors document rather than resolve — students rated the guided approach highly, but a subset wanted the direct answers every other tool gives them, and the reflective-question item was the weakest and most variable on the survey.

## Key Findings

- **Guided dialogue was rated highly, and the highest ratings were about comprehension and usability.** On 21 usage experiences, students rated how well the chatbot helped them understand the subject material at 4.62 out of 5 (SD 0.80), ease of use at 4.62 (SD 0.67), and willingness to use it again at 4.62 (SD 0.59). Confidence in understanding after use was 4.33 (SD 0.73) and perceived improvement in problem-solving or critical thinking was 4.38 (SD 0.67).
- **The design's core claim rests on the middle of the distribution, not the top.** The item asking whether the chatbot encouraged students to think through the steps of a problem instead of giving a direct answer averaged 4.24 with the widest spread of the comprehension items (SD 1.22), and the item asking whether it posed reflective or application questions was the lowest on the survey at 3.86 (SD 1.24). The authors read the second pattern as inconsistent delivery of exactly the behavior the system was built for.
- **Side-by-side test cases carry the pedagogical argument.** Given "Loop through numbers 1 to 100 and return the results," default ChatGPT returned working code; the customized bot returned structured guidance and prioritized C++ over the model's Python default. The same contrast is shown for a linked-list problem. These are demonstrations of behavior, not measures of learning, and the paper presents them that way.
- **Framework choice was a real trade-off, not a formality.** Rasa offered full control, on-premise hosting and fine-grained dialogue management at the cost of high setup complexity and significant NLU training work. The GPT approach offered low coding effort and better conversational quality at the cost of a black-box backend that the authors could not audit or constrain at the architecture level.
- **Prompt engineering is the instructional design.** What separated the tutor from a general chatbot was a system prompt with explicit role definition, prohibitions on full solutions, output limits and course-specific constraints, refined iteratively through [[prompt-engineering|prompt engineering]]. The paper is explicit that pedagogical quality was sensitive to prompt structure, token weighting and contextual framing.
- **Adjustment is a phase, not a failure.** Some students were initially frustrated by the refusal to supply complete code, particularly with free ChatGPT one tab away, and interview data indicate the resistance diminished as students recognized the learning benefit. The authors attribute this to transparency about the bot's purpose and consistent instructional framing.
- **The qualitative codes are thin but directional.** Of the coded responses, seven said nothing needed improvement, three praised the Socratic refusal to give direct answers, two asked for clearer non-skeleton examples, two reported crashes or message limits, and one flagged course-specific accuracy. Five responses were excluded as vague or as system prompt residue.
- **Three operational advantages are claimed from the interviews.** Round-the-clock asynchronous support for students catching up outside class hours, a no-code restriction that blocked copy-paste answers, and cognitive reconstruction as students broke problems into steps and re-examined their own logic.

## How the study was done

The project began in an undergraduate introductory C++ programming course at Benedict College, a small liberal arts institution, and the chatbot was later extended to an assembly language course and a freshman college experience course. Deployment was optional and ungraded. Students reached the bot through a web interface distributed by QR code, links in class announcements and email, and used it asynchronously outside class hours. It covered control structures, loops, conditional logic and basic algorithmic reasoning, and was also loaded with course logistics such as instructor contact details and assignment expectations. The authors stress that it was positioned as a learning assistant rather than an assessment tool, on the reasoning that removing grading pressure would encourage exploratory use.

Two implementations were developed. The Rasa version followed the framework's documented setup, with intents, training examples and conversational stories, and was evaluated for structured dialogue management. The GPT version began on GPT-3.5-Turbo with a token limit and temperature setting, later upgraded to GPT-5.5, and was constrained through role definitions, explicit instructions, output restrictions and verbosity controls refined over repeated test cycles. Both were compared on beginner-friendliness, coding requirement, control, setup complexity, hosting and best-fit use, and the GPT system was selected for classroom deployment and formal evaluation. The paper notes that all survey and interview data come from the GPT assistant, and that the Rasa discussion describes exploratory development rather than a separately evaluated condition.

The design was mixed methods. Comparative testing put the customized bot against baseline OpenAI on identical prompts, with interaction logs linked from the figure captions. Post-interaction surveys used Likert items on perceived usefulness, ease of use, engagement, reflective thinking and problem solving, with the instrument reviewed and approved by the institutional review board. Students could submit the survey more than once, each submission corresponding to a separate interaction, so the unit of analysis is the interaction rather than the student: 21 usage experiences, from an unknown number of individuals. Interviews were voluntary, informal and conversational rather than protocol-driven, with notes and summaries analyzed thematically and triangulated against survey responses and classroom observation. Participation was voluntary throughout, responses were anonymized, and no identifiable personal data were analyzed. The manuscript discloses that ChatGPT (GPT-5) and Gemini 3 were used for language refinement.

## What this means for practice

- **Withholding answers is a viable instructional design, and it needs framing.** The chatbot worked because students were told why it would not hand over code, and because it was not graded. An instructor adopting this pattern should plan the first ten minutes of class around that expectation, since the paper's clearest negative finding is the initial frustration of students comparing it with ChatGPT.
- **Write the refusal into the system prompt and test it against real prompts.** The specific behaviors that distinguished this tutor — role definition, a prohibition on complete solutions, output limits, C++ over Python — are prompt-level decisions. Adopting a model without that constraint produces the default answer-giving behavior shown in the comparison figures.
- **Expect the reflective-question behavior to be inconsistent.** It was the weakest item on the survey in both mean and variance, which suggests the prompt did not reliably produce it across sessions. If reflective questioning is the pedagogical goal, it needs to be tested case by case rather than assumed from the system prompt.
- **Decide hosting and auditability before choosing a framework, and budget for the failure modes students report.** The Rasa build gave control and cost setup effort; the GPT build gave speed and cost visibility. The authors name the black-box backend as the reason they could not tailor the model or audit its internal logic, which matters for any institution that needs to explain a tutoring decision. Students who hit free-account quotas also read the tool as broken, and orientation plus account guidance is a cheap fix for a problem instructors cannot configure on the backend.
- **Instrument the interaction, not just the satisfaction.** The paper's weakest evidence is its outcome evidence, and its own roadmap names the fix: moving to a platform that exposes interaction metadata and logs so usage patterns and response trajectories can be analyzed, then running pre/post and comparative designs on learning.

## Limitations

- The evaluation rests on 21 survey submissions treated at the interaction level, so the number of distinct students is unstated and repeated responses from the same person are counted as independent events. No response rate is reported against the number of students who used the bot, and the interviews that supplement the survey were informal and conversational, reported as a coding table with counts rather than a documented protocol, which limits what a reader can verify about how themes were derived.
- There is no learning outcome measure. Comprehension, confidence and problem-solving are self-reported perceptions, and the paper states that assessing measurable academic gains — through concept inventories, pre/post testing and comparative designs — remains future work.
- The comparison between the customized bot and default ChatGPT is a set of illustrative test cases, not an experiment. No students were randomly assigned to conditions, and no achievement difference between guided and direct-answer assistance was tested.
- No baseline condition exists for the courses themselves. The bot was optional and ungraded, so students who chose to use it may differ from those who did not in motivation or prior preparation.
- The system is not adaptive. The authors acknowledge that it delivered generalized conversational guidance rather than personalized intervention informed by [[student-modeling|learner modeling]], so it could not diagnose individual misconceptions or adjust support over time.
- The Rasa implementation is described but not evaluated with students, so the framework comparison rests on development experience and system selection rather than on comparative outcomes.

## Citation

Jackson, T., Mware, N., & Jiang, H. (2026). [*Developing AI-Powered Chatbots as Learning Assistants to Enhance Undergraduate Computer Science and Engineering Education*](https://doi.org/10.18260/B4D7-9A-56086). *ASEE Computers in Education, 15*(4), 264–286.
