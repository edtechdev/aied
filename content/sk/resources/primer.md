---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Open-source autorský systém z Generative AI Labs na Wharton School, ktorý mení štruktúrovaný rozhovor s vzdelávateľom na spustiteľnú adaptívnu vzdelávaciu simuláciu s vlastným mentorom a agentmi na precvičovanie a spätnú väzbu."
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
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Primer je [[open-source|open-source systém]] na vytváranie vzdelávacej [[simulation|simulácie]] opisom lekcie pre AI namiesto jej programovania. Úsudok vzdelávateľa určuje, čo simulácia učí: rozhovor vyťaží to, čo vyučujúci vie o lekcii a študentoch, dizajnový dokument robí tieto znalosti kontrolovateľnými a nič sa nebuduje, kým to vzdelávateľ neschváli.

## Čo s tým môžete robiť

Rozhovor prebieha po jednej otázke: lekcia, úroveň a predchádzajúce znalosti študentov, bežné mylné predstavy, prístup vyučujúceho a spôsob hodnotenia úspechu. Vzdelávatelia môžu hovoriť alebo písať a môžu nahrať sylaby, plány lekcií alebo hodnotiace rubriky. Výsledkom je dizajnový dokument pokrývajúci ciele, priebeh scenára, postavy, stávky a logiku adaptácie, ktorý vzdelávateľ upravuje a schvaľuje tak, ako by schvaľoval plán lekcie. Potom ho zostaví päť agentov: Intake, Design, Casting Director, Image Generation a Experience Builder, ktorý výsledok poskladá pre jedného študenta alebo celú triedu.

Počas behu čelia študentovi traja agenti. Mentor aktivuje predchádzajúce znalosti a odhaľuje mylné predstavy. Agent na precvičovanie hrá partnera v hraní rolí alebo žiaka pri teachbacku, kde študent vysvetlí koncept a pri otázkach vysvetlenie prepracuje. Agent spätnej väzby pracuje s prepisom, rozoberá konkrétne momenty a to, ako sa učenie prenáša mimo scenára. Každý agent má postavu vo svete a inštrukčnú vrstvu, ktorá sleduje ciele a zhromažďuje dôkazy, a vzdelávateľ dostáva individuálne aj súhrnné správy.

## Pre koho je to určené

Vyučujúci, inštrukční dizajnéri a rozvojoví pracovníci pre akademický zbor môžu podrobne opísať lekciu bez toho, aby pre ňu chceli písať kód. Výskumníci skúmajúci autorské vytváranie so vzdelávateľom v slučke alebo [[agentic-ai|multiagentové pracovné postupy]] dostanú fungujúci systém na skúmanie a vývojári ho môžu rozširovať, pretože prompty, šablóny, kontrolné zoznamy, vzory orchestrácie a kód TypeScript sú všetky open source.

## Poznámky a výhrady

Autori nazývajú Primer experimentálnym prototypom, nie overeným produktom do triedy. Nebol hodnotený ako vzdelávacia intervencia v triedach a nikto ho nepreskúmal z hľadiska FERPA, COPPA, štátnych zákonov o súkromí študentov ani okresnej politiky, takže inštitúcia, ktorá ho používa so študentmi, túto kontrolu nesie sama. Softvér má licenciu MIT a je bezplatný, ale spustenie simulácie vyžaduje prístup k modelu, čo stojí peniaze. Keďže je nezávislý od modelu a beží na lokálnych modeloch alebo modeloch s otvorenými váhami, dá sa nasadiť tam, kde sú pravidlá súkromia prísnejšie. White paper o architektúre a promptoch je prepojený zo stránky projektu. Repozitár mal v novembri 2026 pri kontrole 98 hviezdičiek a 16 fork-ov.

## Prepojené pojmy

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
