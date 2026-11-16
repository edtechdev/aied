---
title: "PicPrompt: A Game-Based Tool for Teaching Prompt Engineering Through Text-to-Image Generation in K–12 Settings"
created: "2026-11-16T09:30:00-04:00"
updated: "2026-11-16T09:30:00-04:00"
type: article
authors: ["Kumar, P.", "Lim, P.", "Sotelo, A.", "Driscoll, P."]
published: "2026-09-30"
venue: "ASEE Computers in Education"
source_url: https://doi.org/10.18260/B4B8-9A-60472
foundations: [ai-literacy, information-and-media-literacy]
pedagogy: [game-based-learning, collaborative-learning, creativity]
technology: [generative-ai, prompt-engineering, multimodal]
assessment: [self-report-measures, peer-assessment]
research_method: [survey, user study]
discipline: [cs education]
level: [k 12, primary education, middle school, secondary]
audience: [instructors, curriculum designers, educational technology developers]
sources: ['raw/papers/kumar-picprompt-game-prompt-engineering-k12-2026.md']
confidence: low
methods: [quantitative-research, mixed-methods-research]
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
> **Synthesis:** Kumar, Lim, Sotelo and Driscoll (2026) built PicPrompt, a multiplayer game in which one player writes a [[prompt-engineering|prompt]] that a text-to-image model turns into a picture and the others race to guess what the prompt said, then vote on the closest guess. It is Pictionary with an image generator standing in for the drawing, and the design intent is that the loop of writing, seeing, guessing and voting makes prompt craft visible to children. They tested it with 22 students in grades 2 through 9 across three sessions at an informal learning site in February 2026. Self-rated prompt-writing knowledge rose from 2.23 to 2.73 on a four-point scale with a small-to-medium effect (d = 0.35) that did not reach significance at p = .118, and the clearest change was at the floor: students who had never written a prompt fell from 8 of 22 to 1. Enjoyment was high (3.95 out of 5) and 77.3% would recommend it. The study has no control group, a nine-grade span playing the same game with the same survey, and a post-survey so fatigued that 63.6% of students left the repeated writing task blank — the authors call the work exploratory, and that is the right reading.

## Key Findings

- **The headline gain is small, positive and not statistically significant.** Mean self-rated prompt-writing knowledge went from 2.23 to 2.73 on the four-point scale, a half-point gain, with p = .118 and Cohen's d = 0.35; a Wilcoxon signed-rank test confirmed the same pattern. The authors report it as a preliminary signal and compute that roughly 60 participants would be needed to detect an effect of that size.
- **The most defensible change is the shift out of "never done this."** Before playing, 36.4% of students (8 of 22) said they had never written a prompt for AI; afterward only 4.5% (1 student) placed themselves at the bottom of the scale. The largest post-game group was "I learned a little bit" (45.5%), followed by "I'm good at it now" (27.3%) and "I learned some new things" (22.7%).
- **General AI awareness was already high, and prompt skill lagged well behind it.** Mean self-rated AI knowledge was 3.77 out of 5 before play, with 36.4% saying they knew a lot and 31.8% some things, while only 18.2% rated themselves good at prompt writing. That gap is the gap the tool was designed for, and it is the paper's clearest argument that prompt writing deserves its own curricular slot rather than being folded into general [[ai-literacy|AI literacy]].
- **The AI-knowledge comparison is uninterpretable by the authors' own account.** The pre-survey asked how much students know about AI and the post-survey asked how much they learned from the game, so the apparent drop from 3.77 to 3.27 (p = .126) reflects the wording change rather than lost knowledge. The authors say so directly and treat the comparison as uninformative.
- **Strategy recognition barely moved, because students arrived knowing the answer.** "Being specific and detailed" was chosen by 59.1% before and the matching post-game option by 54.5% (McNemar p = 1.000), with 10 students correct at both timepoints, 3 correct then incorrect, 2 incorrect then correct and 7 incorrect both times. Notably, 40.9% had selected "I don't know" at baseline, so the ceiling on this item was not knowledge but item design.
- **Helpful error-handling fell, and the authors read the drop as learning.** Students choosing a helpful strategy when an image came out wrong went from 86.4% to 59.1% (p = .109), and six students chose "giving up and starting with a completely different idea" after the game against one before. The interpretation offered is that experience taught them some prompts are not worth repairing — plausible, but it is an interpretation of a null result, not a finding.
- **Engagement was the strongest and most consistent result.** Fun averaged 3.95 out of 5, with 50.0% giving a perfect 5 and 27.3% a 4, and 77.3% said they would recommend it (45.5% "definitely yes", 31.8% "probably yes"). The distribution was wide, though: 13.6% rated it 1, one student a 2 and one a 3.
- **Two of four post-game targets were met, two narrowly missed.** Fun (3.95 against a goal of 3.0) and recommendation rate (77.3% against 75%) cleared their thresholds; confidence (2.91 against 3.0, with 31.8% each very, pretty and a little confident and one student not confident) and strategies reported per student (2.23 against 3.0) did not. Describing words (59.1%) and specificity (50.0%) were the strategies most often named, and every student named at least one.
- **Students named the writing-and-testing loop, not the competition, as what taught them.** Of 22 students, 12 gave usable answers to the open-ended question and 10 wrote "N/A" or a single word; among the usable ones, the dominant theme was writing a prompt and immediately seeing the result, with two mentioning the visual feedback specifically. One fourth grader's line — "one small thing can make a big difference" — is the design thesis in a child's words.

## How the study was done

PicPrompt is a browser game. The front end is React over WebSocket connections so every player sees the same state; a Node.js back end manages sessions, turn order and prompt handling, with Firebase Firestore for storage; images come from the Google Imagen 3 API through the Replicate platform. A round has two phases: one player is randomly assigned the Prompter role and cannot be assigned it again until everyone has had a turn, writes a prompt under time pressure, and then the rest of the table guesses the original prompt before voting on which guess came closest. The most-voted guess scores, the true prompt is revealed, and play continues until everyone has prompted. A built-in chat lets players discuss what they see, which the authors treat as the mechanism by which [[peer-assessment|peer feedback]] happens.

The study ran at one partner educational site over three dates in early February 2026 with 22 students spanning grades 2 to 9 — wider than the intended middle-school target. The largest group was fifth grade (27.3%), with third and fourth grades at 18.2% each. Sessions deliberately mixed the full grade range rather than grouping by age.

The design is a single-group pre-post survey delivered through Google Forms, eight items before and thirteen after, combining rating scales, select-all items, single-choice items and open-ended writing. Items used everyday anchors and researchers read them aloud for younger students, but no age-specific versions were produced. Analysis used paired t-tests with Wilcoxon signed-rank checks, McNemar's test for the categorical strategy and error-handling items, Cohen's d for effect size, and two-rater scoring of the repeated "dream bedroom" prompt on three dimensions — number of details, descriptive words, specificity — each 1 to 4, for a total of 3 to 12. Open-ended responses about the most helpful feature were grouped by theme.

## What this means for practice

- **A game format can get a whole class through the prompt-writing loop in one session, and that is worth something on its own.** Every student prompted at least once, and the proportion who had never tried fell to a single student. For an introductory lesson, moving students from "never attempted" to "has done it and can talk about it" is a realistic goal; expecting durable skill from one session is not.
- **The peer-voting step is the part that carries the teaching.** Writing a prompt and seeing the image teaches cause and effect; guessing someone else's prompt from the image teaches that a viewer's reading is not the writer's intention. That second lesson is what makes word choice and specificity matter, and it is cheap to add to any text-to-image activity.
- **Do not evaluate this with a long post-survey.** Two of the paper's outcome measures collapsed because students rushed: 63.6% of post-game dream-bedroom responses were blank or off-topic, and 45.5% of the open-ended learning item was unusable. If a teacher or researcher wants evidence, collect the writing task inside the game session while students are still engaged, and keep the instrument to a few items per construct.
- **Mixed-age groups change the task.** In the observed sessions younger students leaned on older peers for spelling and strategy, and some older students softened their prompts to suit younger teammates. That may be good for [[collaborative-learning|collaboration]] and bad for measuring individual skill. A grade-banded rollout avoids the confound.
- **Treat prompt engineering as a subject, not a sidebar.** The baseline showed children who rate their AI knowledge highly but have never written a prompt. A single game session is a start; a [[curriculum-design|curriculum]] that revisits prompting with rising difficulty across a term is the authors' own next step, along with automated feedback on prompt quality and adjustable visual parameters.

## Limitations

- **Twenty-two students, one site, three sessions, no control group.** Every observed change is compatible with novelty, test-retest effects, or simply a good afternoon; the authors state that they cannot attribute change to PicPrompt and that the study is exploratory by design.
- **The grade span is the more serious problem.** A second grader and a ninth grader played the same game in the same room and answered the same survey. Younger students may have read the Likert anchors differently even with verbal support, and developmental differences in experience are uncontrolled.
- **The primary outcome was underpowered and the effect is small.** With d = 0.35 and p = .118, the study cannot distinguish a real half-point gain from noise, and the authors' own power calculation puts the requirement near 60 participants.
- **The repeated writing measure failed.** Post-game dream-bedroom scores fell from 6.68 to 3.55 out of 12 (p = .001), a decline driven almost entirely by non-response rather than by worse writing, which makes the one objective-ish measure of prompt quality unusable.
- **Two items changed meaning between administrations.** The AI-knowledge item shifted from "how much do you know" to "how much did you learn," and the strategy items changed from a fixed option set to a differently worded one, so the paired comparisons on those constructs are weak even where the statistics are reported.
- **A single session cannot test durable learning,** and the study did not follow students afterward, so nothing here speaks to whether prompt-writing skill transfers to other tools or persists past the session.

## Citation

Kumar, P., Lim, P., Sotelo, A., & Driscoll, P. (2026). [*PicPrompt: A Game-Based Tool for Teaching Prompt Engineering Through Text-to-Image Generation in K–12 Settings*](https://doi.org/10.18260/B4B8-9A-60472). *ASEE Computers in Education, 15*(4), 108–130.
