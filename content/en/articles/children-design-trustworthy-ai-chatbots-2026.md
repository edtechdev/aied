---
title: "How Children Design and Reason about Trustworthy AI Chatbots"
created: "2026-10-19T09:20:00-04:00"
updated: "2026-10-19T09:20:00-04:00"
type: article
sources: ['raw/papers/children-design-trustworthy-ai-chatbots-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [design and evaluation study, thematic analysis]
level: [k 12]
audience: [instructors, instructional designers, researchers]
pedagogy: [student-ai-interaction, misconceptions, constructivist]
technology: [conversational-ai, generative-ai, llm, prompt-engineering]
foundations: [ai-literacy, agency, human-ai-collaboration]
ethics: [trust, trust-calibration, hallucination-risk]
methods: [mixed-methods-research, qualitative-research, design-based-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-19"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Most research on children and [[trust|trust]] in AI positions them as users judging systems adults built. This study reverses that: 115 learners aged 8–18 built 119 [[conversational-ai|chatbots]] in a constructionist environment called LUMI, configuring confidence, transparency, formality, assertiveness, rules, persona, and knowledge sources, then testing and revising them. The headline finding is that children treat [[trust-calibration|trustworthiness]] as an interacting system of design choices rather than a single property. Younger students equated trust with purpose fulfillment — some deliberately built chatbots that gave wrong answers and still called them trustworthy because they did what they were made to do — while older students tied trust to transparent, calibrated design. Students revised rules far more than any other field, and academic chatbots were tuned to be more formal and transparent than hobby ones. A rubric-based fidelity check found purpose alignment was the weakest realized dimension, suggesting that children's intentions about what a chatbot is *for* are the hardest thing to build and the least supported by current tools.

## Key Findings

1. Across 115 learners aged 8–18 who created 119 chatbots, the workshop raised [[self-report-measures|self-reported]] AI knowledge, hallucination awareness, confidence in building trustworthy chatbots, and ability beliefs (all *p* < .001).
2. Rules and Guidelines absorbed 31.1% of all modifications (*M* = 2.50 edits per bot) and were the only field frequently revised for a substantial share of bots (39.5%); every other field, including all four sliders, was never revised by 51–66% of students.
3. Elementary students (*M* = 2.68) and middle schoolers (*M* = 2.62) set significantly higher Confidence than high schoolers (*M* = 2.29); no elementary chatbot was configured below 2 on the 1–3 scale.
4. High schoolers set higher Transparency (*M* = 2.59) than elementary (*M* = 2.18) and [[k-12|middle school]] students (*M* = 2.28), and no high school chatbot was configured with low transparency.
5. Ten of 34 middle school hobby chatbots (29.4%) were deliberately configured to give incorrect or nonsense answers, yet some designers still rated them "pretty trustworthy, because they both do what they're meant to do pretty well."
6. Thematic analysis produced seven design dimensions and 18 codes; every interviewed student mentioned more than one dimension, describing trust as confidence, transparency, rules, knowledge, persona, and purpose working together.
7. Design fidelity averaged 2.84 on a 1–4 scale across 61 chatbots and 1,568 message turns; Purpose Alignment was lowest (*M* = 2.47), met by only 45% of messages, versus 69% for Persona Alignment and 62% for Rules Alignment.

## Children as designers, not just users

The study's premise is that asking children to evaluate someone else's chatbot reveals only part of their [[ai-literacy|AI literacy]]. Asking children to translate a belief about trustworthiness into a configuration choice makes that belief observable — and exposes the gaps. The authors built LUMI, a chatbot-authoring environment grounded in [[constructivist|constructionism]], in which students define a bot's name, purpose, persona, tone, and rules, then move through a configure–test–evaluate–revise cycle. Four sliders (Confidence, Transparency, Formality, Assertiveness) had Low, Medium, and High levels converted into written instructions for the model. A knowledge-base upload grounded responses in supplied documents, and a separate Confidence bar (0–100) displayed the model's actual certainty, decoupled from the Confidence slider so students could see the gap between sounding sure and being right.

Three cohorts used age-adapted versions: 76 elementary students in a three-week English Language Arts program across five rural southeastern schools, 24 middle schoolers in a two-day university summer camp, and 15 high schoolers in a six-week online program run by a partner non-profit. Elementary students used a voice-enabled variant called ToyTalk that let them photograph a toy and give it a voice.

## What children built and how they tuned it

Academic chatbots dominated; mathematics alone accounted for 15 thematic tags, 12 from middle schoolers. High schoolers built more humanities and health/wellness bots; middle schoolers ranged across 17 hobby sub-themes against 9. Revision concentrated overwhelmingly in Rules and Guidelines, not the sliders. Academic bots drew significantly more configurations (*M* = 8.77 vs. *M* = 4.67, *p* = .022, *d* = 0.52), driven by more edits to Rules and Guidelines (*M* = 3.46 vs. *M* = 1.65, *p* = .028, *d* = 0.49).

Slider settings diverged by age. Elementary and middle school students pushed Confidence above the default of 2, while high schoolers clustered near medium and raised Transparency instead. Formality split differently: middle schoolers set it lower (*M* = 1.90) than both elementary (*M* = 2.18) and high school students (*M* = 2.29). Academic bots were more formal than hobby bots (*M* = 2.15 vs. *M* = 1.85, *p* = .044, *d* = 0.47), and among the 23 students who built both types, academic bots were also more transparent (*M* = 2.52 vs. *M* = 2.20, *p* = .018).

## Seven dimensions of trustworthy design

Coding yielded seven dimensions: Response Style, Behavioral Boundaries, Knowledge Sources, Persona and Tone, Purpose and Role, [[agency|User Agency]] and Model, and Error Handling. Two patterns cut across them. First, children rarely named a single trust feature; they described combinations. One high schooler explained that lowering confidence and assertiveness while raising transparency made a bot "more trustworthy," because a bot that stays stubborn when corrected is not. Another linked knowledge-base grounding, scope-restricting rules, and model selection as jointly producing trust.

Second, the meaning of trust shifted with age. Younger students emphasized social and affective cues — warmth, kindness, a persona that does not feel rude — and treated high confidence as a marker of reliability. Older students emphasized calibrated transparency and a bot that admits its limits. The most striking case came from middle schoolers who built "FakeGPT" to answer wrongly on purpose and still called it trustworthy: trustworthiness tracked faithful execution of intent, not factual accuracy. That matters for [[hallucination-risk|hallucination]] education, because knowing AI can be wrong did not stop children designing confidently wrong bots.

## Design fidelity: purpose lagged behind everything else

To answer how closely bots matched their designers' intentions, the team scored 61 chatbots across 1,568 message turns on Responsiveness, Purpose Alignment, Rules Alignment, and Persona Alignment, using a rubric that had reached 82.8% exact human–AI agreement and quadratic-weighted κ = 0.88 across 232 criterion-level ratings for 58 responses. Overall fidelity was moderate (*M* = 2.84, *SD* = 0.42), just below the rubric threshold of 3, with 34% of chatbots averaging at least 3.

Rules Alignment scored highest (*M* = 3.06), followed by Responsiveness (3.00) and Persona (2.86); Purpose Alignment was consistently lowest (*M* = 2.47), and this held in every cohort-by-domain group. Middle school hobby chatbots were the weakest cell (*M* = 2.56) and the only group below 3 on all four criteria. The authors read this as evidence that children can operationalize surface behavior — rules, tone, responsiveness — more easily than they can make a bot actually serve its stated purpose, and they propose showing design fidelity and factual accuracy as separate indicators so children learn that rule-following is not the same as being right.

## What this means for practice

- **Instructors.** Treat "what is this chatbot *for*" as a separate design task from "how should it sound." Purpose alignment was the weakest fidelity dimension in every group, so have students write a one-sentence purpose and then test whether real responses serve it.
- **Instructors.** Make the gap between confident wording and actual accuracy visible. LUMI's separate 0–100 confidence bar was designed for this; a simpler green/red indicator works for younger learners.
- **Instructional designers.** Build rules and scope constraints into the authoring flow early, since rules absorbed 31.1% of student edits and were the lever children reached for when output went wrong.
- **Instructors.** Do not assume hallucination lessons transfer into design behavior. Children who could explain hallucination still configured bots to sound certain, so assess the artifact, not only the explanation.
- **Faculty developers.** Use purpose fulfillment as a discussion prompt: a bot built to mislead reliably can be called trustworthy, which exposes how differently children and adults define the construct.

## Limitations

- The three cohorts differed in setting, schedule, instructional content, interface version, and data-collection procedure, so age effects cannot be separated from context; the authors treat cohort differences as exploratory.
- Group sizes were unequal and modest (76 elementary, 24 middle, 15 high school), limiting direct comparison.
- Elementary data came from [[teacher-role|teacher]] reflections and platform logs rather than child interviews; elementary students were not asked directly about trustworthiness and did not complete the pre/post survey, so they are absent from the trust-reasoning analysis.
- Interview formats differed (individual for high schoolers, small groups of 2–3 for middle schoolers), which may have shaped what students disclosed.
- High schoolers were each required to build only one chatbot, so domain comparisons rest largely on the middle school cohort.
- The tool itself constrained expression: a child who thought trustworthiness meant [[privacy]] had no privacy field to configure.

## Citation

Ozturk, D., Li, J., Singh, D. P., Rajapaksha, Y., Melese, F., Riahi, B., Jiang, S., Jin, Q., Huang, J., Cateté, V., Barnes, T., & Tian, X. (2026). [*How Children Design and Reason about Trustworthy AI Chatbots*](https://arxiv.org/abs/2609.25244). arXiv:2609.25244.
