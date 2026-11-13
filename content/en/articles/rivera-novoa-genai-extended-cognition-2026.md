---
title: "Generative Artificial Intelligence and Extended Cognition in Science Learning Contexts"
created: "2026-11-07T09:26:35-05:00"
updated: "2026-11-07T12:30:00-05:00"
type: article
published: "2026"
source_url: "https://doi.org/10.1007/s11191-025-00660-1"
sources: ['raw/papers/rivera-novoa-genai-extended-cognition-2026.md']
confidence: medium
page_kind: [framework]
research_method: [theoretical analysis]
discipline: [science education]
level: [higher ed]
audience: [researchers, instructors]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-07"
    agent: hermes-agent
---

> **Synthesis:** Rivera-Novoa and Duarte Arias (2026) ask what [[generative-ai|generative artificial intelligence]] does to the learner's role in [[science-education|science education]], and answer through the extended mind thesis: if cognition can include external tools, the question is not whether a chatbot extends thinking but what kind of cognitive artifact it becomes. Their argument is that these systems default to a substitutive artifact that performs the cognitive work and leaves the learner passive, while three empirically documented uses (feedback, [[assistive-technology|assistive technology]], and [[game-based-learning|gamification]]) show that the same technology can serve as a complementary artifact supporting an [[agency|active]] learner. Artifact and use, they insist, form one unit of analysis.

*This page summarizes a conceptual article. The authors report no study and no data of their own: the three cases below are built from other researchers' empirical work, and every figure is attributed to the study that produced it.*

## Key Findings

1. **Extension is not the same as enhancement.** Accepting that cognition extends into tools does not settle whether a particular extension helps the learner, and the authors argue that the extended cognition literature carries a "harmony bias" that studies successful coupling while neglecting extensions that diminish cognitive activity.
2. **Generative AI is substitutive by default.** Because these systems produce content autonomously, the ordinary use hands over the cognitive task itself. Fasoli's distinction among substitutive, complementary, and constitutive artifacts supplies the test: does the learner still perform the work?
3. **The passive pattern is visible in science classes.** In a survey of college STEM students in the USA, Wang and colleagues found that over half reported simply asking a chatbot to solve the problem, and 38% reported copying and pasting the problem they were meant to solve.
4. **Feedback can remain complementary.** Guo and colleagues' two-agent "Autofeedback" model, built for written science assessments, reduced over-praise by 14.17% and over-inference by 20.21% relative to a single agent, so its output corrected the student's reasoning instead of replacing it.
5. **Assistive uses are the clearest case.** Heidt documents image generation for students with aphantasia and speech-to-text tools for students with mobility impairments, uses in which the technology joins the learner's cognitive system rather than substituting for it.
6. **Gamification works through interaction, not content generation.** The evidence base is thin, with four papers linking gamification and generative AI between 2019 and 2024, but [[personalized-learning|personalized]] game environments such as Karaton and multi-character dialogue tools keep the learner acting and deciding.
7. **The unit of analysis is use plus artifact.** The authors reject both tool-centrism and pure use-centrism: the same chatbot is complementary when it critiques a draft and substitutive when it writes the draft, so instructional design decides which one appears.

## The extended mind as a frame for science learning

Clark and Chalmers (1998) argued that mental processes do not occur exclusively in the brain, and their case of Otto, who records what he needs in a notebook and consults it as external memory, remains the paradigm. The paper traces three waves: a parity principle that counts external processes as cognitive when they would count as cognitive inside the head, a complementarity view in which agent and environment contribute different properties to one coupled system, and a third wave stressing negotiable boundaries and dependence on cultural and material context. Transparency, niche construction, and plasticity explain why tools recede from attention and become part of the task.

[[science-education|Science education]] is a receptive setting for this account, since diagrams, equations, simulations, and laboratory instruments already carry cognitive work. Pritchard's epistemic anti-individualism follows: once cognition is accepted as extending beyond the skull, worries about skill loss from technology are said to belong to an individualist picture. The authors accept the anti-individualist premise but deny the inference. An extension can be real and still be harmful, which is why they turn to the kinds of artifact into which a learner extends.

## Why the default is substitution

Fasoli (2018) defines a cognitive artifact as a physical object created or modified to contribute to a cognitive task, and separates three kinds. A complementary artifact assists a process that could exist independently, as pencil and paper assist arithmetic. A substitutive artifact assumes the cognitive work, as a GPS replaces orientation. A constitutive artifact is necessary for the task, as a text is for reading. The same object can play any role depending on use: a phone camera can supplement memory, replace it, or become the object of analysis.

A chatbot asked to write an essay is substitutive, while a chatbot asked for a brainstorm that the student then structures is complementary. The paper frames this as a risk, not a necessity, since the tool alone does not determine its role. The risk is serious because generative AI is designed to produce the finished output. Ye and colleagues report that ChatGPT use fosters "inert thinking," the intuitive and unreflective mode in Kahneman's dual-process account, while Skulmowski documents a placebo effect and a "ghostwriter effect" in which users credit themselves with the model's work.

In science education the costs are concrete. Tang and Cooper argue that continuous interaction with the tool erodes the materiality and direct experience of natural phenomena on which scientific knowledge depends, and Tang's meta-synthesis recommends obtaining "outputs to complement, not replace, students' transduction across different representations in interactive ways." [[hallucination-risk|Hallucination]] and the treatment of a chatbot as an epistemic authority compound the problem. The substitutive use is therefore a case of non-harmonious extension, not a neutral shortcut around [[problem-solving|problem solving]].

## Feedback and assistive technology as complementary extensions

[[feedback|Feedback]] is complementary when it tells a learner where performance falls short of the target, because the learner must still act on the gap. Generative AI can produce such reports at scale, and Lin and colleagues' GPT-Assisted Summarization Aid analyzes students' scientific explanations and suggests deeper evidence-based reasoning while leaving the writing to the student. The known failure modes are over-praise, which overestimates performance, and over-inference, which attributes to the student what the model supplied. Guo and colleagues' multi-agent design addresses both by having a second agent review the first report, which is where the 14.17% and 20.21% reductions come from. Dickerson's [[socratic-method|Socratic]] chatbot works by a different route, asking counter-questions that force the learner to refine a definition, and Tang's dialogic use of [[llm|large language models]] follows the same logic.

Assistive technology is where the argument is least controversial. Heidt describes students with severe brain injuries, paralysis, autism, or aphantasia using generative tools to organize scientific tasks, retrieve specialized information, and render visual concepts they cannot picture; VIAssist offers detailed descriptions of uploaded photographs for visually impaired users, and tools such as AI4LA and TutorChat support reading and synthesis for students with dyslexia. These tools complement rather than replace the learner, continuing the tradition that runs from Otto's notebook to Pritchard and colleagues' claim that education must provide technological solutions that become part of a student's [[distributed-cognition|extended cognition]]. The policy gap is stark: UNESCO reported in 2023 that only four countries (China, Jordan, Malaysia, and Qatar) recommended generative AI for students with special needs.

## Gamification and the difference that matters

[[game-based-learning|Gamification]] uses badges, scoreboards, levels, and avatars to sustain engagement, and its effective uses require the learner's participation, which makes it complementary in principle. Sailer and Homner's meta-analysis found collaboration-based designs outperforming competitive ones for knowledge attainment, while critics warn about waning interest and increased cheating in competitive settings. The combination with generative AI is barely studied: Abbes and colleagues found only four papers explicitly linking the two between 2019 and 2024, and Huber and colleagues suggest the interaction has been confined to creating games and materials.

The cases they find point away from content generation. Karaton, a gamified literacy tool for students with [[neurodiversity|dyslexia]], analyzes error patterns and generates mini-games aimed at them, and its reading gains are reported at least as effective as traditional methods, with better engagement. Zhang and colleagues built a tool with five characters of differing personalities and a "Viewpoints Puzzle" that rewards conversations across perspectives. Song and colleagues' LearningverseVR adds immersive multiplayer dialogue with generated characters. In each case the model personalizes an interaction the learner still conducts, which is the criterion the paper keeps returning to: generative AI should offload routine work so that epistemic aims become reachable, not perform the epistemic work itself.

## What this means for practice

- **Instructors.** Design the task so the model's output is an object of student judgment rather than a submission: ask for a critique of a draft, a counter-argument, or a worked solution to inspect and correct, never the artifact being graded.
- **Instructors.** When using AI feedback, require students to log which suggestions they accepted, rejected, or revised, because over-praise and over-inference distort the picture when the report looks authoritative.
- **Instructors.** Keep assistive uses explicitly permitted in lab and field courses, including image generation, speech-to-text, and description tools, since a blanket prohibition removes a cognitive support some students depend on.
- **Designers.** Spend generative capacity on adaptive interaction and personalization in gamified environments, not on bulk production of prompts, levels, or materials that students consume passively.
- **Administrators.** Fund the complementary designs and the instructor training they require, and treat the substitutive default as the cheaper option it is, not a neutral baseline.

## Limitations

- The paper is a conceptual analysis with no data of its own, so its framework and central distinction are proposals rather than tested constructs.
- Its three cases rest on other researchers' studies, several of them preprints (Guo et al., Wang et al.), and the authors ran no intervention or measurement of their own.
- The gamification evidence is acknowledged as thin: four papers in five years, with the relation between gamification and generative AI described by the authors as still speculative.
- No operational measure is offered for deciding, in a live classroom, whether a use is complementary or substitutive; the judgment depends on an observer's account of which cognitive work the student performed.
- The feedback evidence is short-term, text-centered, and largely drawn from writing, so it says little about durable learning, transfer, or the science-specific inquiry skills the paper emphasizes.
- The account treats use and artifact as one unit but says little about how assessment rules, institutional policy, and model design steer teachers and students toward substitutive use in the first place.

## Citation

Rivera-Novoa, A., & Duarte Arias, D. A. (2026). [*Generative Artificial Intelligence and Extended Cognition in Science Learning Contexts*](https://doi.org/10.1007/s11191-025-00660-1). *Science & Education*, 35, 755-776.
