---
title: "LLMs Unplugged: Teaching Resources for a ChatGPT World"
created: "2026-09-15T10:30:00-04:00"
updated: "2026-09-19T07:04:04-04:00"
type: article
foundations: [ai-literacy, computational-thinking, curriculum-design]
pedagogy: [experiential-learning, pedagogy]
technology: [llm, prompt-engineering]
methods: [qualitative-research]
sources: ['raw/papers/llms-unplugged-teaching-resources-2026.md']
confidence: high
research_method: [system development]
discipline: cs education
audience: [instructors, faculty developers]
level: [secondary, higher ed, adult learning, teacher education]
---

> **Synthesis:** LLMs Unplugged is a practitioner-designed resource suite that teaches the [[llm]] training-to-generation pipeline entirely offline, using hand-built n-gram models, tally grids and dice-based weighted sampling — extending the long tradition of CS Unplugged into language modeling and [[ai-literacy]]. The curriculum runs students through a Training lesson (counting which words follow which words) and a Generation lesson (sampling next words from those counts), then offers Extensions on LoRA tuning, [[reinforcement-learning|RLHF]], synthetic data, temperature and truncation, beam search, tool use, word embeddings and context columns. The author reports delivery to roughly 400 participants in groups of five to fifty, spanning school-age learners, undergraduates from across campus and senior public-service executives, with the majority of participants being senior Australian Public Service leaders. It is explicitly a practitioner paper rather than a controlled study: there is no pre/post testing, no control group and no [[quantitative-research|quantitative]] [[learning-gains]] data, so the evidence is [[qualitative-research|qualitative]] reception rather than measured effect. The core [[pedagogy|pedagogical]] claim is that participants leave with a corrected mental model — that LLMs do probabilistic next-word generation at scale rather than reasoning or understanding.

## Key Findings

1. Resources were delivered to approximately 400 participants over the past year at the Australian National University, in session sizes from five to fifty people, with participants ranging from school-age and undergraduate students to senior executives in executive-education short courses.
2. The majority of participants were senior leaders in the Australian Public Service with varied expertise, who needed to understand AI tools they are "being asked to use and evaluate" — a non-traditional audience for [[cs-education]].
3. The 90-minute core lesson plan (Introduction 15 min, Training 20 min, Generation 20 min, Pre-trained Generation 20 min, Closing 15 min) has been successfully delivered to groups "from high-school age up and from 5 to 50 participants"; adding 30 minutes allows the Sampling extension to be appended.
4. The most commonly articulated participant insight is that LLMs are "just" doing probability and randomness at scale — sophisticated pattern matching and weighted sampling, not reasoning or understanding — a demystification the author reports as especially valuable for non-technical audiences.
5. Facilitator observation identifies an "inflection point" after the first shareback of generated text: the Training lesson functions as necessary set-up, but the room only becomes engaged during Generation, and dramatic readings of generated text correlate with sharper follow-up questions about LLMs.
6. Pre-trained generation booklets are trained on corpora of "typically 5000–10000 words", letting students generate text without tallying word pairs by hand while keeping the generation step unplugged.
7. The grid variant (paper grids plus dice) connects to probability concepts in the [[math-education|mathematics]] curriculum, while the bucket variant (cut-up words organized into buckets) supports younger learners or settings where dice maths would be a distraction; both teach identical concepts.
8. The optional [[open-source]] tool (MIT-licensed, written in Rust with Typst typesetting, plus a web version) tokenises any input document, computes n-gram statistics and produces formatted booklets, letting educators pre-train on domain text such as medical case studies, legal documents, poetry or student essays.
9. The synthetic-data extension demonstrates collapse behavior directly: students train a new model on their own generated text and watch patterns degrade as rare words vanish and common phrases dominate.
10. The author is candid that the project has not yet collected pre/post conceptual-understanding testing, run no-intervention control groups, or gathered quantitative learning-outcome data, and that several Extensions are less "battle-tested" across classroom settings.

## Unplugged mechanics: constraint-driven design

The resource inherits three design constraints from CS Unplugged design patterns and from the specific character of language models: end-to-end coverage of the complete training → generation pipeline; modular, low-friction activities that stand alone in a short session with minimal materials; and broad [[accessibility]] with no programming assumed and minimal mathematics. Language modeling is fundamentally generative, so the design preserves generative output rather than reducing the topic to classification — the author notes this is why the material is emotionally engaging in a way that classification activities are not.

The mechanic itself is deliberately primitive. Students preprocess a children's book such as *Fun with Dick and Jane* or *Dear Zoo* — lowercasing everything and treating commas and full stops as tokens — then fill a grid cell by cell with tally marks recording which words follow which words. That filled grid *is* the model. In the Generation lesson students look up a row, convert tally counts into dice ranges and roll a d10 to pick the next word, repeating until a full stop or a chosen length. The worked example in the handout uses "See Spot run. See Spot jump. Run, Spot, run. Jump, Spot, jump." and yields the generated string "see spot run. see spot".

The historical framing is Markov's 1913 stochastic-process work on letter sequences in Pushkin and Shannon's 1948–1951 information-theoretic n-gram experiments, in which Shannon generated synthetic text from random letters through progressively higher orders. The author's point is that Markov and Shannon were themselves working unplugged — counting transitions by hand and drawing frequency tables — which makes the modern method's continuity with hand computation the pedagogical punchline.

## Lesson progression: Fundamentals and Extensions

The [[curriculum-design]] splits into two ordered Fundamentals and a set of Extensions that can be taken in any order.

| Tier | Lessons | Concepts surfaced |
| --- | --- | --- |
| Fundamentals | Training, Generation (grid and bucket variants) | Training as counting patterns, model as grid, weighted sampling, randomness of output |
| Scaling up | Pre-trained Generation, Trigram | LLM-as-a-service, foundation models, context-length tradeoff |
| Controlling output | Sampling, Beam Search, Tool Use | Temperature, truncation (greedy, no-repeat, alliteration), search strategy, external delegation |
| Model tuning | LoRA, RLHF, Synthetic Data | Lightweight adaptation layers, human-preference shifting, model collapse |
| Context and meaning | Word Embeddings, Context Columns | Meaning from usage patterns, handcrafted attention over grammatical context |

Two features of this progression deserve note. First, RLHF is rendered as a voting exercise — students generate candidates, vote on preferences, then adjust transition counts by +1 for preferred and −1 for rejected transitions — which shifts what "good" means from "matches training data" toward "matches human preferences". Second, Context Columns has students add columns keyed to grammatical categories (after verb, after pronoun, after preposition) and combine them with word-specific counts during generation, functioning as a hand-built preview of attention.

## Reception: what practitioners report

Because no measurement instrument was used, the reported evidence is qualitative: the material is engaging and, in the author's words, overwhelmingly well received. Participants consistently report building a new mental model, and the generative step is what drives [[student-engagement]] — several learners reported taking their models home to recreate the activity with their teenage children that evening. A model trained on *The Cat in the Hat* producing "fish fish fish red one fish two fish" is offered as the canonical example of an output that is simultaneously grammatical and surprising.

Delivery insights are operational rather than statistical. The modular architecture is described as essential in practice: most deliveries cover Fundamentals plus Pre-trained Generation, with Sampling appended when two hours are available instead of ninety minutes. [[group-work|Group work]] of two to three people per model supports peer comparison, and the design supports swapping models between groups in the Extensions. The Extensions raise an acknowledged tension between unplugged constraints (manual computation, limited scale, short timeframe) and depth, and the author asks openly at what point meaningful engagement with the ideas requires moving beyond the unplugged format.

## Scope, evidence, and open limits

The paper positions itself as a practitioner contribution, and its evidentiary claims should be read at that level. There is no control condition, no pre/post conceptual instrument and no [[learning-analytics]] of outcomes; the participant count of roughly 400 describes delivery reach, not study sample. The material's intended downstream path is [[teacher-education]] — the author states the project will keep developing and delivering lessons especially through [[teacher-role|teacher]] training, with everything remaining freely available under CC BY-NC-SA 4.0.

The stated rationale is that developing a mental model of how LLMs work "should not require a computer science degree or months of study", and that as LLMs become central to text work this understanding is "not just pedagogically valuable but practically necessary". The author is equally explicit about the limits of the ambition: LLMs Unplugged will not prevent an epistemological crisis, nor stop people forming attachments to [[conversational-ai|chatbots]], but better understanding of what LLMs are and are not is treated as a precondition for informed use decisions and [[critical-thinking]] about their outputs.

One design question the paper leaves open is how far hands-on tallying should scale before the tool-based route (pre-tokenised booklets) becomes the default, and what is lost pedagogically when it does.

## What this means for practice

- **Instructors.** Run the full 90-minute core plan — Introduction 15, Training 20, Generation 20, Pre-trained Generation 20, Closing 15 — and expect the room to engage only at the Generation stage, after the first shareback of generated text.
- **Instructors.** Keep students hand-tallying the first model even though pre-trained booklets exist, and switch to the [[open-source]] tool only to scale: it tokenizes any document, so you can pre-train on medical case studies, legal documents, poetry or your students' own essays.
- Use the synthetic-data extension to make model collapse visible in one session, where students train a new model on their own generated text and watch rare words vanish as common phrases dominate.
- Organize participants in groups of two to three per model and swap models between groups during Extensions, so peer comparison rather than delivery carries the concept.
- Do not gate [[ai-literacy]] on prior programming or mathematics: the material assumes neither, and the majority of the roughly 400 participants were senior Australian Public Service leaders rather than computer science students.

## Limitations

- The author states plainly that the project has not conducted pre/post testing of conceptual understanding, run control groups without the intervention, or gathered quantitative learning-outcome data, so the reported evidence is qualitative reception only.
- The figure of approximately 400 participants describes delivery reach across many sessions rather than a recruited study sample, and the audiences were session attendees dominated by senior Australian Public Service leaders with varied expertise.
- The claimed engagement pattern — including the "inflection point" after the first shareback — comes from facilitator observation rather than any instrument, and several Extensions are described as less battle-tested across classroom settings.
- Delivery was confined to one institution, the Australian National University, over a single year and to session sizes of five to fifty people, with no comparison condition against a conventional data-driven lesson.

## Connected Concepts

- [[ai-literacy]]
- [[llm]]
- [[cs-education]]
- [[computational-thinking]]
- [[prompt-engineering]]
- [[pedagogy]]
- [[curriculum-design]]
- [[experiential-learning]]
- [[active-learning]]
- [[constructivist]]
- [[higher-ed]]
- [[teacher-education]]
- [[student-engagement]]
- [[scaffolding]]
- [[machine-learning]]

## Connected Articles

- [[ai-intuition-ai-literacy-k12-2026]] — From AI Intuition to AI Literacy: A Dual Framework for K-12 Education
- [[student-mental-models-genai]] — Uncovering Students' Mental Models of Generative Artificial Intelligence
- [[computational-thinking-ai-agent-creation]] — Computational Thinking Development in AI Agent Creation: A Mixed-Methods Study
- [[reshaping-cs-education-genai]] — Reshaping Undergraduate Computer Science Education in the Generative AI Era
- [[hingle-collaborative-ai-literacy-2025]] — Systematic Review of Collaborative Learning Activities for Promoting AI Literacy
- [[astor-computational-thinking-meta-review-2026]] — Computational Thinking: A Meta-Review of Systematic Reviews and Meta-Analyses
- [[ai-pbl-computational-thinking-2026]] — AI-Supported Problem-Based Learning for Enhancing Computational Thinking

## Citation

Ben Swift (2026). [*LLMs Unplugged: Teaching Resources for a ChatGPT World*](https://doi.org/10.1145/3786228.3786237). Proceedings of the 28th Australasian Computing Education Conference (ACE 2026).
