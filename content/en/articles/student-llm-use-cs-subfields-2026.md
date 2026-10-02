---
title: "Understanding Student Use of Large Language Models Across Computer Science Subfields"
created: "2026-10-02T11:30:00-04:00"
updated: "2026-10-02T11:30:00-04:00"
type: article
sources: ['raw/papers/student-llm-use-cs-subfields-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [survey]
discipline: [cs education]
level: [higher ed]
audience: [instructors, researchers]
pedagogy: [self-regulated-learning, metacognition, help-seeking, problem-solving, student-ai-interaction, scaffolding]
technology: [llm, prompt-engineering, generative-ai]
assessment: [self-report-measures]
methods: [quantitative-research]
ethics: [trust-calibration, hallucination-risk, ai-use-disclosure]
foundations: [ai-literacy, human-ai-collaboration, academic-integrity]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-02"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This full research paper reports a cross-subfield analysis of how 211 [[higher-ed|undergraduates]] used [[llm|large language models]] across seven assignments in a single [[problem-solving]] course at a large R1 university in Fall 2025. Building on a demystify, use, and reflect intervention, the authors compared prompt-count intensity, [[student-ai-interaction|role conceptualization]], and verification behavior across [[cs-education|computer science]] subfields including algorithms, software engineering, networking, web development, HCI, databases, and [[machine-learning|machine learning]]. Adoption varied sharply by assignment — highest in algorithms (89.6%) and web development (80.6%), lowest in software engineering (15.2%). Students framed the LLM predominantly as an assistant rather than an expert, and almost all reported some checking, most often [[metacognition|manual reasoning]] combined with testing. The form of verification tracked the task: testing dominated structured, executable work, while web search rose in open-ended design and conceptual tasks. The authors conclude that assignment design, not the subfield label, shapes how students engage with and evaluate LLMs.

## Key Findings

1. Across seven assignments and 211 students, LLM adoption varied substantially by task — highest in algorithms (89.6%) and web development (80.6%), and lowest in software engineering (15.2%).
2. A Kruskal–Wallis test found prompt-count distributions differed significantly across assignments (H = 71.18, df = 6, p < 0.001), with moderate prompting (3–5 prompts) the most common pattern for 29–46% of users.
3. Students predominantly conceptualized the LLM as an assistant (61.6% in algorithms, 63.0% in web development), while expert use stayed low (0.0%–9.0%) and role distribution differed significantly across assignments (χ2 = 358.73, df = 18, p < 0.001).
4. Verification was nearly universal: 93%–100% of LLM users reported at least one method, and manual reasoning was the most consistent (70.7%–82.4%) with no significant difference across assignments (χ2 = 5.73, p = 0.455).
5. Testing varied by task (χ2 = 133.03, df = 6, p < 0.001), highest in algorithms (87.8%) and lowest in HCI (27.5%); web search was highest in HCI (56.0%) and lowest in databases (32.5%).
6. Most students combined strategies — 49.7% used exactly two methods and 15.6% used three — with manual reasoning plus tests the most common combination (27.5%).

## Adoption Tracks Task Demands

The authors interpret the adoption spread as a function of assignment complexity, verifiability, and instructional [[scaffolding|scaffolding]] rather than a fixed property of each subfield. The Knapsack Problem homework in algorithms — recursive and dynamic programming with unit tests and extra constraints such as conflicting items and bonus combinations — was difficult, testable, and iterative, which likely made the LLM attractive as a coding and debugging aid (89.6% adoption, 87.8% testing). Web development's HTML table task was not algorithmically hard but demanded painstaking CSS and layout debugging, and drew 80.6% adoption. By contrast, the software engineering Git exercise was procedural and strongly scaffolded with explicit instructions, and only 15.2% of students used the LLM. Networking and databases sat in the middle at 58.3%. HCI (43.1%) and machine learning (40.3%) were lower and more open-ended. Instruction throughout emphasized effective [[prompt-engineering|prompting strategies]] and iterative interaction, and the authors [[anxiety-and-stress|stress]] that task clarity and complexity were never measured directly — this remains association, not causation.

## Students Frame the LLM as an Assistant

Among students who used LLMs, the Assistant role dominated every assignment, peaking at 63.0% in web development and 61.6% in algorithms. Peer use was consistently second (18.0% in algorithms, 11.8% in databases), and Expert use was rare — just 9.0% in algorithms and web development, and 0.0% in software engineering. The authors read this as evidence that students were not simply delegating problem solving to the model, but using it selectively to support their own reasoning, especially on difficult or implementation-heavy tasks. A substantial share reported no LLM use at all in several assignments (86.3% in software engineering, 59.7% in machine learning, 57.3% in HCI). The course emphasized ethical use and required students to acknowledge AI-generated contributions, tying the framing to [[ai-use-disclosure|disclosure]] and [[academic-integrity|academic integrity]] norms, while prior work links role framing to beliefs about a tool's professional legitimacy — relevant to [[ai-literacy|AI literacy]] instruction aimed at informed, [[self-regulated-learning|self-regulated]] use.

## Verification Takes the Shape of the Task

Verification was the norm, not the exception: 93%–100% of LLM users reported at least one method, and non-verification ranged only from 0% to 8%. Manual reasoning was remarkably stable (70.7%–82.4%, no significant difference across assignments), suggesting students relied on their own judgment regardless of task. What changed was the supporting method. In structured, executable assignments testing was the natural check (algorithms 87.8%, software engineering 65.6%). In open-ended tasks that could not be tested, students reached for external references: web search peaked in HCI (56.0%), web development (49.4%), and machine learning (47.1%). This is the pattern the authors expected — checking a design choice or a conceptual claim demands a different form of [[evaluative-judgment|evaluative judgment]], and a different [[trust-calibration|trust calibration]], than checking that code runs. Students combined approaches rather than relying on one: 49.7% used two methods and 15.6% used three.

## What this means for practice

- **Instructors.** Expect LLM use to track assignment difficulty and testability, not subfield: adoption ran from 89.6% in algorithms to 15.2% in software engineering under one [[learning-design|instructional design]], so plan for very uneven uptake across a course.
- **Instructors.** Engineer verification into the task itself. Testing was the check students actually used where it was available, so keep outputs executable and testable when you want testing; where work is open-ended, require external sources, as HCI students reached for web search at 56.0%.
- **Instructors.** Treat low adoption as ambiguous. The Git exercise was procedural and explicitly scaffolded, so low use may reflect genuine low need rather than avoidance — ask students why instead of assuming disengagement.
- **[[curriculum-design|Curriculum]] and course designers.** Build in post-assignment reflection. Every finding here rests on short reflection surveys completed after each task, which is what made a within-subject, cross-subfield comparison possible.
- **Researchers.** Extend the single-course design across more assignments and institutions, and validate self-reported prompt counts against server-side usage logs.

## Limitations

- All measures come from [[self-report-measures|self-reported]] post-assignment reflections subject to recall bias, greatest for heavier users who had to distinguish adjacent prompt-count ranges such as 3–5 versus 6–10; the authors propose validating counts against server-side logs.
- The role labels (Assistant, Peer, Expert, None) were presented without in-survey definitions and the instrument was not formally piloted, so a student's reported role may reflect label interpretation rather than a genuine difference in how the LLM was used.
- Approximately 36% of consenting participants were excluded for not completing all seven reflection surveys, and non-completion may itself track assignment difficulty or attitudes toward LLM use; the final sample was 211 students in one course at one R1 university in Fall 2025.
- The study documents associations between assignment characteristics and LLM usage but does not establish causality; assignment clarity, testability, and open-endedness were not measured directly.

## Citation

Nizamani, S. B., Lee, Y., Donekal Chandrashekar, N., Ellis, M., & Ramakrishnan, N. (2026). [*Understanding Student Use of Large Language Models Across Computer Science Subfields*](https://arxiv.org/abs/2610.01158). arXiv:2610.01158.
