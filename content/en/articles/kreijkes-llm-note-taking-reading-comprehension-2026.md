---
title: "Note-taking beat an LLM on reading comprehension and retention, even though students preferred the chatbot"
created: "2026-11-12T20:30:00-05:00"
updated: "2026-11-12T20:30:00-05:00"
type: article
sources: ['raw/papers/kreijkes-llm-note-taking-reading-comprehension-2026.md']
source_url: "https://doi.org/10.1016/j.compedu.2025.105514"
source_depth: full text
confidence: high
evidence_context: educational
research_method: [experiment]
page_kind: [evaluation]
level: [secondary]
audience: [researchers, instructors]
discipline: [learning sciences]
foundations: [ai-literacy]
pedagogy: [metacognition, self-regulated-learning]
assessment: [assessment-validity]
technology: [generative-ai]
ethics: [ai-use-disclosure]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Kreijkes and colleagues (2026) ran a pre-registered randomized experiment in seven secondary schools in England. Of 405 Year 10 students, 344 were retained for analysis; each studied two history passages using an LLM chatbot (GPT-3.5 turbo, up to 20 prompts), note-taking, or both, and returned three days later for tests of literal retention, comprehension and free recall. Note-taking alone beat the LLM on all three outcomes; LLM + Notes beat it on literal retention and comprehension but not free recall. Students nonetheless rated the LLM easier, more helpful and more enjoyable, and preferred it. The finding is about cognitive engagement rather than about chatbots as such: the activity students liked best did more of the work for them.

## Comprehension and retention are different things to test

Literal retention items required no knowledge-based inferences and no or minimal bridging inferences, targeting the surface and textbase levels. Comprehension items required bridging and knowledge-based inferences, targeting the situation model. Free recall was an open response scored for both. The layering comes from the Construction-Integration tradition in [[reading-education|reading research]], and it matters: an activity can improve a student's grasp of what a text says without improving what they can do with it.

Most evidence on [[generative-ai|generative AI]] measures performance rather than learning, sometimes with the model available during assessment; these tests were closed-book and delayed. Note-taking is the baseline because it is common and evidence-based, though its benefits depend on whether notes are generative or verbatim.

## A crossover design with the LLM as the common reference

Participants were 405 Year 10 students aged 14–15 from seven [[k-12|secondary schools]] in England; exclusions left 344 for analysis. Group 1 (184 students, 53.5%) experienced LLM and Notes; Group 2 (160, 46.5%) experienced LLM and LLM + Notes, so every student completed two of the three conditions with the LLM as shared reference — a within-participant contrast.

The passages, on Apartheid and the Cuban Missile Crisis, were matched at 386 and 385 words. Students had 10–15 minutes and, with the LLM, at most 20 prompts per passage, were not told they would be tested, and returned three days later for 22 questions per passage: literal retention out of 20, comprehension out of 12 and free recall out of 50.

## Note-taking beat the chatbot on every outcome

Notes produced the best performance on all three measures and the LLM alone the worst; in Group 1, literal retention rose from 8.83 (SD = 3.96) with the LLM to 10.80 (SD = 4.29) with notes.

Against the LLM reference, notes improved literal retention by β = 1.92 (d = 0.44), comprehension by β = 0.95 (d = 0.38) and free recall by β = 1.02 (d = 0.21), all at p < .05 and the first two at p < .001. LLM + Notes improved literal retention by β = 0.57 (d = 0.13, p = .040) and comprehension by β = 0.35 (d = 0.14, p = .048), but not free recall (β = −0.08, p = .854); a permutation test agreed (p = .02 in Group 1, p = .80 in Group 2).

On an indirect comparison, the advantage of notes was larger than that of LLM + Notes for literal retention (difference = 1.35, z = 3.60, p < .001) and comprehension (difference = 0.59, z = 2.43, p = .015).

## Students preferred the activity that produced less learning

The engagement data run against the scores. Students rated the LLM as less difficult than note-taking by 0.51 points (d = −0.52), invested less effort by 0.25 points (d = −0.26, p = .001), found it more helpful by 0.41 points (d = 0.33) and enjoyed it more by 0.68 points (d = 0.48), all but effort at p < .001. Time on task was also shorter with the LLM (0.80 minutes in Group 1, 1.54 in Group 2).

In Group 1, 42.0% preferred the LLM over notes and 26.9% preferred notes; in Group 2, 50.5% preferred LLM + Notes over the LLM alone and 16.2% the reverse.

The paper reads this as a [[metacognition|metacognitive]] problem: learners have limited insight into which activities produce durable learning. The process data show why: 25.63% of students in the combined condition had more than 70% trigram overlap between their notes and the LLM output, and 16.25% had more than 90% — they copied — while prompt frequency fell from 9.21 (SD = 5.72) with the LLM alone to 6.02 (SD = 4.64) with notes available.

## What students actually asked the model

The 4,929 prompts are its most concrete contribution to [[learning-design|learning design]]. The most frequent archetype was seeking additional information and deeper understanding (2,265 prompts), used by 90% of students at least once and by 60% as their most common prompt; it was mainly elaboration (1,479) and general background (514). Information condensation came second (749 prompts), with 27% of students opening with a summary request. Understanding the text (615) covered definitions and simplifications and was used by 70% of students at least once; study and memory help was rare (39).

A further 760 prompts addressed the chatbot's functionality, 501 (about 10%) were off-topic, and only six prompts questioned its trustworthiness; students treated a system that can be wrong as an authority.

## Complementary uses, and what the design can support

The authors resist the simple reading that chatbots are bad for reading: their tests measured mastery of the assigned texts only, so the advantage of notes may be narrow — notes supported command of the material, while the LLM supported exploration beyond it. On that account the two produce different outcomes rather than better and worse ones, and the combined condition preserved the emotional engagement note-taking alone lost.

The design cannot support a claim that the LLM produced less learning than reading would have; without a reading-only arm the baseline is strong. The practical question is sequencing: query first, close the tool, then write — a matter of [[self-regulated-learning|self-regulation]] and [[ai-literacy|AI literacy]] as much as software.

## Key Findings

1. Notes outperformed LLM-only use on literal retention (β = 1.92, d = 0.44, p < .001), comprehension (β = 0.95, d = 0.38, p < .001) and free recall (β = 1.02, d = 0.21, p = .017).
2. LLM + Notes outperformed LLM-only use on literal retention (β = 0.57, d = 0.13, p = .040) and comprehension (β = 0.35, d = 0.14, p = .048), but not free recall (β = −0.08, p = .854).
3. The advantage of notes was larger than that of LLM + Notes for literal retention (difference = 1.35, z = 3.60, p < .001) and comprehension (difference = 0.59, z = 2.43, p = .015).
4. Students rated the LLM less difficult (0.51 points, d = −0.52), more helpful (0.41 points, d = 0.33) and more enjoyable (0.68 points, d = 0.48) than note-taking while scoring lower on every test.
5. In Group 1, 42.0% preferred the LLM over notes and 26.9% preferred notes; in Group 2, 50.5% preferred LLM + Notes over the LLM alone and 16.2% the reverse.
6. In the LLM + Notes condition, 25.63% of students had more than 70% trigram overlap between their notes and LLM output and 16.25% had more than 90%.
7. Of 4,929 prompts, the most common archetype was seeking additional information and deeper understanding (2,265 prompts, used by 90% of students at least once), while only six questioned the LLM's trustworthiness.

## What this means for practice

- **Separate the chatbot from the notepad.** With both open, a quarter of students copied most of their notes from the model; the authors suggest querying first, then closing the chatbot before writing, or blocking paste.
- **Teach the interaction, not just the interface.** Participants got instructions and a demonstration but no practice; the authors conclude that students need more comprehensive training.
- **Do not read enjoyment as evidence of learning.** The condition students found easiest and most helpful produced the lowest scores; ask for a delayed, closed-book task before concluding a tool works.
- **Use prompt logs as formative assessment.** The prompts showed what students were curious about and what they misunderstood, which can inform the next lesson.
- **Keep a plain-reading comparison in local evaluations.** Without that arm this study cannot say whether the chatbot was worse than reading.

## Limitations

- Neither activity was practiced, possibly disadvantaging the LLM conditions: about 15% often or always used an LLM for learning, against about half for note-taking.
- No reading-only control and no group saw both Notes and LLM + Notes, so the LLM cannot be located relative to plain reading and Notes versus LLM + Notes is only an indirect comparison.
- Engagement used single items, and post-hoc power for those comparisons ranged from 70.5% to 77.0%, below the conventional 80% benchmark.
- Free recall was underpowered (64% and 63% for the two pre-registered contrasts) and near floor — 4.32 out of 50 in the LLM conditions — so the null result for LLM + Notes there deserves caution.
- Prompts were coded at the single-prompt level rather than as dialogues, so the study cannot say which kinds of LLM use drive outcomes, and coding was checked against API output without independent double coding.
- The model was GPT-3.5 turbo, each condition a single 10–15 minute task, and the sample 344 students in seven self-selected schools in England, so results may not transfer to newer models, repeated use, homework or other systems.

## Citation

Kreijkes, P., Kewenig, V., Kuvalja, M., Lee, M., Hofman, J. M., Vitello, S., Sellen, A., Rintel, S., Goldstein, D. G., Rothschild, D., Tankelevitch, L., & Oates, T. (2026). Effects of LLM use and note-taking on reading comprehension and memory: A randomised experiment in secondary schools. *Computers & Education, 243*, Article 105514. https://doi.org/10.1016/j.compedu.2025.105514
