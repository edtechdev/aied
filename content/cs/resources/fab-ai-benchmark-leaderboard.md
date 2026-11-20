---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Žebříček modelů pro vzdělávací benchmarky zaměřené na země s nízkými a středními příjmy, pokrývající pedagogiku, základní gramotnost, SEND, vizuální matematiku a vícejazyčný výkon, se sloupci ceny a otevřených vah."
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
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [benchmark, digital-divide, equity-in-ai-education]
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Fab AI hodnotí modely na vzdělávacích úlohách, na nichž záleží tam, kde jsou rozpočty, šířka pásma a jazykové pokrytí omezené — v [[global-south|zemích s nízkými a středními příjmy]], pro něž je benchmark postaven — a výsledky zveřejňuje jako řaditelný žebříček, nikoli jako článek. Hlavní tabulka skóruje pedagogický benchmark vedle SEND, vizuální matematiky a vizuálního uvažování, se samostatnými záložkami pro vícejazyčnou pedagogiku, základní gramotnost a hodnocení hlasitého čtení.

## Co s tím můžete dělat

Porovnejte zhruba 300 modelů podle pedagogických skóre, která se nyní pohybují od nízkých devadesátek až po 21%, a pak je seřaďte podle toho, co musí ministerstvo školství skutečně zvažovat: cena za milion tokenů, počet parametrů, otevřené váhy a datum vydání. Užitečný je rozptyl na spodním konci. Otevřené modely pod 2B se v pedagogickém benchmarku drží mezi 21% a 43%, zatímco frontier modely jsou v nízkých devadesátkách, což z otázky „pustíme to offline na levném hardwaru?“ dělá kvantifikovanou směnu, nikoli hádanku.

Záložka [[multilingual-learning|vícejazyčné]] pedagogiky je důvod, proč si stránku uložit. Většina vzdělávacích benchmarků je jen anglických a otázka, zda pedagogika modelu přežije překlad, je přesně ta otázka, kterou ministerstvo ve vícejazyčném systému potřebuje zodpovědět. Data lze stáhnout jako CSV, takže porovnání lze lokálně znovu spustit.

## Pro koho je určeno

Tvůrci politik a nákupní týmy vybírající modely pro národní systémy, výzkumníci studující [[digital-divide|propast v přístupu]] ve vzdělávání podporovaném AI a vývojáři, kteří potřebují pedagogický cíl, jímž není zkouška v angličtině.

## Poznámky a upozornění

Žebříček měří modely na úlohách samotného benchmarku: vysoké pedagogické skóre je důkazem o těchto položkách, nikoli o třídě. Sloupec ceny mísí ceny vstupních a výstupních tokenů v poměru 3:1, což je modelové rozhodnutí, nikoli to, co bude stát konkrétní nasazení. Pokrytí jazyků a lokálně hostovaných modelů se s příchodem nových modelů mění a nízká skóre malých modelů odrážejí zčásti formát úloh stejně jako schopnosti. Rámec Fab AI je výslovně o zemích s nízkými a středními příjmy, takže sada položek benchmarku odráží tento kontext a neměla by se číst jako obecné vzdělávací pořadí. Zkontrolujte data vydání: několik záznamů předchází současné generaci modelů.
