---
title: "Artificial Intelligence in Legal Education: A Scoping Review"
created: "2026-11-07T09:26:35-05:00"
updated: "2026-11-07T12:30:00-05:00"
type: article
published: "2025"
source_url: "https://doi.org/10.1080/03069400.2025.2592440"
sources: ['raw/papers/lorteau-sarro-ai-legal-education-2025.md']
confidence: high
page_kind: [synthesis]
research_method: [literature review]
discipline: [legal education]
level: [higher ed]
audience: [instructors, researchers, administrators]
foundations: [critical-thinking]
pedagogy: [socratic-method, professional-training]
technology: [generative-ai, llm]
assessment: [assessment-validity]
institutions: []
ethics: []
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-07"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Lorteau and Sarro consolidate a fast-growing literature that lacked a consolidated review: 82 scholarly works with lead authors in 26 countries, published between January 2020 and April 2025, organized around four questions on current use, effects, risks, and evidence gaps. The central empirical finding is deflationary. On their own, [[generative-ai|generative AI]] tools such as [[llm|large language models]] pass most law school evaluations while ranking below the student average, and they improve sharply when given detailed instructions and the relevant authorities. Around that result the review assembles concrete uses (generated teaching materials, interactive simulations, writing coaching, prompt training), a cluster of risks (passive reliance, hidden assessment integrity problems, jurisdictional blind spots), and a longer-term worry that cheaper and more accessible legal teaching may concentrate control over what counts as law. Its practical argument is that AI can complement [[socratic-method|Socratic]] teaching and [[professional-training|professional training]] rather than replace them, but only if [[assessment-validity|assessment validity]] and [[critical-thinking|critical thinking]] remain the design constraint.

## Key Findings

1. **The evidence base is recent, international, and mostly non-empirical.** Of 82 included works, 74% appeared between 2023 and 16 April 2025. Lead authors were affiliated with institutions in 26 countries, led by the United States (38), China (7), and the United Kingdom (5). The sample covers 53 common law and 27 civil law studies plus two mixed systems, and 22 empirical studies, 17 of them experimental.
2. **Unaided models pass but underperform.** GPT-3.5 earned grades from C- to B on four US law school exams while ranking in the bottom 10th percentile of each class. GPT-4 earned C- to B across six US law courses, and in an Australian study four model responses fell below the 15th percentile.
3. **Format decides the result.** Models do better on multiple-choice questions and open-ended essays than on fact patterns and issue spotters. In the Australian study they scored 47% on fact patterns against 66% for students, but 78% on short answers and essays against 68% for students. A randomized controlled trial found GPT-4 access raised multiple-choice scores by 28.9 percentage points with no statistically significant gain on essays or issue spotters.
4. **Prompting and supplied authority change performance, within limits.** Detailed response instructions plus relevant case law lifted grades from 28-48% to 50-78% in the Australian study, and an IRAC exercise produced Claude 90%, Copilot 83%, GPT-3.5 77%, Gemini 74%, and Lexis+ AI 73%. Yet loading a 585-page patent law textbook into three models still yielded fully accurate and error-free answers only 49% of the time for ChatGPT-4o, 56% for Claude 3.5, and 37% for NotebookLM, with erroneous answers to 12-18% of questions the textbook addressed.
5. **The literature offers four concrete teaching uses.** AI can draft exam questions, syllabi, and curriculum review plans; run interactive exercises such as simulated discovery, clients, and opposing counsel; coach legal writing and brainstorming; and teach AI skills, including a seven-part prompting sequence.
6. **Passive reliance is the pedagogical risk, and assessment is where it bites.** [[automation-bias|Automation bias]], biased training data, and a tendency to present the legal status quo as objectively correct all push students toward accepting outputs. Detection is weak: none of the five tutors marking the Australian AI-generated papers suspected them, and current [[ai-detection|detectors]] cannot support misconduct findings.
7. **Gains are unevenly distributed.** Both randomized trials by Choi and colleagues found GPT-4 helped lower-performing students most, while top students gained little and in one study fell nearly 20 percentile points. AI may raise the floor without lifting the ceiling.

## How the review was built

The authors ran a scoping review against four preset questions on current use, effects, risks, and evidence gaps. They searched five databases (EBSCO Index to Legal Periodicals, EBSCO Academic Search Complete, ProQuest, HeinOnline, and Google Scholar) with Boolean strings built alongside two legal research librarians, and added the first 200 Google Scholar results through Publish or Perish 8.17. The window ran from 1 January 2020, the release year of GPT-3, to 16 April 2025.

Deduplication in Covidence left 609 unique records. Title and abstract screening excluded 423, full-text review narrowed 186 to 82, and non-English records were translated with GPT-4o. Coding covered empirical results, AI skills, effects of use, best practices, ethics and integrity, and technological and pedagogical limits, then became an inductive thematic analysis refined with the co-author. The resulting sample is 76 English-language works, 74 journal articles, 5 preprints, 1 book chapter, 1 conference paper, and 1 bar journal contribution. Its empirical core is 22 studies, of which 17 were experiments, 2 questionnaires, 1 semi-structured interviews, and 1 a course syllabus survey.

## What the models do on law school tasks

The performance literature is consistent in direction and inconsistent in size. Choi and colleagues blind-graded GPT-3.5 answers to four US law school exams and found passing grades that still sat in the bottom tenth of each class. Blair-Stanek and colleagues found GPT-4 below the class average in six US courses. Alimardani's Australian study placed four model responses below the 15th percentile. The variation tracks task type more than model version: structured formats reward fluent prose and organization, while fact patterns reward issue identification and applicative reasoning.

The counterevidence matters. Choi and Schwarcz found a large multiple-choice gain and no significant essay gain in a randomized trial. Choi, Monahan, and Schwarcz found that GPT-4 cut task completion time by 11.8% to 32.1% on practical drafting tasks while quality moved between +0.17 and -0.07 GPA points. Ouellette and colleagues supplied a 585-page textbook and still got unreliable answers, which they attribute to prediction rather than causal understanding. Jurisdiction is another fault line: ChatGPT [[hallucination-risk|hallucinated]] Chinese-sounding case names in a Hong Kong study yet performed better on Canadian law in a comparative course, a pattern the authors link to training-data imbalance toward US and English-language sources.

## Teaching with AI without outsourcing the thinking

The use cases are concrete. Oltz generated workable drafts of exam questions, syllabi, and curriculum review plans. Farber added AI-generated multiple-choice questions and practice fact patterns to criminal law and reported survey gains in comprehension and engagement. Smith used DALL-E to visualize Palsgraf v. Long Island Railroad, and the images exposed ambiguities in the court's account of where the plaintiff stood and whether the danger was visible. Steward [[simulation|simulated]] discovery by generating documents in response to student requests for production; others simulated clients, witnesses, and opposing counsel, and Chinese teams built courtroom simulation models on Chinese legal materials. LegalWriter improved structure and expression in a writing-support study.

The fourth use is skill building. Regalia sets out seven prompting practices, from assigning the model a role to setting parameters and following up iteratively. Others doubt [[prompt-engineering|prompt engineering]] will need separate teaching; the stronger claim is that critiquing model outputs builds judgment. Whether students need coding is open, but basic training on how these systems work commands emerging agreement.

Students may internalize the assumption that law is uncomplicated and client preferences irrelevant. Assessment responses divide into three unsatisfying options: ban the tools, which is hard to enforce and hard to justify when practice uses them; redesign tasks toward application and critique, which the review favors but notes may eventually be outrun; and shift to [[oral-assessment|oral examinations]] and in-class presentations, which cost instructor time and stop assessing written analysis. Policy responses range from [[ai-use-disclosure|disclosure]] to prohibition; the review finds no one-size answer and calls for instructor training, shared terminology, and context-specific rules.

## Access, transparency, and formalism

The forward-looking theme is the most speculative and consequential. If AI can tutor on demand, grade automatically, simulate a moot court judge, and adapt to individual learning styles, [[legal-education|legal education]] could scale far beyond the students today's law schools admit, at a fraction of the cost, and possibly license more lawyers. The same economics concentrate power. Building and running these systems takes capital, data, and energy, so the firms promising to democratize legal knowledge will be few and large, and if their proprietary data defines what the law is, the result may be less transparent and less democratic than the current academy.

The formalism worry follows from how the models work. They predict from past texts, which makes them, in Karr and Schultz's phrase, soldiers for the status quo. They do not generate novel arguments on their own, cannot reason morally, and do not ask the user to clarify preferences unless prompted. Used peripherally, they might instead prompt creativity by brainstorming arguments or adopting a role in dialogue. Cinar's proposal of a bilingual legal education, teaching both the language of law and the language of computation, is the review's most concrete long-term design idea.

## What this means for practice

- **Instructors.** Keep at least one assessment per course that samples unaided analysis, and state why, rather than assuming detection will police the rest.
- **Instructors.** Adopt the use cases with the clearest support (generated practice questions, simulations, writing feedback) and require students to critique and correct the output.
- **Program directors.** Publish course-level AI rules in a shared vocabulary across the curriculum, since students encounter different permissions in different courses.
- **Administrators.** Fund instructor training and name faculty AI leads; the review finds instructors generally lack familiarity with the tools and struggle to keep pace.
- **Researchers.** Test models other than ChatGPT, jurisdictions outside the United States, and outcomes beyond exam grades, including clinical performance, wellbeing, and bar passage.

## Limitations

- The April 2025 cut-off makes the review a time capsule; the authors name significant studies and policy statements published afterward that it does not capture.
- All but one empirical study that specified a model used at least one ChatGPT model, so the evidence describes one model family more than the field.
- The sample skews American, Anglophone, and common law (38 of 82 lead authors from the United States, 76 English-language, 53 common law), and one author performed all screening and full-text review, which may have introduced selection bias.
- Only 22 of 82 works are empirical, and most teaching recommendations rest on surveys or instructor reports rather than measured learning.
- The focus on law teaching excludes law librarians and other law school functions, and the review finds little coverage of clinical, graduate, pro bono, and continuing education settings.

## Citation

Lorteau, S., & Sarro, D. (2025). [*Artificial Intelligence in Legal Education: A Scoping Review*](https://doi.org/10.1080/03069400.2025.2592440). *The Law Teacher*. Advance online publication.
