---
title: "Impact of Multimodal and Conversational AI on Learning Outcomes and Experience"
created: "2026-11-11T07:36:03-05:00"
updated: "2026-11-14T10:00:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** A [[rct|randomized controlled trial]] with 124 US adults who had majored in [[biology-education|biology]] compared three ways of learning meiosis from the same OpenStax textbook chapter: a conversational system that answered with interleaved text and the textbook's own figures, the same system with the figures stripped out, and a semantic search tool that only highlighted relevant passages. Students scored highest with the multimodal tutor, and the text-only chatbot produced the lowest scores even though students found it just as engaging and easy to use. The authors read the pattern as [[cognitive-offloading|reduced effort]] without the [[multimodal|visual-verbal integration]] that builds durable [[learning-gains|learning]], and warn that a fluent conversation can inflate how much students think they have understood.

## Key Findings

1. **Students learned more when the answers carried the textbook's figures.** Post-test scores out of 10 were 7.24 for the multimodal system, 6.55 for the text-only chatbot and 6.77 for search. Only the gap between the multimodal tutor and the text-only chatbot was statistically reliable.
2. **Search came close to the multimodal tutor.** Its average score sat between the two chatbots, and the difference from the multimodal system was not statistically reliable, so the study supports one clear pairwise advantage rather than a ranking of all three tools.
3. **The groups started on equal footing.** Pre-test scores were nearly identical across the three conditions, and [[prior-knowledge|prior knowledge]] still predicted who scored well afterwards, which means the condition difference was not a matter of who knew more going in.
4. **Satisfaction ran in the opposite direction from scores.** Both conversational systems were rated easier to navigate and more engaging than search, with no meaningful difference between them. The text-only chatbot therefore earned the same experience ratings as the best-performing system while posting the lowest score.
5. **Only the multimodal system made students report thinking harder than search did.** On the single item asking whether the tool made them think, the multimodal group held a clear advantage over search; the text-only group's positive trend was not reliable.
6. **Behavior logs separated the chatbots very little; the visible difference was images.** Multimodal users opened fewer citation links, asked fewer questions, spent less time in the system and edited notes less often, none of it reliably. What did differ was the answer itself: a multimodal conversation carried several unique textbook figures.
7. **Search users read more and chatted less.** They issued fewer queries than the chatbot groups, worked through many more results, and updated their notes more often, which the authors treat as a more traditional reading strategy.

## What the study did

Participants were recruited on Prolific: US residents aged 18 and over who had majored in biology and held at least a high school diploma, paid US\$20 for a session estimated at 75 minutes. Of 162 who completed, 17 failed attention checks, 18 showed insufficient activity during learning and 3 hit technical problems, leaving 124. In the final sample, 117 (94%) were 18–35 years old and 112 (90%) described basic familiarity with AI as end users.

After consent, participants were randomly assigned to one of the three systems and took a 10-question multiple-choice pre-test on cell division; anyone scoring below 4 was screened out. They then watched a 15-minute [[video-education|instructional video]] on meiosis and a two-minute video on their assigned system. During self-learning they worked from three predefined objectives with the OpenStax Biology textbook (Chapters 4–14, 447 pages) open in a document tab, a notepad occupying one-fourth of the interface, and, for the two chatbot conditions, a chat tab. The interface disabled the "Next" button for 15 minutes and advanced automatically at 25 minutes. The post-test held 10 multiple-choice questions tied to the three objectives, 7 of them visual-based, against 3 visual-based items on the pre-test.

The three conditions differ in two deliberate steps. The text-only system is the multimodal one with image retrieval, image prompts, the image search call and raw input images removed, which isolates [[multimodal|multimodality]]. Search keeps the same retrieval pipeline and the same [[llm|language model]] for selecting text and image blocks, but is stateless: it highlights up to ten results in the document and cannot synthesize an answer or carry context across turns, which isolates [[conversational-ai|conversationality]].

## Why the effect appears

The authors interpret the pattern through Cognitive Load Theory. Search carried the multimedia content that should generate germane load, but its stateless design imposed extraneous load: learners had to search repeatedly and stitch fragmented passages together. That combination produced the poorest experience ratings, while frequent note-taking may have kept its scores level with the text-only chatbot. The text-only system removed the search burden, which improved the experience, but stripped the visuals that would have driven integration, which left scores lowest. The multimodal system is the only condition that lowered extraneous load and raised germane load at once.

The paper's sharper claim concerns the gap between feeling and learning. Because the two chatbots were rated alike on ease, engagement, detail, helpfulness and clarity, conversational fluency appears to have been read by students as understanding. The authors call this a fluency effect: when the reduced effort of conversation is not matched by effortful visual-verbal integration, the ease of digesting an answer is mistaken for evidence of learning. The behavioral data are consistent with that reading but do not prove it, since none of the logged differences reached significance and the multimodal group's lower means are described as weak trends.

## Where it fits

The study extends MuDoC 1.0, reported earlier by Taneja and Goel, which raised engagement and trust but did not improve learning outcomes against a text-only baseline. The 2.0 pipeline adds a Reason-and-Act loop over GPT-4.1, hybrid dense-plus-keyword retrieval tuned separately for text (75% embedding weight) and images (75% BM25 weight), block-level in-text citations, and prompts written to Mayer's multimedia principles: functional rather than decorative visuals, complementary rather than redundant images, spatial proximity to the relevant text, and a simple-to-formal progression. The authors report that MuDoC has since been integrated into Jill Watson and deployed in classrooms at Georgia Institute of Technology. This page describes the arXiv preprint posted on 2 April 2026, not a peer-reviewed version.

The scope is narrow by design. Meiosis is a visually rich topic in a visually rich discipline, which is exactly the case where the multimodal condition should pay off and where a null result would have been informative. The paper is explicit that the design cannot say what would happen in domains where diagrams carry less of the content, and it points to [[metacognition|metacognitive]] [[prompt-engineering|prompting]] or deliberate friction as alternative ways to restore germane load there.

## What this means for practice

- **Instructors:** Do not treat high satisfaction as evidence of learning. The text-only chatbot matched the multimodal one on ease and engagement and still produced the lowest post-test mean, 6.55 against 7.24.
- **Designers:** In visually rich subjects, retrieve and render the source's own figures inside the answer rather than describing them in prose. The authors attribute the score gain to that visual channel rather than to any behavioral difference.
- **Administrators:** When a vendor or a department touts a tutoring chatbot, ask what the answer actually shows. A fluent, chatty interface is cheap to build; grounded figure retrieval and block-level citations are the parts that carried the learning gain here.
- **Instructors:** Expect students to under-use the textbook when the chatbot answers fluently. Multimodal users opened citation links less often than text-only users, a non-significant trend the authors read as reliance on the generated visuals instead of the source.
- **Researchers:** Measure outcomes and experience separately, and log behavior alongside both. The dissociation between the two is the finding here; a satisfaction survey alone would have ranked the three systems in the wrong order.

## Limitations

The study covers one domain and one biology topic, so the visual advantage is demonstrated for meiosis and not for subjects where diagrams do less work. Learning was tested immediately after a 15–25 minute session, with no delayed retention measure, so nothing here shows that the gain persists. The authors interpret the results through Cognitive Load Theory but did not measure cognitive load directly, which leaves the extraneous-versus-germane account an explanation rather than a tested mechanism. Participants were Prolific workers with biology majors rather than students in a course, and the paper notes that MuDoC's output depends on the quality of the source textbook and its figures. The authors report that 88% of participants finished before the time limit, which they take as evidence that the window was adequate.

## Citation

Taneja, K., Singh, A., & Goel, A. K. (2026). [*Impact of Multimodal and Conversational AI on Learning Outcomes and Experience*](https://arxiv.org/abs/2604.02221). arXiv preprint.
