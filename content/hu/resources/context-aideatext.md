---
title: "conText (AIdeaText)"
created: "2026-11-12T19:40:00-05:00"
updated: "2026-11-12T19:40:00-05:00"
type: resource
summary: "Ingyenes böngészős tutor, amely beolvassa egy füzet fotóját, egy PDF-et vagy egy szöveget, majd szókratészi módon végigvezeti rajta a diákot angolul vagy spanyolul, miközben élő gráfot rajzol azokról az ötletekről, amelyeket beszéd közben összekapcsol."
url: https://context.aideatext.ai/?lang=en
author: "AIdeaText"
author_url: https://aideatext.ai/
resource_type: [software]
access: [free]
last_verified: "2026-11-12"
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, knowledge-graph, speech-and-voice-technologies]
assessment: [formative-assessment]
audience: [learners, instructors, faculty developers]
level: [k 12, higher ed]
translation_of: resources/context-aideatext
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

A conText a legtisztább kicsi demonstrációja egy iránynak, amelyről az [[intelligent-tutoring|MI-alapú tutorálás]] sokat beszél, de ritkán valósít meg: a modell nem válaszol a diák kérdésére, hanem felteszi a következőt, és a diák ötletei beszéd közben gráfként rajzolódnak ki. Tölts fel egy fotót egy füzetoldalról, egy PDF-et vagy egy szöveget, és az eszköz először elmondja, mit értett meg, majd elkezd egy hangos [[socratic-method|szókratészi]] párbeszédet. Minden ötlet, amelyet a diák megnevez, csomópontként jelenik meg egy élő [[knowledge-graph|tudásgráfban]]; az élek akkor jelennek meg, amikor a beszélgetés összeköti őket, és a panel jelzi, hány ötlet maradt kapcsolat nélkül.

## Mire használható

A hurok szándékosan rövid. Az anyag bekerül (legfeljebb 10 MB, nyolc PDF-oldal vagy 15 000 karakter szöveg), a tutor visszaolvassa, a beszélgetés pedig hanggal folyik – az oldal szerint a tutor nem osztályoz és nem ír a diák helyett. A gráf az az artefaktum, amely utólag értékessé teszi a foglalkozást: megmutatja, mely ötleteket kapcsolta össze a diák valóban, és melyek maradtak lazán, ami sokkal konkrétabb átnézni való, mint egy chat-átirat. A foglalkozás gráf XML-fájlként exportálható és egy másik napon újra feltölthető a folytatáshoz, a törlés gomb pedig azonnal törli; egyébként a szerver egy óra után eldobja.

Ez a kombináció – egy tutor, amely visszatartja a választ, plusz a gondolkodás vizuális nyilvántartása – pontosan az, amit a [[scaffolding|állványozás]] és a [[metacognition|metakognitív]] reflexió el akar érni, és a tanárnak valami konkrétat ad, amiről kérdezhet, egy kész esszé vagy egy helyes szám helyett. Az oldal saját megfogalmazása szerint egy helyes eredmény már nem bizonyítja a megértést, miután a generatív MI elő tudja állítani, ezért a folyamatnak láthatónak kell lennie.

## Kinek szól

Azoknak a diákoknak, akik egy olvasmányon vagy feladatsoron dolgoznak, és azt akarják, hogy kérdezzék őket, ne helyettük válaszoljanak; azoknak a tanároknak, akik alacsony tétű ellenőrzést szeretnének arról, hogy a diák össze tud-e kapcsolni ötleteket; és azoknak az oktatásfejlesztőknek, akik konkrét példát keresnek a folyamat bizonyítékára. A tanároknak angol, spanyol, portugál és francia nyelvű, tantervhez igazított útmutató áll rendelkezésre; maga az eszköz angolul és spanyolul fut, a bemutatóvideó pedig spanyol.

## Megjegyzések és fenntartások

A diákoknak szóló eszközhöz nem tettek közzé árat vagy fiókot, míg az intézményi telepítést – felhő, helyszíni vagy hibrid – személyre szabott ajánlaton és megbeszélésen keresztül kínálják; kezeld az „ingyenes”-t a 2026. novemberi nyilvános demó állapotaként, nem garanciaként. A szöveg és a képek egy Claude-ra épülő hosztolt szolgáltatáshoz kerülnek, és az oldal maga kéri a felhasználókat, hogy feltöltés előtt távolítsák el a neveket, összegeket, címeket és cégneveket, ami az anonimizálás terhét a feltöltőre, nem a platformra tolja. A foglalkozások exportálás nélkül egy óra után törlődnek. A mögöttes cég intézményeknek szélesebb, gondolkodásgráf-alapú értékelési platformot is kínál, és a deduktív, induktív, abduktív és analógiás gráfok megkülönböztetésére vonatkozó állításai négy referenciaszövegből származnak – az oldal ezt demonstrációnak nevezi, a nagy léptékű validálás még várat magára.

## Kapcsolódó fogalmak

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
