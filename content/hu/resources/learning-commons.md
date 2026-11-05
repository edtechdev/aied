---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "Nyílt MI-infrastruktúra Mark Zuckerberg és Priscilla Chan oktatási kezdeményezéséből: tudásgráf a szabványokról, tantervekről és tanulástudományi adatokról, értékelők az LLM-kimenet megítéléséhez, valamint modellfüggetlen ügynökös készségek a tanári munkafolyamatokhoz."
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
translation_of: resources/learning-commons
source_updated: "2026-11-04T18:11:18-05:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A **Learning Commons** Mark Zuckerberg és Priscilla Chan oktatási kezdeményezése, amelyet 2025-ben indítottak, hogy a Chan Zuckerberg Initiative tanulástudományi munkáját átvigye abba az infrastruktúrába, amelyre az edtech-termékek valójában épülnek. Érvelése infrastrukturális, nem pedagógiai: van kutatás, vannak akadémiai szabványok és vannak jó minőségű tantervek, de külön rendszerekben ülnek, így a fejlesztők arra építenek, ami a legkönnyebben elérhető. A szervezet három nyílt eszközt ad ki a GitHubon – egy tudásgráfot, értékelők egy csoportját és [[agentic-ai|ügynökös készségeket]] –, és működtet egy platformot, amely Curriculum Syncet ad hozzá a tantervek [[edtech-platform|tanulásirányítási rendszerbe]] töltéséhez.

## Mire használható

A **tudásgráf** akadémiai szabványokat, tanterveket és tanulástudományi kutatást modellez entitásként és kapcsolatként egyetlen közös séma alatt, így egy eszköz saját adatfolyamat felépítése nélkül tudja a generált tartalmat szabványhoz igazítani. Az **értékelők** a [[llm|LLM-kimenet]] jellemzőit mérik tanulástudományi szemszögből – szövegösszetettség, [[feedback|visszajelzés]], akadémiai szabványokhoz való illeszkedés és tartós készségek –, és Python és TypeScript SDK-kkal érkeznek, npm-en és PyPI-n publikálva, generált tartalom pontozásához vagy jelöltmodellek összehasonlításához. Az **Agent Skills** utasításokat, hivatkozásokat és védőkorlátokat csomagol gyakori tanári munkafolyamatokhoz nyílt, modellfüggetlen formátumban: megértésellenőrzés, szintezett óradifferenciálás, szabványokhoz igazított óravázlatok és óra-előkészítés. A gyakorlatban a gráf teszi hitelessé a másik kettőt: a tartalom-illesztés az állítás, és a gráf az a referencia, amelyhez mérten ellenőrzik.

## Kinek szól

Azoknak a fejlesztőknek, akik MI-funkciókat építenek [[curriculum-design|tantervi]] és értékelési termékekbe, valamint azoknak a tantervi vagy szabványügyi csapatoknak, amelyek az adatot szolgáltatják, amelyhez e termékek igazodnak. Az oktatók maguk is használhatják az ügynökös készségeket, de a repó saját keretezése szerint ez infrastruktúra azoknak, akik eszközöket szállítanak.

## Megjegyzések és fenntartások

Az, hogy [[open-source|forráskódban]] nyílt, nem teszi nyílttá az adatot. A tudásgráf kódja MIT, míg minden adathalmaz saját hozzáférési címkét visel – Open, Open + Gated vagy Gated –, és a Gated tartalom kifejezetten nem tartozik azokhoz a nyílt licencekhez, amelyekre a repó hivatkozik, ezért az újrafelhasználási jogok feltételezése előtt nézze meg az adathalmaz-katalógust. Az értékelők kódja MIT, a promptok tartalma CC BY 4.0, de az általuk használt annotált CLEAR és PERSUADE 2.0 korpuszok CC BY-NC-SA 4.0 alatt állnak. A platform és a mögötte lévő adathalmazok fiókot igényelnek. A repó aktivitása 2026-11-04-i olvasatban: 167 csillag a tudásgráfnak, 88 az Evaluatorsnak, 41 az Agent Skillsnek. A kezdeményezést a CZI finanszírozza, és a probléma keretezése a finanszírozó sajátja.

## Kapcsolódó fogalmak

- [[curriculum-design]] — a gráf azért létezik, hogy a generált tartalmat szabványokhoz és tantervekhez igazítsa
- [[open-source]] — MIT és Apache-2.0 kód, adathalmazonkénti adatlicenceléssel
- [[educational-nlp]] — az értékelők szövegmérő réteg az LLM-kimenet felett
- [[agentic-ai]] — olyan készségek, amelyek munkafolyamatot csomagolnak a modell számára
- [[edtech-platform]] — a Curriculum Sync tanterveket tölt a tanulásirányítási rendszerbe
- [[llm]] — az értékelés célpontja és a készségek fogyasztója
