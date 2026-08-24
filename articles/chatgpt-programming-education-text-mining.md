---
title: "Pedagogical Promise and Peril of AI: A Text Mining Analysis of ChatGPT Research Discussions in Programming Education"
created: "2026-05-13T04:33:04-04:00"
updated: "2026-08-24T12:00:00-04:00"
type: article
tags: [cognitive-offloading, academic-integrity, hallucination-risk, stem-education, feedback, student-experience, ai-education]

sources: ['raw/papers/2605.00361.md']
confidence: medium
---

## Synthesis

> Across 69 Scopus-indexed studies on ChatGPT in [[cs-education|programming education]], a text mining analysis of term frequencies, phrase patterns, and LDA topic models reveals a persistent **dual framing**: ChatGPT is cast simultaneously as a learning aid that supports explanation, feedback, and efficiency and as a pedagogical risk linked to overreliance, unreliable outputs, and [[academic-integrity|academic integrity]] concerns. The literature concentrates overwhelmingly on classroom practice and learner engagement (nearly half the corpus), while [[assessment]] design, [[prompt-engineering|prompting]], and [[governance|institutional governance]] remain comparatively underexplored. The authors conclude that ChatGPT's benefits—motivation, self-efficacy, computational thinking, faster grading—materialize mainly under structured pedagogy and teacher facilitation, and that responsible integration demands clearer [[educational-policy-ai|policies]], authentic [[assessment|assessment practices]], and equitable access.

## Key Findings

1. Text mining of 229 retrieved documents (69 after deduplication and screening) yields four dominant themes: pedagogical implementation, student-centered learning and engagement, AI infrastructure and human-AI collaboration, and assessment, prompting, and model evaluation.
2. ChatGPT is consistently framed as both a productive learning aid (explanation, feedback, code generation, efficiency) and a pedagogical risk (overreliance, cognitive dependency, unreliable or hallucinated outputs, integrity concerns).
3. The corpus skews toward classroom practice and learner experience, with comparatively limited attention to systematic [[assessment|assessment design]], [[prompt-engineering|prompt design]], and [[governance|institutional governance]].
4. Controlled, structured applications report gains in motivation, engagement, self-perceived competence, [[computational-thinking|computational thinking]], and grading efficiency (e.g. ChatGPT-4 grading at 0.91 correlation with instructors; ~75% grading-time reduction), whereas unmoderated use is associated with reduced persistence, weaker independent debugging, and limited genuine learning-gain.
5. The paper recommends course-level AI policies, verification procedures (code walkthroughs, oral assessment), faculty [[ai-literacy|AI literacy]] and prompt competence, and equitable infrastructure as preconditions for responsible adoption.

## The Dual Character of ChatGPT in Programming Education

The chapter opens by situating ChatGPT against a long history of AI support for [[cs-education|computer science education]]. Early [[intelligent-tutoring|intelligent tutoring systems]] and automated assessment platforms delivered adaptive feedback and improved performance on topics such as loops, recursion, and data structures, but were limited in scale and struggled with complex, open-ended programming tasks. Large language models like ChatGPT redirected this pursuit: they produce explanations, examples, and code corrections through natural conversation, functioning as tutor, debugging assistant, and [[feedback|feedback tool]]. The chapter's central claim is that this technology carries a **dual character**—simultaneously a scaffold for learning and a source of [[academic-integrity|academic and ethical]] challenges—and that this duality is visible across the research literature itself.

## Method: Text Mining the Corpus

The empirical core is a computational analysis of published discourse. The dataset began as 229 documents from Scopus (open-access journal articles and conference papers matching a ChatGPT-and-programming-education query), reduced through deduplication and relevance screening to **69 documents**. Each text was preprocessed (lowercasing, removal of punctuation and digits, tokenization, stopword removal, Porter stemming) and then analyzed with three complementary procedures:

- **Term frequency analysis** to identify the dominant research concepts (student, ChatGPT, AI, education, and program rank highest);
- **Phrase pattern analysis** of bigrams and trigrams to surface conceptual relationships ("AI tools," "programming education," "problem-solving skills," "AI-generated content"); and
- **LDA topic modeling**, configured with four topics after coherence iterations, to reveal underlying themes.

Each document was also reviewed manually to link computational patterns to the reported opportunities, challenges, and limitations.

## Four Dominant Themes

The topic modeling surfaces four themes that organize scholarly discussion. **Pedagogical Use and Classroom Implementation** (19% of the corpus) emphasizes teacher facilitation, structured integration, and ethical awareness. **Student-Centered Learning and Engagement** (49%) portrays ChatGPT as an interactive tutor supporting motivation, engagement, and coding performance—the largest and most learner-focused cluster. **AI Infrastructure and Human-AI Collaboration** (23%) turns to institutional and technical dimensions such as transparency, readiness, and accountability. **Assessment, Prompting, and Model Evaluation** (9%) is the smallest cluster, addressing prompt design, feedback generation, and model accuracy. The distribution itself is a finding: the literature privileges the classroom and the learner while devoting the least attention to assessment and governance.

## Benefits and Opportunities

Where ChatGPT is integrated through structured instructional frameworks, the reported benefits are substantial. The R5E model improved student performance and critical thinking; PyChatAI delivered real-time bilingual feedback that aided debugging; a mobile learning system enhanced motivation, [[self-efficacy]], and coding accuracy; and a GPT-based code review system reduced academic dishonesty while improving feedback precision. On the instructor side, ChatGPT-4 graded submissions at a **0.91 correlation** with human raters, the GreAIter system cut grading time by over 75% without losing accuracy, and ChatGPT-3.5 generated coherent exam questions that reduced preparation time. Personalized and adaptive applications—automated grading, fuzzy-memory feedback, scaffolding in simulated environments—are credited with supporting accessibility and individualized learning.

## Risks and Limitations

The risks cluster into four areas. **Academic integrity and misuse**: teachers regard ChatGPT as a major contributor to exam dishonesty; students who received assistance often copied inaccurate outputs; AI-content detectors performed poorly at distinguishing AI-generated from human code. **Negative cognitive impacts**: frequent reliance is associated with memorizing incorrect explanations, reduced motivation to solve problems independently, weaker software-testing, and limited reasoning when explaining AI-generated code—consistent with [[cognitive-offloading|cognitive dependency]]. **Technical unreliability**: students encounter incomplete or incorrect code, one study found only 30% of ChatGPT outputs fully usable, and repeated errors and hallucinated responses are documented—tying directly to [[hallucination-risk]]. **Ethical and social concerns**: plagiarism, [[privacy]], unequal access, reduced creativity, and uncertainty about authorship all recur, alongside equity questions (including about support for learners with disabilities).

## Solutions and Future Directions

The authors' recommendations center on course-level [[educational-policy-ai|policies]] that distinguish guided learning from dishonesty, verification procedures (code walkthroughs, oral assessment), pedagogy that requires students to compare, critique, and justify AI-generated code, faculty training in [[ai-literacy|AI literacy]] and [[prompt-engineering|prompt construction]], and equitable infrastructure such as campus-wide licenses and [[accessibility|accessibility features]]. Future research should move beyond short-term classroom experiments to longitudinal studies of how consistent exposure affects problem-solving, code quality, persistence, and higher-order skills such as abstraction and design thinking, and should compare instructional frameworks and cross-institutional/cross-cultural readiness.

## Implications

- **For instructors**: [[generative-ai|generative AI]] is not inherently helpful or harmful—its value depends on structured pedagogy and active [[teacher-role|teacher facilitation]]. Use it for guided practice, debugging sessions, and feedback, but require students to explain, evaluate, and justify outputs to preserve authentic learning.
- **For institutions**: the gap between heavy classroom emphasis and thin attention to assessment and governance is a warning sign. Universities need explicit course-level guidelines, verification mechanisms that confirm authorship, and equitable access to prevent a [[digital-divide|digital divide]].
- **For assessment**: because AI detectors are unreliable and submissions increasingly mix AI and human work, assessment must shift toward process evidence—code walkthroughs, oral defense, version-controlled projects—rather than assuming output authenticity.
- **For researchers**: the under-explored clusters—assessment design, prompting, model evaluation, and long-term learning effects—are the highest-value directions for future work, calling for longitudinal and cross-institutional designs.

## Connected Concepts

- [[academic-integrity]]
- [[cognitive-offloading]]
- [[hallucination-risk]]
- [[cs-education]]
- [[generative-ai]]
- [[llm]]
## Connected Articles

- [[shame-guilt-ai-regulation-computing-education]] — Stuck in a Spiral": Shame and Guilt as Social Regulators of AI Use in Computing Education
- [[eduguard-safe-rag-llm-tutor]] — EduGuard: A Safe RAG-Based LLM Tutor for Programming Education
- [[generative-ai-reduced-study-time-math]] — Faster Completion, Less Learning: Generative AI Reduced Study Time on Math Problems and the Knowledge They Build
- [[chatgpt-impact-high-school-tests]] — Little Impact of ChatGPT Availability on High School Student Test Score Performance
- [[metacognitively-discordant-completion-genai-2026]] — Metacognitively Discordant Completion and the Aware Pass-Through of Non-Understanding in Generative AI Learning
- [[code-review-genai-cs1]] — Combating Harms of Generative AI in CS1 with Code Review Interviews and a Flipped Classroom

## Citation

Grume et al. (2026). [Pedagogical Promise and Peril of AI: A Text Mining Analysis of ChatGPT Research Discussions in Programming Education](https://arxiv.org/abs/2605.00361). arXiv:2605.00361. Pedagogical Innovations in CS Education (IGI Global).
