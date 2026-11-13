---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Open-source autorský systém z Wharton Generative AI Labs, který mění strukturovaný rozhovor s pedagogem ve spustitelnou adaptivní výukovou simulaci s vlastními agenty pro mentoring, procvičování a zpětnou vazbu."
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
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

**Primer** je [[open-source|open-source systém]] pro tvorbu výukové [[simulation]] tak, že lekci popíšete AI, místo abyste ji programovali. Učitelský úsudek určuje, co simulace učí: rozhovor vytáhne, co instruktor o lekci a studentech ví, designový dokument toto poznání zpřístupní k posouzení a nic se nebuduje, dokud to pedagog neschválí.

## Co s ním můžete dělat

Rozhovor probíhá po jedné otázce: lekce, úroveň a předchozí znalosti studentů, častá mylná pojetí, přístup instruktora a to, jak bude úspěch hodnocen. Pedagogové mohou mluvit nebo psát a nahrávat sylaby, plány lekcí nebo rubriky. Výsledkem je designový dokument pokrývající cíle, průběh scénáře, postavy, sázky a logiku adaptace, který pedagog upraví a schválí stejně jako plán lekce. Poté jej postaví pět agentů: Intake, Design, Casting Director, Image Generation a Experience Builder, který výsledek sestaví pro jednoho studenta nebo celou třídu.

Za běhu stojí proti studentovi tři agenti. Mentor aktivuje předchozí znalosti a odhaluje mylná pojetí. Agent procvičování hraje protějšek v hraní rolí nebo žáka při výkladu, kdy student vysvětlí pojem a na dotazy výklad přepracuje. Agent zpětné vazby pracuje z přepisu, probírá konkrétní momenty a to, jak se učení přenáší za hranice scénáře. Každý agent má postavu ve světě a výukovou vrstvu, která sleduje cíle a shromažďuje důkazy, a pedagog dostává individuální i souhrnné zprávy.

## Pro koho je určen

Vyučující, návrháři výuky a rozvojoví pracovníci fakult mohou lekci popsat podrobně, aniž by pro ni chtěli psát kód. Výzkumníci studující autorství s pedagogem v cyklu nebo [[agentic-ai|multiagentní pracovní postupy]] dostávají fungující systém k prozkoumání a vývojáři jej mohou rozšiřovat, protože prompty, šablony, kontrolní seznamy, vzory orchestrace i kód v TypeScriptu jsou open source.

## Poznámky a upozornění

Autoři nazývají Primer experimentálním prototypem, nikoli ověřeným produktem pro výuku. Nebyl hodnocen jako výuková intervence ve třídách a nikdo jej neprověřil z hlediska FERPA, COPPA, státních zákonů o soukromí studentů ani okresních politik, takže instituce, která jej používá se studenty, tuto kontrolu nese sama. Software má licenci MIT a je zdarma, ale provoz simulace vyžaduje přístup k modelu, což stojí peníze. Protože je nezávislý na modelu a běží na lokálních nebo open-weight modelech, lze jej nasadit tam, kde jsou pravidla soukromí přísnější. Na stránce projektu je odkaz na white paper o architektuře a promptech. Při kontrole v listopadu 2026 měl repozitář 98 hvězd a 16 forků.

## Související pojmy

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
