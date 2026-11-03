---
title: "LearnHarness"
created: "2026-11-02T05:55:00-05:00"
type: resource
summary: "Bezplatná open-source (AGPL-3.0) desktopová aplikácia, v ktorej agenti AI zisťujú, čo študent už chápe, plánujú mapu závislostí k cieľu, učia po jednom kroku uvažovania a prispôsobujú precvičovanie s trvalým grafom poznatkov."
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
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

**LearnHarness** je desktopová aplikácia na učenie s [[agentic-ai|podporou agentov]], ktorá organizuje hodinu okolo [[prior-knowledge|toho, čo študent už chápe]], a nie okolo zoznamu tém. Projekt opisuje štyri kroky: **merať**, teda sondovať myšlienky, na ktorých cieľ závisí, aby sa našlo, kde porozumenie končí; **plánovať**, teda odvodiť mapu závislostí k cieľu a zobraziť ju ako mapu hodiny; **učiť**, teda postupovať po jednom kroku uvažovania v rytme predpoveď–vysvetlenie–kontrola, aby sa zmätky opravili skôr, než sa na nich čokoľvek postaví; a **precvičovať**, teda prúd úloh zacielených na vlastné ťažkosti študenta.

## Čo s tým môžete robiť

Charakteristickým vstupom je pole myslenia: študenti píšu alebo diktujú svoje uvažovanie a neistotu, namiesto toho, aby len odpovedali, čo projekt berie ako spôsob, akým si agent predstavuje uvažovanie, a nie ako záznam správne/nesprávne. Dokáže tiež na pozadí skúmať otázky, generovať vizuálne vysvetlenia a stavať interaktívne ukážky.

To, čo sa hromadí, je [[knowledge-graph|graf poznatkov]] z tvrdení a reťazcov uvažovania, prepojený späť na sedenia, z ktorých vzišiel, a čítaný neskoršími učiacimi a precvičovacími agentmi ako kontext; poznámky sa dajú importovať. Projekt uvádza, že graf ukladá myšlienky a spojenia, nie hodnotenia schopností.

## Pre koho je to určené

Pre samostatne sa učiacich, ktorí pracujú s náročným materiálom, a pre vyučujúcich alebo vývojárov, ktorí chcú vidieť, ako vyzerá [[intelligent-tutoring|AI tútor]] postavený na agentoch, keď sú jeho prompty a stav prehľadné. Je napísaný v TypeScripte, beží zo zdrojového kódu a jeho testy sú dokumentované ako deterministické, bez volaní modelu.

## Poznámky a výhrady

Zadarmo je softvér, nie inferencia: študenti prinášajú kľúče poskytovateľa, predplatné, lokálny CLI Claude Code alebo akýkoľvek koncový bod kompatibilný s OpenAI a platia poskytovateľovi bez prirážky; živý merač odhaduje len známe náklady API. Záznamy, chaty a kľúče zostávajú na stroji ako obyčajné súbory, ale projekt upozorňuje, že lokálne úložisko neznamená offline spracovanie, keďže požiadavky na model, voliteľné diktovanie aj webový výskum dosahujú externé služby. Inštalátor pre Windows x64 nie je podpísaný, takže Windows upozorní. Žiadna štúdia účinnosti nie je uvedená, takže argument stojí na vyhlásenom odôvodnení, nie na nameraných výsledkoch; repozitár mal pri kontrole 2. novembra 2026 približne 4 800 hviezd.

## Prepojené pojmy

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
