---
title: "Benefits of co-learning with an AI agent"
created: "2026-09-18T14:20:00-04:00"
updated: "2026-09-19T14:23:47-04:00"
type: article
foundations: [human-ai-collaboration, cognitive-offloading, agentic-ai]
pedagogy: [collaborative-learning, self-regulated-learning, problem-solving]
technology: [conversational-ai, llm]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, quantitative]
level: [higher ed]
audience: [researchers, educators, learning designers]
connected_faqs: [top-10-findings-ai-education-instructors]
page_kind: [evaluation]
sources: ['raw/papers/co-learning-ai-agent-hidden-rules-2026.md']
confidence: high
---

> **Synthesis:** Feldman, Gallos, Wang, Menkov and Kantor (Rutgers University) study [[human-ai-collaboration|human–AI co-learning]] in its most stripped-down form. A learner plays the Game of Hidden Rules (GOHR), sorting colored shapes into four corner buckets according to a rule they must discover, while a "bot" beside the board suggests moves together with a stated confidence ("Try moving piece E to bucket #3. I am 31% confident"). The bot sees the same information as the learner, appears to learn in parallel, and can be followed or ignored. Across four Prolific experiments (N = 232) bot assistance cut the moves needed to solve a rule by 33–52%, and participants accepted suggestions on 34–41% of trials. The benefit was concentrated almost entirely in weaker learners: low performers with the bot solved rules about as quickly as high performers without it, while strong learners were barely affected. No participant ever solved a rule purely on bot suggestions, and following collapsed once learners reached their own insight — evidence of genuine [[problem-solving|rule discovery]] rather than [[cognitive-offloading|offloading]]. Slightly faster (smarter) bots helped slightly more.

## Key Findings

1. **Bot assistance produced a consistent performance advantage.** Across the four experiments, having the bot available reduced the number of moves needed to complete a game by 33–52%: 43% in Exp. 1a, 49% in Exp. 1b, 52% in Exp. 2a and 33% in Exp. 2b. Lower N moves means faster rule discovery.
2. **The effect was very strong statistically in every experiment.** Bayesian ANOVAs gave inclusion Bayes Factors for bot assistance of 2.22e+07 (Exp. 1a), 1.33e+08 (Exp. 1b), 5.01e+11 (Exp. 2a) and 2.51e+04 (Exp. 2b), while block order and the block × bot interaction showed no evidence of an effect (BFinclusion < 1) in all four.
3. **Bot benefit was concentrated in weaker learners.** The bot × subject-quality interaction was substantial everywhere (BFinclusion = 3.32e+04, 4.97e+06, 516.53 and 144.90 for Exps. 1a, 1b, 2a and 2b). In Exps. 1a and 1b, low-performance subjects with the bot performed at essentially the same level as high-performance subjects without it (BF10 = .271 and BFinclusion = 0.286, i.e. BF > 3 in favor of the null of equal means); in Exp. 2a the equivalent comparison was inconclusive (0.668) and in Exp. 2b weaker subjects with the bot matched stronger subjects with the bot (0.331).
4. **Stronger learners gained almost nothing.** High-performance subjects were "relatively unaffected" by bot presence in all four studies, which the authors read either as the bot supplying suggestions strong learners could generate themselves, or as overconfidence leading them to forgo useful help.
5. **Success rates moved in the same direction, but only reliably in two experiments.** The probability of completing a rule with 10 correct moves in a row was higher with the bot in every study, reliably so in Exp. 1b (BFinclusion = 8.43) and Exp. 2a (BFinclusion = 10.1), but not detectably in Exp. 1a or Exp. 2b (BFinclusion < 1).
6. **Participants followed the bot on roughly a third to two-fifths of trials.** Following rates were 39.9% (Exp. 1a), 35.9% (Exp. 1b), 40.8% (Exp. 2a) and 34.0% (Exp. 2b). High-performance subjects followed somewhat more often than low performers, reliably in Exps. 1a (BFinclusion = 66.24), 2a (4.39e+19) and 2b (1.42e+20), but not in Exp. 1b (BFinclusion < 1).
7. **Bad advice was punished with a lasting drop in reliance.** After an incorrect suggestion, the probability of following fell sharply for several moves — recovering after a few moves in Exp. 1a, after about 8 moves in Exp. 2a, and not recovering even within 10 moves in Exp. 1b.
8. **Learners diverged from the bot once they had their own insight.** In the final 10 moves of a game, proportion correct rose while proportion followed dropped toward zero; classified as divergence at BF > 3 by Bayesian logistic regression, this pattern held for 100%/79%/100%/100% of subjects (Exp. 1a), 100%/96%/100%/81% (Exp. 1b), 100%/68%/100%/100% (Exp. 2a) and 96%/83%/92%/100% (Exp. 2b) across rules 1–4.
9. **Smarter bots helped somewhat more, and no one coasted.** In the combined analysis the between-subjects bot-speed manipulation was reliable (BFinclusion = 40.03) with a small bot × bot-speed interaction (6.03), so benefit increased with apparent bot intelligence while remaining present even for a bot dumber than the average subject. Crucially, no subject in any condition ever reached criterion purely on a streak of bot suggestions, so all results reflect real learning.

## Why the Game of Hidden Rules is a good vehicle

The GOHR asks a learner to sort colored shapes into one of four buckets placed at the corners of the grid. Every placement is accepted or rejected with a happy or sad face, and the learner's job is to infer the hidden rule that governs acceptance. Rules can be trivial (color match, nearest quadrant), moderately hard (shape match plus reading order) or composite (color match combined with clockwise fill order), so difficulty becomes an experimental variable rather than a nuisance. The platform's crucial property is that the identical task can be posed to a human learner or to a machine, which makes human and AI learning directly comparable rather than merely analogous, and it has already been used that way in [[benchmark|benchmarks]] and in [[reinforcement-learning]] comparisons.

For studying assisted problem solving the game has three further attractions. Answers are objectively right or wrong, so a helper's advice can be scored trial by trial. The session has an unambiguous ending — a streak of correct moves whose probability under random guessing is one in a million, about 10 in a row with four buckets — giving a clean dependent measure (N moves) that rises both when a learner takes many attempts to succeed and when they give up. And because most rules have several acceptable moves at any point, a learner repeatedly faces the [[problem-solving|decision]] of whether to take a suggestion or test their own hypothesis, which is exactly the [[help-seeking]] trade-off that [[intelligent-tutoring]] systems try to manage.

## Design: a bot that only pretends to learn

The helper was deliberately not a real AI. Blank-slate AI learners need thousands of examples to discover these rules while human participants need dozens, so a genuine machine co-learner could not have been helpful in real time. Instead the authors used a pseudo-bot that knows the correct rule and generates a correct move with probability 1 − α. It reports a confidence equal to that probability, so its stated confidence always matches its true reliability. The error rate α starts at 75% at the beginning of every rule — a stated 25% confidence that looks like chance to someone facing four buckets — and then decays exponentially with move number, simulating a partner who is learning alongside the subject.

The decay half-life was the experimental lever on bot "intelligence": 8 moves (neutral, roughly human-like, reaching about 5% error after 32 moves) in Exps. 1a and 1b; 4 moves (fast, ~5% error by move 16 and ~0.3% by move 32) in Exp. 2a; and 16 moves (slow, ~5% only after ~64 moves and still 19% error at move 32) in Exp. 2b. Exps. 2a and 2b reused Exp. 1a's rules exactly, so the only difference between those three experiments is the bot's learning rate.

Each participant played four games in a roughly 30-minute online session, one rule per game, with the bot present in two of them and absent in the other two. Randomization to one of four treatments counterbalanced both the order of the rules and the position of the bot conditions, so every bot-versus-no-bot comparison used exactly the same rules with order effects removed. Participants were recruited through Prolific for English proficiency and were naive to the study's purpose: 57 subjects in Exp. 1a (mean age 35.3, sd 13.0), 57 in Exp. 1b (37.6, sd 14.3), 61 in Exp. 2a (36.7, sd 13.2) and 57 in Exp. 2b (35, sd 10.9). Exp. 1b replicated Exp. 1a on a fresh rule set rather than being an exact repetition, which is what licenses the claim that the findings generalize beyond particular rules.

## Results: a consistent benefit, concentrated in weaker learners

The headline result is the one the abstract states: participants solved problems more quickly with the bot present than without it, in every experiment and in both the neutral and the manipulated-learning-rate conditions. The gain was largest for the fast bot (52%) and smallest for the slow bot (33%), which is the first hint that the quality of assistance matters as well as its presence. Order of exposure did not matter — blocks and their interaction with bot presence were flat throughout — so the benefit is not an artifact of practice or fatigue.

Breaking performance down by subject quality reveals the study's most striking pattern. Splitting each experiment at the overall median number of moves, low performers with the bot matched high performers without it, a null equivalence they report as BF > 3 in Exp. 1a and Exp. 1b. In other words, a supply of mostly-correct suggestions approximately erased the gap between stronger and weaker rule discoverers, an effect the authors call auspicious for real-world assistance. High performers, by contrast, hovered near the same level whether or not the bot was there. The between-experiment comparison tracks the same asymmetry: as the bot's learning rate moved from slow to neutral to fast, the total benefit grew slightly, but almost all of that movement came from the low-performance group.

Two measures resist the optimistic reading and deserve to be reported as they stand. The dichotomous success measure — did the participant close out the rule with 10 correct moves in a row — moved in the predicted direction in all four experiments but was statistically reliable in only two of them, so the claim that people were more likely to *fully* solve a rule with the bot is weaker than the claim that they got there faster. And the interaction between bot presence and rule was itself huge (BFinclusion = 1.32e+30), meaning the bot helped substantially more on some rules than others rather than uniformly. Assistance in this paradigm is real but rule-dependent, not a constant multiplier.

## Following, bad advice, and the moment of insight

Because every suggestion could be scored, the study can describe reliance directly rather than inferring it from outcomes. Participants took the bot's advice on roughly a third to two-fifths of trials, and the proportion was stable across experiments despite very different bot accuracies — evidence that following is governed by the learner's own evolving model of the bot's [[trust|trustworthiness]] rather than by its actual hit rate alone. Bad advice was the clearest signal in that model: an incorrect suggestion produced a sharp, sustained drop in following, the sort of recalibration that the wider literature on [[trust-calibration]] tries to produce deliberately.

The most informative analyses track following and accuracy together over the course of a game. Early on, proportion correct and proportion followed move together, which is what you would expect if the bot is genuinely helping. Late in a session they split: proportion correct climbs sharply while following falls toward zero. That divergence is a necessary consequence of the stopping rule, since sessions end on a correct streak, but it appears alongside a rise in accuracy on trials where the participant did *not* follow the bot, so the closing streak cannot be attributed to the bot carrying them. The authors read the pattern as a "eureka" moment: the advice supplied enough good hypotheses that the learner formed the rule, after which they stopped asking. This is the study's best defense against the [[cognitive-offloading]] objection, reinforced by the fact that no participant anywhere solved a rule exclusively on suggested moves — every successful final streak contained moves the bot had not proposed. The paper does not, however, test retention or [[transfer-of-learning|transfer]] after the session, so it shows assisted discovery, not durably better learning.

The design also has a theoretical peculiarity worth naming: following was *higher* among strong performers than weak ones, which sits oddly with the finding that weak performers benefited most. The authors do not resolve it; they suggest only that stronger learners may have been overconfident and forgone help that would have helped them further.

## What this means for practice

- **Instructors.** Attach a stated confidence to every hint you supply and expect learners to accept only a third to two-fifths of them: following rates were 39.9%, 35.9%, 40.8% and 34.0% across the four experiments, so the benefit came from availability, not compliance.
- **Instructors.** Aim assistance at weaker learners. Low performers with the bot solved rules about as quickly as high performers without it, while high performers were "relatively unaffected" whether or not the bot was present.
- **Learning designers.** Buy hint accuracy before hint volume. The faster bot cut moves to solve by 52% against 33% for the slow bot, and a single incorrect suggestion produced a drop in following that had not recovered within 10 moves in one experiment.
- **Learning designers.** Let learners withdraw support on their own terms rather than forcing a fixed hint sequence, since proportion followed fell toward zero as proportion correct rose in the closing moves of every game.
- **Researchers.** Do not report a reduction in moves as learning. Success was defined as a within-session streak of 10 correct moves, no participant reached criterion purely on suggested moves, and the study measured no delayed post-test, retention or transfer.

## Limitations

- The central limitation is stated plainly by the authors: the "bot" was not an AI at all — it knew the correct rule from the start and imitated learning by decaying a programmed error rate — so it did not model the subject's mental state and did not customize suggestions, and therefore cannot be a true partner in the sense that [[human-ai-collaboration]] research expects, with no dual-pathway learning flow and no adaptive co-construction.
- Whether participants believed the bot was an AI is unknown and untested; the authors concede that assistance attributed to a real AI agent might be accepted more readily or less readily than advice from what is, in effect, a fellow learner simulated in software.
- The bot's stated confidence was always exactly its accuracy, so the study says nothing about over- or under-confident advice, a manipulation the authors flag as the obvious next step alongside varying the bot's initial confidence and finding finer-grained predictors of who benefits than the median split on total moves.
- The evidence for learning is behavioral and within-session — success is defined by a correct streak, not by delayed post-test performance, and there is no measure of whether the discovered rule generalized, persisted or transferred — and because participants self-selected onto Prolific for English-language tasks and the paradigm is an abstract puzzle rather than an academic task, the transfer of these effect sizes to [[higher-ed|higher education]] settings where AI hints are now routine remains an open question.

## Connected Concepts

- [[human-ai-collaboration]] — the paper's framing: a human and an AI partner working the same problem in parallel
- [[problem-solving]] — rule discovery in the GOHR as a controlled instance of search under uncertainty
- [[cognitive-offloading]] — the reliance question the study's no-coasting result speaks to
- [[collaborative-learning]] — the human-plus-partner structure the bot is meant to simulate
- [[self-regulated-learning]] — learners deciding when to take advice and when to test their own hypothesis
- [[help-seeking]] — the accept-or-ignore choice that constitutes the study's behavioral signal
- [[trust-calibration]] — the sharp drop in following after bad advice as trial-by-trial recalibration
- [[productive-failure]] — suggestions arriving before or instead of the learner's own struggle
- [[scaffolding]] — assistance withdrawn by the learner once they no longer need it
- [[intelligent-tutoring]] — the systems context for hint supply and hint use
- [[learning-gains]] — how a 33–52% reduction in moves-to-solve should and should not be read
- [[game-based-learning]] — puzzle environments as testbeds for human and machine learning

## Connected Articles

- [[chatgpt-hints-human-tutor-learning-gains-2024]] — Hints generated for mathematics practice and whether they substitute for human-authored help
- [[lak2026-hint-button-unproductive-use]] — The counter-case: unproductive hint use is negatively associated with learning outcomes in tutoring systems
- [[ai-advice-suppresses-ikt-suspension-2026]] — Acceptance of AI advice even when it is wrong, and the cost to what learners will admit not knowing
- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]] — Designing adaptive AI support for collaborative problem solving directly
- [[hao-human-ai-collaborative-problem-solving-cognition]] — Interaction profiles and strategy in human-AI collaborative problem solving
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — LLM agents standing in for human participants in collaborative problem-solving research
- [[lukesova-clue-before-correction-2026]] — Giving a clue before a correction as an alternative to answering for the learner
- [[qualitative-reasoning-game-guidance-2026]] — A computational model of guidance and path support in puzzle-like tasks
- [[trust-reliance-ai-education-2026]] — Trust, reliance and the learner characteristics that moderate both
- [[agents-that-teach-incidental-learning]] — Designing assistance that leaves capability with the learner rather than removing it

## Citation

Feldman, J., Gallos, L., Wang, H., Menkov, V., & Kantor, P. (2026). [*Benefits of co-learning with an AI agent*](https://osf.io/preprints/psyarxiv/bx5q4_v2). Rutgers University–New Brunswick.
