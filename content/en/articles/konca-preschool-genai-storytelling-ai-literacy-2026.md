---
title: "Generative AI as an interactive learning environment in early childhood: preschool children's emerging AI literacy as socially distributed interpretive work in collaborative storytelling"
created: "2026-11-11T09:39:50-05:00"
updated: "2026-11-11T09:48:00-05:00"
type: article
evidence_context: educational
published: "2026"
page_kind: [evaluation]
research_method: [case study]
discipline: [learning sciences]
level: [preschool]
audience: [researchers, instructors]
foundations: []
pedagogy: [sociocultural-learning, storytelling-in-education, scaffolding]
technology: [generative-ai, prompt-engineering]
methods: [qualitative-research]
confidence: high
sources: ['raw/papers/preschool-genai-ai-literacy-storytelling-2026.md']
source_url: "https://doi.org/10.1080/10494820.2026.2762001"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Konca and Yigit-Gencten watched 22 five- and six-year-olds in one Turkish public preschool build picture books with Midjourney over six weeks, and coded the moments when children reasoned about the image generator itself. The children never typed a prompt; their [[teacher-role|teacher]] wrote every prompt and controlled the screen. That constraint is what makes the study informative: [[ai-literacy|AI literacy]] appears here as talk distributed across a classroom — children proposing that the system "couldn't think of it well enough," that it "didn't hear," that it was "scamming us," or that a butterfly with glasses is impossible — and the teacher's questions deciding which of those explanations got taken up. The authors' central claim is that early AI literacy is socially distributed interpretive work, and their evidence includes the cases where the teacher closed the inquiry as well as the ones where she opened it.

## Key Findings

1. **Children first understood the tool as an image producer.** Asked "But will I draw it?", one child was told "the computer will draw it with AI"; another tracked the loading bar ("100% … Oh, it appeared!") and asked "Will AI make these?" The authors treat this submit-wait-appear sequence as the starting conception that later reasoning builds on.
2. **They explained anomalies by attributing agency and perception.** A rabbit generated with one eye missing drew "it blinked" and "it closed its eye" from children, with the teacher naming the alternative — that the system generated an eye missing. In another session a child accused the AI of scamming the class, and the teacher distinguished error from deception.
3. **Prompt-output reasoning appeared, but mostly through the teacher.** A child predicted that a list of colored features would produce a colorful character ("AI will send it colorfully"). When pink hair appeared after blue was requested, the teacher reread her own prompt and found she had typed pink; the child had said "AI sent it to us wrongly." In a third case a child rejected the teacher's explanation ("it couldn't distinguish them because we didn't choose blue") with a causal account of his own that was wrong but structurally a prompt-output inference.
4. **The butterfly failure produced five competing child hypotheses.** Limited cognition, a missing word in the prompt, physical impossibility, misunderstanding, and not hearing. The teacher then added a sixth — machine translation between Turkish and an English-trained system — and tested it by regenerating.
5. **Generated images became objects of collective audit and vote.** Children checked features one by one (pink glasses yes, purple eyes yes, red fur no — it came out orange), noticed a butterfly wearing glasses near its ears, and voted on which of four images to keep. Dissatisfaction could trigger regeneration, giving evaluation real stakes.
6. **Three evaluative orientations coexisted rather than developing in sequence.** Request fidelity, story suitability and plausibility all appeared, with no hierarchy among them; the authors are explicit that the data do not show a developmental order.

## What the study did

An instrumental case study in one public preschool classroom in southeastern Türkiye, over about six weeks from late November 2024 to early January 2025. Participants were 22 children (13 girls, 9 boys) aged 5–6, one classroom teacher, and three [[teacher-education|preservice teachers]] who recorded sessions and sometimes assisted.

The activity was whole-class [[storytelling-in-education|storytelling]]. Children invented characters, settings and events; the teacher turned those contributions into prompts, entered them in Midjourney, and displayed the output on a shared screen, where the class discussed, selected, rejected or regenerated images, then assembled them in Canva. No child typed a prompt or operated a tool.

The corpus was 17 transcribed sessions, plus video and image records used to clarify gesture and reference. The unit of analysis was the "AI-specific interpretive episode": a stretch of talk in which a child noticed, questioned, explained, evaluated or revised an output, the prompt-output relation, or a machine error. To keep general story talk out, the authors applied a substitution test — would the interpretation hold if the image had been hand-drawn? Coding was reflexive thematic analysis on the Turkish transcripts, with a second author reviewing codes, disagreements resolved in four discussions rather than by an inter-rater statistic, and six themes mapped onto understand-use-evaluate only after they were stable.

## What the design cannot show

The paper is unusually careful about this, and the care is the reason to read it. The teacher's mediation is constitutive of the phenomenon, not a nuisance: she decided which child's contribution entered a prompt, how it was phrased, when the output appeared, and when discussion moved on. The authors therefore report both enabling and constraining moves, including the moments she redirected a line of inquiry — the "Is this real?" question that became a question about beauty, and the omitted-cat exchange where a child simply repeated "human" after the teacher's explanation.

Because the analysis works at the level of episodes rather than children, it cannot say whether any child developed lasting understanding, and no post-activity reflections were collected. The 17 sessions are a corpus, but the reported episodes are analytically informative instances, not prevalence estimates. The classroom was selected for richness, ran on Turkish circle-time norms that make the shared screen visible to everyone, and had a teacher already positive about AI-assisted creative work. Remove any of those conditions — individual devices instead of a shared screen, a teacher who does not question outputs — and the interpretive work observed here would have far less opportunity to surface.

The translation step deserves separate mention. Children reasoned in Turkish about a system trained largely on English, and the teacher identified translation as a source of at least one failure. That is a real feature of the setting, not a defect, but it means the prompt-output relation includes a layer that English-only classrooms do not have.

## What this means for practice

- **Early-years teachers.** The productive move is not explaining how the model works but asking why an output came out as it did, then letting several explanations stand side by side. The butterfly episode worked because five hypotheses were aired before the teacher added hers.
- **Designers of early AI literacy.** A shared screen and a teacher who voices the prompt make the request-output link inspectable by the whole class. Group voting on outputs turns evaluation into a decision with consequences.
- **[[curriculum-design|Curriculum]] leads.** Expect anthropomorphism, and treat it as data rather than error. "It blinked" and "it didn't hear" are the children's working theories, and they are the material a teacher has to work with.
- **Researchers.** The substitution test is a reusable way to separate AI-specific reasoning from ordinary story talk, and worth borrowing even where the rest of the design differs.

## Limitations

One classroom, one teacher, 22 children, six weeks, one image generator, and a teacher already committed to the approach. The analysis is transcript-led rather than [[multimodal]], the demarcation between AI reasoning and adjacent narrative competence is inspectable but contestable, and the tools are changing fast enough that the interactional patterns may not survive the next interface. The authors frame their claims as transferable rather than generalizable, which is the right frame for a single case.

## Citation

Konca, A. S., & Yigit-Gencten, V. (2026). [*Generative AI as an interactive learning environment in early childhood: preschool children's emerging AI literacy as socially distributed interpretive work in collaborative storytelling*](https://doi.org/10.1080/10494820.2026.2762001). *Interactive Learning Environments*. https://doi.org/10.1080/10494820.2026.2762001.
