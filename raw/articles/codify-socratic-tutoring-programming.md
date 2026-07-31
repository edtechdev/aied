---
source_url: https://doi.org/10.32473/flairs.39.1.141554
ingested: 2026-05-17
sha256: b180a011a9ddacf58bdbf71bed13665d2697f1454f3284a010fb0bdd0caf378e
---

Codify: An Intelligent Socratic Tutoring System for Programming Education

Authors: Allan Ilyasov, Giulio Bardelli, Sebastian Torres, Fazel Keshtkar (St. John's University)
Conference: The International FLAIRS Conference Proceedings, Volume 39(1), May 2026
DOI: 10.32473/flairs.39.1.141554
License: CC BY-NC 4.0
Funding: NSF grant ID: 2101350

Abstract:
Programming education poses significant challenges for many students due to varying priorities. Traditional classroom instruction often lacks the scalability required to provide personalized support. This paper introduces AI Tutor, an intelligent tutoring system designed to enhance programming education through adaptive, conversational learning. Leveraging large language models (LLMs), competency tracking, and adaptive assessment, the system guides students using a Socratic teaching methodology that promotes discovery-based learning over direct answer generation. AI Tutor, a comprehensive platform, incorporates several key components: conversational tutoring, automated practice generation, competency modeling, code analysis, and gamified engagement mechanisms. The platform dynamically adapts to student performance by monitoring their topic-level competency scores. This allows it to adjust the difficulty of questions and the instructional scaffolding accordingly. Students interact with the tutor through a chat-based interface. The system analyzes their responses, updates mastery estimates, and generates targeted feedback.

System Architecture:
1. Conversational AI Tutor - Powered by LLMs deployed via AWS Bedrock. Uses Socratic pedagogy. Built on LangChain and Retrieval-Augmented Generation (RAG) for contextual memory and response coherence.
2. Practice Question Engine - Automatically generates programming exercises at three difficulty levels (beginner, intermediate, advanced). Dynamically tailored to student's detected competency.
3. Competency Tracking - Maintains topic-level competency scores (0-100) for each student. Updated based on interactions, quiz performance, and problem-solving behavior. Incorporates resistance curves.
4. Code Analysis & Feedback - Syntax validation, logic analysis, style feedback, debugging assistance. Does not correct code directly; provides educational hints and prompts for self-discovery.
5. Adaptive Learning & Gamification - Adaptive difficulty, XP, daily streaks, competitive leagues (Bronze → Diamond), multiple leaderboards.

Preliminary Observations:
Initial deployment in programming courses showed promising results for student engagement and perceived learning support. Students valued the conversational style and 24/7 availability as a supplement to traditional instruction. The Socratic approach encourages active reasoning.
