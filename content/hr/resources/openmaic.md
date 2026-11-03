---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Izdanje otvorenog koda sustava MAIC: razred s više agenata koji temu ili dokument pretvara u slajdove, kvizove, interaktivne simulacije i projektne aktivnosti koje vode AI nastavnici i kolege."
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
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

**OpenMAIC** je izdanje otvorenog koda razreda s više agenata MAIC opisanog u [[intelligent-tutoring|studiji MAIC]]: opišite temu ili priložite vlastite materijale i on generira cijelu lekciju — slajdove, kvizove, interaktivne HTML simulacije i projektne aktivnosti — a zatim je izvodi kroz AI nastavnike i AI kolege koji govore, crtaju na ploči i sudjeluju u raspravi. To je kod razreda koji se može pokrenuti, a ne samo čitati o njemu.

## Što možete raditi s tim

Generiranje jednim klikom proizvodi lekciju u nekoliko minuta iz poticaja ili prenesenog dokumenta, zvuka ili videa. Sloj s više agenata dodaje razrednu raspravu kojoj se učenik može pridružiti ili biti pozvan, okrugle rasprave između persona s ilustracijama na ploči i slobodna pitanja i odgovore u kojima nastavnik odgovara slajdovima ili dijagramima. Sesije podržavaju slajdove, kvizove, interaktivne simulacije i učenje temeljeno na projektima, a izvoze se kao `.pptx` koji se može uređivati ili interaktivni `.html`. Verzija 1.0.0 (kolovoz 2026.) dodala je radnu klupu za agente: radni prostor koji počinje razgovorom i planira te revidira cijele kolegije, trajne sesije na poslužitelju koje možete prekinuti, nastaviti ili usmjeriti, i 24 ugrađene vještine za slajdove, kvizove, interaktivne sadržaje, slike, video i glasove. Paket `SKILL.md` omogućuje agentskom okviru da gradi razrede iz aplikacije za razmjenu poruka.

## Za koga je

Nastavnici i timovi za kolegije koji žele generirane materijale koje i dalje mogu uređivati, dizajnere nastave koji izrađuju prototipe aktivnosti s više agenata i razvijatelji kojima treba razred koji mogu sami hostati, a ne hostani proizvod. Škole ga mogu postaviti na Vercelu ili s Dockerom, a projekt isporučuje hostanu demonstraciju na open.maic.chat.

## Napomene

Licencirano MIT, s korisničkim vodičem na engleskom i kineskom i aktivnom zajednicom na Discordu i Feishuu. Neovisan je o modelu: osiguravate barem jedan ključ davatelja LLM-a, a neobavezni lokalni dijelovi (Lemonade za lokalne modele, FunASR za prepoznavanje govora) omogućuju da se više sustava pokreće izvan mreže — pa „besplatno“ opisuje softver, a ne račun za inferenciju. Rad iza njega objavljen je u *Journal of Computer Science and Technology* (2026., DOI 10.1007/s11390-025-6000-0), a repozitorij je do rujna 2026. imao više od 38.000 zvjezdica.

## Povezani pojmovi

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]
