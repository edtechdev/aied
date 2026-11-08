---
title: "Code Viva"
created: "2026-10-24T05:33:18-04:00"
type: resource
summary: "Bezplatný nástroj v prehliadači, ktorý pre každého študenta programovacieho kurzu spustí písomnú a časovo ohraničenú verziu ústnej obhajoby kódu a navrhne skóre s citovanými dôkazmi na schválenie vyučujúcim."
url: https://code-viva.pisan.me/
author: "Code Viva"
author_url: https://code-viva.pisan.me/
resource_type: [software]
access: [free]
last_verified: "2026-11-04"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
translation_of: resources/code-viva
source_updated: "2026-11-04T17:55:00-05:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Code Viva spúšťa písomnú a časovo ohraničenú verziu [[oral-assessment|ústnej obhajoby]] pre každého študenta programovacieho kurzu, približne pätnásť až dvadsať minút na študenta, bez vyučujúceho v miestnosti. Prečíta odovzdaný kód študenta aj históriu commitov, napíše štyri až šesť otázok o vlastných funkciách, názvoch a commitoch toho študenta a každému študentovi dá osobný odkaz, z ktorého odpovedá.

## Čo s tým môžete robiť

Odovzdania prichádzajú z exportu Gradescope, zo zipu stiahnutého z Canvas, zo zipu s priečinkom na študenta alebo z GitHub Classroom s čítacím tokenom. Vyučujúci nastaví dĺžku sedenia, počet otázok a termín, označí predĺžený čas na 1,25× až 3× a vygenerované otázky pred odoslaním odkazov prečíta, upraví alebo nahradí. Otázky pokrývajú základné prípady rekurzie, ochranné podmienky na okrajoch, voľbu dátových štruktúr, neprehľadné názvy premenných, škálovanie a trasovanie, vety zo zadania a vzorce commitov, ako jeden hromadný alebo neskorý nočný commit. Odpovede sa vracajú ako kód odpovede a obrazovka recenzie ukazuje každý prepis vedľa navrhovaného skóre 0 až 3 s vetami, o ktoré sa opiera, plus front príznakov zoradený podľa toho, nakoľko je rozhovor opodstatnený. Výsledky sa exportujú do CSV a jedenásť demo kurzov umožňuje čitateľovi vyskúšať celý cyklus na vymyslených dátach.

## Pre koho je to určené

Pre vyučujúcich programovacích kurzov, ktorí chcú dôkaz, že študent vie vysvetliť vlastný kód, a ktorí radšej hovoria s krátkym zoznamom študentov než so všetkými; otázky k commitom z toho robia formu [[process-oriented-assessment|hodnotenia zameraného na proces]].

## Poznámky a výhrady

Všetko beží v prehliadači: kurz sedí v lokálnom úložisku s exportom do JSON, otázky cestujú v tej časti odkazu, ktorú prehliadače neposielajú na servery, a odpovede sa vracajú len ako kódy, ktoré študenti sami odošlú, takže žiadne dáta študentov sa nedostanú k tretej strane. Generátor otázok je pravidlový, nie riadený modelom. Podľa vlastného vyjadrenia nástroja je jeho čítačka kódu heuristická, takže nezvyčajné formátovanie alebo makrá môžu funkciu skryť, a skóre môže odmeniť znalosť slovnej zásoby namiesto porozumenia kódu — preto sú skóre len návrhy, ktoré vyučujúci schvaľuje, a preto nástroj radí držať stávky nízko. Licencia ani zdrojový repozitár nie sú zverejnené, a keďže odkazy nesú otázky, majú niekoľko kilobajtov, dosť na to, aby sa zalomili v okne správy systému na riadenie učenia.

## Prepojené pojmy

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
