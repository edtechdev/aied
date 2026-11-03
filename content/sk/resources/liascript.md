---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
type: resource
summary: "Otvorený dialekt Markdownu, ktorý mení čistý textový súbor na interaktívny kurz v prehliadači, s kvízmi a spustiteľným kódom, plus multiagentný asistent na tvorbu kurzov."
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
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

**LiaScript** je rozšírený dialekt Markdownu a jeho interpret. Jeden čistý textový súbor sa stane interaktívnym kurzom: ten istý dokument sa dá čítať ako rozprávanie, prehrávať ako slajdy alebo prejsť ako kurz, všetko v prehliadači. Na písanie ani čítanie netreba nič inštalovať.

## Čo s tým môžete robiť

Kvízy prichádzajú vo formách, ktoré učiteľ očakáva, vrátane výberu z možností, maticových otázok, vstupu textu, rozbaľovacích zoznamov a textov s medzerami, písaných priamo v Markdowne. Bloky kódu sa dajú urobiť upraviteľnými a spustiteľnými pre tutoriály z [[cs-education|programovania]] a systém makier zabalí JavaScriptové knižnice do znovupoužiteľných blokov, takže interaktívne diagramy nepotrebujú kód od každého autora. Kurz je hostovaný tam, kde autor už drží text, bez služby, na ktorú by bol pripútaný, a všetko beží na strane klienta, takže načítaný kurz funguje offline. LiaScript Exporter zabalí kurz ako SCORM pre Moodle, ILIAS a ďalšie [[edtech-platform|systémy na riadenie učenia]].

## Učiaci agent na tvorbu kurzov

Projekt zverejňuje aj **[učiaceho agenta](https://github.com/LiaScript/teaching-agent)** na tvorbu kurzov LiaScript, licencovaného pod Boost Software License 1.0. Štyria agenti pre výučbu, vizuálny dizajn, recenziu zo strany študenta a publikovanie pracujú okolo jedného projektového súboru, ktorý drží stav kurzu, s postupom najprv definovať: ciele, publikum a didaktika sa vyriešia predtým, než sa napíše akýkoľvek materiál, a nasledujú validačné brány. Koncept sa dá recenzovať z pohľadu pomenovanej persony študenta na kontrolu [[cognitive-offloading|kognitívnej záťaže]] a predpokladaných predchádzajúcich vedomostí. Agent nie je viazaný na editor a z jednej špecifikácie generuje konfigurácie pre Claude Code, Copilot, Codex, Cursor alebo webový chat, pričom repozitár slúži aj ako rozpracovaný príklad — drží šesťjednotkový kurz o smernici EÚ NIS2 a dokument opisujúci, ako vznikol.

## Poznámky a výhrady

LiaScript je zadarmo, bez platenej úrovne a bez požiadavky na účet, a vyvíja sa otvorene pod BSD-3-Clause, takže inštitúcie ho môžu samohostovať a upravovať. Funkcia Live Classroom si zaslúži pohľad predtým, než sa na ňu spoľahnete vo veľkom, keďže synchronizácia v reálnom čase používa zdieľanú službu, nie čisto lokálne vykresľovanie. Učiaci agent je mladý a málo používaný, takže ho berte ako funkčný prototyp, nie ako podporovaný produkt.

## Prepojené pojmy

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]
