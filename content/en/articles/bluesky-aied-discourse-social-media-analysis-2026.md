---
title: "Analyzing Artificial Intelligence in Education Discourse on Bluesky: A Computational Social Media Analysis"
created: "2026-10-16T07:00:00-04:00"
updated: "2026-10-16T07:00:00-04:00"
type: article
sources: ['raw/papers/bluesky-aied-discourse-social-media-analysis-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [secondary analysis, thematic analysis]
level: [higher ed, k 12]
audience: [instructors, researchers, policymakers]
technology: [generative-ai, llm, conversational-ai]
foundations: [academic-integrity, ai-literacy, teacher-role]
methods: [mixed-methods-research, qualitative-research, quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-16"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Geraili Meykola and colleagues analyzed 98,730 English-language Bluesky posts published between June 2023 and September 2025 to map how the public discusses [[ai-education|artificial intelligence in education]] (AIEd). Combining computational topic modeling and sentiment classification with [[qualitative-research|qualitative]] coding under a Computational Grounded Theory framework, they found sentiment toward AIEd remained predominantly negative or neutral across the whole period, rising toward neutral only in brief windows. Five thematic categories emerged — creative and entertainment applications, instructional support, academic integrity, ethical and policy concerns, and technical capabilities — and integrating topic, sentiment, temporal, and engagement analyses produced seven recurring discourse patterns, five of them critical. Because this is a preprint rather than a peer-reviewed article, its exploratory results are best read as a signal about public attitudes rather than settled evidence.

## Key Findings

1. Across 98,730 English-language posts collected between June 2023 and September 2025, sentiment toward AIEd remained predominantly negative; after a sharp mid-2023 decline it stabilized between −0.10 and −0.15 through 2024, and the 30-day rolling average rarely crossed the neutral threshold.
2. Post volume moved inversely to sentiment: daily volume grew steadily through 2024 and 2025, frequently exceeding 100 posts and peaking above 700 by mid-2025, so rising engagement reflected growing attention rather than growing approval.
3. Topic modeling retained the 30 largest clusters (Topics 0–29, about 45% of the dataset, n = 23,117) and grouped them into five categories: creative and entertainment uses, instructional support, academic integrity, ethical and policy concerns, and technical capabilities.
4. Academic integrity topics produced the strongest negative sentiment in the corpus (Topics 14 and 15, n = 443 and n = 413, often below −0.40), while creative applications produced the most positive (Topic 29, approximately +0.40).
5. Integrating topic, sentiment, temporal, and engagement analyses yielded seven recurring discourse patterns — two relatively positive (productive educational use and creative applications) and five critical (academic integrity, [[ethics]] and governance, effects on student learning, AI system limitations, and educator replacement or burnout).
6. Among the 200 most engaged posts — each liked more than 400 times, reposted at least 78 times, and carrying seven or more replies — the dominant tone was critical or cautionary, with calls for ethical use, clear policy, and considered integration rather than unrestricted adoption.
7. A direct model comparison showed RoBERTa and VADER disagreeing sharply on the same post: "I'm an optimist, but AI is effectively ruining any hope I have for the future…" scored 0.9413 (strongly positive) under VADER and −0.9209 (strongly negative) under RoBERTa.

## A negative baseline that only briefly lifted

The analyzed corpus came from a much larger pool: an initial 1,844,651 posts containing an AI-related keyword were narrowed to 100,967 education-related posts, and language filtering left a final 98,730 English-language posts across 18 variables. Sentiment classified by RoBERTa stayed negative for almost the entire window, and the single clearest exception was December 2024, when sentiment approached neutral before falling again in early 2025 and stabilizing near −0.10 through mid-2025. Volume ran the other way throughout — the authors connect the growth to expanding public engagement with AIEd even as the overall tone remained negative, and note that the platform itself expanded from roughly three million users in late 2023 to nearly 41 million registered users by the end of 2025. This pattern matters for anyone weighing [[trust]] in [[generative-ai]]: on Bluesky at least, more discussion did not mean more acceptance.

## Five themes and the creative–educational split

The largest single cluster was purely technical — Topic 0, on model performance and features (n = 8,300) — followed by Topic 1 on models and research (n = 1,627) and Topic 2 on [[conversational-ai|chatbots]] and mental-health interactions (n = 1,263). Grouping the topics produced five conceptual categories whose sentiment split along lines of use. Creative and entertainment uses (Topics 5, 10, 12, 19, 21, 26, 27, and 29, ranging from 236 to 702 posts) were the most positively received, driven by image generation, digital art, music, anime-style illustration, voice synthesis, and video. Technical discussions stayed largely neutral to mildly positive. By contrast, the instructional cluster (Topics 4, 11, 13, 16, 17, 18, and 25, with Topic 4 the largest at n = 1,015) ranged from neutral to moderately negative, capturing writing support, homework help, essay generation, and the difficulty of distinguishing authentic student work from AI-generated text. The authors frame this as a standing tension: [[llm]]-based tools are woven into ordinary teaching and learning, yet their academic value is met with caution.

## Academic integrity as the sharpest fault line

The strongest negative sentiment in the entire dataset came from the two academic-integrity topics, Topics 14 (n = 443) and 15 (n = 413), which often fell below −0.40 and covered plagiarism detection, institutional monitoring, and misconduct. Coding of the 100 most negative posts found [[academic-integrity]] the dominant theme, with subthemes including plagiarism, fabricated research, cheating, and the use of AI detectors. Ethical and societal concerns came second, linking AI to bias, environmental impact, exploitation, and misinformation. Users described feeling like "cops instead of instructors," and one wrote that "GPT detectors have significant false positive rates that are biased against non-native English speakers" — a concrete statement of the [[ai-detection]] and fairness problem. Concern about [[hallucination-risk]] and unreliable outputs ran through the technical-limitation topics, and demands for clearer institutional policy recurred across the corpus, pointing to [[educational-policy-ai]] and [[governance]] as live public expectations.

## Engagement rewards caution, not enthusiasm

The study also scraped 1,000 of the most engaged AI-and-education posts; the single most engaged post was liked 15,315 times, reposted 1,587 times, and received 5,569 replies. From that set, the top 200 most engaged posts were coded qualitatively. Their themes were overwhelmingly critical: effects on student learning (AI replacing the cognitive work students need to do), academic integrity, quality and safety concerns, ethical and institutional accountability, and explicit resistance to uncritical adoption. Posts highlighting benefits did appear, but drew less engagement — the authors conclude that risk- and challenge-oriented discussions generated the strongest reactions, an audience signal worth weighing for anyone communicating about [[student-ai-interaction]].

## Why Bluesky reads more negative than X

The authors note that their findings contrast sharply with several X-based studies that reported neutral or positive sentiment toward AIEd, even though the topics discussed — academic integrity, ethical use, reliability, and teacher burnout — overlap substantially. They offer two explanations: methodological precision, since many prior studies used lexicon-based tools such as VADER that misclassified context-dense educational posts, whereas the fine-tuned RoBERTa model was more accurate; and platform infrastructure and norms, since Bluesky's decentralized AT Protocol architecture may attract a user base more critical of corporate technology deployment and central authority. That second claim is interpretive rather than directly measured, and it is where the preprint leans hardest on reasoning. Even so, the substantive concerns it surfaces — over-reliance, eroded [[critical-thinking]], student [[well-being]], and fear of educator replacement — echo the wider debate around [[ai-literacy]] and the shifting [[teacher-role]].

## What this means for practice

- **Instructors.** Treat academic integrity as a design problem rather than only a policing problem; the most negative discourse centered on detection and surveillance, and users repeatedly argued that [[assessment|assessment design]] matters more than unreliable AI detectors.
- **Instructors.** Build activities that keep the cognitive work with the student, since the highest-engagement criticisms targeted tasks where AI completes the thinking instead of supporting it.
- **Administrators and institutions.** Publish clear, explicit AI-use policies; calls for transparency, [[privacy]] protection, and stated limits on institutional AI use recurred throughout the corpus.
- **Policymakers.** Note that discussion volume grew while sentiment did not improve, even after major guidance from the U.S. Department of Education, a White House executive order, and UNESCO frameworks — suggesting that announcements alone do not shift public confidence.
- **[[educational-technology-developers|Educational technology developers]].** Address the quality and reliability concerns users raise most often, such as biased, hallucinated, or inaccurate outputs, and be open about how data is used, since trust and perceived responsibility for these systems sit at the center of the discourse.

## Limitations

- This page summarizes a preprint (Research Square, posted October 9, 2026) that has not been peer reviewed; its exploratory findings should not be treated as established evidence.
- The analysis is post-level only. It does not model interactions among users and posts, so the relational structure of the discourse is left unexamined.
- Keyword-based filtering may admit false positives (posts that contain AI and education keywords but are not about AIEd) and exclude relevant posts that lack the selected keywords.
- User-level attributes such as occupation, geographic location, and professional background were unavailable, so educators could not be reliably distinguished from other users.
- The study period overlaps Bluesky's early growth stage, so early discourse may over-represent the perspectives of early adopters.
- Sentiment labels do not always capture an author's underlying stance, particularly in posts containing sarcasm, mixed sentiment, or context-dependent opinions.

## Citation


Geraili Meykola, K., Taheri, R., Ellingsen, A., Dadgostari, F., Clark, J., & Nazemi, N. (2026). [*Analyzing Artificial Intelligence in Education Discourse on Bluesky: A Computational Social Media Analysis*](https://doi.org/10.21203/rs.3.rs-11013514/v1). Research Square preprint.
