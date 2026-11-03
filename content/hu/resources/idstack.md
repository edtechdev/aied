---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
type: resource
summary: "Nyílt forráskódú, tizenegy Claude Code-készségből álló készlet, amely egy kurzust az oktatástervezési bizonyítékbázis ellenében auditál, és minden ajánlást ellát a bizonyíték szintjével."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

Az **idstack** nyílt forráskódú, tizenegy készségből álló gyűjtemény bizonyítékalapú [[learning-design|oktatástervezéshez]], Claude Code pluginaként terjesztve, egy kísérő Chrome-oldalpaneles bővítménnyel. A készségek nem kurzust írnak, hanem auditálnak egyet: a célokat a felülvizsgált Bloom-taxonómia szerint osztályozzák, ellenőrzik a célok, tevékenységek és értékelések közötti konstruktív illeszkedést, jelzik a kognitív terhelés problémáit, és a WCAG 2.1 AA és a mindenki számára tervezett tanulás (Universal Design for Learning) ellenében vizsgálják az akadálymentességet. Minden ajánlás bizonyítékszintet visel, a metaanalízisek és randomizált vizsgálatok T1-es szintjétől a szakértői vélemény T5-ös szintjéig. A projekt szerint hivatkozásai 108 lektorált tanulmányra támaszkodnak tizenegy kutatási területen; ez a szám a projekt saját állítása, bibliográfiája pedig Markdownban jelenik meg, hogy a bíráló ellenőrizhesse.

A kurzusok Canvas API-kapcsolaton, IMS Common Cartridge-fájlon, SCORM-csomagon, egy szerzőeszközből exportált PDF-en vagy beillesztett dokumentumokon keresztül érkeznek. Egy közös projektmanifeszt munkameneteken át megjegyzi a kurzust, egy folyamatkészség pedig láncba fűzi a tervezési szakaszokat, kihagyva a már elkészült munkát. A bírálatok a nyolc Quality Matters-szabvány és a Community of Inquiry keretrendszer ellenében számolnak be, szétválasztva a tanítási, társas és kognitív jelenlétet, majd súlyosság szerint rangsorolják az ajánlásokat.

## Amit a bevezetés előtt tudni kell

A plugin telepítéséhez Claude Code és bash-héj kell; a PowerShell és a cmd nem tudja futtatni a telepítőszkriptet, a pontszámtendenciákhoz pedig Python 3 ajánlott. A kurzusadat a projektmappában marad az olvasó saját gépén, és csak olyan integráción keresztül hagyja el, amelyet a felhasználó hív meg, például egy Canvas API-hívás. A Chrome-bővítmény élő következtetéséhez az olvasó saját, ingyenes Google AI Studio API-kulcsa kell, bár egy szimulációs mód kulcs nélkül is bemutatja. A projekt 3.5.1.0 verzióban bétának nevezi magát, és figyelmeztet a minor verziók közötti törő változásokra; a savvides GitHub-fiók alatt jelenik meg, nem nevesített szerző alatt.

## Kapcsolódó fogalmak
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
