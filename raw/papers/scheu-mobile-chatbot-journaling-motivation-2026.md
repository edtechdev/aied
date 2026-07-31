---
source_url: https://link.springer.com/content/pdf/10.1186/s41239-026-00589-7.pdf
ingested: 2026-05-07
sha256: 830109934464b30bab406c9533fef2d165a666f602fa025a2a60b6a3e80b2a68
---

# Designing a mobile chatbot-based learning journaling system for intrinsic motivation and engagement

**Authors:** Sven Scheu, Simone N. Loeffler, Alexander Maedche
**Source:** International Journal of Educational Technology in Higher Education, 2026, 23:15
**DOI:** 10.1186/s41239-026-00589-7
**Study Type:** Randomized 2×2 field experiment (N=179, 22 days)
**Date:** 2026-05-07 (ingested from PDF)

---

## Abstract

Journaling enables students to reflect on their learning processes and thereby strengthen their self-regulation, a key competency for meeting academic goals. Previous work has shown that students benefit from digital support when creating learning journals, such as through mobile learning journaling systems. Yet, a major issue with such systems is the rapid decline in user motivation and engagement, often occurring after only a brief period of use.

To address this challenge, we present a mobile chatbot-based learning journaling system that guides students through structured reflective journal entries and supports writing through an LLM-based journaling assistant. The novel system combines:

1. **An example-based built-in course** that teaches reflective journaling through modeled responses
2. **An interactive journaling assistant** that scaffolds students' entries by generating follow-up questions and rewrite suggestions

In a randomized field experiment with 179 students using the system over 22 days, we examined the impact of both design principles on intrinsic motivation and behavioral engagement.

**Key Finding:** While the built-in course can increase intrinsic motivation, we find no evidence that the LLM-based journaling assistant improves intrinsic motivation. Regarding engagement, both design principles provide benefits in different ways: the course shows a rather constant positive influence, whereas the LLM-based assistant appears to form a feedback loop with continued use, increasing engagement over time.

---

## Design Principles

### 1. Example-Based Built-In Course

A 7-day course integrated into the chatbot. Each session teaches one SRL topic via modeled example responses and metacognitive context. Time-gated to one session/day.

**Rationale:** Observation/imitation of proficient models builds SRL skills and provides initial external motivation before the SRL↔motivation reciprocal loop becomes self-sustaining.

### 2. LLM-Based Journaling Assistant

Optional writing aid (GPT-3.5-turbo-1106) activated by the user.

**Workflow:**
1. Summarizes the user's draft
2. Asks a clarifying follow-up question
3. Generates 2–3 alternative first-person formulations

User can edit, repeat, or discard suggestions.

**Rationale:** Provides adaptive scaffolding that matches current competence, preserving user autonomy and preventing cognitive offloading.

---

## Method

**Design:** 2×2 between-subjects factorial (Baseline | Assistant | Course | Course+Assistant)
**Participants:** 179 students (German technical university)
**Duration:** ~22 days of voluntary app use
**Measures:**
- Intrinsic Motivation Inventory (IMI): enjoyment, perceived choice, pressure, competence, effort
- LIST-K questionnaire (SRL: cognition, metacognition, internal/external resources)
- Behavioral Engagement: characters written per prompt (7,286 responses)

---

## Results Summary

### Intrinsic Motivation (H1 & H2)

| Feature | Hypothesis | Result |
|---|---|---|
| **Course** | H1: increases intrinsic motivation | **SUPPORTED** — small but significant increase in enjoyment (η²=.03) and perceived competence (η²=.04) |
| **Assistant** | H2: increases intrinsic motivation | **NOT SUPPORTED** — no significant effect on enjoyment (p=.67) or perceived competence (p=.95) |

### Behavioral Engagement (H3 & H4)

| Feature | Hypothesis | Result |
|---|---|---|
| **Course** | H3: increases engagement | **SUPPORTED** — constant positive influence. Users wrote more (mean 79.26 vs 51.21 chars). Effect not correlated with course completion; access alone increased output. |
| **Assistant** | H4: increases engagement | **SUPPORTED** — mean written characters increased over time via feedback loop (regression coeff 0.24). Engagement *grew* with continued use, unlike course's constant effect. |

### SRL Skill Development
- Internal resources: Slight decline across all groups (expected, as students who need SRL skills improved them)
- Cognition, metacognition, external resources: Stable across survey waves
- Significant increase in external resources from pre to post: possibly due to recognition of app as external tool

---

## Discussion Highlights

> "While our results indicate that the built-in course can increase intrinsic motivation, we find no evidence that the LLM-based journaling assistant improves intrinsic motivation."

> "The LLM-based assistant appears to form a feedback loop with continued use, increasing engagement over time."

The course works via direct skill transfer and external motivation scaffolding; the assistant works via a feedback loop where increased use → more engagement → more assistant use. These are distinct mechanisms.

---

## System Features

- **Summaries:** Auto-generated recap of last 5 entries + highlighted focus topics (via GPT-3.5-turbo)
- **Notifications:** Reminder at 9 PM if no entry recorded
- **Templates:** 7 topic-based templates + 1 general fallback template

---

''This is a summary of the full paper extracted from the PDF. For complete statistical tables, qualitative analyses, and appendices, refer to the original PDF at the DOI link above.''
