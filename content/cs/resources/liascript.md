---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
type: resource
summary: "Otevřený dialekt Markdownu, který mění textový soubor v interaktivní kurz v prohlížeči s kvízy a spustitelným kódem, plus multiagentní asistent pro tvorbu kurzů."
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
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

**LiaScript** je rozšířený dialekt Markdownu a jeho interpret. Jeden textový soubor se stane interaktivním kurzem: stejný dokument lze číst jako vyprávění, přehrávat jako slajdy nebo projít jako kurz, to vše v prohlížeči. K napsání ani ke čtení není třeba nic instalovat.

## Co s ním můžete dělat

Kvízy mají podoby, které učitel očekává, včetně výběru z možností, maticových otázek, vstupu textu, rozbalovacích seznamů a textů s mezerami, psané přímo v Markdownu. Bloky kódu lze učinit upravitelnými a spustitelnými pro tutoriály [[cs-education|programování]] a systém maker obaluje JavaScriptové knihovny do opakovaně použitelných bloků, takže interaktivní diagramy nevyžadují kód od každého autora. Kurz je hostován tam, kde autor už uchovává text, bez služby, na niž by byl vázán, a vše běží na straně klienta, takže načtený kurz funguje offline. LiaScript Exporter zabalí kurz do SCORM pro Moodle, ILIAS a další [[edtech-platform|systémy pro řízení výuky]].

## Výukový agent pro tvorbu kurzů

Projekt také zveřejňuje **[výukového agenta](https://github.com/LiaScript/teaching-agent)** pro psaní kurzů LiaScript, licencovaného pod Boost Software License 1.0. Čtyři agenti pro výuku, vizuální design, recenzi ze strany studenta a publikování pracují kolem jediného projektového souboru s stavem kurzu, s postupem nejprve definovat: cíle, publikum a didaktika se vyjasní dřív, než se napíše jakýkoli materiál, a následují validační brány. Koncept lze recenzovat z pohledu pojmenované persony studenta, aby se zkontrolovala [[cognitive-offloading|kognitivní zátěž]] a předpokládané předchozí znalosti. Agent je nezávislý na editoru a z jedné specifikace generuje konfigurace pro Claude Code, Copilot, Codex, Cursor nebo webový chat; repozitář zároveň slouží jako zpracovaný příklad, obsahuje šestidílný kurz o směrnici EU NIS2 a dokument popisující, jak vznikl.

## Poznámky a upozornění

LiaScript je zdarma, bez placené úrovně a bez požadavku na účet, a je vyvíjen otevřeně pod BSD-3-Clause, takže instituce jej mohou hostovat samy a upravovat. Funkce Live Classroom si zaslouží pohled, než se na ni spolehnete ve velkém, protože synchronizace v reálném čase používá sdílenou službu, nikoli čistě lokální vykreslování. Výukový agent je mladý a málo osvojený, takže jej berte jako funkční prototyp, nikoli jako podporovaný produkt.

## Související pojmy

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]
