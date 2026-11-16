---
title: "Multi-Agent Artificial Intelligence Model to Enhance Self-Regulated Learning and Conceptual Understanding in Computer Science Education"
created: "2026-11-16T09:30:00-04:00"
updated: "2026-11-16T09:30:00-04:00"
type: article
authors: ["Huang, J.-Y.", "Park, S. M.", "Lin, M. P.-C.", "Chang, D.", "Janarthanan, V.", "Ho, M.", "Ryoo, J."]
published: "2026-09-30"
venue: "ASEE Computers in Education"
source_url: https://doi.org/10.18260/B4B8-9A-40638
foundations: [human-ai-collaboration]
pedagogy: [self-regulated-learning, help-seeking, metacognition, scaffolding, constructivist]
technology: [generative-ai, llm, intelligent-tutoring, learning-analytics, pedagogical-agent, prompt-engineering]
assessment: [formative-assessment, feedback]
methods: [mixed-methods-research, design-based-research]
research_method: [design and evaluation study]
discipline: [cs education]
level: [graduate, higher ed]
audience: [instructors, researchers, educational technology developers]
sources: ['raw/papers/huang-multi-agent-self-regulated-learning-cs-2026.md']
confidence: medium
source_depth: full text
evidence_context: educational
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
---
> **Synthesis:** Huang and colleagues (2026) wired three AI agents into a graded multiple-choice quiz platform for a required assembly-language course and watched how 38 graduate students in a Master of Applied Computer Science program in Western Canada asked for help. The Teaching Assistant AI (TA-AI) could give hints but never answers; an Analytics-AI summarized class-level struggle for the instructor; an AI-Improver turned student [[feedback|feedback]] into prompt revisions. Across 109 help-seeking attempts and 164 coded prompts, students behaved like calibrated [[help-seeking|help seekers]] rather than answer hunters: attempts where they summoned the tutor were significantly less likely to be correct (OR = 0.35, p < .001), which the authors read as evidence that hints were spent where knowledge ran out. Quiz difficulty, not time or practice, changed the kind of question students asked. On low-difficulty items [[metacognition|metacognitive]] prompting was rare, on medium-difficulty items it dominated, and that medium band was also where prompted attempts were most likely to succeed (OR = 3.79, p = .030) — a [[scaffolding|scaffolding]] "sweet spot" the authors map onto the zone of proximal development. The gain in immediate correctness was modest and the prompted-only model sat just above the conventional threshold (p = .054), so the paper's case rests on process evidence: the tool shaped how students asked, more reliably than whether they got the item right.

## Key Findings

- **Hint use marks difficulty, not dependence.** Across all quiz attempts, questions where a student prompted the TA-AI were 65% less likely to be answered correctly than unprompted questions (OR = 0.35, p < .001). The authors explicitly reject a causal reading and argue the pattern shows students rationing a limited hint budget to items they could not solve alone.
- **Difficulty changed the type of prompt but not the volume of prompting.** A Spearman rank-order correlation found no significant relationship between quiz difficulty and the raw frequency of prompts per hint request, and a Fisher's Exact Test found a significant association between difficulty and prompting approach. Low-difficulty questions drew shallow single-cognitive prompts (35 of 44 single-cognitive attempts, 79.5%), while medium-difficulty questions drew single-metacognitive prompts (14 of 26, 53.8%).
- **The medium band is where metacognitive prompting concentrates.** The authors describe medium difficulty as a threshold that discourages answer-seeking and elicits reflective inquiry: single-metacognitive prompting was significantly over-represented at medium difficulty and significantly under-represented at low difficulty, with no comparable shift for multi-prompt approaches or high-difficulty items.
- **Prompted attempts succeeded most often at medium difficulty.** In the model restricted to hint-using attempts, medium difficulty carried 3.79 times the odds of a correct answer relative to low difficulty (95% CI [1.14, 12.63], p = .030), while high difficulty showed no advantage (OR = 0.67, p = .784).
- **The multi-metacognitive profile looked better but was not statistically distinguishable.** Students who used several prompts including at least one metacognitive question had 2.79 times the odds of success compared with single-cognitive prompting (95% CI [0.78, 9.97], p = .114), and the prompted-only model as a whole did not reach significance (p = .054).
- **Prompt refinement did not happen on its own.** Coding week 1 as exploratory and week 2 as instructed use, Fisher's Exact Tests found no significant difference in adaptive help-seeking by instructional phase (p = .845) or by single-versus-multi-prompt structure (p = .160); the cognitive-to-metacognitive ratio stayed almost identical, from 35 cognitive and 20 metacognitive prompts in week 1 to 71 and 38 in week 2.
- **Scores rose while hint use rose.** Mean quiz scores moved from 8.13 (SD 1.07) in week 1 to 9.58 (SD 1.33) in week 2, with hint usage at 47 and 62 and prompt usage at 55 and 109 respectively — a two-week trend the design cannot attribute to the tutor.
- **The design implications are quotas and interface modes, not more AI.** The authors recommend a tiered quota that is generous for follow-up prompts inside one help episode but strict on the number of episodes, plus separate interface affordances for the two observed use cases: a "knowledge gap" mode for cognitive requests and a "logic check" mode for metacognitive verification.

## How the study was done

The setting was a required assembly-language programming course in a Master of Applied Computer Science program in Western Canada, with 38 enrolled graduate students and no AI tools other than the quiz platform. The platform is a web application — a React and TypeScript frontend, a Node.js and Express backend, MongoDB Atlas storage, and calls to an external model API — in which students answer multiple-choice questions and may spend a limited number of hints. A guardrail prompt forbids the TA-AI from naming an option, giving a direct solution, or eliminating distractors, so the hint can only offer conceptual cues and self-check questions. The Analytics-AI aggregates performance and hint records for the instructor, and the AI-Improver collects student ratings that developers use to revise prompts.

The quiz bank held 12 low-difficulty items testing recall or single-concept application, 8 medium-difficulty items requiring integration of multiple concepts or multi-step reasoning, and 1 high-difficulty item with non-obvious solution paths. Prompt logs were segmented by attempt and coded with a directed content analysis scheme derived from prior work on cognitive versus metacognitive prompts, adapted to quiz-taking. Two coders independently coded all 164 prompts, refined the codebook after an initial pass exposed systematic disagreement, and re-coded; final inter-rater agreement was 87%, with remaining disagreements resolved by consensus.

Attempts were then profiled as single-cognitive, single-metacognitive, multi-cognitive, or multi-metacognitive, and analyzed with Fisher's Exact Tests for associations with instructional phase, prompt structure, and difficulty, a Spearman correlation for difficulty against prompt volume, and two binomial logistic regressions — one over all attempts with hint use as predictor and difficulty as covariate, one over prompted attempts only with prompting profile and difficulty as predictors.

## What this means for practice

- **Instructors choosing where to put the tutor.** Calibrate the item bank before calibrating the model. The paper's clearest behavioral effect runs through difficulty: hints spent on recall items produced transactional questions, and hints spent on multi-step items produced reflective ones. A quiz set pitched at recall will not generate the [[metacognition|metacognitive]] dialogue the tool is capable of supporting.
- **Course and platform designers setting hint limits.** Price depth, not attempts. The authors' tiered-quota proposal — allow several follow-ups within one help episode while capping the number of episodes — follows directly from the finding that students did not deepen their prompts across two weeks of unprompted use.
- **Instructors teaching prompting explicitly.** Treat [[prompt-engineering|prompt engineering]] as course content rather than an assumed skill. The stability of the cognitive-to-metacognitive ratio across weeks is the evidence: without instruction and templates, students stayed in the habits they started with.
- **Researchers reading help-seeking analytics.** A negative association between hint use and correctness is not a harm signal. In this system it tracked where students recognized a gap, and the [[learning-analytics|analytics]] layer is what makes that interpretation checkable at class level rather than inferred from a single log.
- **Educational technology developers scoping claims.** Keep the performance claim small. The process claim — that a constrained [[generative-ai|generative]] tutor shifts question quality at the right difficulty — is what this dataset supports.

## Limitations

- The regression sample was small enough that the authors name statistical power as the binding constraint, and the prompted-only model missed conventional significance (p = .054), leaving the performance story at the level of descriptive trend.
- All 38 participants were graduate students in one required course at one institution over two weeks, and the authors note that graduate students may bring more developed [[self-regulated-learning|self-regulation]] than undergraduates; two weeks may also be too short for prompting habits to change.
- The TA-AI was deliberately configured to withhold answers, so success rates would likely shift under a more permissive assistant; the findings describe this guardrailed design, not AI help in general.
- Difficulty was assigned by the course instructor rather than calibrated empirically, and the high-difficulty cell held a single item, which is why the high-difficulty estimates are wide (OR = 0.67, 95% CI [0.04, 11.75]).
- The assessment was closed-ended multiple choice throughout; whether these [[help-seeking|help-seeking]] patterns hold in open-ended programming or design work is untested.

## Citation

Huang, J.-Y., Park, S. M., Lin, M. P.-C., Chang, D., Janarthanan, V., Ho, M., & Ryoo, J. (2026). [*Multi-Agent Artificial Intelligence Model to Enhance Self-Regulated Learning and Conceptual Understanding in Computer Science Education*](https://doi.org/10.18260/B4B8-9A-40638). *ASEE Computers in Education, 15*(4), 85–107.
