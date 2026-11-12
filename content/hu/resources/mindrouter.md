---
title: "MindRouter"
created: "2026-11-12T19:40:00-05:00"
updated: "2026-11-12T19:40:00-05:00"
type: resource
summary: "A University of Idaho Apache-2.0 licencű inferencia-átjárója, amely egy campus GPU-fürtöt (vLLM- és Ollama-csomópontok) egyetlen OpenAI-kompatibilis API mögé tesz, tisztességes ütemezéssel, felhasználónkénti tokenkvótákkal, SSO-val, auditnaplózással és élő GPU- és energiamonitorozással."
url: https://github.com/ui-insight/MindRouter
source_code: https://github.com/ui-insight/MindRouter
author: "University of Idaho (ui-insight)"
resource_type: [software]
access: [free]
license: "Apache-2.0"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed]
connected_resources: [amplify-genai]
translation_of: resources/mindrouter
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

A legtöbb campus MI-vita azzal kezdődik, melyik modellt vegyük meg, és megáll a nehezebb kérdés előtt: hol fut, ki méri, és ki láthatja a naplókat. A MindRouter a második kérdésre ad választ. Ez egy saját hosztolású átjáró, amely egy heterogén [[llm|LLM]]-kiszolgáló-fürt előtt áll – vLLM- és Ollama-csomópontok az intézmény saját GPU-in –, és egyetlen API-t tesz elérhetővé, amely az OpenAI, az Anthropic és az Ollama dialektusát beszéli, fordít közöttük, így a meglévő klienskód tovább működik.

## Mire használható

Irányíts egy eszközt az átjáróra egy szolgáltatói végpont helyett. Mögötte a MindRouter intézi azokat a részeket, amelyekre egy megosztott telepítésnek szüksége van: tisztességes ütemezés súlyozott deficit round robinnal, felhasználónkénti token- és kéréskvóták, szerepkör-alapú hozzáférés opcionális SSO-val Azure AD/Entra, Google, bármely OIDC-szolgáltató vagy SAML 2.0 felé, valamint teljes auditnaplózás a promptokról, válaszokról és artefaktumokról. Egy GPU-oldali segédagent csomópontonként jelenti a kihasználtságot, a memóriát, a hőmérsékletet és a teljesítményt, így az adminisztrátor láthatja a kérésenkénti energiaköltséget, és karbantartás előtt kecsesen kiüríthet egy backendet. Többre terjed ki, mint a chat – beágyazások, látás, kép- és videógenerálás, szöveg-beszéd és beszéd-szöveg, dokumentum-OCR –, és MCP-kiszolgálókat valamint agent-készségeket szállít kódoló asszisztensekhez.

Az ok, amiért egy főiskolát érdekelhet, az, amit a projekt megnevez: [[institutional-ai-infrastructure|intézményi MI-szuverenitás]]. A promptok és dokumentumok az intézmény által üzemeltetett infrastruktúrán maradnak, nem mennek át egy harmadik fél felhőjén, amit könnyebb megvédeni egy szenátus vagy egy [[privacy|adatvédelmi]] iroda előtt, mint egy beszállítóval kötött adatfeldolgozási megállapodást. Hogy ez az érv megáll-e, attól függ, van-e az intézménynek GPU-ja, energiája és személyzete – az átjáró a helyi hosztolást kezelhetővé teszi, nem olcsóvá.

## Kinek szól

Meglévő GPU-kapacitással rendelkező kutatási számítástechnikai és központi IT-csoportoknak, olyan oktatási és tanulási központoknak, amelyek egyetlen helyen akarják mérni az oktatók és diákok használatát, és olyan adminisztrátoroknak, akik a hosztolt vállalati platformokat mérlegelik a saját inferencia futtatásával szemben. Docker Compose-telepítés dokumentált SSO-konfigurációval és egyedi arculattal, a University of Idahón tartják karban, ahol a szerző a PEARC '26-on mutatta be; a projektnek 2026 novemberében 22 csillaga és 3 forkja volt.

## Megjegyzések és fenntartások

Szabad és nyílt forráskódú Apache-2.0 alatt, de a költség átkerül, nem tűnik el: hardver, áram és a fürt üzemeltetéséhez szükséges személyzeti idő. A szoftver infrastruktúra-mércével fiatal – három közreműködő, egyetlen eredeti intézmény, és több száz tagra számozott kiadások –, ezért egy főiskolának egy meglévő szolgáltatás mellett kell kipróbálnia, nem egyetlen modellútvonalként. Az ütemezés és a kvóták viselkedéséről valós campus-terhelés alatt nem jelent meg értékelés a repository-ban; a PEARC-dolgozat az a hely, ahol a szerzők saját beszámolója megtalálható.

## Kapcsolódó fogalmak

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
