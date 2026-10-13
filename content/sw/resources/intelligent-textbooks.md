---
title: "Kujenga Intelligent Textbooks"
created: "2026-10-13T06:10:00-04:00"
type: resource
summary: "Mwongozo wa chanzo wazi wa Dan McCreary kuhusu kujenga vitabu mahiri — vitabu vya mtandaoni vyenye utafutaji, usogezaji, faharasa, majaribio, michoro ya dhana na mifano iliyopachikwa — kwa kutumia MkDocs Material na AI ya kizalishaji, pamoja na maktaba ya mada ya MicroSims za maingiliano yaliyotengenezwa na AI."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa."
reviewed_by: [editor]
---

*Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa.*

Tovuti ya **Intelligent Textbooks** ni mwongozo wa hatua kwa hatua wa Dan McCreary wa kujenga *vitabu mahiri* — vitabu vya mtandaoni ambavyo huenda mbipo za PDF tuli kwa kuongeza utafutaji, usogezaji wa tovuti, faharasa ya istilahi, jedwali la yaliyomo, usimamizi wa majaribio, fomula zilizowekwa, onyesho la kwanza la mitandao ya kijamii, ukaguzi wa viungo, na **mchoro wa dhana** unaoonekana kwa urahisi unaoonyesha dhana zote za kozi na utegemezi wao. Mwongozo unadai kwamba kozi nyingi za leo zinaweza kufaidika na vitabu vya mtandaoni vya hali ya juu vyenye vipengele hivi, na unaonyesha jinsi ya kuvijenga kwa kutumia mfumo wa ujenzi [MkDocs](http://mkdocs.com/) uliofungamanishwa na mandhari ya Material na AI ya kizalishaji ili kuunda na kudumisha maudhui.

Hatua inayoainisha ni kwamba kitabu kinaandikwa *kwa Markdown na kizalishwa na AI*, mfano halisi wa mchoro wa [[vibe-coding|uandishi unaosaidiwa na AI]] uliotumika kwa [[curriculum-design|maudhui ya kozi]]: badala ya kudumisha tovuti kubwa kwa mkono, unaeleza kozi na kuacha AI ya kizalishaji itengeneze na kudumisha kurasa, huku mnyororo wa zana ukiangalia usogezaji, utafutaji na mchoro wa dhana. Maktaba ya [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) ya mada inadai kuendesha zaidi ya 90% ya kazi zinazohitajika kujenga kitabu cha kiwango cha 2 kutoka kwa maelezo ya kozi.

## Rasilimali ya nyongeza: MicroSims

Mwenzi wa asili wa mwongozo huu ni maktaba ya **MicroSims** ya McCreary iliyopo <https://dmccreary.github.io/microsims/> (msimbo wa chanzo: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), ambayo hutoa mifano ya maingiliano ambayo kitabu mahiri hupachika. *MicroSim* (mfano mdogo unaoiga) ni mfano rahisi unaoegemea mwingiliano, uliotengenezwa kwa AI kusaidia walimu kuelezea dhana, na unaweza kupachikwa katika kitabu mahiri au tovuti yoyote inayokubali `iframe`. MicroSims zinatofautiana kwa sababu tatu: **uzalishaji unaosaidiwa na AI** (mifumo ya muundo iliyosanifishwa hubadilisha maelezo ya mfano kwa lugha ya kawaida kuwa rasilimali inayoweza kushirikiwa), **upachikaji wa ulimwengu wote** (kipengele kimoja cha `iframe` ya HTML huweka moja kwenye ukurasa wowote), na **msimbo wazi, unaoweza kubadilishwa** (hakuna kisanduku cheusi — mbofyo moja hufungua mfano katika kihariri cha wavuti, na leseni ya Creative Commons inaruhusu walimu wengi kuzitumia bila ada za leseni). Istilahi hii ilitapakana na Valerie Lockhart mwaka 2023 baada ya kugundua kuwa walimu na wanafunzi wangeweza kujenga mifano kwa maktaba ya JavaScript ya p5.js kwa mafunzo madogo au bila mafunzo yoyote.

Mradi huo pia huchapisha Schema ya JSON kwa metadata ya MicroSim ili zana za AI ziweze kuzalisha vifafanuzi vinavyotafutika, huku rejista ya MicroSim yenye vipengele ikiwa njiani. Karatasi ya utafiti inayoeleza mfumo — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — ipo arXiv ([2511.19864](https://arxiv.org/abs/2511.19864)). Mifano ya mifano ni pamoja na Bouncing Ball, Projectile Motion, String Harmonics, Conway's Game of Life, Euler's Formula, na chati ya mapato ya soko la hisa, kila moja ikiendesha moja kwa moja kwenye tovuti.

## Ni kwa nani

Wabunua wa mafunzo na wabunua wa maendeleo ya kitaaluma ambao wanataka kujenga au kudumisha kitabu cha kozi, hasa katika elimu ya juu na mafunzo ya kitaalamu, pamoja na watengenezaji wa maendeleo ya wataalam na mtu yeyote anayetumia AI ya kizalishaji kuandika maudhui ya kielimu. Inafaa kwa waelimishaji ambao wanajisikia huru na mtiririko wa kazi wa Markdown-na-Git (au wanaotaka kuujifunza) na ambao wanataka AI isimamia mifumo ya tovuti — utafutaji, usogezaji, mchoro wa dhana — ili waweze kuzingatia mbinu za kufundisha.

## Vidokezo na mambo ya kuzingatia

Huu ni mwongozo wa mtaalamu na mnyororo wa zana, sio somo lililokaguliwa na wataalam — unatoa mtiririko wa kazi na mantiki yake ya kielimu ("vitabu mahiri huwaongoza wanafunzi kupitia dhana katika safari yao ya maarifa") badala ya ushahidi wa matokeo ya kujifunza. Karatasi ya utafiti ya MicroSims ni kitu kinachokaribia zaidi ushahidi wa kihisabati, na imejichapisha yenyewe kwenye arXiv. Miundo yote mawili ni ya chanzo wazi (hifadhi ya intelligent-textbooks inaripoti leseni ya MIT na nyota 38; MicroSims inaripoti leseni ya Creative Commons na nyota 13) na hudumuliwa kwa bidii. Michoro ya dhana na muundo wa faharasa-ya-kwanza ni ya manufaa kweli kwa upatikani, lakini mwongozo unadhani mtiririko wa kazi wa uandishi wa kiufundi kiasi — MkDocs, Git, na zana za AI ya kizalishaji — ambayo inaweza kuwa kizuizi kwa baadhi ya wataalam. Kwa wakati wa kuingiza, rejista ya MicroSims bado ipo njiani tu, hivyo kupata mfano mahususi uliopo kunategemea utafutaji na usogezaji wa tovuti yenyewe.

## Dhana Zilizounganishwa

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
