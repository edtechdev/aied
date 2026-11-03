---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Versiunea open-source a MAIC: o clasă multi-agent care transformă un subiect sau un document în slide-uri, quiz-uri, simulări interactive și activități pe proiect, predate de profesori și colegi IA."
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
translation_of: resources/openmaic
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

**OpenMAIC** este versiunea cu sursă deschisă a clasei multi-agent MAIC descrise în [[intelligent-tutoring|studiul MAIC]]: descrii un subiect sau atașezi propriile materiale și ea generează o lecție completă — slide-uri, quiz-uri, simulări HTML interactive și activități pe proiect —, apoi o livrează prin profesori IA și colegi IA care vorbesc, desenează pe o tablă albă și iau parte la discuție. Este codul din spatele unei clase care poate fi rulată, nu doar citită.

## Ce poți face cu el

Generarea cu un clic produce o lecție în câteva minute, dintr-un prompt sau dintr-un document, audio sau video încărcat. Stratul multi-agent adaugă discuția de clasă la care cursantul poate participa sau fi chemat, dezbateri în masă rotundă între personaje, cu ilustrații pe tabla albă, și întrebări și răspunsuri libere, unde profesorul răspunde cu slide-uri sau diagrame. Sesiunile suportă prezentări, quiz-uri, simulări interactive și PBL, și se exportă ca `.pptx` editabil sau `.html` interactiv. Versiunea 1.0.0 (august 2026) a adăugat un banc de lucru pentru agenți: un spațiu care pornește de la chat, planifică și revizuiește cursuri întregi, sesiuni durabile pe server pe care le poți anula, relua sau dirija, și 24 de competențe încorporate care acoperă slide-uri, quiz-uri, interactive, imagini, video și voci. Un pachet `SKILL.md` permite unui ham de agenți să construiască clase dintr-o aplicație de mesagerie.

## Pentru cine este

Instructori și echipe de cursuri care vor materiale generate pe care să le poată edita în continuare, designeri instrucționali care prototipează activități multi-agent și dezvoltatori care au nevoie de o clasă auto-găzduibilă, nu de un produs găzduit. Școlile îl pot implementa pe Vercel sau cu Docker, iar proiectul livrează o demonstrație găzduită la open.maic.chat.

## Note

Licențiat MIT, cu un ghid de utilizare în engleză și chineză și o comunitate activă pe Discord și Feishu. Este neutru față de model: tu furnizezi cel puțin o cheie de furnizor LLM, iar componentele locale opționale (Lemonade pentru modele locale, FunASR pentru recunoașterea vocală) îți permit să rulezi mai mult din stivă offline — așa că „gratuit” descrie software-ul, nu factura de inferență. Lucrarea din spatele lui a apărut în *Journal of Computer Science and Technology* (2026, DOI 10.1007/s11390-025-6000-0), iar depozitul avea peste 38.000 de stele în septembrie 2026.

## Concepte conexe

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]
