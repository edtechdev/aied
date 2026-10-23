---
title: "What the submission does not show: Complexifying cognitive offloading in students' mathematical work with LLMs"
created: "2026-10-23T09:45:00-04:00"
updated: "2026-10-23T09:45:00-04:00"
type: article
pedagogy: [self-regulated-learning, metacognition, help-seeking, student-ai-interaction, problem-solving]
technology: [llm, generative-ai, prompt-engineering]
methods: [qualitative-research, mixed-methods-research]
foundations: [cognitive-offloading, agency, human-ai-collaboration]
research_method: [case study, thematic analysis]
discipline: [math education]
level: [higher ed, undergraduate]
audience: [instructors, researchers]
page_kind: [evaluation]
sources: ['raw/papers/llm-math-homework-offloading-traces-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-23"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Kontorovich and Wallach (2026) followed 23 first-year [[higher-ed|undergraduates]] in a linear algebra course at an Israeli [[teacher-education|teacher education college]] through three differently designed homework tasks in which an [[llm]] was a legitimate resource. They coded all 429 prompts in 59 chatlogs as traces of [[self-regulated-learning|regulatory events]] and then compared each chatlog with the solution the student actually submitted. Prompts formed five structures, casting the model mainly as solver, explainer, or validator, and the mix moved with the task — ten of the 15 students who completed all three changed their dominant structure — yet the submissions did not move: 53 of 59 (90%) reproduced the model's product or revised it only in form. The finding that decides the argument is that this held for exchanges in which students had explained terms, conjectured, and asked the model to check their own ideas: 27 of the 30 chatlogs led by explaining or checking still ended close to the model's output. The authors conclude that a submission is not a trustworthy marker of [[cognitive-offloading|cognitive offloading]], which has to be asked part by part, in each of two regulatory spaces, and against the goal the student set.

## Key Findings
1. **Prompts state the problem, little else.** All 429 prompts set the mathematics and the task, but 1.4% named a toolkit, 12% a standard, and none pointed the model to a textbook, site, or course materials.
2. **Five structures, three main roles.** "Explain this term" took 43.4% of prompts, "Is my idea correct?" 27.5%, "Solve this problem" 25.9%; "Continue my idea" (2.3%) and "Your math is incorrect" (0.9%) were rare.
3. **The mix tracked the task, not the person.** Requests to check fell from 33% to 28% to 13% of prompts across tasks, and only five of the 15 students who completed all three kept one dominant structure.
4. **Submissions stayed close to the model.** Of 59 solutions, 14 (23.7%) were copy-paste, 39 (66.1%) minor revisions, two major revisions, and four abandonments; 53 (90%) reproduced or lightly edited the product.
5. **Explaining did not survive into the submission.** In 27 of the 30 chatlogs led by explaining or checking, the submission still stayed close to the model's product, including all five that combined solving, explaining, and checking.
6. **Handing over the solving tracked copying.** Copy-paste accounted for 9 of the 17 chatlogs led by "Solve this problem" (53%), but for only one of the 16 chatlogs that involved checking (6%).
7. **Length carried the judgment.** Longer chatlogs drew on more structures (Spearman's ρ = .61), and all nine chatlogs containing "Continue my idea" or "Your math is incorrect" had at least seven prompts.

## Two regulatory spaces behind one submission

The unit of analysis is the prompt, not the answer. Following Winne and Perry's distinction between regulation as an aptitude and as an event, each prompt is read as a trace of a regulatory decision: it records the task set for the model, the mathematics put to it, and the roles the request assigned, but not the goal behind it or the [[metacognition|monitoring]] that linked one prompt to the next. The course supplies the other half. Read as a choice-affluent environment where [[generative-ai|genAI]] is an ordinary resource, it extends a source of knowledge that, unlike a textbook, will tell a full solution when asked, so how much the model discloses becomes the student's choice. Hence two spaces: the exchange itself, and the transition to submission, where students exercise [[agency]] over what to adopt, adapt, or abandon. Inferences from outcomes speak only to the second, which is why the design pairs every chatlog with its submitted solution and treats the [[student-ai-interaction|interaction]] as data.

## Five structures, and a mix that moved with the task

What varied across the corpus was the division of labor, and it clustered into five [[prompt-engineering|prompting]] structures. Counting chatlogs rather than prompts sharpens the pattern. In Task 1, where students led the work with minimal guidance, "Solve this problem" appeared in 84% of chatlogs; Task 2 supplied a pool of learning-oriented prompts, and there nearly every chatlog explained (95%) with a median of three structures; in Task 3, 58% of chatlogs used a single structure. Exchanges led by solving were short, with a median of 4.5 prompts against 7 for explaining and 8.5 for checking, and the 12 chatlogs that used it alone had a median of two prompts. Solving crowded out the rest: the more a chatlog relied on it, the less it explained (ρ = −.67) or checked (ρ = −.58), while explaining and checking appeared together (ρ = −.01). Handing the mathematics over tended to close the exchange; asking about it kept the exchange open.

## What the submissions held onto

At submission the variation collapsed: the [[assessment|graded artifact]] carried almost none of it. Fourteen solutions reproduced the model's output unchanged, 39 revised it only in form, two revised its mathematics, and four abandoned it. Minor revisions were often repairs rather than mathematical judgments: the right-to-left Hebrew layout had scrambled formulas, and students trimmed and rephrased long explanations that used terms beyond them. Where judgment reached the mathematics it showed — Tamar borrowed the model's matrix definitions to disprove its claim, and one student wrote that the solution discards "AI because it didn't answer correctly." Prompting predicted the rest: copy-paste concentrated in the chatlogs that handed the solving over and was nearly absent from those that checked. Task 3 pushed hardest toward reproduction: the product students had to submit was itself an explanation, so the model's explanation was ready to hand in, and no submission departed from it beyond minor revisions. Writing the solution was the part of the work these students kept least.

## Offloading, part by part and toward a goal

The consequence for offloading is that one artifact can sit on top of two very different exchanges. In the 30 chatlogs led by explaining or checking, students largely kept the solving and put their own conjectures up for judgment, yet 27 ended in a submission close to the model's product. Hanna's exchange records defining a term, monitoring the reply for another unclear term, and conjecturing; none of it reaches her page. Read through [[help-seeking|help seeking]], "Solve this problem" is executive and "Explain this term" instrumental, and the two alternated within single chatlogs and across tasks, so a yes-or-no verdict on offloading is too coarse. Nor is offloading necessarily the aim: a student who set out to understand why a matrix product can vanish, probed it, and then let the model write the solution may have met their own goal while handing over the work the task existed to elicit. Worked solutions are an established route into [[math-education|mathematics]] for novices, but their value depends on whether students explain the example to themselves, which no submission shows.

## What this means for practice

- **Instructors.** Require the chatlog with the solution and read the exchange before judging the artifact, and set a product the model's reply cannot satisfy: 27 of the 30 chatlogs led by explaining or checking still ended close to the model's output, and where the model's assigned role matched the product, as in Task 3, copy-paste rose to 6 of 19 submissions (32%).
- **Faculty developers.** Supply prompt pools that model divisions of labor other than handing over the solving. Task 2 produced the longest and most varied exchanges and both major revisions in the corpus.
- **Researchers.** Count clarification requests as monitoring. Only four prompts rejected a model reply outright, yet judgments appeared constantly as "what does this term mean" follow-ups.
- **Administrators.** Do not adjudicate [[ai-misuse-learning-harm|AI misuse]] from a submitted solution alone. In 53 of 59 cases the submission was close to the model's output, and that figure covers exchanges with heavy student work as well as bare handovers.

## Limitations

- One course, one teacher education college in Israel, and 23 consenting students from a class of prospective secondary mathematics teachers, 15 of whom submitted chatlogs for all three tasks.
- Students were future mathematics teachers, so their prompting may reflect a professional interest in explanation that other undergraduates do not share.
- Chatlogs were a required part of the submission that the teacher would read, so they may have been curated; the authors note that "Solve this problem" appearing in most chatlogs argues against heavy curation but cannot rule it out.
- The three tasks ran in a fixed order and differed in content, so variation attributed to task design may reflect when in the semester each task fell and what it covered; the authors offer those readings as hypotheses.
- The prompting–submission link is correlational: prompts were nested within students and several cells were small, so no inferential tests were run; coding was interpretive, with 87% agreement (κ = .81) on prompting structures across the 40% of the corpus the first author coded independently ([[qualitative-research|qualitative coding]]).
- Model versions go unstated: students chose their own platform, most using ChatGPT, three Claude, and five Gemini, and the paper reports no model generation or data-collection dates beyond tasks distributed through one semester.

## Citation

Kontorovich, I., & Wallach, M. N. (2026). [*What the submission does not show: Complexifying cognitive offloading in students' mathematical work with LLMs*](https://arxiv.org/abs/2610.31335). arXiv preprint arXiv:2610.31335.
