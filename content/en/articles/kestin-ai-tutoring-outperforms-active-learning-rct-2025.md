---
title: "AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting"
created: "2026-09-27T22:30:00-04:00"
updated: "2026-09-27T22:30:00-04:00"
type: article
sources: ['raw/papers/kestin-ai-tutoring-outperforms-active-learning-rct-2025.md']
confidence: high
published: "2025"
page_kind: [evaluation]
research_method: [experiment]
discipline: [physics education, stem education]
level: [higher ed, undergraduate]
audience: [instructors, instructional designers, researchers, administrators]
foundations: [ai-education, human-ai-collaboration]
pedagogy: [active-learning, scaffolding, student-engagement, motivation]
technology: [generative-ai, llm, intelligent-tutoring, conversational-ai, pedagogical-agent]
assessment: [learning-gains, formative-assessment]
methods: [quantitative-research, rct]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-27"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Kestin, Miller, Klales, Milbourne and Ponti ran a [[rct]] in Physical Sciences 2, Harvard's largest introductory physics course for life sciences students, during the Fall 2023 semester, with 194 of 233 enrolled students eligible for analysis. Every student worked through two lessons in a crossover design, meeting the same content once in an in-class [[active-learning]] lesson and once through a custom AI tutor called PS2 Pal, with pre- and post-tests around each. Students learned significantly more with the tutor, with a median post-test of 4.5 against 3.5 and median [[learning-gains]] more than double those of the class, while spending a median of 49 minutes on task against roughly 60 minutes in class; they also reported higher [[student-engagement]] and [[motivation]]. The authors attribute the result to design rather than to the technology alone: the tutor was engineered to carry the same research-based pedagogical practices as the in-class lessons rather than merely to answer questions.

## Key Findings

- **Median learning gains more than doubled.** The AI group's median post-test score was 4.5 (N = 142) against 3.5 (N = 174) for in-class active learning, measured from a combined pre-test baseline median of 2.75 (N = 316), and median gains for tutored students were over double those of the class (Mann–Whitney z = −5.6, p < 10⁻⁸).
- **The modeled effect was large.** A linear regression returned an effect size of 0.63, which the authors treat as an underestimate because of ceiling effects; quantile regression put the effect between 0.73 and 1.3 standard deviations.
- **Students spent less time on task, not more.** In-class students had 60 minutes of a 75-minute period left for learning after the pre- and post-tests, while the AI group's median time on task was 49 minutes, with 70% of students under 60 minutes and 30% above it. Time on task did not correlate with post-test scores.
- **Engagement and motivation rose; enjoyment and growth mindset did not differ.** The AI group agreed more strongly that they felt engaged (4.1, SD = 0.98, against 3.6, SD = 0.92; t(311) = −4.5, p < 0.0001) and motivated (3.4, SD = 1.0, against 3.1, SD = 0.86; t(311) = −3.4, p < 0.001), while the enjoyment and growth-mindset items showed no statistically significant difference.
- **Students rated the tutor's explanations highly, and pacing tracked self-pacing.** 83% reported that the tutor's explanations were as good as or better than the human instructors'. The 3.8% of students who found the in-class pace "too fast" all spent more than the 49-minute median with the tutor, while the 2.2% who found it "too slow" all spent less.

## Building the tutor out of the in-class pedagogy

The paper's central design claim is that the trial compared two deliveries of the same pedagogy, not teaching against a chatbot. The authors distilled seven research-based practices — facilitating active learning, managing cognitive load, promoting a growth mindset, [[scaffolding]] content, ensuring accurate information and feedback, delivering targeted and timely feedback, and allowing self-pacing — and engineered the tutor against them. A system prompt carried the first three; because a prompt alone could not reliably sequence problems with multiple parts, the platform itself walked students through each part of each problem in order, mirroring how the instructor ran the in-class activities. To limit hallucination, prompts were enriched with step-by-step solutions written by instructors experienced with the content rather than leaving solutions to the [[llm]], which was one that followed complex prompts closely (GPT-4). The authors locate the advantage in the two practices a classroom cannot sustain: personalized feedback on demand and self-pacing. The overhead was real, with question-level prompts taking days and the platform months to build.

## Reading a win over active learning, not over lecturing

The control condition was not a lecture. PS2 is a [[physics-education]] course built on research-based active learning, and 89% of students reported that it used more active learning than other STEM classes they had taken at Harvard. The same approach had already been shown to outperform passive instruction, and the two lessons were taught by the course's two co-instructors, both rated above departmental and divisional means, with students kept in their usual peer-instruction groups. The effect is therefore measured against current best practice rather than against the low bar of lecturing. Because the tutor mirrors established in-class pedagogies and produces comparable affect, with personalization the main difference, the authors expect in-class active learning findings to carry over — but they stop short of claiming the tutor always wins, warning against AI use that becomes a crutch bypassing critical thinking.

## What this means for practice

- **Instructors.** Use the tutor for students' first substantial engagement with new material, then spend class time on higher-order work such as advanced problem solving, project-based learning and group work that can be assessed in person.
- **Instructors.** Do not read the result as a reason to drop in-person teaching; the authors explicitly advise against letting AI supplant in-class methods.
- **Instructional designers.** Budget for design, not just the model: question-specific prompts and step-by-step solutions took days of iteration, and the platform that structured student interactions took months.
- **Instructional designers.** Keep sequencing in the platform. A system prompt managed engagement, cognitive load and growth mindset, but multi-part problems needed structural control to stay in order.
- **Administrators and researchers.** Treat the effect as conditional on enabling factors — a capable model, expert-crafted prompts, a structured framework, high-quality videos and content that suits the format — and prioritize replication in other courses and topics, plus study of retention and collaboration over longer use.

## Limitations

- The study ran in one course at one institution, on lessons whose objectives sat at the understanding, applying and analyzing levels of Bloom's taxonomy. The authors state they do not presume structured AI tutoring will always outperform in-class active learning, naming contexts that require complex synthesis of multiple concepts and higher-order critical thinking.
- The gains and positive affect may depend on specific enabling conditions: a heterogeneous student population needing varied instructional paces, high-quality instructional videos, a model able to follow complex prompts closely (GPT-4), expert-crafted question-specific prompts, a structured scaffolding framework, and content that suits the format.
- The intervention covered two lessons, each a single class meeting, in the ninth and tenth weeks of one semester, so it says nothing about longer use or retention; accuracy also relied on pre-written answers rather than the model's own scientific reasoning, which the authors flag as [[generative-ai]] models improve.
- The engagement, motivation, enjoyment and growth-mindset measures are self-reported Likert items rather than behavioral or performance data.

## Citation

Kestin, G., Miller, K., Klales, A., Milbourne, T., & Ponti, G. (2025). [AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting](https://doi.org/10.1038/s41598-025-97652-6). *Scientific Reports*.