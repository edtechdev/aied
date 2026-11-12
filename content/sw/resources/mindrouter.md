---
title: "MindRouter"
created: "2026-11-12T11:38:00-05:00"
updated: "2026-11-12T11:38:00-05:00"
type: resource
summary: "Gateway ya inference ya Apache-2.0 kutoka Chuo Kikuu cha Idaho inayoweka kundi la chuo la nodi za GPU za vLLM na Ollama nyuma ya API moja inayolingana na OpenAI, ikiongeza upangaji wa usawa, kwota za tokeni kwa mtumiaji, SSO, uwekaji kumbukumbu wa ukaguzi na ufuatiliaji wa moja kwa moja wa GPU na nishati."
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
translation_note: "Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa.*

Majadiliano mengi ya AI chuoni huanza na modeli ipi ya kununua na huishia kabla ya swali gumu zaidi: inaendeshwa wapi, nani anapima matumizi, na nani anaweza kuona kumbukumbu. MindRouter ni jibu la swali hilo la pili. Ni gateway inayojihifadhi yenyewe inayokaa mbele ya kundi la seva mchanganyiko za [[llm|LLM]] — nodi za vLLM na Ollama kwenye GPU zinazomilikiwa na taasisi — na inaonyesha API moja inayozungumza lahaja za OpenAI, Anthropic na Ollama, ikitafsiri kati yao ili msimbo wa mteja uliopo uendelee kufanya kazi.

## Unachoweza kufanya nacho

Elekeza zana kwenye gateway badala ya kwenye endpoint ya muuzaji. Nyuma yake, MindRouter hushughulikia sehemu ambazo usambazaji wa pamoja unahitaji: upangaji wa usawa wa haki kwa weighted deficit round robin, kwota za tokeni na maombi kwa kila mtumiaji, ufikiaji unaotegemea jukumu na SSO ya hiari kupitia Azure AD/Entra, Google, mtoa huduma yeyote wa OIDC au SAML 2.0, na uwekaji kumbukumbu kamili wa ukaguzi wa ilani, majibu na vitu. Wakala wa pembeni wa GPU huripoti matumizi, kumbukumbu, joto na nishati kwa kila nodi, hivyo msimamizi anaweza kuona gharama ya nishati kwa ombi na kumaliza backend kwa upole matengenezo yanapokaribia. Inashughulikia zaidi ya mazungumzo — embeddings, kuona, uzalishaji wa picha na video, text-to-speech na speech-to-text, OCR ya nyaraka — na hutoa seva za MCP na ujuzi wa wakala kwa wasaidizi wa uandishi wa msimbo.

Sababu ambayo chuo kingejali ni ile inayotajwa na mradi: [[institutional-ai-infrastructure|uhuru wa AI wa kitaasisi]]. Ilani na nyaraka hubaki kwenye miundombinu inayoendeshwa na taasisi badala ya kupita kupitia wingu la mtu wa tatu, jambo ambalo ni rahisi kutetea kwa seneti ya kitivo au ofisi ya [[privacy|faragha]] kuliko makubaliano ya usindikaji wa data na muuzaji. Kama hoja hiyo inashikilia inategemea kama taasisi ina GPU, umeme na wafanyakazi — gateway hufanya uhifadhi wa ndani uweze kusimamiwa, si nafuu.

## Ni kwa nani

Kompyuta ya utafiti na makundi ya IT kuu yenye uwezo wa GPU uliopo, vituo vya ufundishaji na kujifunza vinavyotaka mahali pamoja pa kupima matumizi ya waalimu na wanafunzi, na wasimamizi wanaolinganisha majukwaa ya biashara yaliyohifadhiwa na kuendesha inference wenyewe. Ni usambazaji wa Docker Compose wenye usanidi wa SSO ulioandikwa na chapa maalum, na unadumishwa katika Chuo Kikuu cha Idaho, ambako mwandishi aliwasilisha kwenye PEARC '26; mradi una nyota 22 na fork 3 kufikia Novemba 2026.

## Vidokezo na tahadhari

Bure na chanzo huria chini ya Apache-2.0, lakini gharama huhamia badala ya kutoweka: vifaa, umeme, na muda wa wafanyakazi wa kuendesha kundi. Programu ni changa kwa viwango vya miundombinu — wachangiaji watatu, taasisi moja ya asili, na matoleo yenye namba katika mamia ya lebo — hivyo chuo kinapaswa kuijaribu kando ya huduma iliyopo badala ya kama njia pekee ya kufikia modeli. Tathmini iliyochapishwa ya tabia ya upangaji na kwota chini ya mzigo halisi wa chuo haipo kwenye hazina; karatasi ya PEARC ndiyo mahali pa kutafuta maelezo ya waandishi wenyewe.

## Dhana zinazohusiana

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
