---
title: "Készségek igazi mérnököknek"
created: "2026-09-24T05:57:40-04:00"
type: resource
summary: "Matt Pocock nyílt forráskódú gyűjteménye kicsi, összeépíthető ügynökkészségekből, köztük egy több munkameneten át tartó tanítókészséggel, egy kíméletlen kérdezőkészséggel és útmutatással arról, hogyan írjunk ügynök által követhető dokumentumokat."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A **Készségek igazi mérnököknek** Matt Pocock közzétett ügynökkészség-könyvtára: kicsi, összeépíthető utasításfájlok, amelyek Claude Code-ba, Codexbe vagy más ügynökbe települnek, és úgy íródtak, hogy adaptálják őket, ne egészben vegyék át. A gyűjtemény nagy része szoftveres munkát szolgál, de több készség oktatási eszköz, amelyet tanításra és kérdezésre, nem kódra építettek.

A legvilágosabb példa a `teach`, amely több munkameneten át fut, és a munkakönyvtárat állapottartó tanítási munkaterületként kezeli, így a tanuló előrehaladása és nyitott kérdései megmaradnak a beszélgetések között, ahelyett hogy minden alkalommal újraindulnának. A `grill-me` és a mögötte álló `grilling` primitív kíméletlenül kérdezi a felhasználót egy tervről, amíg minden ág meg nem oldódik – ez a [[socratic-method|szókratészi kérdezés]] újrafelhasználható eljárásként, nem beszélgetési hangulatként. A `wait-what` abban a pillanatban reagál, amikor egy üzenet nem ér célba, újrafogalmazva azt köznyelven, a hiányzó kontextussal együtt – ezt a lépést minden oktató felismeri, aki látta, hogy egy magyarázat elsőre nem talált. A `writing-for-agents` arról szól, hogyan írjunk olyan dokumentumokat, amelyeket egy [[prompt-engineering|ügynök]] követni tud, ami ma a [[pedagogical-agent|MI]]-kurzusanyaghoz írt utasítások gyakorlati formája. A `to-questionnaire` egy döntést kérdőívvé alakít annak számára, aki meg tudja válaszolni, a `handoff` egy beszélgetést sűrít dokumentummá, amelyből egy másik ügynök folytatni tud, a `wizard` pedig interaktív végigvezetést generál olyan lépésekhez, amelyeket csak ember tud elvégezni.

## Amit a bevezetés előtt tudni kell

Minden [[open-source|nyílt forráskódú]] MIT alatt, és szabadon elvihető kiindulópontként helyi [[ai-literacy|MI-írástudáshoz]] vagy [[self-directed-learning|önálló tanuláshoz]]. Az átvétel nagy és gyorsan mozog: körülbelül 270 000 csillag és 23 000 fork a 2026. szeptemberi ellenőrzéskor, a legutóbbi commit 2026. szeptember 18-án. A fenntartás a hatókör. A készségek egy [[human-ai-collaboration|mérnöki]] munkakontextust feltételeznek, mérnöki, produktivitási, elavult és folyamatban lévő vödrökbe rendeződnek, így néhány bejegyzés kimondottan befejezetlen vagy visszavont, a README pedig egyben hírlevél-feliratkozásként is szolgál. A tanító és kérdező készségeket kezelje átvihető részként, és számítson rá, hogy bármelyiket újra kell írnia, mielőtt diákok elé teszi.

## Kapcsolódó fogalmak
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
