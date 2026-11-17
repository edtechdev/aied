---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "Oktatói terepútmutató statikus oktatási webhely építéséhez MI-kódolóasszisztenssel: három Markdown-utasításfájl a designhoz, a biztonsághoz és a diákok adatvédelméhez, olvasható útmutatókkal és letölthető csomaggal."
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
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A **Vibe-Coding Center** Miguel Guhlin ingyenes terepútmutatója olyan tanárnak, aki [[vibe-coding|vibe-kódolással]] szeretne építeni egy kis statikus oktatási oldalt MI-kódolóasszisztenssel – egy kilépőjegyet, egy kvízt, egy osztályportfóliót –, anélkül hogy közben szabadon hagyott API-kulcsot vagy diákadatokat tenne közzé.

## Mire használható

Három utasításfájl hordozza az útmutatást: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` és `securevcc.md`. Töltse le őket egy projekt gyökerébe, töltse ki a projektismertető sablont, majd kérje meg az asszisztenst, hogy olvassa el és alkalmazza mindhármat; az útmutató kimondja, hogy a jelenlét nem aktiválás, ezért a fájlokat meg kell nevezni a kérésben. Olvasható útmutatók magyarázzák el mindegyiket, köztük egy „Három lényeges ellenőrzés megosztás előtt” végigvezetést: gyűjtsön kevesebb diákadatot, vizsgálja meg a szabadon hagyott API-kulcsot, és illessze egy eszköz tervezését a tanulási feladatához. A teljes csomag hozzáadja magát az oldalt, a promptcsomagot, az indítási átvizsgálást és az újraépítő szkripteket, a letöltéshez pedig SHA-256 manifestet.

A kísérő [EduSynth Hub példák](https://mguhlin.github.io/funquiz/examples.html) oldal az eredményeket működő statikus eszközként mutatja, nem képernyőképekként: egy kilépőjegy-generátort, amely a választott SOLO-taxonómiai szinten ír kérdést, egy diákportfóliót, amely egyetlen HTML-fájl a GitHub Pagesen, és egy kereshető szakmai fejlesztési forráskönyvtárat, mindegyik kliensoldalon futva, LMS-bejelentkezés nélkül.

## Kinek szól

Tanároknak és [[learning-design|oktatástervezőknek]] a K–12-ben és a felsőoktatásban, akik meg tudják fogalmazni, milyen eszközt akarnak, és hajlandók ellenőrizni, mit termelt az asszisztens. Egy tanszéknek is megfelel, amely egy közös ellenőrzőlistát akar, mielőtt bárki diákoknak szóló eszközt tesz közzé, valamint oktatóknak, akik [[ai-literacy|MI-írástudást]] építésen, nem kritikán keresztül tanítanak.

## Megjegyzések és fenntartások

A központ útmutatás, nem megfelelőségi termék: az oldal semmilyen megfelelőségi állítást nem tesz a saját WCAG 2.2 AA céljára, a „megfelelővé teszik-e ezek a fájlok az oldalamat?” kérdésre nemmel válaszol, és kimondja, hogy a mérnöki átvizsgálás nem helyettesíti az iskolai engedélyezést vagy a jogi felülvizsgálatot. A biztonsági polc az axe-core-ra, a Gitleaks-re, a ZAP-ra és a Playwrightra mutat; ezek hivatkozások, nem csomagolt szoftverek, és az invazívakat eldobható vagy kifejezetten engedélyezett célponton kell használni. Az olvasáshoz nem kell fiók. A HTML-oldalak újraépítéséhez Python és a `markdown-it-py` kell, ami építési függőség, nem látogatói függőség. A repository MIT licencű, a harmadik féltől származó grafikák és a hivatkozott projektek viszont saját feltételeiket tartják, amelyeket a `CREDITS.md` dokumentál.

## Kapcsolódó fogalmak

[[vibe-coding]], [[ai-literacy]], [[accessibility]], [[learning-design]], [[design-thinking]], [[generative-ai]], [[privacy]]
