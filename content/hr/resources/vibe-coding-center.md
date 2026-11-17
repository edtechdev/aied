---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "Terenski vodič za nastavnike o izradi statične obrazovne stranice uz AI pomoćnika za programiranje: tri Markdown datoteke s uputama za dizajn, sigurnost i privatnost studenata, uz čitljive vodiče i paket za preuzimanje."
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
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

**Vibe-Coding Center** besplatan je terenski vodič Miguela Guhlina za nastavnika koji želi [[vibe-coding|vibe kodirati]] malu statičnu obrazovnu stranicu s AI pomoćnikom za programiranje — izlaznu karticu, kviz, razredni portfolio — a da pritom ne objavi izloženi API ključ ili podatke studenata.

## Što možete raditi s njim

Tri datoteke s uputama nose smjernice: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` i `securevcc.md`. Preuzmite ih u korijen projekta, ispunite predložak sažetka projekta, zatim zamolite pomoćnika da pročita i primijeni sve tri; vodič izričito kaže da prisutnost nije aktivacija, pa se datoteke moraju imenovati u zahtjevu. Čitljivi vodiči objašnjavaju svaku od njih, uključujući šetnju „Tri bitne provjere prije dijeljenja“: prikupite manje podataka o studentima, pregledajte izloženi API ključ i prilagodite dizajn alata njegovu zadatku učenja. Cijeli paket dodaje samu stranicu, paket uputa, pregled prije objave i skripte za ponovnu izgradnju, uz SHA-256 manifest za preuzimanje.

Popratna stranica [primjera EduSynth Huba](https://mguhlin.github.io/funquiz/examples.html) prikazuje rezultate kao radne statične alate, a ne snimke zaslona: generator izlaznih kartica koji piše pitanje na odabranoj razini SOLO taksonomije, studentski portfolio koji je jedna HTML datoteka na GitHub Pages i pretraživa knjižnica izvora za stručno usavršavanje — sve radi na strani klijenta bez prijave u LMS.

## Za koga je

Nastavnici i [[learning-design|dizajneri nastave]] u K-12 i visokom obrazovanju koji mogu opisati alat koji žele i voljni su provjeriti što je pomoćnik proizveo. Odgovara i odjelu koji želi jedan zajednički kontrolni popis prije nego bilo tko objavi alat namijenjen studentima, te nastavnicima koji podučavaju [[ai-literacy|pismenost o umjetnoj inteligenciji]] kroz izradu, a ne kroz kritiku.

## Napomene i upozorenja

Centar je smjernica, a ne proizvod za sukladnost: stranica ne tvrdi sukladnost s vlastitim ciljem WCAG 2.2 AA, na pitanje „čini li upotreba ovih datoteka moju stranicu sukladnom?“ odgovara niječno i navodi da inženjerski pregled ne zamjenjuje odobrenje škole ni pravni pregled. Polica sigurnosti upućuje na axe-core, Gitleaks, ZAP i Playwright; to su reference, a ne priloženi softver, a invazivni alati namijenjeni su cilju koji se može odbaciti ili je izričito ovlašten. Za čitanje nije potreban račun. Ponovna izgradnja HTML stranica traži Python i `markdown-it-py`, što je ovisnost izgradnje, a ne ovisnost posjetitelja. Repozitorij je pod MIT licencijom, dok umjetnička djela trećih strana i povezani projekti zadržavaju vlastite uvjete, dokumentirane u `CREDITS.md`.

## Povezani pojmovi

[[vibe-coding]], [[ai-literacy]], [[accessibility]], [[learning-design]], [[design-thinking]], [[generative-ai]], [[privacy]]
