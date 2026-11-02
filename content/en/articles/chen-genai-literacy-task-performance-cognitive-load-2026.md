---
title: "Beyond Access: How GenAI Literacy Relates to Task Performance, Motivation, Cognitive Load and Interaction Patterns in AI-Assisted Learning Environment"
created: "2026-11-02T13:20:00-05:00"
updated: "2026-11-02T13:20:00-05:00"
type: article
foundations: [ai-literacy, human-ai-collaboration]
pedagogy: [cognitive-psychology, student-ai-interaction]
technology: [generative-ai, llm]
methods: [quantitative-research, network-analysis]
research_method: [experiment]
discipline: [writing education]
level: [higher ed]
audience: [researchers, instructional designers]
page_kind: [evaluation]
published: "2026-10"
sources: ['raw/papers/chen-genai-literacy-task-performance-cognitive-load-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-02"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Chen and colleagues (2026) gave 162 university students in China a 15-item [[ai-literacy|GenAI literacy]] test, then set them to write a research abstract with a custom assistant built on DeepSeek V3, and asked what the literacy score predicts. The headline association is modest: total literacy predicted abstract quality at β = 0.283 (p < 0.001, adjusted R² = 0.063) after adjusting for prior writing knowledge and English proficiency, and it predicted lower perceived mental load at β = −0.364 (p < 0.001, adjusted R² = 0.127). Splitting the score into its four dimensions is where the study earns its place. Only Use and Apply independently predicted writing performance (β = 0.206, p = 0.042), and only Know and Understand independently predicted lower mental load (β = −0.344, p = 0.001). Neither the total score nor any dimension was reliably associated with [[motivation]] or [[self-efficacy]]. In the conversation traces, high-literacy students organized their interaction around clarification, advice-seeking and requests to improve the draft, while low-literacy students organized it around direct generation requests and factual questions. Literacy did not make students better at writing with [[generative-ai|GenAI]] in general; it decided which part of the task got easier and which mode of [[student-ai-interaction|interaction]] they fell into.

## Key Findings

- **Participants and task:** 162 university students (mean age 20.1, 22.4% female) read a research paper and wrote its abstract in an online platform whose ChatAI module ran on DeepSeek V3. Prompts were capped at 30 words by the system, and pasting was disabled in the writing interface.
- **The instrument:** the 20-item GenAI Literacy Assessment Test covering Know and Understand, Use and Apply, Evaluate and Create, and Ethics; Cronbach's α = 0.76, two-week test–retest r = 0.81.
- **Writing performance:** total score β = 0.283 (p < 0.001). At rubric-component level it was positive for Findings (β = 0.194, p = 0.035) and Professional Writing (β = 0.258, p < 0.001), negative for Contribution to Discipline (β = −0.180, p = 0.013), and unrelated to the introductory statement, purpose, method or length.
- **One dimension carried the writing result:** with all four entered together, Use and Apply was the only independent predictor of overall performance (β = 0.206, p = 0.042; joint p = 0.002, adjusted R² = 0.060).
- **A different dimension carried the load result:** total score predicted lower mental load (β = −0.364, p < 0.001; adjusted R² = 0.127), and Know and Understand was the only dimension independently associated with it (β = −0.344, p = 0.001; joint p < 0.001, adjusted R² = 0.140). No model predicted mental effort.
- **…and the two component-level surprises were negative and unrelated to application:** Contribution to Discipline was negatively associated with Evaluate and Create (β = −0.226, p = 0.021), while Professional Writing was positively associated with Ethics (β = 0.228, p = 0.016).
- **Motivation did not move:** no reliable association between literacy and self-efficacy or intrinsic motivation; the extrinsic coefficient was negative and nonsignificant (β = −0.123, p = 0.090).
- **The traces split by literacy group:** the low-literacy network organized around direct abstract-generation requests, factual questions, and challenging or clarifying questions; the high-literacy network organized around clarification, advice-seeking, improvement requests and meta-commands, so the difference is in how those behaviors connect, not only how often they appear.

## Study Design & Method

- **Design:** a single-session task study with a custom platform, ordinary least squares regression for the continuous literacy scores, and [[network-analysis|epistemic network analysis]] on the conversation traces.
- **Covariates:** a 15-item prior academic writing knowledge test (α = 0.87) and self-reported College English Test Band 4 scores, both included to isolate literacy from baseline ability.
- **Outcome measures:** rubric-scored abstract quality, selected MSLQ subscales for intrinsic motivation, extrinsic motivation and self-efficacy, and a cognitive-load questionnaire reported as mental load and mental effort.
- **Group comparison:** higher- and lower-literacy groups compared on prior English proficiency before their ENA networks were contrasted.

## What each dimension actually buys

Treating GenAI literacy as one number would have produced a clean and misleading story: more literacy, better writing, less strain. The dimension models show two different competencies doing two different jobs. Use and Apply — knowing how to operate and prompt the tool — is what shows up in the abstract's quality. Know and Understand — the conceptual grasp of what generative models are and how they behave — is what shows up in how hard the task feels. That split has a practical edge, because the two are teachable separately: prompting practice without conceptual grounding would plausibly raise output quality while leaving the perceived difficulty untouched, which is what the data implies.

The negative association is the part most worth arguing with. Students scoring higher on Evaluate and Create produced abstracts that scored *lower* on Contribution to Discipline, which the authors read through the lens of critical evaluation: a student who questions what the model offers may hedge, trim the study's claims, or pull back from asserting a contribution. The positive Ethics association with Professional Writing runs the other way and the authors read it as treating AI-generated prose with caution rather than adopting it, avoiding inflated claims and fluent imprecision. Both readings are post hoc explanations of single-session associations, and the paper is candid that its instrument cannot test them.

## What literacy did not change

Motivation and self-efficacy were flat. No dimension, entered alone or together, predicted them, and the study is explicit that this is a null rather than a near miss. That matters for how the equity case gets made: the argument for teaching GenAI literacy usually rests on both performance and confidence, and this dataset supports only the first. A student who learns to use the tool more competently may write better and feel less overloaded without feeling more motivated or more capable, which is a different outcome than the "AI-ready learner" framing promises.

## Literacy read from the traces

The ENA comparison gives literacy a process signature. Higher-literacy students moved between clarification, advice-seeking and revision requests within nearby exchanges; lower-literacy students generated content and retrieved facts. The authors also note two platform constraints — the 30-word prompt cap and the disabled paste — as conditions that may have pushed both groups toward shorter, more focused exchanges, which is a reminder that interaction patterns are co-produced with the interface.

The authors name the limit themselves: the GLAT items and the RQ3 interaction codes share conceptual content around prompting, evaluation and iterative refinement, so the comparison cannot establish that questioning style is separable from literacy or that literacy causes it. The honest reading is that assessed literacy and enacted literacy coincide here, not that one explains the other.

## What this means for practice

- **Instructional designers of AI-assisted writing tasks.** Design the literacy intervention around the dimension you need to move. If the target is output quality, prompting and operating skill is the lever the data supports; if the target is reducing perceived difficulty, conceptual understanding is. A single generic "AI training" module blurs two effects that behaved differently here.
- **Anyone building a literacy claim on confidence.** Do not assume competence raises motivation or self-efficacy. This study found no association after adjustment, so an evaluation that reports only performance and satisfaction is measuring half of what was hypothesized.
- **Interface decisions are pedagogy.** Capping prompt length at 30 words and disabling paste were deliberate constraints that shaped the interaction data. A tool that permits long pasted passages invites the generation-and-retrieval pattern the low-literacy group showed.
- **Researchers using a literacy test plus trace data.** Check for conceptual overlap before interpreting the comparison causally. Substitute non-overlapping behavioral outcomes, separate the subdimensions, or partial out the overlapping ones.

## Limitations

- Perceived load was measured once, after the task, without separating reading, writing, tool interaction or coordination, and without distinguishing intrinsic, extraneous and germane load; the authors state plainly that the association is not evidence the tool changed load.
- A single source text for the abstract task, motivation and load measured only post-task, and academic majors not recorded, so disciplinary background could not be compared or adjusted for.
- The sample was 22.4% female and drawn from one Chinese university, and the task was one genre of writing.
- Literacy and interaction codes overlap conceptually, so the ENA contrast describes literacy as enacted rather than establishing an independent effect.

## Citation

Chen, A., Liu, H., Ren, C., Lian, J., & Jia, J. (2026). [*Beyond access: How GenAI literacy relates to task performance, motivation, cognitive load and interaction patterns in AI-assisted learning environment*](https://doi.org/10.1002/jcal.70367). *Journal of Computer Assisted Learning*, 42, e70367.
