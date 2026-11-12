---
title: "Impact of Multimodal and Conversational AI on Learning Outcomes and Experience"
created: "2026-11-11T07:36:03-05:00"
updated: "2026-11-11T08:40:41-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors]
sources: ['raw/papers/taneja-multimodal-conversational-ai-learning-2026.md']
source_url: "https://arxiv.org/abs/2604.02221"
source_depth: full text
confidence: high
foundations: [cognitive-offloading]
pedagogy: [prior-knowledge, student-engagement]
technology: [multimodal, conversational-ai, generative-ai, rag]
assessment: [learning-gains, feedback]
discipline: [biology education]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** A [[rct|randomized controlled trial]] with 124 US adults who had majored in [[biology-education|biology]] compared three ways of learning meiosis from the same OpenStax textbook chapter: a document-grounded conversational system that answered with interleaved text and textbook figures (MuDoC, n=42), an otherwise identical text-only system (TexDoC, n=41), and a semantic search-and-highlight interface (DocSearch, n=41). MuDoC produced the highest post-test score, 7.24 out of 10 against 6.55 for TexDoC, a difference that survived Tukey correction (p=.010). The text-only chatbot was rated as engaging and as easy to use as the multimodal one, yet it produced the lowest scores. The authors read this as [[cognitive-offloading|reduced effort]] without the [[multimodal|visual-verbal integration]] that builds durable [[learning-gains|learning]], and warn that fluent conversation can inflate perceived understanding.

## Key Findings

1. **Multimodal answers beat text-only answers on the post-test.** Mean scores out of 10 were 7.24 (SD 1.15) for MuDoC, 6.55 (1.11) for TexDoC and 6.77 (0.93) for DocSearch; a one-way ANOVA gave F(2,121)=4.60, p=.012, η²=0.071, and a Tukey HSD comparison put MuDoC above TexDoC at p=.010 (diff=0.69).
2. **MuDoC's advantage over search did not reach significance.** The MuDoC–DocSearch difference was diff=0.47 with p=.11 in the same Tukey test, so the paper reports one significant pairwise contrast, not a clean ordering of all three systems.
3. **The groups began with equivalent [[prior-knowledge|prior knowledge]].** Pre-test means were 6.92 (1.25), 6.91 (1.32) and 6.98 (1.29), with F(2,121)=0.27, p=.97 and η²<.001. Prior knowledge still predicted post-test performance in an OLS model that controlled for condition (β=0.21, p=.005).
4. **Satisfaction ran in the opposite direction from scores.** Both conversational systems were rated easier to navigate (p=.002, η²=.09) and more engaging (p<.001, η²=.12) than DocSearch, with no significant difference between MuDoC and TexDoC. TexDoC therefore earned the same experience ratings as the highest-scoring system while posting the lowest post-test mean.
5. **Only the multimodal system made students report thinking harder than search did.** The "makes me think" item differed across groups (p=.012, η²=.06); in Dunn's test only MuDoC held a significant advantage over DocSearch (p=.010), while TexDoC's positive trend did not reach significance (p=.163).
6. **Logged behavior showed no significant differences between the two chatbots.** MuDoC users opened fewer citation links to the textbook (p=.08, d=-0.38), asked fewer questions (p=.27, d=-0.36), spent less time with the system (p=.31, d=-0.11), spent a lower share of time on the textbook tab (p=.60, d=-0.12) and edited notes less often (p=.80, d=-0.06); its responses were shorter but not significantly so (p=0.10, d=-0.36). The visible difference was visual: an average MuDoC conversation carried M=3.1 unique images (SD=1.2) and M=6.2 images in total (SD=2.3).
7. **Search users searched less and wrote more notes.** DocSearch participants made M=5.27 queries (SD=2.74) and examined M=18.8 results (SD=10.1), significantly fewer queries than the chatbot groups (p<.001, d=-0.63) and significantly more note updates (p=.008, d=0.50), which the authors treat as a more traditional reading strategy.

## What the study did

Participants were recruited on Prolific: US residents aged 18 and over who had majored in biology and held at least a high school diploma, paid US\$20 for a session estimated at 75 minutes. Of 162 who completed, 17 failed attention checks, 18 showed insufficient activity during learning and 3 hit technical problems, leaving 124. In the final sample, 117 (94%) were 18–35 years old and 112 (90%) described basic familiarity with AI as end users.

After consent, participants were randomly assigned to one of the three systems and took a 10-question multiple-choice pre-test on cell division; anyone scoring below 4 was screened out. They then watched a 15-minute [[video-education|instructional video]] on meiosis and a two-minute video on their assigned system. During self-learning they worked from three predefined objectives with the OpenStax Biology textbook (Chapters 4–14, 447 pages) open in a document tab, a notepad occupying one-fourth of the interface, and, for the two chatbot conditions, a chat tab. The interface disabled the "Next" button for 15 minutes and advanced automatically at 25 minutes. The post-test held 10 multiple-choice questions tied to the three objectives, 7 of them visual-based, against 3 visual-based items on the pre-test.

The three conditions differ in two deliberate steps. TexDoC is MuDoC with image retrieval, image prompts, the image search call and raw input images removed, which isolates [[multimodal|multimodality]]. DocSearch keeps the same retrieval pipeline and the same [[llm|language model]] for selecting text and image blocks, but is stateless: it highlights up to ten results in the document and cannot synthesize an answer or carry context across turns, which isolates [[conversational-ai|conversationality]].

## Why the effect appears

The authors interpret the pattern through Cognitive Load Theory. DocSearch carried the multimedia content that should generate germane load, but its stateless search imposed extraneous load: learners had to search repeatedly and stitch fragmented passages together. That combination produced the poorest experience ratings, while frequent note-taking (M=11.4 updates, against 7.1 for MuDoC and 7.5 for TexDoC) may have kept its scores level with TexDoC. TexDoC removed the search burden, which improved the experience, but stripped the visuals that would have driven integration, which left scores lowest. MuDoC is the only condition that lowered extraneous load and raised germane load at once.

The paper's sharper claim concerns the gap between feeling and learning. Because MuDoC and TexDoC were rated alike on ease, engagement, detail, helpfulness and clarity, conversational fluency appears to have been read by students as understanding. The authors call this a fluency effect: when reduced effort from conversation is not matched by effortful visual-verbal integration, the ease of digesting an answer is mistaken for evidence of learning. The behavioral data are consistent with that reading but do not prove it, since none of the logged differences reached significance and the MuDoC group's lower means are described as weak trends.

## Where it fits

The study extends MuDoC 1.0, reported earlier by Taneja and Goel, which raised engagement and trust but did not improve learning outcomes against a text-only baseline. The 2.0 pipeline adds a Reason-and-Act loop over GPT-4.1, hybrid dense-plus-keyword retrieval tuned separately for text (75% embedding weight) and images (75% BM25 weight), block-level in-text citations, and prompts written to Mayer's multimedia principles: functional rather than decorative visuals, complementary rather than redundant images, spatial proximity to the relevant text, and a simple-to-formal progression. The authors report that MuDoC has since been integrated into Jill Watson and deployed in classrooms at Georgia Institute of Technology. This page describes the arXiv preprint posted on 2 April 2026, not a peer-reviewed version.

The scope is narrow by design. Meiosis is a visually rich topic in a visually rich discipline, which is exactly the case where the multimodal condition should pay off and where a null result would have been informative. The paper is explicit that the design cannot say what would happen in domains where diagrams carry less of the content, and it points to [[metacognition|metacognitive]] [[prompt-engineering|prompting]] or deliberate friction as alternative ways to restore germane load there.

## What this means for practice

- **Instructors:** Do not treat high satisfaction as evidence of learning. The text-only chatbot matched the multimodal one on ease and engagement and still produced the lowest post-test mean (6.55 against 7.24).
- **Designers:** In visually rich subjects, retrieve and render the source's own figures inside the answer rather than describing them in prose; MuDoC conversations averaged 3.1 unique images, and the authors attribute the score gain to that visual channel rather than to any behavioral difference.
- **Designers:** Keep answers grounded in identifiable source blocks. Block-level citations replaced embedding-based attribution in this version and were judged more reliable, and students in the text-only condition named transparency as its main strength.
- **Instructors:** Expect students to under-use the textbook when the chatbot answers fluently. MuDoC users opened citation links less often than TexDoC users (p=.08), a non-significant trend the authors read as reliance on the generated visuals instead of the source.
- **Researchers:** Measure outcomes and experience separately, and log behavior alongside both. The dissociation between the two is the finding here; a satisfaction survey alone would have ranked the three systems in the wrong order.

## Limitations

The study covers one domain and one biology topic, so the visual advantage is demonstrated for meiosis and not for subjects where diagrams do less work. Learning was tested immediately after a 15–25 minute session, with no delayed retention measure, so nothing here shows that the gain persists. The authors interpret the results through Cognitive Load Theory but did not measure cognitive load directly, which leaves the extraneous-versus-germane account an explanation rather than a tested mechanism. Participants were Prolific workers with biology majors rather than students in a course, and the paper notes that MuDoC's output depends on the quality of the source textbook and its figures. The authors report that 88% of participants finished before the time limit, which they take as evidence that the window was adequate.

## Citation

Taneja, K., Singh, A., & Goel, A. K. (2026). [*Impact of Multimodal and Conversational AI on Learning Outcomes and Experience*](https://arxiv.org/abs/2604.02221). arXiv preprint.
