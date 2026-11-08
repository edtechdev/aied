---
title: "Code Viva"
created: "2026-10-24T05:33:18-04:00"
type: resource
summary: "Bezplatný nástroj v prohlížeči, který pro každého studenta programovacího kurzu spustí písemnou, časově omezenou obdobu ústní obhajoby kódu a navrhne skóre s citovanými důkazy ke schválení vyučujícím."
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
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Code Viva spouští písemnou, časově omezenou verzi [[oral-assessment|ústní obhajoby]] pro každého studenta programovacího kurzu, zhruba patnáct až dvacet minut na jednoho, bez vyučujícího v místnosti. Přečte odevzdaný kód studenta a historii commitů, napíše čtyři až šest otázek o funkcích, názvech a commitech daného studenta a každému studentovi dá osobní odkaz, z něhož odpovídá.

## Co s ním můžete dělat

Odevzdané práce přicházejí z exportu Gradescope, ze staženého zipu z Canvas, ze zipu s jednou složkou na studenta nebo z GitHub Classroom s tokenem pro čtení. Vyučující nastaví délku sezení, počet otázek a termín, označí prodloužený čas v rozsahu 1,25× až 3× a vygenerované otázky si před odesláním odkazů přečte, upraví nebo nahradí. Otázky pokrývají základní případy rekurze, kontroly krajních hodnot, volbu datových struktur, neprůhledné názvy proměnných, škálování a trasování, věty ze zadání úkolu a vzorce commitů, jako je jeden hromadný nebo noční commit. Odpovědi se vracejí jako kód odpovědi a obrazovka revize ukazuje každý přepis vedle navrženého skóre 0 až 3 s větami, o něž se opírá, a frontu označení seřazenou podle toho, nakolik je rozhovor odůvodněný. Výsledky se exportují do CSV a jedenáct ukázkových kurzů umožňuje čtenáři vyzkoušet celý cyklus na vymyšlených datech.

## Pro koho je určen

Pro vyučující programovacích kurzů, kteří chtějí důkaz, že student umí vysvětlit vlastní kód, a kteří raději mluví s krátkým seznamem studentů než se všemi; otázky k commitům z něj činí formu [[process-oriented-assessment|hodnocení zaměřeného na proces]].

## Poznámky a upozornění

Vše běží v prohlížeči: kurz leží v místním úložišti s exportem do JSON, otázky cestují v části odkazu, kterou prohlížeče na servery neposílají, a odpovědi se vracejí jen jako kódy, které se studenti rozhodnou odeslat, takže se žádná studentská data nedostanou ke třetí straně. Generátor otázek je založený na pravidlech, nikoli na modelu. Podle vlastního vyjádření nástroje je jeho čtečka kódu heuristická, takže neobvyklé formátování nebo makra mohou funkci skrýt, a skóre může odměnit znalost slovníku spíše než porozumění kódu; proto jsou skóre jen návrhy, které vyučující schvaluje, a proto nástroj doporučuje držet sázky nízko. Licence ani zdrojový repozitář nejsou zveřejněny, a protože odkazy nesou otázky, mají několik kilobajtů — dost na to, aby se zalamovaly v okně zpráv v systému pro řízení výuky.

## Související pojmy

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
