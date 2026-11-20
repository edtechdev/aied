---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Open-source server MCP, ktorý umožňuje Claude, Cursor, Codex a ďalším agentom čítať a konať v Canvas LMS — nástroje pre študentov, učiteľov a dizajnérov učenia, s nástrojmi na zápis za bránou a voliteľnou anonymizáciou údajov študentov."
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [agentic-ai, institutional-ai-infrastructure]
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

**Canvas MCP** je open-source server Model Context Protocol od Vishala Sachdeva, ktorý pripája klienta AI k inštancii Canvas LMS: agent môže vypísať nadchádzajúcu prácu študenta, prečítať zadania a odovzdania kurzu, poslať správu triede alebo auditovať kurz na prístupnosť, a to všetko cez nástroje, ktoré server vystavuje, namiesto ad hoc scrapovania obrazovky.

## Čo s ním môžete robiť

Server dodáva tri rodiny nástrojov. Študentské nástroje odpovedajú na otázky „čo je tento týždeň na termín“, „odovzdal som všetko“ a „koľko pokusov o kvíz mi zostáva“ proti vlastným koncovým bodom `self` v Canvas. Učiteľské nástroje vypisujú a vytvárajú zadania, čítajú odovzdania, hromadne známkujú, posielajú konverzácie a ťahajú analytiku zadaní. Nástroje pre dizajnérov učenia pokrývajú kontroly kvality kurzu a skeny prístupnosti WCAG. Celkovo je dostupných až 128 nástrojov, hoci predvolený profil registruje menej a nástroje za funkčnými bránami počet zvyšujú. Na vrch nástrojov osem agentných zručností balí viackrokové recepty — týždenný plán, rannú kontrolu zdravia kurzu, rozhodovací strom hromadného známkovania, proces recenzovania medzi kolegami, audit kurzu pred semestrom — inštalovateľné do viac ako 40 agentov cez `skills.sh`.

## Pre koho je určený

Učitelia, ktorí chcú, aby agent zvládol rutinné čítanie a posielanie správ okolo kurzu, a [[institutional-ai-infrastructure|inštitucionálne tímy]], ktoré hodnotia, čo agent pripojený k LMS skutočne dosiahne. Dizajnéri učenia dostanú to, čo je tu najbližšie k automatizovanej recenzii kurzu. Projekt je rozpracovaný príklad [[agentic-ai|agentných nástrojov]] na úrovni LMS jednej inštitúcie, nie všeobecného chatbota.

## Poznámky a upozornenia

Inštalácia je lokálna: Python 3.11 alebo novší, token a URL API Canvas a klient MCP, s rozšírením spustiteľným dvojklikom pre Claude Desktop. Verejný hostovaný server bol vyradený, takže zdieľané nasadenie znamená samohosting za vlastnou autentifikáciou inštitúcie. Nástroje na zápis sú za bránou — HTTP servery sú len na čítanie, ak nie sú nástroje na zápis výslovne povolené, mazanie vyžaduje potvrdzovacie tokeny a spúšťanie kódu beží v sandboxe, ktorý pri zlyhaní zlyhá bezpečne. Ovládanie súkromia je opt-in: anonymizácia odpovedí, maskovanie e-mailov a filtrovanie PII sa musia zapnúť a README je opatrné v tom, že môžu podporiť povinnosti podľa FERPA bez toho, aby zakladali súlad, ktorý závisí od nasadenia a poskytovateľa AI. V serveri nie je žiadna telemetria, ale Canvas a zvolený klient si vedú vlastné logy. Projekt má licenciu MIT, aktívne sa vyvíja a jeho vlastné príručky sú autoritou pre aktuálne názvy nástrojov a konfiguráciu.
