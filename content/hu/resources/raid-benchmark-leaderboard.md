---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Nyilvános ranglista MI-szöveg-detektorokról, amelyeket a RAID-en pontoznak — egy benchmarkon, amelyet a modellekkel, domainekkel, dekódolási beállításokkal és adverzariális támadásokkal szembeni robusztusság tesztelésére építettek."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
translation_of: resources/raid-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A RAID az [[ai-detection|MI-szövegek detektálásáról]] szóló legtöbb komoly állítás mögött álló benchmark, ranglistája pedig az a hely, ahol ellenőrizhető, hogy egy detektor közzétett pontossága túléli-e a modell, a domain, a dekódolási beállítás vagy a szándékos támadás megváltozását. A bejegyzéseket a teszthalmazon pontozzák, és bárki beküldheti őket, aki követi a repó beküldési folyamatát.

## Mire használható

Szűrjön domain szerint — absztraktok, könyvek, hírek, költészet, receptek, Reddit, recenziók, wiki —, dekódolási stratégia szerint (mohó vagy mintavételezés), ismétlési büntetés szerint és adverzariális támadás szerint, beleértve az üres karaktereket, a homoglifákat, a szinonima-cserét, a parafrázist, a nulla szélességű szóközöket és a névelőtörlést. Ezután hasonlítson össze egy detektort a metrikák mentén: AUROC, TPR 5%-os téves pozitív aránynál és TPR 1%-nál.

Éppen ez a szűrőkészlet a lényeg. Egy detektor, amely összesítve közel 1.000 pontot ér el, visszaeshet, amint a szöveget parafrázálják vagy megváltozik a forrásmodell, a ranglista pedig lehetővé teszi, hogy lássa a visszaesést, mielőtt egy intézmény [[academic-integrity|tanulmányi tisztességtelenségi]] ügyet alapozna rá. Az 1%-os téves pozitív oszlop számít a legjobban az oktatásban, mert intézményi léptékben az 1%-os hibaarány több száz tévesen megvádolt diákot jelent.

## Kinek szól

Kutatóknak, akik detektálási módszereket értékelnek; adminisztrátoroknak, akik olyan szabályzatot írnak, amely detektorra hivatkozhat; és oktatóknak, akik konkrét választ akarnak a „detektálható-e?" kérdésre, mielőtt ezt a kurzusleírásban kijelentik.

## Megjegyzések és fenntartások

A benchmark a géppel generált szöveg detektálását méri, nem a tisztességtelenséget: a diák, aki MI-t használ tervezéshez, vázlatkészítéshez vagy átdolgozáshoz, olyan szöveget állít elő, amelynek elkapására a detektorokat nem építették, a [[language-learning|második nyelven író]] diák pedig ismert téves pozitív kockázat, amelyet a ranglista nem tud megmutatni. A RAID egy akadémiai csapat által karbantartott kutatási artefaktum; a lefedettség a teszthalmazában lévő generátor modelleket követi, így az újabb modellek alulreprezentáltak lehetnek, amíg a benchmarkot nem frissítik. A ranglista a detektorokat rangsorolja, nem a szállítóik adatkezelési gyakorlatát, és a magas AUROC semmit nem mond arról, hogy a diákmunkák beküldése az adott szolgáltatáshoz jogszerű-e vagy etikus-e az Ön joghatóságában.

## Kapcsolódó fogalmak

- [[ai-detection]] — a módszercsalád, amelyet a benchmark értékel
- [[academic-integrity]] — a szakpolitikai kontextus, ahol a detektorpontszámokat használják
- [[benchmark]] — az eszközök tágabb osztálya, amelyhez ez tartozik
