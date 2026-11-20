---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "Webová aplikácia na vytváranie postupných zadaní s AI, v ktorých vyučujúci nastavuje rolu modelu a brány na jeho používanie študentmi a identita študenta zostáva mimo kontextu modelu."
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
contributors: [editor]
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [learning-design, guardrails, ai-use-disclosure]
---
*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Nástroj na tvorbu zadaní s integrovanou AI, ktorý vytvoril Joseph Slade na Oregon State University a prevádzkuje ho AI Education Labs, Inc. Východiskom je, že alternatívou k chatbotu bez obmedzení nie je zákaz, ale štruktúra: vyučujúci definuje kroky, ktorými študent prechádza, rozhoduje, akú rolu model zohráva v každom kroku, a nastavuje, do akej miery sa naň študent môže spoliehať. Zadanie sa potom publikuje ako odkaz na pripojenie, namiesto aby sa distribuovalo ako dokument s promptom.

## Čo s tým môžete robiť

- **Nastavte rolu modelu pre každé zadanie.** Nástroj ponúka predvoľby tútora, sokratovského vypytovača, poskytovateľa spätnej väzby a výskumného asistenta, plus vlastný prompt, takže asistent sa správa tak, ako si úloha vyžaduje.
- **Vložte brány medzi kroky.** Krok môže vyžadovať, aby študent vysvetlil svoje uvažovanie, než postúpi ďalej, a pomoc AI môže byť obmedzená počtom na každom kroku — rozhranie zobrazuje zostávajúci počet, nie neobmedzený prístup.
- **Vyberte pracovnú plochu.** Študenti píšu na stránke dokumentu s komentármi na okraji; k dispozícii sú aj rozloženia chatu a zošita tam, kde sa úlohe hodia viac než stránka.
- **Publikujte a sledujte uvažovanie, nielen výstup.** Odkaz na pripojenie zapíše študentov, postup sa priebežne ukladá a vyučujúci si môže prečítať prepis každého študenta a exportovať ho ako CSV alebo Markdown.
- **Vytvorte návrh s AI, potom ho dolaďte.** Nastavenie môže začať niekoľkými otázkami, nahraným existujúcim zadaním alebo predchádzajúcim zadaním, pričom asistent na strane vyučujúceho vyplní prvý návrh.

Publikované príklady naznačujú zamýšľaný rozsah: úloha z fyziky o dôkazoch a svedectvách, cvičenie z biológie diagnostikujúce chybu v uvažovaní vo vysvetlení AI stážistu a úloha z psychológie overujúca, či spravodajský článok opisuje dizajn štúdie.

## Pre koho je to určené

Vyučujúci na vysokých školách, ktorí chcú, aby politiku AI niesol [[learning-design|návrh učenia]] — teda tí, ktorí radšej obmedzia, ako sa model môže používať v rámci úlohy, než aby kontrolovali, či bol použitý. Brány a nastavenia rolí sú vyjadrením [[guardrails|zábran]] už pri návrhu a aplikácia je zameraná na prácu v kurzoch, nie na inštitucionálne nasadenie chatu.

## Poznámky a výhrady

- **Pilotná fáza.** Podmienky uvádzajú, že služba sa momentálne poskytuje bezplatne pre pilotné projekty, že platené plány môžu byť zavedené s upozornením a že funkcie sa môžu meniť alebo stiahnuť. Verejná stránka s cenami neexistuje; k cenám sa dostanete až po prihlásení.
- **Tvrdenie o súkromí je architektonické a oplatí sa ho čítať pozorne.** Každý študent dostane náhodný identifikátor relácie pre každé zadanie, mapovanie účtu študenta na reláciu zostáva na serveri Repertoire a model dostáva anonymnú reláciu, kontext zadania a text študenta. Výhrada je v samotnej politike: text, ktorý študent napíše a ktorý ho identifikuje, sa odosiela ako akýkoľvek iný text a vyučujúci kurzu si môže prepisy prečítať.
- **Inferencia tretej strany.** Odpovede sa generujú cez API Claude od Anthropic s API od OpenAI ako zálohou, za komerčných podmienok, ktoré podľa politiky vylučujú trénovanie na vstupoch a výstupoch API k septembru 2026. Inštitúcia by si to mala potvrdiť cez vlastnú zmluvu, nie cez webovú stránku.
- **Nie je to hodnotiteľ.** Politika aj podmienky opisujú úsudky asistenta, ako napríklad „splnený cieľ“, ako pomôcku pre vyučujúceho; známky a akademické rozhodnutia zostávajú vyučujúcemu a inštitúcii a rozhodnutia o [[ai-use-disclosure|zverejňovaní používania AI]] študentom sa ponechávajú na vyučujúceho.
- **Hostované v USA.** Dáta sú uložené v Google Cloud Firestore s hostingom u Vercel a politika rieši záväzky podľa FERPA tam, kde služba spracúva vzdelávacie záznamy; používateľom mimo Spojených štátov sa oznamuje, že ich dáta sa spracúvajú tam.
