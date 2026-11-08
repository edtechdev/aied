---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T04:49:27-05:00"
type: resource
summary: "Nyílt MI-infrastruktúra oktatási termékekhez: tudásgráf a szabványokról és tantervekről, értékelők az LLM-kimenet pontozásához, modellfüggetlen ügynökös készségek a tanári munkafolyamatokhoz, valamint a Curriculum Sync a tantervek tanulásirányítási rendszerbe töltéséhez."
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
source_updated: "2026-11-05T02:05:00-05:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A **Learning Commons** három nyílt eszközt ad ki, amelyek valódi tantervi tartalomra építenek MI-funkciókat — egy **[[knowledge-graph|tudásgráfot]]** az akadémiai szabványokról, tantervekről és tanulástudományi kutatásról, egy **Evaluators**-könyvtárat a generált szöveg megítéléséhez, valamint modellfüggetlen **[[agentic-ai|ügynökös készségeket]]** a gyakori tanári munkafolyamatokhoz — és működtet egy platformot, amely Curriculum Syncet ad hozzá a tantervek [[edtech-platform|tanulásirányítási rendszerbe]] töltéséhez.

## Mire használható

**Igazítson generált tartalmat szabványhoz.** A tudásgráf akadémiai szabványokat, [[curriculum-design|tanterveket]] és kutatást modellez entitásként és kapcsolatként egyetlen közös séma alatt. Egy termék kikeresheti a szabványt, amelyre egy elemnek irányulnia kell, bejárhatja az előfeltétel-kapcsolatokat, vagy a tutor tartalmát abba a tantervbe ágyazhatja, amelyet állítólag tanítania kell, anélkül hogy saját adatfolyamatot építene és tartana fenn.

**Pontozza a generált kimenetet, mielőtt a diákok látják.** Az **Evaluators** a [[llm|LLM-kimenet]] jellemzőit méri — szövegösszetettség, [[feedback|visszajelzés]], szabványokhoz való illeszkedés és tartós készségek —, és Python és TypeScript SDK-ként érkezik az npm-en és a PyPI-n. A gyakorlatban regressziós ellenőrzésként működnek, amikor egy prompt vagy modell változik, jelöltmodellek összehasonlításaként, vagy szűrőként a generált elemeken és magyarázatokon.

**Csomagoljon egy tanári munkafolyamatot.** Az **Agent Skills** utasításokat, hivatkozásokat és védőkorlátokat csomagol nyílt, modellfüggetlen formátumban: megértésellenőrzés, szintezett óradifferenciálás, szabványokhoz igazított óravázlat és óra-előkészítés. Beilleszthetők egy ügynökkeretbe, vagy kidolgozott sablonként olvashatók arról, mennyi szerkezetre van szüksége egy megbízható tantermi munkafolyamatnak.

**Vigyen át egy tantervet a tanulásirányítási rendszerbe.** A Curriculum Sync a platform azon lépése, amely a szabványtérképet olyanná alakítja, amit egy kurzus ténylegesen használni tud az LMS-ben.

## Kinek szól

Azoknak a fejlesztőknek, akik MI-funkciókat építenek tantervi és [[assessment|értékelési]] termékekbe, valamint azoknak a tantervi vagy szabványügyi csapatoknak, amelyek az adatot szolgáltatják, amelyhez e termékek igazodnak. [[teacher-role|Az oktatók]] maguk is használhatják az Agent Skills készségeket, de a repó saját keretezése szerint ez infrastruktúra azoknak, akik eszközöket szállítanak.

## Megjegyzések és fenntartások

Az, hogy [[open-source|forráskódban]] nyílt, nem teszi nyílttá az adatot. A tudásgráf és az értékelők kódja MIT, az Agent Skills Apache-2.0, míg minden adathalmaz saját hozzáférési címkét visel — Open, Open + Gated vagy Gated —, és a Gated tartalom nem tartozik azokhoz a nyílt licencekhez, amelyekre a repó hivatkozik, ezért az újrafelhasználási jogok feltételezése előtt nézze meg az adathalmaz-katalógust. Az értékelők promptjainak tartalma CC BY 4.0, de az általuk használt annotált CLEAR és PERSUADE 2.0 korpuszok CC BY-NC-SA 4.0 alatt állnak. A platform és a mögötte lévő adathalmazok fiókot igényelnek.

## Kapcsolódó fogalmak

- [[curriculum-design]] — a gráf azért létezik, hogy a generált tartalmat szabványokhoz és tantervekhez igazítsa
- [[open-source]] — MIT és Apache-2.0 kód, adathalmazonkénti adatlicenceléssel
- [[educational-nlp]] — az értékelők szövegmérő réteg az LLM-kimenet felett
- [[agentic-ai]] — olyan készségek, amelyek munkafolyamatot csomagolnak a modell számára
- [[edtech-platform]] — a Curriculum Sync tanterveket tölt a tanulásirányítási rendszerbe
- [[llm]] — az értékelés célpontja és a készségek fogyasztója
