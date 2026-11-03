---
title: "Skills for Real Engineers"
created: "2026-09-24T05:57:40-04:00"
type: resource
summary: "Matt Pocockova zbirka malih, složenih agentnih vještina otvorenog koda, uključujući vještinu poučavanja kroz više sesija, vještinu nemilosrdnog ispitivanja i smjernice za pisanje dokumenata koje agent može slijediti."
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
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

**Skills for Real Engineers** Matt Pocockov je objavljeni imenik agentnih vještina: male, složive datoteke s uputama koje se instaliraju u Claude Code, Codex ili drugog agenta i napisane su da se prilagode, a ne usvoje cijele. Većina zbirke služi softverskom radu, ali nekoliko su vještina obrazovni instrumenti izgrađeni za poučavanje i ispitivanje, a ne za kod.

Najjasniji je primjer `teach`, koji radi kroz više sesija i radnu mapu tretira kao radni prostor za poučavanje sa stanjem, pa napredak učenika i otvorena pitanja ostaju između razgovora, umjesto da se svaki put resetiraju. `grill-me` i njegova osnovna primitiva `grilling` nemilosrdno intervjuiraju korisnika o planu dok se ne razriješi svaka grana, što je [[socratic-method|sokratsko ispitivanje]] kao postupak koji se može ponovno rabiti, a ne kao razgovorni ugođaj. `wait-what` reagira u trenutku kad poruka ne sleti, ponovno je izlažući običnim jezikom uz kontekst koji nedostaje, potez koji svaki nastavnik prepoznaje iz gledanja kako objašnjenje prvi put promaši. `writing-for-agents` pokriva kako pisati dokumente koje [[prompt-engineering|agent]] može slijediti, što je danas praktični oblik pisanja uputa za [[pedagogical-agent|AI]] materijale kolegija. `to-questionnaire` pretvara odluku u upitnik za onoga tko na njega može odgovoriti, `handoff` sažima razgovor u dokument iz kojeg drugi agent može nastaviti, a `wizard` generira interaktivni vodič za korake koje može izvesti samo osoba.

## Što treba znati prije primjene

Sve je [[open-source|otvorenog koda]] pod MIT licencijom i besplatno kao polazište za lokalnu [[ai-literacy|pismenost o umjetnoj inteligenciji]] ili [[self-directed-learning|samostalno učenje]]. Prihvaćenost je velika i brza: otprilike 270.000 zvjezdica i 23.000 forkova pri provjeri u rujnu 2026., s posljednjim commitom 18. rujna 2026. Napomena se odnosi na opseg. Vještine pretpostavljaju radni kontekst [[human-ai-collaboration|inženjera]], razvrstane su u skupine za inženjering, produktivnost, zastarjelo i u izradi, pa su neki zapisi izričito nedovršeni ili povučeni, a README je ujedno i prijava na newsletter. Vještine poučavanja i ispitivanja tretirajte kao prenosivi dio i očekujte da ćete svaku prepisati prije nego je stavite pred studente.

## Povezani pojmovi
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
