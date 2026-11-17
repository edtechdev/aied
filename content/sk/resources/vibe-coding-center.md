---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "Terénna príručka pre vzdelávateľov o stavaní statickej vzdelávacej webovej stránky s asistentom na kódovanie: tri inštrukčné súbory Markdown pre dizajn, bezpečnosť a súkromie študentov, s čitateľnými príručkami a stiahnuteľným balíkom."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

**Vibe-Coding Center** je bezplatná terénna príručka Miguela Guhlina pre učiteľa, ktorý chce pomocou [[vibe-coding|vibe codingu]] vytvoriť malú statickú vzdelávaciu stránku s asistentom na kódovanie — výstupný lístok, kvíz, triedne portfólio — bez toho, aby s ňou odoslal odhalený kľúč API alebo údaje študentov.

## Čo s tým môžete robiť

Tri inštrukčné súbory nesú usmernenie: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` a `securevcc.md`. Stiahnite ich do koreňa projektu, vyplňte šablónu zadania projektu a potom požiadajte asistenta, aby prečítal a použil všetky tri; príručka je výslovná v tom, že prítomnosť nie je aktivácia, takže súbory treba v požiadavke pomenovať. Čitateľné príručky vysvetľujú každý z nich vrátane prehliadky „Tri základné kontroly pred zdieľaním“: zbierajte menej údajov o študentoch, skontrolujte odhalený kľúč API a prispôsobte dizajn nástroja jeho učebnej úlohe. Kompletný balík pridáva samotnú stránku, balík promptov, kontrolu pred spustením a skripty na prestavbu, s manifestom SHA-256 pre stiahnutie.

Sprievodná stránka [príkladov EduSynth Hub](https://mguhlin.github.io/funquiz/examples.html) ukazuje výsledky ako funkčné statické nástroje, nie ako snímky obrazovky: generátor výstupných lístkov, ktorý píše otázku na zvolenej úrovni taxonómie SOLO, študentské portfólio, ktoré je jediným HTML súborom na GitHub Pages, a prehľadateľná knižnica zdrojov profesijného rozvoja, všetko bežiace na strane klienta bez prihlásenia do LMS.

## Pre koho je určený

Učitelia a [[learning-design|inštrukční dizajnéri]] v K-12 a vo vysokom školstve, ktorí dokážu opísať nástroj, aký chcú, a sú ochotní skontrolovať, čo asistent vytvoril. Hodí sa aj pre katedru, ktorá chce jeden zdieľaný kontrolný zoznam predtým, než niekto zverejní nástroj pre študentov, a pre učiteľov, ktorí učia [[ai-literacy|AI gramotnosť]] budovaním, nie kritikou.

## Poznámky a upozornenia

Centrum je usmernenie, nie produkt súladu: stránka neuvádza žiadne tvrdenie o zhode so svojím cieľom WCAG 2.2 AA, na otázku „robí používanie týchto súborov moju stránku v súlade?“ odpovedá nie a hovorí, že inženýrska recenzia nenahrádza školské povolenie ani právnu kontrolu. Polica bezpečnosti ukazuje na axe-core, Gitleaks, ZAP a Playwright; sú to odkazy, nie pribalený softvér, a invazívne nástroje sú určené pre jednorazový alebo výslovne povolený cieľ. Čítanie nevyžaduje účet. Prestavba HTML stránok vyžaduje Python a `markdown-it-py`, čo je závislosť zostavenia, nie závislosť návštevníka. Repozitár má licenciu MIT, kým diela tretích strán a prepojené projekty majú vlastné podmienky zdokumentované v `CREDITS.md`.

## Prepojené pojmy

[[vibe-coding]], [[ai-literacy]], [[accessibility]], [[learning-design]], [[design-thinking]], [[generative-ai]], [[privacy]]
