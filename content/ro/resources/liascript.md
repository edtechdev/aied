---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
type: resource
summary: "Un dialect Markdown deschis care transformă un fișier text într-un curs interactiv în browser, cu quiz-uri și cod rulabil, plus un asistent multi-agent pentru construirea cursurilor."
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
translation_of: resources/liascript
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

**LiaScript** este un dialect Markdown extins plus un interpretor pentru el. Un singur fișier text devine un curs interactiv: același document poate fi citit ca narațiune, jucat ca slide-uri sau parcurs ca un curs, totul în browser. Nu trebuie instalat nimic pentru a scrie sau a citi unul.

## Ce poți face cu el

Quiz-urile vin în formele pe care le așteaptă un profesor, inclusiv variante multiple, întrebări matrice, introducere de text, liste derulante și texte cu lacune, scrise direct în Markdown. Blocurile de cod pot fi făcute editabile și rulabile pentru tutoriale de [[cs-education|programare]], iar un sistem de macrocomenzi împachetează biblioteci JavaScript în blocuri reutilizabile, astfel încât diagramele interactive să nu ceară cod de la fiecare autor. Un curs este găzduit oriunde autorul își ține deja textul, fără un serviciu de care să fie legat, și totul rulează pe partea clientului, așa că un curs încărcat funcționează offline. LiaScript Exporter împachetează unul ca SCORM pentru Moodle, ILIAS și alte [[edtech-platform|sisteme de management al învățării]].

## Agentul didactic pentru construirea cursurilor

Proiectul publică și un **[agent didactic](https://github.com/LiaScript/teaching-agent)** pentru autorarea cursurilor LiaScript, licențiat sub Boost Software License 1.0. Patru agenți — pentru predare, design vizual, revizuire din partea cursantului și publicare — lucrează în jurul unui singur fișier de proiect care ține starea cursului, cu un flux care definește mai întâi: obiectivele, publicul și didactica sunt stabilite înainte de a se scrie vreun material, iar porțile de validare urmează. O schiță poate fi revizuită din perspectiva unui cursant numit, pentru a verifica [[cognitive-offloading|încărcarea cognitivă]] și cunoștințele anterioare presupuse. Agentul este agnostic față de editor, generând configurații pentru Claude Code, Copilot, Codex, Cursor sau un chat web pornind de la o singură specificație, iar depozitul servește și ca exemplu lucrat, ținând un curs de șase unități despre Directiva NIS2 a UE și un document care descrie cum a fost produs.

## Note și precauții

LiaScript este gratuit, fără nivel plătit și fără cerință de cont, și este dezvoltat deschis sub BSD-3-Clause, așa că instituțiile îl pot găzdui singure și modifica. Funcția Live Classroom merită o privire înainte de a te baza pe ea la scară, fiindcă sincronizarea în timp real folosește un serviciu partajat, nu doar randare locală. Agentul didactic este tânăr și puțin adoptat, așa că tratează-l ca prototip funcțional, nu ca produs cu suport.

## Concepte conexe

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]
