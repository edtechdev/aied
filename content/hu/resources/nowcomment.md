---
title: "NowComment"
created: "2026-11-12T19:40:00-05:00"
updated: "2026-11-12T19:40:00-05:00"
type: resource
summary: "Ingyenes, fiókalapú jelölőplatform, ahol a szálba rendezett vita konkrét mondatokhoz, képrészletekhez és videó-időbélyegekhez kapcsolódik, és ahol az OpenAI-alapú „MI-gondolkodópartnerek” szerkeszthető választervezetet írhatnak egy kijelölt részhez, amelyet a diák közzététel előtt szerkeszt."
url: https://nowcomment.com/
author: "Paul Allison"
author_url: https://youtube.com/@paulallison
resource_type: [software, collection of activities]
access: [free with account]
last_verified: "2026-11-12"
foundations: [ai-literacy, human-ai-collaboration]
pedagogy: [collaborative-learning, student-ai-interaction]
assessment: [peer-assessment, ai-feedback-quality, formative-assessment]
audience: [instructors, learners, faculty developers]
level: [k 12, higher ed]
translation_of: resources/nowcomment
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A NowComment egy szöveget, képet vagy videót vitafelületté alakít: a megjegyzések szálakba rendezve ahhoz a pontos mondathoz, bekezdéshez, képrészlethez vagy időbélyeghez kapcsolódnak, amelyre válaszolnak, így az osztálybeszélgetés a bizonyítékokhoz horgonyozva marad, nem sodródik kommentfolyammá. Ami megkülönbözteti egy egyszerű jelölőeszköztől, az az MI-réteg, amelyet a karbantartó ugyanabba a felületbe épített – egy [OpenAI-alapú](https://nowcomment.com/) „MI-gondolkodópartner” megkérdezhető a kijelölt részről, és az eredmény szerkeszthető tervezetként érkezik, nem kész válaszként.

## Mire használható

Tölts fel egy dokumentumot, hívd meg az olvasókat, és bármely kijelölt rész több beszélgetést is hordozhat, oldalsávban vagy soron belül megjelenítve. Ezen felül az MI-funkciók miatt érdemes most megnézni. A **Ask AI** egy duplán kattintott mondaton vagy bekezdésen partner-választót nyit: az olvasó kiválaszt egy *GPT Thinking Partnert*, kérdést ír, opcionális megjegyzést fűz az olvasóhoz, és a **Resubmit** ismételt használatával addig finomíthat, amíg a kimenet hasznos lesz. A választ ezután a helyén szerkeszti, mielőtt közzéteszi, ami a diákot az MI-szöveg társszerzőjévé teszi, nem továbbítójává. Az ellenőrzött partnerek könyvtára a felhasználók által építettek mellett található, az oldal súgóanyagai pedig [[prompt-engineering|prompt]]-útmutatókat tartalmaznak, amelyek az asszisztenst arra tartják, hogy átdolgozás tervezését kérje az olvasótól, ne magát az átdolgozást készítse el. Egy kísérő *GPT Dialogue Notebook* minta heti írásos naplókat gyűjt, valamint az olvasmányokat, képeket és videókat, amelyekhez kapcsolódnak, dokumentumonként beállított [[privacy|adatvédelemmel]], így az MI-párbeszéd egy félév során halmozódik, nem nullázódik minden foglalkozásnál. A beépített analitika dokumentumonként számolja a megjegyzéseket és látogatásokat, és CSV-be exportál.

A jelölési hurok maga [[collaborative-learning|kollaboratív tanulási]] terv a régebbi értelemben: az olvasók ugyanarra a bizonyítékra válaszolnak, a szál pedig rögzíti, ki mit mondott melyik mondatról. Mivel a válaszok társaktól vagy MI-től egyaránt jöhetnek, alacsony tétű [[peer-assessment|társértékelési]] felületként is működik, a partner-promptok pedig a [[ai-feedback-quality|hasznos MI-visszajelzés]] tulajdonságaira irányíthatók, nem válaszokra.

## Kinek szól

K-12-ben vagy felsőoktatásban szoros olvasást, dokumentumelemzést vagy médiaelemzést tartó tanároknak, és olyan oktatásfejlesztőknek, akik azt akarják, hogy a diákok nyíltan, egy asszisztenssel együtt tárgyaljanak egy szöveget, ne privát chatablakban. A karbantartó, Paul Allison rendszeres bemutatókat és osztálytermi példákat tesz közzé [YouTube-csatornáján](https://youtube.com/@paulallison), köztük egy sorozatot az MI-gondolkodópartnerekről az írásórákon, ami a gyakorlati módja annak, hogy egy osztály elkötelezése előtt lássuk a partner munkafolyamatát.

## Megjegyzések és fenntartások

A fiókok ingyenesek, a dokumentumok lehetnek nyilvánosak vagy meghívott csoporttal megosztottak. Az MI-partnerek OpenAI nagy nyelvi modelleken futnak, így a kijelölt részek és kérdések elhagyják a platform saját hosztolását, és az adott szolgáltató feltételei vonatkoznak rájuk – egy tankerületnek el kell olvasnia az adatfeldolgozási megállapodást, mielőtt kiskorúakkal használja. A kimenetet egy tokenlimit korlátozza, amelyet az oldal szerint még bővítenek, a partnerkönyvtár bejelentkezés mögött van, és az MI-felületek a termék gyorsan mozgó részei: az itt leírt képességeket a 2026. novemberi állapotnak tekintsd, nem végleges funkciókészletnek.

## Kapcsolódó fogalmak

- [[collaborative-learning]]
- [[peer-assessment]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[human-ai-collaboration]]
- [[student-ai-interaction]]
