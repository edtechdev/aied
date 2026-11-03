---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Open-source vydanie MAIC: multiagentná trieda, ktorá z témy alebo dokumentu urobí slajdy, kvízy, interaktívne simulácie a projektové aktivity, ktoré odučia učitelia AI a spolužiaci AI."
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
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

**OpenMAIC** je open-source vydanie multiagentnej triedy MAIC opísanej v [[intelligent-tutoring|štúdii MAIC]]: opíšte tému alebo priložte vlastné materiály a ono vygeneruje celú hodinu — slajdy, kvízy, interaktívne HTML simulácie a projektové aktivity — a potom ju odučí cez učiteľov AI a spolužiakov AI, ktorí hovoria, kreslia na tabuľu a zapájajú sa do diskusie. Je to kód za triedou, ktorú možno spustiť, nielen o nej čítať.

## Čo s tým môžete robiť

Generovanie jedným klikom vytvorí hodinu za minúty z promptu alebo nahraného dokumentu, zvuku či videa. Multiagentná vrstva pridáva triednu diskusiu, do ktorej sa študent môže zapojiť alebo byť vyzvaný, debaty pri okrúhlom stole medzi personami s ilustráciami na tabuli a voľné otázky a odpovede, kde učiteľ odpovedá slajdmi alebo diagramami. Sedenia podporujú sady slajdov, kvízy, interaktívne simulácie a PBL a exportujú sa ako upraviteľné `.pptx` alebo interaktívne `.html`. Verzia 1.0.0 (august 2026) pridala pracovnú lavicu agenta: priestor orientovaný na chat, ktorý plánuje a reviduje celé kurzy, trvalé sedenia na serveri, ktoré sa dajú zrušiť, obnoviť alebo usmerniť, a 24 vstavaných zručností pokrývajúcich slajdy, kvízy, interaktívne prvky, obrázky, video a hlasy. Balík `SKILL.md` umožňuje agentnému harnessu stavať triedy z aplikácie na správy.

## Pre koho je to určené

Pre vyučujúcich a kurzové tímy, ktoré chcú vygenerované materiály, ktoré ešte vedia upraviť, pre inštrukčných dizajnérov prototypujúcich multiagentné aktivity a pre vývojárov, ktorí potrebujú samohostovateľnú triedu namiesto hostovaného produktu. Školy ho môžu nasadiť na Verceli alebo s Dockerom a projekt dodáva hostovanú ukážku na open.maic.chat.

## Poznámky

Licencia MIT, s používateľskou príručkou v angličtine a čínštine a aktívnou komunitou na Discorde a Feishu. Je nezávislý od modelu: dodáte aspoň jeden kľúč poskytovateľa LLM a voliteľné lokálne komponenty (Lemonade pre lokálne modely, FunASR pre rozpoznávanie reči) vám umožnia spustiť väčšiu časť zásobníka offline — takže „zadarmo“ opisuje softvér, nie účet za inferenciu. Článok za ním vyšiel v *Journal of Computer Science and Technology* (2026, DOI 10.1007/s11390-025-6000-0) a repozitár mal do septembra 2026 viac ako 38 000 hviezd.

## Prepojené pojmy

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]
