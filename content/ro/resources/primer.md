---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Un sistem de autorare open-source de la Generative AI Labs din Wharton care transformă un interviu structurat cu un educator într-o simulare de învățare adaptivă și rulabilă, cu propriul mentor și agenți de practică și feedback."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Primer este un [[open-source|sistem open-source]] pentru construirea unei [[simulation|simulări]] educaționale prin descrierea unei lecții către o IA, în loc de programarea ei. Judecata educatorului stabilește ce predă simularea: un interviu scoate la iveală ce știe instructorul despre lecție și despre studenți, un document de proiectare face această cunoaștere verificabilă, iar nimic nu este construit până când educatorul nu îl aprobă.

## Ce poți face cu el

Interviul merge cu o întrebare pe rând: lecția, nivelul și cunoștințele anterioare ale studenților, concepțiile greșite frecvente, abordarea instructorului și modul în care va fi evaluat succesul. Educatorii pot vorbi sau scrie și pot încărca programe analitice, planuri de lecție sau grile de evaluare. Ceea ce se întoarce este un document de proiectare care acoperă obiectivele, fluxul scenariului, personajele, mizele și logica de adaptare, pe care educatorul îl revizuiește și îl aprobă așa cum ar face cu un plan de lecție. Apoi cinci agenți îl construiesc: Intake, Design, Casting Director, Image Generation și Experience Builder, care asamblează rezultatul pentru un singur student sau pentru o clasă întreagă.

În timpul rulării, trei agenți stau față în față cu studentul. Un mentor activează cunoștințele anterioare și scoate la iveală concepțiile greșite. Un agent de practică joacă rolul unui partener de joc de rol sau al unui elev în exercițiul de teachback, în care studentul explică un concept și își revizuiește explicația când este întrebat. Un agent de feedback lucrează pe transcriere, discutând momente specifice și modul în care învățarea se transferă dincolo de scenariu. Fiecare agent are un personaj în lume și un strat instrucțional care urmărește obiectivele și adună dovezi, iar educatorul primește rapoarte individuale și agregate.

## Pentru cine este

Instructorii, designerii instrucționali și dezvoltatorii de personal didactic pot descrie o lecție în detaliu fără să vrea să scrie cod pentru ea. Cercetătorii care studiază autorarea cu educatorul în buclă sau [[agentic-ai|fluxurile de lucru multi-agent]] primesc un sistem funcțional de inspectat, iar dezvoltatorii îl pot extinde, pentru că prompturile, șabloanele, listele de verificare, modelele de orchestrare și codul TypeScript sunt toate open source.

## Note și precauții

Autorii numesc Primer un prototip experimental, nu un produs de sală de clasă verificat. Nu a fost evaluat ca intervenție de învățare în săli de clasă și nimeni nu l-a revizuit pentru FERPA, COPPA, legislația statală privind confidențialitatea studenților sau politica districtului, așa că o instituție care îl folosește cu studenți își asumă această revizuire. Software-ul este licențiat MIT și gratuit, dar rularea unei simulări necesită acces la un model, ceea ce costă bani. Pentru că este independent de model și rulează pe modele locale sau cu ponderi deschise, poate fi implementat acolo unde regulile de confidențialitate sunt mai stricte. Un white paper despre arhitectură și prompturi este linkat de pe pagina proiectului. Repozitoriul avea 98 de stele și 16 fork-uri când a fost verificat în noiembrie 2026.

## Concepte conexe

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
