---
title: "Effects of LLM use and note-taking on reading comprehension and memory: A randomised experiment in secondary schools"
created: "2026-11-12T20:30:00-05:00"
updated: "2026-11-13T00:40:00-05:00"
type: article
sources: ['raw/papers/kreijkes-llm-note-taking-reading-comprehension-2026.md']
source_url: "https://doi.org/10.1016/j.compedu.2025.105514"
source_depth: full text
confidence: high
evidence_context: educational
research_method: [experiment]
page_kind: [evaluation]
level: [secondary]
audience: [researchers, instructors]
discipline: [learning sciences]
foundations: [ai-literacy]
pedagogy: [metacognition, self-regulated-learning]
assessment: [assessment-validity]
technology: [generative-ai]
ethics: [ai-use-disclosure]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Kreijkes and colleagues ran a preregistered experiment in seven English secondary schools to ask whether a chatbot helps students understand a history passage better than taking notes does. Every student worked through two of three conditions — a chatbot, note-taking, or both together — and returned three days later for closed-book tests. Note-taking beat the chatbot on every measure, and the combination beat the chatbot on two of three. Students nevertheless found the chatbot easier, more helpful and more enjoyable, and preferred it. The paper's explanation is not that chatbots harm reading but that the activity students liked best did more of the cognitive work for them.

## Key Findings

1. **Note-taking produced better learning than the chatbot alone.** Students scored higher on literal retention, comprehension and free recall after writing notes than after querying the model.
2. **Combining the two recovered part of the loss, not all of it.** Notes plus chatbot beat the chatbot alone on literal retention and comprehension, and did nothing for free recall.
3. **Notes alone were stronger than notes plus chatbot.** The gap appeared on retention and comprehension, which suggests the model displaced some of the writing rather than adding to it.
4. **Students preferred the condition that taught them less.** They rated the chatbot easier, more helpful and more enjoyable than note-taking while scoring lower on every test.
5. **A quarter of students copied.** In the combined condition, roughly a quarter wrote notes that mostly reproduced the chatbot's output, and about one in six overlapped almost entirely.
6. **Students used the model to explore, not to check.** Most prompts asked for more information or a summary; only six of nearly five thousand questioned whether the model was trustworthy.

## What the study tested

The tests separate three kinds of reading outcome. Literal retention asked what the passage said, targeting the surface and textbase levels. Comprehension asked students to bridge and infer, targeting the situation model. Free recall was an open response scored on both. The layering follows the Construction-Integration tradition in [[reading-education|reading research]], and it matters here: an activity can improve a student's grasp of what a text says without improving what they can do with it.

The comparison is deliberately conservative: both tests were closed-book and delayed by three days, where most [[generative-ai|generative AI]] studies measure performance with the tool still available.

## How the experiment ran

Participants were 405 Year 10 students aged 14–15 from seven [[k-12|secondary schools]] in England; exclusions left 344. One group experienced the chatbot and note-taking, the other the chatbot and the combination, so every student completed two conditions with the chatbot as the shared reference. The passages covered Apartheid and the Cuban Missile Crisis (386 and 385 words); students had 10–15 minutes each, at most 20 prompts, and were not told they would be tested.

## What the scores showed

Notes produced the best performance on all three measures and the chatbot alone the worst. Against the chatbot reference, notes improved literal retention by about half a standard deviation, comprehension by close to four tenths, and free recall by two tenths. The combination improved retention and comprehension by roughly a tenth of a standard deviation each and had no effect on free recall. On an indirect comparison, the advantage of notes exceeded that of the combination on both retention and comprehension.

The engagement data run the other way. Students rated the chatbot easier, more helpful and more enjoyable than note-taking, spent less time on task, and preferred it by a wide margin. The authors read this as a [[metacognition|metacognitive]] problem: learners have limited insight into which activities produce durable learning.

The process data show the mechanism. When notes and chatbot were available together, a quarter of students produced notes with more than 70% trigram overlap with the model's output, and about one in six exceeded 90%. Prompt frequency also fell when notes were available, so note-taking did not simply add a step to the same interaction.

The 4,929 prompts are the paper's other contribution to [[learning-design|learning design]]: most asked for more information or a summary, a tenth were off topic, and only six questioned the model's trustworthiness.

## What this means for practice

- **Instructors:** sequence the tools rather than co-presenting them. Query first, close the chatbot, then write; the copying data is the reason.
- **Instructional designers:** build the writing step into the task instead of assuming students will do it. Blocking paste or requiring notes in a separate window are cheap levers.
- **Administrators:** do not treat enjoyment or perceived helpfulness as evidence that a tool works. Ask for a delayed, closed-book task before scaling.
- **Researchers:** the missing arm is reading only. Without it this design cannot say the chatbot produced less learning than ordinary reading.

## Limitations

- There was no reading-only condition, so the study compares three uses of the material and none of them against unaided study.
- The tests covered mastery of the assigned passages only; the authors suggest notes may support command of the text while the chatbot supports exploration beyond it.
- Participants received instructions and a demonstration but no training, so the copying may reflect a missing skill rather than a fixed property of chatbots.
- The sample was Year 10 students in seven self-selected English schools working with two history passages and GPT-3.5 turbo, which limits generalization to other ages, texts and systems.

## Connected Concepts

- [[reading-education]] — comprehension and retention as separate outcomes of reading instruction
- [[metacognition]] — learners' weak judgment about which activities produce learning
- [[self-regulated-learning]] — sequencing tool use so the student does the work
- [[learning-design]] — prompt patterns as a design surface for tasks

## Connected Articles

- [[gardella-copilot-fast-forgettable-2026]] — a controlled study in which speed with a copilot did not become learning
- [[chen-genai-programming-understanding-2026]] — two groups of programming students diverging in understanding
- [[pan-chatgpt-prequestions-memory-comprehension-2026]] — a generative use of the model that improved later retrieval

## Citation

Kreijkes, P., Kewenig, V., Kuvalja, M., Lee, M., Hofman, J. M., Vitello, S., Sellen, A., Rintel, S., Goldstein, D. G., Rothschild, D., Tankelevitch, L., & Oates, T. (2026). Effects of LLM use and note-taking on reading comprehension and memory: A randomised experiment in secondary schools. *Computers & Education, 243*, Article 105514. https://doi.org/10.1016/j.compedu.2025.105514
