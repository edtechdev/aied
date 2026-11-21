---
title: "Experts, Avoiders, and In-Betweens: Creating a Quadrant Model for the Identification of Different LLM User Groups Within the Student Body"
created: "2026-11-21T14:10:00-05:00"
updated: "2026-11-21T14:10:00-05:00"
type: article
published: "2026"
discipline: [teacher education]
foundations: [ai-literacy, teacher-role, educational-development]
pedagogy: [self-efficacy, self-directed-learning, scaffolding, anxiety-and-stress]
technology: [generative-ai, llm, technology-acceptance-model]
assessment: [self-assessment]
methods: [research-methods-aied]
research_method: [theoretical analysis, position paper]
audience: [researchers, faculty developers, instructional designers, instructors]
level: [higher ed, undergraduate]
page_kind: [framework]
sources: ['raw/papers/schelling-llm-user-groups-quadrant-students-2026.md']
confidence: medium
evidence_context: educational
source_depth: full text
source_url: "https://doi.org/10.3390/educsci16111957"
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-21"
    agent: hermes-agent
connected_concepts: [ai-literacy, llm, prompt-engineering, self-efficacy, self-directed-learning, teacher-role, technology-acceptance-model]
connected_articles: []
---

> **Synthesis:** Schelling and Go argue that a single, one-size-fits-all introduction to [[llm|large language model]] tools cannot serve a heterogeneous student body, and propose a quadrant model built on two self-reported factors: students' AI-related learning anxiety and their overall [[self-efficacy|learning self-efficacy]]. The authors explain why [[prompt-engineering|prompt engineering]] still matters in European higher education, use the [[technology-acceptance-model|Technology Acceptance Model]] to show how the trial-and-error effort of prompting can depress perceived ease of use, and divide students into four groups — AI-confident Experts, LLM-shy Avoiders, plus Improvisers and Independents between those extremes — with different support needs and illustrative [[scaffolding|scaffolding]] for each. They conclude that identical instruction risks teaching confident students nothing while overwhelming anxious ones, and that the group proportions and field differences the model implies must be settled empirically. The article is a conceptual contribution presenting no data of its own: it reports no survey, tests no hypothesis, and describes no empirical validation, so its recommendations are reasoned from prior literature rather than demonstrated.

## Key Findings

- A quadrant model built on two axes — low versus high AI-related learning anxiety, and low versus high learning self-efficacy — sorts students into four groups with distinct strengths and needs: Experts, Avoiders, Improvisers, and Independents.
- Both axes are self-assessments, not tested skill: the model says how AI-literate and how capable at learning students feel, so a placement instrument would have to be validated before it could classify anyone.
- Prompt engineering is argued to remain necessary despite predictions that smarter assistants will make it obsolete, for three reasons: the EU Artificial Intelligence Act classifies education-facing AI as high-risk; baseline literacy is itself a stated educational goal; and complex prompts take knowledge and effort to build.
- Ready-made prompt collections are judged to fail in both directions: they may frustrate novices because identical prompts produce different behavior across systems, and they may constrain students who already run their own workflows.
- Avoiders need two-pronged support addressing anxiety and self-efficacy together; Improvisers need help planning and organizing rather than more technical training; Independents need persuading that first contact is worth the effort; Experts need resources aimed at refinement rather than acceptance.
- Offering identical support to all four groups risks teaching the confident nothing new while overwhelming the anxious, and the authors read that risk as the practical argument against universal prompt-engineering instruction.

## Why prompting is treated as the bottleneck

The article begins from a regulatory and pedagogical problem. Since ChatGPT's release, the authors observe, rule-based chatbots with fixed subject databases have given way to LLM-based assistants that answer in natural language across a wide range of topics. Whether such an assistant informs, assesses, or supports peer-style learning depends on how skillfully learners control it, which makes the construction of effective prompts a genuine prerequisite for integrating these tools into [[self-directed-learning|self-study]].

Three arguments are offered against waiting for the technology to solve this. First, the EU Artificial Intelligence Act classifies AI systems used in education or vocational training as high-risk, and the authors note apprehension about how that classification will be implemented nationally, including concern that institutions might choose safer, less innovative applications. Second, preparing students for the labor market is a stated goal of modern universities, and recent digital-competence frameworks include a baseline level of [[ai-literacy|AI literacy]]; if assistants guide users through iterative prompt refinement unaided, students may never become motivated to understand how an LLM interaction works. Third, few-shot and chain-of-thought prompts require knowledge and effort to construct, and a cited survey of 430 computer-science master's students found that 55% had never used ChatGPT for academic purposes, leaving roughly 36% who knew the tool but did not use it for study — a gap the authors attribute either to fear of institutional trouble or to not knowing how to use the tool academically.

The mechanism proposed runs through [[technology-acceptance-model|technology acceptance]]. Perceived ease of use is proportional to the effort a user expects to invest, so the trial-and-error demanded of an LLM novice plausibly lowers it. During unsupervised self-study, students choose their own tools, and the authors point to evidence that students prefer familiar applications over research-intensive ones, which makes a low-effort, low-perceived-benefit trade-off unlikely. They also draw on work identifying selection barriers — knowing the goal but not how to reach it — and coordination barriers — knowing the features but not how to combine them, both of which prompt engineering support is meant to address.

## The four groups

The quadrant crosses the two factors. Experts report low AI-related learning anxiety and high learning self-efficacy: they describe themselves as familiar with LLM tools and able to acquire prompting strategies independently. Avoiders sit at the opposite corner, reporting high anxiety and low self-efficacy, and are described as unlikely to use an assistant if left to their own devices. Between them, Independents combine high anxiety with high self-efficacy — convinced they are not AI experts but confident they could learn — while Improvisers combine low anxiety with low self-efficacy, likely to experiment but needing help turning experimentation into consistent routines.

Two points qualify the taxonomy. Neither axis is based on knowledge a third party could evaluate, so the model describes felt confidence rather than competence. And the article notes that it is not known how many students fall into each group, since most published surveys ask what tools students use rather than how confident they feel about AI skills or how exactly they integrate an LLM into their learning processes. Field of study and gender are discussed as plausible sources of skew, but only by citing prior work rather than the authors' own data.

## Matching support to each group

The support recommendations follow the same asymmetry. Avoiders, lacking both strengths, are described as needing a two-pronged approach: raising AI confidence alone could move them toward Improviser habits, while raising self-efficacy alone could move them toward Independent habits, and long-term proficiency requires addressing both. Restricted prompts — templates with a fixed core and limited predefined parameters, which the authors connect to institutional AI governance — are offered as one way to lower the first-contact threshold.

Improvisers are portrayed as technically willing but unstructured, with some using AI tools only in private life; the authors suggest case-based collections that pair a learning task with a suggested use of an assistant, and note that these students may otherwise hide weak learning skills behind AI-generated output — a phenomenon they call skill skipping. Independents present the mirror-image problem: confident in their learning ability and therefore unconvinced they need AI at all, which risks leaving them without qualifications a labor market increasingly expects; persuading them that experimentation is worth the effort is offered as the entry point.

Experts, finally, are identified as the group most likely to slip through targeted training, because they already run their own workflows and are unlikely to engage with support designed for novices. The authors argue they need refinement-oriented resources — evaluating current workflows, analyzing prompting and learning processes, improving adoption strategy — rather than acceptance-oriented material.

## What this means for practice

- **Faculty developers.** Stop treating prompt engineering as a single workshop for everyone: the quadrant predicts that identical instruction will teach confident students nothing while overwhelming anxious ones.
- **Instructional designers.** Build restricted-prompt templates with a fixed core and predefined parameters for novices, and separate case-based workflow material for students who are willing but unstructured.
- **Instructors.** Address the two Avoider deficits separately — AI-related learning anxiety and general learning self-efficacy — rather than assuming that better prompting lessons will also build study confidence.
- **[[teacher-role|Teacher educators]].** Treat Independents as a retention problem rather than a success story: high self-efficacy plus high AI anxiety produces students who may graduate without ever using an LLM.
- **Researchers.** Test the quadrant empirically. No data are presented here, so the model's assumptions about group membership, field differences, and gender patterns all remain hypotheses.

## Limitations

- The article presents no data of its own: no survey, no participant sample, no testing of the model, so nothing reported here is a finding about actual students.
- Group membership rests entirely on two self-reported factors, so the quadrant captures felt confidence rather than demonstrable skill, and misplacement is possible in both directions.
- The authors deliberately kept the model simple and field-independent, omitting field-specific data on AI adoption and prompting behavior, which means it requires refinement before it can guide field-specific support design.
- Only prior literature supports the claims about field of study and gender, so those patterns are cited as plausible influences rather than demonstrated distributions.
- The support recommendations for each group are reasoned from the model and illustrated with existing examples rather than evaluated; the authors state that what works remains to be established by experimentation and empirical research.

## Citation

Schelling, K., & Go, S. (2026). [Experts, Avoiders, and In-Betweens: Creating a Quadrant Model for the Identification of Different LLM User Groups Within the Student Body](https://doi.org/10.3390/educsci16111957). *Education Sciences, 16*(11), 1957.
