---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
type: resource
summary: "Otvoreni dijalekt Markdowna koji običnu tekstnu datoteku pretvara u interaktivni kolegij u pregledniku, s kvizovima i kodom koji se može pokrenuti, uz agenta za izradu kolegija."
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
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

**LiaScript** je prošireni dijalekt Markdowna i interpretator za njega. Jedna datoteka običnog teksta postaje interaktivni kolegij: isti se dokument može čitati kao pripovijest, izvoditi kao slajdovi ili proći kao kolegij, sve u pregledniku. Za pisanje ili čitanje ne treba ništa instalirati.

## Što možete raditi s tim

Kvizovi dolaze u oblicima koje nastavnik očekuje, uključujući višestruki odabir, matrična pitanja, unos teksta, padajuće izbornike i tekst s prazninama, napisani izravno u Markdownu. Blokovi koda mogu se učiniti uređivima i pokretljivima za tutorijale iz [[cs-education|programiranja]], a sustav makronaredbi obavija JavaScript knjižnice u blokove koji se mogu ponovno rabiti, pa interaktivni dijagrami ne traže kod od svakog autora. Kolegij se hostira gdje autor već drži tekst, bez usluge na koju bi bio vezan, i sve radi na strani klijenta, pa učitan kolegij radi i izvan mreže. LiaScript Exporter pakira ga kao SCORM za Moodle, ILIAS i druge [[edtech-platform|sustave za upravljanje učenjem]].

## Nastavni agent za izradu kolegija

Projekt objavljuje i **[nastavnog agenta](https://github.com/LiaScript/teaching-agent)** za izradu LiaScript kolegija, pod licencijom Boost Software License 1.0. Četiri agenta — za poučavanje, vizualni dizajn, pregled iz perspektive učenika i objavljivanje — rade oko jedne datoteke projekta koja drži stanje kolegija, u tijeku rada koji prvo definira: ciljevi, publika i didaktika rješavaju se prije nego se napiše ijedan materijal, a slijede provjere valjanosti. Nacrt se može pregledati iz perspektive imenovane persone učenika kako bi se provjerili [[cognitive-offloading|kognitivno opterećenje]] i pretpostavljeno prethodno znanje. Agent ne ovisi o uređivaču i iz jedne specifikacije generira konfiguracije za Claude Code, Copilot, Codex, Cursor ili web-razgovor, a repozitorij je ujedno razrađen primjer, s kolegijem od šest cjelina o direktivi NIS2 EU-a i dokumentom koji opisuje kako je nastao.

## Napomene i upozorenja

LiaScript je besplatan, bez plaćenog paketa i bez obveznog računa, i razvija se otvoreno pod licencijom BSD-3-Clause, pa ga ustanove mogu same hostati i mijenjati. Značajku Live Classroom vrijedi pogledati prije nego se na nju oslonite u velikom opsegu, jer se sinkronizacija u stvarnom vremenu oslanja na zajedničku uslugu, a ne na isključivo lokalno prikazivanje. Nastavni je agent mlad i slabo prihvaćen, pa ga tretirajte kao radni prototip, a ne kao podržan proizvod.

## Povezani pojmovi

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]
