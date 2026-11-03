---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "MAICin avoimen lähdekoodin julkaisu: moniagenttinen luokkahuone, joka muuttaa aiheen tai asiakirjan dioiksi, visailuiksi, interaktiivisiksi simulaatioiksi ja projektipohjaisiksi aktiviteeteiksi tekoälyopettajien ja -luokkatovereiden toteuttamana."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
translation_of: resources/openmaic
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

**OpenMAIC** on sen MAIC-moniagenttiluokkahuoneen avoimen lähdekoodin julkaisu, jota kuvataan [[intelligent-tutoring|MAIC-tutkimuksessa]]: kuvaile aihe tai liitä omat materiaalisi, niin se tuottaa kokonaisen oppitunnin – dioja, visailuja, interaktiivisia HTML-simulaatioita ja projektipohjaisia aktiviteetteja – ja toteuttaa sen sitten tekoälyopettajien ja tekoälyluokkatovereiden kautta, jotka puhuvat, piirtävät valkotaululle ja osallistuvat keskusteluun. Se on sen luokkahuoneen koodi, jota voi ajaa eikä vain lukea.

## Mitä sillä voi tehdä

Yhden napsautuksen tuottaminen luo oppitunnin minuuteissa kehotteesta tai ladatusta asiakirjasta, äänestä tai videosta. Moniagenttikerros lisää luokkahuonekeskustelun, johon oppija voi liittyä tai johon hänet voidaan kutsua, persoonien väliset pyöreän pöydän väittelyt valkotaulukuvituksineen ja vapaamuotoisen kysymys-vastaus-osuuden, jossa opettaja vastaa dioilla tai kaavioilla. Istunnot tukevat diasarjoja, visailuja, interaktiivisia simulaatioita ja PBL:ää, ja ne voi viedä muokattavana `.pptx`-tiedostona tai interaktiivisena `.html`-tiedostona. Versio 1.0.0 (elokuu 2026) lisäsi agenttityöpöydän: chat-lähtöisen työtilan, joka suunnittelee ja korjaa kokonaisia kursseja, palvelinpohjaiset kestävät istunnot, jotka voi peruuttaa, jatkaa tai ohjata, ja 24 sisäänrakennettua taitoa, jotka kattavat diat, visailut, interaktiiviset sisällöt, kuvat, videon ja äänet. `SKILL.md`-paketti antaa agenttikehyksen rakentaa luokkahuoneita viestisovelluksesta.

## Kenelle se on tarkoitettu

Opettajille ja kurssitiimeille, jotka haluavat tuotettuja materiaaleja, joita he voivat yhä muokata, opetussuunnittelijoille, jotka prototyyppaavat moniagenttiaktiviteetteja, ja kehittäjille, jotka tarvitsevat itse isännöitävän luokkahuoneen isännöidyn tuotteen sijaan. Koulut voivat ottaa sen käyttöön Vercelissä tai Dockerilla, ja projekti toimittaa isännöidyn demon osoitteessa open.maic.chat.

## Huomioita

Lisensoitu MIT:llä, mukana englannin- ja kiinankielinen käyttöopas ja aktiivinen yhteisö Discordissa ja Feishussa. Se on mallineutraali: toimitat vähintään yhden LLM-tarjoajan avaimen, ja valinnaiset paikalliset komponentit (Lemonade paikallisille malleille, FunASR puheentunnistukselle) antavat ajaa suuremman osan pinosta offline-tilassa – joten "ilmainen" kuvaa ohjelmistoa, ei päättelylaskua. Sen taustalla oleva artikkeli ilmestyi *Journal of Computer Science and Technology* -lehdessä (2026, DOI 10.1007/s11390-025-6000-0), ja repositoriossa oli yli 38 000 tähteä syyskuuhun 2026 mennessä.

## Liittyvät käsitteet

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]
