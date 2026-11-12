---
title: "Amplify GenAI"
created: "2026-11-12T11:04:00-05:00"
updated: "2026-11-12T11:38:00-05:00"
type: resource
summary: "Podniková platforma generatívnej AI Vanderbilt University s licenciou MIT, nasadená vo vlastnom účte AWS inštitúcie: vlastní asistenti nad lokálnymi dokumentmi, odpovede s rozšíreným vyhľadávaním, zdieľanie v organizácii a účtovanie nákladov až po jednotlivú správu."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
translation_of: resources/amplify-genai
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Amplify GenAI je opačná stávka než celokampusová licencia na komerčného asistenta: inštitúcia prevádzkuje platformu sama vo vlastnom účte Amazon Web Services a platí za to, čo využije. Vanderbilt ju postavil pre vlastnú komunitu, vydal ju pod MIT v troch repozitároch a teraz ju ponúka iným organizáciám ako alternatívu k podnikovým zmluvám za sedadlo — s argumentom, že drahá má byť časť s modelmi, nie počet sedadiel.

## Čo s ňou môžete robiť

Používatelia vytvárajú vlastných asistentov nahraním dokumentov alebo pripojením dátových zdrojov a asistenti odpovedajú pomocou [[rag|generovania rozšíreného vyhľadávaním]] nad týmto materiálom, nie len zo všeobecného trénovania. Asistentov možno zdieľať v organizácii, reťaziť do jednej konverzácie a vybaviť šablónami promptov; platforma tiež vytvára súbory PowerPoint a Word, diagramy a vizualizácie. Administrátori dostanú to, čo zdieľaná služba potrebuje: účtovanie nákladov až na úroveň správy, limity na používateľa, priečinky a pracovné priestory a SSO, a to všetko v nasadení, ktoré inštitúcia kontroluje.

Dizajnové rozhodnutie, ktoré je pre [[higher-ed|vysokú školu]] najdôležitejšie, je model účtovania. Vanderbilt uvádza, že pri 1 300 pilotných používateľoch boli náklady na používateľa približne \$3 mesačne vrátane AWS a že polovica týchto používateľov spotrebovala menej ako \$1 mesačne na tokeny — údaje, ktoré univerzita predkladá ako prípadovú štúdiu, nie ako auditovaný benchmark. Účtovanie podľa používania odmeňuje kampus, kde menšina používateľov robí väčšinu práce, čo je bežný tvar zavádzania AI, a umožňuje odpovedať na otázku finančného oddelenia („koľko to stojí na študenta?“) z logov, nie zo zmluvy.

## Pre koho je určená

Centrálne IT a kancelárie CIO, ktoré už prevádzkujú záťaže v AWS a chcú komunitou podporovanú alternatívu ku komerčnému podnikovému asistentovi; učitelia, ktorí potrebujú asistentov postavených na materiáloch kurzu bez toho, aby ich posielali do spotrebiteľského produktu dodávateľa; a inštitúcie, ktoré chcú jedno miesto, kde vidia, čo ľudia s modelmi robia. Keďže sa nasadzuje do vlastného účtu inštitúcie, otázku umiestnenia dát rieši nasadenie, nie sľub dodávateľa.

## Poznámky a upozornenia

Licencia je bezplatná, prevádzka nie: inštitúcia platí AWS a poskytovateľom modelov. Výber modelu ide cez Amazon Bedrock (Anthropic, Mistral) alebo OpenAI a Microsoft Azure a prevádzka vlastných lokálnych modelov nie je implementovaná. Projekt otvorene uvádza, že nevie podporiť individuálne nasadenia, a organizácie odkazuje na komerčných partnerov — realistické náklady teda zahŕňajú zamestnanca alebo dodávateľa. Ide o nasadenie z troch repozitárov (frontend, backend, infraštruktúra) s desiatkami hviezdičiek, nie tisíckami, a porovnanie nákladov vyššie je vlastná skúsenosť Vanderbiltu, nie kontrolovaná štúdia. Inštitúcie, ktoré by radšej držali inferenciu na hardvéri, ktorý vlastnia, by sa mali pozrieť na [MindRouter](/aied/resources/mindrouter/) a čítať oba spolu: Amplify je aplikačná vrstva nad modelmi dodávateľov, MindRouter je brána nad vašimi vlastnými GPU.

## Prepojené pojmy

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
