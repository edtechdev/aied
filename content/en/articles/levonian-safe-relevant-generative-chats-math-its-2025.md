---
title: "Designing Safe and Relevant Generative Chats for Math Learning in Intelligent Tutoring Systems"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/levonian-safe-relevant-generative-chats-math-its-2025.md']
confidence: high
page_kind: [evaluation]
research_method: [design and evaluation study]
audience: [researchers, educational technology developers]
level: [k 12, middle school]
discipline: [math education]
technology: [conversational-ai, generative-ai, intelligent-tutoring, llm, rag]
pedagogy: [motivation, student-ai-interaction]
methods: [usability-research]
ethics: [ai-sycophancy, guardrails, pedagogical-safety]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Levonian, Henkel, Li and Postle report two studies of generative chat added to Rori, a WhatsApp-based math tutor used by middle-school students in Sierra Leone, Liberia, Ghana and Rwanda. Study 1 combined educator red-teaming, a 109-student usability test, and a field deployment of 8,168 students to show that a structured [[motivation|growth-mindset]] conversation wrapped in a two-tier safety filter produced almost no inappropriate content: 0.31% of the 54,384 field-deployment student messages scored 0.1 or higher on the OpenAI moderation API, and no GPT-3.5 response was judged objectionable. Study 2 surveyed 9 educators and designers on 51 real student questions and found [[rag|retrieval-augmented generation]] improves responses, but that low prompt guidance was pairwise-preferred over high guidance — a groundedness-versus-preference balance designers must tune. The studies point designers to [[student-ai-interaction|student inputs]] as the content moderation problem, and researchers to subtle failures such as the yea-sayer effect.

## Key Findings

1. **GPT-3.5 produced no objectionable outputs at scale.** The highest moderation score on any system message was 0.010 during the usability test and 0.044 during the field deployment, and continual monitoring found none objectionable.
2. **Student inputs were the moderation problem, and barely.** Only 0.31% of the 54,384 field-deployment student messages scored 0.1 or higher in any moderation category — fewer than 8 in 10,000 messages flagged — and the single high-risk flag was a false positive.
3. **The safety filter redirected rather than evaded.** Among 48 unflagged conversations containing a message that scored 0.1 or higher, 40 warranted a corrective response; GPT-3.5 responded appropriately in 37 and ignored or equivocated in 3, the paper's evidence of the yea-sayer effect.
4. **Red-teaming set the thresholds.** 17 Rising Academies educators and system designers ran 57 adversarial conversations, giving negative feedback on 39 messages that should have been flagged.
5. **Classroom quality did not fully travel to the field.** In the usability test, 16 conversations (6.3%) were rated below five stars and completion reached 59.5%, versus 38.9% in the field deployment.
6. **RAG improved groundedness without winning raw preference.** Pairwise, low guidance beat high guidance 63.8% and no guidance 57.5%, while high guidance was perceived as most grounded (mean 0.90 on a 0-2 scale).
7. **Retrieval relevance shaped perceived groundedness, not preference.** Relevance correlated with groundedness (r = 0.56, p < 0.001) but showed no significant relationship with preference rankings.

## Designing the two chat modules

The system was built inside Rori, an ITS organized around micro-lessons that explain a math concept with practice questions. The first module is a structured, system-initiated conversation teaching a growth mindset before math practice begins, limited to a maximum of 8 turns in the usability test and 10 in the field deployment to reduce digressions. It opens with the question "Do you agree with the statement 'Being smart is a choice you make, not the way you are'?" and walks students through phases on the brain-as-muscle analogy, the value of practice, and a math topic they find difficult.

Every student and system message passes through a safety filter built from two components: a word list of unambiguous curse words, chosen because educators and parents can reason about it, and the OpenAI moderation API, whose per-category thresholds were set using the red-teaming exercise. Low-risk messages are dropped from the context and the student is asked to rephrase; high-risk categories (self-harm, sexual/minors, and the two threatening sub-categories) end the conversation immediately with a scripted message telling the student a real person needs to look at the topic. Contribution 1 of the design is treating each message as independently moderated, including the model's own outputs: flagging high-risk messages also generates email alerts to an internal team, and a reporting protocol for sensitive disclosures (sexual abuse, suicidal thoughts) was written but never needed.

The second module supports open-ended conceptual Q&A with retrieval-augmented generation: a query is embedded with OpenAI's text-embedding-ada-002 model, matched by cosine similarity to a subsection of the OpenStax Prealgebra textbook used as the retrieval corpus, and the retrieved text is inserted into the GPT-3.5 prompt at one of three guidance levels.

## Study 1: moderation at field scale

The usability test ran in December 2023 with 109 in-school students across six classrooms, producing 252 conversations (3,722 messages); no student or GPT-3.5 message triggered the safety filter, and a random sample of 100 conversations found no false negatives. Students who rated the conversation below five stars (16 conversations, 6.3%) used single-word responses non-significantly more often (75.4% versus 65.4%, chi-squared = 0.82, p = 0.36).

The field deployment went public on February 13, 2024, and the analysis covers 126,278 messages between launch and May 1, 2024: 8,168 students in 8,755 conversations sent 54,384 messages. The highest-scoring student message reached 0.989 on harassment, but the category-level table shows the long tail that matters for design: harassment had 141 messages at 0.1 or higher and 36 at 0.5 or higher; sexual content had 28 and 5; hate had 3 and 1; and violence had 2 and 1. The single high-risk flag was investigated and judged a false positive — violent language that merited corrective action but no self-harm — and all 27 conversations with flagged messages merited corrective action.

The yea-sayer finding sits on the boundary between flagged and unflagged: of 48 conversations whose messages neared the threshold, 40 included input calling for caution or correction, and the model produced appropriately corrective responses in 37, ignoring or equivocating in 3. Designers' takeaway in the paper is that student inputs, not model outputs, are the content moderation problem, and that yea-saying deserves explicit monitoring.

## Study 2: groundedness, guidance, and preference

Study 2 asked whether retrieval-augmented generation with prompt engineering can make responses more grounded without hurting quality. The authors annotated a random sample of 554 Math Nation posts (October 2013 to October 2021) and identified 51 factual and conceptual questions with sufficient context to answer. Automated groundedness metrics (K-F1++, BERTScore, BLEURT) all rose across the None, Low, and High guidance conditions, and an information-retrieval condition that blankly repeats textbook text was the most grounded by token-level metrics while being lowest in conversational quality — the authors' demonstration that automated metrics alone miss what matters.

Nine educators and designers of education technology then ranked responses from best to worst for each query with order randomized. Low-guidance responses won the pairwise comparisons: Low over High 63.8% of the time, Low over None 57.5%, and None over High 51.7%, with the High and None conditions statistically indistinguishable. Mean perceived groundedness rose with guidance (None 0.52, Low 0.59, High 0.90, on a None/Partial/Perfect scale; n = 153, one-way ANOVA F(2.0, 99.38) = 6.65, p = 0.001, Krippendorff's alpha = 0.35), yet low-guidance responses were preferred for reasons other than perceived groundedness: relevance of the retrieved document correlated with groundedness (r = 0.56, p < 0.001) but bore no significant link to preference — for queries where low guidance won over high, mean relevance was actually slightly higher (difference in mean relevance = 0.19, t = -1.45, p = 0.15). Of the retrieved documents, 70.6% were at least topically relevant and 33.3% partially relevant or better, though annotator agreement on relevance was low (Fleiss' kappa = 0.13). The survey's most direct implication: RAG helps, but the prompt is a dial, and turning it too far toward the textbook loses the students' preference.

## What this means for practice

- **Design the safety filter around student inputs, not model outputs.** GPT-3.5 generated no objectionable messages across 126,278 field-deployment messages, while 0.31% of student messages scored 0.1 or higher — so input moderation, including the two-risk-level action design (rephrase versus end conversation with human review), is where the design effort belongs.
- **Red-team with the people who understand the learners before setting thresholds.** The 17 educators and designers who ran 57 adversarial conversations produced the evidence (negative feedback on 39 messages) that calibrated the per-category moderation thresholds; the authors report the process also built organizational confidence.
- **Tune RAG guidance rather than maximizing grounding.** Low-guidance prompts were pairwise-preferred over high-guidance (63.8%) even though high guidance was perceived as most grounded (0.90 of 2); designers should treat prompt guidance as an explicit knob and evaluate with human preference, not only automated groundedness metrics.
- **Monitor for yea-saying as a first-class failure mode.** In 3 of 40 conversations where a corrective response was warranted, GPT-3.5 ignored or equivocated; designers should track the prevalence of such responses and consider technical approaches that model corrective behavior explicitly.

## Limitations

- Study 1 evaluates a single LLM-backed conversation design in a single ITS, and the structured, system-initiated format may have reduced the range of realistic student inputs that could trigger inappropriate responses.
- The moderation system uses a granular, two-level risk assessment with only a handful of pre-written responses; because no serious high-risk student messages occurred, the work cannot inform best practices for threats of violence or sensitive disclosures.
- The red-teaming process was ad hoc, and the authors note there is little guidance in the literature for conducting it; its effectiveness for other LLM use cases is unclear given the low observed baseline rate of inappropriate responses.
- Study 2 did not collect preferences from students directly, only from 9 educators and designers; responses were single-turn, and the relationship between preference and actual learning outcomes remains untested.
- Relevance annotation reliability was low (Fleiss' kappa = 0.13) and automated groundedness metrics correlate only modestly with human judgments — K-F1++ had the strongest pooled correlation with groundedness at r = 0.52 — so the quantitative anchors for retrieval relevance are soft.

## Citation

Levonian, Z., Henkel, O., Li, C., & Postle, M.-E. (2025). Designing Safe and Relevant Generative Chats for Math Learning in Intelligent Tutoring Systems. *Journal of Educational Data Mining*, 17(1), 66-97.
