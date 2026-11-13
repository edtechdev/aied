---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "A Wharton Generative AI Labs nyílt forráskódú szerzői rendszere, amely egy oktatóval folytatott strukturált interjút saját mentor-, gyakorló- és visszajelző ügynökökkel rendelkező, futtatható, alkalmazkodó tanulási szimulációvá alakít."
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
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A Primer [[open-source|nyílt forráskódú rendszer]] oktatási [[simulation|szimuláció]] építésére: a leckét az AI-nak írja le a felhasználó ahelyett, hogy programozná. Az oktató ítélete határozza meg, mit tanít a szimuláció: egy interjú kihozza, mit tud az oktató a leckéről és a diákokról, egy tervezési dokumentum ezt a tudást áttekinthetővé teszi, és semmi nem épül fel, amíg az oktató jóvá nem hagyja.

## Mire használható

Az interjú egyszerre egy kérdést tesz fel: a lecke, a diákok szintje és előzetes tudása, a gyakori tévhitek, az oktató megközelítése és az, hogyan mérik majd a sikert. Az oktatók beszélhetnek vagy gépelhetnek, és feltölthetnek tanterveket, óravázlatokat vagy értékelési útmutatókat. Visszajön egy tervezési dokumentum, amely lefedi a célokat, a forgatókönyv menetét, a szereplőket, a tétet és az alkalmazkodási logikát, amelyet az oktató úgy javít és hagy jóvá, mint egy óravázlatot. Ezután öt ügynök építi meg: Intake, Design, Casting Director, Image Generation és Experience Builder, amely egy diák vagy egy egész osztály számára állítja össze az eredményt.

Futásidőben három ügynök találkozik a diákkal. Egy mentor mozgósítja az előzetes tudást és felszínre hozza a tévhiteket. Egy gyakorló ügynök szerepjátékos partnert vagy teachback-beli tanulót alakít, ahol a diák elmagyaráz egy fogalmat, és a kérdésekre válaszolva átdolgozza a magyarázatot. Egy visszajelző ügynök az átiratból dolgozik, konkrét pillanatokat és azt tárgyalja, hogyan viszi tovább a tanulás a forgatókönyvön túlra. Minden ügynöknek van világon belüli karaktere és célokat követő, bizonyítékokat gyűjtő oktatási rétege, az oktató pedig egyéni és összesített jelentéseket kap.

## Kinek szól

Az oktatók, oktatástervezők és felsőoktatási fejlesztők részletesen leírhatnak egy leckét anélkül, hogy kódot akarnának írni hozzá. Az oktatót a folyamatban tartó szerzői munkát vagy a [[agentic-ai|többügynökös munkafolyamatokat]] vizsgáló kutatók működő rendszert kapnak átvizsgálásra, a fejlesztők pedig bővíthetik, mert a promptok, sablonok, ellenőrzőlisták, orkesztrációs minták és a TypeScript-kód mind nyílt forráskódúak.

## Megjegyzések és fenntartások

A szerzők a Primert kísérleti prototípusnak nevezik, nem ellenőrzött osztálytermi terméknek. Nem értékelték tanulási beavatkozásként osztálytermekben, és senki nem vizsgálta FERPA, COPPA, állami diákmagánügyi törvények vagy tankerületi szabályzat szempontjából, így az az intézmény, amely diákokkal használja, maga felelős ezért a vizsgálatért. A szoftver MIT-licencű és ingyenes, de a szimuláció futtatásához modellhozzáférés kell, ami pénzbe kerül. Mivel modellfüggetlen, és helyi vagy nyílt súlyú modelleken fut, ott is telepíthető, ahol szigorúbbak az adatvédelmi szabályok. Az architektúráról és a promptokról szóló tanulmány a projektoldalról érhető el. A tárolónak 98 csillaga és 16 elágazása volt a 2026. novemberi ellenőrzéskor.

## Kapcsolódó fogalmak

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
