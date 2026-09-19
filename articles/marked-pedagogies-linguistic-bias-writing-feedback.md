---
title: "Marked Pedagogies: Examining Linguistic Biases in Personalized Automated Writing Feedback"
created: "2026-08-21T08:00:00-04:00"
updated: "2026-09-19T09:24:40-04:00"
type: article
technology: [generative-ai, personalized-learning]
assessment: [ai-feedback-quality, automated-assessment, feedback]
ethics: [bias-mitigation, equity-in-ai-education]
audience: [software developers]
research_method: [benchmark]
discipline: [writing education]
level: [k 12]
confidence: high
page_kind: [evaluation]
sources: [raw/papers/2603.12471.md]
---

> **Synthesis:** **LLM-powered personalized [[feedback]] is not language-neutral: it reproduces stereotype-aligned biases that change how feedback is written depending on presumed student attributes — even when the essay is identical.** "Marked Pedagogies" names the systematic instructional orientations four widely used [[llm|LLMs]] (GPT-4o, GPT-3.5-turbo, Llama-3.3 70B, Llama-3.1 8B) adopt when feedback is conditioned on gender, race/ethnicity, learning needs, achievement, or [[motivation]]. Using 600 eighth-grade persuasive essays from the PERSUADE dataset, the authors generated feedback under contrastive prompt conditions and adapted the Marked Words framework to detect lexical shifts. Feedback for students marked by race, language, or disability often exhibited **positive feedback bias** (overuse of praise) and **feedback withholding bias** (less substantive critique, assumptions of limited ability). Across attributes, models tailored not just what content was emphasized but also how writing was judged and how students were addressed — echoing long-documented patterns of teacher bias.

## Key Findings

- **[[personalized-learning|Personalization]] triggers stereotype-aligned shifts, not neutral adaptation.** Even with essay content held constant, merely [[prompt-engineering|prompting]] the model with a student's race, ethnicity, ELL designation, learning disability, achievement level, or motivation systematically shifted feedback language in stereotype-aligned directions.
- **Positive feedback bias and feedback withholding bias are the clearest harms.** Feedback for students marked by race, language, or disability overused praise, gave less substantive critique, and assumed limited ability — mirroring the same biases documented in human teachers (especially White teachers) when assessing minority students.
- **Models privilege standard academic [[writing-education|English]].** LLMs reproduce a "digital mono-languaging" that marginalizes [[multilingual-learning|multilingual]] learners who use other linguistic varieties in their writing.
- **The effect is robust but variable.** Concentration-metric regression confirmed that Marked Pedagogies differ significantly between marked and comparative prompts; effects were stronger and more consistent under explicit attribute prompts than under name-only prompting (e.g., Lakisha, Juan, Emily), which produced smaller, noisier signals.
- **Need for transparency and accountability.** The authors argue automated feedback tools must be scrutinized for these systematic [[pedagogy|pedagogical]] orientations, which risk discriminatory treatment of students at scale.

## What this means for practice

- **Software developers.** Audit automated feedback for distributional bias, not just accuracy: test how outputs shift across student descriptors with methods like the Marked Words / concentration approach, so stereotype-aligned praise and withheld critique surface before a tool ships.
- **Designers.** Treat "personalization" as a bias vector to control — decide deliberately which student attributes feed into feedback generation and monitor their effects, because personalization is exactly the mechanism through which these biases enter.
- **Software developers.** Guard against penalizing non-standard English: because the models privilege standard academic [[writing-education|academic English]], add checks against lowered expectations and harsher correction for ELL- and disability-designated and [[multilingual-learning|multilingual]] writers.

## Limitations

- The analysis drew on two writing assignments from a single dataset of 600 eighth-grade persuasive essays (PERSUADE), so how far the findings generalize to other genres, grade levels, and assignments is untested.
- Only four LLMs were evaluated (GPT-4o, GPT-3.5-turbo, Llama-3.3 70B, Llama-3.1 8B), and model-level differences were not quantified even though markedness appeared across all four.
- The attribute set was selective: attributes were assessed one at a time and drawn from U.S. stereotypes, leaving intersectional combinations and non-U.S. contexts unexamined.

## Connected Concepts

- [[writing-education]]
- [[automated-assessment]]
- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[feedback]]
- [[personalized-learning]]
- [[generative-ai]]
- [[k-12]]
- [[ai-feedback-quality]]

## Connected Articles

- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans
- [[gpt-human-rater-essay-assessment-2026]] — GPT vs human rater essay assessment
- [[ai-feedback-critical-thinking-writing-2026]] — AI feedback for critical thinking in writing

## Citation

Tan, M., Phalen, L., & Demszky, D. (2026). *[Marked pedagogies: Examining linguistic biases in personalized automated writing feedback](https://doi.org/10.1145/3785022.3785113)*. LAK 2026.
