---
title: "The Personal Software Era: Teaching Agentic Artificial Intelligence to Absolute Beginners in a Data Science Course"
created: "2026-11-23T11:30:00-05:00"
updated: "2026-11-23T11:30:00-05:00"
type: article
authors: ["M. Birkenkrahe"]
venue: "ICERI 2026 proceedings"
evidence_context: educational
foundations: [agentic-ai, computational-thinking, learning-design]
pedagogy: [project-based-learning, experiential-learning, scaffolding]
technology: [vibe-coding, prompt-engineering, generative-ai, llm]
assessment: []
methods: []
ethics: [hallucination-risk]
discipline: [statistics and data science education, cs education]
level: [undergraduate]
audience: [instructors, curriculum designers, faculty developers, researchers]
page_kind: [design case]
research_method: [case study]
sources: ["raw/papers/birkenkrahe-agentic-ai-beginners-data-science-2026.md"]
confidence: high
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-23"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, quotes, links]
---

> **Synthesis:** Birkenkrahe reflects on "Coding in an AI World," a Spring 2026 special-topics course he designed and taught at Lyon College, where eleven near-total beginners spent a semester specifying, building, and verifying single [[agentic-ai|agents]] rather than learning syntax. Ten of eleven chose to build a working agent instead of writing a conventional research project, producing a 3D puzzle game, an internship-tracking assistant, a personal budgeting agent, a stock-market predictor, a residence-concern tracker, a catering-service planner, a course-planning assistant, and a trading game. Three lessons stand out: beginners struggle with specification rather than code; iterative reading of AI output builds understanding faster than syntax-first instruction; and the hardest skill is knowing when to stop trusting the agent. The paper also argues that AI may shift software development toward individualized, community-scale applications — while leaving maintenance and security debt to a generation trained on agents.

*Teaching-practice account: the author states that "this paper reflects on teaching agentic artificial intelligence (AI) and coding to absolute beginners." Figures below are course composition and project counts from one semester; there was no comparison group, no pre-test, and no measured learning outcome. Employment and survey statistics cited later are the author's attributed summaries of external sources, not results of this course.*

## Key Findings

- **Specification was the bottleneck.** Students had to state goals, assumptions, verification criteria, likely failure modes, and the human boundary precisely enough for an agent to act; the author judges that describing what you want is harder than writing code.
- **Reading output taught faster than syntax.** Iterative reading of what the agent produced built understanding quickly and made the material approachable to near-total beginners.
- **The human boundary was hardest.** Knowing when to stop trusting the agent, and where physical confirmation or human accountability is required, was the most difficult lesson of the term.
- **Building beat consuming.** Ten of eleven students chose to build an agent rather than write a research paper, and making things forced them to specify what they wanted the machine to do.
- **Tools remained brittle.** [[hallucination-risk|Hallucinations]], context drift, token limits, shallow understanding, and unreliable automation appeared across projects; "functional" meant testable and demonstrable, not production-ready.
- **A structural shift is proposed.** The author argues software may move from centralized platforms toward individualized and community-scale applications, and that [[cs-education|computing education]] should cultivate natural fluency paired with low trust.

## Course design: workflow over syntax

Eleven students enrolled in the full-semester, 400-level course: four computer science majors, one accounting major, one economics major, four business administration majors, and one college staff member with a master's degree in the humanities. Few had more than a passing acquaintance with coding, and only two had taken an advanced undergraduate computing course. The pedagogical shift was deliberate — away from syntax and toward designing explicit, testable workflows that an AI agent could execute reliably.

The [[curriculum-design|curriculum]] was developed with ChatGPT, and the college's Team subscription gave every student access to new OpenAI tools as they were released. Practice ranged well beyond one chat window: raw ChatGPT and Gemini; the Gemini CLI inside Google Cloud Shell; Gemini in Google Colaboratory for basic Python and simple supervised learning; custom GPTs and Gemini Gems for personalization; NotebookLM; and Google Sheets with Apps Script to connect applications to an agent. Roughly a third of the content was asynchronous, drawn from ten DataCamp chapters, alongside twenty graded assignments and online quizzes. For the semester project, students worked individually through Scrum's four sprint reviews — proposal, literature review, prototype and testing protocol, final presentation — building a single agent rather than a multi-agent system.

## What the projects revealed

The resulting projects reflected personal interest rather than an imposed agenda. Students built a 3D puzzle game with Gemini and Unity, an internship-tracking assistant, a personal budgeting agent, a stock-market predictor, a residence-concern tracking assistant, a catering-service agent, an AI course-planning assistant, and "MarketMind," a game for learning stock trading. Functional here does not mean production-ready or free of hallucination; it means the agent had been run against test cases and could be presented in a live demonstration by its author.

The Scrum structure mattered more than expected: students concentrated effort near each deadline, and the enforced cadence converted a semester of intention into four months of checkable progress. The catering-service agent anticipates the paper's central limit — it could plan menus, estimate quantities, and generate order lists, but it could not confirm that the food actually arrived. That gap between a digital plan and a physical event recurred across nearly every project in some form.

## Tacit knowledge and the human boundary

To interpret how students engaged with knowledge, the author borrows the SECI model from knowledge management — socialization, externalization, combination, internalization. Kirchner et al., cited here, find in interviews with software engineers that [[generative-ai|generative AI]] participates actively but double-edged across all four modes: a fast content creator in externalization, a quick knowledge provider in combination, a collaboration partner in socialization, and a source of new perspectives in internalization, each capability paired with a risk to oversight or [[critical-thinking|critical thinking]]. Teaching data science under those conditions increasingly means teaching students to supply that oversight themselves.

The deeper constraint is that AI systems operate only on digitized information, and most human knowledge is not digitized. The author cites the digitization effort behind Google Books — a fifth of the way through the world's books at 400 million dollars over a decade — and notes that even fully digitized, in-copyright texts mostly cannot be legally used for training. This sharpens Polanyi's distinction between tacit and explicit knowledge: whatever a model can do with what has been made explicit, it cannot cross into the physical world to acquire what has not been. Humans remain the ones who bridge that boundary.

## Implications: the engineering myth

The paper pushes back on the claim that AI reduces the need for software engineers. Every previous abstraction layer in computing created more engineering work, the author argues; amateur builders will generate real maintenance and security debt — software that breaks, leaks credentials, or drifts out of date. The external figures are attributed, not measured in the course: U.S. Bureau of Labor Statistics projections put employment growth for software developers, quality assurance analysts, and testers at 10% from 2025 to 2035, adding an estimated 185,400 jobs, roughly three times the 3% growth projected across all occupations; and in the 2025 Stack Overflow Developer Survey, 64% of professional developers did not perceive AI as a threat to their jobs (down slightly from 68%), while 84% reported using or planning to use AI tools and distrust of AI accuracy rose to 46%, up from 31%.

## What this means for practice

- **Instructors.** Make specification and verification the spine of the course: require students to state goals, assumptions, test cases, and failure modes before any code is generated, and treat reading the agent's output as the primary learning activity.
- **Curriculum designers.** Use milestone-based project structures with short, accountable iterations so that intention becomes checkable progress, and keep at least one deliverable that must be demonstrated against real test cases.
- **Faculty developers.** Treat deciphering error and debugging messages as a teachable skill that varies by language and interface, and help teachers design the human-boundary discussion around a concrete failure such as a physical task the agent cannot confirm.
- **Administrators.** Plan for the maintenance and security consequences of students shipping small agents: credential handling, data limits, and ongoing support belong in the program, not just in the celebratory demo.

## Limitations

- This is one course at one college, taught and reflected on by its own instructor, with eleven students and no comparison group.
- Project quality was judged by demonstration and test cases rather than a common rubric, and the course measured no learning gain.
- The tool landscape changes quickly, and the workflows described are tied to the releases available in Spring 2026.
- The employment and survey figures cited in the discussion are the author's attributed summaries of external sources, not measurements made in the course.

## Citation

Birkenkrahe, M. (2026). [The Personal Software Era: Teaching Agentic Artificial Intelligence to Absolute Beginners in a Data Science Course](https://doi.org/10.21125/iceri.2026). *Proceedings of the 19th International Conference on Education, Research, and Innovation.*
