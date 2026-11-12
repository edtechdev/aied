---
title: Developmental Psychology
created: "2026-11-12T14:20:00-05:00"
updated: "2026-11-12T14:20:00-05:00"
type: concept
research_method: [literature review]
confidence: high
methods: [research-methods-aied]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Developmental psychology** — the study of how cognitive, linguistic, social, emotional and motivational capacities change with age, and of the constraints those changes place on what a learner can do and what support they need. In [[ai-education|AI in education]] it supplies the question behind every age claim: not "does this tool work" but "does it work for a mind at this stage, doing this particular thing". The knowledge base uses it to explain why the same [[generative-ai|generative AI]] tool is a reasonable study aid for a 20-year-old and a developmental risk for a 7-year-old, and to mark where such claims rest on hypothesis rather than measured outcome.

## Questions to Consider

- Two learners use the same chatbot for the same task. What would developmental psychology have you check before calling the interaction appropriate — age alone, or something more specific?
- "Age-appropriate" is used constantly in AI guidance. What evidence would you need before accepting that label, and what does it usually rest on instead?
- Executive function, [[metacognition]] and [[self-regulated-learning|self-regulation]] develop unevenly. If a tool regulates for the learner, which capacity is supported and which displaced?
- Most studies here measure learners once. What can a single measurement say about development, and what can it not?
- Play is a developmental medium, not a break from learning. When an AI toy takes the narrative, what is the child still practicing?
- Adolescence is framed as both risk window and design opportunity. Which does the evidence support?

## Introduction

Developmental psychology sits underneath several pages in this corpus without being any of them. [[cognitive-psychology]] explains the mechanisms — working memory, load, bias, retrieval — but says nothing about how those mechanisms change with age. [[early-childhood-elementary-ai-education]] is a level page: it covers preschool and primary schooling as settings, and its scope note says explicitly that its concerns are developmentally specific without providing the developmental account. [[parents-and-families]] covers the home as a context. What none of them does is treat development itself as the explanatory frame: the reason a design that suits one age band misfires in another, and the reason claims about long-term effects on a developing mind are so hard to make.

That frame matters more in AI education than in most fields, because AI tools are typically evaluated on adults and then deployed downward. A chatbot tested with undergraduates reaches a 12-year-old through a school license; a story-generation app designed for early readers reaches classrooms; AI toys enter play before anyone has asked what they do to play. The corpus's reviews keep arriving at the same conclusion from different directions: the developmental evidence is thin, the mechanisms are plausible, and the guidance is being written ahead of the research.

## Stages and capacities as design constraints

The most concrete use of developmental psychology in the corpus is as a constraint on design, not a label on learners. CLARA, a system built at the University of Auckland, refuses to predict a child's age directly. It decomposes a story into cognitive, language and social-emotional demands using a 122-label developmental taxonomy, then aggregates the activated labels into a developmental-stage estimate. The design choice is the argument: what makes a text suitable is not a number but the specific demands it places on specific capacities.

Age-tiered resources make the same point from the curriculum side. Taiwan's AI Learning Application Guidebook was built in two editions — one for learners aged 9 to 12 with scaffolded, platform-based, non-generative activities, and an advanced edition for 13 to 18 with authentic applications, ethical reasoning and supervised generative AI use. The tiering is developmental in substance, not just in difficulty: the younger edition avoids generative tools rather than simplifying them.

The risk in all such schemes is that the bands become coarse proxies. A five-year-old and a fifteen-year-old differ in far more than the distance between two age labels, and a single band can hold children whose capacities diverge by years.

## Executive function as the operative construct

Where the corpus gets specific about mechanism, it usually lands on executive function: the set of processes that plan, inhibit, shift and hold information long enough to use it. Vasileiou and colleagues' review of AI for students with special educational needs separates three functions a tool can perform — compensation, which externalises a demand so the learner can participate; [[scaffolding]], which supports performance just beyond independent capability; and development, which builds the capacity itself. The distinction is developmental because the same tool can do all three depending on how it is used, and only the third changes what the learner can do later.

The reliance literature supplies the failure mode. Klarin, Hoff and Daukantaitė define [[generative-ai|GenAI]] reliance among adolescents not as frequency of use but as preferring the tool over one's own effort or [[teacher-role|teacher]] support, together with difficulty initiating schoolwork without it — a pattern that reads as a developmental concern precisely because the capacities being displaced are still forming. Horowitz-Kraus and colleagues' small scanner study of 6–7-year-olds and adults conversing with ChatGPT points the same way: the interesting question is not whether children can use the tool but which cognitive control processes the interaction recruits at each age.

## Adolescence as a distinct case

Adolescence gets its own treatment because the capacities in question are social as much as cognitive. Hu and colleagues' survey of 2,023 adolescents in the United States and Hong Kong sorts them by what they talk to chatbots about rather than how much: an instrumental orientation toward problem-solving and information, a self-disclosure orientation centered on feelings and relationships, and a third group reporting neither. The developmental reading is that the same technology meets a period in which peer relationships and identity work are the central tasks, so a tool that offers unlimited, non-judgemental disclosure is not a neutral study aid.

Fu and Zhao's theoretical paper extends this into a construct — "artificial intelligence connectedness" — defined as a perceived bond that is psychologically real yet ethically asymmetric, because the machine can simulate reciprocity without any capacity for care. It reports no data, and it says so; its value is the warning that a felt relationship is not evidence of a developmental benefit.

## Play as a developmental medium

The AI-toy literature is where developmental psychology does the most work and has the least evidence. Xu, Girouard and Shi's review argues that AI-enabled toys redistribute agency in play: control over narrative, dialogue, relationship and information shifts from the child alone to the child-toy interaction. The redistribution can constrain play when the toy organizes it, or enable it when the toy responds as a resource for child-led imagination and inquiry. Whether it does one or the other is a design and interaction question, and the review is explicit that the developmental evidence is not yet there.

AI-Play, a play-based unplugged framework for pre-K and kindergarten, takes the opposite route: it teaches AI concepts through play without putting a device in front of the child, on the argument that the developmental task at that age is representation and pretend play, not interaction with a system.

## Where the evidence is thin

Three limits recur across the corpus.

The first is design. Most studies are cross-sectional surveys or small experiments, measured once. They can show that age groups differ; they cannot show that AI changed a developmental trajectory. Niu and colleagues' scoping review of generative AI and children's creative thinking screened 6,401 records and retained 24 evidence sources — a small base for a large claim, and the review reports it as such.

The second is attribution. A learning gain measured with the tool present may be assisted performance rather than a change in capability, which is the same distinction that separates scaffolding from development.

The third is time. Development unfolds over years, and the tools change faster than that. The Compass Collaborative's age-based guidance makes this explicit: it calls its entries hypotheses built by abductive reasoning from established developmental science plus early AI research, and says settled evidence may take a decade.

## The measurement problem behind "age-appropriate"

Policy and procurement documents use "age-appropriate" as if it were a property of a product. In this corpus it is a relation between a tool, a capacity and a task. CLARA's taxonomy approach is one attempt to make that relation operational; the guidebook tiers are another. Neither settles the harder question of who decides sufficiency, and the reviews that examine age-tiered resources evaluate reception — 831 participants in Wang, Chuang and Wu's study — rather than developmental outcome.

## Common Misconceptions

- **"Age-appropriate means a single age label."** CLARA estimates a stage from the demands a text places on specific capacities, and the guidebook's two editions differ in which tools they permit, not just in reading level.
- **"Developmental psychology is only about young children."** Adolescence and adulthood are developmental periods too; the reliance and self-disclosure literatures are about adolescents precisely because those capacities are still forming.
- **"If two age groups differ, development explains it."** Cross-sectional age differences confound cohort, curriculum, device access and context. Only designs that follow the same learners can separate change from difference.
- **"A tool that supports performance is developing the capacity."** Compensation, scaffolding and development are distinct functions; only the last is expected to persist once the tool is removed.
- **"AI toys are neutral play materials."** The agency-redistribution argument says otherwise: the toy's responsiveness shapes who is doing the imagining.

## Connected Concepts

- [[cognitive-psychology]]
- [[early-childhood-elementary-ai-education]]
- [[parents-and-families]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[scaffolding]]
- [[cognitive-offloading]]
- [[well-being]]
- [[creativity]]
- [[ai-literacy]]
- [[longitudinal-research]]
- [[research-methods-aied]]

## Connected Articles

- [[ai-toys-child-development-2026]] — AI-enabled toys redistribute agency in play (Xu, Girouard & Shi)
- [[clara-developmental-appropriateness-children-stories-2026]] — Developmental-appropriateness scoring from a 122-label taxonomy
- [[niu-genai-children-creative-thinking-cognitive-development-review-2026]] — Scoping review of GenAI and children's creative thinking
- [[vasileiou-ai-cognitive-scaffolding-executive-functioning-sen-2026]] — Compensation, scaffolding and development as three tool functions
- [[genai-reliance-executive-functioning-2026]] — Adolescent GenAI reliance as preference over effort
- [[horowitz-kraus-children-chatgpt-cognitive-control-2026]] — Children and adults conversing with ChatGPT in the scanner
- [[adolescent-chatbot-self-disclosure-help-seeking-2026]] — What adolescents disclose to chatbots, not how much they use them
- [[ai-connectedness-adolescent-mental-health-2026]] — AI connectedness as an ethically asymmetric bond (theory)
- [[ai-play-framework-early-childhood-2026]] — Play-based unplugged AI literacy for pre-K and kindergarten
- [[age-tiered-ai-literacy-guidebooks-2026]] — Two age-tiered editions of an AI literacy guidebook
- [[preservice-early-childhood-genai-magnetism-2026]] — Preservice early childhood educators designing with GenAI
