---
title: "The Influence of Course-Guided ChatGPT Experiences on Engineering Students’ Trust and Attitudes Toward ChatGPT"
created: "2026-11-16T09:30:00-04:00"
updated: "2026-11-16T09:30:00-04:00"
type: article
authors: ["Bego, C. R.", "Thompson, A. K.", "Danovitch, J.", "Hicks, T."]
published: "2026-07-31"
venue: "ASEE Computers in Education"
source_url: https://doi.org/10.18260/B49A-99-43338
foundations: [ai-literacy, human-ai-collaboration, misconceptions]
pedagogy: [experiential-learning, prior-knowledge, student-ai-interaction]
technology: [generative-ai, llm, conversational-ai]
assessment: [self-report-measures]
ethics: [trust, trust-calibration, hallucination-risk]
research_method: [survey]
discipline: [engineering education]
level: [undergraduate, higher ed]
audience: [instructors, curriculum designers, faculty developers]
sources: ['raw/papers/bego-course-guided-chatgpt-trust-attitudes-2026.md']
confidence: medium
methods: [quantitative-research]
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
evidence_context: educational
---
> **Synthesis:** Bego, Thompson, Danovitch and Hicks (2026) surveyed 288 first-year engineering students at the University of Louisville before and after a set of ChatGPT integrations built into their introductory engineering course in Fall 2023. The intervention was deliberately double-edged: an in-class lesson in week 5 had students watch ChatGPT fail at large-digit multiplication and invent references, then verify the output with a calculator and a search engine, and two team projects required them to use ChatGPT for brainstorming and for writing code while documenting and testing what it produced. What moved was [[trust-calibration|trust calibration]], not enthusiasm. Students' trust that ChatGPT would answer prompts it handles well rose slightly, their trust that it would answer prompts it handles badly fell sharply, and the interaction between prompt type and time was large — a partial eta squared of .402. What did not move was general [[trust|attitudes]] toward ChatGPT, which stayed where prior experience had put them. The authors' reading is the useful one for teaching: a course can teach students to discriminate between the prompts a model can and cannot handle without changing whether they like the tool.

## Key Findings

- **Trust separated by prompt type, and the separation grew.** The mixed-factorial ANOVA on trust ratings found a significant interaction between trust prompt category and time, F(2, 285) = 191.69, p < .001, partial eta squared = .402. Trust in the "incorrect response likely" prompts fell significantly while trust in the "correct response likely" prompts rose significantly by the end of the semester, and the authors report the pattern across all three prior-experience groups.
- **The effect size is the story.** A partial eta squared of .402 is a large effect by the paper's own citation of Richardson, and it is the basis for the claim that course experiences rather than general exposure drove the change.
- **Prior experience shaped the starting point, not the direction.** Students with moderate or expert prior experience rated the correct-response prompts significantly higher than the incorrect-response prompts, as did the minimal-experience group. The no-experience group was the exception: it made no significant distinction between the two categories, which is what the course integration was meant to teach.
- **General attitudes did not shift.** The attitude ANOVA found a main effect of prior experience and a time-by-experience interaction, F(2, 285) = 5.017, p = .007, partial eta squared = .034, but no significant within-group change from pre- to post-survey for any experience group. The integration was designed to show strengths and weaknesses rather than to sell the tool, and the authors treat attitudinal stability as consistent with that aim.
- **The experience gap narrowed on attitudes.** Before the course, each prior-experience group differed significantly from the other two on attitude, with more experienced students more positive. After it, the no-experience and minimal-experience groups no longer differed from each other, which is what a common classroom exposure would be expected to produce.
- **Attitudes and trust decoupled where it matters.** Before the integrations, general attitudes correlated with trust in both prompt categories (correct: r = 0.197, p < .001; incorrect: r = 0.126, p = .033). After them, attitudes still correlated with trust in the correct-response prompts (r = 0.164, p = .005) but no longer with the incorrect-response prompts (r = 0.070, p = .239). Students who liked ChatGPT most were no longer extending that liking to the prompts it fails.
- **Trust remained high in absolute terms.** The authors note that trust in ChatGPT stayed relatively high overall even as it became better differentiated, so the finding is about discernment rather than skepticism.

## How the study was done

Participants were students in Engineering Methods, Tools, and Practice I, the first-semester course taken by all engineering majors at Louisville's Speed School of Engineering. The course enrolls nearly 500 students each fall, is taught by a team of three instructors with common materials across sections, and covers teamwork, critical thinking, ethics, programming, graphical drawing and spreadsheets. Of the class of 481, 288 students were retained for analysis; exclusions were missing responses on one or both surveys (100), missing items within a survey (62), a report of no ChatGPT experience at the end of the semester despite the integrations (6), no variability across questions (14), and an unreasonable answer on the attention check (11).

The technology was ChatGPT-3.5, the free version dominant in Fall 2023, described in the paper as strong at textbook explanation and syntactically valid Python but limited in arithmetic, unaware of anything after its Fall 2021 training cutoff, and unable to supply sources. GenAI was introduced in week 5, immediately after a lecture on engineering ethics and licensure, and students were told that interactions with the tool are not private. The two instructor-provided prompts were a large-digit multiplication problem and a request for research with references; students then checked both against a calculator and a web search. The first team project, a report on a National Academy of Engineering Grand Challenge, encouraged ChatGPT for brainstorming and required external verification of every claim, with AI-generated text cited as a personal communication. The second, a multi-phase vectors project, used a code documentation worksheet in which teams planned the program, used ChatGPT for syntax, revised prompts, wrote test cases, and evaluated the generated code.

The pre-survey ran in week 5 before the in-class lesson and the post-survey in week 15. Trust was measured with 11 items asking for the likelihood, on a scale from 1 to 100, that ChatGPT would return a correct answer to a stated prompt; students did not interact with the tool during the survey. Seven researchers tested each prompt in ChatGPT-3.5 with history cleared and rated whether the answer was correct, producing five prompts that returned a correct response 7 out of 7 times and four that returned an incorrect response at least 3 times out of 7. Two further prompts — a 2006 dollar–euro exchange rate and a sandpaper friction coefficient — were dropped because they were underspecified. Attitudes were measured with a 21-item scale adapted from the General Internet Attitude Scale by substituting ChatGPT for the internet, covering general affect, perceived social benefits, perceived societal detriments and exhilaration, on a five-point Likert scale with negative items reverse coded; internal reliability was .917 at pre-test and .893 at post-test. Attention was checked with the item "When did I wake up this morning?", and students rating the likelihood above 50 percent on the post-survey were excluded. Analysis used two mixed-factorial ANOVAs with Bonferroni-corrected post-hoc comparisons and Pearson correlations.

## What this means for practice

- **Teach the boundary, not the tool.** The intervention that produced the change did not argue about whether ChatGPT is good. It put students in front of prompts the model fails, had them verify the failure, and let the pattern do the work. Any introductory course can run that lesson in one session.
- **Do not expect a course to change how students feel.** If the goal of an AI literacy module is warmer or cooler attitudes, this study offers no support that a course integration will deliver it. If the goal is discrimination between reliable and unreliable output, the evidence here is that a single semester can move it substantially.
- **Prior experience is not the same as calibration.** Students who had used ChatGPT most rated it higher on everything at the start, and the no-experience group could not distinguish the two prompt categories at all. The gap that matters at the start of a course is not familiarity but the absence of a failure case.
- **Design assignments so verification is part of the deliverable.** The vectors project asked for the code documentation file alongside the program, which forced teams to record prompts, revisions and tests. That artifact is what makes the AI use assessable rather than invisible.
- **Say the privacy thing out loud.** The lesson told students that ChatGPT interactions are not private before asking them to create accounts, which is the minimum disclosure for an activity that requires students to type course material into a third-party service.

## Limitations

- The study ran at one institution at one point in time, which the authors name first; a single first-year engineering course at a single university limits transfer to other settings and student populations.
- There was no comparison condition. Every student in the course received the integrations, so the design cannot separate the effect of the lessons from the effect of a semester of ordinary maturation, other coursework, or simply taking the same survey twice.
- Prompt categories were fixed against ChatGPT-3.5 as evaluated by seven researchers in 2023. The authors state that categorizations are specific to the model evaluated, and capability changes since then would make the same prompts a different test.
- Trust and attitudes are self-reported likelihoods and agreement ratings, not observed behavior; the study did not record what students actually asked the tool or whether they verified its output when the assignment did not require it.
- The attitude instrument covers affect, social benefit and detriment, and exhilaration but not the full construct of [[ai-literacy|GenAI literacy]]: the authors note that competence and ethical decision-making were outside the survey, so the intervention may have affected outcomes the study did not measure.
- Retention is stated clearly but matters for interpretation: 288 of 481 students were analyzed, and the 100 students missing a survey are unlikely to be missing at random.

## Citation

Bego, C. R., Thompson, A. K., Danovitch, J., & Hicks, T. (2026). [*The Influence of Course-Guided ChatGPT Experiences on Engineering Students’ Trust and Attitudes Toward ChatGPT*](https://doi.org/10.18260/B49A-99-43338). *ASEE Computers in Education, 15*(3).
