---
title: "Building Intelligent Textbooks"
created: "2026-10-10T11:10:00-04:00"
type: resource
summary: "Open-source príručka Dana McCrearyho o tvorbe inteligentných učebníc: online učebnice s vyhľadávaním, navigáciou, slovníkom, kvízmi, pojmovým grafom a vloženými simuláciami, stavané v MkDocs Material a s generatívnou AI."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking, misconceptions]
pedagogy: [active-learning, constructivist, self-directed-learning]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Stránka **Intelligent Textbooks** je krok za krokom vedená príručka Dana McCrearyho na tvorbu *inteligentných učebníc* — online učebníc, ktoré presahujú statické PDF tým, že pridávajú vyhľadávanie, navigáciu po stránke, slovník pojmov, obsah, správu kvízov, vykreslené vzorce, náhľady pre sociálne médiá, kontrolu odkazov a ľahko zobraziteľný **pojmový graf** ukazujúci všetky pojmy kurzu a ich závislosti. Príručka argumentuje, že mnohým dnešným kurzom by prospeli kvalitné online učebnice s týmito vlastnosťami, a ukazuje, ako ich postaviť pomocou zostavovacieho systému [MkDocs](http://mkdocs.com/) s témou Material a generatívnou AI na tvorbu a údržbu obsahu.

Určujúcim ťahom je, že učebnica je *napísaná v Markdowne a generovaná AI* — konkrétna inštancia vzorca [[vibe-coding|tvorby s podporou AI]] aplikovaného na [[curriculum-design|obsah kurzu]]: namiesto ručnej údržby veľkej stránky kurz opíšete a necháte generatívnu AI vytvoriť a udržiavať stránky, pričom nástrojový reťazec obstará navigáciu, vyhľadávanie a pojmový graf. Sprievodná knižnica [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) tvrdí, že automatizuje viac ako 90 % úloh potrebných na zostavenie učebnice úrovne 2 z opisu kurzu.

## Doplnkový zdroj: MicroSims

Prirodzeným spoločníkom tejto príručky je McCrearyho knižnica **MicroSims** na <https://dmccreary.github.io/microsims/> (zdroj: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), ktorá dodáva interaktívne simulácie, ktoré inteligentná učebnica vkladá. *MicroSim* (mikrosimulácia) je jednoduchá interaktívna simulácia vygenerovaná AI, ktorá má učiteľovi pomôcť vysvetliť pojem, a dá sa vložiť do inteligentnej učebnice alebo do akejkoľvek stránky, ktorá prijme `iframe`. MicroSims sú výnimočné z troch dôvodov: **generovanie s podporou AI** (štandardizované vzorce návrhu menia opis simulácie v prirodzenom jazyku na zdieľateľné aktívum), **univerzálne vkladanie** (jediný HTML prvok `iframe` vloží simuláciu na akúkoľvek stránku) a **transparentný, upraviteľný kód** (žiadna čierna skrinka — jeden klik otvorí simuláciu vo webovom editore a licencia Creative Commons umožňuje väčšine učiteľov používať ich bez poplatkov za licenciu). Termín vytvorila Valerie Lockhart v roku 2023 po tom, čo zistila, že učitelia a študenti dokážu stavať simulácie v JavaScriptovej knižnici p5.js s malým či žiadnym školením.

Projekt tiež zverejňuje JSON Schema pre metadáta MicroSim, aby AI nástroje mohli generovať prehľadávateľné deskriptory, pričom fazetový register MicroSim je v pláne. Výskumný článok opisujúci rámec — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — je na arXiv ([2511.19864](https://arxiv.org/abs/2511.19864)). Vzorové simulácie zahŕňajú Bouncing Ball, Projectile Motion, String Harmonics, Conway's Game of Life, Euler's Formula a graf výnosov akciového trhu, každá beží na stránke naživo.

## Pre koho je to určené

Pre vyučujúcich a inštrukčných dizajnérov, ktorí chcú postaviť alebo udržiavať učebnicu ku kurzu, najmä vo vysokoškolskom vzdelávaní a v profesijnej príprave, plus pre rozvojových pracovníkov fakúlt a každého, kto tvorí vzdelávací obsah generatívnou AI. Hodí sa vzdelávateľom, ktorým vyhovuje pracovný postup Markdown-a-Git (alebo sú ochotní sa ho naučiť) a ktorí chcú, aby AI obstarala technické vybavenie stránky — vyhľadávanie, navigáciu, pojmový graf — a oni sa mohli sústrediť na pedagogiku.

## Poznámky a výhrady

Ide o príručku praktika a nástrojový reťazec, nie o recenzovanú štúdiu — predstavuje pracovný postup a jeho vlastné pedagogické odôvodnenie („inteligentné učebnice vedú študentov pojmami na ich ceste za poznaním“), nie dôkazy o výsledkoch učenia. Najbližšie k empirickej podpore má výskumný článok o MicroSims, a ten je samopublikovaný na arXiv. Oba projekty sú open source (repozitár intelligent-textbooks uvádza licenciu MIT a 38 hviezd; MicroSims uvádza licenciu Creative Commons a 13 hviezd) a aktívne udržiavané. Pojmové grafy a štruktúra so slovníkom na začiatku sú naozaj užitočné pre objaviteľnosť, ale príručka predpokladá pomerne technický postup tvorby — MkDocs, Git a generatívne AI nástroje — čo môže byť pre časť fakulty prekážkou. V čase zaradenia je register MicroSim koniec koncov stále len v pláne, takže nájdenie konkrétnej existujúcej simulácie závisí od vyhľadávania a navigácie na samotnej stránke.

## Prepojené pojmy

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
