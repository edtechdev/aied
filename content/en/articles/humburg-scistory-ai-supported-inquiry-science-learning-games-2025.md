---
title: "SciStory: Designing AI-Supported Inquiry in Science Learning Games"
created: "2026-10-23T22:52:00-04:00"
updated: "2026-10-23T22:52:00-04:00"
type: article
foundations: [human-ai-collaboration]
pedagogy: [game-based-learning, inquiry-based-learning, scaffolding, collaborative-learning, storytelling-in-education]
technology: [conversational-ai, llm, generative-ai]
assessment: [feedback, formative-assessment]
research_method: [system development]
discipline: [science education]
level: [middle school]
audience: [instructors, educational technology developers, instructional designers, researchers]
sources: ['raw/papers/humburg-scistory-ai-supported-inquiry-science-learning-games-2025.md']
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

> **Synthesis:** Humburg and colleagues (2025) publish a design case for *SciStory: Pollinators*, a [[game-based-learning|narrative-centered science game]] in which middle schoolers investigate a community food-system dilemma and write a persuasive argument to the mayor, with [[conversational-ai|conversational agents]] embedded in the story characters to answer content questions, respond to their draft arguments, and offer help. The paper's value is less the game than the record of what the three agent roles demanded of the design and where each one broke in a pilot with three fifth-grade classrooms in rural Indiana. Knowledge agents worked as expected once their [[llm|model]] was bounded to a curated knowledge base. [[feedback|Feedback]] agents did get students revising arguments across multiple rounds, but the same model, a [[llm|Llama-3.1-8B]] at 4-bit quantization, could not notice the nuance in a revised argument, so students who fixed a problem were told the same thing again and became frustrated. The [[help-seeking]] agent, deliberately made optional to protect [[agency|student agency]], was barely used, while the frustration it was designed to relieve appeared anyway. The authors conclude that AI agents can supplement a teacher's attention in a class of thirty for the answering and critiquing roles, and that the role requiring emotional and pedagogical judgment is where the design still fails.

## Key Findings

- **Three agent roles, three different bars.** Knowledge agents answer science questions from a curated base; feedback agents comment on a draft argument or evaluate the final one; helper agents respond to confusion about gameplay or collaboration. The characters are the interface: students meet Nadia, Wes, Riley, Elliot, Tulip and Mayor Watson, never a label like "knowledge agent".
- **"Guide, not tell" required a different evaluation criterion.** The knowledge agents inherited a long-standing design habit of judging a response by accuracy and detail, which the chapter calls fairly straightforward. Agents meant to lead students toward their own answers could not be judged that way at all, because a fully correct answer gives the inquiry away; that reframing was the design team's sharpest disagreement.
- **Feedback produced revision, then repetition.** Students engaged in multiple rounds of argument revision after agent feedback, which the authors read as the design working. But students who added detail to address a critique often got substantively the same critique back, so the system that motivated revision also produced the frustration that stopped it.
- **The model was a stated constraint, not an afterthought.** The deployed system ran Llama-3.1-8B in 4-bit quantization, which struggles as prompt complexity rises from multiple goals, conditional logic and ambiguous language. The authors note that GPT-4o would likely handle those prompts better and weigh that against environmental and sustainability costs.
- **Optional help went unused.** A bee-shaped button let students summon the helper agent Tulip at any time, a choice made on teachers' advice to preserve agency. Students rarely pressed it, called an adult instead, and groups that had been told they needed more evidence complained they did not know where to find it.
- **The next iteration changes the interaction shape.** Rather than students submitting a question or new argument to start each exchange, the team plans back-and-forth dialogue that can compare argument revisions and offer emotional support over time, plus [[scaffolding|scaffolds]] that connect confusion to the help that exists.
- **The roles are not equally served by current models.** The conclusion is explicit that answering questions and critiquing arguments are within reach, while timely pedagogical support during frustration is not, which frames a question about how far [[generative-ai|generative AI]] can substitute for a teacher's professional judgment.

## Design context and team

The target was fifth through eighth grade in the Midwestern United States, and the design deliberately moved away from the team's earlier single-answer science mysteries toward an open-ended socioscientific dilemma with no correct solution to find. [[writing-education|Persuasive writing]] and argument were folded into [[inquiry-based-learning|inquiry]] so that gathering evidence and using it had a purpose inside the story.

The design decisions were shaped by constraints the team kept visible: partner districts in rural Indiana and North Carolina with limited bandwidth, no cell service, and low-powered laptops and tablets, a sharp contrast to the well-resourced settings educational games are usually built for. Multiple rounds of focus groups with teachers and students preceded the build, and the resulting team spanned three universities and a nonprofit, with five learning scientists, one instructional systems technology researcher and two computer scientists.

## What the pilot showed

The pilot ran in three fifth-grade classrooms in rural Indiana in spring 2025. Its most useful result is a mismatch between which agent roles the design could verify and which ones students needed. The feedback loop worked well enough to keep students rewriting arguments, which is a real [[formative-assessment|formative assessment]] outcome in a game that otherwise has no teacher circulating. The support loop did not work: the agent that was supposed to catch confusion sat behind an optional button, and the students most likely to need it were the least likely to click.

The authors are candid that the constraint was partly technical and partly structural. A smaller quantized model on school hardware cannot hold a complex prompt about argument quality and emotional tone at once, and a single-shot interaction gives it no history to compare a revision against beyond what the system tracks internally.

## What this means for practice

- **Developers building conversational agents for classrooms.** Bound knowledge agents to a curated base and judge them on accuracy; judge guiding agents on whether the student does more thinking, and expect those two criteria to pull against each other.
- **Designers of feedback loops.** Preserve and use the history of a student's revisions, since the failure here was not wrong feedback but feedback that did not register the change the student made in response to it.
- **Instructors.** An optional help affordance does not survive contact with a classroom; if the design's purpose is to catch confusion, the scaffold has to reach the student rather than wait to be summoned.
- **Teams deploying on school hardware.** The model tier is a design parameter, not an implementation detail, and choosing a small open model to fit rural devices has consequences for what pedagogical work the agent can do at all.

## Limitations

- This is a design case, not an evaluation: it reports no comparison, no learning outcome for the middle schoolers, and no measure of argument quality across conditions.
- The pilot evidence is the authors' account of what they observed in three fifth-grade classrooms and what students told them, without systematic coding or counts reported.
- The agents ran on a small quantized model chosen for rural hardware, so the failures described may say as much about that tier as about conversational agents in games.
- The authors are the designers, and the lessons are their own reflections on their design, with the next iteration described rather than tested.

## Citation

Humburg, M., Danish, J., Kim, Y., Hmelo-Silver, C. E., Dragnić-Cindrić, D., Ryan, Z., Glazewski, K., & Lester, J. (2025). [*SciStory: Designing AI-Supported Inquiry in Science Learning Games*](https://doi.org/10.14434/ijdl.v16i2.42049). *International Journal of Designs for Learning*, 16(2), 170-181.
