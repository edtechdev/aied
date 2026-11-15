---
title: "What Are the Top 10 Findings from AI in Education Research That Educators Should Know About?"
created: "2026-08-24T09:42:00-04:00"
updated: "2026-11-14T18:10:00-05:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
---

These ten studies bear directly on decisions educators make: what to assign, how to assess it, which tools to buy, how to build them, and how to tell whether learning happened. Each entry gives the study, its result, and the practice it changes.

## The ten studies

**1. Plain chatbot access cut exam scores by 17% ([[generative-ai-guardrails-harm-learning|Bastani et al., 2025]]).**

Nearly 1,000 high school students in Turkey, in about 50 classes, worked through three math sessions on the same content. One group had a plain GPT-4 chat window during practice. One had a tutor built on the same model with teacher-written [[guardrails|guardrails]]: hints in place of answers, with the correct solution and common mistakes embedded in the prompt. The control group had no AI. Each session ended with a [[summative-assessment|closed-book exam]] on similar problems, with the tool gone.

The plain chat group scored 48% above control during practice and 17% below control on the exam. Students who never touched AI outperformed them. The guarded group gained 127% in practice and broke even on the exam. The harm disappeared, and no learning advantage appeared in its place. The chat logs explain the split: the unguarded group asked for answers and stopped, while the guarded group attempted problems, requested hints and improved inside the first session.

For educators, "AI allowed" is not a policy. The interface decides whether the tool becomes a hint channel or an answer machine, and a general chatbot defaults to the second. A chat window left open during practice costs the students who lean on it hardest.

Administrators can put the same result against the procurement claim that a stronger model fixes the pedagogy. The model was identical in both arms.

See related: [[training-ai-tutors-to-guide-rather-than-answer|Training a tutor to guide rather than answer]]

**2. A tutor built on the course's own pedagogy beat the active-learning class, in less time ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al., 2025]]).**

Physical Sciences 2 is Harvard's introductory physics course for life-science majors. During fall 2023, 194 students in a crossover trial met two lessons twice, once in the course's [[active-learning|active learning]] class and once through a tutor built for the course, with pre- and post-tests around each version.

Students learned more with the tutor. Median post-test was 4.5 against 3.5, median [[learning-gains|learning gains]] were more than double the class's, and quantile estimates of the effect ran from 0.73 to 1.3 standard deviations. They spent a median of 49 minutes with the tutor against roughly 60 minutes in class, and 83% rated its explanations as good as or better than their instructors'. Engagement and motivation ratings rose. Enjoyment and growth mindset did not differ.

The result rests on design. The tutor ran the same moves as the class: worked examples, graduated hints, self-explanation prompts, sequencing that follows the research on how physics is learned. The comparison was against active learning, not lecture, so the common objection that anything beats a lecture does not apply.

Faculty developers have the strongest available argument here that tutor design is curriculum work, not procurement. For product teams the bar is concrete: match an active-learning classroom, in less time, using the same instructional moves.

See related: [[developing-ai-tutor|Best practices for developing an AI tutor]]

**3. AI tutoring matched expert human tutors ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).**

StudentBench pooled 2,469 tutoring sessions with 2,383 adults preparing for the GRE, using 13 AI tutors built on 12 models, live human tutors, and a video control. The outcome was learning gain on Quantitative and Verbal items.

Pooled AI tutoring was statistically equivalent to expert human tutoring, within a quarter of a standard deviation, and both beat the control by about six percentage points: 6.86 in Quantitative and 5.47 in Verbal, or roughly one and a half to two additional correct answers per section. The AI tutors were rated weaker on lesson planning and on creating practice problems, which the human tutors did better.

For administrators, the staffing arithmetic changes for well-specified test preparation. When a licensed tutor matches a human tutor at a quarter of a standard deviation, the decision is about cost and coverage, and efficacy stops being the question. Researchers will note the boundary: equivalence is not superiority, and a standardized test is the easiest outcome for a machine to match.

Faculty developers can look at where the human tutors kept an edge: diagnosing what a learner needs next, and building the sequence that follows from it.

See related: [[intelligent-tutoring|Intelligent tutoring]]

**4. Writing notes beat asking a chatbot, three days later ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et al., 2026]]).**

Kreijkes and colleagues ran a preregistered experiment in seven English secondary schools. 405 Year 10 students worked through two of three conditions on a history passage: a chatbot that could answer questions about it, note-taking, or both. Three days later they sat closed-book tests of literal retention, comprehension and [[retrieval-spacing-interleaving|free recall]].

Notes beat the chatbot on all three measures, by roughly half a standard deviation on retention and close to four tenths on comprehension. Notes plus chatbot beat the chatbot alone on two of the three and did nothing for free recall, and notes alone were stronger than the combination. In the combined condition about a quarter of students copied the chatbot's output into their notes. Students still rated the chatbot easier, more helpful and more enjoyable than writing.

Educators have direct evidence here that a reading assistant can replace the reading. If the point of the assignment is to understand a text, [[writing-education|the writing is the understanding]], and a tool that answers questions about the passage removes the practice. Keep the notes. If you allow the chatbot, ask for something it cannot supply: a comparison, a challenge to the text, or a summary written after the tool is closed.

See related: [[ai-support-reading-comprehension|AI support for reading comprehension]]

**5. Study time fell 27%, and retention fell with it ([[generative-ai-reduced-study-time-math|Rismanchian et al., 2026]]).**

A ten-year panel from the ALEKS platform, covering 3.2 million learning interactions and 12.2 million placement-assessment response times, shows what students did after ChatGPT arrived. The design compares problem types that can be pasted into a chatbot (text-based word problems) with types that require manipulating a graph inside the platform, within the same curriculum.

Time on the AI-susceptible problems fell 2.8% per quarter among college students, 26.9% over eleven quarters. High school students fell 31.3%, middle school 9.0%, and fifth graders showed no detectable change. The decline disappeared entirely under [[remote-proctoring|proctoring]], which is the decisive test: with the tool unavailable, students spent the old amount of time. Proctored retention items showed a 25% cumulative decline in the odds of a correct response.

The age gradient is a design signal for product teams. Practice time is the variable that moves, and it moves most where the task is easiest to hand over. For educators, time on task is a cheap early warning: a cohort that finishes the same problems much faster is probably not learning the same thing.

See related: [[reducing-over-reliance|Reducing over-reliance on AI]]

**6. Homework scores rose 18% while closed-book exams fell 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg et al., 2026]]).**

26,811 students in grades 7 to 12 in China, followed for 30 months, with generative AI adopted at different times across cohorts. Homework scores rose 18% and completion time fell 30%, from 64 to 45 minutes. Monthly closed-book exams fell 20% of the baseline mean within six months, and high-stakes entrance exams fell 18% to 24% after about two years.

The timing shows the mechanism. About 81% of AI users finished homework faster than the fastest non-AI student and then did poorly on exams. The minority who kept homework time comparable to non-users learned as well as anyone. Losses were largest in social sciences, then STEM, then languages, and larger for high-achieving students.

Homework completion is a poor proxy for achievement, and the gap shows up inside six months, long before entrance-exam results move. Educators can act sooner: keep graded evidence closed-book, and treat take-home work as practice whose completion time is visible.

See related: [[checking-whether-educational-ai-works|Checking whether educational AI works]]

**7. Every tutor tested failed on pedagogy, and failed worse over a conversation ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]).**

SafeTutors tested 11 tutors, from 3.8B to 72B open-weight models plus GPT-5-mini, across mathematics, physics and chemistry, against a taxonomy of 11 dimensions and 48 sub-risks drawn from [[learning-theories|learning science]]. Its failure categories are pedagogical: answer over-disclosure, misconception reinforcement, and abandoning [[scaffolding|scaffolding]]. Each of these looks helpful in the moment, because the student gets a correct answer quickly.

Every model showed broad pedagogical harm. Larger models were not reliably safer, and general helpfulness correlated only weakly with pedagogical safety. Harm rates rose from 17.7% in single-turn exchanges to 77.8% in conversations of five to eight turns.

Single-turn evaluations are not evidence of a safe tutor, and product teams should design their testing around that. A model that passes a one-shot helpfulness and safety check can fail most of a real conversation. Administrators buying a tutor need three answers: does it withhold solutions, does it probe misconceptions, and does it hold up over a session. A vendor demo of one exchange provides none of them.

See related: [[pedagogical-safety|Pedagogical safety]]

**8. Misconduct cases rest on thinner evidence than the accusations suggest ([[munoz-misconduct-allegation-evidence-2026|Munoz et al., 2026]]).**

Munoz and colleagues coded every generative-AI misconduct case at one Australian university over three years: 1,162 cases carrying 1,855 evidence items, each rated for relevance, credibility and inferential force.

Generative-AI allegations rose from 11.9% of misconduct cases in 2023 to 36.9% in 2025, while total case volume stayed flat. 58 cases, 5% of the GenAI total, rested on assertion alone with no evidence item at all. Detector output was rare and weak: Turnitin or similarity reports carried no inferential force in 73 items, and standalone GPTZero output had low credibility in 69. The strongest evidence came from the investigation rather than the allegation, with oral interview admissions in 410 items at 97.2% strong. [[hallucination-risk|Fabricated references]] were the largest structural shift, 22.3% of items, rising from 10.4% in 2023 to 30.0% in 2025.

For administrators, the lesson is procedural. A case built on a detector score will not survive an appeal, and an investigation that starts with the tool instead of the interview produces weak files. Educators can act on the artifact that keeps showing up: fabricated references are common, and a reference check is cheap.

See related: [[should-we-use-ai-detectors|Using AI detectors]]

**9. Teachers' confidence in their AI literacy barely tracks their measured skill ([[ai-literacy-assessment-misalignment|Zhang et al., 2026]]).**

288 K-12 teachers completed a self-report AI literacy survey and an objective performance measure built on the same framework: Concept, Use, Evaluate and Ethics. Correlations between the two ran from 0.07 to 0.24.

Latent profile analysis found six groups. 43 teachers rated themselves consistently high while scoring lower on the objective measure. 59 showed the reverse. The rest clustered near the mean or split by prior experience with AI.

For faculty developers, [[self-assessment|self-assessment]] is not a needs analysis. A survey that asks teachers how confident they are will over-fund the confident and under-serve the quiet, and those groups are not the competent and the struggling. Short performance tasks separate them. Researchers should treat the low correlations as a measurement warning: any study of [[ai-literacy|AI literacy]] built on [[self-report-measures|self-report]] is measuring confidence.

See related: [[faculty-development-ai|Faculty development that changes practice]]

**10. AI scoring penalizes students who write less well ([[ai-scoring-language-bias-physics|Feser and Tschisgale, 2026]]).**

116 secondary students' physics explanations were scored by 9 machine learning approaches and 2 large language model approaches, then compared with expert human scores. Agreement with the experts ranged from 67.2% to 78.4%, which sounds acceptable until the errors are broken down.

Every approach underestimated conceptual understanding for explanations of lower linguistic quality. The bias ran one way: stronger writing was not inflated. The pattern mirrors what has been reported for physics teachers themselves, which suggests the difficulty lies in inferring understanding from prose, for people as much as for models.

Assessment staff and product teams need to report underestimation rates by language quality, not only overall agreement with experts, because the average hides the group that gets hurt. For anyone scoring [[multilingual-learning|multilingual learners]], route low-language-quality responses to [[human-in-the-loop-ai|human review]] or design tasks that do not depend on prose.

See related: [[ai-grading-fairness-reliability|Fair and reliable AI grading]]

## What the ten have in common

Three of the studies measure two things at once: what students produce with the tool, and what they can do without it. Bastani, Rismanchian and Strömberg all find the two diverging, and only the unaided measure behaves like learning. Four turn on a design choice rather than the model: the guardrails in Bastani, the pedagogy built into the Kestin tutor, the writing Kreijkes kept in the task, and the multi-turn setting SafeTutors tested. Three examine the system around the tool, meaning the evidence used in misconduct cases, the way teacher competence is measured, and the linguistic assumptions in [[automated-assessment|automated scoring]]. StudentBench establishes parity on a standardized test, the one outcome where a machine can most easily match a person. Bastani appears in two groups because it supplies both the gap and the design fix.

That leaves three questions worth carrying into any course or product decision. What should the student be able to do when the tool is gone? What does the activity ask them to do while it is open? What evidence would show the difference a month later?

## Where this evidence is thin

These studies share the [[limitations-in-aied-research|limitations of AIEd research]] as a whole. Two of the largest are set in Turkey and China, three in the United States, one in England, one in Australia, and the scoring study in Germany. One is a benchmark of commercial models rather than a field study. Secondary mathematics dominates, with physics and computing next. Very few studies look at [[humanities-education|humanities writing]] at scale, at vocational education, or at students with disabilities.

Only the Chinese panel and the ALEKS panel observe students for more than two years after adoption, and the Chinese authors argue that shorter studies systematically underestimate the long-run penalty. Six of these results are preprints or working papers that have not completed peer review: StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang and Feser. The Bastani, Kestin, Kreijkes and Munoz studies are published in peer-reviewed journals.

Null and negative results are rare in this literature, so the published record probably overstates how often AI helps. These studies are the best current guidance on ten decisions, and none of them settles a question.

## Where to go next

[[does-ai-help-students-learn|Does AI help students learn?]] is the broader evidence review behind these claims. [[redesign-assessment-ai-era|How should assessment be redesigned for the AI era?]] takes the assessment half further. For the integrity cases, [[reduce-ai-cheating|How do I reduce AI cheating?]] covers process evidence and policy. For the professional development findings, [[faculty-ai-competencies|What AI competencies do faculty need?]] is the companion page, and [[addressing-common-misconceptions-ai-education|How can we address common misconceptions about AI in education?]] handles the objections you are likely to hear from colleagues.
