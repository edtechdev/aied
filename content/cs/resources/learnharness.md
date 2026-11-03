---
title: "LearnHarness"
created: "2026-11-02T05:55:00-05:00"
type: resource
summary: "Bezplatná open-source (AGPL-3.0) aplikace pro desktop, v níž AI agenti zjišťují, co student už chápe, plánují cestu k cíli, učí po krocích uvažování a přizpůsobují procvičování s trvalým grafem znalostí."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

**LearnHarness** je desktopová aplikace pro učení s [[agentic-ai|asistencí agentů]], která hodinu organizuje kolem [[prior-knowledge|toho, čemu student už rozumí]], nikoli kolem seznamu témat. Projekt popisuje čtyři kroky: **měřit**, tedy sondovat myšlenky, na nichž cíl závisí, aby se našlo, kde porozumění končí; **plánovat**, tedy odvodit mapu závislostí k cíli a ukázat ji jako mapu hodiny; **učit**, tedy postupovat po jednom kroku uvažování v rytmu předpověz-vysvětli-ověř, aby se zmatky opravily dřív, než se na nich něco postaví; a **procvičovat**, tedy proud úloh cílených na vlastní obtíže studenta.

## Co s ní můžete dělat

Charakteristickým vstupem je pole myšlení: studenti píší nebo diktují své uvažování a nejistotu, místo aby jen odpovídali, což projekt chápe jako způsob, jímž si agent představuje uvažování, nikoli jako záznam správných a špatných odpovědí. Umí také na pozadí zkoumat otázky, generovat vizuální vysvětlení a stavět interaktivní ukázky.

Co se hromadí, je [[knowledge-graph|graf znalostí]] výroků a řetězců uvažování, propojený zpět na sezení, z nichž vzešel, a čtený pozdějšími učitelskými a procvičovacími agenty jako kontext; poznámky lze importovat. Projekt uvádí, že graf ukládá myšlenky a souvislosti, nikoli hodnocení schopností.

## Pro koho je určena

Pro samostatné studenty pracující s obtížnou látkou a pro vyučující nebo vývojáře, kteří chtějí vidět, jak vypadá [[intelligent-tutoring|AI tutor]] postavený na agentech, když jsou jeho prompty a stav prohlédnutelné. Je v TypeScriptu, spouští se ze zdrojového kódu a jeho testy jsou dokumentovány jako deterministické, bez volání modelů.

## Poznámky a upozornění

Zdarma je software, nikoli inference: studenti si přinášejí klíče poskytovatelů, předplatné, lokální Claude Code CLI nebo jakýkoli koncový bod kompatibilní s OpenAI a platí poskytovateli bez přirážky; živý měřič odhaduje jen známé ceny API. Záznamy, chaty a klíče zůstávají na stroji jako prosté soubory, ale projekt varuje, že lokální úložiště neznamená offline zpracování, protože požadavky na model, volitelné diktování i webový výzkum dosahují na externí služby. Instalátor pro Windows x64 není podepsán, takže Windows bude varovat. Studie účinnosti není uvedena, takže argument stojí na deklarovaném odůvodnění, nikoli na změřených výsledcích; repozitář měl při kontrole 2. listopadu 2026 zhruba 4 800 hvězd.

## Související pojmy

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
