---
title: "Thumb on the Scale: Using Traditional Wargaming Adjudication Practices to Improve AI-Judged Evaluations and Grading"
created: "2026-10-26T09:30:00-04:00"
updated: "2026-10-26T09:30:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/wargaming-adjudication-ai-judged-grading-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [learning sciences]
audience: [assessment designers, instructors, researchers, educational technology developers]
level: []
pedagogy: []
technology: [llm, generative-ai, ai-technologies]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, evaluative-judgment]
methods: [ai-ed-evaluation, quantitative-research]
institutions: []
ethics: []
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-26"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Epstein maps eleven traditional [[game-based-learning|wargaming]] adjudication practices onto the failure modes of [[automated-assessment|AI-judged evaluation]], then tests one on 378 player actions from nine games of an AI-refereed exercise with the dice held fixed. Four named methods turn out to be four grading designs already in use: Rigid is a fixed scoring rule, Semi-Rigid a rubric the judge may adjust, Free holistic grading, and the four-judge Estimative panel a [[ai-technologies|jury]]. The method, not the [[llm|judge AI]], sets how often a judge disagrees with itself: a re-run changed 2.9 to 6.1 per cent of outcomes under Semi-Rigid and 13.5 to 15.9 per cent under Free, while swapping the judge AI added about 3 percentage points. Adjudicators reassigned who passes while barely moving the pass count, and a finding resting on 15 rulings moved under four of six arms. The remedy is a published [[assessment-validity|adjudication statement]] reporting the method, the judge's harness, a repeat run, and the count of [[evaluative-judgment|graded items]] behind each conclusion.

## Key Findings

1. **The method, not the judge, sets reproducibility.** Four named methods were crossed with two judge AIs on 378 submissions from nine games, dice held fixed; a re-run changed 2.9 to 6.1 per cent of outcomes under Semi-Rigid and 13.5 to 15.9 per cent under Free.
2. **A judge swap adds only about 3 points, and nine games cannot confirm it.** Opus 5 for Gemini 3.1 Pro changed 7.9 per cent of outcomes under Semi-Rigid and 17.5 per cent under Free, but the excess over both judges' noise floors stayed between 2.0 and 3.7 points.
3. **Adjudicators reassign rather than recalibrate.** Every arm lands within 0.098 of every other on mean implied probability of success, yet Semi-Rigid flips 4.8 to 5.0 per cent of outcomes and Free 11.6 to 12.4 per cent; the panel changed 40 rulings and moved the pass count by 8.
4. **Anchoring is the lever the method controls.** The correlation between stated odds and the difficulty set runs from -0.93 to +0.09 across seven arms; within one judge AI, changing the method moves anchoring 0.46 and 0.62, while changing the judge AI moves it at most 0.33.
5. **No factor moves the average ruling, only which submissions pass.** On implied odds the method takes 0.2 per cent of variance, the judge AI 1.0 per cent, the interaction 5.6 per cent, the residual 59.2 per cent; the interaction is the largest of the three main terms.
6. **Findings that rest on few rulings move.** The finding resting on 190 rulings survived every adjudicator's first run; the one resting on 15 rulings changed under four of six arms and moved on every repeat run.

## Where wargaming's procedure vocabulary comes from

Wargaming shares the measurement problem of [[automated-assessment|open-ended AI evaluation]]: no correct answer exists, so a referee decides what each move achieved. The Naval War College War Gamers' Handbook gives two axes, how results are reached and who decides; Mouat adds five ways to settle an opposed argument, from Umpired to Estimative Probability. Downes-Martin names two root failures. The first is the incorrect assumption that adjudicators are impartial controllers instead of dominant players: whoever decides how moves resolve controls the reality everyone else sees. The second is making players' decisions the game's primary output when the reasoning behind them is what is worth keeping, which maps onto a judge's reasoning against its verdict in [[evaluative-judgment]]. The fixes need no new method: record the reason for each ruling, rotate adjudicators, sit a [[ai-technologies|panel]] on top of any method, and open the record to review. The paper's map pairs eleven practices with the [[ai-ed-evaluation]] failure each guards against, from verdicts with no logged rationale to treating [[assessment-validity|agreement]] as truth. These are properties of [[educational-measurement|grading procedure]], not of any one [[llm]].

## The experiment: four methods on fixed dice

The test bed is the Long Game Project exercise engine, an [[ai-ed-evaluation|adjudication test bed]] rather than a professional wargame, running matrix-style exercises with a pluggable adjudicator. Each submission states its odds, its pros and cons, and its effects if it succeeds; the adjudicator sets a difficulty and a modifier, and a seeded d20 resolves it. The paper uses report 006, a scenario about AI agents breaking into a lab's servers, played over six ticks under three evidence standards and three seeds: 42 submissions each, 378 in the matched set. Under Rigid the difficulty is round((100 - stated per cent) / 5) + 1 and the modifier is pros minus cons, within plus or minus 3. Under Semi-Rigid the judge may move the modifier within bounds and must document why; under Free it sets the difficulty itself; under Estimative four judges rule independently and the median rules. The replay engine re-rules each logged submission on the same roll with nothing else changed, so a changed outcome is attributable to the adjudicator. These are forms of [[automated-assessment]] that [[evaluative-judgment|grading]] already uses, usually unnamed.

## Anchoring, and what the variance decomposition hides

Anchoring measures how tightly the adjudicator's difficulty tracks the player's claimed odds. Rigid reads the number back at -1.00 by construction, so the paper drops that identity row; the seven other arms run from -0.93 to +0.09 on the same 378 submissions. Within Semi-Rigid, Gemini kept the rule-based difficulty on 92.9 per cent of rulings and Opus on 16.4 per cent, both told the same thing: permission to sit still versus permission to move. The variance decomposition on implied probability of success is what surprises: the submission accounts for 34.0 per cent, the method 0.2 per cent, the judge AI 1.0 per cent, the interaction 5.6 per cent and the residual 59.2 per cent. Neither main effect moves the average ruling much: a paper reporting them would be reporting the two smallest numbers in the table. What moves is which submissions succeed, and most of that movement is submission-by-submission idiosyncrasy no factor in the design predicts. The interaction is where the [[ai-feedback-quality|judge's discretion]] shows, and a decomposition on the mean cannot see it. Adjudicators are also all more generous than the players claimed: stated odds give 0.585 against 0.743 for the rule-based baseline, and every arm lands within 0.098 of every other. A panel's mean difficulty of 5.91 against the rule-based 9.29 looks like leniency until the modifier is folded in, when they sit 0.011 apart on implied odds.

## The noise floor, and which conclusions it can overturn

The noise floor is the share of outcomes the same judge changes when it rules on the same submissions again, and it is what a judge swap or method change must beat. Measured on four cells at provider defaults, it is 2.9 per cent for Opus 5 on the agent harness and 6.1 per cent for Gemini 3.1 Pro on the bare API under Semi-Rigid, against 15.9 and 13.5 per cent under Free; both judges change more on a second run under Free, by 13.0 and 7.4 points, and no game goes the other way. Swapping the judge AI changes 7.9 per cent under Semi-Rigid and 17.5 per cent under Free before the floor is removed, and the excess stays between 2.0 and 3.7 points under every reasonable choice of floor, which nine games cannot make secure. Under Free the agent harness also sets a higher difficulty and a larger modifier than the bare API, 11.68 and 7.24 against 7.42 and 2.72. The load-bearing analysis asks which of the exercise's four published findings survive. Condition adoption, resting on 190 rulings, stayed at 9 of 9 under every arm's first run and dropped to 8 of 9 on one repeat; access granted rests on 76, seam named on 11, successor resumed on 15. The successor finding changed under four of six arms and moved on a second run of every judge repeated, in both directions. The rule is computable from logs an [[ai-ed-evaluation|evaluation]] already has: count the rulings a conclusion rests on before asking how good the judge is.

## What this means for practice

- **Assessment designers.** Publish an adjudication statement before the results: the method, how far the judge may depart from the rubric, whether it may abstain and how abstentions are scored, and the harness and settings behind the judge's name.
- **Assessment designers.** Split the score between a deterministic ledger and the judge, then state the judge's share of the final score, so a reader sees how much of the number is the judge.
- **Instructors.** Count the graded items behind each headline conclusion before trusting it, because a conclusion resting on one item is a conclusion about the grader.
- **Instructors.** Read the pass rate alongside the flip rate: the panel changed 40 rulings and moved the pass count by 8.
- **Researchers.** Report the noise floor from one repeat run, and treat a judge swap of about 3 points over nine games as suggestive, not established.

## Limitations

- The exercise has no correct answer to check rulings against, and the authors ran no human adjudication panel over the same 378 submissions, so the paper measures how much rulings move, never which ruling is right.
- The 378 rulings are not independent draws: 9 games, 6 ticks, 3 evidence standards and recurring actors, and the intervals are a cluster bootstrap over 9 clusters with 10,000 draws, so nine clusters is thin.
- The noise floor was measured in four cells only, and the repeats ran on 22 October 2026 six weeks after the first runs, on endpoints that were not pinned, so each floor includes any change in the served AI over that time.
- The judges see less than a human umpire: the scenario brief, the submission, the resource standing and their own earlier rulings, but not the whole game state an NWC Free umpire would know.
- Sampling parameters were never set or recorded, every judge ran at provider defaults, the bare API caps output at 8,192 tokens while the agent harness enforces no cap, the panel is four judge AIs rather than four people, and the replication on report 005 (735 logged rulings) has not been run.
- Much of the wargaming source literature is practitioner writing rather than peer-reviewed work.

## Citation

Epstein, D. S. (2026). [Thumb on the scale: Using traditional wargaming adjudication practices to improve AI-judged evaluations and grading](https://arxiv.org/abs/2610.32066). *arXiv preprint*.
