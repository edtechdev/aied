---
title: "AI literacy over tool design: a mixed-methods study of scaffolded versus unrestricted generative AI in programming education"
created: "2026-09-16T09:40:00-04:00"
updated: "2026-09-19T07:04:04-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [scaffolding, self-regulated-learning]
technology: [generative-ai]
ethics: [ai-misuse-learning-harm]
sources: ['raw/papers/ai-literacy-tool-design-programming-education-2026.md']
confidence: high
research_method: [experiment]
level: [higher ed]
audience: [instructors, researchers]
discipline: [cs education]
page_kind: [evaluation]
methods: [mixed-methods-research]
---

> **Synthesis:** This seven-week [[mixed-methods-research|mixed-methods]] pilot in a master's-level data [[learning-analytics|analytics]] course randomly assigned 33 students to a scaffolded [[scaffolding|AI Study Coach]] embedded in Jupyter notebooks (n=16) or to unrestricted use of any [[generative-ai]] tools they chose (n=17), testing the institutional assumption that a controlled version of the technology serves students better than open access. Assignment performance and concept-inventory gains were indistinguishable between conditions, while the Coach condition reported higher [[self-efficacy]] over the seven weeks — the scaffold raised confidence without producing learning. The distinguishing factors were elsewhere: students who had formulated their own [[self-regulated-learning|rules]] for when to use AI scored higher in both conditions, and students with the deepest model understanding (in every case self-taught) prompted more deliberately and earned the highest scores. The study argues that the design of the tool matters less than the student's capacity to govern its use, and that institutional response should therefore be structural — [[assessment]] that grades the reasoning behind AI-assisted work and explicit, [[curriculum-design|curriculum]]-embedded [[ai-literacy]].

## Design and Setting

The study set out to test a specific institutional bet: that a scaffolded, constrained version of generative AI would build confidence, reduce [[ai-misuse-learning-harm|over-reliance]], and therefore produce more learning than open access. The framing is grounded in the scale of the problem — the Digital Education Council's 2026 global survey (45,000+ responses across 35 countries) found that 88 percent of students use AI in their learning while 57 percent consider the guidance they receive on its use in assessment inadequate.

Two institutional responses dominate practice, and the paper rejects the first on evidential grounds. Restriction — bans, disclosure requirements, automated detection — is undermined by detection performance: in a systematic test of fourteen tools, none reached 80 percent accuracy, and OpenAI withdrew its own classifier in the same year for low accuracy. The second response, [[edtech-platform|tool design]], is the one the pilot interrogates. Yan et al.'s [[meta-analysis-systematic-review|scoping review]] of 118 studies of [[llm|large language models]] in education classified 53 use cases across nine categories of educational task, and none of the nine concerns the student's own [[regulation]] of how the tool is used.

The setting was a master's-level course teaching data analysis and [[machine-learning|machine learning]] through weekly programming laboratories in Jupyter notebooks, with students drawn from several master's programs and therefore widely varying [[prior-knowledge]] in programming. Thirty-three students were randomly assigned: 16 to the intervention and 17 to the comparison condition. Data collection was voluntary and all data pseudonymised. The teaching team comprised the course lead and three teaching assistants.

## The AI Study Coach: Scaffold by Constraint

The Coach was built into the laboratory notebooks so students could consult it without leaving the task, and it ran in two modes. In **Explainer** mode it explained analytic outputs and the design choices behind the notebook code. In **Debugger** mode it responded to a stuck student with a sequence of hints moving from a general pointer toward a more specific one, and it did not provide complete solutions or generate code.

Four constraints constituted the scaffold in every session: a budget of **25 hints**, a maximum of **15 minutes** of AI use, a short written reflection at the end of each session, and a requirement that every piece of AI-sourced code be tagged as such in the notebook. Each constraint had a purpose — the budget to make each request deliberate, the time limit to keep the student's own work central, the reflection to prompt monitoring, and the tagging to keep AI use visible to the teaching team. This is a textbook instantiation of [[scaffolding]] combined with [[metacognition]] prompts and [[ai-use-disclosure]].

The design assumption drew on three sources: scaffolding theory (novices learn more from structured support gradually withdrawn than from unrestricted help), [[self-regulated-learning]] theory on how students plan, monitor and evaluate their own work, and Long and Magerko's definition of [[ai-literacy]] as competencies that must be taught. The strongest experimental antecedent was Bastani et al.'s field experiment with nearly a thousand secondary-school students, in which unrestricted access to a GPT-4 tutor improved practice performance but reduced performance on a later [[summative-assessment|examination]] taken without AI, while a safeguarded hint-only version removed the harm.

## Method: Three Converging Strands

Five data sources were collected in both conditions:

1. A concept inventory of **ten scenario items** on fairness, data leakage and model evaluation, administered in week 2 and again in week 7.
2. Assignments scored by teaching assistants with a rubric covering code correctness, error diagnosis, reasoning and the responsible use of AI.
3. Pre- and post-series surveys on confidence, AI reliance, [[critical-thinking|critical evaluation]] of AI output and conceptual understanding.
4. Full interaction logs from the Coach — hints requested, mode used, timing of requests, and the point in the task at which help was sought.
5. Six semi-structured interviews with students from both conditions, plus recorded informal discussion notes with students and teaching assistants.

Analysis was explicitly descriptive: with 16 and 17 students per condition the pilot was not powered for inferential tests, and none are reported — an honest [[limitations-in-aied-research|limitation]] stated in the paper rather than papered over. Log data were analyzed for patterns of use, particularly the distribution of the hint budget across a session; interviews and end-of-session reflections were thematically coded; and the strands were then read together so that logs and interviews interpreted the survey and score comparisons.

## Results: No Performance Difference, Higher Confidence

The central negative result is unambiguous. The two conditions did not differ in assignment performance, gains on the concept inventory between week 2 and week 7 were similar in both groups, and rubric scores on the assignments were equivalent. The scaffold did not produce the learning advantage the design had assumed.

Confidence moved in the expected direction but decoupled from performance. In post-session surveys, Coach-condition students reported higher confidence in their own competence than unrestricted-condition students, and the gain in reported confidence across the seven weeks was larger in the Coach condition. Students in both conditions credited AI with helping them understand analytic output, debug code and clarify unfamiliar concepts, and Coach students rated its explanations positively for concept clarification.

This dissociation between felt competence and demonstrated competence is the pattern the learning-sciences literature predicts: scaffolding reduces the cognitive load of individual tasks and raises confidence, which is what [[scaffolding]] is designed to do, while building the capacity to govern the tool is a different outcome entirely. Equal scores, the paper warns, concealed unequal understanding — the same structure Fan et al. report in a larger randomized study, where ChatGPT access raised essay quality without improving knowledge gain or transfer, a pattern the authors name [[cognitive-offloading|metacognitive laziness]].

## How Students Spent the Hint Budget

The budget did not ration as designed. Logs show two divergent use patterns: some students spent most of their 25 hints early in a session on the first problems encountered and had few left for the more demanding end-of-session tasks, while others hoarded hints and finished with most of the budget unused. Several students complained about the limit in reflections and interviews, and a few reported looking at the screens of classmates in the unrestricted condition when stuck — the scaffold leaked across condition boundaries.

The decisive within-condition finding concerns strategy. Among Coach students, those who had developed a deliberate policy for when to spend a hint and when to hold back scored higher on the assignments than those who saved hints without a plan. The budget therefore rewarded a capacity for self-[[governance]] that some students already possessed; it did not develop that capacity in students who lacked it. This is a mechanism-level failure of a common [[reducing-ai-misuse]] intervention: a constraint can only activate regulation that is already present, and cannot install it.

## Awareness, Self-Imposed Rules and Model Understanding

The outcome students valued most was not designed in. In interviews, students in **both** conditions named awareness of how much they relied on AI as the most useful outcome of the laboratory sessions. Unrestricted-condition students were satisfied with their tools and, in the same interviews, uneasy about their reliance: they described their engagement as shallow, said they felt their analytical skills slipping, and said they could not stop because the tools were too efficient to abandon. Several volunteered, unprompted, that there ought to be a way to use AI at full capacity while staying intellectually engaged. Coach-condition students reported that the budget followed them out of the classroom — at home, with unrestricted tools, they found themselves asking whether a question was worth a hint before posing it. One student put the comparison plainly: "I go through it myself, redoing it. Most of the time what I do is better. There's more depth when you do it yourself."

Awareness alone did not change practice. The students whose practice differed were those who had set themselves a rule, either before the course or during it — building a solution first and using AI only to check it; delegating syntax while writing the logic themselves; withholding part of the problem from the tool to force their own reasoning. These students performed better on the assignments regardless of assigned condition, which makes self-imposed [[self-regulated-learning|regulation]] the only variable in the study that tracked performance.

Understanding of how language models work varied widely, and in every case it was self-taught, because the course did not teach it. Students with the best understanding wrote more effective prompts and used the tools more deliberately ([[prompt-engineering]] as a derivative of model understanding rather than a separate skill), and they also achieved the highest assignment scores. The competitive advantage in a programming course has shifted accordingly: before generative AI it went to the student who could code most fluently; in this cohort it went to the student who governed their use of AI most effectively — and that advantage was distributed by prior exposure and disposition, not by anything the course did. The [[equity-in-ai-education|equity]] implication is direct, since a competency distributed by chance is one that structural design leaves to luck.

## Why This Scaffold Underperformed

Three learning-sciences readings are offered for the results. First, scaffolding did what it is meant to do — reduced per-task cognitive load and raised confidence — but tool governance is a separate faculty it does not build. Second, [[self-determination-theory|self-determination theory]] predicts that self-regulation develops under conditions of [[agency|autonomy]]: the students who complained about the limit and the students who set their own rules point the same way, suggesting the restriction did not produce self-governance, whereas the students who governed themselves had chosen to. Third, governing one's own AI use is a self-regulatory skill in Zimmerman's sense and, like other such skills, develops through monitoring, reflection and visible process rather than restriction alone.

Two limitations are stated explicitly. The pilot was small and conducted in a single course, so the direction of the findings is clear but their magnitude is not. And the comparison was between one particular scaffold and open access: the results say nothing about scaffolds in general, only that this reasonable one did not do what it was assumed to do — a caution worth attaching to any [[scaffolding]] claim in the literature.

## Implications: Assessment and Taught AI Literacy

The paper's conclusion is structural rather than technical, and rests on a durability argument: generative AI develops quickly, so a course or tool built around one version of it is out of date by the time it runs, and educational tools cannot keep pace with commercial systems that now ship study modes of their own. Assessment, by contrast, can be designed to target the reasoning behind AI-assisted work and to require students to reason before consulting AI, so that how a student worked becomes visible and gradable — an argument for [[authentic-assessment]] and [[assessment-validity]] rather than detection.

The rules the strongest students set for themselves can be taught, and students can be asked to write, test and revise rules of their own. [[ai-literacy]] in Long and Magerko's sense, including a working understanding of what the models do, belongs in the curriculum for students and staff alike — for staff because the cohort's model understanding was entirely self-taught and unevenly distributed. A framework for course redesign along these lines is developed by the same author in a companion paper.

## What this means for practice

- **Instructors.** Have every student write, test and revise a personal rule for AI use at the start of the term — build the solution first and use AI only to check it, delegate syntax while writing the logic yourself, withhold part of the problem — because students who had set themselves a rule performed better on the assignments regardless of assigned condition.
- **Instructors.** Teach how the language models actually work instead of assuming prior exposure: the students with the deepest model understanding (in every case self-taught) wrote more effective prompts, used the tools more deliberately and earned the highest assignment scores.
- **Instructors.** Grade the process, not only the product, by keeping the required notebook tags on AI-sourced code and the end-of-session reflection; the rubric already covered error diagnosis, reasoning and responsible AI use, and that is the evidence that makes how a student worked visible.
- **Researchers.** Measure students' use strategies (rules, hint timing, self-regulation) alongside performance, because equivalent assignment and inventory scores between the two conditions concealed differences in regulation that did track scores.

## Limitations

- The pilot randomized 33 students to 16 in the Coach condition and 17 in the unrestricted condition within a single master's-level course, and the authors state it was not powered for inferential tests, so only descriptive comparisons are reported.
- The findings on strategy and model understanding rest on six semi-structured interviews plus recorded informal discussion notes with students and teaching assistants.
- The trial compared one specific scaffold — a 25-hint budget, a 15-minute AI cap, a session reflection and mandatory tagging — against open access, and the authors state the results say nothing about scaffolds in general.
- The scaffold leaked across the randomized conditions, with some Coach students reporting that they looked at classmates' unrestricted screens when stuck, and performance was measured by course assignments and a ten-item concept inventory with no delayed test taken without AI.

## Connected Concepts

- [[ai-literacy]]
- [[scaffolding]]
- [[generative-ai]]
- [[self-regulated-learning]]
- [[self-efficacy]]
- [[cognitive-offloading]]
- [[ai-misuse-learning-harm]]
- [[reducing-ai-misuse]]
- [[help-seeking]]
- [[metacognition]]
- [[assessment]]
- [[cs-education]]
- [[higher-ed]]
- [[prompt-engineering]]
- [[equity-in-ai-education]]

## Connected Articles

- [[liu-tool-tutor-crutch-programming-2026]] — Tool, Tutor, or Crutch?: A Grounded Theory of Cognitive Scaffolding and Offloading in AI-Assisted Programming Education
- [[naim-bypass-offload-scaffold-llm-learning-2026]] — Bypass, Offload, or Scaffold: A Conceptual Model of How Large Language Models Shape Learning
- [[generative-ai-guardrails-harm-learning]] — Generative AI without guardrails can harm learning: Evidence from high school mathematics
- [[genai-over-reliance-learning-2026]] — From Enhancement to Over-Reliance: A Mixed-Method Study of Generative AI and Sustainable Learning Performance
- [[cognitive-washout-ai-skill-decay-2026]] — After the Assistant Leaves: Cognitive Washout Dynamics and the Reversibility of AI-Induced Skill Decay
- [[student-dependency-on-ai-literacy-self-efficacy-2026]] — Understanding Student Dependency on AI: The Role of AI Literacy, Academic Self-Efficacy, and Resource Management Strategies
- [[rethinking-scaffolding-llm-tutors]] — Rethinking Scaffolding in LLM Tutors: The Interactional Mismatch Between Benchmarks and Real-World Deployments
- [[reshaping-cs-education-genai]] — Reshaping Undergraduate Computer Science Education in the Generative AI Era
- [[ai-literacy-equity-programming-policy]] — Programming Language Policy as an AI Literacy Equity Problem: A 15-Nation Comparative Analysis
- [[jost-llm-programming-education-learning-outcomes]] — The Impact of Large Language Models on Programming Education and Student Learning Outcomes

## Citation

Azimi, S. (2026). [*AI literacy over tool design: a mixed-methods study of scaffolded versus unrestricted generative AI in programming education*](https://arxiv.org/abs/2609.16784). arXiv preprint.
