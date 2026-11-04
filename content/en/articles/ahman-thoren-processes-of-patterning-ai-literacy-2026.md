---
title: "Processes of patterning: AI, literacy, and the epistemological challenge"
created: "2026-11-02T04:25:00-05:00"
updated: "2026-11-02T04:25:00-05:00"
type: article
page_kind: [framework]
research_method: [theoretical analysis]
foundations: [ai-literacy, cognitive-offloading, agency]
pedagogy: [metacognition]
technology: [generative-ai]
assessment: [evaluative-judgment]
level: [higher ed]
audience: [instructors, researchers, educational technology developers]
sources: ['raw/papers/ahman-thoren-processes-of-patterning-ai-literacy-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-02"
    agent: hermes-agent
---

> **Synthesis:** Åhman and Thorén ask what is lost when literacy — practices of cognitive, cultural and ethical formation — is externalized to [[generative-ai|GenAI]] systems. Their answer is built on a distinction the AI-in-education literature tends to skip: GenAI does not merely support the production or transmission of knowledge, it participates in and can substitute for the cognitive operations through which knowledge is formed. Drawing on Aristotle's *phronesis*, Vygotsky's tool-mediated learning and postdigital theory, they introduce **patterning** — the developmental process through which a person reasons about complexity and organizes it into meaningful structures — and argue that AI study tools risk undermining the conditions under which patterning occurs, producing **borrowed judgment**: students served the products of reasoning without going through the interpretive struggle of reasoning. The Swedish exam tool Tentaklar is the illustrative case, and the paper closes with three design principles meant to keep a system from replacing judgment with its output.

*This page summarizes a theoretical article. The paper presents no data of its own; figures and findings mentioned below belong to the studies it cites, and the case it discusses (the Tentaklar platform) is used as an illustration rather than evaluated.*

## The Argument in Three Frameworks

The paper is explicitly a theoretical and conceptual analysis rather than an empirical study. It moves from autonomous to [[sociocultural-learning|sociocultural]] accounts of literacy, then builds a framing from three sources: Aristotle's *phronesis*, the practical wisdom that cannot be reduced to rule-following; Vygotsky's account of [[ai-literacy|literacy]] as tool-mediated, where the tool shapes the developmental process rather than just the output; and postdigital perspectives that treat human and non-human actors as entangled, with [[agency]] distributed rather than located. Their stated aim is to show "what the artifact reveals about literacy, agency and internalization," not how students actually use it.

The historical frame is deliberately un-alarmist before it becomes alarmist. Plato worried that writing would weaken memory, and the authors note that such concerns have largely been overemphasized in retrospect. What makes GenAI different is that earlier tools — typewriters, word processors, search engines — supported the production or transmission of text, while these systems generate summaries, arguments and conceptual structures, so they "do not simply assist thought; they participate in it and may even perform it." That shift is why the paper treats the question as epistemological rather than a matter of efficiency or [[academic-integrity|academic integrity]]: what is at stake if students no longer have to engage in the cognitive processes literacy traditionally cultivated?

## Patterning and Borrowed Judgment

**Patterning** is the paper's contribution to vocabulary. It names the process by which a learner reasons about complexity and organizes it into structures that are meaningful to them, and it is offered as a process-oriented account of where judgment comes from — closer to a developmental account than to a skill list. The authors argue that patterning depends on conditions: working across intersecting forms of knowledge, integrating [[prior-knowledge|prior knowledge]] and tacit understanding, and interpreting in context. Because it unfolds in open-ended environments, an environment that pre-organizes relevance on the learner's behalf can remove the very work the process requires.

**Borrowed judgment** is the failure mode they name. When a system's probabilistic logic preconfigures relevance, structure and interpretation, the learner's role shifts from forming patterns of meaning to navigating patterns already set. The output can be fluent, cited and even constrained to the student's own materials; the objection is not that it is wrong but that the student received an interpretation without practicing interpretation. This is the paper's sharper version of the [[cognitive-offloading|offloading]] problem: the question is not how much work is delegated but whether the delegated operation was the one that develops judgment.

## Tentaklar as the Illustrative Case

Tentaklar is an AI-based exam-practice platform built by students at Uppsala University. It generates answers grounded in the files a student uploads and cites the source passages, which the authors credit as a genuine transparency measure that constrains generation to the given corpus and reduces [[hallucination-risk|hallucination]] and unwarranted inference. Its study flow also has a social dimension the authors note rhymes with Vygotsky, though the tool was not designed around that theory.

Their critical reading is structural. Because the platform highlights what matters, prioritizes content and produces ready-made reasoning, it risks encouraging learners to align their thinking with externally imposed structures rather than developing situated judgment. The authors' conclusion is measured rather than dismissive: Tentaklar can support acquiring and organizing information while inhibiting the reflective and interpretive processes through which patterning and judgment develop. That is the same system being credited for citation transparency and criticized for pre-structuring relevance, which is the point — the design feature that makes an AI study tool trustworthy is not the feature that makes it developmental.

## Three Design Principles

The paper's constructive close turns "support patterning" into testable design requirements. A patterning-oriented system would:

1. **Require students to take a position rather than deliver answers** — posing prompts such as "Which of the following arguments is the strongest, and why?" or "What is the most reasonable interpretation of this dataset, and on what grounds?" so the cognitive task moves from reproduction to analysis and evaluation.
2. **Introduce disagreement, alternatives and productive tension** — presenting competing interpretations, foregrounding normative disagreements, and showing how different frameworks yield different conclusions, instead of smoothing complexity away.
3. **Support self-reflexivity and pattern articulation** — [[prompt-engineering|prompting]] students to explain what convinced them, whether their interpretive criteria transfer to other contexts, and how their way of assessing information has changed, so tacit structures become visible and revisable over time.

## What this means for practice

- **Instructors.** Judge an AI study tool by what the student must do before the system responds, not by the quality of what the system produces. A tool that generates a well-cited interpretation has removed the interpretive step the assignment existed to build.
- **Educational technology developers.** Treat "require a position", "expose disagreement" and "prompt pattern articulation" as acceptance criteria, not as [[pedagogy|pedagogical]] flavor. Each is a testable behavior of the interface, and each can be evaluated by whether learners' reasoning changes over time.
- **Researchers.** If patterning is a process rather than an outcome, studies of AI study tools should measure the trajectory — how criteria form and transfer — rather than satisfaction or post-test gains, which cannot distinguish borrowed judgment from developed judgment.
- **Instructors.** Citation transparency is not the same as developmental support. The Tentaklar case shows a system can be fully grounded in a student's own sources and still do the interpretive work for them.

## Limitations

- No data are collected or analyzed. The Tentaklar analysis is an argument about what the artifact's design implies, and the authors state they are not detailing how students actually use it.
- Tentaklar is a single platform in a single national context, chosen as illustrative rather than representative, so the claims extend to AI study tools by argument rather than by sampling.
- Whether patterning is undermined in practice — as opposed to in principle — is not tested; the framework predicts a mechanism the paper does not attempt to observe.
- The three design principles are proposals with no implementation or evaluation reported, and their feasibility at scale, or with students who have little tolerance for productive tension, is unaddressed.

## Citation

Åhman, H., & Thorén, C. (2026). [*Processes of patterning: AI, literacy, and the epistemological challenge*](https://doi.org/10.1007/s42438-026-00699-5). Postdigital Science and Education.
