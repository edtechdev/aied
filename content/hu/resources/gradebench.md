---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Nyilvános ranglista frontier modellekhez, amelyek valódi kézzel írt egyetemi STEM-válaszokat osztályoznak az oktató által kiválasztott rubrikatételek szerint."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
translation_of: resources/gradebench
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [automated-assessment, assessment-validity, benchmark]
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A GradeBench szűk, hasznos kérdést tesz fel az [[automated-assessment|automatizált értékelésről]]: adott egy diák kézzel írt válasza, az oktató rubrikája, egy referencia-megoldás és a rubrikának azok a tételei, amelyeket az oktató ténylegesen kiválasztott — vajon egy frontier modell ugyanazokat a tételeket választja ki? Az arany címkék valódi oktatói és tanársegédi rubrikaválasztások vizsgákról és kvízekekről, nem pedig újraértékelt modellkimenetek.

## Mire használható

Olvassa el a ranglistát, mielőtt bármely osztályozószállító pontossági állításában megbízik, és olvassa el a feladatok összeállítását, mielőtt a ranglistában megbízik. A [[benchmark]] 464 feladatot tartalmaz, amelyek 125 kérdésből származnak 45 [[higher-ed|egyetemi]] kurzusról, több mint tíz intézményből; kizárólag olyan szabad válaszos vizsga- és kvíztételekre korlátozódik, amelyeket professzor vagy tanársegéd sorról sorra átnézett, és a részleges pontozás felé torzít — a teljes pontszámú és a nulla pontszámú feladatok arányát egyenként 5%-ban maximálják, mert a modellek ezeket könnyűnek találják.

A jelenlegi ranglista csúcsa messze az emberi egyezés alatt marad: a legjobb modell 57.3% pontos rubrikaegyezést ér el, az oldal pedig a pontosságot az 1,000 válaszra jutó költség függvényében ábrázolja, ahol a 0.8 ponttal lemaradó modell körülbelül hetedannyiba kerül. A költség-tengely a gyakorlatilag hasznos rész, mivel az osztályozás nagy volumenű művelet.

Második, függetlenül épített eszközként tekintse meg a Learning Design Alliance [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) projektjét, amely nyílt repóként van csomagolva, nem pedig hosztolt ranglistaként, és amelynek összefoglalója [[porcaro-ai-grading-benchmark-2026|Porcaro tanulmányában]] olvasható.

## Kinek szól

Oktatóknak, akik arról döntenek, hogy egy osztályozóeszköz felülvizsgálat nélkül adhat-e ki jegyeket; értékelési szakembereknek, akik beszerzési követelményeket írnak; és kutatóknak, akiknek rubrikaszintű célra van szükségük, nem esszé pontozási korrelációra.

## Megjegyzések és fenntartások

A GradeBenchet a Pensive adja ki, egy kereskedelmi MI-osztályozó platform, így a benchmark és a termék tulajdonosa közös; a feladatok összeállítása dokumentált és védhető, de a keretezést kezelje a szállító keretezéseként. STEM-vizsgákat fed le legalább négy tételből álló rubrikákkal, ami kizárja az esszéket, a rövid válaszokat és a vitafórum-bejegyzéseket — azokat a formátumokat, ahol a [[humanities-education|humán tudományok]] értékelésének nagy része zajlik. A pontos rubrikaegyezés szigorú metrika: két értékelő nem érthet egyet egy tételben, és mindkettőnek igaza lehet a diákot illetően. A pontszámok a 2026 novemberében elérhető modellverziókat írják le, és változni fognak.
