---
title: "Generative AI empowered contextual educational games as facilitators of elementary school students' computational thinking tendencies"
created: "2026-11-14T05:46:00-05:00"
updated: "2026-11-14T05:46:00-05:00"
published: "2026"
type: article
sources: ['raw/papers/zhou-genai-contextual-games-computational-thinking-2026.md']
source_url: "https://doi.org/10.1111/bjet.70101"
source_depth: full text
confidence: high
evidence_context: educational
research_method: [quasi-experiment]
page_kind: [evaluation]
level: [primary education]
audience: [researchers, instructors, instructional designers]
discipline: [information technology]
foundations: [computational-thinking, learning-design]
pedagogy: [game-based-learning, experiential-learning, inquiry-based-learning, help-seeking, scaffolding]
technology: [generative-ai, conversational-ai]
assessment: [self-report-measures, learning-gains]
methods: [mixed-methods-research]
ethics: [privacy]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-14"
    agent: hermes-agent
---

> **Synthesis:** Zhou, Fu, Fang and Hwang put a [[generative-ai|generative AI]] non-player character inside a role-playing game built with RPG Maker MZ and ran it for three weekly sessions in two intact fifth-grade classes in eastern China. After adjusting for pretest scores, the class that could question the AI teacher reported slightly stronger [[computational-thinking|computational thinking]] tendencies than the class that played the same game with scripted dialogue, while a test of algorithmic knowledge found no reliable difference. The question logs suggest the AI worked less as a tutor than as a low-stakes interlocutor students asked to restate a problem, break it into parts, or explain a flowchart symbol. The authors are circumspect about the size of that claim.

## Key Findings

1. **The AI group gained modestly on self-reported CT tendencies.** Adjusted posttest means favored the GenAI class, 4.325 against 4.037, a small difference.
2. **Algorithmic knowledge did not separate the groups.** Posttest means were 80.7 and 74.9; the gap was not statistically significant, though both classes improved from about 60.
3. **Every student in the experimental group questioned the in-game teacher.** Two thirds said the interaction encouraged inquiry, and several said they asked what they feared asking the real teacher.
4. **Solution seeking was the largest question category.** Of the logged questions, 278 sought a solution or strategy, 252 described the problem, 226 broke it into parts, 75 asked what a symbol meant, and 53 explored alternatives.
5. **Both conditions were enjoyable; only the AI group prized the questioning.** Both groups described strong emotional engagement, and about half emphasized motivational benefits, while 61.9% of the experimental group singled out the chance to ask.
6. **The AI worked as scaffolding, not instruction.** The authors read the pattern as support for inquiry, not a mechanism that taught algorithms in three weeks.

## The game the class played

Five modules made up the environment: course content, story and tasks, GenAI, rewards, and records. Three tasks carried the instruction: Sending a Lamb Home, Finding Lost Treasures, and Planting and Harvesting, each requiring students to identify constraints and plan a strategy. Kolb's experiential cycle framed each round of action, feedback and reflection. The AI appeared as a teacher inside the fiction, and students could type questions at any point.

The comparison class used the same game without the GenAI module, relying on pre-programmed dialogues; the instructor and schedule were identical. The experimental group also got guidance on evaluating AI feedback critically, so the design did not hand them an oracle.

## What the two classes showed

The sample was 78 students aged 10–11 in the fall 2024 semester, during a compulsory information technology course on algorithm representation: 42 in the experimental class, 36 in the control class. Pretest scores were statistically indistinguishable on both measures.

For CT tendencies, the analysis of covariance used heteroskedasticity-consistent standard errors because a Levene test flagged unequal error variances. The adjusted difference was 0.288 (95% CI [0.006, 0.570]), t(75) = 2.031, p = 0.046, partial η2 = 0.052: statistically significant and practically small, with a confidence interval whose lower bound sits close to zero. The authors call it preliminary evidence of a modest difference, not a medium or large effect, which is the honest reading.

## What students asked the in-game teacher

The system logged every question, though not the AI's replies or what students did next. After off-topic entries were removed, the questions fell into five categories: problem description, decomposition, solution seeking, alternatives, and requests to clarify a concept or symbol. One student wrote, "With 135 gold coins, I have to buy seeds, but the price of each seed is different; which way to buy seeds is the most cost-effective?" Another asked the teacher to "rank the preferred planting options." A third asked, "What does the box in a flowchart mean?"

Those are recognizable CT moves: turning a narrative into variables and constraints, decomposing an optimization problem, clarifying a representation. They are evidence of [[help-seeking|help-seeking]], not of solved problems: without the responses or later actions, the log shows what support students wanted, not what they learned.

## Why the knowledge test may not have moved

Three weeks is short for explicit procedural knowledge, and the open-ended items used familiar contexts, such as buying a ticket, using a search engine and guiding a puppy out of a maze, which may not have separated the groups. The measures also capture different things: a six-item self-report scale records whether students approach problems systematically, while the test records whether they can describe and apply algorithms.

The authors lean on that point: dispositions shift within weeks, while understanding needs explicit instruction and practice. That is plausible but untested here: nothing separates a real dispositional change from a more positive self-perception after three weeks of play.

## What this means for practice

- **Instructors:** treat the in-game AI as a place to ask, not a place to get answers. Students valued formulating a question, hearing it restated and trying again, so protect that cycle instead of letting the AI supply the solution.
- **Instructional designers:** log the questions students type. They are the cheapest process data a game like this produces, and they show which part of a task students cannot name well enough to ask about.
- **Administrators:** judge a GenAI game on whether it changes how students work, not on whether they enjoyed it. Both conditions here were rated fun, and the measurable difference was small.

## Limitations

- Two intact classes in one school, assigned at the class level, so pre-existing class differences may not have been fully controlled.
- Three instructional weeks with no delayed posttest, so persistence and transfer are unknown.
- CT tendencies came from a six-item self-report scale and algorithmic knowledge from a locally developed test; neither is performance-based.
- The system kept student questions but not the AI's responses or later actions, and the control group produced no comparable process data.
- GenAI was bundled with narrative, rewards, experiential guidance and teacher support, so the results describe the whole environment rather than the AI alone.

## Connected Concepts

- [[computational-thinking]]: tendencies treated as a disposition, distinct from algorithmic knowledge
- [[game-based-learning]]: contextual role-play as the delivery format
- [[help-seeking]]: the in-game teacher lowered the cost of asking
- [[scaffolding]]: motivational and cognitive support, not direct instruction
- [[experiential-learning]]: Kolb's cycle structured the question, reflect, retry loop

## Connected Articles

- [[ai-pbl-computational-thinking-2026]]: AI-supported problem-based learning for CT in a quasi-experiment
- [[roboblockly-conversational-block-robotics-ct-2026]]: a conversational agent with block programming and robot feedback
- [[ai-game-based-learning-systematic-review-2026]]: a review of AI-supported game-based learning
- [[wenzel-conversational-ai-feedback-cognitive-load-game-2026]]: access to conversational AI in a game versus engagement

## Citation

Zhou, W.-L., Fu, Q.-K., Fang, J.-W., & Hwang, G.-J. (2026). Generative AI empowered contextual educational games as facilitators of elementary school students' computational thinking tendencies. *British Journal of Educational Technology, 00*, 1–20. https://doi.org/10.1111/bjet.70101
