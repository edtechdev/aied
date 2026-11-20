---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "Kouluttajan kenttäopas staattisen koulutussivuston rakentamiseen tekoälykoodausavustajalla: kolme Markdown-ohjetiedostoa suunnitteluun, turvallisuuteen ja opiskelijoiden tietosuojaan, luettavine oppaineen ja ladattavine paketteineen."
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
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [vibe-coding, ai-literacy, accessibility, learning-design, design-thinking, generative-ai, privacy]
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

**The Vibe-Coding Center** on Miguel Guhlinin ilmainen kenttäopas opettajalle, joka haluaa [[vibe-coding|vibe-koodata]] pienen staattisen koulutussivuston tekoälykoodausavustajan kanssa – poistumislipukkeen, visailun, luokan portfolion – viemättä mukana paljastunutta API-avainta tai opiskelijadataa.

## Mitä sillä voi tehdä

Kolme ohjetiedostoa kantaa ohjeistuksen: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` ja `securevcc.md`. Lataa ne projektin juureen, täytä projektiesitelmän malli ja pyydä sitten avustajaa lukemaan ja soveltamaan kaikki kolme; opas sanoo suoraan, että läsnäolo ei ole aktivointia, joten tiedostot on nimettävä pyynnössä. Luettavat oppaat selittävät jokaisen, mukaan lukien ”Kolme olennaista tarkistusta ennen jakamista” -läpikäynti: kerää vähemmän opiskelijadataa, tarkasta paljastunut API-avain ja sovita työkalun suunnittelu sen oppimistehtävään. Täydellinen paketti lisää sivuston itsensä, kehotepakin, julkaisun tarkistuksen ja uudelleenrakennusskriptit sekä SHA-256-manifestin lataukselle.

Sisarsivu [EduSynth Hub examples](https://mguhlin.github.io/funquiz/examples.html) näyttää tulokset toimivina staattisina työkaluina eikä kuvakaappauksina: poistumislipukegeneraattori, joka kirjoittaa kysymyksen valitulla SOLO-taksonomian tasolla, opiskelijaportfolio, joka on yksi HTML-tiedosto GitHub Pagesissa, ja haettava täydennyskoulutuksen resurssikirjasto – kaikki toimivat selainpuolella ilman LMS-kirjautumista.

## Kenelle se on tarkoitettu

Opettajille ja [[learning-design|opetussuunnittelijoille]] K–12:ssa ja korkeakoulutuksessa, jotka osaavat kuvata haluamansa työkalun ja ovat valmiita tarkistamaan, mitä avustaja tuotti. Se sopii myös osastolle, joka haluaa yhden jaetun tarkistuslistan ennen kuin kukaan julkaisee opiskelijoille suunnatun työkalun, ja opettajille, jotka opettavat [[ai-literacy|tekoälylukutaitoa]] rakentamisen eikä kritiikin kautta.

## Huomioita ja varauksia

Keskus on ohjeistusta, ei vaatimustenmukaisuustuote: sivusto ei esitä vaatimustenmukaisuusväitettä omalle WCAG 2.2 AA -tavoitteelleen, vastaa kysymykseen ”tekevätkö näiden tiedostojen käyttö sivustostani vaatimustenmukaisen?” ei, ja sanoo, että insinööritarkastus ei korvaa koulun hyväksyntää eikä oikeudellista tarkastusta. Turvallisuushylly osoittaa axe-coreen, Gitleaksiin, ZAP:iin ja Playwrightiin; ne ovat viittauksia eivätkä paketoitua ohjelmistoa, ja tunkeilevat niistä on tarkoitettu kertakäyttöiseen tai nimenomaisesti valtuutettuun kohteeseen. Lukeminen ei vaadi tiliä. HTML-sivujen uudelleenrakentaminen vaatii Pythonin ja `markdown-it-py`:n, joka on rakennusriippuvuus eikä vierailijan riippuvuus. Repo on MIT-lisensoitu, kun taas kolmannen osapuolen kuvitus ja linkitetyt projektit pitävät omat ehtonsa, jotka on dokumentoitu `CREDITS.md`:ssä.
