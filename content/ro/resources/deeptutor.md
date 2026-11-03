---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Versiunea open-source a cadrului de tutorat agentic DeepTutor: un singur spațiu pentru tutorat, generare de întrebări, practică spre stăpânire, cercetare și vizualizare, cu memorie inspectabilă."
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
translation_of: resources/deeptutor
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

**DeepTutor** este implementarea cu sursă deschisă a cadrului de tutorat evaluat în [[intelligent-tutoring|studiul DeepTutor]] și a crescut mult peste aria acelei lucrări, devenind un spațiu general de învățare nativ-agentic. Tutoratul, rezolvarea de probleme, generarea de quiz-uri, practica spre stăpânire, cercetarea și vizualizarea împart un singur runtime de capabilități și un singur context de sesiune, așa că profilul de învățăcel construit în timpul rezolvării problemelor condiționează explicațiile și itemii de practică ce urmează.

## Ce poți face cu el

Zece moduri — Chat, Pune întrebări, Quiz, Cercetare, Vizualizare, Rezolvare, Studiu de curs, Traseu de stăpânire, Lectură imersivă și Vizionare imersivă — rulează pe același runtime, sprijinindu-se pe baze de cunoștințe reutilizabile, cărți, schițe, caiete, bănci de întrebări și personaje. Recuperarea este deliberat multi-motor: biblioteci RAG versionate peste LlamaIndex, PageIndex, GraphRAG, LightRAG sau un server LightRAG remote, plus o bază WeKnora găzduită local, o bibliotecă Tencent IMA sau MarginNote, sau un vault Obsidian legat. Memoria este inspectabilă, nu opacă: urmele L1, rezumatele de suprafață L2 și sinteza L3 sunt vizibile și editabile, cu un Graf de memorie care leagă fiecare rezumat de dovezile din spatele lui. Un binar `deeptutor` oferă un REPL de terminal și transmite NDJSON pentru orice agent care vrea să îl conducă drept instrument, iar o comunitate EduHub distribuie skill-uri instalabile.

## Pentru cine este

Cadre didactice și cercetători din învățământul superior care vor o versiune implementabilă a cadrului pe care îl raportează lucrarea, dezvoltatori care construiesc pe un runtime conectabil și cursanți autonomi dispuși să ruleze propria instanță. Documentația este la deeptutor.info.

## Note

Licențiat Apache 2.0, la versiunea 1.6.9 în septembrie 2026, cu aproximativ 40.000 de stele GitHub. Evaluarea publicată din spatele lui — o îmbunătățire medie de 10,8% pe metricile personalizate față de baze de referință puternice și un raționament agentic general cu 29,4% mai puternic pe cinci modele de bază, pe benchmark-ul TutorBench — este rezumată pe [[zhao-deeptutor-agentic-personalized-tutoring-2026|pagina articolului]], ale cărei limitări se aplică și aici. Ca la orice stivă IA cu sursă deschisă, tu furnizezi cheile furnizorilor de modele, iar o instalare desktop sau de server cere Python 3.11 și Node.

## Concepte conexe
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
