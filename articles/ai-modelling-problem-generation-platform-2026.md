---
title: "Creating an AI-Powered Platform for Generating Modelling Problems"
created: "2026-09-01T14:00:00-04:00"
updated: "2026-09-01T15:00:00-04:00"
type: article
sources: ["raw/papers/ai-modelling-problem-generation-platform-2026.md"]
tags: ["math-education", "generative-ai", "learning-design", "curriculum-design", "intelligent-tutoring"]
---

## Overview

This study reports the design, development, and evaluation of an AI-powered platform that generates mathematical modelling problems and accompanying [[pedagogy|pedagogical]] recommendations for secondary school mathematics. The work addresses two practical gaps: teachers' shortage of suitable modelling resources and the tendency of existing [[generative-ai]] tools to produce conventional word problems or routine exercises rather than application-oriented tasks that build modelling competencies. The platform is grounded in the ADDIE (Analysis, Design, Development, Implementation, Evaluation) instructional-design model and combines seven established design principles for mathematical modelling instruction with [[rag|retrieval-augmented generation]] over expert-crafted exemplar tasks. The topic of direct variation served as an accessible case for an in-depth mixed-methods case study ([[mixed-methods-research]]).

The platform gives teachers a unified workspace: a central panel to specify generation requests (question type, free-text theme, and output language such as English, Chinese, or [[multilingual-learning|bilingual]]), a history panel for reusing prior resources, and an embedded conversational assistant with "chat" and "generate" modes. Text generation uses GPT-4.1 for curriculum-aligned problems and teacher guides, while DALL-E 3 produces contextually appropriate illustrations. A focal teaching intervention with 49 secondary students (Grades 10–12, Hong Kong) and an evaluation study with 36 in-service teachers generated both [[quantitative-research|quantitative]] and [[qualitative-research|qualitative]] evidence. The authors frame the platform as a human–AI co-design partner that reduces teachers' preparation workload while still requiring professional judgement to refine cognitive demand and classroom use of AI-generated content.

## Key Findings

- **Significant short-term [[learning-gains|learning gains]].** Students (n = 49) scored significantly higher on the post-test (median = 15.00) than the pre-test (median = 7.00), confirmed by a Wilcoxon signed-rank test (Z = 6.10, p < 0.001, large effect size r = 0.62). School-mathematics scores rose from a median of 5.00 to 8.00 (Z = 5.58, p < 0.001, r = 0.56), and modelling scores from 1.00 to 8.00 (Z = 5.95, p < 0.001, r = 0.60).
- **Modelling-specific competencies improved sharply.** Over 90% of students provided correct solutions for identifying assumptions in both linear and exponential contexts on the post-test (e.g., "the thickness of each book is the same"), and roughly 70–86% correctly identified relevant factors — though over a quarter of students still failed to reach correct solutions on some items.
- **Engagement dimensions operated differently.** Behavioural engagement significantly and positively predicted post-test scores (B = 1.279, p = 0.029, R² = 0.098), and emotional engagement positively predicted learning gains (B = 1.359, p = 0.037, R² = 0.090). In contrast, [[student-engagement|cognitive engagement]] showed no significant correlation with either post-test scores or learning gains.
- **Classroom discourse remained instructor-dominated.** Analysis of 151 speech turns across five lecture episodes (using a mathematics-discourse-in-instruction framework) showed the AI-generated problems structured an "I do, we do, you do" progression that supported naming, legitimation, examples, and tasks. However, opportunities for extended, student-initiated contributions remained limited, echoing patterns in Confucian-heritage mathematics classrooms.
- **Teachers rated resources positively but noted limitations.** All five evaluation dimensions exceeded a mean of 4.0 on a 5-point scale, with over 80% of teachers rating each as "good" or "very good." Qualitative analysis (inter-coder agreement 91.4%) surfaced strengths such as authentic everyday-life scenarios, clear structure, and stepwise scaffolding, alongside concerns about oversimplified assumptions, limited variety and difficulty, and occasional issues with data realism and AI-generated images.
- **Data realism was a recurrent weakness.** Both experts and teachers flagged that some numerical values were adjusted for computational convenience rather than realism — for example, a generated context referenced a petrol price of HKD 18 per litre when the market rate was around HKD 30 at the time, prompting recommendations to introduce randomness into data preparation.

## Implications for Practice

- **Use AI as a co-design partner, not a replacement.** The platform should be treated as a [[human-ai-collaboration]] partner that drafts candidate materials, while teachers retain responsibility for refining contextual realism, verifying correctness, and calibrating difficulty to students' ability levels.
- **Ground generation in design principles and exemplars.** Embedding seven modelling design principles and expert-crafted exemplar tasks into the [[rag|retrieval-augmented generation]] base produced curriculum-aligned, stepwise-scaffolded classroom materials — a design strategy teachers can demand from similar tools.
- **Scaffold and support modelling discourse.** Because classroom talk stayed teacher-led, future [[teacher-role|teacher]] guides should include suggested academically productive talk moves (e.g., pressing for reasoning and challenging ideas) to create more space for students to articulate, compare, and justify modelling assumptions.
- **Raise cognitive demand deliberately.** Only about half of students reported intense cognitive immersion (CE_4, 51.0%), suggesting that scaffolding designed for [[accessibility]] can undershoot cognitive engagement. Presenting alternative AI-generated datasets (with noise or outliers) and tasking students to justify data-handling choices could deepen engagement.
- **Add platform features for iteration and trust.** Recommended enhancements include teacher-editing interfaces, validation checklists (e.g., data-realism checks comparing generated values with plausible ranges from market prices and public statistics), in-platform reporting to flag [[hallucination-risk|hallucinations]], and options to adjust task complexity.

## Connected Concepts

- [[math-education]]
- [[generative-ai]]
- [[learning-design]]
- [[curriculum-design]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[prompt-engineering]]
- [[human-ai-collaboration]]
- [[teacher-role]]
- [[student-engagement]]
- [[problem-solving]]
- [[rag]]

## Connected Articles

- [[didactical-teacher-assistant-dimensional-modeling]] — Both papers build AI teacher assistants that ground instructional output in domain-specific design frameworks to support lesson preparation.
- [[dai-chatbots-problem-posing-primary-2026]] — Both examine generative-AI tools that pose mathematics problems, here extended from primary problem-posing to secondary mathematical modelling.
- [[ai-tpack-mathematics-teacher-education-2026]] — Both situate AI integration in secondary mathematics teaching and consider the teacher competencies and beliefs required to use AI tools effectively.

## Citation

[Creating an AI-powered platform for generating modelling problems: A case study on direct variation in secondary school mathematics](https://doi.org/10.1016/j.caeai.2026.100640) — Lo, C. K., Huang, X., Cheung, H. W., Yee, T. L., Bai, S., Chen, G., & Tlili, A. (2026). *Computers and Education: Artificial Intelligence*, 11, 100640.
