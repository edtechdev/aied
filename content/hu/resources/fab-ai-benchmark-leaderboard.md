---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Modell-ranglista az alacsony és közepes jövedelmű országokat célzó oktatási benchmarkokhoz, amely lefedi a pedagógiát, az alapozó írástudást, a SEND-et, a vizuális matematikát és a többnyelvű teljesítményt, ár és nyílt súlyok oszlopokkal."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
translation_of: resources/fab-ai-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [benchmark, digital-divide, equity-in-ai-education]
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A Fab AI olyan oktatási feladatokon értékeli a modelleket, amelyek ott számítanak, ahol a költségvetés, a sávszélesség és a nyelvi lefedettség korlátozott azokban az [[global-south|alacsony és közepes jövedelmű országokban]], amelyeknek a benchmark épült, és az eredményeket rendezhető ranglistaként teszi közzé, nem pedig tanulmányként. A fő táblázat egy pedagógiai benchmarkot pontoz a SEND, a vizuális matematika és a vizuális következtetés mellett, külön fülekkel a többnyelvű pedagógiához, az alapozó írástudáshoz és a felolvasás-értékeléshez.

## Mire használható

Hasonlítson össze körülbelül 300 modellt pedagógiai pontszámok alapján, amelyek jelenleg a kilencven körüli értékektől 21%-ig terjednek, majd rendezzen aszerint, amit egy oktatási minisztériumnak ténylegesen mérlegelnie kell: egymillió token ára, paraméterek száma, nyílt súlyok és megjelenési dátum. Az alsó tartomány szórása a hasznos rész. A 2B-nál kisebb nyílt modellek 21% és 43% között helyezkednek el a pedagógiai benchmarkon, míg a frontier modellek a kilencven körüli alsó tartományban, ami a „futtathatjuk-e ezt offline olcsó hardveren" kérdést számszerűsített kompromisszá változtatja, nem találgatássá.

A [[multilingual-learning|többnyelvű]] pedagógiai fül az oka annak, hogy érdemes könyvjelzőzni az oldalt. A legtöbb oktatási benchmark csak angol nyelvű, és az a kérdés, hogy egy modell pedagógiája túléli-e a fordítást, pontosan az a kérdés, amelyre egy többnyelvű rendszerben működő minisztériumnak válasza kell. Az adatok CSV-ként letölthetők, így az összehasonlítások helyben újrafuttathatók.

## Kinek szól

Szakpolitikai döntéshozóknak és beszerzési csapatoknak, amelyek nemzeti rendszerekhez választanak modelleket; kutatóknak, akik az MI-támogatott oktatásban a [[digital-divide|hozzáférési szakadékot]] vizsgálják; és fejlesztőknek, akiknek olyan pedagógiai célra van szükségük, amely nem angol nyelvű vizsga.

## Megjegyzések és fenntartások

A ranglista a modelleket a benchmark saját feladatain méri: a magas pedagógiai pontszám azokról a tételekről szóló bizonyíték, nem az osztályteremről. Az ár oszlop a bemeneti és kimeneti tokenárakat 3:1 arányban keveri, ami modellezési döntés, nem pedig az, amibe egy adott bevezetés kerül. A nyelvek és a helyben hosztolt modellek lefedettsége változik, ahogy új modellek jelennek meg, és a kis modellek alsó tartományú pontszámai részben ugyanannyira a feladatformátumot tükrözik, mint a képességet. A Fab AI keretezése kifejezetten az alacsony és közepes jövedelmű országokról szól, így a benchmark tételkészlete ezt a kontextust tükrözi, és nem olvasandó általános oktatási rangsorként. Ellenőrizze a megjelenési dátumokat: több bejegyzés a jelenlegi modellgenerációnál korábbi.
