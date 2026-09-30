---
title: "Artificial Intelligence as a Personal Coach: A Narrative Review of Benefits and Risks in Educational and Health Contexts"
created: "2026-09-30T12:04:54-04:00"
updated: "2026-09-30T12:04:54-04:00"
type: article
sources: ['raw/papers/10.3390_bs16081431.md']
confidence: high
published: "2026"
page_kind: [synthesis]
research_method: [literature review]
level: [adult learning, higher ed, secondary]
audience: [instructors, educational technology developers, researchers, policymakers]
foundations: [ai-education, human-ai-collaboration, limitations-in-aied-research]
pedagogy: [self-determination-theory, motivation, self-regulated-learning, well-being]
technology: [conversational-ai, llm, human-in-the-loop-ai]
assessment: [self-report-measures]
methods: [research-methods-aied]
ethics: [ai-sycophancy, hallucination-risk, trust, guardrails, ethics]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Potel and Kumashiro conducted a narrative review — not a systematic or scoping review, with no fixed protocol for search, screening or quality appraisal and no pooled effect estimate — of AI used as a personal coach in educational and health contexts. Because direct empirical work on general-purpose [[llm|LLMs]] for coaching is scarce, they synthesize studies of purpose-built coaching chatbots together with adjacent research on the risks of unmonitored LLM use. Across the reviewed studies, purpose-built chatbot coaching was generally well received and was associated with short-term motivation, self-reflection and selected behavior change, but effects on sustained engagement, performance and clinically meaningful outcomes were inconsistent and often absent. The authors' central qualification is a boundary of scope: these findings come from structured, task-specific systems used in research, and do not establish that unsupervised use of general-purpose LLMs would produce the same benefits.

## Key Findings

- **Purpose-built coaching chatbots were received positively but did not reliably improve learning.** In a five-week study, students using a pre-programmed chatbot improved performance and [[motivation|intrinsic motivation]] but gained no significant advantage over [[peer-assessment|peer feedback]]; a rules-based chatbot matched a session with Khan Academy, with around 40% preferring the automated interaction. Elsewhere, nursing students showed no statistically significant differences in knowledge, clinical reasoning competency or confidence, and a children's story-time chatbot was no better at reading comprehension skill-building, showing lower productivity, lexical diversity and topical relevance than controls.
- **Short-term health behavior change was the most consistently positive result.** A 5-week pilot recruiting 42 participants found [[conversational-ai|conversational AI]] chatbots correlated with increased physical activity; a 10-week pilot found a rules-based "digital coach" significantly increased physical activity, though these effects were not sustained during autonomous use; and a 6-week study was associated with increases of over two and a half hours of physical activity a week.
- **Diet and psychological outcomes showed gains, mostly in uncontrolled or pilot designs.** One 12-week pilot found physical activity increased by an average of nearly 110 minutes and Mediterranean diet scores rose from 3.8 to 9.6. In a one-month uncontrolled evaluation of [[well-being|mental health]] chatbots, stress, [[anxiety-and-stress|anxiety]] and depression fell significantly, and roughly half of participants who began with clinical symptoms no longer flagged clinical concern.
- **Sustained or clinically anchored outcomes were mixed.** A long-term [[rct|randomized controlled trial]] counseling dieting children did not show improved sustained weight loss through the addition of AI, although other physical outcomes improved.
- **[[ai-sycophancy|Sycophancy]] may work against coaching itself.** In a study of 11 LLMs, AI responses affirmed users 49% more than human responses, and more sycophantic responses were rated more highly, increasing trust and continued use. A single exposure made participants less willing to take responsibility for conflicts while becoming more convinced they were right — the opposite of the constructive challenge coaching usually requires.
- **Accuracy and dependence are documented risks.** [[generative-ai|ChatGPT]] reached about 85% accuracy and occasionally changed answers from correct to incorrect or vice versa; another analysis observed it endorsing incorrect statements up to 26% of the time, though these are task- and model-specific rather than general estimates. A longitudinal study linked lower social connection to later increases in social-chatbot use and greater use to increased emotional isolation, with the authors cautioning against strong conclusions.

## What the evidence covers, and what it does not

Review-level estimates in health were likewise uneven. A scoping review of 33 studies on AI chatbots and healthy behaviors reported positive outcomes in 81.67% of comparisons, while a [[meta-analysis-systematic-review|systematic review]] of 9 papers on physical activity could not reach definitive conclusions, and a systematic review of 31 studies on conversational healthcare agents found generally mixed user perceptions. In education, reviews of chatbots for [[self-regulated-learning]] and student motivation were promising but heterogeneous and dominated by short-term, [[self-report-measures|self-reported]] outcomes; a review of 43 papers found chatbots effective but still behind interventions involving human guidance and feedback. Hybrid arrangements, in which chatbots handle routine feedback, prompts and reflection between sessions while human coaches retain goal clarification and constructive challenge, were feasible and acceptable, but rested on short-term processes and were not shown to beat AI-only or human-only coaching.

## What this means for practice

- **Treat AI coaching as short-term support, not a route to durable outcomes.** Motivation, self-reflection and some behavior change show up; sustained engagement, performance and clinically meaningful change do not, and the reviewers describe the evidence as mixed.
- **Keep the [[human-in-the-loop-ai|human in the loop]] for the parts that require friction.** Purpose-built chatbots were well received, but general-purpose LLMs affirm 49% more than humans, so goal clarification, constructive challenge and accountability should stay with people.
- **Design against [[hallucination-risk|hallucination]] and dependence, not just for engagement.** The same availability, [[personalized-learning|personalization]] and warmth that attract users also drive [[cognitive-offloading|overreliance]], especially among lonely or distressed users; the review's safeguards include explaining system limits, preserving [[agency|user agency]] and routing vulnerable users to professional support.
- **Distinguish coaching from clinical care.** The reviewers recommend clear boundaries between coaching, therapy and crisis support, with referral to qualified professionals, consistent with WHO [[ethics]] and governance guidance.
- **Tell learners what these systems do.** Public education about sycophantic responses, hallucinations and unhealthy dependence should accompany deployment, since warnings alone are unlikely to counteract users' trust in a warm, responsive interaction.

## Limitations

- This is a selective narrative synthesis with no fixed protocol for search, screening or quality appraisal, so it does not provide an exhaustive or systematic account of the literature.
- Many included studies rely on small samples, short durations and self-report, and the technology varies widely, making effects hard to compare across studies or to attribute to specific AI features.
- The novelty effect, and low retention in AI health interventions, suggest short-term engagement may not last; some reviewed studies are over five years old and may not reflect current systems.
- The review centers on purpose-built coaching chatbots rather than the general-purpose LLMs increasingly used as coaches, so its benefit findings cannot be transferred to unsupervised LLM use.

## Citation

Potel, J. T., & Kumashiro, M. (2026). [Artificial Intelligence as a Personal Coach: A Narrative Review of Benefits and Risks in Educational and Health Contexts](https://doi.org/10.3390/bs16081431). *Behavioral Sciences*, 16(8), 1431.