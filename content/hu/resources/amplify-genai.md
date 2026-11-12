---
title: "Amplify GenAI"
created: "2026-11-12T19:40:00-05:00"
updated: "2026-11-12T19:40:00-05:00"
type: resource
summary: "A Vanderbilt MIT-licencű, vállalati generatív MI-platformja, amely az intézmény saját AWS-fiókjába települ: egyedi asszisztensek helyi dokumentumokon, visszakeresés-alapú válaszok, megosztás a szervezeten belül és költségelszámolás egészen az egyes üzenetekig."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
translation_of: resources/amplify-genai
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

Az Amplify GenAI az ellenkező fogadás, mint egy campus-szintű licenc egy kereskedelmi asszisztensre: az intézmény maga üzemelteti a platformot, a saját Amazon Web Services-fiókjában, és azért fizet, amit használ. A Vanderbilt a saját közösségének építette, MIT alatt kiadta három repository-ban, és most más szervezeteknek kínálja a felhasználónkénti vállalati szerződések alternatívájaként – azzal az érvvel, hogy a drága résznek a modelleknek kell lenniük, nem a létszámnak.

## Mire használható

A felhasználók egyedi asszisztenseket építenek dokumentumok feltöltésével vagy adatforrások csatlakoztatásával, és az asszisztensek [[rag|visszakeresés-alapú generálással]] válaszolnak ebből az anyagból, nem csupán az általános betanításból. Az asszisztensek megoszthatók a szervezeten belül, egy beszélgetésbe láncolhatók, és prompt-sablonokat kaphatnak; a platform PowerPoint- és Word-fájlokat, diagramokat és vizualizációkat is készít. Az adminisztrátorok megkapják, amire egy megosztott szolgáltatásnak szüksége van: költségelszámolás üzenetszintig, felhasználónkénti limitek, mappák és munkaterületek, valamint SSO – mindez olyan telepítésben, amelyet az intézmény ellenőriz.

A [[higher-ed|főiskola]] szempontjából legfontosabb tervezési döntés az elszámolási modell. A Vanderbilt jelentése szerint 1 300 kísérleti felhasználónál a felhasználónkénti költség havonta körülbelül \$3 volt az AWS-szel együtt, és hogy e felhasználók fele havonta kevesebb mint \$1-nyi tokent fogyasztott – ezeket a számokat az egyetem esettanulmányként mutatja be, nem auditált benchmarkként. A használatalapú számlázás annak a campusnak kedvez, ahol a felhasználók kisebbsége végzi a munka nagy részét – ez az MI-bevezetés szokásos formája –, és a pénzügyi iroda kérdésére („mennyibe kerül ez diákonként?”) naplókból, nem szerződésből ad választ.

## Kinek szól

Azoknak a központi IT- és CIO-irodáknak, amelyek már futtatnak munkaterheléseket AWS-ben, és közösség által támogatott alternatívát keresnek egy kereskedelmi vállalati asszisztens helyett; azoknak az oktatóknak, akiknek a kurzusanyagra épülő asszisztensek kellenek anélkül, hogy egy beszállító fogyasztói termékébe küldenék az anyagot; és azoknak az intézményeknek, amelyek egyetlen helyen akarják látni, mit csinálnak az emberek a modellekkel. Mivel az intézmény saját fiókjába települ, az adattárolási hely kérdésére a telepítés válaszol, nem egy beszállító ígérete.

## Megjegyzések és fenntartások

Licencelni ingyenes, futtatni nem: az intézmény fizet az AWS-nek és a modellszolgáltatóknak. A modellválasztás az Amazon Bedrockon (Anthropic, Mistral) vagy az OpenAI-n és a Microsoft Azure-on keresztül megy, saját helyi modellek futtatása nincs megvalósítva. A projekt nyíltan kimondja, hogy egyedi telepítéseket nem tud támogatni, és a szervezeteket kereskedelmi partnerekhez irányítja – így a reális költség személyzetet vagy vállalkozót is tartalmaz. Ez egy három repository-ból álló telepítés (frontend, backend, infrastruktúra), néhány tíz csillaggal, nem ezerrel, és a fenti költség-összehasonlítás a Vanderbilt saját tapasztalata, nem kontrollált vizsgálat. Azoknak az intézményeknek, amelyek inkább saját hardveren tartanák az inferenciát, érdemes a [MindRouter](/aied/resources/mindrouter/) oldalt is elolvasniuk, és a kettőt együtt értelmezniük: az Amplify alkalmazási réteg a beszállítói modellek felett, a MindRouter átjáró a saját GPU-k felett.

## Kapcsolódó fogalmak

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
