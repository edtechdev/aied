---
title: "LearnHarness"
created: "2026-11-02T05:55:00-05:00"
type: resource
summary: "Aplicație desktop gratuită și open-source (AGPL-3.0) în care agenți IA măsoară ce înțelege deja cursantul, planifică o hartă de dependențe, predau pas cu pas și adaptează practica."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

**LearnHarness** este o aplicație desktop pentru învățarea [[agentic-ai|asistată de agenți]], care organizează o lecție în jurul a [[prior-knowledge|ce înțelege deja un cursant]], nu în jurul unei liste de subiecte. Proiectul descrie patru mișcări: **măsoară**, sondând ideile de care depinde obiectivul pentru a găsi unde se termină înțelegerea; **planifică**, derivând o hartă de dependențe către obiectiv și arătând-o ca o hartă a lecției; **predă**, lucrând un pas de raționament o dată, printr-un ritm de predicție-explicație-verificare, astfel încât confuziile să fie reparate înainte de a se construi ceva pe ele; și **exersează**, un flux de probleme țintite spre dificultățile proprii ale cursantului.

## Ce poți face cu el

Intrarea distinctivă este câmpul de gândire: cursanții scriu sau dictează raționamentul și incertitudinea lor, în loc să răspundă doar, iar proiectul tratează asta ca pe felul în care agentul își imaginează raționamentul, nu ca pe un registru de corect/greșit. Poate și să cerceteze întrebări în fundal, să genereze explicații vizuale și să construiască demonstrații interactive.

Ce se acumulează este un [[knowledge-graph|graf de cunoștințe]] de propoziții și lanțuri de raționament, legate înapoi de sesiunile lor sursă și citite de agenții didactici și de practică ulteriori ca context; notițele pot fi importate. Proiectul spune că graful stochează idei și conexiuni, nu evaluări ale abilității.

## Pentru cine este

Cursanți autonomi care lucrează pe material dificil, și cadre didactice sau dezvoltatori care vor să vadă cum arată un [[intelligent-tutoring|tutor IA]] nativ-agentic atunci când prompturile și starea îi sunt inspectabile. Este scris în TypeScript, rulează din sursă, iar testele sale sunt documentate ca deterministe, fără apeluri la model.

## Note și precauții

Gratuit acoperă software-ul, nu inferența: cursanții își aduc cheile de furnizor, un abonament, un Claude Code CLI local sau orice endpoint compatibil OpenAI și plătesc furnizorului fără adaos; un contor live estimează doar costurile API cunoscute. Înregistrările, conversațiile și cheile rămân pe mașină ca fișiere simple, însă proiectul avertizează că stocarea locală nu înseamnă procesare offline, fiindcă cererile către model, dictarea opțională și cercetarea web ajung toate la servicii externe. Instalatorul pentru Windows x64 nu este semnat, așa că Windows va avertiza. Nu este raportat niciun studiu de eficacitate, deci argumentul se sprijină pe rațiunea declarată, nu pe rezultate măsurate; depozitul avea aproximativ 4.800 de stele la verificarea din 2 noiembrie 2026.

## Concepte conexe

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
