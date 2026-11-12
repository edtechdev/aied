---
title: "Aina ya Swali la Maandishi ya AI la Moodle"
created: "2026-11-12T11:40:00-05:00"
updated: "2026-11-12T11:40:00-05:00"
type: resource
summary: "Aina ya swali la Moodle la chanzo huria (GPL v3) linalotathmini majibu ya maandishi huru kwa modeli kubwa ya lugha kwa kutumia ilani ya kila swali na mpango wa alama wa hiari, likitumia OpenAI, Azure au modeli ya Ollama inayojihifadhi, na kuonyesha maoni ya AI kwa mtathmini wa binadamu."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
translation_of: resources/moodle-qtype-aitext
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

Muunganisho mwingi wa maswali ya AI hutuma kila jibu kwa wito mmoja wa kutathmini usiobadilika. Aina hii ya swali la Moodle hufanya kinyume: mwalimu huandika rubriki. Kila swali hubeba **ilani** inayoiambia modeli jinsi ya kutathmini jibu na **mpango wa alama** wa hiari unaoeleza jinsi alama zinavyotolewa, hivyo kipengele cha "andika sentensi kwa wakati uliopita" kinaweza kubainisha alama kumi kwa hakuna makosa, sifuri kwa sarufi iliyovunjika, na alama moja inayotolewa kwa kila kosa la tahajia. Modeli hurudisha alama na [[feedback|maoni]], na mwalimu anaweza kuona maoni hayo kando ya jibu wakati wa kutathmini kwa mkono.

## Unachoweza kufanya nacho

Ongeza swali la AIText kwenye jaribio lolote la Moodle, andika ilani na mpango wa alama, na ujaribu ilani kwa **kijaribio cha ilani** cha AJAX kwenye fomu ya kuhariri badala ya kuzunguka kupitia majaribio ya onyesho. Utathmini unaendeshwa kupitia tabia mbili shirikishi za swali (za papo hapo na zilizocheleweshwa) ambazo lazima zisakinishwe pamoja na aina ya swali, jambo linaloweka utathmini wa AI mbali na tabia za msingi za Moodle; majaribio yaliyopo yaliyotumia tabia ya zamani ya `interactivecountback` huhamia wakati wa kuboresha. Kama modeli haipatikani, utathmini hupungua badala ya kutoa hitilafu, hivyo jaribio halipotei. Kwa sababu swali ni aina ya jaribio la asili, matokeo huingia kwenye kitabu cha alama kama kipengele kingine chochote — jambo ambalo timu ya kozi inahitaji kabla ya kuchukua [[automated-assessment|utathmini wa kiotomatiki]] kama jaribio badala ya onyesho.

Muundo pia unaweka rubriki mahali ambapo [[ai-feedback-quality|ubora wa maoni]] huamuliwa: ndani ya ilani, iliyoandikwa na mwalimu, badala ya chaguo-msingi la muuzaji. Hiyo ni matumizi ya uaminifu ya zana — vigezo unavyoweza kukagua na kurekebisha — ingawa pia inamaanisha kikomo cha ubora ni rubriki, na ilani isiyo wazi huzalisha alama zisizo wazi. Taasisi huiangalia kwa ukaguzi wa mara kwa mara na wa hatari ndogo ambao [[formative-assessment|tathmini ya kuunda]] inategemea, ambapo binadamu vinginevyo angesoma majibu arobaini mafupi kwa usiku mmoja.

## Ni kwa nani

Wasimamizi na waendelezaji wa Moodle ambao tayari wanaendesha tovuti, waalimu wanaotaka utathmini wa AI bila jukwaa tofauti au leseni ya kibiashara, na watafiti wanaohitaji mchakato wa utathmini unaodhibitiwa wa kufanyia utafiti. Inahitaji Moodle 4.5 au baadaye na ufikiaji wa API kwa modeli — ama OpenAI au Azure kupitia mfumo wa AI wa Moodle, au instansi ya Ollama inayojihifadhi kupitia Local AI Manager, ambayo huweka maandishi ya wanafunzi kwenye miundombinu ya ndani. Programu-jalizi inadumishwa na Marcus Green, iko kwenye soko la programu-jalizi za Moodle, na ilikuwa na nyota 33 na fork 36 wakati ukurasa huu ulipothibitishwa.

## Vidokezo na tahadhari

Chanzo huria chini ya GPL v3 au baadaye, lakini bure haimaanishi bure kuendesha: mtu hulipa API ya modeli, na ubora wa utathmini hutegemea uchaguzi wa modeli na muundo wa ilani. Majibu ya maandishi huru huondoka kwenye seva ya Moodle wakati mtoa huduma wa mbali anatumika, hivyo makubaliano ya data ya taasisi ndiyo yanayotawala kile kinachoweza kutumwa; njia ya Ollama inayojihifadhi ipo kwa tovuti ambazo haziwezi kutuma kazi za wanafunzi nje. Hazina inasema hakuna utafiti wa usahihi au makubaliano uliochapishwa, hivyo programu-jalizi haipaswi kupitishwa kwa dhana kwamba utathmini wa LLM ni sawa na wa binadamu — [[assessment-validity|uhalali]] unapaswa kuthibitishwa kienyeji dhidi ya alama za binadamu kabla alama yoyote kuwa na uzito. Tabia shirikishi ni tegemezi gumu: kusakinisha aina ya swali peke yake huacha maswali yasiyoweza kutathminiwa.

## Dhana zinazohusiana

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
