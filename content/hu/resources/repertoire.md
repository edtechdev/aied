---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "Webes alkalmazás lépésről lépésre felépített MI-feladatok készítéséhez, amelyben az oktató beállítja a modell szerepét és a hallgatói használat korlátait, a hallgató személyazonossága pedig a modell kontextusán kívül marad."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [learning-design, guardrails, ai-use-disclosure]
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

MI-integrált feladatok építője, amelyet Joseph Slade készített az Oregon State University egyetemen, és az AI Education Labs, Inc. üzemeltet. A kiindulópont az, hogy a korlátok nélküli chatbot alternatívája nem a tiltás, hanem a struktúra: az oktató meghatározza a lépéseket, amelyeken a hallgató végighalad, eldönti, milyen szerepet játszik a modell az egyes lépésekben, és beállítja, mennyire támaszkodhat rá a hallgató. A feladatot ezután csatlakozási linkként teszik közzé, nem prompt-dokumentumként osztják szét.

## Mire használható

- **Állítsa be a modell szerepét feladatonként.** Az építő tutor, szokratikus kérdező, visszajelzésadó és kutatási asszisztens előbeállításokat kínál, plusz egyéni promptot, így az asszisztens úgy viselkedik, ahogy a feladat megkívánja.
- **Helyezzen el kapukat a lépések közé.** Egy lépés megkövetelheti, hogy a hallgató elmagyarázza az érvelését, mielőtt továbblép, és az MI-segítség lépésenként korlátozható — a felület a fennmaradó számot mutatja, nem korlátlan hozzáférést.
- **Válassza ki a munkafelületet.** A hallgatók dokumentumoldalon írnak, a margón jegyzetekkel, és elérhetők chat- és jegyzetfüzet-elrendezések is ott, ahol jobban illenek a feladathoz, mint egy oldal.
- **Tegye közzé, és kövesse az érvelést, ne csak a kimenetet.** A csatlakozási link beíratja a hallgatókat, a haladás menet közben mentődik, az oktató pedig elolvashatja minden hallgató átiratát, és exportálhatja CSV vagy Markdown formátumban.
- **Készítsen vázlatot MI-vel, majd finomítsa.** A beállítás indulhat néhány kérdésből, egy feltöltött meglévő feladatból vagy egy korábbiból, egy oktatói oldali asszisztenssel, amely kitölti az első vázlatot.

A közzétett példák a szándékolt tartományt jelzik: egy fizikai bizonyíték- és tanúvallomás-feladat, egy biológiai gyakorlat, amely egy MI-gyakornok magyarázatának érvelési hibáját diagnosztizálja, valamint egy pszichológiai feladat, amely azt ellenőrzi, hogy egy híradás leírja-e egy tanulmány elrendezését.

## Kinek szól

Felsőoktatási oktatóknak, akik azt szeretnék, ha a [[learning-design|tanulástervezés]] vinné az MI-politikát — vagyis inkább azt korlátoznák, hogyan használható a modell egy feladaton belül, mintsem azt felügyelnék, hogy használták-e. A kapuk és a szerepbeállítások a [[guardrails|korlátok]] tervezési idejű kifejeződései, és az alkalmazás a tanórai munkára, nem intézményi chat-telepítésre irányul.

## Megjegyzések és fenntartások

- **Pilotfázis.** A feltételek kimondják, hogy a szolgáltatást jelenleg díjmentesen nyújtják pilotokhoz, hogy fizetős csomagok értesítéssel bevezethetők, és hogy a funkciók változhatnak vagy visszavonhatók. Nincs nyilvános árazási oldal; az árakhoz csak bejelentkezés után jut hozzá.
- **Az adatvédelmi állítás architekturális, és érdemes figyelmesen elolvasni.** Minden hallgató feladatonként véletlenszerű munkamenet-azonosítót kap, a hallgatói fiók és a munkamenet közötti leképezés a Repertoire szerverén marad, a modell pedig a névtelen munkamenetet, a feladat kontextusát és a hallgató szövegét kapja meg. A fenntartás magában a politikában van: a hallgató által gépelt, őt azonosító szöveg ugyanúgy elküldésre kerül, mint bármely más szöveg, és a kurzus oktatója elolvashatja az átiratokat.
- **Harmadik fél által végzett inferencia.** A válaszok az Anthropic Claude API-ján keresztül generálódnak, az OpenAI API-jával mint tartalékkal, olyan kereskedelmi feltételek mellett, amelyekről a politika azt mondja, hogy 2026 szeptemberétől kizárják az API-bemeneteken és -kimeneteken való tanítást. Az intézménynek ezt a saját megállapodásán keresztül kell megerősítenie, nem egy weboldalon keresztül.
- **Nem osztályozó.** A politika és a feltételek egyaránt az asszisztens ítéleteit, például azt, hogy „a cél teljesült”, az oktató segédjeként írják le; az osztályzatok és az akadémiai döntések az oktatónál és az intézménynél maradnak, és a hallgatók felé történő [[ai-use-disclosure|MI-használat közzétételéről]] szóló döntéseket az oktatóra bízzák.
- **USA-ban hosztolt.** Az adatok a Google Cloud Firestore-ban vannak, Vercel hosztinggal, és a politika FERPA-kötelezettségekkel foglalkozik ott, ahol a szolgáltatás oktatási nyilvántartásokat kezel; az Egyesült Államokon kívüli felhasználóknak azt mondják, hogy adataikat ott dolgozzák fel.
