---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "Web-aplikacija za izradu zadaća s umjetnom inteligencijom korak po korak, u kojoj nastavnik određuje ulogu modela i ograde za upotrebu od strane studenata, dok identitet studenta ostaje izvan konteksta modela."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Graditelj zadaća s integriranom umjetnom inteligencijom, koji je izradio Joseph Slade na Oregon State University, a njime upravlja AI Education Labs, Inc. Premisa je da alternativa chatbotu bez ikakvih ograničenja nije zabrana nego struktura: nastavnik definira korake kroz koje student prolazi, odlučuje koju ulogu model ima u svakom koraku i postavlja koliko se student smije osloniti na njega. Zadaća se zatim objavljuje kao poveznica za pridruživanje, umjesto da se distribuira kao dokument s promptom.

## Što možete raditi s njim

- **Postavite ulogu modela po zadaći.** Graditelj nudi predloške tutora, sokratovskog ispitivača, davatelja povratnih informacija i istraživačkog asistenta, plus prilagođeni prompt, pa se asistent ponaša onako kako zadatak zahtijeva.
- **Postavite ograde između koraka.** Korak može zahtijevati da student objasni svoje rezoniranje prije nego što napreduje, a pomoć umjetne inteligencije može se ograničiti po koraku — sučelje prikazuje preostali broj umjesto neograničenog pristupa.
- **Odaberite radnu površinu.** Studenti pišu na stranici dokumenta s komentarima na margini, a dostupni su i izgledi chata i bilježnice ondje gdje bolje odgovaraju zadatku od stranice.
- **Objavite i pratite rezoniranje, ne samo rezultat.** Poveznica za pridruživanje upisuje studente, napredak se sprema usput, a nastavnik može čitati prijepis svakog studenta i izvesti ga kao CSV ili Markdown.
- **Izradite nacrt uz umjetnu inteligenciju, zatim ga doradite.** Postavljanje može početi od nekoliko pitanja, učitane postojeće zadaće ili neke prethodne, uz asistenta na strani nastavnika koji popunjava prvi nacrt.

Objavljeni primjeri sugeriraju namjeravani raspon: zadatak iz fizike o dokazima i svjedočanstvima, vježba iz biologije koja dijagnosticira pogrešku u rezoniranju u objašnjenju AI stažista, i zadatak iz psihologije koji provjerava opisuje li novinska priča dizajn istraživanja.

## Za koga je

Nastavnici u visokom obrazovanju koji žele da [[learning-design|oblikovanje učenja]] nosi politiku umjetne inteligencije — to jest, koji radije ograničavaju kako se model smije koristiti unutar zadatka nego nadziru je li korišten. Ograde i postavke uloga izraz su [[guardrails|zaštitnih ograda]] u vrijeme dizajniranja, a aplikacija je usmjerena na zadaće u sklopu nastave, a ne na institucionalno uvođenje chata.

## Napomene i upozorenja

- **Pilot-faza.** Uvjeti navode da se usluga trenutačno pruža besplatno za pilote te da se plaćeni planovi mogu uvesti uz obavijest, kao i da se značajke mogu mijenjati ili povući. Nema javne stranice s cijenama; do cijena dolazite tek nakon prijave.
- **Tvrdnja o privatnosti arhitektonska je i vrijedi je pažljivo pročitati.** Svaki student dobiva nasumični identifikator sesije po zadaći, mapiranje studentskog računa na sesiju ostaje na poslužitelju Repertoire, a model prima anonimnu sesiju, kontekst zadaće i studentov tekst. Upozorenje leži u samoj politici: tekst koji student utipka, a koji ga identificira, šalje se kao i svaki drugi tekst, a nastavnik kolegija može čitati prijepise.
- **Inferencija treće strane.** Odgovori se generiraju putem Claude API-ja tvrtke Anthropic, uz API tvrtke OpenAI kao rezervu, pod komercijalnim uvjetima za koje politika kaže da od rujna 2026. isključuju treniranje na API ulazima i izlazima. Institucija bi to trebala potvrditi kroz vlastiti ugovor, a ne kroz web-stranicu.
- **Nije ocjenjivač.** Politika i uvjeti oboje opisuju prosudbe asistenta, poput „cilj je postignut“, kao pomoć nastavniku; ocjene i akademske odluke ostaju nastavniku i instituciji, a odluke o [[ai-use-disclosure|otkrivanju upotrebe umjetne inteligencije]] studentima prepuštene su nastavniku.
- **Hostano u SAD-u.** Podaci su u Google Cloud Firestore, uz hosting na Vercel, a politika se bavi FERPA obvezama ondje gdje usluga obrađuje obrazovne zapise; korisnicima izvan Sjedinjenih Država poručuje se da se njihovi podaci obrađuju tamo.

## Povezani pojmovi

- [[learning-design]] — strukturirani dizajn zadaća kao točka u kojoj politika umjetne inteligencije postaje konkretna.
- [[guardrails]] — ograde za angažman i ograničena pomoć umjetne inteligencije kao ograničenja u vrijeme dizajniranja.
- [[ai-use-disclosure]] — nastavnik, a ne platforma, odlučuje kako se upotreba umjetne inteligencije prijavljuje studentima.
