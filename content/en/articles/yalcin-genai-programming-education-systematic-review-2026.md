---
title: "Mapping Research on Generative Artificial Intelligence for Programming Education: A Systematic Review"
created: "2026-09-25T21:06:17-04:00"
updated: "2026-09-25T21:52:24-04:00"
type: article
published: "2026"
foundations: [academic-integrity, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai, llm]
assessment: [feedback]
methods: [meta-analysis-systematic-review]
ethics: [ai-misuse-learning-harm]
research_method: [literature review]
discipline: [cs education, information technology]
level: [higher ed, undergraduate]
audience: [instructors, researchers, policymakers]
page_kind: [synthesis]
sources: ['raw/papers/yalcin-genai-programming-education-systematic-review-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** Yalçın, Bakır-Yalçın, İslamoğlu and Ursavaş systematically review 46 peer-reviewed empirical studies of [[generative-ai|generative AI]] in [[higher-ed|higher education]] programming education, following PRISMA guidelines. A Web of Science and Scopus search returned 151 records (54 and 97 respectively); after 48 duplicates and five books or book sections were removed, 98 records were screened and 46 studies published no later than January 31, 2025 were included. ChatGPT appeared in 35 of the 46 studies (76.1%), and the corpus concentrated on large language model tools applied to Java (14 studies, 30.4%) and Python (11 studies, 23.9%). Research came from 28 countries, led by the United States (n=10, 21.7%), and was published mostly in conference proceedings (32 studies, 69.6%). Tutoring, [[feedback]] and support was the most common stated objective (14 studies, 30.4%). Twenty-six of the 46 studies gave no usable description of their instructional approach, and concerns recur about [[academic-integrity]], [[ai-misuse-learning-harm|over-reliance]] and reduced conceptual understanding.

## Key Findings

- ChatGPT dominated the corpus, appearing in 35 of the 46 studies (76.1%); GitHub Copilot and custom-built chatbots each appeared in three studies (6.5%), Gemini in two (4.3%) and Codex in one (2.2%).
- Most studies examined a single tool (n=38, 82.6%), only three compared multiple tools (6.5%) and five (10.9%) named no tool, keeping comparative evaluations of AI tools largely absent.
- Java was the most frequently studied language (14 studies, 30.4%), followed by Python (11 studies, 23.9%) and C/C++ (5 studies, 10.9%); nine studies (19.6%) did not specify a language.
- Conference proceedings carried 32 studies (69.6%) against 14 journal articles (30.4%) spread across 13 journals, and no single journal carried more than two studies (4.3%).
- Instructional approaches were identifiable in only 20 studies; personalized and adaptive learning was the largest theme at 13 studies, ahead of collaborative and social learning with six.
- Impact evidence is mixed: some studies reported better examination and coding performance and greater motivation, while others found no significant difference; benefits center on engagement and scalable support, while over-reliance, reduced conceptual understanding and academic integrity recur as concerns.

## How the review was assembled

The search combined programming terms in the title (programming OR coding), [[llm|generative AI]] terms in the title (AI, GenAI, chatbot, ChatGPT, Gemini, Copilot, Bard, Claude), learner terms in the abstract (student, learner, pupil) and higher education terms in the abstract. It retrieved 151 records, 54 from Web of Science and 97 from Scopus. After 48 duplicates and five book or book section records were removed, 98 records entered abstract screening and 46 were included. Screening was distributed across three authors, with Fleiss' kappa of κ=0.908 between the first and second authors and κ=0.894 between the first and third. Data collection combined manual extraction with R-based sentence extraction using 68 cue words, followed by researcher review.

## Tools, languages and dissemination

ChatGPT's dominance was near-total, which the review attributes to its accessibility and versatility for code generation, explanation and debugging. Java (14 studies, 30.4%) and Python (11 studies, 23.9%) concentrated the literature, and non-specification of a language (nine studies, 19.6%) ranked third, ahead of C/C++ (five studies, 10.9%). The venue profile points to early experimentation: 32 studies (69.6%) appeared in proceedings, led by ACM (11 studies, 23.9%) and IEEE (10 studies, 21.7%), while the 14 journal articles (30.4%) were dispersed across 13 outlets. Contributions came from 28 countries, led by the United States (n=10, 21.7%), with the Netherlands and the Philippines at three studies each.

## Instructional approaches and the missing frameworks

Instructional approaches were coded only where studies described them explicitly, and 26 of the 46 studies supplied no identifiable description. Among the 20 that did, personalized and adaptive learning was the largest theme with 13 studies, covering adaptive learning, personalized hints and learning assistance that responded to individual errors and performance. Collaborative and social learning followed with six studies, including pair programming with ChatGPT and student-AI collaboration on Python tasks, while structured and guided instruction and practice-oriented learning each took five or six studies. The authors treat the thin pedagogical reporting as a constraint on generalization and replication, and they call for richer descriptions of [[scaffolding]] and design decisions so that [[teacher-role|instructors]] and researchers can judge how results were produced.

## What the evidence says about impact

Findings on learning are mixed. Positive results include improved examination and coding performance, gains in [[computational-thinking|computational thinking]], programming self-efficacy and [[motivation]], and one AI tutor that raised test scores while reducing task completion time. Against these sit null results: AI-generated [[feedback]] did not significantly outperform instructor feedback in a collaborative setting, and ChatGPT helped students work faster without significantly improving learning outcomes. The authors attribute the variation to differences across tools, contexts and instructional strategies, and conclude that the field needs comparative evaluation across platforms and learner groups.

## What this means for practice

- Treat ChatGPT-style tutoring as a support layer requiring explicit scaffolding and reflective tasks rather than unmanaged tool access.
- Adopt institutional policies on ethical AI use, academic integrity and instructor training, since instructor roles and institutional practices were among the least studied areas.
- Require pedagogical design details in local evaluations, because 26 of 46 studies in this corpus could not be coded for instructional approach.
- Plan comparative evaluations across tools, programming languages and learner groups, and record which language model powers a tool so results can be replicated.

## Limitations

- Many included studies were exploratory, with small samples, limited methodological detail or short interventions, which constrains the robustness and generalizability of their findings.
- The review excluded non-English publications and may be affected by publication bias favoring positive or novel outcomes.
- Thematic coding of objectives and instructional strategies involved subjective judgments, particularly where aims overlapped or were described vaguely.
- Objective identification began with an automated cue-word search, so indirectly stated objectives may not have reached researcher review.

## Connected Concepts

- [[generative-ai]]
- [[llm]]
- [[feedback]]
- [[academic-integrity]]
- [[meta-analysis-systematic-review]]
- [[teacher-role]]
## Connected Articles

- [[chatgpt-programming-education-text-mining]] — a text-mining analysis of ChatGPT research discussions in programming education, complementing this review's mapping of tool usage.
- [[genai-meta-analysis-programming-learning]] — a meta-analysis quantifying generative AI's effects on productivity and learning in programming, supplying the effect sizes this descriptive review does not report.
- [[liu-tool-tutor-crutch-programming-2026]] — a grounded theory of cognitive scaffolding and offloading in AI-assisted programming, which gives theoretical depth to the over-reliance concern documented here.
- [[ai-supported-automated-programming-assessment-2026]] — a design and evaluation study of automated programming assessment, exemplifying the feedback systems this review found under-studied for comparison.

## Citation

Yalçın, Yasin; Bakır-Yalçın, Eda; İslamoğlu, Hakan; Ursavaş, Ömer Faruk. (2026). *[Mapping Research on Generative Artificial Intelligence for Programming Education: A Systematic Review](https://doi.org/10.1002/jcal.70341)*. Journal of Computer Assisted Learning, 42, e70341. https://doi.org/10.1002/jcal.70341