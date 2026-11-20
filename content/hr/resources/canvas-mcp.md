---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Poslužitelj MCP-a otvorenog koda koji Claudeu, Cursoru, Codexu i drugim agentima omogućuje čitanje i djelovanje unutar Canvas LMS-a — alati za studente, nastavnike i dizajnere nastave, s ograničenim radnjama pisanja i neobveznom anonimizacijom podataka studenata."
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
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [agentic-ai, institutional-ai-infrastructure]
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

**Canvas MCP** je otvoreni poslužitelj Model Context Protocola Vishala Sachdeva koji povezuje AI klijenta s instancom Canvas LMS-a: agent može navesti studentov nadolazeći rad, pročitati zadaće i predaje kolegija, poslati poruku razredu ili pregledati kolegij na pristupačnost, sve kroz alate koje poslužitelj izlaže, a ne kroz ad hoc struganje zaslona.

## Što možete raditi s njim

Poslužitelj isporučuje tri obitelji alata. Studentski alati odgovaraju na „što se predaje ovaj tjedan“, „jesam li predao sve“, „koliko mi je pokušaja kviza ostalo“ preko Canvasovih vlastitih `self` krajnjih točaka. Alati za nastavnike navode i stvaraju zadaće, čitaju predaje, ocjenjuju skupno, šalju razgovore i izvlače analitiku zadaća. Alati za dizajnere nastave pokrivaju provjere kvalitete kolegija i WCAG skeniranja pristupačnosti. Ukupno je dostupno do 128 alata, iako zadani profil registrira manje, a alati omeđeni značajkama podižu taj broj. Povrh alata, osam agentnih vještina pakira višekoračne recepte — tjedni plan, jutarnju provjeru zdravlja kolegija, stablo odluka za skupno ocjenjivanje, tok recenzije vršnjaka, reviziju kolegija prije semestra — koje se mogu instalirati u više od 40 agenata kroz `skills.sh`.

## Za koga je

Nastavnici koji žele da agent obavi rutinsko čitanje i dopisivanje oko kolegija, i [[institutional-ai-infrastructure|institucionalni timovi]] koji procjenjuju što agent povezan s LMS-om doista može dosegnuti. Dizajneri nastave ovdje dobivaju ono najbliže automatiziranom pregledu kolegija. Projekt je razrađen primjer [[agentic-ai|agentnih alata]] na razini LMS-a jedne ustanove, a ne općenitog chatbota.

## Napomene i upozorenja

Postava je lokalna: Python 3.11 ili noviji, Canvas API token i URL te MCP klijent, uz proširenje za Claude Desktop koje se pokreće dvostrukim klikom. Javni hostani poslužitelj povučen je, pa zajednička implementacija znači samostalno hostanje iza vlastite autentikacije ustanove. Alati za pisanje omeđeni su — HTTP poslužitelji samo čitaju osim ako se alati za pisanje izričito ne dopuste, brisanja traže potvrdne tokene, a izvršavanje koda radi u pješčaniku koji se pri kvaru zatvara. Kontrole privatnosti uključuju se po izboru: anonimizacija odgovora, maskiranje e-adresa i filtriranje osobnih podataka moraju se omogućiti, a README je pažljiv u tvrdnji da one mogu poduprijeti obveze iz FERPA-e, ali ne uspostavljaju sukladnost, koja ovisi o implementaciji i pružatelju umjetne inteligencije. U poslužitelju nema telemetrije, ali Canvas i odabrani klijent vode vlastite zapise. Projekt je pod MIT licencijom, aktivno se razvija, a njegovi su vlastiti vodiči mjerodavni za aktualne nazive alata i konfiguraciju.
