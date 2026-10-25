---
title: "Generative artificial intelligence in writing assessment: University professors’ perspectives and recommendations"
created: "2026-10-24T07:52:30-04:00"
updated: "2026-10-24T07:52:30-04:00"
type: article
authors: ["Wu, C.", "Lam, R."]
published: "2026-09-29"
venue: "Assessing Writing"
source_url: https://doi.org/10.1016/j.asw.2026.101125
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [professional-training]
technology: [generative-ai]
assessment: [ai-feedback-quality, assessment-validity, automated-essay-scoring, evaluative-judgment, feedback]
ethics: [ai-use-disclosure, privacy]
research_method: [interviews]
discipline: [language learning, writing education]
level: [higher ed]
audience: [administrators, assessment designers, instructors]
sources: ['raw/papers/wu-lam-genai-writing-assessment-professors-2026.md']
confidence: high
methods: [qualitative-research]
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-24"
    agent: hermes-agent
reviewed_by: [editor]
---
> **Synthesis:** Wu and Lam (2026) interviewed 24 university professors who teach and assess [[writing-education|second-language writing]] across the Chinese Mainland, Hong Kong, Macau and Singapore, and ran a stimulated recall task with 14 of them while they worked on marking with a generative AI tool. The professors are not skeptics: 16 of 24 said the feedback was specific, detailed, relevant and accurate, and 21 of 24 described workload benefits, with one teaching nearly 200 students saying sentence-level feedback was otherwise impossible. Their reservations are about grading rather than drafting. Seven had watched the same essay receive different scores on repeated prompts, four doubted it could judge content, argumentation or coherence, two found scores bunched in the middle so that they no longer separated strong work from weak, and two noticed the tool sweetening its comments unless instructed otherwise. The authors turn this into seven recommendations for policy and practice, built on Mills et al.'s three-dimensional [[ai-literacy|GenAI literacy framework]], and give [[evaluative-judgment|teacher judgment]] the deciding role in every one of them.

## Key Findings

- **[[ai-feedback-quality|Feedback quality]] is the strongest endorsement, and it is a feedback endorsement rather than a grading one.** 16 of 24 professors called the output specific, detailed, relevant and accurate, seven singled out consistency and objectivity, three described refining output over follow-up prompts until it satisfied them, and one used it to summarize common errors across a class before planning the next lesson.
- **Workload relief is the benefit most often named.** 21 of 24 described efficiency gains through immediate scoring, round-the-clock availability and handling large classes without slower response times; one professor with almost 200 students said detailed face-to-face feedback on every sentence was simply not possible. Two treated AI feedback as a complement to their own, and one fed initial comments in and refined them with the tool before returning them.
- **Score stability under repeated prompting is the specific reliability problem.** 7 of 24 reported slight variations when asking the tool to grade the same student work more than once, and one raised it unprompted during stimulated recall; 4 doubted it could evaluate content, argumentation and coherence, so they reserved their own judgment for those dimensions.
- **Discriminative power is a separate complaint from accuracy.** Two professors found that when the tool graded a batch of assignments its scores clustered in the middle range and stopped distinguishing between them, which matters more for a class than for a single submission.
- **Useful feedback and pleasant feedback are not the same output.** Two noticed the tool defaulting to positive comments and student strengths unless told otherwise, where a teacher looks for weaknesses first and then writes constructively; six described output that was complicated, overly long, vague or impractical, with one objecting to a suggestion that an essay needed inversion because it worked against the point of writing.
- **[[human-in-the-loop-ai|Human judgment]] is treated as non-negotiable.** 18 of 24 said human judgment is what identifies and resolves the problems, naming [[privacy|student privacy]] when work is uploaded, bias in the output, and the unallocated accountability when feedback contains an error.
- **Deprofessionalization is a stated fear, not an abstract one.** 5 of 24 said marking is where teachers come to understand their learners, and that outsourcing it costs the teacher that understanding rather than only the hours.
- **Institutional guidance is described as absent or inconsistent.** 16 of 24 asked for clearer institutional support, 11 for explicit university policy, and 6 said their institution has no rule on whether teachers may grade with AI at all, which one described as colleagues who refuse on principle sitting beside colleagues who already do it.
- **The authors' seven recommendations keep the human in the decision.** Develop instructors' GenAI literacy including [[prompt-engineering|prompt design]], combine GenAI with teacher, peer and self feedback, require teacher moderation for reliability and validity, make use transparent with consent before uploading, attend to the socio-emotional side of adoption, write institution-specific assessment guidelines, and fund training, pilots and recognition for the work.

## How the study was done

Participants were recruited by maximum variation sampling from universities in the Chinese Mainland, Hong Kong, Macau and Singapore, with inclusion requiring experience of both L2 writing assessment and GenAI use. The group was 20 women and 4 men, 15 holding doctorates and 9 master's degrees, with 2 to 24 years of teaching, and ranks spanning two full professors, thirteen associate, eight assistant and one research assistant professor, across comprehensive, arts and humanities, hard sciences, foreign languages and economics institutions. Semi-structured interviews were followed by a stimulated recall task in which professors marked a writing sample with a GenAI tool and narrated their decisions; 14 took part in that task, 9 of them from the Chinese Mainland. Analysis was thematic.

The paper's own example of where policy sits is instructive: several universities have general GenAI and [[academic-integrity|academic integrity]] policies, but no guidance specific to grading, and the authors point to the London School of Economics guideline on AI-assisted marking as still being about responsible and ethical use rather than practical procedure.

## What this means for practice

- **Instructors deciding what to delegate.** The evidence here separates feedback from scoring. Using a tool to produce per-sentence comments on 200 essays, then revising them, is the use 21 of 24 describe as beneficial. Letting it produce the grade is the use they describe as unreliable in exactly the cases that matter: repeated runs, higher-order dimensions, and spread across a cohort.
- **Anyone running a moderation routine.** Two checks fall out of the findings. Grade the same submission twice and compare, since 7 of 24 saw drift. Then look at the distribution across a batch, since clustering in the middle is a failure the individual scores will not show.
- **Departments writing a policy.** The six professors with no rule at all are the illustrative case for the authors' sixth recommendation. A guideline needs to say which assessment purposes the tool may serve, that a human moderator signs the grade, who is accountable for an error, and what consent students give before their work is uploaded.
- **Faculty developers planning support.** The authors recommend peer-sharing sessions, hands-on workshops, online resources and pilots in selected courses, with recognition in appraisal. The deprofessionalization concern is the reason to build it that way: training that presents the tool as replacing marking signals the loss the five professors feared, while training that treats it as a first pass to be revised keeps the judgment where they think it belongs.

## Limitations

- The paper reports no formal limitations section, and the design's constraints are therefore visible rather than stated: 24 self-selected volunteers who already use GenAI describe their beliefs in interviews, so the views of colleagues who refuse it, and any relationship between what they say and what they score, are outside the data.
- Four jurisdictions with Chinese-language higher education contexts supply the sample, and the recruitment notes that Mainland professors were more willing to discuss their practice; whether the concerns generalize to other systems and languages is untested here.
- Only 14 of the 24 completed the stimulated recall task, so the observed marking behavior rests on a subset weighted toward one region.
- The score-drift, mid-range clustering and higher-order weakness are professors' reports from their own use, not measurements: no cohort of essays was double-scored to quantify reliability, so the size of those problems is unknown.
- The seven recommendations are derived from a [[qualitative-research|qualitative]] single study and framed with an existing literacy framework, so they are well-grounded advice rather than tested interventions; no recommendation is evaluated against student outcomes.

## Citation

Wu, C., & Lam, R. (2026). [*Generative artificial intelligence in writing assessment: University professors’ perspectives and recommendations*](https://doi.org/10.1016/j.asw.2026.101125). *Assessing Writing, 70*, 101125.
