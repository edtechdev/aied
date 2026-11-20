---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Rebríček modelov pre vzdelávacie benchmarky zamerané na krajiny s nízkymi a strednými príjmami, pokrývajúci pedagogiku, základnú gramotnosť, SEND, vizuálnu matematiku a viacjazyčný výkon, so stĺpcami ceny a otvorených váh."
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
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Fab AI hodnotí modely na vzdelávacích úlohách, na ktorých záleží tam, kde sú rozpočty, konektivita a jazykové pokrytie obmedzené v [[global-south|krajinách s nízkymi a strednými príjmami]], pre ktoré je benchmark zostavený, a výsledky zverejňuje ako zoraditeľný rebríček namiesto článku. Základná tabuľka skóruje pedagogický benchmark spolu so SEND, vizuálnou matematikou a vizuálnym uvažovaním, so samostatnými záložkami pre viacjazyčnú pedagogiku, základnú gramotnosť a hodnotenie čítania nahlas.

## Čo s tým môžete robiť

Porovnajte približne 300 modelov podľa pedagogických skóre, ktoré sa aktuálne pohybujú od hodnôt tesne nad 90 % až po 21 %, potom zoraďte podľa toho, čo musí ministerstvo školstva skutočne zvažovať: cena za milión tokenov, počet parametrov, otvorené váhy a dátum vydania. Rozptyl na spodku je užitočná časť. Otvorené modely pod 2B sa pohybujú medzi 21 % a 43 % na pedagogickom benchmarku, zatiaľ čo frontier modely sa pohybujú tesne nad 90 %, čo mení „môžeme toto spustiť offline na lacnom hardvéri“ na kvantifikovanú výmenu namiesto hádania.

Karta [[multilingual-learning|viacjazyčnej]] pedagogiky je dôvod, prečo si stránku pridať do záložiek. Väčšina vzdelávacích benchmarkov je len anglických a otázka, či pedagogika modelu prežije preklad, je presne tá otázka, ktorú potrebuje zodpovedať ministerstvo vo viacjazyčnom systéme. Dáta sa dajú stiahnuť ako CSV, takže porovnania sa dajú znova spustiť lokálne.

## Pre koho je to určené

Tvorcovia politík a obstarávacie tímy vyberajúce modely pre národné systémy, výskumníci študujúci [[digital-divide|priepasť v prístupe]] vo vzdelávaní podporovanom AI a vývojári, ktorí potrebujú pedagogický cieľ, ktorým nie je anglická skúška.

## Poznámky a výhrady

Rebríček meria modely na úlohách samotného benchmarku: vysoké pedagogické skóre je dôkazom o týchto položkách, nie o triede. Stĺpec ceny mieša ceny vstupných a výstupných tokenov v pomere 3:1, čo je modelovacia voľba, nie to, čo bude stáť akékoľvek konkrétne nasadenie. Pokrytie jazykov a lokálne hostovaných modelov sa mení s tým, ako pribúdajú nové modely, a nízke skóre malých modelov sčasti odráža formát úloh rovnako ako schopnosti. Rámcovanie Fab AI je výslovne o krajinách s nízkymi a strednými príjmami, takže sada položiek benchmarku odráža tento kontext a nemala by sa čítať ako všeobecné vzdelávacie poradie. Skontrolujte dátumy vydania: viaceré záznamy predchádzajú súčasnej generácii modelov.

## Prepojené pojmy

- [[benchmark]] — širšia trieda nástrojov, do ktorej patrí
- [[digital-divide]] — obmedzenie, ktoré majú stĺpce ceny a otvorených váh zviditeľniť
- [[equity-in-ai-education]] — politická otázka, ktorú rebríček informuje
