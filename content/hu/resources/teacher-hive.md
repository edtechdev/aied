---
title: "Teacher Hive"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: resource
summary: "Tony Vincent ingyenesen használható tárhelyplatformja, ahol a pedagógusok MI-vel készített osztálytermi webalkalmazásokat tesznek közzé, hivatkozással vagy QR-kóddal osztják meg őket, és több száz, más pedagógusok által készített alkalmazás között böngészhetnek."
url: https://teacherhive.app/
author: "Tony Vincent"
author_url: https://teacherhive.app/about
resource_type: [software, collection of tools]
access: [freemium]
last_verified: "2026-11-10"
foundations: [teacher-ai-competency]
technology: [generative-ai]
audience: [instructors, instructional designers]
level: [k 12, teacher education]
contributors: [editor]
source_updated: "2026-11-10T19:52:00-05:00"
translation_of: resources/teacher-hive
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A **Teacher Hive** tárhely- és megosztóplatform a pedagógusok által készített osztálytermi alkalmazásokhoz, amelyet Tony Vincent épített. A feltevése az, hogy a tantermi MI-ben a nehéz rész már nem az, hogy egy modell írjon egy kis alkalmazást, hanem hogy legyen hely, ahol iskolai hálózaton fut, és a diákok könnyen meg tudják nyitni. A pedagógusok beillesztenek vagy feltöltenek egyetlen HTML-fájlt, amelyet a ChatGPT, a Claude vagy a Gemini készített, a Teacher Hive pedig egy rövid nyilvános hivatkozáson szolgálja ki, ikonnal és QR-kóddal. A böngészés, a könyvjelzőzés, a követés és a közzététel ingyenes; a fizetős Pro szint emeli a tárhely- és alkalmazáskorlátokat.

## Mire használható

**Böngésszen** a közzétett alkalmazások között gyűjtemények szerint – agytorna-szünetek, angol nyelv és irodalom, matematika, természettudomány, társadalomismeret, tanári eszközök –, majd **tegyen közzé** egy alkalmazást HTML beillesztésével, név, leírás, ikon és MI-hozzájárulás megadásával. Minden alkalmazás kap egy információs oldalt egy Indítás gombbal és QR-kód megjelenítéssel, és márkajelzés vagy diákbejelentkezés nélkül nyílik meg. Egy opcionális **Superpowers** réteg mentett válaszokat, MI-hívásokat, e-mailt és fájltárolást ad hozzá, a csomagtól függően mérve. Egyetlen olyan alkalmazáshoz, amelynek nincs szüksége galériára, két ingyenes alternatíva működik fogd és vidd módszerrel: a [Cloudflare Drop](https://www.cloudflare.com/drop/) egy mappát, zipet vagy egyetlen HTML-fájlt tesz közzé egy workers.dev URL-en fiók nélkül, feltéve, hogy a telepítést 60 percen belül igénylik, a [Netlify Drop](https://app.netlify.com/drop) pedig ugyanezeket a bemeneteket teszi közzé egy nyilvános hivatkozáson az ingyenes csomagjában.

## Kinek szól

A K–12-es pedagógusok, akik [[generative-ai|generatív MI]]-vel építettek egy kis eszközt, és megbízható helyet keresnek a tárhelyezéshez, a fő közönség; a platformot [[vibe-coding|vibe-codingra]] tervezték, nem fejlesztőknek. Az oktatástervezők és a pedagógusképzők példaként használhatják a gyűjteményeket, és alacsony tétű módon építhetik a [[teacher-ai-competency|tanári MI-kompetenciát]].

## Megjegyzések és fenntartások

A Member és a Builder ingyenes (Builder: 50 alkalmazás, 50 MB); a Pro \$10 havonta vagy \$60 évente 500 alkalmazásért. A hozzáférés freemium.

Az adatvédelem az erősebb állítás, de a felelősséget a pedagógusokra tolja. A Teacher Hive nem hoz létre diákfiókokat, nem kér személyes adatokat a diákoktól, és nem futtat analitikai vagy hirdetési szkripteket a közzétett alkalmazásokban. Mivel az alkalmazások hivatkozással nyilvánosak, a feltételek a pedagógusokat teszik felelőssé azért, hogy alkalmazásaik ne gyűjtsenek neveket, e-mail-címeket, diákazonosítókat vagy tartózkodási helyet. Az akadálymentességi lefedettség (WCAG 2.2 AA) a Teacher Hive saját oldalaira vonatkozik, nem a pedagógusok által készített alkalmazásokra, amelyeket nem teszteltek. Nyílt forráskódú licencet nem ad meg, és a rendelkezésre állásra és az adatmegőrzésre nincs garancia.

## Kapcsolódó fogalmak

- [[teacher-ai-competency]]
- [[generative-ai]]
- [[vibe-coding]]
- [[ai-literacy]]
- [[professional-training]]
