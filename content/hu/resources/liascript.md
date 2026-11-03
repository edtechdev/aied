---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
type: resource
summary: "Nyílt Markdown-dialektus, amely egy egyszerű szöveges fájlt interaktív kurzussá alakít a böngészőben, kvízekkel és futtatható kóddal, valamint többügynökös asszisztens a vele való kurzusépítéshez."
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
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A **LiaScript** egy kiterjesztett Markdown-dialektus és a hozzá tartozó értelmező. Egyetlen egyszerű szöveges fájl interaktív kurzussá válik: ugyanaz a dokumentum elbeszélésként olvasható, diákként játszható le, vagy kurzusként dolgozható végig, mindezt a böngészőben. Semmit nem kell telepíteni sem az íráshoz, sem az olvasáshoz.

## Mire használható

A kvízek a tanár által várt formákban jelennek meg, beleértve a feleletválasztást, mátrixkérdéseket, szövegbevitelt, legördülő menüket és hiányos szövegeket, közvetlenül Markdownban írva. A kódblokkok szerkeszthetővé és futtathatóvá tehetők [[cs-education|programozási]] tutorialokhoz, egy makrórendszer pedig JavaScript-könyvtárakat csomagol újrafelhasználható blokkokba, így az interaktív diagramokhoz nem kell kód minden szerzőtől. A kurzus ott hosztolható, ahol a szerző amúgy is tartja a szöveget, szolgáltatáshoz kötés nélkül, és minden kliensoldalon fut, így egy betöltött kurzus offline is működik. A LiaScript Exporter SCORM-ként csomagolja egyet Moodle-hez, ILIAS-hoz és más [[edtech-platform|tanuláskezelő rendszerekhez]].

## A tanító ügynök kurzusok építéséhez

A projekt egy **[tanító ügynököt](https://github.com/LiaScript/teaching-agent)** is közzétesz LiaScript-kurzusok szerzőségéhez, a Boost Software License 1.0 alatt. Négy ügynök – tanítás, vizuális tervezés, tanulói bírálat és publikálás – dolgozik egyetlen, a kurzus állapotát tartó projektfájl körül, először-meghatározó munkafolyamattal: a célok, a közönség és a didaktika eldől, mielőtt bármilyen anyag íródna, majd validációs kapuk következnek. Egy vázlat megnevezett tanulói perszónából is átnézhető a [[cognitive-offloading|kognitív terhelés]] és a feltételezett előzetes tudás ellenőrzéséhez. Az ügynök szerkesztőfüggetlen: egyetlen specifikációból generál konfigurációkat a Claude Code-hoz, a Copilothoz, a Codexhez, a Cursorhoz vagy egy webes csevegéshez, a repó pedig kidolgozott példaként is szolgál: tartalmaz egy hat egységből álló kurzust az EU NIS2 irányelvéről és egy dokumentumot arról, hogyan készült.

## Megjegyzések és fenntartások

A LiaScript ingyenes, fizetős szint és fiókkövetelmény nélkül, és nyíltan fejlesztik BSD-3-Clause alatt, így az intézmények saját maguk hosztolhatják és módosíthatják. A Live Classroom funkció érdemes egy pillantást, mielőtt nagy léptékben támaszkodna rá, mivel a valós idejű szinkronizálás megosztott szolgáltatást használ, nem tisztán helyi renderelést. A tanító ügynök fiatal és kevéssé elterjedt, ezért működő prototípusként kezelje, nem támogatott termékként.

## Kapcsolódó fogalmak

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]
