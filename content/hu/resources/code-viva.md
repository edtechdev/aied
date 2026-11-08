---
title: "Code Viva"
created: "2026-10-24T05:33:18-04:00"
type: resource
summary: "Ingyenes böngészőeszköz, amely a szóbeli kódvédés írásos, időzített változatát futtatja minden diák számára egy programozási kurzuson, idézett bizonyítékokkal alátámasztott pontszámjavaslatokkal az oktató jóváhagyására."
url: https://code-viva.pisan.me/
author: "Code Viva"
author_url: https://code-viva.pisan.me/
resource_type: [software]
access: [free]
last_verified: "2026-11-04"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
translation_of: resources/code-viva
source_updated: "2026-11-04T17:55:00-05:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A Code Viva a szóbeli vizsga ([[oral-assessment|viva]]) írásos, időzített változatát futtatja le egy programozási kurzus minden diákjának, egyenként nagyjából tizenöt–húsz percben, oktató nélkül a helyiségben. Beolvassa a diák benyújtott kódját és commitelőzményét, négy–hat kérdést ír a diák saját függvényeiről, neveiről és commitjairól, és minden diáknak személyes linket ad, ahonnan válaszolhat.

## Mire használható

A beadások Gradescope-exportból, Canvas letöltési zipből, diákonkénti mappás zipből vagy GitHub Classroomból olvasási tokennel érkeznek. Az oktató beállítja a munkamenet hosszát, a kérdések számát és a határidőt, 1,25x–3x között jelöli a hosszabbított időt, és a linkek elküldése előtt elolvassa, szerkeszti vagy lecseréli a generált kérdéseket. A kérdések rekurziós bázisesetekre, peremfeltétel-őrökre, adatszerkezet-választásokra, homályos változatnevekre, léptékre és nyomkövetésre, a feladatleírásból vett mondatokra, valamint commitmintákra irányulnak, például egyetlen nagy vagy késő esti commitra. A válaszok válaszkóddal térnek vissza, a bírálati képernyő pedig minden átiratot egy javasolt 0–3 pontszám mellé tesz, azokkal a mondatokkal együtt, amelyeken nyugszik, valamint egy jelzősort, amelyet az diktál, mennyire indokolt egy beszélgetés. Az eredmények CSV-be exportálhatók, és tizenegy demókurzus engedi, hogy az olvasó kitalált adatokon végigpróbálja az egész hurkot.

## Kinek szól

Programozási kurzusok oktatói, akik bizonyítékot akarnak arra, hogy a diák meg tudja magyarázni a saját kódját, és inkább egy rövid diáklistával beszélnek, mint mindenkivel; a commitkérdések a [[process-oriented-assessment|folyamatorientált értékelés]] egy formájává teszik.

## Megjegyzések és fenntartások

Minden a böngészőben fut: a kurzus helyi tárolóban ül JSON-exporttal, a kérdések a link azon részében utaznak, amelyet a böngészők nem küldenek el a szervereknek, a válaszok pedig csak olyan kódként jönnek vissza, amelyet a diákok elküldeni választanak, így diákadat nem jut harmadik félhez. A kérdésgenerátor szabályalapú, nem modellvezérelt. Az eszköz saját beszámolója szerint a kódolvasója heurisztikus, így szokatlan formázás vagy makrók elrejthetnek egy függvényt, és egy pontszám jutalmazhatja a szókincs ismeretét a kód megértése helyett – ezért javaslatok a pontszámok, amelyeket az oktató hagy jóvá, és ezért tanácsolja az alacsony tétet. Licenc és forrásrepó nem kerül kiadásra, és mivel a linkek hordozzák a kérdéseket, néhány kilobájtra futnak – elég hosszúra, hogy egy tanuláskezelő üzenetmezőbe tördelődjenek.

## Kapcsolódó fogalmak

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
