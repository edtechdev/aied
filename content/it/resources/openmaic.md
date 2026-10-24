---
title: "OpenMAIC"
created: "2026-10-14T21:55:00-04:00"
type: resource
summary: "The open-source release of MAIC: a multi-agent classroom that turns a topic or document into slides, quizzes, interactive simulations and project-based activities, delivered by AI teachers and classmates."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
reviewed_by: [editor]
translation_of: resources/openmaic
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

**OpenMAIC** è la versione open-source dell'aula multiagente MAIC descritta in [[intelligent-tutoring|lo studio MAIC]]: descrivi un argomento o allega i tuoi materiali e genera una lezione completa — diapositive, quiz, simulazioni HTML interattive e attività basate su progetti — che poi viene erogata attraverso insegnanti di IA e compagni di classe di IA che parlano, disegnano su una lavagna e prendono parte alla discussione. È il codice dietro a un'aula che può essere eseguita anziché soltanto letta.

## Che cosa puoi farci

La generazione con un clic produce una lezione in pochi minuti a partire da un prompt o da un documento, audio o video caricato. Lo strato multiagente aggiunge la discussione in aula a cui lo studente può partecipare o in cui può essere chiamato, dibattiti a tavola rotonda tra personaggi con illustrazioni sulla lavagna, e domande e risposte a formato libero in cui l'insegnante risponde con diapositive o diagrammi. Le sessioni supportano presentazioni, quiz, simulazioni interattive e apprendimento basato su progetti (PBL), e si esportano come `.pptx` modificabile o `.html` interattivo. La versione 1.0.0 (agosto 2026) ha aggiunto un banco di lavoro per agenti: uno spazio di lavoro orientato alla chat che pianifica e revisiona corsi interi, sessioni durature supportate dal server che si possono annullare, riprendere o guidare, e 24 competenze integrate che coprono diapositive, quiz, elementi interattivi, immagini, video e voci. Un pacchetto `SKILL.md` consente a un ambiente di agenti di costruire aule partendo da un'app di messaggistica.

## A chi è rivolto

A insegnanti e team di corso che vogliono materiali generati che possano comunque modificare, a designer didattici che prototipano attività multiagente, e a sviluppatori che hanno bisogno di un'aula auto-ospitabile anziché di un prodotto ospitato. Le scuole possono distribuirla su Vercel o con Docker, e il progetto include una dimostrazione ospitata su open.maic.chat.

## Note

Con licenza MIT, con una guida utente in inglese e cinese e una comunità attiva su Discord e Feishu. È neutrale rispetto al modello: fornisci tu almeno una chiave di provider LLM, e i componenti locali opzionali (Lemonade per i modelli locali, FunASR per il riconoscimento vocale) permettono di eseguire offline una parte maggiore dello stack — quindi "gratis" descrive il software, non la bolletta dell'inferenza. L'articolo che ne è alla base è apparso sul *Journal of Computer Science and Technology* (2026, DOI 10.1007/s11390-025-6000-0), e il repository aveva superato le 38.000 stelle a settembre 2026.

## Concetti collegati

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]

