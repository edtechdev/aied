---
title: "Exploring the Role of Generative AI as a Research Assistant in Undergraduate Sociology Research Methods"
created: "2026-11-16T09:00:00-04:00"
updated: "2026-11-16T09:00:00-04:00"
type: article
evidence_context: educational
authors: ["Wells, M. J."]
published: "2026-01-09"
venue: "Journal of Teaching and Learning with Technology"
source_url: https://doi.org/10.14434/jotlt.v12i1.41671
foundations: [academic-integrity, ai-literacy, human-ai-collaboration, theories-and-frameworks]
pedagogy: [scaffolding, student-ai-interaction]
technology: [generative-ai, llm]
ethics: [privacy]
research_method: [survey]
level: [undergraduate]
audience: [instructors, instructional designers]
sources: ['raw/papers/wells-genai-research-assistant-sociology-2026.md']
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
---
> **Synthesis:** Wells (2026) reports a single-semester pilot in which 24 undergraduates in a 3000-level sociology research methods course used Microsoft Copilot for six of eighteen scaffolded research workshops, while being barred from using it to write the proposal itself. The design is an [[theories-and-frameworks|expectation-confirmation model]] study: students rated the tool's expected usefulness before the course and their actual experience after it. Expectations were high and were largely met. More than 83% expected Copilot to help them finish tasks faster, and after use approximately 91% agreed it had; 30% rated the experience excellent and 57% good; 91% would recommend it for future sections. The reservations are instructive. 30% (n = 7) hit outputs that misread the instructor's prompt, were vague, exceeded their understanding, or invented survey instruments outright, and continuance was softer than satisfaction, with 57% intending to keep using it and nearly 40% saying they were unlikely to. The paper is most useful as a template for how to bound a [[generative-ai|GenAI]] research assistant to specific tasks rather than to the finished product.

## Key Findings

- **Students arrived expecting a lot, and most of it held up.** More than 83% anticipated that Copilot would let them accomplish tasks more quickly, about 84% that it would improve their research proposals, and roughly 84% that it would raise their productivity; close to 90% expected it to make proposal writing easier and expected to find it useful. After use, approximately 91% agreed it helped them complete research tasks more quickly and about 91% that it improved their proposals, while roughly 70% reported the expected productivity gain.
- **Helpfulness was highest on the early, conceptual tasks.** Fourteen students rated Copilot very helpful for refining research questions, with eight rating it helpful or somewhat helpful; for refining hypotheses the split was 13 very helpful and nine helpful or somewhat helpful. Eleven found it very helpful for selecting a sampling technique and nine for identifying validated survey instruments, which the author treats as the more consequential result because those decisions are where undergraduates usually need instructor guidance.
- **Literature review outlines produced the most scattered ratings.** Eight students called this very helpful while 14 called it helpful or somewhat helpful. Wells attributes the spread to two things: students may have expected a ready-to-use outline rather than a starting point for a document that keeps changing as they read, and the instructor-supplied prompt may not have told them to organize by theme or chronology.
- **A third of the class experienced negative disconfirmation, and it looks like tool failure.** 30% (n = 7) reported challenges, described in open responses as the tool misinterpreting the instructor-provided prompt, returning irrelevant or vague content, fabricating existing survey instruments, and producing explanations beyond the student's current understanding. The author reads this as Copilot failing to produce academically appropriate content more than as students expecting the wrong thing, and draws the [[ai-literacy|critical evaluation]] lesson from it.
- **Satisfaction and continuance diverge.** 30% rated their overall experience excellent, 57% good, 9% fair and 4% poor. Yet only 57% intended to continue using Copilot, nearly 40% said future use was unlikely, and four students strongly rejected it. On the item about always trying to use Copilot for research, roughly 30% agreed or strongly agreed, 26% somewhat agreed, about 17% were uncertain and roughly 26% disagreed to some extent. 91% (n = 21) would still recommend it for future research methods courses.
- **The boundary was drawn at the proposal, not at the thinking.** Copilot was permitted in six workshops worth 10 points each out of 60 and forbidden in the writing and construction of the actual research proposal. The six tasks were selecting a topic, narrowing and focusing it, creating hypotheses, outlining the literature review, finding measures for dependent and independent variables, and selecting a sampling technique.
- **The institutional setup carried as much weight as the pedagogy.** The course used a private, university-licensed Copilot rather than a public chatbot, on the grounds that the data stays inside the institution's Microsoft 365 environment and is not used for external processing, and that the license was already covered by the university's Microsoft agreement. Access was gated behind an instructor-built training module of five units with a five-item certification quiz, and a score of at least 80% (four correct) was required before use, mirroring the CITI training requirement in the same course.

## How the study was done

The setting was Methods of Social Research, a 3000-level course taught in spring 2025, with 24 students enrolled, 20 completing the presurvey and 23 the postsurvey. The class drew from anthropology, political science, social work and sociology; the course was required for sociology and social work majors and served as an upper-level elective for sociology minors. Fifteen students had not previously taken a research methods course, fourteen had not written a research proposal, six reported no experience conducting sociological research at all, and 16 had used GenAI before, including ChatGPT, Copilot and the AI feature in Grammarly.

The instrument was built on the four components of the expectation-confirmation model. Expectations were five items adapted from Davis's technology acceptance model perceived-usefulness scale, covering productivity, task efficiency and proposal development, on a 7-point Likert scale. The postsurvey repeated the same five items in the past tense, added five items on helpfulness for the specific research tasks, and added two disconfirmation items, one closed and one open. Satisfaction was two items, a 4-point excellent-to-poor rating and an open question on benefits. Continuance intention was three items adapted from Venkatesh et al. (2012), plus a recommendation item.

Analysis was descriptive: frequencies and percentages in SPSS. Wells states plainly that the small sample and the brevity of most open responses, often less than one sentence, ruled out formal thematic coding, so those responses illustrate patterns rather than constitute a qualitative strand. That is an honest boundary, and it also means the study is a [[quantitative-research|descriptive survey]] rather than a test of the model's pathways.

## What this means for practice

- **Bound the tool to named tasks and keep the deliverable human.** The design that produced these results let students use Copilot for topic selection, question refinement, hypothesis refinement, outline generation, instrument search and sampling choice, then required them to write the proposal without it. An instructor copying the pattern needs to publish that list and the consequence for the graded product, because students' interpretation of where the line sits is what the assignments test.
- **Teach follow-up prompting, not just the first prompt.** Every workshop shipped with an instructor-written prompt, and the flat ratings on literature review outlines are the case for going further: students who do not know how to ask for organization by theme or chronology get a generic outline and read it as a weak answer.
- **Say what the tool cannot decide.** The three decisions that mattered most, measurement, sampling and the research question itself, are exactly where a fabricated instrument or a confidently wrong sampling suggestion does damage. Early instruction that names those failure modes is cheaper than discovering them in a graded proposal.
- **Add a reflection checkpoint per task.** Wells recommends requiring students to record how the tool helped on each specific task. That turns the workshop into evidence of [[human-ai-collaboration|collaboration]] rather than a submission, and it gives the instructor a way to see overreliance before the proposal is due.
- **Budget for the infrastructure.** The privacy argument in the paper depends on a licensed, closed system and a training gate with a pass mark. That is a real institutional cost, and a course that skips it is running a different intervention from the one evaluated here.

## Limitations

- The paper names its own constraints directly: 20 presurvey and 23 postsurvey respondents, too few for inferential tests, so the expectation-confirmation sequence from expectations through confirmation, usefulness and satisfaction to continuance is described rather than modeled.
- Those numbers also mean the two surveys are not the same group: 20 students answered before the course and 23 after it, so the pre-post comparison rests on partially overlapping samples.
- One course, one discipline and one institution. Wells flags the disciplinary question as open and calls for comparison with psychology, engineering and literature, and for multi-institution work including community colleges, private universities, historically Black colleges and universities, and Hispanic-serving institutions.
- All measures are self-report, and the open responses were too short to code, so what students actually did with Copilot in the six workshops is not observed.
- The design cannot separate Copilot's contribution from the scaffolding around it, since every workshop also supplied a structured prompt, a point value and, in the first workshop, peer feedback.

## Citation

Wells, M. J. (2026). [*Exploring the Role of Generative AI as a Research Assistant in Undergraduate Sociology Research Methods*](https://doi.org/10.14434/jotlt.v12i1.41671). *Journal of Teaching and Learning with Technology, 14*(Special Issue), 48–64.
